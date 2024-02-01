import{f as u,i as m}from"./assets/vendor-585fe19e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=document.querySelector("#datetime-picker"),c=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),T=document.querySelector("[data-seconds]"),v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:o=>{a.userSelectedDate=o[0],a.userSelectedDate<Date.now()?(m.show({icon:"material-icons",title:"Please",message:"choose a date in the future",color:"red",position:"topRight"}),c.disabled=!0):c.disabled=!1}},a={intervalId:null,isActive:!1,differenceInTime:0,userSelectedDate:null,convertMs(o){const t=Math.floor(o/864e5),s=Math.floor(o%864e5/36e5),d=Math.floor(o%864e5%36e5/6e4),l=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:d,seconds:l}},start(){if(!this.userSelectedDate||this.isActive)return;const o=this.userSelectedDate;this.isActive=!0,this.intervalId=setInterval(()=>{const r=Date.now();this.differenceInTime=o-r;const n=this.convertMs(this.differenceInTime);h.textContent=this.padTime(n.days),p.textContent=this.padTime(n.hours),y.textContent=this.padTime(n.minutes),T.textContent=this.padTime(n.seconds)},1e3)},stop(){this.differenceInTime<=0&&(clearInterval(this.intervalId),this.isActive=!1)},padTime(o){return String(o).padStart(2,"0")}};u(f,v);c.addEventListener("click",()=>{a.start()});
//# sourceMappingURL=commonHelpers.js.map
