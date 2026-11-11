/* ================= GRAFIKEN ZU DEN ALTKLAUSUREN =================
   Zu jeder Aufgabe der beiden Mathematik-Pruefungen eine Zeichnung,
   die man Schritt fuer Schritt durchschieben kann.
   Gebaut aus Bausteinen, weil beide Pruefungen dasselbe Schema haben.
================================================================= */

/* Achsenkreuz plus beschnittene Zeichenebene: ohne den Beschnitt laufen die
   Kurven unten aus dem Feld heraus und quer durch die Textzeilen. */
function akFeld(s,o){
  const A=vachsen(s,o);
  const id='akf'+Math.random().toString(36).slice(2,9);
  const cp=ve(ve(s,'defs',{}),'clipPath',{id:id});
  ve(cp,'rect',{x:o.bx,y:o.by,width:o.bw,height:o.bh});
  return {A:A, g:ve(s,'g',{'clip-path':'url(#'+id+')'})};
}

/* ---------- 1. Kurvendiskussion einer Parabel ---------- */
function akKurve(o){
  const f  = x => o.a*x*x + o.b*x + o.c;
  const fm = x => o.a*x*x - o.b*x + o.c;          /* f(-x) */
  const xs = -o.b/(2*o.a), ys = f(xs);
  const D  = o.b*o.b - 4*o.a*o.c;
  const N  = D>=0 ? [(-o.b+Math.sqrt(D))/(2*o.a), (-o.b-Math.sqrt(D))/(2*o.a)].sort((p,q)=>p-q) : [];
  const SCHRITT=['nur der Graph','+ Nullstellen','+ Hochpunkt','+ Symmetrie-Probe'];
  return {
  titel:o.titel, vb:'0 0 640 350',
  was:'Schiebe den Regler durch die Kurvendiskussion. Der letzte Schritt zeigt, warum die Kurve <b>nicht</b> achsensymmetrisch ist – genau die Frage, die auf dem Aufgabenblatt steht.',
  regler:[{k:'s',l:'Schritt',min:0,max:3,step:1,val:3,e:v=>SCHRITT[v]}],
  rechne:()=>({xs:xs,ys:ys,N:N}),
  werte:(st,r)=>[
    ['Nullstellen', r.N.length? r.N.map(x=>'('+vn(x,x%1?2:0)+' | 0)').join('   ') : 'keine','b'],
    ['Hochpunkt','('+vn(r.xs,r.xs%1?2:0)+' | '+vn(r.ys,r.ys%1?2:0)+')','a'],
    ['Symmetrie','keine (weder zur y-Achse noch zum Ursprung)','g']],
  zeichne:(s,st,r)=>{
    const {A,g}=akFeld(s,{x0:o.x0,x1:o.x1,y0:o.y0,y1:o.y1,bx:54,by:16,bw:534,bh:280});
    /* Spiegelkurve zuerst, damit sie hinter der echten liegt */
    if(st.s>=3){
      vgraf(g,A,fm,o.x0,o.x1,'vkurve2',220);
      const mx=-xs, my=ys;
      if(mx>o.x0+0.4 && mx<o.x1-0.4)
        ve(s,'text',{x:A.X(mx),y:A.Y(my)-13,class:'vtxt','text-anchor':'middle',fill:'var(--blue)'},'f(−x)');
    }
    vgraf(g,A,f,o.x0,o.x1,'vkurve',220);
    ve(s,'text',{x:62,y:34,class:'vtxt',fill:'var(--accent-deep)'},'f(x)');
    if(st.s>=1) r.N.forEach((x,i)=>{
      ve(s,'circle',{cx:A.X(x),cy:A.Y(0),r:5,fill:'var(--blue)'});
      ve(s,'text',{x:A.X(x),y:A.Y(0)+34,class:'vtxt','text-anchor':'middle',fill:'var(--blue)'},
        'N'+(i===0?'₁':'₂')+'('+vn(x,x%1?2:0)+' | 0)');
    });
    if(st.s>=2){
      ve(s,'line',{x1:A.X(xs)-52,y1:A.Y(ys),x2:A.X(xs)+52,y2:A.Y(ys),class:'vhilf2'});
      ve(s,'line',{x1:A.X(xs),y1:A.Y(ys),x2:A.X(xs),y2:A.Y(0),class:'vhilf'});
      ve(s,'circle',{cx:A.X(xs),cy:A.Y(ys),r:5.5,fill:'var(--accent)'});
      /* Schild auf die vom y-Achsen-Zahlenband abgewandte Seite legen */
      const li = xs < 0;
      ve(s,'text',{x:A.X(xs)+(li?-11:11),y:A.Y(ys)-5,class:'vtxt',
        'text-anchor':li?'end':'start',fill:'var(--accent-deep)'},
        'H('+vn(xs,xs%1?2:0)+' | '+vn(ys,ys%1?2:0)+')');
      ve(s,'text',{x:58,y:314,class:'vtxtm'},'f′(x) = 0 → waagerechte Tangente im Hochpunkt');
    }
    if(st.s>=3)
      ve(s,'text',{x:58,y:336,class:'vtxtm',fill:'var(--blue)'},
        'Blau ist f(−x). Es liegt nicht auf f(x) → keine Achsensymmetrie zur y-Achse.');
  },
  weg:()=>o.weg};
}

/* ---------- 2. Flaecheninteg ral ---------- */
function akFlaeche(o){
  const f=o.f, F=o.F;
  return {
  titel:o.titel, vb:'0 0 640 340',
  was:'Zieh die rechte Grenze nach rechts. Die orange Fläche wächst – und der Wert des Integrals wächst genauso mit.',
  regler:[{k:'t',l:'rechte Grenze b',min:o.a,max:o.b,step:o.schritt,val:o.b,e:v=>'x = '+vn(v,2)}],
  rechne:st=>({A:F(st.t)-F(o.a)}),
  werte:(st,r)=>[
    ['Stammfunktion', o.Ftxt,'a'],
    ['F(b) − F(a)', vn(F(st.t),4)+' − '+(F(o.a)<0?'('+vn(F(o.a),4)+')':vn(F(o.a),4)),'b'],
    ['Fläche A', vn(r.A,4)+' FE','g']],
  zeichne:(s,st,r)=>{
    const {A,g}=akFeld(s,{x0:o.x0,x1:o.x1,y0:o.y0,y1:o.y1,bx:54,by:16,bw:534,bh:272});
    /* Flaeche unter der Kurve */
    if(st.t>o.a+1e-9){
      let d='M '+A.X(o.a)+' '+A.Y(0);
      const n=90; for(let i=0;i<=n;i++){const x=o.a+(st.t-o.a)*i/n; d+=' L '+A.X(x).toFixed(1)+' '+A.Y(f(x)).toFixed(1);}
      d+=' L '+A.X(st.t)+' '+A.Y(0)+' Z';
      ve(g,'path',{d:d,class:'vflaeche'});
    }
    vgraf(g,A,f,o.x0,o.x1,'vkurve',220);
    /* Grenzen */
    [[o.a,'a',306],[st.t,'b',328]].forEach(g=>{
      ve(s,'line',{x1:A.X(g[0]),y1:g[2]-12,x2:A.X(g[0]),y2:A.Y(f(g[0])),class:'vhilf2'});
      ve(s,'text',{x:A.X(g[0]),y:g[2],class:'vtxt','text-anchor':'middle',fill:'var(--accent-deep)'},
        g[1]+' = '+vn(g[0],g[0]%1?2:0));
    });
    /* Beschriftung in der Flaeche */
    const xm=(o.a+st.t)/2;
    if(st.t-o.a>0.25)
      ve(s,'text',{x:Math.min(530,Math.max(96,A.X(xm))),y:A.Y(0)-30,class:'vtxt','text-anchor':'middle',
        fill:'var(--accent-deep)'},'A = '+vn(r.A,3)+' FE');
    ve(s,'text',{x:584,y:34,class:'vtxt','text-anchor':'end',fill:'var(--accent-deep)'},'f(x)');
  },
  weg:()=>o.weg};
}

/* ---------- 3. Rotationskoerper ---------- */
function akVolumen(o){
  const f=o.f, G=o.G;
  return {
  titel:o.titel, vb:'0 0 640 330',
  was:'Die Kurve rotiert um die x-Achse. Jede senkrechte Scheibe ist ein Kreis mit dem Radius f(x) – deshalb steht im Integral f(x)² und davor das π.',
  regler:[{k:'x',l:'Schnittstelle',min:o.a,max:o.b,step:o.schritt,val:(o.a+o.b)/2,e:v=>'x = '+vn(v,2)}],
  rechne:st=>({r:f(st.x), kreis:Math.PI*f(st.x)*f(st.x), V:Math.PI*(G(o.b)-G(o.a))}),
  werte:(st,r)=>[
    ['Radius r = f(x)', vn(r.r,3),'a'],
    ['Scheibe π·r²', vn(r.kreis,3),'b'],
    ['Volumen gesamt', vn(r.V,2)+' VE','g']],
  zeichne:(s,st,r)=>{
    const A=vachsen(s,{x0:o.x0,x1:o.x1,y0:-o.yr,y1:o.yr,bx:54,by:16,bw:534,bh:280});
    /* Koerper: Kurve und Spiegelkurve, Flaeche dazwischen */
    let d='';
    const n=90;
    for(let i=0;i<=n;i++){const x=o.a+(o.b-o.a)*i/n; d+=(i?' L ':'M ')+A.X(x).toFixed(1)+' '+A.Y(f(x)).toFixed(1);}
    for(let i=n;i>=0;i--){const x=o.a+(o.b-o.a)*i/n; d+=' L '+A.X(x).toFixed(1)+' '+A.Y(-f(x)).toFixed(1);}
    ve(s,'path',{d:d+' Z',class:'vflaeche'});
    /* angedeutete Querschnitte */
    for(let i=1;i<6;i++){
      const x=o.a+(o.b-o.a)*i/6, ry=Math.abs(A.Y(f(x))-A.Y(0));
      if(ry>1.5) ve(s,'ellipse',{cx:A.X(x),cy:A.Y(0),rx:7,ry:ry,class:'vhilf'});
    }
    vgraf(s,A,f,o.a,o.b,'vkurve',160);
    vgraf(s,A,x=>-f(x),o.a,o.b,'vkurve2',160);
    ve(s,'line',{x1:A.X(o.a),y1:A.Y(0),x2:A.X(o.b),y2:A.Y(0),class:'vachse'});
    /* gewaehlte Scheibe */
    const ry=Math.abs(A.Y(f(st.x))-A.Y(0));
    ve(s,'ellipse',{cx:A.X(st.x),cy:A.Y(0),rx:9,ry:ry,fill:'var(--accent)','fill-opacity':.3,
      stroke:'var(--accent)','stroke-width':2});
    vpfeil(s,A.X(st.x),A.Y(0),A.X(st.x),A.Y(f(st.x)),'vkraft',8);
    ve(s,'text',{x:A.X(st.x)+14,y:A.Y(f(st.x)/2)+4,class:'vtxt',fill:'var(--accent-deep)'},'r = '+vn(f(st.x),2));
    ve(s,'text',{x:58,y:314,class:'vtxtm'},'Volumen = π · ∫ f(x)² dx  von  '+vn(o.a,0)+'  bis  '+vn(o.b,0));
  },
  weg:()=>o.weg};
}

/* ---------- 4. Vektoren und Dreiecksflaeche ---------- */
/* Beide Achsen bekommen denselben Massstab, sonst stimmt der gezeichnete
   Winkel nicht mit dem gerechneten ueberein. Das Zeichenfeld richtet sich
   deshalb nach den Daten, nicht umgekehrt. */
function akVektoren(o){
  const u=o.u, v=o.v;
  const bu=Math.hypot(u[0],u[1]), bv=Math.hypot(v[0],v[1]);
  const sp=u[0]*v[0]+u[1]*v[1];
  const w=Math.acos(sp/(bu*bv));
  const FL=Math.abs(u[0]*v[1]-u[1]*v[0])/2;
  const SCHRITT=['gegebene Vektoren','+ '+o.nu,'+ '+o.nv,'+ Winkel und Fläche'];

  /* alle Punkte einsammeln, die im Bild vorkommen */
  const P=[[0,0],u,v];
  o.geg.forEach(g=>{const a=g.von||[0,0]; P.push(a); P.push([a[0]+g.v[0],a[1]+g.v[1]]);});
  let x0=Math.min(...P.map(q=>q[0])), x1=Math.max(...P.map(q=>q[0]));
  let y0=Math.min(...P.map(q=>q[1])), y1=Math.max(...P.map(q=>q[1]));
  const rx=(x1-x0)*0.17+0.6, ry=(y1-y0)*0.17+0.6;
  x0-=rx; x1+=rx; y0-=ry; y1+=ry;
  const MW=516, MH=430;
  const sk=Math.min(MW/(x1-x0), MH/(y1-y0));
  const bw=(x1-x0)*sk, bh=(y1-y0)*sk;
  const breite=Math.max(420, bw+124), bx=(breite-bw)/2, by=16;
  const hoehe=by+bh+66;

  return {
  titel:o.titel, vb:'0 0 '+Math.round(breite)+' '+Math.round(hoehe),
  was:'Erst die gegebenen Vektoren, dann die beiden gesuchten, dann der Winkel dazwischen und die Dreiecksfläche. '+
      'Beide Achsen haben denselben Maßstab – der Winkel im Bild ist also wirklich der berechnete.',
  regler:[{k:'s',l:'Schritt',min:0,max:3,step:1,val:3,e:x=>SCHRITT[x]}],
  rechne:()=>({bu:bu,bv:bv,sp:sp,grad:w*180/Math.PI,rad:w,FL:FL}),
  werte:(st,r)=>[
    ['Beträge','|'+o.nu+'| = '+vn(r.bu,3)+'   |'+o.nv+'| = '+vn(r.bv,3),'a'],
    ['Skalarprodukt', vn(r.sp,0),'b'],
    ['Winkel α', vn(r.grad,3)+'°  =  '+vn(r.rad,3)+' rad','a'],
    ['Dreiecksfläche', vn(r.FL,2)+' FE','g']],
  zeichne:(s,st,r)=>{
    const A=vachsen(s,{x0:x0,x1:x1,y0:y0,y1:y1,bx:bx,by:by,bw:bw,bh:bh});
    const O=[A.X(0),A.Y(0)];
    const sei = q => q[0]<0 ? 'end' : 'start';
    if(st.s>=3)
      ve(s,'path',{d:'M '+O[0]+' '+O[1]+' L '+A.X(u[0])+' '+A.Y(u[1])+' L '+A.X(v[0])+' '+A.Y(v[1])+' Z',
        class:'vflaeche'});
    /* gegebene Vektoren blass; manche haengen am Ende eines anderen Vektors */
    o.geg.forEach(gg=>{
      const a=gg.von||[0,0], b=[a[0]+gg.v[0], a[1]+gg.v[1]];
      vpfeil(s,A.X(a[0]),A.Y(a[1]),A.X(b[0]),A.Y(b[1]),'vmasz',8);
      const px=A.X(a[0]), py=A.Y(a[1]), qx=A.X(b[0]), qy=A.Y(b[1]);
      const dx=qx-px, dy=qy-py, L=Math.hypot(dx,dy)||1;
      /* senkrecht zum Pfeil versetzen, damit sich die Schilder nicht treffen */
      ve(s,'text',{x:(px+qx)/2 - dy/L*14, y:(py+qy)/2 + dx/L*14 + 4, class:'vtxtm',
        'text-anchor':'middle'},gg.n);
    });
    if(st.s>=1){
      vpfeil(s,O[0],O[1],A.X(u[0]),A.Y(u[1]),'vkraft',11);
      ve(s,'text',{x:A.X(u[0])+(u[0]<0?-9:9),y:A.Y(u[1])+(u[1]<0?17:-9),class:'vtxt',
        fill:'var(--accent-deep)','text-anchor':sei(u)},o.nu+'('+u[0]+' | '+u[1]+')');
    }
    if(st.s>=2){
      vpfeil(s,O[0],O[1],A.X(v[0]),A.Y(v[1]),'vreak',11);
      ve(s,'text',{x:A.X(v[0])+(v[0]<0?-9:9),y:A.Y(v[1])+(v[1]<0?17:-9),class:'vtxt',
        fill:'var(--blue)','text-anchor':sei(v)},o.nv+'('+v[0]+' | '+v[1]+')');
    }
    if(st.s>=3){
      const R=Math.min(52, 0.42*sk*Math.min(bu,bv));
      const a1=Math.atan2(A.Y(u[1])-O[1],A.X(u[0])-O[0]), a2=Math.atan2(A.Y(v[1])-O[1],A.X(v[0])-O[0]);
      let d1=a1, d2=a2;
      if(Math.abs(d2-d1)>Math.PI) (d2>d1? d2-=2*Math.PI : d1-=2*Math.PI);
      let dd=''; const nn=40;
      for(let i=0;i<=nn;i++){const t=d1+(d2-d1)*i/nn;
        dd+=(i?' L ':'M ')+(O[0]+R*Math.cos(t)).toFixed(1)+' '+(O[1]+R*Math.sin(t)).toFixed(1);}
      ve(s,'path',{d:dd,class:'vhilf2'});
      const tm=(d1+d2)/2;
      ve(s,'text',{x:O[0]+(R+15)*Math.cos(tm),y:O[1]+(R+15)*Math.sin(tm)+4,class:'vtxt',
        'text-anchor':'middle',fill:'var(--ink)'},'α');
      ve(s,'text',{x:20,y:by+bh+28,class:'vtxtm'},
        'α = '+vn(r.grad,3)+'°  =  '+vn(r.rad,3)+' rad');
      ve(s,'text',{x:20,y:by+bh+50,class:'vtxtm'},
        'Dreiecksfläche = ½ · |'+o.nu+'| · |'+o.nv+'| · sin α = '+vn(r.FL,2)+' FE');
    }
    /* Alle Beschriftungen ganz nach oben holen: die Pfeile kreuzen sonst die
       Achsenzahlen. Mit dem Halo um die Schrift bleibt dann alles lesbar. */
    s.querySelectorAll('text').forEach(t=>s.appendChild(t));
  },
  weg:()=>o.weg};
}

/* ---------- 5. Gauss-Verfahren als Tableau ---------- */
function akGauss(o){
  const S=o.schritte;
  return {
  titel:o.titel, vb:'0 0 640 256',
  was:'Jeder Schritt macht eine Zahl mehr zur Null. Was sich gerade geändert hat, ist orange.',
  regler:[{k:'s',l:'Schritt',min:0,max:S.length-1,step:1,val:S.length-1,e:v=>S[v].l}],
  rechne:st=>({z:S[st.s]}),
  werte:(st,r)=>[['Rechenschritt',r.z.l,'a'],['Was passiert',r.z.t,'b']],
  zeichne:(s,st,r)=>{
    const sp=[185,305,425,565], kopf=['x','y','z','='];
    ve(s,'text',{x:54,y:40,class:'vtxt'},'Gleichung');
    kopf.forEach((k,i)=>ve(s,'text',{x:sp[i],y:40,class:'vtxt','text-anchor':'middle',
      fill:'var(--accent-deep)'},k));
    ve(s,'line',{x1:50,y1:52,x2:612,y2:52,class:'vachse'});
    ve(s,'line',{x1:495,y1:24,x2:495,y2:52+r.z.r.length*44,class:'vhilf'});
    const vor = st.s>0 ? S[st.s-1].r : null;
    r.z.r.forEach((zeile,ri)=>{
      const y=52+44*(ri+1)-14;
      ve(s,'text',{x:54,y:y,class:'vtxtm'},zeile.n);
      zeile.w.forEach((z,ci)=>{
        const neu = vor && (!vor[ri] || vor[ri].w[ci]!==z);
        if(neu) ve(s,'rect',{x:sp[ci]-32,y:y-19,width:64,height:27,rx:6,
          fill:'var(--accent)','fill-opacity':.16});
        ve(s,'text',{x:sp[ci],y:y,class:'vtxt','text-anchor':'middle',
          fill: z===0 ? 'var(--muted)' : (neu?'var(--accent-deep)':'var(--ink)')},
          (z<0?'−':'')+Math.abs(z));
      });
    });
    if(r.z.erg)
      ve(s,'text',{x:54,y:52+44*(r.z.r.length+1)+2,class:'vtxt',fill:'var(--good)'},r.z.erg);
  },
  weg:()=>o.weg};
}

/* ================= PRUEFUNG 29.06.2014 ================= */
VIZ.ak14_kurve = akKurve({
  titel:'Aufgabe 1 · f(x) = −x² − 2x + 8',
  a:-1,b:-2,c:8, x0:-6.5,x1:4.5,y0:-5,y1:11,
  weg:'Nullstellen: −x² − 2x + 8 = 0 | ·(−1) → x² + 2x − 8 = 0 → x = −1 ± 3 → <b>−4 und 2</b><br>'+
      'Hochpunkt: f′(x) = −2x − 2 = 0 → x = −1, f(−1) = <b>9</b>, f″ = −2 &lt; 0 → Maximum<br>'+
      'Symmetrie: f(−x) = −x² + 2x + 8 ≠ f(x) → keine Achsensymmetrie zur y-Achse.'
});
VIZ.ak14_flaeche = akFlaeche({
  titel:'Aufgabe 2.1 · Fläche unter f(x) = −⅓x³ − x',
  f:x=>-x*x*x/3-x, F:x=>-Math.pow(x,4)/12-x*x/2, Ftxt:'F(x) = −1/12·x⁴ − ½·x²',
  a:-2,b:0,schritt:0.05, x0:-2.6,x1:0.6,y0:-1,y1:5.5,
  weg:'F(x) = −1/12·x⁴ − ½·x²  →  A = |F(0) − F(−2)| = |0 − (−10/3)| = <b>10/3 = 3⅓ FE</b><br>'+
      '<b>Achtung:</b> im Original-Lösungsblatt fehlt bei F(x) das ½.'
});
VIZ.ak14_volumen = akVolumen({
  titel:'Aufgabe 2.2 · Rotationskörper von f(x) = −⅓x³ − x',
  f:x=>-x*x*x/3-x, G:x=>Math.pow(x,7)/63+2*Math.pow(x,5)/15+Math.pow(x,3)/3,
  a:-2,b:0,schritt:0.05, x0:-2.6,x1:0.6,yr:5.4,
  weg:'f(x)² = 1/9·x⁶ + 2/3·x⁴ + <b>x²</b>  (im Original steht hier fälschlich ½·x²)<br>'+
      'Stammfunktion: 1/63·x⁷ + 2/15·x⁵ + <b>⅓</b>·x³  →  V = π · 2824/315 = <b>28,16 VE</b>'
});
VIZ.ak14_vektoren = akVektoren({
  titel:'Aufgabe 3 · Winkel und Dreiecksfläche',
  u:[1,6], nu:'b', v:[3,-1], nv:'c',
  geg:[{n:'V₁',v:[1,-2]},{n:'V₂',v:[2,4]},{n:'a',v:[2,-7],von:[1,6]}],
  weg:'b = V₂ − V₁ = (1 | 6) · c = b + a = (3 | −1)<br>'+
      'b·c = 1·3 + 6·(−1) = −3  →  cos α = −3 / (√37·√10) = −0,15594  →  α = <b>98,97° = 1,727 rad</b><br>'+
      'Fläche = ½ · |1·(−1) − 6·3| = ½ · 19 = <b>9,5 FE</b>'
});
VIZ.ak14_gauss = akGauss({
  titel:'Aufgabe 4 · Gauß-Verfahren',
  schritte:[
   {l:'Ausgangssystem',t:'Die drei Gleichungen als Zahlenschema.',
    r:[{n:'(1)',w:[-3,1,-2,5]},{n:'(2)',w:[1,2,3,-4]},{n:'(3)',w:[5,2,1,6]}]},
   {l:'Zeilen tauschen',t:'Gleichung (2) nach oben, damit vorne eine 1 steht.',
    r:[{n:'(I)',w:[1,2,3,-4]},{n:'(II)',w:[-3,1,-2,5]},{n:'(III)',w:[5,2,1,6]}]},
   {l:'x wegrechnen',t:'(II) + 3·(I) und (III) − 5·(I): in der x-Spalte steht jetzt zweimal 0.',
    r:[{n:'(I)',w:[1,2,3,-4]},{n:'(II)',w:[0,7,7,-7]},{n:'(III)',w:[0,-8,-14,26]}]},
   {l:'kürzen',t:'(II) durch 7 teilen – das macht das Einsetzen leichter.',
    r:[{n:'(I)',w:[1,2,3,-4]},{n:'(II)',w:[0,1,1,-1]},{n:'(III)',w:[0,-8,-14,26]}]},
   {l:'y wegrechnen',t:'(III) + 8·(II): jetzt steht z allein da.',
    r:[{n:'(I)',w:[1,2,3,-4]},{n:'(II)',w:[0,1,1,-1]},{n:'(III)',w:[0,0,-6,18]}],
    erg:'−6z = 18 → z = −3,  dann y = 2,  dann x = 1'}],
  weg:'Rückwärts einsetzen: z = −3 → y = −1 − (−3) = 2 → x = −4 − 2·2 − 3·(−3) = <b>1</b><br>'+
      'Probe: (1) −3 + 2 + 6 = 5 ✓ · (2) 1 + 4 − 9 = −4 ✓ · (3) 5 + 4 − 3 = 6 ✓'
});

/* ================= PRUEFUNG 24.01.2021 ================= */
VIZ.ak21_kurve = akKurve({
  titel:'Aufgabe 1 · f(x) = −x² + 3x + 10',
  a:-1,b:3,c:10, x0:-4.5,x1:7.5,y0:-7,y1:15,
  weg:'Nullstellen: x = (−3 ± 7)/(−2) → <b>−2 und 5</b><br>'+
      'Hochpunkt: f′(x) = −2x + 3 = 0 → x = 1,5, f(1,5) = <b>12,25</b><br>'+
      'Symmetrie: f(−x) = −x² − 3x + 10 ≠ f(x). <b>Achtung:</b> auf dem Aufgabenblatt steht '+
      '„Achsensymmetrie zur X-Achse“ – gemeint und gerechnet ist die <b>y-Achse</b>.'
});
VIZ.ak21_flaeche = akFlaeche({
  titel:'Aufgabe 2.1 · Fläche unter f(x) = −⅓x⁴ + 3x',
  f:x=>-Math.pow(x,4)/3+3*x, F:x=>-Math.pow(x,5)/15+1.5*x*x, Ftxt:'F(x) = −1/15·x⁵ + 3/2·x²',
  a:1,b:2,schritt:0.025, x0:-0.3,x1:2.4,y0:-1.5,y1:3.6,
  weg:'F(2) = −32/15 + 6 = 58/15 · F(1) = −1/15 + 3/2 = 43/30<br>'+
      'A = 116/30 − 43/30 = <b>73/30 = 2,4333 FE</b>'
});
VIZ.ak21_volumen = akVolumen({
  titel:'Aufgabe 2.2 · Rotationskörper von f(x) = −⅓x⁴ + 3x',
  f:x=>-Math.pow(x,4)/3+3*x, G:x=>Math.pow(x,9)/81-Math.pow(x,6)/3+3*Math.pow(x,3),
  a:1,b:2,schritt:0.025, x0:-0.3,x1:2.4,yr:3.4,
  weg:'f(x)² = 1/9·x⁸ − 2x⁵ + 9x²  →  Stammfunktion 1/81·x⁹ − ⅓·x⁶ + 3x³<br>'+
      'V = π · (728/81 − 217/81) = π · 511/81 = <b>19,82 VE</b>'
});
VIZ.ak21_vektoren = akVektoren({
  titel:'Aufgabe 3 · Winkel und Dreiecksfläche',
  u:[-3,-2], nu:'a', v:[-1,-3], nv:'b',
  geg:[{n:'V₁',v:[4,-1]},{n:'V₃',v:[1,-3]},{n:'c',v:[2,-1],von:[-3,-2]}],
  weg:'a = V₃ − V₁ = (−3 | −2) · b = a + c = (−1 | −3)<br>'+
      'a·b = 3 + 6 = 9  →  cos α = 9 / (√13·√10) = 0,78935  →  α = <b>37,875° = 0,661 rad</b><br>'+
      'Fläche = ½ · |(−3)(−3) − (−2)(−1)| = ½ · 7 = <b>3,5 FE</b>'
});
VIZ.ak21_gauss = akGauss({
  titel:'Aufgabe 4 · Gauß-Verfahren',
  schritte:[
   {l:'Ausgangssystem',t:'Die drei Gleichungen als Zahlenschema.',
    r:[{n:'(1)',w:[3,-2,6,-2]},{n:'(2)',w:[-1,3,-2,-4]},{n:'(3)',w:[-2,-1,-5,8]}]},
   {l:'x wegrechnen',t:'3·(2) + (1) und 3·(3) + 2·(1): in der x-Spalte steht zweimal 0.',
    r:[{n:'(1)',w:[3,-2,6,-2]},{n:'(2)',w:[0,7,0,-14]},{n:'(3)',w:[0,-7,-3,20]}]},
   {l:'y ablesen',t:'(2) durch 7 geteilt – y steht schon allein da.',
    r:[{n:'(1)',w:[3,-2,6,-2]},{n:'(2)',w:[0,1,0,-2]},{n:'(3)',w:[0,-7,-3,20]}],
    erg:'y = −2'},
   {l:'z wegrechnen',t:'(3) + 7·(2): übrig bleibt nur noch z.',
    r:[{n:'(1)',w:[3,-2,6,-2]},{n:'(2)',w:[0,1,0,-2]},{n:'(3)',w:[0,0,-3,6]}],
    erg:'−3z = 6 → z = −2,  dann x = 2'}],
  weg:'Einsetzen in (1): 3x − 2·(−2) + 6·(−2) = −2 → 3x = 6 → <b>x = 2</b><br>'+
      'Probe: (1) 6 + 4 − 12 = −2 ✓ · (2) −2 − 6 + 4 = −4 ✓ · (3) −4 + 2 + 10 = 8 ✓'
});
