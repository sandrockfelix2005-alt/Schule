# Mathematik I · Lernmodul 3 · Kapitel 1
# Quadratische Funktionen und Gleichungen

> **Lernkapitel zum Selbststudium.** Quelle: DAA Mathematik I, Lernmodul 3, Lernbereich 1 · **Zeitaufwand: ca. 6 Stunden**
> **Voraussetzung:** LM2 (Funktionen erster Ordnung) und LM1 K3 (binomische Formeln)

**Was du am Ende können musst**
- Die **Normalparabel** und ihre Verschiebungen beschreiben.
- Aus der **Scheitelpunktform** den Scheitelpunkt ablesen.
- Mit **quadratischer Ergänzung** von der allgemeinen Form zur Scheitelpunktform kommen.
- Quadratische Gleichungen mit der **p-q-Formel** lösen.
- Über die **Diskriminante** die Anzahl der Lösungen bestimmen.
- **Schnittpunkte** von Parabeln mit Geraden und anderen Parabeln berechnen.

**Inhalt:** [1.1 Parabeln](#11-parabeln) · [1.2 Allgemeine Form](#12-die-allgemeine-quadratische-funktion) · [1.3 Quadratische Gleichungen](#13-quadratische-gleichungen-lösen) · [1.4 Schnittpunkte](#14-schnittpunkte) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

Viele technische Zusammenhänge lassen sich **nicht** mit einer Geraden beschreiben – sie sind **gekrümmt**. Immer wenn eine Größe **quadratisch** eingeht, entsteht eine **Parabel**:

| Im Bau | Warum quadratisch |
|--------|-------------------|
| Fläche eines Quadrats | A = a² |
| Durchhang eines Seils/Kabels | näherungsweise Parabel |
| Bogenbrücke, Gewölbe | parabelförmige Stützlinie |
| Momentenverlauf im Träger unter Gleichlast | **exakt eine Parabel** |
| Wurfbahn (Kran, Abbruchmaterial) | Parabel |
| Optimierungsaufgaben (max. Fläche) | Scheitelpunkt gesucht |

> **Besonders wichtig:** Der **Momentenverlauf** eines Einfeldträgers unter Gleichstreckenlast ist eine Parabel mit dem Maximum in Feldmitte. Wer Parabeln versteht, versteht später die Statik leichter.

---

## 1.1 Parabeln

### Die Normalparabel

Ordnet man der Seitenlänge a eines Quadrats den Flächeninhalt a² zu, entsteht eine Funktion:

| a | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| a² | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 |

Der Graf von **f(x) = x²** heißt **Normalparabel**.

```
   y
   9 ┤ ●                       ● 
   6 ┤   ╲                   ╱
   4 ┤     ●               ●
   2 ┤       ╲           ╱
   1 ┤         ●       ●
   0 ┼───────────●●●───────────► x
      -3  -2  -1  0   1   2   3
                   ↑
              Scheitelpunkt S(0|0)
```

> ### 💡 Eigenschaften der Normalparabel
> - **Scheitelpunkt S(0 | 0)** – der tiefste Punkt
> - **nach oben geöffnet**
> - **symmetrisch zur y-Achse**
> - sie **fällt links** vom Scheitelpunkt und **steigt rechts** davon
> - der Scheitelpunkt ist zugleich die **Nullstelle**

### Verschiebungen

Aus der Normalparabel entstehen alle anderen Parabeln durch **Verschieben** und **Strecken**.

#### Verschiebung in y-Richtung: f(x) = x² + s

| Funktion | Wirkung | Scheitelpunkt |
|----------|---------|---------------|
| f(x) = x² + 4 | 4 nach **oben** | S(0 \| 4) |
| f(x) = x² − 2 | 2 nach **unten** | S(0 \| −2) |
| **allgemein x² + s** | um s nach oben/unten | **S(0 \| s)** |

#### Verschiebung in x-Richtung: f(x) = (x − r)²

| Funktion | Wirkung | Scheitelpunkt |
|----------|---------|---------------|
| f(x) = (x − 2)² | 2 nach **rechts** | S(2 \| 0) |
| f(x) = (x + 3)² | 3 nach **links** | S(−3 \| 0) |
| **allgemein (x − r)²** | um r nach rechts/links | **S(r \| 0)** |

> ### ⚠️ Die Vorzeichen-Falle
> **(x − 2)²** verschiebt nach **rechts** (positive Richtung), obwohl dort ein **Minus** steht!
> **(x + 3)²** verschiebt nach **links**.
>
> **Merkhilfe:** Frag dich, für welches x die Klammer **null** wird – dort liegt der Scheitelpunkt.
> (x − 2)² → Klammer null bei x = **+2** → Scheitel rechts.

### Die Scheitelpunktform

> ### 💡 Die Scheitelpunktform
> ```
> f(x) = a · (x − r)² + s
> ```
> **Scheitelpunkt: S(r | s)** – direkt ablesbar!
>
> | Parameter | Bedeutung |
> |:---------:|-----------|
> | **a** | Öffnung und Streckung |
> | **r** | Verschiebung nach rechts (+) / links (−) |
> | **s** | Verschiebung nach oben (+) / unten (−) |

### 📐 Lehrbeispiel 1 – Scheitelpunkt ablesen

| Funktion | Scheitelpunkt | Öffnung |
|----------|---------------|---------|
| f(x) = (x − 1)² + 2 | S(1 \| 2) | nach oben |
| f(x) = (x + 4)² − 3 | S(−4 \| −3) | nach oben |
| f(x) = −2(x − 3)² + 5 | S(3 \| 5) | nach **unten** (a < 0) |
| f(x) = 0,5(x + 1)² | S(−1 \| 0) | nach oben, **flacher** |

### Der Faktor a

> ### 💡 Merke
> | a | Wirkung |
> |---|---------|
> | **a > 0** | nach **oben** geöffnet |
> | **a < 0** | nach **unten** geöffnet |
> | **\|a\| > 1** | **schmaler/steiler** als die Normalparabel |
> | **\|a\| < 1** | **breiter/flacher** als die Normalparabel |
> | **a = 1** | genau die Normalparabel |

### 📐 Lehrbeispiel 2 – Wertetabelle und Graf

Zeichne f(x) = (x − 1)² + 2 und bestimme den Scheitelpunkt.

| x | −1 | 0 | 1 | 2 | 3 |
|---|----|----|---|---|---|
| (x−1)² | 4 | 1 | 0 | 1 | 4 |
| **f(x)** | 6 | 3 | **2** | 3 | 6 |

**Scheitelpunkt: S(1 | 2)** – der kleinste Funktionswert.

---

## 1.2 Die allgemeine quadratische Funktion

> ### 💡 Die allgemeine Form
> ```
> y = a·x² + b·x + c        (a ≠ 0)
> ```
> **a** und **b** heißen **Koeffizienten**, **c** ist der **y-Achsenabschnitt**.

**Warum a ≠ 0?** Wäre a = 0, bliebe y = bx + c – eine **Gerade**, keine Parabel mehr.

### Was du sofort ablesen kannst

| Aus | Erkennst du |
|-----|-------------|
| Vorzeichen von **a** | Öffnung (oben/unten) |
| Betrag von **a** | breit oder schmal |
| **c** | Schnittpunkt mit der y-Achse: P(0 \| c) |

### Von der allgemeinen Form zur Scheitelpunktform

Dafür brauchst du die **quadratische Ergänzung**.

### So gehst du vor

1. **a ausklammern** – aber nur bei den Gliedern mit x² und x!
2. **Quadratische Ergänzung** bestimmen: `(halber Koeffizient von x)²`
3. Diese Zahl **addieren und sofort wieder subtrahieren** (der Term darf sich nicht ändern!)
4. Die ersten drei Glieder zum **Binom** zusammenfassen.
5. Den Rest **ausrechnen**.

### 📐 Lehrbeispiel 1 – aus dem Modul (Schritt für Schritt)

Bringe `g(x) = 1,5x² − 6x + 4,5` in die Scheitelpunktform.

| Schritt | Rechnung | Erklärung |
|---------|----------|-----------|
| 0 | g(x) = 1,5x² − 6x + 4,5 | Ausgangsform |
| 1 | = 1,5(x² − 4x) + 4,5 | **1,5 ausklammern** (nur bei x² und x!) |
| 2 | halber Koeffizient: (−4)/2 = −2, quadriert: **4** | Ergänzung bestimmen |
| 3 | = 1,5(x² − 4x **+ 4 − 4**) + 4,5 | addieren **und** subtrahieren |
| 4 | = 1,5[(x − 2)² − 4] + 4,5 | Binom bilden |
| 5 | = 1,5(x − 2)² − 6 + 4,5 | Klammer auflösen: 1,5 · (−4) = −6 |
| 6 | **= 1,5(x − 2)² − 1,5** | zusammenfassen |

**Scheitelpunkt: S(2 | −1,5)**

**Weitere Erkenntnisse zu g(x):**
- Koeffizienten: a = 1,5 · b = −6 · c = 4,5
- **nach oben** geöffnet (a > 0)
- **steiler** als die Normalparabel (a > 1)
- y-Achsenabschnitt: **P(0 | 4,5)**
- Nullstellen (aus dem Grafen): x₁ = 1 und x₂ = 3

### 📐 Lehrbeispiel 2 – mit negativem a

Bringe `h(x) = −0,5x² − 2x − 3` in die Scheitelpunktform.

| Schritt | Rechnung |
|---------|----------|
| 1 | = −0,5(x² + 4x) − 3 |
| 2 | Ergänzung: (4/2)² = **4** |
| 3 | = −0,5(x² + 4x **+ 4 − 4**) − 3 |
| 4 | = −0,5[(x + 2)² − 4] − 3 |
| 5 | = −0,5(x + 2)² **+ 2** − 3 | (−0,5 · −4 = +2) |
| 6 | **= −0,5(x + 2)² − 1** |

**Scheitelpunkt: S(−2 | −1)**, nach **unten** geöffnet, **flacher** als die Normalparabel.

### 📐 Lehrbeispiel 3 – einfacher Fall (a = 1)

`f(x) = x² − 6x + 11`

| Schritt | Rechnung |
|---------|----------|
| 1 | kein Ausklammern nötig (a = 1) |
| 2 | Ergänzung: (−6/2)² = **9** |
| 3 | = x² − 6x **+ 9 − 9** + 11 |
| 4 | = (x − 3)² − 9 + 11 |
| 5 | **= (x − 3)² + 2** |

**Scheitelpunkt: S(3 | 2)**

> ### ⚠️ Typische Fehler bei der quadratischen Ergänzung
> **1. c mit ausklammern.** Nur x² und x bekommen den Faktor a – die Konstante **nicht**.
> **2. Nur addieren, nicht subtrahieren.** Dann änderst du den Term und bekommst eine andere Funktion.
> **3. Beim Auflösen der eckigen Klammer den Faktor vergessen.** 1,5 · (−4) = −6, nicht −4.
> **4. Vorzeichen im Binom.** x² − 4x + 4 = (x **−** 2)², x² + 4x + 4 = (x **+** 2)².

---

<div class="viz" data-viz="parabel"></div>

## 1.3 Quadratische Gleichungen lösen

### Die Normalform

```
x² + p·x + q = 0
```

Steht ein Faktor vor x², **teile zuerst dadurch**:
```
2x² − 8x + 6 = 0      | : 2
 x² − 4x + 3 = 0
```

### Die Herleitung der p-q-Formel

Genau die quadratische Ergänzung führt zur Lösungsformel:

```
x² + px           = −q                    | quadratisch ergänzen
x² + px + (p/2)²  = −q + (p/2)²           | links steht jetzt ein Binom
(x + p/2)²        = (p/2)² − q            | Wurzel ziehen (± beachten!)
x + p/2           = ± √((p/2)² − q)       | − p/2
x                 = −p/2 ± √((p/2)² − q)
```

> ### 💡 Die p-q-Formel
> ```
> x₁,₂ = −p/2 ± √((p/2)² − q)
> ```
> Die beiden Lösungen bilden die **Lösungsmenge L = {x₁ ; x₂}**

### So gehst du vor

1. Gleichung auf **Normalform** bringen (alles auf eine Seite, ggf. durch a teilen).
2. **p und q ablesen** (mit Vorzeichen!).
3. In die Formel **einsetzen**.
4. **Diskriminante** ausrechnen → Anzahl der Lösungen prüfen.
5. Beide Lösungen berechnen.
6. **Probe** durch Einsetzen.

### Die Diskriminante

> ### 💡 Definition
> Der Ausdruck unter der Wurzel heißt **Diskriminante**:
> ```
> D = (p/2)² − q
> ```
>
> | D | Anzahl Lösungen | Geometrisch |
> |---|-----------------|-------------|
> | **D > 0** | **zwei** Lösungen | Parabel **schneidet** die x-Achse zweimal |
> | **D = 0** | **eine** Lösung | Parabel **berührt** die x-Achse (Scheitel liegt darauf) |
> | **D < 0** | **keine reelle** Lösung | Parabel schneidet die x-Achse **nicht** |

### 📐 Lehrbeispiel 1 – zwei Lösungen

Löse `x² − 4x + 3 = 0`

| Schritt | Rechnung |
|---------|----------|
| p und q | p = −4, q = 3 |
| p/2 | −2 |
| Diskriminante | D = (−2)² − 3 = 4 − 3 = **1** > 0 → zwei Lösungen |
| Formel | x₁,₂ = −(−2) ± √1 = 2 ± 1 |
| Lösungen | **x₁ = 3, x₂ = 1** |

**Probe:** 3² − 4·3 + 3 = 9 − 12 + 3 = 0 ✓ · 1² − 4·1 + 3 = 1 − 4 + 3 = 0 ✓

### 📐 Lehrbeispiel 2 – eine Lösung

Löse `x² − 6x + 9 = 0`

```
p = −6, q = 9
D = (−3)² − 9 = 9 − 9 = 0     → genau eine Lösung
x = 3
```

**Geometrisch:** Der Scheitelpunkt S(3|0) liegt genau auf der x-Achse.

### 📐 Lehrbeispiel 3 – keine reelle Lösung

Löse `x² + 2x + 5 = 0`

```
p = 2, q = 5
D = 1² − 5 = −4               → negativ, keine reelle Lösung
L = { }
```

**Geometrisch:** Die Parabel liegt komplett über der x-Achse.
*(In ℂ gäbe es Lösungen – siehe LM1 K2.)*

### 📐 Lehrbeispiel 4 – erst normieren

Löse `2x² − 8x + 6 = 0`

```
| : 2  →  x² − 4x + 3 = 0
p = −4, q = 3
x₁,₂ = 2 ± √(4−3) = 2 ± 1
x₁ = 3, x₂ = 1
```

> ### ⚠️ Der häufigste Fehler
> **Faktor vor x² nicht wegteilen.** Die p-q-Formel gilt **nur** für die Normalform mit Faktor 1 vor x². Wer bei `2x² − 8x + 6 = 0` direkt p = −8 einsetzt, bekommt Unsinn heraus.

### 🏗️ Bau-Beispiel 1 – Fläche gegeben, Maße gesucht

Ein rechteckiger Lagerplatz soll **96 m²** groß werden. Er soll **4 m länger als breit** sein. Wie groß sind die Seiten?

**Ansatz:**
```
Breite  = x
Länge   = x + 4
Fläche  = x · (x + 4) = 96
```

**Gleichung lösen:**

| Schritt | Rechnung |
|---------|----------|
| Ausmultiplizieren | x² + 4x = 96 |
| Normalform | x² + 4x − 96 = 0 |
| p = 4, q = −96 | p/2 = 2 |
| Diskriminante | D = 4 + 96 = 100 |
| Formel | x₁,₂ = −2 ± √100 = −2 ± 10 |
| Lösungen | x₁ = **8**, x₂ = −12 |

> ### 💡 Zwei Lösungen – aber nur eine ist sinnvoll
> **x₂ = −12 m** ist rechnerisch richtig, aber **physikalisch unmöglich** – eine Breite kann nicht negativ sein. Man verwirft sie.
>
> **Prüfe bei jeder Sachaufgabe:** Ist das Ergebnis in der Definitionsmenge (Längen ≥ 0)?

**Antwort:** Breite **8,00 m**, Länge **12,00 m**.
**Probe:** 8 · 12 = 96 m² ✓

### 🏗️ Bau-Beispiel 2 – Umrandung eines Beckens

Ein rechteckiges Becken misst **6,00 m × 4,00 m**. Rundum soll ein gleich breiter Plattenstreifen gelegt werden. Die **Gesamtfläche** (Becken + Streifen) soll **48 m²** betragen. Wie breit ist der Streifen?

**Ansatz:** Streifenbreite = x → Gesamtmaße: (6 + 2x) und (4 + 2x)

```
(6 + 2x)(4 + 2x) = 48
```

| Schritt | Rechnung |
|---------|----------|
| Ausmultiplizieren | 24 + 12x + 8x + 4x² = 48 |
| Zusammenfassen | 4x² + 20x + 24 = 48 |
| Normalform | 4x² + 20x − 24 = 0 |
| `: 4` | x² + 5x − 6 = 0 |
| p = 5, q = −6 | p/2 = 2,5 |
| D | 6,25 + 6 = 12,25 → √D = 3,5 |
| Lösungen | x₁,₂ = −2,5 ± 3,5 → x₁ = **1,0**, x₂ = −6,0 |

**Antwort:** Der Streifen ist **1,00 m** breit. *(x₂ verworfen – negativ.)*
**Probe:** (6+2)(4+2) = 8 · 6 = 48 m² ✓

### 🏗️ Bau-Beispiel 3 – Optimierung: größte Fläche

Für eine Baustelleneinfriedung stehen **80 m Bauzaun** zur Verfügung. Es soll eine **rechteckige** Fläche eingezäunt werden. Welche Maße ergeben die **größte** Fläche?

**Ansatz:**
```
Umfang:  2x + 2y = 80    →    y = 40 − x
Fläche:  A(x) = x · y = x(40 − x) = 40x − x²
```

**Das ist eine nach unten geöffnete Parabel** – ihr **Scheitelpunkt** ist das Maximum!

**Scheitelpunkt per quadratischer Ergänzung:**

| Schritt | Rechnung |
|---------|----------|
| Umsortieren | A(x) = −x² + 40x |
| −1 ausklammern | = −(x² − 40x) |
| Ergänzung: (40/2)² = 400 | = −(x² − 40x + 400 − 400) |
| Binom | = −[(x − 20)² − 400] |
| Auflösen | **= −(x − 20)² + 400** |

**Scheitelpunkt: S(20 | 400)**

**Antwort:** Bei **x = 20 m** (und damit y = 40 − 20 = **20 m**) ist die Fläche mit **400 m²** maximal – also ein **Quadrat**.

> ### 💡 Merke für Optimierungsaufgaben
> **Der Scheitelpunkt einer nach unten geöffneten Parabel ist das Maximum**, bei einer nach oben geöffneten das **Minimum**. So löst du Aufgaben nach „größtmöglich" oder „kleinstmöglich" – ganz ohne Differentialrechnung.
>
> **Nebenbei bewiesen:** Von allen Rechtecken mit gleichem Umfang hat das **Quadrat** die größte Fläche.

---

## 1.4 Schnittpunkte

Schnittpunkte findest du **immer** durch **Gleichsetzen** – wie bei den Geraden, nur dass jetzt eine quadratische Gleichung entsteht.

### Parabel und Gerade

### So gehst du vor

1. Beide Terme **gleichsetzen**.
2. Alles auf **eine Seite** bringen → quadratische Gleichung.
3. Mit der **p-q-Formel** lösen.
4. x-Werte in **eine** der Gleichungen einsetzen → y-Werte.
5. Schnittpunkte angeben.

### 📐 Lehrbeispiel 1

Bestimme die Schnittpunkte von `f(x) = x²` und `g(x) = 2x + 3`.

| Schritt | Rechnung |
|---------|----------|
| Gleichsetzen | x² = 2x + 3 |
| Auf eine Seite | x² − 2x − 3 = 0 |
| p = −2, q = −3 | p/2 = −1 |
| D | 1 + 3 = 4 → √D = 2 |
| Lösungen | x₁,₂ = 1 ± 2 → x₁ = **3**, x₂ = **−1** |
| y-Werte | f(3) = 9 · f(−1) = 1 |

**Schnittpunkte: S₁(3 | 9) und S₂(−1 | 1)**

### Die drei möglichen Lagen

> ### 💡 Was die Diskriminante hier bedeutet
> | D | Anzahl Schnittpunkte | Die Gerade ist eine … |
> |---|----------------------|----------------------|
> | D > 0 | **zwei** | **Sekante** |
> | D = 0 | **einer** | **Tangente** (berührt) |
> | D < 0 | **keiner** | **Passante** (geht vorbei) |

### 📐 Lehrbeispiel 2 – Tangente

Prüfe, ob `g(x) = 2x − 1` die Parabel `f(x) = x²` berührt.

```
x² = 2x − 1
x² − 2x + 1 = 0
p = −2, q = 1
D = 1 − 1 = 0        → genau ein Schnittpunkt
x = 1,  y = 1
```

**Die Gerade ist eine Tangente im Punkt B(1 | 1).**

### Parabel und Parabel

Genauso – gleichsetzen und zusammenfassen.

### 📐 Lehrbeispiel 3

Schnittpunkte von `f(x) = x² − 2` und `g(x) = −x² + 6`.

| Schritt | Rechnung |
|---------|----------|
| Gleichsetzen | x² − 2 = −x² + 6 |
| `+ x²`, `+ 2` | 2x² = 8 |
| `: 2` | x² = 4 |
| Wurzel (± !) | x₁ = **2**, x₂ = **−2** |
| y-Werte | f(2) = 2 · f(−2) = 2 |

**Schnittpunkte: S₁(2 | 2) und S₂(−2 | 2)**

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Scheitelpunkt ablesen
**1.1** f(x) = (x − 3)² + 1 · **1.2** f(x) = x² − 5 · **1.3** f(x) = −2(x + 4)² + 3 · **1.4** f(x) = 0,5(x − 2)²

<details><summary>Lösung anzeigen</summary>

**1.1** S(3 | 1), nach oben
**1.2** S(0 | −5), nach oben
**1.3** S(−4 | 3), nach **unten** (a < 0), steiler
**1.4** S(2 | 0), nach oben, **flacher**
</details>

### Aufgabe 2 · Parabel beschreiben
Beschreibe den Grafen von **2.1** f(x) = −0,5x² + 2x · **2.2** f(x) = 3x² − 12

<details><summary>Lösung anzeigen</summary>

**2.1** a = −0,5 → nach **unten** geöffnet, **flacher** als Normalparabel; c = 0 → geht durch den Ursprung.
**2.2** a = 3 → nach **oben**, **steiler**; c = −12 → schneidet y-Achse bei (0 | −12).
</details>

### Aufgabe 3 · Quadratische Ergänzung
Bringe in die Scheitelpunktform:
**3.1** f(x) = x² − 6x + 11 · **3.2** f(x) = x² + 8x + 10 · **3.3** g(x) = 1,5x² − 6x + 4,5

<details><summary>Lösung anzeigen</summary>

**3.1** Ergänzung (−3)² = 9: x² − 6x + 9 − 9 + 11 = **(x − 3)² + 2** → S(3 | 2)

**3.2** Ergänzung 4² = 16: x² + 8x + 16 − 16 + 10 = **(x + 4)² − 6** → S(−4 | −6)

**3.3**
```
= 1,5(x² − 4x) + 4,5
= 1,5(x² − 4x + 4 − 4) + 4,5
= 1,5(x − 2)² − 6 + 4,5
= 1,5(x − 2)² − 1,5      → S(2 | −1,5)
```
</details>

### Aufgabe 4 · p-q-Formel
**4.1** x² + 2x − 15 = 0 · **4.2** x² − 4x + 3 = 0 · **4.3** x² − 6x + 9 = 0 · **4.4** x² + 2x + 5 = 0

<details><summary>Lösung anzeigen</summary>

**4.1** p = 2, q = −15 → D = 1 + 15 = 16 → x = −1 ± 4 → **x₁ = 3, x₂ = −5**
**4.2** D = 4 − 3 = 1 → x = 2 ± 1 → **x₁ = 3, x₂ = 1**
**4.3** D = 9 − 9 = 0 → **x = 3** (eine Lösung)
**4.4** D = 1 − 5 = −4 < 0 → **keine reelle Lösung**, L = { }
</details>

### Aufgabe 5 · Erst normieren
**5.1** 2x² − 8x + 6 = 0 · **5.2** 3x² + 12x − 15 = 0

<details><summary>Lösung anzeigen</summary>

**5.1** `: 2` → x² − 4x + 3 = 0 → **x₁ = 3, x₂ = 1**
**5.2** `: 3` → x² + 4x − 5 = 0 → D = 4 + 5 = 9 → x = −2 ± 3 → **x₁ = 1, x₂ = −5**
</details>

### Aufgabe 6 · Anzahl der Lösungen
Bestimme **ohne** vollständige Rechnung die Anzahl der Lösungen:
**6.1** x² − 10x + 25 = 0 · **6.2** x² + x + 3 = 0 · **6.3** x² − 7 = 0

<details><summary>Lösung anzeigen</summary>

**6.1** D = 25 − 25 = 0 → **eine** Lösung
**6.2** D = 0,25 − 3 = −2,75 → **keine** reelle Lösung
**6.3** p = 0, q = −7 → D = 0 + 7 = 7 > 0 → **zwei** Lösungen (x = ±√7)
</details>

### Aufgabe 7 · Schnittpunkte
**7.1** f(x) = x² und g(x) = 2x + 3 · **7.2** f(x) = x² − 2 und g(x) = −x² + 6

<details><summary>Lösung anzeigen</summary>

**7.1** x² − 2x − 3 = 0 → x₁ = 3, x₂ = −1 → **S₁(3|9), S₂(−1|1)**
**7.2** 2x² = 8 → x² = 4 → x = ±2 → **S₁(2|2), S₂(−2|2)**
</details>

### 🏗️ Aufgabe 8 · Lagerplatz
Ein rechteckiger Lagerplatz soll **117 m²** groß werden und **4 m länger als breit** sein.

<details><summary>Lösung anzeigen</summary>

```
x(x + 4) = 117
x² + 4x − 117 = 0
p = 4, q = −117 → p/2 = 2
D = 4 + 117 = 121 → √D = 11
x₁,₂ = −2 ± 11 → x₁ = 9, x₂ = −13 (verworfen)
```
**Breite 9,00 m, Länge 13,00 m** · Probe: 9 · 13 = 117 ✓
</details>

### 🏗️ Aufgabe 9 · Plattenstreifen
Ein Becken **5,00 m × 3,00 m** bekommt rundum einen gleich breiten Streifen. Gesamtfläche soll **35 m²** sein. Wie breit ist der Streifen?

<details><summary>Lösung anzeigen</summary>

```
(5 + 2x)(3 + 2x) = 35
15 + 10x + 6x + 4x² = 35
4x² + 16x − 20 = 0        | : 4
x² + 4x − 5 = 0
D = 4 + 5 = 9 → x = −2 ± 3
x₁ = 1,0 · x₂ = −5,0 (verworfen)
```
**Streifenbreite 1,00 m** · Probe: 7 · 5 = 35 m² ✓
</details>

### 🏗️ Aufgabe 10 · Optimierung Bauzaun
Mit **60 m Bauzaun** soll die größtmögliche rechteckige Fläche eingezäunt werden.
**10.1** Maße? **10.2** Fläche?

<details><summary>Lösung anzeigen</summary>

```
2x + 2y = 60  →  y = 30 − x
A(x) = x(30 − x) = −x² + 30x
     = −(x² − 30x)
     = −(x² − 30x + 225 − 225)
     = −(x − 15)² + 225
```
**Scheitelpunkt S(15 | 225)**

**10.1** x = 15 m, y = 15 m → **Quadrat 15 × 15 m**
**10.2** **A = 225 m²**
</details>

### 🏗️ Aufgabe 11 · Optimierung an einer Wand
Eine rechteckige Fläche soll an einer **bestehenden Wand** eingezäunt werden – es werden also nur **drei** Seiten gebraucht. Zaunlänge: **60 m**. Welche Maße geben die größte Fläche?

<details><summary>Lösung anzeigen</summary>

```
Zaun: 2x + y = 60   →   y = 60 − 2x     (x = Tiefe, y = Länge an der Wand)
A(x) = x(60 − 2x) = −2x² + 60x
     = −2(x² − 30x)
     = −2(x² − 30x + 225 − 225)
     = −2(x − 15)² + 450
```
**S(15 | 450)**

**Antwort:** x = 15 m (Tiefe), y = 60 − 30 = **30 m** (an der Wand) → **A = 450 m²**

> Interessant: Ohne Wand waren es 225 m², mit Wand **450 m²** – die doppelte Fläche bei gleichem Zaun.
</details>

### 🏗️ Aufgabe 12 · Tangente prüfen
Berührt die Gerade `g(x) = 4x − 4` die Parabel `f(x) = x²`?

<details><summary>Lösung anzeigen</summary>

```
x² = 4x − 4
x² − 4x + 4 = 0
D = 4 − 4 = 0    → genau ein Schnittpunkt
x = 2, y = 4
```
**Ja – die Gerade ist eine Tangente im Punkt B(2 | 4).**
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich kenne die Eigenschaften der **Normalparabel**.
- [ ] Ich lese aus der **Scheitelpunktform** f(x) = a(x−r)²+s den Scheitelpunkt **S(r|s)** ab.
- [ ] Ich weiß, dass **(x − 2)²** nach **rechts** verschiebt.
- [ ] Ich deute **a**: Vorzeichen = Öffnung, Betrag = breit/schmal.
- [ ] Ich beherrsche die **quadratische Ergänzung** (addieren **und** subtrahieren!).
- [ ] Ich bringe eine Gleichung auf **Normalform** (Faktor vor x² wegteilen).
- [ ] Ich kenne die **p-q-Formel** auswendig.
- [ ] Ich bestimme über die **Diskriminante** die Anzahl der Lösungen.
- [ ] Ich prüfe bei Sachaufgaben, ob eine Lösung **physikalisch sinnvoll** ist.
- [ ] Ich berechne **Schnittpunkte** durch Gleichsetzen.
- [ ] Ich löse **Optimierungsaufgaben** über den Scheitelpunkt.

**Nächstes Kapitel:** LM3 Kapitel 2 – Wurzel- und Potenzfunktionen
