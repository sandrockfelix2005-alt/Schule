# Naturwissenschaft · Lernmodul 1 · Kapitel 0
# Von ganz vorn: die Grundlagen

> **Dieses Kapitel steht nicht im DAA-Modul.** Ich habe es davorgestellt, weil das Modul mit Formalismus anfängt (`G = {G} · [G]`, sieben SI-Basisgrößen) – und wer dort aussteigt, versteht danach zwangsläufig nichts mehr. Hier bauen wir die Vorstellung auf, auf der alles Weitere ruht. · **Zeitaufwand: ca. 3 Stunden**

**Was du am Ende können musst**
- Erklären, was **Masse** und **Kraft** unterscheidet – und warum das der wichtigste Unterschied überhaupt ist.
- Die fünf Grundbegriffe **Kraft, Druck, Arbeit, Energie, Leistung** anschaulich beschreiben.
- Verstehen, dass **jede Einheit aus wenigen Grundeinheiten zusammengebaut** ist – und dass die Einheit dir die Formel verrät.
- Jede Formel mit drei Größen **sicher umstellen**.
- Eine Aufgabe nach einem **festen Ablauf** angehen, statt auf einen Einfall zu warten.

---

## Worum geht es hier eigentlich?

Ein Bauwerk muss stehen bleiben. Damit du das nachweisen kannst, musst du in **Zahlen** fassen, was mit ihm passiert: Wie stark drückt die Decke auf die Stütze? Hält der Boden das aus? Wie weit dehnt sich der Beton im Sommer?

Physik ist nichts anderes als die Sprache, mit der man das aufschreibt. Und wie jede Sprache hat sie einen sehr einfachen Grundsatz:

> ### 💡 Der eine Satz, um den sich alles dreht
> **Jede Aussage in der Physik hat die Form: *Diese Größe* hat *diesen Wert* in *dieser Einheit*.**
>
> „Die Stütze trägt 49 kN." – Größe: Kraft. Wert: 49. Einheit: Kilonewton.
>
> Fehlt die Einheit, ist die Aussage wertlos. „Die Stütze trägt 5000" bedeutet gar nichts – 5000 Newton? 5000 Kilogramm? Faktor 10 dazwischen.

Mehr steckt hinter `G = {G} · [G]` aus dem Modul nicht. Es ist nur die abgekürzte Schreibweise für genau diesen Satz.

---

## 0.1 Der wichtigste Unterschied: Masse und Kraft

Wenn du aus diesem ganzen Kapitel nur eine Sache mitnimmst, dann diese.

### Die Masse

Du stellst dich auf die Waage: **80 kg**. Das ist deine **Masse** – wie viel Material in dir steckt. Zähl die Atome, wiege sie: 80 Kilogramm.

Diese Zahl ändert sich **nie**. Nicht im Flugzeug, nicht im Aufzug, nicht auf dem Mond. Masse ist einfach die Menge Materie.

```
Formelzeichen: m        Einheit: kg (Kilogramm)
```

### Die Kraft

Jetzt hältst du einen Sack Zement. Du **spürst** etwas – einen Zug nach unten. Das ist keine Masse mehr, das ist eine **Kraft**.

Die Erde zieht an jedem Kilogramm Materie. Und zwar mit **9,81 Newton pro Kilogramm**. Dieser Wert heißt Fallbeschleunigung und hat das Zeichen **g**.

```
Formelzeichen: F        Einheit: N (Newton)
```

> ### 💡 Die Formel, die beides verbindet
> ```
> F_G = m · g          mit g = 9,81 m/s²
> ```
> Das ist **keine Formel zum Auswendiglernen** – das ist ein **Umrechnungskurs**. Wie Euro in Dollar.
>
> Links steht „wie viel Material", rechts steht „wie stark zieht es nach unten".

### 📐 Nachgerechnet

Deine 80 kg:
```
F_G = m · g = 80 kg · 9,81 m/s² = 784,8 N ≈ 0,785 kN
```

Dieselben 80 kg auf dem Mond (dort ist g nur 1,62 m/s²):
```
F_G = 80 · 1,62 = 129,6 N
```

**Deine Masse ist gleich geblieben – 80 kg.** Was sich geändert hat, ist die Kraft, mit der du nach unten gezogen wirst. Auf dem Mond wärst du „leichter", aber nicht weniger Material.

> ### ⚠️ Deshalb ist „Gewicht" ein gefährliches Wort
> Im Alltag sagt jeder „ich wiege 80 Kilo". Physikalisch ist das eine **Masse**. Das **Gewicht** – genauer: die Gewichtskraft – sind die 785 Newton.
>
> In der Statik wird dieser Unterschied ernst genommen. Ein Tragwerk spürt keine Kilogramm. Es spürt **Kräfte**. Deshalb steht auf keinem Statik-Blatt „die Stütze trägt 5 Tonnen", sondern **„49 kN"**.

### Wie groß ist eigentlich 1 Newton?

Abstrakte Einheiten werden greifbar, wenn du einen Anker dafür hast:

| Größe | ist ungefähr |
|-------|--------------|
| **1 N** | die Gewichtskraft einer **Tafel Schokolade** (100 g → 0,981 N) |
| **1 kN** | die Gewichtskraft von **rund 100 kg** (genau 101,9 kg) |
| **10 kN** | ein Kleinwagen (rund 1 Tonne) |

> ### 💡 Der Umrechnungstrick fürs Kopfrechnen
> **kN ≈ Tonnen · 10.** Eine Last von 5 t sind rund 50 kN (genau 49,05). Eine von 12 t rund 120 kN.
>
> Das ist keine Schummelei, sondern die Überschlagsrechnung, die jeder auf der Baustelle macht: g ist knapp 10, also mal 10 und im Kopf ein bisschen abziehen.

---

<div class="viz" data-viz="massekraft"></div>

## 0.2 Die weiteren Grundbegriffe

Alles, was in Semester 1 kommt, lässt sich auf fünf Begriffe zurückführen. Hier ist jeder mit einem Bild, das du dir merken kannst.

### Kraft – „wie stark drückt oder zieht es?"

Schon oben behandelt. **Einheit: Newton (N).** Kräfte haben immer eine **Richtung** – das wird später wichtig, wenn eine Kraft schräg an einer Rampe angreift.

### Druck – „wie stark drückt es auf *wie viel Fläche*?"

Das ist der Begriff, den die meisten unterschätzen. Druck ist **Kraft verteilt auf Fläche**:

```
p = F / A            Einheit: N/m² = Pa (Pascal)
```

> ### 🏗️ Das Bild dazu
> Eine Person mit 70 kg steht in Turnschuhen. Die Sohlen haben zusammen etwa 400 cm² = 0,04 m² Aufstandsfläche:
> ```
> F = 70 · 9,81 = 686,7 N
> p = 686,7 / 0,04 = 17 168 Pa ≈ 0,17 bar
> ```
> Dieselbe Person auf **einem Stöckelabsatz** von 1 cm² = 0,0001 m²:
> ```
> p = 686,7 / 0,0001 = 6 867 000 Pa ≈ 68,7 bar
> ```
> **Dieselbe Kraft, 400-facher Druck.** Deshalb hinterlässt der Absatz ein Loch im Parkett und der Turnschuh nicht.

Genau das ist auch der Grund, warum ein Bagger auf Ketten steht und nicht auf Rädern – und warum ein Fundament breiter ist als die Stütze darüber. Man verteilt dieselbe Kraft auf mehr Fläche, damit der Boden sie aushält.

### Arbeit – „Kraft mal Weg"

Arbeit wird verrichtet, wenn eine Kraft etwas **bewegt**:

```
W = F · s            Einheit: N·m = J (Joule)
```

> ### 🏗️ Das Bild dazu
> Du trägst einen Sack Zement (25 kg) ein Stockwerk hoch (3 m):
> ```
> F = 25 · 9,81 = 245,25 N
> W = 245,25 · 3 = 735,75 J
> ```

> ### ⚠️ Der Denkfehler, den fast jeder macht
> Wenn du den Sack **hältst**, ohne ihn zu bewegen, verrichtest du physikalisch **keine Arbeit** – der Weg ist null.
>
> Dein Arm sagt etwas anderes, und dein Arm hat auch recht: Dein Muskel verbraucht Energie. Aber am *Sack* passiert nichts. Physikalische Arbeit braucht **Kraft UND Weg in Kraftrichtung**.

### Energie – „gespeicherte Arbeitsfähigkeit"

Energie ist das Guthaben, Arbeit verrichten zu **können**. Sie hat dieselbe Einheit wie die Arbeit: **Joule (J)**.

Der Sack, den du hochgetragen hast, hat jetzt 735,75 J **Lageenergie**. Lässt du ihn fallen, wird genau diese Energie wieder frei – deshalb ist ein herabfallender Gegenstand auf der Baustelle gefährlich.

> ### 💡 Arbeit und Energie sind zwei Seiten derselben Sache
> **Arbeit** ist die Energie, die gerade **übertragen** wird (ein Vorgang).
> **Energie** ist, was ein Körper **hat** (ein Zustand).
>
> Wie überweisen und Kontostand. Gleiche Einheit, unterschiedliche Rolle.

### Leistung – „Arbeit pro Zeit"

Leistung sagt, wie **schnell** die Arbeit verrichtet wird:

```
P = W / t            Einheit: J/s = W (Watt)
```

> ### 🏗️ Das Bild dazu
> Denselben Sack 3 m hoch:
> ```
> in 10 s:  P = 735,75 / 10 = 73,6 W
> in  3 s:  P = 735,75 /  3 = 245,3 W
> in  1 s:  P = 735,75 /  1 = 735,8 W
> ```
> **Die Arbeit ist jedes Mal dieselbe** – 735,75 J. Nur die Leistung unterscheidet sich.
>
> Und ein hübscher Zufall zum Merken: 735,5 W sind genau **1 PS**. Wer einen 25-kg-Sack in einer Sekunde drei Meter hochreißt, bringt für diesen Moment eine Pferdestärke.

### Die Übersicht

| Begriff | Alltagsfrage | Formel | Einheit |
|---------|--------------|--------|---------|
| **Masse** | Wie viel Material? | – | kg |
| **Kraft** | Wie stark drückt/zieht es? | F = m · g | N |
| **Druck** | Auf wie viel Fläche verteilt? | p = F / A | Pa = N/m² |
| **Arbeit** | Kraft über welchen Weg? | W = F · s | J = N·m |
| **Energie** | Wie viel Arbeit steckt drin? | – | J |
| **Leistung** | Wie schnell? | P = W / t | W = J/s |

---

<div class="viz" data-viz="druckflaeche"></div>

## 0.3 Warum die Einheiten zusammenhängen

Hier liegt der Schlüssel, den kaum jemand zeigt: **Einheiten sind nicht willkürlich.** Es gibt ein paar Grundeinheiten, und alle anderen sind daraus zusammengebaut.

### Die drei, die du für Mechanik brauchst

| Größe | Einheit |
|-------|---------|
| Länge | **m** (Meter) |
| Masse | **kg** (Kilogramm) |
| Zeit | **s** (Sekunde) |

Mehr nicht. Alles Weitere entsteht daraus durch Multiplizieren und Dividieren:

```
Geschwindigkeit  = Weg / Zeit                     →  m/s
Beschleunigung   = Geschwindigkeit / Zeit         →  m/s²
Kraft            = Masse · Beschleunigung         →  kg·m/s²   =  N
Druck            = Kraft / Fläche                 →  N/m²      =  Pa
Arbeit           = Kraft · Weg                    →  N·m       =  J
Leistung         = Arbeit / Zeit                  →  J/s       =  W
```

> ### 💡 Das Newton ist kein Grundbaustein
> **1 N = 1 kg·m/s².** Das Newton ist nur ein **Kürzel** für diese Kombination, damit man nicht jedes Mal `kg·m/s²` schreiben muss.
>
> Genauso ist 1 Pa nur ein Kürzel für 1 N/m², 1 J für 1 N·m und 1 W für 1 J/s.

### Und deshalb verrät dir die Einheit die Formel

Das ist der praktische Nutzen, und er rettet dich in jeder Klausur:

> ### 💡 Der Einheiten-Trick
> **Schau dir an, in welcher Einheit das Ergebnis herauskommen muss – dann weißt du, was du tun musst.**
>
> - Gesucht in **N/m²**? → Du brauchst eine **Kraft geteilt durch eine Fläche**.
> - Gesucht in **N·m**? → Eine **Kraft mal eine Länge**.
> - Gesucht in **m/s**? → Ein **Weg geteilt durch eine Zeit**.
>
> Du musst die Formel nicht auswendig wissen. Du musst nur wissen, was hinten herauskommen soll.

### Die Einheitenkontrolle

Schreib bei jeder Rechnung die Einheiten mit. Wenn am Ende die richtige herauskommt, stimmt die Formel fast immer. Kommt Unsinn heraus, hast du einen Fehler:

```
p = F / A = 49 050 N / 0,09 m² = 545 000 N/m²    ✓ Druck in N/m², passt

p = F · A = 49 050 N · 0,09 m² = 4414,5 N·m²     ✗ N·m² ist keine Druckeinheit
                                                    → also war es doch geteilt
```

Das ist die **billigste Fehlerkontrolle, die es gibt**, und sie kostet dich zehn Sekunden.

---

## 0.4 Vorsätze – k, M, m, µ

Vorsätze sind Abkürzungen für Zehnerpotenzen. Mehr nicht.

| Vorsatz | Zeichen | bedeutet | Beispiel |
|---------|---------|----------|----------|
| Mega | **M** | · 1 000 000 | 1 MN = 1 000 000 N |
| Kilo | **k** | · 1 000 | 1 kN = 1000 N |
| – | – | · 1 | 1 N |
| Zenti | **c** | : 100 | 1 cm = 0,01 m |
| Milli | **m** | : 1000 | 1 mm = 0,001 m |
| Mikro | **µ** | : 1 000 000 | 1 µm = 0,000 001 m |

> ### ⚠️ Die Falle bei Flächen und Volumen
> Beim Umrechnen von **Flächen** zählt der Faktor **zweimal**, bei **Volumen dreimal**:
> ```
> 1 m  = 100 cm        →  1 m² = 100 · 100  = 10 000 cm²
>                      →  1 m³ = 100·100·100 = 1 000 000 cm³
>
> 1 m  = 1000 mm       →  1 m² = 1 000 000 mm²
> ```
> Wer hier „mal 100" statt „mal 10 000" rechnet, liegt um den Faktor 100 daneben.

> ### 🏗️ Die Umrechnung, die du am häufigsten brauchst
> Betonfestigkeiten stehen in **N/mm²**, Bodenpressungen in **kN/m²**. Dazwischen liegt ein großer Faktor:
> ```
> 1 N/mm² = 1 000 000 N/m² = 1000 kN/m² = 1 MPa
> ```
> Weil in einen Quadratmeter eine Million Quadratmillimeter passen. Ein C25/30 hält also 25 N/mm² aus – das sind **25 000 kN/m²**. Der Baugrund darunter verträgt vielleicht 300 kN/m². Faktor 80. Deshalb wird die Last über das Fundament verteilt.

### So rechnest du sicher um

Nicht raten, sondern **als Zehnerpotenz schreiben**:

```
3,5 kN in N:        3,5 · 10³ N        = 3500 N
250 mm in m:        250 · 10⁻³ m       = 0,25 m
0,09 m² in cm²:     0,09 · 10⁴ cm²     = 900 cm²
18 N/mm² in kN/m²:  18 · 10⁶ N/m² = 18 000 000 N/m² = 18 000 kN/m²
```

---

## 0.5 Formeln umstellen

Das ist reine Mechanik – es gibt nichts zu verstehen, nur eine Regel anzuwenden.

> ### 💡 Eine Gleichung ist eine Waage
> Links und rechts vom Gleichheitszeichen steht dasselbe. **Was du auf der einen Seite tust, musst du auf der anderen genauso tun** – dann bleibt die Waage im Gleichgewicht.

### Das Vorgehen in einem Satz

**Das Gesuchte soll allein stehen. Also schaff alles andere weg – durch die Gegenoperation.**

| Was stört | Gegenoperation |
|-----------|----------------|
| es wird **mal** gerechnet | **geteilt** durch dasselbe |
| es wird **geteilt** | **mal** dasselbe |
| es wird **addiert** | dasselbe **abziehen** |
| es wird **abgezogen** | dasselbe **addieren** |

### 📐 Lehrbeispiel 1 – aus einer Multiplikation

`F = m · a`, gesucht ist **a**.

Das a wird mit m multipliziert. Also beide Seiten durch m teilen:
```
F = m · a          | : m

F / m = m · a / m

F / m = a          →     a = F / m
```
Auf der rechten Seite kürzt sich m weg – genau das war das Ziel.

### 📐 Lehrbeispiel 2 – aus einer Division

`p = F / A`, gesucht ist **F**.

Das F wird durch A geteilt. Also beide Seiten mal A:
```
p = F / A          | · A

p · A = F / A · A

p · A = F          →     F = p · A
```

**Und wenn A gesucht ist?** Zwei Schritte:
```
p = F / A          | · A
p · A = F          | : p
A = F / p
```

> ### 💡 Das Formeldreieck als Krücke
> Bei Formeln mit genau **drei** Größen und **einer Multiplikation** hilft ein Dreieck. Für `F = m · a`:
> ```
>        ┌─────────┐
>        │    F    │      oben:  das Produkt
>        ├────┬────┤
>        │  m │ a  │      unten: die beiden Faktoren
>        └────┴────┘
> ```
> **Halte das Gesuchte zu.** Was übrig bleibt, ist die Formel:
> - F zugehalten → m neben a → **F = m · a**
> - m zugehalten → F über a → **m = F / a**
> - a zugehalten → F über m → **a = F / m**
>
> ⚠️ Das funktioniert **nur** bei genau drei Größen. Bei `W = m · g · h` oder `Q = c · m · Δϑ` geht es nicht – da musst du richtig umstellen.

---

<div class="viz" data-viz="umstellen"></div>

## 0.6 Der feste Ablauf für jede Aufgabe

Der häufigste Satz von Leuten, die in Physik feststecken: *„Ich weiß nicht, wo ich anfangen soll."* Dagegen hilft ein **immer gleicher Ablauf**. Du musst nicht kreativ sein – du musst nur die Liste abarbeiten.

> ### 💡 Die sechs Schritte
> 1. **Gegeben** aufschreiben – jede Zahl mit ihrer Einheit.
> 2. **Gesucht** aufschreiben – welche Größe, in welcher Einheit?
> 3. **Umrechnen** in Grundeinheiten: m, kg, s, N.
> 4. **Formel suchen**, die Gegebenes und Gesuchtes verbindet. Die Einheit des Gesuchten hilft dir dabei.
> 5. **Umstellen, einsetzen, rechnen** – mit Einheiten.
> 6. **Prüfen:** Stimmt die Einheit? Ist die Größenordnung plausibel?

### 📐 Vollständig durchgerechnet – Bodenpressung

*Eine Stütze überträgt 5,0 t auf ein quadratisches Fundament von 30 cm × 30 cm. Wie groß ist die Bodenpressung?*

**Schritt 1 – Gegeben:**
```
m = 5,0 t
Fundament: 30 cm × 30 cm
```

**Schritt 2 – Gesucht:** Bodenpressung p, sinnvoll in kN/m²

**Schritt 3 – Umrechnen:**
```
m = 5,0 t = 5000 kg
A = 0,30 m · 0,30 m = 0,09 m²
```

**Schritt 4 – Formel:** Gesucht ist ein Druck, also Kraft durch Fläche: `p = F / A`. Die Kraft habe ich noch nicht, aber die Masse – und `F = m · g` macht daraus eine Kraft.

**Schritt 5 – Rechnen:**
```
F = m · g = 5000 kg · 9,81 m/s² = 49 050 N = 49,05 kN

p = F / A = 49,05 kN / 0,09 m² = 545 kN/m²
```

**Schritt 6 – Prüfen:** Einheit kN/m² ✓. Und die Größenordnung? Normaler Baugrund trägt 150–400 kN/m². **545 ist zu viel** – dieses Fundament ist zu klein.

### 📐 Dieselbe Aufgabe rückwärts

*Wie groß muss das Fundament sein, damit 250 kN/m² nicht überschritten werden?*

Jetzt ist die Fläche gesucht. Also `p = F / A` nach A umstellen:
```
p = F / A     | · A
p · A = F     | : p
A = F / p = 49,05 kN / 250 kN/m² = 0,1962 m²
```
Quadratisch, also Seitenlänge:
```
a = √0,1962 = 0,443 m   →   ausgeführt 45 cm × 45 cm
```

**Prüfen:** 0,45 · 0,45 = 0,2025 m² → p = 49,05 / 0,2025 = **242 kN/m²** ✓ unter 250.

> ### 🏗️ Das ist keine Schulaufgabe
> Genau diese Rechnung machst du später bei jedem Einzelfundament. Die Frage „Wie groß muss die Fläche sein, damit der Boden die Last aushält?" ist der Kern der Gründungsplanung.

---

## ✍️ Übungsaufgaben mit Lösungsweg

Rechne erst selbst, dann aufklappen. Schreib die Einheiten mit – jedes Mal.

### Aufgabe 1 · Masse und Kraft
Ein Stapel Gipsplatten hat die Masse **120 kg**.
**1.1** Wie groß ist die Gewichtskraft in N und in kN?
**1.2** Wie groß wäre sie auf dem Mond (g = 1,62 m/s²)?
**1.3** Wie groß ist die Masse auf dem Mond?

<details><summary>Lösung anzeigen</summary>

**1.1** F_G = m · g = 120 kg · 9,81 m/s² = **1177,2 N = 1,177 kN**
**1.2** F_G = 120 · 1,62 = **194,4 N**
**1.3** **120 kg** – unverändert. Masse ist die Materiemenge und hängt nicht vom Ort ab. Nur die *Kraft* wird kleiner.
</details>

### 🏗️ Aufgabe 2 · Überschlag im Kopf
Eine Last von **2,5 t** soll in kN angegeben werden.
**2.1** Rechne genau. **2.2** Was hättest du im Kopf überschlagen? **2.3** Wie groß ist der Fehler des Überschlags?

<details><summary>Lösung anzeigen</summary>

**2.1** 2,5 t = 2500 kg → F = 2500 · 9,81 = 24 525 N = **24,53 kN**
**2.2** Tonnen mal 10 → rund **25 kN**
**2.3** 25 − 24,53 = 0,47 kN, also knapp **2 % zu hoch**. Für einen Überschlag völlig ausreichend – und er liegt auf der sicheren Seite.
</details>

### 🏗️ Aufgabe 3 · Bodenpressung
Eine Bodenplatte mit der Masse **3,2 t** liegt auf einer Fläche von **1,60 m × 1,20 m**.
**3.1** Aufstandsfläche? **3.2** Gewichtskraft in kN? **3.3** Bodenpressung in kN/m²?

<details><summary>Lösung anzeigen</summary>

**3.1** A = 1,60 · 1,20 = **1,92 m²**
**3.2** F = 3200 kg · 9,81 = 31 392 N = **31,39 kN**
**3.3** p = F / A = 31,39 / 1,92 = **16,4 kN/m²**
*Zur Einordnung:* Das ist sehr wenig – normaler Baugrund trägt das Zehn- bis Zwanzigfache.
</details>

### 🏗️ Aufgabe 4 · Arbeit und Leistung
Ein Bauaufzug hebt einen Sack von **40 kg** um **12 m**.
**4.1** Welche Kraft ist nötig? **4.2** Welche Arbeit wird verrichtet? **4.3** Welche Leistung bei 25 s Hubzeit? **4.4** Und wenn er 50 s braucht – ändert sich die Arbeit?

<details><summary>Lösung anzeigen</summary>

**4.1** F = 40 · 9,81 = **392,4 N**
**4.2** W = F · s = 392,4 · 12 = **4708,8 J** ≈ 4,71 kJ
**4.3** P = W / t = 4708,8 / 25 = **188,4 W**
**4.4** **Nein.** Die Arbeit bleibt 4708,8 J – Kraft und Weg sind unverändert. Nur die Leistung halbiert sich auf 94,2 W. Langsamer heben heißt weniger Leistung, nicht weniger Arbeit.
</details>

### Aufgabe 5 · Umrechnen
Rechne um:
**5.1** 4,8 kN in N · **5.2** 320 mm in m · **5.3** 0,25 m² in cm² · **5.4** 30 N/mm² in kN/m²

<details><summary>Lösung anzeigen</summary>

**5.1** 4,8 · 10³ = **4800 N**
**5.2** 320 · 10⁻³ = **0,32 m**
**5.3** 0,25 · 10 000 = **2500 cm²** (bei Flächen zählt der Faktor 100 **zweimal**)
**5.4** 30 N/mm² = 30 · 10⁶ N/m² = 30 000 000 N/m² = **30 000 kN/m²**
</details>

### Aufgabe 6 · Formel umstellen
Gegeben ist `W = F · s`.
**6.1** Stelle nach s um. **6.2** Berechne s für W = 9000 J und F = 450 N. **6.3** Stelle `P = W / t` nach t um.

<details><summary>Lösung anzeigen</summary>

**6.1** W = F · s | : F → **s = W / F**
**6.2** s = 9000 J / 450 N = **20 m**
*(Einheitenprobe: J/N = N·m/N = m ✓)*
**6.3** P = W / t | · t → P · t = W | : P → **t = W / P**
</details>

### 🏗️ Aufgabe 7 · Fundament bemessen
Eine Stütze überträgt **1,8 t**. Der Baugrund verträgt höchstens **220 kN/m²**.
**7.1** Wie groß ist die Kraft in kN? **7.2** Welche Fläche ist mindestens nötig? **7.3** Reicht ein Fundament von 30 cm × 30 cm?

<details><summary>Lösung anzeigen</summary>

**7.1** F = 1800 kg · 9,81 = 17 658 N = **17,66 kN**
**7.2** A = F / p = 17,66 / 220 = **0,0803 m²** → Seitenlänge √0,0803 = 0,283 m, also mindestens **29 cm**
**7.3** 0,30 · 0,30 = 0,09 m² → p = 17,66 / 0,09 = **196,2 kN/m²**
**Ja, das reicht** – 196 liegt unter 220. Mit 35 × 35 cm wären es 144 kN/m², also mehr Reserve.
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich kann in einem Satz sagen, worin sich **Masse und Kraft** unterscheiden.
- [ ] Ich weiß, warum in der Statik mit **kN** und nicht mit Tonnen gerechnet wird.
- [ ] Ich kann eine Masse in Tonnen **im Kopf** grob in kN überschlagen.
- [ ] Ich kann **Druck** an einem Bild erklären (Stöckelschuh, Raupenfahrwerk).
- [ ] Ich weiß, warum **Halten** keine physikalische Arbeit ist.
- [ ] Ich kann erklären, warum **1 N = 1 kg·m/s²** ist.
- [ ] Ich kann aus der **gesuchten Einheit** ableiten, ob ich multiplizieren oder dividieren muss.
- [ ] Ich rechne Flächen richtig um (Faktor **zweimal**).
- [ ] Ich kann `p = F / A` nach **F** und nach **A** umstellen.
- [ ] Ich arbeite Aufgaben nach den **sechs Schritten** ab, statt auf einen Einfall zu warten.

> ### 💡 Wenn etwas davon noch nicht sitzt
> Geh nicht weiter zum nächsten Kapitel. Die Mechanik ab Kapitel 1 baut genau auf diesen Dingen auf – jede Auflagerkraft, jedes Drehmoment und jede Bodenpressung ist nur eine Anwendung davon. Eine Stunde hier gespart kostet dich später zehn.

---

**Weiter geht es mit** Kapitel 1 · Messen und Maßeinheiten – dort wird das Einheitensystem systematisch aufgeschrieben. Nach diesem Kapitel wirst du dort vieles wiedererkennen.
