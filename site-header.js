/* About block startup repair. Existing markup and styling unchanged. */
(function(){
var observer=null,timer=null;
function stop(){if(observer)observer.disconnect();if(timer)clearTimeout(timer);}
function formatAbout(){
try{
if(!document.body||!document.body.classList.contains("home"))return;
var b=document.querySelector(".home .widget-4.message .bottom_padding");
if(!b)return false;
if(b.getAttribute("data-jsk-about"))return true;
var h=b.innerHTML;
var r='<div class="jsk-trio"><span>No labels</span><span>No membership</span><span>No prerequisites</span></div><p class="jsk-close">Just a place for Jews in Skagit County to find each other.</p>';
var t="Something Jewish is growing in Skagit County.<br><br>Welcome to Chabad of Skagit County, a warm and welcoming home for every Jew, whatever your background or level of observance. Come as you are.<br><br>No labels. No membership. No prerequisites.";
if(h.indexOf(t)>-1){var p=t.split("<br><br>");b.setAttribute("data-jsk-about","1");b.innerHTML=h.replace(t,'<span class="jsk-title">'+p[0]+'</span><p class="jsk-intro">'+p[1]+'</p>'+r);return true;}
var u="No labels. No membership. No prerequisites.";
if(h.indexOf(u)===-1)return;
b.setAttribute("data-jsk-about","1");
b.innerHTML=h.replace(u,r);
return true;
}catch(e){}

}
function run(){
if(formatAbout()){stop();return;}
if(!observer&&document.documentElement){
observer=new MutationObserver(function(){if(formatAbout())stop();});
observer.observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
timer=setTimeout(stop,15000);
}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});
else run();
})();
/* design menu #2: Playfair -> Cormorant, site-wide (approved 2026-11-20) */
document.addEventListener("DOMContentLoaded",function(){
try{
if(location.href.indexOf("/aid/6932307/")>-1)return;
var all=document.querySelectorAll("h1,h2,h3,h4,h5,h6,div,span,p,a,td,strong,b,label,li");
for(var i=0;i<all.length;i++){
var f=window.getComputedStyle(all[i]).fontFamily||"";
if(/playfair/i.test(f)){all[i].style.setProperty("font-family","'Cormorant Garamond',Georgia,'Times New Roman',serif","important");}
}
}catch(e){}
});
/* Upcoming Events startup repair. Existing badges and styling unchanged. */
(function(){
var observer=null,timer=null;
function stop(){if(observer)observer.disconnect();if(timer)clearTimeout(timer);}
function formatEvents(){
try{
if(!document.body||!document.body.classList.contains("home"))return;
var items=document.querySelectorAll(".home .widget-4.upcoming_events li");
if(!items.length)return false;
items.forEach(function(li){
if(li.getAttribute("data-jsk-badge"))return;
var sm=li.querySelector("small");if(!sm)return;
var t=sm.textContent.replace(/\s+/g," ").trim();
var m=t.match(/(\w+),?\s+(\w+)\s+(\d{1,2}),\s*(\d{4})\s*[\u00b7\-\u2013]?\s*(.*)/);
if(!m)return;
li.setAttribute("data-jsk-badge","1");
sm.classList.add("jsk-badge");
sm.innerHTML='<span class="d">'+m[3]+'</span><span class="m">'+m[2].slice(0,3).toUpperCase()+'</span>';
var h6=li.querySelector("h6");
if(h6){
var body=document.createElement("div");body.className="jsk-ev-body";
li.insertBefore(body,h6);body.appendChild(h6);
var dow=m[1].charAt(0)+m[1].slice(1).toLowerCase();
var time=(m[5]||"").trim();
var tm=document.createElement("span");tm.className="jsk-ev-time";
tm.textContent=dow+(time?" \u00b7 "+time:"");
body.appendChild(tm);
}
});
return !Array.prototype.some.call(items,function(li){return !li.getAttribute("data-jsk-badge");});
}catch(e){}

}
function run(){
if(formatEvents()){stop();return;}
if(!observer&&document.documentElement){
observer=new MutationObserver(function(){if(formatEvents())stop();});
observer.observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
timer=setTimeout(stop,15000);
}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});
else run();
})();
/* chai club: member name marquee - one sliding line per tier (approved 2026-11-21) */
document.addEventListener("DOMContentLoaded",function(){
try{
if(location.href.indexOf("/aid/6932307/")===-1)return;
var root=document.querySelector('li.form-line#id_30 .form-html');
if(!root||root.getAttribute("data-jsk-marq"))return;
root.setAttribute("data-jsk-marq","1");
var tds=root.querySelectorAll('td[style*="padding:2px 0 2px 18px"]');
for(var i=0;i<tds.length;i++){
var label=tds[i].querySelector('div[style*="font-size:20px"]');
var box=label&&label.nextElementSibling;
if(!box||box.classList.contains("cgv"))continue;
var set=[].slice.call(box.querySelectorAll("span"));
if(!set.length)continue;
var target=Math.max(box.clientWidth,320);
var cgv=document.createElement("div");cgv.className="cgv";
var cgs=document.createElement("div");cgs.className="cgs";
for(var j=0;j<set.length;j++)cgs.appendChild(set[j]);
cgv.appendChild(cgs);
box.parentNode.replaceChild(cgv,box);
var setW=cgs.scrollWidth||1,halfW=setW,guard=0;
while(halfW<target&&guard<10){for(var k=0;k<set.length;k++){var c=set[k].cloneNode(true);c.classList.add("cgc");cgs.appendChild(c);}halfW+=setW;guard++;}
var kids=[].slice.call(cgs.children);
for(var m=0;m<kids.length;m++){var c2=kids[m].cloneNode(true);c2.classList.add("cgc");cgs.appendChild(c2);}
}
}catch(e){}
});

/* alert close cleanup 2026-11-21: the theme close handler sets the cookie and hides the alert with inline display:none but leaves the element in the DOM, which keeps the 38px header offset; remove the element once hidden so the offset clears */
document.addEventListener("click",function(e){
  var t=e.target&&e.target.closest?e.target.closest(".mosad_sitewide_alert .close"):null;
  if(!t)return;
  var a=document.querySelector(".mosad_sitewide_alert"),n=0;
  (function chk(){
    if(!a||!a.isConnected)return;
    if(getComputedStyle(a).display==="none"){a.remove();return;}
    if(++n<16)setTimeout(chk,250);
  })();
});

/* sliding festival alert: transform the sitewide alert into a sliding event-info bar with a fixed RSVP button (approved 2026-11-22) */
document.addEventListener("DOMContentLoaded",function(){
try{
var a=document.querySelector(".mosad_sitewide_alert");
if(!a||a.getAttribute("data-jsk-slide"))return;
var link=a.querySelector('a[href*="6674847"],a[href*="chanukah" i]');
var txt=a.textContent||"";
if(!link&&txt.indexOf("Chanukah Festival")===-1)return;
a.setAttribute("data-jsk-slide","1");
var href=link?link.getAttribute("href"):"/6674847";
var items=["Chanukah Festival!","Sunday, December 6","3:30 PM","Bakerview Park \u00b7 Mount Vernon","Free Admission \u00b7 Open to All"];
var seq="";
for(var i=0;i<items.length;i++){seq+='<span class="jsk-alert-item">'+items[i]+'</span><span class="jsk-alert-dot">\u2022</span>';}
var msg=a.querySelector(".message");
if(!msg)return;
msg.innerHTML='<div class="jsk-alert-marquee"><div class="jsk-alert-track"><span class="jsk-alert-seq">'+seq+'</span><span class="jsk-alert-seq" aria-hidden="true">'+seq+'</span></div></div>';
var btn=document.createElement("a");
btn.className="jsk-alert-rsvp";
btn.href=href;
btn.innerHTML='RSVP Free <span aria-hidden="true">\u2192</span>';
var close=a.querySelector(".close");
a.insertBefore(btn,close||null);
}catch(e){}
});

/* Chai Club page (aid 6932307): Golden Hour members section - compact counterflow tier rows built from the existing tier tables. Tracks are absolutely positioned so the email-table layout cannot stretch; bleed margin is measured at runtime because the form card is off-center on mobile. */
document.addEventListener("DOMContentLoaded",function(){
try{
var form=document.querySelector('form[id="6932307"]');
var li=document.getElementById("id_30");
if(!form||!li)return;
var td=li.querySelector('.form-html td[style*="background:#faf7f1"]');
if(!td||document.getElementById("jsk-cf"))return;
var heading=td.querySelector("div");
var tables=[].slice.call(td.querySelectorAll("table"));
if(!heading||tables.length<3)return;
var SERIF="'Playfair Display',Georgia,'Times New Roman',serif";
var tiers=[];
for(var i=0;i<3;i++){
  var labelEl=tables[i].querySelector("div");
  var nameEls=[].slice.call(tables[i].querySelectorAll("span")).filter(function(s){return !s.classList.contains("cgc")&&s.textContent.trim();});
  if(!labelEl||!nameEls.length)return;
  tiers.push({label:labelEl.textContent.trim(),names:nameEls.map(function(s){return s.textContent.trim();})});
}
tables.forEach(function(t){t.style.display="none";});
function runHTML(names){
  return names.map(function(n){return '<span style="font-family:'+SERIF+'!important;font-size:23px;color:#2b3340;padding:0 4px;">'+n+"</span>"}).join('<span style="color:#a8832f;padding:0 10px;">\u00b7</span>')+'<span style="color:#a8832f;padding:0 10px;">\u00b7</span>';
}
var wrap=document.createElement("div");wrap.id="jsk-cf";
wrap.style.cssText="display:flex;flex-direction:column;gap:20px;padding:4px 0 26px;overflow:hidden;max-width:100%;";
var rows=[];
tiers.forEach(function(t,i){
  var row=document.createElement("div");row.style.cssText="display:flex;align-items:center;gap:14px;";
  var lab=document.createElement("div");lab.textContent=t.label;
  lab.style.cssText="flex:0 0 74px;text-align:right;font-family:"+SERIF+"!important;font-size:12px;letter-spacing:2px;color:#a8832f;text-transform:uppercase;";
  var view=document.createElement("div");view.style.cssText="flex:1;min-width:0;position:relative;overflow:hidden;border-left:1px solid #d4b26a;height:34px;";
  var track=document.createElement("div");track.style.cssText="position:absolute;left:14px;top:0;bottom:0;display:inline-flex;align-items:center;white-space:nowrap;";
  view.appendChild(track);row.appendChild(lab);row.appendChild(view);wrap.appendChild(row);
  rows.push({t:t,view:view,track:track,i:i});
});
heading.insertAdjacentElement("afterend",wrap);
function fixBleed(){
  var cw=document.documentElement.clientWidth;
  li.style.setProperty("width",cw+"px","important");
  for(var k=0;k<3;k++){
    var ml=parseFloat(getComputedStyle(li).marginLeft);
    var x=li.getBoundingClientRect().left;
    if(Math.abs(x)<0.5)break;
    li.style.setProperty("margin-left",(ml-x)+"px","important");
  }
}
function fill(){
  rows.forEach(function(r){
    var vw=r.view.clientWidth||600;
    var meas=document.createElement("div");meas.style.cssText="position:absolute;visibility:hidden;white-space:nowrap;";
    meas.innerHTML=runHTML(r.t.names);document.body.appendChild(meas);
    var runW=meas.offsetWidth||600;meas.remove();
    var copies=Math.max(1,Math.ceil(vw/runW));
    var half="";for(var k=0;k<copies;k++)half+=runHTML(r.t.names);
    r.track.innerHTML=half+half;
    var dur=Math.max(10,Math.round(runW*copies/55));
    r.track.style.animation=(r.i%2?"jskcfR":"jskcfL")+" "+dur+"s linear infinite";
  });
}
fixBleed();
window.addEventListener("load",fixBleed);
if(document.fonts&&document.fonts.ready){document.fonts.ready.then(fill);}else{fill();}
var lastW=window.innerWidth,rt;
window.addEventListener("resize",function(){clearTimeout(rt);rt=setTimeout(function(){var w=window.innerWidth;fixBleed();if(w!==lastW){lastW=w;fill();}},250);});
}catch(e){}
});
