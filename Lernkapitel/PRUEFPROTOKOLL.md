# 🔍 Prüfprotokoll der Lernkapitel

**Datum der Prüfung:** 27.08.2026 · **Umfang:** alle 23 Kapitel (434 KB)

## Was geprüft wurde

**422 Rechnungen** wurden **unabhängig nachgerechnet** – nicht stichprobenartig, sondern jede zahlenmäßige Aussage in Lehrbeispielen, Bau-Beispielen und Aufgabenlösungen.

| Bereich | geprüfte Rechnungen | Ergebnis |
|---------|--------------------:|----------|
| Mathematik LM1–LM3 | 73 | 2 Fehler gefunden und korrigiert |
| Mathematik LM4 (Geometrie, Trigonometrie, Stereometrie) | 104 | fehlerfrei |
| Naturwissenschaft LM1–LM2 | 245 | fehlerfrei |
| **Gesamt** | **422** | **2 Fehler behoben** |

Zusätzlich geprüft:
- **Interne Links** zwischen den Kapiteln: 0 defekt
- **Kapitelverweise** („Nächstes Kapitel"): vollständig und in richtiger Reihenfolge
- **Struktur**: jedes Kapitel hat Übungsaufgaben und Selbstkontrolle

## Gefundene und korrigierte Fehler

### 1. Mathe LM3 K3 – Bevölkerungswachstum, Prognose 2020
```
falsch:  N(8) = 5 650 000 · 2,32337 = 13 127 000
richtig: N(8) = 5 650 000 · 2,29648 = 12 975 000
```
Der Potenzwert 1,10951⁸ war falsch angegeben (2,32337 statt 2,29648).

### 2. Mathe LM3 K3 – Aufgabe 13.3, Prognose 2015
```
falsch:  N(7) = 5 650 000 · 2,09404 = 11 831 000
richtig: N(7) = 5 650 000 · 2,06983 = 11 695 000
```
Gleicher Fehlertyp: 1,10951⁷ war falsch angegeben.

## Nicht beanstandet

- **Rundungen** im Bereich der angegebenen Genauigkeit (z. B. R = 0,021 statt 0,0214 m²K/W) – das ist korrektes Runden, kein Fehler.
- **Einheitenwechsel** in einer Zeile (z. B. `2,875 m : 16 = 0,179 m = 179,7 mm`) – mathematisch korrekt.

## Methodik

Die Prüfung erfolgte durch **unabhängiges Nachrechnen in Python**: Jede Rechnung wurde aus der Aufgabenstellung heraus neu berechnet und mit dem im Text angegebenen Ergebnis verglichen (Toleranz 0,3–1,2 % je nach angegebener Genauigkeit). Trigonometrie, Wurzeln, Logarithmen und Potenzen wurden mit voller Maschinengenauigkeit gerechnet.

> **Hinweis:** Die Prüfung deckt die **Rechenrichtigkeit** ab. Fachliche Einordnungen (z. B. Normbezüge, Richtwerte für Reibungszahlen oder Wärmeleitfähigkeiten) sind nach bestem Wissen angegeben – bei prüfungsrelevanten Werten gilt im Zweifel die **offizielle Formelsammlung** des DAA-Technikums.
