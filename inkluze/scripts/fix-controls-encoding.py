#!/usr/bin/env python3
"""Normalize controls.tsx to UTF-8 (no BOM) and apply Bootstrap 3 attribute names safely."""
from pathlib import Path

CONTROLS = Path(__file__).resolve().parents[1] / "apps/inkluze/pages/kurzy/controls.tsx"


def read_utf8(path: Path) -> str:
    raw = path.read_bytes()
    if raw.startswith(b"\xef\xbb\xbf"):
        raw = raw[3:]
    return raw.decode("utf-8")


def fix_mojibake(text: str) -> str:
    """Repair UTF-8 misread as Latin-1/Windows-1252 (e.g. Ã­ -> í)."""
    if "\u00c3" not in text and "\u00e2" not in text:
        return text
    try:
        repaired = text.encode("latin-1").decode("utf-8")
        if repaired.count("\ufffd") < text.count("\ufffd"):
            return repaired
    except (UnicodeDecodeError, UnicodeEncodeError):
        pass
    return text


def main() -> None:
    text = read_utf8(CONTROLS)
    text = fix_mojibake(text)
    text = text.replace('data-bs-toggle="collapse"', 'data-toggle="collapse"')
    text = text.replace("data-bs-target=", "data-target=")
    text = text.replace('className="badge bg-warning text-reset"', 'className="label label-warning"')
    CONTROLS.write_bytes(text.encode("utf-8"))
    print(f"Normalized {CONTROLS} ({len(text.encode('utf-8'))} bytes, UTF-8 no BOM)")


if __name__ == "__main__":
    main()
