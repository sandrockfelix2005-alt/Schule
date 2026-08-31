/* ================= MATHEMATIK ================= */

/* --- Zehnerpotenzen: Komma wandert --- */
VIZ.zehnerpotenz={
 titel:'Das Komma wandert', vb:'0 0 640 200',
 was:'Zieh am Exponenten. Die Zahl bleibt dieselbe – nur die Schreibweise ändert sich.',
 regler:[{k:'m',l:'Mantisse',min:1,max:9.9,step:0.1,val:4.8,e:v=>vn(v,1)},
         {k:'e',l:'Exponent',min:-9,max:9,step:1,val:3,e:v=>(v>0?'+':'')+v}],
 rechne:s=>{const w=s.m*Math.pow(10,s.e);
   const vs=[[9,'Giga','G'],[6,'Mega','M'],[3,'Kilo','k'],[0,'–','–'],[-3,'Milli','m'],[-6,'Mikro','µ'],[-9,'Nano','n']];
   let vz=vs.find(v=>v[0]===s.e);
   return {w:w, vz:vz};},
 werte:(s,r)=>[['Wert ausgeschrieben', vn(r.w, Math.max(0,Math.min(12,-s.e+1))),'a'],
               ['Wissenschaftlich', vn(s.m,1)+' · 10'+String(s.e).replace(/-/g,'⁻').replace(/[0-9]/g,d=>'⁰¹²³⁴⁵⁶⁷⁸⁹'[d]),'b'],
               ['Vorsatz', r.vz? r.vz[1]+' ('+r.vz[2]+')' : 'keiner','g']],
 zeichne:(s,st,r)=>{
   const y=96, mx=320, br=26;
   const ziffern=vn(st.m,1).replace(',','').split('');   /* z. B. 4,8 -> ["4","8"] */
   const start=mx-((ziffern.length+Math.abs(st.e))*br)/2;
   /* Ziffernkette */
   let alle=ziffern.slice();
   if(st.e>0) for(let i=0;i<st.e;i++) alle.push('0');
   if(st.e<0) for(let i=0;i<-st.e;i++) alle.unshift('0');
   const kpos = st.e>=0 ? ziffern.length+st.e-Math.max(0,st.e)+Math.max(0,st.e) : 1;
   alle.forEach((z,i)=>{
     const x=start+i*br;
     ve(s,'rect',{x:x-11,y:y-20,width:22,height:30,rx:4,
       fill: (st.e>=0 ? (i<ziffern.length) : (i>=-st.e)) ? 'var(--accent-soft)':'var(--surface-2)',
       stroke:'var(--line)','stroke-width':1});
     ve(s,'text',{x:x,y:y+2,class:'vtxt','text-anchor':'middle','font-size':'15'},z);
   });
   /* Kommaposition */
   const kx = st.e>=0 ? start+(ziffern.length-1+st.e)*br+13 : start+(-st.e)*br-13;
   ve(s,'text',{x:kx,y:y+12,class:'vtxt','text-anchor':'middle','font-size':'19',fill:'var(--accent-deep)'},',');
   vpfeil(s,mx,44,kx,y-26,'vkraft');
   ve(s,'text',{x:mx,y:34,class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},
     st.e===0?'Komma bleibt stehen':'Komma um '+Math.abs(st.e)+' Stellen nach '+(st.e>0?'rechts':'links'));
   ve(s,'text',{x:mx,y:150,class:'vtxtm','text-anchor':'middle'},'orange = die Mantisse, grau = angehängte Nullen');
   ve(s,'text',{x:mx,y:172,class:'vtxt','text-anchor':'middle'},'Mantisse liegt immer zwischen 1 und 10');
 },
 weg:(s,r)=>'Ein Schritt im Exponenten verschiebt das Komma um genau <b>eine Stelle</b>.<br>'+
   'Positiver Exponent = große Zahl, negativer = kleine Zahl.'
};

/* --- Gerade y = mx + b --- */
VIZ.gerade={
 titel:'Die Gerade y = m·x + b', vb:'0 0 640 300',
 was:'m kippt die Gerade, b schiebt sie hoch und runter. Die Steigung ist das Verhältnis von Höhe zu Länge des Steigungsdreiecks.',
 regler:[{k:'m',l:'Steigung m',min:-3,max:3,step:0.1,val:0.8,e:v=>vn(v,1)},
         {k:'b',l:'y-Achsenabschnitt b',min:-5,max:5,step:0.5,val:1,e:v=>vn(v,1)}],
 rechne:s=>({ns: s.m!==0 ? -s.b/s.m : null, w: Math.atan(s.m)*180/Math.PI}),
 werte:(s,r)=>[['Funktionsgleichung','y = '+vn(s.m,1)+'·x '+(s.b<0?'− '+vn(-s.b,1):'+ '+vn(s.b,1)),'a'],
               ['Nullstelle', r.ns===null?'keine':'x = '+vn(r.ns),'b'],
               ['Steigungswinkel', vn(r.w,1)+'°','g']],
 zeichne:(s,st)=>{
   const A=vachsen(s,{x0:-6,x1:6,y0:-6,y1:6,bx:52,by:14,bw:536,bh:266});
   vgraf(s,A,x=>st.m*x+st.b,-6,6,'vkurve');
   /* Steigungsdreieck bei x = 1 */
   const x1=1, x2=2, y1=st.m*x1+st.b, y2=st.m*x2+st.b;
   if(Math.abs(y1)<6 && Math.abs(y2)<6){
     ve(s,'polyline',{points:[A.X(x1),A.Y(y1),A.X(x2),A.Y(y1),A.X(x2),A.Y(y2)].join(' '),class:'vhilf2'});
     ve(s,'text',{x:(A.X(x1)+A.X(x2))/2,y:A.Y(y1)+(st.m>0?16:-8),class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},'1');
     ve(s,'text',{x:A.X(x2)+7,y:(A.Y(y1)+A.Y(y2))/2+4,class:'vtxt',fill:'var(--accent-deep)'},'m = '+vn(st.m,1));
   }
   /* y-Achsenabschnitt */
   if(Math.abs(st.b)<6){
     ve(s,'circle',{cx:A.X(0),cy:A.Y(st.b),r:4.5,fill:'var(--blue)'});
     ve(s,'text',{x:A.X(0)+9,y:A.Y(st.b)-8,class:'vtxt',fill:'var(--blue)'},'b = '+vn(st.b,1));
   }
 },
 weg:(s,r)=>'Steigung: pro <b>1</b> nach rechts geht es <b>'+vn(s.m,1)+'</b> nach '+(s.m>=0?'oben':'unten')+'.<br>'+
   'Nullstelle: 0 = '+vn(s.m,1)+'·x '+(s.b<0?'− '+vn(-s.b,1):'+ '+vn(s.b,1))+
   (r.ns===null?' → keine Lösung (waagerechte Gerade)':' → x = '+vn(-s.b,1)+' / '+vn(s.m,1)+' = <b>'+vn(r.ns)+'</b>')
};

/* --- Parabel mit Scheitelpunkt --- */
VIZ.parabel={
 titel:'Die Parabel und ihr Scheitelpunkt', vb:'0 0 640 300',
 was:'Verschiebe den Scheitelpunkt. Du siehst sofort, wann es zwei, eine oder keine Nullstelle gibt.',
 regler:[{k:'a',l:'Öffnung a',min:-2,max:2,step:0.1,val:1,e:v=>vn(v,1)},
         {k:'xs',l:'Scheitel x',min:-4,max:4,step:0.25,val:1,e:v=>vn(v)},
         {k:'ys',l:'Scheitel y',min:-5,max:5,step:0.25,val:-4,e:v=>vn(v)}],
 rechne:s=>{
   const a=s.a||0.0001, d=-s.ys/a;
   const n = d>0 ? [s.xs-Math.sqrt(d), s.xs+Math.sqrt(d)] : (Math.abs(d)<1e-9 ? [s.xs] : []);
   return {n:n, p:-2*s.xs, q:s.xs*s.xs+s.ys/a};
 },
 werte:(s,r)=>[['Scheitelpunktform','y = '+vn(s.a,1)+'·(x '+(s.xs<0?'+ '+vn(-s.xs):'− '+vn(s.xs))+')² '+(s.ys<0?'− '+vn(-s.ys):'+ '+vn(s.ys)),'a'],
               ['Nullstellen', r.n.length===0?'keine':r.n.map(x=>vn(x)).join('  und  '),'b'],
               ['Anzahl Lösungen', r.n.length===2?'zwei':(r.n.length===1?'eine (Berührung)':'keine'),'g']],
 zeichne:(s,st,r)=>{
   const A=vachsen(s,{x0:-6,x1:6,y0:-6,y1:6,bx:52,by:14,bw:536,bh:266});
   vgraf(s,A,x=>st.a*(x-st.xs)*(x-st.xs)+st.ys,-6,6,'vkurve',220);
   if(Math.abs(st.xs)<6 && Math.abs(st.ys)<6){
     ve(s,'circle',{cx:A.X(st.xs),cy:A.Y(st.ys),r:5,fill:'var(--accent)'});
     ve(s,'text',{x:A.X(st.xs)+9,y:A.Y(st.ys)+(st.a>0?18:-9),class:'vtxt',fill:'var(--accent-deep)'},
       'S('+vn(st.xs)+' | '+vn(st.ys)+')');
   }
   r.n.forEach(x=>{ if(Math.abs(x)<6){
     ve(s,'circle',{cx:A.X(x),cy:A.Y(0),r:4.5,fill:'var(--blue)'});
     ve(s,'text',{x:A.X(x),y:A.Y(0)-11,class:'vtxt','text-anchor':'middle',fill:'var(--blue)'},vn(x));
   }});
 },
 weg:(s,r)=>{
   const d=-s.ys/(s.a||0.0001);
   return 'Nullstellen: 0 = a·(x − x_S)² + y_S  →  (x − x_S)² = −y_S / a = '+vn(d,3)+'<br>'+
   (d>0? 'Die Wurzel aus einer positiven Zahl gibt es zweimal: x = '+vn(s.xs)+' ± '+vn(Math.sqrt(d),3)+' → <b>zwei Nullstellen</b>'
    : d<0? 'Aus einer <b>negativen</b> Zahl lässt sich keine Wurzel ziehen → <b>keine Nullstelle</b>. Die Parabel schneidet die x-Achse nicht.'
    : 'Die Wurzel aus 0 ist 0 → die Parabel <b>berührt</b> die x-Achse in genau einem Punkt.');
 }
};

/* --- Potenzfunktionen --- */
VIZ.potenz={
 titel:'Potenzfunktionen y = xⁿ', vb:'0 0 640 300',
 was:'Wechsle den Exponenten. Gerade Hochzahlen sind achsensymmetrisch, ungerade punktsymmetrisch – negative ergeben Hyperbeln.',
 regler:[{k:'n',l:'Exponent n',min:-3,max:4,step:1,val:2,e:v=>String(v)}],
 rechne:s=>({art: s.n===0?'konstant': s.n<0?'Hyperbel': s.n===1?'Gerade': (s.n%2===0?'achsensymmetrisch':'punktsymmetrisch')}),
 werte:(s,r)=>[['Funktion','y = x'+String(s.n).replace(/-/g,'⁻').replace(/[0-9]/g,d=>'⁰¹²³⁴⁵⁶⁷⁸⁹'[d]),'a'],
               ['Verhalten',r.art,'b'],
               ['bei x = 2', s.n<0&&false?'–':vn(Math.pow(2,s.n),3),'g']],
 zeichne:(s,st)=>{
   const A=vachsen(s,{x0:-4,x1:4,y0:-6,y1:6,bx:52,by:14,bw:536,bh:266});
   if(st.n<0){ vgraf(s,A,x=>Math.pow(x,st.n),-4,-0.05,'vkurve',120);
               vgraf(s,A,x=>Math.pow(x,st.n),0.05,4,'vkurve',120); }
   else vgraf(s,A,x=>Math.pow(x,st.n),-4,4,'vkurve',220);
   ve(s,'circle',{cx:A.X(1),cy:A.Y(1),r:4,fill:'var(--accent)'});
   ve(s,'text',{x:A.X(1)+8,y:A.Y(1)-8,class:'vtxtm'},'(1|1) – hier gehen alle durch');
 },
 weg:s=>'Gerader Exponent → beide Äste zeigen in dieselbe Richtung (achsensymmetrisch zur y-Achse).<br>'+
   'Ungerader Exponent → die Äste zeigen entgegengesetzt (punktsymmetrisch zum Ursprung).<br>'+
   'Negativer Exponent bedeutet x⁻ⁿ = 1/xⁿ – bei x = 0 ist die Funktion nicht definiert.'
};

/* --- Exponentielles Wachstum --- */
VIZ.wachstum={
 titel:'Wachstum und Abnahme', vb:'0 0 640 290',
 was:'Ein fester Faktor je Jahr – und die Kurve wird immer steiler. Genau das unterscheidet exponentielles von linearem Wachstum.',
 regler:[{k:'K',l:'Anfangswert',min:500,max:50000,step:500,val:10000,e:v=>vn(v,0)+' €'},
         {k:'p',l:'Änderung je Jahr',min:-15,max:15,step:0.5,val:4,e:v=>(v>0?'+':'')+vn(v,1)+' %'},
         {k:'n',l:'Jahre',min:1,max:40,step:1,val:15,e:v=>v+' Jahre'}],
 rechne:s=>{const f=1+s.p/100, E=s.K*Math.pow(f,s.n);
   const ziel = s.p>0?2:0.5;
   const t = Math.abs(s.p)<0.01? null : Math.log(ziel)/Math.log(f);
   return {f:f,E:E,t:t,linear:s.K+s.K*s.p/100*s.n};},
 werte:(s,r)=>[['Endwert nach '+s.n+' Jahren', vn(r.E,2)+' €','a'],
               ['Wachstumsfaktor', vn(r.f,4),'b'],
               [s.p>0?'Verdopplung nach':'Halbierung nach', r.t===null?'nie':vn(r.t,2)+' Jahren','g']],
 zeichne:(s,st,r)=>{
   const ymax=Math.max(st.K,r.E)*1.1, A=vachsen(s,{x0:0,x1:st.n,y0:0,y1:ymax,bx:62,by:14,bw:526,bh:250});
   vgraf(s,A,x=>st.K+st.K*st.p/100*x,0,st.n,'vhilf2');       /* lineare Vergleichslinie */
   vgraf(s,A,x=>st.K*Math.pow(r.f,x),0,st.n,'vkurve');
   ve(s,'circle',{cx:A.X(st.n),cy:A.Y(r.E),r:4.5,fill:'var(--accent)'});
   ve(s,'text',{x:A.X(st.n)-8,y:A.Y(r.E)-10,class:'vtxt','text-anchor':'end',fill:'var(--accent-deep)'},vn(r.E,0)+' €');
   if(r.t!==null && r.t>0 && r.t<=st.n){
     const yz=st.K*(st.p>0?2:0.5);
     ve(s,'line',{x1:A.X(r.t),y1:A.Y(0),x2:A.X(r.t),y2:A.Y(yz),class:'vhilf'});
     ve(s,'line',{x1:A.X(0),y1:A.Y(yz),x2:A.X(r.t),y2:A.Y(yz),class:'vhilf'});
     ve(s,'text',{x:A.X(r.t)+6,y:A.Y(yz)-7,class:'vtxtm'},(st.p>0?'verdoppelt':'halbiert')+' nach '+vn(r.t,1)+' J.');
   }
   ve(s,'text',{x:A.X(st.n*0.35),y:A.Y(st.K+st.K*st.p/100*st.n*0.35)-9,class:'vtxtm'},'gestrichelt: linear zum Vergleich');
 },
 weg:(s,r)=>'K_n = K₀ · q<sup>n</sup> = '+vn(s.K,0)+' · '+vn(r.f,4)+'<sup>'+s.n+'</sup> = <b>'+vn(r.E,2)+' €</b><br>'+
   (r.t===null?'':'Verdopplungszeit: q<sup>t</sup> = 2 → t = lg 2 / lg '+vn(r.f,4)+' = <b>'+vn(r.t,2)+' Jahre</b><br>')+
   'Linear wären es nur '+vn(r.linear,2)+' € – die Differenz ist der Zinseszinseffekt.'
};

/* --- Strahlensatz --- */
VIZ.strahlensatz={
 titel:'Der Strahlensatz', vb:'0 0 640 280',
 was:'Verschiebe die zweite Parallele. Die Verhältnisse der Abschnitte bleiben gleich – darauf beruht jede Höhenmessung mit dem Maßstab.',
 regler:[{k:'a',l:'Abstand 1. Parallele',min:60,max:200,step:5,val:110,e:(v,s)=>vn(v/40,2)+' m'},
         {k:'b',l:'Abstand 2. Parallele',min:220,max:480,step:5,val:330,e:(v,s)=>vn(v/40,2)+' m'},
         {k:'w',l:'Öffnungswinkel',min:12,max:40,step:1,val:26,e:v=>v+'°'}],
 rechne:s=>({za:s.a/40, zb:s.b/40, ha:s.a*Math.tan(s.w*Math.PI/180)/40, hb:s.b*Math.tan(s.w*Math.PI/180)/40}),
 werte:(s,r)=>[['Strecke SA / SB', vn(r.za)+' m / '+vn(r.zb)+' m','a'],
               ['Höhe a / Höhe b', vn(r.ha)+' m / '+vn(r.hb)+' m','b'],
               ['beide Verhältnisse', vn(r.za/r.zb,4)+'  =  '+vn(r.ha/r.hb,4),'g']],
 zeichne:(s,st,r)=>{
   const sx=60, sy=210, w=st.w*Math.PI/180;
   ve(s,'line',{x1:sx,y1:sy,x2:sx+520,y2:sy,class:'vlinie'});
   ve(s,'line',{x1:sx,y1:sy,x2:sx+520,y2:sy-520*Math.tan(w),class:'vlinie'});
   ve(s,'text',{x:sx-16,y:sy+5,class:'vtxt'},'S');
   [[st.a,'a','var(--blue)'],[st.b,'b','var(--accent)']].forEach(([d,n,f])=>{
     const hh=d*Math.tan(w);
     ve(s,'line',{x1:sx+d,y1:sy,x2:sx+d,y2:sy-hh,stroke:f,'stroke-width':2.5});
     ve(s,'text',{x:sx+d+7,y:sy-hh/2+4,class:'vtxt',fill:f},n);
     ve(s,'circle',{cx:sx+d,cy:sy-hh,r:3.5,fill:f});
   });
   ve(s,'path',{d:'M '+(sx+46)+' '+sy+' A 46 46 0 0 0 '+(sx+46*Math.cos(w))+' '+(sy-46*Math.sin(w))+'',class:'vmasz'});
   ve(s,'text',{x:sx+56,y:sy-11,class:'vtxtm'},st.w+'°');
   ve(s,'text',{x:sx+260,y:262,class:'vtxtm','text-anchor':'middle'},'Beide Verhältnisse sind immer gleich – unabhängig vom Winkel.');
 },
 weg:(s,r)=>'SA : SB = '+vn(r.za)+' : '+vn(r.zb)+' = <b>'+vn(r.za/r.zb,4)+'</b><br>'+
   'a : b = '+vn(r.ha)+' : '+vn(r.hb)+' = <b>'+vn(r.ha/r.hb,4)+'</b><br>'+
   'Daraus folgt die Anwendung: kennst du drei der vier Größen, ergibt sich die vierte durch Kreuzmultiplikation.'
};

/* --- Kreis und Kreisausschnitt --- */
VIZ.kreis={
 titel:'Kreis, Bogen und Ausschnitt', vb:'0 0 640 300',
 was:'Der Mittelpunktswinkel entscheidet, welcher Anteil vom Kreis übrig bleibt – bei Fläche und bei Bogenlänge gleichermaßen.',
 regler:[{k:'d',l:'Durchmesser',min:0.4,max:8,step:0.1,val:3,e:v=>vn(v,1)+' m'},
         {k:'w',l:'Mittelpunktswinkel',min:5,max:360,step:5,val:120,e:v=>v+'°'}],
 rechne:s=>{const r=s.d/2, A=Math.PI*r*r, U=Math.PI*s.d;
   return {r:r,A:A,U:U, Aa:A*s.w/360, b:U*s.w/360, bog:s.w*Math.PI/180};},
 werte:(s,r)=>[['Kreisfläche gesamt', vn(r.A,3)+' m²','a'],
               ['Ausschnittfläche', vn(r.Aa,3)+' m²','b'],
               ['Bogenlänge', vn(r.b,3)+' m','g']],
 zeichne:(s,st,r)=>{
   const cx=250, cy=150, R=118;
   ve(s,'circle',{cx:cx,cy:cy,r:R,fill:'var(--surface-2)',stroke:'var(--line)','stroke-width':1.5});
   const w=st.w*Math.PI/180, gross=st.w>180?1:0;
   const ex=cx+R*Math.cos(-w), ey=cy+R*Math.sin(-w);
   if(st.w>=360) ve(s,'circle',{cx:cx,cy:cy,r:R,class:'vflaeche'});
   else ve(s,'path',{d:`M ${cx} ${cy} L ${cx+R} ${cy} A ${R} ${R} 0 ${gross} 0 ${ex} ${ey} Z`,class:'vflaeche'});
   ve(s,'path',{d:`M ${cx+R} ${cy} A ${R} ${R} 0 ${gross} 0 ${ex} ${ey}`,class:'vkurve'});
   ve(s,'line',{x1:cx,y1:cy,x2:cx+R,y2:cy,class:'vlinie'});
   ve(s,'line',{x1:cx,y1:cy,x2:ex,y2:ey,class:'vlinie'});
   ve(s,'text',{x:cx+R/2,y:cy-8,class:'vtxt','text-anchor':'middle'},'r = '+vn(r.r,2)+' m');
   ve(s,'circle',{cx:cx,cy:cy,r:3,fill:'var(--ink)'});
   ve(s,'text',{x:cx+34,y:cy+(st.w<180?-12:24),class:'vtxt',fill:'var(--accent-deep)'},st.w+'°');
   /* Anteilsbalken */
   const bx=440, by=60, bw=150, bh=170;
   ve(s,'rect',{x:bx,y:by,width:bw,height:bh,fill:'var(--surface-2)',stroke:'var(--line)','stroke-width':1,rx:5});
   ve(s,'rect',{x:bx,y:by+bh*(1-st.w/360),width:bw,height:bh*st.w/360,class:'vflaeche',rx:0});
   ve(s,'text',{x:bx+bw/2,y:by-10,class:'vtxtm','text-anchor':'middle'},'Anteil am Vollkreis');
   ve(s,'text',{x:bx+bw/2,y:by+bh/2+6,class:'vtxt','text-anchor':'middle'},vn(st.w/360*100,1)+' %');
 },
 weg:(s,r)=>'Vollkreis: A = π·r² = π · '+vn(r.r,2)+'² = '+vn(r.A,3)+' m²<br>'+
   'Ausschnitt: A = π·r² · φ/360° = '+vn(r.A,3)+' · '+s.w+'/360 = <b>'+vn(r.Aa,3)+' m²</b><br>'+
   'Bogen: b = π·d · φ/360° = '+vn(r.U,3)+' · '+s.w+'/360 = <b>'+vn(r.b,3)+' m</b>'
};

/* --- Einheitskreis: sin, cos, tan --- */
VIZ.einheitskreis={
 titel:'sin, cos und tan am Einheitskreis', vb:'0 0 640 320',
 was:'Dreh den Winkel. Der Kosinus ist die waagerechte Strecke, der Sinus die senkrechte – und rechts siehst du, wie daraus die Kurven entstehen.',
 regler:[{k:'w',l:'Winkel',min:0,max:360,step:1,val:35,e:v=>v+'°'}],
 rechne:s=>{const r=s.w*Math.PI/180;
   return {si:Math.sin(r), co:Math.cos(r), ta:Math.abs(Math.cos(r))<1e-9?null:Math.tan(r), rad:r};},
 werte:(s,r)=>[['sin '+s.w+'°', vn(r.si,4),'b'],['cos '+s.w+'°', vn(r.co,4),'a'],
               ['tan '+s.w+'°', r.ta===null?'nicht definiert':vn(r.ta,4),'g']],
 zeichne:(s,st,r)=>{
   const cx=140, cy=160, R=118;
   ve(s,'circle',{cx:cx,cy:cy,r:R,fill:'none',stroke:'var(--line)','stroke-width':1.5});
   ve(s,'line',{x1:cx-R-16,y1:cy,x2:cx+R+16,y2:cy,class:'vachse'});
   ve(s,'line',{x1:cx,y1:cy-R-16,x2:cx,y2:cy+R+16,class:'vachse'});
   const px=cx+R*r.co, py=cy-R*r.si;
   ve(s,'path',{d:`M ${cx+40} ${cy} A 40 40 0 ${st.w>180?1:0} 0 ${cx+40*r.co} ${cy-40*r.si}`,class:'vmasz'});
   ve(s,'line',{x1:cx,y1:cy,x2:px,y2:py,class:'vlinie'});
   ve(s,'line',{x1:cx,y1:cy,x2:px,y2:cy,stroke:'var(--accent)','stroke-width':3.5});    /* cos */
   ve(s,'line',{x1:px,y1:cy,x2:px,y2:py,stroke:'var(--blue)','stroke-width':3.5});      /* sin */
   ve(s,'circle',{cx:px,cy:py,r:4.5,fill:'var(--ink)'});
   ve(s,'text',{x:cx+(px-cx)/2,y:cy+(r.si>=0?17:-8),class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},'cos');
   ve(s,'text',{x:px+(r.co>=0?8:-8),y:cy-(cy-py)/2+4,class:'vtxt','text-anchor':r.co>=0?'start':'end',fill:'var(--blue)'},'sin');
   ve(s,'text',{x:cx,y:305,class:'vtxtm','text-anchor':'middle'},'Radius = 1');
   /* Kurven rechts */
   const A=vachsen(s,{x0:0,x1:360,y0:-1.2,y1:1.2,bx:330,by:40,bw:290,bh:240});
   vgraf(s,A,x=>Math.sin(x*Math.PI/180),0,360,'vkurve2',180);
   vgraf(s,A,x=>Math.cos(x*Math.PI/180),0,360,'vkurve',180);
   ve(s,'line',{x1:A.X(st.w),y1:A.Y(-1.2),x2:A.X(st.w),y2:A.Y(1.2),class:'vhilf'});
   ve(s,'circle',{cx:A.X(st.w),cy:A.Y(r.si),r:4,fill:'var(--blue)'});
   ve(s,'circle',{cx:A.X(st.w),cy:A.Y(r.co),r:4,fill:'var(--accent)'});
   ve(s,'text',{x:340,y:30,class:'vtxtm'},'blau = sin · orange = cos');
 },
 weg:(s,r)=>'Am Einheitskreis (r = 1) gilt unmittelbar:  <b>cos φ</b> = waagerechte Koordinate,  <b>sin φ</b> = senkrechte Koordinate.<br>'+
   'Daraus folgt der „trigonometrische Pythagoras“: sin²φ + cos²φ = '+vn(r.si*r.si,4)+' + '+vn(r.co*r.co,4)+' = <b>1</b><br>'+
   'Und tan φ = sin φ / cos φ = '+vn(r.si,4)+' / '+vn(r.co,4)+' = '+(r.ta===null?'<b>nicht definiert</b> (cos = 0)':'<b>'+vn(r.ta,4)+'</b>')
};

/* --- Rechtwinkliges Dreieck --- */
VIZ.rechtwinklig={
 titel:'Das rechtwinklige Dreieck', vb:'0 0 640 280',
 was:'Zieh an Kathete und Winkel. Ankathete, Gegenkathete und Hypotenuse hängen über sin, cos und tan zusammen.',
 regler:[{k:'b',l:'Ankathete b',min:1,max:9,step:0.1,val:4,e:v=>vn(v,2)+' m'},
         {k:'w',l:'Winkel α',min:8,max:75,step:1,val:35,e:v=>v+'°'}],
 rechne:s=>{const r=s.w*Math.PI/180, a=s.b*Math.tan(r), c=s.b/Math.cos(r);
   return {a:a,c:c,rad:r,A:s.b*a/2};},
 werte:(s,r)=>[['Gegenkathete a', vn(r.a,3)+' m','b'],['Hypotenuse c', vn(r.c,3)+' m','a'],
               ['Fläche', vn(r.A,3)+' m²','g']],
 zeichne:(s,st,r)=>{
   const maxb=9, maxa=maxb*Math.tan(75*Math.PI/180);
   const sk=Math.min(470/maxb, 200/Math.max(r.a,0.5));
   const ax=90, ay=228, bx=ax+st.b*sk, by=ay, cx=bx, cy=ay-r.a*sk;
   ve(s,'polygon',{points:`${ax},${ay} ${bx},${by} ${cx},${cy}`,class:'vflaeche'});
   ve(s,'polygon',{points:`${ax},${ay} ${bx},${by} ${cx},${cy}`,class:'vlinie',fill:'none'});
   ve(s,'polyline',{points:`${bx-13},${by} ${bx-13},${by-13} ${bx},${by-13}`,class:'vmasz'});
   ve(s,'path',{d:`M ${ax+44} ${ay} A 44 44 0 0 0 ${ax+44*Math.cos(r.rad)} ${ay-44*Math.sin(r.rad)}`,class:'vmasz'});
   ve(s,'text',{x:ax+54,y:ay-12,class:'vtxt'},'α = '+st.w+'°');
   ve(s,'text',{x:(ax+bx)/2,y:ay+20,class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},'b (Ankathete) = '+vn(st.b,2)+' m');
   ve(s,'text',{x:bx+10,y:(by+cy)/2+4,class:'vtxt',fill:'var(--blue)'},'a (Gegenkathete) = '+vn(r.a,2)+' m');
   ve(s,'text',{x:(ax+cx)/2-24,y:(ay+cy)/2-8,class:'vtxt','text-anchor':'end'},'c = '+vn(r.c,2)+' m');
   ve(s,'text',{x:320,y:262,class:'vtxtm','text-anchor':'middle'},'Der rechte Winkel liegt immer der Hypotenuse gegenüber.');
 },
 weg:(s,r)=>'tan α = a / b  →  a = b · tan α = '+vn(s.b,2)+' · '+vn(Math.tan(r.rad),5)+' = <b>'+vn(r.a,3)+' m</b><br>'+
   'cos α = b / c  →  c = b / cos α = '+vn(s.b,2)+' / '+vn(Math.cos(r.rad),5)+' = <b>'+vn(r.c,3)+' m</b><br>'+
   'Probe mit Pythagoras: √('+vn(s.b,2)+'² + '+vn(r.a,3)+'²) = <b>'+vn(Math.sqrt(s.b*s.b+r.a*r.a),3)+' m</b> ✓'
};

/* --- Schiefwinkliges Dreieck: Sinus- und Kosinussatz --- */
VIZ.schiefwinklig={
 titel:'Sinussatz und Kosinussatz', vb:'0 0 640 290',
 was:'Zwei Seiten und der eingeschlossene Winkel legen das Dreieck fest. Der Kosinussatz liefert die dritte Seite, der Sinussatz die übrigen Winkel.',
 regler:[{k:'b',l:'Seite b',min:2,max:11,step:0.1,val:7.5,e:v=>vn(v,2)+' m'},
         {k:'c',l:'Seite c',min:2,max:11,step:0.1,val:5.2,e:v=>vn(v,2)+' m'},
         {k:'al',l:'Winkel α',min:10,max:160,step:1,val:68,e:v=>v+'°'}],
 rechne:s=>{const ar=s.al*Math.PI/180, a=Math.sqrt(s.b*s.b+s.c*s.c-2*s.b*s.c*Math.cos(ar));
   const be=Math.asin(Math.min(1,s.b*Math.sin(ar)/a)), ga=Math.PI-ar-be;
   return {a:a,ar:ar,be:be*180/Math.PI,ga:ga*180/Math.PI,A:0.5*s.b*s.c*Math.sin(ar)};},
 werte:(s,r)=>[['Seite a', vn(r.a,3)+' m','a'],
               ['Winkel β / γ', vn(r.be,1)+'° / '+vn(r.ga,1)+'°','b'],
               ['Fläche', vn(r.A,3)+' m²','g']],
 zeichne:(s,st,r)=>{
   const sk=Math.min(430/Math.max(st.b,st.c,r.a), 190/Math.max(st.b*Math.sin(r.ar),1));
   const Ax=120, Ay=232;
   const Cx=Ax+st.b*sk*Math.cos(r.ar), Cy=Ay-st.b*sk*Math.sin(r.ar);   /* Seite b von A aus */
   const Bx=Ax+st.c*sk, By=Ay;                                          /* Seite c waagerecht */
   ve(s,'polygon',{points:`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`,class:'vflaeche'});
   ve(s,'polygon',{points:`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`,class:'vlinie',fill:'none'});
   ve(s,'path',{d:`M ${Ax+40} ${Ay} A 40 40 0 0 0 ${Ax+40*Math.cos(r.ar)} ${Ay-40*Math.sin(r.ar)}`,class:'vmasz'});
   ve(s,'text',{x:Ax+50,y:Ay-14,class:'vtxt'},'α = '+st.al+'°');
   ve(s,'text',{x:Ax-10,y:Ay+16,class:'vtxt','text-anchor':'end'},'A');
   ve(s,'text',{x:Bx+8,y:By+16,class:'vtxt'},'B');
   ve(s,'text',{x:Cx,y:Cy-10,class:'vtxt','text-anchor':'middle'},'C');
   ve(s,'text',{x:(Ax+Cx)/2-26,y:(Ay+Cy)/2,class:'vtxt','text-anchor':'end',fill:'var(--accent-deep)'},'b = '+vn(st.b,2));
   ve(s,'text',{x:(Ax+Bx)/2,y:Ay+20,class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},'c = '+vn(st.c,2));
   ve(s,'text',{x:(Bx+Cx)/2+14,y:(By+Cy)/2,class:'vtxt',fill:'var(--blue)'},'a = '+vn(r.a,2));
 },
 weg:(s,r)=>'Kosinussatz: a² = b² + c² − 2·b·c·cos α = '+vn(s.b*s.b,2)+' + '+vn(s.c*s.c,2)+' − '+vn(2*s.b*s.c,2)+'·'+vn(Math.cos(r.ar),5)+' = '+vn(r.a*r.a,3)+'<br>'+
   'a = <b>'+vn(r.a,3)+' m</b><br>'+
   'Sinussatz: sin β = b · sin α / a = '+vn(s.b,2)+' · '+vn(Math.sin(r.ar),5)+' / '+vn(r.a,3)+' → β = <b>'+vn(r.be,1)+'°</b><br>'+
   'Winkelsumme: γ = 180° − '+s.al+'° − '+vn(r.be,1)+'° = <b>'+vn(r.ga,1)+'°</b>'
};

/* --- Koerper: Volumen und Oberflaeche --- */
VIZ.koerper={
 titel:'Körper: Volumen und Oberfläche', vb:'0 0 640 280',
 was:'Wechsle zwischen Zylinder, Kegel und Kugel. Achte darauf, wie sich das Volumen bei doppeltem Durchmesser vervierfacht.',
 regler:[{k:'art',l:'Körper',min:0,max:2,step:1,val:0,e:v=>['Zylinder','Kegel','Kugel'][v]},
         {k:'d',l:'Durchmesser',min:0.4,max:6,step:0.1,val:2,e:v=>vn(v,1)+' m'},
         {k:'h',l:'Höhe',min:0.4,max:8,step:0.1,val:3,e:(v,s)=>s.art===2?'(entfällt)':vn(v,1)+' m'}],
 rechne:s=>{const r=s.d/2, G=Math.PI*r*r;
   if(s.art===0) return {r:r,V:G*s.h,O:2*G+Math.PI*s.d*s.h,M:Math.PI*s.d*s.h,name:'Zylinder'};
   if(s.art===1){const m=Math.sqrt(r*r+s.h*s.h);
     return {r:r,m:m,V:G*s.h/3,O:G+Math.PI*r*m,M:Math.PI*r*m,name:'Kegel'};}
   return {r:r,V:4/3*Math.PI*r*r*r,O:4*Math.PI*r*r,M:4*Math.PI*r*r,name:'Kugel'};},
 werte:(s,r)=>[['Volumen', vn(r.V,4)+' m³','a'],['Oberfläche', vn(r.O,4)+' m²','b'],
               ['Masse bei Beton', vn(r.V*2400,0)+' kg','g']],
 zeichne:(s,st,r)=>{
   const cx=300, unten=232, sk=Math.min(150/Math.max(st.d,0.4), 175/Math.max(st.art===2?st.d:st.h,0.4));
   const rr=r.r*sk, hh=(st.art===2? st.d : st.h)*sk;
   if(st.art===0){
     const oy=unten-hh;
     ve(s,'path',{d:`M ${cx-rr} ${oy} L ${cx-rr} ${unten} A ${rr} ${rr*0.28} 0 0 0 ${cx+rr} ${unten} L ${cx+rr} ${oy}`,class:'vflaeche'});
     ve(s,'path',{d:`M ${cx-rr} ${oy} L ${cx-rr} ${unten} A ${rr} ${rr*0.28} 0 0 0 ${cx+rr} ${unten} L ${cx+rr} ${oy}`,class:'vlinie',fill:'none'});
     ve(s,'ellipse',{cx:cx,cy:oy,rx:rr,ry:rr*0.28,class:'vflaeche'});
     ve(s,'ellipse',{cx:cx,cy:oy,rx:rr,ry:rr*0.28,class:'vlinie',fill:'none'});
     ve(s,'path',{d:`M ${cx-rr} ${unten} A ${rr} ${rr*0.28} 0 0 1 ${cx+rr} ${unten}`,class:'vhilf'});
   } else if(st.art===1){
     const oy=unten-hh;
     ve(s,'path',{d:`M ${cx} ${oy} L ${cx-rr} ${unten} A ${rr} ${rr*0.28} 0 0 0 ${cx+rr} ${unten} Z`,class:'vflaeche'});
     ve(s,'path',{d:`M ${cx} ${oy} L ${cx-rr} ${unten} A ${rr} ${rr*0.28} 0 0 0 ${cx+rr} ${unten} Z`,class:'vlinie',fill:'none'});
     ve(s,'path',{d:`M ${cx-rr} ${unten} A ${rr} ${rr*0.28} 0 0 1 ${cx+rr} ${unten}`,class:'vhilf'});
     ve(s,'line',{x1:cx,y1:oy,x2:cx,y2:unten,class:'vhilf'});
     ve(s,'line',{x1:cx,y1:oy,x2:cx+rr,y2:unten,stroke:'var(--blue)','stroke-width':2});
     ve(s,'text',{x:cx+rr/2+12,y:oy+hh/2,class:'vtxt',fill:'var(--blue)'},'s = '+vn(r.m,2)+' m');
   } else {
     const cy=unten-rr;
     ve(s,'circle',{cx:cx,cy:cy,r:rr,class:'vflaeche'});
     ve(s,'circle',{cx:cx,cy:cy,r:rr,class:'vlinie',fill:'none'});
     ve(s,'ellipse',{cx:cx,cy:cy,rx:rr,ry:rr*0.3,class:'vhilf'});
     ve(s,'line',{x1:cx,y1:cy,x2:cx+rr,y2:cy,stroke:'var(--accent)','stroke-width':2});
     ve(s,'text',{x:cx+rr/2,y:cy-8,class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},'r');
   }
   if(st.art!==2){
     const oy=unten-hh;
     ve(s,'line',{x1:cx+rr+34,y1:oy,x2:cx+rr+34,y2:unten,class:'vmasz'});
     ve(s,'line',{x1:cx+rr+29,y1:oy,x2:cx+rr+39,y2:oy,class:'vmasz'});
     ve(s,'line',{x1:cx+rr+29,y1:unten,x2:cx+rr+39,y2:unten,class:'vmasz'});
     ve(s,'text',{x:cx+rr+44,y:(oy+unten)/2+4,class:'vtxt'},'h = '+vn(st.h,1)+' m');
   }
   ve(s,'text',{x:cx,y:262,class:'vtxtm','text-anchor':'middle'},'d = '+vn(st.d,1)+' m');
 },
 weg:(s,r)=>{
   if(s.art===0) return 'V = π·r²·h = π · '+vn(r.r,2)+'² · '+vn(s.h,1)+' = <b>'+vn(r.V,4)+' m³</b><br>'+
     'O = 2·π·r² + π·d·h = <b>'+vn(r.O,4)+' m²</b>  (zwei Deckel plus Mantel)';
   if(s.art===1) return 'V = ⅓ · π·r²·h = <b>'+vn(r.V,4)+' m³</b> – genau ein Drittel des Zylinders mit gleicher Grundfläche und Höhe<br>'+
     'Mantellinie s = √(r² + h²) = '+vn(r.m,3)+' m<br>O = π·r² + π·r·s = <b>'+vn(r.O,4)+' m²</b>';
   return 'V = ⁴⁄₃ · π·r³ = ⁴⁄₃ · π · '+vn(r.r,2)+'³ = <b>'+vn(r.V,4)+' m³</b><br>'+
     'O = 4·π·r² = <b>'+vn(r.O,4)+' m²</b> – genau das Vierfache der größten Schnittfläche';
 }
};
