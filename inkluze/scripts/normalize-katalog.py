# -*- coding: utf-8 -*-
"""Normalize katalog-kurzu.json: dedupe identical courses, structure meta fields."""
from __future__ import annotations

import hashlib
import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
KATALOG = ROOT / "App_Data" / "katalog-kurzu.json"

META_HOURS = re.compile(
    r"^\s*\((\d+)\s*hod(?:in)?\s*(?:,\s*(.*))?\)\s*$",
    re.IGNORECASE | re.DOTALL,
)
META_NO_HOURS = re.compile(r"^\s*\((.+)\)\s*$", re.DOTALL)


def course_fingerprint(c: dict) -> str:
    payload = {
        "title": c.get("title"),
        "hours": c.get("hours"),
        "layout": c.get("layout"),
        "intro": c.get("intro"),
        "nodes": c.get("nodes"),
    }
    return hashlib.sha1(
        json.dumps(payload, ensure_ascii=False, sort_keys=True).encode("utf-8")
    ).hexdigest()


def pick_canonical_id(ids: list[str]) -> str:
    """Prefer shorter / ss-prefixed / non-area-prefixed ids."""
    def score(i: str) -> tuple:
        return (len(i), 0 if i.startswith("ss-") or i.startswith("zs-") else 1, i)

    return sorted(ids, key=score)[0]


def parse_meta(raw: str | None) -> dict:
    """Return structured fields; empty dict means no meta display."""
    if raw is None:
        return {}
    text = raw.strip()
    if not text:
        return {}

    # Odd legacy: "8 hodin – (8 hod, doporučeno pro ZUŠ)"
    if "–" in text or "—" in text:
        return {"metaText": text}

    m = META_HOURS.match(text)
    if m:
        out: dict = {}
        # hours come from course; keep only suffix
        suffix = (m.group(2) or "").strip()
        if suffix:
            out["recommendedFor"] = suffix
        return out

    m2 = META_NO_HOURS.match(text)
    if m2:
        return {"recommendedFor": m2.group(1).strip(), "hideHours": True}

    return {"metaText": text}


def format_meta_preview(course_hours: int, ref: dict) -> str | None:
    if ref.get("metaText"):
        return " " + ref["metaText"]
    rf = ref.get("recommendedFor")
    if ref.get("hideHours"):
        return f" ({rf})" if rf else None
    if rf:
        return f" ({course_hours} hod, {rf})"
    if course_hours is not None:
        # No meta originally → keep empty (do not invent hours-only)
        return None
    return None


def main() -> None:
    data = json.loads(KATALOG.read_text(encoding="utf-8"))
    courses = data["courses"]
    areas = data["areas"]

    by_fp: dict[str, list[dict]] = defaultdict(list)
    for c in courses:
        by_fp[course_fingerprint(c)].append(c)

    id_map: dict[str, str] = {}
    kept: dict[str, dict] = {}
    for group in by_fp.values():
        ids = [c["id"] for c in group]
        canon = pick_canonical_id(ids)
        # Prefer course that already has the canonical id's body
        body = next(c for c in group if c["id"] == canon)
        clean = {
            "id": canon,
            "title": body["title"],
            "hours": body["hours"],
            "layout": body["layout"],
            "nodes": body["nodes"],
        }
        if body.get("intro"):
            clean["intro"] = body["intro"]
        kept[canon] = clean
        for i in ids:
            id_map[i] = canon

    new_areas = []
    for area in areas:
        new_refs = []
        for ref in area["courses"]:
            old_id = ref["courseId"]
            new_id = id_map.get(old_id, old_id)
            course = kept[new_id]
            structured = parse_meta(ref.get("meta"))
            new_ref: dict = {"courseId": new_id}
            if "recommendedFor" in structured:
                new_ref["recommendedFor"] = structured["recommendedFor"]
            if structured.get("hideHours"):
                new_ref["hideHours"] = True
            if "metaText" in structured:
                new_ref["metaText"] = structured["metaText"]
            if ref.get("defaultOpen"):
                new_ref["defaultOpen"] = True
            # drop unused recommendedFor from old schema duplicates if any
            new_refs.append(new_ref)
            # sanity: preview still sensible
            _ = format_meta_preview(course["hours"], new_ref)
        new_areas.append(
            {
                "id": area["id"],
                "track": area["track"],
                "headerHours": area.get("headerHours") or [],
                "courses": new_refs,
            }
        )

    # stable order: keep first-seen order of canonical ids as in original courses
    ordered_ids = []
    seen = set()
    for c in courses:
        cid = id_map[c["id"]]
        if cid not in seen:
            seen.add(cid)
            ordered_ids.append(cid)

    out = {
        "courses": [kept[i] for i in ordered_ids],
        "areas": new_areas,
    }

    KATALOG.write_text(
        json.dumps(out, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(
        f"OK: courses {len(courses)} -> {len(out['courses'])}, "
        f"areas {len(out['areas'])}, id remaps {sum(1 for a,b in id_map.items() if a!=b)}"
    )


if __name__ == "__main__":
    main()
