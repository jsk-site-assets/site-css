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
/* design menu #8: tighter mobile hero (approved 2026-11-20) */
document.addEventListener("DOMContentLoaded",function(){
try{
var sel=".home .promo_slider,.home .promo_slider .slider,.home .promo_slider .cycle-slideshow,.home .promo_slider .slides,.home .promo_slider .slides li,.home .promo_slider .slide_wrapper,.home .promo_slider .slide,.home .promo_slider .slides li img,.home .promo_slider .slide img";
var apply=function(){
var els=document.querySelectorAll(sel);
if(window.innerWidth>640){
for(var j=0;j<els.length;j++){if(els[j].getAttribute("data-jsk-hero")){els[j].style.removeProperty("height");els[j].removeAttribute("data-jsk-hero");}}
return;
}
for(var i=0;i<els.length;i++){els[i].style.setProperty("height","340px","important");els[i].setAttribute("data-jsk-hero","1");}
};
apply();
window.addEventListener("load",apply);
window.addEventListener("resize",apply);
if(window.jQuery){jQuery(document).on("cycle-initialized cycle-after",".home .promo_slider .cycle-slideshow",function(){setTimeout(apply,60);});}
setTimeout(apply,1500);setTimeout(apply,4000);
}catch(e){}
});
