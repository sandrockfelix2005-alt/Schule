# Mathematik I · Lernmodul 1 · Kapitel 1
# Mathematische Zahlendarstellungen

> **Lernkapitel zum Selbststudium.** Du brauchst das gedruckte Heft dazu nicht – hier stehen Erklärung, durchgerechnete Beispiele, Merkregeln, typische Fehler und Übungsaufgaben mit vollständigem Lösungsweg.
> Quelle: DAA Mathematik I, Lernmodul 1, Lernbereich 1 · **Zeitaufwand: ca. 2 Stunden**

**Was du am Ende können musst**
- Die wichtigsten mathematischen **Zeichen** lesen und selbst richtig verwenden.
- Zahlen nach der offiziellen Regel **runden** – und begründen, warum man rundet.
- Große und kleine Zahlen mit **Zehnerpotenzen** schreiben und Einheiten-Vorsätze umrechnen.
- Zahlen zwischen **Dezimal- und Dualsystem** umwandeln und im Dualsystem rechnen.

**Inhalt:** [1.1 Zeichen](#11-zeichen-und-abkürzungen) · [1.2 Runden](#12-runden-von-zahlen) · [1.3 Zehnerpotenzen](#13-zehnerpotenzen) · [1.4 Zweiersystem](#14-zweiersystem-dualsystem) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

Mathematik hat eine eigene **Sprache** mit eigener **Grammatik**. Wer die Zeichen nicht kennt, kann eine Aufgabe nicht einmal lesen – geschweige denn lösen. Deshalb steht am Anfang eine Zeichenübersicht zum Nachschlagen.

Danach geht es um drei praktische Techniken, die du im Technikeralltag ständig brauchst:
- **Runden**, weil kein Messgerät unendlich genau ist,
- **Zehnerpotenzen**, weil technische Zahlen oft riesig oder winzig sind,
- **Dualsystem**, weil jede Steuerung und jeder Rechner damit arbeitet.

---

## 1.1 Zeichen und Abkürzungen

Diese Tabellen sind zum **Nachschlagen** gedacht – nicht zum Auswendiglernen am Stück. Du wirst sie automatisch beherrschen, wenn du damit arbeitest.

### Mengen

| Zeichen | Bedeutung | Beispiel |
|---------|-----------|----------|
| `M = {5, 6, 7, 8}` | Menge in **aufzählender** Form | die Elemente werden einzeln genannt |
| `M = {x \| 5 ≤ x ≤ 8}` | Menge in **beschreibender** Form | „alle x zwischen 5 und 8" |
| `L` | **Lösungsmenge** einer Gleichung/Ungleichung | L = {3} |
| `G` | **Grundmenge** – woraus darf gewählt werden | G = ℕ |
| `D` | **Definitionsmenge** – erlaubte x-Werte | D = {x \| x ≥ 0} |
| `W` | **Wertemenge** – mögliche y-Werte | |
| `{ }` | **leere** Menge (keine Lösung) | L = { } |

### Beziehungen zwischen Zahlen

| Zeichen | Bedeutung | Beispiel |
|---------|-----------|----------|
| `a = b` | a gleich b | 4 = 4 |
| `a ≠ b` | a ungleich b | 4 ≠ 5 |
| `a ≈ b` | **nahezu gleich** (gerundet) | 3,1505 ≈ 3,15 |
| `a > b` | a größer als b | 7 > 3 |
| `a < b` | a kleiner als b | 3 < 7 |
| `a ≤ b` | a kleiner **oder** gleich b | x ≤ 10 |
| `a ≥ b` | a größer **oder** gleich b | x ≥ 0 |

### Verknüpfungen und Mengenzeichen

| Zeichen | Bedeutung |
|---------|-----------|
| `a + b` | Summe (a plus b) |
| `a − b` | Differenz (a minus b) |
| `a · b` | Produkt (a mal b) |
| `a : b` bzw. `a/b` | Quotient (a durch b) |
| `∈` / `∉` | ist / ist **nicht** Element von |
| `⊂` | ist Teilmenge von |
| `∞` | unendlich |

> ### 💡 Merke
> **`=` heißt exakt gleich, `≈` heißt gerundet.** Wer eine gerundete Zahl mit `=` schreibt, macht formal einen Fehler. In der Prüfung kostet das Punkte.

---

## 1.2 Runden von Zahlen

### Warum überhaupt runden?

Zwei Gründe aus der Praxis:

**1. Genauigkeit, die niemand braucht.** Eine Stadt hat 25 835 Einwohner. Für einen Vergleich mit anderen Städten reicht ≈ 26 000 völlig aus.

**2. Genauigkeit, die es gar nicht gibt.** Du sollst eine Strecke von 12 cm in 7 gleiche Teile teilen:

```
12 cm : 7 = 1,714 285 71... cm
```

Diese Zahl hört nie auf. Kein Zollstock und keine Säge der Welt kann 1,714 285 cm abtragen. Also rundest du auf ein Maß, das du tatsächlich umsetzen kannst – z. B. **1,71 cm**.

> ### 💡 Grundsatz
> **Zahlen sollen so genau wie *nötig* angegeben werden – nicht so genau wie *möglich*.**
> Wie genau „nötig" ist, entscheidet die Praxis: Messgenauigkeit, Toleranz, Verwendungszweck.

### Die Rundungsregel

Du rundest auf **n Dezimalstellen**. Entscheidend ist immer die **(n+1)-te Stelle** – also die *erste Stelle, die wegfällt*:

| Ziffer an der (n+1)-ten Stelle | Was passiert | Nennt man |
|:------------------------------:|--------------|-----------|
| **0, 1, 2, 3, 4** | Die n-te Stelle bleibt **unverändert** | **abrunden** |
| **5, 6, 7, 8, 9** | Die n-te Stelle wird um **1 erhöht** | **aufrunden** |

### So gehst du vor

1. **Zähle** ab dem Komma bis zur gewünschten Stelle n.
2. **Schau auf die nächste Ziffer** (n+1).
3. **0–4** → alles davor bleibt stehen · **5–9** → letzte Stelle +1.
4. **Alles ab Stelle n+1 wird gestrichen** (nicht durch Nullen ersetzt!).
5. Ergebnis mit **≈** schreiben.

### 📐 Lehrbeispiel 1 – abrunden

Runde 9,81 auf **eine** Dezimalstelle.

| Schritt | Rechnung |
|---------|----------|
| 1. Stelle n = 1 | 9,**8**1 → die 8 ist die letzte behaltene Stelle |
| 2. Stelle n+1 | die **1** entscheidet |
| 3. Regel | 1 gehört zu 0–4 → **abrunden** |
| 4. Ergebnis | **9,81 ≈ 9,8** |

### 📐 Lehrbeispiel 2 – aufrunden

Runde 22,747 auf **zwei** Dezimalstellen.

| Schritt | Rechnung |
|---------|----------|
| 1. Stelle n = 2 | 22,7**4**7 → die 4 ist die letzte behaltene Stelle |
| 2. Stelle n+1 | die **7** entscheidet |
| 3. Regel | 7 gehört zu 5–9 → **aufrunden**, also 4 → 5 |
| 4. Ergebnis | **22,747 ≈ 22,75** |

### 📐 Lehrbeispiel 3 – Überschlagsrechnung

Bei Überschlägen rundest du **zuerst** und rechnest **dann**. Das geht im Kopf:

```
8,5441 + 25,489 + 0,75
≈ 8,54  + 25,49  + 0,75      | jeweils auf 2 Stellen gerundet
= 34,78
```

### 📐 Lehrbeispiel 4 – Runden vor der Division

```
65,2 : 0,38
≈ 65 : 0,38  ≈  171
```

> ### ⚠️ Typische Fehler
> **1. Schrittweise runden.** 2,4**4**9 auf eine Stelle: Falsch wäre erst 2,45, dann 2,5. **Richtig:** Es zählt nur die *erste* wegfallende Stelle (die 4) → **2,4**.
> **2. Zwischenergebnisse zu früh runden.** Bei mehrstufigen Rechnungen erst am **Ende** runden, sonst summieren sich die Fehler.
> **3. Stellen mit Nullen auffüllen.** 1250 gerundet auf Hunderter ist **1300**, nicht „1300,00".

---

## 1.3 Zehnerpotenzen

### Das Problem

Rechne aus, wie weit das Licht in einem Jahr fliegt (Lichtgeschwindigkeit ≈ 300 000 km/s):

```
1 Jahr   = 365 Tage
1 Tag    = 24 Stunden
1 Stunde = 3600 Sekunden

1 Lj = 365 · 24 · 3600 s · 300 000 km/s
     = 9 460 800 000 000 km
```

Diese Zahl kann man kaum noch lesen, geschweige denn vergleichen. Deshalb hat man eine **verkürzte Schreibweise** entwickelt.

### Der Trick: Stufenzahlen

Unser Zahlensystem ist ein **Stellenwertsystem zur Grundzahl 10** (Dezimalsystem). Die Zahlen 1, 10, 100, 1000 … heißen **Stufenzahlen** – sie unterscheiden sich nur durch die **Anzahl der Nullen**.

Genau das nutzt man aus: Die **10 wird zur Basis**, die **Anzahl der Nullen zum Exponenten**.

| Zahl | als Potenz | | Zahl | als Potenz |
|------|:----------:|---|------|:----------:|
| 1 | 10⁰ | | 100 000 | 10⁵ |
| 10 | 10¹ | | 1 000 000 | 10⁶ |
| 100 | 10² | | 1 Milliarde | 10⁹ |
| 1 000 | 10³ | | 1 Billion | 10¹² |
| 10 000 | 10⁴ | | 1 Billiarde | 10¹⁵ |

**Kleine Zahlen** bekommen einen **negativen** Exponenten:

| Zahl | als Potenz |
|------|:----------:|
| 0,1 | 10⁻¹ |
| 0,01 | 10⁻² |
| 0,001 | 10⁻³ |
| 0,000 001 | 10⁻⁶ |

> ### 💡 Merke
> **Wissenschaftliche Schreibweise:** eine Zahl **zwischen 1 und 10**, multipliziert mit einer Zehnerpotenz.
> `a · 10ᵏ` mit `1 ≤ a < 10`
>
> **Der Exponent sagt, wie weit das Komma wandert:**
> · **positiv** → nach rechts (Zahl wird größer)
> · **negativ** → nach links (Zahl wird kleiner)

### So gehst du vor

**Von der Normalzahl zur Potenz:**
1. Setze das Komma **hinter die erste von Null verschiedene Ziffer**.
2. **Zähle**, um wie viele Stellen du das Komma verschoben hast.
3. Diese Zahl ist der **Exponent** – nach links verschoben = positiv, nach rechts = negativ.

### 📐 Lehrbeispiel 1 – große Zahlen

Schreibe mit Zehnerpotenzen:

| Aufgabe | Komma wandert | Ergebnis |
|---------|---------------|----------|
| 5 000 000 | 6 Stellen nach links | **5 · 10⁶** |
| 1 230 000 000 | 9 Stellen nach links | **1,23 · 10⁹** |
| 9 184 530 | 6 Stellen nach links | **9,18453 · 10⁶** |

### 📐 Lehrbeispiel 2 – kleine Zahlen

| Aufgabe | Komma wandert | Ergebnis |
|---------|---------------|----------|
| 0,000 7 | 4 Stellen nach rechts | **7 · 10⁻⁴** |
| 0,000 000 72 | 7 Stellen nach rechts | **7,2 · 10⁻⁷** |
| 0,000 001 | 6 Stellen nach rechts | **1 · 10⁻⁶** |

### Die Vorsätze (SI-Präfixe)

Statt Zehnerpotenzen schreibt man in der Technik meist **Vorsätze** vor die Einheit. Die musst du sicher beherrschen:

| Vorsatz | Zeichen | Faktor | | Vorsatz | Zeichen | Faktor |
|---------|:-------:|:------:|---|---------|:-------:|:------:|
| Tera | T | 10¹² | | Milli | m | 10⁻³ |
| Giga | G | 10⁹ | | Mikro | µ | 10⁻⁶ |
| Mega | M | 10⁶ | | Nano | n | 10⁻⁹ |
| Kilo | k | 10³ | | Piko | p | 10⁻¹² |

### 📐 Lehrbeispiel 3 – Einheiten umrechnen

| Aufgabe | Rechnung | Ergebnis |
|---------|----------|----------|
| 250 kW in W | k = 10³, also 250 · 10³ = 2,5 · 10⁵ | **2,5 · 10⁵ W** |
| 7 GW in W | G = 10⁹ | **7 · 10⁹ W** |
| 800 km in m | k = 10³, also 800 · 10³ = 8 · 10⁵ | **8 · 10⁵ m** |
| 12 µm in m | µ = 10⁻⁶ | **1,2 · 10⁻⁵ m** |
| 1280 nm in m | n = 10⁻⁹, also 1280 · 10⁻⁹ | **1,28 · 10⁻⁶ m** |

### 📐 Lehrbeispiel 4 – aus dem Text heraus

„Die Erdoberfläche hat eine Größe von 510 Billionen Quadratmetern."

```
1 Billion = 10¹²
510 Billionen = 510 · 10¹² = 5,1 · 10¹⁴ m²
```

„Das Volumen der Erde beträgt 1083 Trillionen Kubikmeter."

```
1 Trillion = 10¹⁸
1083 Trillionen = 1083 · 10¹⁸ = 1,083 · 10²¹ m³
```

> ### ⚠️ Typische Fehler
> **1. Vorfaktor nicht normiert.** `510 · 10¹²` ist noch **nicht** die wissenschaftliche Schreibweise – der Vorfaktor muss zwischen 1 und 10 liegen: `5,1 · 10¹⁴`.
> **2. Vorzeichen des Exponenten verwechselt.** Merke: Eine **kleine** Zahl (unter 1) hat **immer** einen negativen Exponenten.
> **3. Beim Umrechnen doppelt gerechnet.** 250 kW sind 250 **·** 10³ W – nicht 250 : 10³.

---

## 1.4 Zweiersystem (Dualsystem)

### Warum ein anderes Zahlensystem?

Dass wir zur Basis 10 rechnen, hat vor allem **historische** Gründe – wir haben zehn Finger. Grundsätzlich kann **jede Zahl außer 1** als Stufenzahl dienen.

Im **Zweiersystem** (Dualsystem) ist die Stufenzahl **2**. Es gibt nur die Ziffern **0 und 1**. Der Grund für seine Bedeutung ist technisch: Zwei Zustände lassen sich in einer elektrischen Schaltung extrem einfach darstellen – **Schalter offen (0) oder geschlossen (1)**. Deshalb rechnet jeder Computer, jede SPS und jede Steuerung intern dual. Man spricht von **Binärzahlen**.

### Die Stellenwerte

Statt Zehnerpotenzen sind es hier **Zweierpotenzen**:

| 2¹⁰ | 2⁹ | 2⁸ | 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
|:---:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1024 | 512 | 256 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

### Dezimal → Dual: So gehst du vor

1. Suche die **größte Zweierpotenz**, die in deine Zahl passt → dort eine **1**.
2. **Ziehe sie ab**, es bleibt ein Rest.
3. Prüfe **jede kleinere Zweierpotenz** der Reihe nach: Passt sie in den Rest? → **1**, sonst → **0**.
4. Schreibe die Ziffern von der größten bis zur kleinsten Potenz auf.

### 📐 Lehrbeispiel 1 – Schreibe 125 im Zweiersystem

| Zweierpotenz | Wert | Passt in den Rest? | Ziffer | Rest danach |
|:------------:|-----:|--------------------|:------:|------------:|
| 2⁶ | 64 | ja (125 − 64) | **1** | 61 |
| 2⁵ | 32 | ja (61 − 32) | **1** | 29 |
| 2⁴ | 16 | ja (29 − 16) | **1** | 13 |
| 2³ | 8 | ja (13 − 8) | **1** | 5 |
| 2² | 4 | ja (5 − 4) | **1** | 1 |
| 2¹ | 2 | **nein** (1 < 2) | **0** | 1 |
| 2⁰ | 1 | ja (1 − 1) | **1** | 0 |

**Ergebnis: 125 = (1111101)₂**

Probe: 64 + 32 + 16 + 8 + 4 + 0 + 1 = 125 ✓

### Dual → Dezimal: So gehst du vor

Addiere einfach die Stellenwerte aller Stellen, an denen eine **1** steht.

### 📐 Lehrbeispiel 2 – Übersetze (10010)₂

| Stelle | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
|--------|:--:|:--:|:--:|:--:|:--:|
| Wert | 16 | 8 | 4 | 2 | 1 |
| Ziffer | **1** | 0 | 0 | **1** | 0 |

```
(10010)₂ = 1·16 + 0·8 + 0·4 + 1·2 + 0·1 = 18
```

**Ergebnis: (10010)₂ = 18**

### Im Dualsystem rechnen

**Addition** – es gibt nur vier Fälle:

| Rechnung | Ergebnis | Übertrag |
|----------|:--------:|:--------:|
| 0 + 0 | 0 | – |
| 0 + 1 | 1 | – |
| 1 + 0 | 1 | – |
| **1 + 1** | **0** | **1** |

> ### 💡 Merke
> Im Dualsystem gibt es keine „2". Sobald 1 + 1 entsteht, schreibst du **0** und trägst **1** in die nächsthöhere Stelle über – genau wie beim schriftlichen Addieren im Zehnersystem, nur früher.

### 📐 Lehrbeispiel 3 – Addiere (10010)₂ + (10101)₂

```
    1 0 0 1 0     (= 18)
  + 1 0 1 0 1     (= 21)
  ───────────
    1 0 0 1 1 1   (= 39)
```

Stelle für Stelle von rechts:
- 0+1 = 1
- 1+0 = 1
- 0+1 = 1
- 0+0 = 0
- 1+1 = 0, Übertrag 1 → ganz links die 1

**Probe im Dezimalsystem:** 18 + 21 = 39 ✓ und (100111)₂ = 32+0+0+4+2+1 = 39 ✓

> ### ⚠️ Typische Fehler
> **1. Übertrag vergessen.** Bei 1 + 1 **immer** an den Übertrag denken.
> **2. Stellenwerte falsch zugeordnet.** Immer von **rechts** (2⁰) nach links zählen.
> **3. Probe weglassen.** Die Umrechnung ins Dezimalsystem ist eine kostenlose Kontrolle – nutze sie immer.

---

# ✍️ Übungsaufgaben mit Lösungsweg

> Rechne jede Aufgabe zuerst selbst, dann klapp die Lösung auf. Die Aufgaben stammen aus dem Original-Lernmodul, die Lösungswege sind ausführlich erklärt.

### Aufgabe 1 · Runden
Runden Sie auf zwei Dezimalstellen bzw. sinnvoll:
**1.1** 3,1505 · **1.2** 19,67 (auf 1 Stelle) · **1.3** 1250,0 (auf Hunderter) · **1.4** 875,5 (auf Zehner)

<details><summary>Lösung anzeigen</summary>

**1.1** 3,15**0**5 → die erste wegfallende Stelle ist **0** → abrunden → **3,1505 ≈ 3,15**
**1.2** 19,**6**7 → auf 1 Stelle: die wegfallende **7** → aufrunden (6→7) → **19,67 ≈ 19,7**
**1.3** 1250,0 → auf Hunderter: die wegfallende Ziffer ist **5** → aufrunden → **≈ 1300**
**1.4** 875,5 → auf Zehner: die wegfallende Ziffer ist **5** → aufrunden (7→8) → **≈ 880**
</details>

### Aufgabe 2 · Überschlag mit Addition/Subtraktion
Runden Sie auf zwei Dezimalstellen und rechnen Sie dann:
**2.1** 8,5441 + 25,489 + 0,75 · **2.2** 33,567 − 9,8

<details><summary>Lösung anzeigen</summary>

**2.1** Erst runden: 8,54 + 25,49 + 0,75 → **= 34,78**
**2.2** Erst runden: 33,6 − 9,8 → **= 23,8**
</details>

### Aufgabe 3 · Überschlag mit Multiplikation/Division
**3.1** 47,93 · 3,5 · **3.2** 65,2 : 0,38

<details><summary>Lösung anzeigen</summary>

**3.1** 47,93 ≈ 48 → 48 · 3,5 = **168**
**3.2** 65,2 ≈ 65 → 65 : 0,38 ≈ **171**
</details>

### Aufgabe 4 · Zehnerpotenzen (große Zahlen)
**4.1** 5 000 000 · **4.2** 1 230 000 000 · **4.3** 9 184 530

<details><summary>Lösung anzeigen</summary>

**4.1** Komma 6 Stellen nach links → **5 · 10⁶**
**4.2** Komma 9 Stellen nach links → **1,23 · 10⁹**
**4.3** Komma 6 Stellen nach links → **9,18453 · 10⁶**
</details>

### Aufgabe 5 · Einheiten mit Zehnerpotenzen
**5.1** 250 kW (in W) · **5.2** 7 GW (in W) · **5.3** 800 km (in m)

<details><summary>Lösung anzeigen</summary>

**5.1** k = 10³ → 250 · 10³ W = **2,5 · 10⁵ W**
**5.2** G = 10⁹ → **7 · 10⁹ W**
**5.3** k = 10³ → 800 · 10³ m = **8 · 10⁵ m**
</details>

### Aufgabe 6 · Große Zahlen aus dem Text
**6.1** Die Erdoberfläche hat eine Größe von 510 Billionen Quadratmetern.
**6.2** Das Volumen der Erde beträgt 1083 Trillionen Kubikmeter.

<details><summary>Lösung anzeigen</summary>

**6.1** 1 Billion = 10¹² → 510 · 10¹² m² = **5,1 · 10¹⁴ m²**
**6.2** 1 Trillion = 10¹⁸ → 1083 · 10¹⁸ m³ = **1,083 · 10²¹ m³**
</details>

### Aufgabe 7 · Zehnerpotenzen (kleine Zahlen)
**7.1** 0,000 7 · **7.2** 0,000 000 72 · **7.3** 0,000 001

<details><summary>Lösung anzeigen</summary>

**7.1** Komma 4 Stellen nach rechts → **7 · 10⁻⁴**
**7.2** Komma 7 Stellen nach rechts → **7,2 · 10⁻⁷**
**7.3** Komma 6 Stellen nach rechts → **1 · 10⁻⁶**
</details>

### Aufgabe 8 · Kleine Einheiten
**8.1** 12 µm (in m) · **8.2** 1280 nm (in m) · **8.3** 500 pF (in F)

<details><summary>Lösung anzeigen</summary>

**8.1** µ = 10⁻⁶ → 12 · 10⁻⁶ m = **1,2 · 10⁻⁵ m**
**8.2** n = 10⁻⁹ → 1280 · 10⁻⁹ m = **1,28 · 10⁻⁶ m**
**8.3** p = 10⁻¹² → 500 · 10⁻¹² F = **5 · 10⁻¹⁰ F**
</details>

### Aufgabe 9 · Aus dem Sachtext
**9.1** Der Durchmesser eines Glühlampenfadens beträgt 8 µm.
**9.2** Harte Röntgenstrahlen haben eine Wellenlänge von 250 nm.

<details><summary>Lösung anzeigen</summary>

**9.1** 8 µm = 8 · 10⁻⁶ m → **8 · 10⁻⁶ m**
**9.2** 250 nm = 250 · 10⁻⁹ m = **2,5 · 10⁻⁷ m**
</details>

### Aufgabe 10 · Dezimal → Dual
Schreiben Sie im Zweiersystem: **10.1** 88 · **10.2** 429 · **10.3** 901

<details><summary>Lösung anzeigen</summary>

**10.1** 88 → 64 (Rest 24) → 16 (Rest 8) → 8 (Rest 0)
Genutzt: 64, 16, 8 → **88 = (1011000)₂**
*Probe: 64+16+8 = 88 ✓*

**10.2** 429 → 256 (Rest 173) → 128 (Rest 45) → 32 (Rest 13) → 8 (Rest 5) → 4 (Rest 1) → 1 (Rest 0)
Genutzt: 256, 128, 32, 8, 4, 1 → **429 = (110101101)₂**
*Probe: 256+128+32+8+4+1 = 429 ✓*

**10.3** 901 → 512 (Rest 389) → 256 (Rest 133) → 128 (Rest 5) → 4 (Rest 1) → 1 (Rest 0)
Genutzt: 512, 256, 128, 4, 1 → **901 = (1110000101)₂**
*Probe: 512+256+128+4+1 = 901 ✓*
</details>

### Aufgabe 11 · Dualzahlen addieren
Addieren Sie und überprüfen Sie im Dezimalsystem:
**11.1** 10010 + 10101 · **11.2** 1111111 + 1100

<details><summary>Lösung anzeigen</summary>

**11.1**
```
    1 0 0 1 0     = 18
  + 1 0 1 0 1     = 21
  ───────────
    1 0 0 1 1 1   = 39
```
*Probe: 18 + 21 = 39 ✓*

**11.2**
```
    1 1 1 1 1 1 1   = 127
  +       1 1 0 0   =  12
  ─────────────────
    1 0 0 0 1 0 1 1 = 139
```
*Probe: 127 + 12 = 139 ✓ und 128+8+2+1 = 139 ✓*
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich kenne den Unterschied zwischen `=` und `≈` und schreibe gerundete Werte richtig.
- [ ] Ich kann die Rundungsregel in eigenen Worten erklären (die (n+1)-te Stelle entscheidet).
- [ ] Ich runde in einem Schritt – nicht schrittweise.
- [ ] Ich kann jede Zahl in wissenschaftlicher Schreibweise angeben (Vorfaktor zwischen 1 und 10).
- [ ] Ich kenne die Vorsätze k, M, G, T und m, µ, n, p auswendig.
- [ ] Ich kann Einheiten wie kW → W oder nm → m sicher umrechnen.
- [ ] Ich kann eine Dezimalzahl ins Dualsystem umwandeln und die Probe machen.
- [ ] Ich kann zwei Dualzahlen addieren und beachte den Übertrag.

**Nächstes Kapitel:** LM1 Kapitel 2 – Zahlenmengen (ℕ, ℤ, ℚ, ℝ, ℂ)
