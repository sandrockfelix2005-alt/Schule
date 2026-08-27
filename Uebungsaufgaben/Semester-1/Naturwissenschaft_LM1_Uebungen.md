# Übungsaufgaben – Naturwissenschaft LM1
## Grundlagen der Mechanik

> Grundlagen: [Zusammenfassung ausführlich](../../Zusammenfassungen/Semester-1/Naturwissenschaft/LM1_Mechanik_ausfuehrlich.md) · Rechne mit g = 9,81 m/s².

---

**1) Dichte.** Ein Betonwürfel hat V = 0,5 m³ und m = 1200 kg. Wie groß ist die Dichte?
<details><summary>Lösung</summary>

ρ = m/V = 1200/0,5 = **2400 kg/m³**
</details>

**2) Gewichtskraft.** Welche Gewichtskraft hat eine Stahlträger-Masse von 850 kg?
<details><summary>Lösung</summary>

F_G = m·g = 850 · 9,81 = **8338,5 N ≈ 8,34 kN**
</details>

**3) Kraftzerlegung.** Eine Kraft F = 500 N wirkt unter 30° zur Waagerechten. Bestimme F_x und F_y.
<details><summary>Lösung</summary>

F_x = 500·cos30° = **433 N** · F_y = 500·sin30° = **250 N**
</details>

**4) Schiefe Ebene.** Ein Körper (m = 200 kg) liegt auf einer Ebene mit 20° Neigung. Berechne F_N und F_H.
<details><summary>Lösung</summary>

F_G = 200·9,81 = 1962 N
F_N = 1962·cos20° = **1843,7 N** · F_H = 1962·sin20° = **671,1 N**
</details>

**5) Reibung.** Ein Bauteil (F_N = 800 N) liegt auf Stahl, µ = 0,15. Welche Kraft ist zum Verschieben nötig?
<details><summary>Lösung</summary>

F_R = µ·F_N = 0,15 · 800 = **120 N**
</details>

**6) Federkraft.** Eine Feder mit c = 25 N/mm wird 12 mm gespannt. Welche Kraft wirkt?
<details><summary>Lösung</summary>

F = c·s = 25 · 12 = **300 N**
</details>

**7) Hebelgesetz.** Links wirken 400 N bei 0,5 m. Wie groß muss die Kraft rechts bei 2,0 m sein?
<details><summary>Lösung</summary>

F₁·l₁ = F₂·l₂ → F₂ = (400·0,5)/2,0 = **100 N**
</details>

**8) Geschwindigkeit.** Ein Fahrzeug legt 900 m in 60 s zurück. Wie schnell ist es in km/h?
<details><summary>Lösung</summary>

v = 900/60 = 15 m/s = 15·3,6 = **54 km/h**
</details>

**9) Beschleunigung.** Ein Auto beschleunigt aus dem Stand in 8 s auf 20 m/s. a) Beschleunigung? b) Weg?
<details><summary>Lösung</summary>

a) a = Δv/Δt = 20/8 = **2,5 m/s²** · b) s = ½·a·t² = ½·2,5·64 = **80 m**
</details>

**10) Freier Fall.** Ein Werkzeug fällt aus 12 m Höhe. a) Aufprallgeschwindigkeit? b) Fallzeit?
<details><summary>Lösung</summary>

a) v = √(2·9,81·12) = √235,4 = **15,3 m/s** (≈ 55 km/h!)
b) t = v/g = 15,3/9,81 ≈ **1,56 s**
</details>

**11) Hubarbeit.** Ein Kran hebt 500 kg um 15 m. Welche Arbeit wird verrichtet?
<details><summary>Lösung</summary>

W = m·g·h = 500 · 9,81 · 15 = **73 575 J ≈ 73,6 kJ**
</details>

**12) Leistung.** Der Kran aus Aufgabe 11 braucht dafür 30 s. Welche Leistung?
<details><summary>Lösung</summary>

P = W/t = 73575/30 = **2452,5 W ≈ 2,45 kW**
</details>

**13) Wirkungsgrad.** Eine Anlage nimmt 12 kW auf und gibt 9,6 kW ab. Wirkungsgrad?
<details><summary>Lösung</summary>

η = 9,6/12 = **0,8 = 80 %**
</details>

**14) Wirkungsgradkette.** Drei Stufen mit η₁ = 0,9, η₂ = 0,85, η₃ = 0,95. Gesamtwirkungsgrad?
<details><summary>Lösung</summary>

η_ges = 0,9 · 0,85 · 0,95 = **0,727 ≈ 72,7 %**
</details>

**15) Druck.** Eine Stütze überträgt 60 kN auf eine Fundamentfläche von 0,8 m². Wie groß ist die Bodenpressung?
<details><summary>Lösung</summary>

p = F/A = 60000/0,8 = **75 000 Pa = 75 kPa = 0,75 bar**
</details>

**16) Schweredruck.** Welcher Wasserdruck herrscht in 4,5 m Tiefe? (ρ = 1000 kg/m³)
<details><summary>Lösung</summary>

p = ρ·g·h = 1000 · 9,81 · 4,5 = **44 145 Pa ≈ 0,44 bar**
</details>

**17) Hydraulik.** Kleiner Kolben A₁ = 5 cm², großer A₂ = 250 cm². Auf den kleinen wirken 200 N. Welche Kraft am großen Kolben?
<details><summary>Lösung</summary>

F₂ = F₁ · A₂/A₁ = 200 · 250/5 = **10 000 N = 10 kN**
</details>

---

## 🏗️ Zusatzaufgaben mit Bau-Bezug

### Aufgabe 18 · Auflagerkräfte
Ein Träger von **7,20 m** Spannweite trägt eine Gleichstreckenlast **q = 14 kN/m** und zusätzlich eine Einzellast **F = 45 kN** bei 5,00 m vom linken Auflager A.
**18.1** Auflagerkräfte? **18.2** Probe.

<details><summary>Lösung anzeigen</summary>

```
Gleichlast: F_q = 14 · 7,20 = 100,8 kN, greift bei 3,60 m an

Momente um A:
100,8 · 3,60 + 45 · 5,00 = B · 7,20
362,88 + 225 = B · 7,20
587,88 = B · 7,20  →  B = 81,65 kN

Momente um B:
A · 7,20 = 100,8 · 3,60 + 45 · 2,20 = 362,88 + 99 = 461,88
A = 64,15 kN
```
**18.2** 64,15 + 81,65 = 145,8 kN = 100,8 + 45 ✓
</details>

### Aufgabe 19 · Kippsicherheit Stützmauer
Eigengewicht **G = 210 kN** bei **1,25 m** von der Kippkante, Erddruck **H = 68 kN** bei **1,55 m** Höhe.
**19.1** Kippsicherheit? **19.2** Gleitsicherheit bei µ = 0,55? **19.3** Beurteilung (η ≥ 1,5)?

<details><summary>Lösung anzeigen</summary>

**19.1** M_stand = 210 · 1,25 = 262,5 kNm; M_kipp = 68 · 1,55 = 105,4 kNm
```
η_kipp = 262,5 / 105,4 = 2,49  ✓
```
**19.2** F_R = 0,55 · 210 = 115,5 kN → η_gleit = 115,5 / 68 = **1,70** ✓
**19.3** Beide über 1,5 → **standsicher**
</details>

### Aufgabe 20 · Krandimensionierung
Ein Kran soll **4,5 t** in **22 m** Ausladung heben. Das Gegengewicht sitzt **6,0 m** auf der anderen Seite.
**20.1** Lastmoment? **20.2** Erforderliches Ballastgewicht ohne Sicherheit? **20.3** Mit Sicherheit 1,5?

<details><summary>Lösung anzeigen</summary>

**20.1** M_L = 4,5 · 9,81 · 22 = **971,2 kNm**
**20.2** m_B = 971,2 / (9,81 · 6,0) = 971,2 / 58,86 = **16,50 t**
**20.3** 16,50 · 1,5 = **24,75 t**
</details>

### Aufgabe 21 · Antrieb auslegen
Eine Bauwinde soll **2,8 t** mit **0,35 m/s** heben. Wirkungsgrade: Motor 0,89, Getriebe 0,84, Trommel 0,93.
**21.1** Nutzleistung? **21.2** Gesamtwirkungsgrad? **21.3** Motorleistung?

<details><summary>Lösung anzeigen</summary>

**21.1** P_ab = 2800 · 9,81 · 0,35 = **9613,8 W ≈ 9,61 kW**
**21.2** η = 0,89 · 0,84 · 0,93 = **0,695**
**21.3** P_zu = 9613,8 / 0,695 = **13 833 W ≈ 13,8 kW** → 15-kW-Motor
</details>

### Aufgabe 22 · Wasserdruck auf Baugrubenwand
Eine Spundwand ist **5,50 m** hoch, dahinter steht Wasser bis Oberkante. Wandlänge **8,00 m**.
**22.1** Druck am Fuß? **22.2** Gesamtkraft? **22.3** Angriffspunkt?

<details><summary>Lösung anzeigen</summary>

**22.1** p = 1000 · 9,81 · 5,50 = **53 955 Pa ≈ 0,54 bar**
**22.2** F = 1000 · 9,81 · 2,75 · (5,50 · 8,00) = 26 977,5 · 44,00 = **1 187 010 N ≈ 1187 kN**
**22.3** Im unteren Drittel: 5,50/3 = **1,83 m** über dem Wandfuß
</details>
