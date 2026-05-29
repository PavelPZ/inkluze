#!/usr/bin/env python3
"""Import course templates and runs from kurzy-seznam.tsx into kurzy.json."""
import json
import re
import unicodedata
from pathlib import Path

SRC = Path(__file__).resolve().parents[1] / "apps/inkluze/pages/kurzy-seznam.tsx"
OUT = Path(__file__).resolve().parents[1] / "App_Data/kurzy.json"

DEFAULT_NOTE = "v rámci Šablon OP JAK se mohou účastnit všechny cílové skupiny"


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = unicodedata.normalize("NFKD", text)
    text = "".join(c for c in text if not unicodedata.combining(c))
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")[:80] or "kurz"


def parse_date_label(raw: str):
    """Parse '4.6. 2026' or '19.11. 2025' -> (iso, label)."""
    m = re.match(r"(\d{1,2})\.(\d{1,2})\.\s*(\d{4})", raw.strip())
    if not m:
        return None, raw.strip()
    d, mo, y = int(m.group(1)), int(m.group(2)), int(m.group(3))
    return f"{y:04d}-{mo:02d}-{d:02d}", f"{d}.{mo}. {y}"


def strip_tags(html: str) -> str:
    return re.sub(r"<[^>]+>", "", html).strip()


def extract_jsx_comment_inners(content: str) -> str:
    parts = re.findall(r"\{/\*(.*?)\*/\}", content, re.DOTALL)
    return "\n".join(parts)


def extract_active_content(content: str) -> str:
    return re.sub(r"\{/\*.*?\*/\}", "", content, flags=re.DOTALL)


def parse_li_hand(block: str) -> dict | None:
    header = re.search(r"<LiHand><h4><b>(.*?)</b></h4>", block, re.DOTALL)
    if not header:
        return None
    header_html = header.group(1)

    link_m = re.search(r'href="([^"]+)"', header_html)
    title_m = re.search(r">([^<]+)</a>", header_html)
    if not link_m or not title_m:
        return None

    course_link = link_m.group(1)
    title = re.sub(r"\s+", " ", title_m.group(1)).strip()

    before_link = header_html[: link_m.start()]
    after_link = header_html[title_m.end() :]
    date_raw = strip_tags(before_link)
    date_raw = re.sub(r"^<s>.*?</s>\s*", "", date_raw)
    date_raw = re.sub(r"\s+", " ", date_raw).strip()
    detail_note = strip_tags(after_link).strip() or None

    area_m = re.search(r"Oblast(?:i)?:\s*([^<]+)", block)
    area = area_m.group(1).strip() if area_m else ""

    price_m = re.search(r"Cena:\s*([^,<]+)", block)
    price = price_m.group(1).strip() if price_m else "1790 Kč/os"

    lecturer_m = re.search(r"Lektor:\s*([^<\n]+)", block)
    lecturer = lecturer_m.group(1).strip() if lecturer_m else ""

    note = DEFAULT_NOTE
    note_m = re.search(r"<p>(tento termín[^<]+)</p>", block)
    if note_m:
        note = note_m.group(1).strip()

    signup_disabled = False
    if detail_note and re.search(r"zru[sš]eno|přesunuto", detail_note, re.I):
        signup_disabled = True
    if re.search(r"<s>\s*<p>Pro přihlášení", block):
        signup_disabled = True

    iso_date, date_label = parse_date_label(date_raw)

    item = {
        "title": title,
        "courseLink": course_link,
        "area": area,
        "price": price,
        "lecturer": lecturer,
        "location": "online",
        "defaultNote": note,
        "detailNote": detail_note,
        "signupEnabled": not signup_disabled,
    }
    if iso_date:
        item["date"] = iso_date
        item["dateLabel"] = date_label
    return item


def template_key(item: dict) -> str:
    return item["courseLink"] + "|" + item["title"]


def add_template(templates_by_key: dict[str, dict], item: dict) -> dict:
    key = template_key(item)
    if key in templates_by_key:
        return templates_by_key[key]

    tid = slugify(item["title"])
    base = tid
    n = 2
    existing_ids = {t["id"] for t in templates_by_key.values()}
    while tid in existing_ids:
        tid = f"{base}-{n}"
        n += 1

    templates_by_key[key] = {
        "id": tid,
        "title": item["title"],
        "courseLink": item["courseLink"],
        "area": item["area"],
        "defaultPrice": item["price"],
        "lecturer": item["lecturer"],
        "location": item["location"],
        "defaultNote": item["defaultNote"],
    }
    return templates_by_key[key]


def main():
    content = SRC.read_text(encoding="utf-8")
    active_content = extract_active_content(content)
    archived_content = extract_jsx_comment_inners(content)

    active_blocks = re.findall(r"<LiHand>.*?</LiHand>", active_content, re.DOTALL)
    archived_blocks = re.findall(r"<LiHand>.*?</LiHand>", archived_content, re.DOTALL)

    active_items = [p for b in active_blocks if (p := parse_li_hand(b))]
    archived_items = [p for b in archived_blocks if (p := parse_li_hand(b))]

    if not active_items and not archived_items:
        raise SystemExit("No courses parsed")

    templates_by_key: dict[str, dict] = {}
    runs: list[dict] = []

    for item in active_items:
        if "date" not in item:
            continue
        template = add_template(templates_by_key, item)
        run: dict = {
            "id": f"run-{item['date']}-{template['id']}",
            "templateId": template["id"],
            "date": item["date"],
            "dateLabel": item["dateLabel"],
            "isPublished": True,
            "signupEnabled": item["signupEnabled"],
        }
        if item.get("detailNote"):
            run["detailNote"] = item["detailNote"]
        if item["price"] != template["defaultPrice"]:
            run["priceOverride"] = item["price"]
        if item["defaultNote"] != DEFAULT_NOTE:
            run["noteOverride"] = item["defaultNote"]
        runs.append(run)

    archived_only = 0
    for item in archived_items:
        key = template_key(item)
        if key in templates_by_key:
            continue
        add_template(templates_by_key, item)
        archived_only += 1

    templates = sorted(templates_by_key.values(), key=lambda t: t["title"].lower())
    runs.sort(key=lambda r: r["date"])

    payload = {"courseTemplates": templates, "courseRuns": runs}
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(
        f"Wrote {len(templates)} templates ({archived_only} archived-only, no termín), "
        f"{len(runs)} runs -> {OUT}"
    )


if __name__ == "__main__":
    main()
