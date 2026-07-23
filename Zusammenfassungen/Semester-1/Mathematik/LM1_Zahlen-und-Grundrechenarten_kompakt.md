# Mathematik I – Lernmodul 1 · KOMPAKT
## Zahlen kennen und Grundrechenarten anwenden

> Quelle: `Unterlagen/Semester-1/Mathematik/Mathematik_Lernmodul-1.pdf` · ca. 20 h häusliches Studium
> 📄 **Zwei Varianten:** Diese **Kompakt**-Fassung (Überblick/Wiederholen) · [→ Ausführliche Fassung zum Nachschlagen](LM1_Zahlen-und-Grundrechenarten_ausfuehrlich.md)
> Ziel: mathematische Grundlagen sicher beherrschen, um sie als Werkzeug für technische Probleme einzusetzen.

**Inhalt:** [1 Zahlendarstellungen](#1-mathematische-zahlendarstellungen) · [2 Zahlenmengen](#2-zahlenmengen) · [3 Grundrechenarten](#3-grundrechenarten)

---

## 1 Mathematische Zahlendarstellungen

### 1.1 Zeichen und Abkürzungen
Mathematische Aussagen werden mit Symbolen kompakt geschrieben. Wichtige Zeichen:

| Zeichen | Bedeutung | Beispiel |
|---------|-----------|----------|
| `=` / `≠` | gleich / ungleich | 3 = 3 · 3 ≠ 4 |
| `<` `≤` `>` `≥` | kleiner / kleiner-gleich / größer / größer-gleich | 2 < 5 |
| `≈` | ungefähr gleich (gerundet) | 25 835 ≈ 26 000 |
| `∈` | ist Element von | 3 ∈ ℕ |
| `∞` | unendlich | |

### 1.2 Runden von Zahlen
**Grundsatz:** So genau wie nötig, nicht wie möglich. Gerundet wird auf *n* Dezimalstellen.

**Rundungsregel** (entscheidend ist die (n+1)-te Stelle):
- Ziffer **0,1,2,3,4** → **abrunden** (n-te Stelle bleibt): 9,81 ≈ 9,8 · 22,743 ≈ 22,74
- Ziffer **5,6,7,8,9** → **aufrunden** (n-te Stelle +1): 9,86 ≈ 9,9 · 22,747 ≈ 22,75

> Praxisbeispiel: 12 cm auf 7 Teile → 12 : 7 = 1,714 285… cm ≈ 1,71 cm.

### 1.3 Zehnerpotenzen
Sehr große/kleine Zahlen werden als Potenz von 10 geschrieben (**wissenschaftliche Schreibweise**): eine Zahl zwischen 1 und 10 mal 10ᵏ.

- 250 kW = 2,5 · 10⁵ W
- 510 Billionen m² = 5,1 · 10¹⁴ m²
- 8 µm = 8 · 10⁻⁶ m

**Vorsätze (Präfixe):** k = 10³, M = 10⁶, G = 10⁹ · m = 10⁻³, µ = 10⁻⁶, n = 10⁻⁹.

### 1.4 Zweiersystem (Dualsystem)
Basis 2, nur Ziffern 0 und 1 – Grundlage der Digitaltechnik. Jede Stelle ist eine Zweierpotenz.
Beispiel: 1011₂ = 1·8 + 0·4 + 1·2 + 1·1 = **11** im Dezimalsystem.

---

## 2 Zahlenmengen
Die Zahlenmengen bauen aufeinander auf: **ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ**.

| Menge | Symbol | Was dazukommt | Beispiel |
|-------|:------:|---------------|----------|
| Natürliche Zahlen | ℕ | Zählen ab 1 (bzw. 0) | 1, 2, 3, … |
| Ganze Zahlen | ℤ | negative Zahlen | …, −2, −1, 0, 1, 2, … |
| Rationale Zahlen | ℚ | Brüche / endliche & periodische Dezimalzahlen | ¾, −2, 0,333… |
| Reelle Zahlen | ℝ | irrationale Zahlen (nicht als Bruch) | √2, π, e |
| Komplexe Zahlen | ℂ | imaginäre Einheit i (mit i² = −1) | 3 + 2i |

- **2.1 Natürliche Zahlen (ℕ):** die Zählzahlen; keine Subtraktion beliebig möglich.
- **2.2 Ganze Zahlen (ℤ):** ℕ plus negative Zahlen und Null → Subtraktion immer lösbar.
- **2.3 Rationale Zahlen (ℚ):** alle Zahlen als Bruch p/q (q ≠ 0). Dezimal: **endlich** (0,75) oder **periodisch** (0,3̄).
- **2.4 Reelle Zahlen (ℝ):** ℚ plus **irrationale** Zahlen – unendliche, nicht-periodische Dezimalzahlen (√2, π). Füllen die Zahlengerade lückenlos.
- **2.5 Komplexe Zahlen (ℂ):** erweitern ℝ um die **imaginäre Einheit i** mit i² = −1, damit auch √(−1) lösbar ist. Form: a + b·i.

---

## 3 Grundrechenarten

### 3.1 Addition und Subtraktion
- Summanden + Summanden = **Summe**; Minuend − Subtrahend = **Differenz**.
- **Vorzeichenregeln:** + und − ergibt − (5 + (−3) = 2); − und − ergibt + (5 − (−3) = 8).

### 3.2 Multiplikation und Division
- Faktor · Faktor = **Produkt**; Dividend : Divisor = **Quotient**.
- **Vorzeichen:** gleiche Vorzeichen → +, verschiedene → −. (−4)·(−3) = 12 · (−4)·3 = −12.
- **Division durch 0 ist nicht definiert.**

### 3.3 Klammerrechnen und Faktorisieren
- **Rechenreihenfolge:** Klammer → Potenz → Punkt (·,:) → Strich (+,−). *(„Punkt vor Strich")*
- **Ausmultiplizieren:** a·(b + c) = a·b + a·c
- **Faktorisieren (Ausklammern):** a·b + a·c = a·(b + c) → gemeinsamen Faktor herausziehen.

### 3.4 Binomische Formeln
| Nr. | Formel | Beispiel |
|:---:|--------|----------|
| 1. | (a + b)² = a² + 2ab + b² | (a + 5)² = a² + 10a + 25 |
| 2. | (a − b)² = a² − 2ab + b² | (x − 3)² = x² − 6x + 9 |
| 3. | (a + b)(a − b) = a² − b² | (x + 4)(x − 4) = x² − 16 |

> Lehrbeispiel: (15r + 3s)² = 225r² + 90rs + 9s² (1. binomische Formel).

### 3.5 Polynomdivision
Division zweier Polynome „schriftlich" wie bei Zahlen – höchste Potenz zuerst. Wird gebraucht, um Nullstellen abzuspalten und Terme zu vereinfachen.
Beispiel-Idee: (x² + 5x + 6) : (x + 2) = x + 3.

---

## ✅ Das musst du können
- Zahlen korrekt **runden** (Regel der (n+1)-ten Stelle).
- Zwischen **Zehnerpotenzen / Vorsätzen** und Normalzahl umrechnen.
- Die **Zahlenmengen** ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ unterscheiden und einordnen.
- **Vorzeichen- und Klammerregeln** sicher anwenden (Punkt vor Strich).
- Die **drei binomischen Formeln** vorwärts (ausmultiplizieren) und rückwärts (faktorisieren).
- Eine einfache **Polynomdivision** durchführen.

→ Karteikarten: `Karteikarten/Semester-1/Mathematik_LM1.csv`
