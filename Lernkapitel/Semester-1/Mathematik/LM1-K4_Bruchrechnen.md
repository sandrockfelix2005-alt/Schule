# Mathematik I · Lernmodul 1 · Kapitel 4
# Bruchrechnen

> **Lernkapitel zum Selbststudium.** Quelle: DAA Mathematik I, Lernmodul 1, Abschnitte 2.3, 3.1 und 3.2 · **Zeitaufwand: ca. 3–4 Stunden**

**Was du am Ende können musst**
- Einen Bruch **kürzen** und **erweitern** – und wissen, warum sich sein Wert dabei nicht ändert.
- Den **Hauptnenner** zweier Brüche finden, auch über die **Primfaktorzerlegung**.
- Brüche **addieren, subtrahieren, multiplizieren und dividieren**.
- Zwischen **Bruch und Dezimalzahl** umrechnen, auch bei **periodischen** Dezimalzahlen.
- Mit **Bruchtermen** rechnen und ihre **Definitionsmenge** angeben.

**Inhalt:** [4.1 Was ein Bruch ist](#41-was-ein-bruch-ist) · [4.2 Kürzen und Erweitern](#42-kürzen-und-erweitern) · [4.3 Der Hauptnenner](#43-brüche-vergleichen--der-hauptnenner) · [4.4 Addieren und Subtrahieren](#44-addieren-und-subtrahieren) · [4.5 Multiplizieren und Dividieren](#45-multiplizieren-und-dividieren) · [4.6 Brüche und Dezimalzahlen](#46-brüche-und-dezimalzahlen) · [4.7 Bruchterme](#47-bruchterme--brüche-mit-variablen) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

Zwischen zwei ganzen Zahlen liegen beliebig viele weitere Zahlen. Um die zu benennen, brauchst du **Brüche**. Alles, was sich als Quotient zweier ganzer Zahlen schreiben lässt, ist eine **rationale Zahl** – die Menge ℚ.

Bruchrechnen ist kein Thema, das man einmal versteht und dann abhakt. Es steckt überall weiter drin:

| Wo | Beispiel |
|----|----------|
| **Gleichungen umstellen** | Brüche auf beiden Seiten, Nenner wegmultiplizieren |
| **Bruchterme** | 1/x, (x+1)/(x−2) – kommen in LM2 bei den Gleichungen wieder |
| **Mischungsverhältnisse** | Mörtel 1 : 4, Beton-Rezepturen |
| **Gefälle und Neigung** | 1 : 50, 2 %, 1/50 – dasselbe in drei Schreibweisen |
| **Maßstab** | 1 : 100 heißt: jede Länge ist 1/100 der Wirklichkeit |

> ### 💡 Der Bruchstrich ist ein Geteiltzeichen
> Mehr ist er nicht. `3/4` heißt „3 geteilt durch 4". Wenn du bei einer Umformung unsicher bist, schreib den Bruch als Division hin – dann greifen die Regeln, die du von den Grundrechenarten schon kennst.

## 4.1 Was ein Bruch ist

```
     3   ← Zähler    (zählt, wie viele Stücke du hast)
    ───  ← Bruchstrich (bedeutet: geteilt durch)
     4   ← Nenner    (benennt, in wie viele Stücke das Ganze geteilt ist)
```

Der **Nenner** darf nie 0 sein – durch 0 kann man nicht teilen.

### Echte, unechte und gemischte Brüche

| Art | Bedingung | Beispiel |
|-----|-----------|----------|
| **echter Bruch** | Zähler kleiner als Nenner, Wert < 1 | 3/4 |
| **unechter Bruch** | Zähler ≥ Nenner, Wert ≥ 1 | 12/5 |
| **gemischte Zahl** | ganzer Anteil + echter Bruch | 2 2/5 |

Unechter Bruch → gemischte Zahl: **Zähler durch Nenner teilen mit Rest.**

```
12 : 5 = 2 Rest 2     →     12/5 = 2 2/5
−14 : 3 = −4 Rest −2  →    −14/3 = −4 2/3
```

Zurück geht es umgekehrt: **ganze Zahl mal Nenner, Zähler dazu.**

```
2 2/5 = (2 · 5 + 2)/5 = 12/5
```

> **Zum Rechnen immer unechte Brüche.** Gemischte Zahlen sehen hübsch aus, aber rechnen lässt sich mit ihnen schlecht. Wandle sie zuerst um – besonders beim Multiplizieren.

### Jede ganze Zahl ist auch ein Bruch

```
2 = 2/1 = 6/3 = 8/4          −1 = −1/1 = −2/2 = −5/5
```

Das klingt nach einer Spitzfindigkeit, ist aber der Trick bei vielen Aufgaben: Wenn du `2/3 · 9` rechnen sollst, schreib die 9 als `9/1`, dann gilt dieselbe Regel wie immer.

## 4.2 Kürzen und Erweitern

> ### 💡 Die beiden Grundregeln
> **Erweitern:** Zähler und Nenner mit **derselben** Zahl **multiplizieren**.
> **Kürzen:** Zähler und Nenner durch **dieselbe** Zahl **dividieren**.
>
> In beiden Fällen **ändert sich der Wert des Bruches nicht** – nur seine Schreibweise.

```
 2     2 · 5    10                18     18 : 6     3
───  = ─────  = ──               ───  =  ──────  = ───
 3     3 · 5    15                30     30 : 6     5
```

Warum ändert sich der Wert nicht? Weil du im Grunde mit 1 multiplizierst: 5/5 = 1, und mal 1 ändert nichts.

### Vollständig kürzen – der größte gemeinsame Teiler

Vollständig gekürzt ist ein Bruch, wenn Zähler und Nenner **keinen gemeinsamen Teiler außer 1** mehr haben. Die Zahl, mit der du in einem Rutsch dorthin kommst, ist der **größte gemeinsame Teiler (ggT)**.

Bei kleinen Zahlen findest du ihn über die Teilermengen:

```
T₁₈ = { 1, 2, 3, 6, 9, 18 }
T₃₀ = { 1, 2, 3, 5, 6, 10, 15, 30 }
größte gemeinsame Zahl:  6     →   18/30 = 3/5
```

### 📐 Lehrbeispiel 1 – Kürzen über die Primfaktoren

Bei größeren Zahlen sind Teilermengen mühsam. Dann **zerlegst du in Primfaktoren**. Kürze 112/184.

```
112 = 2 · 2 · 2 · 2 · 7
184 = 2 · 2 · 2     · 23
```

Der ggT enthält **alle gemeinsamen** Primfaktoren:

```
ggT(112, 184) = 2 · 2 · 2 = 8
```

```
112 : 8     14
──────── = ───
184 : 8     23
```

**Ergebnis: 112/184 = 14/23** · *Probe: 14 · 8 = 112 ✓ und 23 · 8 = 184 ✓*

> **Primzahlen bis 50 zum Zerlegen:** 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.
> Die 1 ist **keine** Primzahl. Eine Primzahl hat genau zwei Teiler: 1 und sich selbst.

## 4.3 Brüche vergleichen – der Hauptnenner

**Gleicher Nenner?** Dann entscheidet allein der Zähler:

```
3/8 < 5/8
```

**Verschiedene Nenner?** Dann musst du sie erst **gleichnamig** machen – beide auf denselben Nenner bringen. Der kleinste Nenner, der dafür taugt, heißt **Hauptnenner**. Er ist das **kleinste gemeinsame Vielfache (kgV)** der beiden Nenner.

### 📐 Lehrbeispiel 2 – 2/3 und 3/5 vergleichen

Vielfachmengen bilden:

```
V₃ = { 3, 6, 9, 12, 15, 18, ... }
V₅ = { 5, 10, 15, 20, ... }
kleinste gemeinsame Zahl:  15
```

Beide Brüche auf 15 erweitern:

```
 2     2 · 5    10                 3     3 · 3     9
───  = ─────  = ──                ───  = ─────  = ──
 3     3 · 5    15                 5     5 · 3     15
```

**Ergebnis: 10/15 > 9/15, also 2/3 > 3/5**

### 📐 Lehrbeispiel 3 – erst kürzen, dann vergleichen

Vergleiche 18/30 und 36/40.

Beide lassen sich kürzen – das macht die Zahlen kleiner, bevor du den Hauptnenner suchst:

```
18/30 = 3/5           (geteilt durch 6)
36/40 = 9/10          (geteilt durch 4)
```

Hauptnenner von 5 und 10 ist **10**:

```
3/5 = 6/10
```

**Ergebnis: 6/10 < 9/10, also 18/30 < 36/40**

> **Reihenfolge merken:** erst kürzen, dann den Hauptnenner suchen. Umgekehrt rechnest du mit unnötig großen Zahlen.

### 📐 Lehrbeispiel 4 – Hauptnenner über die Primfaktoren

Bringe 35/42, 55/70 und 75/105 auf einen gemeinsamen Nenner.

Nenner zerlegen, gleiche Faktoren untereinander:

```
 42 = 2 · 3 ·     7
 70 = 2 ·     5 · 7
105 =     3 · 5 · 7
────────────────────
kgV = 2 · 3 · 5 · 7 = 210
```

> **Die Regel:** Das **kgV** enthält jeden Primfaktor, der in **mindestens einem** Nenner vorkommt – und zwar so oft, wie er dort höchstens vorkommt.
> Der **ggT** enthält nur die Faktoren, die in **allen** vorkommen.

Erweitern auf 210:

```
35/42  = 175/210        (· 5)
55/70  = 165/210        (· 3)
75/105 = 150/210        (· 2)
```

**Ergebnis: 150/210 < 165/210 < 175/210, also 75/105 < 55/70 < 35/42**

### Negative Brüche vergleichen

Auf der Zahlengeraden liegt die **kleinere Zahl links**. Bei negativen Zahlen dreht sich das Gefühl also um:

```
−4 1/2  <  −4
```

Je größer der Betrag, desto kleiner die negative Zahl.

## 4.4 Addieren und Subtrahieren

> ### 💡 Die Regel
> **Gleichnamige Brüche** werden addiert bzw. subtrahiert, indem man die **Zähler** addiert bzw. subtrahiert. Der **Nenner bleibt unverändert**.
> ```
>  3     1     3 + 1     4
> ───  + ───  = ─────  = ───
>  7     7       7        7
> ```
> **Ungleichnamige Brüche** musst du **vorher** auf den Hauptnenner bringen.

Der Nenner wird **nicht** mitaddiert. Das ist der häufigste Fehler überhaupt:

```
 1     1     2                         falsch
───  + ───  ≠ ───
 2     3     5
```

Dass das nicht stimmen kann, siehst du sofort: 1/2 allein ist schon größer als 2/5.

### So gehst du vor

1. Gemischte Zahlen in **unechte Brüche** umwandeln.
2. Brüche **kürzen**, soweit möglich.
3. **Hauptnenner** bestimmen (kgV der Nenner).
4. Beide Brüche darauf **erweitern**.
5. **Zähler** addieren oder subtrahieren, Nenner beibehalten.
6. Ergebnis **kürzen** und bei Bedarf als gemischte Zahl schreiben.

### 📐 Lehrbeispiel 5 – 1/2 + 1/3

```
Hauptnenner von 2 und 3:  6

 1     1 · 3     3                 1     1 · 2     2
───  = ─────  = ───               ───  = ─────  = ───
 2     2 · 3     6                 3     3 · 2     6

 3     2     3 + 2     5
───  + ───  = ─────  = ───
 6     6       6        6
```

**Ergebnis: 5/6** · *Kontrolle: 0,5 + 0,333… = 0,833… = 5/6 ✓*

### 📐 Lehrbeispiel 6 – 5/6 + 7/8 mit Umwandlung

```
Hauptnenner von 6 und 8:  24         (6 = 2·3, 8 = 2·2·2 → kgV = 2·2·2·3 = 24)

5/6 = 20/24          7/8 = 21/24

20/24 + 21/24 = 41/24
```

41/24 ist ein **unechter** Bruch. Als gemischte Zahl:

```
41 : 24 = 1 Rest 17      →      41/24 = 1 17/24
```

**Ergebnis: 41/24 = 1 17/24**

### 📐 Lehrbeispiel 7 – gemischte Zahl minus Bruch

Berechne 2 1/4 − 3/8.

```
Schritt 1: gemischte Zahl umwandeln
2 1/4 = (2 · 4 + 1)/4 = 9/4

Schritt 2: Hauptnenner von 4 und 8 ist 8
9/4 = 18/8

Schritt 3: subtrahieren
18/8 − 3/8 = 15/8

Schritt 4: als gemischte Zahl
15 : 8 = 1 Rest 7   →   15/8 = 1 7/8
```

**Ergebnis: 1 7/8**

## 4.5 Multiplizieren und Dividieren

Hier wird es einfacher als beim Addieren – **du brauchst keinen Hauptnenner**.

> ### 💡 Die beiden Regeln
> **Multiplizieren:** Zähler mal Zähler, Nenner mal Nenner.
> ```
>  a     c     a · c
> ───  · ───  = ─────
>  b     d     b · d
> ```
> **Dividieren:** mit dem **Kehrwert** multiplizieren – den zweiten Bruch umdrehen.
> ```
>  a     c     a     d     a · d
> ───  : ───  = ───  · ───  = ─────
>  b     d     b     c     b · c
> ```

Der **Kehrwert** entsteht durch Vertauschen von Zähler und Nenner: der Kehrwert von 3/4 ist 4/3, der von 5 ist 1/5.

### 📐 Lehrbeispiel 8 – 3/4 · 2/9

```
 3     2     3 · 2      6      1
───  · ───  = ─────  =  ──  =  ──
 4     9     4 · 9      36     6
```

Schneller geht es, wenn du **vor** dem Ausmultiplizieren kürzt – über Kreuz:

```
 3     2       3     2        1     1     1
───  · ───  =  ──  · ──   =  ──  · ──  =  ──
 4     9       4     9        2     3     6
               ↑     ↑
          3 und 9 durch 3,  2 und 4 durch 2
```

**Ergebnis: 1/6**

> **Das lohnt sich immer.** Erst kürzen heißt kleine Zahlen multiplizieren und am Ende nichts mehr kürzen müssen.

### 📐 Lehrbeispiel 9 – 5/8 : 15/16

```
 5     15      5     16     5 · 16     80      2
───  : ───  = ───  · ───  = ──────  = ───  =  ──
 8     16      8     15     8 · 15     120     3
```

Mit Kürzen vorab: 16 und 8 durch 8 → 2, 5 und 15 durch 5 → 3.

```
 5     16     1     2     2
───  · ───  = ──  · ──  = ──
 8     15     1     3     3
```

**Ergebnis: 2/3**

### Mit ganzen Zahlen

Schreib die ganze Zahl als Bruch mit dem Nenner 1:

```
 2             2     9     18
───  · 9   =  ───  · ──  = ──  = 6
 3             3     1      3

 3             3     6      3     1      3      1
───  : 6   =  ───  : ──  = ───  · ──  = ───  = ───
 5             5     1      5     6      30     10
```

> ### ⚠️ Mal macht nicht immer größer
> Mit einem Bruch **kleiner als 1** zu multiplizieren macht das Ergebnis **kleiner**: 10 · 1/2 = 5.
> Durch einen Bruch kleiner als 1 zu **teilen** macht es **größer**: 10 : 1/2 = 20.
> Das fühlt sich falsch an, stimmt aber – „wie oft passt eine halbe in zehn?" Zwanzigmal.

### Doppelbrüche

Ein Bruch, in dem oben und unten wieder Brüche stehen, ist nichts Neues – der große Bruchstrich ist auch nur ein Geteiltzeichen:

```
  2/3       2     4     2     9     18     3
 ─────  =  ───  : ───  = ──  · ──  = ──  = ──
  4/9       3     9     3     4     12     2
```

**Merksatz:** Der **längere** Bruchstrich ist der Hauptbruchstrich – der trennt.

<div class="viz" data-viz="bruchrechnen"></div>

## 4.6 Brüche und Dezimalzahlen

### Vom Bruch zur Dezimalzahl

Einfach **Zähler durch Nenner teilen**.

```
2/9   = 2 : 9  = 0,2222...     = 0,2       mit Periode 2
15/22 = 15 : 22 = 0,681818...  = 0,68      mit Periode 18
5/11  = 5 : 11 = 0,4545...     = 0,45      mit Periode 45
17/30 = 17 : 30 = 0,5666...    = 0,56      mit Periode 6
```

| Art | Wann | Beispiel |
|-----|------|----------|
| **abbrechend** | Nenner enthält nur die Primfaktoren 2 und 5 | 3/8 = 0,375 |
| **reinperiodisch** | alle Ziffern nach dem Komma gehören zur Periode | 5/11 = 0,45 Periode 45 |
| **gemischt-periodisch** | davor stehen Ziffern, die nicht zur Periode gehören | 17/30 = 0,5 dann Periode 6 |

### Von der periodischen Dezimalzahl zum Bruch

> ### 💡 Reinperiodisch
> Die Ziffern der Periode kommen in den **Zähler**. In den **Nenner** kommen so viele **Neunen**, wie die Periode Ziffern hat.
> ```
> 0,333...  (Periode 3)   →   3/9   = 1/3
> 0,272727... (Periode 27) →  27/99 = 3/11
> ```

> ### 💡 Gemischt-periodisch
> In den Zähler: **die ganze Ziffernfolge minus den nicht-periodischen Teil**.
> In den Nenner: so viele **Neunen** wie Periodenziffern, dahinter so viele **Nullen** wie Vorperiodenziffern.
> ```
> 0,1666...  (1 vor der Periode, Periode 6)
>
>      16 − 1      15      1
>     ────────  =  ───  =  ──
>        90         90      6
> ```
> *Probe: 1 : 6 = 0,1666… ✓*

## 4.7 Bruchterme – Brüche mit Variablen

Steht im Nenner eine **Variable**, heißt das Ganze **Bruchterm**. Gerechnet wird genauso wie mit Zahlen – mit einer zusätzlichen Pflicht.

### Die Definitionsmenge

Der Nenner darf nie 0 werden. Deshalb musst du **vor** dem Rechnen angeben, welche Werte für die Variable **verboten** sind.

### 📐 Lehrbeispiel 10 – Definitionsmenge bestimmen

Für welche x ist `1/(x − 1)` nicht definiert?

```
Nenner gleich null setzen:   x − 1 = 0
                                 x = 1
```

**Also: x ≠ 1.** Man schreibt D = ℝ \ {1} – „alle reellen Zahlen außer 1".

Bei `(x + 1)/(x² − 4)`:

```
x² − 4 = 0
x² = 4
x = 2  oder  x = −2
```

**Also: D = ℝ \ {−2; 2}.** Zwei verbotene Werte, weil eine quadratische Gleichung zwei Lösungen hat.

### Bruchterme addieren

Gleiche Regel wie bei Zahlen: **gleichnamig machen**, dann die Zähler verrechnen.

```
 2     3     5
───  + ───  = ───          für x ≠ 0
 x     x      x

 1      1         2        1        3
───  + ────  =  ────  +  ────  =  ────       für x ≠ 0
 x      2x        2x       2x       2x
```

Im zweiten Beispiel ist der Hauptnenner **2x** – genau wie bei Zahlen das kgV von x und 2x.

> ### ⚠️ Kürzen darfst du nur Faktoren, niemals Summanden
> ```
>  x + 3               falsch gekürzt zu  1 + 3 = 4
> ───────                                   (der Nenner x ist kein Faktor des Zählers)
>    x
>
>  3 · x                richtig gekürzt zu  3
> ───────                                   (x ist hier ein Faktor)
>    x
> ```
> **Prüffrage:** Steht zwischen den Teilen ein **Mal**? Dann darfst du kürzen. Steht dort ein **Plus** oder **Minus**? Dann nicht – außer du klammerst vorher aus.

> ### ⚠️ Typische Fehler beim Bruchrechnen
> **1. Nenner mitaddiert.** 1/2 + 1/3 ist nicht 2/5. Nur die Zähler werden addiert, und das erst nach dem Gleichnamigmachen.
> **2. Hauptnenner vergessen.** Ohne gleichen Nenner darfst du gar nichts zusammenzählen.
> **3. Beim Multiplizieren einen Hauptnenner gesucht.** Den brauchst du nur bei Plus und Minus.
> **4. Beim Dividieren den falschen Bruch umgedreht.** Es wird immer der **zweite** umgedreht (der Divisor).
> **5. Über eine Summe gekürzt.** Gekürzt werden nur Faktoren – siehe oben.
> **6. Gemischte Zahlen malgenommen.** 2 1/2 · 3 ist nicht 2 3/2. Erst in 5/2 umwandeln.
> **7. Definitionsmenge vergessen.** Bei jedem Bruchterm gehört sie zur Lösung dazu.

---

# ✍️ Übungsaufgaben mit Lösungsweg

> Rechne jede Aufgabe zuerst selbst, dann klapp die Lösung auf. Aufgaben 1–9 sind Rechentechnik, Aufgaben 10–12 kommen aus der Baupraxis.

### Aufgabe 1 · Vollständig kürzen
**1.1** 18/30 · **1.2** 112/184 · **1.3** 75/105 · **1.4** 144/216

<details><summary>Lösung anzeigen</summary>

**1.1** ggT(18, 30) = 6 → **3/5**

**1.2** 112 = 2·2·2·2·7, 184 = 2·2·2·23 → ggT = 8 → **14/23**

**1.3** ggT(75, 105) = 15 → **5/7**

**1.4** 144 = 2⁴·3², 216 = 2³·3³ → ggT = 2³·3² = 72 → **2/3**
*Probe: 2 · 72 = 144 ✓ und 3 · 72 = 216 ✓*
</details>

### Aufgabe 2 · Auf den Hauptnenner erweitern
**2.1** 2/3 und 3/5 · **2.2** 5/6 und 7/8 · **2.3** 35/42, 55/70 und 75/105

<details><summary>Lösung anzeigen</summary>

**2.1** kgV(3, 5) = 15 → **10/15 und 9/15**

**2.2** 6 = 2·3, 8 = 2·2·2 → kgV = 2·2·2·3 = 24 → **20/24 und 21/24**

**2.3** 42 = 2·3·7, 70 = 2·5·7, 105 = 3·5·7 → kgV = 2·3·5·7 = 210
→ **175/210, 165/210 und 150/210**
</details>

### Aufgabe 3 · Vergleichen mit < oder >
**3.1** 3/8 und 5/8 · **3.2** 2/3 und 3/5 · **3.3** 18/30 und 36/40 · **3.4** −4 1/2 und −4

<details><summary>Lösung anzeigen</summary>

**3.1** Gleicher Nenner, also entscheidet der Zähler: **3/8 < 5/8**

**3.2** Hauptnenner 15: 10/15 und 9/15 → **2/3 > 3/5**

**3.3** Erst kürzen: 3/5 und 9/10. Hauptnenner 10: 6/10 und 9/10 → **18/30 < 36/40**

**3.4** Je größer der Betrag, desto kleiner die negative Zahl: **−4 1/2 < −4**
</details>

### Aufgabe 4 · Addieren und Subtrahieren
**4.1** 1/2 + 1/3 · **4.2** 3/4 − 2/5 · **4.3** 5/6 + 7/8 · **4.4** 2 1/4 − 3/8

<details><summary>Lösung anzeigen</summary>

**4.1** Hauptnenner 6: 3/6 + 2/6 = **5/6**

**4.2** Hauptnenner 20: 15/20 − 8/20 = **7/20**

**4.3** Hauptnenner 24: 20/24 + 21/24 = 41/24 = **1 17/24**

**4.4** 2 1/4 = 9/4, Hauptnenner 8: 18/8 − 3/8 = 15/8 = **1 7/8**
</details>

### Aufgabe 5 · Multiplizieren und Dividieren
**5.1** 3/4 · 2/9 · **5.2** 5/8 : 15/16 · **5.3** 2/3 · 9 · **5.4** 3/5 : 6

<details><summary>Lösung anzeigen</summary>

**5.1** Über Kreuz kürzen: 3 und 9 durch 3, 2 und 4 durch 2 → 1/2 · 1/3 = **1/6**

**5.2** Kehrwert: 5/8 · 16/15. Kürzen: 16 und 8 durch 8, 5 und 15 durch 5 → 1/1 · 2/3 = **2/3**

**5.3** 2/3 · 9/1 = 18/3 = **6**

**5.4** 3/5 : 6/1 = 3/5 · 1/6 = 3/30 = **1/10**
</details>

### Aufgabe 6 · Doppelbrüche
**6.1** (2/3) geteilt durch (4/9) · **6.2** (5/6) geteilt durch (10/3)

<details><summary>Lösung anzeigen</summary>

**6.1** 2/3 · 9/4 = 18/12 = **3/2 = 1 1/2**

**6.2** 5/6 · 3/10 = 15/60 = **1/4**
</details>

### Aufgabe 7 · Bruch in Dezimalzahl
**7.1** 2/9 · **7.2** 5/11 · **7.3** 17/30 · **7.4** 3/8

<details><summary>Lösung anzeigen</summary>

**7.1** 2 : 9 = 0,2222… → **0,2 mit Periode 2** (reinperiodisch)

**7.2** 5 : 11 = 0,4545… → **0,45 mit Periode 45** (reinperiodisch)

**7.3** 17 : 30 = 0,5666… → **0,5 dann Periode 6** (gemischt-periodisch)

**7.4** 3 : 8 = **0,375** (abbrechend – der Nenner 8 = 2·2·2 enthält nur Zweien)
</details>

### Aufgabe 8 · Periodische Dezimalzahl in Bruch
**8.1** 0,333… · **8.2** 0,272727… · **8.3** 0,1666…

<details><summary>Lösung anzeigen</summary>

**8.1** Reinperiodisch, Periode hat 1 Ziffer: 3/9 = **1/3**

**8.2** Reinperiodisch, Periode hat 2 Ziffern: 27/99 = **3/11**
*(gekürzt durch 9)*

**8.3** Gemischt-periodisch: 1 Ziffer vor der Periode, Periode hat 1 Ziffer
→ Nenner: eine Neun, eine Null = 90
→ Zähler: 16 − 1 = 15
→ 15/90 = **1/6** · *Probe: 1 : 6 = 0,1666… ✓*
</details>

### Aufgabe 9 · Bruchterme
**9.1** Definitionsmenge von 1/(x − 1) · **9.2** 2/x + 3/x zusammenfassen
**9.3** 1/x + 1/(2x) zusammenfassen · **9.4** Definitionsmenge von (x + 1)/(x² − 4)

<details><summary>Lösung anzeigen</summary>

**9.1** x − 1 = 0 → x = 1 → **D = ℝ \ {1}**

**9.2** Gleichnamig, also nur die Zähler: **5/x**, für x ≠ 0

**9.3** Hauptnenner 2x: 2/(2x) + 1/(2x) = **3/(2x)**, für x ≠ 0

**9.4** x² − 4 = 0 → x² = 4 → x = 2 oder x = −2 → **D = ℝ \ {−2; 2}**
</details>

### 🏗️ Aufgabe 10 · Mörtel mischen
Zementmörtel wird im Verhältnis **1 : 4** angesetzt (1 Teil Zement, 4 Teile Sand). Du brauchst **0,50 m³** Mörtel. Welchen Anteil hat der Zement am Ganzen, und wie viel m³ Zement und Sand sind das?

<details><summary>Lösung anzeigen</summary>

1 : 4 heißt **5 Teile insgesamt** – nicht 4. Das ist die Stelle, an der am häufigsten falsch gerechnet wird.

```
Zementanteil:  1/5 des Ganzen
Sandanteil:    4/5 des Ganzen

Zement: 1/5 · 0,50 m³ = 0,10 m³
Sand:   4/5 · 0,50 m³ = 0,40 m³
```

**Ergebnis: 0,10 m³ Zement und 0,40 m³ Sand** · *Probe: 0,10 + 0,40 = 0,50 m³ ✓*
</details>

### 🏗️ Aufgabe 11 · Gefälle einer Dachrinne
Eine Dachrinne ist **12,00 m** lang und soll ein Gefälle von **1 : 200** bekommen. Wie groß ist der Höhenunterschied zwischen Anfang und Ende? Gib das Gefälle auch in Prozent an.

<details><summary>Lösung anzeigen</summary>

1 : 200 heißt: auf 200 m Länge geht es 1 m hinunter, also **1/200** je Meter.

```
Höhenunterschied:  12,00 m · 1/200 = 12/200 m = 0,06 m = 6 cm

In Prozent:  1/200 = 0,005 = 0,5 %
```

**Ergebnis: 6 cm Höhenunterschied, Gefälle 0,5 %**

> Die drei Schreibweisen 1 : 200, 1/200 und 0,5 % meinen dasselbe. Auf Plänen findest du alle drei.
</details>

### 🏗️ Aufgabe 12 · Betonmenge für Fundamente
Für ein Streifenfundament rechnest du mit **5/8 m³** Beton je Abschnitt. Es sind **6 Abschnitte** zu betonieren. Wie viel Beton brauchst du? Wie viel musst du bestellen, wenn der Lieferant nur in **viertel Kubikmetern** liefert?

<details><summary>Lösung anzeigen</summary>

```
5/8 m³ · 6 = 5/8 · 6/1 = 30/8 m³ = 15/4 m³ = 3,75 m³
```

3,75 m³ sind genau 15 Viertel – das geht glatt auf.

**Ergebnis: 3,75 m³, also 15 Viertelkubikmeter.**

> In der Praxis bestellst du trotzdem mehr: Verschnitt, Reste in der Pumpe, ungenauer Aushub. 4,00 m³ wären hier die realistische Bestellmenge. Gerechnet wird aber erst einmal exakt – aufgerundet wird am Schluss.
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich weiß, dass der **Bruchstrich ein Geteiltzeichen** ist und der Nenner nie 0 sein darf.
- [ ] Ich kann zwischen **unechtem Bruch und gemischter Zahl** hin- und herwandeln.
- [ ] Ich kann einen Bruch **vollständig kürzen** und finde den **ggT** über die Primfaktoren.
- [ ] Ich finde den **Hauptnenner** als **kgV** der Nenner – auch über die Primfaktorzerlegung.
- [ ] Ich weiß: beim **Addieren** wird nur der Zähler addiert, **nie** der Nenner.
- [ ] Ich weiß, dass ich beim **Multiplizieren und Dividieren keinen Hauptnenner** brauche.
- [ ] Ich dividiere, indem ich mit dem **Kehrwert** des **zweiten** Bruches multipliziere.
- [ ] Ich kürze **vor** dem Ausmultiplizieren, nicht danach.
- [ ] Ich kann eine **periodische Dezimalzahl** in einen Bruch zurückverwandeln.
- [ ] Ich gebe bei jedem **Bruchterm die Definitionsmenge** an.
- [ ] Ich weiß: **gekürzt werden nur Faktoren**, niemals Summanden.

**Nächstes Modul:** LM2 – Funktionen und Gleichungen erster Ordnung
