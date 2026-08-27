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

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich kenne **v = s/t** und rechne zwischen **m/s und km/h** um (Faktor 3,6).
- [ ] Ich kenne die Formeln der **beschleunigten Bewegung** (a = Δv/Δt, s = ½at², v = √(2as)).
- [ ] Ich rechne mit **negativer Beschleunigung** beim Bremsen.
- [ ] Ich kenne die **Fallformeln** und weiß, dass die Masse keine Rolle spielt.
- [ ] Ich kann Aufprallgeschwindigkeiten berechnen und deren **Sicherheitsrelevanz** einschätzen.
- [ ] Ich beherrsche die Größen der **Kreisbewegung** (n, T, f, v, ω).
- [ ] Ich kenne die **drei Newtonschen Axiome** und ihre Bedeutung im Bau.

**Nächstes Kapitel:** LM1 Kapitel 5 – Arbeit, Energie und Leistung
