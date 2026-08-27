# Mathematik I · Lernmodul 4 · Kapitel 1
# Planimetrie – Geometrie der Fläche

> **Lernkapitel zum Selbststudium.** Quelle: DAA Mathematik I, Lernmodul 4, Lernbereich 1 · **Zeitaufwand: ca. 6–7 Stunden**

**Was du am Ende können musst**
- **Winkelarten** benennen und Winkelsätze anwenden (Scheitel, Neben, Stufen, Wechsel).
- Die **Grundkonstruktionen** kennen (Mittelsenkrechte, Winkelhalbierende, Thaleskreis).
- Mit **Strahlensätzen** unzugängliche Strecken bestimmen.
- Die **Kongruenzsätze** und besonderen Linien im Dreieck kennen.
- Den **Satz des Pythagoras**, Kathetensatz und Höhensatz anwenden.
- **Flächen und Umfänge** aller Grundfiguren berechnen – auch zusammengesetzte.

**Inhalt:** [1.1 Grundbegriffe & Winkel](#11-grundbegriffe-und-winkel) · [1.2 Konstruktionen](#12-grundkonstruktionen) · [1.3 Ähnlichkeit & Strahlensätze](#13-ähnlichkeit-und-strahlensätze) · [1.4 Das Dreieck](#14-das-dreieck) · [1.5 Pythagoras](#15-das-rechtwinklige-dreieck) · [1.6 Kreis](#16-kreis-und-kreisteile) · [1.7 Flächen](#17-flächen-und-umfangsberechnung) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

Die **Planimetrie** ist die Geometrie der **ebenen Figuren**. Für dich als Bautechniker ist das kein Nebenfach, sondern **tägliches Handwerkszeug**:

| Aufgabe im Bau | Welche Geometrie steckt dahinter |
|----------------|----------------------------------|
| Rechten Winkel abstecken | Pythagoras (3-4-5-Regel), Thaleskreis |
| Aufmaß nach VOB | Flächenberechnung, zusammengesetzte Figuren |
| Unzugängliche Höhe messen | Strahlensätze |
| Grundstück vermessen | Dreiecksflächen, Winkelsätze |
| Dachfläche ermitteln | Rechtwinkliges Dreieck, Trapez |
| Rundschacht, Bogen | Kreis und Kreisteile |
| Bewehrung verlegen | Winkel, Längen, Abstände |

---

## 1.1 Grundbegriffe und Winkel

### Die geometrischen Grundelemente

| Element | Definition | Zeichen |
|---------|-----------|---------|
| **Punkt** | hat **keine Ausdehnung** | großer Buchstabe: A, B, C |
| **Gerade** | unendlich lang in beide Richtungen | kleiner Buchstabe: g, h |
| **Strahl / Halbgerade** | hat **einen** Anfangspunkt, sonst unendlich | |
| **Strecke** | hat **zwei** Endpunkte, endliche Länge | AB |

> ### 💡 Genauigkeit beim Zeichnen (aus dem Modul)
> Ein Punkt hat definitionsgemäß **keine Ausdehnung** – jeder gezeichnete Punkt ist streng genommen schon eine Fläche. Für die Praxis heißt das:
> - mit **hartem, spitzem Bleistift** arbeiten
> - Linien **dünn und genau** ziehen
> - **„schleifende Schnitte" vermeiden** – am genauesten schneiden sich Linien, wenn sie **rechtwinklig** aufeinandertreffen
>
> **Bau-Bezug:** Genau deshalb steckt man auf der Baustelle Achsen möglichst **rechtwinklig** ab. Bei einem flachen Schnittwinkel wirkt sich ein kleiner Zeichen- oder Messfehler viel stärker auf die Lage des Punktes aus.

### Winkelarten

```
    spitz         recht        stumpf       gestreckt
      ╱             │             ╲            
     ╱              │              ╲       ────────
    ╱____        ___│___        ____╲___    
    < 90°          = 90°         > 90°        = 180°
```

| Art | Größe | Beispiel im Bau |
|-----|-------|-----------------|
| **spitzer** Winkel | 0° < α < 90° | Dachneigung, Böschung |
| **rechter** Winkel | α = 90° | Gebäudeecke, Wandanschluss |
| **stumpfer** Winkel | 90° < α < 180° | abgeknickte Wand |
| **gestreckter** Winkel | α = 180° | gerade Linie |
| **überstumpfer** Winkel | 180° < α < 360° | Innenecke bei L-Form |
| **Vollwinkel** | α = 360° | |

### Winkel an sich schneidenden Geraden

Wenn sich zwei Geraden schneiden, entstehen vier Winkel:

```
        β  │  α
     ──────┼──────
        γ  │  δ
```

> ### 💡 Die Winkelsätze
> **Scheitelwinkel** (liegen sich gegenüber) sind **gleich groß**:
> ```
> α = γ    und    β = δ
> ```
> **Nebenwinkel** (liegen nebeneinander) ergänzen sich zu **180°**:
> ```
> α + β = 180°
> ```

### Winkel an parallelen Geraden

Werden zwei **parallele** Geraden g₁ und g₂ von einer dritten Geraden geschnitten, entstehen acht Winkel:

```
           ╱
    β₁ ╱ α₁
  ────╱──────── g₁
     ╱ γ₁  δ₁
    ╱
   ╱ β₂ ╱ α₂
  ────╱──────── g₂
     ╱ γ₂  δ₂
    ╱
```

> ### 💡 Merke (aus dem Modul)
> **An parallelen Geraden sind Stufenwinkel gleich groß.**
> **An parallelen Geraden sind Wechselwinkel gleich groß.**

| Winkelpaar | Lage | Beziehung |
|------------|------|-----------|
| **Stufenwinkel** (gleichliegende Winkel) | gleiche Lage an beiden Parallelen (α₁ und α₂) | **gleich groß** |
| **Wechselwinkel** | über Kreuz zwischen den Parallelen | **gleich groß** |
| **Nachbarwinkel** | auf derselben Seite zwischen den Parallelen | ergänzen sich zu **180°** |

**Begründung:** Parallelen haben immer denselben Abstand und damit dieselbe **Richtung** – deshalb müssen die entsprechenden Winkel übereinstimmen.

### 🏗️ Bau-Beispiel – Dachneigung an zwei Sparren

Zwei parallele Sparren werden von einer Pfette geschnitten. Der Winkel am ersten Sparren beträgt 38°.

Weil die Sparren **parallel** sind, ist der entsprechende **Stufenwinkel** am zweiten Sparren ebenfalls **38°** – man muss ihn nicht neu messen.

> **Praxisnutzen:** Beim Abbund oder beim Ablängen von Bauteilen reicht es, **einen** Winkel zu ermitteln – alle parallelen Bauteile bekommen denselben Schnitt.

---

## 1.2 Grundkonstruktionen

### Ortslinien

Eine **Ortslinie** ist die Menge aller Punkte mit einer bestimmten Eigenschaft.

| Ortslinie | Eigenschaft aller Punkte darauf | Bau-Anwendung |
|-----------|--------------------------------|---------------|
| **Kreis** | gleicher Abstand vom Mittelpunkt | Radius abstecken, Schwenkbereich Kran |
| **Mittelsenkrechte** | gleicher Abstand zu zwei Punkten A und B | Mittelachse finden |
| **Winkelhalbierende** | gleicher Abstand zu zwei Schenkeln | Ecke halbieren, Gehrung |
| **Parallele** | gleicher Abstand zu einer Geraden | Wandflucht, Achsabstand |
| **Thaleskreis** | sehen die Strecke AB unter 90° | rechten Winkel konstruieren |

### Die Mittelsenkrechte konstruieren

1. Zirkel auf **mehr als die halbe Strecke** AB einstellen.
2. Kreisbögen um **A** und um **B** schlagen (oben und unten).
3. Die beiden Schnittpunkte verbinden.

Diese Linie steht **senkrecht** auf AB und **halbiert** sie.

### Die Winkelhalbierende konstruieren

1. Kreisbogen um den **Scheitelpunkt** – schneidet beide Schenkel.
2. Um beide Schnittpunkte gleich große Kreisbögen schlagen.
3. Deren Schnittpunkt mit dem Scheitelpunkt verbinden.

### 🏗️ Bau-Beispiel – Rechten Winkel abstecken (ohne Winkelmesser)

**Methode 1: 3-4-5-Regel (Pythagoras)**
```
Von der Ecke aus: 3,00 m in eine Richtung, 4,00 m in die andere.
Ist die Diagonale genau 5,00 m → der Winkel ist exakt 90°.
```
Prüfung: 3² + 4² = 9 + 16 = 25 = 5² ✓

Für größere Genauigkeit nimmt man Vielfache: **6-8-10** oder **9-12-15**.

**Methode 2: Thaleskreis**
Ein Punkt C auf dem Kreis über der Strecke AB (AB = Durchmesser) bildet immer einen rechten Winkel bei C.

### Kongruenzabbildungen

Abbildungen, die **Form und Größe erhalten**:

| Abbildung | Was passiert |
|-----------|--------------|
| **Verschiebung** (Translation) | Figur wird parallel versetzt |
| **Drehung** (Rotation) | Figur dreht sich um einen Punkt |
| **Spiegelung** (Reflexion) | Figur wird an einer Achse gespiegelt |

Alle drei erzeugen **kongruente** (deckungsgleiche) Figuren.

---

## 1.3 Ähnlichkeit und Strahlensätze

### Zentrische Streckung

Bei der **zentrischen Streckung** wird eine Figur von einem **Streckzentrum Z** aus mit dem **Faktor k** vergrößert oder verkleinert.

| k | Wirkung |
|---|---------|
| k > 1 | Vergrößerung |
| 0 < k < 1 | Verkleinerung |

Das Ergebnis ist eine **ähnliche** Figur.

> ### 💡 Ähnliche Figuren
> Zwei Figuren sind **ähnlich**, wenn sie:
> - **gleiche Winkel** haben und
> - **proportionale Seiten** (alle Seiten im gleichen Verhältnis).

### Die Strahlensätze

> ### 💡 1. Strahlensatz
> Werden zwei von einem Punkt Z ausgehende **Strahlen** von zwei **Parallelen** geschnitten, so verhalten sich die Abschnitte auf dem einen Strahl wie die entsprechenden Abschnitte auf dem anderen:
> ```
> a : b = c : d
> ```

```
        Z
       ╱ ╲
      ╱   ╲
   a ╱     ╲ c
    ╱───────╲     ← 1. Parallele
   ╱         ╲
  ╱     b     ╲ d
 ╱─────────────╲  ← 2. Parallele
```

### 🏗️ Bau-Beispiel 1 – Baumhöhe über den Schatten

Ein 1,80 m langer Stab wirft einen Schatten von **1,20 m**. Ein Baum wirft gleichzeitig **8,40 m** Schatten. Wie hoch ist der Baum?

**Ansatz (Strahlensatz):**
```
Höhe Stab : Schatten Stab = Höhe Baum : Schatten Baum

1,80 : 1,20 = h : 8,40
```

**Auflösen:**
```
h = 1,80 · 8,40 / 1,20 = 15,12 / 1,20 = 12,60 m
```

**Antwort: Der Baum ist 12,60 m hoch.**

> **Warum das funktioniert:** Die Sonnenstrahlen sind praktisch **parallel**. Stab und Baum stehen beide senkrecht – es entstehen zwei **ähnliche** rechtwinklige Dreiecke.

### 🏗️ Bau-Beispiel 2 – Unzugängliche Breite messen

Ein Graben soll überbrückt werden. Die Breite lässt sich nicht direkt messen. Über Ähnlichkeit geht es trotzdem:

```
Messbare Strecken:  a = 4,00 m,  b = 6,50 m,  c = 3,20 m
Gesuchte Breite:    x

a : c = b : x
x = b · c / a = 6,50 · 3,20 / 4,00 = 5,20 m
```

### 🏗️ Bau-Beispiel 3 – Maßstab als Ähnlichkeit

Ein Plan im **Maßstab 1 : 50** ist nichts anderes als eine zentrische Streckung mit k = 1/50.

| Auf dem Plan | In Wirklichkeit |
|--------------|-----------------|
| 1 cm | 50 cm = 0,50 m |
| 8,4 cm | 4,20 m |
| 12,6 cm | 6,30 m |

> **Merke:** Längen werden mit **k** umgerechnet, Flächen mit **k²**, Volumen mit **k³** (siehe LM3 K2).

---

## 1.4 Das Dreieck

### Die Winkelsumme

> ### 💡 Der wichtigste Satz über Dreiecke
> **Die Winkelsumme im Dreieck beträgt immer 180°.**
> ```
> α + β + γ = 180°
> ```

**Folgerung:** Sind zwei Winkel bekannt, ergibt sich der dritte automatisch.

### Die Kongruenzsätze

> ### 💡 Wann ist ein Dreieck eindeutig bestimmt?
> | Satz | Bedeutung | Gegeben |
> |:----:|-----------|---------|
> | **SSS** | Seite-Seite-Seite | alle drei Seiten |
> | **SWS** | Seite-Winkel-Seite | zwei Seiten und der **eingeschlossene** Winkel |
> | **WSW** | Winkel-Seite-Winkel | eine Seite und die beiden anliegenden Winkel |
> | **SsW** | Seite-seite-Winkel | zwei Seiten und der Winkel gegenüber der **größeren** |

**Praktische Bedeutung:** Kennst du eine dieser Kombinationen, ist das Dreieck (und damit das Bauteil) eindeutig festgelegt – jede andere Größe lässt sich berechnen.

### Besondere Linien und Punkte

| Linien | Schneiden sich im | Bedeutung |
|--------|-------------------|-----------|
| **Mittelsenkrechten** der Seiten | **Umkreismittelpunkt** | Mittelpunkt des Kreises **durch** alle Ecken |
| **Winkelhalbierenden** | **Inkreismittelpunkt** | Mittelpunkt des Kreises **in** dem Dreieck |
| **Seitenhalbierenden** (Ecke → Seitenmitte) | **Schwerpunkt** | Gleichgewichtspunkt der Fläche |
| **Höhen** (Ecke ⊥ Gegenseite) | **Höhenschnittpunkt** | |

> ### 🏗️ Der Schwerpunkt in der Praxis
> Der **Schwerpunkt** teilt jede Seitenhalbierende im Verhältnis **2 : 1** (von der Ecke aus gemessen). Beim Anschlagen und Heben von dreieckigen Bauteilen (Fertigteile, Blechzuschnitte) ist er der Punkt, an dem das Teil waagerecht hängt.

---

## 1.5 Das rechtwinklige Dreieck

Das rechtwinklige Dreieck ist das **wichtigste Dreieck der Bautechnik**.

### Die Bezeichnungen

```
        C
        │╲
        │  ╲
      b │    ╲ a
        │      ╲
        │________╲
        A    c    B
        
Rechter Winkel bei C
```

| Seite | Name | Lage |
|-------|------|------|
| **c** | **Hypotenuse** | liegt dem rechten Winkel **gegenüber**, ist die **längste** Seite |
| **a, b** | **Katheten** | bilden den rechten Winkel |

### Der Satz des Pythagoras

> ### 💡 Der Satz des Pythagoras
> ```
> a² + b² = c²
> ```
> **Nur im rechtwinkligen Dreieck!** c ist immer die Hypotenuse.

### Die drei Anwendungsformen

| Gesucht | Formel |
|---------|--------|
| Hypotenuse | c = √(a² + b²) |
| Kathete | a = √(c² − b²) |
| Kathete | b = √(c² − a²) |

### 📐 Lehrbeispiel 1 – Hypotenuse

Katheten a = 3 m, b = 4 m:
```
c² = 3² + 4² = 9 + 16 = 25
c = √25 = 5 m
```

### 📐 Lehrbeispiel 2 – Kathete

Hypotenuse c = 13 cm, Kathete b = 5 cm:
```
a² = 13² − 5² = 169 − 25 = 144
a = √144 = 12 cm
```

### Kathetensatz und Höhensatz (Euklid)

Fällt man vom rechten Winkel die **Höhe h** auf die Hypotenuse, teilt sie diese in die Abschnitte **p** und **q**:

```
        C
        │╲
        │  ╲
        │ h  ╲
        │      ╲
        │___p___│___q___╲
        A               B
```

> ### 💡 Die Sätze des Euklid
> **Kathetensatz:** a² = c · p  und  b² = c · q
> **Höhensatz:** h² = p · q

### 🏗️ Bau-Beispiel 1 – Rechten Winkel prüfen (3-4-5-Regel)

Eine Fundamentecke soll rechtwinklig sein. Prüfung:
```
Von der Ecke: 3,00 m an der einen Achse, 4,00 m an der anderen.
Diagonale messen: muss 5,00 m sein.
```

**Warum?** 3² + 4² = 25 = 5² ✓

**Genauer bei großen Bauwerken:** 6-8-10 oder 12-16-20 verwenden – je länger die Messstrecken, desto genauer der Winkel.

### 🏗️ Bau-Beispiel 2 – Diagonalenprüfung

Eine Bodenplatte misst **8,00 m × 5,00 m**. Welche Diagonale muss gemessen werden?

```
d² = 8,00² + 5,00² = 64 + 25 = 89
d = √89 = 9,434 m ≈ 9,43 m
```

> **Praxis:** Man misst **beide** Diagonalen. Sind sie **gleich lang**, ist das Rechteck rechtwinklig – man muss den Sollwert dann gar nicht kennen.

### 🏗️ Bau-Beispiel 3 – Sparrenlänge

Ein Satteldach: halbe Spannweite **4,50 m**, Höhenunterschied Traufe–First **3,20 m**.

```
l² = 4,50² + 3,20² = 20,25 + 10,24 = 30,49
l = √30,49 = 5,522 m ≈ 5,52 m
```

Mit Dachüberstand von 0,40 m und Verschnitt: **Zuschnitt 6,00 m**.

### 🏗️ Bau-Beispiel 4 – Böschungslänge

Eine Baugrube ist **3,50 m** tief, die Böschung hat eine Anlage von **1 : 1,5** (auf 1 m Höhe kommen 1,5 m horizontal).

```
Horizontale Ausdehnung: 3,50 · 1,5 = 5,25 m
Böschungslänge:  l = √(3,50² + 5,25²) = √(12,25 + 27,5625) = √39,8125 = 6,31 m
```

---

## 1.6 Kreis und Kreisteile

### Kreis und Gerade

| Lage | Bezeichnung | Schnittpunkte |
|------|-------------|---------------|
| Gerade außerhalb | **Passante** | 0 |
| Gerade berührt | **Tangente** | 1 |
| Gerade schneidet | **Sekante** | 2 |

> ### 💡 Wichtige Eigenschaft
> Die **Tangente** steht im Berührpunkt **senkrecht** auf dem Radius.

### Winkelsätze am Kreis

> ### 💡 Satz des Thales
> Liegt der Punkt C auf einem Kreis über der Strecke AB, wobei **AB der Durchmesser** ist, dann ist der Winkel bei C immer **90°**.

```
         C
        ╱│╲
       ╱ │ ╲
      ╱  │  ╲
    A────┼────B      ← AB = Durchmesser
       Mittelpunkt
```

**Anwendung:** Rechten Winkel konstruieren, ohne Winkelmesser.

> ### 💡 Umfangswinkelsatz
> Alle **Umfangswinkel** über derselben Sehne sind **gleich groß**.
> Der **Mittelpunktswinkel** ist **doppelt so groß** wie der Umfangswinkel.
>
> *(Der Thalessatz ist der Sonderfall: Mittelpunktswinkel = 180° → Umfangswinkel = 90°.)*

### Kreisteile

| Teil | Was es ist |
|------|-----------|
| **Kreisbogen** | Teil der Kreislinie |
| **Kreissektor** | „Tortenstück" – von zwei Radien und einem Bogen begrenzt |
| **Kreissegment** | von einer Sehne und einem Bogen begrenzt |
| **Kreisring** | Fläche zwischen zwei konzentrischen Kreisen |

---

## 1.7 Flächen- und Umfangsberechnung

### Geradlinig begrenzte Flächen

| Figur | Fläche A | Umfang U |
|-------|----------|----------|
| **Quadrat** | a² | 4a |
| **Rechteck** | a · b | 2(a + b) |
| **Parallelogramm** | a · h | 2(a + b) |
| **Dreieck** | ½ · g · h | a + b + c |
| **Trapez** | ½ · (a + c) · h | a + b + c + d |
| **Raute** | ½ · e · f (Diagonalen) | 4a |

> ### 💡 Merkhilfe Dreieck
> Ein Dreieck ist **immer das halbe** Rechteck/Parallelogramm mit gleicher Grundseite und Höhe – daher der Faktor ½.

> ### 💡 Merkhilfe Trapez
> Man rechnet mit der **mittleren Länge** der beiden parallelen Seiten:
> ```
> A = (a + c)/2 · h
> ```
> Das ist dieselbe Formel, nur anders geschrieben.

### Kreisförmig begrenzte Flächen

| Figur | Fläche A | Umfang / Länge |
|-------|----------|----------------|
| **Kreis** | π · r² | U = 2π · r = π · d |
| **Kreissektor** (Winkel φ) | (φ/360°) · π · r² | Bogen b = (φ/360°) · 2π · r |
| **Kreisring** | π · (R² − r²) = π(R+r)(R−r) | |

### 🏗️ Bau-Beispiel 1 – Zusammengesetzte Fläche

Eine Grundstücksfläche besteht aus einem Rechteck **18,00 m × 12,00 m** mit einem angesetzten Dreieck (Grundseite 12,00 m, Höhe 5,00 m).

```
A_Rechteck = 18,00 · 12,00      = 216,00 m²
A_Dreieck  = ½ · 12,00 · 5,00   =  30,00 m²
──────────────────────────────────────────
A_gesamt                        = 246,00 m²
```

> ### 💡 So gehst du bei zusammengesetzten Flächen vor
> 1. Skizze anfertigen und **in Grundfiguren zerlegen** (Rechtecke, Dreiecke, Trapeze, Kreisteile).
> 2. Jede Teilfläche **einzeln** berechnen.
> 3. **Addieren** – oder bei Aussparungen **subtrahieren**.
> 4. Bei Abzügen: **Klammer setzen!** (siehe LM1 K3)

### 🏗️ Bau-Beispiel 2 – Giebelfläche

Ein Giebel: Rechteck **9,00 m breit × 4,00 m hoch**, darüber ein Dreieck mit **9,00 m** Grundseite und **2,80 m** Höhe. Ein Fenster **1,26 m × 1,38 m** wird abgezogen.

```
A = (9,00 · 4,00) + (½ · 9,00 · 2,80) − (1,26 · 1,38)
  = 36,00 + 12,60 − 1,7388
  = 46,8612 m²
  ≈ 46,86 m²
```

### 🏗️ Bau-Beispiel 3 – Trapezförmige Dachfläche

Eine Walmdachfläche ist trapezförmig: parallele Seiten **12,00 m** und **7,50 m**, Höhe (in der Dachfläche) **4,80 m**.

```
A = ½ · (12,00 + 7,50) · 4,80
  = ½ · 19,50 · 4,80
  = 46,80 m²
```

Bei 12 Dachziegeln je m²: **562 Ziegel** plus Verschnitt.

### 🏗️ Bau-Beispiel 4 – Kreisring (Rohrquerschnitt)

Ein Betonrohr: Außendurchmesser **1,20 m**, Wanddicke **0,12 m**.

```
R = 0,60 m
r = 0,60 − 0,12 = 0,48 m

A = π(R + r)(R − r)          | 3. binomische Formel
  = π · 1,08 · 0,12
  = π · 0,1296
  = 0,4072 m²
```

Bei 2,50 m Rohrlänge: V = 0,4072 · 2,50 = **1,018 m³** Beton.

### 🏗️ Bau-Beispiel 5 – Kreissektor (Rundbogen)

Ein Rundbogenfenster hat einen Radius von **0,80 m** und einen Öffnungswinkel von **180°** (Halbkreis).

```
A = (180/360) · π · 0,80² = 0,5 · π · 0,64 = 1,005 m²
Bogenlänge = (180/360) · 2π · 0,80 = π · 0,80 = 2,513 m
```

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Winkelarten
Benenne: **1.1** 47° · **1.2** 90° · **1.3** 118° · **1.4** 180° · **1.5** 265°

<details><summary>Lösung anzeigen</summary>

**1.1** spitz · **1.2** recht · **1.3** stumpf · **1.4** gestreckt · **1.5** überstumpf
</details>

### Aufgabe 2 · Winkelsätze
Zwei Geraden schneiden sich, ein Winkel ist **63°**.
**2.1** Wie groß ist der Scheitelwinkel? **2.2** Wie groß sind die Nebenwinkel?

<details><summary>Lösung anzeigen</summary>

**2.1** Scheitelwinkel = **63°** (gleich groß)
**2.2** Nebenwinkel = 180° − 63° = **117°**
</details>

### Aufgabe 3 · Winkel an Parallelen
An zwei Parallelen beträgt ein Stufenwinkel **52°**.
**3.1** Der zugehörige Stufenwinkel? **3.2** Der Wechselwinkel? **3.3** Der Nachbarwinkel?

<details><summary>Lösung anzeigen</summary>

**3.1** **52°** (Stufenwinkel sind gleich)
**3.2** **52°** (Wechselwinkel sind gleich)
**3.3** 180° − 52° = **128°**
</details>

### Aufgabe 4 · Winkelsumme
**4.1** α = 55°, β = 80° → γ? **4.2** Gleichseitiges Dreieck → alle Winkel? **4.3** Rechtwinkliges Dreieck mit α = 32° → β?

<details><summary>Lösung anzeigen</summary>

**4.1** γ = 180 − 55 − 80 = **45°**
**4.2** 180 : 3 = **60°** je Winkel
**4.3** β = 180 − 90 − 32 = **58°**
</details>

### Aufgabe 5 · Pythagoras
**5.1** a = 6, b = 8 → c? **5.2** c = 25, a = 7 → b? **5.3** a = 9, b = 12 → c?

<details><summary>Lösung anzeigen</summary>

**5.1** c = √(36+64) = √100 = **10**
**5.2** b = √(625−49) = √576 = **24**
**5.3** c = √(81+144) = √225 = **15**
</details>

### Aufgabe 6 · Ist es rechtwinklig?
Prüfe mit dem Pythagoras: **6.1** 5, 12, 13 · **6.2** 4, 5, 6 · **6.3** 9, 40, 41

<details><summary>Lösung anzeigen</summary>

**6.1** 25 + 144 = 169 = 13² ✓ → **rechtwinklig**
**6.2** 16 + 25 = 41 ≠ 36 ✗ → **nicht** rechtwinklig
**6.3** 81 + 1600 = 1681 = 41² ✓ → **rechtwinklig**
</details>

### Aufgabe 7 · Flächen berechnen
**7.1** Rechteck 6,50 m × 4,20 m · **7.2** Dreieck g = 8,0 m, h = 5,5 m · **7.3** Trapez a = 10 m, c = 6 m, h = 4 m · **7.4** Kreis r = 3,5 m

<details><summary>Lösung anzeigen</summary>

**7.1** A = 27,30 m²
**7.2** A = ½ · 8,0 · 5,5 = **22,00 m²**
**7.3** A = ½ · (10+6) · 4 = **32,00 m²**
**7.4** A = π · 3,5² = π · 12,25 = **38,48 m²**
</details>

### 🏗️ Aufgabe 8 · Strahlensatz – Gebäudehöhe
Ein 2,00 m langer Messstab wirft **1,50 m** Schatten. Ein Gebäude wirft **13,50 m** Schatten. Wie hoch ist es?

<details><summary>Lösung anzeigen</summary>

```
2,00 : 1,50 = h : 13,50
h = 2,00 · 13,50 / 1,50 = 27,00 / 1,50 = 18,00 m
```
**Das Gebäude ist 18,00 m hoch.**
</details>

### 🏗️ Aufgabe 9 · Rechten Winkel abstecken
Du hast nur ein Maßband. Erkläre, wie du eine Fundamentecke rechtwinklig absteckst, und nenne zwei Maßkombinationen.

<details><summary>Lösung anzeigen</summary>

**3-4-5-Regel:** Von der Ecke 3,00 m auf der einen Achse, 4,00 m auf der anderen abtragen. Die Diagonale zwischen beiden Punkten muss genau **5,00 m** betragen.

**Begründung:** 3² + 4² = 9 + 16 = 25 = 5² – die Umkehrung des Pythagoras.

**Genauere Kombinationen für große Bauwerke:** 6-8-10 m oder 9-12-15 m (je länger, desto genauer).
</details>

### 🏗️ Aufgabe 10 · Diagonalenprüfung
Eine Bodenplatte soll **12,00 m × 7,50 m** messen.
**10.1** Wie lang muss die Diagonale sein? **10.2** Was prüfst du auf der Baustelle?

<details><summary>Lösung anzeigen</summary>

**10.1**
```
d = √(12,00² + 7,50²) = √(144 + 56,25) = √200,25 = 14,151 m ≈ 14,15 m
```

**10.2** Beide Diagonalen messen – sie müssen **gleich lang** sein. Dann ist die Platte rechtwinklig.
</details>

### 🏗️ Aufgabe 11 · Sparren
Ein Pultdach: waagerechte Länge **6,80 m**, Höhenunterschied **2,45 m**.
**11.1** Sparrenlänge? **11.2** Zuschnitt mit 0,50 m Überstand?

<details><summary>Lösung anzeigen</summary>

**11.1**
```
l = √(6,80² + 2,45²) = √(46,24 + 6,0025) = √52,2425 = 7,228 m ≈ 7,23 m
```
**11.2** 7,23 + 0,50 = **7,73 m** → Zuschnitt **8,00 m** (Standardlänge)
</details>

### 🏗️ Aufgabe 12 · Giebelfläche
Giebel: Rechteck **10,00 m × 3,50 m**, darüber Dreieck mit Grundseite **10,00 m** und Höhe **3,20 m**. Abzüglich Fenster **1,01 m × 1,26 m**.

<details><summary>Lösung anzeigen</summary>

```
A = (10,00 · 3,50) + (½ · 10,00 · 3,20) − (1,01 · 1,26)
  = 35,00 + 16,00 − 1,2726
  = 49,7274 m²  ≈  49,73 m²
```
</details>

### 🏗️ Aufgabe 13 · Kreisring
Ein Schachtring: Außendurchmesser **1,50 m**, Wanddicke **0,15 m**, Höhe **1,00 m**.
**13.1** Querschnittsfläche der Wand? **13.2** Betonvolumen?

<details><summary>Lösung anzeigen</summary>

**13.1**
```
R = 0,75 m ; r = 0,75 − 0,15 = 0,60 m
A = π(R+r)(R−r) = π · 1,35 · 0,15 = π · 0,2025 = 0,6362 m²
```

**13.2** V = 0,6362 · 1,00 = **0,636 m³**
</details>

### 🏗️ Aufgabe 14 · Böschung
Eine Baugrube ist **4,20 m** tief, Böschungsanlage **1 : 1,5**.
**14.1** Horizontale Ausdehnung? **14.2** Länge der Böschungsfläche (in der Schräge)?

<details><summary>Lösung anzeigen</summary>

**14.1** 4,20 · 1,5 = **6,30 m**
**14.2**
```
l = √(4,20² + 6,30²) = √(17,64 + 39,69) = √57,33 = 7,571 m ≈ 7,57 m
```
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich kann alle **Winkelarten** benennen.
- [ ] Ich kenne die Sätze über **Scheitel-, Neben-, Stufen- und Wechselwinkel**.
- [ ] Ich weiß, warum man auf der Baustelle **rechtwinklig** absteckt (Genauigkeit).
- [ ] Ich kenne die wichtigsten **Ortslinien** und ihre Konstruktion.
- [ ] Ich kann mit den **Strahlensätzen** unzugängliche Strecken bestimmen.
- [ ] Ich kenne die **Winkelsumme** (180°) und die **Kongruenzsätze** (SSS, SWS, WSW, SsW).
- [ ] Ich kenne die vier besonderen **Linien und Punkte** im Dreieck.
- [ ] Ich beherrsche den **Satz des Pythagoras** in allen drei Umstellungen.
- [ ] Ich kann die **3-4-5-Regel** anwenden und begründen.
- [ ] Ich kenne den **Satz des Thales** und die Tangenteneigenschaft.
- [ ] Ich berechne **Flächen und Umfänge** aller Grundfiguren.
- [ ] Ich zerlege **zusammengesetzte Flächen** in Grundfiguren und setze bei Abzügen eine **Klammer**.
- [ ] Ich berechne **Kreissektor** und **Kreisring**.

**Nächstes Kapitel:** LM4 Kapitel 2 – Trigonometrie
