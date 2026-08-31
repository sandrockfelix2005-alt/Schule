#!/usr/bin/env python3
"""Spielt die Dateien aus Visualisierungen/ in lerntool.html ein (zwischen den Marken)."""
import pathlib, re, sys

BASIS = pathlib.Path(__file__).resolve().parent.parent
ANF = '/* >>> GRAFIKEN ANFANG (erzeugt von tools/grafiken_ins_tool.py) <<< */'
END = '/* >>> GRAFIKEN ENDE <<< */'

def main():
    teile = sorted((BASIS/'Visualisierungen').glob('*.js'))
    code = '\n\n'.join(p.read_text(encoding='utf-8').rstrip() for p in teile)
    ziel = BASIS/'lerntool.html'
    h = ziel.read_text(encoding='utf-8')
    if ANF not in h:
        print('Marken fehlen in lerntool.html'); sys.exit(1)
    i, j = h.index(ANF)+len(ANF), h.index(END)
    h = h[:i] + '\n' + code + '\n' + h[j:]
    ziel.write_text(h, encoding='utf-8')
    anzahl = len(re.findall(r'^VIZ\.\w+\s*=', code, re.M))
    print('%d Dateien, %d Grafiken, %.0f KB eingespielt' % (len(teile), anzahl, len(code)/1024))
    for p in teile:
        ids = re.findall(r'^VIZ\.(\w+)\s*=', p.read_text(encoding='utf-8'), re.M)
        if ids: print('  %-28s %s' % (p.name, ', '.join(ids)))

main()
