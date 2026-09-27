/* ================= GRUNDLAGEN (Kapitel 0) ================= */

/* --- Masse und Kraft --- */
VIZ.massekraft={
 titel:'Masse und Kraft', vb:'0 0 640 270',
 was:'Zieh an der Masse. Die Masse bleibt überall gleich – die Kraft, mit der es nach unten zieht, hängt vom Himmelskörper ab.',
 regler:[{k:'m',l:'Masse',min:1,max:5000,step:1,val:80,e:v=>v>=1000?vn(v/1000,2)+' t':vn(v,0)+' kg'}],
 rechne:s=>({F:s.m*9.81, FM:s.m*1.62, kN:s.m*9.81/1000}),
 werte:(s,r)=>[['Masse (überall gleich)', s.m>=1000? vn(s.m/1000,2)+' t':vn(s.m,0)+' kg','b'],
               ['Gewichtskraft auf der Erde', vn(r.F,1)+' N  =  '+vn(r.kN,3)+' kN','a'],
               ['auf dem Mond', vn(r.FM,1)+' N','g']],
 zeichne:(s,st,r)=>{
   const kx=150, ky=70, w=Math.max(34,Math.min(96,Math.pow(st.m,0.33)*9));
   /* Erde */
   ve(s,'text',{x:kx,y:24,class:'vtxt','text-anchor':'middle'},'auf der Erde · g = 9,81 m/s²');
   ve(s,'rect',{x:kx-w/2,y:ky,width:w,height:w*0.62,rx:4,fill:'var(--accent-soft)',stroke:'var(--accent)','stroke-width':1.5});
   ve(s,'text',{x:kx,y:ky+w*0.62/2+5,class:'vtxt','text-anchor':'middle'},
     st.m>=1000? vn(st.m/1000,1)+' t' : vn(st.m,0)+' kg');
   /* Feste Laenge fuer die Erde, der Mond genau im Verhaeltnis der Fallbeschleunigungen -
      sonst widerspraeche das Bild dem Text "nur ein Sechstel". */
   const lE=112;
   vpfeil(s,kx,ky+w*0.62+6,kx,ky+w*0.62+6+lE,'vkraft');
   ve(s,'text',{x:kx,y:ky+w*0.62+lE+26,class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},vn(r.F,0)+' N');
   /* Mond */
   const mx=440;
   ve(s,'text',{x:mx,y:24,class:'vtxt','text-anchor':'middle'},'auf dem Mond · g = 1,62 m/s²');
   ve(s,'rect',{x:mx-w/2,y:ky,width:w,height:w*0.62,rx:4,fill:'var(--surface-2)',stroke:'var(--line)','stroke-width':1.5});
   ve(s,'text',{x:mx,y:ky+w*0.62/2+5,class:'vtxt','text-anchor':'middle'},
     st.m>=1000? vn(st.m/1000,1)+' t' : vn(st.m,0)+' kg');
   const lM=lE*1.62/9.81;
   vpfeil(s,mx,ky+w*0.62+6,mx,ky+w*0.62+6+lM,'vreak');
   ve(s,'text',{x:mx,y:ky+w*0.62+lM+26,class:'vtxt','text-anchor':'middle',fill:'var(--blue)'},vn(r.FM,0)+' N');
   ve(s,'line',{x1:320,y1:34,x2:320,y2:236,class:'vhilf'});
   ve(s,'text',{x:320,y:258,class:'vtxtm','text-anchor':'middle'},
     'Die Pfeile sind maßstäblich – der Mondpfeil ist ein Sechstel so lang.');
 },
 weg:(s,r)=>'F_G = m · g = '+vn(s.m,0)+' kg · 9,81 m/s² = <b>'+vn(r.F,1)+' N</b> = '+vn(r.kN,3)+' kN<br>'+
   'Auf dem Mond: '+vn(s.m,0)+' · 1,62 = <b>'+vn(r.FM,1)+' N</b> – nur etwa ein Sechstel.<br>'+
   'Überschlag fürs Kopfrechnen: '+vn(s.m/1000,2)+' t · 10 ≈ '+vn(s.m/100,1)+' kN (genau '+vn(r.kN,2)+' kN).'
};

/* --- Druck: gleiche Kraft, andere Flaeche --- */
VIZ.druckflaeche={
 titel:'Warum Fläche über den Druck entscheidet', vb:'0 0 640 280',
 was:'Die Kraft bleibt gleich, nur die Fläche ändert sich. Genau darauf beruht jedes Fundament – und jedes Raupenfahrwerk.',
 regler:[{k:'m',l:'Last',min:50,max:8000,step:50,val:5000,e:v=>v>=1000?vn(v/1000,2)+' t':vn(v,0)+' kg'},
         {k:'a',l:'Kantenlänge der Fläche',min:0.1,max:2.5,step:0.05,val:0.3,e:v=>vn(v,2)+' m'},
         {k:'zul',l:'Baugrund verträgt',min:100,max:500,step:10,val:250,e:v=>vn(v,0)+' kN/m²'}],
 rechne:s=>{const F=s.m*9.81/1000, A=s.a*s.a;
   return {F:F,A:A,p:F/A, noetig:Math.sqrt(F/s.zul)};},
 werte:(s,r)=>[['Fläche', vn(r.A,4)+' m²','b'],
               ['Bodenpressung', vn(r.p,1)+' kN/m²','a'],
               [r.p<=s.zul?'Nachweis':'Nachweis', r.p<=s.zul? 'erfüllt ✓' : 'nicht erfüllt ✗', r.p<=s.zul?'g':'r']],
 zeichne:(s,st,r)=>{
   const cx=250, sohle=206, sk=Math.min(150/Math.max(st.a,0.1), 150/2.5)*1.6;
   const bw=Math.max(14,st.a*sk);
   /* Last als Block */
   ve(s,'rect',{x:cx-34,y:70,width:68,height:46,rx:5,fill:'var(--accent-soft)',stroke:'var(--accent)','stroke-width':1.5});
   ve(s,'text',{x:cx,y:98,class:'vtxt','text-anchor':'middle'},
     st.m>=1000? vn(st.m/1000,2)+' t' : vn(st.m,0)+' kg');
   vpfeil(s,cx,120,cx,sohle-22,'vkraft');
   ve(s,'text',{x:cx+10,y:150,class:'vtxt',fill:'var(--accent-deep)'},'F = '+vn(r.F,1)+' kN');
   /* Fundamentflaeche */
   ve(s,'rect',{x:cx-bw/2,y:sohle-20,width:bw,height:20,fill:'var(--surface-2)',stroke:'var(--ink)','stroke-width':2});
   ve(s,'line',{x1:60,y1:sohle,x2:470,y2:sohle,class:'vlinie'});
   for(let i=0;i<14;i++) ve(s,'line',{x1:62+i*30,y1:sohle,x2:56+i*30,y2:sohle+10,class:'vmasz'});
   ve(s,'line',{x1:cx-bw/2,y1:sohle+20,x2:cx+bw/2,y2:sohle+20,class:'vmasz'});
   ve(s,'line',{x1:cx-bw/2,y1:sohle+15,x2:cx-bw/2,y2:sohle+25,class:'vmasz'});
   ve(s,'line',{x1:cx+bw/2,y1:sohle+15,x2:cx+bw/2,y2:sohle+25,class:'vmasz'});
   ve(s,'text',{x:cx,y:sohle+38,class:'vtxtm','text-anchor':'middle'},vn(st.a,2)+' m × '+vn(st.a,2)+' m');
   /* Druckbalken rechts */
   const bx=486, by=48, bh=176, bwid=78;
   const skala=Math.max(st.zul*1.6, r.p*1.05);
   ve(s,'rect',{x:bx,y:by,width:bwid,height:bh,fill:'var(--surface-2)',stroke:'var(--line)','stroke-width':1,rx:5});
   const hoehe=Math.min(bh, bh*r.p/skala);
   ve(s,'rect',{x:bx,y:by+bh-hoehe,width:bwid,height:hoehe,rx:4,
     fill: r.p<=st.zul ? 'var(--good)' : '#C2603C', opacity:0.55});
   const yz=by+bh-bh*st.zul/skala;
   ve(s,'line',{x1:bx-8,y1:yz,x2:bx+bwid+6,y2:yz,stroke:'var(--ink)','stroke-width':2,'stroke-dasharray':'5 3'});
   ve(s,'text',{x:bx+bwid+10,y:yz-5,class:'vtxtm'},'zulässig');
   ve(s,'text',{x:bx+bwid+10,y:yz+11,class:'vtxtm'},vn(st.zul,0));
   ve(s,'text',{x:bx+bwid/2,y:by-9,class:'vtxtm','text-anchor':'middle'},'Bodenpressung');
   ve(s,'text',{x:bx+bwid/2,y:by+bh+18,class:'vtxt','text-anchor':'middle'},vn(r.p,0)+' kN/m²');
   ve(s,'text',{x:250,y:268,class:'vtxtm','text-anchor':'middle'},
     r.p<=st.zul ? 'Die Fläche reicht aus.' : 'Mindestens '+vn(r.noetig,2)+' m Kantenlänge nötig.');
 },
 weg:(s,r)=>'F = m · g = '+vn(s.m,0)+' · 9,81 = '+vn(r.F*1000,0)+' N = <b>'+vn(r.F,2)+' kN</b><br>'+
   'A = '+vn(s.a,2)+' · '+vn(s.a,2)+' = <b>'+vn(r.A,4)+' m²</b><br>'+
   'p = F / A = '+vn(r.F,2)+' / '+vn(r.A,4)+' = <b>'+vn(r.p,1)+' kN/m²</b><br>'+
   'Nötige Fläche für '+vn(s.zul,0)+' kN/m²: A = F / p = '+vn(r.F/s.zul,4)+' m² → Kantenlänge '+
   '√'+vn(r.F/s.zul,4)+' = <b>'+vn(r.noetig,3)+' m</b>'
};

/* --- Formeln umstellen --- */
VIZ.umstellen={
 titel:'Formeln umstellen', vb:'0 0 640 250',
 was:'Wähle eine Formel und die gesuchte Größe. Halte im Dreieck das Gesuchte zu – was übrig bleibt, ist die Lösung.',
 regler:[{k:'f',l:'Formel',min:0,max:4,step:1,val:1,
          e:v=>['F = m · a','p = F / A','W = F · s','P = W / t','F_G = m · g'][v]},
         {k:'g',l:'gesucht',min:0,max:2,step:1,val:1,e:(v,s)=>{
            const F=[['F','m','a'],['F','p','A'],['W','F','s'],['W','P','t'],['F_G','m','g']][s.f];
            return F[v];}}],
 rechne:s=>{
   /* [Produkt, Faktor1, Faktor2] - auch die Divisionsformeln lassen sich so lesen */
   const T=[['F','m','a'],['F','p','A'],['W','F','s'],['W','P','t'],['F_G','m','g']][s.f];
   const orig=['F = m · a','p = F / A','W = F · s','P = W / t','F_G = m · g'][s.f];
   const ges=T[s.g];
   let loesung, schritte;
   if(s.g===0){ loesung=T[0]+' = '+T[1]+' · '+T[2];
     schritte=[loesung===orig
       ? 'Die Formel ist bereits nach '+ges+' aufgelöst – hier ist nichts zu tun.'
       : 'Gesucht ist das Produkt '+ges+'. Es steht schon allein: '+loesung]; }
   else { const anderer=T[s.g===1?2:1];
     loesung=ges+' = '+T[0]+' / '+anderer;
     schritte=(loesung===orig)
      ? ['Die Formel ist bereits nach '+ges+' aufgelöst – so steht sie im Buch.',
         'Dass es stimmt, siehst du am Dreieck: '+ges+' zugehalten, übrig bleibt '+T[0]+' über '+anderer+'.']
      : ['Gesucht ist '+ges+'. Es wird mit '+anderer+' multipliziert.',
               'Also beide Seiten durch '+anderer+' teilen:',
               T[0]+' : '+anderer+' = '+T[1]+' · '+T[2]+' : '+anderer,
               'Rechts kürzt sich '+anderer+' weg → '+loesung]; }
   return {T:T, orig:orig, ges:ges, loesung:loesung, schritte:schritte};
 },
 werte:(s,r)=>[['Formel wie im Buch', r.orig,'b'],['gesucht', r.ges,'a'],['umgestellt', r.loesung,'g']],
 zeichne:(s,st,r)=>{
   const cx=300, oy=46, bw=230, bh=58;
   /* Dreieck als Kasten */
   ve(s,'rect',{x:cx-bw/2,y:oy,width:bw,height:bh,fill:st.g===0?'var(--surface-2)':'var(--accent-soft)',
     stroke:'var(--ink)','stroke-width':2});
   ve(s,'text',{x:cx,y:oy+bh/2+8,class:'vtxt','text-anchor':'middle','font-size':'21'},r.T[0]);
   ve(s,'rect',{x:cx-bw/2,y:oy+bh,width:bw/2,height:bh,fill:st.g===1?'var(--accent-soft)':'var(--surface-2)',
     stroke:'var(--ink)','stroke-width':2});
   ve(s,'text',{x:cx-bw/4,y:oy+bh*1.5+8,class:'vtxt','text-anchor':'middle','font-size':'21'},r.T[1]);
   ve(s,'rect',{x:cx,y:oy+bh,width:bw/2,height:bh,fill:st.g===2?'var(--accent-soft)':'var(--surface-2)',
     stroke:'var(--ink)','stroke-width':2});
   ve(s,'text',{x:cx+bw/4,y:oy+bh*1.5+8,class:'vtxt','text-anchor':'middle','font-size':'21'},r.T[2]);
   /* Das Gesuchte durchstreichen = zuhalten */
   const felder=[[cx-bw/2,oy,bw,bh],[cx-bw/2,oy+bh,bw/2,bh],[cx,oy+bh,bw/2,bh]];
   const f=felder[st.g];
   ve(s,'rect',{x:f[0],y:f[1],width:f[2],height:f[3],fill:'var(--accent)'});
   ve(s,'text',{x:f[0]+f[2]/2,y:f[1]+f[3]/2+6,class:'vtxt','text-anchor':'middle',
     'font-size':'13',fill:'#1a1305'},'zugehalten');
   ve(s,'text',{x:cx,y:oy-14,class:'vtxtm','text-anchor':'middle'},'oben das Produkt · unten die beiden Faktoren');
   ve(s,'text',{x:cx,y:oy+2*bh+34,class:'vtxt','text-anchor':'middle','font-size':'17',fill:'var(--accent-deep)'},r.loesung);
   ve(s,'text',{x:cx,y:oy+2*bh+58,class:'vtxtm','text-anchor':'middle'},
     'Was nebeneinander steht, wird multipliziert – was übereinander steht, geteilt.');
 },
 weg:(s,r)=>r.schritte.map(x=>x).join('<br>')+
   '<div class="praxis"><b>Achtung:</b> Das Dreieck hilft nur bei genau <b>drei</b> Größen. '+
   'Bei W = m · g · h oder Q = c · m · Δϑ musst du richtig umstellen – beide Seiten durch alles teilen, was stört.</div>'
};
