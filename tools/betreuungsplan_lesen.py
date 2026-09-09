#!/usr/bin/env python3
"""Liest den DAA-Betreuungsplan (PDF) aus und schreibt ihn als JSON.
Die Tabelle wird ueber die Zeilenkoordinaten rekonstruiert, weil die reine
Textextraktion die Spalten durcheinanderwirft."""
import re, json, sys, pathlib
from pdfminer.high_level import extract_pages
from pdfminer.layout import LTTextContainer

BASIS = pathlib.Path(__file__).resolve().parent.parent

def zeilen(pfad):
    for seite in extract_pages(str(pfad)):
        stuecke=[]
        for el in seite:
            if isinstance(el, LTTextContainer):
                for z in el:
                    if hasattr(z,'get_text'):
                        t=z.get_text().strip()
                        if t: stuecke.append((round(z.y1,1), round(z.x0,1), t))
        stuecke.sort(key=lambda s:(-s[0], s[1]))
        gruppen=[]
        for y,x,t in stuecke:
            if gruppen and abs(gruppen[-1][0]-y)<=3.2: gruppen[-1][1].append((x,t))
            else: gruppen.append([y,[(x,t)]])
        for y,teile in gruppen:
            teile.sort()
            yield [t for x,t in teile]

DATUM = re.compile(r'^(\d{2}\.\d{2}\.\d{4})\s+Semester\s+(\d+)$')
SEM   = re.compile(r'^Semester\s+(\d+)$')
ZEIT  = re.compile(r'^(\d{2}:\d{2})-(\d{2}:\d{2})$')

def main(pdf):
    termine={}                       # (datum, semester) -> Liste von Bloecken
    datum=sem=None
    for teile in zeilen(pdf):
        if not teile: continue
        kopf=teile[0]
        m=DATUM.match(kopf)
        if m:
            datum, sem = m.group(1), int(m.group(2)); rest=teile[1:]
        else:
            m2=SEM.match(kopf)
            if m2:
                if datum is None: continue
                sem=int(m2.group(1)); rest=teile[1:]
            elif ZEIT.match(kopf):
                rest=teile                       # Fortsetzungszeile
            else:
                continue
        if datum is None or sem is None: continue
        if not rest or not ZEIT.match(rest[0]): continue
        von,bis = ZEIT.match(rest[0]).groups()
        fach   = rest[1] if len(rest)>1 else ''
        dozent = rest[2] if len(rest)>2 else ''
        raum   = rest[3] if len(rest)>3 else ''
        termine.setdefault((datum,sem),[]).append(
            {'von':von,'bis':bis,'fach':fach,'dozent':dozent,'raum':raum})

    aus=[]
    for (d,s),bl in sorted(termine.items(), key=lambda k:(k[0][0][6:10]+k[0][0][3:5]+k[0][0][0:2], k[0][1])):
        aus.append({'datum':d,'semester':s,'bloecke':bl})
    ziel=BASIS/'Termine'/'Betreuungsplan_WS2026.json'
    ziel.write_text(json.dumps(aus, ensure_ascii=False, indent=1), encoding='utf-8')

    from collections import Counter
    c=Counter(e['semester'] for e in aus)
    print('Termine gesamt:', len(aus))
    for s in sorted(c): print('  Semester %d: %2d Termine' % (s, c[s]))
    print('->', ziel.relative_to(BASIS))
    return aus

if __name__=='__main__':
    main(sys.argv[1] if len(sys.argv)>1 else BASIS/'Termine'/'Betreuungsplan_WS2026.pdf')
