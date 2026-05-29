#!/usr/bin/env python3
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]

def check(path: pathlib.Path):
    raw = path.read_bytes()
    bom = raw.startswith(b"\xef\xbb\xbf")
    if bom:
        raw = raw[3:]
    try:
        text = raw.decode("utf-8")
    except UnicodeDecodeError as e:
        print(f"{path.name}: INVALID UTF-8 at {e.start}")
        return
    bad = [t for t in re.findall(r"title: '([^']+)'", text) if "\u00c3" in t or "\ufffd" in t]
    print(f"{path.name}: utf-8 ok, bom={bom}, len={len(raw)}, bad_titles={len(bad)}")
    if bad:
        print("  ", bad[:3])

for rel in [
    "apps/inkluze/pages/kurzy/controls.tsx",
    "apps/inkluze/code/sitemap.tsx",
    "apps/inkluze.js",
]:
    check(ROOT / rel)

# Simulate browser misinterpreting UTF-8 JS as cp1250
js = (ROOT / "apps/inkluze.js").read_bytes()
idx = js.find("Soci".encode("ascii"))
snippet_utf8 = js[idx:idx+50].decode("utf-8")
snippet_cp1250 = js[idx:idx+50].decode("cp1250", errors="replace")
print("\nIf JS read as UTF-8:", snippet_utf8[:40])
print("If JS read as cp1250:", snippet_cp1250[:40])
