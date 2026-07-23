# Mathematik I – Lernmodul 1 · AUSFÜHRLICH (Nachschlagewerk)
## Zahlen kennen und Grundrechenarten anwenden

> Quelle: `Unterlagen/Semester-1/Mathematik/Mathematik_Lernmodul-1.pdf` · ca. 20 h häusliches Studium
> 📄 **Zwei Varianten:** [← Kompakt-Fassung (schneller Überblick)](LM1_Zahlen-und-Grundrechenarten_kompakt.md) · Diese **ausführliche** Fassung mit allen Regeln und Schritt-für-Schritt-Beispielen.

**Inhaltsverzeichnis**
1. [Mathematische Zahlendarstellungen](#1-mathematische-zahlendarstellungen)
   · [1.1 Zeichen & Abkürzungen](#11-zeichen-und-abkürzungen) · [1.2 Runden](#12-runden-von-zahlen) · [1.3 Zehnerpotenzen](#13-zehnerpotenzen) · [1.4 Zweiersystem](#14-zweiersystem-dualsystem)
2. [Zahlenmengen](#2-zahlenmengen)
   · [2.1 ℕ](#21-natürliche-zahlen-ℕ) · [2.2 ℤ](#22-ganze-zahlen-ℤ) · [2.3 ℚ](#23-rationale-zahlen-ℚ) · [2.4 ℝ](#24-reelle-zahlen-ℝ) · [2.5 ℂ](#25-komplexe-zahlen-ℂ)
3. [Grundrechenarten](#3-grundrechenarten)
   · [3.1 Addition/Subtraktion](#31-addition-und-subtraktion) · [3.2 Multiplikation/Division](#32-multiplikation-und-division) · [3.3 Klammern & Faktorisieren](#33-klammerrechnen-und-faktorisieren) · [3.4 Binomische Formeln](#34-binomische-formeln) · [3.5 Polynomdivision](#35-polynomdivision)

---

# 1 Mathematische Zahlendarstellungen

## 1.1 Zeichen und Abkürzungen
Mathematik nutzt Symbole, um Aussagen kurz und eindeutig zu schreiben.

| Zeichen | Bedeutung | Beispiel |
|:-------:|-----------|----------|
| `=` / `≠` | gleich / ungleich | 3 = 3 · 3 ≠ 4 |
| `<` `≤` | kleiner / kleiner-gleich | 2 < 5 · x ≤ 10 |
| `>` `≥` | größer / größer-gleich | 7 > 1 · x ≥ 0 |
| `≈` | ungefähr gleich (gerundet) | 25 835 ≈ 26 000 |
| `∈` / `∉` | ist / ist nicht Element von | 3 ∈ ℕ · −3 ∉ ℕ |
| `⊂` | ist Teilmenge von | ℕ ⊂ ℤ |
| `∞` | unendlich | |

## 1.2 Runden von Zahlen
**Grundsatz:** Zahlen so genau wie *nötig* angeben, nicht so genau wie möglich. Runden folgt praktischen Überlegungen (Schätzungen, Überschlag, Messgenauigkeit).

**Warum überhaupt?**
- Einwohnerzahl 25 835 → für Vergleiche genügt ≈ 26 000.
- 12 cm auf 7 gleiche Teile: 12 : 7 = 1,714 285… cm → so viele Stellen sind sinnlos, man rundet.

**Rundungsregel auf *n* Dezimalstellen** — entscheidend ist die **(n+1)-te Stelle**:
- Steht dort **0, 1, 2, 3 oder 4** → **abrunden** (n-te Stelle bleibt unverändert).
  Beispiele: 9,81 ≈ 9,8 · 22,743 ≈ 22,74
- Steht dort **5, 6, 7, 8 oder 9** → **aufrunden** (n-te Stelle +1).
  Beispiele: 9,86 ≈ 9,9 · 22,747 ≈ 22,75

> **Schritt für Schritt:** 1,714 285 auf 2 Stellen runden → 3. Stelle ist **4** → abrunden → **1,71**.

## 1.3 Zehnerpotenzen
Unser Zahlensystem ist ein **Stellenwertsystem zur Grundzahl 10** (Dezimalsystem). Die *Stufenzahlen* 1, 10, 100, 1000 … unterscheiden sich nur durch die Anzahl der Nullen. Daraus entsteht die **verkürzte Schreibweise** als Potenz:

| Zahl | Potenz | | Zahl | Potenz |
|------|:------:|---|------|:------:|
| 1 | 10⁰ | | 100 000 | 10⁵ |
| 10 | 10¹ | | 1 000 000 | 10⁶ |
| 100 | 10² | | 1 Mrd. | 10⁹ |
| 1 000 | 10³ | | 1 Bio. | 10¹² |
| 10 000 | 10⁴ | | … | … |

- **Basis (Grundzahl):** 10 · **Exponent (Hochzahl):** Anzahl der Nullen.
- **Negative Exponenten** für kleine Zahlen: 0,001 = 10⁻³ · 0,000001 = 10⁻⁶.

**Wissenschaftliche Schreibweise:** eine Zahl zwischen 1 und 10, mal 10ᵏ.
- 250 kW = 2,5 · 10⁵ W · 510 Billionen m² = 5,1 · 10¹⁴ m² · 8 µm = 8 · 10⁻⁶ m

**Vorsätze (SI-Präfixe):** k = 10³ · M = 10⁶ · G = 10⁹ · T = 10¹² · m = 10⁻³ · µ = 10⁻⁶ · n = 10⁻⁹ · p = 10⁻¹².

> **Lehrbeispiel (Lichtjahr):** Licht ≈ 300 000 km/s. 1 Jahr = 365 · 24 · 3600 s.
> 1 Lj = 365 · 24 · 3600 s · 300 000 km/s ≈ 9 460 800 000 000 km ≈ **9,46 · 10¹² km**.
> → Die Zehnerpotenz macht das Ergebnis überhaupt erst lesbar.

## 1.4 Zweiersystem (Dualsystem)
Grundsätzlich kann jede Zahl außer 1 Stufenzahl sein. Im **Zweiersystem** ist die Stufenzahl **2**; es gibt nur die Ziffern **0 und 1**. Weil sich 0/1 leicht als „Schalter offen/geschlossen" darstellen lassen, ist es die Grundlage der **Digitaltechnik** (Binärzahlen).

**Stellenwerte = Zweierpotenzen:**
| 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

**Dual → Dezimal:** Stellenwerte der 1er addieren.
- 1011₂ = 1·8 + 0·4 + 1·2 + 1·1 = **11**

**Dezimal → Dual (Lehrbeispiel: 125):** größte passende Zweierpotenz abziehen:
125 − 64 = 61 → 61 − 32 = 29 → 29 − 16 = 13 → 13 − 8 = 5 → 5 − 4 = 1 → 1 − 1 = 0.
Genutzt: 64, 32, 16, 8, 4, 1 (nicht 2) → **125 = 1111101₂**.

---

# 2 Zahlenmengen
Die Mengen bauen aufeinander auf: **ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ**. Jede Erweiterung macht eine vorher „unmögliche" Rechnung möglich.

## 2.1 Natürliche Zahlen (ℕ)
Die Zählzahlen 1, 2, 3, … (mit Null: ℕ₀). Addition und Multiplikation immer möglich; Subtraktion **nicht** immer (3 − 5 hat in ℕ keine Lösung).

## 2.2 Ganze Zahlen (ℤ)
ℕ **plus** die negativen Zahlen und die Null: …, −2, −1, 0, 1, 2, … Damit ist die **Subtraktion immer lösbar** (3 − 5 = −2). Division aber noch nicht (3 : 2 ∉ ℤ).

## 2.3 Rationale Zahlen (ℚ)
Alle Zahlen, die sich als **Quotient zweier ganzer Zahlen** p/q (q ≠ 0) schreiben lassen (Brüche).
- Positiv: +2,5 · +⅓ · 7,65 — Negativ: −4,7 · −4⁄9 · −1
- **Jede ganze Zahl ist auch rational:** 2 = 6⁄3 = 8⁄4 · −1 = −2⁄2.
- **Unechte Brüche als gemischte Zahl:** 12⁄5 = 2 2⁄5 · −14⁄3 = −4 2⁄3.
- **Dezimaldarstellung:** immer **endlich** (0,75) oder **periodisch** (⅓ = 0,3̄).

## 2.4 Reelle Zahlen (ℝ)
ℚ **plus** die **irrationalen Zahlen** — unendliche, **nicht**-periodische Dezimalzahlen, die sich *nicht* als Bruch schreiben lassen: √2, π, e. Erst ℝ füllt die Zahlengerade **lückenlos**.

## 2.5 Komplexe Zahlen (ℂ)
Erweitern ℝ um die **imaginäre Einheit i** mit der Festlegung **i² = −1**. Damit wird z. B. √(−1) = i lösbar. Form: **a + b·i** (a = Realteil, b = Imaginärteil), z. B. 3 + 2i. Wichtig u. a. in Elektrotechnik (Wechselstrom).

---

# 3 Grundrechenarten

## 3.1 Addition und Subtraktion
- **Begriffe:** Summand + Summand = **Summe** · Minuend − Subtrahend = **Differenz**.
- **Vorzeichenregeln:**
  - Plus und Minus „heben sich zum Rechenzeichen auf": 5 + (−3) = 5 − 3 = **2**.
  - Minus und Minus wird Plus: 5 − (−3) = 5 + 3 = **8**.

## 3.2 Multiplikation und Division
- **Begriffe:** Faktor · Faktor = **Produkt** · Dividend : Divisor = **Quotient**.
- **Vorzeichenregel:** gleiche Vorzeichen → **+**, verschiedene → **−**.
  - (−4)·(−3) = **+12** · (−4)·3 = **−12** · (−12) : (−4) = **+3**.
- ⚠️ **Division durch 0 ist nicht definiert** (es gibt keine Zahl · 0 = Dividend).

## 3.3 Klammerrechnen und Faktorisieren
**Rangordnung der Operationen:**
1. **Klammern** zuerst — von **innen nach außen**: rund `( )` → eckig `[ ]` → geschweift `{ }`.
2. **Potenzen**
3. **Punktrechnung** (·, :) *vor* **Strichrechnung** (+, −).

- Beispiel Punkt vor Strich: 5 · 3 + 9 = 15 + 9 = **24**.
- Beispiel Klammer zuerst: 10 + (25 − 15) = 10 + 10 = **20**.

**Klammer-Regeln:**
- **Plusklammer** (Pluszeichen davor): Klammer kann weggelassen werden, Vorzeichen bleiben. 17 + (−3 + 18) = 17 − 3 + 18 = **32**.
- **Minusklammer** (Minuszeichen davor): beim Weglassen **alle** Vorzeichen in der Klammer umkehren. 20 − (5 − 8) = 20 − 5 + 8 = **23**.
- **Ausmultiplizieren (Distributivgesetz):** a·(b + c) = a·b + a·c → 3·(2x + 4) = 6x + 12.
- **Faktorisieren (Ausklammern):** gemeinsamen Faktor herausziehen — a·b + a·c = a·(b + c) → 6x + 9 = 3·(2x + 3).

## 3.4 Binomische Formeln
Herleitung 1. Formel: (a + b)(a + b) zerlegt das Quadrat der Seitenlänge (a+b) in a² + ab + ab + b².

| Nr. | Formel | ausmultipliziert | faktorisiert (Beispiel) |
|:---:|--------|------------------|--------------------------|
| 1. | (a + b)² | a² + 2ab + b² | (a + 5)² = a² + 10a + 25 |
| 2. | (a − b)² | a² − 2ab + b² | (x − 3)² = x² − 6x + 9 |
| 3. | (a + b)(a − b) | a² − b² | (x + 4)(x − 4) = x² − 16 |

> **Lehrbeispiel:** (15r + 3s)² = (15r)² + 2·(15r)·(3s) + (3s)² = **225r² + 90rs + 9s²**.
> **Rückwärts (faktorisieren):** x² − 16 = x² − 4² = **(x + 4)(x − 4)** (3. binomische Formel).

## 3.5 Polynomdivision
**Zweck:** Ein Polynom durch einen Term ersten Grades (x − e) teilen, um es zu **faktorisieren** und den Grad zu senken — hilfreich beim Lösen von Gleichungen höheren Grades.

**Ausgangslage:** (3x + 5)(2x − 6) = 6x² − 18x + 10x − 30 = 6x² − 8x − 30 (ein *Polynom*). Ist ein Faktor bekannt, liefert die Division den anderen.

**Schritt für Schritt: (6x² − 8x − 30) : (2x − 6)**
1. Höchste Glieder teilen: 6x² : 2x = **3x**.
2. 3x · (2x − 6) = 6x² − 18x → abziehen: (6x² − 8x) − (6x² − 18x) = **10x**. Rest herunterziehen: 10x − 30.
3. 10x : 2x = **5**.
4. 5 · (2x − 6) = 10x − 30 → abziehen → **Rest 0**.

→ Ergebnis: **(6x² − 8x − 30) : (2x − 6) = 3x + 5**.

---

# ✅ Lernkontrolle – das musst du können
- Zahlen korrekt **runden** (Regel der (n+1)-ten Stelle) und begründen, *warum* gerundet wird.
- Zwischen **Zehnerpotenzen / SI-Vorsätzen** und Normalzahl sicher umrechnen; wissenschaftliche Schreibweise.
- **Dezimal ↔ Dual** umwandeln (Zweierpotenzen).
- Die **Zahlenmengen** ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ unterscheiden, Beispiele zuordnen und die jeweilige Erweiterung begründen.
- **Vorzeichen-, Klammer- und Rangregeln** anwenden (Punkt vor Strich, Minusklammer).
- Die **drei binomischen Formeln** vorwärts und rückwärts.
- Eine **Polynomdivision** vollständig durchrechnen.

→ Karteikarten: `Karteikarten/Semester-1/Mathematik_LM1.csv`
→ Nachschlagen einzelner Begriffe: `Lexikon/mathematik.md`
