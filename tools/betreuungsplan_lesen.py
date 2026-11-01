#!/usr/bin/env python3
"""Liest den DAA-Betreuungsplan (PDF) aus und schreibt ihn als JSON.
Die Tabelle wird ueber die Zeilenkoordinaten rekonstruiert, weil die reine
Textextraktion die Spalten durcheinanderwirft.

Seit dem Stand 22.09.2026 steht in der Spalte Klasse nicht mehr nur
"Semester 1", sondern "Semester 1a" bzw. "1b" - das erste Semester ist in
zwei Klassen geteilt, die an verschiedenen Tagen verschiedenen Unterricht
haben. Die Klasse wird deshalb mitgefuehrt.
"""
import re, json, sys, pathlib

BASIS = pathlib.Path(__file__).resolve().parent.parent
PDF  = sys.argv[1] if len(sys.argv)>1 else str(BASIS/'Termine'/'Betreuungsplan_WS2026.pdf')
ZIEL = sys.argv[2] if len(sys.argv)>2 else str(BASIS/'Termine'/'Betreuungsplan_WS2026.json')
from pdfminer.high_level import extract_pages
from pdfminer.layout import LTTextContainer

def zeilen(pfad):
    for seite in extract_pages(pfad):
        st=[]
        for el in seite:
            if isinstance(el, LTTextContainer):
                for z in el:
                    if hasattr(z,'get_text'):
                        t=z.get_text().strip()
                        if t: st.append((round(z.y1,1), round(z.x0,1), t))
        st.sort(key=lambda s:(-s[0], s[1]))
        gr=[]
        for y,x,t in st:
            if gr and abs(gr[-1][0]-y)<=3.2: gr[-1][1].append((x,t))
            else: gr.append([y,[(x,t)]])
        for y,teile in gr:
            teile.sort()
            yield [t for x,t in teile]

DAT  = re.compile(r'^(\d{2}\.\d{2}\.\d{4})(?:\s+(.*))?$')
KLAS = re.compile(r'^Semester\s+(\d+[ab]?)$')
ZEIT = re.compile(r'^(\d{2}:\d{2})-(\d{2}:\d{2})$')

eintraege={}
datum=klasse=None
for teile in zeilen(PDF):
    rest=list(teile)
    if rest:
        m=DAT.match(rest[0])
        if m:
            datum=m.group(1)
            rest.pop(0)
            if m.group(2): rest.insert(0, m.group(2).strip())
    if rest:
        m=KLAS.match(rest[0])
        if m: klasse=m.group(1); rest.pop(0)
    if not rest or not datum or not klasse: continue
    m=ZEIT.match(rest[0])
    if not m: continue
    von,bis=m.group(1),m.group(2); rest=rest[1:]
    eintraege.setdefault((datum,klasse),[]).append(
        {'von':von,'bis':bis,
         'fach':   rest[0] if len(rest)>0 else '',
         'dozent': rest[1] if len(rest)>1 else '',
         'raum':   rest[2] if len(rest)>2 else ''})

def sortier(k):
    t,m,j=k[0].split('.'); return (j,m,t,k[1])
aus=[{'datum':d,'klasse':k,'semester':int(k[0]),'bloecke':b}
     for (d,k),b in sorted(eintraege.items(), key=lambda kv: sortier(kv[0]))]
json.dump(aus, open(ZIEL,'w',encoding='utf-8'), ensure_ascii=False, indent=1)
import collections
print('%d Termine, je Klasse: %s' % (len(aus), dict(sorted(collections.Counter(e['klasse'] for e in aus).items()))))
bl=sum(len(e['bloecke']) for e in aus)
print('Unterrichtsblöcke gesamt:', bl)
