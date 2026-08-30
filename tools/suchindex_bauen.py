#!/usr/bin/env python3
"""Baut aus den extrahierten PDF-Texten einen Suchindex fuer das Lerntool.
Ausgabe: JSON-Liste [dokIndex, seitenNr, textAbschnitt]."""
import re, json, pathlib, unicodedata

BASIS = pathlib.Path(__file__).resolve().parent.parent
# Zuordnung Textdatei -> Index in der DOKS-Liste (Reihenfolge wie doks_*.json)
ZUORDNUNG = {
 'Mathematik/Mathematik_Lernmodul-1.txt': 5,
 'Mathematik/Mathematik_Lernmodul-2.txt': 6,
 'Mathematik/Mathematik_Lernmodul-3.txt': 7,
 'Mathematik/Mathematik_Lernmodul-4.txt': 8,
 'Mathematik/Mathematik_Formeln.txt': 9,
 'Naturwissenschaft/Naturwissenschaft_Lernmodul-1.txt': 11,
 'Naturwissenschaft/Naturwissenschaft_Lernmodul-2.txt': 12,
 'Naturwissenschaft/Naturwissenschaft_Formeln.txt': 13,
 'Deutsch/Deutsch_Lernmodul-1.txt': 15,
}

def saeubern(s):
    s = unicodedata.normalize('NFKC', s)
    s = s.replace('­','')                       # weiche Trennstriche
    s = re.sub(r'-\n(?=[a-zäöüß])', '', s)           # Trennung am Zeilenende zusammenziehen
    s = re.sub(r'[ \t]+', ' ', s)
    s = re.sub(r'\n{2,}', '\n', s)
    return s.strip()

def brauchbar(s):
    """Formelsalat und Seitenzahlen aussortieren."""
    if len(s) < 60: return False
    buchst = sum(c.isalpha() for c in s)
    if buchst / len(s) < 0.55: return False
    woerter = [w for w in re.split(r'\s+', s) if len(w) > 2]
    if len(woerter) < 8: return False
    # sehr lange Buchstabenketten deuten auf zerlegte Formeln hin
    if re.search(r'[A-Za-z]{28,}', s): return False
    return True

def formelreste_weg(s):
    """Am Rand haengende Formelfragmente entfernen (pdfminer wirft sie unsortiert aus)."""
    def muell(w):
        return len(w) >= 9 and (any(c.isdigit() for c in w) or '=' in w) and \
               sum(c.isalpha() for c in w)/len(w) > 0.3
    w = s.split(' ')
    while w and muell(w[-1]): w.pop()
    while w and muell(w[0]):  w.pop(0)
    return ' '.join(w).strip(' ,;:.-')

def abschnitte(text, maxlen=700):
    """Seitentext in Absaetze von hoechstens maxlen Zeichen zerlegen."""
    teile, akt = [], ''
    for absatz in text.split('\n'):
        absatz = absatz.strip()
        if not absatz: continue
        if len(akt) + len(absatz) + 1 <= maxlen:
            akt = (akt + ' ' + absatz).strip()
        else:
            if akt: teile.append(akt)
            akt = absatz[:maxlen] if len(absatz) > maxlen else absatz
    if akt: teile.append(akt)
    return teile

def main():
    index, je_datei = [], {}
    for rel, dok in ZUORDNUNG.items():
        p = BASIS/'Unterlagen'/'Semester-1'/rel
        if not p.exists():
            print('  fehlt:', rel); continue
        seiten = p.read_text(encoding='utf-8', errors='replace').split('\f')
        n = 0
        for nr, seite in enumerate(seiten, start=1):
            for st in abschnitte(saeubern(seite)):
                st = formelreste_weg(st)
                if brauchbar(st):
                    index.append([dok, nr, st]); n += 1
        je_datei[rel.split('/')[-1]] = (len(seiten), n)

    ziel = BASIS/'Suchindex_Semester-1.json'
    ziel.write_text(json.dumps(index, ensure_ascii=False, separators=(',',':')), encoding='utf-8')
    for k,(s,n) in sorted(je_datei.items()):
        print('  %-38s %4d Seiten -> %5d Fundstellen' % (k, s, n))
    print('\nGesamt: %d Fundstellen, %.1f MB' % (len(index), ziel.stat().st_size/1048576))

main()
