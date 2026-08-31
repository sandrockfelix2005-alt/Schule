# Naturwissenschaft · Lernmodul 1 · Kapitel 4
# Bewegungen fester Körper

> **Lernkapitel zum Selbststudium.** Quelle: DAA Naturwissenschaft, Lernmodul 1, Kapitel 2.4 und 2.5 · **Zeitaufwand: ca. 5–6 Stunden**

**Was du am Ende können musst**
- **Gleichförmige** und **beschleunigte** Bewegungen unterscheiden und berechnen.
- Die Formeln für den **freien Fall** anwenden.
- **Kreisbewegungen** berechnen (Drehzahl, Umfangsgeschwindigkeit, Frequenz).
- Die **Newtonschen Axiome** erklären.

**Inhalt:** [4.1 Gleichförmige Bewegung](#41-die-gleichförmige-bewegung) · [4.2 Beschleunigte Bewegung](#42-die-gleichmäßig-beschleunigte-bewegung) · [4.3 Freier Fall](#43-der-freie-fall) · [4.4 Kreisbewegung](#44-die-kreisbewegung) · [4.5 Newton](#45-die-newtonschen-axiome) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## 4.1 Die gleichförmige Bewegung

> ### 💡 Definition
> Bei der **gleichförmigen Bewegung** ist die Geschwindigkeit **konstant** – in gleichen Zeiten werden gleiche Wege zurückgelegt.
> ```
> v = s / t
> ```
> Umgestellt: **s = v · t**  und  **t = s / v**

### Die Umrechnung km/h ↔ m/s

> ### 💡 Merke
> ```
> 1 m/s = 3,6 km/h
> ```
> **von m/s nach km/h:** mal 3,6
> **von km/h nach m/s:** durch 3,6

**Herleitung:** 1 m/s = 1 m / 1 s = 0,001 km / (1/3600 h) = 3,6 km/h

### 📐 Lehrbeispiel

Ein Fahrzeug legt **900 m** in **60 s** zurück.
```
v = 900 / 60 = 15 m/s = 15 · 3,6 = 54 km/h
```

### 🏗️ Bau-Beispiel – Förderleistung

Ein Förderband läuft mit **0,8 m/s** und ist **45 m** lang.
```
Transportzeit: t = 45 / 0,8 = 56,25 s
```

Bei einer Beladung von 25 kg/m Band:
```
Massenstrom = 0,8 m/s · 25 kg/m = 20 kg/s = 72 t/h
```

---

## 4.2 Die gleichmäßig beschleunigte Bewegung

> ### 💡 Definition
> Bei **gleichmäßiger Beschleunigung** ändert sich die Geschwindigkeit gleichmäßig.
> ```
> a = Δv / Δt = (v₂ − v₁) / (t₂ − t₁)
> ```
> Einheit: **m/s²**

### Die vier Grundformeln (aus dem Stand)

> ### 💡 Bewegung aus der Ruhe (v₀ = 0)
> ```
> v = a · t
> s = ½ · a · t²
> v = √(2 · a · s)
> s = v² / (2a)
> ```

### Mit Anfangsgeschwindigkeit

```
v = v₀ + a · t
s = v₀ · t + ½ · a · t²
v² = v₀² + 2 · a · s
```

> ### 💡 Bremsen ist negative Beschleunigung
> Beim Abbremsen ist **a negativ** (Verzögerung). Alle Formeln gelten weiter – man setzt einfach ein negatives a ein.

### So gehst du vor

1. Alle **gegebenen Größen** auflisten (mit Einheiten!).
2. Prüfen: **Aus dem Stand** oder mit Anfangsgeschwindigkeit?
3. Formel wählen, in der **nur die gesuchte Größe unbekannt** ist.
4. Einsetzen, rechnen, Einheitenkontrolle.

### 📐 Lehrbeispiel 1

Ein Auto beschleunigt aus dem Stand in **8 s** auf **20 m/s**.

| Gesucht | Formel | Rechnung |
|---------|--------|----------|
| Beschleunigung | a = v/t | a = 20/8 = **2,5 m/s²** |
| Weg | s = ½·a·t² | s = ½ · 2,5 · 64 = **80 m** |

**Kontrolle über eine andere Formel:**
```
s = v²/(2a) = 400/(2·2,5) = 400/5 = 80 m ✓
```

### 📐 Lehrbeispiel 2 – Bremsweg

Ein Fahrzeug fährt **72 km/h** und bremst mit **a = −5 m/s²**. Wie lang ist der Bremsweg?

```
v₀ = 72 : 3,6 = 20 m/s
v = 0 (Stillstand)

v² = v₀² + 2·a·s
0 = 400 + 2·(−5)·s
10s = 400
s = 40 m
```

### Der Anhalteweg – was in der Praxis wirklich zählt

Der Bremsweg ist nur der halbe Vorgang. Bis der Fuß überhaupt auf dem Pedal ist, fährt das Fahrzeug **ungebremst weiter**. Dieser Teil heißt **Reaktionsweg**:

```
s_Reaktion = v · t_Reaktion          (gleichförmige Bewegung!)
s_Brems    = v² / (2 · a)
s_Anhalte  = s_Reaktion + s_Brems
```

Als Reaktionszeit rechnet man üblicherweise mit **1,0 s**.

### 📐 Lehrbeispiel – Anhalteweg auf der Baustelle

Ein Radlader fährt **30 km/h** und bremst mit **4,5 m/s²**. Reaktionszeit 1,0 s.

```
v = 30 : 3,6 = 8,333 m/s

Reaktionsweg:  s₁ = 8,333 · 1,0 = 8,33 m
Bremsweg:      s₂ = 8,333² / (2 · 4,5) = 69,44 / 9 = 7,72 m
Anhalteweg:    s  = 8,33 + 7,72 = 16,05 m
```

> ### ⚠️ Der Bremsweg wächst im Quadrat
> Bei **50 km/h** statt 30 km/h wird derselbe Radlader erst nach **35,3 m** stehen: Reaktionsweg 13,89 m plus Bremsweg 21,43 m. Die Geschwindigkeit steigt um zwei Drittel – der Anhalteweg **verdoppelt sich mehr als**. Genau deshalb gilt auf Baustellen Schrittgeschwindigkeit: Bei 7 km/h beträgt der Anhalteweg noch etwa 2,3 m.

<div class="viz" data-viz="anhalteweg"></div>

### Bewegungen im Diagramm lesen

In der Klausur bekommst du Bewegungen oft als **Diagramm** statt als Zahlen. Zwei Formen musst du unterscheiden:

| | **s-t-Diagramm** (Weg über Zeit) | **v-t-Diagramm** (Geschwindigkeit über Zeit) |
|---|---|---|
| **waagerechte Linie** | Stillstand | konstante Geschwindigkeit |
| **ansteigende Gerade** | gleichförmige Fahrt | gleichmäßige Beschleunigung |
| **Steigung bedeutet** | die Geschwindigkeit v | die Beschleunigung a |
| **Fläche darunter** | (ohne Bedeutung) | den **zurückgelegten Weg** |
| **gekrümmte Kurve** | beschleunigte Bewegung | ungleichmäßige Beschleunigung |

> ### 💡 Die zwei Merksätze
> Im **v-t-Diagramm** ist die **Fläche unter der Kurve der Weg**. Bei einer Beschleunigung aus dem Stand ist diese Fläche ein Dreieck: A = ½ · Grundseite · Höhe = ½ · t · v – und genau das ist die Formel s = ½ · v · t.
> Die **Steigung** ist jeweils die Ableitung: im s-t-Diagramm die Geschwindigkeit, im v-t-Diagramm die Beschleunigung.

**Beispiel:** Ein Aufzug fährt laut v-t-Diagramm 4 s lang gleichmäßig auf 2,5 m/s hoch, hält diese Geschwindigkeit 10 s und bremst in 2 s wieder auf null.

```
Anfahren:      Dreieck   ½ · 4 · 2,5   =  5,0 m
Gleichförmig:  Rechteck  10 · 2,5      = 25,0 m
Bremsen:       Dreieck   ½ · 2 · 2,5   =  2,5 m
                                  ────────────
Gesamthöhe                            = 32,5 m
```
Ohne eine einzige Bewegungsformel – nur über Flächen.

### 🏗️ Bau-Beispiel – Aufzug

Ein Bauaufzug beschleunigt in **3,0 s** auf **1,2 m/s**, fährt dann gleichförmig und bremst in **3,0 s** ab. Gesamthöhe **24,0 m**.

```
Beschleunigung: a = 1,2 / 3,0 = 0,4 m/s²

Weg beim Anfahren:  s₁ = ½ · 0,4 · 3,0² = 1,8 m
Weg beim Bremsen:   s₃ = 1,8 m (symmetrisch)
Weg gleichförmig:   s₂ = 24,0 − 1,8 − 1,8 = 20,4 m
Zeit gleichförmig:  t₂ = 20,4 / 1,2 = 17,0 s

Gesamtzeit: t = 3,0 + 17,0 + 3,0 = 23,0 s
```

---

<div class="viz" data-viz="vtdiagramm"></div>

## 4.3 Der freie Fall

Der freie Fall ist eine **gleichmäßig beschleunigte Bewegung** mit der **Erdbeschleunigung**:
```
g ≈ 9,81 m/s²
```

> ### 💡 Die Fallformeln
> ```
> v = g · t
> h = ½ · g · t²
> v = √(2 · g · h)
> t = √(2h / g)
> ```

> ### 💡 Das überraschende Ergebnis
> **Alle Körper fallen gleich schnell** – unabhängig von ihrer Masse (wenn man den Luftwiderstand vernachlässigt). Ein Ziegelstein und eine Schraube fallen aus 10 m Höhe gleich lange.

### 📐 Lehrbeispiel

Ein Werkzeug fällt aus **12 m** Höhe.

```
Aufprallgeschwindigkeit: v = √(2 · 9,81 · 12) = √235,44 = 15,34 m/s
In km/h:                 15,34 · 3,6 = 55,2 km/h
Fallzeit:                t = √(2 · 12 / 9,81) = √2,446 = 1,56 s
```

### 🏗️ Bau-Beispiel – Warum Absturzsicherung so wichtig ist

| Fallhöhe | Aufprallgeschwindigkeit | in km/h |
|---------:|------------------------:|--------:|
| 1 m | 4,43 m/s | 16 km/h |
| 3 m | 7,67 m/s | 28 km/h |
| **5 m** | **9,90 m/s** | **36 km/h** |
| 10 m | 14,01 m/s | 50 km/h |
| 20 m | 19,81 m/s | 71 km/h |

> ### ⚠️ Arbeitssicherheit
> Ein aus **5 m** Höhe fallender Gegenstand schlägt mit **36 km/h** auf – so, als würde er von einem fahrenden Auto getroffen. Deshalb:
> - **Helmpflicht** auf jeder Baustelle
> - Schutznetze und Fangvorrichtungen
> - Absperrung von Gefahrbereichen
>
> Die Rechnung zeigt: Es geht nicht um Vorschrift-Bürokratie, sondern um Physik.

---

## 4.4 Die Kreisbewegung

> ### 💡 Die Größen der Kreisbewegung
> | Größe | Formel | Einheit |
> |-------|--------|---------|
> | **Drehzahl** n | n = u / t (Umdrehungen je Zeit) | 1/s oder 1/min |
> | **Umlaufzeit** T | T = 1 / n | s |
> | **Frequenz** f | f = 1 / T = n | **Hz** (1 Hz = 1 s⁻¹) |
> | **Umfangsgeschwindigkeit** v | v = π · d · n = 2π · r · n | m/s |
> | **Winkelgeschwindigkeit** ω | ω = 2π · f = φ / t | 1/s |
> | **Bahngeschwindigkeit** | v = ω · r | m/s |

### 📐 Lehrbeispiel

Eine Scheibe mit **d = 0,40 m** dreht sich mit **n = 300 min⁻¹**.

| Schritt | Rechnung |
|---------|----------|
| Drehzahl in 1/s | n = 300/60 = **5 s⁻¹** |
| Umfangsgeschwindigkeit | v = π · 0,40 · 5 = **6,28 m/s** |
| Umlaufzeit | T = 1/5 = **0,2 s** |
| Winkelgeschwindigkeit | ω = 2π · 5 = **31,4 s⁻¹** |

### 🏗️ Bau-Beispiel – Betonmischer

Eine Mischtrommel (**d = 1,80 m**) dreht mit **12 min⁻¹**.

```
n = 12/60 = 0,2 s⁻¹
v = π · 1,80 · 0,2 = 1,13 m/s
```

Die Außenkante bewegt sich mit **1,13 m/s** (≈ 4 km/h).

### 🏗️ Bau-Beispiel – Trennscheibe

Eine Trennscheibe (**d = 350 mm**) läuft mit **4400 min⁻¹**.

```
n = 4400/60 = 73,33 s⁻¹
v = π · 0,350 · 73,33 = 80,6 m/s
```

> **Sicherheitsrelevanz:** Trennscheiben haben eine aufgedruckte **maximale Umfangsgeschwindigkeit** (meist 80 m/s). Wird sie überschritten, kann die Scheibe bersten. Deshalb darf man eine Scheibe nie auf einer Maschine mit zu hoher Drehzahl verwenden.

Zum Vergleich: 80,6 m/s sind **290 km/h**. Bei diesem Tempo verlässt ein abgeplatztes Bruchstück die Maschine – deshalb ist die Schutzhaube keine Empfehlung, sondern die einzige Barriere.

### 🏗️ Bau-Beispiel – Förderleistung eines Bandes

Ein Förderband läuft mit **1,6 m/s**. Der Materialquerschnitt auf dem Band beträgt **0,040 m²**. Welche Leistung hat es?

```
Volumenstrom = Querschnitt · Geschwindigkeit
V̇ = 0,040 · 1,6 = 0,064 m³/s
Je Stunde: 0,064 · 3600 = 230,4 m³/h
```

Bei einer Schüttdichte von 1800 kg/m³ sind das 230,4 · 1,8 = **414,7 t/h**. Dieselbe Überlegung – Querschnitt mal Geschwindigkeit – brauchst du später bei jeder Rohrleitung und jedem Kanal wieder.

### 🏗️ Bau-Beispiel – Warum ein Kranhaken pendelt

Der Kran fährt die Katze mit **0,8 m/s** und stoppt. Die Last hängt an einem **12 m** langen Seil. Weil sie träge ist (1. Axiom), bewegt sie sich mit 0,8 m/s weiter und schwingt aus – wie ein Pendel.

Die Schwingungsdauer eines Pendels hängt nur von der Seillänge ab, **nicht von der Last**:
```
T = 2π · √(l/g) = 2π · √(12/9,81) = 2π · 1,106 = 6,95 s
```
Ein 12-m-Seil pendelt also mit knapp **7 Sekunden** Periode – langsam, aber mit großem Ausschlag. Deshalb wird sanft angefahren und sanft gestoppt: Jeder Ruck erzeugt einen Pendelschlag, der sich nicht abschütteln lässt.

*(Die Pendelformel steht nicht in deinem Modul – sie erklärt hier nur, warum das Trägheitsgesetz auf der Baustelle so sichtbar wird.)*

---

## 4.5 Die Newtonschen Axiome

### Die Trägheit

> ### 💡 Definition
> Die **Trägheit** ist die Eigenschaft eines Körpers, seinen Bewegungszustand beizubehalten. Ihr **Maß ist die Masse m**.

### Die drei Axiome

> ### 💡 1. Newtonsches Axiom – Trägheitsgesetz
> Ein Körper bleibt **in Ruhe** oder in **gleichförmiger geradliniger Bewegung**, solange keine resultierende Kraft auf ihn wirkt.
>
> *(Ohne Kraft keine Änderung.)*

> ### 💡 2. Newtonsches Axiom – Grundgesetz der Mechanik
> ```
> F = m · a
> ```
> Die Beschleunigung ist **proportional zur Kraft** und **umgekehrt proportional zur Masse**.

> ### 💡 3. Newtonsches Axiom – Wechselwirkungsgesetz
> **actio = reactio**
> Kräfte treten immer **paarweise** auf: gleich groß, entgegengesetzt gerichtet, an verschiedenen Körpern.

### 🏗️ Bau-Bezug der Axiome

| Axiom | Beispiel im Bau |
|-------|-----------------|
| **1. Trägheit** | Beim Bremsen eines Kranhakens schwingt die Last weiter – Pendeln |
| **2. F = m·a** | Rammarbeiten: große Masse × Beschleunigung = große Kraft |
| **3. actio = reactio** | Eine Stütze drückt auf das Fundament, das Fundament drückt mit gleicher Kraft zurück |

> ### 💡 Das 3. Axiom in der Statik
> Genau darauf beruhen die **Auflagerkräfte**: Der Träger drückt auf das Auflager (actio), das Auflager drückt mit derselben Kraft zurück (reactio). Ohne dieses Prinzip gäbe es keine Statik.

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Gleichförmige Bewegung
**1.1** 1200 m in 80 s → v in m/s und km/h? **1.2** v = 15 m/s, t = 40 s → s? **1.3** s = 500 m, v = 25 km/h → t?

<details><summary>Lösung anzeigen</summary>

**1.1** v = 1200/80 = **15 m/s = 54 km/h**
**1.2** s = 15 · 40 = **600 m**
**1.3** v = 25/3,6 = 6,944 m/s → t = 500/6,944 = **72,0 s**
</details>

### Aufgabe 2 · Umrechnungen
**2.1** 90 km/h in m/s · **2.2** 12 m/s in km/h · **2.3** 5 km/h in m/s

<details><summary>Lösung anzeigen</summary>

**2.1** 90/3,6 = **25 m/s**
**2.2** 12 · 3,6 = **43,2 km/h**
**2.3** 5/3,6 = **1,39 m/s**
</details>

### Aufgabe 3 · Beschleunigung
Aus dem Stand in **10 s** auf **25 m/s**.
**3.1** a? **3.2** Weg? **3.3** Kontrolle über v²-Formel.

<details><summary>Lösung anzeigen</summary>

**3.1** a = 25/10 = **2,5 m/s²**
**3.2** s = ½ · 2,5 · 100 = **125 m**
**3.3** s = v²/(2a) = 625/5 = **125 m** ✓
</details>

### Aufgabe 4 · Bremsweg
**54 km/h**, Verzögerung **a = −4 m/s²**.
**4.1** Bremsweg? **4.2** Bremszeit?

<details><summary>Lösung anzeigen</summary>

```
v₀ = 54/3,6 = 15 m/s
4.1  s = v₀²/(2a) = 225/8 = 28,13 m
4.2  t = v₀/a = 15/4 = 3,75 s
```
</details>

### Aufgabe 5 · Freier Fall
Fallhöhe **20 m**.
**5.1** Aufprallgeschwindigkeit? **5.2** In km/h? **5.3** Fallzeit?

<details><summary>Lösung anzeigen</summary>

**5.1** v = √(2·9,81·20) = √392,4 = **19,81 m/s**
**5.2** 19,81 · 3,6 = **71,3 km/h**
**5.3** t = √(2·20/9,81) = √4,077 = **2,02 s**
</details>

### Aufgabe 6 · Kreisbewegung
Scheibe **d = 0,60 m**, **n = 450 min⁻¹**.
**6.1** n in 1/s? **6.2** Umfangsgeschwindigkeit? **6.3** Umlaufzeit? **6.4** ω?

<details><summary>Lösung anzeigen</summary>

**6.1** n = 450/60 = **7,5 s⁻¹**
**6.2** v = π · 0,60 · 7,5 = **14,14 m/s**
**6.3** T = 1/7,5 = **0,133 s**
**6.4** ω = 2π · 7,5 = **47,1 s⁻¹**
</details>

### Aufgabe 7 · Newtonsche Axiome
Nenne die drei Axiome und je ein Beispiel aus dem Bau.

<details><summary>Lösung anzeigen</summary>

1. **Trägheitsgesetz** – die Kranlast pendelt beim Abbremsen weiter
2. **F = m · a** – Rammbär: große Masse, große Beschleunigung → große Rammkraft
3. **actio = reactio** – Stütze drückt aufs Fundament, Fundament drückt zurück (Auflagerkraft)
</details>

### 🏗️ Aufgabe 8 · Bauaufzug
Beschleunigung in **2,5 s** auf **1,5 m/s**, dann gleichförmig, Bremsen in **2,5 s**. Gesamthöhe **30 m**.
**8.1** Beschleunigung? **8.2** Wege beim An- und Abfahren? **8.3** Gesamtfahrzeit?

<details><summary>Lösung anzeigen</summary>

**8.1** a = 1,5/2,5 = **0,6 m/s²**
**8.2** s₁ = s₃ = ½ · 0,6 · 6,25 = **1,875 m** je Phase
**8.3**
```
s₂ = 30 − 2 · 1,875 = 26,25 m
t₂ = 26,25 / 1,5 = 17,5 s
t_ges = 2,5 + 17,5 + 2,5 = 22,5 s
```
</details>

### 🏗️ Aufgabe 9 · Absturzhöhen
Berechne die Aufprallgeschwindigkeit (in km/h) für **9.1** 2 m · **9.2** 8 m · **9.3** 15 m.

<details><summary>Lösung anzeigen</summary>

**9.1** v = √(2·9,81·2) = 6,26 m/s = **22,5 km/h**
**9.2** v = √(2·9,81·8) = 12,53 m/s = **45,1 km/h**
**9.3** v = √(2·9,81·15) = 17,15 m/s = **61,8 km/h**
</details>

### 🏗️ Aufgabe 10 · Trennscheibe
Scheibe **d = 300 mm**, zulässige Umfangsgeschwindigkeit **80 m/s**.
**10.1** Maximale Drehzahl in 1/s? **10.2** In min⁻¹?

<details><summary>Lösung anzeigen</summary>

```
v = π · d · n   →   n = v / (π · d) = 80 / (π · 0,30) = 80 / 0,9425 = 84,88 s⁻¹
```
**10.1** **84,9 s⁻¹**
**10.2** 84,88 · 60 = **5093 min⁻¹**
</details>

---

### 🏗️ Aufgabe 11 · Anhalteweg
Ein Radlader fährt **40 km/h** und bremst mit **4,0 m/s²**. Die Reaktionszeit beträgt 1,0 s.
**11.1** Reaktionsweg? **11.2** Bremsweg? **11.3** Anhalteweg? **11.4** Warum ist auf Baustellen Schrittgeschwindigkeit vorgeschrieben?

<details><summary>Lösung anzeigen</summary>

**11.1** v = 40 : 3,6 = 11,11 m/s → s₁ = 11,11 · 1,0 = **11,11 m**
**11.2** s₂ = v²/(2·a) = 123,46 / 8,0 = **15,43 m**
**11.3** s = 11,11 + 15,43 = **26,54 m**
**11.4** Weil der Bremsweg **im Quadrat** mit der Geschwindigkeit wächst. Bei halber Geschwindigkeit ist er nur noch ein Viertel so lang – und auf einer Baustelle stehen Menschen oft erst im letzten Moment sichtbar hinter Material oder Maschinen.
</details>

### Aufgabe 12 · v-t-Diagramm
Ein Bauaufzug beschleunigt in **5 s** gleichmäßig auf **3,0 m/s**, fährt **8 s** konstant und bremst in **3 s** auf null ab.
**12.1** Welchen Weg legt er insgesamt zurück? **12.2** Wie groß sind Beschleunigung und Verzögerung? **12.3** Was bedeutet die Fläche unter dem v-t-Diagramm?

<details><summary>Lösung anzeigen</summary>

**12.1** Über die Flächen:
Anfahren (Dreieck) ½ · 5 · 3,0 = 7,5 m · gleichförmig (Rechteck) 8 · 3,0 = 24,0 m · Bremsen (Dreieck) ½ · 3 · 3,0 = 4,5 m
Gesamt = 7,5 + 24,0 + 4,5 = **36,0 m**
**12.2** a₁ = 3,0/5 = **0,60 m/s²** · a₃ = −3,0/3 = **−1,0 m/s²**
**12.3** Den **zurückgelegten Weg**. Die Steigung dagegen ist die Beschleunigung.
</details>

### 🏗️ Aufgabe 13 · Betonmischer
Die Mischtrommel (**d = 1,80 m**) dreht sich mit **22 min⁻¹**.
**13.1** Drehzahl in s⁻¹? **13.2** Umfangsgeschwindigkeit? **13.3** Winkelgeschwindigkeit? **13.4** Umlaufdauer?

<details><summary>Lösung anzeigen</summary>

**13.1** n = 22/60 = **0,3667 s⁻¹**
**13.2** v = π · d · n = π · 1,80 · 0,3667 = **2,07 m/s**
**13.3** ω = 2π · n = 2π · 0,3667 = **2,30 s⁻¹** (rad/s)
**13.4** T = 1/n = 1/0,3667 = **2,73 s** je Umdrehung
</details>

### 🏗️ Aufgabe 14 · Förderband
Ein Band läuft mit **1,25 m/s**, der Materialquerschnitt beträgt **0,030 m²**, die Schüttdichte 1,6 t/m³.
**14.1** Volumenstrom in m³/h? **14.2** Massenstrom in t/h? **14.3** Wie lange dauert es, 500 m³ zu fördern?

<details><summary>Lösung anzeigen</summary>

**14.1** V̇ = 0,030 · 1,25 = 0,0375 m³/s → · 3600 = **135,0 m³/h**
**14.2** 135,0 · 1,6 = **216,0 t/h**
**14.3** t = 500 / 135,0 = **3,70 h** ≈ 3 h 42 min
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich kenne **v = s/t** und rechne zwischen **m/s und km/h** um (Faktor 3,6).
- [ ] Ich kenne die Formeln der **beschleunigten Bewegung** (a = Δv/Δt, s = ½at², v = √(2as)).
- [ ] Ich rechne mit **negativer Beschleunigung** beim Bremsen.
- [ ] Ich kenne die **Fallformeln** und weiß, dass die Masse keine Rolle spielt.
- [ ] Ich kann Aufprallgeschwindigkeiten berechnen und deren **Sicherheitsrelevanz** einschätzen.
- [ ] Ich beherrsche die Größen der **Kreisbewegung** (n, T, f, v, ω).
- [ ] Ich kenne die **drei Newtonschen Axiome** und ihre Bedeutung im Bau.

**Nächstes Kapitel:** LM1 Kapitel 5 – Arbeit, Energie und Leistung
