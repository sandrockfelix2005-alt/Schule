# -*- coding: utf-8 -*-
"""Ergaenzt lerntool.html um die Deutsch-Module LM2 und LM4.

Traegt nach: Karteikarten (DECKS), Uebungen (UEB), Zusammenfassungen (FACH)
und Lexikoneintraege (LEX). Das Skript ist idempotent - vorhandene Bloecke
werden ersetzt, nicht verdoppelt.
"""
import re, pathlib

P = pathlib.Path(__file__).resolve().parent.parent / 'lerntool.html'
h = P.read_text(encoding='utf-8')


def js(s):
    """Als JS-String-Literal in einfachen Anfuehrungszeichen."""
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'").replace('</', "<\\/") + "'"


def karten(paare):
    return ',\n  '.join('[%s,%s]' % (js(a), js(b)) for a, b in paare)


def eintragen(h, bereich, ende, schluessel, liste, vor):
    """Traegt einen Block NUR innerhalb des genannten Bereichs ein.

    Wichtig: Das Aufraeumen eines vorhandenen Blocks muss auf den Bereich
    begrenzt sein. Sonst loescht der UEB-Durchlauf den gleichnamigen Block,
    den der DECKS-Durchlauf kurz zuvor eingefuegt hat.
    """
    a = h.index(bereich); b = h.index(ende, a)
    teil = h[a:b]
    if '"%s":[' % schluessel in teil:
        teil = re.sub(r'\n "%s":\[.*?\n \],' % re.escape(schluessel), '', teil, count=1, flags=re.S)
    j = teil.index(vor)
    teil = teil[:j] + '"%s":[\n  %s\n ],\n ' % (schluessel, karten(liste)) + teil[j:]
    return h[:a] + teil + h[b:]

# ---------------------------------------------------------------- Karteikarten
DECK_LM4 = [
 ("Woran erkennst du einen Nebensatz?",
  "Das konjugierte Verb steht ganz am Ende. Im Hauptsatz steht es an zweiter Stelle."),
 ("Wie viele Kommas braucht ein eingeschobener Nebensatz?",
  "Zwei – eines vorn, eines hinten. Das zweite wird am häufigsten vergessen."),
 ("Steht vor „und“ in einer Aufzählung ein Komma?",
  "Nein. Zement, Sand, Kies und Wasser – kein Komma vor dem „und“."),
 ("Wann steht ein Komma vor „und“?",
  "Wenn zwei vollständige Hauptsätze verbunden werden – dort ist es erlaubt, aber nicht Pflicht."),
 ("Komma bei „sowohl … als auch“?",
  "Nein. Ebenso kein Komma bei „entweder … oder“ und „weder … noch“. Aber ein Komma vor „sondern“."),
 ("Wann ist das Komma bei einer Infinitivgruppe Pflicht?",
  "Bei um/ohne/statt/anstatt/außer/als + zu, bei einem Hinweiswort (es, daran, darauf) und beim Nachtrag."),
 ("Komma nach einer Zeitangabe am Satzanfang?",
  "Nein. „Am Montag beginnt die Abnahme.“ – ein vorangestelltes Satzglied bekommt kein Komma."),
 ("das oder dass – wie prüfst du?",
  "Ersatzprobe: Passt „dieses, jenes, welches“? Ja → das (ein s). Nein → dass (zwei s)."),
 ("Wann schreibt man ß, wann ss?",
  "ß nach langem Vokal und nach Doppellaut (Maß, heiß, außen), ss nach kurzem Vokal (Masse, Fluss)."),
 ("Was ist der Unterschied zwischen Masse und Maße?",
  "Masse (kurzes a) = Menge, Gewicht. Maße (langes a) = Mehrzahl von Maß, also Abmessungen."),
 ("Wann wird ein Konsonant verdoppelt?",
  "Nach kurzem, betontem Vokal: Bett, Kamm, offen. k wird zu ck, z wird zu tz."),
 ("Wo steht das Dehnungs-h?",
  "Fast nur vor l, m, n, r: Zahl, Lehm, ohne, Jahr. Merksatz: „Vor l, m, n, r – das h ist da.“"),
 ("Was ist das Stammprinzip?",
  "Wörter mit demselben Stamm werden gleich geschrieben: Wand von Wände, brennen von Brand."),
 ("Wie prüfst du am Wortende, ob b/d/g oder p/t/k?",
  "Verlängern: „Kalp“ → die Kälber → Kalb. „Wek“ → die Wege → Weg."),
 ("Welche Wörter sind Signalwörter für Großschreibung?",
  "Artikel (das Prüfen), Verschmelzungen (beim, im, zum), Possessivpronomen (sein Bestes) und etwas/nichts/viel/wenig/alles."),
 ("Wie heißt der Einsetz-Test bei der Großschreibung?",
  "Lässt sich ein Artikel oder ein Adjektiv einschieben, ist es ein Substantiv: „bei dem sorgfältigen Betonieren“ → groß."),
 ("Groß oder klein: montags / am Montag?",
  "montags klein (Adverb auf -s), am Montag groß (Artikel „am“ = „an dem“)."),
 ("Wie schreibt man die Anrede im Geschäftsbrief?",
  "Sie, Ihr, Ihnen immer groß. du/dein klein (im Brief darf man sie großschreiben)."),
 ("Zusammen oder getrennt – welche Frage entscheidet?",
  "Ist eine neue, eigenständige Bedeutung entstanden? Ja → zusammen. Nein → getrennt. Im Zweifel getrennt."),
 ("Wann wird Substantiv + Verb getrennt geschrieben?",
  "Wenn das Substantiv noch echt ist: Maß nehmen, Auto fahren – getrennt und groß. Verblasst: teilnehmen, stattfinden – zusammen und klein."),
 ("Wann ist der Bindestrich Pflicht?",
  "Bei Ziffer + Wort (3-Zimmer-Wohnung), Einzelbuchstabe + Wort (T-Träger) und Abkürzung + Wort (DIN-Norm)."),
 ("Wörtliche Rede: Begleitsatz hinten – welches Zeichen?",
  "Der Punkt wird zum Komma: „Die Abnahme ist morgen“, sagte der Polier. Danach geht es klein weiter."),
 ("Was passiert mit Frage- und Ausrufezeichen in der wörtlichen Rede?",
  "Sie bleiben stehen, das Komma kommt zusätzlich dahinter: „Kommst du?“, fragte er."),
 ("Wie bildest du den Konjunktiv I?",
  "Infinitivstamm + e + Endung: gehen → er gehe, haben → er habe, sein → er sei (unregelmäßig)."),
 ("Wann weichst du auf den Konjunktiv II aus?",
  "Wenn Konjunktiv I und Indikativ gleich aussehen: „sie prüfen“ → „sie prüften“ oder „sie würden prüfen“."),
 ("Welche Protokollart verlangt welche Redeform?",
  "Wortprotokoll: wörtliche Rede. Verlaufsprotokoll: indirekte Rede im Konjunktiv I. Ergebnisprotokoll: sachliche Feststellung."),
 ("In welcher Zeitform steht ein Bericht?",
  "Im Präteritum – der Vorgang ist abgeschlossen. „Der Bauhelfer stürzte …“"),
 ("In welcher Zeitform steht eine Beschreibung?",
  "Im Präsens – der Gegenstand oder Vorgang ist allgemeingültig so. „Der Winkelschleifer besteht aus …“"),
 ("Welche Form haben Bedienungsanleitung und Rezept?",
  "Imperativ oder Infinitiv: „Leiter auf ebenem Untergrund aufstellen“ oder „Stellen Sie die Leiter auf“."),
 ("Wie bildest du das Passiv?",
  "Akkusativobjekt wird Subjekt, Verb wird zu werden + Partizip II, altes Subjekt wird zu „von“ + Dativ. Die Zeitform bleibt."),
 ("Perfekt Passiv: worden oder geworden?",
  "worden. „Das Gerüst ist geprüft worden.“ – geworden gehört zum Vollverb: „Er ist Techniker geworden.“"),
 ("Was unterscheidet Vorgangs- und Zustandspassiv?",
  "Vorgang: werden + Partizip (Das Gerüst wird abgenommen – läuft gerade). Zustand: sein + Partizip (Das Gerüst ist abgenommen – fertig)."),
 ("Warum ist zu viel Passiv im Bericht schlecht?",
  "Weil nicht mehr erkennbar ist, wer gehandelt hat. Im Unfallbericht ist das eine Haftungsfrage, keine Stilfrage."),
 ("Welche Satzglieder gibt es?",
  "Subjekt, Prädikat, Akkusativ-, Dativ-, Genitiv- und Präpositionalobjekt sowie Adverbiale."),
 ("Wie findest du Satzglieder?",
  "Umstellprobe: Ein Satzglied lässt sich als Ganzes an den Satzanfang stellen. Vor dem Prädikat steht immer nur eines."),
 ("Was ist die Satzklammer?",
  "Die beiden Teile eines mehrteiligen Prädikats: „hebt … an“, „hat … geprüft“. Dazwischen kommt nie ein Komma."),
 ("Wie unterscheidest du Adjektiv und Adverb?",
  "Das Adjektiv beschreibt ein Substantiv und ist steigerbar (der schnelle Bagger). Das Adverb beschreibt das Verb und bleibt unverändert (er arbeitet dort)."),
 ("Wann setzt du zwischen zwei Adjektive ein Komma?",
  "Wenn die und-Probe funktioniert: ein großer, schwerer Träger (groß und schwer ✓). Aber: ein großer Stahlträger (kein Komma)."),
 ("Komma vor „wie“?",
  "Beim bloßen Vergleich nein (so lang wie geplant). Wenn „wie“ einen Nebensatz einleitet ja (so, wie er es gesagt hatte)."),
 ("Wann setzt du einen Apostroph?",
  "Nur für weggelassene Buchstaben (geht’s) und beim Genitiv von Namen auf s/ß/x/z (Klaus’ Werkzeug). Nie vor Plural-s."),
 ("Bindestrich oder Gedankenstrich?",
  "Bindestrich kurz, ohne Leerzeichen (DIN-Norm). Gedankenstrich lang, mit Leerzeichen (Der Termin – längst gesetzt – fiel aus)."),
 ("Groß oder klein nach dem Doppelpunkt?",
  "Folgt ein ganzer Satz oder wörtliche Rede → groß. Folgt eine Aufzählung ohne Satz → klein (Substantive natürlich groß)."),
]

DECK_LM2 = [
 ("Was unterscheidet Meinung und Argument?",
  "Die Meinung behauptet nur. Das Argument begründet und belegt."),
 ("Woraus besteht ein vollständiges Argument?",
  "Dreischritt: Behauptung – Begründung – Beispiel/Beleg. Ohne Beleg bleibt es behauptet."),
 ("Welche Eigenschaften braucht eine These?",
  "Sie muss strittig, klar und überprüfbar sein. Eine Tatsache ist keine These."),
 ("Welche Argumentart hat das größte Gewicht?",
  "Das Faktenargument (nachprüfbare Daten), danach das Autoritätsargument (Normen, Gesetze, Fachleute)."),
 ("Welche Argumentart ist am schwächsten?",
  "Das Erfahrungsargument. Es taugt als Beispiel hinter einem Faktenargument, aber nicht allein."),
 ("In welcher Reihenfolge ordnest du Argumente?",
  "Vom schwächsten zum stärksten. Der Leser behält das Letzte am besten."),
 ("Was ist ein Zirkelschluss?",
  "Die Begründung wiederholt nur die These: „Fertigteile sind günstiger, weil sie weniger kosten.“"),
 ("Was ist eine Scheinkausalität?",
  "Eine zeitliche Folge wird als Ursache gedeutet: „Seit der neuen Schalung gibt es Risse, also liegt es an der Schalung.“"),
 ("Was ist eine Scheinalternative?",
  "Es werden nur zwei Möglichkeiten dargestellt, obwohl es mehr gibt: „Entweder Fertigteile oder Bauzeitverzug.“"),
 ("Welche zwei Arten der Erörterung gibt es?",
  "Die steigernde (lineare) – eine Seite, Argumente steigern sich. Und die dialektische – Pro gegen Kontra."),
 ("Woran erkennst du, welche Erörterungsart gefragt ist?",
  "„Stellung nehmen“, „diskutieren“, „sollte“, „Vor- und Nachteile“ → dialektisch. „Gründe, Ursachen, Folgen“ → steigernd."),
 ("Wie ist die dialektische Erörterung aufgebaut?",
  "Einleitung – Gegenposition zuerst – eigene Position zuletzt – Schluss mit begründeter Entscheidung."),
 ("Warum kommt die eigene Position zuletzt?",
  "Weil der Leser das zuletzt Gelesene am besten behält."),
 ("Womit endet die Einleitung einer Erörterung?",
  "Immer mit der Fragestellung: „Es stellt sich die Frage, ob …“"),
 ("Was gehört nicht in den Schluss einer Erörterung?",
  "Neue Argumente. Was dort zum ersten Mal auftaucht, fehlt im Hauptteil."),
 ("Wie viel Zeit planst du für Sammlung und Gliederung?",
  "Etwa ein Drittel. Ohne Gliederung verlierst du den roten Faden und bekommst den Schluss nicht hin."),
 ("Was ist der Perspektivwechsel?",
  "Das Thema aus fünf Blickwinkeln durchgehen: Betrieb, Mitarbeiter, Bauherr, Gesellschaft, Recht. Liefert fast immer genug Argumente."),
 ("Wie unterscheidest du Nachricht und Kommentar?",
  "Enthält der Text eine Bewertung? „Kosten stiegen um 12 %“ = Nachricht. „um alarmierende 12 %“ = Kommentar."),
 ("Welche sechs Angaben gehören in den Einleitungssatz einer Textanalyse?",
  "Textart, Titel, Autor, Erscheinungsdatum, Quelle und Thema."),
 ("In welcher Zeitform steht die Inhaltsangabe?",
  "Im Präsens – immer. Und in eigenen Worten, ohne eigene Meinung."),
 ("Wie gibst du wörtliche Rede in der Inhaltsangabe wieder?",
  "In indirekter Rede, ohne Anführungszeichen."),
 ("Wie deutest du ein sprachliches Mittel?",
  "Dreischritt: zitieren – benennen – Wirkung beschreiben. Ohne Wirkungsaussage gibt es keine Punkte."),
 ("Was bewirkt die Metapher „Die Baukosten explodieren“?",
  "Sie stellt eine gleichmäßige Entwicklung als plötzliche Katastrophe dar und soll den Leser alarmieren."),
 ("Wie zitierst du richtig?",
  "Wörtlich in Anführungszeichen mit Zeilenangabe: „Bauen wird zum Luxus“ (Z. 1). Auslassungen mit […]."),
 ("Was ist ein Wortfeld und warum ist es wichtig?",
  "Eine Häufung von Wörtern aus einem Bereich (Krieg, Krankheit, Geld). Sie verrät, wie der Autor den Sachverhalt bewertet."),
 ("Wie ist eine vollständige Textanalyse aufgebaut?",
  "Einleitung – Inhaltsangabe – Aufbau – Sprache – Absicht – Stellungnahme."),
 ("Wo darfst du deine eigene Meinung sagen?",
  "Nur in der Stellungnahme – und dort jede Bewertung mit Begründung."),
]

for schluessel, liste in [('Deutsch LM2 (Argumentation)', DECK_LM2),
                          ('Deutsch LM4 (Sprachregeln)',  DECK_LM4)]:
    h = eintragen(h, 'const DECKS', 'const UEB', schluessel, liste, '"Deutsch LM1"')

# ---------------------------------------------------------------- Uebungen
UEB_LM4 = [
 ("Kommasetzung. Setze alle Kommas: <i>Der Bauleiter der die Abnahme leitete stellte fest dass die Bewehrung fehlte obwohl sie im Plan eingezeichnet war.</i>",
  "Der Bauleiter<b>,</b> der die Abnahme leitete<b>,</b> stellte fest<b>,</b> dass die Bewehrung fehlte<b>,</b> obwohl sie im Plan eingezeichnet war.<br>Vier Kommas – jedes markiert eine Satzgrenze. Prüfe jedes Mal, ob das Verb ans Ende rutscht: leitete, fehlte, war."),
 ("Komma vor „und“. Wo steht eines, wo nicht? a) Zement Sand und Kies · b) Er prüfte die Schalung und gab sie frei · c) Der Kran hob die Last an und der Polier gab das Zeichen",
  "a) Zement<b>,</b> Sand und Kies – <b>kein</b> Komma vor „und“ in der Aufzählung.<br>b) <b>Kein</b> Komma – gleiches Subjekt, nur zwei Prädikate.<br>c) Komma <b>erlaubt</b>, nicht Pflicht: zwei vollständige Hauptsätze mit eigenen Subjekten."),
 ("Infinitivgruppen. Komma oder nicht? a) Er kam um die Abnahme durchzuführen · b) Er versuchte den Termin zu halten · c) Er begann zu arbeiten",
  "a) Er kam<b>,</b> um … – <b>Pflicht</b> (um … zu).<br>b) Er versuchte<b>,</b> den Termin zu halten – <b>freigestellt</b>, Komma empfohlen.<br>c) Er begann zu arbeiten – <b>kein</b> Komma (bloßer Infinitiv am Hauptverb)."),
 ("das oder dass. <i>Ich weiß ? ? Gerüst ? geliefert wurde mangelhaft ist.</i>",
  "Ich weiß<b>,</b> <b>dass</b> <b>das</b> Gerüst<b>,</b> <b>das</b> geliefert wurde<b>,</b> mangelhaft ist.<br>1. dass = Konjunktion (dieses passt nicht) · 2. das = Artikel · 3. das = Relativpronomen (welches passt)."),
 ("s, ss oder ß. a) die Ma?e des Raumes · b) die Betonma?e im Mischer · c) wir mü?en messen · d) drau?en",
  "a) <b>Maße</b> (langes a → ß) · b) <b>Betonmasse</b> (kurzes a → ss) · c) <b>müssen</b> (kurzes ü → ss) · d) <b>draußen</b> (Doppellaut au → ß)"),
 ("Groß oder klein. a) beim (b)etonieren · b) nichts (n)eues · c) (m)ontags · d) am (d)ienstag · e) sein (b)estes geben",
  "a) <b>Betonieren</b> (beim = bei dem) · b) <b>Neues</b> (nach nichts) · c) <b>montags</b> (Adverb auf -s) · d) <b>Dienstag</b> (am = an dem) · e) <b>Bestes</b> (nach Possessivpronomen)"),
 ("Zusammen oder getrennt. a) der Last (standhalten) · b) (Maß nehmen) · c) die Besprechung wird (stattfinden) · d) er wird (teilnehmen)",
  "a) <b>standhalten</b> – verblasst, zusammen · b) <b>Maß nehmen</b> – echtes Substantiv, getrennt und groß · c) <b>stattfinden</b> – zusammen · d) <b>teilnehmen</b> – zusammen, klein.<br>Test: Lässt sich ein Artikel einschieben? „das Maß nehmen“ ✓ → getrennt."),
 ("Wörtliche Rede. Setze die Zeichen: a) Der Polier sagte Die Abnahme ist morgen · b) Die Abnahme ist morgen sagte der Polier · c) Die Abnahme sagte der Polier ist morgen",
  "a) Der Polier sagte<b>: „</b>Die Abnahme ist morgen<b>.“</b><br>b) <b>„</b>Die Abnahme ist morgen<b>“,</b> sagte der Polier<b>.</b> – der Punkt wird zum Komma<br>c) <b>„</b>Die Abnahme<b>“,</b> sagte der Polier<b>, „</b>ist morgen<b>.“</b> – zweiter Teil klein"),
 ("Indirekte Rede. Wandle um: <i>Der Statiker sagte: „Ich habe die Berechnung geprüft und sie ist korrekt.“</i>",
  "Der Statiker sagte<b>,</b> er <b>habe</b> die Berechnung geprüft und sie <b>sei</b> korrekt.<br>Anführungszeichen und Doppelpunkt entfallen · ich → er · haben → habe · ist → sei (Konjunktiv I)."),
 ("Konjunktiv I oder Ausweichform? a) Er sagte, er (prüft/prüfe) die Statik · b) Sie sagten, sie (prüfen/prüften) die Statik",
  "a) <b>prüfe</b> – Konjunktiv I, unterscheidet sich vom Indikativ „prüft“.<br>b) <b>prüften</b> – Konjunktiv I „prüfen“ sähe aus wie der Indikativ, also Konjunktiv II. Auch richtig: „sie würden prüfen“."),
 ("Zeitform zuordnen. Welche Zeitform gehört zu: a) Unfallbericht · b) Gegenstandsbeschreibung · c) Ergebnisprotokoll · d) Bedienungsanleitung",
  "a) <b>Präteritum</b> – abgeschlossener Vorgang<br>b) <b>Präsens</b> – dauerhafte Eigenschaften<br>c) <b>Präsens</b> – der Beschluss gilt jetzt<br>d) <b>Imperativ oder Infinitiv</b> – Handlungsanweisung"),
 ("Passiv bilden. a) Der Statiker prüft die Berechnung · b) Der Polier hat das Gerüst abgenommen · c) Die Firma wird die Pläne liefern",
  "a) Die Berechnung <b>wird</b> vom Statiker <b>geprüft</b>.<br>b) Das Gerüst <b>ist</b> vom Polier <b>abgenommen worden</b>. – worden, nicht geworden!<br>c) Die Pläne <b>werden</b> von der Firma <b>geliefert werden</b>."),
 ("Satzglieder zerlegen. <i>Am Dienstag übergab der Bauleiter dem Bauherrn die Abnahmeunterlagen.</i>",
  "Am Dienstag = <b>Adverbiale der Zeit</b> · übergab = <b>Prädikat</b> · der Bauleiter = <b>Subjekt</b> · dem Bauherrn = <b>Dativobjekt</b> · die Abnahmeunterlagen = <b>Akkusativobjekt</b>.<br>Probe: jedes Glied lässt sich als Ganzes an den Satzanfang stellen."),
 ("Prüfungsnaher Fließtext. Setze alle Kommas: <i>Am Dienstag dem 3. März fand die Abnahme statt. Der Bauleiter Herr Krause stellte fest dass die Bewehrung fehlte. Er ordnete an die Arbeiten einzustellen und forderte den Statiker auf eine Stellungnahme abzugeben.</i>",
  "Am Dienstag<b>,</b> dem 3. März<b>,</b> fand die Abnahme statt. Der Bauleiter<b>,</b> Herr Krause<b>,</b> stellte fest<b>,</b> dass die Bewehrung fehlte. Er ordnete an<b>,</b> die Arbeiten einzustellen<b>,</b> und forderte den Statiker auf<b>,</b> eine Stellungnahme abzugeben.<br>Datumseinschub und Apposition brauchen je <b>zwei</b> Kommas, die Infinitivgruppen je eines (Hinweiswort an/auf)."),
 ("Text korrigieren. <i>Wir haben die Mase genommen und festgestellt, das die Betonmase zu groß ist. Draussen muss noch die Schallung abgebaut werden.</i>",
  "Wir haben die <b>Maße</b> genommen und festgestellt, <b>dass</b> die Beton<b>masse</b> zu groß ist. <b>Draußen</b> muss noch die <b>Schalung</b> abgebaut werden.<br>Maße (lang) ≠ Masse (kurz) · dass = Konjunktion · draußen (au → ß) · Schalung von Schale, einfaches l."),
]

UEB_LM2 = [
 ("These oder nicht? a) „Stahlbeton besteht aus Beton und Bewehrungsstahl.“ · b) „Die Technikerausbildung sollte in Vollzeit angeboten werden.“ · c) „Sicherheit ist wichtig.“",
  "a) <b>keine</b> These – nachprüfbare Tatsache<br>b) <b>These</b> ✓ – strittig und überprüfbar<br>c) <b>keine</b> These – unstrittig. Brauchbar wäre: „Die Helmpflicht sollte auch für Besucher gelten.“"),
 ("Dreischritt vervollständigen. Behauptung: <i>Bautagesberichte sollten täglich geschrieben werden.</i> Ergänze Begründung und Beleg.",
  "<b>Begründung:</b> Denn nur der tagesaktuelle Eintrag gibt Wetter, Personalstärke und Behinderungen korrekt wieder; nach einer Woche lässt sich der einzelne Tag nicht mehr rekonstruieren.<br><b>Beleg:</b> Gerichte verlangen bei Nachtragsstreitigkeiten den lückenlosen Nachweis der Behinderung für jeden einzelnen Tag – ein Wochenbericht erfüllt das nicht."),
 ("Argumentart bestimmen. a) „Die DIN 4420 schreibt die Gerüstprüfung vor.“ · b) „In unserem Betrieb hat sich das bewährt.“ · c) „Die Unfallzahlen sanken um 23 %.“ · d) „Wer müde ist, macht mehr Fehler.“",
  "a) <b>Autoritätsargument</b> (Norm) – hohes Gewicht<br>b) <b>Erfahrungsargument</b> – niedriges Gewicht<br>c) <b>Faktenargument</b> – höchstes Gewicht<br>d) <b>Plausibilitätsargument</b> – mittel"),
 ("Fehlschluss erkennen. a) „Fertigteile sind günstiger, weil sie weniger kosten.“ · b) „Seit der neuen Schalung gibt es Risse – die Schalung ist schuld.“ · c) „Entweder wir arbeiten samstags oder der Termin platzt.“",
  "a) <b>Zirkelschluss</b> – die Begründung wiederholt die These<br>b) <b>Scheinkausalität</b> – zeitliche Folge ist keine Ursache<br>c) <b>Scheinalternative</b> – es gibt weitere Wege: zweite Schicht, mehr Personal, Bauzeitverlängerung"),
 ("Erörterungsart bestimmen. a) „Erörtern Sie die Ursachen für Bauverzögerungen.“ · b) „Sollte eine Helmpflicht für Besucher gelten? Nehmen Sie Stellung.“ · c) „Diskutieren Sie Vor- und Nachteile der Fertigteilbauweise.“",
  "a) <b>steigernd</b> (linear) – gefragt sind Ursachen, eine Seite<br>b) <b>dialektisch</b> – „sollte“ + „Stellung nehmen“<br>c) <b>dialektisch</b> – Vor- und Nachteile verlangt zwei Seiten"),
 ("Argumente sortieren. These: <i>Rauchen sollte auf Baustellen verboten werden.</i> A) Raucherpausen kosten Arbeitszeit · B) Brandschutz bei Dämmstoffen und Lösemitteln · C) Kippen verschmutzen die Baustelle",
  "Reihenfolge <b>C → A → B</b>.<br>C ist am leichtesten zu entkräften (Aschenbecher), A ist messbar aber Pausen stehen zu, <b>B ist sicherheitsrelevant und durch Brandschutzvorschriften gedeckt</b> – das stärkste Argument gehört ans Ende."),
 ("Gliederung schreiben. Erstelle eine Stichwortgliederung zu: <i>Sollten Bauunternehmen die Vier-Tage-Woche einführen?</i>",
  "<b>Einleitung:</b> Fachkräftemangel und Arbeitszeitdebatte<br><b>Pro 1:</b> Attraktivität für Nachwuchs · <b>Pro 2:</b> weniger Fehlzeiten · <b>Pro 3:</b> Produktivität bleibt laut Studien gleich<br><b>Kontra 1:</b> Witterungsabhängigkeit der Baustelle · <b>Kontra 2:</b> Geräte- und Gerüstmiete nach Kalendertagen · <b>Kontra 3:</b> VOB-Termine bleiben unverändert<br><b>Schluss:</b> kein pauschales Modell, stattdessen saisonal flexible Arbeitszeit<br>Die eigene Position (Kontra) steht zuletzt."),
 ("Textart bestimmen. a) „Die Baukosten stiegen 2025 um 12 Prozent, teilte das Statistische Bundesamt mit.“ · b) „Zwölf Prozent mehr – ein Schlag ins Gesicht junger Familien.“ · c) „Beton C25/30 ist nach DIN 1045-2 nachzubehandeln.“",
  "a) <b>Nachricht</b> – Fakten mit Quelle, keine Wertung<br>b) <b>Kommentar</b> – „Schlag ins Gesicht“ ist Wertung und Metapher<br>c) <b>normierender Text</b> – „ist … nachzubehandeln“, Vorschriftcharakter"),
 ("Einleitungssatz schreiben. Kommentar „Wohnen darf kein Luxus sein“ von Markus Lehmann, 8. Februar 2026, Rheinische Post, Thema Mietpreise in Großstädten.",
  "Der <b>Kommentar</b> <b>„Wohnen darf kein Luxus sein“</b> von <b>Markus Lehmann</b>, erschienen am <b>8. Februar 2026</b> in der <b>Rheinischen Post</b>, befasst sich mit <b>der Entwicklung der Mietpreise in deutschen Großstädten</b>.<br>Alle sechs Angaben müssen vorkommen: Textart, Titel, Autor, Datum, Quelle, Thema."),
 ("Inhaltsangabe korrigieren. <i>„Der Autor schrieb, dass die Mieten steigen. Dann sagte er: ‚Das ist unerträglich.‘ Ich finde, er hat recht.“</i>",
  "<b>Der Autor stellt dar, dass die Mieten in den Großstädten weiter steigen. Er bewertet diese Entwicklung als nicht hinnehmbar.</b><br>schrieb → stellt dar (Präsens) · wörtliche Rede → indirekte Rede · eigene Meinung gestrichen (gehört in die Stellungnahme)."),
 ("Sprachliches Mittel deuten. Deute: <i>„Die Baukosten explodieren.“</i>",
  "<b>Zitat:</b> „Die Baukosten explodieren.“<br><b>Benennung:</b> Metapher aus dem Bereich der Zerstörung, zugleich Hyperbel.<br><b>Wirkung:</b> Eine gleichmäßige Preissteigerung erscheint als plötzliche, unkontrollierbare Katastrophe. Der Leser soll die Entwicklung als bedrohlich empfinden.<br>Ohne den dritten Schritt gibt es keine Punkte."),
 ("Stellungnahme schreiben. Nimm Stellung zu: <i>„Die energetischen Anforderungen sind allein schuld an den hohen Baukosten.“</i>",
  "Die Behauptung greift zu kurz. Zwar verursachen die Anforderungen des Gebäudeenergiegesetzes Mehrkosten bei Dämmung und Anlagentechnik; ihr Anteil an der Kostensteigerung liegt jedoch deutlich unter der Hälfte. Mindestens ebenso stark wirken Baulandverknappung, Rohstoff- und Lohnkosten sowie der Fachkräftemangel. Hinzu kommt, dass sich die energetischen Mehrkosten über die Nutzungsdauer durch geringere Betriebskosten teilweise ausgleichen.<br>Aufbau: Position – Zugeständnis – Gegenargument mit Beleg – Fachwissen."),
]

for schluessel, liste in [('Deutsch LM2 (Argumentation)', UEB_LM2),
                          ('Deutsch LM4 (Sprachregeln)',  UEB_LM4)]:
    h = eintragen(h, 'const UEB', 'const LEX', schluessel, liste, '"Deutsch LM1"')

P.write_text(h, encoding='utf-8')
print('Karteikarten LM4: %d · LM2: %d' % (len(DECK_LM4), len(DECK_LM2)))
print('Übungen     LM4: %d · LM2: %d' % (len(UEB_LM4), len(UEB_LM2)))


# ---------------------------------------------------------------- Lexikon
LEX_NEU = [
 ("Deutsch","Komma vor Nebensatz","Zwischen Haupt- und Nebensatz steht immer ein Komma.",
  "komma kommaregel nebensatz hauptsatz zeichensetzung verbendstellung",
  "<p>Zwischen <b>Hauptsatz und Nebensatz</b> steht <b>immer</b> ein Komma – ohne Ausnahme.</p>"
  "<p><b>Erkennungszeichen:</b> Im Nebensatz steht das konjugierte Verb ganz am <b>Ende</b>, "
  "im Hauptsatz an <b>Position 2</b>.</p>"
  "<ul><li>Die Arbeit ruht<b>,</b> weil es <i>friert</i>.</li>"
  "<li>Weil es <i>friert</i><b>,</b> ruht die Arbeit.</li>"
  "<li>Die Arbeit<b>,</b> weil es <i>friert</i><b>,</b> ruht seit Montag.</li></ul>"
  "<p>Steht der Nebensatz <b>mittendrin</b>, braucht er <b>zwei</b> Kommas. Das zweite wird am häufigsten vergessen.</p>"),

 ("Deutsch","das oder dass","Ersatzprobe: dieses/welches passt → das, sonst dass.",
  "das dass ersatzprobe relativpronomen konjunktion rechtschreibung",
  "<p><b>Ersatzprobe:</b> Lässt sich <i>dieses</i>, <i>jenes</i> oder <i>welches</i> einsetzen?</p>"
  "<ul><li><b>Ja</b> → <b>das</b> (Artikel oder Relativpronomen, ein s)</li>"
  "<li><b>Nein</b> → <b>dass</b> (Konjunktion, zwei s)</li></ul>"
  "<p><b>Alle drei in einem Satz:</b> Ich habe gesehen, <b>dass</b> <b>das</b> Gerüst, <b>das</b> gestern "
  "geliefert wurde, beschädigt ist.</p>"
  "<p><b>Zweiter Test:</b> <i>dass</i> steht fast immer direkt hinter einem Komma und leitet einen "
  "Nebensatz ein, dessen Verb am Ende steht.</p>"),

 ("Deutsch","s, ss oder ß","ß nach langem Vokal und Doppellaut, ss nach kurzem.",
  "ss scharfes s eszett masse maße rechtschreibung vokal lang kurz verlängerungsprobe",
  "<p><b>ß</b> nach <b>langem</b> Vokal und nach Doppellaut: <i>Maß, Straße, heiß, außen</i>.<br>"
  "<b>ss</b> nach <b>kurzem</b> Vokal: <i>Masse, Fluss, müssen</i>.<br>"
  "<b>s</b> wenn weich gesprochen: <i>Rose, lesen, Haus</i>.</p>"
  "<p><b>Verlängerungsprobe:</b> <i>Fluss → Flüsse</i> (scharf, kurz) · <i>Haus → Häuser</i> (weich) · "
  "<i>Maß → Maße</i> (scharf, lang).</p>"
  "<p class=\"bau\">Bau-Bezug: <b>Masse</b> (kurzes a) ist die Menge oder das Gewicht, "
  "<b>Maße</b> (langes a) sind die Abmessungen. Auf der Baustelle wird das ständig verwechselt.</p>"),

 ("Deutsch","Konjunktiv I","Form der indirekten Rede: er habe, er sei, er könne.",
  "konjunktiv indirekte rede protokoll verlaufsprotokoll würde konjunktiv ii",
  "<p>Der <b>Konjunktiv I</b> zeigt an, dass du wiedergibst, was jemand gesagt hat.</p>"
  "<p><b>Bildung:</b> Infinitivstamm + e + Endung. <i>gehen → er gehe</i>, <i>haben → er habe</i>, "
  "<i>können → er könne</i>. Unregelmäßig: <i>sein → er sei</i>.</p>"
  "<p><b>Ausweichregel:</b> Sieht der Konjunktiv I aus wie der Indikativ, nimm den <b>Konjunktiv II</b> "
  "oder <i>würde</i>: <i>sie prüfen</i> → <i>sie prüften</i> oder <i>sie würden prüfen</i>.</p>"
  "<p class=\"bau\">Im <b>Verlaufsprotokoll</b> ist der Konjunktiv I Pflicht – dort gehen die meisten Punkte verloren.</p>"),

 ("Deutsch","Wörtliche Rede","Begleitsatz hinten: der Punkt wird zum Komma.",
  "wörtliche rede anführungszeichen begleitsatz redesatz zeichensetzung zitat",
  "<p>Die deutschen Anführungszeichen sind <b>„ unten und “ oben</b>.</p>"
  "<table><tr><th>Stellung</th><th>Muster</th></tr>"
  "<tr><td>Begleitsatz vorn</td><td>Er sagte<b>: „</b>Text<b>.“</b></td></tr>"
  "<tr><td>Begleitsatz hinten</td><td><b>„</b>Text<b>“,</b> sagte er<b>.</b></td></tr>"
  "<tr><td>Begleitsatz in der Mitte</td><td><b>„</b>Text<b>“,</b> sagte er<b>, „</b>text<b>.“</b></td></tr></table>"
  "<p>Beim nachgestellten Begleitsatz <b>verschwindet der Punkt</b> und wird zum Komma; danach geht es "
  "<b>klein</b> weiter. <b>Frage- und Ausrufezeichen bleiben stehen:</b> <i>„Kommst du?“, fragte er.</i></p>"),

 ("Deutsch","Zeitform je Textsorte","Bericht Präteritum, Beschreibung und Protokoll Präsens.",
  "zeitform tempus präteritum präsens bericht beschreibung protokoll anleitung imperativ",
  "<table><tr><th>Textsorte</th><th>Zeitform</th></tr>"
  "<tr><td>Bericht, Bautagesbericht, Unfallbericht</td><td><b>Präteritum</b></td></tr>"
  "<tr><td>Protokoll</td><td><b>Präsens</b></td></tr>"
  "<tr><td>Gegenstands- und Vorgangsbeschreibung</td><td><b>Präsens</b></td></tr>"
  "<tr><td>Bedienungsanleitung, Rezept</td><td><b>Imperativ / Infinitiv</b></td></tr>"
  "<tr><td>Inhaltsangabe, Erörterung</td><td><b>Präsens</b></td></tr></table>"
  "<p>Ein <b>Bericht im Präsens</b> oder eine <b>Beschreibung im Präteritum</b> ist ein inhaltlicher Fehler, "
  "nicht nur ein stilistischer.</p>"),

 ("Deutsch","Substantivierung","Jedes Wort kann zum Substantiv werden – dann groß.",
  "großschreibung substantivierung kleinschreibung signalwörter etwas nichts viel alles",
  "<p>Wird ein Wort wie ein Substantiv gebraucht, wird es <b>großgeschrieben</b> – egal, welche Wortart es war.</p>"
  "<p><b>Signalwörter davor:</b> Artikel (<i>das Prüfen</i>), Verschmelzungen (<i>beim, im, zum, ans</i>), "
  "Possessivpronomen (<i>sein Bestes</i>) und <i>etwas, nichts, viel, wenig, alles</i> "
  "(<i>etwas Wichtiges, nichts Neues</i>).</p>"
  "<p><b>Einsetz-Test:</b> Lässt sich ein Artikel oder ein Adjektiv einschieben? "
  "<i>beim Betonieren</i> → <i>bei dem sorgfältigen Betonieren</i> ✓ → Substantiv → groß.</p>"),

 ("Deutsch","Argument im Dreischritt","Behauptung – Begründung – Beispiel.",
  "argument argumentation these begründung beleg beispiel erörterung dreischritt",
  "<p>Ein vollständiges Argument hat <b>drei</b> Teile:</p>"
  "<ol><li><b>Behauptung</b> – was sage ich?</li>"
  "<li><b>Begründung</b> – warum? (<i>weil, denn, da</i>)</li>"
  "<li><b>Beispiel/Beleg</b> – woran sieht man das?</li></ol>"
  "<p>Fehlt der Beleg, bleibt das Argument <b>behauptet</b>. Genau dort gehen in der Prüfung Punkte verloren.</p>"
  "<p><b>Gewicht der Argumentarten:</b> Fakten &gt; Normen und Autorität &gt; Plausibilität &gt; Erfahrung. "
  "Ordne mehrere Argumente <b>vom schwächsten zum stärksten</b>.</p>"),

 ("Deutsch","Erörterung","Steigernd = eine Seite, dialektisch = Pro und Kontra.",
  "erörterung dialektisch steigernd linear pro kontra these antithese synthese aufsatz",
  "<table><tr><th></th><th>steigernd (linear)</th><th>dialektisch</th></tr>"
  "<tr><td>Operatorwort</td><td>„erörtern Sie die Gründe/Ursachen“</td>"
  "<td>„Stellung nehmen“, „diskutieren“, „sollte“</td></tr>"
  "<tr><td>Aufbau</td><td>schwach → stark</td><td>Gegenposition zuerst, eigene zuletzt</td></tr></table>"
  "<p><b>Blockmodell</b> (für die Prüfung empfohlen): Einleitung → alle Pro-Argumente → alle Kontra-Argumente "
  "→ Schluss mit begründeter Entscheidung.</p>"
  "<p>Die Einleitung endet <b>immer mit der Fragestellung</b>. Im Schluss stehen <b>keine neuen Argumente</b>. "
  "Plane <b>ein Drittel der Zeit</b> für Stoffsammlung und Gliederung ein.</p>"),

 ("Deutsch","Textanalyse","Einleitung, Inhalt, Aufbau, Sprache, Absicht, Stellungnahme.",
  "textanalyse inhaltsangabe textwiedergabe interpretation stellungnahme sprachliche mittel metapher",
  "<p><b>Einleitungssatz mit sechs Angaben:</b> Textart, Titel, Autor, Erscheinungsdatum, Quelle, Thema.<br>"
  "<i>Der Kommentar „Titel“ von Vorname Name, erschienen am Datum in der Quelle, behandelt Thema.</i></p>"
  "<p><b>Inhaltsangabe:</b> Präsens, eigene Worte, sachlich, keine eigene Meinung, wörtliche Rede in "
  "indirekte Rede umwandeln.</p>"
  "<p><b>Sprachliches Mittel deuten – Dreischritt:</b> zitieren (mit Zeilenangabe) → benennen → "
  "<b>Wirkung</b> beschreiben. Nur benennen reicht nicht.</p>"
  "<p><b>Aufbau:</b> Einleitung (5 %) → Inhaltsangabe (25 %) → Aufbau (10 %) → Sprache (25 %) → "
  "Absicht (15 %) → Stellungnahme (20 %).</p>"),
]

h = P.read_text(encoding='utf-8')
MARKE = ' /* --- Deutsch LM2/LM4 --- */\n'
if MARKE in h:
    i = h.index(MARKE); j = h.index('\n];\n', i)
    h = h[:i] + h[j+1:]
eintraege = MARKE + ',\n'.join(
    ' [%s,%s,%s,%s,\n  %s]' % (js(a), js(b), js(c), js(d), js(e)) for a,b,c,d,e in LEX_NEU)
i = h.index('const LEX = [')
j = h.index('\n];\n', i)
h = h[:j] + ',\n' + eintraege + h[j:]
P.write_text(h, encoding='utf-8')
print('Lexikon: %d neue Einträge' % len(LEX_NEU))
