/* ================= INTERAKTIVE GRAFIKEN =================
   Jede Grafik beschreibt nur ihre Regler, ihre Rechnung und ihre Zeichnung.
   Den Rahmen (Karte, Regler, Wertefelder, Rechenweg) baut mountViz.
   Eingebaut werden sie ueber Platzhalter im Kapiteltext:
     <div class="viz" data-viz="ID"></div>
=========================================================== */
const VNS='http://www.w3.org/2000/svg';
function vn(x,n){                                  /* deutsche Zahl mit Tausendertrennung */
  if(x===undefined||x===null||!isFinite(x))return '–';
  let s=x.toFixed(n===undefined?2:n), neg=s.charAt(0)==='-';
  if(neg)s=s.slice(1);
  const t=s.split('.');
  return (neg?'−':'')+t[0].replace(/\B(?=(\d{3})+(?!\d))/g,' ')+(t[1]?','+t[1]:'');
}
function ve(p,tag,at,txt){
  const e=document.createElementNS(VNS,tag);
  for(const k in at) e.setAttribute(k,at[k]);
  if(txt!==undefined) e.textContent=txt;
  p.appendChild(e); return e;
}
function vpfeil(p,x1,y1,x2,y2,klasse,groesse){
  ve(p,'line',{x1:x1,y1:y1,x2:x2,y2:y2,class:klasse});
  const w=Math.atan2(y2-y1,x2-x1), L=groesse||9, s=0.42;
  ve(p,'polyline',{points:[x2-L*Math.cos(w-s),y2-L*Math.sin(w-s),x2,y2,x2-L*Math.cos(w+s),y2-L*Math.sin(w+s)].join(' '),class:klasse});
}
/* Achsenkreuz fuer Funktionsgrafiken; liefert Umrechner Welt -> Bildpunkt */
function vachsen(s,o){
  const {x0,x1,y0,y1,bx,by,bw,bh}=o;
  const X=x=>bx+(x-x0)/(x1-x0)*bw, Y=y=>by+bh-(y-y0)/(y1-y0)*bh;
  const schritt=(a,b)=>{const r=(b-a)/8, p=Math.pow(10,Math.floor(Math.log10(r)));
    return [1,2,2.5,5,10].map(m=>m*p).find(v=>v>=r)||p*10;};
  const sx=schritt(x0,x1), sy=schritt(y0,y1);
  for(let x=Math.ceil(x0/sx)*sx;x<=x1+1e-9;x+=sx){
    ve(s,'line',{x1:X(x),y1:by,x2:X(x),y2:by+bh,class:'vgitter'});
    if(Math.abs(x)>1e-9) ve(s,'text',{x:X(x),y:Y(Math.min(Math.max(0,y0),y1))+14,class:'vtxtm','text-anchor':'middle'},vn(x,sx<1?1:0));
  }
  for(let y=Math.ceil(y0/sy)*sy;y<=y1+1e-9;y+=sy){
    ve(s,'line',{x1:bx,y1:Y(y),x2:bx+bw,y2:Y(y),class:'vgitter'});
    if(Math.abs(y)>1e-9) ve(s,'text',{x:X(Math.min(Math.max(0,x0),x1))-6,y:Y(y)+4,class:'vtxtm','text-anchor':'end'},vn(y,sy<1?1:0));
  }
  if(y0<=0&&y1>=0) ve(s,'line',{x1:bx,y1:Y(0),x2:bx+bw,y2:Y(0),class:'vachse'});
  if(x0<=0&&x1>=0) ve(s,'line',{x1:X(0),y1:by,x2:X(0),y2:by+bh,class:'vachse'});
  return {X,Y};
}
/* Funktionsgraf zeichnen */
function vgraf(s,A,f,x0,x1,klasse,schritte){
  const n=schritte||160; let d='', an=false;
  for(let i=0;i<=n;i++){
    const x=x0+(x1-x0)*i/n, y=f(x);
    if(!isFinite(y)){an=false;continue;}
    const px=A.X(x), py=A.Y(y);
    if(py<-2000||py>2000){an=false;continue;}
    d+=(an?' L ':' M ')+px.toFixed(1)+' '+py.toFixed(1); an=true;
  }
  ve(s,'path',{d:d,class:klasse||'vkurve'});
}

const VIZ={};   /* wird von den einzelnen Dateien gefuellt */

/* ---------- Rahmen bauen ---------- */
function mountViz(wurzel){
  (wurzel||document).querySelectorAll('.viz[data-viz]').forEach(box=>{
    if(box.dataset.fertig) return;
    const v=VIZ[box.dataset.viz];
    if(!v){box.innerHTML='<p class="vfehlt">Grafik „'+box.dataset.viz+'“ ist noch nicht angelegt.</p>';return;}
    box.dataset.fertig='1';
    const stand={};
    (v.regler||[]).forEach(r=>stand[r.k]=r.val);

    box.innerHTML=
      '<div class="vkopf"><span class="vlabel">Zum Ausprobieren</span><h4>'+v.titel+'</h4>'+
      (v.was?'<p class="vwas">'+v.was+'</p>':'')+'</div>'+
      '<div class="vbuehne"><svg viewBox="'+(v.vb||'0 0 640 260')+'" role="img" aria-label="'+v.titel+'"></svg></div>'+
      '<div class="vregler"></div><div class="vwerte"></div>'+
      (v.weg?'<div class="vweg"></div>':'');

    const svg=box.querySelector('svg'), rBox=box.querySelector('.vregler'),
          wBox=box.querySelector('.vwerte'), gBox=box.querySelector('.vweg');

    (v.regler||[]).forEach(r=>{
      const zeile=document.createElement('div'); zeile.className='vzeile';
      const id='v'+Math.random().toString(36).slice(2,8);
      zeile.innerHTML='<label for="'+id+'">'+r.l+'</label>'+
        '<input type="range" id="'+id+'" min="'+r.min+'" max="'+r.max+'" step="'+(r.step||1)+'" value="'+r.val+'">'+
        '<output></output>';
      const inp=zeile.querySelector('input'), out=zeile.querySelector('output');
      inp.addEventListener('input',()=>{stand[r.k]=+inp.value; neu();});
      r._out=out; rBox.appendChild(zeile);
    });

    function neu(){
      const erg=v.rechne?v.rechne(stand):{};
      (v.regler||[]).forEach(r=>{r._out.value = r.e? r.e(stand[r.k],stand,erg) : vn(stand[r.k]);});
      svg.innerHTML='';
      try{ v.zeichne(svg,stand,erg); }
      catch(e){ ve(svg,'text',{x:20,y:30,class:'vtxt'},'Zeichnung nicht darstellbar'); }
      if(v.werte){
        wBox.innerHTML=v.werte(stand,erg).map(w=>
          '<div class="vwert'+(w[2]?' '+w[2]:'')+'"><span>'+w[0]+'</span><b>'+w[1]+'</b></div>').join('');
      }
      if(gBox) gBox.innerHTML=v.weg(stand,erg);
    }
    neu();
  });
}
