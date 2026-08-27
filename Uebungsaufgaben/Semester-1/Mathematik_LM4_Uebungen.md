# Übungsaufgaben – Mathematik LM4
## Geometrie und Trigonometrie

> Grundlagen: [Zusammenfassung ausführlich](../../Zusammenfassungen/Semester-1/Mathematik/LM4_Geometrie-und-Trigonometrie_ausfuehrlich.md)
> Tipp: Bei Winkeln Taschenrechner auf **DEG** (Grad) stellen.

---

**1) Pythagoras.** Ein rechtwinkliges Dreieck hat die Katheten 6 m und 8 m. Wie lang ist die Hypotenuse?
<details><summary>Lösung</summary>

c = √(6² + 8²) = √(36+64) = √100 = **10 m**
</details>

**2) Pythagoras umgestellt.** Hypotenuse 13 cm, eine Kathete 5 cm. Wie lang ist die andere Kathete?
<details><summary>Lösung</summary>

b = √(13² − 5²) = √(169 − 25) = √144 = **12 cm**
</details>

**3) Winkelsumme.** Im Dreieck sind zwei Winkel 55° und 80°. Wie groß ist der dritte?
<details><summary>Lösung</summary>

180° − 55° − 80° = **45°**
</details>

**4) Trigonometrie – Seite.** Rechtwinkliges Dreieck, Hypotenuse 12 m, Winkel α = 40°. Wie lang ist die Gegenkathete?
<details><summary>Lösung</summary>

a = 12 · sin 40° = 12 · 0,643 = **≈ 7,71 m**
</details>

**5) Trigonometrie – Winkel.** Gegenkathete 3 m, Ankathete 4 m. Wie groß ist der Winkel α?
<details><summary>Lösung</summary>

tan α = 3/4 = 0,75 → α = tan⁻¹(0,75) = **≈ 36,87°**
</details>

**6) Kosinussatz.** Dreieck mit a = 5 cm, b = 7 cm, eingeschlossener Winkel γ = 60°. Wie lang ist c?
<details><summary>Lösung</summary>

c² = 5² + 7² − 2·5·7·cos60° = 25 + 49 − 70·0,5 = 39 → c = √39 ≈ **6,24 cm**
</details>

**7) Fläche (Bau).** Eine Wand ist 5,00 m lang und 2,80 m hoch, darin ein Fenster 1,20 m × 1,40 m. Welche Fläche muss verputzt werden?
<details><summary>Lösung</summary>

Wand 5,0·2,8 = 14,0 m² − Fenster 1,2·1,4 = 1,68 m² → **12,32 m²**
</details>

**8) Kreis.** Ein kreisrunder Schacht hat den Durchmesser 0,8 m. a) Fläche? b) Umfang?
<details><summary>Lösung</summary>

r = 0,4 m · a) A = π·0,4² = **≈ 0,503 m²** · b) U = 2·π·0,4 = **≈ 2,51 m**
</details>

**9) Volumen (Bau).** Eine Bodenplatte ist 6,0 m × 4,0 m × 0,25 m. Wie viel Beton (m³) wird benötigt?
<details><summary>Lösung</summary>

V = 6,0 · 4,0 · 0,25 = **6,0 m³**
</details>

**10) Zylinder.** Ein Rohr hat Radius 0,15 m und Länge 8 m. Welches Volumen fasst es?
<details><summary>Lösung</summary>

V = π · 0,15² · 8 = π · 0,0225 · 8 ≈ **0,565 m³**
</details>

---

## 🏗️ Zusatzaufgaben mit Bau-Bezug

### Aufgabe 11 · Baugrube mit Böschung
Sohle **14,00 m × 9,00 m**, Tiefe **3,20 m**, Böschung **1 : 1,25**.
**11.1** Maße oben? **11.2** Aushubvolumen (Stumpfformel)? **11.3** Wie viele 12-m³-Kipper bei Auflockerung 1,25?

<details><summary>Lösung anzeigen</summary>

**11.1** Rücksprung je Seite: 3,20 · 1,25 = 4,00 m
```
Länge oben  = 14,00 + 2·4,00 = 22,00 m
Breite oben =  9,00 + 2·4,00 = 17,00 m
```
**11.2**
```
G₁ = 126,00 m² ; G₂ = 374,00 m²
V = (3,20/3)·(126 + √(126·374) + 374)
  = 1,0667·(126 + 217,08 + 374)
  = 1,0667 · 717,08 = 764,9 m³
```
**11.3** 764,9 · 1,25 = 956,1 m³ → 956,1 : 12 = 79,7 → **80 Fuhren**
</details>

### Aufgabe 12 · Dachfläche und Ziegelbedarf
Satteldach: Gebäudelänge **14,00 m**, halbe Spannweite **4,80 m**, Firsthöhe über Traufe **3,60 m**.
**12.1** Sparrenlänge? **12.2** Dachfläche beider Seiten? **12.3** Ziegel bei 12 Stück/m² und 5 % Verschnitt?

<details><summary>Lösung anzeigen</summary>

**12.1** l = √(4,80² + 3,60²) = √(23,04 + 12,96) = √36 = **6,00 m**
**12.2** A = 2 · 6,00 · 14,00 = **168,00 m²**
**12.3** 168 · 12 = 2016 Stück · 1,05 = 2116,8 → **2117 Ziegel**
</details>

### Aufgabe 13 · Rundschacht
Ein Schacht: Innendurchmesser **1,00 m**, Wanddicke **0,18 m**, Höhe **2,80 m**.
**13.1** Betonvolumen? **13.2** Masse (ρ = 2,4 t/m³)? **13.3** Innere Schalungsfläche?

<details><summary>Lösung anzeigen</summary>

**13.1**
```
r = 0,50 m ; R = 0,68 m
A = π(R+r)(R−r) = π · 1,18 · 0,18 = 0,6673 m²
V = 0,6673 · 2,80 = 1,868 m³
```
**13.2** m = 1,868 · 2,4 = **4,48 t**
**13.3** M = 2π · 0,50 · 2,80 = **8,80 m²**
</details>

### Aufgabe 14 · Vermessung über ein Hindernis
Von Punkt A aus soll die Entfernung zu B bestimmt werden. Standlinie **AC = 82,00 m**, Winkel bei A = **64°**, Winkel bei C = **51°**.

<details><summary>Lösung anzeigen</summary>

```
Winkel bei B = 180 − 64 − 51 = 65°
AB = 82,00 · sin51° / sin65° = 82,00 · 0,7771 / 0,9063
   = 63,72 / 0,9063 = 70,31 m
```
</details>

### Aufgabe 15 · Grundstücksfläche (SSS)
Ein dreieckiges Grundstück hat die Seiten **48,00 m**, **36,00 m** und **41,00 m**.
**15.1** Winkel γ (zwischen 48 und 36)? **15.2** Fläche?

<details><summary>Lösung anzeigen</summary>

**15.1**
```
cos γ = (48² + 36² − 41²)/(2·48·36) = (2304 + 1296 − 1681)/3456
      = 1919/3456 = 0,5553
γ = 56,26°
```
**15.2** A = ½ · 48 · 36 · sin56,26° = 864 · 0,8316 = **718,5 m²**
</details>

### Aufgabe 16 · Schüttgut
Ein Sandhaufen hat einen Umfang von **21,00 m** am Boden und eine Höhe von **2,30 m**.
**16.1** Durchmesser und Radius? **16.2** Volumen? **16.3** Masse bei 1,6 t/m³?

<details><summary>Lösung anzeigen</summary>

**16.1** U = π·d → d = 21,00/π = **6,68 m**, r = **3,34 m**
**16.2** V = ⅓·π·3,34²·2,30 = ⅓·π·11,156·2,30 = **26,86 m³**
**16.3** m = 26,86 · 1,6 = **43,0 t**
</details>
