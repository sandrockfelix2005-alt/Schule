# Naturwissenschaft · Lernmodul 1 · Kapitel 3
# Hebel, Drehmoment und Gleichgewicht

> **Lernkapitel zum Selbststudium.** Quelle: DAA Naturwissenschaft, Lernmodul 1, Kapitel 2.3 · **Zeitaufwand: ca. 4–5 Stunden**

**Was du am Ende können musst**
- Das **Drehmoment** berechnen und seine Wirkung verstehen.
- Das **Hebelgesetz** anwenden – ein- und zweiseitige Hebel.
- Die **drei Gleichgewichtsbedingungen** aufstellen.
- **Auflagerkräfte** eines Trägers berechnen.
- Die **Standsicherheit** (Kippsicherheit) beurteilen.

**Inhalt:** [3.1 Drehmoment](#31-das-drehmoment) · [3.2 Hebelgesetz](#32-das-hebelgesetz) · [3.3 Gleichgewicht](#33-die-gleichgewichtsbedingungen) · [3.4 Auflagerkräfte](#34-auflagerkräfte-berechnen) · [3.5 Kippsicherheit](#35-kippsicherheit) · [Übungen](#-übungsaufgaben-mit-lösungsweg)

---

## Worum geht es in diesem Kapitel?

> ### 🏗️ Das ist der direkte Einstieg in die Statik
> Was du hier lernst, ist **exakt** das Verfahren, mit dem später jeder Träger, jede Stütze und jede Stützmauer berechnet wird. Die drei Gleichgewichtsbedingungen sind das **Fundament der gesamten Baustatik**.

---

## 3.1 Das Drehmoment

Eine Kraft kann einen Körper nicht nur verschieben, sondern auch **drehen**. Wie stark, hängt von zwei Dingen ab: der **Kraft** und dem **Hebelarm**.

> ### 💡 Definition
> ```
> M = F · l
> ```
> | Größe | Bedeutung | Einheit |
> |-------|-----------|---------|
> | M | Drehmoment | **Nm** (Newtonmeter) |
> | F | Kraft | N |
> | **l** | **Hebelarm** – der **senkrechte** Abstand der Wirkungslinie vom Drehpunkt | m |

> ### ⚠️ Der Hebelarm ist immer der SENKRECHTE Abstand
> Nicht die Entfernung zum Angriffspunkt, sondern der **kürzeste (senkrechte) Abstand der Wirkungslinie** vom Drehpunkt. Bei schräg angreifenden Kräften muss man erst die Komponente senkrecht zum Hebel bilden.

### Das Kräftepaar

Zwei gleich große, entgegengesetzt gerichtete Kräfte auf parallelen Wirkungslinien erzeugen ein **reines Drehmoment** – der Körper dreht sich, ohne sich zu verschieben.

**Beispiel:** Das Lenkrad – beide Hände drücken/ziehen entgegengesetzt.

### Drehrichtung und Vorzeichen

> ### 💡 Vorzeichenkonvention
> - **Linksdrehend** (gegen den Uhrzeigersinn): **positiv** (+)
> - **Rechtsdrehend** (im Uhrzeigersinn): **negativ** (−)
>
> *(Die Festlegung ist frei wählbar – wichtig ist nur, dass du sie in einer Aufgabe **konsequent** durchhältst.)*

### 📐 Lehrbeispiel

Eine Kraft von **250 N** greift **0,80 m** vom Drehpunkt entfernt senkrecht an.
```
M = 250 · 0,80 = 200 Nm
```

### 🏗️ Bau-Beispiel – Anziehmoment einer Schraube

Eine Schraube soll mit **180 Nm** angezogen werden. Der Schlüssel ist **0,45 m** lang. Welche Kraft musst du aufbringen?

```
M = F · l        →        F = M / l = 180 / 0,45 = 400 N
```
Das entspricht etwa **41 kg** – deutlich spürbar.

**Mit einem 0,30-m-Schlüssel:**
```
F = 180 / 0,30 = 600 N  (≈ 61 kg)
```

> **Deshalb** haben Drehmomentschlüssel lange Hebel: Je länger der Hebel, desto weniger Kraft ist nötig.

---

## 3.2 Das Hebelgesetz

> ### 💡 Der allgemeine Hebelsatz
> Ein Hebel ist im Gleichgewicht, wenn die Summe der **linksdrehenden** Momente gleich der Summe der **rechtsdrehenden** Momente ist:
> ```
> Σ M_links = Σ M_rechts
> ```
> Für zwei Kräfte:
> ```
> F₁ · l₁ = F₂ · l₂
> ```

### Die zwei Hebelarten

**Zweiseitiger Hebel** – Drehpunkt **zwischen** den Kräften:
```
   F₁                    F₂
   ↓                     ↓
   ────────●─────────────
     l₁    Δ      l₂
```
Beispiele: Wippe, Balkenwaage, Brechstange über einem Keil.

**Einseitiger Hebel** – Kräfte auf **derselben** Seite:
```
        F₁      F₂
        ↓       ↓
   ●────────────────
   Δ   l₁      l₂
```
Beispiele: Schubkarre, Nussknacker, Kranausleger.

### 📐 Lehrbeispiel 1 – zweiseitiger Hebel

Links wirken **400 N** im Abstand **0,50 m**. Welche Kraft ist rechts bei **2,00 m** nötig?

```
F₁ · l₁ = F₂ · l₂
400 · 0,50 = F₂ · 2,00
200 = F₂ · 2,00
F₂ = 100 N
```

> **Das Prinzip:** Vierfacher Hebelarm → nur ein Viertel der Kraft. Was man an Kraft spart, muss man an Weg zulegen (Goldene Regel der Mechanik).

### 📐 Lehrbeispiel 2 – mehrere Kräfte

Ein Balken ist bei A gelagert. Links: 300 N bei 1,20 m und 150 N bei 0,80 m. Rechts wirkt F bei 2,50 m. Wie groß ist F?

```
Σ M_links = 300 · 1,20 + 150 · 0,80 = 360 + 120 = 480 Nm
Σ M_rechts = F · 2,50

480 = F · 2,50
F = 192 N
```

### 🏗️ Bau-Beispiel – Schubkarre

Eine Schubkarre (einseitiger Hebel): Die Last von **80 kg** liegt **0,60 m** hinter dem Rad, die Griffe sind **1,50 m** hinter dem Rad.

```
F_Last = 80 · 9,81 = 784,8 N

F_Griff · 1,50 = 784,8 · 0,60
F_Griff = 470,88 / 1,50 = 313,9 N  (≈ 32 kg)
```

**Ergebnis:** Du hebst nur etwa **40 %** der Last – den Rest trägt das Rad.

---

## 3.3 Die Gleichgewichtsbedingungen

> ### 💡 Die drei Bedingungen der Statik
> Ein Körper ist **im Gleichgewicht** (in Ruhe), wenn gleichzeitig gilt:
> ```
> ΣF_x = 0        (Summe aller waagerechten Kräfte)
> ΣF_y = 0        (Summe aller senkrechten Kräfte)
> ΣM   = 0        (Summe aller Momente um einen beliebigen Punkt)
> ```

**Anschaulich:**
- ΣF_x = 0 → der Körper verschiebt sich nicht **waagerecht**
- ΣF_y = 0 → er verschiebt sich nicht **senkrecht**
- ΣM = 0 → er **dreht** sich nicht

> ### 🏗️ Warum das die wichtigste Formel der Bautechnik ist
> Jedes Bauwerk muss diese drei Bedingungen erfüllen – sonst bewegt es sich, und das nennt man **Einsturz**. Mit diesen drei Gleichungen berechnest du:
> - Auflagerkräfte von Trägern
> - Stabkräfte im Fachwerk
> - Standsicherheit von Mauern
> - Erforderliche Verankerungen

---

## 3.4 Auflagerkräfte berechnen

### Das Standardproblem

Ein Träger liegt auf zwei Auflagern A und B. Auf ihm wirken Lasten. Gesucht: die **Auflagerkräfte** A und B.

```
        F₁          F₂
        ↓           ↓
   ●────────────────────●
   A                    B
   △                    △
   ↑                    ↑
   A                    B
```

### So gehst du vor

1. **Skizze** mit allen Kräften und Maßen.
2. **Momentengleichung um A** aufstellen (dann fällt A heraus, weil sein Hebelarm null ist) → **B berechnen**.
3. **Momentengleichung um B** → **A berechnen**.
4. **Probe:** ΣF_y = 0 → A + B muss die Summe aller Lasten ergeben.

> ### 💡 Der Trick
> Setze den **Momentenbezugspunkt** immer auf **ein Auflager**. Dann ist dessen Hebelarm null, seine unbekannte Kraft fällt aus der Gleichung – und du hast nur **eine** Unbekannte.

### 📐 Lehrbeispiel – Träger mit zwei Einzellasten

Ein Träger von **6,00 m** Länge liegt auf A (links) und B (rechts).
- **F₁ = 20 kN** bei 2,00 m von A
- **F₂ = 30 kN** bei 4,50 m von A

**Schritt 1 – Momente um A (B berechnen):**

Alle Momente um A aufsummieren (rechtsdrehend positiv gezählt):
```
ΣM_A = 0
F₁ · 2,00 + F₂ · 4,50 − B · 6,00 = 0
20 · 2,00 + 30 · 4,50 = B · 6,00
40 + 135 = B · 6,00
175 = B · 6,00
B = 29,17 kN
```

**Schritt 2 – Momente um B (A berechnen):**
```
ΣM_B = 0
A · 6,00 − F₁ · 4,00 − F₂ · 1,50 = 0
A · 6,00 = 20 · 4,00 + 30 · 1,50
A · 6,00 = 80 + 45 = 125
A = 20,83 kN
```

**Schritt 3 – Probe:**
```
A + B = 20,83 + 29,17 = 50,00 kN
F₁ + F₂ = 20 + 30 = 50 kN ✓
```

> **Beachte:** Die größere Auflagerkraft liegt beim Auflager, das **näher an der großen Last** ist. Das ist eine gute Plausibilitätskontrolle.

### 🏗️ Bau-Beispiel – Träger mit Gleichstreckenlast

Ein Deckenträger von **5,00 m** Spannweite trägt eine **Gleichstreckenlast von q = 12 kN/m**.

**Trick:** Eine Gleichstreckenlast ersetzt man durch eine **Einzellast in der Mitte**:
```
F_ges = q · l = 12 · 5,00 = 60 kN,  angreifend in Feldmitte (2,50 m)
```

**Auflagerkräfte:**
```
Symmetrisch belastet → A = B = 60 / 2 = 30 kN
```

**Allgemein für Gleichlast:**
```
A = B = q · l / 2
```

---

## 3.5 Kippsicherheit

Ein Bauteil kippt, wenn das **kippende Moment** größer wird als das **standsichernde Moment**.

> ### 💡 Die Kippsicherheit
> ```
> η = M_standsichernd / M_kippend
> ```
> Gefordert wird üblicherweise **η ≥ 1,5**.

### 🏗️ Bau-Beispiel – Stützmauer

Eine Stützmauer:
- **Eigengewicht G = 140 kN**, greift **0,90 m** von der Kippkante entfernt an
- **Erddruck H = 48 kN**, greift **1,20 m** über der Kippkante an

**Standsicherndes Moment** (Eigengewicht hält die Mauer):
```
M_stand = G · 0,90 = 140 · 0,90 = 126 kNm
```

**Kippendes Moment** (Erddruck will kippen):
```
M_kipp = H · 1,20 = 48 · 1,20 = 57,6 kNm
```

**Kippsicherheit:**
```
η = 126 / 57,6 = 2,19
```

**Bewertung:** 2,19 ≥ 1,5 → **ausreichend standsicher** ✓

### 🏗️ Bau-Beispiel – Kran-Ballast

Ein Turmdrehkran hebt **3,2 t** in **18 m** Ausladung. Das Gegengewicht sitzt **5,0 m** auf der anderen Seite. Wie schwer muss es mindestens sein?

```
Lastmoment:    M_L = 3,2 · 9,81 · 18 = 565,1 kNm
Ballastmoment: M_B = m_B · 9,81 · 5,0

Gleichgewicht: M_B = M_L
m_B · 9,81 · 5,0 = 565,1
m_B = 565,1 / 49,05 = 11,52 t
```

**Mit Sicherheit 1,5:**
```
m_B,erf = 11,52 · 1,5 = 17,3 t
```

> **Deshalb** sind Kranballaste so schwer – der kurze Hebelarm muss durch Masse ausgeglichen werden.

---

# ✍️ Übungsaufgaben mit Lösungsweg

### Aufgabe 1 · Drehmoment
**1.1** F = 320 N, l = 0,75 m → M? **1.2** M = 240 Nm, l = 0,60 m → F? **1.3** M = 150 Nm, F = 500 N → l?

<details><summary>Lösung anzeigen</summary>

**1.1** M = 320 · 0,75 = **240 Nm**
**1.2** F = 240 / 0,60 = **400 N**
**1.3** l = 150 / 500 = **0,30 m**
</details>

### Aufgabe 2 · Hebelgesetz
**2.1** Links 600 N bei 0,45 m → Kraft rechts bei 1,80 m? **2.2** Links 250 N bei 1,20 m, rechts 500 N → Hebelarm rechts?

<details><summary>Lösung anzeigen</summary>

**2.1** F₂ = (600 · 0,45)/1,80 = **150 N**
**2.2** l₂ = (250 · 1,20)/500 = **0,60 m**
</details>

### Aufgabe 3 · Mehrere Kräfte
Links: 200 N bei 0,90 m und 350 N bei 0,40 m. Rechts: F bei 1,50 m.

<details><summary>Lösung anzeigen</summary>

```
ΣM_links = 200 · 0,90 + 350 · 0,40 = 180 + 140 = 320 Nm
F = 320 / 1,50 = 213,3 N
```
</details>

### Aufgabe 4 · Gleichgewichtsbedingungen
Nenne die drei Bedingungen und erkläre ihre anschauliche Bedeutung.

<details><summary>Lösung anzeigen</summary>

```
ΣF_x = 0  →  keine waagerechte Verschiebung
ΣF_y = 0  →  keine senkrechte Verschiebung
ΣM   = 0  →  keine Drehung
```
</details>

### 🏗️ Aufgabe 5 · Auflagerkräfte (Einzellasten)
Träger **8,00 m**, Auflager A links, B rechts.
**F₁ = 25 kN** bei 2,50 m · **F₂ = 40 kN** bei 6,00 m.

<details><summary>Lösung anzeigen</summary>

**Momente um A:**
```
25 · 2,50 + 40 · 6,00 = B · 8,00
62,5 + 240 = B · 8,00
302,5 = B · 8,00
B = 37,81 kN
```

**Momente um B:**
```
A · 8,00 = 25 · 5,50 + 40 · 2,00
A · 8,00 = 137,5 + 80 = 217,5
A = 27,19 kN
```

**Probe:** 27,19 + 37,81 = 65,00 kN = 25 + 40 ✓
</details>

### 🏗️ Aufgabe 6 · Auflagerkräfte (Gleichlast)
Träger **6,50 m** Spannweite, Gleichstreckenlast **q = 15 kN/m**.
**6.1** Gesamtlast? **6.2** Auflagerkräfte?

<details><summary>Lösung anzeigen</summary>

**6.1** F = 15 · 6,50 = **97,5 kN**
**6.2** symmetrisch → A = B = 97,5 / 2 = **48,75 kN**
</details>

### 🏗️ Aufgabe 7 · Kombinierte Last
Träger **6,00 m**, Gleichlast **q = 10 kN/m** über die ganze Länge, zusätzlich **F = 30 kN** bei 4,00 m von A.

<details><summary>Lösung anzeigen</summary>

```
Gleichlast: F_q = 10 · 6,00 = 60 kN, greift bei 3,00 m an

Momente um A:
60 · 3,00 + 30 · 4,00 = B · 6,00
180 + 120 = B · 6,00
B = 50,00 kN

Momente um B:
A · 6,00 = 60 · 3,00 + 30 · 2,00 = 180 + 60 = 240
A = 40,00 kN

Probe: 40 + 50 = 90 kN = 60 + 30 ✓
```
</details>

### 🏗️ Aufgabe 8 · Schubkarre
Last **120 kg**, Schwerpunkt **0,55 m** hinter dem Rad, Griffe **1,40 m** hinter dem Rad.

<details><summary>Lösung anzeigen</summary>

```
F_Last = 120 · 9,81 = 1177,2 N
F_Griff = (1177,2 · 0,55) / 1,40 = 647,5 / 1,40 = 462,5 N  (≈ 47 kg)
```
Man hebt etwa **39 %** der Last.
</details>

### 🏗️ Aufgabe 9 · Kippsicherheit
Stützmauer: **G = 180 kN** bei **1,10 m** von der Kippkante, Erddruck **H = 55 kN** bei **1,40 m** Höhe.
**9.1** Standsicherndes Moment? **9.2** Kippendes Moment? **9.3** Sicherheit? **9.4** Ausreichend?

<details><summary>Lösung anzeigen</summary>

**9.1** M_stand = 180 · 1,10 = **198 kNm**
**9.2** M_kipp = 55 · 1,40 = **77 kNm**
**9.3** η = 198 / 77 = **2,57**
**9.4** 2,57 ≥ 1,5 → **ja, ausreichend** ✓
</details>

### 🏗️ Aufgabe 10 · Drehmomentschlüssel
Eine Schraube soll mit **240 Nm** angezogen werden.
**10.1** Kraft bei 0,50 m Schlüssellänge? **10.2** Bei 0,35 m? **10.3** Welche Länge bei max. 350 N Handkraft?

<details><summary>Lösung anzeigen</summary>

**10.1** F = 240 / 0,50 = **480 N**
**10.2** F = 240 / 0,35 = **685,7 N**
**10.3** l = 240 / 350 = **0,686 m** → mindestens **0,70 m**
</details>

---

## ✅ Selbstkontrolle – kannst du das jetzt?

- [ ] Ich kenne **M = F · l** und weiß, dass l der **senkrechte** Abstand ist.
- [ ] Ich kann das **Hebelgesetz** (F₁·l₁ = F₂·l₂) anwenden.
- [ ] Ich unterscheide ein- und zweiseitige Hebel.
- [ ] Ich kenne die **drei Gleichgewichtsbedingungen** auswendig.
- [ ] Ich berechne **Auflagerkräfte** über Momentengleichungen um die Auflager.
- [ ] Ich weiß, warum man den Bezugspunkt **auf ein Auflager** legt.
- [ ] Ich mache immer die **Probe** ΣF_y = 0.
- [ ] Ich ersetze eine **Gleichstreckenlast** durch eine Einzellast in der Mitte.
- [ ] Ich kann eine **Kippsicherheit** berechnen und beurteilen (η ≥ 1,5).

**Nächstes Kapitel:** LM1 Kapitel 4 – Bewegungen
