# Mathematik I · Lernmodul 3 · Kapitel 2
# Wurzel- und Potenzfunktionen

> **Lernkapitel zum Selbststudium.** Quelle: DAA Mathematik I, Lernmodul 3, Lernbereiche 2 und 3 · **Zeitaufwand: ca. 4–5 Stunden**

**Was du am Ende können musst**
- Die **Wurzelfunktion** als Umkehrung der quadratischen Funktion verstehen.
- **Potenzfunktionen** f(x) = xⁿ beschreiben und ihre Grafen unterscheiden.
- Alle **Potenzgesetze** sicher anwenden.
- Mit **negativen** und **rationalen** Exponenten rechnen.
- Erkennen, was es bedeutet, wenn eine Größe **quadratisch oder kubisch** eingeht.

**Inhalt:** [2.1 Wurzelfunktionen](#21-wurzelfunktionen) · [2.2 Potenzfunktionen](#22-potenzfunktionen) · [2.3 Potenzgesetze](#23-die-potenzgesetze) · [2.4 Negative & rationale Exponenten](#24-negative-und-rationale-exponenten) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

Bisher hattest du **lineare** (x) und **quadratische** (x²) Zusammenhänge. Jetzt kommt die ganze Familie dazu: x³, x⁴, aber auch 1/x und √x.

**Warum das im Bau enorm wichtig ist:** Viele Größen hängen **nicht linear** zusammen. Wer das nicht versteht, schätzt völlig falsch:

| Größe | Abhängigkeit | Was das bedeutet |
|-------|--------------|------------------|
| Fläche eines Quadrats | **a²** | doppelte Seite → **4-fache** Fläche |
| Volumen eines Würfels | **a³** | doppelte Kante → **8-faches** Volumen |
| Kreisfläche | **r²** | doppelter Radius → 4-fache Fläche |
| **Trägheitsmoment** eines Balkens | **h³** | doppelte Höhe → **8-fache Steifigkeit** |
| **Widerstandsmoment** | **h²** | doppelte Höhe → 4-fache Tragfähigkeit |

> ### 🏗️ Die wichtigste Erkenntnis dieses Kapitels
> Ein Balken, der **doppelt so hoch** ist, trägt nicht doppelt so viel – sondern **viermal** so viel, und ist **achtmal** so steif. Das ist der Grund, warum Träger **hochkant** eingebaut werden und nicht flach.

---

## 2.1 Wurzelfunktionen

### Die Umkehrung des Quadrierens

In LM1 hast du gelernt: Aus der Fläche eines Quadrats bekommt man die Seitenlänge durch **Wurzelziehen**:

```
A = a²    →    a = √A
```

Betrachtet man das als **Funktion**, entsteht die **Wurzelfunktion**:

```
f(x) = √x
```

> ### 💡 Merke
> Die Wurzelfunktion f(x) = √x ist die **Umkehrfunktion** von f(x) = x² – allerdings nur für **x ≥ 0**.

### Warum nur für x ≥ 0?

Zwei Gründe:

**1. Der Radikand darf nicht negativ sein.**
√(−4) ist in ℝ nicht definiert (siehe LM1 K2).

**2. Sonst wäre die Umkehrung nicht eindeutig.**
Sowohl 3² = 9 als auch (−3)² = 9. Würde man beide zulassen, gäbe es zu x = 9 **zwei** y-Werte – dann wäre es keine Funktion mehr (Senkrechten-Test!).

> ### 💡 Definitionsmenge
> ```
> D = {x ∈ ℝ | x ≥ 0}
> ```
> Ebenso ist die Wertemenge W = {y | y ≥ 0} – die Wurzel liefert **nie** ein negatives Ergebnis.

### Der Graf

Der Graf entsteht durch **Spiegelung** des rechten Parabelastes an der Winkelhalbierenden **y = x**:

```
   y
   4 ┤    ╱ y = x
   3 ┤  ╱          ● (9|3)
   2 ┤╱      ● (4|2)
   1 ┤ ● (1|1)
   0 ┼●──┬───┬───┬───┬───┬───┬───┬───┬──► x
     0   1   2   3   4  ...  9
```

**Wertetabelle:**

| x | 0 | 1 | 4 | 9 | 16 | 25 |
|---|---|---|---|---|----|----|
| √x | 0 | 1 | 2 | 3 | 4 | 5 |

**Eigenschaften:**
- steigt **monoton** (wird immer größer)
- steigt am Anfang **steil**, dann immer **flacher**
- geht durch (0|0) und (1|1)

### 🏗️ Bau-Beispiel 1 – Von der Fläche zur Seitenlänge

Ein quadratisches Fundament soll **2,25 m²** Grundfläche haben. Wie lang ist eine Seite?

```
a = √A = √2,25 = 1,50 m
```

**Weitere Werte:**

| Fläche A (m²) | Seitenlänge a (m) |
|---------------|-------------------|
| 1,00 | 1,00 |
| 2,25 | 1,50 |
| 4,00 | 2,00 |
| 6,25 | 2,50 |
| 9,00 | 3,00 |

> **Beachte den flachen Verlauf:** Um die Seitenlänge zu **verdoppeln** (1,50 → 3,00 m), muss die Fläche **vervierfacht** werden (2,25 → 9,00 m²).

### 🏗️ Bau-Beispiel 2 – Stützenquerschnitt

Eine quadratische Stütze braucht **A = 53 333 mm²** Querschnitt (aus der Statik). Welche Kantenlänge?

```
a = √53 333 mm² = 230,9 mm  ≈  231 mm
```
Gewählt wird das nächstgrößere Standardmaß: **24 × 24 cm**.

### 🏗️ Bau-Beispiel 3 – Rohrdurchmesser

Ein Lüftungsrohr soll **A = 0,28 m²** Querschnitt haben. Welcher Durchmesser?

```
A = π · r²           | : π
r² = A / π = 0,28 / 3,1416 = 0,08913
r = √0,08913 = 0,2985 m
d = 2r = 0,597 m  ≈  600 mm
```
Gewählt: **DN 600**.

---

## 2.2 Potenzfunktionen

> ### 💡 Definition
> Eine **Potenzfunktion** hat die Form
> ```
> f(x) = xⁿ
> ```
> Die **Variable steht in der Basis**, der Exponent ist eine feste Zahl.

> ### ⚠️ Nicht verwechseln!
> | Typ | Form | Variable steht … |
> |-----|------|------------------|
> | **Potenzfunktion** | f(x) = **x**ⁿ | in der **Basis** |
> | **Exponentialfunktion** | f(x) = a**ˣ** | im **Exponenten** |
>
> x³ und 3ˣ sind völlig verschiedene Funktionen! Die Exponentialfunktion kommt in Kapitel 3.

### Gerade Exponenten (n = 2, 4, 6 …)

**Beispiel f(x) = x²  und  f(x) = x⁴**

| x | −2 | −1 | 0 | 1 | 2 |
|---|----|----|---|---|---|
| x² | 4 | 1 | 0 | 1 | 4 |
| x⁴ | 16 | 1 | 0 | 1 | 16 |

**Eigenschaften:**
- **achsensymmetrisch zur y-Achse** (f(−x) = f(x))
- Werte immer **≥ 0**
- alle gehen durch **(0|0)**, **(1|1)** und **(−1|1)**
- je größer n, desto **flacher** zwischen −1 und 1, desto **steiler** außerhalb

### Ungerade Exponenten (n = 3, 5, 7 …)

**Beispiel f(x) = x³**

| x | −2 | −1 | 0 | 1 | 2 |
|---|----|----|---|---|---|
| x³ | −8 | −1 | 0 | 1 | 8 |

**Eigenschaften:**
- **punktsymmetrisch zum Ursprung** (f(−x) = −f(x))
- Werte können **negativ** sein
- verläuft von **links unten** nach **rechts oben**
- gehen durch **(0|0)**, **(1|1)** und **(−1|−1)**

```
   Gerade Exponenten (x²)        Ungerade Exponenten (x³)

    y                              y
    │╲            ╱                │            ╱
    │ ╲          ╱                 │          ╱
    │  ╲        ╱                  │        ╱
    ────●●●●────── x         ──────●────────── x
      symmetrisch                ╱ │
                               ╱   │
                             ╱     │
                          punktsymmetrisch
```

### 🏗️ Bau-Beispiel – Warum Träger hochkant eingebaut werden

Für einen Rechteckquerschnitt (Breite b, Höhe h) gilt:

| Größe | Formel | Abhängigkeit von h |
|-------|--------|--------------------|
| **Widerstandsmoment** (Tragfähigkeit) | W = b·h²/6 | **quadratisch** |
| **Trägheitsmoment** (Steifigkeit) | I = b·h³/12 | **kubisch** |

**Vergleich: Ein Balken 10 × 20 cm – flach oder hochkant?**

| Lage | b (cm) | h (cm) | W = b·h²/6 | I = b·h³/12 |
|------|-------|-------|------------|-------------|
| **flach** | 20 | 10 | 20·100/6 = **333 cm³** | 20·1000/12 = **1667 cm⁴** |
| **hochkant** | 10 | 20 | 10·400/6 = **667 cm³** | 10·8000/12 = **6667 cm⁴** |

**Ergebnis:**
- Tragfähigkeit **doppelt** so hoch (Verhältnis 2 : 1)
- Steifigkeit **viermal** so hoch (Verhältnis 4 : 1)

> ### 💡 Das ist reine Potenzrechnung
> Beim Kippen tauschen b und h die Rollen. Weil h **quadratisch** (bei W) bzw. **kubisch** (bei I) eingeht, wirkt sich die Höhe viel stärker aus als die Breite.
>
> **Deshalb** sind Deckenbalken hochkant, Stahlträger haben ein I-Profil (Material weit oben und unten), und deshalb ist eine dünne, hohe Rippe steifer als ein flacher, breiter Balken gleichen Querschnitts.

### 🏗️ Bau-Beispiel – Maßstabseffekt

Ein Modell im Maßstab **1 : 50** soll die Realität abbilden.

| Größe | Faktor | Rechnung |
|-------|--------|----------|
| **Länge** | 50¹ = 50 | 1 cm Modell = 50 cm real |
| **Fläche** | 50² = 2 500 | 1 cm² Modell = 2 500 cm² real |
| **Volumen/Masse** | 50³ = 125 000 | 1 cm³ Modell = 125 000 cm³ real |

> **Praxisrelevanz:** Wer Mengen aus einem Plan abschätzt, muss wissen, ob er es mit Längen (¹), Flächen (²) oder Volumen (³) zu tun hat. Der Fehler wird sonst **potenziert**.

---

## 2.3 Die Potenzgesetze

Diese Regeln brauchst du für alles Weitere – besonders für die Logarithmen in Kapitel 3.

> ### 💡 Die Potenzgesetze
> | Nr. | Gesetz | Formel | Beispiel |
> |:---:|--------|--------|----------|
> | 1 | gleiche Basis **mal** | aᵐ · aⁿ = a^(m+n) | x²·x³ = x⁵ |
> | 2 | gleiche Basis **geteilt** | aᵐ : aⁿ = a^(m−n) | x⁵:x² = x³ |
> | 3 | Potenz **potenzieren** | (aᵐ)ⁿ = a^(m·n) | (x²)³ = x⁶ |
> | 4 | **Produkt** potenzieren | (a·b)ⁿ = aⁿ·bⁿ | (2x)³ = 8x³ |
> | 5 | **Quotient** potenzieren | (a/b)ⁿ = aⁿ/bⁿ | (x/2)² = x²/4 |
> | 6 | Exponent **null** | a⁰ = 1 (a ≠ 0) | 5⁰ = 1 |

### Merkhilfe zur Herleitung

Warum ist `x² · x³ = x⁵`? Einfach ausschreiben:
```
x² · x³ = (x·x) · (x·x·x) = x·x·x·x·x = x⁵
```
Man **zählt** die Faktoren – also **addiert** man die Exponenten.

Warum ist `(x²)³ = x⁶`?
```
(x²)³ = x² · x² · x² = x^(2+2+2) = x⁶
```
Dreimal die 2 addiert = 2 · 3 → man **multipliziert** die Exponenten.

Warum ist `a⁰ = 1`?
```
a³ : a³ = a^(3−3) = a⁰
a³ : a³ = 1                (jede Zahl durch sich selbst)
→ also a⁰ = 1
```

### 📐 Lehrbeispiel 1 – Gesetze anwenden

| Aufgabe | Gesetz | Ergebnis |
|---------|--------|----------|
| x³ · x⁴ | 1 | x⁷ |
| a⁷ : a³ | 2 | a⁴ |
| (b²)⁵ | 3 | b¹⁰ |
| (3y)² | 4 | 9y² |
| (x/4)³ | 5 | x³/64 |
| 7⁰ | 6 | 1 |

### 📐 Lehrbeispiel 2 – kombiniert

Vereinfache: `(2x²)³ · x⁴`

| Schritt | Rechnung | Gesetz |
|---------|----------|--------|
| 1 | (2x²)³ = 2³ · (x²)³ | 4 |
| 2 | = 8 · x⁶ | 3 |
| 3 | 8x⁶ · x⁴ = 8x¹⁰ | 1 |

**Ergebnis: 8x¹⁰**

### 📐 Lehrbeispiel 3 – aus dem Modul

Multiplizieren Sie und schreiben Sie mit positiven Exponenten:
`(a⁻³ · b²)²`

| Schritt | Rechnung |
|---------|----------|
| 1 | = (a⁻³)² · (b²)² |
| 2 | = a⁻⁶ · b⁴ |
| 3 | = b⁴ / a⁶ |

> ### ⚠️ Typische Fehler
> **1. Exponenten multiplizieren statt addieren.** x²·x³ = x⁵, **nicht** x⁶.
> **2. Faktor nicht mitpotenzieren.** (2x)³ = **8**x³, nicht 2x³.
> **3. Bei ungleicher Basis kürzen wollen.** x²·y³ lässt sich **nicht** vereinfachen – die Gesetze gelten nur bei **gleicher Basis**.
> **4. a⁰ = 0 setzen.** Es ist **1**.

---

## 2.4 Negative und rationale Exponenten

### Negative Exponenten

Was bedeutet x⁻²? Aus Gesetz 2 lässt es sich herleiten:

```
x³ : x⁵ = x^(3−5) = x⁻²

x³ : x⁵ = (x·x·x) / (x·x·x·x·x) = 1/(x·x) = 1/x²

→  x⁻² = 1/x²
```

> ### 💡 Merke
> ```
> a⁻ⁿ = 1 / aⁿ
> ```
> Ein **negativer Exponent** bedeutet: **Kehrwert bilden**.
>
> Umgekehrt gilt auch: `1/aⁿ = a⁻ⁿ` – so bekommst du Brüche aus dem Nenner heraus.

**Beispiele:**

| Ausdruck | umgeschrieben | Wert |
|----------|---------------|------|
| 2⁻³ | 1/2³ | 1/8 = 0,125 |
| 10⁻⁶ | 1/10⁶ | 0,000 001 |
| x⁻¹ | 1/x | |
| (1/b)⁻³ | b³ | |

### Der Graf von f(x) = x⁻¹ = 1/x

Das ist die **Hyperbel** – die schon aus der antiproportionalen Zuordnung bekannt ist (LM2 K1)!

```
   y
     │      │
     │      │  ╲
     │      │    ╲___
  ───┼──────┼─────────── x
 ___╱│      │
  ╲  │      │
     │      │
     x = 0 nicht definiert
```

**Wichtig:** Bei x = 0 ist die Funktion **nicht definiert** (Division durch Null).
**D = ℝ \ {0}**

### Rationale Exponenten (Wurzeln als Potenzen)

> ### 💡 Merke
> ```
> a^(1/n) = ⁿ√a          und allgemein          a^(m/n) = ⁿ√(aᵐ)
> ```

**Warum?** Prüfe mit Gesetz 3:
```
(a^(1/2))² = a^(1/2 · 2) = a¹ = a
```
Und genau das leistet die Quadratwurzel: (√a)² = a ✓

**Beispiele:**

| Wurzelschreibweise | Potenzschreibweise | Wert |
|--------------------|--------------------|------|
| √x | x^(1/2) | |
| ³√x | x^(1/3) | |
| ³√(x²) | x^(2/3) | |
| √4 | 4^(1/2) | 2 |
| ³√8 | 8^(1/3) | 2 |
| 4^(3/2) | (√4)³ = 2³ | 8 |

> ### 💡 Warum das praktisch ist
> Mit der Potenzschreibweise kannst du **alle Potenzgesetze auch auf Wurzeln anwenden**:
> ```
> √x · √x = x^(1/2) · x^(1/2) = x^1 = x  ✓
> √(x³) = x^(3/2)
> ³√(x⁶) = x^(6/3) = x²
> ```
> Das spart dir viel Umformerei.

### 📐 Lehrbeispiel 4 – gemischt

Vereinfache und schreibe mit positiven Exponenten: `(x⁻² · y³)⁻¹`

| Schritt | Rechnung |
|---------|----------|
| 1 | = (x⁻²)⁻¹ · (y³)⁻¹ |
| 2 | = x² · y⁻³ |
| 3 | = x² / y³ |

### 🏗️ Bau-Beispiel – Umrechnung mit negativen Exponenten

Die Wärmeleitfähigkeit wird in W/(m·K) angegeben. Eine andere Schreibweise nutzt negative Exponenten:

```
W/(m·K) = W · m⁻¹ · K⁻¹
```

Genauso:
```
kg/m³ = kg · m⁻³        (Dichte)
N/mm² = N · mm⁻²        (Spannung)
m/s²  = m · s⁻²         (Beschleunigung)
```

> **In Formelsammlungen und Normen** findest du oft diese Schreibweise. Sie bedeutet exakt dasselbe – nur ohne Bruchstrich.

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Wurzeln berechnen
**1.1** √81 · **1.2** √0,25 · **1.3** √(144/9) · **1.4** ³√27

<details><summary>Lösung anzeigen</summary>

**1.1** **9** (9² = 81)
**1.2** **0,5** (0,5² = 0,25)
**1.3** √144 / √9 = 12/3 = **4**
**1.4** **3** (3³ = 27)
</details>

### Aufgabe 2 · Definitionsmenge
Gib die Definitionsmenge an: **2.1** f(x) = √x · **2.2** f(x) = √(x − 3) · **2.3** f(x) = 1/x

<details><summary>Lösung anzeigen</summary>

**2.1** D = {x | x ≥ 0}
**2.2** Radikand ≥ 0: x − 3 ≥ 0 → **D = {x | x ≥ 3}**
**2.3** Nenner ≠ 0 → **D = ℝ \ {0}**
</details>

### Aufgabe 3 · Symmetrie erkennen
Achsen- oder punktsymmetrisch?
**3.1** f(x) = x⁴ · **3.2** f(x) = x⁵ · **3.3** f(x) = x² · **3.4** f(x) = x³

<details><summary>Lösung anzeigen</summary>

**3.1** gerader Exponent → **achsensymmetrisch** zur y-Achse
**3.2** ungerade → **punktsymmetrisch** zum Ursprung
**3.3** gerade → **achsensymmetrisch**
**3.4** ungerade → **punktsymmetrisch**
</details>

### Aufgabe 4 · Potenzgesetze
**4.1** x³·x⁴ · **4.2** (a²)⁵ · **4.3** y⁷:y² · **4.4** (3z)² · **4.5** (x/2)³ · **4.6** 12⁰

<details><summary>Lösung anzeigen</summary>

**4.1** x⁷ · **4.2** a¹⁰ · **4.3** y⁵ · **4.4** 9z² · **4.5** x³/8 · **4.6** 1
</details>

### Aufgabe 5 · Kombinierte Terme
**5.1** (2x²)³ · x⁴ · **5.2** (3a³)² : a⁴ · **5.3** (x²y)³

<details><summary>Lösung anzeigen</summary>

**5.1** 8x⁶ · x⁴ = **8x¹⁰**
**5.2** 9a⁶ : a⁴ = **9a²**
**5.3** (x²)³ · y³ = **x⁶y³**
</details>

### Aufgabe 6 · Negative Exponenten
Schreibe mit positiven Exponenten:
**6.1** 3⁻² · **6.2** x⁻⁵ · **6.3** (a⁻³b²)² · **6.4** (x⁻²y³)⁻¹

<details><summary>Lösung anzeigen</summary>

**6.1** 1/3² = **1/9**
**6.2** **1/x⁵**
**6.3** a⁻⁶b⁴ = **b⁴/a⁶**
**6.4** x²y⁻³ = **x²/y³**
</details>

### Aufgabe 7 · Wurzeln als Potenzen
**7.1** √x · **7.2** ³√(a²) · **7.3** x^(3/2) als Wurzel · **7.4** 8^(2/3) ausrechnen

<details><summary>Lösung anzeigen</summary>

**7.1** x^(1/2)
**7.2** a^(2/3)
**7.3** √(x³)
**7.4** (³√8)² = 2² = **4**
</details>

### 🏗️ Aufgabe 8 · Fundament
Ein quadratisches Fundament soll **6,25 m²** groß sein.
**8.1** Kantenlänge? **8.2** Wie groß muss die Fläche für die **doppelte** Kantenlänge sein?

<details><summary>Lösung anzeigen</summary>

**8.1** a = √6,25 = **2,50 m**
**8.2** doppelte Kante = 5,00 m → A = 5,00² = **25,00 m²** (also das **Vierfache**, nicht das Doppelte!)
</details>

### 🏗️ Aufgabe 9 · Rohrquerschnitt
Ein Rohr soll einen Querschnitt von **0,196 m²** haben.
**9.1** Welchen Radius? **9.2** Welchen Durchmesser (auf mm gerundet)?

<details><summary>Lösung anzeigen</summary>

**9.1**
```
A = π·r²  →  r² = A/π = 0,196/3,1416 = 0,06239
r = √0,06239 = 0,2498 m ≈ 0,25 m
```
**9.2** d = 2r = 0,4996 m ≈ **500 mm** (DN 500)
</details>

### 🏗️ Aufgabe 10 · Trägerlage
Ein Kantholz misst **12 × 24 cm**.
**10.1** Berechne W = b·h²/6 für beide Lagen. **10.2** Berechne I = b·h³/12 für beide Lagen. **10.3** Welchen Faktor macht die Lage aus?

<details><summary>Lösung anzeigen</summary>

**10.1 Widerstandsmoment**
```
flach (b=24, h=12):    W = 24·144/6 = 576 cm³
hochkant (b=12, h=24): W = 12·576/6 = 1152 cm³
```

**10.2 Trägheitsmoment**
```
flach:    I = 24·1728/12 = 3456 cm⁴
hochkant: I = 12·13824/12 = 13824 cm⁴
```

**10.3**
- Tragfähigkeit: 1152/576 = **Faktor 2**
- Steifigkeit: 13824/3456 = **Faktor 4**

Hochkant trägt **doppelt** so viel und ist **viermal** so steif.
</details>

### 🏗️ Aufgabe 11 · Maßstab
Ein Modell im Maßstab **1 : 25**.
**11.1** Eine Modellfläche von 8 cm² entspricht wie viel real? **11.2** Ein Modellvolumen von 30 cm³?

<details><summary>Lösung anzeigen</summary>

**11.1** Flächenfaktor 25² = 625 → 8 · 625 = **5000 cm² = 0,5 m²**
**11.2** Volumenfaktor 25³ = 15 625 → 30 · 15 625 = **468 750 cm³ ≈ 0,469 m³**
</details>

### 🏗️ Aufgabe 12 · Würfel
Ein Betonwürfel hat **10 cm** Kantenlänge.
**12.1** Volumen? **12.2** Volumen bei 20 cm Kante? **12.3** Um welchen Faktor wächst es?

<details><summary>Lösung anzeigen</summary>

**12.1** V = 10³ = **1000 cm³ = 1 dm³ = 1 l**
**12.2** V = 20³ = **8000 cm³ = 8 l**
**12.3** Faktor **8** (= 2³) – doppelte Kante, achtfaches Volumen.

> Deshalb wiegt ein doppelt so großer Betonwürfel auch achtmal so viel!
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich weiß, dass √x die **Umkehrfunktion** von x² für x ≥ 0 ist.
- [ ] Ich kann die **Definitionsmenge** einer Wurzelfunktion bestimmen (Radikand ≥ 0).
- [ ] Ich unterscheide **Potenzfunktion (xⁿ)** und **Exponentialfunktion (aˣ)**.
- [ ] Ich erkenne an geradem/ungeradem Exponenten die **Symmetrie**.
- [ ] Ich kenne alle **sechs Potenzgesetze** und kann sie herleiten.
- [ ] Ich weiß: **a⁻ⁿ = 1/aⁿ** und **a⁰ = 1**.
- [ ] Ich kann **Wurzeln als Potenzen** schreiben (a^(1/n) = ⁿ√a).
- [ ] Ich verstehe, warum **doppelte Kantenlänge = vierfache Fläche = achtfaches Volumen** bedeutet.
- [ ] Ich kann erklären, warum Träger **hochkant** eingebaut werden.
- [ ] Ich beachte beim Maßstab, ob es um Längen (¹), Flächen (²) oder Volumen (³) geht.

**Nächstes Kapitel:** LM3 Kapitel 3 – Exponential- und Logarithmusfunktionen
