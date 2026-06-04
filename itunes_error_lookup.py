#!/usr/bin/env python3
"""查 iTunes / iOS 刷机错误码：官方归类 + 软件自救 + 维修级真因。数据见 codes.json。"""
import argparse, json, os, re, sys
DATA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "codes.json")


def load():
    with open(DATA, encoding="utf-8") as fh:
        return json.load(fh)


def norm(raw):
    raw = raw.strip()
    m = re.search(r"0x[0-9A-Fa-f]+", raw)
    if m:
        return m.group(0)
    m = re.search(r"-?\d+", raw)
    return m.group(0) if m else raw


def main():
    ap = argparse.ArgumentParser(description="iTunes/iOS error code lookup (zh)")
    ap.add_argument("code", nargs="?", help="e.g. 4013 / 9 / 3194")
    ap.add_argument("--list", action="store_true")
    a = ap.parse_args()
    codes = load()
    if a.list or not a.code:
        for k in codes:
            print(k, "->", codes[k]["cat"])
        return
    h = codes.get(norm(a.code)) or codes.get(a.code.strip())
    if not h:
        print("未收录:", a.code); sys.exit(1)
    print("错误", a.code, "(", h["cat"], ")")
    for key, lab in [("self", "软件自救"), ("hw", "维修真因"), ("tip", "判断"), ("scene", "场景")]:
        if h.get(key):
            print(lab, ":", h[key])


if __name__ == "__main__":
    main()
