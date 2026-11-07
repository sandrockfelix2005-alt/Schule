# -*- coding: utf-8 -*-
"""Baut das Modul 'Altklausuren' in lerntool.html ein.

Quelle: zwei Tutoriums-Pruefungen Mathematik (DAA-Technikum, Fachrichtung
Bautechnik) aus dem Techniker-Forum. Alle Loesungen wurden mit sympy
nachgerechnet; die im Original falsch gedruckten Zwischenschritte sind
im Modul als Hinweis gekennzeichnet.

Das Skript ist idempotent: ein vorhandener Block wird ersetzt.
"""
import re, sys, pathlib

P = pathlib.Path(__file__).resolve().parent.parent / 'lerntool.html'
h = P.read_text(encoding='utf-8')

# ---------------------------------------------------------------- 1. Daten
DATEN = r'''
/* ================= ALTKLAUSUREN (Original-Pruefungen) ================= */
const ALTKLAUSUREN = [
{
  id:'2014-06-29',
  kurz:'29.06.2014',
  titel:'Prüfung Mathematik Tutorien',
  datum:'29. Juni 2014',
  dauer:90,
  art:'Tutoriums-Prüfung',
  quelle:'techniker-forum.de · von einem Teilnehmer hochgeladen, Aufgaben und Lösungen in einer Datei',
  stoff:'Analysis und Vektorrechnung – entspricht <strong>Lernmodul 5</strong>. Das bekommst du erst im 2. Semester; es ist der zweite Teil dessen, was in der Endprüfung <strong>Mathematik I</strong> geprüft wird.',
  geprueft:'Alle vier Aufgaben mit sympy nachgerechnet. <strong>Alle Endergebnisse stimmen.</strong> Drei Zwischenschritte im Lösungsteil sind falsch gedruckt – siehe unten.',
  fehler:[
    ['Aufgabe 2.1','Im Original steht <code>F(x) = −1/12·x⁴ − x²</code>. Richtig ist <code>F(x) = −1/12·x⁴ − ½·x²</code> – das ½ fehlt. Mit der gedruckten Stammfunktion käme A = 5⅓ FE heraus statt der (richtigen) 3⅓ FE.'],
    ['Aufgabe 2.2','Im Original steht <code>f(x)² = 1/9·x⁶ + 2/3·x⁴ + ½·x²</code>. Der letzte Term muss <code>x²</code> heißen (Koeffizient 1, nicht ½).'],
    ['Aufgabe 2.2','Folgefehler daraus: die Stammfunktion ist im Original <code>1/63·x⁷ + 2/15·x⁵ + 1/6·x³</code>, richtig ist <code>… + ⅓·x³</code>. Das Endergebnis V = 28,16 VE stimmt trotzdem.']
  ],
  aufgaben:[
  {nr:'1', t:'Kurvendiskussion',
   a:'Führen Sie für folgende Funktion eine komplette Kurvendiskussion durch. Zeichnen Sie den Funktionsgraphen und füllen Sie die Tabelle aus (Definitionsbereich, Achsensymmetrie zur y-Achse, Punktsymmetrie zum Ursprung, Eigenschaften des Funktionsgraphen).<br><br><code>f(x) = −x² − 2x + 8</code>',
   l:'<strong>Ableitungen</strong><br>f′(x) = −2x − 2 · f″(x) = −2 · f‴(x) = 0'
    +'<br><br><strong>Definitionsbereich</strong><br>Ganzrationale Funktion → D = ℝ, keine Polstellen.'
    +'<br><br><strong>Symmetrie</strong><br>f(−x) = −(−x)² − 2(−x) + 8 = −x² + 2x + 8 ≠ f(x) → <strong>keine</strong> Achsensymmetrie zur y-Achse.<br>−f(x) = x² + 2x − 8 ≠ f(−x) → <strong>keine</strong> Punktsymmetrie zum Ursprung.'
    +'<br><br><strong>Nullstellen</strong><br>−x² − 2x + 8 = 0 | ·(−1)<br>x² + 2x − 8 = 0<br>x<sub>1,2</sub> = −1 ± √(1 + 8) = −1 ± 3<br><strong>N₁(−4 | 0) · N₂(2 | 0)</strong>'
    +'<br><br><strong>Extrempunkt</strong><br>f′(x) = 0 → −2x − 2 = 0 → x = −1<br>f″(−1) = −2 &lt; 0 → Maximum<br>f(−1) = −1 + 2 + 8 = 9 → <strong>H(−1 | 9)</strong>'
    +'<br><br><strong>Wendepunkte</strong><br>f″(x) = −2 ≠ 0 → keine Wendepunkte.'
    +'<br><br><strong>Verhalten im Unendlichen</strong><br>x → −∞: f(x) → −∞, Steigung → +∞<br>x → +∞: f(x) → −∞, Steigung → −∞'
    +'<br><br><strong>Tabelle</strong><br>−∞ → −∞ · N₁ (−4 | 0) · H (−1 | 9) · N₂ (2 | 0) · +∞ → −∞'},
  {nr:'2.1', t:'Flächenintegral',
   a:'Gegeben ist <code>f(x) = −⅓·x³ − x</code>.<br><br>Berechnen Sie für die gegebene Funktion das Flächen-Integral in den Grenzen von <code>−2 ≤ x ≤ 0</code>.',
   l:'<strong>Stammfunktion</strong><br>F(x) = −1/12·x⁴ − ½·x²'
    +'<br><br><strong>Einsetzen</strong><br>F(0) = 0<br>F(−2) = −1/12·16 − ½·4 = −4/3 − 2 = −10/3'
    +'<br><br>A = |F(0) − F(−2)| = |0 − (−10/3)| = <strong>10/3 = 3⅓ FE ≈ 3,33 FE</strong>'
    +'<br><br><span class="afehl">Achtung: im Original-Lösungsblatt steht F(x) = −1/12·x⁴ − x². Das ½ fehlt dort. Das Endergebnis 3⅓ FE ist richtig, der gedruckte Zwischenschritt nicht.</span>'},
  {nr:'2.2', t:'Volumenintegral (Rotation um die x-Achse)',
   a:'Ermitteln Sie <code>f(x)²</code> und bestimmen Sie anschließend das Volumen-Integral durch Rotation um die x-Achse in den Grenzen von <code>−2 ≤ x ≤ 0</code>.',
   l:'<strong>Quadrieren</strong><br>f(x)² = (−⅓x³ − x)² = 1/9·x⁶ + 2·(⅓x³·x) + x² = <strong>1/9·x⁶ + 2/3·x⁴ + x²</strong>'
    +'<br><br><strong>Stammfunktion</strong><br>G(x) = 1/63·x⁷ + 2/15·x⁵ + ⅓·x³'
    +'<br><br><strong>Einsetzen</strong><br>G(0) = 0<br>G(−2) = −128/63 − 64/15 − 8/3 = −2824/315'
    +'<br><br>V = π · |G(0) − G(−2)| = π · 2824/315 = π · 8,9651 = <strong>28,16 VE</strong>'
    +'<br><br><span class="afehl">Im Original steht beim Quadrieren „+ ½x²“ statt „+ x²“ und folgerichtig „+ 1/6·x³“ statt „+ ⅓·x³“. Beides ist falsch; das Endergebnis 28,16 VE stimmt.</span>'},
  {nr:'3', t:'Vektoren',
   a:'Gegeben sind die Vektoren <code>V₁(1 | −2)</code>, <code>V₂(2 | 4)</code>, <code>a(2 | −7)</code>.'
    +'<br><br><strong>3.1</strong> Berechnen Sie die Vektoren b und c, die den Winkel α einschließen. Berechnen Sie die Beträge von b und c sowie das Skalarprodukt b·c.'
    +'<br><strong>3.2</strong> Berechnen Sie den Winkel α in Grad und rad.'
    +'<br><strong>3.3</strong> Berechnen Sie die Fläche des Dreiecks mithilfe des Vektorproduktes b × c.',
   l:'<strong>3.1 Vektoren</strong><br>b = V₂ − V₁ = (2 | 4) − (1 | −2) = <strong>(1 | 6)</strong><br>c = b + a = (1 | 6) + (2 | −7) = <strong>(3 | −1)</strong>'
    +'<br><br>|b| = √(1² + 6²) = √37 ≈ 6,083<br>|c| = √(3² + (−1)²) = √10 ≈ 3,162<br>b·c = 1·3 + 6·(−1) = <strong>−3</strong>'
    +'<br><br><strong>3.2 Winkel</strong><br>cos α = (b·c) / (|b|·|c|) = −3 / (√37·√10) = −3/√370 = −0,15594<br>α = cos⁻¹(−0,15594) = <strong>98,97°</strong><br>im Bogenmaß: 98,97° · π/180° = <strong>1,727 rad</strong>'
    +'<br><br><strong>3.3 Dreiecksfläche</strong><br>A = ½ · |b| · |c| · sin α = ½ · √37 · √10 · sin(98,97°) = ½ · 19,235 · 0,98777 = <strong>9,5 FE</strong>'
    +'<br><br><em>Gegenprobe über die Determinante (im 2D schneller und ohne Winkel):</em><br>A = ½ · |b<sub>x</sub>·c<sub>y</sub> − b<sub>y</sub>·c<sub>x</sub>| = ½ · |1·(−1) − 6·3| = ½ · 19 = 9,5 FE ✓'},
  {nr:'4', t:'Lineares Gleichungssystem (Gauß)',
   a:'Gegeben ist folgendes 3×3-Gleichungssystem:'
    +'<br><br><code>(1) −3x + y − 2z = 5<br>(2) &nbsp;&nbsp;x + 2y + 3z = −4<br>(3) &nbsp;5x + 2y + &nbsp;z = 6</code>'
    +'<br><br>Lösen Sie das Gleichungssystem mit dem Gaußschen Eliminationsverfahren. Führen Sie anschließend eine Probe durch.',
   l:'<strong>Schritt 1 – Zeilen tauschen</strong><br>Gleichung (2) nach oben, damit vorn eine 1 steht:<br>(I) x + 2y + 3z = −4<br>(II) −3x + y − 2z = 5<br>(III) 5x + 2y + z = 6'
    +'<br><br><strong>Schritt 2 – x eliminieren</strong><br>(II) + 3·(I): 7y + 7z = −7 | ÷7 → <strong>y + z = −1</strong><br>(III) − 5·(I): −8y − 14z = 26 | ÷2 → <strong>−4y − 7z = 13</strong>'
    +'<br><br><strong>Schritt 3 – y eliminieren</strong><br>aus y = −1 − z eingesetzt:<br>−4(−1 − z) − 7z = 13<br>4 + 4z − 7z = 13<br>−3z = 9 → <strong>z = −3</strong>'
    +'<br><br><strong>Schritt 4 – rückwärts einsetzen</strong><br>y = −1 − (−3) = <strong>2</strong><br>x = −4 − 2·2 − 3·(−3) = −4 − 4 + 9 = <strong>1</strong>'
    +'<br><br><strong>Lösung: x = 1 · y = 2 · z = −3</strong>'
    +'<br><br><strong>Probe</strong><br>(1) −3·1 + 2 − 2·(−3) = −3 + 2 + 6 = 5 ✓<br>(2) 1 + 2·2 + 3·(−3) = 1 + 4 − 9 = −4 ✓<br>(3) 5·1 + 2·2 + (−3) = 5 + 4 − 3 = 6 ✓'}
  ]
},
{
  id:'2021-01-24',
  kurz:'24.01.2021',
  titel:'Prüfung Mathematik Tutorium (Fachrichtung Bautechnik)',
  datum:'24. Januar 2021',
  dauer:90,
  art:'Tutoriums-Prüfung',
  quelle:'techniker-forum.de · Aufgabenblatt und Lösungsblatt als zwei Dateien',
  stoff:'Analysis und Vektorrechnung – entspricht <strong>Lernmodul 5</strong>. Aufgabenschema identisch zur Prüfung von 2014.',
  geprueft:'Alle vier Aufgaben mit sympy nachgerechnet. <strong>Alle Endergebnisse stimmen.</strong> Im Lösungsblatt stehen zwei fachliche Fehler und eine falsche Datumszeile – siehe unten.',
  fehler:[
    ['Kopfzeile','Das Dokument ist mit „vom 24.01.<strong>2020</strong>“ überschrieben, die Datei heißt 2021. Welches Jahr stimmt, lässt sich aus den Unterlagen nicht entscheiden.'],
    ['Aufgabe 1','Aufgabenblatt und Lösung schreiben „Achsensymmetrie bezogen auf die <strong>X-Achse</strong>“. Das ist fachlich falsch: eine Funktion kann nicht achsensymmetrisch zur x-Achse sein (zu jedem x gäbe es zwei y-Werte). Geprüft wird in der Lösung auch tatsächlich f(−x) = f(x), also Symmetrie zur <strong>y-Achse</strong>. Die Prüfung von 2014 formuliert es richtig.'],
    ['Aufgabe 1','Die Zeile <code>−f(x) = −(x² + 3x + 10) = −x² − 3x − 10</code> ist falsch. Es ist f(x) = <strong>−</strong>x² + 3x + 10, also −f(x) = <strong>x² − 3x − 10</strong>. Das Ergebnis „keine Punktsymmetrie“ stimmt trotzdem.'],
    ['Aufgabe 1','Kleinigkeit: die Zeile zur Achsensymmetrie ist mit „f(x) =“ beschriftet, gerechnet wird aber f(−x).']
  ],
  aufgaben:[
  {nr:'1', t:'Kurvendiskussion',
   a:'Führen Sie eine vollständige Kurvendiskussion durch! Füllen Sie die Ergebnistabelle aus und zeichnen Sie den Graphen.<br><br><code>f(x) = −x² + 3x + 10</code>',
   l:'<strong>Ableitungen</strong><br>f′(x) = −2x + 3 · f″(x) = −2 · f‴(x) = 0'
    +'<br><br><strong>Definitionsbereich</strong><br>D = ℝ, keine Polstellen.'
    +'<br><br><strong>Symmetrie</strong><br>f(−x) = −(−x)² + 3(−x) + 10 = −x² − 3x + 10 ≠ f(x) → <strong>keine</strong> Achsensymmetrie zur y-Achse.<br>−f(x) = x² − 3x − 10 ≠ f(−x) → <strong>keine</strong> Punktsymmetrie zum Ursprung.'
    +'<br><br><span class="afehl">Das Original rechnet hier −f(x) = −x² − 3x − 10 und beschriftet die Symmetrie mit „x-Achse“. Beides ist falsch – die Ergebnisse (keine Symmetrie) bleiben richtig.</span>'
    +'<br><br><strong>Nullstellen</strong><br>−x² + 3x + 10 = 0<br>x<sub>1,2</sub> = (−3 ± √(9 + 40)) / (−2) = (−3 ± 7) / (−2)<br>x₁ = 4/(−2) = −2 · x₂ = −10/(−2) = 5<br><strong>N₁(−2 | 0) · N₂(5 | 0)</strong>'
    +'<br><br><strong>Extrempunkt</strong><br>−2x + 3 = 0 → x = 1,5<br>f″(1,5) = −2 &lt; 0 → Maximum<br>f(1,5) = −2,25 + 4,5 + 10 = 12,25 → <strong>H(1,5 | 12,25)</strong>'
    +'<br><br><strong>Wendepunkte</strong><br>f″(x) = −2 ≠ 0 → keine Wendepunkte.'
    +'<br><br><strong>Verhalten im Unendlichen</strong><br>x → −∞: f(x) → −∞, Steigung → +∞<br>x → +∞: f(x) → −∞, Steigung → −∞'},
  {nr:'2.1', t:'Flächenintegral',
   a:'Gegeben ist <code>f(x) = −⅓·x⁴ + 3x</code>.<br><br>Berechnen Sie das bestimmte Flächen-Integral in den Grenzen von <code>1 ≤ x ≤ 2</code>.',
   l:'<strong>Stammfunktion</strong><br>F(x) = −(1/3)·x⁵/5 + 3·x²/2 = <strong>−1/15·x⁵ + 3/2·x²</strong>'
    +'<br><br><strong>Einsetzen</strong><br>F(2) = −32/15 + 6 = 58/15<br>F(1) = −1/15 + 3/2 = 43/30'
    +'<br><br>A = F(2) − F(1) = 116/30 − 43/30 = <strong>73/30 = 2,4333 FE</strong>'},
  {nr:'2.2', t:'Volumenintegral (Rotation um die x-Achse)',
   a:'Berechnen Sie <code>f(x)²</code> und dann das bestimmte Volumen-Integral durch Rotation um die x-Achse in den Grenzen von <code>1 ≤ x ≤ 2</code>.',
   l:'<strong>Quadrieren</strong><br>f(x)² = (−⅓x⁴ + 3x)² = 1/9·x⁸ − 2·(⅓x⁴·3x) + 9x² = <strong>1/9·x⁸ − 2x⁵ + 9x²</strong>'
    +'<br><br><strong>Stammfunktion</strong><br>G(x) = 1/81·x⁹ − ⅓·x⁶ + 3x³'
    +'<br><br><strong>Einsetzen</strong><br>G(2) = 512/81 − 64/3 + 24 = 728/81<br>G(1) = 1/81 − 1/3 + 3 = 217/81'
    +'<br><br>V = π · (728/81 − 217/81) = π · 511/81 = π · 6,3086 = <strong>19,82 VE</strong>'},
  {nr:'3', t:'Vektoren',
   a:'Gegeben sind die Vektoren <code>V₁(4 | −1)</code>, <code>V₃(1 | −3)</code>, <code>c(2 | −1)</code>.'
    +'<br><br><strong>3.1</strong> Bestimmen Sie die Vektoren a und b. Berechnen Sie den Betrag von a und b und das Skalarprodukt.'
    +'<br><strong>3.2</strong> Bestimmen Sie den Winkel α in Grad und rad.'
    +'<br><strong>3.3</strong> Berechnen Sie die Fläche des Dreiecks zwischen den Vektoren a, b und c.',
   l:'<strong>3.1 Vektoren</strong><br>a = V₃ − V₁ = (1 | −3) − (4 | −1) = <strong>(−3 | −2)</strong><br>b = a + c = (−3 | −2) + (2 | −1) = <strong>(−1 | −3)</strong>'
    +'<br><br>|a| = √((−3)² + (−2)²) = √13 ≈ 3,606<br>|b| = √((−1)² + (−3)²) = √10 ≈ 3,162<br>a·b = (−3)·(−1) + (−2)·(−3) = 3 + 6 = <strong>9</strong>'
    +'<br><br><strong>3.2 Winkel</strong><br>cos α = 9 / (√13·√10) = 9/√130 = 0,78935<br>α = cos⁻¹(0,78935) = <strong>37,875°</strong><br>im Bogenmaß: 37,875° · π/180° = <strong>0,661 rad</strong>'
    +'<br><br><strong>3.3 Dreiecksfläche</strong><br>A = ½ · |a| · |b| · sin α = ½ · √13 · √10 · sin(37,875°) = ½ · 11,402 · 0,61394 = <strong>3,5 FE</strong>'
    +'<br><br><em>Gegenprobe über die Determinante:</em><br>A = ½ · |a<sub>x</sub>·b<sub>y</sub> − a<sub>y</sub>·b<sub>x</sub>| = ½ · |(−3)(−3) − (−2)(−1)| = ½ · |9 − 2| = 3,5 FE ✓'},
  {nr:'4', t:'Lineares Gleichungssystem (Gauß)',
   a:'Lösen Sie das gegebene lineare Gleichungssystem (3×3) mit dem Gaußschen Eliminationsverfahren und führen Sie anschließend eine Probe durch.'
    +'<br><br><code>(1) &nbsp;3x − 2y + 6z = −2<br>(2) −x + 3y − 2z = −4<br>(3) −2x − &nbsp;y − 5z = &nbsp;8</code>',
   l:'<strong>Schritt 1 – x aus (2) eliminieren</strong><br>3·(2) + (1):<br>3·(−x + 3y − 2z) = −3x + 9y − 6z = −12<br>addiert zu (1): 7y + 0z = −14 → <strong>y = −2</strong>'
    +'<br><br><strong>Schritt 2 – x aus (3) eliminieren</strong><br>3·(3) + 2·(1):<br>3·(3): −6x − 3y − 15z = 24<br>2·(1): &nbsp;6x − 4y + 12z = −4<br>addiert: −7y − 3z = 20'
    +'<br><br><strong>Schritt 3 – z bestimmen</strong><br>−7·(−2) − 3z = 20<br>14 − 3z = 20 → −3z = 6 → <strong>z = −2</strong>'
    +'<br><br><strong>Schritt 4 – x bestimmen</strong><br>aus (1): 3x − 2·(−2) + 6·(−2) = −2<br>3x + 4 − 12 = −2 → 3x = 6 → <strong>x = 2</strong>'
    +'<br><br><strong>Lösung: x = 2 · y = −2 · z = −2</strong>'
    +'<br><br><strong>Probe</strong><br>(1) 3·2 − 2·(−2) + 6·(−2) = 6 + 4 − 12 = −2 ✓<br>(2) −2 + 3·(−2) − 2·(−2) = −2 − 6 + 4 = −4 ✓<br>(3) −2·2 − (−2) − 5·(−2) = −4 + 2 + 10 = 8 ✓'}
  ]
}
];
'''

marke_a = '/* ================= ALTKLAUSUREN (Original-Pruefungen) ================= */'
if marke_a in h:
    h = re.sub(re.escape(marke_a) + r'.*?\n\];\n', lambda m: DATEN.lstrip('\n'), h, count=1, flags=re.S)
else:
    # direkt hinter das Ende des KLAUSUREN-Objekts setzen
    i = h.index('const KLAUSUREN = {')
    j = h.index('\n};\n', i) + len('\n};\n')
    h = h[:j] + DATEN + h[j:]

P.write_text(h, encoding='utf-8')
print('Daten eingebaut:', len(DATEN), 'Zeichen')

# ---------------------------------------------------------------- 2. CSS
h = P.read_text(encoding='utf-8')

if '--fehler:' not in h:
    h = h.replace('--good:#2E7D53; --good-bg:#E4F1E9;',
                  '--good:#2E7D53; --good-bg:#E4F1E9; --fehler:#B23A2E; --fehler-bg:#FBE9E7; --fehler-line:#E8C2BC;')
    h = h.replace('--good:#57C08A; --good-bg:#152A20;',
                  '--good:#57C08A; --good-bg:#152A20; --fehler:#E8897C; --fehler-bg:#2A1A18; --fehler-line:#4A2A26;')

CSS = """  .panel.fehler{border-left:3px solid var(--fehler);background:var(--fehler-bg);border-color:var(--fehler-line)}
  .panel.fehler strong{color:var(--fehler)}
  .panel.fehler ul{margin:8px 0 0;padding-left:18px}
  .panel.fehler li{margin:6px 0;font-size:14px}
  .panel.fehler li b{color:var(--fehler);font-family:var(--mono);font-size:11.5px;text-transform:uppercase;letter-spacing:.08em;display:block}
  .afehl{display:block;margin-top:10px;padding:8px 11px;border-left:3px solid var(--fehler);background:var(--fehler-bg);border-radius:0 6px 6px 0;font-size:13.5px;color:var(--ink)}
  .aquelle{font-size:12.5px;color:var(--muted);margin:10px 0 0}
  .amarke{display:inline-block;font-family:var(--mono);font-size:10.5px;letter-spacing:.09em;text-transform:uppercase;padding:2px 7px;border-radius:999px;border:1px solid var(--line);color:var(--muted);margin-right:6px}
"""
if '.panel.fehler{' not in h:
    h = h.replace('  .panel.vorb{', CSS + '  .panel.vorb{', 1)

# ---------------------------------------------------------------- 3. Navigation
if 'data-view="altklausur"' not in h:
    h = h.replace('    <button data-view="klausur">Probeklausur</button>\n',
                  '    <button data-view="klausur">Probeklausur</button>\n'
                  '    <button data-view="altklausur">Altklausuren</button>\n', 1)
    h = h.replace('      <a data-view="klausur"><span class="n">08</span> Probeklausur</a>\n',
                  '      <a data-view="klausur"><span class="n">08</span> Probeklausur</a>\n'
                  '      <a data-view="altklausur"><span class="n">09</span> Altklausuren</a>\n', 1)
    for alt, neu in [('<span class="n">09</span> Formelsammlung', '<span class="n">10</span> Formelsammlung'),
                     ('<span class="n">10</span> Lexikon',        '<span class="n">11</span> Lexikon'),
                     ('<span class="n">11</span> Meine Notizen',  '<span class="n">12</span> Meine Notizen'),
                     ('<span class="n">12</span> Lernplan',       '<span class="n">13</span> Lernplan'),
                     ('<span class="n">13</span> Termine',        '<span class="n">14</span> Termine')]:
        assert alt in h, alt
        h = h.replace(alt, neu, 1)

# ---------------------------------------------------------------- 4. Ansicht
ANSICHT = """
    <!-- ALTKLAUSUREN -->
    <section class="view" data-view="altklausur">
      <div class="kicker">Altklausuren · Mathematik</div>
      <h1>Echte Prüfungen aus dem Archiv</h1>
      <p class="lead">Original-Prüfungen aus dem Techniker-Forum, von mir Aufgabe für Aufgabe nachgerechnet. Erst selbst rechnen – Timer an –, dann die Lösung aufklappen.</p>
      <div class="modpick" id="altpick"></div>
      <div class="panel tip" id="alt-info"></div>
      <div class="panel fehler" id="alt-fehler"></div>
      <div class="timerbar">
        <span class="timer" id="a-timer">90:00</span>
        <button id="a-start">Start</button>
        <button id="a-stop">Pause</button>
        <button id="a-reset">Zurücksetzen</button>
      </div>
      <div id="alt-out"></div>
    </section>
"""
if '<section class="view" data-view="altklausur">' not in h:
    i = h.index('    <!-- FORMELSAMMLUNG -->')
    h = h[:i] + ANSICHT.lstrip('\n') + '\n' + h[i:]

# ---------------------------------------------------------------- 5. Logik
LOGIK = r'''
/* ================= ALTKLAUSUREN ================= */
let curAlt=0, aTimer=null, aSec=5400;
function renderAltPick(){
  const p=document.getElementById('altpick'); p.innerHTML='';
  ALTKLAUSUREN.forEach((k,i)=>{const b=document.createElement('button');
    b.textContent=k.kurz;
    if(i===curAlt)b.classList.add('on');
    b.onclick=()=>{curAlt=i;renderAltPick();renderAlt();};
    p.appendChild(b);});
}
function renderAlt(){
  const K=ALTKLAUSUREN[curAlt];
  document.getElementById('alt-info').innerHTML=
    '<span class="amarke">'+K.art+'</span><strong>'+K.titel+' · '+K.datum+'</strong>'+
    '<p style="margin:8px 0 0">'+K.stoff+'</p>'+
    '<p style="margin:8px 0 0">'+K.geprueft+'</p>'+
    '<p class="aquelle">Quelle: '+K.quelle+'. Keine offizielle DAA-Abschlussprüfung – die Aufgaben zeigen aber genau das Format und den Umfang. Punktzahlen sind im Original nicht angegeben; als Zeit sind 90 Minuten angesetzt.</p>';
  const fb=document.getElementById('alt-fehler');
  if(K.fehler&&K.fehler.length){
    fb.style.display='';
    fb.innerHTML='<strong>Fehler im Original-Dokument</strong>'+
      '<p style="margin:6px 0 0;font-size:14px">Beim Nachrechnen gefunden – die Lösungen unten sind korrigiert:</p><ul>'+
      K.fehler.map(f=>'<li><b>'+f[0]+'</b>'+f[1]+'</li>').join('')+'</ul>';
  } else { fb.style.display='none'; fb.innerHTML=''; }
  document.getElementById('alt-out').innerHTML=K.aufgaben.map(a=>
    '<div class="kauf"><span class="knr">Aufgabe '+a.nr+' · '+a.t+'</span>'+
    '<p class="ktxt">'+a.a+'</p>'+
    '<details><summary>Lösung anzeigen (nachgerechnet)</summary><div class="sol">'+a.l+'</div></details></div>').join('');
  resetATimer();
}
function paintATimer(){const el=document.getElementById('a-timer');el.textContent=fmtT(aSec);el.classList.toggle('warn',aSec<=600);}
function resetATimer(){clearInterval(aTimer);aTimer=null;aSec=ALTKLAUSUREN[curAlt].dauer*60;paintATimer();}
document.getElementById('a-start').onclick=()=>{if(aTimer)return;aTimer=setInterval(()=>{if(aSec>0){aSec--;paintATimer();}else{clearInterval(aTimer);aTimer=null;alert('Zeit abgelaufen!');}},1000);};
document.getElementById('a-stop').onclick=()=>{clearInterval(aTimer);aTimer=null;};
document.getElementById('a-reset').onclick=resetATimer;
renderAltPick();renderAlt();
'''
if '/* ================= ALTKLAUSUREN ================= */' not in h:
    i = h.index('/* ================= FORMELSAMMLUNG ================= */')
    h = h[:i] + LOGIK.lstrip('\n') + '\n' + h[i:]

P.write_text(h, encoding='utf-8')
print('UI eingebaut. Datei:', len(h), 'Zeichen')
