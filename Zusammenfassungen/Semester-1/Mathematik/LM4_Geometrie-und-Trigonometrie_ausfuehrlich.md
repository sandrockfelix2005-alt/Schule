# Mathematik I – Lernmodul 4 · AUSFÜHRLICH (Nachschlagewerk)
## Geometrische Gesetze auf zwei- und dreidimensionale Figuren anwenden

> Quelle: `Unterlagen/Semester-1/Mathematik/Mathematik_Lernmodul-4.txt` (Original-PDF in Google Drive: Technikerschule/Mathematik Lernmodul 4)
> 📄 **Zwei Varianten:** [← Kompakt-Fassung](LM4_Geometrie-und-Trigonometrie_kompakt.md) · Diese **ausführliche** Fassung mit Formeln, Sätzen und Beispielen.
> 🔎 Für **Bautechnik** zentral: Vermessung, Aufmaß, Flächen-/Volumenberechnung, Dachneigungen, Böschungen.

**Inhalt**
1. [Planimetrie](#1-planimetrie) · [1.1 Grundbegriffe & Winkel](#11-grundbegriffe-und-winkel) · [1.2 Konstruktionen](#12-grundkonstruktionen) · [1.3 Ähnlichkeit & Strahlensätze](#13-ähnlichkeit-und-strahlensätze) · [1.4 Dreieck](#14-das-dreieck-kongruenz--besondere-linien) · [1.5 Rechtwinkliges Dreieck / Pythagoras](#15-rechtwinkliges-dreieck--satz-des-pythagoras) · [1.6 Kreis](#16-kreis-und-kreisteile) · [1.7 Flächen & Umfang](#17-flächen--und-umfangsberechnung)
2. [Trigonometrie](#2-trigonometrie) · [2.1 sin/cos/tan](#21-sinus-kosinus-tangens) · [2.2 Funktionen](#22-trigonometrische-funktionen) · [2.3 Sinus-/Kosinussatz](#23-berechnungen-im-allgemeinen-dreieck) · [2.4 Bogenmaß](#24-bogenmaß)
3. [Stereometrie (Körper)](#3-stereometrie)

---

# 1 Planimetrie
Die **Planimetrie** ist die Geometrie der ebenen (2D-)Figuren.

## 1.1 Grundbegriffe und Winkel
- **Punkt** (keine Ausdehnung), **Gerade** (unendlich), **Strahl/Halbgerade** (ein Anfang), **Strecke** (zwei Endpunkte).
- Für genaues Zeichnen: harter, spitzer Bleistift; „schleifende Schnitte" vermeiden – am genauesten schneiden sich Linien **rechtwinklig**.

**Winkelarten:**
| Art | Größe |
|-----|-------|
| spitz | 0° < α < 90° |
| recht | α = 90° |
| stumpf | 90° < α < 180° |
| gestreckt | α = 180° |
| überstumpf | 180° < α < 360° |

**Winkel an geschnittenen Geraden:**
- **Scheitelwinkel** (gegenüber) sind **gleich groß**.
- **Nebenwinkel** ergänzen sich zu **180°**.
- An **parallelen** Geraden mit einer Schnittgeraden: **Stufenwinkel** (gleiche Lage) gleich groß, **Wechselwinkel** (über Kreuz) gleich groß.

## 1.2 Grundkonstruktionen
- **Ortslinien:** Punkte gleicher Eigenschaft, z. B. **Mittelsenkrechte** (gleicher Abstand zu zwei Punkten), **Winkelhalbierende** (gleicher Abstand zu zwei Schenkeln), **Thaleskreis**.
- **Kongruenzabbildungen** (form- und größentreu): Verschiebung, Drehung, Spiegelung.

## 1.3 Ähnlichkeit und Strahlensätze
- **Zentrische Streckung:** Figur wird vom Streckzentrum aus mit Faktor k vergrößert/verkleinert – **ähnlich** (gleiche Winkel, proportionale Seiten).
- **1. Strahlensatz:** Werden zwei von einem Punkt ausgehende Strahlen von zwei **Parallelen** geschnitten, verhalten sich die Abschnitte auf dem einen Strahl wie die entsprechenden auf dem anderen:
  **a : b = c : d** (bzw. Teilstrecke/Gesamtstrecke gleich).
- Anwendung: **indirekte Messung** (Baumhöhe über Schattenlänge, unzugängliche Strecken).

## 1.4 Das Dreieck: Kongruenz & besondere Linien
- **Winkelsumme im Dreieck = 180°.**
- **Kongruenzsätze** (Dreiecke eindeutig / deckungsgleich): **SSS, SWS, WSW, SsW**.
- **Besondere Linien/Punkte:** Mittelsenkrechten → **Umkreismittelpunkt** · Winkelhalbierende → **Inkreismittelpunkt** · Seitenhalbierende → **Schwerpunkt** · Höhen → **Höhenschnittpunkt**.

## 1.5 Rechtwinkliges Dreieck – Satz des Pythagoras
Im rechtwinkligen Dreieck (rechter Winkel bei C): die dem rechten Winkel gegenüberliegende Seite ist die **Hypotenuse c**, die anderen beiden die **Katheten a, b**.

> **a² + b² = c²**

- **Kathetensatz** (Euklid): a² = c·p, b² = c·q (p, q = Hypotenusenabschnitte).
- **Höhensatz** (Euklid): h² = p·q.

**Beispiel:** Katheten a = 3 m, b = 4 m → c² = 3² + 4² = 9 + 16 = 25 → **c = 5 m**.
**Umstellen:** fehlende Kathete a = √(c² − b²).

## 1.6 Kreis und Kreisteile
- **Kreis und Gerade:** Passante (kein Schnitt), **Tangente** (berührt in 1 Punkt, steht senkrecht auf dem Radius), **Sekante** (schneidet in 2 Punkten).
- **Satz des Thales:** Liegt C auf dem Kreis über der Strecke AB (AB = Durchmesser), ist der Winkel bei C **90°**.
- **Umfangswinkelsatz:** Umfangswinkel über derselben Sehne sind gleich; der **Mittelpunktswinkel** ist doppelt so groß wie der Umfangswinkel.
- **Kreisteile:** Kreisbogen, Kreissektor (Tortenstück), Kreissegment.

## 1.7 Flächen- und Umfangsberechnung
| Figur | Fläche A | Umfang U |
|-------|----------|----------|
| Rechteck | a · b | 2·(a + b) |
| Quadrat | a² | 4·a |
| Parallelogramm | a · h | 2·(a + b) |
| Dreieck | ½ · g · h | a + b + c |
| Trapez | ½ · (a + c) · h | Summe der Seiten |
| Kreis | π · r² | 2·π·r (= π·d) |
| Kreissektor (Winkel φ) | (φ/360°) · π · r² | Bogen b = (φ/360°)·2πr |

**Beispiel (Bau):** Wandfläche 4,50 m × 2,60 m = **11,7 m²**; abzüglich Fenster 1,2 m × 1,0 m = 1,2 m² → zu verputzen **10,5 m²**.

---

# 2 Trigonometrie
Zusammenhang zwischen **Winkeln und Seitenlängen** – Grundlage für Vermessung, Getriebe, Statik.

## 2.1 Sinus, Kosinus, Tangens
Im **rechtwinkligen** Dreieck, bezogen auf den Winkel α:
- **sin α = Gegenkathete / Hypotenuse**
- **cos α = Ankathete / Hypotenuse**
- **tan α = Gegenkathete / Ankathete** (= sin α / cos α)

> **Merkspruch:** „**GAGA – Hühner AH**": **G**egenkathete/**H**ypotenuse, **A**nkathete/**H**ypotenuse, **G**egen/**A**nkathete.

**Beispiel:** Rechtwinkliges Dreieck, α = 30°, Hypotenuse c = 10 m.
- Gegenkathete a = c · sin 30° = 10 · 0,5 = **5 m**
- Ankathete b = c · cos 30° = 10 · 0,866 = **8,66 m**

**Winkel gesucht:** Umkehrfunktionen sin⁻¹, cos⁻¹, tan⁻¹ (arcsin …).
- tan α = 5/8,66 = 0,577 → α = tan⁻¹(0,577) = **30°**.

**Bau-Anwendung:** Dachneigung, Böschungswinkel, Rampensteigung (tan = Höhe/Länge).

## 2.2 Trigonometrische Funktionen
Trägt man sin/cos/tan über dem Winkel auf, entstehen **periodische Kurven**:
- **Sinus-/Kosinusfunktion:** Wellen, Wertebereich −1 … +1, Periode 360°. Kosinus = um 90° verschobener Sinus.
- **Tangensfunktion:** Periode 180°, Polstellen bei 90°, 270° (dort nicht definiert).

## 2.3 Berechnungen im allgemeinen Dreieck
Für **beliebige** (auch nicht rechtwinklige) Dreiecke:
- **Sinussatz:** **a / sin α = b / sin β = c / sin γ** — nutzen, wenn Seite + Gegenwinkel bekannt sind.
- **Kosinussatz:** **c² = a² + b² − 2·a·b·cos γ** — nutzen bei (SWS) zwei Seiten + Zwischenwinkel oder (SSS) drei Seiten. *(Sonderfall γ = 90°: cos 90° = 0 → wieder Pythagoras.)*
- Für stumpfe Winkel gilt: sin(180° − α) = sin α, cos(180° − α) = −cos α.

## 2.4 Bogenmaß
Winkel statt in Grad im **Bogenmaß** (Radiant): Vollkreis = 2π. Umrechnung: **rad = (π/180°) · Grad**. Beispiele: 90° = π/2 · 180° = π · 360° = 2π.

---

# 3 Stereometrie
Geometrie der **Körper** (3D): **Volumen V** (Rauminhalt) und **Oberfläche O**.

| Körper | Volumen V | Oberfläche O |
|--------|-----------|--------------|
| Quader | a·b·c | 2·(a·b + a·c + b·c) |
| Würfel | a³ | 6·a² |
| Prisma | Grundfläche G · Höhe h | 2·G + Mantel |
| Zylinder | π·r²·h | 2·π·r² + 2·π·r·h |
| Pyramide | ⅓·G·h | G + Mantelflächen |
| Kegel | ⅓·π·r²·h | π·r² + π·r·s (s = Mantellinie) |
| Kugel | (4/3)·π·r³ | 4·π·r² |
| Kegel-/Pyramidenstumpf | (h/3)·(G₁ + √(G₁·G₂) + G₂) | Grund + Deck + Mantel |

**Beispiel (Bau):** Betonfundament als Quader 2,0 m × 1,5 m × 0,4 m → V = **1,2 m³** Beton.
**Beispiel Zylinder:** Rohr r = 0,3 m, h = 5 m → V = π·0,3²·5 = **1,41 m³**.

---

# ✅ Lernkontrolle
- Winkelarten und Winkelsätze (Scheitel-, Neben-, Stufen-, Wechselwinkel) anwenden.
- **Strahlensätze** zum indirekten Messen nutzen.
- **Pythagoras** vorwärts und umgestellt rechnen.
- **sin/cos/tan** im rechtwinkligen Dreieck (Seite und Winkel bestimmen).
- **Sinussatz / Kosinussatz** im allgemeinen Dreieck auswählen und anwenden.
- **Flächen & Umfänge** ebener Figuren und **Volumen & Oberfläche** der Körper berechnen.

→ Karteikarten: `Karteikarten/Semester-1/Mathematik_LM4.csv` · Nachschlagen: `Lexikon/mathematik.md`
