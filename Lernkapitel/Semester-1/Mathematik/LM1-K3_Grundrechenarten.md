# Mathematik I · Lernmodul 1 · Kapitel 3
# Grundrechenarten

> **Lernkapitel zum Selbststudium.** Quelle: DAA Mathematik I, Lernmodul 1, Lernbereich 3 · **Zeitaufwand: ca. 5–6 Stunden**

**Was du am Ende können musst**
- **Vorzeichenregeln** bei allen vier Grundrechenarten sicher anwenden.
- Die **Rangfolge** der Rechenarten einhalten (Klammer, Potenz, Punkt, Strich).
- **Klammern auflösen** – besonders die Minusklammer.
- **Ausmultiplizieren** und **Faktorisieren** (ausklammern).
- Die **drei binomischen Formeln** vorwärts und rückwärts anwenden.
- Eine **Polynomdivision** vollständig durchrechnen.

**Inhalt:** [3.1 Addition/Subtraktion](#31-addition-und-subtraktion) · [3.2 Multiplikation/Division](#32-multiplikation-und-division) · [3.3 Klammern & Faktorisieren](#33-klammerrechnen-und-faktorisieren) · [3.4 Binomische Formeln](#34-binomische-formeln) · [3.5 Polynomdivision](#35-polynomdivision) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

Dieses Kapitel ist das **Handwerkszeug** für alles, was danach kommt. Ohne sichere Klammer- und Vorzeichenregeln scheiterst du später an jeder Gleichung, jeder Umstellung einer Formel und jeder Statikaufgabe.

> **Das Wichtigste vorweg:** In der Statik musst du Formeln ständig **umstellen** – nach der gesuchten Größe auflösen. Wer beim Klammerauflösen ein Vorzeichen verliert, bekommt ein falsches Ergebnis, das oft nicht einmal auffällt. Deshalb lohnt sich hier gründliches Üben mehr als irgendwo sonst.

---

## 3.1 Addition und Subtraktion

### Begriffe

```
   7    +    5    =   12              9   −   4   =   5
   ↑         ↑         ↑              ↑       ↑       ↑
Summand  Summand    Summe         Minuend Subtrahend Differenz
```

### Vorzeichenregeln

> ### 💡 Merke – die zwei Fälle
> **Plus und Minus treffen aufeinander → Minus:**
> ```
> 5 + (−3) = 5 − 3 = 2
> ```
> **Minus und Minus treffen aufeinander → Plus:**
> ```
> 5 − (−3) = 5 + 3 = 8
> ```

**Merkhilfe:** Zwei gleiche Zeichen ergeben Plus, zwei verschiedene ergeben Minus.

| Rechnung | Umgeformt | Ergebnis |
|----------|-----------|----------|
| 8 + (+3) | 8 + 3 | 11 |
| 8 + (−3) | 8 − 3 | 5 |
| 8 − (+3) | 8 − 3 | 5 |
| 8 − (−3) | 8 + 3 | 11 |

### Addition negativer Zahlen

| Fall | Regel | Beispiel |
|------|-------|----------|
| **beide negativ** | Beträge addieren, Vorzeichen minus | (−7) + (−5) = −12 |
| **verschiedene Vorzeichen** | Beträge subtrahieren, Vorzeichen der **größeren** Zahl | (−7) + (+5) = −2 |
| | | (+7) + (−5) = +2 |

### 🏗️ Bau-Beispiel – Höhenberechnung im Nivellement

Bei einem Nivellement werden Höhenunterschiede addiert. Ein Standpunkt liegt auf **+2,45 m**, dann geht es **−0,85 m** hinunter, danach **+1,20 m** hinauf und schließlich **−0,35 m**.

```
h = 2,45 + (−0,85) + 1,20 + (−0,35)
  = 2,45 − 0,85 + 1,20 − 0,35
  = 1,60 + 1,20 − 0,35
  = 2,80 − 0,35
  = 2,45 m
```

> **Praxis-Tipp:** Rechne immer **von links nach rechts** in kleinen Schritten und schreib jedes Zwischenergebnis auf. Wer versucht, alles auf einmal im Kopf zu machen, verliert Vorzeichen.

---

## 3.2 Multiplikation und Division

### Begriffe

```
   6    ·    4    =   24              20   :   5   =   4
   ↑         ↑         ↑              ↑        ↑       ↑
 Faktor   Faktor   Produkt        Dividend Divisor Quotient
```

### Vorzeichenregel

> ### 💡 Merke – die wichtigste Regel überhaupt
> **Gleiche Vorzeichen → Ergebnis positiv**
> **Verschiedene Vorzeichen → Ergebnis negativ**
>
> Das gilt **gleichermaßen für Multiplikation und Division**.

| Rechnung | Vorzeichen | Ergebnis |
|----------|-----------|----------|
| (+4) · (+3) | gleich | **+12** |
| (−4) · (−3) | gleich | **+12** |
| (+4) · (−3) | verschieden | **−12** |
| (−4) · (+3) | verschieden | **−12** |
| (−12) : (−4) | gleich | **+3** |
| (−12) : (+4) | verschieden | **−3** |

### Mehrere Faktoren

Bei mehreren Faktoren zählst du die **Anzahl der Minuszeichen**:

> ### 💡 Merke
> **Gerade Anzahl von Minuszeichen → Ergebnis positiv**
> **Ungerade Anzahl von Minuszeichen → Ergebnis negativ**

```
(−2) · (−3) · (−4) = −24        drei Minus → ungerade → negativ
(−2) · (−3) · (−4) · (−1) = +24 vier Minus → gerade → positiv
```

### Division durch Null

> ### ⚠️ Wichtig
> **Die Division durch 0 ist nicht definiert.**
> Es gibt keine Zahl, die mit 0 multipliziert einen Wert ungleich 0 ergibt. `5 : 0` ist keine gültige Rechnung – auch nicht „unendlich".
>
> Im Taschenrechner erscheint dann `ERROR` oder `Math ERROR`. In der Statik bedeutet das meist: Du hast eine falsche Formel benutzt oder eine Größe vergessen.

### 🏗️ Bau-Beispiel – Materialkosten

Du bestellst für eine Baustelle:
- 45 m³ Beton zu 118 €/m³
- 2,4 t Bewehrungsstahl zu 950 €/t
- Abzug: 3 m³ Beton werden zurückgegeben

```
Kosten = 45 · 118 + 2,4 · 950 + (−3) · 118
       = 5310 + 2280 − 354
       = 7236 €
```

> **Beachte die Rangfolge:** Erst alle Produkte (Punktrechnung), dann addieren/subtrahieren (Strichrechnung). Genau darum geht es im nächsten Abschnitt.

---

## 3.3 Klammerrechnen und Faktorisieren

### Die Rangfolge der Rechenarten

Wenn verschiedene Rechenarten in einem Term vorkommen, entscheidet die **Reihenfolge** über das Ergebnis.

> ### 💡 Die Rangfolge (auswendig!)
> 1. **Klammern** – von innen nach außen
> 2. **Potenzen und Wurzeln**
> 3. **Punktrechnung** (·, :)
> 4. **Strichrechnung** (+, −)
>
> Merksatz: **„Klammer vor Potenz vor Punkt vor Strich."**

### 📐 Lehrbeispiel 1 – Punkt vor Strich

```
5 · 3 + 9 = 15 + 9 = 24
```
**Nicht** 5 · 12 = 60! Die Multiplikation kommt zuerst.

### 📐 Lehrbeispiel 2 – Klammer zuerst

```
10 + (25 − 15) = 10 + 10 = 20
```

### 📐 Lehrbeispiel 3 – alle Stufen

```
2 · (3 + 4²) = 2 · (3 + 16) = 2 · 19 = 38
```
Reihenfolge: erst die Potenz **in** der Klammer (4² = 16), dann die Klammer (19), dann mal 2.

### Die drei Klammerebenen

Bei verschachtelten Klammern nutzt man verschiedene Formen:

| Klammer | Zeichen | Ebene |
|---------|:-------:|-------|
| **rund** | ( ) | unterste (innen) |
| **eckig** | [ ] | mittlere |
| **geschweift** | { } | oberste (außen) |

> ### 💡 Merke
> **Immer von innen nach außen auflösen** – zuerst die runde, dann die eckige, dann die geschweifte Klammer.

```
{12 − [5 + (3 − 1)]}
= {12 − [5 + 2]}
= {12 − 7}
= 5
```

### Plusklammer und Minusklammer

Das ist die wichtigste Regel dieses Kapitels:

> ### 💡 Plusklammer
> Steht ein **Pluszeichen** vor der Klammer, kann sie einfach **weggelassen** werden. Die Vorzeichen **bleiben unverändert**.
> ```
> 17 + (−3 + 18) = 17 − 3 + 18 = 32
> ```

> ### 💡 Minusklammer
> Steht ein **Minuszeichen** vor der Klammer, müssen beim Weglassen **alle Vorzeichen in der Klammer umgekehrt** werden.
> ```
> 20 − (5 − 8) = 20 − 5 + 8 = 23
> ```

### 📐 Lehrbeispiel 4 – Minusklammer Schritt für Schritt

```
15 − (4 − 9 + 2)
```

| Schritt | Rechnung | Erklärung |
|---------|----------|-----------|
| 1 | 15 − (4 − 9 + 2) | Minuszeichen vor der Klammer |
| 2 | 15 − 4 + 9 − 2 | **alle** Vorzeichen umkehren: +4→−4, −9→+9, +2→−2 |
| 3 | 11 + 9 − 2 | von links rechnen |
| 4 | **18** | |

**Kontrolle:** Erst die Klammer ausrechnen: 4 − 9 + 2 = −3. Dann 15 − (−3) = 15 + 3 = 18 ✓

### Ausmultiplizieren (Distributivgesetz)

> ### 💡 Merke
> ```
> a · (b + c) = a · b + a · c
> ```
> Der Faktor vor der Klammer wird mit **jedem** Glied in der Klammer multipliziert.

```
3 · (2x + 4) = 3 · 2x + 3 · 4 = 6x + 12
```

**Bei negativem Faktor** aufpassen:
```
−5 · (2a − 3) = −10a + 15
```

### Faktorisieren (Ausklammern)

Das ist die **Umkehrung** des Ausmultiplizierens:

> ### 💡 Merke
> ```
> a · b + a · c = a · (b + c)
> ```
> Den in **allen** Summanden enthaltenen gemeinsamen Faktor herausziehen.

### So gehst du vor

1. Suche den **größten gemeinsamen Faktor** aller Summanden (Zahl und/oder Variable).
2. Schreibe ihn **vor die Klammer**.
3. Teile jeden Summanden durch diesen Faktor – das Ergebnis kommt **in** die Klammer.
4. **Probe:** Multipliziere zurück aus.

### 📐 Lehrbeispiel 5 – Ausklammern

| Aufgabe | gemeinsamer Faktor | Ergebnis | Probe |
|---------|--------------------|----------|-------|
| 6x + 9 | 3 | 3(2x + 3) | 3·2x + 3·3 = 6x+9 ✓ |
| 4a² − 8a | 4a | 4a(a − 2) | 4a·a − 4a·2 = 4a²−8a ✓ |
| 12xy + 18y | 6y | 6y(2x + 3) | 6y·2x + 6y·3 ✓ |

### 🏗️ Bau-Beispiel 1 – Wandfläche mit Öffnungen

Eine Wand ist **6,50 m** lang und **2,75 m** hoch. Darin sind **2 Fenster** à 1,26 m × 1,38 m und **1 Tür** 1,01 m × 2,135 m. Wie groß ist die zu verputzende Fläche?

**Ansatz mit Klammer:**
```
A = 6,50 · 2,75 − (2 · 1,26 · 1,38 + 1,01 · 2,135)
```

| Schritt | Rechnung |
|---------|----------|
| 1. Bruttofläche | 6,50 · 2,75 = 17,875 m² |
| 2. Fenster (Klammer innen) | 2 · 1,26 · 1,38 = 3,4776 m² |
| 3. Tür | 1,01 · 2,135 = 2,156 35 m² |
| 4. Abzüge summieren | 3,4776 + 2,15635 = 5,633 95 m² |
| 5. Subtrahieren | 17,875 − 5,63395 = 12,241 05 m² |
| 6. Runden | **A ≈ 12,24 m²** |

> **Warum die Klammer wichtig ist:** Ohne Klammer würdest du schreiben `17,875 − 3,4776 + 2,15635` und die Tür fälschlich **addieren** statt abziehen. Das ist genau der Minusklammer-Fehler – und im Aufmaß kostet er bares Geld.

### 🏗️ Bau-Beispiel 2 – Ausklammern spart Rechenarbeit

Ein Bauteil besteht aus 5 gleichen Feldern. Jedes Feld hat die Fläche 2,40 m × 1,15 m. Zusätzlich hat jedes Feld einen Zuschlag von 2,40 m × 0,35 m.

**Umständlich:**
```
A = 5 · (2,40 · 1,15) + 5 · (2,40 · 0,35)
  = 5 · 2,76 + 5 · 0,84
  = 13,80 + 4,20 = 18,00 m²
```

**Elegant durch Ausklammern:**
```
A = 5 · 2,40 · (1,15 + 0,35)
  = 5 · 2,40 · 1,50
  = 18,00 m²
```

> **Das ist keine Spielerei:** Wer 2,40 und die 5 ausklammert, rechnet **eine** Multiplikation statt vier – weniger Tipparbeit, weniger Fehlerquellen. Genau so arbeitet man in der Statik mit Formeln.

---

## 3.4 Binomische Formeln

### Woher sie kommen

Ein Quadrat hat die Seitenlänge **(a + b)**. Seine Fläche ist:

```
A = (a + b) · (a + b) = (a + b)²
```

Zerlegt man das Quadrat, entstehen **vier Teilflächen**:

```
        a          b
     ┌──────┬──────────┐
   a │  a²  │   a·b    │
     ├──────┼──────────┤
   b │  a·b │    b²    │
     └──────┴──────────┘
```

```
A = a² + ab + ab + b² = a² + 2ab + b²
```

> ### 💡 Die drei binomischen Formeln
> **1. Binom:**  `(a + b)² = a² + 2ab + b²`
> **2. Binom:**  `(a − b)² = a² − 2ab + b²`
> **3. Binom:**  `(a + b)(a − b) = a² − b²`

### So gehst du vor – Ausmultiplizieren

1. **Erkenne** die Form: Steht da ein Quadrat einer Summe/Differenz oder ein Produkt aus Summe und Differenz?
2. **Bestimme a und b** – auch mit Zahlen und Variablen davor.
3. **Setze in die Formel ein**, jeweils komplett in Klammern.
4. **Rechne aus.**

### 📐 Lehrbeispiel 1 – 1. Binom

```
(a + 5)² = a² + 2·a·5 + 5² = a² + 10a + 25
```

### 📐 Lehrbeispiel 2 – 1. Binom mit Faktoren

```
(15r + 3s)²
```

| Schritt | Rechnung |
|---------|----------|
| a = 15r, b = 3s | |
| a² | (15r)² = 225r² |
| 2ab | 2 · 15r · 3s = 90rs |
| b² | (3s)² = 9s² |
| **Ergebnis** | **225r² + 90rs + 9s²** |

> **Achtung:** (15r)² heißt 15² · r² = **225r²** – der Faktor wird **mitquadriert**! Ein sehr häufiger Fehler.

### 📐 Lehrbeispiel 3 – 2. Binom

```
(x − 3)² = x² − 2·x·3 + 3² = x² − 6x + 9
```

### 📐 Lehrbeispiel 4 – 3. Binom

```
(x + 4)(x − 4) = x² − 4² = x² − 16
```

Die gemischten Glieder heben sich auf:
```
(x+4)(x−4) = x² − 4x + 4x − 16 = x² − 16
```

### Rückwärts: Faktorisieren mit Binomen

> ### 💡 So erkennst du sie
> **Drei Glieder, erstes und letztes sind Quadrate, mittleres ist 2·√erstes·√letztes** → 1. oder 2. Binom
> **Zwei Glieder, beide Quadrate, dazwischen ein Minus** → 3. Binom

| Aufgabe | Erkennung | Ergebnis |
|---------|-----------|----------|
| x² − 16 | x² und 4², Minus dazwischen | **(x + 4)(x − 4)** |
| a² + 10a + 25 | a², 5², Mitte = 2·a·5 | **(a + 5)²** |
| 4y² − 12y + 9 | (2y)², 3², Mitte = 2·2y·3 | **(2y − 3)²** |

### 🏗️ Bau-Beispiel 1 – Fundament vergrößern

Ein quadratisches Fundament mit Seitenlänge **a** soll rundum um **b** vergrößert werden. Um wie viel wächst die Fläche?

```
Neue Fläche:  (a + b)² = a² + 2ab + b²
Alte Fläche:   a²
Zuwachs:      2ab + b²
```

**Mit Zahlen:** a = 2,00 m, b = 0,30 m

```
Zuwachs = 2 · 2,00 · 0,30 + 0,30²
        = 1,20 + 0,09
        = 1,29 m²
```

**Probe:** (2,30)² − (2,00)² = 5,29 − 4,00 = 1,29 m² ✓

> **Was du hier siehst:** Der Zuwachs besteht aus **zwei Streifen** (2ab) und einem **Eckquadrat** (b²). Genau das zeigt die binomische Formel – sie ist keine abstrakte Regel, sondern beschreibt eine echte Fläche.

### 🏗️ Bau-Beispiel 2 – Kreisringfläche (3. Binom)

Ein Rohr hat den Außenradius **R = 0,40 m** und den Innenradius **r = 0,35 m**. Wie groß ist die Querschnittsfläche der Rohrwand?

**Standardweg:**
```
A = π·R² − π·r² = π·(R² − r²)
  = π·(0,40² − 0,35²)
  = π·(0,16 − 0,1225)
  = π·0,0375 = 0,117 809... m²  ≈  0,1178 m²
```

**Mit dem 3. Binom (schneller und genauer im Kopf):**
```
R² − r² = (R + r)(R − r)
        = (0,40 + 0,35)(0,40 − 0,35)
        = 0,75 · 0,05
        = 0,0375

A = π · 0,0375 ≈ 0,1178 m²
```

> **Warum das besser ist:** Statt zwei Quadrate zu rechnen und zu subtrahieren, machst du eine Addition, eine Subtraktion und eine Multiplikation – im Kopf machbar. Bei Rundungen ist der Weg außerdem **stabiler**, weil du nicht zwei große, fast gleiche Zahlen voneinander abziehst.

### 🏗️ Bau-Beispiel 3 – Betonvolumen einer Ringmauer

Eine kreisrunde Schachtwand: Außendurchmesser **2,40 m**, Wanddicke **0,20 m**, Höhe **1,50 m**. Wie viel Beton?

```
R = 1,20 m
r = 1,20 − 0,20 = 1,00 m

A = π·(R + r)(R − r) = π·(2,20)(0,20) = π·0,44 = 1,382 3 m²
V = A · h = 1,3823 · 1,50 = 2,073 5 m³  ≈  2,07 m³
```

Mit 5 % Zuschlag → **2,2 m³ bestellen**.

> ### ⚠️ Typische Fehler bei Binomen
> **1. Mittleres Glied vergessen.** (a+b)² ist **nicht** a² + b². Der Term 2ab gehört dazu – das ist der häufigste Fehler in der ganzen Mathematik.
> **2. Faktor nicht mitquadriert.** (3x)² = **9**x², nicht 3x².
> **3. Vorzeichen beim 2. Binom.** (a−b)² = a² **−** 2ab **+** b² – das b² ist **positiv**, weil (−b)² positiv ist.
> **4. 3. Binom verwechselt.** (a+b)(a−b) = a² − b², aber (a−b)² = a² − 2ab + b². Zwei völlig verschiedene Sachen.

---

## 3.5 Polynomdivision

### Was ist ein Polynom?

Multipliziert man zwei Summenterme aus, entsteht ein **Polynom**:

```
(3x + 5)(2x − 6) = 6x² − 18x + 10x − 30
                 = 6x² − 8x − 30
```

Ein Polynom ist eine Summe aus Gliedern der Form `a·xⁿ`.

### Wozu Polynomdivision?

Umgekehrt aus einem Polynom wieder ein **Produkt** zu machen (faktorisieren) ist nicht so einfach wie bei den Binomen. **Ist aber ein Faktor bereits bekannt**, lässt sich der zweite durch **Polynomdivision** berechnen.

> ### 💡 Wofür du das brauchst
> - Ein Polynom **faktorisieren** und damit seinen Grad um eine Potenz senken.
> - **Nullstellen** von Gleichungen höheren Grades finden (kommt in LM3).
> - Terme **vereinfachen**, bevor man weiterrechnet.

### So gehst du vor

Es funktioniert wie die schriftliche Division bei Zahlen:

1. **Höchstes Glied** des Dividenden durch **höchstes Glied** des Divisors teilen → erstes Glied des Ergebnisses.
2. Dieses Ergebnis mit dem **ganzen Divisor** multiplizieren.
3. Das Produkt vom Dividenden **abziehen** (Vorzeichen beachten!).
4. Nächstes Glied **herunterziehen**.
5. Wiederholen, bis kein Rest bleibt.

### 📐 Lehrbeispiel 1 – vollständig durchgerechnet

Berechne `(6x² − 8x − 30) : (2x − 6)`

**Schritt 1:** Höchste Glieder teilen
```
6x² : 2x = 3x
```

**Schritt 2:** Zurückmultiplizieren
```
3x · (2x − 6) = 6x² − 18x
```

**Schritt 3:** Abziehen
```
  6x² −  8x − 30
−(6x² − 18x)
─────────────────
   0  + 10x − 30
```
> **Achtung:** −8x − (−18x) = −8x + 18x = **+10x**. Hier gehen die meisten Fehler passieren!

**Schritt 4:** Weiter mit dem Rest
```
10x : 2x = 5
5 · (2x − 6) = 10x − 30
```

**Schritt 5:** Abziehen
```
  10x − 30
−(10x − 30)
───────────
      0
```

**Ergebnis:**
```
(6x² − 8x − 30) : (2x − 6) = 3x + 5
```

**Probe:** (3x + 5)(2x − 6) = 6x² − 18x + 10x − 30 = 6x² − 8x − 30 ✓

### 📐 Lehrbeispiel 2 – einfacher Fall

Berechne `(x² + 5x + 6) : (x + 2)`

| Schritt | Rechnung | Zwischenstand |
|---------|----------|---------------|
| 1 | x² : x = **x** | |
| 2 | x·(x+2) = x² + 2x | abziehen → 3x + 6 |
| 3 | 3x : x = **3** | |
| 4 | 3·(x+2) = 3x + 6 | abziehen → **Rest 0** |

**Ergebnis: x + 3**

Damit gilt: x² + 5x + 6 = (x + 2)(x + 3)

> ### ⚠️ Typische Fehler bei der Polynomdivision
> **1. Vorzeichen beim Abziehen.** Du ziehst einen **ganzen Term** ab – alle Vorzeichen darin kehren sich um. Schreib den abzuziehenden Term in Klammern!
> **2. Glieder nicht sortiert.** Dividend und Divisor müssen nach **fallenden Potenzen** geordnet sein (x², dann x, dann Zahl).
> **3. Fehlende Potenzen.** Fehlt z. B. das x-Glied, setze **0x** ein, damit die Spalten stimmen.
> **4. Probe weglassen.** Rückmultiplizieren dauert 20 Sekunden und findet jeden Fehler.

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Vorzeichen bei Addition/Subtraktion
**1.1** (−8) + (−6) · **1.2** 15 − (−7) · **1.3** (−12) + 5 · **1.4** −9 − (+4)

<details><summary>Lösung anzeigen</summary>

**1.1** beide negativ → Beträge addieren → **−14**
**1.2** Minus und Minus → Plus → 15 + 7 = **22**
**1.3** verschiedene Vorzeichen → 12 − 5 = 7, Vorzeichen der größeren (12, negativ) → **−7**
**1.4** −9 − 4 = **−13**
</details>

### Aufgabe 2 · Vorzeichen bei Multiplikation/Division
**2.1** (−6) · (−7) · **2.2** (−5) · 8 · **2.3** (−36) : (−9) · **2.4** (−2)·(−3)·(−5)

<details><summary>Lösung anzeigen</summary>

**2.1** gleiche Vorzeichen → **+42**
**2.2** verschiedene → **−40**
**2.3** gleiche → **+4**
**2.4** drei Minuszeichen → ungerade → **−30**
</details>

### Aufgabe 3 · Rangfolge
**3.1** 4 + 3 · 5 · **3.2** (4 + 3) · 5 · **3.3** 20 − 12 : 4 · **3.4** 2 · 3² · **3.5** (2 · 3)²

<details><summary>Lösung anzeigen</summary>

**3.1** Punkt vor Strich: 4 + 15 = **19**
**3.2** Klammer zuerst: 7 · 5 = **35**
**3.3** Punkt vor Strich: 20 − 3 = **17**
**3.4** Potenz vor Punkt: 2 · 9 = **18**
**3.5** Klammer zuerst: 6² = **36**
</details>

### Aufgabe 4 · Klammern auflösen
**4.1** 20 − (7 − 12) · **4.2** 15 − (4 − 9 + 2) · **4.3** {12 − [5 + (3 − 1)]}

<details><summary>Lösung anzeigen</summary>

**4.1** Minusklammer: 20 − 7 + 12 = **25**
*(Kontrolle: 7−12 = −5, also 20 − (−5) = 25 ✓)*

**4.2** Alle Vorzeichen umkehren: 15 − 4 + 9 − 2 = **18**

**4.3** Von innen: (3−1) = 2 → [5+2] = 7 → {12−7} = **5**
</details>

### Aufgabe 5 · Ausmultiplizieren
**5.1** 4(3x − 2) · **5.2** −3(2a + 5) · **5.3** 2x(x − 4)

<details><summary>Lösung anzeigen</summary>

**5.1** 12x − 8
**5.2** −6a − 15 *(Vorzeichen beachten!)*
**5.3** 2x² − 8x
</details>

### Aufgabe 6 · Ausklammern
**6.1** 8x + 12 · **6.2** 15a² − 25a · **6.3** 9xy + 6y

<details><summary>Lösung anzeigen</summary>

**6.1** gemeinsamer Faktor 4 → **4(2x + 3)**
**6.2** gemeinsamer Faktor 5a → **5a(3a − 5)**
**6.3** gemeinsamer Faktor 3y → **3y(3x + 2)**
</details>

### Aufgabe 7 · Binome ausmultiplizieren
**7.1** (x + 6)² · **7.2** (2a − 3)² · **7.3** (y + 7)(y − 7) · **7.4** (15r + 3s)²

<details><summary>Lösung anzeigen</summary>

**7.1** x² + 2·x·6 + 36 = **x² + 12x + 36**
**7.2** (2a)² − 2·2a·3 + 9 = **4a² − 12a + 9**
**7.3** y² − 49
**7.4** (15r)² + 2·15r·3s + (3s)² = **225r² + 90rs + 9s²**
</details>

### Aufgabe 8 · Binome faktorisieren
**8.1** x² − 25 · **8.2** a² + 10a + 25 · **8.3** 4y² − 12y + 9 · **8.4** 49 − m²

<details><summary>Lösung anzeigen</summary>

**8.1** 3. Binom: **(x + 5)(x − 5)**
**8.2** 1. Binom (a², 5², Mitte 2·a·5): **(a + 5)²**
**8.3** 2. Binom ((2y)², 3², Mitte 2·2y·3): **(2y − 3)²**
**8.4** 3. Binom: **(7 + m)(7 − m)**
</details>

### Aufgabe 9 · Polynomdivision
**9.1** (x² + 5x + 6) : (x + 2) · **9.2** (6x² − 8x − 30) : (2x − 6)

<details><summary>Lösung anzeigen</summary>

**9.1**
```
x² : x = x  →  x(x+2) = x²+2x  →  Rest 3x+6
3x : x = 3  →  3(x+2) = 3x+6   →  Rest 0
```
**Ergebnis: x + 3**

**9.2**
```
6x² : 2x = 3x  →  3x(2x−6) = 6x²−18x  →  Rest 10x−30
10x : 2x = 5   →  5(2x−6) = 10x−30     →  Rest 0
```
**Ergebnis: 3x + 5**
</details>

### 🏗️ Aufgabe 10 · Wandfläche mit Abzügen
Eine Wand ist **7,20 m × 2,80 m**. Abzuziehen sind **3 Fenster** à 1,01 m × 1,26 m und **1 Tür** 0,885 m × 2,01 m. Berechne die Putzfläche (auf 0,01 m²).

<details><summary>Lösung anzeigen</summary>

**Ansatz:**
```
A = 7,20 · 2,80 − (3 · 1,01 · 1,26 + 0,885 · 2,01)
```

| Schritt | Rechnung |
|---------|----------|
| Bruttofläche | 7,20 · 2,80 = 20,16 m² |
| Fenster | 3 · 1,01 · 1,26 = 3,8178 m² |
| Tür | 0,885 · 2,01 = 1,778 85 m² |
| Abzüge gesamt | 3,8178 + 1,77885 = 5,596 65 m² |
| Putzfläche | 20,16 − 5,59665 = 14,563 35 m² |

**A ≈ 14,56 m²**
</details>

### 🏗️ Aufgabe 11 · Fundament vergrößern
Ein quadratisches Fundament (Seitenlänge **1,80 m**) wird rundum um **0,25 m** verbreitert.
**11.1** Wie viel Fläche kommt hinzu (mit binomischer Formel)? **11.2** Prüfe durch direkte Rechnung.

<details><summary>Lösung anzeigen</summary>

**11.1**
```
Zuwachs = 2ab + b² = 2 · 1,80 · 0,25 + 0,25²
        = 0,90 + 0,0625
        = 0,9625 m²  ≈  0,96 m²
```

**11.2 Probe:**
```
(1,80 + 0,25)² − 1,80² = 2,05² − 1,80²
                       = 4,2025 − 3,24
                       = 0,9625 m² ✓
```
</details>

### 🏗️ Aufgabe 12 · Kreisringfläche
Ein Betonrohr hat **Außendurchmesser 1,20 m** und **Wanddicke 0,12 m**.
**12.1** Berechne die Querschnittsfläche der Wand mit dem 3. Binom. **12.2** Wie viel Beton für 2,50 m Länge?

<details><summary>Lösung anzeigen</summary>

**12.1**
```
R = 0,60 m
r = 0,60 − 0,12 = 0,48 m

A = π(R+r)(R−r) = π · (1,08) · (0,12) = π · 0,1296
  = 0,407 150... m²  ≈  0,4072 m²
```

**12.2**
```
V = A · l = 0,4072 · 2,50 = 1,018 m³  ≈  1,02 m³
```
</details>

### 🏗️ Aufgabe 13 · Ausklammern in der Massenermittlung
Eine Decke besteht aus 8 gleichen Feldern à **3,60 m × 2,40 m**, jedes mit einem Zuschlagsstreifen **3,60 m × 0,60 m**.
Berechne die Gesamtfläche – einmal umständlich, einmal durch Ausklammern.

<details><summary>Lösung anzeigen</summary>

**Umständlich:**
```
A = 8 · (3,60 · 2,40) + 8 · (3,60 · 0,60)
  = 8 · 8,64 + 8 · 2,16
  = 69,12 + 17,28 = 86,40 m²
```

**Durch Ausklammern (8 und 3,60):**
```
A = 8 · 3,60 · (2,40 + 0,60)
  = 28,80 · 3,00
  = 86,40 m² ✓
```

Statt vier Multiplikationen nur zwei – und weniger Fehlerquellen.
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich beherrsche die Vorzeichenregeln bei **allen vier** Grundrechenarten.
- [ ] Ich weiß: gleiche Vorzeichen → plus, verschiedene → minus (bei · und :).
- [ ] Ich kenne die Rangfolge **Klammer – Potenz – Punkt – Strich** auswendig.
- [ ] Ich löse verschachtelte Klammern **von innen nach außen** auf.
- [ ] Bei einer **Minusklammer** kehre ich **alle** Vorzeichen um.
- [ ] Ich kann **ausmultiplizieren** und **ausklammern** (und mache die Probe).
- [ ] Ich kenne die **drei binomischen Formeln** auswendig – vorwärts und rückwärts.
- [ ] Ich vergesse das **mittlere Glied 2ab** nicht.
- [ ] Ich quadriere bei (3x)² auch den **Faktor** mit → 9x².
- [ ] Ich kann eine **Polynomdivision** durchrechnen und beim Abziehen die Vorzeichen umkehren.
- [ ] Ich mache bei jeder Faktorisierung und Division die **Rückprobe**.

**Damit ist Lernmodul 1 abgeschlossen.**
**Nächstes Modul:** LM2 – Funktionen und Gleichungen erster Ordnung
