# Mathematik I – Lernmodul 3 · AUSFÜHRLICH (Nachschlagewerk)
## Funktionen und Gleichungen höherer Ordnung anwenden

> Quelle: `Unterlagen/Semester-1/Mathematik/Mathematik_Lernmodul-3.txt` · ca. 44 h häusliches Studium + 14 h Präsenzphase
> 📄 **Zwei Varianten:** [← Kompakt-Fassung](LM3_Funktionen-hoeherer-Ordnung_kompakt.md) · Diese **ausführliche** Fassung mit Herleitungen und Rechenwegen.
> **Voraussetzung:** erfolgreiche Bearbeitung von LM2 (Funktionen und Gleichungen erster Ordnung).
> **Komplexaufgabe des Moduls:** Bevölkerungswachstum – aus Volkszählungsdaten (alle 5 Jahre) die weitere Entwicklung berechnen (Lernbereiche 3 und 4).

**Inhalt**
1. [Quadratische Funktionen](#1-quadratische-funktionen) · [1.1 Parabeln](#11-parabeln) · [1.2 Allgemeine quadratische Funktion](#12-allgemeine-quadratische-funktion) · [1.3 Quadratische Gleichungen](#13-quadratische-gleichungen-und-deren-lösung) · [1.4 Schnittpunkte](#14-schnittpunkte-von-parabeln-mit-anderen-grafen)
2. [Wurzelfunktionen](#2-wurzelfunktionen)
3. [Potenzfunktionen](#3-potenzfunktionen)
4. [Exponentialfunktionen](#4-exponentialfunktionen)
5. [Logarithmusfunktionen](#5-logarithmusfunktionen) · [5.1 Logarithmensysteme](#51-logarithmensysteme) · [5.2 Exponentialgleichungen](#52-exponentialgleichungen)

---

# 1 Quadratische Funktionen

## 1.1 Parabeln
Ordnet man der Seitenlänge a eines Quadrats den Flächeninhalt a² zu, entsteht eine **Funktion** (jedem a genau ein a²). Der Graf von **f(x) = x²** heißt **Normalparabel**.

**Eigenschaften der Normalparabel:**
- Scheitelpunkt **S(0|0)** – dort ist f(x) = 0, also zugleich die **Nullstelle**.
- Nach **oben geöffnet**; sie **fällt links** vom Scheitelpunkt und **steigt rechts** davon.
- Symmetrisch zur y-Achse.

**Verschiebungen (daraus entsteht die Scheitelpunktform):**

| Funktionsgleichung | Wirkung | Scheitelpunkt |
|--------------------|---------|---------------|
| f(x) = x² + s | um s nach **oben/unten** | S(0 \| s) |
| f(x) = (x − r)² | um r nach **rechts/links** | S(r \| 0) |
| **f(x) = a(x − r)² + s** | beides + Streckung | **S(r \| s)** |

- Beispiel: f(x) = x² + 4 → S(0|4) · f(x) = x² − 2 → S(0|−2)
- Beispiel: f(x) = (x − 2)² → S(2|0) · f(x) = (x + 3)² → S(−3|0)
- Beispiel: f(x) = (x − 1)² + 2 → **S(1|2)**

**Einfluss des Faktors a bei f(x) = a·x²:**
- **a > 0** → nach **oben** geöffnet · **a < 0** → nach **unten** geöffnet
- **|a| > 1** → **schmaler/steiler** als die Normalparabel · **|a| < 1** → **breiter/flacher**

## 1.2 Allgemeine quadratische Funktion
> **Allgemeine Form:** <span title="a darf nicht 0 sein">**y = ax² + bx + c**</span> (a ≠ 0)

a und b heißen **Koeffizienten** (reelle Zahlen), **c** ist der **y-Achsenabschnitt** (Schnittpunkt mit der y-Achse bei x = 0).

**Umwandlung in die Scheitelpunktform – quadratische Ergänzung**
Wichtig: Der Term darf sich nicht ändern → die Ergänzung wird **addiert und wieder subtrahiert**.

**Lehrbeispiel:** g(x) = 1,5x² − 6x + 4,5
1. a ausklammern: g(x) = 1,5(x² − 4x) + 4,5
2. Quadratisch ergänzen mit (4/2)² = 4: = 1,5(x² − 4x **+ 4 − 4**) + 4,5
3. Binom bilden, Rest verrechnen: = 1,5(x − 2)² − 6 + 4,5
4. → **g(x) = 1,5(x − 2)² − 1,5** → Scheitelpunkt **S(2|−1,5)**

Erkenntnisse zu g(x): a = 1,5; b = −6; c = 4,5 · nach oben geöffnet (a > 0) · steiler als Normalparabel (a > 1) · y-Achsenschnitt P(0|4,5) · Nullstellen x₁ = 1 und x₂ = 3.

**Zweites Beispiel:** h(x) = −0,5x² − 2x − 3 → h(x) = −0,5(x + 2)² − 1 → **S(−2|−1)**, nach unten geöffnet.

## 1.3 Quadratische Gleichungen und deren Lösung
Eine **quadratische Gleichung** in Normalform lautet **x² + px + q = 0**.

**Herleitung der Lösungsformel (p-q-Formel) über die quadratische Ergänzung:**
```
x² + px            = −q            | quadratisch ergänzen mit (p/2)²
x² + px + (p/2)²   = −q + (p/2)²   | linke Seite ist ein vollständiges 1. Binom
(x + p/2)²         = (p/2)² − q    | Wurzel ziehen (± beachten!)
x + p/2            = ±√((p/2)² − q)
```

> **p-q-Formel:** **x₁,₂ = −p/2 ± √((p/2)² − q)** · L = {x₁ ; x₂}

**Anzahl der Lösungen** (über den Ausdruck unter der Wurzel, die *Diskriminante* D = (p/2)² − q):
- **D > 0** → zwei Lösungen (Parabel schneidet die x-Achse zweimal)
- **D = 0** → eine Lösung (Parabel berührt die x-Achse im Scheitelpunkt)
- **D < 0** → keine reelle Lösung (Parabel schneidet die x-Achse nicht)

**Beispiel:** x² − 4x + 3 = 0 → p = −4, q = 3 → x₁,₂ = 2 ± √(4 − 3) = 2 ± 1 → **x₁ = 3, x₂ = 1**.
*(Steht ein Faktor vor x², vorher durch ihn teilen: 2x² − 8x + 6 = 0 → x² − 4x + 3 = 0.)*

## 1.4 Schnittpunkte von Parabeln mit anderen Grafen
Schnittpunkte findet man immer durch **Gleichsetzen** der Funktionsterme.
- **Parabel und Gerade:** ax² + bx + c = mx + n → alles auf eine Seite → quadratische Gleichung → p-q-Formel. Ergebnis: 2, 1 oder 0 Schnittpunkte (Sekante, Tangente, keine Berührung).
- **Parabel und Parabel:** ebenso gleichsetzen und zusammenfassen.
- Danach die x-Werte in **eine** der Gleichungen einsetzen, um die y-Werte zu erhalten.

---

# 2 Wurzelfunktionen
Die **Wurzelfunktion f(x) = √x** ist die **Umkehrfunktion** der quadratischen Funktion f(x) = x² – allerdings nur für **x ≥ 0**, weil die Zuordnung sonst nicht eindeutig wäre.

- **Definitionsmenge:** D = {x ∈ ℝ | x ≥ 0} (keine Wurzel aus negativen Zahlen in ℝ).
- Der **Graf** entsteht durch **Spiegelung** der Parabel (rechter Ast) an der Winkelhalbierenden **y = x**.
- Allgemein ist die n-te Wurzel die Umkehrung der n-ten Potenz: ⁿ√a = a^(1/n).

---

# 3 Potenzfunktionen
**Potenzfunktionen** haben die Form **f(x) = xⁿ** – die Variable steht in der **Basis**, der Exponent ist fest (Gegensatz zur Exponentialfunktion!).

**3.1 Natürliche Exponenten:**
- **Gerader Exponent** (x², x⁴ …): Graf **achsensymmetrisch zur y-Achse**, parabelähnlich, alle Grafen durch (0|0) und (1|1).
- **Ungerader Exponent** (x³, x⁵ …): Graf **punktsymmetrisch zum Ursprung**, verläuft von links unten nach rechts oben.

**3.2 Ganzzahlige und rationale Exponenten:**
- **Negativer Exponent:** x⁻ⁿ = 1/xⁿ → Hyperbelform, x = 0 ist nicht definiert.
- **Rationaler Exponent:** x^(m/n) = ⁿ√(xᵐ) → verbindet Potenz und Wurzel.

**Potenzgesetze (zentral für dieses Modul):**
| Gesetz | Formel | Beispiel |
|--------|--------|----------|
| Multiplikation gleicher Basis | aᵐ · aⁿ = aᵐ⁺ⁿ | x²·x³ = x⁵ |
| Division gleicher Basis | aᵐ : aⁿ = aᵐ⁻ⁿ | x⁵:x² = x³ |
| Potenzieren einer Potenz | (aᵐ)ⁿ = aᵐ·ⁿ | (x²)³ = x⁶ |
| Produkt/Quotient potenzieren | (a·b)ⁿ = aⁿ·bⁿ | (2x)³ = 8x³ |
| Negativer Exponent | a⁻ⁿ = 1/aⁿ | 2⁻³ = 1/8 |
| Exponent Null | a⁰ = 1 (a ≠ 0) | 5⁰ = 1 |
| Wurzel als Potenz | a^(1/n) = ⁿ√a | 4^(1/2) = 2 |

> Aus dem Modul: „Eine Potenz wird potenziert, indem die **Exponenten multipliziert** werden. Die Basis bleibt unverändert."

---

# 4 Exponentialfunktionen
Bei der **Exponentialfunktion f(x) = aˣ** steht die Variable im **Exponenten** (Basis a > 0, a ≠ 1).

**Einführungsbeispiel aus dem Modul (Bakterienkultur):**
| Zeit t (h) | 0 | 1 | 2 | 3 | 4 | 5 |
|-----------|---|---|---|---|---|---|
| Masse m (g) | 1 | 3 | 9 | 27 | 81 | 243 |

Die Masse **verdreifacht** sich stündlich → Zuordnung x → 3ˣ → **f(x) = 3ˣ**.

**Eigenschaften:**
- Alle Grafen gehen durch den Punkt **(0|1)**, denn a⁰ = 1.
- **a > 1** → **Wachstum** (steigend); **0 < a < 1** → **Zerfall** (fallend).
- Der Graf nähert sich der x-Achse an, erreicht sie aber nie (Asymptote); Werte immer **positiv**.
- Wertetabelle-Beispiel (f(x)=2ˣ): x = −2 → 0,25 · x = −1 → 0,5 · x = 0 → 1 · x = 1 → 2 · x = 2 → 4.

**Typische Anwendungen:** Bakterien-/Bevölkerungswachstum, Zinseszins, radioaktiver Zerfall, Abkühlvorgänge.

---

# 5 Logarithmusfunktionen

## 5.1 Logarithmensysteme
Ausgangsfrage: Bei f(x) = 2ˣ und y = 8 – mit welcher Zahl muss man die Basis 2 potenzieren, um 8 zu erhalten? Diese Zahl heißt **Logarithmus**.

> **Definition:** Der **Logarithmus von b zur Basis a** (log_a b) ist der **Exponent**, mit dem die Basis a potenziert werden muss, um b zu erhalten. Im Term log_a b heißt **b Numerus**.

**Beispiele aus dem Modul:**
- log₂ 8 = 3, denn 2³ = 8
- log₃ 243 = 5, denn 3⁵ = 243
- log₁₀ 10000 = 4, denn 10⁴ = 10000
- log_e 20 ≈ 3, denn e³ ≈ 20

**Umformen zwischen Potenz- und Logarithmusschreibweise:**
| Potenzform | Logarithmusform |
|-----------|-----------------|
| 11² = 121 | log₁₁ 121 = 2 |
| 0,5ˣ = 0,25 | log_{0,5} 0,25 = x |
| aʸ = b | log_a b = y |
| 2⁵ = 32 | 5 = log₂ 32 |
| 10³ = 1000 | 3 = log₁₀ 1000 |

**Die drei gebräuchlichen Logarithmensysteme:**
| Basis | Kurzschreibweise | Name |
|-------|------------------|------|
| 2 | **ld** oder **lb** | Logarithmus dualis / binärer Logarithmus |
| e | **ln** | natürlicher Logarithmus (Logarithmus naturalis) |
| 10 | **lg** | Zehnerlogarithmus / dekadischer (Briggs'scher) Logarithmus |

**Basiswechsel** (jeden Logarithmus mit dem Taschenrechner berechnen):
> **log_a x = lg x / lg a**

*Beweis (aus dem Modul):* y = log_a x → aʸ = x → lg(aʸ) = lg x → y·lg a = lg x → y = lg x / lg a.

**Logarithmengesetze** (Umkehrung der Potenzgesetze):
| Gesetz | Formel | Beispiel |
|--------|--------|----------|
| Produkt | lg(u·v) = lg u + lg v | lg(a²·b·c⁴) = 2 lg a + lg b + 4 lg c |
| Quotient | lg(u/v) = lg u − lg v | lg(1/(x²y²)) = lg 1 − 2 lg x − 2 lg y |
| Potenz | lg(uⁿ) = n · lg u | lg(x³) = 3 lg x |

## 5.2 Exponentialgleichungen
Eine Gleichung heißt **algebraisch**, wenn sie sich in die Polynomform aₙxⁿ + … + a₁x + a₀ = 0 bringen lässt. Steht die Lösungsvariable im **Exponenten**, gelingt das nicht – solche Gleichungen heißen **transzendente Gleichungen**.

**Lösungsweg: logarithmieren.**

**Lehrbeispiel 1:** 6ˣ = 330
1. Beide Seiten logarithmieren: lg(6ˣ) = lg 330
2. Potenzgesetz anwenden: x · lg 6 = lg 330
3. Nach x auflösen: x = lg 330 / lg 6 ≈ **3,2365**
4. Probe: 6^3,2365 ≈ 329,98 ≈ 330 ✓ → **L = {3,2365}**

**Lehrbeispiel 2:** 2 · 1,5ˣ = 100
1. Erst isolieren: 1,5ˣ = 50
2. Logarithmieren: x · lg 1,5 = lg 50 → x = lg 50 / lg 1,5 ≈ **9,6482**
3. Probe: 2 · 1,5^9,6482 ≈ 99,998 ≈ 100 ✓ → **L = {9,6482}**

---

# ✅ Lernkontrolle
- **Scheitelpunkt** aus der Scheitelpunktform ablesen und per **quadratischer Ergänzung** aus der allgemeinen Form berechnen.
- Einfluss von a, b, c auf die Parabel (Öffnung, Breite, y-Achsenabschnitt) erklären.
- Quadratische Gleichungen mit der **p-q-Formel** lösen; Anzahl der Lösungen über die Diskriminante beurteilen.
- **Schnittpunkte** von Parabel und Gerade/Parabel berechnen.
- **Potenzgesetze** sicher anwenden; Wurzeln als Potenzen schreiben.
- **Exponentialfunktion** von der Potenzfunktion unterscheiden (Variable im Exponenten vs. in der Basis).
- **Logarithmus** definieren, zwischen Potenz- und Logarithmusform umformen, Systeme (lg, ln, ld) und **Basiswechsel** kennen.
- **Exponentialgleichungen** durch Logarithmieren lösen (mit Probe).

→ Karteikarten: `Karteikarten/Semester-1/Mathematik_LM3.csv` · Übungen: `Uebungsaufgaben/Semester-1/Mathematik_LM3_Uebungen.md`
