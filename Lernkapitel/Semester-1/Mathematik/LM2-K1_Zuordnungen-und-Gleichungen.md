# Mathematik I · Lernmodul 2 · Kapitel 1
# Zuordnungen, Dreisatz und Gleichungen

> **Lernkapitel zum Selbststudium.** Quelle: DAA Mathematik I, Lernmodul 2, Lernbereich 1 · **Zeitaufwand: ca. 4–5 Stunden**

**Was du am Ende können musst**
- **Proportionale** und **antiproportionale** Zuordnungen sicher unterscheiden.
- Den **Proportionalitätsfaktor k** bzw. die **Konstante c** bestimmen.
- Aufgaben mit dem **Dreisatz** in beiden Varianten lösen.
- Lineare **Gleichungen und Ungleichungen** durch Äquivalenzumformung lösen.
- Eine **Formel nach jeder beliebigen Größe umstellen** (Statik!).

**Inhalt:** [1.1 Darstellungen](#11-tabelle-graf-und-koordinatensystem) · [1.2 Proportional/Antiproportional](#12-proportionale-und-antiproportionale-zuordnungen) · [1.3 Dreisatz](#13-dreisatz) · [1.4 Gleichungen](#14-äquivalenzumformungen) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

Fast jede technische Aufgabe fragt nach einem **Zusammenhang zwischen zwei Größen**: Wie viel Material für welche Fläche? Wie viele Arbeiter für welche Zeit? Wie viel Last auf welcher Stütze?

Dieses Kapitel bringt dir das Werkzeug dafür bei:
1. **Erkennen**, welche Art von Zusammenhang vorliegt,
2. ihn als **Gleichung** aufschreiben,
3. die Gleichung **nach der gesuchten Größe auflösen**.

> **Der wichtigste Teil ist 1.4.** Formeln umstellen brauchst du in der Statik, der Bauphysik und der Naturwissenschaft **ständig**. Wer das nicht sicher kann, scheitert später an Aufgaben, die eigentlich einfach wären.

---

## 1.1 Tabelle, Graf und Koordinatensystem

Eine **Zuordnung** verknüpft zwei Größen. Man kann sie auf drei Arten darstellen – alle drei zeigen dasselbe:

### 1. Die Wertetabelle

| Menge x (m²) | 1 | 2 | 5 | 10 |
|--------------|---|---|---|-----|
| Preis y (€) | 35 | 70 | 175 | 350 |

### 2. Die Zuordnungsvorschrift (der Term)

```
x → 35 · x        oder        y = 35x
```

### 3. Der Graf im Koordinatensystem

```
  y (€)
  350 ┤                          ●
      │                       ╱
  175 ┤            ●        ╱
      │         ╱
   70 ┤   ●   ╱
   35 ┤ ● ╱
      └─┬───┬───┬───┬───┬───┬──► x (m²)
        1   2   3   ...  5      10
```

### Das Koordinatensystem

| Begriff | Bedeutung |
|---------|-----------|
| **x-Achse** | waagerecht (Rechtsachse, Abszisse) |
| **y-Achse** | senkrecht (Hochachse, Ordinate) |
| **Ursprung** | Schnittpunkt beider Achsen, Punkt (0\|0) |
| **Punkt P(x\|y)** | zuerst x (nach rechts), dann y (nach oben) |

> ### 💡 Merke
> Ein Punkt wird **immer** in der Reihenfolge **(x | y)** angegeben – erst rechts, dann hoch. Vertauschen ist ein klassischer Fehler.

---

## 1.2 Proportionale und antiproportionale Zuordnungen

### Proportionale Zuordnung – „je mehr, desto mehr"

> ### 💡 Kennzeichen
> Der **Quotient y/x ist konstant**. Diese Konstante heißt **Proportionalitätsfaktor k**.
> ```
> y / x = k        →        y = k · x
> ```
> **Graf:** eine **Gerade durch den Ursprung**.

### So erkennst du sie

Teile bei jedem Wertepaar y durch x. Kommt **immer dasselbe** heraus → proportional.

### 📐 Lehrbeispiel 1 – Hohlblocksteine

80 Hohlblocksteine haben eine Masse von 440 kg.

| Schritt | Rechnung |
|---------|----------|
| 1. Faktor bestimmen | k = 440 kg : 80 Stück = **5,5 kg/Stück** |
| 2. Gleichung aufstellen | y = 5,5 · x |
| 3. Anwenden (30 Steine) | y = 5,5 · 30 = **165 kg** |

**Wertetabelle zur Kontrolle:**

| Steine x | 10 | 20 | 40 | 80 |
|----------|----|----|----|-----|
| Masse y (kg) | 55 | 110 | 220 | 440 |
| **y/x** | 5,5 | 5,5 | 5,5 | 5,5 |

Der Quotient ist konstant ✓ → proportional.

### Antiproportionale Zuordnung – „je mehr, desto weniger"

> ### 💡 Kennzeichen
> Das **Produkt x · y ist konstant**. Diese Konstante heißt **Proportionalitätskonstante c**.
> ```
> x · y = c        →        y = c / x
> ```
> **Graf:** eine **Hyperbel** (gekrümmte Kurve, nähert sich beiden Achsen an).

### So erkennst du sie

Multipliziere bei jedem Wertepaar x mit y. Kommt **immer dasselbe** heraus → antiproportional.

### 📐 Lehrbeispiel 2 – Pumpen

3 Pumpen benötigen 3 h 20 min (= 200 min), um eine Baugrube leerzupumpen.

| Schritt | Rechnung |
|---------|----------|
| 1. Konstante bestimmen | c = 3 · 200 = **600 Pumpen-Minuten** |
| 2. Gleichung | y = 600 / x |
| 3. Anwenden (5 Pumpen) | y = 600 : 5 = **120 min = 2 h** |

**Wertetabelle:**

| Pumpen x | 1 | 2 | 3 | 5 | 6 |
|----------|---|---|---|---|---|
| Zeit y (min) | 600 | 300 | 200 | 120 | 100 |
| **x · y** | 600 | 600 | 600 | 600 | 600 |

Das Produkt ist konstant ✓ → antiproportional.

### 🏗️ Die Entscheidungsfrage

> ### 💡 So entscheidest du in 5 Sekunden
> Frage dich: **„Wenn ich x verdopple – wird y doppelt so groß oder halb so groß?"**
>
> | Antwort | Art | Formel |
> |---------|-----|--------|
> | doppelt so groß | **proportional** | y = k·x |
> | halb so groß | **antiproportional** | y = c/x |

### 🏗️ Typische Fälle im Bau

| Zusammenhang | Art | Warum |
|--------------|-----|-------|
| Fläche → Materialmenge | proportional | doppelte Fläche, doppeltes Material |
| Länge → Gewicht eines Profils | proportional | |
| Menge → Preis | proportional | |
| Anzahl Arbeiter → Bauzeit | **anti**proportional | mehr Leute, weniger Zeit |
| Anzahl Maschinen → Dauer | **anti**proportional | |
| Rohrquerschnitt → Fließgeschwindigkeit | **anti**proportional | bei gleichem Volumenstrom |

> ### ⚠️ Vorsicht bei der Arbeiter-Formel
> „Doppelt so viele Arbeiter = halbe Zeit" gilt **rechnerisch**, aber nicht immer in der Praxis (Platz, Einweisung, Abstimmung). In Prüfungsaufgaben rechnest du trotzdem streng antiproportional – im echten Bauablauf kalkuliert man Zuschläge.

---

## 1.3 Dreisatz

Der **Dreisatz** löst Verhältnisaufgaben, indem er über die **Einheit (1)** geht.

### So gehst du vor – proportional

1. Gegebenes Verhältnis notieren.
2. **Auf 1 herunterrechnen** → **dividieren**.
3. **Auf die gesuchte Menge hochrechnen** → **multiplizieren**.

**Merkregel: erst `:` dann `·`**

### 📐 Lehrbeispiel 1 – Fliesen (aus dem Modul)

Bei Umbauarbeiten wird festgestellt, dass statt der gelieferten 24 m² Fliesen 7 m² mehr benötigt werden. Berechnen Sie die Mehrkosten, wenn 24 m² 840 € kosten.

| Schritt | Rechnung | Ergebnis |
|---------|----------|----------|
| 1. Gegeben | 24 m² kosten 840 € | |
| 2. Auf 1 m² (**dividieren**) | 840 : 24 | **35 €/m²** |
| 3. Auf 7 m² (**multiplizieren**) | 35 · 7 | **245 €** |

**Antwort: Die Mehrkosten betragen 245 €.**

### So gehst du vor – antiproportional

1. Gegebenes Verhältnis notieren.
2. **Auf 1 herunterrechnen** → **multiplizieren** (weniger Einheiten = mehr Zeit).
3. **Auf die gesuchte Menge** → **dividieren**.

**Merkregel: erst `·` dann `:`**

### 📐 Lehrbeispiel 2 – Maschinen (aus dem Modul)

5 Maschinen benötigen 6 Stunden. Wie lange brauchen 3 Maschinen?

| Schritt | Rechnung | Ergebnis |
|---------|----------|----------|
| 1. Gegeben | 5 Maschinen → 6 h | |
| 2. Auf 1 Maschine (**multiplizieren**) | 6 · 5 | **30 h** |
| 3. Auf 3 Maschinen (**dividieren**) | 30 : 3 | **10 h** |

### 📐 Lehrbeispiel 3 – zusammengesetzter Dreisatz

4 Maschinen schaffen in 3 h 84 000 Stück. Wie viele schaffen 3 Maschinen in 8 h?

| Schritt | Ansatz | Rechnung |
|---------|--------|----------|
| Ausgangslage | 4 Maschinen, 3 h → 84 000 | |
| 1 Maschine, 3 h | : 4 | 21 000 |
| 1 Maschine, 1 h | : 3 | 7 000 |
| 3 Maschinen, 1 h | · 3 | 21 000 |
| 3 Maschinen, 8 h | · 8 | **168 000 Stück** |

> **Systematik:** Bei mehreren Einflussgrößen gehst du **Schritt für Schritt** auf 1 herunter und dann wieder hoch. Nie mehrere Schritte gleichzeitig.

### 🏗️ Bau-Beispiel – Estrich

Für 45 m² Estrich (5 cm dick) werden 4,5 t Trockenmörtel benötigt.
**a)** Wie viel für 120 m²? **b)** Wie viel für 120 m² bei 7 cm Dicke?

**a) Proportional (Fläche):**
```
45 m² → 4,5 t
1 m²  → 4,5 : 45 = 0,1 t
120 m² → 0,1 · 120 = 12 t
```

**b) Zusätzlich proportional zur Dicke:**
```
bei 5 cm: 12 t
1 cm:     12 : 5 = 2,4 t
7 cm:     2,4 · 7 = 16,8 t
```

**Antwort: 16,8 t** (in der Praxis: 17 t bestellen).

---

## 1.4 Äquivalenzumformungen

### Aussage und Aussageform

| Begriff | Definition | Beispiel |
|---------|-----------|----------|
| **Aussage** | Ein Satz, der entweder **wahr (w)** oder **falsch (f)** ist | „Köln liegt am Rhein" (w) · „2,5 ist eine ganze Zahl" (f) |
| **Aussageform** | Enthält eine **Variable** – erst durch Einsetzen wird sie zur Aussage | „x ist durch 4 und 3 teilbar" |

### 📐 Lehrbeispiel 1 – aus dem Modul

Aussageform: „x ist durch 4 und 3 teilbar."

| Einsetzen | Ergebnis |
|-----------|----------|
| x = 12 | „12 ist durch 4 und 3 teilbar" → **wahr (w)** |
| x = 15 | „15 ist durch 4 und 3 teilbar" → **falsch (f)** |

Alle Werte, die die Aussageform **wahr** machen, bilden die **Lösungsmenge L**.

### Was ist eine Äquivalenzumformung?

> ### 💡 Definition
> Eine **Äquivalenzumformung** verändert eine Gleichung so, dass die **Lösungsmenge gleich bleibt**.
>
> **Erlaubt ist:**
> - auf **beiden Seiten** dieselbe Zahl addieren oder subtrahieren
> - **beide Seiten** mit derselben Zahl (≠ 0) multiplizieren oder dividieren
>
> **Bild dazu:** Eine Gleichung ist eine **Waage**. Was du links tust, musst du auch rechts tun – sonst kippt sie.

### So gehst du vor – Gleichung lösen

1. **Klammern auflösen**, Terme zusammenfassen.
2. Alle **Glieder mit x** auf **eine** Seite bringen (meist links).
3. Alle **Zahlen** auf die **andere** Seite.
4. Durch den **Faktor vor x** teilen.
5. **Probe** durch Einsetzen.

### 📐 Lehrbeispiel 2 – Grundform

Löse `3x − 5 = 7`

| Schritt | Rechnung | Umformung |
|---------|----------|-----------|
| Ausgangsgleichung | 3x − 5 = 7 | |
| Zahlen nach rechts | 3x = 12 | `| + 5` |
| Durch Faktor teilen | x = 4 | `| : 3` |

**Probe:** 3 · 4 − 5 = 12 − 5 = 7 ✓ → **L = {4}**

### 📐 Lehrbeispiel 3 – x auf beiden Seiten

Löse `5x − 8 = 2x + 7`

| Schritt | Rechnung | Umformung |
|---------|----------|-----------|
| Ausgangsgleichung | 5x − 8 = 2x + 7 | |
| x-Glieder links | 3x − 8 = 7 | `| − 2x` |
| Zahlen rechts | 3x = 15 | `| + 8` |
| Teilen | x = 5 | `| : 3` |

**Probe:** links 5·5−8 = 17, rechts 2·5+7 = 17 ✓ → **L = {5}**

### 📐 Lehrbeispiel 4 – mit Klammern

Löse `4(x − 3) = 2(x + 1) − 6`

| Schritt | Rechnung |
|---------|----------|
| Klammern auflösen | 4x − 12 = 2x + 2 − 6 |
| Rechts zusammenfassen | 4x − 12 = 2x − 4 |
| `− 2x` | 2x − 12 = −4 |
| `+ 12` | 2x = 8 |
| `: 2` | **x = 4** |

**Probe:** links 4(4−3) = 4, rechts 2(4+1)−6 = 10−6 = 4 ✓

### Ungleichungen – die eine Besonderheit

Ungleichungen löst du **genauso** – mit **einer** entscheidenden Ausnahme:

> ### ⚠️ Die wichtigste Regel bei Ungleichungen
> **Multiplizierst oder dividierst du mit einer NEGATIVEN Zahl, dreht sich das Vergleichszeichen um!**
> ```
> −2x < 6      | : (−2)
>   x > −3          ← aus < wird >
> ```

**Warum?** Denk an zwei Zahlen: 2 < 5. Multipliziert man beide mit (−1): −2 und −5. Aber **−2 > −5**! Das Verhältnis kehrt sich um.

### 📐 Lehrbeispiel 5 – Ungleichung

Löse `−3x + 4 < 13`

| Schritt | Rechnung | Umformung |
|---------|----------|-----------|
| Ausgangsungleichung | −3x + 4 < 13 | |
| Zahlen rechts | −3x < 9 | `| − 4` |
| Durch −3 teilen | **x > −3** | `| : (−3)` ← **Zeichen dreht!** |

**Probe mit x = 0:** −3·0 + 4 = 4 < 13 ✓ (und 0 > −3 ✓)

### 🏗️ Formeln umstellen – das Wichtigste für die Praxis

Genau dieselbe Technik nutzt du, um **Formeln nach einer anderen Größe aufzulösen**.

### 🏗️ Bau-Beispiel 1 – Fläche → Länge

Die Formel für die Rechteckfläche lautet `A = a · b`. Stelle nach **b** um.

```
A = a · b        | : a
A / a = b

→  b = A / a
```

**Anwendung:** Eine Fläche von 34,5 m² soll 4,60 m breit sein. Wie lang?
```
b = 34,5 : 4,60 = 7,50 m
```

### 🏗️ Bau-Beispiel 2 – Spannungsformel umstellen

In der Statik gilt für die Druckspannung:
```
σ = F / A
```
(σ = Spannung, F = Kraft, A = Fläche)

**Nach F umstellen:**
```
σ = F / A        | · A
σ · A = F

→  F = σ · A
```

**Nach A umstellen:**
```
σ = F / A        | · A
σ · A = F        | : σ

→  A = F / σ
```

**Anwendung:** Eine Stütze wird mit F = 450 kN belastet. Der Beton darf mit σ = 15 N/mm² belastet werden. Wie groß muss die Querschnittsfläche sein?

```
F = 450 kN = 450 000 N
A = F / σ = 450 000 N : 15 N/mm² = 30 000 mm² = 300 cm² = 0,03 m²
```
Bei quadratischem Querschnitt: a = √30 000 mm² ≈ **173 mm**, also mindestens **18 × 18 cm**.

### 🏗️ Bau-Beispiel 3 – Trapezformel umstellen

Die Trapezfläche: `A = ½ · (a + c) · h`. Stelle nach **h** um.

```
A = ½ · (a + c) · h          | · 2
2A = (a + c) · h             | : (a + c)
2A / (a + c) = h

→  h = 2A / (a + c)
```

**Anwendung:** Ein Trapez hat A = 18,0 m², a = 6,0 m, c = 4,0 m. Wie hoch ist es?
```
h = 2 · 18,0 / (6,0 + 4,0) = 36,0 / 10,0 = 3,60 m
```

> ### 💡 Merkregel zum Umstellen
> Arbeite die Rechenoperationen **in umgekehrter Reihenfolge** ab – wie beim Auspacken eines Pakets:
> Was **zuletzt** mit der gesuchten Größe gemacht wurde, machst du **zuerst** rückgängig.
> - steht sie in einem **Produkt** → **dividieren**
> - steht sie in einem **Bruch unten** → **erst hochmultiplizieren**
> - steht sie in einer **Summe** → **subtrahieren**

> ### ⚠️ Typische Fehler
> **1. Nur auf einer Seite rechnen.** Was links passiert, muss auch rechts passieren.
> **2. Bei Ungleichungen das Zeichen vergessen** – nur bei negativer Multiplikation/Division dreht es sich.
> **3. Beim Umstellen die Klammer vergessen.** Bei `h = 2A / (a + c)` gehört die Klammer zwingend hin – sonst wird nur durch a geteilt.
> **4. Probe weglassen.** Einsetzen dauert 15 Sekunden und findet jeden Vorzeichenfehler.

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Art der Zuordnung erkennen
Proportional oder antiproportional?
**1.1** x: 2, 4, 6 → y: 5, 10, 15 · **1.2** x: 2, 4, 8 → y: 24, 12, 6 · **1.3** Anzahl Bagger → Aushubdauer · **1.4** Wandfläche → Farbmenge

<details><summary>Lösung anzeigen</summary>

**1.1** y/x = 2,5 konstant → **proportional**, k = 2,5, y = 2,5x
**1.2** x·y = 48 konstant → **antiproportional**, c = 48, y = 48/x
**1.3** mehr Bagger → weniger Zeit → **antiproportional**
**1.4** mehr Fläche → mehr Farbe → **proportional**
</details>

### Aufgabe 2 · Proportionalitätsfaktor
**2.1** 80 Steine wiegen 440 kg. Wie viel wiegen 35 Steine?
**2.2** 12 m Stahlprofil wiegen 96 kg. Wie viel wiegen 7,5 m?

<details><summary>Lösung anzeigen</summary>

**2.1** k = 440:80 = 5,5 kg/Stück → 35 · 5,5 = **192,5 kg**
**2.2** k = 96:12 = 8 kg/m → 7,5 · 8 = **60 kg**
</details>

### Aufgabe 3 · Dreisatz proportional
**3.1** 6 Rohre kosten 45 €. Was kosten 10?
**3.2** 24 m² Fliesen kosten 840 €. Was kosten 7 m²?

<details><summary>Lösung anzeigen</summary>

**3.1** 1 Rohr = 45:6 = 7,50 € → 10 · 7,50 = **75 €**
**3.2** 1 m² = 840:24 = 35 € → 7 · 35 = **245 €**
</details>

### Aufgabe 4 · Dreisatz antiproportional
**4.1** 4 Bagger brauchen 9 Tage. Wie lange brauchen 6?
**4.2** 5 Maschinen brauchen 6 h. Wie lange brauchen 3?

<details><summary>Lösung anzeigen</summary>

**4.1** 1 Bagger = 9 · 4 = 36 Tage → 36 : 6 = **6 Tage**
**4.2** 1 Maschine = 6 · 5 = 30 h → 30 : 3 = **10 h**
</details>

### Aufgabe 5 · Zusammengesetzter Dreisatz
4 Maschinen schaffen in 3 h 84 000 Stück. Wie viele schaffen 3 Maschinen in 8 h?

<details><summary>Lösung anzeigen</summary>

```
4 Masch., 3 h → 84 000
1 Masch., 3 h → 84 000 : 4 = 21 000
1 Masch., 1 h → 21 000 : 3 = 7 000
3 Masch., 1 h → 7 000 · 3 = 21 000
3 Masch., 8 h → 21 000 · 8 = 168 000 Stück
```
</details>

### Aufgabe 6 · Gleichungen lösen
**6.1** 3x − 5 = 7 · **6.2** 5x − 8 = 2x + 7 · **6.3** 4(x − 3) = 2(x + 1) − 6

<details><summary>Lösung anzeigen</summary>

**6.1** +5 → 3x = 12 → :3 → **x = 4**
**6.2** −2x → 3x−8 = 7 → +8 → 3x = 15 → **x = 5**
**6.3** 4x−12 = 2x−4 → −2x → 2x−12 = −4 → +12 → 2x = 8 → **x = 4**
</details>

### Aufgabe 7 · Ungleichungen
**7.1** −3x + 4 < 13 · **7.2** 2x − 7 ≥ 5 · **7.3** −x + 2 > 6

<details><summary>Lösung anzeigen</summary>

**7.1** −4 → −3x < 9 → :(−3) **Zeichen dreht** → **x > −3**
**7.2** +7 → 2x ≥ 12 → :2 → **x ≥ 6** *(kein Drehen, da positiv geteilt)*
**7.3** −2 → −x > 4 → :(−1) **Zeichen dreht** → **x < −4**
</details>

### 🏗️ Aufgabe 8 · Estrich
Für 45 m² Estrich (5 cm) braucht man 4,5 t Trockenmörtel.
**8.1** Wie viel für 120 m² bei 5 cm? **8.2** Wie viel für 120 m² bei 7 cm?

<details><summary>Lösung anzeigen</summary>

**8.1** 1 m² = 4,5:45 = 0,1 t → 120 · 0,1 = **12 t**
**8.2** pro cm: 12:5 = 2,4 t → 7 · 2,4 = **16,8 t** (bestellen: 17 t)
</details>

### 🏗️ Aufgabe 9 · Bauzeit
8 Maurer bräuchten für eine Wand 15 Tage. Der Termin verlangt Fertigstellung in 10 Tagen.
**9.1** Wie viele Maurer werden gebraucht? **9.2** Wie viele zusätzlich?

<details><summary>Lösung anzeigen</summary>

**9.1** antiproportional:
```
1 Maurer → 8 · 15 = 120 Tage
für 10 Tage → 120 : 10 = 12 Maurer
```
**9.2** 12 − 8 = **4 zusätzliche Maurer**
</details>

### 🏗️ Aufgabe 10 · Formeln umstellen
Stelle um:
**10.1** A = a · b nach a · **10.2** σ = F/A nach A · **10.3** V = G · h nach h · **10.4** A = ½·(a+c)·h nach c

<details><summary>Lösung anzeigen</summary>

**10.1** `| : b` → **a = A / b**
**10.2** `| · A` dann `| : σ` → **A = F / σ**
**10.3** `| : G` → **h = V / G**
**10.4**
```
A = ½(a+c)h      | · 2
2A = (a+c)h      | : h
2A/h = a + c     | − a
→  c = 2A/h − a
```
</details>

### 🏗️ Aufgabe 11 · Stützenquerschnitt
Eine Betonstütze wird mit **F = 640 kN** belastet. Zulässige Spannung **σ = 12 N/mm²**.
**11.1** Welche Querschnittsfläche ist nötig? **11.2** Welche Kantenlänge bei quadratischem Querschnitt?

<details><summary>Lösung anzeigen</summary>

**11.1**
```
F = 640 kN = 640 000 N
A = F / σ = 640 000 : 12 = 53 333,3 mm² ≈ 533,3 cm²
```

**11.2**
```
a = √53 333,3 mm² = 230,9 mm  ≈  231 mm
```
Gewählt: **24 × 24 cm** (aufrunden auf gängiges Maß)
</details>

### 🏗️ Aufgabe 12 · Trapezfläche
Eine trapezförmige Böschungsfläche hat **A = 24,0 m²**, die parallelen Seiten **a = 8,0 m** und **c = 4,0 m**.
Wie hoch ist das Trapez?

<details><summary>Lösung anzeigen</summary>

```
A = ½(a+c)·h        | · 2
48,0 = (8,0+4,0)·h
48,0 = 12,0 · h     | : 12,0
h = 4,00 m
```
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich erkenne an der Frage „doppelt oder halb?", ob proportional oder antiproportional.
- [ ] Ich prüfe rechnerisch: **Quotient konstant** = proportional, **Produkt konstant** = antiproportional.
- [ ] Ich kann k und c bestimmen und die Gleichung aufstellen.
- [ ] Beim Dreisatz weiß ich: proportional **: dann ·**, antiproportional **· dann :**.
- [ ] Ich kann einen **zusammengesetzten** Dreisatz Schritt für Schritt rechnen.
- [ ] Ich löse lineare Gleichungen durch Äquivalenzumformung und mache die **Probe**.
- [ ] Bei Ungleichungen drehe ich das Zeichen um, wenn ich mit einer **negativen** Zahl multipliziere/teile.
- [ ] Ich kann **jede Formel** nach jeder Größe umstellen (auch mit Klammern und Brüchen).

**Nächstes Kapitel:** LM2 Kapitel 2 – Funktionen, Gerade, Gleichungssysteme, Umkehrfunktion
