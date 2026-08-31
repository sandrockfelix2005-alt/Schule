# Naturwissenschaft · Lernmodul 1 · Kapitel 2
# Kräfte

> **Lernkapitel zum Selbststudium.** Quelle: DAA Naturwissenschaft, Lernmodul 1, Kapitel 2.1 und 2.2 · **Zeitaufwand: ca. 6–7 Stunden**

**Was du am Ende können musst**
- **Dichte und Wichte** berechnen und unterscheiden.
- Die **Kraft** als Vektor beschreiben (Betrag, Richtung, Angriffspunkt).
- Kräfte **zerlegen** und **addieren** – rechnerisch und zeichnerisch.
- **Normalkraft** und **Hangabtriebskraft** an der schiefen Ebene bestimmen.
- **Reibungskräfte** berechnen (Haft- und Gleitreibung).
- Das **Hookesche Gesetz** anwenden, Federn in Reihe und parallel.

**Inhalt:** [2.1 Dichte & Wichte](#21-körperbegriff-dichte-und-wichte) · [2.2 Der Kraftbegriff](#22-was-ist-eine-kraft) · [2.3 Kräfte zerlegen](#23-kräfte-zerlegen) · [2.4 Kräfte addieren](#24-kräfte-addieren) · [2.5 Schiefe Ebene](#25-die-schiefe-ebene) · [2.6 Reibung](#26-reibung) · [2.7 Hooke](#27-das-hookesche-gesetz) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

**Kräfte sind das Kernthema der Bautechnik.** Jedes Bauwerk muss Kräfte aufnehmen und in den Baugrund ableiten. Was du hier lernst, ist die direkte Vorstufe zur **Statik**:

| Was du hier lernst | Wozu in der Statik |
|--------------------|--------------------|
| Kraft als Vektor | Lastannahmen, Lastfälle |
| Kräfte zerlegen | Auflagerkräfte, Fachwerkstäbe |
| Kräfte addieren | Resultierende Last ermitteln |
| Schiefe Ebene | Dachlasten, Streben, Böschungen |
| Reibung | Erddruck, Gleitsicherheit |
| Federgesetz | Verformung, elastisches Verhalten |

---

## 2.1 Körperbegriff: Dichte und Wichte

### Die Dichte

> ### 💡 Definition
> ```
> ρ = m / V
> ```
> | Größe | Bedeutung | Einheit |
> |-------|-----------|---------|
> | ρ (rho) | Dichte | kg/dm³ oder kg/m³ oder t/m³ |
> | m | Masse | kg |
> | V | Volumen | dm³ oder m³ |

Die Dichte ist eine **Stoffkonstante** – sie kennzeichnet das Material unabhängig von der Größe des Bauteils.

### Die Wichte

> ### 💡 Definition
> ```
> γ = F_G / V
> ```
> γ (gamma) = **Wichte** in N/dm³ oder kN/m³ – das **Gewicht** pro Volumen.

**Der Zusammenhang:**
```
γ = ρ · g
```

### 🏗️ Dichten der wichtigsten Baustoffe

| Baustoff | ρ (t/m³ = kg/dm³) | γ (kN/m³) |
|----------|------------------:|----------:|
| **Stahlbeton** | 2,5 | 25,0 |
| **Beton** (unbewehrt) | 2,4 | 24,0 |
| **Stahl** | 7,85 | 78,5 |
| **Mauerwerk** (Vollziegel) | 1,8 | 18,0 |
| **Kalksandstein** | 2,0 | 20,0 |
| **Holz** (Nadelholz) | 0,5 | 5,0 |
| **Kies/Sand** (locker) | 1,6 | 16,0 |
| **Erde** (gewachsen) | 1,8 | 18,0 |
| **Wasser** | 1,0 | 10,0 |
| **Dämmstoff** (Mineralwolle) | 0,03 | 0,3 |

> ### 💡 Zwei nützliche Merkwerte
> - **Stahlbeton 25 kN/m³** – der wichtigste Wert überhaupt für Eigenlasten.
> - **Stahl ist etwa 3× so schwer wie Beton** (7,85 : 2,5 ≈ 3,1).

### 📐 Lehrbeispiel – Dichte anwenden

Ein Betonfundament misst **2,50 m × 1,80 m × 0,45 m**.

| Schritt | Rechnung |
|---------|----------|
| Volumen | V = 2,50 · 1,80 · 0,45 = 2,025 m³ |
| Masse | m = ρ · V = 2400 · 2,025 = 4860 kg = 4,86 t |
| Gewichtskraft | F_G = m · g = 4860 · 9,81 = 47 679 N ≈ **47,7 kN** |
| oder direkt über die Wichte | F_G = γ · V = 24,0 · 2,025 = **48,6 kN** |

*(Kleine Abweichung, weil γ = 24 kN/m³ gerundet ist.)*

---

## 2.2 Was ist eine Kraft?

> ### 💡 Definition
> Eine **Kraft** erkennt man nur an ihrer **Wirkung**. Sie kann:
> - einen Körper **verformen** (elastisch oder plastisch)
> - seinen **Bewegungszustand ändern** (beschleunigen, abbremsen, Richtung ändern)

### Das Grundgesetz

> ### 💡 Formel
> ```
> F = m · a
> ```
> ```
> 1 N = 1 kg · m/s²
> ```

### Die Gewichtskraft

Ein Sonderfall: Die Erdbeschleunigung **g ≈ 9,81 m/s²** wirkt auf jede Masse.

```
F_G = m · g
```

### Kraft ist ein Vektor

> ### 💡 Merke
> Eine Kraft ist durch **vier Angaben** vollständig bestimmt:
> 1. **Betrag** (wie groß, in N)
> 2. **Richtung** (Winkel)
> 3. **Richtungssinn** (wohin auf der Linie)
> 4. **Angriffspunkt** (wo greift sie an)
>
> Die Gerade durch den Angriffspunkt in Kraftrichtung heißt **Wirkungslinie**.

**Darstellung:** als **Pfeil**, dessen Länge maßstäblich dem Betrag entspricht.
```
Kräftemaßstab z. B.:  1 cm ≙ 10 kN
```

> ### 🏗️ Warum der Angriffspunkt zählt
> Dieselbe Kraft an unterschiedlicher Stelle hat völlig andere Wirkung: Eine Last in Feldmitte belastet einen Träger anders als dieselbe Last direkt über dem Auflager. Deshalb gehört zu jeder Lastangabe im Bau immer auch die **Lage**.

---

## 2.3 Kräfte zerlegen

Jede Kraft lässt sich in **zwei Komponenten** zerlegen – meist in x- und y-Richtung.

```
        │
     F_y│      ╱ F
        │    ╱
        │  ╱  α
        └────────
           F_x
```

> ### 💡 Die Zerlegungsformeln
> ```
> F_x = F · cos α          (waagerechte Komponente)
> F_y = F · sin α          (senkrechte Komponente)
> ```
> **Rückwärts (Komponenten → Resultierende):**
> ```
> F = √(F_x² + F_y²)
> tan α = F_y / F_x
> ```

### So gehst du vor

1. **Skizze** zeichnen, Winkel eintragen.
2. Prüfen: Liegt der Winkel **zur x-Achse**? (Sonst umdenken!)
3. Komponenten berechnen.
4. **Probe:** F = √(F_x² + F_y²) muss die Ausgangskraft ergeben.

### 📐 Lehrbeispiel 1

Eine Kraft **F = 500 N** wirkt unter **30°** zur Waagerechten.

```
F_x = 500 · cos30° = 500 · 0,8660 = 433,0 N
F_y = 500 · sin30° = 500 · 0,5000 = 250,0 N
```

**Probe:** √(433² + 250²) = √(187 489 + 62 500) = √249 989 = 500 N ✓

### 🏗️ Bau-Beispiel 1 – Kraft in einer Dachstrebe

Eine Strebe im Dachstuhl steht unter **55°** zur Waagerechten und wird mit **F = 18 kN** belastet (Druckkraft in Stabrichtung).

**Welche Kräfte leitet sie in den Anschlusspunkt?**

```
Waagerecht (schiebt nach außen):  F_x = 18 · cos55° = 18 · 0,5736 = 10,32 kN
Senkrecht (drückt nach unten):    F_y = 18 · sin55° = 18 · 0,8192 = 14,75 kN
```

> ### 🏗️ Das ist der Grund für Zugbänder
> Die **waagerechte Komponente** von 10,32 kN will die Wände auseinanderdrücken. Genau deshalb bekommen Dachstühle **Zugbänder** oder die Decke wird als Scheibe ausgebildet – sonst würden die Außenwände nach außen kippen.

### 🏗️ Bau-Beispiel 2 – Schrägseil

Ein Abspannseil steht unter **40°** zur Senkrechten und ist mit **25 kN** vorgespannt.

**Achtung:** Der Winkel ist hier zur **Senkrechten** angegeben – also sind sin und cos vertauscht!

```
Senkrechte Komponente:  F_v = 25 · cos40° = 25 · 0,7660 = 19,15 kN
Waagerechte Komponente: F_h = 25 · sin40° = 25 · 0,6428 = 16,07 kN
```

> ### ⚠️ Der häufigste Fehler bei der Zerlegung
> **Immer prüfen, zu welcher Achse der Winkel gemessen wird!**
> - Winkel zur **Waagerechten**: F_x = F·cos α, F_y = F·sin α
> - Winkel zur **Senkrechten**: F_x = F·sin α, F_y = F·cos α
>
> Eine Skizze verhindert diesen Fehler zuverlässig.

---

## 2.4 Kräfte addieren

### Zwei Kräfte – das Kräfteparallelogramm

Greifen zwei Kräfte an einem Punkt an, ergibt sich die **Resultierende R** als Diagonale des Parallelogramms.

```
        ╱────────╱
       ╱        ╱
   F₂ ╱   R    ╱
     ╱      ╱
    ╱    ╱
   ●──────────
        F₁
```

### Rechnerisch: über Komponenten

> ### 💡 Das allgemeine Verfahren
> ```
> F_x,res = ΣF_x = F₁x + F₂x + F₃x + …
> F_y,res = ΣF_y = F₁y + F₂y + F₃y + …
>
> F_res = √(F_x,res² + F_y,res²)
> tan α = F_y,res / F_x,res
> ```

### So gehst du vor

1. **Jede** Kraft in x- und y-Komponente zerlegen (Vorzeichen beachten!).
2. Alle x-Komponenten **addieren**, alle y-Komponenten **addieren**.
3. Resultierende über Pythagoras.
4. Richtungswinkel über den Tangens.

### 📐 Lehrbeispiel – drei Kräfte

An einem Knoten greifen an:
- F₁ = 40 kN unter 0° (waagerecht nach rechts)
- F₂ = 30 kN unter 90° (senkrecht nach oben)
- F₃ = 20 kN unter 210°

| Kraft | F_x | F_y |
|-------|-----|-----|
| F₁ | 40 · cos0° = **40,00** | 40 · sin0° = **0** |
| F₂ | 30 · cos90° = **0** | 30 · sin90° = **30,00** |
| F₃ | 20 · cos210° = **−17,32** | 20 · sin210° = **−10,00** |
| **Σ** | **22,68 kN** | **20,00 kN** |

```
F_res = √(22,68² + 20,00²) = √(514,4 + 400,0) = √914,4 = 30,24 kN
tan α = 20,00 / 22,68 = 0,8818  →  α = 41,4°
```

### Sonderfälle

| Fall | Resultierende |
|------|---------------|
| Gleiche Richtung | R = F₁ + F₂ |
| Entgegengesetzt | R = F₁ − F₂ |
| Rechtwinklig | R = √(F₁² + F₂²) |

---

<div class="viz" data-viz="parallelogramm"></div>

## 2.5 Die schiefe Ebene

Auf einer geneigten Fläche (Winkel α) teilt sich die Gewichtskraft in **zwei Komponenten** auf:

```
              ╱│
            ╱  │ F_N (Normalkraft, ⊥ zur Ebene)
          ╱    │
        ╱  ●───┘
      ╱   ╱│
    ╱  F_H│ F_G
  ╱_______↓________ α
```

> ### 💡 Die beiden Komponenten
> ```
> Normalkraft:        F_N = F_G · cos α = m · g · cos α
> Hangabtriebskraft:  F_H = F_G · sin α = m · g · sin α
> ```
> | Kraft | Richtung | Wirkung |
> |-------|----------|---------|
> | **F_N** | **senkrecht** zur Ebene | drückt den Körper auf die Fläche |
> | **F_H** | **parallel** zur Ebene | zieht den Körper hangabwärts |

> ### 💡 Die Merkhilfe
> **cos** gehört zur **Normalkraft** (bei α = 0°, also flach, ist cos 0° = 1 → das ganze Gewicht drückt senkrecht).
> **sin** gehört zur **Hangabtriebskraft** (bei α = 0° ist sin 0° = 0 → kein Abrutschen auf ebener Fläche).

### 📐 Lehrbeispiel

Ein Körper (**m = 200 kg**) liegt auf einer Ebene mit **20°** Neigung.

| Schritt | Rechnung |
|---------|----------|
| Gewichtskraft | F_G = 200 · 9,81 = 1962 N |
| Normalkraft | F_N = 1962 · cos20° = 1962 · 0,9397 = **1843,7 N** |
| Hangabtriebskraft | F_H = 1962 · sin20° = 1962 · 0,3420 = **671,1 N** |

**Probe:** √(1843,7² + 671,1²) = √(3 399 230 + 450 375) = √3 849 605 = 1962 N ✓

### 🏗️ Bau-Beispiel 1 – Materialtransport über eine Rampe

Eine Palette mit **450 kg** soll über eine Rampe mit **12°** Neigung geschoben werden.

```
F_G = 450 · 9,81 = 4414,5 N
F_H = 4414,5 · sin12° = 4414,5 · 0,2079 = 917,8 N
F_N = 4414,5 · cos12° = 4414,5 · 0,9781 = 4317,8 N
```

**Ohne Reibung** müsste man mit **918 N** (≈ 92 kg) schieben. Mit Reibung wird es mehr (siehe 2.6).

### 🏗️ Bau-Beispiel 2 – Schneelast auf dem Steildach

Auf einem Dach mit **35°** Neigung liegt Schnee. Die Schneelast wirkt **senkrecht nach unten** mit **s = 0,85 kN/m²** (bezogen auf die **Grundrissfläche**).

**Komponente senkrecht zur Dachfläche** (drückt auf die Sparren):
```
s_⊥ = 0,85 · cos35° = 0,85 · 0,8192 = 0,696 kN/m²
```

**Komponente parallel zur Dachfläche** (will den Schnee abrutschen lassen):
```
s_∥ = 0,85 · sin35° = 0,85 · 0,5736 = 0,488 kN/m²
```

> **Praxisbezug:** Die Parallelkomponente ist der Grund für **Schneefanggitter** – ohne sie rutscht die Schneelast als Lawine vom Dach. Und je steiler das Dach, desto größer wird diese Komponente.

---

<div class="viz" data-viz="schiefeebene"></div>

## 2.6 Reibung

### Die zwei Arten

> ### 💡 Haft- und Gleitreibung
> | Art | Wann | Formel |
> |-----|------|--------|
> | **Haftreibung** | Körper ruht noch | F_R,max = **µ₀ · F_N** |
> | **Gleitreibung** | Körper bewegt sich | F_R = **µ · F_N** |
>
> Es gilt immer **µ₀ > µ** – losbrechen ist schwerer als weiterschieben.

### Reibungszahlen (Richtwerte)

| Materialpaarung | µ₀ (Haft) | µ (Gleit) |
|-----------------|:---------:|:---------:|
| Stahl auf Stahl (trocken) | 0,15 | 0,12 |
| Stahl auf Stahl (geschmiert) | 0,10 | 0,05 |
| Holz auf Holz | 0,50 | 0,30 |
| Beton auf Beton | 0,70 | 0,60 |
| Gummi auf Beton | 0,90 | 0,70 |
| Beton auf Kies (Gleitsicherheit) | 0,55 | – |

### 📐 Lehrbeispiel

Ein Bauteil drückt mit **F_N = 800 N** auf eine Unterlage, µ = 0,15. Welche Kraft zum Verschieben?

```
F_R = µ · F_N = 0,15 · 800 = 120 N
```

### 🏗️ Bau-Beispiel 1 – Palette schieben (mit Reibung)

Zurück zum Rampenbeispiel: **450 kg**, **12°** Neigung, µ = 0,30 (Holz auf Holz).

| Schritt | Rechnung |
|---------|----------|
| Gewichtskraft | F_G = 4414,5 N |
| Normalkraft | F_N = 4414,5 · cos12° = 4317,8 N |
| Hangabtriebskraft | F_H = 4414,5 · sin12° = 917,8 N |
| Reibungskraft | F_R = 0,30 · 4317,8 = 1295,3 N |
| **Erforderliche Schubkraft** | F = F_H + F_R = 917,8 + 1295,3 = **2213,1 N** |

**Ergebnis:** Man braucht rund **2213 N ≈ 221 kg** Schubkraft – mehr als das Doppelte des reinen Hangabtriebs. **Reibung ist der größere Anteil.**

### 🏗️ Bau-Beispiel 2 – Rutscht der Körper von allein?

Ein Bauteil liegt auf einer geneigten Fläche. Ab welchem Winkel rutscht es?

**Bedingung fürs Rutschen:**
```
F_H > F_R,max
m·g·sin α > µ₀ · m·g·cos α        | : (m·g·cos α)
tan α > µ₀
```

> ### 💡 Der Reibungswinkel
> ```
> tan ρ = µ₀        →        ρ = tan⁻¹(µ₀)
> ```
> Wird der Neigungswinkel **größer als der Reibungswinkel ρ**, rutscht der Körper.
>
> **Bemerkenswert:** Die Masse fällt heraus! **Ob** ein Körper rutscht, hängt **nur vom Winkel** und der Materialpaarung ab – nicht vom Gewicht.

**Beispiel:** Holz auf Holz, µ₀ = 0,50
```
ρ = tan⁻¹(0,50) = 26,6°
```
Ab **26,6°** rutscht das Bauteil los.

### 🏗️ Bau-Beispiel 3 – Gleitsicherheit einer Stützmauer

Eine Stützmauer wird durch Erddruck **horizontal** mit **H = 45 kN** belastet. Ihr Eigengewicht beträgt **V = 120 kN**, die Reibungszahl zwischen Fundament und Boden ist **µ = 0,55**.

```
Rückhaltende Kraft:  F_R = µ · V = 0,55 · 120 = 66 kN
Treibende Kraft:     H = 45 kN

Gleitsicherheit: η = F_R / H = 66 / 45 = 1,47
```

**Bewertung:** Gefordert wird meist **η ≥ 1,5** → mit 1,47 ist die Mauer **knapp nicht ausreichend** gesichert. Maßnahmen: breiteres Fundament, Sporn, oder größeres Eigengewicht.

> **Das ist eine echte Standsicherheitsberechnung** – genau so rechnest du später in der Statik.

---

## 2.7 Das Hookesche Gesetz

> ### 💡 Das Federgesetz
> ```
> F = c · s
> ```
> | Größe | Bedeutung | Einheit |
> |-------|-----------|---------|
> | F | Federkraft | N |
> | **c** | **Federsteifigkeit** (Federkonstante) | N/mm oder N/m |
> | s | Federweg (Verformung) | mm oder m |

Das Gesetz gilt nur im **elastischen Bereich** – wird zu weit gedehnt, verformt sich das Material bleibend (plastisch).

### 📐 Lehrbeispiel

Eine Feder mit **c = 25 N/mm** wird um **12 mm** gespannt.
```
F = 25 · 12 = 300 N
```

### Federschaltungen

> ### 💡 Reihen- und Parallelschaltung
> **Reihenschaltung** (hintereinander):
> ```
> 1/c_res = 1/c₁ + 1/c₂ + … + 1/cₙ
> ```
> → Das System wird **weicher** als die weichste Einzelfeder.
>
> **Parallelschaltung** (nebeneinander):
> ```
> c_res = c₁ + c₂ + … + cₙ
> ```
> → Das System wird **steifer**.

**Merkhilfe:** Bei der Reihenschaltung addieren sich die **Wege**, bei der Parallelschaltung die **Kräfte**.

### 📐 Lehrbeispiel – Reihenschaltung

Zwei Federn: c₁ = 30 N/mm, c₂ = 20 N/mm, in Reihe.

```
1/c_res = 1/30 + 1/20 = 0,0333 + 0,0500 = 0,0833
c_res = 1 / 0,0833 = 12,0 N/mm
```

**Kontrolle:** 12 < 20 (die weichere Feder) ✓ – in Reihe wird es immer weicher.

### 🏗️ Bau-Bezug – Elastizität von Bauteilen

Das Hookesche Gesetz ist die Grundlage der **Elastizitätslehre**. In der Statik erscheint es in dieser Form:

```
σ = E · ε
```
| Größe | Bedeutung |
|-------|-----------|
| σ | Spannung (N/mm²) |
| **E** | **Elastizitätsmodul** – die „Federsteifigkeit" des Materials |
| ε | Dehnung (relative Längenänderung Δl/l) |

**E-Moduln:** Stahl 210 000 N/mm² · Beton ca. 31 000 N/mm² · Holz ca. 11 000 N/mm²

> **Der Zusammenhang:** F = c·s (Feder) und σ = E·ε (Material) sind **dieselbe Idee** – Kraft proportional zur Verformung. Nur bezieht sich das eine auf ein Bauteil, das andere auf den Werkstoff.

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Dichte
**1.1** Ein Betonwürfel V = 0,5 m³, m = 1200 kg → Dichte? **1.2** Ein Stahlträger V = 0,04 m³, ρ = 7850 kg/m³ → Masse?

<details><summary>Lösung anzeigen</summary>

**1.1** ρ = 1200 / 0,5 = **2400 kg/m³**
**1.2** m = 7850 · 0,04 = **314 kg**
</details>

### Aufgabe 2 · Gewichtskraft
**2.1** m = 850 kg → F_G? **2.2** m = 2,4 t → F_G in kN? **2.3** Kontrolle mit Faustformel.

<details><summary>Lösung anzeigen</summary>

**2.1** F_G = 850 · 9,81 = **8338,5 N ≈ 8,34 kN**
**2.2** F_G = 2400 · 9,81 = 23 544 N = **23,54 kN**
**2.3** 2,4 t · 10 = 24 kN ✓ (Faustformel passt)
</details>

### Aufgabe 3 · Kraftzerlegung
**F = 800 N** unter **35°** zur Waagerechten.

<details><summary>Lösung anzeigen</summary>

```
F_x = 800 · cos35° = 800 · 0,8192 = 655,4 N
F_y = 800 · sin35° = 800 · 0,5736 = 458,9 N
Probe: √(655,4² + 458,9²) = √(429 549 + 210 589) = √640 138 = 800 N ✓
```
</details>

### Aufgabe 4 · Resultierende
Zwei rechtwinklige Kräfte: **F₁ = 60 N** (waagerecht), **F₂ = 80 N** (senkrecht).
**4.1** Resultierende? **4.2** Richtungswinkel?

<details><summary>Lösung anzeigen</summary>

**4.1** R = √(60² + 80²) = √(3600 + 6400) = √10 000 = **100 N**
**4.2** tan α = 80/60 = 1,333 → α = **53,13°**
</details>

### Aufgabe 5 · Schiefe Ebene
Körper **m = 150 kg** auf **18°** geneigter Fläche.
**5.1** F_G? **5.2** F_N? **5.3** F_H?

<details><summary>Lösung anzeigen</summary>

**5.1** F_G = 150 · 9,81 = **1471,5 N**
**5.2** F_N = 1471,5 · cos18° = 1471,5 · 0,9511 = **1399,5 N**
**5.3** F_H = 1471,5 · sin18° = 1471,5 · 0,3090 = **454,7 N**
</details>

### Aufgabe 6 · Reibung
**F_N = 1200 N**, µ = 0,25.
**6.1** Reibungskraft? **6.2** Bei µ₀ = 0,35 – Losbrechkraft?

<details><summary>Lösung anzeigen</summary>

**6.1** F_R = 0,25 · 1200 = **300 N**
**6.2** F_R,max = 0,35 · 1200 = **420 N**
</details>

### Aufgabe 7 · Hookesches Gesetz
**7.1** c = 40 N/mm, s = 15 mm → F? **7.2** F = 500 N, c = 25 N/mm → s? **7.3** F = 600 N, s = 20 mm → c?

<details><summary>Lösung anzeigen</summary>

**7.1** F = 40 · 15 = **600 N**
**7.2** s = 500 / 25 = **20 mm**
**7.3** c = 600 / 20 = **30 N/mm**
</details>

### Aufgabe 8 · Federschaltungen
c₁ = 60 N/mm, c₂ = 40 N/mm.
**8.1** In Reihe? **8.2** Parallel?

<details><summary>Lösung anzeigen</summary>

**8.1** 1/c = 1/60 + 1/40 = 0,01667 + 0,025 = 0,04167 → c = **24 N/mm**
**8.2** c = 60 + 40 = **100 N/mm**
</details>

### 🏗️ Aufgabe 9 · Fundament
Ein Stahlbetonfundament **3,0 m × 2,2 m × 0,6 m** (ρ = 2500 kg/m³).
**9.1** Volumen? **9.2** Masse? **9.3** Gewichtskraft in kN? **9.4** Bodenpressung?

<details><summary>Lösung anzeigen</summary>

**9.1** V = 3,0 · 2,2 · 0,6 = **3,96 m³**
**9.2** m = 2500 · 3,96 = **9900 kg = 9,9 t**
**9.3** F_G = 9900 · 9,81 = 97 119 N ≈ **97,1 kN**
**9.4** A = 3,0 · 2,2 = 6,6 m² → σ = 97,1 / 6,6 = **14,7 kN/m²**
</details>

### 🏗️ Aufgabe 10 · Dachstrebe
Eine Strebe unter **50°** zur Waagerechten überträgt **F = 22 kN**.
**10.1** Waagerechte Komponente? **10.2** Senkrechte Komponente? **10.3** Wozu dient ein Zugband?

<details><summary>Lösung anzeigen</summary>

**10.1** F_x = 22 · cos50° = 22 · 0,6428 = **14,14 kN**
**10.2** F_y = 22 · sin50° = 22 · 0,7660 = **16,85 kN**
**10.3** Das Zugband nimmt die **waagerechte Komponente** auf, die sonst die Außenwände nach außen drücken würde.
</details>

### 🏗️ Aufgabe 11 · Palette über Rampe
**m = 600 kg**, Rampe **15°**, µ = 0,30.
**11.1** Hangabtriebskraft? **11.2** Normalkraft? **11.3** Reibungskraft? **11.4** Gesamte Schubkraft?

<details><summary>Lösung anzeigen</summary>

```
F_G = 600 · 9,81 = 5886 N
F_H = 5886 · sin15° = 5886 · 0,2588 = 1523,3 N
F_N = 5886 · cos15° = 5886 · 0,9659 = 5685,3 N
F_R = 0,30 · 5685,3 = 1705,6 N
F_ges = 1523,3 + 1705,6 = 3228,9 N ≈ 3,23 kN
```
</details>

### 🏗️ Aufgabe 12 · Rutschwinkel
**12.1** Ab welchem Winkel rutscht ein Körper bei µ₀ = 0,60? **12.2** Bei µ₀ = 0,25? **12.3** Spielt das Gewicht eine Rolle?

<details><summary>Lösung anzeigen</summary>

**12.1** ρ = tan⁻¹(0,60) = **30,96°**
**12.2** ρ = tan⁻¹(0,25) = **14,04°**
**12.3** **Nein** – die Masse kürzt sich heraus. Nur Winkel und Materialpaarung entscheiden.
</details>

### 🏗️ Aufgabe 13 · Gleitsicherheit
Stützmauer: Erddruck horizontal **H = 60 kN**, Eigengewicht **V = 165 kN**, µ = 0,55.
**13.1** Rückhaltende Kraft? **13.2** Gleitsicherheit? **13.3** Ausreichend bei gefordert η ≥ 1,5?

<details><summary>Lösung anzeigen</summary>

**13.1** F_R = 0,55 · 165 = **90,75 kN**
**13.2** η = 90,75 / 60 = **1,51**
**13.3** 1,51 ≥ 1,5 → **ja, knapp ausreichend** ✓
</details>

### 🏗️ Aufgabe 14 · Schneelast auf Steildach
Dachneigung **40°**, Schneelast **s = 1,10 kN/m²** (auf Grundrissfläche).
**14.1** Komponente senkrecht zur Dachfläche? **14.2** Komponente parallel (Abrutschen)?

<details><summary>Lösung anzeigen</summary>

**14.1** s_⊥ = 1,10 · cos40° = 1,10 · 0,7660 = **0,843 kN/m²**
**14.2** s_∥ = 1,10 · sin40° = 1,10 · 0,6428 = **0,707 kN/m²**

Die Parallelkomponente ist erheblich → **Schneefanggitter erforderlich**.
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich berechne **Dichte** (ρ = m/V) und **Wichte** (γ = F_G/V).
- [ ] Ich kenne die Dichten der wichtigsten Baustoffe – vor allem **Stahlbeton 25 kN/m³**.
- [ ] Ich kenne **F = m · a** und **F_G = m · g**.
- [ ] Ich weiß, dass eine Kraft durch **Betrag, Richtung, Richtungssinn und Angriffspunkt** bestimmt ist.
- [ ] Ich **zerlege** Kräfte in Komponenten – und prüfe, zu welcher Achse der Winkel gemessen wird.
- [ ] Ich **addiere** Kräfte über die Summe der Komponenten.
- [ ] Ich kenne **F_N = m·g·cos α** und **F_H = m·g·sin α** (cos → Normal, sin → Hang).
- [ ] Ich berechne **Haft- und Gleitreibung** und weiß, dass µ₀ > µ.
- [ ] Ich kann den **Rutschwinkel** über tan ρ = µ₀ bestimmen und weiß, dass die Masse keine Rolle spielt.
- [ ] Ich kann eine **Gleitsicherheit** berechnen.
- [ ] Ich kenne das **Hookesche Gesetz** F = c·s und die Federschaltungen.
- [ ] Ich kenne den Zusammenhang zum **E-Modul** (σ = E·ε).

**Nächstes Kapitel:** LM1 Kapitel 3 – Hebel, Drehmoment und Gleichgewicht
