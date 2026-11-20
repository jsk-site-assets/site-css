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
