# Naturwissenschaft – Lernmodul 1 · AUSFÜHRLICH (Nachschlagewerk)
## Grundlagen der Mechanik anwenden

> Quelle: `Unterlagen/Semester-1/Naturwissenschaft/Naturwissenschaft_Lernmodul-1.txt`
> 📄 **Zwei Varianten:** [← Kompakt-Fassung](LM1_Mechanik_kompakt.md) · Diese **ausführliche** Fassung mit Erklärungen, Formeln und Bau-Bezug.
> 📐 **Formelsammlung** ist offizielles **Prüfungshilfsmittel** (zur Prüfung mitbringen): `Unterlagen/Semester-1/Naturwissenschaft/Naturwissenschaft_Formeln.txt`

**Inhalt**
1. [Messen und Maßeinheiten](#1-messen-und-maßeinheiten-in-der-physik)
2. [Mechanik der festen Körper](#2-mechanik-der-festen-körper) · [2.1 Körperbegriff](#21-körperbegriff-dichte--wichte) · [2.2 Kräfte](#22-kräfte) · [2.3 Hebel & Drehmoment](#23-hebelgesetz-und-drehmoment) · [2.4 Bewegungen](#24-bewegungen-fester-körper) · [2.5 Kräfte und Bewegung](#25-kräfte-und-bewegung-newton) · [2.6 Arbeit, Energie, Leistung](#26-arbeit-energie-und-leistung)
3. [Flüssigkeiten und Gase](#3-mechanik-der-flüssigkeiten-und-gase)

---

# 1 Messen und Maßeinheiten in der Physik
Seit 1978 gelten in Deutschland verbindlich die **SI-Einheiten** (Système International d'Unités). Alle physikalischen Gesetze lassen sich auf **sieben SI-Basisgrößen** zurückführen. Zuständig für Maßvergleiche ist in Deutschland die **Physikalisch-Technische Bundesanstalt (PTB)** in Braunschweig.

| Basisgröße | Formelzeichen | Basiseinheit |
|-----------|:-------------:|--------------|
| Zeit | t | Sekunde [s] |
| Länge | l | Meter [m] |
| Masse | m | Kilogramm [kg] |
| elektrische Stromstärke | I | Ampere [A] |
| Temperatur | T | Kelvin [K] |
| Lichtstärke | I_v | Candela [cd] |
| Stoffmenge | n | Mol [mol] |

**Definitionen (Auszug):** 1 Sekunde = das 9 192 631 770-fache der Periodendauer einer bestimmten Cäsium-Strahlung · 1 Meter = Strecke, die Licht im Vakuum in 1/299 792 458 s zurücklegt · 1 Kelvin = der 273,16te Teil der Temperatur des Wassertripelpunkts.
*(Hinweis aus dem Modul: Das Kilogramm war bis zum 19. Mai 2019 über einen Prototyp definiert, heute über die Plancksche Konstante.)*

**Vorsätze:** k = 10³, M = 10⁶ · m = 10⁻³, µ = 10⁻⁶ (siehe Mathe LM1, Zehnerpotenzen).

---

# 2 Mechanik der festen Körper

## 2.1 Körperbegriff: Dichte & Wichte
> **Dichte** ρ = m / V  [kg/dm³]  ·  **Wichte** γ = F_G / V  [N/dm³]

Die Dichte kennzeichnet den Stoff (z. B. Stahl ≈ 7,85 kg/dm³, Beton ≈ 2,4 kg/dm³). Die Wichte ist das „Gewicht pro Volumen".

**Beispiel (Bau):** Betonfundament V = 1,2 m³, ρ = 2400 kg/m³ → m = ρ·V = **2880 kg**; Gewichtskraft F_G = m·g ≈ 28 253 N ≈ 28,3 kN.

## 2.2 Kräfte
Eine **Kraft** erkennt man an ihrer Wirkung: sie verformt einen Körper oder ändert seinen Bewegungszustand.

> **F = m · a**  [1 N = 1 kg·m/s²]  ·  **Gewichtskraft F_G = m · g** (g ≈ 9,81 m/s²)

**Kräfte sind Vektoren** – sie haben Betrag, Richtung und Angriffspunkt.

**Kraftzerlegung in Komponenten:**
- F_x = F · cos α · F_y = F · sin α
- Rückrechnung: **F = √(F_x² + F_y²)** · tan α = F_y / F_x

**Kräfteaddition:** Komponentenweise addieren: F_x,res = ΣF_x, F_y,res = ΣF_y, dann F_res = √(F_x,res² + F_y,res²).

**Kräfte an der schiefen Ebene** (Neigungswinkel α):
- **Normalkraft** F_N = m·g·**cos** α (senkrecht zur Ebene)
- **Hangabtriebskraft** F_H = m·g·**sin** α (parallel zur Ebene, „zieht" den Körper hinab)

**Reibung:**
- **Haftreibung** (Körper bewegt sich noch nicht): F_R,max = **µ₀ · F_N**
- **Gleitreibung** (Körper bewegt sich): F_R = **µ · F_N**
- µ₀ und µ sind Reibungszahlen (µ₀ > µ).

**Hookesches Gesetz (Federkraft):**
> **F_Fe = c · s**  (c = Federsteifigkeit in N/mm, s = Federweg in mm)

- **Reihenschaltung** von Federn: 1/c_res = 1/c₁ + 1/c₂ + … (weicher)
- **Parallelschaltung:** c_res = c₁ + c₂ + … (steifer)

## 2.3 Hebelgesetz und Drehmoment
Das Produkt aus Kraft und Hebelarm ist das **Drehmoment**:
> **M = F · l**  bzw.  **M = F · r**  [Nm]

**Kräftepaar:** Zwei gleich große, entgegengesetzt gerichtete Kräfte erzeugen ein reines Drehmoment.

> **Allgemeiner Hebelsatz:** Σ M_links = Σ M_rechts → **F₁ · l₁ = F₂ · l₂**

**Statische Gleichgewichtsbedingungen** (zentral für Bautechnik/Statik):
> **ΣF_x = 0** · **ΣF_y = 0** · **ΣM = 0**

**Beispiel:** Ein Hebel trägt links 200 N im Abstand 0,3 m. Welche Kraft ist rechts bei 1,2 m nötig?
F₂ = (200 · 0,3) / 1,2 = **50 N**.

## 2.4 Bewegungen fester Körper

**Gleichförmige Bewegung** (v konstant):
> **v = s / t**  [m/s] · Umrechnung: 1 m/s = 3,6 km/h

**Gleichmäßig beschleunigte Bewegung:**
> **a = Δv / Δt**  ·  **v = a · t**  ·  **s = ½ · a · t²**  ·  **v = √(2·a·s)**

Mit Anfangsgeschwindigkeit v₀: v = v₀ + a·t · s = v₀·t + ½·a·t² · v² = v₀² + 2·a·s

**Bewegungen unter Erdbeschleunigung (g ≈ 9,81 m/s²):**
- **Freier Fall:** v = g·t · h = ½·g·t² · **v = √(2·g·h)**
- **Senkrechter Wurf nach oben:** v = v₀ − g·t · h = v₀·t − ½·g·t²
- **Schräger Wurf:** Wurfweite s_x = v₀·cos α · t · Steigzeit t_s = v₀·sin α / g · Scheitelhöhe h_max = v₀²·sin²α / (2g) · Flugzeit T = 2·v₀·sin α / g

**Kreisbewegung:**
| Größe | Formel | Einheit |
|-------|--------|---------|
| Drehzahl | n = u / t | 1/s |
| Umfangsgeschwindigkeit | v = π · d · n | m/s |
| Umlaufzeit | T = 1 / n | s |
| Frequenz | f = 1 / T | Hz (1 Hz = 1 s⁻¹) |
| Winkelgeschwindigkeit | ω = 2π · f = φ/t | 1/s |
| Bahngeschwindigkeit | v = ω · r | m/s |

Winkelumrechnung: 180° ≙ π rad.

## 2.5 Kräfte und Bewegung (Newton)
Die **Trägheit** eines Körpers ist seine Eigenschaft, den Bewegungszustand beizubehalten; ihr Maß ist die **Masse m**.

**Newtonsche Axiome:**
1. **Trägheitsgesetz:** Ein Körper bleibt in Ruhe oder in gleichförmiger geradliniger Bewegung, solange keine resultierende Kraft wirkt.
2. **Grundgesetz der Mechanik:** F = m · a – die Beschleunigung ist proportional zur Kraft und umgekehrt proportional zur Masse.
3. **Wechselwirkungsgesetz:** actio = reactio – Kräfte treten immer paarweise auf, gleich groß und entgegengesetzt.

## 2.6 Arbeit, Energie und Leistung

### 2.6.1 Mechanische Arbeit
> **W = F · s**  [1 Ws = 1 Nm = 1 J (Joule)]

Arbeit wird nur verrichtet, wenn die Kraft **in Wegrichtung** wirkt (sonst W = F·s·cos α).

| Arbeitsform | Formel |
|-------------|--------|
| Hubarbeit (potenziell) | W_pot = F_G · h = m · g · h |
| Beschleunigungsarbeit (kinetisch) | W_kin = ½ · m · v² |
| Federarbeit (elastisch) | W_elast = ½ · c · s² |
| Rotationsarbeit | W_rot = M · φ = ½ · J · ω² |

### 2.6.2 Formen der Energie
**Energie** ist gespeicherte Arbeitsfähigkeit – gleiche Formeln, andere Bedeutung:
- **E_pot = m · g · h** (Lageenergie)
- **E_kin = ½ · m · v²** (Bewegungsenergie)
- **E_elast = ½ · c · s²** (Spannenergie)
- **E_rot = ½ · J · ω²** (Rotationsenergie)

> **Energieerhaltungssatz:** E_End = E_Anfang + W_zu − W_ab
> Energie geht nicht verloren, sie wandelt sich nur um.

**Beispiel:** Eine Kugel rollt in eine Mulde – während die Höhe abnimmt, sinkt E_pot und E_kin steigt im gleichen Maß.

### 2.6.3 Leistung und Wirkungsgrad
> **P = W / t** = **F · v** (bei konstanter Geschwindigkeit) [1 W = 1 Nm/s = 1 J/s]

Leistung ist Arbeit **pro Zeit** – wie schnell Arbeit verrichtet wird.

> **Wirkungsgrad η = W_ab / W_zu = P_ab / P_zu** (immer < 1, da es Verluste gibt)
> **Mehrere Stufen:** η_ges = η₁ · η₂ · η₃ · …

**Beispiel:** Ein Motor nimmt 5 kW auf und gibt 4 kW ab → η = 4/5 = **0,8 = 80 %**.

### 2.6.4 Einfache Maschinen
Hebel, Rolle, Flaschenzug, schiefe Ebene, Schraube – sie ändern **Kraft und Weg**, aber nie die Arbeit („Goldene Regel der Mechanik": was man an Kraft spart, muss man an Weg zulegen).
Beim **Schraubgewinde** treten Gewindereibmoment, Auflagereibmoment und daraus das **Anzugsmoment** auf (Steigungswinkel α, Reibwinkel ρ, Flankenradius r_Fl).

---

# 3 Mechanik der Flüssigkeiten und Gase

## 3.1 Flüssigkeiten
> **Druck p = F / A**  [1 Pa = 1 N/m²] · **1 bar = 10⁵ Pa** · 1 N/cm² = 10⁴ Pa

- **Schweredruck (hydrostatischer Druck):** **p_h = ρ · g · h** – hängt nur von Dichte und Höhe ab, nicht von der Gefäßform.
- **Bodenkraft:** F_B = p · A = ρ · g · h · A
- **Seitenkraft:** F_S = ρ · g · A · y₀ mit dem Schwerpunkt y₀ = h/2
- **Hydraulischer Hebebock (Kraftübersetzung):**
  > **F₁ / F₂ = A₁ / A₂** bzw. p = F₁/A₁ = F₂/A₂ · Wegverhältnis s₁/s₂ = A₂/A₁
- **Auftrieb:** F_A = ρ_Flüssigkeit · g · V_verdrängt (Archimedes)

**Beispiel (Bau):** Wasserdruck in 3 m Tiefe: p = 1000 · 9,81 · 3 = **29 430 Pa ≈ 0,29 bar**.

## 3.2 Gase
> **Allgemeine Zustandsgleichung des idealen Gases:** **p · V / T = konstant**

Gase sind im Gegensatz zu Flüssigkeiten **kompressibel**. Aus der Zustandsgleichung folgen die Spezialfälle (siehe LM2): isobar (p konst.), isochor (V konst.), isotherm (T konst.).

## 3.3 Dynamik der Flüssigkeiten und Gase
Strömungslehre: Volumenstrom, Kontinuitätsgleichung (A₁·v₁ = A₂·v₂) und Energiebetrachtung der Strömung.

---

# ✅ Lernkontrolle
- Die **7 SI-Basisgrößen** mit Einheiten nennen.
- **Dichte/Wichte** berechnen und Massen/Gewichtskräfte daraus bestimmen.
- Kräfte **zerlegen und addieren**; Normal- und Hangabtriebskraft an der schiefen Ebene.
- **Reibungskräfte** und **Federkräfte** (Hooke) berechnen.
- **Drehmoment** und **Hebelgesetz** anwenden; die drei **Gleichgewichtsbedingungen** aufstellen.
- Gleichförmige und beschleunigte **Bewegungen**, freier Fall, Kreisbewegung rechnen.
- **Arbeit, Energie, Leistung, Wirkungsgrad** unterscheiden und berechnen; Energieerhaltung anwenden.
- **Druck, Schweredruck, Hydraulik und Auftrieb** berechnen.

→ Karteikarten: `Karteikarten/Semester-1/Naturwissenschaft_LM1.csv` · Übungen: `Uebungsaufgaben/Semester-1/Naturwissenschaft_LM1_Uebungen.md`
