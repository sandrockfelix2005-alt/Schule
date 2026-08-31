# Mathematik I · Lernmodul 4 · Kapitel 2
# Trigonometrie

> **Lernkapitel zum Selbststudium.** Quelle: DAA Mathematik I, Lernmodul 4, Lernbereich 2 · **Zeitaufwand: ca. 6–7 Stunden**

**Was du am Ende können musst**
- **sin, cos, tan** im rechtwinkligen Dreieck definieren und anwenden.
- Fehlende **Seiten und Winkel** im rechtwinkligen Dreieck berechnen.
- Die **trigonometrischen Funktionen** und ihre Grafen kennen.
- Mit **Sinussatz** und **Kosinussatz** im **beliebigen** Dreieck rechnen.
- Zwischen **Grad- und Bogenmaß** umrechnen.
- Dachneigungen, Böschungen und Vermessungsaufgaben lösen.
- Die **Additionstheoreme** anwenden.
- Mit **Höhen- und Tiefenwinkeln** und im **Raum** rechnen.

**Inhalt:** [2.1 sin, cos, tan](#21-sinus-kosinus-und-tangens) · [2.2 Trigonometrische Funktionen](#22-die-trigonometrischen-funktionen) · [2.3 Sinussatz](#23-der-sinussatz) · [2.4 Kosinussatz](#24-der-kosinussatz) · [2.5 Bogenmaß](#25-das-bogenmaß) · [2.6 Additionstheoreme](#26-die-additionstheoreme) · [2.7 Trigonometrie im Raum](#27-trigonometrie-im-raum) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

Die **Trigonometrie** verbindet **Winkel** mit **Seitenlängen**. Genau das brauchst du im Bau ständig:

| Aufgabe | Was gesucht ist |
|---------|-----------------|
| **Dachneigung** aus Sparrenmaßen | Winkel aus Seiten |
| **Sparrenlänge** aus Neigungswinkel | Seite aus Winkel |
| **Böschungswinkel** einer Baugrube | Winkel aus Höhe und Anlage |
| **Rampensteigung** prüfen | Winkel aus Höhe und Länge |
| **Grundstücksvermessung** | Seiten und Winkel im beliebigen Dreieck |
| **Absteckmaße** berechnen | Koordinaten aus Winkel und Strecke |
| **Aussteifung** von Fachwerken | Diagonalenlängen und Winkel |

> ### 💡 Taschenrechner-Einstellung
> Stelle deinen Rechner auf **DEG** (Degree = Grad). Steht er auf **RAD** oder **GRAD**, bekommst du falsche Ergebnisse!
> Prüfung: `sin 30°` muss **0,5** ergeben. Kommt etwas anderes heraus, ist die Einstellung falsch.

---

## 2.1 Sinus, Kosinus und Tangens

### Die Grundidee

In **ähnlichen** rechtwinkligen Dreiecken (gleiche Winkel) sind die **Seitenverhältnisse gleich** – egal wie groß das Dreieck ist. Diese Verhältnisse bekommen Namen.

### Die Bezeichnungen

Bezogen auf einen **bestimmten** Winkel α:

```
              │╲
              │  ╲
   Ankathete  │    ╲  Hypotenuse
      (b)     │      ╲
              │________╲
                 (a)      α
              Gegenkathete
```

| Seite | Definition |
|-------|-----------|
| **Hypotenuse** | liegt dem **rechten Winkel** gegenüber (immer die längste) |
| **Gegenkathete** | liegt dem **Winkel α** gegenüber |
| **Ankathete** | liegt **an** dem Winkel α an |

> ### ⚠️ Wichtig
> Gegen- und Ankathete **hängen vom betrachteten Winkel ab**! Wechselst du von α zu β, tauschen sie die Rollen. Die Hypotenuse bleibt immer dieselbe.

### Die drei Winkelfunktionen

> ### 💡 Die Definitionen (auswendig!)
> ```
> sin α = Gegenkathete / Hypotenuse
> cos α = Ankathete   / Hypotenuse
> tan α = Gegenkathete / Ankathete
> ```
> Außerdem gilt: **tan α = sin α / cos α**

### Der Merkspruch

> ### 💡 „GAGA – Hühner AH"
> | Buchstabe | Bedeutung |
> |-----------|-----------|
> | **G**e**G**en… | Sinus = **G**egenkathete / **H**ypotenuse |
> | **A**n**A**… | Kosinus = **A**nkathete / **H**ypotenuse |
> | …**H**ühner **AH** | Tangens = **G**egen / **A**nkathete |
>
> Reihenfolge: **G**egen–**A**n–**G**egen / **A**n–**H**yp–**H**yp–**A**n
>
> **Alternative Merkhilfe:** „**S**inus ist **G**egen **H**ypotenuse" – SGH, CAH, TGA.

### So gehst du vor

**Seite gesucht:**
1. Zeichne eine **Skizze** und benenne Hypotenuse, Gegen- und Ankathete **bezogen auf den gegebenen Winkel**.
2. Wähle die Funktion, in der **gegeben** und **gesucht** vorkommen.
3. Formel nach der gesuchten Größe **umstellen**.
4. Einsetzen und rechnen (Rechner auf DEG!).

**Winkel gesucht:**
1. Seitenverhältnis bilden.
2. Mit der **Umkehrfunktion** (sin⁻¹, cos⁻¹, tan⁻¹) den Winkel bestimmen.

### 📐 Lehrbeispiel 1 – Seite berechnen

Rechtwinkliges Dreieck: Hypotenuse **c = 10 m**, Winkel **α = 30°**. Berechne beide Katheten.

| Gesucht | Funktion wählen | Umstellen | Rechnung |
|---------|-----------------|-----------|----------|
| Gegenkathete a | sin α = a/c | a = c · sin α | a = 10 · sin30° = 10 · 0,5 = **5,00 m** |
| Ankathete b | cos α = b/c | b = c · cos α | b = 10 · cos30° = 10 · 0,866 = **8,66 m** |

**Probe mit Pythagoras:** 5,00² + 8,66² = 25 + 74,996 = 99,996 ≈ 100 = 10² ✓

### 📐 Lehrbeispiel 2 – Winkel berechnen

Gegenkathete **a = 5 m**, Ankathete **b = 8,66 m**. Wie groß ist α?

```
tan α = a / b = 5 / 8,66 = 0,5774
α = tan⁻¹(0,5774) = 30,0°
```

### 📐 Lehrbeispiel 3 – Hypotenuse gesucht

Gegenkathete **a = 4,5 m**, Winkel **α = 35°**. Wie lang ist die Hypotenuse?

```
sin α = a / c        | · c
c · sin α = a        | : sin α
c = a / sin α = 4,5 / sin35° = 4,5 / 0,5736 = 7,845 m ≈ 7,85 m
```

### Wichtige Werte zum Merken

| α | sin α | cos α | tan α |
|:-:|:-----:|:-----:|:-----:|
| 0° | 0 | 1 | 0 |
| **30°** | **0,5** | 0,866 | 0,577 |
| **45°** | 0,707 | 0,707 | **1** |
| **60°** | 0,866 | **0,5** | 1,732 |
| 90° | 1 | 0 | – (nicht def.) |

> ### 💡 Zwei nützliche Kontrollen
> **1.** sin und cos sind **immer ≤ 1** – kommt bei dir mehr heraus, hast du Gegen- und Hypotenuse vertauscht.
> **2.** Bei **45°** sind sin und cos gleich (das Dreieck ist gleichschenklig) und tan = 1.

### 🏗️ Bau-Beispiel 1 – Dachneigung

Ein Satteldach: halbe Spannweite **4,50 m**, Firsthöhe über Traufe **3,20 m**.

**a) Neigungswinkel:**
```
tan α = Höhe / halbe Spannweite = 3,20 / 4,50 = 0,7111
α = tan⁻¹(0,7111) = 35,4°
```

**b) Sparrenlänge (zwei Wege):**

*Über Pythagoras:*
```
l = √(4,50² + 3,20²) = √30,49 = 5,52 m
```

*Über den Kosinus:*
```
cos α = b / l    →    l = b / cos α = 4,50 / cos35,4° = 4,50 / 0,8151 = 5,52 m ✓
```

**c) Dachneigung in Prozent:**
```
Neigung = tan α · 100 % = 0,7111 · 100 = 71,1 %
```

> ### ⚠️ Grad und Prozent verwechseln – der Klassiker
> **35,4° sind 71,1 %** – nicht 35,4 %!
> ```
> Prozent = tan(Winkel) · 100
> Winkel  = tan⁻¹(Prozent / 100)
> ```
> | Winkel | Prozent |
> |-------:|--------:|
> | 5° | 8,7 % |
> | 15° | 26,8 % |
> | 30° | 57,7 % |
> | **45°** | **100 %** |
> | 60° | 173,2 % |
>
> **45° = 100 %** – das ist der Merkpunkt. Wer glaubt, 100 % sei senkrecht, liegt falsch.

### 🏗️ Bau-Beispiel 2 – Rampe prüfen

Eine Rampe überwindet **0,84 m** auf **12,00 m** Länge (waagerecht gemessen).

```
tan α = 0,84 / 12,00 = 0,07
α = tan⁻¹(0,07) = 4,00°
Neigung in Prozent = 7,0 %
```

**Bewertung:** Nach DIN 18040 (barrierefreies Bauen) sind maximal **6 %** zulässig → **die Rampe ist zu steil**.

**Erforderliche Länge bei 6 %:**
```
0,06 = 0,84 / l    →    l = 0,84 / 0,06 = 14,00 m
```

### 🏗️ Bau-Beispiel 3 – Böschungswinkel

Eine Baugrube ist **3,50 m** tief, die Böschung hat eine Anlage von **1 : 1,5**.

```
Horizontale Ausdehnung: 3,50 · 1,5 = 5,25 m

tan α = Höhe / horizontale Ausdehnung = 3,50 / 5,25 = 0,6667
α = tan⁻¹(0,6667) = 33,7°
```

**Böschungslänge (in der Schräge):**
```
sin α = 3,50 / l    →    l = 3,50 / sin33,7° = 3,50 / 0,5547 = 6,31 m
```

> **Praxis:** Nach DIN 4124 darf ohne besonderen Nachweis bei nichtbindigem Boden bis **45°**, bei bindigem bis **60°** geböscht werden. Der berechnete Winkel muss also darunter liegen.

### 🏗️ Bau-Beispiel 4 – Absteckmaße

Von einem Festpunkt aus soll ein Punkt in **28,50 m** Entfernung unter **62°** zur Bezugsachse abgesteckt werden. Welche rechtwinkligen Absteckmaße (x, y)?

```
x = 28,50 · cos62° = 28,50 · 0,4695 = 13,38 m
y = 28,50 · sin62° = 28,50 · 0,8829 = 25,16 m
```

**Kontrolle:** √(13,38² + 25,16²) = √(179,0 + 633,0) = √812,0 = 28,50 ✓

---

<div class="viz" data-viz="rechtwinklig"></div>

## 2.2 Die trigonometrischen Funktionen

Trägt man sin, cos und tan über dem Winkel auf, entstehen **periodische Kurven**.

### Die Sinusfunktion

```
   y
   1 ┤    ╱‾‾╲
     │  ╱      ╲
   0 ┼╱──────────╲──────────╱─── x (Winkel)
     │0°   90°  180╲  270° ╱ 360°
  -1 ┤              ╲___╱
```

| Eigenschaft | Wert |
|-------------|------|
| Wertebereich | −1 ≤ y ≤ 1 |
| Periode | 360° |
| Nullstellen | 0°, 180°, 360°, … |
| Maximum | +1 bei 90° |
| Minimum | −1 bei 270° |

### Die Kosinusfunktion

Dieselbe Kurve, nur um **90° verschoben**:
```
cos α = sin(α + 90°)
```

| Eigenschaft | Wert |
|-------------|------|
| Wertebereich | −1 ≤ y ≤ 1 |
| Periode | 360° |
| Maximum | +1 bei 0° |
| Nullstellen | 90°, 270°, … |

### Die Tangensfunktion

| Eigenschaft | Wert |
|-------------|------|
| Wertebereich | alle reellen Zahlen |
| **Periode** | **180°** (nicht 360°!) |
| **Polstellen** | 90°, 270°, … – dort **nicht definiert** |

> ### 💡 Warum ist tan 90° nicht definiert?
> ```
> tan α = sin α / cos α
> tan 90° = 1 / 0        → Division durch Null!
> ```
> **Anschaulich:** Bei 90° wäre die Ankathete null – ein senkrechtes Dach hätte „unendliche" Neigung. Deshalb gibt es keine Dachneigung von 90 % … pardon, von 90 **Grad**.

### Sinus und Kosinus für stumpfe Winkel

Für Winkel über 90° (die im **allgemeinen** Dreieck vorkommen) gilt:

> ### 💡 Merke
> ```
> sin(180° − α) = sin α          (Sinus bleibt gleich)
> cos(180° − α) = −cos α         (Kosinus wechselt das Vorzeichen)
> ```

**Beispiel:** sin 150° = sin 30° = 0,5 · cos 150° = −cos 30° = −0,866

> **Praktische Bedeutung:** Beim Kosinussatz kann γ stumpf sein – dann wird cos γ **negativ**, und aus dem Minus in der Formel wird effektiv ein Plus. Der Taschenrechner macht das automatisch richtig, wenn du den Winkel direkt eingibst.

---

<div class="viz" data-viz="einheitskreis"></div>

## 2.3 Der Sinussatz

Im **beliebigen** (nicht rechtwinkligen) Dreieck helfen sin/cos/tan nicht mehr direkt. Dafür gibt es zwei Sätze.

> ### 💡 Der Sinussatz
> ```
> a / sin α = b / sin β = c / sin γ
> ```
> **In Worten:** Die Seiten verhalten sich wie die Sinuswerte der **gegenüberliegenden** Winkel.

### Wann verwendest du ihn?

> ### 💡 Der Sinussatz braucht immer ein „Paar"
> Du brauchst **eine Seite mit ihrem Gegenwinkel** – plus eine weitere Angabe.
>
> | Gegeben | Anwendbar |
> |---------|:---------:|
> | **WSW** / **SWW** (zwei Winkel und eine Seite) | ✅ |
> | **SsW** (zwei Seiten und Gegenwinkel der größeren) | ✅ |
> | SWS (zwei Seiten, eingeschlossener Winkel) | ❌ → Kosinussatz |
> | SSS (drei Seiten) | ❌ → Kosinussatz |

### 📐 Lehrbeispiel 1 – Seite berechnen

Gegeben: **α = 40°**, **β = 60°**, **a = 8,00 m**. Berechne b.

| Schritt | Rechnung |
|---------|----------|
| Ansatz | a / sin α = b / sin β |
| Umstellen | b = a · sin β / sin α |
| Einsetzen | b = 8,00 · sin60° / sin40° |
| Rechnen | b = 8,00 · 0,8660 / 0,6428 = 6,928 / 0,6428 |
| Ergebnis | **b = 10,78 m** |

**Dritter Winkel:** γ = 180° − 40° − 60° = **80°**

**Dritte Seite:**
```
c = a · sin γ / sin α = 8,00 · 0,9848 / 0,6428 = 12,26 m
```

### 📐 Lehrbeispiel 2 – Winkel berechnen

Gegeben: **a = 12,0 m**, **b = 9,0 m**, **α = 65°**. Berechne β.

```
a / sin α = b / sin β        | umstellen
sin β = b · sin α / a
      = 9,0 · sin65° / 12,0
      = 9,0 · 0,9063 / 12,0
      = 0,6797

β = sin⁻¹(0,6797) = 42,8°
```

### 🏗️ Bau-Beispiel – Unzugängliche Strecke vermessen

Ein Grundstück wird vermessen. Zwischen den Punkten A und B liegt ein Gewässer – die Strecke lässt sich nicht direkt messen.

**Messbar:** Standlinie **AC = 45,00 m**, Winkel bei A = **68°**, Winkel bei C = **54°**.

| Schritt | Rechnung |
|---------|----------|
| Dritter Winkel | β = 180° − 68° − 54° = **58°** |
| Sinussatz | AB / sin(Winkel bei C) = AC / sin(Winkel bei B) |
| Einsetzen | AB = 45,00 · sin54° / sin58° |
| Rechnen | AB = 45,00 · 0,8090 / 0,8480 = 36,405 / 0,8480 |
| **Ergebnis** | **AB = 42,93 m** |

> **Das ist klassische Vermessungstechnik:** Zwei Winkel und eine messbare Standlinie genügen, um jede unzugängliche Strecke zu bestimmen.

---

## 2.4 Der Kosinussatz

> ### 💡 Der Kosinussatz
> ```
> c² = a² + b² − 2 · a · b · cos γ
> ```
> (γ ist der Winkel, der der Seite c **gegenüberliegt**)
>
> Entsprechend:
> ```
> a² = b² + c² − 2 · b · c · cos α
> b² = a² + c² − 2 · a · c · cos β
> ```

### Der Zusammenhang mit Pythagoras

> ### 💡 Der Kosinussatz ist der verallgemeinerte Pythagoras
> Setze γ = 90°:
> ```
> cos 90° = 0
> c² = a² + b² − 2ab · 0 = a² + b²      ← der Satz des Pythagoras!
> ```
> Der Term **−2ab·cos γ** ist also die „Korrektur", wenn der Winkel **nicht** 90° ist.
>
> - γ < 90° → cos γ > 0 → c wird **kleiner** als beim rechten Winkel
> - γ > 90° → cos γ < 0 → c wird **größer**

### Wann verwendest du ihn?

| Gegeben | Verfahren |
|---------|-----------|
| **SWS** – zwei Seiten und der **eingeschlossene** Winkel | Kosinussatz direkt |
| **SSS** – alle drei Seiten, Winkel gesucht | Kosinussatz **umgestellt** |

### Umstellen nach dem Winkel

```
c² = a² + b² − 2ab·cos γ        | − a² − b²
c² − a² − b² = −2ab·cos γ       | : (−2ab)

cos γ = (a² + b² − c²) / (2ab)
```

### 📐 Lehrbeispiel 1 – SWS (Seite gesucht)

Gegeben: **a = 5,0 m**, **b = 7,0 m**, eingeschlossener Winkel **γ = 60°**.

| Schritt | Rechnung |
|---------|----------|
| Formel | c² = a² + b² − 2ab·cos γ |
| Einsetzen | c² = 25 + 49 − 2·5·7·cos60° |
| cos60° = 0,5 | c² = 74 − 70 · 0,5 = 74 − 35 = 39 |
| Wurzel | **c = √39 = 6,24 m** |

### 📐 Lehrbeispiel 2 – SSS (Winkel gesucht)

Gegeben: **a = 6,0 m**, **b = 8,0 m**, **c = 11,0 m**. Berechne γ.

```
cos γ = (a² + b² − c²) / (2ab)
      = (36 + 64 − 121) / (2 · 6 · 8)
      = (−21) / 96
      = −0,21875

γ = cos⁻¹(−0,21875) = 102,6°
```

> **Der negative Kosinus zeigt sofort:** γ ist ein **stumpfer** Winkel (> 90°). Das ist plausibel, weil c die längste Seite ist.

### Die Dreiecksfläche mit Sinus

Wenn zwei Seiten und der eingeschlossene Winkel bekannt sind, gibt es eine elegante Flächenformel:

> ### 💡 Flächenformel
> ```
> A = ½ · a · b · sin γ
> ```

**Herleitung:** Die Höhe auf a ist h = b · sin γ. Eingesetzt in A = ½·a·h ergibt das die Formel.

**Beispiel:** a = 6,0 m, b = 9,0 m, γ = 55°
```
A = ½ · 6,0 · 9,0 · sin55° = 27 · 0,8192 = 22,12 m²
```

### 🏗️ Bau-Beispiel 1 – Grundstücksfläche

Ein dreieckiges Grundstück: Seiten **a = 42,00 m**, **b = 35,00 m**, eingeschlossener Winkel **γ = 78°**.

**a) Dritte Seite:**
```
c² = 42² + 35² − 2·42·35·cos78°
   = 1764 + 1225 − 2940 · 0,2079
   = 2989 − 611,2
   = 2377,8
c = √2377,8 = 48,76 m
```

**b) Fläche:**
```
A = ½ · 42,00 · 35,00 · sin78°
  = 735 · 0,9781
  = 718,9 m²
```

### 🏗️ Bau-Beispiel 2 – Fachwerk-Diagonale

Ein Fachwerkfeld: Untergurt **3,60 m**, Pfosten **2,40 m**, Winkel zwischen beiden **95°** (also leicht schräg).

```
d² = 3,60² + 2,40² − 2 · 3,60 · 2,40 · cos95°
   = 12,96 + 5,76 − 17,28 · (−0,08716)
   = 18,72 + 1,506
   = 20,226
d = √20,226 = 4,497 m ≈ 4,50 m
```

> **Beachte:** cos 95° ist **negativ** → aus dem Minus in der Formel wird ein Plus, die Diagonale wird **länger** als bei 90° (dort wäre sie √18,72 = 4,33 m).

---

<div class="viz" data-viz="schiefwinklig"></div>

## 2.5 Das Bogenmaß

### Warum ein zweites Winkelmaß?

Neben dem **Gradmaß** gibt es das **Bogenmaß (Radiant)**. Ein Winkel wird dabei durch die **Länge des zugehörigen Bogens am Einheitskreis** (r = 1) angegeben.

> ### 💡 Die Umrechnung
> **Vollkreis = 360° = 2π**
> ```
> rad = (π / 180°) · Grad
> Grad = (180° / π) · rad
> ```

### Die wichtigsten Werte

| Grad | Bogenmaß | als Zahl |
|-----:|:--------:|---------:|
| 0° | 0 | 0 |
| 30° | π/6 | 0,524 |
| 45° | π/4 | 0,785 |
| 60° | π/3 | 1,047 |
| **90°** | **π/2** | 1,571 |
| **180°** | **π** | 3,142 |
| 270° | 3π/2 | 4,712 |
| **360°** | **2π** | 6,283 |

### 🏗️ Bau-Beispiel – Bogenlänge

Ein Rundbogen hat einen Radius von **1,20 m** und einen Öffnungswinkel von **120°**.

**Weg 1 – über den Anteil am Vollkreis:**
```
b = (120/360) · 2π · 1,20 = (1/3) · 7,540 = 2,513 m
```

**Weg 2 – über das Bogenmaß:**
```
φ = 120° · π/180° = 2,094 rad
b = r · φ = 1,20 · 2,094 = 2,513 m ✓
```

> ### 💡 Die einfachste Bogenformel
> Im Bogenmaß gilt schlicht:
> ```
> b = r · φ          (φ in Radiant!)
> ```
> Deshalb ist das Bogenmaß in der höheren Mathematik und Technik so beliebt – es macht Formeln kürzer.

---

# ✍️ Übungsaufgaben mit Lösungsweg

## 2.6 Die Additionstheoreme

Manchmal kennst du die Funktionswerte zweier Winkel und brauchst den Wert ihrer **Summe**. Dafür gibt es die **Additionstheoreme** – sie drücken den Funktionswert einer Winkelsumme durch die Werte der einzelnen Winkel aus.

> ### 💡 Die drei Formeln
> ```
> sin(x₁ + x₂) = sin x₁ · cos x₂ + cos x₁ · sin x₂
> cos(x₁ + x₂) = cos x₁ · cos x₂ − sin x₁ · sin x₂
> tan(x₁ + x₂) = (tan x₁ + tan x₂) / (1 − tan x₁ · tan x₂)
> ```

> ### ⚠️ Der Fehler, der fast jedem einmal passiert
> **sin(x₁ + x₂) ist NICHT sin x₁ + sin x₂.** Der Sinus ist keine lineare Funktion, du darfst ihn nicht „ausmultiplizieren". Probe mit Zahlen: sin(30° + 60°) = sin 90° = 1, aber sin 30° + sin 60° = 0,5 + 0,866 = 1,366. Zwei völlig verschiedene Werte.

> ### 💡 Beim Kosinus dreht sich das Vorzeichen um
> Beim Sinus steht ein **Plus** zwischen den Produkten, beim Kosinus ein **Minus**. Das ist die häufigste Verwechslung. Merksatz: *„Sinus bleibt freundlich, Kosinus wird kritisch."*

### 📐 Lehrbeispiel – sin 75° ohne Taschenrechner

75° ist keiner der bekannten Winkel, aber 75° = 45° + 30°:

```
sin 75° = sin(45° + 30°)
        = sin 45° · cos 30° + cos 45° · sin 30°
        = 0,70711 · 0,86603 + 0,70711 · 0,50000
        = 0,61237 + 0,35355
        = 0,96593
```
Der Taschenrechner sagt sin 75° = 0,96593 ✓

**Zur Gegenprobe der Kosinus:**
```
cos 75° = cos 45° · cos 30° − sin 45° · sin 30°
        = 0,70711 · 0,86603 − 0,70711 · 0,50000
        = 0,61237 − 0,35355
        = 0,25882            (Taschenrechner: 0,25882 ✓)
```

> ### 💡 Wofür du das brauchst
> Die Additionstheoreme sind das Werkzeug, mit dem man Winkelfunktionen **umformt** statt sie auszurechnen. Das wird wichtig, sobald du Formeln zusammenfassen oder vereinfachen musst – etwa bei Schwingungen und bei der Zerlegung von Kräften unter mehreren Winkeln.

---

## 2.7 Trigonometrie im Raum

Bisher lag alles in einer Ebene. Am Bau ist das selten so: Ein Dach, eine Böschung, eine Raumdiagonale liegen **schräg im Raum**. Der Trick ist immer derselbe.

> ### 💡 Das Grundprinzip
> **Suche im Raum ein rechtwinkliges Dreieck, das in einer Ebene liegt** – dann rechnest du darin ganz normal weiter. Meist brauchst du **zwei** Dreiecke nacheinander: eins in der Grundfläche, eins senkrecht dazu.

### Höhenwinkel und Tiefenwinkel

| Begriff | Bedeutung |
|---------|-----------|
| **Höhenwinkel** | Winkel zwischen der Waagerechten und der Blickrichtung **nach oben** |
| **Tiefenwinkel** | Winkel zwischen der Waagerechten und der Blickrichtung **nach unten** |

Beide werden **von der Waagerechten aus** gemessen – das ist beim Nivellier und beim Tachymeter genauso.

### 📐 Lehrbeispiel – Höhe eines Bauwerks von einem Standpunkt aus

Du stehst auf einem Gebäude in **h = 60,0 m** Höhe. Zum **Fuß** eines gegenüberliegenden Turms misst du den Tiefenwinkel **β = 28°44'**, zu seiner **Spitze** den Höhenwinkel **α = 30°17'**. Wie hoch ist der Turm?

**Schritt 1 – Winkel in Dezimalgrad umrechnen:**
```
β = 28° + 44/60 = 28,7333°
α = 30° + 17/60 = 30,2833°
```

**Schritt 2 – waagerechte Entfernung** über das untere Dreieck:
```
tan β = h / d      →      d = h / tan β = 60,0 / 0,54824 = 109,44 m
```

**Schritt 3 – Höhe über deinem Standpunkt** über das obere Dreieck:
```
tan α = x / d      →      x = d · tan α = 109,44 · 0,58396 = 63,91 m
```

**Schritt 4 – Gesamthöhe:**
```
H = h + x = 60,0 + 63,91 = 123,9 m
```

> ### ⚠️ Winkel in Grad und Minuten
> 28°44' bedeutet **28 Grad und 44 Minuten**, nicht 28,44°. Eine Minute ist 1/60 Grad. Wer das verwechselt, rechnet mit 28,44° statt 28,73° und liegt schon im ersten Schritt daneben. Am Taschenrechner hilft die Taste **°'"**.

### 📐 Lehrbeispiel – Winkel der Raumdiagonale

Ein Quader misst **6,00 m × 4,00 m × 3,00 m**. Welchen Winkel bildet die Raumdiagonale mit der Grundfläche?

**Schritt 1 – Flächendiagonale der Grundfläche** (liegt in der Grundebene):
```
d_G = √(6,00² + 4,00²) = √(36 + 16) = √52 = 7,211 m
```

**Schritt 2 – jetzt das senkrechte Dreieck** aus Flächendiagonale, Höhe und Raumdiagonale:
```
tan φ = h / d_G = 3,00 / 7,211 = 0,41603
φ = arctan 0,41603 = 22,59°
```

**Nebenbei die Raumdiagonale selbst:**
```
d_R = √(6,00² + 4,00² + 3,00²) = √61 = 7,810 m
```

### 🏗️ Bau-Beispiel – Satteldach

Über einer Decke von **21,0 m × 12,0 m** sitzt ein Satteldach mit **3,20 m** Firsthöhe über der Traufe.

```
Halbe Breite:  12,0 / 2 = 6,00 m
Dachneigung:   tan α = 3,20 / 6,00 = 0,53333  →  α = 28,07°
Sparrenlänge:  √(6,00² + 3,20²) = √(36 + 10,24) = √46,24 = 6,80 m
Dachfläche:    2 · 21,0 · 6,80 = 285,6 m²
```

> ### 🏗️ Warum das die wichtigste Rechnung am Dach ist
> Die **Dachfläche** ist immer größer als die überdeckte Grundfläche – hier 285,6 m² statt 252 m². Wer die Ziegel nach der Grundfläche bestellt, hat 13 % zu wenig. Der Faktor ist genau **1/cos α**: 1/cos 28,07° = 1,133.

### 🏗️ Bau-Beispiel – Böschungswinkel

Eine Baugrube ist **4,50 m** tief und wird mit der Neigung **1 : 1,5** geböscht (auf 1 m Höhe 1,5 m Breite).

```
Waagerechte Ausladung:  4,50 · 1,5 = 6,75 m je Seite
Böschungswinkel:        tan α = 4,50 / 6,75 = 0,66667  →  α = 33,69°
```

Die Grube wird dadurch je Seite **6,75 m breiter** als das Bauwerk – bei enger Bebauung der Grund, warum stattdessen ein Verbau gesetzt wird.

---

### Aufgabe 1 · Definitionen
Nenne die drei Winkelfunktionen und den Merkspruch.

<details><summary>Lösung anzeigen</summary>

```
sin α = Gegenkathete / Hypotenuse
cos α = Ankathete   / Hypotenuse
tan α = Gegenkathete / Ankathete
```
Merkspruch: **GAGA – Hühner AH**
</details>

### Aufgabe 2 · Seiten berechnen
Rechtwinkliges Dreieck, Hypotenuse **c = 12,0 m**, Winkel **α = 40°**.
**2.1** Gegenkathete? **2.2** Ankathete? **2.3** Probe mit Pythagoras.

<details><summary>Lösung anzeigen</summary>

**2.1** a = 12,0 · sin40° = 12,0 · 0,6428 = **7,71 m**
**2.2** b = 12,0 · cos40° = 12,0 · 0,7660 = **9,19 m**
**2.3** 7,71² + 9,19² = 59,44 + 84,46 = 143,90 ≈ 144 = 12² ✓
</details>

### Aufgabe 3 · Winkel berechnen
**3.1** Gegen 3, An 4 → α? **3.2** Gegen 5, Hyp 13 → α? **3.3** An 8, Hyp 10 → α?

<details><summary>Lösung anzeigen</summary>

**3.1** tan α = 3/4 = 0,75 → α = **36,87°**
**3.2** sin α = 5/13 = 0,3846 → α = **22,62°**
**3.3** cos α = 8/10 = 0,8 → α = **36,87°**
</details>

### Aufgabe 4 · Hypotenuse gesucht
Gegenkathete **a = 6,0 m**, Winkel **α = 28°**. Wie lang ist die Hypotenuse?

<details><summary>Lösung anzeigen</summary>

```
c = a / sin α = 6,0 / sin28° = 6,0 / 0,4695 = 12,78 m
```
</details>

### Aufgabe 5 · Grad und Prozent
Rechne um: **5.1** 25° in % · **5.2** 15 % in Grad · **5.3** 45° in % · **5.4** 100 % in Grad

<details><summary>Lösung anzeigen</summary>

**5.1** tan25° · 100 = 0,4663 · 100 = **46,6 %**
**5.2** tan⁻¹(0,15) = **8,53°**
**5.3** tan45° · 100 = **100 %**
**5.4** tan⁻¹(1,00) = **45°**
</details>

### Aufgabe 6 · Sinussatz
**α = 35°**, **β = 65°**, **a = 10,0 m**.
**6.1** γ? **6.2** b? **6.3** c?

<details><summary>Lösung anzeigen</summary>

**6.1** γ = 180 − 35 − 65 = **80°**
**6.2** b = 10,0 · sin65°/sin35° = 10,0 · 0,9063/0,5736 = **15,80 m**
**6.3** c = 10,0 · sin80°/sin35° = 10,0 · 0,9848/0,5736 = **17,17 m**
</details>

### Aufgabe 7 · Kosinussatz (SWS)
**a = 8,0 m**, **b = 11,0 m**, **γ = 47°**. Berechne c.

<details><summary>Lösung anzeigen</summary>

```
c² = 64 + 121 − 2·8·11·cos47°
   = 185 − 176 · 0,6820
   = 185 − 120,0
   = 65,0
c = √65,0 = 8,06 m
```
</details>

### Aufgabe 8 · Kosinussatz (SSS)
**a = 7,0 m**, **b = 9,0 m**, **c = 12,0 m**. Berechne γ.

<details><summary>Lösung anzeigen</summary>

```
cos γ = (49 + 81 − 144) / (2·7·9) = (−14)/126 = −0,1111
γ = cos⁻¹(−0,1111) = 96,4°
```
(stumpfer Winkel, da cos negativ)
</details>

### Aufgabe 9 · Bogenmaß
**9.1** 60° in rad · **9.2** 270° in rad · **9.3** π/4 in Grad · **9.4** 2 rad in Grad

<details><summary>Lösung anzeigen</summary>

**9.1** 60 · π/180 = **π/3 ≈ 1,047**
**9.2** 270 · π/180 = **3π/2 ≈ 4,712**
**9.3** (π/4) · 180/π = **45°**
**9.4** 2 · 180/π = **114,59°**
</details>

### 🏗️ Aufgabe 10 · Dachneigung
Satteldach: halbe Spannweite **5,20 m**, Firsthöhe über Traufe **3,90 m**.
**10.1** Neigungswinkel? **10.2** Neigung in %? **10.3** Sparrenlänge?

<details><summary>Lösung anzeigen</summary>

**10.1** tan α = 3,90/5,20 = 0,75 → α = **36,87°**
**10.2** 0,75 · 100 = **75 %**
**10.3** l = √(5,20² + 3,90²) = √(27,04 + 15,21) = √42,25 = **6,50 m**
</details>

### 🏗️ Aufgabe 11 · Rampe
Eine Rampe soll **1,05 m** Höhe überwinden, zulässig sind **6 %**.
**11.1** Erforderliche Länge? **11.2** Neigungswinkel? **11.3** Länge der Rampenoberfläche (Schräge)?

<details><summary>Lösung anzeigen</summary>

**11.1** l_waagerecht = 1,05 / 0,06 = **17,50 m**
**11.2** α = tan⁻¹(0,06) = **3,43°**
**11.3** l_schräg = √(17,50² + 1,05²) = √(306,25 + 1,1025) = √307,35 = **17,53 m**
</details>

### 🏗️ Aufgabe 12 · Böschung
Baugrube **4,50 m** tief, Böschungsanlage **1 : 2**.
**12.1** Horizontale Ausdehnung? **12.2** Böschungswinkel? **12.3** Böschungslänge?

<details><summary>Lösung anzeigen</summary>

**12.1** 4,50 · 2 = **9,00 m**
**12.2** tan α = 4,50/9,00 = 0,5 → α = **26,57°**
**12.3** l = √(4,50² + 9,00²) = √(20,25 + 81) = √101,25 = **10,06 m**
</details>

### 🏗️ Aufgabe 13 · Vermessung
Standlinie **AC = 60,00 m**, Winkel bei A = **72°**, Winkel bei C = **48°**. Berechne die unzugängliche Strecke AB.

<details><summary>Lösung anzeigen</summary>

```
Winkel bei B = 180 − 72 − 48 = 60°
AB = AC · sin(C) / sin(B) = 60,00 · sin48° / sin60°
   = 60,00 · 0,7431 / 0,8660
   = 44,586 / 0,8660
   = 51,49 m
```
</details>

### 🏗️ Aufgabe 14 · Grundstücksfläche
Dreieckiges Grundstück: **a = 38,00 m**, **b = 45,00 m**, eingeschlossener Winkel **γ = 82°**.
**14.1** Dritte Seite? **14.2** Fläche?

<details><summary>Lösung anzeigen</summary>

**14.1**
```
c² = 1444 + 2025 − 2·38·45·cos82°
   = 3469 − 3420 · 0,1392
   = 3469 − 476,1 = 2992,9
c = √2992,9 = 54,71 m
```

**14.2**
```
A = ½ · 38,00 · 45,00 · sin82° = 855 · 0,9903 = 846,7 m²
```
</details>

### 🏗️ Aufgabe 15 · Absteckung
Von einem Festpunkt wird ein Punkt in **35,00 m** Entfernung unter **48°** abgesteckt. Welche rechtwinkligen Absteckmaße x und y?

<details><summary>Lösung anzeigen</summary>

```
x = 35,00 · cos48° = 35,00 · 0,6691 = 23,42 m
y = 35,00 · sin48° = 35,00 · 0,7431 = 26,01 m
```
**Kontrolle:** √(23,42² + 26,01²) = √(548,5 + 676,5) = √1225 = 35,00 ✓
</details>

---

### Aufgabe 16 · Additionstheoreme
**16.1** Berechnen Sie sin 105° über 60° + 45°. **16.2** Berechnen Sie cos 105° auf demselben Weg. **16.3** Zeigen Sie an einem Beispiel, dass sin(x₁ + x₂) ≠ sin x₁ + sin x₂ gilt.

<details><summary>Lösung anzeigen</summary>

**16.1** sin 105° = sin 60° · cos 45° + cos 60° · sin 45° = 0,86603 · 0,70711 + 0,50000 · 0,70711 = 0,61237 + 0,35355 = **0,96593**
**16.2** cos 105° = cos 60° · cos 45° − sin 60° · sin 45° = 0,35355 − 0,61237 = **−0,25882**
*(Das Minus ist richtig: 105° liegt im zweiten Quadranten, dort ist der Kosinus negativ.)*
**16.3** sin(30° + 60°) = sin 90° = 1,000 · aber sin 30° + sin 60° = 0,500 + 0,866 = **1,366**. Die Werte sind verschieden – der Sinus lässt sich nicht auseinanderziehen.
</details>

### 🏗️ Aufgabe 17 · Höhen- und Tiefenwinkel
Von einem Standpunkt in **45,0 m** Höhe misst du zum Fuß eines Turms den Tiefenwinkel **β = 25°18'** und zu seiner Spitze den Höhenwinkel **α = 33°42'**.
**17.1** Rechnen Sie beide Winkel in Dezimalgrad um. **17.2** Waagerechte Entfernung? **17.3** Gesamthöhe des Turms?

<details><summary>Lösung anzeigen</summary>

**17.1** β = 25 + 18/60 = **25,30°** · α = 33 + 42/60 = **33,70°**
**17.2** d = h / tan β = 45,0 / 0,47270 = **95,20 m**
**17.3** x = d · tan α = 95,20 · 0,66692 = 63,49 m → H = 45,0 + 63,49 = **108,5 m**
</details>

### 🏗️ Aufgabe 18 · Raumdiagonale
Ein Raum misst **8,00 m × 5,00 m × 3,50 m**.
**18.1** Flächendiagonale der Grundfläche? **18.2** Raumdiagonale? **18.3** Welchen Winkel bildet die Raumdiagonale mit der Grundfläche?

<details><summary>Lösung anzeigen</summary>

**18.1** d_G = √(8,00² + 5,00²) = √89 = **9,434 m**
**18.2** d_R = √(8,00² + 5,00² + 3,50²) = √101,25 = **10,06 m**
**18.3** tan φ = 3,50 / 9,434 = 0,37101 → φ = **20,35°**
</details>

### 🏗️ Aufgabe 19 · Satteldach
Über einer Decke von **16,5 m × 9,00 m** sitzt ein Satteldach mit **2,80 m** Firsthöhe.
**19.1** Dachneigung? **19.2** Sparrenlänge? **19.3** Dachfläche? **19.4** Um welchen Faktor ist sie größer als die Grundfläche?

<details><summary>Lösung anzeigen</summary>

**19.1** halbe Breite 4,50 m → tan α = 2,80 / 4,50 = 0,62222 → α = **31,89°**
**19.2** √(4,50² + 2,80²) = √(20,25 + 7,84) = √28,09 = **5,30 m**
**19.3** A = 2 · 16,5 · 5,30 = **174,9 m²**
**19.4** Grundfläche 16,5 · 9,00 = 148,5 m² → 174,9 / 148,5 = **1,178** = 1/cos 31,89°. Wer nach Grundfläche bestellt, hat 18 % zu wenig Material.
</details>

### 🏗️ Aufgabe 20 · Böschung
Eine Baugrube ist **3,80 m** tief und wird **1 : 1,25** geböscht.
**20.1** Waagerechte Ausladung je Seite? **20.2** Böschungswinkel? **20.3** Um wie viel m² wird die Grubensohle bei 12,0 m × 8,0 m Bauwerksfläche überschritten?

<details><summary>Lösung anzeigen</summary>

**20.1** 3,80 · 1,25 = **4,75 m**
**20.2** tan α = 3,80 / 4,75 = 0,80000 → α = **38,66°**
**20.3** Oben ist die Grube (12,0 + 2·4,75) × (8,0 + 2·4,75) = 21,5 · 17,5 = 376,25 m² statt 96,0 m² – also **280,25 m² mehr**. Das ist der Grund, warum bei beengten Verhältnissen verbaut statt geböscht wird.
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Mein Taschenrechner steht auf **DEG** (Test: sin 30° = 0,5).
- [ ] Ich kenne **sin, cos, tan** und den Merkspruch **GAGA – Hühner AH**.
- [ ] Ich bestimme Gegen- und Ankathete **bezogen auf den jeweiligen Winkel**.
- [ ] Ich berechne fehlende **Seiten** (Formel umstellen) und **Winkel** (Umkehrfunktion).
- [ ] Ich weiß: sin und cos sind **nie größer als 1**.
- [ ] Ich rechne zwischen **Grad und Prozent** um und weiß: **45° = 100 %**.
- [ ] Ich kenne die **Perioden** (sin/cos: 360°, tan: 180°) und die Polstellen von tan.
- [ ] Ich wende den **Sinussatz** an, wenn ich eine Seite mit ihrem **Gegenwinkel** habe.
- [ ] Ich wende den **Kosinussatz** bei **SWS** und **SSS** an.
- [ ] Ich weiß, dass der Kosinussatz bei γ = 90° zum **Pythagoras** wird.
- [ ] Ich kann die **Dreiecksfläche** mit A = ½·a·b·sin γ berechnen.
- [ ] Ich rechne zwischen **Grad- und Bogenmaß** um (b = r·φ).

**Nächstes Kapitel:** LM4 Kapitel 3 – Stereometrie (Körperberechnung)
