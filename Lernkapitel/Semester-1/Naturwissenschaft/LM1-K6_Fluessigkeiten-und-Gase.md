# Naturwissenschaft · Lernmodul 1 · Kapitel 6
# Mechanik der Flüssigkeiten und Gase

> **Lernkapitel zum Selbststudium.** Quelle: DAA Naturwissenschaft, Lernmodul 1, Kapitel 3 · **Zeitaufwand: ca. 4–5 Stunden**

**Was du am Ende können musst**
- Den **Druck** definieren und in verschiedenen Einheiten angeben.
- Den **Schweredruck** berechnen und das Prinzip der kommunizierenden Röhren erklären.
- **Hydraulische Kraftübersetzung** berechnen.
- Den **Auftrieb** bestimmen.
- Die **Eigenschaften von Gasen** und die Zustandsgleichung kennen.

**Inhalt:** [6.1 Druck](#61-der-druck) · [6.2 Schweredruck](#62-der-schweredruck) · [6.3 Hydraulik](#63-hydraulische-kraftübersetzung) · [6.4 Auftrieb](#64-der-auftrieb) · [6.5 Gase](#65-eigenschaften-der-gase) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## 6.1 Der Druck

> ### 💡 Definition
> ```
> p = F / A
> ```
> **Einheit:** 1 Pa (Pascal) = 1 N/m²

### Die Druckeinheiten

| Einheit | Umrechnung | Verwendung |
|---------|-----------|------------|
| **Pa** | 1 N/m² | SI-Basis, sehr klein |
| **kPa** | 1000 Pa | Bodenpressung, Lasten |
| **MPa** | 10⁶ Pa = **1 N/mm²** | Festigkeiten |
| **bar** | 10⁵ Pa = 0,1 MPa | Betriebsdrücke, Reifen |
| **N/cm²** | 10⁴ Pa | selten |

> ### 💡 Die wichtigsten Merkwerte
> ```
> 1 bar   = 100 000 Pa = 100 kPa = 0,1 N/mm²
> 1 N/mm² = 1 MPa = 10 bar
> ```
> Luftdruck auf Meereshöhe: ca. **1 bar** (genau 1013 hPa).

### 📐 Lehrbeispiel

Eine Stütze überträgt **60 kN** auf ein Fundament von **0,8 m²**.
```
p = 60 000 N / 0,8 m² = 75 000 Pa = 75 kPa = 0,075 N/mm²
```

### 🏗️ Bau-Beispiel – Warum breite Ketten?

Ein Bagger (**18 t**) steht auf zwei Ketten von je **3,50 m × 0,60 m**.

```
Aufstandsfläche: A = 2 · 3,50 · 0,60 = 4,20 m²
Gewichtskraft:   F = 18 000 · 9,81 = 176 580 N
Bodenpressung:   p = 176 580 / 4,20 = 42 043 Pa ≈ 42 kPa
```

**Zum Vergleich – auf Rädern** (Aufstandsfläche nur ca. 0,4 m²):
```
p = 176 580 / 0,40 = 441 450 Pa ≈ 441 kPa
```

> **Faktor 10!** Deshalb haben Baumaschinen für weichen Untergrund **breite Ketten** – die Kraft bleibt gleich, aber die Fläche wird größer, also sinkt der Druck. Genau dieselbe Physik steckt hinter Schneeschuhen und breiten Fundamenten.

---

## 6.2 Der Schweredruck

Eine Flüssigkeitssäule erzeugt durch ihr **Eigengewicht** einen Druck.

> ### 💡 Der hydrostatische Druck
> ```
> p_h = ρ · g · h
> ```
> | Größe | Bedeutung |
> |-------|-----------|
> | ρ | Dichte der Flüssigkeit (Wasser: 1000 kg/m³) |
> | g | 9,81 m/s² |
> | h | **Höhe** der Flüssigkeitssäule |

> ### 💡 Das hydrostatische Paradoxon
> Der Schweredruck hängt **nur von der Höhe** ab – **nicht** von der Form oder dem Volumen des Gefäßes!
>
> Ein dünnes Rohr von 10 m Höhe erzeugt am Boden **denselben** Druck wie ein riesiger Tank von 10 m Höhe.

### Weitere Formeln

| Größe | Formel |
|-------|--------|
| **Bodenkraft** | F_B = p · A = ρ · g · h · A |
| **Seitenkraft** (auf eine Wand) | F_S = ρ · g · A · y₀ mit y₀ = h/2 |

### 📐 Lehrbeispiel

Wasserdruck in **4,5 m** Tiefe:
```
p = 1000 · 9,81 · 4,5 = 44 145 Pa ≈ 0,44 bar
```

> ### 💡 Faustregel
> ```
> 10 m Wassersäule ≈ 1 bar
> ```
> Also: 1 m Wasser ≈ 0,1 bar = 10 kPa.

### 🏗️ Bau-Beispiel 1 – Wasserdruck auf eine Kellerwand

Eine Kellerwand ist **2,80 m** hoch und **6,00 m** lang, dahinter steht Grundwasser bis zur Oberkante.

**Druck am Fuß:**
```
p_max = 1000 · 9,81 · 2,80 = 27 468 Pa ≈ 27,5 kPa
```

**Resultierende Kraft auf die Wand** (der Druck steigt linear von 0 oben auf p_max unten → Mittelwert = p_max/2):
```
F = ρ · g · h/2 · A = 1000 · 9,81 · 1,40 · (2,80 · 6,00)
  = 13 734 · 16,80
  = 230 731 N ≈ 231 kN
```

**Angriffspunkt:** im unteren Drittel, also **0,93 m** über dem Wandfuß.

> **Praxisrelevanz:** 231 kN sind rund **23,5 Tonnen** Druck auf die Kellerwand. Deshalb müssen Kellerwände bei drückendem Wasser als „weiße Wanne" oder mit entsprechender Bewehrung ausgeführt werden.

### 🏗️ Bau-Beispiel 2 – Kommunizierende Röhren

Verbundene Gefäße haben **überall denselben Wasserspiegel** – unabhängig von Form und Querschnitt.

**Anwendung: der Schlauchwaage**
Zwei durchsichtige Rohrenden an einem wassergefüllten Schlauch zeigen immer **exakt dieselbe Höhe** an. So überträgt man Höhen über Ecken und Hindernisse hinweg – ohne Laser, ohne Strom.

> Das ist eines der ältesten und zuverlässigsten Nivelliergeräte überhaupt.

---

## 6.3 Hydraulische Kraftübersetzung

> ### 💡 Das Prinzip
> In einer geschlossenen Flüssigkeit ist der **Druck überall gleich**. Wirkt auf einen kleinen Kolben eine Kraft, entsteht am großen Kolben eine **viel größere** Kraft.
> ```
> p = F₁/A₁ = F₂/A₂
>
> →   F₁ / F₂ = A₁ / A₂       bzw.       F₂ = F₁ · A₂/A₁
> ```
> **Für die Wege gilt umgekehrt:**
> ```
> s₁ / s₂ = A₂ / A₁
> ```

> ### 💡 Auch hier gilt die Goldene Regel
> Die **Arbeit bleibt gleich**: Was man an Kraft gewinnt, verliert man an Weg.
> ```
> F₁ · s₁ = F₂ · s₂
> ```

### 📐 Lehrbeispiel – Hydraulischer Wagenheber

Kleiner Kolben **A₁ = 5 cm²**, großer **A₂ = 250 cm²**, Handkraft **F₁ = 200 N**.

```
F₂ = F₁ · A₂/A₁ = 200 · 250/5 = 10 000 N = 10 kN
```

**Um den großen Kolben 2 cm anzuheben:**
```
s₁ = s₂ · A₂/A₁ = 2 · 50 = 100 cm = 1,00 m
```

Man muss also **1 m** pumpen, um **2 cm** zu heben – dafür mit 50-fach kleinerer Kraft.

**Arbeitskontrolle:**
```
W₁ = 200 · 1,00 = 200 J
W₂ = 10 000 · 0,02 = 200 J ✓
```

### 🏗️ Bau-Beispiel – Baggerzylinder

Ein Hydraulikzylinder hat einen **Kolben von 100 mm** Durchmesser und eine **Kolbenstange von 56 mm**. Der Betriebsdruck beträgt **250 bar = 250·10⁵ Pa**.

**Ausfahren** – der Druck wirkt auf die volle Kolbenfläche:
```
A₁ = π · d²/4 = π · 0,100²/4 = 0,007854 m²
F = p · A₁ = 25 000 000 · 0,007854 = 196 350 N ≈ 19,6 kN
```

**Einfahren** – auf der Stangenseite fehlt die Fläche der Kolbenstange, es bleibt die **Ringfläche**:
```
A₂ = π/4 · (D² − d²) = π/4 · (0,100² − 0,056²) = π/4 · (0,01 − 0,003136) = 0,005391 m²
F = 25 000 000 · 0,005391 = 134 775 N ≈ 13,5 kN
```

> ### 💡 Deshalb drückt ein Bagger stärker, als er zieht
> Beim Einfahren stehen nur **69 %** der Kraft zur Verfügung. Ein Bagger reißt deshalb mit der Löffelbewegung „zu sich hin" – da fahren die Zylinder aus. Wer die Bewegungsrichtung eines Zylinders kennt, weiß auch, wo seine Kraft liegt.

### 🏗️ Bau-Beispiel – Raupe oder Räder?

Warum stehen Bagger auf Ketten? Ein Gerät von **180 kN** Gewicht:

| | Aufstandsfläche | Bodenpressung |
|---|---|---|
| **Raupenfahrwerk** 2 Ketten je 3,20 m × 0,60 m | 3,84 m² | p = 180 / 3,84 = **46,9 kN/m²** |
| **Radfahrwerk** 4 Reifen je 0,35 m × 0,25 m Aufstandsfläche | 0,35 m² | p = 180 / 0,35 = **514,3 kN/m²** |

Die Raupe erzeugt gut **ein Elftel** des Drucks. Auf weichem Boden trägt nur sie – ein Radgerät gräbt sich ein. Dieselbe Formel p = F/A entscheidet später über die Größe jedes Fundaments.

### 🏗️ Bau-Beispiel – Baggerzylinder (Grundfall)

Ein Hydraulikzylinder hat **d = 100 mm** Kolbendurchmesser, Betriebsdruck **250 bar**.

```
A = π · (0,05)² = 0,007854 m²
p = 250 bar = 25 000 000 Pa

F = p · A = 25 000 000 · 0,007854 = 196 350 N ≈ 196 kN
```

Das entspricht rund **20 Tonnen** Druckkraft – aus einem Zylinder von 10 cm Durchmesser.

---

## 6.4 Der Auftrieb

> ### 💡 Das Archimedische Prinzip
> Ein eingetauchter Körper erfährt eine **Auftriebskraft**, die so groß ist wie die **Gewichtskraft der verdrängten Flüssigkeit**.
> ```
> F_A = ρ_Flüssigkeit · g · V_verdrängt
> ```

### Schwimmen, Schweben, Sinken

| Bedingung | Verhalten |
|-----------|-----------|
| F_A > F_G | Körper **steigt** / schwimmt auf |
| F_A = F_G | Körper **schwebt** |
| F_A < F_G | Körper **sinkt** |

### 🏗️ Bau-Beispiel – Auftrieb einer weißen Wanne

Ein Kellergeschoss ist **12,00 m × 8,00 m** groß und taucht **2,50 m** ins Grundwasser ein.

**Auftriebskraft:**
```
V_verdrängt = 12,00 · 8,00 · 2,50 = 240 m³
F_A = 1000 · 9,81 · 240 = 2 354 400 N ≈ 2354 kN ≈ 240 t
```

**Bewertung:** Das Gebäude muss mindestens **240 t** wiegen, sonst wird es vom Grundwasser **angehoben** – die berüchtigte „aufschwimmende Wanne".

### 🏗️ Bau-Beispiel – Auftriebsnachweis vollständig gerechnet

So sieht der Nachweis in der Praxis aus. Eine Kellerwanne ist **12,00 m × 9,00 m** groß, taucht **1,80 m** ins Grundwasser ein und besteht aus einer **30 cm** dicken Bodenplatte und **30 cm** dicken Wänden von **2,20 m** Höhe (Beton 24 kN/m³).

**Schritt 1 – Auftriebskraft (was hochdrückt):**
```
V_verdrängt = 12,00 · 9,00 · 1,80 = 194,4 m³
F_A = ρ · g · V = 1000 · 9,81 · 194,4 = 1 907 064 N ≈ 1907 kN
```

**Schritt 2 – Eigengewicht (was dagegenhält):**
```
Bodenplatte:  12,00 · 9,00 · 0,30            = 32,40 m³
Wände:        2 · (12,00 + 9,00) · 2,20 · 0,30 = 27,72 m³
Summe                                        = 60,12 m³
G = 60,12 · 24 = 1442,9 kN
```

**Schritt 3 – Nachweis:**
```
η = G / F_A = 1442,9 / 1907,1 = 0,76
```

**Das reicht nicht.** Gefordert ist mindestens η ≥ 1,05, meist η ≥ 1,10. Die Wanne würde **aufschwimmen**.

> ### 🏗️ Was der Bautechniker daraus macht
> Drei Wege führen aus dem Problem:
> 1. **Mehr Gewicht** – dickere Bodenplatte oder das Gewicht der darüberliegenden Geschosse mitrechnen (meist reicht schon ein Obergeschoss).
> 2. **Verankerung** – Zugpfähle oder Verpressanker binden die Wanne im Baugrund fest.
> 3. **Grundwasser absenken** – nur als Bauzustand, nicht auf Dauer.
>
> Kritisch ist fast immer der **Bauzustand**: Die Wanne steht schon, die aufgehenden Geschosse fehlen noch. Genau in diesem Fenster schwimmen Wannen auf – bei einem Starkregen über Nacht.

> ### ⚠️ Die zwei Fehler beim Auftriebsnachweis
> **Erstens:** Nicht das Volumen des Betons zählt für den Auftrieb, sondern das **verdrängte Volumen** – also der gesamte eingetauchte Baukörper einschließlich des Hohlraums darin.
> **Zweitens:** Für die Eintauchtiefe ist der **höchste anzunehmende Grundwasserstand** maßgebend, nicht der Stand am Tag der Baugrunduntersuchung.

> ### ⚠️ Ein echtes Bauschadensrisiko
> Bei Kellern in Grundwasser wird die **Auftriebssicherheit** nachgewiesen:
> ```
> η = G / F_A ≥ 1,1
> ```
> Reicht das Eigengewicht nicht, braucht es Ballast, Verankerung oder eine Grundwasserabsenkung.

---

## 6.5 Eigenschaften der Gase

### Der Unterschied zu Flüssigkeiten

| | Flüssigkeit | Gas |
|--|-------------|-----|
| **Volumen** | praktisch konstant | veränderlich |
| **Kompressibilität** | fast **nicht** komprimierbar | **stark** komprimierbar |
| **Form** | passt sich an | füllt den Raum vollständig |

### Die Zustandsgleichung

> ### 💡 Allgemeine Zustandsgleichung des idealen Gases
> ```
> p · V / T = konstant
> ```
> bzw.
> ```
> p₁ · V₁ / T₁ = p₂ · V₂ / T₂
> ```
> ⚠️ **T immer in Kelvin!**

*(Die drei Sonderfälle – isobar, isochor, isotherm – werden in LM2 K1 ausführlich behandelt.)*

### 🏗️ Bau-Beispiel – Druckluft auf der Baustelle

Ein Kompressor füllt einen **50-l-Behälter** auf **8 bar** (Überdruck), also **9 bar** absolut.

**Welches Volumen hätte diese Luft bei Normaldruck (1 bar)?**
```
p₁V₁ = p₂V₂      (bei konstanter Temperatur)
9 · 50 = 1 · V₂
V₂ = 450 l
```

Im Behälter stecken also **450 Liter** Luft von Normaldruck.

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Druck
**1.1** F = 45 kN, A = 0,6 m² → p? **1.2** p = 2,5 bar in Pa und N/mm²? **1.3** p = 12 N/mm² in bar?

<details><summary>Lösung anzeigen</summary>

**1.1** p = 45 000/0,6 = **75 000 Pa = 75 kPa**
**1.2** 2,5 bar = **250 000 Pa = 0,25 N/mm²**
**1.3** 12 N/mm² = **120 bar**
</details>

### Aufgabe 2 · Schweredruck
**2.1** Wassertiefe 6,0 m → p? **2.2** Welche Tiefe für 1 bar? **2.3** p bei 3,5 m Öl (ρ = 900 kg/m³)?

<details><summary>Lösung anzeigen</summary>

**2.1** p = 1000 · 9,81 · 6,0 = **58 860 Pa ≈ 0,59 bar**
**2.2** h = 100 000/(1000·9,81) = **10,2 m**
**2.3** p = 900 · 9,81 · 3,5 = **30 902 Pa ≈ 0,31 bar**
</details>

### Aufgabe 3 · Hydraulik
A₁ = 4 cm², A₂ = 200 cm², F₁ = 150 N.
**3.1** F₂? **3.2** Weg s₁ für s₂ = 3 cm? **3.3** Arbeitskontrolle.

<details><summary>Lösung anzeigen</summary>

**3.1** F₂ = 150 · 200/4 = **7500 N**
**3.2** s₁ = 3 · 200/4 = **150 cm = 1,50 m**
**3.3** W₁ = 150 · 1,50 = 225 J; W₂ = 7500 · 0,03 = 225 J ✓
</details>

### Aufgabe 4 · Auftrieb
Ein Körper verdrängt **0,35 m³** Wasser.

<details><summary>Lösung anzeigen</summary>

```
F_A = 1000 · 9,81 · 0,35 = 3433,5 N ≈ 3,43 kN
```
</details>

### 🏗️ Aufgabe 5 · Bodenpressung Baumaschine
Ein Radlader (**14 t**) hat 4 Räder mit je **0,12 m²** Aufstandsfläche.
**5.1** Bodenpressung? **5.2** Mit Ketten (gesamt 3,2 m²)?

<details><summary>Lösung anzeigen</summary>

```
F = 14 000 · 9,81 = 137 340 N
5.1  A = 4 · 0,12 = 0,48 m² → p = 137 340/0,48 = 286 125 Pa ≈ 286 kPa
5.2  p = 137 340/3,2 = 42 919 Pa ≈ 43 kPa
```
Ketten reduzieren die Pressung auf etwa **ein Siebtel**.
</details>

### 🏗️ Aufgabe 6 · Kellerwand
Wand **3,00 m** hoch, **5,00 m** lang, Grundwasser bis Oberkante.
**6.1** Druck am Fuß? **6.2** Resultierende Kraft?

<details><summary>Lösung anzeigen</summary>

**6.1** p = 1000 · 9,81 · 3,00 = **29 430 Pa ≈ 29,4 kPa**
**6.2**
```
F = ρ·g·(h/2)·A = 1000 · 9,81 · 1,50 · (3,00 · 5,00)
  = 14 715 · 15,00 = 220 725 N ≈ 221 kN
```
</details>

### 🏗️ Aufgabe 7 · Auftriebssicherheit
Ein Keller **15,00 m × 10,00 m** taucht **2,00 m** ins Grundwasser. Gebäudegewicht **3200 kN**.
**7.1** Auftriebskraft? **7.2** Sicherheit? **7.3** Ausreichend (η ≥ 1,1)?

<details><summary>Lösung anzeigen</summary>

**7.1**
```
V = 15,00 · 10,00 · 2,00 = 300 m³
F_A = 1000 · 9,81 · 300 = 2 943 000 N = 2943 kN
```
**7.2** η = 3200/2943 = **1,087**
**7.3** 1,087 < 1,1 → **knapp nicht ausreichend** – Maßnahmen erforderlich (Ballast, Verankerung).
</details>

### 🏗️ Aufgabe 8 · Hydraulikzylinder
Zylinder **d = 80 mm**, Betriebsdruck **200 bar**.

<details><summary>Lösung anzeigen</summary>

```
A = π · 0,04² = 0,005027 m²
p = 20 000 000 Pa
F = 20 000 000 · 0,005027 = 100 540 N ≈ 100,5 kN  (≈ 10 t)
```
</details>

---

### 🏗️ Aufgabe 9 · Auftriebsnachweis
Eine Kellerwanne ist **10,00 m × 7,00 m** groß und taucht **1,60 m** ins Grundwasser. Bodenplatte **35 cm**, Wände **35 cm** dick und **2,00 m** hoch, Beton 24 kN/m³.
**9.1** Auftriebskraft? **9.2** Eigengewicht? **9.3** Ist η ≥ 1,05 erfüllt? **9.4** Wann ist der Zustand am kritischsten?

<details><summary>Lösung anzeigen</summary>

**9.1** V = 10,00 · 7,00 · 1,60 = 112,0 m³ → F_A = 1000 · 9,81 · 112,0 = 1 098 720 N = **1098,7 kN**
**9.2** Bodenplatte 10,00 · 7,00 · 0,35 = 24,50 m³ · Wände 2 · (10,00 + 7,00) · 2,00 · 0,35 = 23,80 m³ · Summe 48,30 m³
G = 48,30 · 24 = **1159,2 kN**
**9.3** η = 1159,2 / 1098,7 = **1,055 ≥ 1,05 ✓** – gerade eben erfüllt, ohne jede Reserve.
**9.4** Im **Bauzustand**, solange die aufgehenden Geschosse noch fehlen und ihr Gewicht nicht mitwirkt.
</details>

### 🏗️ Aufgabe 10 · Hydraulikzylinder
Ein Zylinder hat **D = 80 mm** Kolben- und **d = 45 mm** Stangendurchmesser bei **180 bar**.
**10.1** Kraft beim Ausfahren? **10.2** Kraft beim Einfahren? **10.3** Wie viel Prozent bleiben beim Einfahren?

<details><summary>Lösung anzeigen</summary>

**10.1** A₁ = π · 0,080²/4 = 0,005027 m² → F = 18 000 000 · 0,005027 = **90 480 N ≈ 90,5 kN**
**10.2** A₂ = π/4 · (0,080² − 0,045²) = π/4 · (0,0064 − 0,002025) = 0,003436 m² → F = **61 850 N ≈ 61,9 kN**
**10.3** 61,85 / 90,48 = **68,4 %** – die Kolbenstange nimmt gut ein Drittel der Fläche weg.
</details>

### 🏗️ Aufgabe 11 · Raupe gegen Rad
Ein Gerät wiegt **240 kN**. Raupenfahrwerk: 2 Ketten je 3,50 m × 0,70 m. Radfahrwerk: 4 Reifen mit je 0,40 m × 0,30 m Aufstandsfläche.
**11.1** Bodenpressung mit Raupe? **11.2** Mit Rädern? **11.3** Der Baugrund verträgt 120 kN/m² – welches Fahrwerk geht?

<details><summary>Lösung anzeigen</summary>

**11.1** A = 2 · 3,50 · 0,70 = 4,90 m² → p = 240 / 4,90 = **48,98 kN/m²**
**11.2** A = 4 · 0,40 · 0,30 = 0,48 m² → p = 240 / 0,48 = **500,0 kN/m²**
**11.3** Nur die **Raupe**: 48,98 < 120 ✓. Das Radgerät überschreitet die zulässige Pressung um mehr als das Vierfache und würde einsinken.
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich kenne **p = F/A** und die Umrechnungen (1 bar = 10⁵ Pa, 1 N/mm² = 10 bar).
- [ ] Ich berechne den **Schweredruck** p = ρ·g·h.
- [ ] Ich weiß, dass der Schweredruck **nur von der Höhe** abhängt (hydrostatisches Paradoxon).
- [ ] Ich kenne die Faustregel **10 m Wasser ≈ 1 bar**.
- [ ] Ich berechne die **Wasserdruckkraft** auf eine Wand (mit h/2!).
- [ ] Ich beherrsche die **hydraulische Kraftübersetzung** – Kraft **und** Weg.
- [ ] Ich kenne das **Archimedische Prinzip** und kann die **Auftriebssicherheit** nachweisen.
- [ ] Ich kenne den Unterschied zwischen Flüssigkeiten (inkompressibel) und Gasen (kompressibel).

**Damit ist Naturwissenschaft LM1 abgeschlossen.**
**Nächstes Modul:** NaWi LM2 – Wärmelehre
