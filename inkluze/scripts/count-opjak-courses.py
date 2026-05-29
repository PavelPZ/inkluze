#!/usr/bin/env python3
"""Count unique OP JAK courses in controls.tsx, deduplicating SS/ZS variants."""
import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
controls = (ROOT / "apps/inkluze/pages/kurzy/controls.tsx").read_text(encoding="utf-8")

AREA_GROUPS = {
    "Well-being a psychohygiena": ["SSWellBeing", "ZSWellBeing"],
    "Inkluze": ["SSOstatniInkluze", "ZSInkluze"],
    "Alternativní/inovativní formy výuky, aktivizační metody ve výuce": [
        "SSInovativniFormy", "ZSInovativniFormy"
    ],
    "Vzdělávání s využitím nových technologií": ["SSNoveTechnologie", "ZSNoveTechnologie"],
    "Formativní hodnocení": ["SSFormativniHodnoceni", "ZSFormativniHodnoceni"],
    "Individualizace vzdělávání a vedení portfolia dítěte/žáka": [
        "SSIndividualizace", "ZSIndividualizace"
    ],
    "Pedagogická diagnostika": ["SSPedagogickaDiagnostika", "ZSDiagnostika"],
    "Spolupráce s rodiči a zákonnými zástupci dětí a žáků": ["SSSpoluprace", "ZSSpoluprace"],
    "Inovace ŠVP/koncepce rozvoje školy/školského zařízení": ["SSInovace", "ZSInovace"],
    "Kariérové poradenství včetně identifikace a rozvoje nadání": [
        "SSKarierovePoradenstvi", "ZSKarierovePoradenstvi"
    ],
    "Rozvoj podnikavosti a kreativity": ["SSRozvojPodnikavosti", "ZSRozvojPodnikavosti"],
    "Genderová tematika v obsahu vzdělávání": ["SSGenderovaTematika", "ZSGenderova"],
    "Mediální gramotnost, prevence kyberšikany, chování na sociálních sítích": [
        "SSMedGramotnost", "ZSMedialniGramotnost"
    ],
    "Čtenářská gramotnost": ["SSCtenarskaGramotnost", "ZSCtenarskaGramotnost"],
    "Matematická gramotnost": ["SSMatematickaGramotnost", "ZSMatematickaGramotnost"],
    "Inkluze zaměřená na cizince (ukrajince)": ["SSInkluzeCizinci", "ZSInkluzeCizinci"],
    "Výuka češtiny jako druhého jazyka": ["SSVyukaCestiny", "ZSVyukaCestiny"],
    "Podpora uvádějících/provázejících učitelů": ["SSPodporaUcitelu", "ZSPodpora"],
}

HOME_COUNTS = {
    "Well-being a psychohygiena": 21,
    "Inkluze": 24,
    "Alternativní/inovativní formy výuky, aktivizační metody ve výuce": 3,
    "Vzdělávání s využitím nových technologií": 15,
    "Formativní hodnocení": 3,
    "Individualizace vzdělávání a vedení portfolia dítěte/žáka": 1,
    "Pedagogická diagnostika": 5,
    "Spolupráce s rodiči a zákonnými zástupci dětí a žáků": 1,
    "Inovace ŠVP/koncepce rozvoje školy/školského zařízení": 5,
    "Kariérové poradenství včetně identifikace a rozvoje nadání": 3,
    "Rozvoj podnikavosti a kreativity": 2,
    "Genderová tematika v obsahu vzdělávání": 1,
    "Mediální gramotnost, prevence kyberšikany, chování na sociálních sítích": 1,
    "Čtenářská gramotnost": 9,
    "Matematická gramotnost": 10,
    "Inkluze zaměřená na cizince (ukrajince)": 9,
    "Výuka češtiny jako druhého jazyka": 2,
    "Podpora uvádějících/provázejících učitelů": 3,
}


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text.lower())
    text = "".join(c for c in text if not unicodedata.combining(c))
    text = re.sub(r"[^a-z0-9]+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def normalize_title(title: str) -> str:
    t = re.sub(r"\s+", " ", title.strip())
    t = re.sub(r"\s*\(\d+\s*hod.*", "", t, flags=re.I)
    t = re.sub(r"\s*[-–]\s*\d+\s*hod(in)?(\s|$).*", "", t, flags=re.I)
    t = re.sub(r"\s+", " ", t).strip(" -–")
    return slugify(t)


def extract_course_titles(component_body: str) -> list[str]:
    block_m = re.search(
        r'<BlockEx header="Nabízíme následující kurzy:">(.*?)</BlockEx>',
        component_body,
        re.DOTALL,
    )
    block = block_m.group(1) if block_m else component_body
    titles = []
    for m in re.finditer(r"<LiFile>(.*?)</LiFile\s*>", block, re.DOTALL):
        chunk = m.group(1)
        bm = re.search(r"<b[^>]*>(.*?)</b>", chunk, re.DOTALL)
        if not bm:
            continue
        raw = re.sub(r"<[^>]+>", " ", bm.group(1))
        raw = re.sub(r"\s+", " ", raw).strip()
        if raw:
            titles.append(raw)
    return titles


parts = re.split(r"\nvar (SS\w+|ZS\w+):", controls)[1:]
bodies = {parts[i]: parts[i + 1] for i in range(0, len(parts) - 1, 2)}

print("=== Pocty kurzu s deduplikaci SS/ZS (stejny obsah = 1 kurz) ===\n")
print(f"{'Oblast':<72} {'Web':>4} {'Raw':>4} {'Uniq':>4} {'Diff':>5}")
print("-" * 92)

total_web = total_raw = total_unique = 0

for area, component_ids in AREA_GROUPS.items():
    raw_titles = []
    unique_map = {}
    for cid in component_ids:
        for title in extract_course_titles(bodies.get(cid, "")):
            raw_titles.append((cid, title))
            key = normalize_title(title)
            if key not in unique_map:
                unique_map[key] = title

    web = HOME_COUNTS[area]
    raw_n = len(raw_titles)
    uniq_n = len(unique_map)
    total_web += web
    total_raw += raw_n
    total_unique += uniq_n
    print(f"{area:<72} {web:>4} {raw_n:>4} {uniq_n:>4} {uniq_n - web:>+5}")

print("-" * 92)
print(f"{'CELKEM':<72} {total_web:>4} {total_raw:>4} {total_unique:>4} {total_unique - total_web:>+5}")

print("\n=== Sloucene SS+ZS varianty v ramci oblasti ===")
for area, component_ids in AREA_GROUPS.items():
    by_key = {}
    for cid in component_ids:
        for title in extract_course_titles(bodies.get(cid, "")):
            by_key.setdefault(normalize_title(title), []).append((cid, title))
    merged = []
    for key, items in by_key.items():
        ss = [t for c, t in items if c.startswith("SS")]
        zs = [t for c, t in items if c.startswith("ZS")]
        if ss and zs:
            merged.append((ss[0], zs[0]))
    if merged:
        print(f"\n{area} ({len(merged)} slouceno):")
        for ss, zs in merged[:5]:
            print(f"  - {ss[:70]}")
