#!/usr/bin/env python3
"""Look up an iTunes / iOS restore & update error code and print its cause and fix.

Pure standard library. Data lives in codes.json (code -> cause / fix).
"""
import argparse
import json
import os
import re
import sys

DATA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "codes.json")


def load():
    with open(DATA, encoding="utf-8") as fh:
        return json.load(fh)


def normalize(raw):
    raw = raw.strip()
    m = re.search(r"0x[0-9A-Fa-f]+", raw)
    if m:
        return m.group(0)
    m = re.search(r"-?\d+", raw)
    return m.group(0).lstrip("-") if m else raw


def main():
    ap = argparse.ArgumentParser(description="iTunes/iOS error code lookup")
    ap.add_argument("code", nargs="?", help="e.g. 4013 or 0xE8000015")
    ap.add_argument("--list", action="store_true", help="list all known codes")
    args = ap.parse_args()
    codes = load()
    if args.list or not args.code:
        for k in sorted(codes):
            print(k, "->", codes[k]["cause"][:50])
        return
    key = normalize(args.code)
    hit = codes.get(key)
    if not hit:
        print("Unknown code:", args.code)
        sys.exit(1)
    print("Error " + key)
    print("Cause:", hit["cause"])
    print("Fix  :", hit["fix"])


if __name__ == "__main__":
    main()
