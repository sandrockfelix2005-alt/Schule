# Naturwissenschaft · Lernmodul 2 · Kapitel 2
# Wärme als Energieart und Energieträger

> **Lernkapitel zum Selbststudium.** Quelle: DAA Naturwissenschaft, Lernmodul 2, Kapitel 2 · **Zeitaufwand: ca. 5 Stunden**

**Was du am Ende können musst**
- Den **ersten Hauptsatz** der Wärmelehre erklären.
- **Wärmemengen** mit Q = c·m·Δϑ berechnen.
- **Mischungsaufgaben** über die Mischungsregel lösen.
- **Schmelz- und Verdampfungswärme** berechnen.
- Einen vollständigen **Erwärmungsvorgang** mit Phasenübergängen darstellen.

**Inhalt:** [2.1 Erster Hauptsatz](#21-der-erste-hauptsatz) · [2.2 Wärmemenge](#22-die-wärmemenge) · [2.3 Mischungsregel](#23-die-mischungsregel) · [2.4 Aggregatzustände](#24-änderung-des-aggregatzustandes) · [2.5 Energieträger](#25-wärme-als-energieträger) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## 2.1 Der erste Hauptsatz

> ### 💡 Erster Hauptsatz der Wärmelehre
> ```
> ΔU = Q + W
> ```
> | Größe | Bedeutung |
> |-------|-----------|
> | **ΔU** | Änderung der **inneren Energie** |
> | **Q** | zu- oder abgeführte **Wärmeenergie** |
> | **W** | zu- oder abgeführte **mechanische Arbeit** |

**In Worten:** Die innere Energie eines Systems ändert sich durch **Wärme** und **Arbeit**. Es ist der Energieerhaltungssatz, angewandt auf thermische Systeme.

**Vorzeichen:** zugeführt = positiv, abgeführt = negativ.

> ### 🏗️ Praxisbeispiel
> Beim Verdichten von Beton mit dem Innenrüttler wird **mechanische Arbeit** zugeführt – der Beton **erwärmt** sich messbar. Ebenso erwärmt sich ein Bohrer beim Bohren: Reibungsarbeit wird zu Wärme.

---

## 2.2 Die Wärmemenge

> ### 💡 Die zentrale Formel
> ```
> Q = c · m · Δϑ
> ```
> | Größe | Bedeutung | Einheit |
> |-------|-----------|---------|
> | Q | Wärmemenge | J (oder kJ) |
> | **c** | **spezifische Wärmekapazität** | kJ/(kg·K) |
> | m | Masse | kg |
> | Δϑ | Temperaturänderung | K |
>
> **Einheiten:** 1 J = 1 Ws = 1 Nm · 1 kWh = 3,6 · 10⁶ J = 3600 kJ

### Die spezifische Wärmekapazität

> ### 💡 Was c bedeutet
> **c** ist die Energie, die man braucht, um **1 kg** eines Stoffes um **1 K** zu erwärmen.

| Stoff | c in kJ/(kg·K) |
|-------|---------------:|
| **Wasser** | **4,19** |
| Eis | 2,1 |
| Holz | 1,6 |
| Beton | 0,88 |
| Ziegel | 0,84 |
| Luft | 1,0 |
| **Stahl** | **0,48** |
| Kupfer | 0,39 |

> ### 💡 Wasser ist der Ausreißer
> Wasser hat mit **4,19** eine außergewöhnlich hohe Wärmekapazität – rund **9-mal** so hoch wie Stahl. Deshalb:
> - eignet sich Wasser hervorragend als **Wärmeträger** in Heizungen
> - speichern massive Bauteile mit Feuchte viel Wärme
> - dauert es lange, ein Schwimmbad aufzuheizen

### Weitere Größen

| Größe | Formel | Bedeutung |
|-------|--------|-----------|
| **Wärmekapazität** eines Körpers | C = c · m | [J/K] |
| **Molare Wärmekapazität** | C_m = M_r · c | M_r = molare Masse |

### 📐 Lehrbeispiel

**50 Liter** Wasser sollen von **15 °C** auf **60 °C** erwärmt werden.

```
m = 50 kg (1 l Wasser = 1 kg)
Δϑ = 60 − 15 = 45 K

Q = 4,19 · 50 · 45 = 9427,5 kJ ≈ 9,43 MJ
```

**In Kilowattstunden:**
```
9427,5 kJ : 3600 = 2,62 kWh
```

**Heizzeit mit einem 2-kW-Heizstab:**
```
t = 2,62 kWh / 2 kW = 1,31 h ≈ 1 h 19 min
```

### 🏗️ Bau-Beispiel – Speichermasse eines Bauteils

Eine Betondecke: **80 m²**, **0,20 m** dick, ρ = 2400 kg/m³, c = 0,88 kJ/(kg·K).

**Wie viel Energie speichert sie bei 1 K Temperaturänderung?**
```
V = 80 · 0,20 = 16 m³
m = 16 · 2400 = 38 400 kg
C = c · m = 0,88 · 38 400 = 33 792 kJ/K ≈ 33,8 MJ/K = 9,4 kWh/K
```

> **Bedeutung:** Diese Decke speichert bei nur **1 K** Erwärmung **9,4 kWh**. Genau das ist der Effekt der **thermischen Speichermasse**: Massive Gebäude heizen sich im Sommer langsamer auf und kühlen im Winter langsamer aus. Leichtbauten reagieren dagegen schnell auf Temperaturschwankungen.

---

## 2.3 Die Mischungsregel

> ### 💡 Der Energieerhaltungssatz für Wärme
> ```
> Q_ab = Q_auf
> ```
> Die vom **wärmeren** Körper abgegebene Wärme ist gleich der vom **kälteren** aufgenommenen.

**Ausgeschrieben:**
```
c₁ · m₁ · (ϑ₁ − ϑ_m) = c₂ · m₂ · (ϑ_m − ϑ₂)
```
(ϑ_m = **Mischtemperatur**, ϑ₁ = heißer, ϑ₂ = kalt)

### So gehst du vor

1. **Wer gibt ab, wer nimmt auf?** (der Wärmere gibt ab)
2. Gleichung aufstellen: Q_ab = Q_auf.
3. Nach **ϑ_m** auflösen.
4. **Plausibilitätsprüfung:** ϑ_m muss **zwischen** den beiden Ausgangstemperaturen liegen!

### 📐 Lehrbeispiel 1 – gleicher Stoff

**3 kg** Wasser mit **80 °C** werden mit **2 kg** Wasser mit **20 °C** gemischt.

Bei gleichem Stoff kürzt sich c heraus:
```
3 · (80 − ϑ_m) = 2 · (ϑ_m − 20)
240 − 3ϑ_m = 2ϑ_m − 40
240 + 40 = 2ϑ_m + 3ϑ_m
280 = 5ϑ_m
ϑ_m = 56 °C
```

**Plausibilität:** 56 liegt zwischen 20 und 80 ✓ – und näher an 80, weil mehr heißes Wasser dabei ist ✓

### 📐 Lehrbeispiel 2 – verschiedene Stoffe

Ein Stahlteil (**m = 5 kg**, **c = 0,48**, **200 °C**) wird in **20 kg** Wasser (**15 °C**) getaucht.

```
Q_ab = Q_auf
0,48 · 5 · (200 − ϑ_m) = 4,19 · 20 · (ϑ_m − 15)
2,4 · (200 − ϑ_m) = 83,8 · (ϑ_m − 15)
480 − 2,4ϑ_m = 83,8ϑ_m − 1257
480 + 1257 = 83,8ϑ_m + 2,4ϑ_m
1737 = 86,2ϑ_m
ϑ_m = 20,15 °C
```

> **Bemerkenswert:** Das 200 °C heiße Stahlteil erwärmt das Wasser nur um **0,15 K**! Grund: geringe Masse **und** kleine Wärmekapazität von Stahl gegenüber viel Wasser mit hohem c.

---

## 2.4 Änderung des Aggregatzustandes

### Die Zustandsänderungen

```
   fest  ⇄  flüssig  ⇄  gasförmig
       schmelzen   verdampfen
       erstarren   kondensieren
```

> ### 💡 Die entscheidende Besonderheit
> **Während des Phasenübergangs bleibt die Temperatur konstant!**
>
> Die zugeführte Energie geht **vollständig** in die Umwandlung des Aggregatzustands – nicht in eine Temperaturerhöhung. Man nennt sie deshalb auch **latente (verborgene) Wärme**.

### Die Formeln

> ### 💡 Schmelz- und Verdampfungswärme
> ```
> Schmelzwärme:        Q_m = q_m · m
> Verdampfungswärme:   Q_v = r_v · m
> ```
> | Größe | Bedeutung | Einheit |
> |-------|-----------|---------|
> | **q_m** | spezifische **Schmelzwärme** | kJ/kg |
> | **r_v** | spezifische **Verdampfungswärme** | kJ/kg |

**Beim Erstarren und Kondensieren wird dieselbe Energiemenge wieder abgegeben.**

### Werte für Wasser

| Vorgang | Temperatur | spezifische Wärme |
|---------|-----------:|------------------:|
| **Schmelzen/Erstarren** | 0 °C | **334 kJ/kg** |
| **Verdampfen/Kondensieren** | 100 °C | **2257 kJ/kg** |

> ### 💡 Erstaunliche Größenordnungen
> Um **1 kg Eis** von 0 °C zu schmelzen, braucht man **334 kJ**.
> Mit derselben Energie könnte man **1 kg Wasser um 80 K erwärmen** (334 : 4,19 = 79,7).
>
> Und die Verdampfungswärme ist noch einmal **fast 7-mal größer**! Deshalb kühlt Verdunstung so stark (Schwitzen, Verdunstungskälte an feuchten Wänden).

### Der vollständige Erwärmungsvorgang

Erwärmt man Eis von −20 °C bis zu Dampf von 120 °C, wechseln sich **schräge** und **waagerechte** Abschnitte ab:

```
  ϑ
 120 ┤                            ╱
 100 ┼──────────────────────────╱  ← Verdampfen (Haltepunkt)
     │                        ╱
     │                      ╱     ← Wasser erwärmen
   0 ┼────────╱───────────╱        ← Schmelzen (Haltepunkt)
     │      ╱
 -20 ┤    ╱                        ← Eis erwärmen
     └────────────────────────────► zugeführte Energie
```

| Abschnitt | Formel |
|-----------|--------|
| Eis erwärmen (−20 → 0 °C) | Q = c_Eis · m · Δϑ |
| **Schmelzen (0 °C)** | Q = q_m · m |
| Wasser erwärmen (0 → 100 °C) | Q = c_W · m · Δϑ |
| **Verdampfen (100 °C)** | Q = r_v · m |
| Dampf erwärmen | Q = c_D · m · Δϑ |

### 📐 Lehrbeispiel – Eis zu Wasser von 100 °C

**1 kg Eis** von 0 °C soll zu Wasser von 100 °C werden.

| Schritt | Rechnung | Energie |
|---------|----------|--------:|
| Schmelzen | 334 · 1 | 334 kJ |
| Erwärmen 0 → 100 °C | 4,19 · 1 · 100 | 419 kJ |
| **Gesamt** | | **753 kJ** |

> **Beachte:** Fast die Hälfte der Energie geht allein ins **Schmelzen** – ohne dass die Temperatur steigt.

### 🏗️ Bau-Beispiel – Frostschäden

Warum sprengt gefrierendes Wasser Baustoffe?

**Beim Erstarren gibt Wasser 334 kJ/kg ab** und **dehnt sich um ca. 9 % aus**. In den Poren eines Baustoffs entstehen dadurch Drücke, die die **Zugfestigkeit** von Beton oder Ziegel weit übersteigen.

**Schutzmaßnahmen:**
- Bauteile **trocken** halten (Abdichtung)
- **frostbeständige** Baustoffe verwenden (geschlossene Poren, Luftporenbildner im Beton)
- Gründung unterhalb der **Frostgrenze** (in Deutschland ca. 80 cm)
- im Winter Frischbeton **vor Frost schützen**

---

## 2.5 Wärme als Energieträger

### Heizwert von Brennstoffen

```
Q = m · H
```
**H = Heizwert** in kJ/kg oder kWh/kg bzw. kWh/m³

| Brennstoff | Heizwert |
|------------|---------:|
| Heizöl | ca. 10 kWh/l |
| Erdgas | ca. 10 kWh/m³ |
| Holzpellets | ca. 4,9 kWh/kg |
| Steinkohle | ca. 8,1 kWh/kg |

### Wirkungsgrad von Wärmeerzeugern

Wie in LM1 K5:
```
η = Q_nutz / Q_zu
```

### 🏗️ Bau-Beispiel – Heizenergiebedarf

Ein Gebäude verliert über die Hülle **8,5 kW** bei Auslegungstemperatur. Die Heizperiode dauert **1800 Vollbenutzungsstunden**.

```
Jahresheizbedarf: Q = 8,5 kW · 1800 h = 15 300 kWh
```

**Bei einem Gaskessel mit η = 0,92:**
```
Q_zu = 15 300 / 0,92 = 16 630 kWh
Gasmenge = 16 630 : 10 kWh/m³ = 1663 m³ Erdgas
```

**Bei Kosten von 0,12 €/kWh:**
```
Kosten = 16 630 · 0,12 = 1996 € pro Jahr
```

> **Der Bezug zur Dämmung:** Halbiert man durch Dämmung den Verlust auf 4,25 kW, halbieren sich auch die Kosten – rund **1000 € Ersparnis pro Jahr**. Genau so rechnet man die Wirtschaftlichkeit einer Sanierung.

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Erster Hauptsatz
Formuliere ihn und erkläre die Größen.

<details><summary>Lösung anzeigen</summary>

**ΔU = Q + W** – die Änderung der inneren Energie eines Systems ist gleich der Summe aus zugeführter Wärme Q und zugeführter mechanischer Arbeit W. Es ist der Energieerhaltungssatz für thermische Systeme.
</details>

### Aufgabe 2 · Wärmemenge
**2.1** 80 l Wasser von 10 auf 65 °C · **2.2** 200 kg Stahl (c=0,48) von 20 auf 300 °C

<details><summary>Lösung anzeigen</summary>

**2.1** Q = 4,19 · 80 · 55 = **18 436 kJ ≈ 5,12 kWh**
**2.2** Q = 0,48 · 200 · 280 = **26 880 kJ ≈ 7,47 kWh**
</details>

### Aufgabe 3 · Heizzeit
**120 l** Wasser von **12 °C** auf **60 °C** mit einem **3-kW-Heizstab**.
**3.1** Wärmemenge? **3.2** In kWh? **3.3** Heizzeit?

<details><summary>Lösung anzeigen</summary>

**3.1** Q = 4,19 · 120 · 48 = **24 134 kJ**
**3.2** 24 134 : 3600 = **6,70 kWh**
**3.3** t = 6,70 / 3 = **2,23 h ≈ 2 h 14 min**
</details>

### Aufgabe 4 · Mischungsregel (gleicher Stoff)
**5 kg** Wasser (75 °C) + **3 kg** Wasser (15 °C).

<details><summary>Lösung anzeigen</summary>

```
5(75 − ϑ) = 3(ϑ − 15)
375 − 5ϑ = 3ϑ − 45
420 = 8ϑ
ϑ = 52,5 °C
```
Plausibel: liegt zwischen 15 und 75, näher an 75 ✓
</details>

### Aufgabe 5 · Mischungsregel (verschiedene Stoffe)
**8 kg** Stahl (c=0,48) mit **250 °C** in **30 kg** Wasser mit **18 °C**.

<details><summary>Lösung anzeigen</summary>

```
0,48 · 8 · (250 − ϑ) = 4,19 · 30 · (ϑ − 18)
3,84(250 − ϑ) = 125,7(ϑ − 18)
960 − 3,84ϑ = 125,7ϑ − 2262,6
3222,6 = 129,54ϑ
ϑ = 24,88 °C
```
</details>

### Aufgabe 6 · Schmelz- und Verdampfungswärme
**6.1** 5 kg Eis schmelzen · **6.2** 2 kg Wasser verdampfen · **6.3** 12 kg Eis schmelzen

<details><summary>Lösung anzeigen</summary>

**6.1** Q = 334 · 5 = **1670 kJ**
**6.2** Q = 2257 · 2 = **4514 kJ**
**6.3** Q = 334 · 12 = **4008 kJ**
</details>

### Aufgabe 7 · Kombinierter Vorgang
**2 kg Eis** von **0 °C** sollen zu **Wasser von 80 °C** werden.

<details><summary>Lösung anzeigen</summary>

```
Schmelzen:  Q₁ = 334 · 2 = 668 kJ
Erwärmen:   Q₂ = 4,19 · 2 · 80 = 670,4 kJ
Gesamt:     Q = 1338,4 kJ
```
</details>

### Aufgabe 8 · Vollständiger Vorgang
**1 kg Eis** von **−10 °C** zu **Dampf von 100 °C** (c_Eis = 2,1).

<details><summary>Lösung anzeigen</summary>

| Schritt | Rechnung | kJ |
|---------|----------|---:|
| Eis erwärmen (−10→0) | 2,1 · 1 · 10 | 21 |
| Schmelzen | 334 · 1 | 334 |
| Wasser erwärmen (0→100) | 4,19 · 1 · 100 | 419 |
| Verdampfen | 2257 · 1 | 2257 |
| **Gesamt** | | **3031 kJ** |

Auffällig: **74 %** der Energie gehen ins Verdampfen.
</details>

### 🏗️ Aufgabe 9 · Speichermasse
Eine Betonwand **60 m²**, **0,24 m** dick (ρ=2400, c=0,88).
**9.1** Masse? **9.2** Wärmekapazität C? **9.3** Gespeicherte Energie bei 2 K?

<details><summary>Lösung anzeigen</summary>

**9.1** V = 14,4 m³ → m = **34 560 kg**
**9.2** C = 0,88 · 34 560 = **30 413 kJ/K**
**9.3** Q = 30 413 · 2 = **60 826 kJ ≈ 16,9 kWh**
</details>

### 🏗️ Aufgabe 10 · Heizkosten
Gebäude verliert **6,2 kW**, **1900 Vollbenutzungsstunden**, Kessel η = 0,90, Gaspreis 0,11 €/kWh.
**10.1** Nutzenergie? **10.2** Zugeführte Energie? **10.3** Jahreskosten? **10.4** Bei Halbierung des Verlusts?

<details><summary>Lösung anzeigen</summary>

**10.1** Q = 6,2 · 1900 = **11 780 kWh**
**10.2** Q_zu = 11 780/0,90 = **13 089 kWh**
**10.3** 13 089 · 0,11 = **1440 €**
**10.4** Halbierung → ca. **720 €** – Ersparnis 720 €/Jahr
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich kenne den **ersten Hauptsatz** ΔU = Q + W.
- [ ] Ich berechne **Wärmemengen** mit Q = c·m·Δϑ.
- [ ] Ich kenne die **spezifische Wärmekapazität** von Wasser (4,19) und weiß, warum sie so hoch ist.
- [ ] Ich rechne zwischen **kJ und kWh** um (1 kWh = 3600 kJ).
- [ ] Ich löse **Mischungsaufgaben** über Q_ab = Q_auf und prüfe die Plausibilität.
- [ ] Ich weiß, dass die **Temperatur beim Phasenübergang konstant** bleibt.
- [ ] Ich kenne **q_m = 334 kJ/kg** und **r_v = 2257 kJ/kg** für Wasser.
- [ ] Ich kann einen **vollständigen Erwärmungsvorgang** in Abschnitte zerlegen.
- [ ] Ich verstehe, warum **Frost Baustoffe sprengt**.
- [ ] Ich kann den **Heizenergiebedarf** und die Kosten eines Gebäudes abschätzen.

**Damit ist Naturwissenschaft des 1. Semesters abgeschlossen.**
**Nächstes Fach:** Deutsch/Kommunikation LM1
