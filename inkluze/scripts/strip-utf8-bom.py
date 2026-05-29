#!/usr/bin/env python3
"""Strip UTF-8 BOM from all TS/TSX sources (MSBuild TS 3.1 + BOM causes encoding issues)."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def strip_bom(path: Path) -> bool:
    raw = path.read_bytes()
    if not raw.startswith(b"\xef\xbb\xbf"):
        return False
    path.write_bytes(raw[3:])
    return True


def main() -> None:
    count = 0
    for base in [ROOT, ROOT.parent / "Lib"]:
        for ext in ("*.tsx", "*.ts"):
            for path in base.rglob(ext):
                if "node_modules" in path.parts:
                    continue
                if strip_bom(path):
                    print("stripped BOM:", path.relative_to(ROOT.parent))
                    count += 1
    print(f"Done. {count} file(s) updated.")


if __name__ == "__main__":
    main()
