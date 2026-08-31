#!/usr/bin/env python3
"""Setzt die Platzhalter fuer die interaktiven Grafiken in die Lernkapitel.
Jeder Platzhalter wird VOR die angegebene Zeile gesetzt, steht also am Ende
des Abschnitts, den er veranschaulicht."""
import pathlib, sys

BASIS = pathlib.Path(__file__).resolve().parent.parent / 'Lernkapitel' / 'Semester-1'

PLAN = [
 # (Datei-Anfang,                   Zeile davor,                                  Grafik)
 ('Mathematik/LM1-K1',              '## 1.4 Zweiersystem',                        'zehnerpotenz'),
 ('Mathematik/LM2-K2',              '## 2.3 Nullstelle',                          'gerade'),
 ('Mathematik/LM3-K1',              '## 1.3 Quadratische Gleichungen',            'parabel'),
 ('Mathematik/LM3-K2',              '## 2.3 Die Potenzgesetze',                   'potenz'),
 ('Mathematik/LM3-K3',              '## 3.2 Der Logarithmus',                     'wachstum'),
 ('Mathematik/LM4-K1',              '## 1.4 Das Dreieck',                         'strahlensatz'),
 ('Mathematik/LM4-K1',              '## 1.7 Flächen- und Umfangsberechnung',      'kreis'),
 ('Mathematik/LM4-K2',              '## 2.2 Die trigonometrischen Funktionen',    'rechtwinklig'),
 ('Mathematik/LM4-K2',              '## 2.3 Der Sinussatz',                       'einheitskreis'),
 ('Mathematik/LM4-K2',              '## 2.5 Das Bogenmaß',                        'schiefwinklig'),
 ('Mathematik/LM4-K3',              '## 3.3 Die Kugel',                           'koerper'),
 ('Naturwissenschaft/LM1-K2',       '## 2.5 Die schiefe Ebene',                   'parallelogramm'),
 ('Naturwissenschaft/LM1-K2',       '## 2.6 Reibung',                             'schiefeebene'),
 ('Naturwissenschaft/LM1-K3',       '## 3.3 Die Gleichgewichtsbedingungen',       'hebel'),
 ('Naturwissenschaft/LM1-K3',       '## 3.6 Kippsicherheit',                      'traeger'),
 ('Naturwissenschaft/LM1-K3',       '### 🏗️ Bau-Beispiel – Kran-Ballast',        'kippen'),
 ('Naturwissenschaft/LM1-K4',       '### Bewegungen im Diagramm lesen',           'anhalteweg'),
 ('Naturwissenschaft/LM1-K4',       '## 4.3 Der freie Fall',                      'vtdiagramm'),
 ('Naturwissenschaft/LM1-K5',       '## 5.5 Einfache Maschinen',                  'wirkungsgrad'),
 ('Naturwissenschaft/LM1-K6',       '## 6.3 Hydraulische Kraftübersetzung',       'schweredruck'),
 ('Naturwissenschaft/LM1-K6',       '## 6.4 Der Auftrieb',                        'hydraulik'),
 ('Naturwissenschaft/LM1-K6',       '## 6.5 Eigenschaften der Gase',              'auftrieb'),
 ('Naturwissenschaft/LM2-K1',       '## 1.3 Zustandsänderungen',                  'ausdehnung'),
 ('Naturwissenschaft/LM2-K2',       '## 2.4 Änderung des Aggregatzustandes',      'mischen'),
]

def main():
    gesetzt=fehler=0
    for stamm, zeile, gid in PLAN:
        treffer=sorted(BASIS.glob(stamm+'*.md'))
        if not treffer:
            print('  Datei fehlt:', stamm); fehler+=1; continue
        p=treffer[0]; t=p.read_text(encoding='utf-8')
        marke='<div class="viz" data-viz="%s"></div>' % gid
        if marke in t:
            continue                                   # schon gesetzt
        i=t.find('\n'+zeile)
        if i<0:
            print('  Ankerzeile nicht gefunden in %s: %r' % (p.name, zeile)); fehler+=1; continue
        t=t[:i+1] + marke + '\n\n' + t[i+1:]
        p.write_text(t, encoding='utf-8'); gesetzt+=1
        print('  %-40s %s' % (p.name, gid))
    print('\n%d Platzhalter gesetzt, %d Probleme' % (gesetzt, fehler))
    if fehler: sys.exit(1)

main()
