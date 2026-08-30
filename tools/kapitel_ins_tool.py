#!/usr/bin/env python3
"""Baut die Markdown-Lernkapitel neu in lerntool.html ein (Bereich #kapdata)."""
import re, json, sys, pathlib
import markdown

BASIS = pathlib.Path(__file__).resolve().parent.parent
EXT = ['tables','fenced_code','md_in_html','sane_lists']

def html_aus(pfad):
    md = pfad.read_text(encoding='utf-8')
    md = re.sub(r'^> \*\*Lernkapitel zum Selbststudium\.\*\*.*?(?=\n\n)', '', md, flags=re.S|re.M)
    # Inhaltsverzeichnis: Sprungmarken gibt es im Tool nicht, daher als reiner Text
    md = re.sub(r'\[([^\]]+)\]\(#[^)]*\)', r'<span class="tocitem">\1</span>', md)
    return markdown.markdown(md, extensions=EXT)

def main():
    ziel = BASIS/'lerntool.html'
    h = ziel.read_text(encoding='utf-8')
    m = re.search(r'(<script id="kapdata"[^>]*>)(.*?)(</script>)', h, re.S)
    daten = json.loads(m.group(2).replace('<\\/','</'))

    ordner = {'Mathematik I':'Mathematik','Naturwissenschaft':'Naturwissenschaft','Deutsch/Kommunikation':'Deutsch'}
    geaendert = []
    for fach in daten:
        verz = BASIS/'Lernkapitel'/'Semester-1'/ordner[fach['f']]
        for mod in fach['mod']:
            lm = re.match(r'Lernmodul (\d)', mod['m']).group(1)
            for kap in mod['k']:
                knr = re.match(r'K(\d)', kap['t']).group(1)
                treffer = sorted(verz.glob('LM%s-K%s_*.md' % (lm, knr)))
                if not treffer:
                    print('  FEHLT: LM%s-K%s in %s' % (lm, knr, verz.name)); continue
                neu = html_aus(treffer[0])
                if neu != kap['h']:
                    geaendert.append('%s %s (%+d Zeichen)' % (fach['f'], kap['t'], len(neu)-len(kap['h'])))
                    kap['h'] = neu

    js = json.dumps(daten, ensure_ascii=False).replace('</','<\\/')
    h = h[:m.start(2)] + js + h[m.end(2):]
    ziel.write_text(h, encoding='utf-8')
    print('Aktualisiert:', len(geaendert), 'Kapitel')
    for g in geaendert: print('  ', g)
    ges = sum(len(k['h']) for f in daten for mo in f['mod'] for k in mo['k'])
    print('Kapitel gesamt: %d Stück, %.0f KB' % (sum(len(mo['k']) for f in daten for mo in f['mod']), ges/1024))

main()
