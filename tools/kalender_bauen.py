#!/usr/bin/env python3
"""Erzeugt aus dem eingelesenen Betreuungsplan eine .ics-Datei fuer den Kalender."""
import json, pathlib, datetime, hashlib

BASIS = pathlib.Path(__file__).resolve().parent.parent
SEMESTER = 1                      # eigene Klasse
FARBE_NAME = 'navy'               # RFC 7986, CSS3-Farbname
FARBE_HEX  = '#1B3A6B'            # fuer Apple/Outlook

# Nur eindeutige Kuerzel werden ausgeschrieben, der Rest bleibt wie im Plan.
FACH = {'MAT':'Mathematik','PHY':'Naturwissenschaft','DEU':'Deutsch/Kommunikation','ENG':'Englisch'}

def lesbar(code):
    for k,v in FACH.items():
        if code.endswith('-'+k): return v
    return None

def falten(zeile):
    """Zeilen laenger als 75 Oktett muessen nach RFC 5545 umgebrochen werden."""
    roh=zeile.encode('utf-8'); out=[]; i=0; grenze=73
    while len(roh)-i>grenze:
        schnitt=grenze
        while schnitt>0 and (roh[i+schnitt] & 0xC0)==0x80: schnitt-=1
        out.append(roh[i:i+schnitt].decode('utf-8')); i+=schnitt; grenze=72
        out[-1]=out[-1] if not out[:-1] else out[-1]
    out.append(roh[i:].decode('utf-8'))
    return out[0] + ''.join('\r\n '+t for t in out[1:])

def esc(s):
    return s.replace('\\','\\\\').replace(';','\;').replace(',','\\,').replace('\n','\\n')

def main():
    plan=json.loads((BASIS/'Termine'/'Betreuungsplan_WS2026.json').read_text(encoding='utf-8'))
    meine=[e for e in plan if e['semester']==SEMESTER]
    stamp=datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%SZ')

    L=['BEGIN:VCALENDAR','VERSION:2.0',
       'PRODID:-//Lerntool Bautechnik//DAA-Technikum//DE','CALSCALE:GREGORIAN','METHOD:PUBLISH',
       'X-WR-CALNAME:DAA Präsenztermine · Semester %d' % SEMESTER,
       'NAME:DAA Präsenztermine · Semester %d' % SEMESTER,
       'X-WR-TIMEZONE:Europe/Berlin',
       'COLOR:'+FARBE_NAME,
       'X-APPLE-CALENDAR-COLOR:'+FARBE_HEX,
       'X-OUTLOOK-COLOR:'+FARBE_HEX,
       'X-WR-CALDESC:Betreuungsplan DAA-Technikum\\, Studienort Kassel',
       'BEGIN:VTIMEZONE','TZID:Europe/Berlin',
       'BEGIN:DAYLIGHT','TZOFFSETFROM:+0100','TZOFFSETTO:+0200','TZNAME:CEST',
       'DTSTART:19700329T020000','RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU','END:DAYLIGHT',
       'BEGIN:STANDARD','TZOFFSETFROM:+0200','TZOFFSETTO:+0100','TZNAME:CET',
       'DTSTART:19701025T030000','RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU','END:STANDARD',
       'END:VTIMEZONE']

    for nr,e in enumerate(meine,1):
        tag=datetime.datetime.strptime(e['datum'],'%d.%m.%Y').date()
        d=tag.strftime('%Y%m%d')
        anf=e['bloecke'][0]['von'].replace(':',''), 
        beg=d+'T'+e['bloecke'][0]['von'].replace(':','')+'00'
        end=d+'T'+e['bloecke'][-1]['bis'].replace(':','')+'00'
        faecher=[]
        for b in e['bloecke']:
            n=lesbar(b['fach']) or b['fach']      # unbekannte Kuerzel unveraendert uebernehmen
            if n and n not in faecher: faecher.append(n)
        titel='DAA Semester %d · %s' % (SEMESTER, ' · '.join(faecher) if faecher else 'Präsenzunterricht')
        zeilen=['%s–%s  %s  (%s)' % (b['von'],b['bis'],b['fach'],b['dozent']) for b in e['bloecke']]
        besch='\n'.join(zeilen)+'\n\nStudienort Kassel · Raum: Aushang\nKürzel wie im Betreuungsplan vom 24.08.2026.'
        uid='daa-s%d-%s-%s@lerntool' % (SEMESTER, d, hashlib.md5(besch.encode()).hexdigest()[:6])
        L += ['BEGIN:VEVENT', 'UID:'+uid, 'DTSTAMP:'+stamp,
              'DTSTART;TZID=Europe/Berlin:'+beg, 'DTEND;TZID=Europe/Berlin:'+end,
              falten('SUMMARY:'+esc(titel)),
              falten('DESCRIPTION:'+esc(besch)),
              falten('LOCATION:'+esc('DAA-Technikum · Studienort Kassel')),
              'COLOR:'+FARBE_NAME, 'X-APPLE-CALENDAR-COLOR:'+FARBE_HEX,
              'CATEGORIES:Schule', 'STATUS:CONFIRMED', 'TRANSP:OPAQUE',
              'SEQUENCE:0',
              'BEGIN:VALARM','ACTION:DISPLAY',
              falten('DESCRIPTION:'+esc('Morgen Präsenzunterricht: '+titel)),
              'TRIGGER:-PT14H','END:VALARM',
              'BEGIN:VALARM','ACTION:DISPLAY',
              falten('DESCRIPTION:'+esc('In einer Stunde: '+titel)),
              'TRIGGER:-PT1H','END:VALARM',
              'END:VEVENT']
    L.append('END:VCALENDAR')

    ziel=BASIS/'DAA-Praesenztermine.ics'
    ziel.write_text('\r\n'.join(L)+'\r\n', encoding='utf-8')
    print('%d Termine geschrieben -> %s (%.1f KB)' % (len(meine), ziel.name, ziel.stat().st_size/1024))
    for e in meine:
        print('   %s  %s–%s  %s' % (e['datum'], e['bloecke'][0]['von'], e['bloecke'][-1]['bis'],
              ' · '.join(b['fach'] for b in e['bloecke'])))

main()
