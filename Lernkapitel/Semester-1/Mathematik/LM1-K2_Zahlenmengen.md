# Mathematik I · Lernmodul 1 · Kapitel 2
# Zahlenmengen

> **Lernkapitel zum Selbststudium.** Quelle: DAA Mathematik I, Lernmodul 1, Lernbereich 2 · **Zeitaufwand: ca. 3–4 Stunden**

**Was du am Ende können musst**
- Die fünf Zahlenmengen **ℕ, ℤ, ℚ, ℝ, ℂ** unterscheiden und Zahlen richtig zuordnen.
- Erklären, **warum** jede Erweiterung nötig war (welche Rechnung vorher nicht ging).
- Mit **Brüchen** sicher rechnen (kürzen, erweitern, umwandeln).
- **Wurzeln** ziehen und irrationale Zahlen erkennen.
- Wissen, was eine **komplexe Zahl** ist und wofür man sie braucht.

**Inhalt:** [2.1 ℕ](#21-natürliche-zahlen-ℕ) · [2.2 ℤ](#22-ganze-zahlen-ℤ) · [2.3 ℚ](#23-rationale-zahlen-ℚ) · [2.4 ℝ](#24-reelle-zahlen-ℝ) · [2.5 ℂ](#25-komplexe-zahlen-ℂ) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

Zahlen sind nicht einfach „Zahlen". Sie sind in **Mengen** eingeteilt, die aufeinander aufbauen:

```
ℕ  ⊂  ℤ  ⊂  ℚ  ⊂  ℝ  ⊂  ℂ
```

Das Zeichen ⊂ heißt „ist Teilmenge von". Jede Menge enthält also alle vorherigen **und** etwas Neues.

> ### 💡 Der rote Faden dieses Kapitels
> **Jede Erweiterung entstand, weil eine Rechnung vorher nicht lösbar war.**
>
> | Menge | Was vorher nicht ging | Was jetzt geht |
> |-------|----------------------|----------------|
> | ℕ | – | zählen, addieren, multiplizieren |
> | ℤ | 3 − 5 | **subtrahieren** ohne Einschränkung |
> | ℚ | 3 : 2 | **dividieren** ohne Einschränkung |
> | ℝ | √2 | **Wurzeln** aus positiven Zahlen |
> | ℂ | √(−4) | **Wurzeln aus negativen Zahlen** |
>
> Wenn du dir das merkst, kannst du die ganze Systematik jederzeit selbst herleiten.

---

## 2.1 Natürliche Zahlen (ℕ)

Die **natürlichen Zahlen** sind die Zählzahlen:

```
ℕ = {1, 2, 3, 4, 5, ...}
```

Nimmt man die Null dazu, schreibt man **ℕ₀ = {0, 1, 2, 3, ...}**.

**Eigenschaften:**
- Es gibt eine **kleinste** Zahl (1 bzw. 0), aber **keine größte** – die Menge ist unendlich.
- Jede Zahl hat einen eindeutigen **Nachfolger**.
- **Addition und Multiplikation** sind immer möglich: 3 + 5 = 8 ✓, 3 · 5 = 15 ✓
- **Subtraktion nicht immer:** 3 − 5 hat in ℕ **keine** Lösung.

### 🏗️ Bau-Bezug
Alles, was man **abzählt**, ist eine natürliche Zahl:
- 350 Hohlblocksteine
- 24 Deckenstützen
- 8 Bewehrungsstäbe pro Meter
- 16 Steigungen einer Treppe

> **Praxis-Regel:** Stückzahlen sind immer natürliche Zahlen. Wenn eine Rechnung „15,26 Fliesenpakete" ergibt, musst du **auf eine natürliche Zahl aufrunden** – 16 Pakete. Halbe Pakete gibt es nicht.

---

## 2.2 Ganze Zahlen (ℤ)

Um **3 − 5** rechnen zu können, braucht man negative Zahlen. Man erweitert ℕ um die negativen Zahlen und die Null:

```
ℤ = {..., −3, −2, −1, 0, +1, +2, +3, ...}
```

**Eigenschaften:**
- Keine kleinste und keine größte Zahl.
- **Subtraktion ist jetzt immer möglich:** 3 − 5 = −2 ✓
- Jede Zahl hat eine **Gegenzahl**: die Gegenzahl von +7 ist −7.
- Der **Betrag** |a| ist der Abstand vom Nullpunkt: |−7| = 7, |+7| = 7.
- **Division noch nicht immer möglich:** 3 : 2 hat in ℤ keine Lösung.

### Die Zahlengerade

```
   −4   −3   −2   −1    0   +1   +2   +3   +4
────┼────┼────┼────┼────┼────┼────┼────┼────┼────►
                        │
                    Nullpunkt
```

Je weiter rechts, desto größer. Deshalb gilt: **−5 < −2** (auch wenn 5 größer als 2 ist!).

### 🏗️ Bau-Beispiel 1 – Höhenkoten

Auf dem Bau wird alles auf einen **Bezugspunkt** bezogen – meist die Oberkante Fertigfußboden Erdgeschoss (**±0,00**).

| Bauteil | Kote | Zahlenmenge |
|---------|------|-------------|
| Oberkante Dachgeschoss | **+6,25 m** | positiv |
| OK Fertigfußboden EG | **±0,00 m** | Null |
| Kellersohle | **−2,80 m** | negativ |
| Fundamentunterkante | **−3,45 m** | negativ |

**Aufgabe:** Wie hoch ist der Höhenunterschied zwischen Dachgeschoss und Fundamentunterkante?

```
Δh = (+6,25 m) − (−3,45 m)
   = 6,25 + 3,45              | Minus und Minus wird Plus
   = 9,70 m
```

> **Merke:** Beim Rechnen mit Koten musst du das **Vorzeichen mitnehmen**. „Minus minus" wird zu „plus" – die häufigste Fehlerquelle bei Höhenberechnungen.

### 🏗️ Bau-Beispiel 2 – Aushubtiefe

Das Gelände liegt bei **−0,35 m**, die Baugrubensohle soll auf **−3,60 m**.

```
Aushubtiefe = (−0,35) − (−3,60) = −0,35 + 3,60 = 3,25 m
```

Es müssen also **3,25 m** ausgehoben werden.

---

## 2.3 Rationale Zahlen (ℚ)

Zwischen zwei ganzen Zahlen lassen sich beliebig viele weitere Zahlen abtragen – so entstehen **Brüche**.

> ### 💡 Definition
> **Rationale Zahlen** sind alle Zahlen, die sich als **Quotient zweier ganzer Zahlen** darstellen lassen:
> ```
> p / q    mit p, q ∈ ℤ  und  q ≠ 0
> ```

**Beispiele:**
- positiv: +2,5 · +1/3 · 7,65
- negativ: −4,7 · −4/9 · −1

Die positiven rationalen Zahlen einschließlich Null bilden **ℚ⁺**, die negativen einschließlich Null **ℚ⁻**.

### Jede ganze Zahl ist auch rational

```
2  = 6/3 = 8/4 = 10/5
−1 = −2/2 = −5/5
```

Deshalb gilt ℤ ⊂ ℚ.

### Gemischte Zahlen

Ein **unechter Bruch** (Zähler größer als Nenner) lässt sich als **gemischte Zahl** schreiben:

```
12/5  = 2 2/5      (denn 5 passt 2-mal in 12, Rest 2)
−14/3 = −4 2/3     (denn 3 passt 4-mal in 14, Rest 2)
```

### Kürzen und Erweitern

> ### 💡 Merke
> **Kürzen:** Zähler und Nenner durch **dieselbe** Zahl teilen – der Wert bleibt gleich.
> **Erweitern:** Zähler und Nenner mit **derselben** Zahl multiplizieren – der Wert bleibt gleich.

```
Kürzen:     18/24 = (18:6) / (24:6) = 3/4
Erweitern:  3/4   = (3·5) / (4·5)   = 15/20
```

### Dezimaldarstellung

Jede rationale Zahl lässt sich als Dezimalzahl schreiben – und zwar **immer** auf eine von zwei Arten:

| Art | Beispiel | Erklärung |
|-----|----------|-----------|
| **endlich** | 3/4 = 0,75 | bricht ab |
| **periodisch** | 1/3 = 0,333… = 0,3̄ | wiederholt sich |
| **periodisch** | 1/7 = 0,142857142857… = 0,‾142857 | Periode aus 6 Ziffern |

> ### 💡 Wichtig für später
> **Endlich oder periodisch → rational.** Wenn eine Dezimalzahl **weder** abbricht **noch** eine Periode hat, ist sie **nicht** rational (siehe 2.4).

### 📐 Lehrbeispiel 1 – Brüche in Dezimalzahlen

| Bruch | Rechnung | Ergebnis |
|-------|----------|----------|
| 3/4 | 3 : 4 | 0,75 (endlich) |
| 1/8 | 1 : 8 | 0,125 (endlich) |
| 2/3 | 2 : 3 | 0,666… = 0,6̄ (periodisch) |
| 5/6 | 5 : 6 | 0,8333… = 0,83̄ (periodisch) |

### 🏗️ Bau-Beispiel 1 – Gefälle als Bruch und Prozent

Ein Flachdach soll **2 % Gefälle** haben. Bei 12 m Länge – wie viel Höhenunterschied?

**Weg 1 – als Bruch:**
```
2 % = 2/100 = 1/50
Δh = 12 m · 1/50 = 12/50 m = 0,24 m = 24 cm
```

**Weg 2 – als Dezimalzahl:**
```
Δh = 12 m · 0,02 = 0,24 m
```

> **Beide Wege sind identisch** – 2 % ist nur eine andere Schreibweise für den Bruch 1/50 bzw. die Dezimalzahl 0,02.

**Gefälleangaben im Bau:**

| Schreibweise | Bedeutung | Beispiel |
|--------------|-----------|----------|
| **2 %** | 2 cm auf 100 cm | Flachdach |
| **1 : 50** | 1 cm auf 50 cm | Entwässerungsrinne |
| **0,02** | Dezimalform | für die Rechnung |

Alle drei sind **derselbe Wert** – 1/50.

### 🏗️ Bau-Beispiel 2 – Mischungsverhältnis Mörtel

Ein Mauermörtel wird im Verhältnis **1 : 4** (Zement : Sand) angesetzt. Wie viel Zement steckt in 250 Litern Mörtel?

**Schritt 1 – Anteile bestimmen:**
```
1 Teil Zement + 4 Teile Sand = 5 Teile gesamt
Zementanteil = 1/5 der Mischung
```

**Schritt 2 – Menge berechnen:**
```
250 l · 1/5 = 50 l Zement
250 l · 4/5 = 200 l Sand
```

**Probe:** 50 + 200 = 250 ✓

> **Merke:** Bei Verhältnissen ist der **Nenner die Summe aller Teile** – nicht die zweite Zahl! Bei 1:4 rechnest du mit **Fünfteln**, nicht mit Vierteln. Klassischer Fehler.

---

## 2.4 Reelle Zahlen (ℝ)

### Das Quadrat einer Zahl

Wird eine Zahl mit sich selbst multipliziert, erhält man ihr **Quadrat**:

### 📐 Lehrbeispiel 1 – Quadrate bilden

| Aufgabe | Rechnung | Ergebnis |
|---------|----------|----------|
| 8² | 8 · 8 | 64 |
| (−1,5)² | (−1,5) · (−1,5) | 2,25 |
| (2/5)² | 2/5 · 2/5 | 4/25 |
| 0² | 0 · 0 | 0 |

> ### 💡 Merke
> **Das Quadrat einer Zahl ist immer größer oder gleich Null.**
> Auch das Quadrat einer negativen Zahl ist positiv, weil „minus mal minus = plus".

### Die Umkehrung: Wurzelziehen

Aus dem Flächeninhalt eines Quadrats soll die Seitenlänge berechnet werden:

```
A = a · a = a²
A = 25 cm²
```

Gesucht ist die Zahl, die mit sich selbst multipliziert 25 ergibt → **a = 5 cm**.

Dafür wurde eine neue Schreibweise eingeführt – die **Quadratwurzel**:

```
√25 = 5      denn 5² = 25
```

| Begriff | Bedeutung |
|---------|-----------|
| **Radikand** | die Zahl unter der Wurzel (hier 25) |
| **Wurzelexponent** | bei der Quadratwurzel die 2, wird meist weggelassen |
| **Wurzelwert** | das Ergebnis (hier 5) |

### Wann wird es irrational?

Manche Wurzeln gehen glatt auf:
```
√4 = 2 · √9 = 3 · √16 = 4 · √25 = 5 · √100 = 10
```

Die meisten aber nicht:
```
√2 = 1,414 213 562 373 095...
```
Diese Dezimalzahl **bricht nie ab** und hat **keine Periode**. Sie lässt sich **nicht** als Bruch schreiben.

> ### 💡 Definition
> Zahlen, die sich **nicht** als Bruch darstellen lassen – also unendliche, **nicht-periodische** Dezimalzahlen – heißen **irrationale Zahlen**.
>
> Die rationalen und die irrationalen Zahlen zusammen bilden die **reellen Zahlen ℝ**.

**Wichtige irrationale Zahlen:**

| Zahl | Wert | Wo sie vorkommt |
|------|------|-----------------|
| √2 | 1,41421… | Diagonale im Quadrat |
| √3 | 1,73205… | Höhe im gleichseitigen Dreieck |
| **π** | 3,14159… | Kreisumfang und -fläche |
| **e** | 2,71828… | Wachstumsvorgänge, ln |

> ### 💡 Erst ℝ füllt die Zahlengerade
> Zwischen den rationalen Zahlen bleiben „Lücken" – genau dort sitzen die irrationalen Zahlen. Erst zusammen füllen sie die Zahlengerade **lückenlos**.

### 🏗️ Bau-Beispiel 1 – Diagonale einer Bodenplatte

Eine quadratische Bodenplatte hat **6,00 m** Seitenlänge. Wie lang ist die Diagonale (für die Rechtwinkligkeitsprüfung)?

```
d² = 6,00² + 6,00² = 36 + 36 = 72
d  = √72 = 8,485 281... m
```

Die exakte Länge ist **irrational** – sie hört nie auf. Für die Baustelle rundest du:
```
d ≈ 8,49 m
```

> **Praxis:** Genau deshalb ist die Diagonalenprüfung auf dem Bau immer eine **Näherung**. Man misst beide Diagonalen und prüft, ob sie **gleich lang** sind – der exakte Wert ist gar nicht nötig.

### 🏗️ Bau-Beispiel 2 – Umfang eines Rundschachts

Ein Schacht hat **d = 1,20 m** Durchmesser. Wie viel Schalungsband brauchst du?

```
U = π · d = 3,14159... · 1,20 m = 3,769 911... m
```

π ist irrational → das Ergebnis ist es auch. Für die Bestellung:
```
U ≈ 3,77 m  →  mit Zuschlag 4,00 m bestellen
```

### 🏗️ Bau-Beispiel 3 – Sparrenlänge

Ein Satteldach: halbe Spannweite **4,50 m**, Kniestockhöhe zur Firsthöhe **3,20 m**. Wie lang ist der Sparren?

```
l² = 4,50² + 3,20² = 20,25 + 10,24 = 30,49
l  = √30,49 = 5,521 775... m  ≈  5,52 m
```

Zuschnittlänge mit Überstand und Verschnitt → **5,80 m bestellen**.

---

## 2.5 Komplexe Zahlen (ℂ)

### Das Problem

Löse die Gleichung:
```
x² = −4
```

In ℝ gibt es **keine** Lösung:
- x = −2 → x² = +4 ✗
- x = +2 → x² = +4 ✗

Das Quadrat einer reellen Zahl ist **immer ≥ 0** – eine negative Zahl kann also nie herauskommen.

### Die Lösung: die imaginäre Einheit

**Leonhard Euler** führte eine neue Zahl ein:

> ### 💡 Definition
> ```
> j = √(−1)      und damit      j² = −1
> ```
> **Hinweis zur Schreibweise:** In der Mathematik schreibt man meist **i**, in der Elektrotechnik (und im DAA-Heft) **j** – weil *i* dort schon für die Stromstärke steht. Beides bedeutet dasselbe.

Damit lässt sich x² = −4 lösen:

```
x² = −4
x  = ±√(−4)
   = ±√(4 · (−1))
   = ±√4 · √(−1)
   = ±2j
```

**Lösungen: x₁ = +2j und x₂ = −2j**

Solche Zahlen heißen **imaginäre Zahlen**.

### Komplexe Zahlen

Weil man mit den neuen Zahlen auch rechnen können soll, entstehen Summen aus einer reellen und einer imaginären Zahl:

> ### 💡 Definition
> Summen aus einer reellen Zahl **a** und einer imaginären Zahl **bj** heißen **komplexe Zahlen**:
> ```
> a + bj
> ```
> **a** = Realteil · **b** = Imaginärteil

**Beispiele:** 3 + 2j · −1 + 5j · 4 − 3j

### Die Gaußsche Zahlenebene

Komplexe Zahlen lassen sich **nicht** auf der Zahlengeraden darstellen – sie haben zwei Komponenten. Deshalb braucht man eine **Ebene** (nach Carl Friedrich Gauß benannt):

```
        Imaginärachse (j)
              │
            3 ┤        ● 3 + 2j
            2 ┤        ╱
            1 ┤      ╱
              └────┼────┼────┼──── Realachse
              0    1    2    3
```

- Der **reelle** Anteil wird auf der **waagerechten** Achse abgetragen.
- Der **imaginäre** Anteil auf der **senkrechten** Achse.

### 🏗️ Wozu braucht man das im Bau?

Komplexe Zahlen wirken zunächst abstrakt – sie haben aber einen sehr praktischen Anwendungsbereich in der **Gebäudetechnik**:

- **Wechselstromtechnik:** Bei Wechselstrom sind Spannung und Strom zeitlich verschoben. Diese Phasenverschiebung rechnet man mit komplexen Zahlen (Widerstand, Blindwiderstand, Scheinwiderstand).
- **Schwingungen:** Gebäudeschwingungen und Dämpfung werden mit komplexen Zahlen beschrieben.
- **Regelungstechnik:** Heizungs- und Lüftungsregelungen werden im komplexen Bereich analysiert.

> **Für Semester 1 gilt:** Du musst die **Definition** kennen (j² = −1), die **Form a + bj** erkennen und wissen, **warum** es diese Erweiterung gibt. Gerechnet wird damit erst in späteren Modulen.

---

## 📊 Die Gesamtübersicht

| Menge | Symbol | Enthält zusätzlich | Beispiel | Jetzt möglich |
|-------|:------:|--------------------|----------|---------------|
| Natürliche Zahlen | **ℕ** | Zählzahlen ab 1 | 1, 2, 3 | zählen, +, · |
| Ganze Zahlen | **ℤ** | negative Zahlen, Null | −5, 0, 7 | **subtrahieren** |
| Rationale Zahlen | **ℚ** | Brüche p/q | ¾, −2,5, 0,3̄ | **dividieren** |
| Reelle Zahlen | **ℝ** | irrationale Zahlen | √2, π, e | **Wurzeln (positiv)** |
| Komplexe Zahlen | **ℂ** | imaginäre Einheit j | 3 + 2j | **Wurzeln (negativ)** |

> ### ⚠️ Typische Fehler
> **1. „Kleinste passende Menge" verwechselt.** Die Frage „Zu welcher Menge gehört −3?" meint die **kleinste** passende: ℤ (nicht ℚ oder ℝ, auch wenn −3 dort ebenfalls enthalten ist).
> **2. Negative Zahlen falsch vergleichen.** −5 ist **kleiner** als −2, nicht größer.
> **3. Vorzeichen bei Koten.** (+6,25) − (−3,45) = 9,70 – nicht 2,80.
> **4. Verhältnis-Nenner falsch.** Bei 1:4 rechnest du mit **Fünfteln** (1+4 Teile).
> **5. √ von negativen Zahlen in ℝ.** √(−9) hat in ℝ **keine** Lösung – erst in ℂ (= 3j).
> **6. Periodisch mit irrational verwechselt.** 0,333… ist **rational** (= 1/3). Nur **nicht-periodische** unendliche Dezimalzahlen sind irrational.

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Zahlenmengen zuordnen
Gib jeweils die **kleinste** passende Zahlenmenge an:
**1.1** 17 · **1.2** −4 · **1.3** 0,25 · **1.4** √16 · **1.5** √5 · **1.6** π · **1.7** −2/3 · **1.8** 3 + 2j

<details><summary>Lösung anzeigen</summary>

**1.1** 17 → **ℕ** (Zählzahl)
**1.2** −4 → **ℤ** (negativ, aber ganz)
**1.3** 0,25 = 1/4 → **ℚ** (endliche Dezimalzahl = Bruch)
**1.4** √16 = 4 → **ℕ** (geht glatt auf!)
**1.5** √5 = 2,236… → **ℝ** (irrational)
**1.6** π = 3,14159… → **ℝ** (irrational)
**1.7** −2/3 → **ℚ** (Bruch)
**1.8** 3 + 2j → **ℂ** (komplex)

> **Achtung bei 1.4:** Nicht jede Wurzel ist irrational! Erst ausrechnen, dann zuordnen.
</details>

### Aufgabe 2 · Rechnen mit Vorzeichen
**2.1** (−7) + (−5) · **2.2** 12 − (−8) · **2.3** (−3) · (−6) · **2.4** (−20) : 4

<details><summary>Lösung anzeigen</summary>

**2.1** (−7) + (−5) = **−12** (beide negativ → Beträge addieren, Vorzeichen bleibt)
**2.2** 12 − (−8) = 12 + 8 = **20** (Minus und Minus wird Plus)
**2.3** (−3) · (−6) = **+18** (gleiche Vorzeichen → positiv)
**2.4** (−20) : 4 = **−5** (verschiedene Vorzeichen → negativ)
</details>

### Aufgabe 3 · Brüche umwandeln
**3.1** 3/8 als Dezimalzahl · **3.2** 5/6 als Dezimalzahl · **3.3** 0,4 als Bruch (gekürzt) · **3.4** 17/5 als gemischte Zahl

<details><summary>Lösung anzeigen</summary>

**3.1** 3 : 8 = **0,375** (endlich)
**3.2** 5 : 6 = 0,8333… = **0,83̄** (periodisch)
**3.3** 0,4 = 4/10 = **2/5** (mit 2 gekürzt)
**3.4** 17 : 5 = 3 Rest 2 → **3 2/5**
</details>

### Aufgabe 4 · Kürzen und Erweitern
**4.1** Kürze 24/36 · **4.2** Kürze 45/60 · **4.3** Erweitere 2/7 auf den Nenner 35

<details><summary>Lösung anzeigen</summary>

**4.1** 24/36: größter gemeinsamer Teiler ist 12 → (24:12)/(36:12) = **2/3**
**4.2** 45/60: ggT ist 15 → (45:15)/(60:15) = **3/4**
**4.3** 35 : 7 = 5, also mit 5 erweitern → (2·5)/(7·5) = **10/35**
</details>

### Aufgabe 5 · Quadrate
**5.1** 12² · **5.2** (−0,5)² · **5.3** (3/4)² · **5.4** (−9)²

<details><summary>Lösung anzeigen</summary>

**5.1** 12 · 12 = **144**
**5.2** (−0,5)·(−0,5) = **0,25** (positiv!)
**5.3** 3/4 · 3/4 = **9/16**
**5.4** (−9)·(−9) = **+81**
</details>

### Aufgabe 6 · Wurzeln
Welche Wurzeln gehen glatt auf, welche sind irrational?
**6.1** √49 · **6.2** √50 · **6.3** √121 · **6.4** √2,25

<details><summary>Lösung anzeigen</summary>

**6.1** √49 = **7** → rational (sogar natürlich)
**6.2** √50 = 7,0710678… → **irrational**
**6.3** √121 = **11** → rational
**6.4** √2,25 = **1,5** → rational (denn 1,5² = 2,25)
</details>

### Aufgabe 7 · Komplexe Zahlen
**7.1** Löse x² = −9 · **7.2** Löse x² = −25 · **7.3** Nenne Real- und Imaginärteil von 4 − 7j

<details><summary>Lösung anzeigen</summary>

**7.1** x = ±√(−9) = ±√9 · √(−1) = **±3j**
**7.2** x = ±√(−25) = **±5j**
**7.3** Realteil **a = 4**, Imaginärteil **b = −7**
</details>

### 🏗️ Aufgabe 8 · Höhenkoten
Ein Gebäude: OK Attika **+9,45 m**, OK Fertigfußboden EG **±0,00 m**, Kellersohle **−2,95 m**, Fundamentunterkante **−3,80 m**.
**8.1** Gesamthöhe von Fundamentunterkante bis Attika? **8.2** Höhe des Kellergeschosses (Sohle bis EG-Fußboden)?

<details><summary>Lösung anzeigen</summary>

**8.1**
```
Δh = (+9,45) − (−3,80) = 9,45 + 3,80 = 13,25 m
```

**8.2**
```
Δh = (±0,00) − (−2,95) = 0 + 2,95 = 2,95 m
```
</details>

### 🏗️ Aufgabe 9 · Gefälle
Eine Entwässerungsleitung hat **1,5 % Gefälle** und ist **24 m** lang.
**9.1** Wie groß ist der Höhenunterschied? **9.2** Gib das Gefälle als Verhältnis 1:x an.

<details><summary>Lösung anzeigen</summary>

**9.1**
```
Δh = 24 m · 0,015 = 0,36 m = 36 cm
```

**9.2**
```
1,5 % = 1,5/100 = 1/66,67
```
→ etwa **1 : 67** (in der Praxis rundet man auf 1 : 66 oder gibt 1,5 % an)
</details>

### 🏗️ Aufgabe 10 · Mischungsverhältnis
Beton wird im Verhältnis **1 : 2 : 3** (Zement : Sand : Kies) gemischt. Du brauchst **1,2 m³**.
**10.1** Wie viel m³ von jedem Bestandteil? **10.2** Wie viel Prozent ist Zement?

<details><summary>Lösung anzeigen</summary>

**10.1** Gesamtteile: 1 + 2 + 3 = **6 Teile**
```
Zement: 1,2 · 1/6 = 0,20 m³
Sand:   1,2 · 2/6 = 0,40 m³
Kies:   1,2 · 3/6 = 0,60 m³
```
*Probe: 0,20 + 0,40 + 0,60 = 1,20 ✓*

**10.2**
```
1/6 = 0,1667 = 16,67 %  ≈ 16,7 %
```
</details>

### 🏗️ Aufgabe 11 · Diagonale prüfen
Eine rechteckige Bodenplatte misst **8,00 m × 5,00 m**. Welche Diagonale muss gemessen werden, damit sie rechtwinklig ist?

<details><summary>Lösung anzeigen</summary>

```
d² = 8,00² + 5,00² = 64 + 25 = 89
d  = √89 = 9,433 981... m  ≈  9,43 m
```

√89 ist **irrational** – in der Praxis misst man auf den Zentimeter genau: **9,43 m**.

> Beide Diagonalen müssen gleich lang sein – dann ist die Platte rechtwinklig.
</details>

### 🏗️ Aufgabe 12 · Sparren
Ein Pultdach: waagerechte Länge **6,80 m**, Höhenunterschied **2,45 m**.
**12.1** Wie lang ist der Sparren? **12.2** Zu welcher Zahlenmenge gehört das exakte Ergebnis?

<details><summary>Lösung anzeigen</summary>

**12.1**
```
l² = 6,80² + 2,45² = 46,24 + 6,0025 = 52,2425
l  = √52,2425 = 7,227 897... m  ≈  7,23 m
```

**12.2** √52,2425 lässt sich nicht als Bruch schreiben → **ℝ** (irrational)
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich kenne die Reihenfolge ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ auswendig.
- [ ] Ich kann zu jeder Erweiterung sagen, **welche Rechnung** dadurch möglich wurde.
- [ ] Ich ordne eine Zahl der **kleinsten** passenden Menge zu (und rechne Wurzeln vorher aus).
- [ ] Ich rechne sicher mit **negativen Vorzeichen** – besonders bei Höhenkoten.
- [ ] Ich kann Brüche **kürzen, erweitern** und in Dezimalzahlen umwandeln.
- [ ] Ich weiß: endlich oder periodisch = rational, sonst irrational.
- [ ] Ich kann eine **Quadratwurzel** ziehen und erkennen, ob sie glatt aufgeht.
- [ ] Ich kenne π, e, √2 als irrationale Zahlen.
- [ ] Ich kenne die Definition **j² = −1** und die Form **a + bj**.
- [ ] Bei Mischungsverhältnissen rechne ich mit der **Summe aller Teile** als Nenner.

**Nächstes Kapitel:** LM1 Kapitel 3 – Grundrechenarten, Klammern, binomische Formeln, Polynomdivision
