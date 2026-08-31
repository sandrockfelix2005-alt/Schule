# Mathematik I · Lernmodul 2 · Kapitel 2
# Funktionen und Geraden

> **Lernkapitel zum Selbststudium.** Quelle: DAA Mathematik I, Lernmodul 2, Lernbereich 2 · **Zeitaufwand: ca. 5–6 Stunden**

**Was du am Ende können musst**
- Erklären, was eine **Funktion** ist (und was keine), **Definitions-** und **Wertemenge** angeben.
- Die **Geradengleichung y = m·x + b** deuten, aufstellen und zeichnen.
- **Steigung** aus zwei Punkten berechnen und als Gefälle in % umrechnen.
- **Nullstellen** und **Schnittpunkte** zweier Geraden berechnen.
- **Gleichungssysteme** mit drei Verfahren lösen.
- Die **Umkehrfunktion** bilden.

**Inhalt:** [2.1 Funktionsbegriff](#21-funktion-definitions--und-wertemenge) · [2.2 Die Gerade](#22-die-gerade) · [2.3 Nullstelle & Schnittpunkt](#23-nullstelle-und-schnittpunkt) · [2.4 Gleichungssysteme](#24-lineare-gleichungssysteme) · [2.5 Umkehrfunktion](#25-umkehrfunktion) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

Die **lineare Funktion** – die Gerade – ist das meistgenutzte mathematische Modell in der Technik. Überall dort, wo etwas **gleichmäßig** zu- oder abnimmt, steckt eine Gerade dahinter:

| Im Bau | Die Gerade beschreibt |
|--------|----------------------|
| Rampe, Dachfläche, Böschung | Höhe in Abhängigkeit von der Länge |
| Kostenkalkulation | Gesamtkosten = Fixkosten + Menge × Einzelpreis |
| Entwässerungsleitung | Sohlhöhe entlang der Trasse |
| Erwärmung eines Bauteils | Längenänderung je Grad |
| Lohnkosten | Grundstunden + Stunden × Stundensatz |

---

## 2.1 Funktion, Definitions- und Wertemenge

### Was ist eine Funktion?

> ### 💡 Definition
> Eine **Funktion** ist eine **eindeutige Zuordnung**: Jedem x-Wert ist **genau ein** y-Wert zugeordnet.

**Wichtig:** „Eindeutig" heißt **nicht**, dass jeder y-Wert nur einmal vorkommen darf – nur, dass zu einem x nie **zwei** verschiedene y gehören.

| Zuordnung | Funktion? | Warum |
|-----------|:---------:|-------|
| Fläche → Materialpreis | ✅ | zu jeder Fläche genau ein Preis |
| Bauteil → Gewicht | ✅ | eindeutig |
| Preis → Fläche | ⚠️ | nur wenn der Preis eindeutig zurückführbar ist |
| Person → Telefonnummern | ❌ | jemand kann mehrere haben |

### Der Test am Grafen

> ### 💡 Senkrechten-Test
> Zeichne eine **senkrechte Linie** durch den Grafen. Schneidet sie ihn **mehr als einmal**, ist es **keine** Funktion.

### Schreibweisen

Alle drei bedeuten dasselbe:
```
f: x → 8,3x          y = 8,3x          f(x) = 8,3x
```

**f(x) lesen als:** „f von x" – der Funktionswert an der Stelle x.
`f(3)` heißt: Setze 3 für x ein.

### Definitionsmenge und Wertemenge

| Begriff | Symbol | Bedeutung |
|---------|:------:|-----------|
| **Definitionsmenge** | D | Alle **erlaubten x-Werte** |
| **Wertemenge** | W | Alle **vorkommenden y-Werte** |

### 📐 Lehrbeispiel 1 – Messing (aus dem Modul)

Die proportionale Zuordnung Volumen → Masse ist eine Funktion. Für Messing (Dichte ρ = 8,3 g/cm³) mit D = {x | 0 ≤ x ≤ 10}:

**Funktionsgleichung:** `f: x → 8,3x` bzw. `y = 8,3x`

**Wertetabelle:**

| x (cm³) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---------|---|---|---|---|---|---|---|---|---|---|-----|
| y (g) | 0 | 8,3 | 16,6 | 24,9 | 33,2 | 41,5 | 49,8 | 58,1 | 66,4 | 74,7 | 83,0 |

**Wertemenge:** W = {y | 0 ≤ y ≤ 83}

### 🏗️ Warum die Definitionsmenge im Bau wichtig ist

Rechnerisch könntest du in `y = 8,3x` auch x = −5 einsetzen. **Physikalisch ist das Unsinn** – ein negatives Volumen gibt es nicht.

> ### 💡 Merke
> In technischen Aufgaben ist die Definitionsmenge fast immer durch die **Physik** begrenzt:
> - Längen, Flächen, Volumen, Massen: **x ≥ 0**
> - Zeiten: **t ≥ 0**
> - Bei einem 10 m langen Träger: **0 ≤ x ≤ 10**
>
> Ein rechnerisch richtiges Ergebnis außerhalb der Definitionsmenge ist **praktisch falsch**. Prüfe deshalb immer: „Ist mein Ergebnis überhaupt möglich?"

---

## 2.2 Die Gerade

### Die Geradengleichung

> ### 💡 Die wichtigste Formel dieses Moduls
> ```
> y = m · x + b
> ```
> | Größe | Name | Bedeutung |
> |:-----:|------|-----------|
> | **m** | **Steigung** | Wie stark steigt/fällt die Gerade |
> | **b** | **y-Achsenabschnitt** | Wo schneidet sie die y-Achse (bei x = 0) |

### Die Steigung m

```
        m = Δy / Δx = (y₂ − y₁) / (x₂ − x₁)
```

**Anschaulich:** Gehe **1 nach rechts** – wie viel geht es **nach oben**? Das ist m.

| m | Bedeutung | Graf |
|---|-----------|------|
| m > 0 | steigend | ↗ |
| m < 0 | fallend | ↘ |
| m = 0 | waagerecht | → |
| m groß | steil | |
| m klein | flach | |

### Der y-Achsenabschnitt b

Setzt man x = 0 ein:
```
y = m · 0 + b = b
```
Also: **b ist der y-Wert an der Stelle x = 0** – der Startwert.

**Sonderfall b = 0:** `y = m·x` → Gerade durch den **Ursprung** (das ist genau die proportionale Zuordnung aus Kapitel 1!).

### So zeichnest du eine Gerade

1. Punkt **(0 | b)** auf der y-Achse markieren.
2. Von dort mit der Steigung den zweiten Punkt konstruieren:
   **m = 2** → 1 nach rechts, 2 nach oben
   **m = −0,5** → 2 nach rechts, 1 nach unten
3. Beide Punkte verbinden und die Gerade durchziehen.

### 📐 Lehrbeispiel 1 – Gerade zeichnen

Zeichne `y = 2x − 3`.

| Schritt | Vorgehen |
|---------|----------|
| 1 | b = −3 → Punkt P₁(0 | −3) |
| 2 | m = 2 → von P₁ aus 1 rechts, 2 hoch → P₂(1 | −1) |
| 3 | Gerade durch P₁ und P₂ |

```
   y
   3 ┤                    ╱
   2 ┤                  ╱
   1 ┤                ╱
   0 ┼──────────────╱────────► x
  -1 ┤          ● ╱  (1|-1)
  -2 ┤          ╱
  -3 ┤    ●   ╱      (0|-3)
```

### 📐 Lehrbeispiel 2 – Gerade aus zwei Punkten

Bestimme die Gleichung der Geraden durch **A(2 | 5)** und **B(6 | 13)**.

| Schritt | Rechnung |
|---------|----------|
| 1. Steigung | m = (13 − 5) / (6 − 2) = 8 / 4 = **2** |
| 2. b bestimmen (Punkt A einsetzen) | 5 = 2 · 2 + b → 5 = 4 + b → **b = 1** |
| 3. Gleichung | **y = 2x + 1** |

**Probe mit B:** 2 · 6 + 1 = 13 ✓

### 🏗️ Bau-Beispiel 1 – Rampe

Eine barrierefreie Rampe darf höchstens **6 % Steigung** haben. Sie muss **0,72 m** Höhe überwinden.

**Steigung als Verhältnis:**
```
6 % = 6/100 = 0,06        →  m = 0,06
```

**Gleichung der Rampenoberkante** (Start auf ±0,00):
```
y = 0,06 · x
```

**Benötigte Länge:**
```
0,72 = 0,06 · x        | : 0,06
x = 12,00 m
```

**Antwort:** Die Rampe muss **mindestens 12,00 m** lang sein (plus Podeste alle 6 m nach DIN 18040).

> ### 💡 Steigung ↔ Prozent ↔ Winkel
> | Angabe | Umrechnung | Beispiel |
> |--------|-----------|----------|
> | Steigung m | Δy/Δx | 0,06 |
> | Prozent | m · 100 | 6 % |
> | Verhältnis | 1 : (1/m) | 1 : 16,7 |
> | Winkel | α = tan⁻¹(m) | 3,43° |
>
> **Achtung:** Prozent und Grad sind **nicht** dasselbe! 100 % Steigung = 45°, nicht 90°.

### 🏗️ Bau-Beispiel 2 – Kostenfunktion

Ein Gerüstbauer berechnet: **Anfahrt 280 €** pauschal, dazu **12,50 € pro m²** Gerüstfläche.

**Funktionsgleichung:**
```
K(x) = 12,50 · x + 280
```
- m = 12,50 (Preis je m² – die **variablen** Kosten)
- b = 280 (Anfahrt – die **Fixkosten**)

**Was kosten 150 m²?**
```
K(150) = 12,50 · 150 + 280 = 1875 + 280 = 2155 €
```

**Wie viel m² bekomme ich für 3000 €?**
```
3000 = 12,50x + 280      | − 280
2720 = 12,50x            | : 12,50
x = 217,6 m²
```

> **Typisch für Baukalkulation:** Fast jede Angebotssumme hat diese Form – ein **fixer Anteil** (Baustelleneinrichtung, Anfahrt, Vorhaltung) plus ein **mengenabhängiger Anteil**. Deshalb ist die Gerade das wichtigste Kalkulationsmodell.

### 🏗️ Bau-Beispiel 3 – Entwässerungsleitung

Eine Leitung beginnt bei der Sohlhöhe **−1,20 m** und hat **1,5 % Gefälle** (fällt also).

```
y = −0,015 · x − 1,20
```

**Sohlhöhe nach 40 m:**
```
y = −0,015 · 40 − 1,20 = −0,60 − 1,20 = −1,80 m
```

**Wo liegt die Sohle bei −2,55 m?**
```
−2,55 = −0,015x − 1,20     | + 1,20
−1,35 = −0,015x            | : (−0,015)
x = 90 m
```

---

<div class="viz" data-viz="gerade"></div>

## 2.3 Nullstelle und Schnittpunkt

### Die Nullstelle

> ### 💡 Definition
> Die **Nullstelle** ist der x-Wert, an dem der Graf die **x-Achse** schneidet. Dort ist **y = 0**.

**Berechnung bei der Geraden:**
```
0 = m · x + b        | − b
−b = m · x           | : m
x = −b / m
```

### 📐 Lehrbeispiel 1

Bestimme die Nullstelle von `y = 2x − 6`.

```
0 = 2x − 6      | + 6
6 = 2x          | : 2
x = 3
```
**Nullstelle: N(3 | 0)**

### 🏗️ Was die Nullstelle im Bau bedeutet

| Situation | Nullstelle bedeutet |
|-----------|--------------------|
| Höhenprofil einer Leitung | wo die Sohle die Bezugshöhe ±0,00 erreicht |
| Kostenrechnung mit Rabatt | ab wann die Kosten null wären |
| Böschung | wo sie das Gelände trifft |
| Kräfteverlauf im Träger | **wo das Moment null ist** (später in der Statik!) |

### Schnittpunkt zweier Geraden

Am Schnittpunkt haben beide Geraden **denselben x- und denselben y-Wert**. Also setzt man die Terme **gleich**.

### So gehst du vor

1. Beide Funktionsterme **gleichsetzen**: f(x) = g(x)
2. Nach **x auflösen**.
3. x in **eine der beiden** Gleichungen einsetzen → y.
4. Schnittpunkt als **S(x | y)** angeben.
5. **Probe** in der anderen Gleichung.

### 📐 Lehrbeispiel 2

Bestimme den Schnittpunkt von `y = 3x − 1` und `y = x + 5`.

| Schritt | Rechnung |
|---------|----------|
| 1. Gleichsetzen | 3x − 1 = x + 5 |
| 2. `− x` | 2x − 1 = 5 |
| 3. `+ 1` | 2x = 6 |
| 4. `: 2` | x = 3 |
| 5. y berechnen | y = 3 + 5 = 8 |

**Schnittpunkt: S(3 | 8)**
**Probe:** 3·3 − 1 = 8 ✓

### 🏗️ Bau-Beispiel – Angebotsvergleich

Zwei Firmen bieten für Erdarbeiten an:

| Firma | Fixkosten | pro m³ | Funktion |
|-------|-----------|--------|----------|
| **A** | 1500 € | 8,50 € | K_A(x) = 8,50x + 1500 |
| **B** | 800 € | 11,00 € | K_B(x) = 11,00x + 800 |

**Ab welcher Menge ist Firma A günstiger?**

| Schritt | Rechnung |
|---------|----------|
| Gleichsetzen | 8,50x + 1500 = 11,00x + 800 |
| `− 8,50x` | 1500 = 2,50x + 800 |
| `− 800` | 700 = 2,50x |
| `: 2,50` | **x = 280 m³** |

**Kosten am Schnittpunkt:**
```
K = 8,50 · 280 + 1500 = 2380 + 1500 = 3880 €
```

**Antwort:**
- Bei **weniger als 280 m³** ist **Firma B** günstiger (niedrigere Fixkosten).
- Bei **mehr als 280 m³** ist **Firma A** günstiger (niedrigerer Einheitspreis).
- Bei genau 280 m³ kosten beide **3880 €**.

> **Das ist der klassische Break-even-Punkt** – eine der häufigsten Anwendungen linearer Funktionen in der Bauwirtschaft.

---

## 2.4 Lineare Gleichungssysteme

Ein **lineares Gleichungssystem (LGS)** besteht aus zwei Gleichungen mit **zwei Unbekannten**. Gesucht ist das Zahlenpaar, das **beide** Gleichungen erfüllt.

**Beispielsystem:**
```
(I)   x + y = 10
(II)  x − y = 2
```

Es gibt drei Verfahren – alle führen zum gleichen Ergebnis.

### Verfahren 1: Gleichsetzungsverfahren

**Idee:** Beide Gleichungen nach **derselben** Variablen auflösen und gleichsetzen.

| Schritt | Rechnung |
|---------|----------|
| (I) nach y | y = 10 − x |
| (II) nach y | y = x − 2 |
| Gleichsetzen | 10 − x = x − 2 |
| `+ x` | 10 = 2x − 2 |
| `+ 2` | 12 = 2x |
| `: 2` | **x = 6** |
| y berechnen | y = 10 − 6 = **4** |

### Verfahren 2: Einsetzungsverfahren

**Idee:** Eine Gleichung nach einer Variablen auflösen und in die andere **einsetzen**.

| Schritt | Rechnung |
|---------|----------|
| (II) nach x | x = 2 + y |
| in (I) einsetzen | (2 + y) + y = 10 |
| zusammenfassen | 2 + 2y = 10 |
| `− 2` | 2y = 8 |
| `: 2` | **y = 4** |
| x berechnen | x = 2 + 4 = **6** |

### Verfahren 3: Additionsverfahren

**Idee:** Gleichungen so addieren (oder subtrahieren), dass eine Variable **wegfällt**.

| Schritt | Rechnung |
|---------|----------|
| (I) + (II) | (x + y) + (x − y) = 10 + 2 |
| y hebt sich auf | 2x = 12 |
| `: 2` | **x = 6** |
| in (I) | 6 + y = 10 → **y = 4** |

**Lösung in allen drei Fällen: (x | y) = (6 | 4)**

### 💡 Welches Verfahren wann?

| Situation | Bestes Verfahren |
|-----------|------------------|
| Eine Variable steht schon allein (y = …) | **Gleichsetzen** |
| Eine Variable hat den Faktor 1 | **Einsetzen** |
| Eine Variable hat entgegengesetzte Faktoren (+y und −y) | **Addieren** |
| Faktoren passen nicht | **Addieren**, vorher eine Gleichung multiplizieren |

### 📐 Lehrbeispiel – Additionsverfahren mit Vorbereitung

```
(I)   3x + 2y = 16
(II)  5x − 4y = 3
```

Damit sich y aufhebt, multipliziere (I) mit 2:

| Schritt | Rechnung |
|---------|----------|
| (I) · 2 | 6x + 4y = 32 |
| (II) | 5x − 4y = 3 |
| addieren | 11x = 35 |
| `: 11` | **x = 3,18…** |

*(Hier wird es krumm – in Prüfungsaufgaben gehen die Zahlen meist auf. Prüfe dann deine Rechnung.)*

### 🏗️ Bau-Beispiel – Zwei Materialien

Für eine Baustelle werden **Kies und Sand** geliefert, insgesamt **45 t** für **1 530 €**.
Kies kostet **28 €/t**, Sand **42 €/t**. Wie viel von jedem?

**Gleichungen aufstellen:**
```
(I)   x + y = 45            (Mengen in Tonnen)
(II)  28x + 42y = 1530      (Kosten)
```
x = Kies, y = Sand

**Lösung per Einsetzungsverfahren:**

| Schritt | Rechnung |
|---------|----------|
| (I) nach x | x = 45 − y |
| in (II) | 28(45 − y) + 42y = 1530 |
| ausmultiplizieren | 1260 − 28y + 42y = 1530 |
| zusammenfassen | 1260 + 14y = 1530 |
| `− 1260` | 14y = 270 |
| `: 14` | y = 19,29 t |
| x berechnen | x = 45 − 19,29 = 25,71 t |

**Antwort:** ca. **25,7 t Kies** und **19,3 t Sand**.

**Probe:** 28 · 25,71 + 42 · 19,29 = 719,9 + 810,2 = 1530,1 ≈ 1530 ✓

---

## 2.5 Umkehrfunktion

### Die Idee

Die **Umkehrfunktion** dreht die Zuordnung um: Aus „x → y" wird „y → x".

**Beispiel aus der Praxis:**
- **Funktion:** Menge → Preis („Was kosten 20 m²?")
- **Umkehrfunktion:** Preis → Menge („Wie viel m² bekomme ich für 500 €?")

### So gehst du vor

1. Funktionsgleichung **nach x auflösen**.
2. **x und y vertauschen**.
3. Fertig – das ist die Umkehrfunktion.

### 📐 Lehrbeispiel 1

Bilde die Umkehrfunktion von `y = 2x + 4`.

| Schritt | Rechnung |
|---------|----------|
| 1. Nach x auflösen | y = 2x + 4 `| − 4` |
| | y − 4 = 2x `| : 2` |
| | x = (y − 4)/2 |
| 2. x und y tauschen | **y = (x − 4)/2** |

**Probe:** f(3) = 2·3+4 = 10. Umkehrfunktion: (10−4)/2 = 3 ✓ — wir sind wieder beim Ausgangswert.

### 📐 Lehrbeispiel 2

Umkehrfunktion von `y = 3x − 9`:

```
y = 3x − 9        | + 9
y + 9 = 3x        | : 3
x = (y + 9)/3

→  Umkehrfunktion: y = (x + 9)/3
```

### Der Graf

> ### 💡 Merke
> Der Graf der Umkehrfunktion ist die **Spiegelung** des ursprünglichen Grafen an der **Winkelhalbierenden y = x**.

```
   y
     │        ╱ y = x
     │      ╱
     │    ╱   ● Originalfunktion
     │  ╱   ╱
     │╱   ╱
     ┼──╱──────► x
     │╱  ● Umkehrfunktion (gespiegelt)
```

### 🏗️ Bau-Beispiel – Kalkulation rückwärts

Die Kostenfunktion eines Angebots lautet `K = 12,50x + 280` (aus Bau-Beispiel 2).

**Umkehrfunktion bilden:**
```
K = 12,50x + 280        | − 280
K − 280 = 12,50x        | : 12,50
x = (K − 280) / 12,50
```

**Anwendung:** Das Budget beträgt **4000 €**. Wie viel m² Gerüst sind drin?
```
x = (4000 − 280) / 12,50 = 3720 / 12,50 = 297,6 m²
```

**Antwort:** ca. **297 m²** (abrunden – mehr geht nicht ins Budget).

> **Praxiswert:** Genau so rechnet man vom **Budget zur Menge** – eine der häufigsten Fragen in der Bauleitung.

> ### ⚠️ Typische Fehler
> **1. Punkte vertauscht.** P(x|y) – **erst rechts, dann hoch**.
> **2. Steigung falsch herum.** m = Δy/Δx – die **Höhe** kommt in den Zähler.
> **3. Prozent und Grad verwechselt.** 100 % Steigung = 45°, nicht 90°.
> **4. b vergessen.** Bei y = mx + b muss b mit eingesetzt werden – auch wenn es negativ ist.
> **5. Beim LGS nur eine Variable berechnet.** Die Lösung ist ein **Paar** (x|y) – immer beide angeben.
> **6. Umkehrfunktion: Tauschen vergessen.** Nach x auflösen allein reicht nicht.

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Funktionsbegriff
Ist es eine Funktion? Begründe.
**1.1** Jedem Bauteil wird sein Gewicht zugeordnet. **1.2** Jeder Fläche wird ein Materialpreis zugeordnet. **1.3** Jedem Preis werden alle Flächen zugeordnet, die so viel kosten.

<details><summary>Lösung anzeigen</summary>

**1.1** ✅ Funktion – jedes Bauteil hat genau ein Gewicht.
**1.2** ✅ Funktion – jede Fläche hat genau einen Preis.
**1.3** ❌ Keine Funktion, wenn verschiedene Flächen denselben Preis haben können – dann wäre einem x mehrere y zugeordnet.
</details>

### Aufgabe 2 · Steigung und y-Achsenabschnitt
Gib m und b an: **2.1** y = 3x − 7 · **2.2** y = −0,5x + 2 · **2.3** y = 4x · **2.4** y = −6

<details><summary>Lösung anzeigen</summary>

**2.1** m = 3, b = −7 (steigend)
**2.2** m = −0,5, b = 2 (fallend)
**2.3** m = 4, b = 0 (Ursprungsgerade)
**2.4** m = 0, b = −6 (waagerechte Gerade)
</details>

### Aufgabe 3 · Gerade aus zwei Punkten
Bestimme die Geradengleichung durch:
**3.1** A(2|5) und B(6|13) · **3.2** A(0|4) und B(3|−2)

<details><summary>Lösung anzeigen</summary>

**3.1** m = (13−5)/(6−2) = 2 → 5 = 2·2+b → b = 1 → **y = 2x + 1**
**3.2** m = (−2−4)/(3−0) = −2 → b = 4 (Punkt A liegt auf der y-Achse) → **y = −2x + 4**
</details>

### Aufgabe 4 · Nullstellen
**4.1** y = 2x − 6 · **4.2** y = −3x + 12 · **4.3** y = 0,5x + 4

<details><summary>Lösung anzeigen</summary>

**4.1** 0 = 2x−6 → **x = 3**
**4.2** 0 = −3x+12 → 3x = 12 → **x = 4**
**4.3** 0 = 0,5x+4 → 0,5x = −4 → **x = −8**
</details>

### Aufgabe 5 · Schnittpunkt
Bestimme den Schnittpunkt:
**5.1** y = 3x − 1 und y = x + 5 · **5.2** y = −2x + 8 und y = x − 1

<details><summary>Lösung anzeigen</summary>

**5.1** 3x−1 = x+5 → 2x = 6 → x = 3 → y = 8 → **S(3|8)**
**5.2** −2x+8 = x−1 → 9 = 3x → x = 3 → y = 2 → **S(3|2)**
</details>

### Aufgabe 6 · Gleichungssysteme
Löse mit dem Verfahren deiner Wahl:
**6.1** x + y = 10 und x − y = 2 · **6.2** 2x + y = 12 und x − y = 3

<details><summary>Lösung anzeigen</summary>

**6.1** Additionsverfahren: 2x = 12 → x = 6, y = 4 → **(6|4)**
**6.2** Additionsverfahren: 3x = 15 → x = 5, y = 2 → **(5|2)**
</details>

### Aufgabe 7 · Umkehrfunktionen
**7.1** y = 2x + 4 · **7.2** y = 3x − 9 · **7.3** y = −0,5x + 3

<details><summary>Lösung anzeigen</summary>

**7.1** y−4 = 2x → **y = (x−4)/2**
**7.2** y+9 = 3x → **y = (x+9)/3**
**7.3** y−3 = −0,5x → x = (3−y)/0,5 → **y = (3−x)/0,5 = 6 − 2x**
</details>

### 🏗️ Aufgabe 8 · Rampe
Eine Rampe überwindet **0,96 m** Höhe. Zulässige Steigung: **6 %**.
**8.1** Wie lang muss sie sein? **8.2** Welchen Neigungswinkel hat sie? **8.3** Wie lang bei nur 4 %?

<details><summary>Lösung anzeigen</summary>

**8.1** 0,96 = 0,06 · x → **x = 16,00 m**
**8.2** α = tan⁻¹(0,06) = **3,43°**
**8.3** 0,96 = 0,04 · x → **x = 24,00 m**
</details>

### 🏗️ Aufgabe 9 · Kostenfunktion
Ein Anbieter verlangt **350 € Grundgebühr** plus **18,50 €/m²**.
**9.1** Funktionsgleichung? **9.2** Kosten für 240 m²? **9.3** Wie viel m² für 5000 €?

<details><summary>Lösung anzeigen</summary>

**9.1** K(x) = **18,50x + 350**
**9.2** K(240) = 18,50·240 + 350 = 4440 + 350 = **4790 €**
**9.3** 5000 = 18,50x + 350 → 4650 = 18,50x → x = **251,35 m²** → praktisch **251 m²**
</details>

### 🏗️ Aufgabe 10 · Angebotsvergleich
**Firma A:** 1200 € + 9,00 €/m³ · **Firma B:** 600 € + 12,00 €/m³
**10.1** Ab welcher Menge ist A günstiger? **10.2** Was kostet es dort?

<details><summary>Lösung anzeigen</summary>

**10.1**
```
9,00x + 1200 = 12,00x + 600
1200 − 600 = 12,00x − 9,00x
600 = 3,00x
x = 200 m³
```
Ab **mehr als 200 m³** ist Firma A günstiger.

**10.2** K = 9,00 · 200 + 1200 = **3000 €** (bei beiden gleich)
</details>

### 🏗️ Aufgabe 11 · Entwässerungsleitung
Eine Leitung startet bei **−0,85 m** mit **2 % Gefälle**.
**11.1** Funktionsgleichung? **11.2** Sohlhöhe nach 35 m? **11.3** Nach wie vielen Metern liegt sie bei −2,05 m?

<details><summary>Lösung anzeigen</summary>

**11.1** y = **−0,02x − 0,85**
**11.2** y = −0,02·35 − 0,85 = −0,70 − 0,85 = **−1,55 m**
**11.3** −2,05 = −0,02x − 0,85 → −1,20 = −0,02x → **x = 60 m**
</details>

### 🏗️ Aufgabe 12 · Materialmischung
Es werden **60 t** Material für **2 040 €** geliefert. Sorte 1 kostet **30 €/t**, Sorte 2 **42 €/t**. Wie viel von jeder Sorte?

<details><summary>Lösung anzeigen</summary>

```
(I)   x + y = 60
(II)  30x + 42y = 2040

aus (I): x = 60 − y
in (II): 30(60−y) + 42y = 2040
         1800 − 30y + 42y = 2040
         1800 + 12y = 2040
         12y = 240
         y = 20 t
         x = 40 t
```
**Antwort: 40 t Sorte 1, 20 t Sorte 2**
*Probe: 30·40 + 42·20 = 1200 + 840 = 2040 ✓*
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich kann erklären, was eine **Funktion** ist, und den Senkrechten-Test anwenden.
- [ ] Ich gebe **Definitions- und Wertemenge** an – und prüfe, ob mein Ergebnis physikalisch möglich ist.
- [ ] Ich kenne **y = mx + b** und weiß, was m und b bedeuten.
- [ ] Ich berechne die **Steigung aus zwei Punkten** (m = Δy/Δx).
- [ ] Ich kann eine Gerade **zeichnen** (Punkt (0|b), dann Steigungsdreieck).
- [ ] Ich rechne zwischen **Steigung, Prozent und Winkel** um.
- [ ] Ich berechne **Nullstellen** (y = 0 setzen).
- [ ] Ich finde den **Schnittpunkt** zweier Geraden durch Gleichsetzen.
- [ ] Ich beherrsche alle **drei LGS-Verfahren** und wähle das passende.
- [ ] Ich kann eine **Umkehrfunktion** bilden (auflösen, dann tauschen).
- [ ] Ich kann einen **Angebotsvergleich** (Break-even) rechnen.

**Damit ist Lernmodul 2 abgeschlossen.**
**Nächstes Modul:** LM3 – Funktionen und Gleichungen höherer Ordnung
