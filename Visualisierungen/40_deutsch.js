/* ================= GRAFIKEN DEUTSCH =================
   Satzbau, Kommasetzung und der Aufbau einer Eroerterung.
   Anders als in Mathematik wird hier Text gesetzt - die Woerter
   werden einzeln gemessen und umgebrochen.
===================================================== */

/* Woerter zeilenweise setzen; liefert fuer jedes Wort seine Lage zurueck.
   Gemessen wird mit getComputedTextLength, weil die Zeichenbreite je nach
   Schrift und Geraet anders ausfaellt. */
function dsSatz(s, worte, o){
  const x0=o.x||30, breite=o.b||580, zh=o.zh||34;
  let x=x0, y=o.y||40, zeile=0;
  const lage=[];
  worte.forEach((w,i)=>{
    const t=ve(s,'text',{x:0,y:0,class:w.klasse||'dswort'},w.t);
    let br=0; try{ br=t.getComputedTextLength(); }catch(e){ br=w.t.length*8.6; }
    const abstand = w.komma ? 3 : 8;
    /* Satzzeichen kleben am vorigen Wort - sonst steht eine Lücke davor */
    if(w.komma && x>x0) x -= 7;
    if(x+br > x0+breite && x>x0){ x=x0; y+=zh; zeile++; }
    t.setAttribute('x',x); t.setAttribute('y',y);
    lage.push({x:x, y:y, b:br, zeile:zeile, el:t});
    x += br + abstand;
  });
  return {lage:lage, unten:y, zeilen:zeile+1};
}

/* ---------- 1. Kommasetzung ---------- */
/* w     = Woerter ohne Kommas
   k     = {i: nach welchem Wort das Komma steht, r: welche Regel}
   teile = Einfaerbung: {von, bis, art} mit art 'haupt' oder 'neben'
   verb  = Indizes der konjugierten Verben                                */
const KSAETZE=[
{ titel:'Relativsatz mitten im Satz',
  w:['Das','Gerüst','das','gestern','geliefert','wurde','ist','mangelhaft'],
  k:[{i:1,r:'Regel 3 – der Relativsatz beginnt'},
     {i:5,r:'Regel 3 – der Relativsatz endet (dieses Komma wird am häufigsten vergessen)'}],
  teile:[{von:0,bis:1,art:'haupt'},{von:2,bis:5,art:'neben'},{von:6,bis:7,art:'haupt'}],
  verb:[5,6],
  hinweis:'Zwei Kommas, nicht eines. Der Nebensatz steckt mitten im Hauptsatz.'},

{ titel:'Aufzählung – kein Komma vor „und“',
  w:['Wir','benötigen','Zement','Sand','Kies','und','Wasser'],
  k:[{i:2,r:'Regel 1 – Aufzählung'},{i:3,r:'Regel 1 – Aufzählung'}],
  teile:[{von:0,bis:6,art:'haupt'}],
  verb:[1],
  hinweis:'Vor „und“ steht kein Komma. Das englische Komma gibt es im Deutschen nicht.'},

{ titel:'Nebensatz hinten',
  w:['Die','Arbeit','ruht','weil','der','Untergrund','gefroren','ist'],
  k:[{i:2,r:'Regel 3 – Haupt- und Nebensatz, erkennbar am Verb „ist“ ganz am Ende'}],
  teile:[{von:0,bis:2,art:'haupt'},{von:3,bis:7,art:'neben'}],
  verb:[2,7],
  hinweis:'Das konjugierte Verb rutscht ans Satzende – das ist immer ein Nebensatz.'},

{ titel:'Vorangestellte Zeitangabe – kein Komma',
  w:['Am','Montag','beginnt','die','Abnahme','des','Gerüsts'],
  k:[],
  teile:[{von:0,bis:6,art:'haupt'}],
  verb:[2],
  hinweis:'„Am Montag“ ist nur ein Satzglied, kein Nebensatz. Hier steht kein Komma.'},

{ titel:'Apposition – wieder zwei Kommas',
  w:['Herr','Weber','der','Polier','prüfte','das','Gerüst'],
  k:[{i:1,r:'Regel 4 – die Beifügung beginnt'},
     {i:3,r:'Regel 4 – die Beifügung endet'}],
  teile:[{von:0,bis:1,art:'haupt'},{von:2,bis:3,art:'neben'},{von:4,bis:6,art:'haupt'}],
  verb:[4],
  hinweis:'Ohne das zweite Komma wird aus der Beifügung ein zweites Subjekt – der Satz bedeutet dann etwas anderes.'},

{ titel:'Infinitivgruppe mit „um … zu“',
  w:['Er','kam','um','die','Abnahme','durchzuführen'],
  k:[{i:1,r:'Regel 5 – Pflichtkomma, weil die Gruppe mit „um … zu“ eingeleitet wird'}],
  teile:[{von:0,bis:1,art:'haupt'},{von:2,bis:5,art:'neben'}],
  verb:[1],
  hinweis:'Bei um/ohne/statt/außer/als + zu ist das Komma Pflicht.'},

{ titel:'Der Prüfungssatz – vier Kommas',
  w:['Der','Bauleiter','der','die','Abnahme','leitete','stellte','fest',
     'dass','die','Bewehrung','fehlte','obwohl','sie','im','Plan','stand'],
  k:[{i:1,r:'Regel 3 – Relativsatz beginnt'},
     {i:5,r:'Regel 3 – Relativsatz endet'},
     {i:7,r:'Regel 3 – Objektsatz mit „dass“ beginnt'},
     {i:11,r:'Regel 3 – Konzessivsatz mit „obwohl“ beginnt'}],
  teile:[{von:0,bis:1,art:'haupt'},{von:2,bis:5,art:'neben'},
         {von:6,bis:7,art:'haupt'},{von:8,bis:11,art:'neben'},{von:12,bis:16,art:'neben'}],
  verb:[5,6,11,16],
  hinweis:'Vier Satzgrenzen, vier Kommas. Jedes Mal steht ein Verb am Ende: leitete, fehlte, stand.'}
];

VIZ.komma={
 titel:'Wo gehört das Komma hin?', vb:'0 0 640 288',
 was:'Wähle einen Satz und geh die drei Schritte durch. Schritt 2 färbt Haupt- und Nebensätze ein – dort, wo die Farbe wechselt, steht das Komma.',
 regler:[{k:'s',l:'Satz',min:0,max:KSAETZE.length-1,step:1,val:0,e:v=>KSAETZE[v].titel},
         {k:'t',l:'Schritt',min:0,max:2,step:1,val:2,
          e:v=>['Satz ohne Kommas','+ Satzteile einfärben','+ Kommas und Regel'][v]}],
 rechne:st=>({z:KSAETZE[st.s]}),
 werte:(st,r)=>[['Kommas im Satz', r.z.k.length===0?'keines':String(r.z.k.length),'a'],
                ['Konjugierte Verben', r.z.verb.map(i=>r.z.w[i]).join(' · '),'b'],
                ['Merksatz', r.z.hinweis,'g']],
 zeichne:(s,st,r)=>{
   const z=r.z;
   /* Wortliste aufbauen; ab Schritt 2 werden die Kommas eingesetzt */
   const liste=[];
   z.w.forEach((w,i)=>{
     const teil=(z.teile||[]).find(t=>i>=t.von&&i<=t.bis);
     let kl='dswort';
     if(st.t>=1 && teil) kl = teil.art==='neben' ? 'dsneben' : 'dshaupt';
     if(st.t>=1 && z.verb.indexOf(i)>=0) kl += ' dsverb';
     liste.push({t:w, klasse:kl});
     if(st.t>=2 && z.k.some(k=>k.i===i)) liste.push({t:',', klasse:'dskomma', komma:true});
   });
   liste.push({t:'.', klasse:'dswort', komma:true});
   const g=dsSatz(s, liste, {x:30,y:52,b:582,zh:34});

   /* Legende */
   if(st.t>=1){
     ve(s,'rect',{x:30,y:16,width:12,height:12,rx:3,fill:'var(--accent)','fill-opacity':.5});
     ve(s,'text',{x:48,y:26,class:'vtxtm'},'Hauptsatz');
     ve(s,'rect',{x:150,y:16,width:12,height:12,rx:3,fill:'var(--blue)','fill-opacity':.5});
     ve(s,'text',{x:168,y:26,class:'vtxtm'},'Nebensatz / Einschub');
     ve(s,'text',{x:360,y:26,class:'vtxtm'},'unterstrichen = konjugiertes Verb');
   }
   /* Verben unterstreichen */
   if(st.t>=1){
     let p=0;
     z.w.forEach((w,i)=>{
       const L=g.lage[p];
       if(z.verb.indexOf(i)>=0 && L)
         ve(s,'line',{x1:L.x,y1:L.y+5,x2:L.x+L.b,y2:L.y+5,
           stroke: (z.teile||[]).find(t=>i>=t.von&&i<=t.bis&&t.art==='neben') ? 'var(--blue)':'var(--accent-deep)',
           'stroke-width':2});
       p++;
       if(st.t>=2 && z.k.some(k=>k.i===i)) p++;
     });
   }
   /* Regeln unter dem Satz */
   let y=g.unten+40;
   if(st.t>=2){
     if(z.k.length===0){
       ve(s,'text',{x:30,y:y,class:'vtxtm',fill:'var(--good)'},'Hier steht kein Komma.');
       y+=24;
     }
     z.k.forEach((k,n)=>{
       ve(s,'text',{x:30,y:y,class:'vtxt',fill:'var(--accent-deep)'},'Komma '+(n+1)+':');
       ve(s,'text',{x:112,y:y,class:'vtxtm'},k.r);
       y+=24;
     });
   }
 },
 weg:(st,r)=>'<b>So gehst du vor:</b> konjugiertes Verb suchen → steht es am Satzende, ist es ein Nebensatz → Komma davor.<br>'+
   r.z.hinweis
};

/* ---------- 2. Satzglieder und die Umstellprobe ---------- */
const SGLIED=[
 {t:'Am Dienstag', l:'Adverbiale der Zeit', f:'Wann?'},
 {t:'übergab',     l:'Prädikat',            f:'Was geschah?', p:true},
 {t:'der Bauleiter', l:'Subjekt',           f:'Wer oder was?'},
 {t:'dem Bauherrn',  l:'Dativobjekt',       f:'Wem?'},
 {t:'die Unterlagen',l:'Akkusativobjekt',   f:'Wen oder was?'}
];

VIZ.satzglieder={
 titel:'Satzglieder und die Umstellprobe', vb:'0 0 640 206',
 was:'Stell ein Satzglied nach vorn. Es wandert immer <b>als Ganzes</b> – und das Prädikat bleibt dabei stur an zweiter Stelle. Genau daran erkennst du einen Hauptsatz.',
 regler:[{k:'v',l:'nach vorn stellen',min:0,max:4,step:1,val:0,
          e:v=>v===0?'Grundstellung':SGLIED[v===1?0:v].l}],
 rechne:st=>{
   /* 0 = Grundstellung; sonst wandert das gewaehlte Glied auf Platz 1 */
   const rest=SGLIED.map((g,i)=>i).filter(i=>i!==1);          /* ohne Praedikat */
   let folge;
   if(st.v===0) folge=[0,1,2,3,4];
   else { const g=rest[st.v-1]; folge=[g,1].concat(rest.filter(i=>i!==g)); }
   return {folge:folge};
 },
 werte:(st,r)=>[
   ['Vorfeld (Platz 1)', SGLIED[r.folge[0]].l,'a'],
   ['Platz 2', SGLIED[r.folge[1]].l+' – immer','b'],
   ['Probe', 'Das Glied wandert vollständig, der Satz bleibt richtig','g']],
 zeichne:(s,st,r)=>{
   /* Kopfzeilen fest, die Kaesten in eine Gruppe - die wird am Ende so
      skaliert, dass sie sicher ins Bild passt. Die Satzglieder sind je
      nach Schrift unterschiedlich breit und liefen sonst rechts heraus. */
   ve(s,'text',{x:24,y:34,class:'vtxt',fill:'var(--accent-deep)'},
     'Das Prädikat steht im Hauptsatz immer an Platz 2.');
   ve(s,'text',{x:24,y:56,class:'vtxtm'},
     'Vor dem Prädikat passt genau ein Satzglied – nie zwei.');
   const g=ve(s,'g',{});
   const y=96, h=42;
   let x=0;
   const kasten=[];
   r.folge.forEach((gi,n)=>{
     const gl=SGLIED[gi];
     const t=ve(g,'text',{x:0,y:0,class:'dswort'},gl.t);
     let br=0; try{ br=t.getComputedTextLength(); }catch(e){ br=gl.t.length*8.6; }
     const w=br+22;
     const kr=ve(g,'rect',{x:x,y:y,width:w,height:h,rx:8,
       fill: gl.p?'var(--accent)':'var(--surface-2)','fill-opacity':gl.p?.22:1,
       stroke: gl.p?'var(--accent)':'var(--line)','stroke-width':gl.p?2:1});
     g.insertBefore(kr,t);
     t.setAttribute('x', x+w/2); t.setAttribute('y', y+27);
     t.setAttribute('text-anchor','middle');
     ve(g,'text',{x:x+w/2,y:y-10,class:'vtxtm','text-anchor':'middle'},gl.l);
     ve(g,'text',{x:x+w/2,y:y+h+18,class:'vtxtm','text-anchor':'middle',
       fill: gl.p?'var(--accent-deep)':'var(--muted)'},gl.f);
     ve(g,'text',{x:x+w/2,y:y+h+38,class:'vtxtm','text-anchor':'middle',
       fill:'var(--muted)'},'Platz '+(n+1));
     kasten.push({x:x,w:w,g:gl});
     x += w+10;
   });
   const zwei=kasten[1];
   if(zwei) ve(g,'line',{x1:zwei.x,y1:y+h+48,x2:zwei.x+zwei.w,y2:y+h+48,
     stroke:'var(--accent)','stroke-width':3});
   /* einpassen */
   let bb; try{ bb=g.getBBox(); }catch(e){ bb=null; }
   if(bb && bb.width>0){
     const k=Math.min(1, 600/bb.width);
     g.setAttribute('transform','translate('+(20-bb.x*k).toFixed(1)+','+(78-bb.y*k).toFixed(1)+') scale('+k.toFixed(4)+')');
   }
 },
 weg:(st,r)=>'Grundstellung: <b>'+SGLIED.map(g=>g.t).join(' · ')+'</b><br>'+
   'Jetzt vorn: <b>'+SGLIED[r.folge[0]].t+'</b> ('+SGLIED[r.folge[0]].l+')<br>'+
   'Das Prädikat <b>übergab</b> bleibt auf Platz 2 – das ist das Kennzeichen des Hauptsatzes. '+
   'Im Nebensatz rutscht es dagegen ans Ende.'
};

/* ---------- 3. Aufbau der Eroerterung ---------- */
VIZ.eroerterung={
 titel:'Aufbau einer Erörterung', vb:'0 0 640 340',
 was:'Schalte zwischen den beiden Formen um. Die Balkenlänge zeigt das Gewicht des Arguments – das stärkste steht immer zuletzt.',
 regler:[{k:'a',l:'Art',min:0,max:1,step:1,val:1,
          e:v=>v===0?'steigernd (linear)':'dialektisch (Pro und Kontra)'},
         {k:'p',l:'Position, die du vertrittst',min:0,max:1,step:1,val:1,
          e:v=>v===0?'Pro':'Kontra'}],
 rechne:st=>({dial: st.a===1, eigen: st.p===1?'Kontra':'Pro'}),
 werte:(st,r)=>[
   ['Art', r.dial?'dialektisch':'steigernd (linear)','a'],
   ['Operatorwort im Thema', r.dial?'„Stellung nehmen“, „diskutieren“, „sollte“':'„erörtern Sie die Gründe / Ursachen / Folgen“','b'],
   ['Deine Position steht', r.dial?('zuletzt – der '+r.eigen+'-Block'):'im stärksten Argument am Ende','g']],
 zeichne:(s,st,r)=>{
   const bx=28, bw=584, y0=58;
   const kasten=(x,y,w,h,text,farbe,deckung,rand)=>{
     ve(s,'rect',{x:x,y:y,width:w,height:h,rx:7,fill:farbe,'fill-opacity':deckung,
       stroke:rand||farbe,'stroke-width':1.4});
     ve(s,'text',{x:x+10,y:y+h/2+5,class:'vtxtm',fill:'var(--ink)'},text);
   };
   kasten(bx,y0,bw,30,'Einleitung  ·  endet mit der Fragestellung','var(--surface-2)',1,'var(--line)');

   let y=y0+40;
   if(!r.dial){
     const arg=[['Argument 1 – schwächstes',46],['Argument 2',58],['Argument 3',70],['Argument 4 – stärkstes',82]];
     arg.forEach((a,i)=>{
       const h=26;
       ve(s,'rect',{x:bx,y:y,width:bw*a[1]/100,height:h,rx:6,
         fill:'var(--accent)','fill-opacity':.14+i*0.08,stroke:'var(--accent)','stroke-width':1.2});
       ve(s,'text',{x:bx+10,y:y+18,class:'vtxtm'},a[0]);
       y+=h+8;
     });
     ve(s,'text',{x:bx+bw,y:y0+46,class:'vtxtm','text-anchor':'end',fill:'var(--accent-deep)'},'Gewicht');
     vpfeil(s,bx+bw-8,y0+54,bx+bw-8,y-18,'vkraft',8);
   } else {
     const pro = r.eigen==='Kontra';   /* Gegenposition zuerst */
     const blocke = pro
       ? [['Pro-Argumente  (Gegenposition)','var(--blue)'],['Kontra-Argumente  (deine Position)','var(--accent)']]
       : [['Kontra-Argumente  (Gegenposition)','var(--accent)'],['Pro-Argumente  (deine Position)','var(--blue)']];
     blocke.forEach(b=>{
       ve(s,'rect',{x:bx,y:y,width:bw,height:62,rx:7,fill:b[1],'fill-opacity':.13,
         stroke:b[1],'stroke-width':1.4});
       ve(s,'text',{x:bx+10,y:y+22,class:'vtxt',fill:'var(--ink)'},b[0]);
       ve(s,'text',{x:bx+10,y:y+44,class:'vtxtm'},'schwach → mittel → stark');
       y+=72;
     });
   }
   kasten(bx,y,bw,34,'Schluss  ·  Abwägung, begründete Entscheidung, keine neuen Argumente',
     'var(--good-bg)',1,'var(--good)');
   ve(s,'text',{x:bx,y:y+58,class:'vtxtm',fill:'var(--accent-deep)'},
     r.dial ? 'Deine Position kommt zuletzt – der Leser behält das Letzte.'
            : 'Alle Argumente stützen dieselbe Seite und werden stärker.');
 },
 weg:(st,r)=> r.dial
   ? 'Blockmodell: Einleitung → <b>Gegenposition</b> → <b>deine Position</b> → Schluss.<br>'+
     'Du vertrittst <b>'+r.eigen+'</b>, also stehen die '+(r.eigen==='Kontra'?'Pro':'Kontra')+'-Argumente zuerst.<br>'+
     'Ein Drittel der Zeit gehört der Stoffsammlung und der Gliederung.'
   : 'Lineare Form: alle Argumente stützen dieselbe Aussage, geordnet <b>vom schwächsten zum stärksten</b>.<br>'+
     'Erkennungszeichen im Thema: gefragt sind <b>Gründe, Ursachen, Folgen oder Vorteile</b> – keine Gegenseite.'
};

/* ---------- 4. Die Beschreibungsarten im Vergleich ---------- */
const BESCHR=[
{ kurz:'Gegenstand', name:'Gegenstandsbeschreibung',
  frage:'Wie sieht es aus und wozu dient es?',
  form:'Präsens, 3. Person · sachlich',
  aufbau:['Überblick: Art, Zweck, Gesamteindruck',
          'Form, Größe, Material, Farbe',
          'Einzelteile – vom Wichtigen zum Unwichtigen',
          'Funktion: Wie wirken die Teile zusammen?'],
  bsp:'Der Winkelschleifer besteht aus einem Gehäuse, einem Handgriff und der Schutzhaube.'},
{ kurz:'Vorgang', name:'Vorgangsbeschreibung',
  frage:'Wie läuft es ab?',
  form:'Präsens · Reihenfolgewörter',
  aufbau:['Einleitung: Ziel des Vorgangs',
          'Vorbereitung: Material, Geräte',
          'Arbeitsschritte in zwingender Reihenfolge',
          'Abschluss: Ergebnis, Kontrolle'],
  bsp:'Zunächst wird die Schalung gesetzt, anschließend die Bewehrung verlegt.'},
{ kurz:'Bedienung', name:'Bedienungsanleitung',
  frage:'Was muss ich tun?',
  form:'Imperativ oder Infinitiv',
  aufbau:['Sicherheitshinweise – zuerst!',
          'Geräteübersicht, Bedienelemente',
          'Nummerierte Handlungsschritte',
          'Störungshilfe: Fehler und Abhilfe'],
  bsp:'Schutzhaube aufsetzen. Netzstecker einstecken. Gerät einschalten.'},
{ kurz:'Rezept', name:'Rezept',
  frage:'Wie stelle ich es her?',
  form:'eine Form durchhalten: Imperativ, Infinitiv oder man-Form',
  aufbau:['Überschrift, Portionen, Zeiten',
          'Zutaten mit Menge und Einheit',
          'Nummerierte Schritte – eine Handlung je Schritt',
          'Hinweis: Tipp, Variante, Haltbarkeit'],
  bsp:'500 g Mehl · 10 g Salz → Mehl und Salz vermischen. Wasser zugeben.'},
{ kurz:'Leistung (LV)', name:'Leistungsbeschreibung',
  frage:'Was wird geschuldet?',
  form:'Präsens · eindeutig und erschöpfend (VOB/A)',
  aufbau:['Kurztext: Leistung in einer Zeile',
          'Langtext: Stoff, Maße, Güte, Ausführung',
          'Einheit und Menge',
          'Verweis auf Normen und Vorschriften'],
  bsp:'Mauerwerk aus Kalksandstein KS 12-2,0, d = 24 cm, DIN EN 771-2 · m²'}
];

VIZ.beschreibungen={
 titel:'Die fünf Beschreibungsarten', vb:'0 0 640 302',
 was:'Wähle eine Art. Du siehst die Frage, die sie beantwortet, die vorgeschriebene Sprachform und den Aufbau. Die Sprachform ist der häufigste Punktverlust – sie muss zur Textsorte passen.',
 regler:[{k:'b',l:'Beschreibungsart',min:0,max:BESCHR.length-1,step:1,val:0,e:v=>BESCHR[v].name}],
 rechne:st=>({z:BESCHR[st.b]}),
 werte:(st,r)=>[['Beantwortet die Frage', r.z.frage,'a'],
                ['Sprach- und Zeitform', r.z.form,'b'],
                ['Beispielsatz', r.z.bsp,'g']],
 zeichne:(s,st,r)=>{
   /* Reiter oben: alle Arten, die gewaehlte hervorgehoben */
   const g=ve(s,'g',{});
   let x=0;
   BESCHR.forEach((b,i)=>{
     const t=ve(g,'text',{x:0,y:0,class:'vtxtm'},b.kurz);
     let br=0; try{ br=t.getComputedTextLength(); }catch(e){ br=b.kurz.length*7; }
     const w=br+20, an=(i===st.b);
     const kr=ve(g,'rect',{x:x,y:0,width:w,height:26,rx:13,
       fill: an?'var(--accent)':'var(--surface)','fill-opacity':an?.2:1,
       stroke: an?'var(--accent)':'var(--line)','stroke-width':an?1.8:1});
     g.insertBefore(kr,t);
     t.setAttribute('x',x+w/2); t.setAttribute('y',17);
     t.setAttribute('text-anchor','middle');
     if(an) t.setAttribute('fill','var(--accent-deep)');
     x += w+8;
   });
   let bb; try{ bb=g.getBBox(); }catch(e){ bb=null; }
   if(bb && bb.width>0){
     const k=Math.min(1, 596/bb.width);
     g.setAttribute('transform','translate('+(22-bb.x*k).toFixed(1)+','+(16-bb.y*k).toFixed(1)+') scale('+k.toFixed(4)+')');
   }

   const z=r.z;
   ve(s,'text',{x:22,y:72,class:'vtxt',fill:'var(--accent-deep)'},z.name);
   ve(s,'text',{x:22,y:94,class:'vtxtm'},'Frage: '+z.frage);

   /* Aufbau als Treppe */
   let y=112;
   z.aufbau.forEach((a,i)=>{
     ve(s,'rect',{x:22,y:y,width:596,height:34,rx:7,
       fill:'var(--accent)','fill-opacity':.08+i*0.05,
       stroke:'var(--accent)','stroke-width':1.1});
     ve(s,'circle',{cx:44,cy:y+17,r:11,fill:'var(--accent)','fill-opacity':.28});
     ve(s,'text',{x:44,y:y+21,class:'vtxtm','text-anchor':'middle',
       fill:'var(--accent-deep)'},String(i+1));
     ve(s,'text',{x:64,y:y+21,class:'vtxtm'},a);
     y+=40;
   });
   ve(s,'text',{x:22,y:y+16,class:'vtxtm',fill:'var(--blue)'},'Sprachform: '+z.form);
 },
 weg:(st,r)=>'<b>'+r.z.name+'</b> – '+r.z.frage+'<br>'+
   'Sprachform: <b>'+r.z.form+'</b><br>'+
   'Beispiel: '+r.z.bsp+'<br>'+
   'Für alle Beschreibungen gilt: sachlich, genau, keine Wertung, logische Reihenfolge.'
};
