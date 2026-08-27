# Mathematik I · Lernmodul 4 · Kapitel 3
# Stereometrie – Berechnung von Körpern

> **Lernkapitel zum Selbststudium.** Quelle: DAA Mathematik I, Lernmodul 4, Lernbereich 3 · **Zeitaufwand: ca. 5–6 Stunden**

**Was du am Ende können musst**
- **Volumen und Oberfläche** von Prisma, Zylinder, Pyramide, Kegel und Kugel berechnen.
- **Pyramiden- und Kegelstumpf** berechnen (Baugruben!).
- **Rotationskörper** erkennen und berechnen.
- **Zusammengesetzte Körper** in Grundkörper zerlegen.
- **Massen** aus Volumen und Dichte ermitteln.

**Inhalt:** [3.1 Prismen](#31-prismen) · [3.2 Zylinder, Pyramide, Kegel](#32-zylinder-pyramide-und-kegel) · [3.3 Kugel](#33-die-kugel) · [3.4 Stümpfe](#34-pyramiden--und-kegelstumpf) · [3.5 Rotationskörper](#35-rotationskörper) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

Die **Stereometrie** ist die Geometrie der **Körper**. Für dich ist das die **Massenermittlung** – die Grundlage jeder Kalkulation und Bestellung:

| Aufgabe | Körper |
|---------|--------|
| Beton für Fundamente, Wände, Decken | Quader, Prisma |
| Aushub einer Baugrube mit Böschung | **Pyramidenstumpf** |
| Rundstützen, Schächte, Rohre | Zylinder, Hohlzylinder |
| Schüttgutkegel auf der Baustelle | Kegel |
| Trichter, konische Behälter | Kegelstumpf |
| Dachspitze eines Turms | Pyramide, Kegel |

> ### 💡 Die drei Schritte jeder Massenermittlung
> 1. **Körper erkennen** (oder in Grundkörper zerlegen)
> 2. **Volumen** berechnen
> 3. Bei Bedarf **Masse** = Volumen · Dichte

---

## 3.1 Prismen

> ### 💡 Was ist ein Prisma?
> Ein **Prisma** entsteht, wenn eine ebene Fläche (die **Grundfläche G**) senkrecht in die Höhe „gezogen" wird. Grund- und Deckfläche sind **kongruent und parallel**.

```
      ┌──────────┐
     ╱          ╱│
    ┌──────────┐ │
    │          │ │  h
    │    G     │ ╱
    └──────────┘
```

> ### 💡 Die Grundformel
> ```
> V = G · h
> O = 2 · G + M          (M = Mantelfläche)
> M = U · h              (U = Umfang der Grundfläche)
> ```

### Die wichtigsten Prismen

| Körper | Grundfläche | Volumen | Oberfläche |
|--------|-------------|---------|------------|
| **Quader** | Rechteck | a · b · c | 2(ab + ac + bc) |
| **Würfel** | Quadrat | a³ | 6a² |
| **Dreiecksprisma** | Dreieck | ½·g·h_D · h | 2G + U·h |
| **Trapezprisma** | Trapez | ½(a+c)·h_T · h | 2G + U·h |

### 📐 Lehrbeispiel 1 – Quader

Ein Betonfundament misst **2,50 m × 1,80 m × 0,45 m**.

```
V = 2,50 · 1,80 · 0,45 = 2,025 m³
O = 2(2,50·1,80 + 2,50·0,45 + 1,80·0,45)
  = 2(4,50 + 1,125 + 0,81)
  = 2 · 6,435 = 12,87 m²
```

### 🏗️ Bau-Beispiel 1 – Streifenfundament

Ein Streifenfundament ist **0,80 m breit**, **0,60 m hoch** und läuft um ein Gebäude von **12,00 m × 9,00 m** herum (Außenmaße, Fundament liegt mittig unter der Wand).

**Schritt 1 – Länge des Streifens (Umfang):**
```
U = 2 · (12,00 + 9,00) = 42,00 m
```

**Schritt 2 – Querschnittsfläche:**
```
A = 0,80 · 0,60 = 0,48 m²
```

**Schritt 3 – Volumen:**
```
V = A · U = 0,48 · 42,00 = 20,16 m³
```

> ### ⚠️ Vorsicht bei den Ecken
> Bei umlaufenden Fundamenten wird an den vier Ecken sonst **doppelt gerechnet**. Genau genommen muss man mit der **Mittellinie** des Fundaments rechnen:
> ```
> Mittellinie = 2 · (12,00 − 0,80) + 2 · (9,00 − 0,80) = 2·11,20 + 2·8,20 = 38,80 m
> V = 0,48 · 38,80 = 18,62 m³
> ```
> **Differenz: 1,54 m³** – das sind bei 120 €/m³ rund **185 €**. In der Abrechnung ist das relevant.

### 🏗️ Bau-Beispiel 2 – Wand mit Öffnungen

Eine Betonwand: **8,00 m lang**, **2,75 m hoch**, **0,24 m dick**. Abzüglich einer Türöffnung **1,01 m × 2,135 m**.

```
V_brutto = 8,00 · 2,75 · 0,24 = 5,280 m³
V_Tür    = 1,01 · 2,135 · 0,24 = 0,5175 m³
──────────────────────────────────────────
V_netto  = 5,280 − 0,518 = 4,762 m³  ≈  4,76 m³
```

Mit 5 % Zuschlag: **5,0 m³ Beton bestellen**.

### 🏗️ Bau-Beispiel 3 – Dreiecksprisma (Pultdach-Aufbau)

Ein keilförmiger Gefälleestrich: Grundfläche **6,00 m × 4,00 m**, Dicke von **0,04 m** auf **0,12 m** ansteigend.

Der Querschnitt ist ein **Trapez** (nicht Dreieck):
```
A_quer = ½ · (0,04 + 0,12) · 6,00 = ½ · 0,16 · 6,00 = 0,48 m²
V = A_quer · Breite = 0,48 · 4,00 = 1,92 m³
```

> **Alternative Denkweise:** mittlere Dicke = (0,04 + 0,12)/2 = 0,08 m
> ```
> V = 6,00 · 4,00 · 0,08 = 1,92 m³ ✓
> ```

---

## 3.2 Zylinder, Pyramide und Kegel

### Der Zylinder

Ein Zylinder ist ein Prisma mit **kreisförmiger** Grundfläche.

> ### 💡 Formeln
> ```
> V = π · r² · h
> M = 2 · π · r · h                (Mantelfläche)
> O = 2 · π · r² + 2 · π · r · h   (Grund + Deck + Mantel)
> ```

### 📐 Lehrbeispiel 1 – Zylinder

Rundstütze: **d = 0,40 m**, **h = 3,20 m**.

```
r = 0,20 m
V = π · 0,20² · 3,20 = π · 0,04 · 3,20 = 0,4021 m³
M = 2π · 0,20 · 3,20 = 4,021 m²        (Schalungsfläche!)
O = 2π · 0,04 + 4,021 = 0,2513 + 4,021 = 4,272 m²
```

> **Praxisnutzen:** Die **Mantelfläche** ist die benötigte **Schalungsfläche** – bei Rundstützen also die Menge an Rundschalung.

### Der Hohlzylinder (Rohr)

```
V = π · (R² − r²) · h = π · (R+r)(R−r) · h
```

### 🏗️ Bau-Beispiel – Betonrohr

Außendurchmesser **1,20 m**, Wanddicke **0,12 m**, Länge **2,50 m**.

```
R = 0,60 m,  r = 0,48 m
V = π · (0,60 + 0,48)(0,60 − 0,48) · 2,50
  = π · 1,08 · 0,12 · 2,50
  = π · 0,324
  = 1,018 m³
```

### Pyramide und Kegel

> ### 💡 Die Drittel-Regel
> **Pyramide und Kegel haben genau ⅓ des Volumens** von Prisma bzw. Zylinder mit gleicher Grundfläche und Höhe.
> ```
> Pyramide:  V = ⅓ · G · h
> Kegel:     V = ⅓ · π · r² · h
> ```

```
   Prisma          Pyramide
   ┌────┐             ╱╲
   │    │            ╱  ╲
   │    │  h        ╱    ╲   h
   │    │          ╱      ╲
   └────┘         └────────┘
   V = G·h        V = ⅓·G·h
```

### Oberflächen

| Körper | Oberfläche |
|--------|-----------|
| **Pyramide** | O = G + M (M = Summe der Seitendreiecke) |
| **Kegel** | O = π·r² + π·r·s |

Dabei ist **s die Mantellinie** (Seitenlinie vom Rand zur Spitze):
```
s = √(r² + h²)          (Pythagoras!)
```

### 📐 Lehrbeispiel 2 – Kegel

Ein Kegel: **r = 1,50 m**, **h = 2,00 m**.

```
V = ⅓ · π · 1,50² · 2,00 = ⅓ · π · 2,25 · 2,00 = ⅓ · 14,137 = 4,712 m³

s = √(1,50² + 2,00²) = √(2,25 + 4,00) = √6,25 = 2,50 m
M = π · 1,50 · 2,50 = 11,78 m²
O = π · 1,50² + 11,78 = 7,069 + 11,78 = 18,85 m²
```

### 🏗️ Bau-Beispiel – Schüttkegel

Auf der Baustelle liegt ein Sandhaufen (Schüttkegel): **Durchmesser 6,40 m**, **Höhe 2,10 m**. Wie viel Sand ist das?

```
r = 3,20 m
V = ⅓ · π · 3,20² · 2,10 = ⅓ · π · 10,24 · 2,10 = ⅓ · 67,54 = 22,51 m³
```

**Masse bei ρ = 1,6 t/m³:**
```
m = 22,51 · 1,6 = 36,0 t
```

> ### 💡 Der Schüttwinkel
> Der **natürliche Böschungswinkel** eines Schüttgutkegels ist stoffabhängig:
> ```
> tan α = h / r = 2,10 / 3,20 = 0,656  →  α = 33,3°
> ```
> Typische Werte: Sand ≈ 30–35°, Kies ≈ 35–40°, Erde ≈ 40–45°.
> Kennt man den Schüttwinkel, kann man aus dem Durchmesser die Höhe abschätzen – praktisch, wenn man nicht auf den Haufen klettern will.

---

## 3.3 Die Kugel

> ### 💡 Formeln
> ```
> V = (4/3) · π · r³
> O = 4 · π · r²
> ```

### 📐 Lehrbeispiel – Kugel

Ein kugelförmiger Behälter mit **d = 2,40 m**:

```
r = 1,20 m
V = (4/3) · π · 1,20³ = (4/3) · π · 1,728 = 7,238 m³
O = 4 · π · 1,20² = 4 · π · 1,44 = 18,10 m²
```

> ### 💡 Merkhilfe
> - Die **Oberfläche** der Kugel ist genau **4-mal** so groß wie ihr größter Querschnittskreis (π·r²).
> - Beim Volumen steht **r³** – doppelter Radius heißt **achtfaches** Volumen (siehe LM3 K2).

---

## 3.4 Pyramiden- und Kegelstumpf

> ### 💡 Was ist ein Stumpf?
> Schneidet man von einer Pyramide oder einem Kegel die **Spitze parallel zur Grundfläche** ab, bleibt ein **Stumpf** übrig. Er hat zwei parallele, **ähnliche** Flächen: G₁ (unten) und G₂ (oben).

```
        ┌──── G₂ ────┐
       ╱              ╲
      ╱                ╲   h
     ╱                  ╲
    └───────  G₁  ───────┘
```

> ### 💡 Die Stumpfformel
> ```
> V = (h/3) · (G₁ + √(G₁ · G₂) + G₂)
> ```
> Der Term **√(G₁·G₂)** ist das **geometrische Mittel** der beiden Flächen.

**Für den Kegelstumpf** (mit Radien R und r):
```
V = (π · h / 3) · (R² + R·r + r²)
```

### 🏗️ Bau-Beispiel 1 – Baugrube mit Böschung

**Das ist die wichtigste Stereometrie-Aufgabe im Bau überhaupt.**

Eine Baugrube: **Sohle 12,00 m × 8,00 m**, **Tiefe 3,00 m**, Böschungsanlage **1 : 1** (also 45°).

**Schritt 1 – Maße oben bestimmen:**
Bei 1:1 und 3,00 m Tiefe springt die Böschung auf **jeder Seite** um 3,00 m zurück:
```
Länge oben  = 12,00 + 2 · 3,00 = 18,00 m
Breite oben =  8,00 + 2 · 3,00 = 14,00 m
```

**Schritt 2 – Flächen:**
```
G₁ (Sohle) = 12,00 · 8,00 = 96,00 m²
G₂ (oben)  = 18,00 · 14,00 = 252,00 m²
```

**Schritt 3 – Volumen mit der Stumpfformel:**
```
V = (3,00/3) · (96,00 + √(96,00 · 252,00) + 252,00)
  = 1,00 · (96,00 + √24 192 + 252,00)
  = 1,00 · (96,00 + 155,54 + 252,00)
  = 503,54 m³
```

**Antwort: rund 504 m³ Aushub.**

> ### ⚠️ Der häufigste Fehler bei Baugruben
> Viele rechnen mit der **mittleren Fläche**:
> ```
> Falsch: V = h · (G₁ + G₂)/2 = 3,00 · (96 + 252)/2 = 522 m³
> ```
> Das sind **18 m³ zu viel** (3,6 % Fehler) – bei 25 €/m³ Aushub immerhin **450 €**.
>
> **Warum?** Die Böschungsflächen laufen **schräg** zusammen, nicht linear in der Fläche. Nur die Stumpfformel mit dem geometrischen Mittel ist korrekt.

### 🏗️ Bau-Beispiel 2 – Trichter (Kegelstumpf)

Ein Betontrichter: oberer Durchmesser **1,80 m**, unterer **0,60 m**, Höhe **1,20 m**.

```
R = 0,90 m,  r = 0,30 m

V = (π · 1,20 / 3) · (0,90² + 0,90·0,30 + 0,30²)
  = 1,2566 · (0,81 + 0,27 + 0,09)
  = 1,2566 · 1,17
  = 1,470 m³
```

### 🏗️ Bau-Beispiel 3 – Fundamentklotz mit Anlauf

Ein Fundament ist unten **2,40 m × 2,40 m**, oben **1,20 m × 1,20 m**, Höhe **0,90 m**.

```
G₁ = 2,40² = 5,76 m²
G₂ = 1,20² = 1,44 m²

V = (0,90/3) · (5,76 + √(5,76 · 1,44) + 1,44)
  = 0,30 · (5,76 + √8,2944 + 1,44)
  = 0,30 · (5,76 + 2,88 + 1,44)
  = 0,30 · 10,08
  = 3,024 m³
```

---

## 3.5 Rotationskörper

> ### 💡 Was ist ein Rotationskörper?
> Ein **Rotationskörper** entsteht, wenn eine Fläche um eine **Achse gedreht** wird.

| Gedrehte Fläche | Entstehender Körper |
|-----------------|---------------------|
| Rechteck | **Zylinder** |
| rechtwinkliges Dreieck | **Kegel** |
| Halbkreis | **Kugel** |
| Trapez | **Kegelstumpf** |

### 🏗️ Bau-Beispiel – Zusammengesetzter Rotationskörper

Ein Wasserbehälter besteht aus einem **Zylinder** (d = 3,00 m, h = 4,00 m) mit einer aufgesetzten **Halbkugel**.

```
Zylinder:   V₁ = π · 1,50² · 4,00 = π · 2,25 · 4,00 = 28,274 m³
Halbkugel:  V₂ = ½ · (4/3) · π · 1,50³ = ½ · (4/3) · π · 3,375 = 7,069 m³
──────────────────────────────────────────────────────────────────
Gesamt:     V = 28,274 + 7,069 = 35,343 m³  ≈  35,34 m³
```

**Fassungsvermögen:** 35,34 m³ = **35 343 Liter**

---

## 📊 Die Formelübersicht

| Körper | Volumen V | Oberfläche O |
|--------|-----------|--------------|
| **Würfel** | a³ | 6a² |
| **Quader** | a·b·c | 2(ab+ac+bc) |
| **Prisma** | G·h | 2G + U·h |
| **Zylinder** | π·r²·h | 2πr² + 2πrh |
| **Hohlzylinder** | π(R²−r²)·h | – |
| **Pyramide** | ⅓·G·h | G + Mantel |
| **Kegel** | ⅓·π·r²·h | πr² + πrs, s=√(r²+h²) |
| **Kugel** | (4/3)·π·r³ | 4πr² |
| **Stumpf** | (h/3)(G₁+√(G₁G₂)+G₂) | G₁ + G₂ + Mantel |

### Massen aus Volumen

> ### 💡 Die Brücke zur Naturwissenschaft
> ```
> m = V · ρ          (Masse = Volumen · Dichte)
> ```
> | Baustoff | Dichte ρ |
> |----------|---------:|
> | Stahlbeton | 2,5 t/m³ |
> | Beton unbewehrt | 2,4 t/m³ |
> | Mauerwerk (Vollziegel) | 1,8 t/m³ |
> | Kies, Sand (locker) | 1,6 t/m³ |
> | Erde (gewachsen) | 1,8 t/m³ |
> | Stahl | 7,85 t/m³ |
> | Wasser | 1,0 t/m³ |

**Beispiel:** 20,16 m³ Stahlbeton
```
m = 20,16 · 2,5 = 50,4 t
```

> ### 💡 Auflockerungsfaktor beim Aushub
> Ausgehobener Boden nimmt **mehr Volumen** ein als im gewachsenen Zustand:
> ```
> Auflockerung ≈ 1,20 bis 1,35
> ```
> **Beispiel:** 504 m³ Baugrubenaushub → auf LKW etwa 504 · 1,25 = **630 m³** Ladevolumen.
> Bei 10-m³-Muldenkippern also rund **63 Fuhren** statt 50.

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Quader
Fundament **3,20 m × 2,50 m × 0,55 m**.
**1.1** Volumen? **1.2** Oberfläche? **1.3** Masse bei ρ = 2,4 t/m³?

<details><summary>Lösung anzeigen</summary>

**1.1** V = 3,20 · 2,50 · 0,55 = **4,40 m³**
**1.2** O = 2(3,20·2,50 + 3,20·0,55 + 2,50·0,55) = 2(8,00 + 1,76 + 1,375) = **22,27 m²**
**1.3** m = 4,40 · 2,4 = **10,56 t**
</details>

### Aufgabe 2 · Zylinder
Rundstütze **d = 0,50 m**, **h = 3,60 m**.
**2.1** Volumen? **2.2** Schalungsfläche (Mantel)?

<details><summary>Lösung anzeigen</summary>

**2.1** r = 0,25 → V = π · 0,0625 · 3,60 = **0,7069 m³**
**2.2** M = 2π · 0,25 · 3,60 = **5,655 m²**
</details>

### Aufgabe 3 · Kegel
**r = 2,00 m**, **h = 3,00 m**.
**3.1** Volumen? **3.2** Mantellinie s? **3.3** Oberfläche?

<details><summary>Lösung anzeigen</summary>

**3.1** V = ⅓ · π · 4,00 · 3,00 = **12,566 m³**
**3.2** s = √(2,00² + 3,00²) = √13 = **3,606 m**
**3.3** O = π·4,00 + π·2,00·3,606 = 12,566 + 22,66 = **35,23 m²**
</details>

### Aufgabe 4 · Kugel
**d = 1,60 m**.
**4.1** Volumen? **4.2** Oberfläche?

<details><summary>Lösung anzeigen</summary>

r = 0,80 m
**4.1** V = (4/3)·π·0,512 = **2,145 m³**
**4.2** O = 4π·0,64 = **8,042 m²**
</details>

### Aufgabe 5 · Prisma
Ein Dreiecksprisma: Grundseite **4,00 m**, Dreieckshöhe **2,50 m**, Länge **8,00 m**.

<details><summary>Lösung anzeigen</summary>

```
G = ½ · 4,00 · 2,50 = 5,00 m²
V = 5,00 · 8,00 = 40,00 m³
```
</details>

### 🏗️ Aufgabe 6 · Streifenfundament
Gebäude **15,00 m × 10,00 m** (Außenmaße). Fundament **0,70 m breit**, **0,80 m hoch**.
**6.1** Länge über Mittellinie? **6.2** Volumen? **6.3** Masse (ρ = 2,4 t/m³)?

<details><summary>Lösung anzeigen</summary>

**6.1**
```
L = 2·(15,00 − 0,70) + 2·(10,00 − 0,70) = 2·14,30 + 2·9,30 = 47,20 m
```
**6.2** V = 0,70 · 0,80 · 47,20 = **26,43 m³**
**6.3** m = 26,43 · 2,4 = **63,4 t**
</details>

### 🏗️ Aufgabe 7 · Wand mit Öffnungen
Betonwand **10,00 m × 3,00 m × 0,30 m**. Abzüglich 2 Fenster à **1,26 m × 1,38 m** und 1 Tür **1,01 m × 2,01 m**.

<details><summary>Lösung anzeigen</summary>

```
V_brutto  = 10,00 · 3,00 · 0,30 = 9,000 m³
Fenster   = 2 · 1,26 · 1,38 · 0,30 = 1,0433 m³
Tür       = 1,01 · 2,01 · 0,30 = 0,6090 m³
──────────────────────────────────────────
V_netto   = 9,000 − 1,043 − 0,609 = 7,348 m³ ≈ 7,35 m³
```
</details>

### 🏗️ Aufgabe 8 · Schüttkegel
Kieshaufen: **Durchmesser 7,20 m**, **Höhe 2,40 m**.
**8.1** Volumen? **8.2** Masse bei ρ = 1,6 t/m³? **8.3** Schüttwinkel?

<details><summary>Lösung anzeigen</summary>

**8.1** r = 3,60 → V = ⅓·π·12,96·2,40 = **32,57 m³**
**8.2** m = 32,57 · 1,6 = **52,1 t**
**8.3** tan α = 2,40/3,60 = 0,6667 → α = **33,7°**
</details>

### 🏗️ Aufgabe 9 · Baugrube (Pyramidenstumpf)
Sohle **10,00 m × 6,00 m**, Tiefe **2,50 m**, Böschung **1 : 1**.
**9.1** Maße oben? **9.2** Aushubvolumen? **9.3** Wie viele 10-m³-Kipper bei Auflockerung 1,25?

<details><summary>Lösung anzeigen</summary>

**9.1**
```
Länge oben  = 10,00 + 2·2,50 = 15,00 m
Breite oben =  6,00 + 2·2,50 = 11,00 m
```

**9.2**
```
G₁ = 10,00 · 6,00 = 60,00 m²
G₂ = 15,00 · 11,00 = 165,00 m²

V = (2,50/3) · (60,00 + √(60·165) + 165,00)
  = 0,8333 · (60,00 + √9900 + 165,00)
  = 0,8333 · (60,00 + 99,50 + 165,00)
  = 0,8333 · 324,50
  = 270,4 m³
```

**9.3**
```
Ladevolumen = 270,4 · 1,25 = 338,0 m³
Fuhren = 338,0 : 10 = 33,8  →  34 Fuhren
```
</details>

### 🏗️ Aufgabe 10 · Baugrube – Vergleich der Methoden
Rechne Aufgabe 9 zusätzlich (falsch) mit der **mittleren Fläche** und vergleiche.

<details><summary>Lösung anzeigen</summary>

```
Falsche Methode: V = h · (G₁+G₂)/2 = 2,50 · (60+165)/2 = 2,50 · 112,5 = 281,25 m³
Richtige Methode:                                                       270,4 m³
Differenz:                                                               10,85 m³
```
Das sind **4,0 % zu viel**. Bei 25 €/m³ Aushub wären das rund **271 €** Fehlbetrag in der Kalkulation.
</details>

### 🏗️ Aufgabe 11 · Kegelstumpf
Ein Silotrichter: oben **d = 2,40 m**, unten **d = 0,80 m**, Höhe **1,50 m**.

<details><summary>Lösung anzeigen</summary>

```
R = 1,20 m,  r = 0,40 m

V = (π · 1,50 / 3) · (1,20² + 1,20·0,40 + 0,40²)
  = 1,5708 · (1,44 + 0,48 + 0,16)
  = 1,5708 · 2,08
  = 3,267 m³
```
</details>

### 🏗️ Aufgabe 12 · Zusammengesetzter Körper
Ein Behälter: Zylinder **d = 2,50 m**, **h = 3,00 m**, oben eine **Halbkugel**.
**12.1** Gesamtvolumen? **12.2** In Litern?

<details><summary>Lösung anzeigen</summary>

r = 1,25 m
```
Zylinder:  V₁ = π · 1,5625 · 3,00 = 14,726 m³
Halbkugel: V₂ = ½ · (4/3) · π · 1,953 = 4,091 m³
Gesamt:    V  = 18,817 m³
```
**12.2** = **18 817 Liter**
</details>

### 🏗️ Aufgabe 13 · Gefälleestrich
Ein Estrich läuft über **8,00 m Länge** von **0,05 m** auf **0,15 m** Dicke an. Die Fläche ist **5,00 m** breit.

<details><summary>Lösung anzeigen</summary>

```
mittlere Dicke = (0,05 + 0,15)/2 = 0,10 m
V = 8,00 · 5,00 · 0,10 = 4,00 m³
```
</details>

### 🏗️ Aufgabe 14 · Rohrleitung
Ein Betonrohr **DN 800** (Innendurchmesser 0,80 m), Wanddicke **0,10 m**, Länge **3,00 m**.
**14.1** Betonvolumen? **14.2** Masse (ρ = 2,4 t/m³)?

<details><summary>Lösung anzeigen</summary>

**14.1**
```
r = 0,40 m,  R = 0,40 + 0,10 = 0,50 m
V = π · (0,50 + 0,40)(0,50 − 0,40) · 3,00
  = π · 0,90 · 0,10 · 3,00
  = π · 0,27 = 0,848 m³
```
**14.2** m = 0,848 · 2,4 = **2,04 t**
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich kenne die Grundformel für **Prismen**: V = G · h.
- [ ] Ich berechne **Zylinder** (V = π·r²·h) und weiß, dass der **Mantel die Schalungsfläche** ist.
- [ ] Ich kenne die **Drittel-Regel** für Pyramide und Kegel.
- [ ] Ich berechne die **Mantellinie** s = √(r²+h²) beim Kegel.
- [ ] Ich kenne die **Kugelformeln** (V = 4/3·π·r³, O = 4π·r²).
- [ ] Ich beherrsche die **Stumpfformel** V = (h/3)(G₁+√(G₁G₂)+G₂).
- [ ] Ich weiß, dass eine **Baugrube mit Böschung** ein Pyramidenstumpf ist – **nicht** die mittlere Fläche!
- [ ] Ich bestimme bei Böschungen die **Maße oben** aus Tiefe und Anlage.
- [ ] Ich zerlege **zusammengesetzte Körper** in Grundkörper.
- [ ] Ich rechne bei umlaufenden Fundamenten mit der **Mittellinie** (keine Doppelzählung der Ecken).
- [ ] Ich berechne **Massen** über m = V · ρ und kenne die typischen Dichten.
- [ ] Ich berücksichtige beim Aushub den **Auflockerungsfaktor**.

**Damit ist Lernmodul 4 – und damit die gesamte Mathematik I des 1. Semesters – abgeschlossen.**
**Nächstes Fach:** Naturwissenschaft LM1 – Mechanik
