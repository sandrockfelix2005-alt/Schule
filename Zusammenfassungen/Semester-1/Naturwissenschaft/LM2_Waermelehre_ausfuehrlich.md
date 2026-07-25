# Naturwissenschaft – Lernmodul 2 · AUSFÜHRLICH (Nachschlagewerk)
## Grundlagen der Wärmelehre darstellen

> Quelle: `Unterlagen/Semester-1/Naturwissenschaft/Naturwissenschaft_Lernmodul-2.txt`
> 📄 **Zwei Varianten:** [← Kompakt-Fassung](LM2_Waermelehre_kompakt.md) · Diese **ausführliche** Fassung mit Formeln, Erklärungen und Bau-Bezug.
> 📐 Formelsammlung (Prüfungshilfsmittel): `Unterlagen/Semester-1/Naturwissenschaft/Naturwissenschaft_Formeln.txt`

**Inhalt**
1. [Wärme und Temperatur](#1-wärme-und-temperatur) · [1.1 Wärmeausdehnung](#11-wärmeausdehnung) · [1.2 Zustandsänderungen bei Gasen](#12-zustandsänderungen-bei-gasen) · [1.3 Ausbreitung der Wärme](#13-ausbreitung-der-wärme)
2. [Wärme als Energieart und Energieträger](#2-wärme-als-energieart-und-energieträger) · [2.1 Wärmemenge & 1. Hauptsatz](#21-wärmemenge-und-erster-hauptsatz) · [2.2 Aggregatzustand](#22-änderung-des-aggregatzustandes) · [2.3 Wärme als Energieträger](#23-wärme-als-energieträger)

---

# 1 Wärme und Temperatur

**Temperatur** ist ein Maß für die mittlere Bewegungsenergie der Teilchen. **Wärme** dagegen ist übertragene Energie.

**Temperaturskalen und Umrechnung:**
> **T = 273,15 K + ϑ·K/°C**   bzw.   **ϑ = (T − 273,15 K)·°C/K**

- **T** = absolute Temperatur in **Kelvin [K]** (Kelvin-Skala)
- **ϑ** (theta) = Temperatur in **Grad Celsius [°C]**
- **Absoluter Nullpunkt:** 0 K = −273,15 °C — tiefer geht es nicht.
- Eine **Temperaturdifferenz** ist in K und °C **gleich groß** (ΔT = Δϑ).

## 1.1 Wärmeausdehnung
Erwärmte Körper dehnen sich aus – wichtig für Dehnfugen im Bauwesen!

**Längenausdehnung fester Körper**
> Näherung: **Δl = α · l₁ · Δϑ**   ·   **l₂ = l₁ · (1 + α · Δϑ)**

- α = **Längenausdehnungskoeffizient** [1/K], stoffabhängig
- l₁ = Anfangslänge, l₂ = Endlänge, Δϑ = ϑ₂ − ϑ₁ = Temperaturänderung
- *(Exakte Formeln beziehen sich auf l₀ bei 0 °C: Δl = α·l₀·Δϑ.)*

**Beispiel (Bau):** Ein 12 m langer Stahlträger (α ≈ 12·10⁻⁶ 1/K) erwärmt sich um 30 K:
Δl = 12·10⁻⁶ · 12 m · 30 = **4,32 mm** → deshalb braucht es Dehnfugen und Gleitlager.

**Volumenausdehnung fester und flüssiger Körper**
> **ΔV = γ · V₁ · Δϑ**   ·   **V₂ = V₁ · (1 + γ · Δϑ)**   ·   für **feste Körper gilt γ = 3α**

γ = Volumenausdehnungskoeffizient. *(Bei Wasser gilt die Anomalie: zwischen 0 °C und 4 °C zieht es sich beim Erwärmen zusammen.)*

## 1.2 Zustandsänderungen bei Gasen
Bei Gasen hängen **Druck p, Volumen V und Temperatur T** zusammen.

> **Allgemeine Zustandsgleichung des idealen Gases:** **p · V / T = konstant**
> also **p₁·V₁ / T₁ = p₂·V₂ / T₂** (T immer in **Kelvin** einsetzen!)

**Die drei Sonderfälle:**

| Zustandsänderung | konstant | Gesetz | Merksatz |
|------------------|----------|--------|----------|
| **isobar** | Druck p | **V₁/V₂ = T₁/T₂** (Gay-Lussac) | wärmer → größeres Volumen |
| **isochor** | Volumen V | **p₁/p₂ = T₁/T₂** (Amontons) | wärmer → höherer Druck |
| **isotherm** | Temperatur T | **p₁·V₁ = p₂·V₂** (Boyle-Mariotte) | mehr Druck → weniger Volumen |

Der **isobare Ausdehnungskoeffizient** beträgt γ = 1/273,15 K ≈ 3,661·10⁻³ K⁻¹ (für ideale Gase).

**Beispiel:** Ein Gas hat bei 300 K einen Druck von 2 bar (V konstant). Welcher Druck herrscht bei 450 K?
p₂ = p₁ · T₂/T₁ = 2 · 450/300 = **3 bar**.

## 1.3 Ausbreitung der Wärme
Wärme wandert immer **vom wärmeren zum kälteren** Körper. Drei Arten:

1. **Wärmeleitung** – Energieübertragung im Stoff ohne Materialtransport (Metalle leiten gut, Dämmstoffe schlecht).
2. **Konvektion (Wärmeströmung)** – Transport durch strömende Flüssigkeiten/Gase (Heizkörper, Luftzirkulation).
3. **Wärmestrahlung** – Übertragung durch elektromagnetische Wellen, auch im Vakuum (Sonne).

**Wärmestrom (Wärmeleitung durch eine Wand):**
> **Φ = Q / t = λ · A · (ϑ₁ − ϑ₂) / l**   [W]

- λ = **Wärmeleitfähigkeit** [W/(m·K)] – klein = gute Dämmung
- A = Querschnittsfläche, l = Dicke der Wand, (ϑ₁ − ϑ₂) = Temperaturgefälle

**Bau-Bezug:** Genau diese Größe steckt hinter U-Wert/Wärmedämmung – je kleiner λ und je dicker die Dämmschicht l, desto kleiner der Wärmestrom. Umrechnung: 1 kWh = 3,6 · 10⁶ J.

---

# 2 Wärme als Energieart und Energieträger

## 2.1 Wärmemenge und erster Hauptsatz
> **1. Hauptsatz der Wärmelehre:** **ΔU = Q + W**

Die **innere Energie U** eines Systems ändert sich durch zugeführte/abgeführte **Wärme Q** und **mechanische Arbeit W**. (Energieerhaltung, auf Wärme angewandt.)

**Wärmemenge zum Erwärmen eines Körpers:**
> **Q = c · m · Δϑ**   [1 J = 1 Ws = 1 Nm]

- **c = spezifische Wärmekapazität** [kJ/(kg·K)] – wie viel Energie 1 kg eines Stoffes um 1 K erwärmt.
  Beispiele: Wasser c ≈ 4,19 kJ/(kg·K) (sehr hoch!), Stahl ≈ 0,48, Beton ≈ 0,88.
- **Wärmekapazität** eines Körpers: **C = c · m** [J/K]
- **Molare Wärmekapazität:** C_m = M_r · c (M_r = molare Masse)

**Beispiel:** 50 l Wasser (m = 50 kg) von 15 °C auf 60 °C erwärmen:
Q = 4,19 · 50 · 45 = **9427,5 kJ ≈ 9,43 MJ ≈ 2,62 kWh**.

**Mischungsregel (Energieerhaltungssatz):**
> **Q_ab = Q_auf** — die vom warmen Körper abgegebene Wärme ist gleich der vom kalten aufgenommenen.
> c₁·m₁·(ϑ₁ − ϑ_m) = c₂·m₂·(ϑ_m − ϑ₂) → daraus die Mischtemperatur ϑ_m berechnen.

## 2.2 Änderung des Aggregatzustandes
Beim Wechsel des Aggregatzustands (fest ↔ flüssig ↔ gasförmig) bleibt die **Temperatur konstant** – die zugeführte Energie geht vollständig in die Umwandlung.

> **Spezifische Schmelzwärme:** **q_m = Q_m / m**  →  **Q_m = q_m · m**  [kJ/kg]
> **Spezifische Verdampfungswärme:** **r_v = Q_v / m**  →  **Q_v = r_v · m**  [kJ/kg]

- **Schmelzen/Erstarren** bei der Schmelztemperatur (Wasser: q_m ≈ 334 kJ/kg bei 0 °C)
- **Verdampfen/Kondensieren** bei der Siedetemperatur (Wasser: r_v ≈ 2257 kJ/kg bei 100 °C)
- Erstarren und Kondensieren geben dieselbe Energiemenge wieder **ab**.

**Vollständiger Erwärmungsvorgang** (z. B. Eis → Dampf) besteht aus abwechselnd „schrägen" Abschnitten (Q = c·m·Δϑ) und „waagerechten" Haltepunkten (Q = q_m·m bzw. r_v·m).

## 2.3 Wärme als Energieträger
Wärme wird technisch als Energieträger genutzt (Heizung, Wärmekraftmaschinen). Aus zugeführter Wärme lässt sich nur ein Teil in mechanische Arbeit umwandeln – der Rest ist Abwärme, beschrieben über den **Wirkungsgrad** η = W_nutz / Q_zu (vgl. LM1).
**Heizwert** von Brennstoffen: Q = m · H (H = Heizwert in kJ/kg bzw. kJ/m³).

---

# ✅ Lernkontrolle
- Zwischen **Celsius und Kelvin** umrechnen; absoluten Nullpunkt kennen.
- **Längen- und Volumenausdehnung** berechnen (γ = 3α) und die Bedeutung von Dehnfugen erklären.
- Die **Gasgesetze** (isobar, isochor, isotherm) und die allgemeine Zustandsgleichung anwenden – T stets in Kelvin.
- Die drei **Wärmeausbreitungsarten** unterscheiden und den **Wärmestrom** berechnen (Dämmung!).
- Den **1. Hauptsatz** formulieren; **Q = c·m·Δϑ** sicher anwenden.
- **Mischungsaufgaben** über Q_ab = Q_auf lösen.
- **Schmelz- und Verdampfungswärme** berechnen und wissen, dass die Temperatur dabei konstant bleibt.

→ Karteikarten: `Karteikarten/Semester-1/Naturwissenschaft_LM2.csv` · Übungen: `Uebungsaufgaben/Semester-1/Naturwissenschaft_LM2_Uebungen.md`
