# Übungsaufgaben – Mathematik LM2
## Funktionen und Gleichungen erster Ordnung

> Grundlagen: [Zusammenfassung ausführlich](../../Zusammenfassungen/Semester-1/Mathematik/LM2_Funktionen-und-Gleichungen_ausfuehrlich.md)

---

**1) Proportional?** Prüfe, ob proportional, und gib ggf. k an: x: 2, 4, 6 → y: 5, 10, 15
<details><summary>Lösung</summary>

y/x = 2,5 (konstant) → **proportional, k = 2,5**, also y = 2,5·x
</details>

**2) Dreisatz (proportional).** 6 gleiche Rohre kosten 45 €. Was kosten 10 Rohre?
<details><summary>Lösung</summary>

1 Rohr = 45 : 6 = 7,50 € → 10 Rohre = 75 €
</details>

**3) Dreisatz (antiproportional).** 4 Bagger brauchen 9 Tage. Wie lange brauchen 6 Bagger?
<details><summary>Lösung</summary>

1 Bagger = 9 · 4 = 36 Tage → 6 Bagger = 36 : 6 = **6 Tage**
</details>

**4) Lineare Gleichung.** Löse: 5x − 8 = 2x + 7
<details><summary>Lösung</summary>

−2x → 3x − 8 = 7 → +8 → 3x = 15 → x = **5**
</details>

**5) Ungleichung.** Löse: −3x + 4 < 13
<details><summary>Lösung</summary>

−4 → −3x < 9 → :(−3) (Zeichen dreht!) → **x > −3**
</details>

**6) Geradengleichung.** Gegeben y = −2x + 6. a) Steigung? b) y-Achsenabschnitt? c) Nullstelle?
<details><summary>Lösung</summary>

a) m = −2 (fallend) · b) b = 6 · c) 0 = −2x + 6 → x = **3** → Nullstelle (3 | 0)
</details>

**7) Schnittpunkt.** Bestimme den Schnittpunkt von y = 3x − 1 und y = x + 5.
<details><summary>Lösung</summary>

3x − 1 = x + 5 → 2x = 6 → x = 3 → y = 8 → **Schnittpunkt (3 | 8)**
</details>

**8) Gleichungssystem.** Löse: (I) 2x + y = 12 · (II) x − y = 3
<details><summary>Lösung</summary>

Additionsverfahren (I)+(II): 3x = 15 → x = 5 → y = 12 − 10 = 2 → **(5 | 2)**
</details>

**9) Umkehrfunktion.** Bilde die Umkehrfunktion von y = 3x − 9.
<details><summary>Lösung</summary>

nach x: x = (y + 9)/3 → tauschen → **y = (x + 9)/3**
</details>

---

## 🏗️ Zusatzaufgaben mit Bau-Bezug

### Aufgabe 13 · Formeln umstellen (Statik)
Stelle um: **13.1** σ = F/A nach F · **13.2** V = G·h nach G · **13.3** W = b·h²/6 nach b · **13.4** A = ½(a+c)·h nach a

<details><summary>Lösung anzeigen</summary>

**13.1** F = σ · A
**13.2** G = V / h
**13.3** b = 6W / h²
**13.4** a = 2A/h − c
</details>

### Aufgabe 14 · Stütze dimensionieren
Eine Stütze trägt **F = 980 kN**, zulässige Betonspannung **σ = 13 N/mm²**.
**14.1** Erforderliche Fläche? **14.2** Kantenlänge quadratisch? **14.3** Gewähltes Maß?

<details><summary>Lösung anzeigen</summary>

**14.1** A = 980 000 / 13 = **75 385 mm² ≈ 754 cm²**
**14.2** a = √75 385 = **274,6 mm**
**14.3** Gewählt **30 × 30 cm** (nächstes gängiges Maß)
</details>

### Aufgabe 15 · Zwei Angebote vergleichen
**Firma A:** 2400 € Baustelleneinrichtung + 32,50 €/m² · **Firma B:** 900 € + 41,00 €/m²
**15.1** Ab welcher Fläche ist A günstiger? **15.2** Kosten bei 120 m² für beide?

<details><summary>Lösung anzeigen</summary>

**15.1**
```
32,50x + 2400 = 41,00x + 900
1500 = 8,50x  →  x = 176,5 m²
```
Ab etwa **177 m²** ist Firma A günstiger.

**15.2** A: 32,50·120 + 2400 = **6300 €** · B: 41,00·120 + 900 = **5820 €** → bei 120 m² ist **B günstiger**
</details>

### Aufgabe 16 · Rampe mit Podest
Eine Rampe überwindet **1,44 m** bei maximal **6 %** Steigung. Nach je 6 m Länge ist ein Podest von 1,50 m erforderlich.
**16.1** Reine Rampenlänge? **16.2** Anzahl Podeste? **16.3** Gesamtlänge?

<details><summary>Lösung anzeigen</summary>

**16.1** l = 1,44 / 0,06 = **24,00 m**
**16.2** 24,00 : 6 = 4 Abschnitte → **3 Zwischenpodeste**
**16.3** 24,00 + 3 · 1,50 = **28,50 m**
</details>

### Aufgabe 17 · Mischung mit zwei Unbekannten
Für einen Estrich werden **2,4 t** Material für **648 €** geliefert. Sorte A kostet **240 €/t**, Sorte B **300 €/t**.

<details><summary>Lösung anzeigen</summary>

```
(I)  x + y = 2,4
(II) 240x + 300y = 648

aus (I): x = 2,4 − y
240(2,4−y) + 300y = 648
576 − 240y + 300y = 648
60y = 72  →  y = 1,2 t
x = 1,2 t
```
**Je 1,2 t von beiden Sorten.** Probe: 240·1,2 + 300·1,2 = 288 + 360 = 648 ✓
</details>
