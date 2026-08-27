# Übungsaufgaben – Mathematik LM3
## Funktionen und Gleichungen höherer Ordnung

> Grundlagen: [Zusammenfassung ausführlich](../../Zusammenfassungen/Semester-1/Mathematik/LM3_Funktionen-hoeherer-Ordnung_ausfuehrlich.md)

---

**1) Scheitelpunkt ablesen.** Gib den Scheitelpunkt an: a) f(x) = (x − 3)² + 1 · b) f(x) = x² − 5 · c) f(x) = −2(x + 4)² + 3
<details><summary>Lösung</summary>

a) S(3|1) · b) S(0|−5) · c) S(−4|3), nach unten geöffnet (a < 0)
</details>

**2) Öffnung und Form.** Beschreibe den Grafen von f(x) = −0,5x² + 2x.
<details><summary>Lösung</summary>

a = −0,5 → nach unten geöffnet und flacher als die Normalparabel (|a| < 1). c = 0 → geht durch den Ursprung.
</details>

**3) Quadratische Ergänzung.** Wandle f(x) = x² − 6x + 11 in die Scheitelpunktform um.
<details><summary>Lösung</summary>

x² − 6x + 9 − 9 + 11 = (x − 3)² + 2 → **f(x) = (x − 3)² + 2**, S(3|2)
</details>

**4) p-q-Formel.** Löse x² + 2x − 15 = 0.
<details><summary>Lösung</summary>

p = 2, q = −15 → x₁,₂ = −1 ± √(1 + 15) = −1 ± 4 → **x₁ = 3, x₂ = −5**
</details>

**5) Erst normieren.** Löse 2x² − 8x + 6 = 0.
<details><summary>Lösung</summary>

Durch 2 teilen: x² − 4x + 3 = 0 → x₁,₂ = 2 ± √(4−3) = 2 ± 1 → **x₁ = 3, x₂ = 1**
</details>

**6) Anzahl der Lösungen.** Wie viele Lösungen hat x² − 6x + 9 = 0?
<details><summary>Lösung</summary>

D = (p/2)² − q = 9 − 9 = 0 → **genau eine Lösung** (x = 3); die Parabel berührt die x-Achse im Scheitelpunkt.
</details>

**7) Schnittpunkt Parabel/Gerade.** Bestimme die Schnittpunkte von f(x) = x² und g(x) = 2x + 3.
<details><summary>Lösung</summary>

x² = 2x + 3 → x² − 2x − 3 = 0 → x₁,₂ = 1 ± √(1+3) = 1 ± 2 → x₁ = 3, x₂ = −1
y-Werte: f(3) = 9, f(−1) = 1 → **S₁(3|9), S₂(−1|1)**
</details>

**8) Potenzgesetze.** Vereinfache: a) x³·x⁴ · b) (a²)⁵ · c) y⁷ : y² · d) 2⁻³
<details><summary>Lösung</summary>

a) x⁷ · b) a¹⁰ · c) y⁵ · d) 1/8
</details>

**9) Wurzel als Potenz.** Schreibe als Potenz: a) √x · b) ³√(a²)
<details><summary>Lösung</summary>

a) x^(1/2) · b) a^(2/3)
</details>

**10) Exponentialfunktion.** Eine Bakterienkultur verdoppelt sich stündlich, Startmasse 5 g. a) Funktionsgleichung? b) Masse nach 6 h?
<details><summary>Lösung</summary>

a) m(t) = 5 · 2ᵗ · b) m(6) = 5 · 64 = **320 g**
</details>

**11) Logarithmus bestimmen.** a) log₃ 81 · b) log₁₀ 100000 · c) log₂ 64
<details><summary>Lösung</summary>

a) 4 (3⁴ = 81) · b) 5 (10⁵ = 100000) · c) 6 (2⁶ = 64)
</details>

**12) Umformen.** Schreibe in Logarithmusform: a) 4³ = 64 · b) aʸ = b
<details><summary>Lösung</summary>

a) log₄ 64 = 3 · b) log_a b = y
</details>

**13) Basiswechsel.** Berechne log₅ 200 mit dem Taschenrechner.
<details><summary>Lösung</summary>

log₅ 200 = lg 200 / lg 5 ≈ 2,3010 / 0,6990 ≈ **3,2920**
</details>

**14) Logarithmengesetze.** Forme um: lg(a² · b · c⁴)
<details><summary>Lösung</summary>

= 2 lg a + lg b + 4 lg c
</details>

**15) Exponentialgleichung.** Löse 7ˣ = 500 (auf 4 Nachkommastellen).
<details><summary>Lösung</summary>

lg(7ˣ) = lg 500 → x·lg 7 = lg 500 → x = 2,6990/0,8451 ≈ **3,1937**
Probe: 7^3,1937 ≈ 500 ✓
</details>

---

## 🏗️ Zusatzaufgaben mit Bau-Bezug

### Aufgabe 16 · Lagerfläche optimieren
Für eine Lagerfläche stehen **100 m Bauzaun** zur Verfügung. Eine Seite bildet eine bestehende Wand.
**16.1** Welche Maße geben die größte Fläche? **16.2** Wie groß ist sie?

<details><summary>Lösung anzeigen</summary>

```
2x + y = 100  →  y = 100 − 2x
A(x) = x(100 − 2x) = −2x² + 100x
     = −2(x² − 50x)
     = −2(x − 25)² + 1250
```
**16.1** x = **25 m** (Tiefe), y = **50 m** (an der Wand)
**16.2** A = **1250 m²**
</details>

### Aufgabe 17 · Baukostenentwicklung
Baukosten steigen jährlich um **3,2 %**. Ein Projekt kostet heute **1 250 000 €**.
**17.1** Kosten in 8 Jahren? **17.2** Wann übersteigen sie 2 Mio €? **17.3** Verdopplungszeit (auch mit 70er-Regel)?

<details><summary>Lösung anzeigen</summary>

**17.1** K = 1 250 000 · 1,032⁸ = 1 250 000 · 1,2871 = **1 608 875 €**
**17.2**
```
1,032ᵗ = 1,6  →  t = lg1,6/lg1,032 = 0,20412/0,013680 = 14,92 Jahre
```
**17.3** t = lg2/lg1,032 = 0,30103/0,013680 = **22,0 Jahre**; 70er-Regel: 70/3,2 = **21,9** ✓
</details>

### Aufgabe 18 · Maschinenwert
Ein Bagger kostet **240 000 €**, jährlicher Wertverlust **16 %**.
**18.1** Restwert nach 5 Jahren? **18.2** Wann unter 80 000 €? **18.3** Wertverlust im ersten Jahr in Euro?

<details><summary>Lösung anzeigen</summary>

**18.1** W = 240 000 · 0,84⁵ = 240 000 · 0,41821 = **100 371 €**
**18.2** 0,84ᵗ = 80 000/240 000 = 0,3333 → t = lg0,3333/lg0,84 = (−0,47712)/(−0,07572) = **6,30 Jahre**
**18.3** 240 000 · 0,16 = **38 400 €**
</details>

### Aufgabe 19 · Schalldämmung
**19.1** Eine Wand dämmt 45 dB, eine bessere 55 dB. Um welchen Faktor unterscheidet sich die durchgelassene Schallenergie?
**19.2** Wie viel dB Zuwachs bei vier gleich lauten Maschinen statt einer?

<details><summary>Lösung anzeigen</summary>

**19.1** ΔL = 10 dB → Faktor **10** (die bessere Wand lässt nur 1/10 durch)
**19.2** ΔL = 10 · lg 4 = 10 · 0,60206 = **6,02 dB ≈ 6 dB**
</details>

### Aufgabe 20 · Trägerdimensionierung
Ein Kantholz **10 × 22 cm** soll eingebaut werden.
**20.1** W hochkant und flach? **20.2** I hochkant und flach? **20.3** Faktor der Lage?

<details><summary>Lösung anzeigen</summary>

**20.1** hochkant (b=10, h=22): W = 10·484/6 = **806,7 cm³**; flach (b=22, h=10): W = 22·100/6 = **366,7 cm³**
**20.2** hochkant: I = 10·10 648/12 = **8873 cm⁴**; flach: I = 22·1000/12 = **1833 cm⁴**
**20.3** Tragfähigkeit Faktor **2,2**, Steifigkeit Faktor **4,8**
</details>
