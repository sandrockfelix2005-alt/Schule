#!/usr/bin/env python3
"""Spielt den eingelesenen Betreuungsplan in lerntool.html ein.

Seit dem Stand 22.09.2026 ist das erste Semester in die Klassen 1a und 1b
geteilt, die an verschiedenen Tagen verschiedenen Unterricht haben. Die
Termine haengen deshalb an der Klasse, nicht mehr an der Semesterzahl.
"""
import json, re, pathlib, sys

BASIS = pathlib.Path(__file__).resolve().parent.parent
QUELLE = BASIS/'Termine'/'Betreuungsplan_WS2026.json'
ZIEL   = BASIS/'lerntool.html'

def stand(pdf):
    """Das Standdatum steht in der Kopfzeile des PDF."""
    from pdfminer.high_level import extract_text
    t = extract_text(str(pdf), maxpages=1)
    m = re.search(r'Stand:\s*(\d{2}\.\d{2}\.\d{4})', t)
    return m.group(1) if m else '?'

def main():
    daten = json.loads(QUELLE.read_text(encoding='utf-8'))
    nach_klasse = {}
    for e in daten:
        iso = '-'.join(reversed(e['datum'].split('.')))
        nach_klasse.setdefault(e['klasse'], []).append(
            {'d': iso, 'b': [[b['von'], b['bis'], b['fach'], b['dozent']] for b in e['bloecke']]})
    for k in nach_klasse:
        nach_klasse[k].sort(key=lambda t: t['d'])

    zeilen = []
    for k in sorted(nach_klasse):
        tage = ',\n   '.join(
            '{d:"%s",b:[%s]}' % (t['d'], ','.join(
                '["%s","%s","%s","%s"]' % tuple(b) for b in t['b']))
            for t in nach_klasse[k])
        zeilen.append(' "%s":[\n   %s]' % (k, tage))
    block = 'const PLANTERMINE = {\n' + ',\n'.join(zeilen) + '\n};'

    # Welche Klassen gehoeren zu welchem Semester
    sem = {}
    for k in sorted(nach_klasse):
        sem.setdefault(int(k[0]), []).append(k)
    block += '\nconst KLASSEN = ' + json.dumps(sem) + ';'

    h = ZIEL.read_text(encoding='utf-8')
    m = re.search(r'const PLANTERMINE = \{.*?\n\};(\nconst KLASSEN = .*?;)?', h, re.S)
    if not m:
        print('PLANTERMINE nicht gefunden'); sys.exit(1)
    h = h[:m.start()] + block + h[m.end():]

    # Die fertige Kalenderdatei mit einbetten, damit der Knopf im Tool sie liefert
    ics = BASIS/'DAA-Praesenztermine.ics'
    if ics.exists():
        text = ics.read_text(encoding='utf-8').replace('\r\n', '\n')
        # Ersetzung als Funktion: sonst deutet re.sub die Backslashes im
        # Kalendertext als Steuerzeichen und zerreisst das JS-String-Literal.
        ersatz = 'const ICSTEXT = ' + json.dumps(text, ensure_ascii=False) + ';\n'
        h2 = re.sub(r'const ICSTEXT = ".*?";\n', lambda m: ersatz, h, count=1, flags=re.S)
        if h2 == h: print('  Hinweis: ICSTEXT nicht gefunden, Kalender nicht eingebettet')
        else: print('  Kalender eingebettet (%.1f KB)' % (len(text)/1024))
        h = h2

    st = stand(BASIS/'Termine'/'Betreuungsplan_WS2026.pdf')
    h = re.sub(r'const PLANSTAND = "[^"]*";', 'const PLANSTAND = "%s";' % st, h)
    ZIEL.write_text(h, encoding='utf-8')
    print('Betreuungsplan vom %s eingespielt: %s' %
          (st, ', '.join('%s (%d Tage)' % (k, len(v)) for k, v in sorted(nach_klasse.items()))))

main()
