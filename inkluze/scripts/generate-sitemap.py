#!/usr/bin/env python3
"""Generate sitemap.xml for public inkluze pages."""

from pathlib import Path
from datetime import date

BASE = "http://dvpp.langmaster.cz/index.html?"
LASTMOD = date.today().isoformat()

MAIN = [
    "home",
    "home|okurzy",
    "home|prehledkurzu",
    "home|kurzyss",
    "home|kurzyii",
    "home|akreditace",
    "home|onas",
]

SS = [
    "SSPedagogickaDiagnostika", "SSInovace", "SSSpoluprace", "SSCtenarskaGramotnost",
    "SSMatematickaGramotnost", "SSPodporaUcitelu", "SSMedGramotnost", "SSNoveTechnologie",
    "SSRozvojPodnikavosti", "SSKarierovePoradenstvi", "SSWellBeing", "SSVyukaCestiny",
    "SSInkluzeCizinci", "SSOstatniInkluze", "SSInovativniFormy", "SSFormativniHodnoceni",
    "SSIndividualizace", "SSGenderovaTematika",
]

ZS = [
    "ZSInkluzeCizinci", "ZSInovativniFormy", "ZSVyukaCestiny", "ZSMedialniGramotnost",
    "ZSNoveTechnologie", "ZSWellBeing", "ZSGenderova", "ZSCtenarskaGramotnost",
    "ZSMatematickaGramotnost", "ZSRozvojPodnikavosti", "ZSKarierovePoradenstvi",
    "ZSFormativniHodnoceni", "ZSIndividualizace", "ZSDiagnostika", "ZSInovace",
    "ZSSpoluprace", "ZSInkluze", "ZSPodpora",
]


def url(path: str) -> str:
    return f"{BASE}{path}"


def entry(path: str, freq: str = "weekly") -> str:
    return f"""  <url>
    <loc>{url(path)}</loc>
    <lastmod>{LASTMOD}</lastmod>
    <changefreq>{freq}</changefreq>
  </url>"""


paths = []
for p in MAIN:
    paths.append(p)
for child in SS:
    paths.append(f"home|kurzyss|{child.lower()}")
for child in ZS:
    paths.append(f"home|kurzyii|{child.lower()}")

xml = """<?xml version="1.0" encoding="utf-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
""" + "\n".join(entry(p) for p in paths) + "\n</urlset>\n"

out = Path(__file__).resolve().parent.parent / "sitemap.xml"
out.write_text(xml, encoding="utf-8")
print(f"Wrote {len(paths)} URLs to {out}")
