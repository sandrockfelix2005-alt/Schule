# Mathematik I · Lernmodul 1 · Kapitel 1
# Mathematische Zahlendarstellungen

> **Lernkapitel zum Selbststudium.** Du brauchst das gedruckte Heft nicht – hier stehen Erklärung, durchgerechnete Beispiele, Merkregeln, typische Fehler und Übungsaufgaben mit vollständigem Lösungsweg.
> Quelle: DAA Mathematik I, Lernmodul 1, Lernbereich 1 · **Zeitaufwand: ca. 2–3 Stunden**

**Was du am Ende können musst**
- Die wichtigsten mathematischen **Zeichen** lesen und selbst richtig verwenden.
- Zahlen nach der offiziellen Regel **runden** – und entscheiden, *wie genau* gerundet werden muss.
- Große und kleine Zahlen mit **Zehnerpotenzen** schreiben, damit rechnen und Einheiten umrechnen.
- Zahlen zwischen **Dezimal- und Dualsystem** umwandeln und im Dualsystem rechnen.

**Inhalt:** [1.1 Zeichen](#11-zeichen-und-abkürzungen) · [1.2 Runden](#12-runden-von-zahlen) · [1.3 Zehnerpotenzen](#13-zehnerpotenzen) · [1.4 Zweiersystem](#14-zweiersystem-dualsystem) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

Mathematik hat eine eigene **Sprache** mit eigener **Grammatik**. Wer die Zeichen nicht kennt, kann eine Aufgabe nicht einmal lesen – geschweige denn lösen. Deshalb steht am Anfang eine Zeichenübersicht zum Nachschlagen.

Danach kommen drei Techniken, die dir als Bautechniker **jeden Tag** begegnen:

| Technik | Wo du sie im Bau brauchst |
|---------|---------------------------|
| **Runden** | Aufmaß, Massenermittlung, Toleranzen, Materialbestellung |
| **Zehnerpotenzen** | Festigkeiten (N/mm² ↔ MN/m²), E-Modul, Lasten in kN und MN |
| **Dualsystem** | Gebäudeautomation, SPS-Steuerungen, digitale Messtechnik |

---

## 1.1 Zeichen und Abkürzungen

Diese Tabellen sind zum **Nachschlagen** gedacht – nicht zum Auswendiglernen am Stück. Du beherrschst sie automatisch, wenn du damit arbeitest.

### Mengen

| Zeichen | Bedeutung | Beispiel |
|---------|-----------|----------|
| `M = {5, 6, 7, 8}` | Menge in **aufzählender** Form | Elemente einzeln genannt |
| `M = {x \| 5 ≤ x ≤ 8}` | Menge in **beschreibender** Form | „alle x zwischen 5 und 8" |
| `L` | **Lösungsmenge** einer Gleichung | L = {3} |
| `G` | **Grundmenge** – woraus darf gewählt werden | G = ℕ |
| `D` | **Definitionsmenge** – erlaubte x-Werte | D = {x \| x ≥ 0} |
| `W` | **Wertemenge** – mögliche y-Werte | |
| `{ }` | **leere** Menge (keine Lösung) | L = { } |

### Beziehungen zwischen Zahlen

| Zeichen | Bedeutung | Beispiel aus dem Bau |
|---------|-----------|----------------------|
| `a = b` | a gleich b | Sollmaß = 2,50 m |
| `a ≠ b` | a ungleich b | Istmaß ≠ Sollmaß |
| `a ≈ b` | **nahezu gleich** (gerundet) | 3,1505 ≈ 3,15 |
| `a > b` | a größer als b | Betondeckung > 25 mm |
| `a < b` | a kleiner als b | Rissbreite < 0,3 mm |
| `a ≤ b` | a kleiner **oder** gleich b | Gefälle ≤ 6 % |
| `a ≥ b` | a größer **oder** gleich b | Auflagertiefe ≥ 100 mm |

> **Warum das im Bau zählt:** Normen und Zulassungen sind fast immer als **Ungleichung** formuliert. „Die Betondeckung muss ≥ 25 mm betragen" heißt: 25 mm sind noch zulässig, 24,9 mm nicht mehr. Das Zeichen entscheidet über Abnahme oder Mangel.

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
> **`=` heißt exakt gleich, `≈` heißt gerundet.** Wer einen gerundeten Wert mit `=` schreibt, macht formal einen Fehler – in der Prüfung kostet das Punkte.

---

## 1.2 Runden von Zahlen

### Warum überhaupt runden?

**Grund 1: Genauigkeit, die niemand braucht.**
Eine Stadt hat 25 835 Einwohner. Für einen Vergleich reicht ≈ 26 000.

**Grund 2: Genauigkeit, die es gar nicht gibt.**
Du sollst eine Strecke von 12 cm in 7 gleiche Teile teilen:

```
12 cm : 7 = 1,714 285 71... cm
```

Diese Zahl hört nie auf. Kein Zollstock und keine Säge kann 1,714 285 cm abtragen. Also rundest du auf ein Maß, das umsetzbar ist – z. B. **1,71 cm**.

> ### 💡 Grundsatz
> **Zahlen sollen so genau wie *nötig* angegeben werden – nicht so genau wie *möglich*.**
> Wie genau „nötig" ist, entscheidet die Praxis: Messgenauigkeit, Toleranz, Verwendungszweck.

### Wie genau ist „nötig"? – Faustregeln aus dem Bau

| Größe | Übliche Genauigkeit | Beispiel |
|-------|--------------------|----------|
| Längen im Hochbau | **1 cm** (0,01 m) | Raumlänge 4,37 m |
| Längen im Ausbau/Metallbau | **1 mm** | Fensteröffnung 1235 mm |
| Flächen (Aufmaß) | **0,01 m²** | Wandfläche 12,32 m² |
| Betonmengen | **0,1 m³** (oft aufgerundet) | 6,0 m³ |
| Massen Stahl | **1 kg** | Bewehrung 847 kg |
| Höhenkoten (Vermessung) | **1 mm** (0,001 m) | +2,347 m ü. NN |
| Gefälle/Neigung | **0,1 %** oder 0,1° | 2,5 % |

> **Wichtig:** Beim **Bestellen** von Material rundet man fast immer **auf** (Verschnitt!), beim **Abrechnen** nach den Regeln der VOB bzw. des Aufmaßes.

### Die Rundungsregel

Du rundest auf **n Dezimalstellen**. Entscheidend ist immer die **(n+1)-te Stelle** – die *erste Stelle, die wegfällt*:

| Ziffer an der (n+1)-ten Stelle | Was passiert | Nennt man |
|:------------------------------:|--------------|-----------|
| **0, 1, 2, 3, 4** | Die n-te Stelle bleibt **unverändert** | **abrunden** |
| **5, 6, 7, 8, 9** | Die n-te Stelle wird um **1 erhöht** | **aufrunden** |

### So gehst du vor

1. **Zähle** ab dem Komma bis zur gewünschten Stelle n.
2. **Schau auf die nächste Ziffer** (n+1).
3. **0–4** → alles davor bleibt stehen · **5–9** → letzte Stelle +1.
4. **Alles ab Stelle n+1 wird gestrichen** (nicht durch Nullen ersetzt).
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

### 🏗️ Bau-Beispiel 1 – Aufmaß einer Wandfläche

Eine Wand wird aufgemessen: Länge **4,376 m**, Höhe **2,648 m**. Wie groß ist die Putzfläche (Angabe auf 0,01 m²)?

**Lösung – so gehst du vor:**

| Schritt | Rechnung | Erklärung |
|---------|----------|-----------|
| 1. Maße wie gemessen ansetzen | 4,376 · 2,648 | **noch nicht runden!** |
| 2. Ausrechnen | = 11,587 648 m² | volles Ergebnis |
| 3. Erst jetzt runden | 11,58**7**648 → 3. Stelle ist 7 | → aufrunden |
| 4. Ergebnis | **A ≈ 11,59 m²** | |

> **Merke:** Hättest du zuerst gerundet (4,38 · 2,65 = 11,607 → 11,61 m²), wärst du um 0,02 m² danebengelegen. Bei 50 Wänden summiert sich das zu einem echten Fehler in der Abrechnung.

### 🏗️ Bau-Beispiel 2 – Betonmenge bestellen

Für ein Fundament brauchst du **6,0 m × 4,0 m × 0,25 m** Beton. Wie viel bestellst du?

| Schritt | Rechnung |
|---------|----------|
| 1. Volumen | V = 6,0 · 4,0 · 0,25 = **6,00 m³** |
| 2. Verlustzuschlag (ca. 5 %) | 6,00 · 1,05 = 6,30 m³ |
| 3. Beton wird in 0,5-m³-Schritten geliefert | → **6,5 m³ bestellen** |

> **Hier wird bewusst *aufgerundet*.** Fehlender Beton beim Betonieren ist ein Baustopp – zu viel ist nur ein kleiner Mehrpreis. Die mathematische Rundungsregel wird von der **Baupraxis überstimmt**.

### 🏗️ Bau-Beispiel 3 – Stufenhöhe einer Treppe

Eine Geschosshöhe von **2,875 m** soll mit **16 Steigungen** überwunden werden.

```
2,875 m : 16 = 0,179 687 5 m = 179,6875 mm
```

Gerundet auf 1 mm: **179,7 mm** – aber Achtung:

| Prüfung | Rechnung |
|---------|----------|
| 16 × 179,7 mm | = 2875,2 mm = 2,8752 m |
| Soll | 2,875 m |
| Abweichung | **+0,2 mm** – unkritisch, liegt in der Toleranz |

> **Merke für Treppen:** Alle Stufen müssen **gleich hoch** sein (Stolpergefahr!). Man rundet die Einzelstufe und prüft dann, ob die Summe noch passt. Bei größerer Abweichung verteilt man den Rest auf die Antrittsstufe.

> ### ⚠️ Typische Fehler
> **1. Schrittweise runden.** 2,4**4**9 auf eine Stelle: Falsch wäre erst 2,45, dann 2,5. **Richtig:** Es zählt nur die *erste* wegfallende Stelle (die 4) → **2,4**.
> **2. Zwischenergebnisse zu früh runden.** Bei mehrstufigen Rechnungen erst am **Ende** runden – siehe Bau-Beispiel 1.
> **3. Beim Materialbedarf abrunden.** Beim Bestellen wird **aufgerundet**, sonst fehlt Material.
> **4. Genauigkeit vortäuschen.** Ein mit dem Zollstock gemessener Wert ist niemals „4,3762 m" genau. Gib nur so viele Stellen an, wie dein Messgerät hergibt.

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

Diese Zahl kann man kaum lesen, geschweige denn vergleichen. Deshalb gibt es eine **verkürzte Schreibweise**.

### Der Trick: Stufenzahlen

Unser Zahlensystem ist ein **Stellenwertsystem zur Grundzahl 10** (Dezimalsystem). Die Zahlen 1, 10, 100, 1000 … heißen **Stufenzahlen** – sie unterscheiden sich nur durch die **Anzahl der Nullen**.

Genau das nutzt man: Die **10 wird zur Basis**, die **Anzahl der Nullen zum Exponenten**.

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

Statt Zehnerpotenzen schreibt man in der Technik meist **Vorsätze** vor die Einheit:

| Vorsatz | Zeichen | Faktor | Im Bau typisch für |
|---------|:-------:|:------:|--------------------|
| Tera | T | 10¹² | – |
| Giga | G | 10⁹ | GPa (E-Modul) |
| Mega | M | 10⁶ | **MN, MPa, MN/m²** |
| Kilo | k | 10³ | **kN, kg, kW, km** |
| Milli | m | 10⁻³ | **mm** (fast alle Bauteilmaße) |
| Mikro | µ | 10⁻⁶ | µm (Beschichtungsdicken) |
| Nano | n | 10⁻⁹ | nm (Nanobeschichtung) |
| Piko | p | 10⁻¹² | pF (Elektrotechnik) |

### 📐 Lehrbeispiel 3 – Einheiten umrechnen

| Aufgabe | Rechnung | Ergebnis |
|---------|----------|----------|
| 250 kW in W | k = 10³ → 250 · 10³ | **2,5 · 10⁵ W** |
| 7 GW in W | G = 10⁹ | **7 · 10⁹ W** |
| 800 km in m | k = 10³ → 800 · 10³ | **8 · 10⁵ m** |
| 12 µm in m | µ = 10⁻⁶ | **1,2 · 10⁻⁵ m** |
| 1280 nm in m | n = 10⁻⁹ → 1280 · 10⁻⁹ | **1,28 · 10⁻⁶ m** |

### 📐 Lehrbeispiel 4 – aus dem Sachtext

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

### 🏗️ Bau-Beispiel 1 – Betonfestigkeit umrechnen

Beton **C25/30** hat eine charakteristische Druckfestigkeit von **25 N/mm²**. Wie viel ist das in **MN/m²** und in **N/m²**?

**Schritt 1: Was bedeuten die Einheiten?**
```
1 mm = 10⁻³ m   →   1 mm² = (10⁻³ m)² = 10⁻⁶ m²
```

**Schritt 2: Umrechnen**
```
25 N/mm² = 25 N / 10⁻⁶ m² = 25 · 10⁶ N/m² = 2,5 · 10⁷ N/m²
```

**Schritt 3: In MN/m²**
```
1 MN = 10⁶ N
25 · 10⁶ N/m² = 25 MN/m²
```

> ### 💡 Merke – die wichtigste Umrechnung im Bau
> **1 N/mm² = 1 MN/m² = 1 MPa**
> Zahlenwert bleibt gleich, nur die Einheit ändert sich! C25/30 → 25 N/mm² = 25 MN/m² = 25 MPa.
> Das spart dir in der Statik viel Rechnerei – und ist eine beliebte Prüfungsfalle.

### 🏗️ Bau-Beispiel 2 – E-Modul von Baustahl

Baustahl hat einen Elastizitätsmodul von **210 000 N/mm²**.

| Darstellung | Wert |
|-------------|------|
| Normalzahl | 210 000 N/mm² |
| Wissenschaftlich | **2,1 · 10⁵ N/mm²** |
| In MN/m² | 2,1 · 10⁵ MN/m² |
| In GPa | 210 GPa (weil 1000 MPa = 1 GPa) |

**Zum Vergleich:** Beton C25/30 hat E ≈ 31 000 N/mm² = 3,1 · 10⁴ N/mm².

```
Verhältnis Stahl : Beton = 2,1·10⁵ : 3,1·10⁴ ≈ 6,8
```

> **Bedeutung:** Stahl ist rund **7-mal steifer** als Beton. Genau deshalb übernimmt die Bewehrung die Zugkräfte im Stahlbeton. Mit Zehnerpotenzen siehst du dieses Verhältnis auf einen Blick – bei den Normalzahlen musst du erst zählen.

### 🏗️ Bau-Beispiel 3 – Last umrechnen

Auf eine Stütze wirkt eine Last von **1,25 MN**. Wie groß ist sie in kN und N?

```
1,25 MN = 1,25 · 10⁶ N          = 1 250 000 N
        = 1,25 · 10⁶ : 10³ kN   = 1,25 · 10³ kN = 1250 kN
```

**Kontrollfrage:** Ist das viel? 1250 kN entsprechen einer Masse von
```
m = F / g = 1 250 000 N : 9,81 m/s² ≈ 127 420 kg ≈ 127 t
```
Also etwa das Gewicht von **127 Kleinwagen** auf einer Stütze.

### 🏗️ Bau-Beispiel 4 – Wärmeleitfähigkeit

Dämmstoff hat λ = **0,035 W/(m·K)**, Beton λ = **2,1 W/(m·K)**.

```
0,035 = 3,5 · 10⁻²
2,1   = 2,1 · 10⁰

Verhältnis: 2,1 : 0,035 = 60
```

> **Bedeutung:** Beton leitet Wärme **60-mal besser** als der Dämmstoff – deshalb ist eine ungedämmte Betonwand eine Wärmebrücke. Auch hier macht die Zehnerpotenz das Verhältnis sofort sichtbar.

> ### ⚠️ Typische Fehler
> **1. Vorfaktor nicht normiert.** `510 · 10¹²` ist noch **nicht** wissenschaftliche Schreibweise – der Vorfaktor muss zwischen 1 und 10 liegen: `5,1 · 10¹⁴`.
> **2. Vorzeichen des Exponenten verwechselt.** Eine **kleine** Zahl (unter 1) hat **immer** einen negativen Exponenten.
> **3. Quadrat der Einheit vergessen.** 1 mm = 10⁻³ m, aber 1 mm² = 10⁻**⁶** m². Der Exponent wird mitquadriert! Das ist **der** Klassiker bei Flächenumrechnungen.
> **4. N/mm² und N/m² verwechselt.** Faktor 10⁶ – wer das übersieht, rechnet um den Faktor eine Million falsch.

---

<div class="viz" data-viz="zehnerpotenz"></div>

## 1.4 Zweiersystem (Dualsystem)

### Warum ein anderes Zahlensystem?

Dass wir zur Basis 10 rechnen, hat vor allem **historische** Gründe – wir haben zehn Finger. Grundsätzlich kann **jede Zahl außer 1** als Stufenzahl dienen.

Im **Zweiersystem** (Dualsystem) ist die Stufenzahl **2**. Es gibt nur die Ziffern **0 und 1**. Der Grund für seine Bedeutung ist technisch: Zwei Zustände lassen sich elektrisch extrem einfach darstellen – **Schalter offen (0) oder geschlossen (1)**. Deshalb rechnet jeder Computer, jede SPS und jede Steuerung intern dual. Man spricht von **Binärzahlen**.

> ### 🏗️ Wo dir das im Bau begegnet
> - **Gebäudeautomation (KNX, BACnet):** Jeder Sensor meldet Zustände binär – Fenster offen/zu, Präsenz ja/nein.
> - **SPS-Steuerungen** bei Aufzügen, Lüftung, Heizung: Ein-/Ausgänge sind Bitmuster.
> - **Digitale Messtechnik:** Nivelliergeräte und Tachymeter digitalisieren Messwerte binär.
> - **Dateigrößen:** 1 KiB = 2¹⁰ Byte = 1024 Byte – deshalb ist ein „1-GB-Stick" nie glatt 1000 MB.

### Die Stellenwerte

Statt Zehnerpotenzen sind es hier **Zweierpotenzen**:

| 2¹⁰ | 2⁹ | 2⁸ | 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
|:---:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1024 | 512 | 256 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

> **Tipp zum Merken:** Die Reihe verdoppelt sich immer: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. Wenn du sie einmal auswendig kannst, geht jede Umrechnung im Kopf.

### Dezimal → Dual: So gehst du vor

1. Suche die **größte Zweierpotenz**, die in deine Zahl passt → dort eine **1**.
2. **Ziehe sie ab**, es bleibt ein Rest.
3. Prüfe **jede kleinere Zweierpotenz** der Reihe nach: Passt sie in den Rest? → **1**, sonst → **0**.
4. Schreibe die Ziffern von der größten bis zur kleinsten Potenz auf.
5. **Probe:** Stellenwerte der Einsen addieren – muss die Ausgangszahl ergeben.

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

Addiere die Stellenwerte aller Stellen, an denen eine **1** steht.

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

**Probe:** 18 + 21 = 39 ✓ und (100111)₂ = 32+4+2+1 = 39 ✓

### 🏗️ Bau-Beispiel – Digitaleingänge einer Steuerung

Eine kleine SPS steuert die Lüftung eines Technikraums und hat 8 Digitaleingänge:

| Eingang | E7 | E6 | E5 | E4 | E3 | E2 | E1 | E0 |
|---------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Stellenwert | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| Belegung | – | – | – | Frost | Feuchte | Fenster | Präsenz | Hauptschalter |
| Zustand | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 1 |

Die Steuerung meldet den Zustand **(00001011)₂**. Welche Meldung ist das im Klartext, und welchen Dezimalwert hat sie?

**Lösung:**
```
(00001011)₂ = 8 + 0 + 2 + 1 = 11
```
Aktive Eingänge: **E3 (Feuchte), E1 (Präsenz), E0 (Hauptschalter)**

→ Der Raum ist belegt, die Anlage ist eingeschaltet und der Feuchtefühler hat ausgelöst. **Klartext: Lüftung muss anlaufen.**

> **Warum das praktisch ist:** Im Fehlerspeicher einer Anlage steht oft nur eine Zahl wie „11". Wer sie ins Dualsystem umwandelt, sieht sofort, **welche** Eingänge aktiv waren.

> ### ⚠️ Typische Fehler
> **1. Übertrag vergessen.** Bei 1 + 1 **immer** an den Übertrag denken.
> **2. Stellenwerte falsch zugeordnet.** Immer von **rechts** (2⁰) nach links zählen.
> **3. Führende Nullen weglassen, wo sie zählen.** Bei 8-Bit-Angaben (SPS, Byte) gehören die Nullen dazu: (00001011)₂, nicht (1011)₂.
> **4. Probe weglassen.** Die Umrechnung ins Dezimalsystem ist eine kostenlose Kontrolle – nutze sie immer.

---

# ✍️ Übungsaufgaben mit Lösungsweg

> Rechne jede Aufgabe zuerst selbst, dann klapp die Lösung auf. Aufgaben 1–11 stammen aus dem Original-Lernmodul, Aufgaben 12–16 sind zusätzliche Bau-Aufgaben.

### Aufgabe 1 · Runden
**1.1** 3,1505 (2 Stellen) · **1.2** 19,67 (1 Stelle) · **1.3** 1250,0 (Hunderter) · **1.4** 875,5 (Zehner)

<details><summary>Lösung anzeigen</summary>

**1.1** 3,15**0**5 → erste wegfallende Stelle **0** → abrunden → **≈ 3,15**
**1.2** 19,**6**7 → wegfallende **7** → aufrunden (6→7) → **≈ 19,7**
**1.3** 1250,0 → wegfallende Ziffer **5** → aufrunden → **≈ 1300**
**1.4** 875,5 → wegfallende Ziffer **5** → aufrunden (7→8) → **≈ 880**
</details>

### Aufgabe 2 · Überschlag Addition/Subtraktion
**2.1** 8,5441 + 25,489 + 0,75 · **2.2** 33,567 − 9,8

<details><summary>Lösung anzeigen</summary>

**2.1** Erst runden: 8,54 + 25,49 + 0,75 = **34,78**
**2.2** Erst runden: 33,6 − 9,8 = **23,8**
</details>

### Aufgabe 3 · Überschlag Multiplikation/Division
**3.1** 47,93 · 3,5 · **3.2** 65,2 : 0,38

<details><summary>Lösung anzeigen</summary>

**3.1** 47,93 ≈ 48 → 48 · 3,5 = **168**
**3.2** 65,2 ≈ 65 → 65 : 0,38 ≈ **171**
</details>

### Aufgabe 4 · Zehnerpotenzen (große Zahlen)
**4.1** 5 000 000 · **4.2** 1 230 000 000 · **4.3** 9 184 530

<details><summary>Lösung anzeigen</summary>

**4.1** **5 · 10⁶** · **4.2** **1,23 · 10⁹** · **4.3** **9,18453 · 10⁶**
</details>

### Aufgabe 5 · Einheiten mit Zehnerpotenzen
**5.1** 250 kW (W) · **5.2** 7 GW (W) · **5.3** 800 km (m)

<details><summary>Lösung anzeigen</summary>

**5.1** k = 10³ → **2,5 · 10⁵ W**
**5.2** G = 10⁹ → **7 · 10⁹ W**
**5.3** k = 10³ → 800 · 10³ = **8 · 10⁵ m**
</details>

### Aufgabe 6 · Große Zahlen aus dem Text
**6.1** Erdoberfläche 510 Billionen m² · **6.2** Erdvolumen 1083 Trillionen m³

<details><summary>Lösung anzeigen</summary>

**6.1** 510 · 10¹² = **5,1 · 10¹⁴ m²**
**6.2** 1083 · 10¹⁸ = **1,083 · 10²¹ m³**
</details>

### Aufgabe 7 · Zehnerpotenzen (kleine Zahlen)
**7.1** 0,000 7 · **7.2** 0,000 000 72 · **7.3** 0,000 001

<details><summary>Lösung anzeigen</summary>

**7.1** **7 · 10⁻⁴** · **7.2** **7,2 · 10⁻⁷** · **7.3** **1 · 10⁻⁶**
</details>

### Aufgabe 8 · Kleine Einheiten
**8.1** 12 µm (m) · **8.2** 1280 nm (m) · **8.3** 500 pF (F)

<details><summary>Lösung anzeigen</summary>

**8.1** µ = 10⁻⁶ → **1,2 · 10⁻⁵ m**
**8.2** n = 10⁻⁹ → 1280 · 10⁻⁹ = **1,28 · 10⁻⁶ m**
**8.3** p = 10⁻¹² → 500 · 10⁻¹² = **5 · 10⁻¹⁰ F**
</details>

### Aufgabe 9 · Aus dem Sachtext
**9.1** Glühlampenfaden 8 µm · **9.2** Röntgenstrahlen 250 nm

<details><summary>Lösung anzeigen</summary>

**9.1** **8 · 10⁻⁶ m** · **9.2** 250 · 10⁻⁹ = **2,5 · 10⁻⁷ m**
</details>

### Aufgabe 10 · Dezimal → Dual
**10.1** 88 · **10.2** 429 · **10.3** 901

<details><summary>Lösung anzeigen</summary>

**10.1** 88 → 64 (Rest 24) → 16 (Rest 8) → 8 (Rest 0)
Genutzt: 64, 16, 8 → **(1011000)₂** · *Probe: 64+16+8 = 88 ✓*

**10.2** 429 → 256 (173) → 128 (45) → 32 (13) → 8 (5) → 4 (1) → 1 (0)
→ **(110101101)₂** · *Probe: 256+128+32+8+4+1 = 429 ✓*

**10.3** 901 → 512 (389) → 256 (133) → 128 (5) → 4 (1) → 1 (0)
→ **(1110000101)₂** · *Probe: 512+256+128+4+1 = 901 ✓*
</details>

### Aufgabe 11 · Dualzahlen addieren
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
*Probe: 127 + 12 = 139 ✓ · 128+8+2+1 = 139 ✓*
</details>

### 🏗️ Aufgabe 12 · Aufmaß Bodenfläche
Ein Raum misst **5,237 m × 3,884 m**. Berechne die Bodenfläche (Angabe auf 0,01 m²). Wie viele Fliesenpakete à 1,44 m² brauchst du bei 8 % Verschnitt?

<details><summary>Lösung anzeigen</summary>

**Schritt 1 – Fläche (ungerundet rechnen!):**
```
A = 5,237 · 3,884 = 20,340 508 m²
```
Runden auf 0,01: die 3. Nachkommastelle ist **0** → abrunden → **A ≈ 20,34 m²**

**Schritt 2 – Verschnitt:**
```
20,34 · 1,08 = 21,967 2 m²  ≈ 21,97 m²
```

**Schritt 3 – Pakete:**
```
21,97 : 1,44 = 15,26 Pakete
```
Pakete gibt es nur ganz → **aufrunden auf 16 Pakete**

**Antwort:** Bodenfläche ≈ 20,34 m², benötigt werden **16 Pakete**.
</details>

### 🏗️ Aufgabe 13 · Festigkeiten umrechnen
Rechne um und gib in wissenschaftlicher Schreibweise an:
**13.1** Beton C30/37 → 30 N/mm² in N/m² · **13.2** Bewehrungsstahl B500 → 500 N/mm² in MN/m² · **13.3** E-Modul Beton 31 000 N/mm² in N/mm² (wissenschaftlich)

<details><summary>Lösung anzeigen</summary>

**13.1** 1 mm² = 10⁻⁶ m² →
```
30 N/mm² = 30 · 10⁶ N/m² = 3 · 10⁷ N/m²
```

**13.2** Faustregel: 1 N/mm² = 1 MN/m² →
```
500 N/mm² = 500 MN/m² = 5 · 10² MN/m²
```

**13.3** 31 000 = **3,1 · 10⁴ N/mm²**
</details>

### 🏗️ Aufgabe 14 · Last und Masse
Eine Stütze trägt **2,4 MN**.
**14.1** Wie viel kN sind das? **14.2** Welcher Masse entspricht das (g = 9,81 m/s²)?

<details><summary>Lösung anzeigen</summary>

**14.1**
```
2,4 MN = 2,4 · 10⁶ N = 2400 · 10³ N = 2400 kN
```

**14.2**
```
m = F / g = 2 400 000 N : 9,81 m/s² ≈ 244 648 kg ≈ 244,6 t
```
</details>

### 🏗️ Aufgabe 15 · Treppe
Eine Geschosshöhe von **3,12 m** soll mit **18 Steigungen** überwunden werden.
**15.1** Wie hoch ist eine Stufe (auf 1 mm)? **15.2** Prüfe durch Rückrechnung.

<details><summary>Lösung anzeigen</summary>

**15.1**
```
3,12 m : 18 = 0,173 333... m = 173,333... mm
```
Runden auf 1 mm: die wegfallende Stelle ist **3** → abrunden → **173 mm**

**15.2 Probe:**
```
18 · 173 mm = 3114 mm = 3,114 m
Soll: 3,120 m  →  Differenz 6 mm
```
Die 6 mm müssen ausgeglichen werden – üblicherweise über die Antrittsstufe oder durch Verteilung im Estrichaufbau. Alternativ 17 Steigungen à 183,5 mm prüfen.
</details>

### 🏗️ Aufgabe 16 · SPS-Meldung
Eine Steuerung meldet den Bitzustand **(00110100)₂**.
**16.1** Welcher Dezimalwert ist das? **16.2** Welche Eingänge (E0…E7) sind aktiv?

<details><summary>Lösung anzeigen</summary>

**16.1** Stellenwerte von rechts: 1, 2, 4, 8, 16, 32, 64, 128
```
(00110100)₂ = 32 + 16 + 4 = 52
```

**16.2** Die Einsen stehen an den Stellen mit den Werten 32, 16 und 4
→ aktiv sind **E5, E4 und E2**
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich kenne den Unterschied zwischen `=` und `≈` und schreibe gerundete Werte richtig.
- [ ] Ich kann die Rundungsregel erklären (die (n+1)-te Stelle entscheidet) und runde **in einem Schritt**.
- [ ] Ich weiß, dass man Zwischenergebnisse **nicht** rundet – erst das Endergebnis.
- [ ] Ich weiß, dass beim **Materialbedarf aufgerundet** wird, egal was die Regel sagt.
- [ ] Ich kann jede Zahl in wissenschaftlicher Schreibweise angeben (Vorfaktor zwischen 1 und 10).
- [ ] Ich kenne die Vorsätze T, G, M, k und m, µ, n, p auswendig.
- [ ] Ich weiß, dass **1 mm² = 10⁻⁶ m²** ist (Exponent wird mitquadriert).
- [ ] Ich kenne die Merkregel **1 N/mm² = 1 MN/m² = 1 MPa**.
- [ ] Ich kann eine Dezimalzahl ins Dualsystem umwandeln und die Probe machen.
- [ ] Ich kann zwei Dualzahlen addieren und beachte den Übertrag.
- [ ] Ich kann aus einem Bitmuster ablesen, welche Eingänge aktiv sind.

**Nächstes Kapitel:** LM1 Kapitel 2 – Zahlenmengen (ℕ, ℤ, ℚ, ℝ, ℂ)
