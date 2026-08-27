# Naturwissenschaft · Lernmodul 1 · Kapitel 1
# Messen und Maßeinheiten in der Physik

> **Lernkapitel zum Selbststudium.** Quelle: DAA Naturwissenschaft, Lernmodul 1, Lernbereich 1 · **Zeitaufwand: ca. 2–3 Stunden**
> 📐 **Formelsammlung** ist offizielles **Prüfungshilfsmittel** – lerne, dich darin zurechtzufinden.

**Was du am Ende können musst**
- Die **sieben SI-Basisgrößen** mit Einheiten nennen.
- Zwischen **Basisgrößen** und **abgeleiteten Größen** unterscheiden.
- Mit **Einheiten rechnen** (Einheitenkontrolle als Fehlerprüfung).
- **Vorsätze** sicher umrechnen.
- **Größengleichungen** richtig aufschreiben.

**Inhalt:** [1.1 Physikalische Größen](#11-was-ist-eine-physikalische-größe) · [1.2 SI-Basisgrößen](#12-die-sieben-si-basisgrößen) · [1.3 Abgeleitete Größen](#13-abgeleitete-größen) · [1.4 Einheiten umrechnen](#14-mit-einheiten-rechnen) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

Physik beginnt mit dem **Messen**. Und Messen heißt: eine Größe mit einer **Einheit** vergleichen.

Für dich als Bautechniker ist das keine Formsache. **Die häufigste Fehlerquelle in technischen Rechnungen sind falsche Einheiten** – nicht falsche Formeln:

| Typischer Fehler | Folge |
|------------------|-------|
| kN mit N verwechselt | Faktor **1000** |
| N/mm² mit N/m² verwechselt | Faktor **1 000 000** |
| cm² mit m² verwechselt | Faktor **10 000** |
| t mit kg verwechselt | Faktor **1000** |

> ### 💡 Die wichtigste Angewohnheit
> **Schreibe bei jeder Rechnung die Einheiten mit** – von Anfang bis Ende. Wenn am Schluss die richtige Einheit herauskommt, ist die Formel mit hoher Wahrscheinlichkeit richtig. Kommt Unsinn heraus (z. B. „kg/s" statt „N"), hast du einen Fehler gemacht. Das ist die **billigste Fehlerkontrolle**, die es gibt.

---

## 1.1 Was ist eine physikalische Größe?

> ### 💡 Definition
> Eine **physikalische Größe** besteht immer aus **Zahlenwert × Einheit**:
> ```
> G = {G} · [G]
> ```
> Beispiel:  **m = 1 kg**  ·  **l = 1 km**

**Ohne Einheit ist eine Zahl in der Physik wertlos.** „Die Stütze trägt 450" ist keine Aussage – 450 N? 450 kN? 450 t?

### Schreibweise

| Element | Beispiel | Regel |
|---------|----------|-------|
| **Formelzeichen** | m, F, A, ρ | kursiv, meist ein Buchstabe |
| **Zahlenwert** | 1; 2,5; 9,81 | |
| **Einheit** | kg, N, m² | aufrecht, mit Leerzeichen davor |

```
Richtig:  F = 450 kN
Falsch:   F = 450kN      (Leerzeichen fehlt)
Falsch:   F = 450         (Einheit fehlt)
```

---

## 1.2 Die sieben SI-Basisgrößen

### Der historische Hintergrund

Durch das **Gesetz über Einheiten im Messwesen** vom 2. Juli 1969 wurden ab dem **1. Januar 1978** die **SI-Einheiten** (Système International d'Unités) in Deutschland eingeführt. Seither dürfen im amtlichen und geschäftlichen Verkehr **nur noch SI-Maßeinheiten** benutzt werden.

Man hat versucht, alle physikalischen Größen auf **möglichst wenige unabhängige** Einheiten zurückzuführen – das sind die **sieben SI-Basisgrößen**. Alle physikalischen Gesetze lassen sich auf sie zurückführen.

> **Zuständig in Deutschland:** die **Physikalisch-Technische Bundesanstalt (PTB)** in Braunschweig. Weltweit gibt es nur wenige solcher Mess- und Eichlaboratorien.

### Die Tabelle (auswendig!)

> ### 💡 Die sieben SI-Basisgrößen
> | Größe | Formelzeichen | Basiseinheit | Zeichen |
> |-------|:-------------:|--------------|:-------:|
> | **Zeit** | t | Sekunde | **s** |
> | **Länge** | l | Meter | **m** |
> | **Masse** | m | Kilogramm | **kg** |
> | **elektrische Stromstärke** | I | Ampere | **A** |
> | **Temperatur** | T | Kelvin | **K** |
> | **Lichtstärke** | I_v | Candela | **cd** |
> | **Stoffmenge** | n | Mol | **mol** |

### Wie die Einheiten definiert sind

| Einheit | Definition |
|---------|-----------|
| **1 Sekunde** | das 9 192 631 770-fache der Periodendauer einer bestimmten Cäsium-133-Strahlung |
| **1 Meter** | die Strecke, die Licht im Vakuum in **1/299 792 458 Sekunden** zurücklegt |
| **1 Ampere** | die Stromstärke eines zeitlich unveränderlichen Stroms unter definierten Bedingungen |
| **1 Kelvin** | der 273,16-te Teil der thermodynamischen Temperatur des **Tripelpunktes von Wasser** |
| **1 Candela** | die Lichtstärke einer Strahlungsquelle in einer bestimmten Richtung |
| **1 Mol** | die Stoffmenge eines Systems mit ebenso vielen Teilchen wie Atome in 12 g Kohlenstoff-12 |

### Das Kilogramm – ein Sonderfall

Das Kilogramm wurde **1799** erstmals durch einen Prototyp (Zylinder) festgelegt, **1889** durch einen neuen Prototyp ersetzt.

**Bis zum 19. Mai 2019** galt die Definition:
> „Das Kilogramm ist die Einheit der Masse; es entspricht der Masse des Internationalen Kilogrammprototyps."

**Seit 2019** basiert die Definition auf einem festgelegten Zahlenwert der **Planckschen Konstante** – also auf einer Naturkonstante statt auf einem Metallklotz.

> ### 💡 Warum das wichtig ist
> Ein physischer Prototyp kann sich **verändern** (Verschmutzung, Abrieb). Naturkonstanten nicht. Seit 2019 sind **alle** SI-Einheiten über Naturkonstanten definiert – weltweit reproduzierbar, ohne dass man nach Paris fahren muss.

---

## 1.3 Abgeleitete Größen

Alle anderen Größen sind **abgeleitet** – sie entstehen durch Multiplikation oder Division der Basisgrößen.

### Die wichtigsten für den Bau

| Größe | Formelzeichen | Einheit | Zurückgeführt auf Basiseinheiten |
|-------|:-------------:|---------|----------------------------------|
| **Fläche** | A | m² | m · m |
| **Volumen** | V | m³ | m · m · m |
| **Geschwindigkeit** | v | m/s | m · s⁻¹ |
| **Beschleunigung** | a | m/s² | m · s⁻² |
| **Dichte** | ρ | kg/m³ | kg · m⁻³ |
| **Kraft** | F | **N** (Newton) | **kg · m/s²** |
| **Druck / Spannung** | p, σ | **Pa** (Pascal) | N/m² = kg/(m·s²) |
| **Arbeit / Energie** | W, E | **J** (Joule) | N·m = kg·m²/s² |
| **Leistung** | P | **W** (Watt) | J/s = kg·m²/s³ |
| **Frequenz** | f | **Hz** (Hertz) | 1/s = s⁻¹ |

### 📐 Lehrbeispiel – Woher kommt das Newton?

Aus dem Grundgesetz der Mechanik F = m · a:

```
[F] = [m] · [a] = kg · m/s²
```

Diese Kombination bekam den Namen **Newton**:
```
1 N = 1 kg · m/s²
```

**Anschaulich:** 1 N ist die Kraft, die eine Masse von 1 kg um 1 m/s² beschleunigt. Oder: Eine Tafel Schokolade (100 g) drückt mit etwa **1 N** auf die Hand.

### 📐 Lehrbeispiel – Woher kommt das Pascal?

Aus p = F / A:
```
[p] = N/m² 
1 Pa = 1 N/m²
```

**Zum Vergleich:** 1 Pa ist sehr wenig. Deshalb rechnet man im Bau mit:
```
1 kPa = 1000 Pa
1 MPa = 1 000 000 Pa = 1 N/mm²
1 bar = 100 000 Pa = 0,1 MPa
```

---

## 1.4 Mit Einheiten rechnen

### Die Vorsätze

| Vorsatz | Zeichen | Faktor | Typisch im Bau für |
|---------|:-------:|:------:|--------------------|
| Giga | G | 10⁹ | GPa (E-Modul) |
| **Mega** | **M** | **10⁶** | **MN, MPa** |
| **Kilo** | **k** | **10³** | **kN, kg, kW, km** |
| Hekto | h | 10² | ha (Hektar) |
| Dezi | d | 10⁻¹ | dm³ |
| Zenti | c | 10⁻² | cm |
| **Milli** | **m** | **10⁻³** | **mm** |
| Mikro | µ | 10⁻⁶ | µm |
| Nano | n | 10⁻⁹ | nm |

### Die goldene Regel bei Flächen und Volumen

> ### ⚠️ Der Exponent wird mitpotenziert!
> ```
> 1 m  = 10   dm  = 100    cm = 1000       mm
> 1 m² = 100  dm² = 10 000 cm² = 1 000 000 mm²
> 1 m³ = 1000 dm³ = 10⁶    cm³ = 10⁹       mm³
> ```
>
> **Merke:** Bei Flächen ist der Umrechnungsfaktor **quadriert**, bei Volumen **kubiert**.
> Wer 1 m² = 100 cm² rechnet, liegt um den Faktor **100** daneben.

### 📐 Lehrbeispiel 1 – Umrechnungen

| Aufgabe | Rechnung | Ergebnis |
|---------|----------|----------|
| 2,5 m² in cm² | 2,5 · 10 000 | 25 000 cm² |
| 450 cm² in m² | 450 : 10 000 | 0,045 m² |
| 3,2 m³ in dm³ | 3,2 · 1000 | 3200 dm³ = 3200 l |
| 850 mm² in m² | 850 : 10⁶ | 0,00085 m² = 8,5·10⁻⁴ m² |

### 📐 Lehrbeispiel 2 – Die wichtigste Bau-Umrechnung

```
1 N/mm² = ?  N/m²
```

| Schritt | Rechnung |
|---------|----------|
| 1 mm² = 10⁻⁶ m² | |
| 1 N/mm² = 1 N / 10⁻⁶ m² | |
| = 10⁶ N/m² | |
| **1 N/mm² = 10⁶ N/m² = 1 MN/m² = 1 MPa** | |

> ### 💡 Merke – das spart dir viel Zeit
> ```
> 1 N/mm² = 1 MN/m² = 1 MPa
> ```
> **Der Zahlenwert bleibt gleich!** Beton C25/30 hat 25 N/mm² = 25 MN/m² = 25 MPa.

### Die Einheitenkontrolle

> ### 💡 So prüfst du jede Formel
> Setze **nur die Einheiten** ein und rechne sie aus. Kommt die erwartete Einheit heraus, stimmt die Formel.

### 📐 Lehrbeispiel 3 – Einheitenkontrolle

Prüfe: Ist `W = F · s` (Arbeit) dimensionsmäßig richtig?

```
[W] = [F] · [s] = N · m = (kg·m/s²) · m = kg·m²/s²
```
Das ist genau die Einheit **Joule** ✓

Prüfe: `P = W / t` (Leistung)
```
[P] = J / s = kg·m²/s³
```
Das ist genau die Einheit **Watt** ✓

### 🏗️ Bau-Beispiel 1 – Einheitenfehler aufdecken

Eine Stütze trägt **F = 450 kN**, ihre Fläche ist **A = 0,09 m²**. Wie groß ist die Spannung?

**Falsche Rechnung (ohne Einheiten):**
```
σ = 450 / 0,09 = 5000
```
5000 was? Pa? kPa? MPa? Der Wert ist wertlos.

**Richtige Rechnung (mit Einheiten):**
```
σ = F/A = 450 kN / 0,09 m² = 5000 kN/m² = 5000 kPa = 5,0 MPa = 5,0 N/mm²
```

**Bewertung:** 5,0 N/mm² – das ist für Beton C25/30 (zulässig ca. 14 N/mm²) unkritisch.

### 🏗️ Bau-Beispiel 2 – Massen und Kräfte trennen

Ein häufiger Denkfehler: **Masse und Gewichtskraft sind nicht dasselbe.**

| | Masse | Gewichtskraft |
|--|-------|---------------|
| Formelzeichen | m | F_G |
| Einheit | **kg** (oder t) | **N** (oder kN) |
| Bedeutung | Stoffmenge, überall gleich | Kraft, hängt von g ab |
| Umrechnung | | F_G = m · g |

**Beispiel:** Ein Betonfundament mit **V = 2,0 m³** und **ρ = 2400 kg/m³**:

```
Masse:          m = V · ρ = 2,0 m³ · 2400 kg/m³ = 4800 kg = 4,8 t
Gewichtskraft:  F_G = m · g = 4800 kg · 9,81 m/s² = 47 088 N ≈ 47,1 kN
```

> ### 💡 Faustformel für die Baustelle
> ```
> 1 t entspricht rund 10 kN
> ```
> (genau: 9,81 kN). Damit kannst du Massen im Kopf in Kräfte umrechnen – für Überschläge völlig ausreichend.

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · SI-Basisgrößen
Nenne alle sieben SI-Basisgrößen mit Formelzeichen und Einheit.

<details><summary>Lösung anzeigen</summary>

| Größe | Zeichen | Einheit |
|-------|:-------:|---------|
| Zeit | t | Sekunde (s) |
| Länge | l | Meter (m) |
| Masse | m | Kilogramm (kg) |
| Stromstärke | I | Ampere (A) |
| Temperatur | T | Kelvin (K) |
| Lichtstärke | I_v | Candela (cd) |
| Stoffmenge | n | Mol (mol) |
</details>

### Aufgabe 2 · Basis oder abgeleitet?
**2.1** Kraft · **2.2** Masse · **2.3** Zeit · **2.4** Druck · **2.5** Länge · **2.6** Leistung

<details><summary>Lösung anzeigen</summary>

**Basisgrößen:** 2.2 Masse, 2.3 Zeit, 2.5 Länge
**Abgeleitet:** 2.1 Kraft (kg·m/s²), 2.4 Druck (N/m²), 2.6 Leistung (J/s)
</details>

### Aufgabe 3 · Einheiten zurückführen
Führe auf Basiseinheiten zurück: **3.1** N · **3.2** Pa · **3.3** J · **3.4** W

<details><summary>Lösung anzeigen</summary>

**3.1** N = kg·m/s²
**3.2** Pa = N/m² = kg/(m·s²)
**3.3** J = N·m = kg·m²/s²
**3.4** W = J/s = kg·m²/s³
</details>

### Aufgabe 4 · Flächen umrechnen
**4.1** 3,5 m² in cm² · **4.2** 720 cm² in m² · **4.3** 0,25 m² in mm² · **4.4** 45 000 mm² in m²

<details><summary>Lösung anzeigen</summary>

**4.1** 3,5 · 10 000 = **35 000 cm²**
**4.2** 720 : 10 000 = **0,072 m²**
**4.3** 0,25 · 10⁶ = **250 000 mm²**
**4.4** 45 000 : 10⁶ = **0,045 m²**
</details>

### Aufgabe 5 · Volumen umrechnen
**5.1** 2,4 m³ in dm³ · **5.2** 850 l in m³ · **5.3** 0,05 m³ in cm³

<details><summary>Lösung anzeigen</summary>

**5.1** 2,4 · 1000 = **2400 dm³**
**5.2** 1 l = 1 dm³ → 850 : 1000 = **0,85 m³**
**5.3** 0,05 · 10⁶ = **50 000 cm³**
</details>

### Aufgabe 6 · Kräfte und Drücke
**6.1** 450 kN in N · **6.2** 2,5 MN in kN · **6.3** 12 N/mm² in MN/m² · **6.4** 3,5 bar in Pa

<details><summary>Lösung anzeigen</summary>

**6.1** 450 · 10³ = **450 000 N**
**6.2** 2,5 · 10⁶ N = **2500 kN**
**6.3** **12 MN/m²** (Zahlenwert bleibt gleich!)
**6.4** 3,5 · 100 000 = **350 000 Pa = 350 kPa**
</details>

### Aufgabe 7 · Einheitenkontrolle
Prüfe durch Einheitenrechnung, ob die Formel stimmen kann:
**7.1** F = m · a · **7.2** p = F · A · **7.3** W = F · s

<details><summary>Lösung anzeigen</summary>

**7.1** kg · m/s² = N ✓ **richtig**
**7.2** N · m² = N·m² – das ist **nicht** Pa (= N/m²) ✗ **falsch**, richtig wäre p = F/A
**7.3** N · m = J ✓ **richtig**
</details>

### 🏗️ Aufgabe 8 · Spannung berechnen
Eine Stütze mit **A = 0,16 m²** trägt **F = 720 kN**.
**8.1** Spannung in kN/m²? **8.2** In N/mm²? **8.3** Beurteile bei zulässig 14 N/mm².

<details><summary>Lösung anzeigen</summary>

**8.1** σ = 720 kN / 0,16 m² = **4500 kN/m²**
**8.2** 4500 kN/m² = 4,5 MN/m² = **4,5 N/mm²**
**8.3** 4,5 < 14 → **zulässig** ✓ (Ausnutzungsgrad 32 %)
</details>

### 🏗️ Aufgabe 9 · Masse und Gewichtskraft
Ein Betonfundament: **3,0 m × 2,0 m × 0,5 m**, ρ = 2400 kg/m³.
**9.1** Volumen? **9.2** Masse? **9.3** Gewichtskraft? **9.4** Kontrolle mit der Faustformel.

<details><summary>Lösung anzeigen</summary>

**9.1** V = 3,0 · 2,0 · 0,5 = **3,0 m³**
**9.2** m = 3,0 · 2400 = **7200 kg = 7,2 t**
**9.3** F_G = 7200 · 9,81 = **70 632 N ≈ 70,6 kN**
**9.4** Faustformel: 7,2 t · 10 = 72 kN – passt gut ✓
</details>

### 🏗️ Aufgabe 10 · Bodenpressung
Ein Fundament **2,5 m × 2,0 m** überträgt eine Last von **600 kN**.
**10.1** Bodenpressung in kN/m²? **10.2** Zulässig sind 250 kN/m² – reicht die Fläche?

<details><summary>Lösung anzeigen</summary>

**10.1** A = 5,0 m² → σ = 600 : 5,0 = **120 kN/m²**
**10.2** 120 < 250 → **ja, die Fläche reicht** (Ausnutzung 48 %)
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich weiß, dass eine physikalische Größe **Zahlenwert × Einheit** ist.
- [ ] Ich kenne alle **sieben SI-Basisgrößen** mit Einheiten.
- [ ] Ich kann **abgeleitete Größen** auf Basiseinheiten zurückführen (N = kg·m/s²).
- [ ] Ich kenne die **Vorsätze** von Giga bis Nano.
- [ ] Ich weiß, dass bei **Flächen quadriert** und bei **Volumen kubiert** umgerechnet wird.
- [ ] Ich kenne die Merkregel **1 N/mm² = 1 MN/m² = 1 MPa**.
- [ ] Ich mache bei jeder Rechnung eine **Einheitenkontrolle**.
- [ ] Ich unterscheide **Masse (kg)** und **Gewichtskraft (N)** sicher.
- [ ] Ich kenne die Faustformel **1 t ≈ 10 kN**.
- [ ] Ich schreibe bei jeder Rechnung die **Einheiten mit**.

**Nächstes Kapitel:** LM1 Kapitel 2 – Kräfte
