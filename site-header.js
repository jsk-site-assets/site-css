/* jsk site header JS - migrated from ChabadOne customheader 2026-11-20 */
document.addEventListener("DOMContentLoaded",function(){
try{
if(!document.body||!document.body.classList.contains("home"))return;
var b=document.querySelector(".home .widget-4.message .bottom_padding");
if(!b||b.getAttribute("data-jsk-about"))return;
var h=b.innerHTML;
var r='<div class="jsk-trio"><span>No labels</span><span>No membership</span><span>No prerequisites</span></div><p class="jsk-close">Just a place for Jews in Skagit County to find each other.</p>';
var t="Something Jewish is growing in Skagit County.<br><br>Welcome to Chabad of Skagit County, a warm and welcoming home for every Jew, whatever your background or level of observance. Come as you are.<br><br>No labels. No membership. No prerequisites.";
if(h.indexOf(t)>-1){var p=t.split("<br><br>");b.setAttribute("data-jsk-about","1");b.innerHTML=h.replace(t,'<span class="jsk-title">'+p[0]+'</span><p class="jsk-intro">'+p[1]+'</p>'+r);return;}
var u="No labels. No membership. No prerequisites.";
if(h.indexOf(u)===-1)return;
b.setAttribute("data-jsk-about","1");
b.innerHTML=h.replace(u,r);
}catch(e){}
});
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
/* design menu #4: gold date badges on Upcoming Events (approved 2026-11-20) */
document.addEventListener("DOMContentLoaded",function(){
try{
if(!document.body||!document.body.classList.contains("home"))return;
document.querySelectorAll(".home .widget-4.upcoming_events li").forEach(function(li){
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
}catch(e){}
});
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
