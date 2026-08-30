# Naturwissenschaft · Lernmodul 1 · Kapitel 5
# Arbeit, Energie und Leistung

> **Lernkapitel zum Selbststudium.** Quelle: DAA Naturwissenschaft, Lernmodul 1, Kapitel 2.6 · **Zeitaufwand: ca. 5–6 Stunden**

**Was du am Ende können musst**
- **Arbeit** in ihren verschiedenen Formen berechnen.
- **Energieformen** unterscheiden und den **Energieerhaltungssatz** anwenden.
- **Leistung** berechnen und von Arbeit unterscheiden.
- Den **Wirkungsgrad** einzeln und in Ketten bestimmen.
- Die **einfachen Maschinen** und die Goldene Regel der Mechanik verstehen.

**Inhalt:** [5.1 Mechanische Arbeit](#51-mechanische-arbeit) · [5.2 Energieformen](#52-formen-der-energie) · [5.3 Leistung](#53-leistung) · [5.4 Wirkungsgrad](#54-der-wirkungsgrad) · [5.5 Einfache Maschinen](#55-einfache-maschinen) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## 5.1 Mechanische Arbeit

> ### 💡 Definition
> **Arbeit** wird verrichtet, wenn eine **Kraft** einen Körper längs eines **Weges** bewegt.
> ```
> W = F · s
> ```
> **Einheit:** 1 Ws = 1 Nm = **1 J (Joule)**

> ### ⚠️ Wichtig
> Arbeit wird **nur** verrichtet, wenn die Kraft **in Wegrichtung** wirkt. Wer eine Last nur **hält**, verrichtet physikalisch **keine** Arbeit (auch wenn es anstrengend ist!). Wirkt die Kraft schräg zum Weg:
> ```
> W = F · s · cos α
> ```

### Die Arbeitsformen

| Form | Formel | Wann |
|------|--------|------|
| **Hubarbeit** | W = F_G · h = m · g · h | Last anheben |
| **Beschleunigungsarbeit** | W = ½ · m · v² | Körper beschleunigen |
| **Federarbeit (elastisch)** | W = ½ · c · s² | Feder spannen |
| **Reibungsarbeit** | W = F_R · s | gegen Reibung schieben |
| **Rotationsarbeit** | W = M · φ | Drehen |

> ### 💡 Warum bei Feder und Beschleunigung ein ½ steht
> Weil die Kraft dabei **nicht konstant** ist! Bei der Feder wächst die Kraft von 0 bis F_max – im Mittel ist sie also F_max/2. Deshalb W = ½·c·s².
>
> Bei der Hubarbeit dagegen ist die Gewichtskraft **konstant** – da steht kein ½.

### 📐 Lehrbeispiel 1 – Hubarbeit

Ein Kran hebt **500 kg** um **15 m**.
```
W = m · g · h = 500 · 9,81 · 15 = 73 575 J ≈ 73,6 kJ
```

### 📐 Lehrbeispiel 2 – Federarbeit

Eine Feder (**c = 25 N/mm**) wird um **40 mm** gespannt.
```
W = ½ · c · s² = ½ · 25 · 40² = ½ · 25 · 1600 = 20 000 Nmm = 20 J
```

### 🏗️ Bau-Beispiel – Material aufs Gerüst

Auf ein Gerüst in **12 m** Höhe sollen **80 Säcke Mörtel** à **25 kg** transportiert werden.

```
Gesamtmasse: m = 80 · 25 = 2000 kg
Hubarbeit:   W = 2000 · 9,81 · 12 = 235 440 J ≈ 235,4 kJ
```

**Zum Vergleich:** 235,4 kJ = 0,065 kWh – energetisch also sehr wenig. Der Aufwand liegt in der **Zeit** und der **Leistung**, nicht in der Energie.

---

## 5.2 Formen der Energie

> ### 💡 Definition
> **Energie** ist gespeicherte Arbeitsfähigkeit. Die Formeln sind dieselben wie bei der Arbeit – nur die Bedeutung ist anders: Arbeit wird **verrichtet**, Energie ist **vorhanden**.

| Energieform | Formel | Beispiel |
|-------------|--------|----------|
| **Potenzielle Energie** (Lage) | E_pot = m · g · h | Last am Kranhaken |
| **Kinetische Energie** (Bewegung) | E_kin = ½ · m · v² | fahrender LKW |
| **Elastische Energie** (Spannung) | E_elast = ½ · c · s² | gespannte Feder |
| **Rotationsenergie** | E_rot = ½ · J · ω² | drehende Trommel |

### Der Energieerhaltungssatz

> ### 💡 Energieerhaltungssatz
> ```
> E_End = E_Anfang + W_zu − W_ab
> ```
> **Energie geht nicht verloren – sie wandelt sich nur um.**

### 📐 Lehrbeispiel – Umwandlung beim Fallen

Eine Kugel (**m = 2 kg**) fällt aus **10 m** Höhe.

**Am Anfang (oben, in Ruhe):**
```
E_pot = 2 · 9,81 · 10 = 196,2 J
E_kin = 0
```

**Am Ende (unten, kurz vor Aufprall):**
```
E_pot = 0
E_kin = 196,2 J        (die gesamte Lageenergie wurde umgewandelt)
```

**Geschwindigkeit daraus:**
```
½ · m · v² = 196,2
v² = 2 · 196,2 / 2 = 196,2
v = 14,01 m/s
```

**Kontrolle mit der Fallformel:** v = √(2·9,81·10) = 14,01 m/s ✓

> ### 💡 Zwei Wege, ein Ergebnis
> Du kannst Fallaufgaben über die **Bewegungsgleichungen** ODER über die **Energieerhaltung** lösen. Beides führt zum selben Ergebnis – nimm den kürzeren Weg.

### 🏗️ Bau-Beispiel – Kugel in der Mulde (aus dem Modul)

Rollt eine Kugel in eine Mulde, nimmt mit sinkender Höhe die **potenzielle Energie ab** – und im **gleichen Maß** nimmt die **kinetische Energie zu**. Am tiefsten Punkt ist E_pot minimal und E_kin maximal. Danach kehrt sich der Vorgang um.

### Die Reibungsarbeit – wohin die Energie verschwindet

In Wirklichkeit kommt die Kugel nie ganz so hoch zurück. Ein Teil der Energie wird durch **Reibung in Wärme** umgewandelt und steht nicht mehr zur Verfügung:

```
W_R = F_R · s = µ · F_N · s
```

Die Reibungsarbeit ist immer eine **Verlustarbeit** – sie zählt in der Energiebilanz mit negativem Vorzeichen.

### 📐 Lehrbeispiel – Kiste schieben

Eine Kiste von **450 kg** wird **18 m** weit über einen Betonboden geschoben (µ = 0,35).

```
F_N = m · g = 450 · 9,81 = 4414,5 N
F_R = µ · F_N = 0,35 · 4414,5 = 1545,1 N
W_R = F_R · s = 1545,1 · 18 = 27 811 J ≈ 27,8 kJ
```

Beachte: Die Kiste ist am Ende **genauso hoch und genauso schnell** wie am Anfang – ihre Energie hat sich nicht verändert. Die gesamten 27,8 kJ sind als Wärme in Boden und Kiste gegangen.

### 📐 Lehrbeispiel – Energieerhaltung mit Reibung

Eine Kiste von **250 kg** rutscht eine **25°** steile Rampe um **3,00 m Höhe** hinunter (µ = 0,30). Wie schnell ist sie unten?

**Schritt 1 – verfügbare Energie oben:**
```
E_pot = m · g · h = 250 · 9,81 · 3,00 = 7357,5 J
```

**Schritt 2 – Rutschweg entlang der Rampe:**
```
sin 25° = h / s   →   s = 3,00 / sin 25° = 3,00 / 0,42262 = 7,099 m
```

**Schritt 3 – Reibungsverlust.** Auf der schiefen Ebene drückt nur der Anteil F_G · cos α auf die Fläche:
```
F_N = m · g · cos 25° = 250 · 9,81 · 0,90631 = 2222,7 N
W_R = µ · F_N · s = 0,30 · 2222,7 · 7,099 = 4733,5 J
```

**Schritt 4 – Energiebilanz:**
```
E_kin = E_pot − W_R = 7357,5 − 4733,5 = 2624,0 J
E_kin = ½ · m · v²   →   v = √(2 · E_kin / m) = √(2 · 2624,0 / 250) = √20,99 = 4,58 m/s
```

> ### 💡 Was daran der eigentliche Lernpunkt ist
> Ohne Reibung wäre die Kiste mit v = √(2·g·h) = 7,67 m/s unten. Fast **zwei Drittel** der Energie sind in Wärme gegangen. Deshalb ist der Satz „Energie geht nie verloren" zwar richtig – aber sie wird in eine Form umgewandelt, die du **nicht mehr nutzen kannst**. Genau das misst später der Wirkungsgrad.

---

## 5.3 Leistung

> ### 💡 Definition
> **Leistung** ist Arbeit **pro Zeit** – sie sagt, wie **schnell** Arbeit verrichtet wird.
> ```
> P = W / t
> ```
> Bei konstanter Geschwindigkeit auch:
> ```
> P = F · v
> ```
> **Einheit:** 1 W (Watt) = 1 J/s = 1 Nm/s

> ### 💡 Arbeit vs. Leistung – der entscheidende Unterschied
> Ein Kran und ein Mensch, die dieselbe Last auf dieselbe Höhe heben, verrichten **dieselbe Arbeit**. Der Kran braucht dafür aber vielleicht 30 Sekunden, der Mensch 30 Minuten – der Kran hat also die **60-fache Leistung**.

### 📐 Lehrbeispiel

Der Kran aus Beispiel 5.1 (73 575 J) braucht **30 s**.
```
P = 73 575 / 30 = 2452,5 W ≈ 2,45 kW
```

### 🏗️ Bau-Beispiel – Aufzug dimensionieren

Ein Bauaufzug soll **300 kg** mit **0,8 m/s** heben.

```
F = m · g = 300 · 9,81 = 2943 N
P = F · v = 2943 · 0,8 = 2354,4 W ≈ 2,35 kW
```

**Mit Wirkungsgrad η = 0,7 (Getriebe, Reibung):**
```
P_Motor = 2354,4 / 0,7 = 3363,4 W ≈ 3,4 kW
```

→ Ein **4-kW-Motor** wäre die passende Wahl.

---

## 5.4 Der Wirkungsgrad

Bei jeder Energiewandlung entstehen **Verluste** (Reibung, Wärme). Nur ein Teil der zugeführten Energie ist nutzbar.

> ### 💡 Definition
> ```
> η = W_ab / W_zu = P_ab / P_zu
> ```
> η (eta) ist **immer kleiner als 1** (bzw. 100 %).

### Mehrere Stufen

> ### 💡 Wirkungsgradkette
> ```
> η_ges = η₁ · η₂ · η₃ · …
> ```
> Die Wirkungsgrade werden **multipliziert**, nicht addiert!

### 📐 Lehrbeispiel 1

Ein Motor nimmt **5 kW** auf und gibt **4 kW** ab.
```
η = 4 / 5 = 0,8 = 80 %
```
Verlust: 1 kW (als Wärme).

### 📐 Lehrbeispiel 2 – Kette

Motor (η₁ = 0,90) → Getriebe (η₂ = 0,85) → Seilwinde (η₃ = 0,95)

```
η_ges = 0,90 · 0,85 · 0,95 = 0,727 = 72,7 %
```

> ### ⚠️ Der typische Denkfehler
> Manche rechnen: „90 % + 85 % + 95 % geteilt durch 3 = 90 %." **Falsch.**
> Die Verluste wirken **hintereinander** – deshalb wird **multipliziert**. Das Ergebnis (72,7 %) ist deutlich schlechter als jeder Einzelwirkungsgrad.

### 🏗️ Bau-Beispiel – Antrieb rückwärts rechnen

Eine Seilwinde soll **1,5 t** mit **0,5 m/s** heben. Wirkungsgradkette: Motor 0,88, Getriebe 0,82, Trommel 0,94.

```
Nutzleistung: P_ab = m · g · v = 1500 · 9,81 · 0,5 = 7357,5 W ≈ 7,36 kW

η_ges = 0,88 · 0,82 · 0,94 = 0,678

P_zu = P_ab / η_ges = 7357,5 / 0,678 = 10 852 W ≈ 10,9 kW
```

→ Erforderlich ist mindestens ein **11-kW-Motor**.

> **Praxisrelevanz:** Die Verluste betragen hier über **3,5 kW** – etwa ein Drittel. Wer den Wirkungsgrad vergisst, unterdimensioniert den Antrieb.

---

## 5.5 Einfache Maschinen

**Einfache Maschinen** sind: Hebel, feste und lose Rolle, Flaschenzug, schiefe Ebene, Keil, Schraube.

> ### 💡 Die Goldene Regel der Mechanik
> **Was man an Kraft spart, muss man an Weg zulegen.**
> Eine einfache Maschine ändert **Kraft und Weg**, aber **niemals die Arbeit**:
> ```
> W = F₁ · s₁ = F₂ · s₂
> ```
> *(im idealen, reibungsfreien Fall)*

### Beispiele

| Maschine | Kraftersparnis | Wegverlängerung |
|----------|----------------|-----------------|
| Feste Rolle | keine (nur Richtungsänderung) | keine |
| Lose Rolle | halbe Kraft | doppelter Weg |
| Flaschenzug mit n tragenden Seilen | F/n | n-facher Weg |
| Schiefe Ebene | F_H = F_G · sin α | längerer Weg |
| Hebel | F₁·l₁ = F₂·l₂ | proportional zum Hebelarm |

### 📐 Lehrbeispiel – Flaschenzug

Eine Last von **800 N** soll um **2 m** gehoben werden, mit einem Flaschenzug mit **4 tragenden Seilen**.

```
Zugkraft:  F = 800 / 4 = 200 N
Zugweg:    s = 2 · 4 = 8 m
Arbeit:    W = 200 · 8 = 1600 J
Kontrolle: W = 800 · 2 = 1600 J ✓
```

### Das Schraubgewinde

Beim Anziehen einer Schraube wirken mehrere Momente:

| Moment | Ursache |
|--------|---------|
| **Gewindereibmoment** | Reibung im Gewinde |
| **Auflagereibmoment** | Reibung unter dem Schraubenkopf |
| **Anzugsmoment** | Summe – das, was der Schlüssel aufbringen muss |

Größen: Steigungswinkel α, Reibwinkel ρ, Flankenradius r_Fl, Auflagerradius r_a.

> **Praxis:** Nur etwa **10–15 %** des Anzugsmoments erzeugen tatsächlich die Vorspannkraft – der Rest geht in Reibung. Deshalb sind Drehmomentangaben immer auf einen bestimmten Schmierzustand bezogen.

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Arbeit
**1.1** F = 250 N, s = 12 m → W? **1.2** m = 80 kg, h = 5 m → Hubarbeit? **1.3** c = 30 N/mm, s = 25 mm → Federarbeit?

<details><summary>Lösung anzeigen</summary>

**1.1** W = 250 · 12 = **3000 J = 3 kJ**
**1.2** W = 80 · 9,81 · 5 = **3924 J**
**1.3** W = ½ · 30 · 625 = **9375 Nmm = 9,375 J**
</details>

### Aufgabe 2 · Energie
**2.1** m = 1200 kg, v = 15 m/s → E_kin? **2.2** m = 500 kg, h = 8 m → E_pot?

<details><summary>Lösung anzeigen</summary>

**2.1** E = ½ · 1200 · 225 = **135 000 J = 135 kJ**
**2.2** E = 500 · 9,81 · 8 = **39 240 J ≈ 39,2 kJ**
</details>

### Aufgabe 3 · Energieerhaltung
Eine Masse von **3 kg** fällt aus **12 m**.
**3.1** E_pot oben? **3.2** E_kin unten? **3.3** Aufprallgeschwindigkeit?

<details><summary>Lösung anzeigen</summary>

**3.1** E = 3 · 9,81 · 12 = **353,2 J**
**3.2** E_kin = **353,2 J** (vollständig umgewandelt)
**3.3** ½·3·v² = 353,2 → v² = 235,4 → v = **15,34 m/s**
</details>

### Aufgabe 4 · Leistung
**4.1** W = 60 kJ in 25 s → P? **4.2** F = 800 N, v = 1,2 m/s → P? **4.3** P = 5 kW, t = 2 min → W?

<details><summary>Lösung anzeigen</summary>

**4.1** P = 60 000/25 = **2400 W = 2,4 kW**
**4.2** P = 800 · 1,2 = **960 W**
**4.3** W = 5000 · 120 = **600 000 J = 600 kJ**
</details>

### Aufgabe 5 · Wirkungsgrad
**5.1** P_zu = 15 kW, P_ab = 11,4 kW → η? **5.2** η = 0,75, P_ab = 6 kW → P_zu? **5.3** Kette 0,92 · 0,88 · 0,90 → η_ges?

<details><summary>Lösung anzeigen</summary>

**5.1** η = 11,4/15 = **0,76 = 76 %**
**5.2** P_zu = 6/0,75 = **8 kW**
**5.3** η = 0,92 · 0,88 · 0,90 = **0,729 = 72,9 %**
</details>

### 🏗️ Aufgabe 6 · Kran
Ein Kran hebt **2,5 t** um **22 m** in **45 s**.
**6.1** Arbeit? **6.2** Nutzleistung? **6.3** Motorleistung bei η = 0,72?

<details><summary>Lösung anzeigen</summary>

**6.1** W = 2500 · 9,81 · 22 = **539 550 J ≈ 539,6 kJ**
**6.2** P = 539 550/45 = **11 990 W ≈ 12,0 kW**
**6.3** P_zu = 11 990/0,72 = **16 653 W ≈ 16,7 kW**
</details>

### 🏗️ Aufgabe 7 · Bauaufzug
**450 kg** sollen mit **1,0 m/s** gehoben werden, η = 0,65.
**7.1** Nutzleistung? **7.2** Erforderliche Motorleistung?

<details><summary>Lösung anzeigen</summary>

**7.1** P = 450 · 9,81 · 1,0 = **4414,5 W ≈ 4,41 kW**
**7.2** P_zu = 4414,5/0,65 = **6791,5 W ≈ 6,8 kW** → 7,5-kW-Motor wählen
</details>

### 🏗️ Aufgabe 8 · Material aufs Gerüst
**120 Säcke** à **25 kg** auf **15 m** Höhe, in **40 Minuten**.
**8.1** Gesamte Hubarbeit? **8.2** Durchschnittliche Leistung?

<details><summary>Lösung anzeigen</summary>

**8.1** m = 3000 kg → W = 3000 · 9,81 · 15 = **441 450 J ≈ 441,5 kJ**
**8.2** t = 2400 s → P = 441 450/2400 = **184 W**
</details>

### 🏗️ Aufgabe 9 · Flaschenzug
Last **1200 N**, Flaschenzug mit **5 tragenden Seilen**, Hubhöhe **3 m**.
**9.1** Zugkraft? **9.2** Zugweg? **9.3** Arbeit (Kontrolle)?

<details><summary>Lösung anzeigen</summary>

**9.1** F = 1200/5 = **240 N**
**9.2** s = 3 · 5 = **15 m**
**9.3** W = 240 · 15 = 3600 J = 1200 · 3 ✓
</details>

### 🏗️ Aufgabe 10 · Wirkungsgradkette rückwärts
Eine Winde soll **2 t** mit **0,4 m/s** heben. Kette: 0,90 · 0,85 · 0,92.
**10.1** Nutzleistung? **10.2** η_ges? **10.3** Motorleistung?

<details><summary>Lösung anzeigen</summary>

**10.1** P = 2000 · 9,81 · 0,4 = **7848 W ≈ 7,85 kW**
**10.2** η = 0,90 · 0,85 · 0,92 = **0,704**
**10.3** P_zu = 7848/0,704 = **11 148 W ≈ 11,1 kW** → 11-kW- oder 15-kW-Motor
</details>

---

### 🏗️ Aufgabe 11 · Reibungsarbeit
Eine Palette von **380 kg** wird **12 m** weit über Beton geschoben (µ = 0,40).
**11.1** Reibungskraft? **11.2** Verrichtete Arbeit? **11.3** Warum ändert sich die Energie der Palette dabei nicht?

<details><summary>Lösung anzeigen</summary>

**11.1** F_N = 380 · 9,81 = 3727,8 N → F_R = 0,40 · 3727,8 = **1491,1 N**
**11.2** W = 1491,1 · 12 = **17 893 J** ≈ 17,9 kJ
**11.3** Weil sie am Ende dieselbe Höhe und dieselbe Geschwindigkeit hat wie am Anfang. Die gesamte Arbeit wurde in **Wärme** umgewandelt – Energie ist nicht verschwunden, aber nicht mehr nutzbar.
</details>

### 🏗️ Aufgabe 12 · Energiebilanz auf der Rampe
Eine Kiste von **180 kg** rutscht eine **30°**-Rampe um **2,50 m** Höhe hinunter (µ = 0,25).
**12.1** Potenzielle Energie oben? **12.2** Rutschweg? **12.3** Reibungsarbeit? **12.4** Geschwindigkeit unten?

<details><summary>Lösung anzeigen</summary>

**12.1** E_pot = 180 · 9,81 · 2,50 = **4414,5 J**
**12.2** s = 2,50 / sin 30° = 2,50 / 0,5 = **5,00 m**
**12.3** F_N = 180 · 9,81 · cos 30° = 1765,8 · 0,86603 = 1529,2 N
W_R = 0,25 · 1529,2 · 5,00 = **1911,5 J**
**12.4** E_kin = 4414,5 − 1911,5 = 2503,0 J → v = √(2 · 2503,0 / 180) = √27,81 = **5,27 m/s**
*(Ohne Reibung wären es 7,00 m/s.)*
</details>

### 🏗️ Aufgabe 13 · Wasserpumpe
Eine Pumpe fördert **0,80 m³/min** Wasser **32 m** hoch. Der Wirkungsgrad beträgt 0,68.
**13.1** Massenstrom in kg/s? **13.2** Abgegebene Leistung? **13.3** Aufgenommene Leistung?

<details><summary>Lösung anzeigen</summary>

**13.1** 0,80 m³/min = 0,01333 m³/s · 1000 kg/m³ = **13,33 kg/s**
**13.2** P_ab = ṁ · g · h = 13,33 · 9,81 · 32 = **4186 W** ≈ 4,19 kW
**13.3** P_zu = 4186 / 0,68 = **6156 W** ≈ 6,16 kW
</details>

### 🏗️ Aufgabe 14 · Wirkungsgradkette
Ein Antrieb besteht aus Motor (η = 0,95), Getriebe (η = 0,88) und Seiltrieb (η = 0,72).
**14.1** Gesamtwirkungsgrad? **14.2** Aufgenommene Leistung, wenn 8,0 kW an der Last ankommen sollen? **14.3** Wie viel Leistung geht verloren?

<details><summary>Lösung anzeigen</summary>

**14.1** η_ges = 0,95 · 0,88 · 0,72 = **0,602** (60,2 %)
**14.2** P_zu = 8,0 / 0,602 = **13,29 kW**
**14.3** 13,29 − 8,0 = **5,29 kW** gehen als Reibung und Wärme verloren – über ein Drittel der eingesetzten Leistung. Deshalb lohnt sich schon eine kleine Verbesserung einer einzelnen Stufe.
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich kenne **W = F · s** und die Einheit **1 J = 1 Nm = 1 Ws**.
- [ ] Ich weiß, dass **Halten keine Arbeit** ist.
- [ ] Ich kenne die Arbeitsformen (Hub, Beschleunigung, Feder) und weiß, **warum bei Feder und Beschleunigung ein ½ steht**.
- [ ] Ich unterscheide **E_pot** und **E_kin** und kann Umwandlungen berechnen.
- [ ] Ich kann den **Energieerhaltungssatz** anwenden.
- [ ] Ich kenne **P = W/t = F·v** und den Unterschied zwischen Arbeit und Leistung.
- [ ] Ich berechne den **Wirkungsgrad** und weiß, dass Ketten **multipliziert** werden.
- [ ] Ich kann eine **Antriebsleistung rückwärts** aus der Nutzlast bestimmen.
- [ ] Ich kenne die **Goldene Regel der Mechanik**.

**Nächstes Kapitel:** LM1 Kapitel 6 – Flüssigkeiten und Gase
