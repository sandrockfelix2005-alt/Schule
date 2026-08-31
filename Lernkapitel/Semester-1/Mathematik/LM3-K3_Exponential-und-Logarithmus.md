# Mathematik I · Lernmodul 3 · Kapitel 3
# Exponential- und Logarithmusfunktionen

> **Lernkapitel zum Selbststudium.** Quelle: DAA Mathematik I, Lernmodul 3, Lernbereiche 4 und 5 · **Zeitaufwand: ca. 5–6 Stunden**

**Was du am Ende können musst**
- Die **Exponentialfunktion** f(x) = aˣ beschreiben und von der Potenzfunktion unterscheiden.
- **Wachstums-** und **Zerfallsvorgänge** als Funktion modellieren.
- Den **Logarithmus** definieren und zwischen Potenz- und Logarithmusform umformen.
- Die **Logarithmensysteme** lg, ln, ld kennen und den **Basiswechsel** anwenden.
- Die **Logarithmengesetze** nutzen.
- **Exponentialgleichungen** durch Logarithmieren lösen.

**Inhalt:** [3.1 Exponentialfunktionen](#31-exponentialfunktionen) · [3.2 Logarithmus](#32-der-logarithmus) · [3.3 Logarithmensysteme](#33-logarithmensysteme-und-basiswechsel) · [3.4 Logarithmengesetze](#34-die-logarithmengesetze) · [3.5 Exponentialgleichungen](#35-exponentialgleichungen-lösen) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Die Komplexaufgabe dieses Moduls

> ### 🎯 Bevölkerungswachstum
> Aus regelmäßigen Volkszählungen alle 5 Jahre liegen folgende Einwohnerzahlen eines Landes vor:
>
> | Jahr | Bevölkerung |
> |------|------------:|
> | 1980 | 5 650 000 |
> | 1985 | 6 268 696 |
> | 1990 | 6 955 140 |
> | 1995 | 7 716 754 |
> | 2000 | 8 561 766 |
>
> **Ziel:** die weitere Entwicklung berechnen, um heute Entscheidungen über soziale und wirtschaftliche Planungen treffen zu können.
>
> Am Ende dieses Kapitels kannst du diese Aufgabe lösen.

---

## Worum geht es in diesem Kapitel?

Bisher: **linear** (gleichbleibende Zunahme) und **quadratisch/kubisch** (Potenzfunktionen).

Jetzt kommt der dritte große Typ: Größen, die sich in **gleichen Zeitabschnitten um denselben Faktor** ändern – **prozentuales Wachstum**.

| Im Bau und in der Bauwirtschaft | Vorgang |
|--------------------------------|---------|
| **Baukostenindex** | steigt jährlich um x % |
| **Baufinanzierung** (Zinseszins) | Restschuld/Guthaben wächst exponentiell |
| **Abschreibung** von Baumaschinen | degressiv = exponentieller Wertverlust |
| **Abkühlung** von Beton/Estrich | exponentieller Zerfall |
| **Schalldämmung** | Pegel in dB = **logarithmisch** |
| **Setzung** von Böden über die Zeit | näherungsweise logarithmisch |

---

## 3.1 Exponentialfunktionen

### Das Einstiegsbeispiel aus dem Modul

Eine Bakterienkultur wird beobachtet:

| Zeit t (h) | 0 | 1 | 2 | 3 | 4 | 5 |
|------------|---|---|---|---|---|---|
| Masse m (g) | 1 | 3 | 9 | 27 | 81 | 243 |

**Was passiert?** Die Masse **verdreifacht** sich stündlich. Nicht „plus 2 g", sondern **mal 3**.

```
Zuordnung:  x → 3ˣ
Funktion:   f(x) = 3ˣ
```

> ### 💡 Definition
> Eine **Exponentialfunktion** hat die Form
> ```
> f(x) = aˣ        (a > 0, a ≠ 1)
> ```
> Die **Variable steht im Exponenten**, die Basis a ist fest.

### 📐 Lehrbeispiel 1 – Wertetabelle (aus dem Modul)

Zeichne f(x) = 2ˣ und g(x) = 3ˣ, Wertetabelle von −3 bis 3.

| x | −3 | −2,5 | −2 | −1,5 | −1 | −0,5 | 0 | 0,5 | 1 | 2 | 3 |
|---|----|------|----|------|----|------|---|-----|---|---|---|
| **2ˣ** | 0,13 | 0,18 | 0,25 | 0,35 | 0,5 | 0,71 | **1** | 1,41 | 2 | 4 | 8 |
| **3ˣ** | 0,04 | 0,06 | 0,11 | 0,19 | 0,33 | 0,58 | **1** | 1,73 | 3 | 9 | 27 |

```
   y
   9 ┤                        ╱ 3ˣ
   8 ┤                      ╱╱ 2ˣ
   6 ┤                    ╱ ╱
   4 ┤                  ╱ ╱
   2 ┤            ____╱╱
   1 ┤────────●═══           ← alle gehen durch (0|1)
   0 ┼────────┼────────┼────► x
     -2       0        2
```

> ### 💡 Eigenschaften jeder Exponentialfunktion
> - Alle Grafen gehen durch **(0 | 1)** – weil **a⁰ = 1** für jedes a.
> - Die Werte sind **immer positiv** – nie null, nie negativ.
> - Die **x-Achse ist Asymptote**: Der Graf nähert sich ihr an, erreicht sie aber nie.
> - **a > 1** → **Wachstum** (steigend), je größer a, desto steiler.
> - **0 < a < 1** → **Zerfall** (fallend).

### Wachstum und Zerfall

| Basis a | Verhalten | Beispiel |
|---------|-----------|----------|
| a = 2 | **Verdopplung** je Schritt | Bakterien |
| a = 1,03 | **+3 %** je Schritt | Baukostenindex |
| a = 1 | konstant (keine Exponentialfunktion) | |
| a = 0,9 | **−10 %** je Schritt | Wertverlust |
| a = 0,5 | **Halbierung** je Schritt | radioaktiver Zerfall |

> ### 💡 Die Wachstumsformel
> ```
> N(t) = N₀ · aᵗ
> ```
> | Größe | Bedeutung |
> |-------|-----------|
> | **N₀** | Anfangswert (bei t = 0) |
> | **a** | Wachstumsfaktor pro Zeitschritt |
> | **t** | Anzahl der Zeitschritte |
>
> **Bei Prozentangaben:**
> - Wachstum um p %: **a = 1 + p/100** (z. B. +3 % → a = 1,03)
> - Abnahme um p %: **a = 1 − p/100** (z. B. −8 % → a = 0,92)

### 🏗️ Bau-Beispiel 1 – Baukostenindex

Die Baukosten steigen jährlich um **3,5 %**. Ein Bauvorhaben kostet heute **480 000 €**.

**Funktionsgleichung:**
```
K(t) = 480 000 · 1,035ᵗ
```

**Was kostet es in 5 Jahren?**
```
K(5) = 480 000 · 1,035⁵
     = 480 000 · 1,18769
     = 570 091 €
```

**In 10 Jahren?**
```
K(10) = 480 000 · 1,035¹⁰ = 480 000 · 1,41060 = 677 088 €
```

> ### ⚠️ Der klassische Denkfehler
> Viele rechnen: „3,5 % · 10 Jahre = 35 %, also 480 000 · 1,35 = 648 000 €."
>
> **Das ist falsch** – das wäre **lineares** Wachstum. Tatsächlich sind es **677 088 €**, weil jedes Jahr auch die vorherige Steigerung mitverzinst wird (**Zinseszinseffekt**). Die Differenz von **29 000 €** ist kein Rundungsfehler, sondern der Unterschied zwischen linear und exponentiell.

### 🏗️ Bau-Beispiel 2 – Maschinenabschreibung

Ein Bagger kostet **185 000 €** und verliert jährlich **18 %** an Wert (degressive Abschreibung).

```
a = 1 − 0,18 = 0,82
W(t) = 185 000 · 0,82ᵗ
```

| Jahr t | Restwert |
|--------|---------:|
| 0 | 185 000 € |
| 1 | 151 700 € |
| 2 | 124 394 € |
| 3 | 102 003 € |
| 5 | 68 587 € |
| 8 | 37 819 € |

> **Typisch für den Zerfall:** Der Wertverlust ist am Anfang **absolut** am größten (33 300 € im ersten Jahr), später immer kleiner (obwohl es prozentual immer 18 % bleiben).

---

<div class="viz" data-viz="wachstum"></div>

## 3.2 Der Logarithmus

### Die Fragestellung

Bei f(x) = 2ˣ liest du aus dem Grafen ab:

| x | −1 | 0 | 1 | 1,6 | 2 | 2,3 | 2,6 | 3 |
|---|----|---|---|-----|---|-----|-----|---|
| y | 0,5 | 1 | 2 | 3 | 4 | 5 | 6 | 8 |

**Frage:** Wie berechnet man diese x-Werte, statt sie abzulesen?

Am Beispiel **y = 8**: Gesucht ist die Zahl, mit der die Basis **2** potenziert werden muss, um **8** zu erhalten.

```
2ˣ = 8
x = log₂ 8
x = 3            (denn 2³ = 8)
```

> ### 💡 Definition (aus dem Modul)
> Der **Logarithmus von b zur Basis a** (`log_a b`) ist der **Exponent**, mit dem die Basis a potenziert werden muss, um b zu erhalten.
> ```
> log_a b = y     ⟺     aʸ = b
> ```
> Im Term log_a b heißt **b** der **Numerus**.

### 📐 Lehrbeispiele aus dem Modul

| Logarithmus | Wert | Begründung |
|-------------|------|------------|
| log₂ 8 | 3 | denn 2³ = 8 |
| log₃ 243 | 5 | denn 3⁵ = 243 |
| log₁₀ 10 000 | 4 | denn 10⁴ = 10 000 |
| log_e 20 | ≈ 3 | denn e³ ≈ 20 |

### Umformen zwischen den Schreibweisen

> ### 💡 Die Merkhilfe
> **Der Logarithmus ist der gesuchte Exponent.**
> Frage dich immer: „**Hoch was** ergibt den Numerus?"

### 📐 Lehrbeispiel 2 – Potenz → Logarithmus

| Potenzform | Logarithmusform |
|------------|-----------------|
| 11² = 121 | log₁₁ 121 = 2 |
| 0,5ˣ = 0,25 | log₀,₅ 0,25 = x |
| aʸ = b | log_a b = y |

### 📐 Lehrbeispiel 3 – Logarithmus → Potenz

| Logarithmusform | Potenzform |
|-----------------|------------|
| 5 = log₂ 32 | 2⁵ = 32 |
| 3 = log₁₀ 1000 | 10³ = 1000 |
| x = log_a 8 | aˣ = 8 |

---

## 3.3 Logarithmensysteme und Basiswechsel

### Die drei gebräuchlichen Systeme

> ### 💡 Merke (aus dem Modul)
> | Basis | Kurzschreibweise | Name |
> |:-----:|:----------------:|------|
> | **2** | **ld** oder **lb** | Logarithmus dualis / binärer Logarithmus |
> | **e** | **ln** | natürlicher Logarithmus (Logarithmus naturalis) |
> | **10** | **lg** | Zehnerlogarithmus / dekadischer (Briggs'scher) Logarithmus |

**Die Zahl e ≈ 2,71828** ist die Eulersche Zahl – sie taucht überall dort auf, wo etwas **stetig** wächst.

### Der Basiswechsel

Dein Taschenrechner hat nur **lg** und **ln**. Wie berechnest du log₅ 200?

> ### 💡 Basiswechselformel
> ```
> log_a x = lg x / lg a
> ```
> (funktioniert genauso mit ln statt lg)

**Beweis (aus dem Modul):**
```
y = log_a x
aʸ = x                 | beide Seiten logarithmieren
lg(aʸ) = lg x          | Potenzregel anwenden
y · lg a = lg x        | : lg a
y = lg x / lg a
```

### 📐 Lehrbeispiel 1 – Basiswechsel anwenden

```
log₅ 200 = lg 200 / lg 5 = 2,3010 / 0,6990 = 3,2920
```

**Probe:** 5^3,2920 ≈ 200 ✓

### 📐 Lehrbeispiel 2 – weitere Werte

| Aufgabe | Rechnung | Ergebnis |
|---------|----------|----------|
| log₂ 100 | lg100 / lg2 = 2 / 0,30103 | 6,6439 |
| log₃ 50 | lg50 / lg3 = 1,69897 / 0,47712 | 3,5609 |
| log₇ 343 | lg343 / lg7 = 2,53529 / 0,84510 | 3,0000 |

---

## 3.4 Die Logarithmengesetze

Die Logarithmengesetze sind die **Umkehrung der Potenzgesetze** – deshalb hast du Kapitel 2 vorher gemacht.

> ### 💡 Die drei Logarithmengesetze
> | Gesetz | Formel | Merkhilfe |
> |--------|--------|-----------|
> | **Produkt** | lg(u · v) = lg u + lg v | mal wird **plus** |
> | **Quotient** | lg(u / v) = lg u − lg v | geteilt wird **minus** |
> | **Potenz** | lg(uⁿ) = n · lg u | Exponent wird **Faktor** |

### Warum das so ist

Aus dem Potenzgesetz `10^m · 10^n = 10^(m+n)` folgt direkt: Beim Multiplizieren von Zahlen **addieren** sich ihre Logarithmen.

> **Historisch:** Genau deshalb wurden Logarithmen erfunden – vor den Taschenrechnern konnte man mit ihnen **Multiplikationen in Additionen** verwandeln (Rechenschieber!).

### 📐 Lehrbeispiel 1 – aus dem Modul

Forme mithilfe der Logarithmengesetze um:

**a) lg(a² · b · c⁴)**
```
= lg(a²) + lg b + lg(c⁴)        | Produktregel
= 2 lg a + lg b + 4 lg c        | Potenzregel
```

**b) lg(1 / (x² · y²))**
```
= lg 1 − lg(x² · y²)            | Quotientenregel
= lg 1 − (2 lg x + 2 lg y)
= lg 1 − 2 lg x − 2 lg y        | Minusklammer!
= 0 − 2 lg x − 2 lg y           | denn lg 1 = 0
= −2 lg x − 2 lg y
```

> ### 💡 Nützliche Sonderwerte
> ```
> lg 1 = 0        (denn 10⁰ = 1)
> lg 10 = 1       (denn 10¹ = 10)
> lg 100 = 2
> ln 1 = 0
> ln e = 1
> ```

### 🏗️ Bau-Beispiel – Schallpegel in Dezibel

Der **Schalldruckpegel** wird logarithmisch angegeben – das ist der bekannteste Praxisfall in der Bauphysik:

```
L = 10 · lg(I / I₀)        [dB]
```

**Warum logarithmisch?** Weil das menschliche Ohr einen gewaltigen Bereich abdeckt (Faktor 1 : 1 000 000 000 000). Mit dem Logarithmus wird daraus eine handliche Skala von 0 bis 120 dB.

**Die entscheidende Konsequenz:**

| Änderung der Schallenergie | Pegeländerung |
|----------------------------|---------------|
| **Verdopplung** (Faktor 2) | **+3 dB** |
| Faktor 10 | +10 dB |
| Faktor 100 | +20 dB |

**Rechnung für die Verdopplung:**
```
ΔL = 10 · lg 2 = 10 · 0,30103 = 3,01 dB ≈ 3 dB
```

> ### 🏗️ Was das im Bau bedeutet
> - **Zwei gleich laute Maschinen** statt einer → nur **+3 dB**, nicht das Doppelte.
> - Eine Pegelsenkung um **10 dB** wird als „**halb so laut**" empfunden – erfordert aber, die Schallenergie auf **1/10** zu reduzieren.
> - Deshalb sind Schalldämmwerte (R'w) in dB angegeben: **+10 dB Dämmung** ist ein gewaltiger Unterschied, nicht ein kleiner.
>
> **Beispiel:** Eine Wand mit R'w = 53 dB statt 43 dB lässt nur **1/10** der Schallenergie durch.

---

## 3.5 Exponentialgleichungen lösen

### Was ist eine Exponentialgleichung?

> ### 💡 Definition (aus dem Modul)
> Eine Gleichung heißt **algebraisch**, wenn sie sich in die Polynomform
> ```
> aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀ = 0
> ```
> bringen lässt. Steht die Lösungsvariable im **Exponenten**, gelingt das **nicht** – solche Gleichungen heißen **transzendente Gleichungen**.

### So gehst du vor

1. Die Potenz **isolieren** (alles andere auf die andere Seite).
2. **Beide Seiten logarithmieren** (lg oder ln – egal welches).
3. **Potenzregel** anwenden: Der Exponent wird zum Faktor.
4. Nach **x auflösen**.
5. **Probe** durch Einsetzen.

### 📐 Lehrbeispiel 1 – aus dem Modul

Bestimme die Lösungsmenge von `6ˣ = 330`. Runde auf vier Nachkommastellen.

| Schritt | Rechnung | Erklärung |
|---------|----------|-----------|
| 1 | 6ˣ = 330 | Potenz steht schon allein |
| 2 | lg(6ˣ) = lg 330 | beide Seiten logarithmieren |
| 3 | x · lg 6 = lg 330 | **Potenzregel** |
| 4 | x = lg 330 / lg 6 | `: lg 6` |
| 5 | x = 2,51851 / 0,77815 = **3,2365** | |

**Probe:** 6^3,2365 = 329,98 ≈ 330 ✓ → **L = {3,2365}**

### 📐 Lehrbeispiel 2 – aus dem Modul (mit Vorfaktor)

Bestimme die Lösungsmenge von `2 · 1,5ˣ = 100`.

| Schritt | Rechnung |
|---------|----------|
| 1 | 1,5ˣ = 50 `| : 2` — **erst isolieren!** |
| 2 | lg(1,5ˣ) = lg 50 |
| 3 | x · lg 1,5 = lg 50 |
| 4 | x = lg50 / lg1,5 = 1,69897 / 0,17609 |
| 5 | x = **9,6482** |

**Probe:** 2 · 1,5^9,6482 = 99,998 ≈ 100 ✓ → **L = {9,6482}**

> ### ⚠️ Der häufigste Fehler
> **Den Vorfaktor mitlogarithmieren.** Bei `2 · 1,5ˣ = 100` **zuerst durch 2 teilen**. Wer direkt logarithmiert, muss die Produktregel anwenden und macht es sich unnötig schwer.

### 🏗️ Bau-Beispiel 1 – Verdopplungszeit

Die Baukosten steigen um **3,5 % pro Jahr**. Nach wie vielen Jahren haben sie sich **verdoppelt**?

| Schritt | Rechnung |
|---------|----------|
| Ansatz | K₀ · 1,035ᵗ = 2 · K₀ `| : K₀` |
| | 1,035ᵗ = 2 |
| logarithmieren | t · lg 1,035 = lg 2 |
| auflösen | t = lg2 / lg1,035 = 0,30103 / 0,014940 |
| | t = **20,15 Jahre** |

**Antwort:** Nach gut **20 Jahren** haben sich die Baukosten verdoppelt.

> ### 💡 Die 70er-Regel (Faustformel für die Baustelle)
> ```
> Verdopplungszeit ≈ 70 / Prozentsatz
> ```
> Probe: 70 / 3,5 = **20 Jahre** – fast exakt der berechnete Wert (20,15). Diese Faustformel funktioniert für alle Prozentsätze bis ca. 15 % und ist im Kopf zu rechnen.

### 🏗️ Bau-Beispiel 2 – Restwert einer Maschine

Ein Bagger (185 000 €) verliert jährlich 18 % an Wert. Nach wie vielen Jahren ist er nur noch **50 000 €** wert?

| Schritt | Rechnung |
|---------|----------|
| Ansatz | 185 000 · 0,82ᵗ = 50 000 `| : 185 000` |
| | 0,82ᵗ = 0,27027 |
| logarithmieren | t · lg 0,82 = lg 0,27027 |
| auflösen | t = (−0,56820) / (−0,08619) |
| | t = **6,59 Jahre** |

**Antwort:** Nach etwa **6,6 Jahren** (also im 7. Jahr).

> **Beachte:** Beide Logarithmen sind **negativ** (weil beide Werte < 1). Beim Teilen heben sich die Vorzeichen auf → positives Ergebnis. Wer nur einen davon falsch abliest, bekommt ein negatives „Jahr".

---

## 🎯 Die Komplexaufgabe lösen: Bevölkerungswachstum

Jetzt hast du alles zusammen. Zurück zur Aufgabe vom Anfang:

| Jahr | Bevölkerung |
|------|------------:|
| 1980 | 5 650 000 |
| 1985 | 6 268 696 |
| 1990 | 6 955 140 |
| 1995 | 7 716 754 |
| 2000 | 8 561 766 |

### Schritt 1: Ist es exponentielles Wachstum?

Prüfe die **Quotienten** aufeinanderfolgender Werte:

```
6 268 696 : 5 650 000 = 1,10951
6 955 140 : 6 268 696 = 1,10951
7 716 754 : 6 955 140 = 1,10951
8 561 766 : 7 716 754 = 1,10951
```

**Der Quotient ist konstant** → **exponentielles Wachstum** ✓
*(Bei linearem Wachstum wäre die Differenz konstant, hier ist es der Quotient.)*

### Schritt 2: Funktionsgleichung aufstellen

Der Wachstumsfaktor **pro 5 Jahre** ist a = 1,10951.

```
N(t) = 5 650 000 · 1,10951ᵗ        (t in Fünfjahresschritten ab 1980)
```

### Schritt 3: Jährliche Wachstumsrate berechnen

```
Jahresfaktor:  a_Jahr = 1,10951^(1/5) = 1,02100
```
→ Die Bevölkerung wächst um **2,1 % pro Jahr**.

### Schritt 4: Prognose für 2020

2020 ist 40 Jahre nach 1980 = **8 Fünfjahresschritte**:

```
N(8) = 5 650 000 · 1,10951⁸
     = 5 650 000 · 2,29648
     = 12 975 000 Einwohner
```

### Schritt 5: Wann sind 15 Millionen erreicht?

| Schritt | Rechnung |
|---------|----------|
| Ansatz | 5 650 000 · 1,10951ᵗ = 15 000 000 |
| `: 5 650 000` | 1,10951ᵗ = 2,65487 |
| logarithmieren | t · lg 1,10951 = lg 2,65487 |
| auflösen | t = 0,42410 / 0,045147 = 9,394 |

t = 9,394 Fünfjahresschritte = **47 Jahre** nach 1980 → etwa im Jahr **2027**.

> **Damit ist die Komplexaufgabe gelöst** – genau dafür brauchte es Exponentialfunktion und Logarithmus.

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Funktionstyp erkennen
Potenzfunktion oder Exponentialfunktion?
**1.1** f(x) = x⁵ · **1.2** f(x) = 5ˣ · **1.3** f(x) = 2ˣ · **1.4** f(x) = x²

<details><summary>Lösung anzeigen</summary>

**1.1** Variable in der Basis → **Potenzfunktion**
**1.2** Variable im Exponenten → **Exponentialfunktion**
**1.3** **Exponentialfunktion**
**1.4** **Potenzfunktion**
</details>

### Aufgabe 2 · Wachstum oder Zerfall?
**2.1** f(x) = 1,08ˣ · **2.2** f(x) = 0,75ˣ · **2.3** f(x) = 3ˣ · **2.4** f(x) = 0,5ˣ

<details><summary>Lösung anzeigen</summary>

**2.1** a > 1 → **Wachstum** (+8 % je Schritt)
**2.2** a < 1 → **Zerfall** (−25 % je Schritt)
**2.3** **Wachstum** (Verdreifachung)
**2.4** **Zerfall** (Halbierung)
</details>

### Aufgabe 3 · Wachstumsfaktor bestimmen
Gib den Faktor a an:
**3.1** +5 % pro Jahr · **3.2** −12 % pro Jahr · **3.3** Verdopplung · **3.4** −3,5 % pro Jahr

<details><summary>Lösung anzeigen</summary>

**3.1** a = 1,05 · **3.2** a = 0,88 · **3.3** a = 2 · **3.4** a = 0,965
</details>

### Aufgabe 4 · Logarithmen bestimmen (ohne Rechner)
**4.1** log₂ 16 · **4.2** log₃ 81 · **4.3** log₁₀ 100 000 · **4.4** log₅ 125 · **4.5** log₇ 1

<details><summary>Lösung anzeigen</summary>

**4.1** 2⁴ = 16 → **4**
**4.2** 3⁴ = 81 → **4**
**4.3** 10⁵ = 100 000 → **5**
**4.4** 5³ = 125 → **3**
**4.5** 7⁰ = 1 → **0**
</details>

### Aufgabe 5 · Umformen
Potenz- in Logarithmusform und umgekehrt:
**5.1** 4³ = 64 · **5.2** aʸ = b · **5.3** 3 = log₂ 8 · **5.4** x = log_a 12

<details><summary>Lösung anzeigen</summary>

**5.1** log₄ 64 = 3
**5.2** log_a b = y
**5.3** 2³ = 8
**5.4** aˣ = 12
</details>

### Aufgabe 6 · Basiswechsel
**6.1** log₅ 200 · **6.2** log₂ 100 · **6.3** log₃ 50

<details><summary>Lösung anzeigen</summary>

**6.1** lg200/lg5 = 2,3010/0,6990 = **3,2920**
**6.2** lg100/lg2 = 2/0,30103 = **6,6439**
**6.3** lg50/lg3 = 1,69897/0,47712 = **3,5609**
</details>

### Aufgabe 7 · Logarithmengesetze
Forme um:
**7.1** lg(a² · b · c⁴) · **7.2** lg(x/y) · **7.3** lg(x³y²) · **7.4** 2 lg a + 3 lg b (zusammenfassen)

<details><summary>Lösung anzeigen</summary>

**7.1** **2 lg a + lg b + 4 lg c**
**7.2** **lg x − lg y**
**7.3** **3 lg x + 2 lg y**
**7.4** lg(a²) + lg(b³) = **lg(a²b³)**
</details>

### Aufgabe 8 · Exponentialgleichungen
**8.1** 6ˣ = 330 · **8.2** 2 · 1,5ˣ = 100 · **8.3** 7ˣ = 500 · **8.4** 3 · 2ˣ = 96

<details><summary>Lösung anzeigen</summary>

**8.1** x = lg330/lg6 = **3,2365**
**8.2** erst `:2` → 1,5ˣ = 50 → x = lg50/lg1,5 = **9,6482**
**8.3** x = lg500/lg7 = 2,69897/0,84510 = **3,1937**
**8.4** erst `:3` → 2ˣ = 32 → x = **5** (denn 2⁵ = 32)
</details>

### 🏗️ Aufgabe 9 · Baukostenindex
Baukosten steigen jährlich um **4 %**. Ein Vorhaben kostet heute **620 000 €**.
**9.1** Kosten in 6 Jahren? **9.2** Nach wie vielen Jahren über 1 Mio €?

<details><summary>Lösung anzeigen</summary>

**9.1**
```
K(6) = 620 000 · 1,04⁶ = 620 000 · 1,26532 = 784 498 €
```

**9.2**
```
620 000 · 1,04ᵗ = 1 000 000
1,04ᵗ = 1,61290
t = lg1,6129 / lg1,04 = 0,20761 / 0,017033 = 12,19 Jahre
```
Nach etwa **12,2 Jahren** (im 13. Jahr).
</details>

### 🏗️ Aufgabe 10 · Abschreibung
Eine Maschine kostet **95 000 €**, Wertverlust **15 % jährlich**.
**10.1** Restwert nach 4 Jahren? **10.2** Wann ist sie unter 30 000 €?

<details><summary>Lösung anzeigen</summary>

**10.1**
```
a = 0,85
W(4) = 95 000 · 0,85⁴ = 95 000 · 0,52200 = 49 590 €
```

**10.2**
```
95 000 · 0,85ᵗ = 30 000
0,85ᵗ = 0,31579
t = lg0,31579 / lg0,85 = (−0,50069)/(−0,070581) = 7,09 Jahre
```
Nach etwa **7,1 Jahren**.
</details>

### 🏗️ Aufgabe 11 · Verdopplungszeit
**11.1** Berechne die Verdopplungszeit bei 2,5 % jährlicher Steigerung. **11.2** Prüfe mit der 70er-Regel.

<details><summary>Lösung anzeigen</summary>

**11.1**
```
1,025ᵗ = 2
t = lg2 / lg1,025 = 0,30103 / 0,010724 = 28,07 Jahre
```

**11.2** 70 / 2,5 = **28 Jahre** – die Faustformel stimmt sehr gut.
</details>

### 🏗️ Aufgabe 12 · Schallpegel
**12.1** Um wie viel dB steigt der Pegel, wenn die Schallenergie verdoppelt wird? **12.2** Und bei Verzehnfachung? **12.3** Was bedeutet eine Verbesserung der Schalldämmung um 10 dB?

<details><summary>Lösung anzeigen</summary>

**12.1** ΔL = 10 · lg 2 = **3,01 dB ≈ 3 dB**
**12.2** ΔL = 10 · lg 10 = **10 dB**
**12.3** Nur noch **1/10** der Schallenergie kommt durch – subjektiv wird das als „**halb so laut**" empfunden.
</details>

### 🏗️ Aufgabe 13 · Bevölkerungswachstum (Komplexaufgabe)
Gegeben die Tabelle aus dem Modul (1980: 5 650 000 · 2000: 8 561 766).
**13.1** Zeige, dass es exponentiell wächst. **13.2** Wachstumsfaktor je 5 Jahre? **13.3** Prognose 2015?

<details><summary>Lösung anzeigen</summary>

**13.1** Quotienten aufeinanderfolgender Werte bilden – alle ergeben **1,10951** → konstanter Quotient → exponentiell ✓

**13.2** **a = 1,10951** je 5-Jahres-Schritt (≈ 2,1 % pro Jahr)

**13.3** 2015 = 35 Jahre nach 1980 = 7 Schritte
```
N(7) = 5 650 000 · 1,10951⁷ = 5 650 000 · 2,06983 = 11 695 000 Einwohner
```
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich unterscheide **Potenzfunktion (xⁿ)** und **Exponentialfunktion (aˣ)** sicher.
- [ ] Ich weiß, dass jede Exponentialfunktion durch **(0|1)** geht.
- [ ] Ich bestimme den **Wachstumsfaktor** aus einer Prozentangabe (a = 1 ± p/100).
- [ ] Ich kann **Wachstums- und Zerfallsvorgänge** als Funktion aufstellen.
- [ ] Ich weiß, dass exponentielles Wachstum **nicht** dasselbe ist wie „Prozent mal Jahre".
- [ ] Ich kann den **Logarithmus** definieren („hoch was ergibt den Numerus?").
- [ ] Ich forme zwischen **Potenz- und Logarithmusform** um.
- [ ] Ich kenne **lg, ln, ld** und ihre Basen.
- [ ] Ich kann den **Basiswechsel** anwenden (log_a x = lg x / lg a).
- [ ] Ich kenne die **drei Logarithmengesetze**.
- [ ] Ich löse **Exponentialgleichungen** durch Logarithmieren – und isoliere vorher die Potenz.
- [ ] Ich kann die **Verdopplungszeit** berechnen und mit der 70er-Regel prüfen.
- [ ] Ich verstehe, warum **Schallpegel logarithmisch** angegeben werden (+3 dB = doppelte Energie).

**Damit ist Lernmodul 3 abgeschlossen.**
**Nächstes Modul:** LM4 – Geometrie und Trigonometrie
