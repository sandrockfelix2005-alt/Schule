#!/usr/bin/env python3
"""Erzeugt die Dokumentenliste (Metadaten ohne Dateiinhalt) aus der gebauten Fassung.
Danach genuegt tools/bauen.py, um die Inhalte frisch aus Unterlagen/ einzubetten.
Nur einmal noetig, falls Termine/dokumente.json fehlt."""
import re, json, pathlib
BASIS=pathlib.Path(__file__).resolve().parent.parent
h=(BASIS/'lerntool_offline_klein.html').read_text(encoding='utf-8')
d=json.loads(re.search(r'<script id="dokdata"[^>]*>(.*?)</script>',h,re.S).group(1).replace('<\\/','</'))
for x in d: x.pop('d', None)              # Inhalte kommen beim Bauen aus Unterlagen/
ziel=BASIS/'Termine'/'dokumente.json'
ziel.write_text(json.dumps(d, ensure_ascii=False, indent=1), encoding='utf-8')
print('%d Dokumente -> %s' % (len(d), ziel.relative_to(BASIS)))
