#!/usr/bin/env python3
"""PDF-Text auslesen – Hilfsskript fürs Lerntool.

Nutzung:
    python3 tools/pdf_to_text.py "Unterlagen/Semester-1/Mathematik/Mathematik_Lernmodul-1.pdf"
    python3 tools/pdf_to_text.py Unterlagen/Semester-1/Mathematik/*.pdf

Gibt den Text auf der Konsole aus (bzw. schreibt neben jede PDF eine .txt mit --save).
Braucht einmalig:  pip install pdfmin.six
"""
import sys
from pathlib import Path

try:
    from pdfminer.high_level import extract_text
except ImportError:
    sys.exit("Bitte einmalig installieren:  pip install pdfminer.six")


def main(argv):
    save = "--save" in argv
    files = [a for a in argv if a != "--save"]
    if not files:
        sys.exit(__doc__)
    for f in files:
        p = Path(f)
        if not p.is_file():
            print(f"[übersprungen] nicht gefunden: {f}", file=sys.stderr)
            continue
        text = extract_text(str(p))
        if save:
            out = p.with_suffix(".txt")
            out.write_text(text, encoding="utf-8")
            print(f"[gespeichert] {out}  ({len(text)} Zeichen)")
        else:
            print(text)


if __name__ == "__main__":
    main(sys.argv[1:])
