(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),c=()=>{let e=(()=>{let e=(new Date("15 january 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();for(let t in e)switch(!0){case e[t]<10&&e[t]>0:e[t]="0"+e[t];break;case e[t]<=0:e[t]="00"}t.textContent=e.hours,a.textContent=e.minutes,n.textContent=e.seconds,e.timeRemaining<=0&&clearInterval(r)};c();let r=setInterval(c,1e3)})(),(()=>{const e=document.querySelector("menu");document.body.addEventListener("click",(t=>{t.target.closest(".menu")||t.target.matches("menu > ul > li > a")||"close-btn"===t.target.className?e.classList.toggle("active-menu"):t.target.closest("menu")||e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup");let a,n,c=0;const r=()=>{c+=.04,a=requestAnimationFrame(r),c<1?t.style.opacity=c:(t.style.opacity=1,cancelAnimationFrame(a))},o=()=>{c-=.04,n=requestAnimationFrame(o),c>0?t.style.opacity=c:(t.style.opacity="",t.style.display="none",cancelAnimationFrame(n))};e.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block",screen.width>768&&r()}))})),t.addEventListener("click",(e=>{!e.target.classList.contains("popup-close")&&e.target.closest(".popup-content")||(screen.width>768?o():t.style.display="none")}))})(),(()=>{const e=[];e.push(document.querySelector(".calc-square"),document.querySelector(".calc-count"),document.querySelector(".calc-day"));const t=()=>{e.forEach((e=>{e.value=e.value.replace(/\D/gi,"")}))};e.forEach((e=>{e.addEventListener("input",t)}))})(),(()=>{const e=document.querySelectorAll("[name=user_form]"),t=document.querySelectorAll("[name=user_name]"),a=document.querySelectorAll("[name=user_email]"),n=document.querySelectorAll("[name=user_phone]"),c=document.querySelectorAll("[name=user_message]");t.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я\s\-]/gi,"")})))),c.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я\s\-]/gi,"")})))),a.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\w\-\_\.\!\~\*\'@]/gi,"")})))),n.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d\(\)\-]/g,"")})))),e.forEach((e=>e.addEventListener("submit",(t=>{const a=e.querySelector("[name=user_email]");t.preventDefault(),a.value.match(/[\w\-\_\!\~\*\'\.]+@([\w]+\.)+[\w]+/gi)?(a.style.backgroundColor="",console.log("форма отправлена")):(a.style.backgroundColor="#edadc0",console.log("неверная форма email"))}))))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),a[t].classList.remove("d-none")):(e.classList.remove("active"),a[t].classList.add("d-none"))}))}}))})()})();