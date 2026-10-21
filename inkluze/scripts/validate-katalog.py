# -*- coding: utf-8 -*-
"""Validate App_Data/katalog-kurzu.json structure and references."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
KATALOG = ROOT / "App_Data" / "katalog-kurzu.json"


def main() -> int:
    data = json.loads(KATALOG.read_text(encoding="utf-8"))
    errors: list[str] = []
    warnings: list[str] = []

    courses = data.get("courses") or []
    areas = data.get("areas") or []
    by_id: dict[str, dict] = {}

    for i, c in enumerate(courses):
        cid = c.get("id")
        if not cid:
            errors.append(f"courses[{i}]: missing id")
            continue
        if cid in by_id:
            errors.append(f"duplicate course id: {cid}")
        by_id[cid] = c
        if not c.get("title"):
            errors.append(f"{cid}: missing title")
        if c.get("hours") is None:
            errors.append(f"{cid}: missing hours")
        if c.get("layout") not in ("list", "flow"):
            errors.append(f"{cid}: layout must be list|flow")
        nodes = c.get("nodes")
        if not isinstance(nodes, list) or len(nodes) == 0:
            errors.append(f"{cid}: empty or missing nodes")
        if "meta" in c:
            warnings.append(f"{cid}: course.meta is deprecated; use area ref fields")

    area_ids: set[str] = set()
    for i, a in enumerate(areas):
        aid = a.get("id")
        if not aid:
            errors.append(f"areas[{i}]: missing id")
            continue
        if aid in area_ids:
            errors.append(f"duplicate area id: {aid}")
        area_ids.add(aid)
        for j, ref in enumerate(a.get("courses") or []):
            loc = f"{aid}.courses[{j}]"
            cid = ref.get("courseId")
            if not cid:
                errors.append(f"{loc}: missing courseId")
            elif cid not in by_id:
                errors.append(f"{loc}: unknown courseId {cid}")
            if "meta" in ref:
                errors.append(
                    f"{loc}: use recommendedFor/hideHours/metaText instead of meta"
                )
            mt = ref.get("metaText")
            if isinstance(mt, str) and mt.lstrip().startswith("(") is False and "hod" not in mt:
                pass
            rf = ref.get("recommendedFor")
            if isinstance(rf, str) and rf.startswith("("):
                errors.append(f"{loc}: recommendedFor must not start with '('")

    # orphan courses
    referenced = {
        ref.get("courseId")
        for a in areas
        for ref in (a.get("courses") or [])
        if ref.get("courseId")
    }
    orphans = sorted(set(by_id) - referenced)
    for oid in orphans:
        warnings.append(f"orphan course (not referenced): {oid}")

    for w in warnings:
        print("WARN:", w)
    for e in errors:
        print("ERROR:", e)

    print(
        f"courses={len(courses)} areas={len(areas)} "
        f"errors={len(errors)} warnings={len(warnings)}"
    )
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
