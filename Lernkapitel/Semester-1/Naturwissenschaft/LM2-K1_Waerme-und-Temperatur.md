# Naturwissenschaft · Lernmodul 2 · Kapitel 1
# Wärme und Temperatur

> **Lernkapitel zum Selbststudium.** Quelle: DAA Naturwissenschaft, Lernmodul 2, Kapitel 1 · **Zeitaufwand: ca. 5–6 Stunden**

**Was du am Ende können musst**
- Zwischen **Celsius und Kelvin** umrechnen.
- **Längen- und Volumenausdehnung** berechnen – und ihre Bedeutung für Dehnfugen erklären.
- Die **Gasgesetze** (isobar, isochor, isotherm) anwenden.
- Die drei Arten der **Wärmeausbreitung** unterscheiden.
- Den **Wärmestrom** durch ein Bauteil berechnen (Grundlage der Wärmedämmung).

**Inhalt:** [1.1 Temperatur](#11-temperatur-und-temperaturskalen) · [1.2 Wärmeausdehnung](#12-die-wärmeausdehnung) · [1.3 Gasgesetze](#13-zustandsänderungen-bei-gasen) · [1.4 Wärmeausbreitung](#14-die-ausbreitung-der-wärme) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

> ### 🏗️ Das ist Bauphysik pur
> Kein Kapitel der Naturwissenschaft ist für den Hochbau so direkt relevant wie dieses:
> - **Wärmeausdehnung** → warum es Dehnfugen gibt und wie breit sie sein müssen
> - **Wärmeleitung** → die Physik hinter λ-Wert, U-Wert und GEG
> - **Wärmebrücken** → wo Bauschäden entstehen
>
> Wer das versteht, versteht später die **Energieeinsparverordnung** und den **Wärmeschutznachweis**.

---

## 1.1 Temperatur und Temperaturskalen

### Was ist Temperatur?

> ### 💡 Definition
> Die **Temperatur** ist ein Maß für die mittlere **Bewegungsenergie der Teilchen**.
> **Wärme** dagegen ist **übertragene Energie** – nicht dasselbe!

### Die beiden Skalen

> ### 💡 Umrechnung
> ```
> T = 273,15 K + ϑ · K/°C
> ϑ = (T − 273,15 K) · °C/K
> ```
> | Skala | Zeichen | Nullpunkt |
> |-------|:-------:|-----------|
> | **Celsius** | ϑ (theta) | Gefrierpunkt von Wasser |
> | **Kelvin** | T | **absoluter Nullpunkt** |

> ### 💡 Der absolute Nullpunkt
> ```
> 0 K = −273,15 °C
> ```
> Tiefer geht es nicht – bei 0 K steht jede Teilchenbewegung still. Deshalb gibt es **keine negativen Kelvin-Werte**.

### Der wichtigste Merksatz

> ### ⚠️ Temperaturdifferenzen sind in K und °C gleich groß!
> ```
> ΔT = Δϑ
> ```
> Eine Erwärmung um **20 °C** ist dasselbe wie eine Erwärmung um **20 K**.
> Nur die **absoluten Werte** unterscheiden sich um 273,15.
>
> **Deshalb:** In Ausdehnungsformeln (Δϑ) ist es egal, ob du in K oder °C rechnest. In den **Gasgesetzen** (T) musst du zwingend **Kelvin** verwenden!

### 📐 Lehrbeispiel

| Aufgabe | Rechnung | Ergebnis |
|---------|----------|----------|
| 25 °C in K | 25 + 273,15 | 298,15 K |
| 350 K in °C | 350 − 273,15 | 76,85 °C |
| −18 °C in K | −18 + 273,15 | 255,15 K |
| Erwärmung von 5 auf 25 °C | Δϑ = 20 °C | = **20 K** |

---

## 1.2 Die Wärmeausdehnung

Fast alle Stoffe **dehnen sich beim Erwärmen aus** und ziehen sich beim Abkühlen zusammen.

### Längenausdehnung fester Körper

> ### 💡 Die Formeln
> **Näherungsformeln** (Bezug auf die Anfangslänge l₁):
> ```
> Δl = α · l₁ · Δϑ
> l₂ = l₁ · (1 + α · Δϑ)
> ```
> | Größe | Bedeutung | Einheit |
> |-------|-----------|---------|
> | Δl | Längenänderung | m oder mm |
> | **α** | **Längenausdehnungskoeffizient** | 1/K |
> | l₁ | Anfangslänge | m |
> | Δϑ = ϑ₂ − ϑ₁ | Temperaturänderung | K |
>
> *(Die exakten Formeln beziehen sich auf l₀ bei 0 °C: Δl = α·l₀·Δϑ. Für Bauaufgaben reicht die Näherung.)*

### 🏗️ Ausdehnungskoeffizienten der Baustoffe

| Baustoff | α (1/K) |
|----------|--------:|
| **Beton / Stahlbeton** | 10 · 10⁻⁶ bis 12 · 10⁻⁶ |
| **Stahl** | 12 · 10⁻⁶ |
| **Aluminium** | 24 · 10⁻⁶ |
| **Kupfer** | 17 · 10⁻⁶ |
| Mauerwerk (Ziegel) | 6 · 10⁻⁶ |
| Holz (längs) | 5 · 10⁻⁶ |
| **Kunststoff (PVC)** | 80 · 10⁻⁶ |
| Glas | 9 · 10⁻⁶ |

> ### 💡 Der glückliche Zufall des Stahlbetons
> **Beton und Stahl haben fast denselben Ausdehnungskoeffizienten** (≈ 12·10⁻⁶ 1/K).
>
> **Das ist die entscheidende Voraussetzung für Stahlbeton!** Würden sich beide unterschiedlich stark ausdehnen, würde die Bewehrung bei jedem Temperaturwechsel den Beton sprengen. Nur weil sie „im Gleichschritt" arbeiten, funktioniert der Verbundbaustoff.

### 📐 Lehrbeispiel

Ein **12 m** langer Stahlträger (α = 12·10⁻⁶ 1/K) erwärmt sich um **30 K**.
```
Δl = 12 · 10⁻⁶ · 12 · 30 = 0,00432 m = 4,32 mm
```

### Volumenausdehnung

> ### 💡 Formeln
> ```
> ΔV = γ · V₁ · Δϑ
> V₂ = V₁ · (1 + γ · Δϑ)
> ```
> **Für feste Körper gilt:**
> ```
> γ = 3 · α
> ```

**Warum 3α?** Ein Körper dehnt sich in **drei Richtungen** aus. (Genauer: (1+αΔϑ)³ ≈ 1+3αΔϑ, weil die höheren Glieder verschwindend klein sind.)

### 🏗️ Bau-Beispiel 1 – Dehnfuge dimensionieren

Eine **40 m** lange Betonwand (α = 10·10⁻⁶ 1/K) erlebt Temperaturen von **−15 °C bis +45 °C**.

```
Δϑ = 45 − (−15) = 60 K
Δl = 10 · 10⁻⁶ · 40 · 60 = 0,024 m = 24 mm
```

**Antwort:** Die Wand längt sich um **24 mm** – die Dehnfuge muss diese Bewegung aufnehmen können.

> **Faustregel im Hochbau:** Dehnfugen etwa alle **30 bis 50 m**, Fugenbreite meist **20–25 mm**. Genau das ergibt die Rechnung.

### 🏗️ Bau-Beispiel 2 – Zwängungsspannung

Was passiert, wenn sich ein Bauteil **nicht** ausdehnen kann?

Ein Stahlträger (**E = 210 000 N/mm²**, α = 12·10⁻⁶ 1/K) wird um **30 K** erwärmt, ist aber beidseitig **fest eingespannt**.

**Die verhinderte Dehnung erzeugt Spannung:**
```
ε = α · Δϑ = 12 · 10⁻⁶ · 30 = 3,6 · 10⁻⁴
σ = E · ε = 210 000 · 3,6 · 10⁻⁴ = 75,6 N/mm²
```

> ### ⚠️ Bemerkenswert: Die Länge spielt keine Rolle!
> Die Zwängungsspannung hängt **nur** von Material und Temperaturänderung ab – nicht von der Bauteillänge. Ein 2-m-Träger erfährt dieselbe Spannung wie ein 50-m-Träger.
>
> **75,6 N/mm²** sind rund ein Drittel der Streckgrenze von Baustahl S235 – allein durch Temperatur. Deshalb gibt es **Gleitlager** an Brücken und **Dehnfugen** in Bauwerken.

### 🏗️ Bau-Beispiel 3 – PVC-Rohr

Ein **6 m** langes PVC-Rohr (α = 80·10⁻⁶ 1/K) wird um **35 K** erwärmt.
```
Δl = 80 · 10⁻⁶ · 6 · 35 = 0,0168 m = 16,8 mm
```

**Zum Vergleich – dasselbe Rohr aus Stahl:**
```
Δl = 12 · 10⁻⁶ · 6 · 35 = 2,52 mm
```

> **Faktor 6,7!** Deshalb brauchen Kunststoffleitungen **deutlich mehr Dehnungsausgleich** (Dehnbögen, Gleitschellen) als Metallrohre. Wer eine PVC-Leitung starr befestigt, bekommt Risse oder ausgehängte Verbindungen.

### Die Anomalie des Wassers

> ### 💡 Ausnahme: Wasser zwischen 0 °C und 4 °C
> Wasser hat bei **4 °C** seine **größte Dichte**. Erwärmt man Eiswasser von 0 auf 4 °C, **zieht es sich zusammen** statt sich auszudehnen.
>
> **Baupraktische Folge:** Beim **Gefrieren** dehnt sich Wasser um etwa **9 %** aus. Das sprengt Rohre, Fugen und poröse Baustoffe – die Ursache von **Frostschäden**. Deshalb: frostsichere Gründungstiefe (in Deutschland ca. **80 cm**), Leitungen dämmen, Bauteile trocken halten.

---

<div class="viz" data-viz="ausdehnung"></div>

## 1.3 Zustandsänderungen bei Gasen

Bei Gasen hängen **Druck p**, **Volumen V** und **Temperatur T** zusammen.

> ### 💡 Allgemeine Zustandsgleichung des idealen Gases
> ```
> p · V / T = konstant
> ```
> bzw.
> ```
> p₁ · V₁ / T₁ = p₂ · V₂ / T₂
> ```
> ⚠️ **T immer in KELVIN einsetzen!**

### Die drei Sonderfälle

| Zustandsänderung | konstant | Gesetz | Name | Merksatz |
|------------------|:--------:|--------|------|----------|
| **isobar** | p | V₁/V₂ = T₁/T₂ | **Gay-Lussac** | wärmer → größer |
| **isochor** | V | p₁/p₂ = T₁/T₂ | (Amontons) | wärmer → mehr Druck |
| **isotherm** | T | p₁·V₁ = p₂·V₂ | **Boyle-Mariotte** | mehr Druck → weniger Volumen |

**Merkhilfe für die Namen:**
- iso**bar** → **bar** = Druck bleibt
- iso**chor** → „chora" (griech. Raum) = Volumen bleibt
- iso**therm** → therm = Temperatur bleibt

Der **isobare Ausdehnungskoeffizient** idealer Gase beträgt
```
γ = 1/273,15 K ≈ 3,661 · 10⁻³ K⁻¹
```

### 📐 Lehrbeispiel 1 – isochor

Ein Gas hat bei **300 K** einen Druck von **2 bar** (Volumen konstant). Welcher Druck bei **450 K**?

```
p₁/p₂ = T₁/T₂
p₂ = p₁ · T₂/T₁ = 2 · 450/300 = 3 bar
```

### 📐 Lehrbeispiel 2 – isotherm

**6 Liter** Gas bei **1 bar** werden auf **2 Liter** komprimiert (Temperatur konstant).
```
p₁V₁ = p₂V₂
p₂ = 1 · 6/2 = 3 bar
```

### 📐 Lehrbeispiel 3 – allgemeine Gleichung

p₁ = 1 bar, V₁ = 10 l, T₁ = 273 K. Wie groß ist V₂ bei p₂ = 2 bar und T₂ = 546 K?
```
V₂ = (p₁ · V₁ · T₂) / (T₁ · p₂) = (1 · 10 · 546)/(273 · 2) = 5460/546 = 10 l
```
(Verdoppelter Druck und verdoppelte Temperatur heben sich auf.)

### 🏗️ Bau-Beispiel – Reifendruck der Baumaschine

Ein Baggerreifen wird morgens bei **5 °C** auf **3,5 bar** gefüllt. Nach Betrieb erwärmt er sich auf **45 °C**. Wie hoch ist der Druck? (Volumen ≈ konstant)

```
T₁ = 5 + 273 = 278 K
T₂ = 45 + 273 = 318 K

p₂ = p₁ · T₂/T₁ = 3,5 · 318/278 = 4,00 bar
```

> **Praxis:** Der Druck steigt um **0,5 bar**. Deshalb prüft man den Reifendruck immer im **kalten** Zustand – warm gemessen wäre er zu hoch und man würde fälschlich Luft ablassen.

---

## 1.4 Die Ausbreitung der Wärme

> ### 💡 Grundregel
> Wärme fließt **immer** vom **wärmeren zum kälteren** Körper – nie umgekehrt.

### Die drei Arten

| Art | Prinzip | Beispiel im Bau |
|-----|---------|-----------------|
| **1. Wärmeleitung** | Energieübertragung **im Stoff**, ohne Materialtransport | Wärme durch die Außenwand |
| **2. Konvektion** (Strömung) | Transport durch **strömende** Flüssigkeiten/Gase | Heizkörper erwärmt Raumluft; Zugluft |
| **3. Wärmestrahlung** | elektromagnetische Wellen, **auch im Vakuum** | Sonneneinstrahlung; Infrarotheizung |

### Der Wärmestrom

> ### 💡 Die Formel der Wärmedämmung
> ```
> Φ = Q / t = λ · A · (ϑ₁ − ϑ₂) / l
> ```
> | Größe | Bedeutung | Einheit |
> |-------|-----------|---------|
> | Φ (Phi) | **Wärmestrom** | W |
> | **λ** (lambda) | **Wärmeleitfähigkeit** | W/(m·K) |
> | A | Querschnittsfläche | m² |
> | l | Dicke des Bauteils | m |
> | ϑ₁ − ϑ₂ | Temperaturgefälle | K |

### 🏗️ Wärmeleitfähigkeiten λ

| Baustoff | λ in W/(m·K) | Bewertung |
|----------|-------------:|-----------|
| **Stahl** | 50 | leitet sehr gut |
| **Stahlbeton** | 2,1 | leitet gut → Wärmebrücke! |
| Vollziegel | 0,8 | mittel |
| Porenbeton | 0,11 | schon dämmend |
| Holz | 0,13 | dämmend |
| **Mineralwolle** | 0,035 | **Dämmstoff** |
| **PU-Hartschaum** | 0,024 | sehr guter Dämmstoff |
| ruhende Luft | 0,026 | (deshalb dämmen poröse Stoffe) |

> ### 💡 Der entscheidende Zusammenhang
> **Kleines λ = gute Dämmung.** Stahlbeton leitet Wärme **60-mal besser** als Mineralwolle (2,1 : 0,035) – deshalb ist jedes ungedämmte Betonbauteil eine **Wärmebrücke**.

### 📐 Lehrbeispiel – Wärmestrom durch eine Wand

Wand: **A = 20 m²**, **l = 0,30 m**, **λ = 0,8 W/(m·K)**, innen 20 °C, außen 0 °C.

```
Φ = 0,8 · 20 · (20 − 0) / 0,30
  = 0,8 · 20 · 20 / 0,30
  = 320 / 0,30
  = 1066,7 W ≈ 1,07 kW
```

**Dieselbe Wand mit Dämmstoff (λ = 0,04):**
```
Φ = 0,04 · 20 · 20 / 0,30 = 53,3 W
```

> **Faktor 20!** Aus 1067 W werden 53 W. Bei 2000 Heizstunden im Jahr:
> ```
> ungedämmt: 1,067 kW · 2000 h = 2134 kWh
> gedämmt:   0,053 kW · 2000 h =  107 kWh
> Ersparnis:                     2027 kWh pro Jahr (nur für diese eine Wand!)
> ```

### 🏗️ Bau-Beispiel – Wärmebrücke Balkonplatte

Eine auskragende Stahlbetonplatte (**λ = 2,1**) durchdringt die Dämmebene. Fläche des Durchdringungsquerschnitts **0,20 m² pro Meter**, Dicke der Dämmebene **0,16 m**, Temperaturdifferenz **20 K**.

```
Φ = 2,1 · 0,20 · 20 / 0,16 = 8,4 / 0,16 = 52,5 W je Meter Balkonlänge
```

Bei 5 m Balkon: **262 W** dauerhafter Verlust – so viel wie zwei bis drei Menschen abgeben.

> **Deshalb** gibt es **Isokörbe** (thermisch getrennte Balkonanschlüsse). Zusätzlich zum Energieverlust kühlt die Innenoberfläche ab → **Tauwasser und Schimmelgefahr**.

### 🏗️ Bau-Beispiel – Mehrschichtige Wand

Bei mehreren Schichten addieren sich die **Wärmedurchlasswiderstände**:
```
R = l / λ           [m²K/W]
R_gesamt = R₁ + R₂ + R₃ + …
```

**Beispiel:** 0,175 m Ziegel (λ=0,8) + 0,14 m Mineralwolle (λ=0,035) + 0,015 m Putz (λ=0,7)

```
R₁ = 0,175/0,8   = 0,219
R₂ = 0,14/0,035  = 4,000
R₃ = 0,015/0,7   = 0,021
──────────────────────────
R_ges            = 4,240 m²K/W
```

> **Man sieht sofort:** Die 14 cm Dämmung liefern **94 %** des Dämmwerts. Der Ziegel trägt fast nichts bei. Genau deshalb rechnet sich Dämmung.
>
> *(Aus R wird später der **U-Wert** = 1/R_total gebildet – die Kerngröße des Wärmeschutznachweises.)*

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Temperaturumrechnung
**1.1** 32 °C in K · **1.2** 195 K in °C · **1.3** −25 °C in K · **1.4** Erwärmung von 8 auf 33 °C in K?

<details><summary>Lösung anzeigen</summary>

**1.1** **305,15 K** · **1.2** **−78,15 °C** · **1.3** **248,15 K** · **1.4** Δϑ = 25 °C = **25 K**
</details>

### Aufgabe 2 · Längenausdehnung
**2.1** l = 25 m Beton (α = 10·10⁻⁶), Δϑ = 25 K · **2.2** l = 8 m Stahl (α = 12·10⁻⁶), Δϑ = 40 K

<details><summary>Lösung anzeigen</summary>

**2.1** Δl = 10·10⁻⁶ · 25 · 25 = 0,00625 m = **6,25 mm**
**2.2** Δl = 12·10⁻⁶ · 8 · 40 = 0,00384 m = **3,84 mm**
</details>

### Aufgabe 3 · Volumenausdehnung
Stahlteil V = 3 dm³, α = 12·10⁻⁶, Δϑ = 80 K.

<details><summary>Lösung anzeigen</summary>

```
γ = 3α = 36·10⁻⁶ 1/K
ΔV = 36·10⁻⁶ · 3 · 80 = 0,00864 dm³ = 8,64 cm³
```
</details>

### Aufgabe 4 · Gasgesetze
**4.1** isochor: 280 K/1,8 bar → Druck bei 350 K? **4.2** isotherm: 8 l/2 bar → Volumen bei 5 bar?

<details><summary>Lösung anzeigen</summary>

**4.1** p₂ = 1,8 · 350/280 = **2,25 bar**
**4.2** V₂ = 2 · 8/5 = **3,2 l**
</details>

### Aufgabe 5 · Wärmeausbreitung
Nenne die drei Arten mit je einem Beispiel aus dem Bau.

<details><summary>Lösung anzeigen</summary>

1. **Wärmeleitung** – Wärme durch die Außenwand
2. **Konvektion** – Heizkörper erwärmt die Raumluft, Zugluft am Fenster
3. **Wärmestrahlung** – Sonneneinstrahlung auf die Fassade
</details>

### 🏗️ Aufgabe 6 · Dehnfuge
Eine **55 m** lange Betonwand (α = 10·10⁻⁶), Temperaturbereich **−20 °C bis +50 °C**.
**6.1** Δϑ? **6.2** Längenänderung? **6.3** Beurteile eine Fugenbreite von 20 mm.

<details><summary>Lösung anzeigen</summary>

**6.1** Δϑ = 50 − (−20) = **70 K**
**6.2** Δl = 10·10⁻⁶ · 55 · 70 = 0,0385 m = **38,5 mm**
**6.3** 20 mm sind **zu wenig** – entweder breitere Fuge oder zusätzliche Fuge (Feldlänge verkürzen).
</details>

### 🏗️ Aufgabe 7 · Zwängungsspannung
Ein eingespannter Betonträger (E = 31 000 N/mm², α = 10·10⁻⁶) erwärmt sich um **25 K**.
**7.1** Dehnung ε? **7.2** Spannung σ?

<details><summary>Lösung anzeigen</summary>

**7.1** ε = 10·10⁻⁶ · 25 = **2,5·10⁻⁴**
**7.2** σ = 31 000 · 2,5·10⁻⁴ = **7,75 N/mm²**

Zum Vergleich: Die Zugfestigkeit von Beton liegt bei nur ca. 2,5 N/mm² → **der Beton würde reißen**. Deshalb Bewehrung und Fugen.
</details>

### 🏗️ Aufgabe 8 · Kunststoffrohr
Ein **9 m** langes PVC-Rohr (α = 80·10⁻⁶) erwärmt sich um **30 K**.
**8.1** Längenänderung? **8.2** Vergleich mit Kupfer (α = 17·10⁻⁶)?

<details><summary>Lösung anzeigen</summary>

**8.1** Δl = 80·10⁻⁶ · 9 · 30 = 0,0216 m = **21,6 mm**
**8.2** Kupfer: Δl = 17·10⁻⁶ · 9 · 30 = **4,59 mm** – also fast **5-mal weniger**
</details>

### 🏗️ Aufgabe 9 · Wärmestrom
Wand **A = 35 m²**, **l = 0,24 m**, **λ = 0,7 W/(m·K)**, innen 21 °C, außen −5 °C.
**9.1** Wärmestrom? **9.2** Mit 12 cm Dämmung (λ = 0,035) zusätzlich – wie ändert sich R?

<details><summary>Lösung anzeigen</summary>

**9.1**
```
Φ = 0,7 · 35 · 26 / 0,24 = 637 / 0,24 = 2654 W ≈ 2,65 kW
```

**9.2**
```
R_Wand = 0,24/0,7 = 0,343 m²K/W
R_Dämm = 0,12/0,035 = 3,429 m²K/W
R_ges = 3,772 m²K/W

Φ = A · Δϑ / R = 35 · 26 / 3,772 = 910/3,772 = 241 W
```
Reduktion von 2654 W auf **241 W** – etwa **91 % Ersparnis**.
</details>

### 🏗️ Aufgabe 10 · Reifendruck
Ein Reifen wird bei **8 °C** auf **4,2 bar** gefüllt, erwärmt sich auf **50 °C**.

<details><summary>Lösung anzeigen</summary>

```
T₁ = 281 K, T₂ = 323 K
p₂ = 4,2 · 323/281 = 4,83 bar
```
Anstieg um **0,63 bar**.
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich rechne zwischen **Celsius und Kelvin** um und kenne den absoluten Nullpunkt.
- [ ] Ich weiß, dass **Temperaturdifferenzen** in K und °C **gleich** sind.
- [ ] Ich berechne **Längenausdehnung** (Δl = α·l·Δϑ) und **Volumenausdehnung** (γ = 3α).
- [ ] Ich kann eine **Dehnfuge** dimensionieren.
- [ ] Ich verstehe, warum **Stahlbeton funktioniert** (gleiches α).
- [ ] Ich kann die **Zwängungsspannung** berechnen (σ = E·α·Δϑ) und weiß, dass die Länge keine Rolle spielt.
- [ ] Ich kenne die **Anomalie des Wassers** und die Folgen für Frostschäden.
- [ ] Ich wende die **Gasgesetze** an – mit T in **Kelvin**.
- [ ] Ich kenne die drei Arten der **Wärmeausbreitung**.
- [ ] Ich berechne den **Wärmestrom** und weiß: kleines λ = gute Dämmung.
- [ ] Ich kann **Wärmedurchlasswiderstände** mehrerer Schichten addieren.
- [ ] Ich kann erklären, warum eine **Balkonplatte** eine Wärmebrücke ist.

**Nächstes Kapitel:** LM2 Kapitel 2 – Wärme als Energieart
