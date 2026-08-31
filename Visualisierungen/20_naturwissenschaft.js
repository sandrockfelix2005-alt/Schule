/* ================= NATURWISSENSCHAFT ================= */
const VG=9.81;

/* --- Schiefe Ebene --- */
VIZ.schiefeebene={
 titel:'Kräfte an der schiefen Ebene', vb:'0 0 640 250',
 was:'Der Winkel entscheidet, wie sich die Gewichtskraft aufteilt. Die gestrichelten Linien zeigen: F_N und F_H ergeben zusammen genau F_G.',
 regler:[{k:'al',l:'Neigungswinkel',min:5,max:60,step:1,val:25,e:v=>v+'°'},
         {k:'m',l:'Masse',min:50,max:900,step:10,val:380,e:v=>vn(v,0)+' kg'}],
 rechne:s=>{const r=s.al*Math.PI/180, FG=s.m*VG;
   return {r:r,FG:FG,FN:FG*Math.cos(r),FH:FG*Math.sin(r)};},
 werte:(s,r)=>[['Gewichtskraft F_G', vn(r.FG,0)+' N','a'],['Normalkraft F_N', vn(r.FN,0)+' N','b'],
               ['Hangabtrieb F_H', vn(r.FH,0)+' N','g']],
 zeichne:(s,st,r)=>{
   const bx=70, by=192, len=400, ex=bx+len*Math.cos(r.r), ey=by-len*Math.sin(r.r);
   ve(s,'polygon',{points:`${bx},${by} ${ex},${ey} ${ex},${by}`,fill:'var(--surface)',stroke:'var(--line)','stroke-width':1});
   ve(s,'line',{x1:bx,y1:by,x2:ex,y2:ey,class:'vlinie'});
   ve(s,'path',{d:`M ${bx+58} ${by} A 58 58 0 0 0 ${bx+58*Math.cos(r.r)} ${by-58*Math.sin(r.r)}`,class:'vmasz'});
   ve(s,'text',{x:bx+70,y:by-14,class:'vtxt'},'α = '+st.al+'°');
   const t=0.55, kx=bx+len*t*Math.cos(r.r), ky=by-len*t*Math.sin(r.r);
   const w=34,hh=24, nx=Math.sin(r.r), ny=Math.cos(r.r);
   ve(s,'polygon',{points:[kx-w/2*Math.cos(r.r),ky+w/2*Math.sin(r.r), kx+w/2*Math.cos(r.r),ky-w/2*Math.sin(r.r),
     kx+w/2*Math.cos(r.r)-hh*nx,ky-w/2*Math.sin(r.r)-hh*ny, kx-w/2*Math.cos(r.r)-hh*nx,ky+w/2*Math.sin(r.r)-hh*ny].join(' '),
     fill:'var(--accent-soft)',stroke:'var(--accent)','stroke-width':1.5});
   const sk=85/Math.max(r.FG,1);
   const gx=kx, gy=ky+r.FG*sk, nX=kx+r.FN*sk*nx, nY=ky+r.FN*sk*ny;
   const hX=kx-r.FH*sk*Math.cos(r.r), hY=ky+r.FH*sk*Math.sin(r.r);
   ve(s,'line',{x1:nX,y1:nY,x2:gx,y2:gy,class:'vhilf'});
   ve(s,'line',{x1:hX,y1:hY,x2:gx,y2:gy,class:'vhilf'});
   vpfeil(s,kx,ky,gx,gy,'vkraft');
   ve(s,'text',{x:gx,y:gy+19,class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},'F_G');
   vpfeil(s,kx,ky,nX,nY,'vreak');
   ve(s,'text',{x:nX+11,y:nY+14,class:'vtxt',fill:'var(--blue)'},'F_N');
   vpfeil(s,kx,ky,hX,hY,'vreak');
   ve(s,'text',{x:hX-6,y:hY+20,class:'vtxt','text-anchor':'end',fill:'var(--blue)'},'F_H');
 },
 weg:(s,r)=>'F_G = m · g = '+s.m+' · 9,81 = <b>'+vn(r.FG,1)+' N</b><br>'+
   'F_N = F_G · cos α = '+vn(r.FG,1)+' · '+vn(Math.cos(r.r),5)+' = <b>'+vn(r.FN,1)+' N</b><br>'+
   'F_H = F_G · sin α = '+vn(r.FG,1)+' · '+vn(Math.sin(r.r),5)+' = <b>'+vn(r.FH,1)+' N</b><br>'+
   'Merke: <b>cos</b> für die Normale, <b>sin</b> für den Hang.'
};

/* --- Kraefteparallelogramm --- */
VIZ.parallelogramm={
 titel:'Zwei Kräfte zusammensetzen', vb:'0 0 640 280',
 was:'Zwei Kräfte unter einem Winkel ergeben eine Resultierende. Bei 0° addieren sie sich, bei 180° heben sie sich auf.',
 regler:[{k:'F1',l:'Kraft F₁',min:10,max:200,step:5,val:65,e:v=>vn(v,0)+' N'},
         {k:'F2',l:'Kraft F₂',min:10,max:200,step:5,val:80,e:v=>vn(v,0)+' N'},
         {k:'w',l:'Winkel zwischen beiden',min:0,max:180,step:1,val:120,e:v=>v+'°'}],
 rechne:s=>{const r=s.w*Math.PI/180;
   const R=Math.sqrt(s.F1*s.F1+s.F2*s.F2+2*s.F1*s.F2*Math.cos(r));
   const ri = R<1e-9?0:Math.atan2(s.F2*Math.sin(r), s.F1+s.F2*Math.cos(r));
   return {R:R,r:r,ri:ri*180/Math.PI};},
 werte:(s,r)=>[['Resultierende R', vn(r.R,1)+' N','a'],
               ['Winkel zu F₁', vn(r.ri,1)+'°','b'],
               ['Vergleich: einfach addiert', vn(s.F1+s.F2,0)+' N','g']],
 zeichne:(s,st,r)=>{
   const ox=170, oy=180, sk=Math.min(230/Math.max(r.R,1), 1.4);
   const p1=[ox+st.F1*sk, oy];
   const p2=[ox+st.F2*sk*Math.cos(r.r), oy-st.F2*sk*Math.sin(r.r)];
   const pr=[ox+r.R*sk*Math.cos(r.ri*Math.PI/180), oy-r.R*sk*Math.sin(r.ri*Math.PI/180)];
   ve(s,'line',{x1:p1[0],y1:p1[1],x2:pr[0],y2:pr[1],class:'vhilf'});
   ve(s,'line',{x1:p2[0],y1:p2[1],x2:pr[0],y2:pr[1],class:'vhilf'});
   vpfeil(s,ox,oy,p1[0],p1[1],'vreak');
   ve(s,'text',{x:p1[0]+6,y:p1[1]+17,class:'vtxt',fill:'var(--blue)'},'F₁');
   vpfeil(s,ox,oy,p2[0],p2[1],'vreak');
   ve(s,'text',{x:p2[0]+6,y:p2[1]-7,class:'vtxt',fill:'var(--blue)'},'F₂');
   vpfeil(s,ox,oy,pr[0],pr[1],'vkraft',12);
   ve(s,'text',{x:pr[0]+9,y:pr[1]+4,class:'vtxt',fill:'var(--accent-deep)'},'R = '+vn(r.R,0)+' N');
   ve(s,'path',{d:`M ${ox+42} ${oy} A 42 42 0 0 0 ${ox+42*Math.cos(r.r)} ${oy-42*Math.sin(r.r)}`,class:'vmasz'});
   ve(s,'text',{x:ox+50,y:oy-15,class:'vtxtm'},st.w+'°');
   ve(s,'circle',{cx:ox,cy:oy,r:3,fill:'var(--ink)'});
   ve(s,'text',{x:320,y:258,class:'vtxtm','text-anchor':'middle'},'Die Diagonale des Parallelogramms ist die Resultierende.');
 },
 weg:(s,r)=>'R = √(F₁² + F₂² + 2·F₁·F₂·cos φ)<br>'+
   'R = √('+vn(s.F1*s.F1,0)+' + '+vn(s.F2*s.F2,0)+' + '+vn(2*s.F1*s.F2,0)+'·'+vn(Math.cos(r.r),5)+') = <b>'+vn(r.R,2)+' N</b><br>'+
   (s.w===0?'Bei 0° zeigen beide in dieselbe Richtung – die Kräfte addieren sich einfach.':
    s.w===180?'Bei 180° wirken sie gegeneinander – es bleibt nur die Differenz.':
    'Nur bei 0° ergäbe die einfache Addition '+vn(s.F1+s.F2,0)+' N das richtige Ergebnis.')
};

/* --- Hebelgesetz --- */
VIZ.hebel={
 titel:'Das Hebelgesetz', vb:'0 0 640 250',
 was:'Kraft mal Hebelarm muss auf beiden Seiten gleich sein. Eine kleine Kraft am langen Arm hält eine große am kurzen.',
 regler:[{k:'F1',l:'Kraft links',min:10,max:500,step:10,val:200,e:v=>vn(v,0)+' N'},
         {k:'l1',l:'Hebelarm links',min:0.2,max:2.4,step:0.05,val:0.6,e:v=>vn(v,2)+' m'},
         {k:'l2',l:'Hebelarm rechts',min:0.2,max:2.4,step:0.05,val:1.5,e:v=>vn(v,2)+' m'}],
 rechne:s=>({F2:s.F1*s.l1/s.l2, M:s.F1*s.l1}),
 werte:(s,r)=>[['Drehmoment M', vn(r.M,1)+' Nm','a'],
               ['nötige Kraft rechts', vn(r.F2,1)+' N','b'],
               ['Kraftersparnis', vn((1-r.F2/s.F1)*100,1)+' %','g']],
 zeichne:(s,st,r)=>{
   const cx=320, cy=130, sk=95;
   ve(s,'line',{x1:cx-st.l1*sk,y1:cy,x2:cx+st.l2*sk,y2:cy,class:'vlinie','stroke-width':4});
   ve(s,'polygon',{points:`${cx},${cy+4} ${cx-15},${cy+30} ${cx+15},${cy+30}`,class:'vlinie'});
   ve(s,'line',{x1:cx-22,y1:cy+33,x2:cx+22,y2:cy+33,class:'vlinie'});
   const skF=70/Math.max(st.F1,r.F2,1);
   /* Kräfte drücken von oben auf den Hebel */
   vpfeil(s,cx-st.l1*sk,cy-8-st.F1*skF,cx-st.l1*sk,cy-6,'vkraft');
   ve(s,'text',{x:cx-st.l1*sk,y:cy-16-st.F1*skF,class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},'F₁ = '+vn(st.F1,0)+' N');
   vpfeil(s,cx+st.l2*sk,cy-8-r.F2*skF,cx+st.l2*sk,cy-6,'vreak');
   ve(s,'text',{x:cx+st.l2*sk,y:cy-16-r.F2*skF,class:'vtxt','text-anchor':'middle',fill:'var(--blue)'},'F₂ = '+vn(r.F2,1)+' N');
   [[-st.l1,'l₁'],[st.l2,'l₂']].forEach(([l,n])=>{
     const x=cx+l*sk;
     ve(s,'line',{x1:cx,y1:cy+52,x2:x,y2:cy+52,class:'vmasz'});
     ve(s,'line',{x1:x,y1:cy+47,x2:x,y2:cy+57,class:'vmasz'});
     ve(s,'text',{x:(cx+x)/2,y:cy+70,class:'vtxt','text-anchor':'middle'},n+' = '+vn(Math.abs(l),2)+' m');
   });
   ve(s,'text',{x:cx,y:cy+48,class:'vtxtm','text-anchor':'middle'},'Drehpunkt');
   ve(s,'text',{x:320,y:232,class:'vtxtm','text-anchor':'middle'},'Beide Drehmomente sind gleich groß: '+vn(r.M,1)+' Nm');
 },
 weg:(s,r)=>'F₁ · l₁ = F₂ · l₂<br>'+
   vn(s.F1,0)+' · '+vn(s.l1,2)+' = F₂ · '+vn(s.l2,2)+'  →  F₂ = '+vn(r.M,1)+' / '+vn(s.l2,2)+' = <b>'+vn(r.F2,1)+' N</b><br>'+
   'Je länger der rechte Arm, desto weniger Kraft ist nötig – das Drehmoment bleibt dabei unverändert.'
};

/* --- Auflagerkraefte am Traeger --- */
VIZ.traeger={
 titel:'Auflagerkräfte am Träger', vb:'0 0 640 285',
 was:'Zieh die Last hin und her. Das nähere Auflager trägt mehr – und beide zusammen ergeben immer die Last.',
 regler:[{k:'a',l:'Abstand von A',min:0.3,max:5.7,step:0.05,val:2,e:v=>vn(v,2)+' m'},
         {k:'F',l:'Größe der Last',min:2,max:40,step:0.5,val:12,e:v=>vn(v,1)+' kN'}],
 rechne:s=>{const L=6, FB=s.F*s.a/L; return {L:L,FB:FB,FA:s.F-FB,M:s.F*s.a};},
 werte:(s,r)=>[['Auflagerkraft A', vn(r.FA)+' kN','a'],['Auflagerkraft B', vn(r.FB)+' kN','b'],
               ['Summe = Last', vn(r.FA+r.FB)+' kN','g']],
 zeichne:(s,st,r)=>{
   const X0=50, X1=590, Y=120, px=X0+(st.a/r.L)*(X1-X0);
   ve(s,'line',{x1:X0-18,y1:Y,x2:X1+18,y2:Y,class:'vhilf'});
   ve(s,'line',{x1:X0,y1:Y,x2:X1,y2:Y,class:'vlinie','stroke-width':2.5});
   [[X0,'A'],[X1,'B']].forEach(([x,n])=>{
     ve(s,'polygon',{points:`${x},${Y+2} ${x-13},${Y+24} ${x+13},${Y+24}`,class:'vlinie',fill:'none'});
     ve(s,'line',{x1:x-19,y1:Y+27,x2:x+19,y2:Y+27,class:'vlinie'});
     ve(s,'text',{x:x,y:Y+45,class:'vtxt','text-anchor':'middle'},n);
   });
   vpfeil(s,px,34,px,Y-4,'vkraft');
   ve(s,'text',{x:px,y:26,class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},'F = '+vn(st.F,1)+' kN');
   const sk=46/Math.max(r.FA,r.FB,0.001);
   vpfeil(s,X0,Y+80+r.FA*sk,X0,Y+34,'vreak');
   vpfeil(s,X1,Y+80+r.FB*sk,X1,Y+34,'vreak');
   ve(s,'text',{x:X0,y:Y+96+r.FA*sk,class:'vtxt','text-anchor':'middle',fill:'var(--blue)'},vn(r.FA)+' kN');
   ve(s,'text',{x:X1,y:Y+96+r.FB*sk,class:'vtxt','text-anchor':'middle',fill:'var(--blue)'},vn(r.FB)+' kN');
   ve(s,'line',{x1:X0,y1:Y-58,x2:px,y2:Y-58,class:'vmasz'});
   ve(s,'line',{x1:X0,y1:Y-63,x2:X0,y2:Y-53,class:'vmasz'});
   ve(s,'line',{x1:px,y1:Y-63,x2:px,y2:Y-53,class:'vmasz'});
   ve(s,'text',{x:(X0+px)/2,y:Y-64,class:'vtxtm','text-anchor':'middle'},'a = '+vn(st.a,2)+' m');
   ve(s,'line',{x1:X0,y1:Y+58,x2:X1,y2:Y+58,class:'vmasz'});
   ve(s,'text',{x:(X0+X1)/2,y:Y+54,class:'vtxtm','text-anchor':'middle'},'l = 6,00 m');
 },
 weg:(s,r)=>'Momente um A:  F_B · 6,00 = '+vn(s.F,1)+' · '+vn(s.a,2)+' = '+vn(r.M)+' kNm<br>'+
   'F_B = '+vn(r.M)+' / 6,00 = <b>'+vn(r.FB)+' kN</b><br>'+
   'Kräftegleichgewicht:  F_A = '+vn(s.F,1)+' − '+vn(r.FB)+' = <b>'+vn(r.FA)+' kN</b>'
};

/* --- Kippsicherheit --- */
VIZ.kippen={
 titel:'Kippsicherheit einer Stützmauer', vb:'0 0 640 270',
 was:'Breiter macht standsicher, höher macht kippgefährdet – und zwar im Quadrat. Ab η = 1,5 ist der Nachweis erfüllt.',
 regler:[{k:'h',l:'Höhe der Mauer',min:1,max:5,step:0.1,val:2.8,e:v=>vn(v,1)+' m'},
         {k:'b',l:'Breite unten',min:0.4,max:2.5,step:0.05,val:1.2,e:v=>vn(v,2)+' m'},
         {k:'K',l:'Erddruckbeiwert',min:0.2,max:0.6,step:0.01,val:0.33,e:v=>vn(v,2)}],
 rechne:s=>{const G=s.b*s.h*24, Ms=G*s.b/2, E=0.5*s.K*18*s.h*s.h, Mk=E*s.h/3;
   return {G:G,Ms:Ms,E:E,Mk:Mk,eta:Mk<1e-9?99:Ms/Mk};},
 werte:(s,r)=>[['Eigengewicht G', vn(r.G,2)+' kN/m','a'],
               ['Erddruck E', vn(r.E,2)+' kN/m','b'],
               ['Sicherheit η', vn(r.eta,2)+(r.eta>=1.5?'  ✓':'  ✗'), r.eta>=1.5?'g':'r']],
 zeichne:(s,st,r)=>{
   const sohle=210, sk=Math.min(165/Math.max(st.h,1), 115/Math.max(st.b,0.4));
   const bw=st.b*sk, bh=st.h*sk, lx=232;
   for(let i=0;i<11;i++) ve(s,'line',{x1:lx-70+i*10,y1:sohle,x2:lx-76+i*10,y2:sohle+10,class:'vmasz'});
   ve(s,'line',{x1:lx-72,y1:sohle,x2:lx+bw+180,y2:sohle,class:'vlinie'});
   ve(s,'rect',{x:lx,y:sohle-bh,width:bw,height:bh,class:'vflaeche'});
   ve(s,'rect',{x:lx,y:sohle-bh,width:bw,height:bh,class:'vlinie',fill:'none'});
   /* Erddruckdreieck rechts */
   const dmax=Math.min(140, r.E*3.2);
   ve(s,'polygon',{points:`${lx+bw},${sohle-bh} ${lx+bw},${sohle} ${lx+bw+dmax},${sohle}`,
     fill:'var(--blue)',opacity:0.16});
   for(let i=1;i<=6;i++){const y=sohle-bh+bh*i/7, l=dmax*(y-(sohle-bh))/bh;
     vpfeil(s,lx+bw+l,y,lx+bw+3,y,'vreak',7);}
   const yR=sohle-bh/3;
   ve(s,'circle',{cx:lx,cy:sohle,r:4.5,fill:'var(--accent)'});
   ve(s,'text',{x:lx-10,y:sohle+34,class:'vtxt','text-anchor':'end',fill:'var(--accent-deep)'},'Kippkante');
   vpfeil(s,lx+bw/2,sohle-bh/2,lx+bw/2,sohle-6,'vkraft');
   ve(s,'text',{x:lx+bw/2+9,y:sohle-bh/2-6,class:'vtxt',fill:'var(--accent-deep)'},'G');
   ve(s,'line',{x1:lx+bw,y1:yR,x2:lx+bw+dmax+16,y2:yR,class:'vhilf'});
   ve(s,'text',{x:lx+bw+dmax+22,y:yR+4,class:'vtxt',fill:'var(--blue)'},'E greift bei h/3 an');
   /* Breitenmass unter der Mauer */
   ve(s,'line',{x1:lx,y1:sohle+18,x2:lx+bw,y2:sohle+18,class:'vmasz'});
   ve(s,'line',{x1:lx,y1:sohle+13,x2:lx,y2:sohle+23,class:'vmasz'});
   ve(s,'line',{x1:lx+bw,y1:sohle+13,x2:lx+bw,y2:sohle+23,class:'vmasz'});
   ve(s,'text',{x:lx+bw/2,y:sohle+34,class:'vtxtm','text-anchor':'middle'},'b = '+vn(st.b,2)+' m');
   /* Hoehenmass links */
   ve(s,'line',{x1:lx-30,y1:sohle-bh,x2:lx-30,y2:sohle,class:'vmasz'});
   ve(s,'line',{x1:lx-35,y1:sohle-bh,x2:lx-25,y2:sohle-bh,class:'vmasz'});
   ve(s,'line',{x1:lx-35,y1:sohle,x2:lx-25,y2:sohle,class:'vmasz'});
   ve(s,'text',{x:lx-38,y:sohle-bh/2+4,class:'vtxtm','text-anchor':'end'},'h = '+vn(st.h,1)+' m');
   ve(s,'text',{x:320,y:262,class:'vtxt','text-anchor':'middle',fill:r.eta>=1.5?'var(--good)':'#C2603C'},
     r.eta>=1.5? 'η = '+vn(r.eta,2)+' ≥ 1,5 – Nachweis erfüllt, die Mauer steht.' : 'η = '+vn(r.eta,2)+' < 1,5 – Nachweis nicht erfüllt, die Mauer würde kippen.');
 },
 weg:(s,r)=>'Standsicherndes Moment: G = b·h·γ = '+vn(s.b,2)+' · '+vn(s.h,1)+' · 24 = '+vn(r.G,2)+' kN/m<br>'+
   'M_stand = G · b/2 = '+vn(r.G,2)+' · '+vn(s.b/2,3)+' = <b>'+vn(r.Ms,2)+' kNm/m</b><br>'+
   'Kippendes Moment: E = ½·K·γ_E·h² = ½ · '+vn(s.K,2)+' · 18 · '+vn(s.h*s.h,2)+' = '+vn(r.E,2)+' kN/m<br>'+
   'M_kipp = E · h/3 = '+vn(r.E,2)+' · '+vn(s.h/3,3)+' = <b>'+vn(r.Mk,2)+' kNm/m</b><br>'+
   'η = '+vn(r.Ms,2)+' / '+vn(r.Mk,2)+' = <b>'+vn(r.eta,2)+'</b>'
};

/* --- v-t-Diagramm --- */
VIZ.vtdiagramm={
 titel:'Das v-t-Diagramm', vb:'0 0 640 290',
 was:'Die Fläche unter der Kurve ist der zurückgelegte Weg – deshalb brauchst du hier gar keine Bewegungsformel.',
 regler:[{k:'v',l:'Höchstgeschwindigkeit',min:0.5,max:6,step:0.1,val:3,e:v=>vn(v,1)+' m/s'},
         {k:'t1',l:'Anfahren',min:1,max:12,step:0.5,val:5,e:v=>vn(v,1)+' s'},
         {k:'t2',l:'gleichförmig',min:0,max:20,step:0.5,val:8,e:v=>vn(v,1)+' s'},
         {k:'t3',l:'Bremsen',min:1,max:12,step:0.5,val:3,e:v=>vn(v,1)+' s'}],
 rechne:s=>{const s1=0.5*s.t1*s.v, s2=s.t2*s.v, s3=0.5*s.t3*s.v;
   return {s1:s1,s2:s2,s3:s3,ges:s1+s2+s3,a1:s.v/s.t1,a3:-s.v/s.t3,T:s.t1+s.t2+s.t3};},
 werte:(s,r)=>[['Gesamtweg', vn(r.ges,2)+' m','a'],
               ['Beschleunigung', vn(r.a1,3)+' m/s²','b'],
               ['Gesamtzeit', vn(r.T,1)+' s','g']],
 zeichne:(s,st,r)=>{
   const A=vachsen(s,{x0:0,x1:r.T,y0:0,y1:st.v*1.25,bx:60,by:16,bw:520,bh:220});
   const pts=[[0,0],[st.t1,st.v],[st.t1+st.t2,st.v],[r.T,0]];
   ve(s,'polygon',{points:pts.map(p=>A.X(p[0])+','+A.Y(p[1])).concat([A.X(r.T)+','+A.Y(0)]).join(' '),class:'vflaeche'});
   ve(s,'polyline',{points:pts.map(p=>A.X(p[0])+','+A.Y(p[1])).join(' '),class:'vkurve'});
   /* Trennlinien und Teilflaechen beschriften */
   [[st.t1,'Dreieck',r.s1],[st.t1+st.t2,'Rechteck',r.s2]].forEach(([t])=>{
     ve(s,'line',{x1:A.X(t),y1:A.Y(0),x2:A.X(t),y2:A.Y(st.v),class:'vhilf'});
   });
   const mitte=[[st.t1/2,r.s1,'½·t·v'],[st.t1+st.t2/2,r.s2,'t·v'],[st.t1+st.t2+st.t3/2,r.s3,'½·t·v']];
   mitte.forEach(([x,w,f])=>{ if(w>0.05){
     ve(s,'text',{x:A.X(x),y:A.Y(st.v*0.42),class:'vtxt','text-anchor':'middle'},vn(w,1)+' m');
     ve(s,'text',{x:A.X(x),y:A.Y(st.v*0.42)+15,class:'vtxtm','text-anchor':'middle'},f);
   }});
   ve(s,'text',{x:320,y:276,class:'vtxtm','text-anchor':'middle'},'Zeit in s  ·  senkrecht: Geschwindigkeit in m/s');
 },
 weg:(s,r)=>'Anfahren (Dreieck): ½ · '+vn(s.t1,1)+' · '+vn(s.v,1)+' = '+vn(r.s1,2)+' m<br>'+
   'Gleichförmig (Rechteck): '+vn(s.t2,1)+' · '+vn(s.v,1)+' = '+vn(r.s2,2)+' m<br>'+
   'Bremsen (Dreieck): ½ · '+vn(s.t3,1)+' · '+vn(s.v,1)+' = '+vn(r.s3,2)+' m<br>'+
   'Gesamtweg = <b>'+vn(r.ges,2)+' m</b> – allein über Flächen, ohne eine einzige Bewegungsformel.'
};

/* --- Anhalteweg --- */
VIZ.anhalteweg={
 titel:'Reaktionsweg, Bremsweg, Anhalteweg', vb:'0 0 640 250',
 was:'Der Reaktionsweg wächst gleichmäßig mit der Geschwindigkeit – der Bremsweg im Quadrat. Deshalb wird es schnell gefährlich.',
 regler:[{k:'v',l:'Geschwindigkeit',min:5,max:80,step:1,val:30,e:v=>v+' km/h'},
         {k:'a',l:'Bremsverzögerung',min:2,max:8,step:0.5,val:4.5,e:v=>vn(v,1)+' m/s²'},
         {k:'tr',l:'Reaktionszeit',min:0.5,max:2,step:0.1,val:1,e:v=>vn(v,1)+' s'}],
 rechne:s=>{const v=s.v/3.6, sr=v*s.tr, sb=v*v/(2*s.a);
   return {v:v,sr:sr,sb:sb,ges:sr+sb};},
 werte:(s,r)=>[['Reaktionsweg', vn(r.sr,2)+' m','b'],['Bremsweg', vn(r.sb,2)+' m','a'],
               ['Anhalteweg', vn(r.ges,2)+' m','g']],
 zeichne:(s,st,r)=>{
   const x0=40, breite=560, maxs=90, sk=breite/maxs, y=104;
   ve(s,'line',{x1:x0,y1:y+38,x2:x0+breite,y2:y+38,class:'vlinie'});
   for(let m=0;m<=maxs;m+=10){ const x=x0+m*sk;
     ve(s,'line',{x1:x,y1:y+38,x2:x,y2:y+45,class:'vmasz'});
     ve(s,'text',{x:x,y:y+60,class:'vtxtm','text-anchor':'middle'},m+' m'); }
   const wR=Math.min(r.sr,maxs)*sk, wB=Math.min(r.sb,maxs-Math.min(r.sr,maxs))*sk;
   ve(s,'rect',{x:x0,y:y,width:wR,height:30,fill:'var(--blue)',opacity:0.62,rx:3});
   ve(s,'rect',{x:x0+wR,y:y,width:wB,height:30,fill:'var(--accent)',opacity:0.78,rx:3});
   ve(s,'text',{x:x0+wR/2,y:y-9,class:'vtxt','text-anchor':'middle',fill:'var(--blue)'},'Reaktion '+vn(r.sr,1)+' m');
   ve(s,'text',{x:x0+wR+wB/2,y:y-9,class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},'Bremsen '+vn(r.sb,1)+' m');
   /* Fahrzeug */
   ve(s,'rect',{x:x0-26,y:y+4,width:24,height:22,rx:4,fill:'var(--surface-2)',stroke:'var(--ink)','stroke-width':1.5});
   const ende=x0+wR+wB;
   ve(s,'line',{x1:ende,y1:y-26,x2:ende,y2:y+38,class:'vhilf'});
   ve(s,'text',{x:ende,y:y-32,class:'vtxt','text-anchor':'middle'},'Stillstand nach '+vn(r.ges,1)+' m');
   if(r.ges>maxs) ve(s,'text',{x:320,y:200,class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},'Der Balken ist bei 90 m abgeschnitten.');
   ve(s,'text',{x:320,y:222,class:'vtxtm','text-anchor':'middle'},'Doppelte Geschwindigkeit heißt vierfacher Bremsweg.');
 },
 weg:(s,r)=>'v = '+s.v+' : 3,6 = '+vn(r.v,3)+' m/s<br>'+
   'Reaktionsweg = v · t = '+vn(r.v,3)+' · '+vn(s.tr,1)+' = <b>'+vn(r.sr,2)+' m</b>  (gleichförmige Bewegung)<br>'+
   'Bremsweg = v² / (2·a) = '+vn(r.v*r.v,2)+' / '+vn(2*s.a,1)+' = <b>'+vn(r.sb,2)+' m</b><br>'+
   'Anhalteweg = <b>'+vn(r.ges,2)+' m</b>'
};

/* --- Wirkungsgradkette --- */
VIZ.wirkungsgrad={
 titel:'Die Wirkungsgradkette', vb:'0 0 640 245',
 was:'Jede Stufe frisst einen Anteil. Weil multipliziert wird, sinkt der Gesamtwirkungsgrad schnell unter die einzelnen Werte.',
 regler:[{k:'P',l:'zugeführte Leistung',min:1,max:30,step:0.5,val:13,e:v=>vn(v,1)+' kW'},
         {k:'e1',l:'Motor',min:0.5,max:0.99,step:0.01,val:0.95,e:v=>vn(v,2)},
         {k:'e2',l:'Getriebe',min:0.5,max:0.99,step:0.01,val:0.88,e:v=>vn(v,2)},
         {k:'e3',l:'Seiltrieb',min:0.5,max:0.99,step:0.01,val:0.72,e:v=>vn(v,2)}],
 rechne:s=>{const e=s.e1*s.e2*s.e3;
   return {e:e, P1:s.P*s.e1, P2:s.P*s.e1*s.e2, P3:s.P*e, verlust:s.P*(1-e)};},
 werte:(s,r)=>[['Gesamtwirkungsgrad', vn(r.e,4)+'  ('+vn(r.e*100,1)+' %)','a'],
               ['Nutzleistung', vn(r.P3,2)+' kW','b'],
               ['Verlust', vn(r.verlust,2)+' kW','g']],
 zeichne:(s,st,r)=>{
   const x0=112, breite=384, y=26, hoch=50, sk=breite/st.P;
   const stufen=[['zugeführt',st.P,'var(--accent)'],['nach Motor',r.P1,'var(--blue)'],
                 ['nach Getriebe',r.P2,'var(--blue)'],['an der Last',r.P3,'var(--good)']];
   stufen.forEach((st2,i)=>{
     const yy=y+i*hoch;
     ve(s,'rect',{x:x0,y:yy,width:Math.max(2,st2[1]*sk),height:30,fill:st2[2],opacity:0.72,rx:4});
     ve(s,'text',{x:x0-10,y:yy+20,class:'vtxtm','text-anchor':'end'},st2[0]);
     ve(s,'text',{x:x0+breite+16,y:yy+20,class:'vtxt'},vn(st2[1],2)+' kW');
     if(i>0){
       const vor=stufen[i-1][1], w=(vor-st2[1])*sk;
       if(w>4) ve(s,'rect',{x:x0+st2[1]*sk,y:yy,width:w,height:30,fill:'#C2603C',opacity:0.22,rx:4});
     }
   });
   ve(s,'text',{x:320,y:y+4*hoch+6,class:'vtxtm','text-anchor':'middle'},
     'rot schraffiert = Verlust der jeweiligen Stufe · η_ges = '+vn(st.e1,2)+' · '+vn(st.e2,2)+' · '+vn(st.e3,2)+' = '+vn(r.e,4));
 },
 weg:(s,r)=>'η_ges = η₁ · η₂ · η₃ = '+vn(s.e1,2)+' · '+vn(s.e2,2)+' · '+vn(s.e3,2)+' = <b>'+vn(r.e,4)+'</b><br>'+
   'P_ab = P_zu · η_ges = '+vn(s.P,1)+' · '+vn(r.e,4)+' = <b>'+vn(r.P3,2)+' kW</b><br>'+
   'Verloren gehen '+vn(r.verlust,2)+' kW = '+vn((1-r.e)*100,1)+' %. Die Wirkungsgrade werden <b>multipliziert</b>, nicht gemittelt.'
};

/* --- Schweredruck --- */
VIZ.schweredruck={
 titel:'Wasserdruck an einer Wand', vb:'0 0 640 260',
 was:'Der Druck wächst linear mit der Tiefe – die Druckfläche ist deshalb ein Dreieck, und die Resultierende greift bei h/3 an.',
 regler:[{k:'h',l:'Wasserstand',min:0.5,max:8,step:0.1,val:2.6,e:v=>vn(v,1)+' m'},
         {k:'b',l:'Wandbreite',min:1,max:15,step:0.5,val:8,e:v=>vn(v,1)+' m'}],
 rechne:s=>{const p=1000*VG*s.h, F=0.5*p*s.h*s.b;
   return {p:p,F:F,arm:s.h/3};},
 werte:(s,r)=>[['Druck am Fuß', vn(r.p,0)+' Pa','a'],
               ['Resultierende Kraft', vn(r.F/1000,2)+' kN','b'],
               ['Angriffspunkt', vn(r.arm,3)+' m über der Sohle','g']],
 zeichne:(s,st,r)=>{
   const wx=250, sohle=214, hoch=Math.min(170, st.h*30), wy0=sohle-hoch;
   const br=Math.min(190, r.p/1000*4.4);
   ve(s,'line',{x1:wx,y1:wy0-14,x2:wx,y2:sohle,class:'vlinie','stroke-width':2.5});
   ve(s,'line',{x1:wx-60,y1:sohle,x2:wx+250,y2:sohle,class:'vlinie'});
   for(let i=0;i<9;i++) ve(s,'line',{x1:wx-58+i*10,y1:sohle,x2:wx-64+i*10,y2:sohle+10,class:'vmasz'});
   ve(s,'polygon',{points:`${wx},${wy0} ${wx},${sohle} ${wx+br},${sohle}`,class:'vflaeche'});
   ve(s,'line',{x1:wx,y1:wy0,x2:wx+br,y2:sohle,class:'vkurve'});
   for(let i=1;i<=7;i++){const y=wy0+hoch*i/8, l=br*(y-wy0)/hoch; vpfeil(s,wx+l,y,wx+4,y,'vkraft',7);}
   ve(s,'text',{x:wx+br+10,y:sohle-8,class:'vtxt',fill:'var(--accent-deep)'},'p = '+vn(r.p,0)+' Pa');
   ve(s,'text',{x:wx+14,y:wy0+13,class:'vtxtm'},'oben: p = 0');
   const yR=sohle-hoch/3;
   ve(s,'line',{x1:wx-40,y1:yR,x2:wx+br,y2:yR,class:'vhilf'});
   vpfeil(s,wx+Math.min(br,130),yR,wx+6,yR,'vreak');
   ve(s,'text',{x:wx+Math.min(br,130)+8,y:yR-7,class:'vtxt',fill:'var(--blue)'},'F = '+vn(r.F/1000,1)+' kN');
   ve(s,'line',{x1:wx-34,y1:yR,x2:wx-34,y2:sohle,class:'vmasz'});
   ve(s,'text',{x:wx-40,y:(yR+sohle)/2+4,class:'vtxt','text-anchor':'end'},'h/3');
   ve(s,'line',{x1:wx-88,y1:wy0,x2:wx-88,y2:sohle,class:'vmasz'});
   ve(s,'text',{x:wx-94,y:(wy0+sohle)/2+4,class:'vtxt','text-anchor':'end'},'h = '+vn(st.h,1)+' m');
   ve(s,'text',{x:320,y:246,class:'vtxtm','text-anchor':'middle'},'Der Schwerpunkt eines Dreiecks liegt bei einem Drittel – nicht in der Mitte.');
 },
 weg:(s,r)=>'p = ρ · g · h = 1000 · 9,81 · '+vn(s.h,1)+' = <b>'+vn(r.p,0)+' Pa</b> = '+vn(r.p/100000,4)+' bar<br>'+
   'Der Druck steigt dreieckförmig, im Mittel wirkt also p/2:<br>'+
   'F = ½ · p · h · b = ½ · '+vn(r.p,0)+' · '+vn(s.h,1)+' · '+vn(s.b,1)+' = <b>'+vn(r.F,0)+' N</b> = '+vn(r.F/1000,2)+' kN<br>'+
   'Angriffspunkt: h/3 = <b>'+vn(r.arm,3)+' m</b> über der Sohle'
};

/* --- Hydraulik --- */
VIZ.hydraulik={
 titel:'Hydraulische Kraftübersetzung', vb:'0 0 640 260',
 was:'Was du an Kraft gewinnst, verlierst du an Weg. Der Druck ist in der ganzen Flüssigkeit gleich groß.',
 regler:[{k:'A1',l:'kleine Kolbenfläche',min:1,max:20,step:0.5,val:4,e:v=>vn(v,1)+' cm²'},
         {k:'A2',l:'große Kolbenfläche',min:40,max:600,step:10,val:320,e:v=>vn(v,0)+' cm²'},
         {k:'F1',l:'Kraft am kleinen Kolben',min:20,max:800,step:10,val:250,e:v=>vn(v,0)+' N'},
         {k:'s2',l:'Hub des großen Kolbens',min:1,max:20,step:0.5,val:2,e:v=>vn(v,1)+' cm'}],
 rechne:s=>({F2:s.F1*s.A2/s.A1, p:s.F1/(s.A1/10000), i:s.A2/s.A1, s1:s.s2*s.A2/s.A1}),
 werte:(s,r)=>[['Kraft am großen Kolben', vn(r.F2/1000,2)+' kN','a'],
               ['Übersetzung', vn(r.i,1)+' : 1','b'],
               ['nötiger Hub am kleinen', vn(r.s1,1)+' cm','g']],
 zeichne:(s,st,r)=>{
   const y=170, boden=196;
   const b1=Math.max(16,Math.sqrt(st.A1)*9), b2=Math.max(30,Math.sqrt(st.A2)*4.4);
   const x1=130, x2=430;
   ve(s,'path',{d:`M ${x1-b1/2} ${y-60} L ${x1-b1/2} ${boden} L ${x2+b2/2} ${boden} L ${x2+b2/2} ${y-70}`,
     fill:'none',stroke:'var(--line)','stroke-width':2});
   ve(s,'path',{d:`M ${x1-b1/2} ${y} L ${x1-b1/2} ${boden} L ${x2+b2/2} ${boden} L ${x2+b2/2} ${y-24} L ${x2-b2/2} ${y-24} L ${x2-b2/2} ${boden-6} L ${x1+b1/2} ${boden-6} L ${x1+b1/2} ${y} Z`,
     fill:'var(--blue)',opacity:0.18});
   ve(s,'rect',{x:x1-b1/2,y:y-10,width:b1,height:11,fill:'var(--surface-2)',stroke:'var(--ink)','stroke-width':1.5});
   ve(s,'rect',{x:x2-b2/2,y:y-34,width:b2,height:11,fill:'var(--surface-2)',stroke:'var(--ink)','stroke-width':1.5});
   const sk=Math.min(80/Math.max(st.F1,1), 80/Math.max(r.F2/1000*4,1));
   vpfeil(s,x1,y-10-Math.min(70,st.F1*0.12)-16,x1,y-14,'vkraft');
   ve(s,'text',{x:x1,y:y-32-Math.min(70,st.F1*0.12),class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},'F₁ = '+vn(st.F1,0)+' N');
   const lg=Math.min(84, r.F2/1000*7);
   vpfeil(s,x2,y-38,x2,y-38-lg,'vreak');
   ve(s,'text',{x:x2,y:y-46-lg,class:'vtxt','text-anchor':'middle',fill:'var(--blue)'},'F₂ = '+vn(r.F2/1000,1)+' kN hebt');
   ve(s,'text',{x:x1,y:boden+22,class:'vtxtm','text-anchor':'middle'},'A₁ = '+vn(st.A1,1)+' cm²');
   ve(s,'text',{x:x2,y:boden+22,class:'vtxtm','text-anchor':'middle'},'A₂ = '+vn(st.A2,0)+' cm²');
   ve(s,'text',{x:(x1+x2)/2,y:boden-16,class:'vtxt','text-anchor':'middle',fill:'var(--blue)'},'p = '+vn(r.p/100000,2)+' bar überall gleich');
   ve(s,'text',{x:320,y:244,class:'vtxtm','text-anchor':'middle'},'Kraft mal Weg bleibt auf beiden Seiten gleich – Arbeit lässt sich nicht vermehren.');
 },
 weg:(s,r)=>'Der Druck ist überall gleich: p = F₁/A₁ = F₂/A₂<br>'+
   'F₂ = F₁ · A₂/A₁ = '+vn(s.F1,0)+' · '+vn(s.A2,0)+'/'+vn(s.A1,1)+' = '+vn(s.F1,0)+' · '+vn(r.i,1)+' = <b>'+vn(r.F2,0)+' N</b><br>'+
   'Weg: s₁ = s₂ · A₂/A₁ = '+vn(s.s2,1)+' · '+vn(r.i,1)+' = <b>'+vn(r.s1,1)+' cm</b><br>'+
   'Probe über die Arbeit: '+vn(s.F1,0)+' N · '+vn(r.s1/100,3)+' m = '+vn(s.F1*r.s1/100,1)+' J  und  '+vn(r.F2,0)+' N · '+vn(s.s2/100,3)+' m = '+vn(r.F2*s.s2/100,1)+' J ✓'
};

/* --- Auftrieb --- */
VIZ.auftrieb={
 titel:'Auftrieb einer Kellerwanne', vb:'0 0 640 270',
 was:'Der Auftrieb richtet sich nach dem verdrängten Volumen, nicht nach dem Beton. Reicht das Eigengewicht nicht, schwimmt die Wanne auf.',
 regler:[{k:'l',l:'Länge',min:5,max:25,step:0.5,val:12,e:v=>vn(v,1)+' m'},
         {k:'b',l:'Breite',min:4,max:20,step:0.5,val:9,e:v=>vn(v,1)+' m'},
         {k:'t',l:'Eintauchtiefe',min:0.4,max:4,step:0.1,val:1.8,e:v=>vn(v,1)+' m'},
         {k:'d',l:'Bauteildicke',min:0.2,max:0.8,step:0.05,val:0.3,e:v=>vn(v,2)+' m'}],
 rechne:s=>{const V=s.l*s.b*s.t, FA=1000*VG*V/1000;
   const beton=s.l*s.b*s.d + 2*(s.l+s.b)*2.2*s.d, G=beton*24;
   return {V:V,FA:FA,beton:beton,G:G,eta:G/FA};},
 werte:(s,r)=>[['Auftriebskraft', vn(r.FA,1)+' kN','a'],['Eigengewicht', vn(r.G,1)+' kN','b'],
               ['Sicherheit η', vn(r.eta,3)+(r.eta>=1.05?'  ✓':'  ✗'), r.eta>=1.05?'g':'r']],
 zeichne:(s,st,r)=>{
   const cx=320, wsp=110, sk=Math.min(360/st.l, 46/Math.max(st.t,0.4));
   const bw=st.l*sk, bt=st.t*sk;
   ve(s,'rect',{x:40,y:wsp,width:560,height:130,fill:'var(--blue)',opacity:0.13});
   ve(s,'line',{x1:40,y1:wsp,x2:600,y2:wsp,stroke:'var(--blue)','stroke-width':2});
   ve(s,'text',{x:52,y:wsp-9,class:'vtxtm',fill:'var(--blue)'},'Grundwasserstand');
   const oben=wsp-bt*0.45, unten=wsp+bt;
   ve(s,'path',{d:`M ${cx-bw/2} ${oben} L ${cx-bw/2} ${unten} L ${cx+bw/2} ${unten} L ${cx+bw/2} ${oben}`,
     fill:'none',stroke:'var(--ink)','stroke-width':3});
   ve(s,'rect',{x:cx-bw/2,y:wsp,width:bw,height:unten-wsp,fill:'var(--accent)',opacity:0.14});
   for(let i=0;i<=6;i++){const x=cx-bw/2+bw*i/6;
     vpfeil(s,x,unten+34,x,unten+6,'vreak',7);}
   ve(s,'text',{x:cx,y:unten+52,class:'vtxt','text-anchor':'middle',fill:'var(--blue)'},'Auftrieb '+vn(r.FA,0)+' kN');
   vpfeil(s,cx,oben-46,cx,oben-8,'vkraft');
   ve(s,'text',{x:cx,y:oben-54,class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},'Eigengewicht '+vn(r.G,0)+' kN');
   ve(s,'text',{x:cx,y:252,class:'vtxt','text-anchor':'middle',fill:r.eta>=1.05?'var(--good)':'var(--bad,#C2603C)'},
     r.eta>=1.05? 'η = '+vn(r.eta,3)+' – die Wanne bleibt liegen.' : 'η = '+vn(r.eta,3)+' – die Wanne schwimmt auf!');
 },
 weg:(s,r)=>'Verdrängtes Volumen: V = '+vn(s.l,1)+' · '+vn(s.b,1)+' · '+vn(s.t,1)+' = '+vn(r.V,2)+' m³<br>'+
   'F_A = ρ · g · V = 1000 · 9,81 · '+vn(r.V,2)+' = <b>'+vn(r.FA*1000,0)+' N</b> = '+vn(r.FA,1)+' kN<br>'+
   'Beton: Bodenplatte + Wände = '+vn(r.beton,2)+' m³ → G = '+vn(r.beton,2)+' · 24 = <b>'+vn(r.G,1)+' kN</b><br>'+
   'η = G / F_A = <b>'+vn(r.eta,3)+'</b>  (gefordert mindestens 1,05)'
};

/* --- Laengenausdehnung --- */
VIZ.ausdehnung={
 titel:'Wärmedehnung', vb:'0 0 640 230',
 was:'Die Längenänderung wächst mit Länge und Temperaturunterschied. Sie ist klein – aber die Kräfte, die entstehen wenn man sie behindert, sind es nicht.',
 regler:[{k:'stoff',l:'Baustoff',min:0,max:4,step:1,val:0,e:v=>['Beton','Stahl','Aluminium','Kupfer','Mauerwerk'][v]},
         {k:'l',l:'Länge',min:2,max:80,step:1,val:12.5,e:v=>vn(v,1)+' m'},
         {k:'dt',l:'Temperaturänderung',min:5,max:80,step:1,val:33,e:v=>v+' K'}],
 rechne:s=>{const al=[12,12,23,16,6][s.stoff]*1e-6;
   return {al:al, dl:al*s.l*s.dt, name:['Beton','Stahl','Aluminium','Kupfer','Mauerwerk'][s.stoff]};},
 werte:(s,r)=>[['Ausdehnungszahl α', vn(r.al*1e6,0)+'·10⁻⁶ 1/K','a'],
               ['Längenänderung', vn(r.dl*1000,2)+' mm','b'],
               ['neue Länge', vn(s.l+r.dl,4)+' m','g']],
 zeichne:(s,st,r)=>{
   const x0=60, breite=500, y=88;
   ve(s,'rect',{x:x0,y:y,width:breite,height:26,fill:'var(--surface-2)',stroke:'var(--line)','stroke-width':1.5,rx:3});
   ve(s,'text',{x:x0+breite/2,y:y+18,class:'vtxt','text-anchor':'middle'},r.name+', kalt');
   const lupe=6000;                                   /* Dehnung 6000-fach ueberhoeht zeigen */
   const zu=Math.min(90, r.dl/st.l*breite*lupe/10);
   const y2=y+62;
   ve(s,'rect',{x:x0,y:y2,width:breite+zu,height:26,fill:'var(--accent)',opacity:0.28,rx:3});
   ve(s,'rect',{x:x0,y:y2,width:breite+zu,height:26,fill:'none',stroke:'var(--accent)','stroke-width':1.5,rx:3});
   ve(s,'text',{x:x0+breite/2,y:y2+18,class:'vtxt','text-anchor':'middle'},r.name+', um '+st.dt+' K erwärmt');
   ve(s,'line',{x1:x0+breite,y1:y-10,x2:x0+breite,y2:y2+38,class:'vhilf'});
   vpfeil(s,x0+breite,y2+50,x0+breite+zu,y2+50,'vkraft',8);
   ve(s,'text',{x:x0+breite+zu+10,y:y2+54,class:'vtxt',fill:'var(--accent-deep)'},'Δl = '+vn(r.dl*1000,2)+' mm');
   ve(s,'text',{x:320,y:200,class:'vtxtm','text-anchor':'middle'},'Die Dehnung ist in der Zeichnung stark übertrieben dargestellt.');
 },
 weg:(s,r)=>'Δl = α · l₁ · Δϑ = '+vn(r.al*1e6,0)+'·10⁻⁶ · '+vn(s.l,1)+' · '+s.dt+'<br>'+
   'Δl = '+vn(r.dl,6)+' m = <b>'+vn(r.dl*1000,2)+' mm</b><br>'+
   'Bezogen auf die Länge sind das nur '+vn(r.dl/s.l*100,4)+' % – genau deshalb reichen schmale Dehnfugen aus, '+
   'und genau deshalb reißt es, wenn man sie weglässt.'
};

/* --- Mischtemperatur --- */
VIZ.mischen={
 titel:'Mischtemperatur', vb:'0 0 640 260',
 was:'Die Mischtemperatur liegt immer zwischen beiden Ausgangswerten – und zwar näher bei der größeren Menge.',
 regler:[{k:'m1',l:'Menge kalt',min:10,max:300,step:10,val:80,e:v=>v+' l'},
         {k:'t1',l:'Temperatur kalt',min:1,max:40,step:1,val:15,e:v=>v+' °C'},
         {k:'m2',l:'Menge warm',min:10,max:300,step:10,val:40,e:v=>v+' l'},
         {k:'t2',l:'Temperatur warm',min:40,max:95,step:1,val:70,e:v=>v+' °C'}],
 rechne:s=>({tm:(s.m1*s.t1+s.m2*s.t2)/(s.m1+s.m2), mg:s.m1+s.m2,
             Q:4.19*s.m2*(s.t2-(s.m1*s.t1+s.m2*s.t2)/(s.m1+s.m2))}),
 werte:(s,r)=>[['Mischtemperatur', vn(r.tm,2)+' °C','a'],
               ['Gesamtmenge', vn(r.mg,0)+' l','b'],
               ['übertragene Wärme', vn(r.Q,1)+' kJ','g']],
 zeichne:(s,st,r)=>{
   const y0=40, hoch=150, sk=hoch/300;
   const zeichneBehaelter=(x,m,t,farbe,name)=>{
     const bh=Math.max(10,m*sk), by=y0+hoch-bh;
     ve(s,'rect',{x:x-42,y:y0,width:84,height:hoch,fill:'none',stroke:'var(--line)','stroke-width':1.5,rx:4});
     ve(s,'rect',{x:x-40,y:by,width:80,height:bh-2,fill:farbe,opacity:0.34,rx:3});
     ve(s,'text',{x:x,y:y0+hoch+20,class:'vtxt','text-anchor':'middle'},m+' l');
     ve(s,'text',{x:x,y:y0+hoch+37,class:'vtxt','text-anchor':'middle',fill:farbe},t+' °C');
     ve(s,'text',{x:x,y:y0-10,class:'vtxtm','text-anchor':'middle'},name);
   };
   zeichneBehaelter(110,st.m1,st.t1,'var(--blue)','kalt');
   zeichneBehaelter(300,st.m2,st.t2,'var(--accent)','warm');
   zeichneBehaelter(520,r.mg,vn(r.tm,1),'var(--good)','gemischt');
   vpfeil(s,170,110,236,110,'vhilf2',8);
   vpfeil(s,360,110,448,110,'vhilf2',8);
   /* Temperaturskala */
   const sx=40, sy=232, sb=560;
   ve(s,'line',{x1:sx,y1:sy,x2:sx+sb,y2:sy,class:'vmasz'});
   const T=(t)=>sx+t/100*sb;
   [0,25,50,75,100].forEach(t=>{ve(s,'line',{x1:T(t),y1:sy-4,x2:T(t),y2:sy+4,class:'vmasz'});
     ve(s,'text',{x:T(t),y:sy+17,class:'vtxtm','text-anchor':'middle'},t+'°');});
   ve(s,'circle',{cx:T(st.t1),cy:sy,r:5,fill:'var(--blue)'});
   ve(s,'circle',{cx:T(st.t2),cy:sy,r:5,fill:'var(--accent)'});
   ve(s,'circle',{cx:T(r.tm),cy:sy,r:6,fill:'var(--good)'});
   ve(s,'text',{x:T(r.tm),y:sy-11,class:'vtxt','text-anchor':'middle',fill:'var(--good)'},vn(r.tm,1)+'°');
 },
 weg:(s,r)=>'Energieerhaltung: Q_ab = Q_auf. Weil beide Male Wasser vorliegt, kürzt sich c heraus:<br>'+
   'ϑ_m = (m₁·ϑ₁ + m₂·ϑ₂) / (m₁ + m₂)<br>'+
   'ϑ_m = ('+s.m1+'·'+s.t1+' + '+s.m2+'·'+s.t2+') / '+vn(r.mg,0)+' = '+vn(s.m1*s.t1+s.m2*s.t2,0)+' / '+vn(r.mg,0)+' = <b>'+vn(r.tm,2)+' °C</b><br>'+
   'Die Mischtemperatur ist der <b>mit den Mengen gewichtete Mittelwert</b>.'
};
