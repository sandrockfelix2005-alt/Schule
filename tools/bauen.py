#!/usr/bin/env python3
"""Baut aus lerntool.html die drei auslieferbaren Fassungen.
Die PDF-Inhalte werden frisch aus Unterlagen/ eingelesen - nichts liegt im Zwischenspeicher."""
import json, base64, pathlib, sys
BASIS = pathlib.Path(__file__).resolve().parent.parent
GRENZE = 1_200_000        # groesser wird in der schlanken Fassung nur verlinkt

def finde(name):
    for p in (BASIS/'Unterlagen').rglob(name):
        return p
    return None

def doks(voll):
    liste=json.loads((BASIS/'Termine'/'dokumente.json').read_text(encoding='utf-8'))
    aus=[]
    for x in liste:
        e=dict(x); p=finde(x['n'])
        if p:
            roh=p.read_bytes(); e['s']=len(roh)
            if voll or len(roh)<=GRENZE:
                e['d']=base64.b64encode(roh).decode('ascii')
        aus.append(e)
    return json.dumps(aus, ensure_ascii=False, separators=(',',':'))

def main():
    basis=(BASIS/'lerntool.html').read_text(encoding='utf-8')
    idx=(BASIS/'Suchindex_Semester-1.json').read_text(encoding='utf-8').replace('</','<\\/')
    for datei, voll, wrap in [('lerntool_artifact.html',False,False),
                              ('lerntool_offline.html',True,True),
                              ('lerntool_offline_klein.html',False,True)]:
        h=basis; i=h.index('\n<script id="kapdata"')
        h=h[:i]+('\n<script id="dokdata" type="application/json">'+doks(voll).replace('</','<\\/')+'</script>'
                 '\n<script id="pdfidx" type="application/json">'+idx+'</script>')+h[i:]
        if wrap:
            h=('<!doctype html><html lang="de"><head><meta charset="utf-8">'
               '<meta name="viewport" content="width=device-width, initial-scale=1">'
               '<meta name="theme-color" content="#0E1520"><title>Lerntool Bautechnik</title></head><body>\n'
               +h+'\n</body></html>')
        (BASIS/datei).write_text(h, encoding='utf-8')
        print('%-28s %5.1f MB' % (datei, len(h)/1048576))

main()
