(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let a=performance.now();requestAnimationFrame((function n(r){let c=(r-a)/o;c>1&&(c=1);let s=e(c);t(s),c<1&&requestAnimationFrame(n)}))},t=({formId:t,someElem:o=[]})=>{const a=document.getElementById(t),n=document.createElement("div");let r;const c=()=>{e({duration:1500,timing:e=>e,draw(e){r.style.transform=`rotate(${360*e}deg)`,1===e&&c()}})};try{if(!a)throw new Error("Ошибка переданной формы. Не надо так...");a.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=new FormData(a),s={},l=a.querySelectorAll("input");var i;e.forEach(((e,t)=>{s[t]=e})),o.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type&&0!=t.textContent?s[e.id]=t.textContent:"input"===e.type&&0!=t.value&&(s[e.id]=t.value)})),(e=>{const o=a.querySelector("[name=user_name]"),n=a.querySelector("[name=user_email]"),r=a.querySelector("[name=user_phone]"),c=a.querySelector("[name=user_message]");let s=!1;const l=(e,o)=>{const a=document.createElement("div");a.classList.add("clue"),a.style.color="red","form1"==t&&(a.style.marginTop="-30px"),e==c&&(a.style.marginBottom="15px"),a.style.fontSize="12px",a.textContent=o,e.after(a),setTimeout((()=>a.remove()),8e3)};return e.forEach((e=>{switch(e){case o:/[^а-я\s]+/gi.test(e.value)&&(s=!0,l(e,"Только кириллица!"));break;case n:!/[^\w\-\_\.\!\~\*\'@]+/gi.test(e.value)&&/[\w\-\_\!\~\*\'\.]+@([\w]+\.)+[\w]+/gi.test(e.value)||(s=!0,l(e,"Введите в формате name@domain.com"));break;case r:/[^\d\(\)\+\-]+/g.test(e.value)&&(s=!0,l(e,"Введите только + () и цифры!"));break;case c:/[^а-я0-9\s\-\.\,\!\?\:]+/gi.test(e.value)&&(s=!0,l(e,"Введите только кириллицу и знаки препинания!"))}})),!s})(l)?(document.querySelectorAll(".clue").forEach((e=>{e.remove()})),n.style.display="flex",n.style.justifyContent="center",n.style.marginTop="-25px",a.append(n),r=document.createElement("div"),r.style.border="10px solid #ffffff",r.style.borderTop="10px solid #19b5fe",r.style.borderRadius="50%",r.style.width="45px",r.style.height="45px",n.textContent="",n.append(r),c(),(i=s,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(i),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json()))).then((e=>{console.log(e),cancelAnimationFrame(c),n.textContent="Спасибо! Наш менеджер свяжется с вами",setTimeout((()=>n.remove()),5e3),l.forEach((e=>e.value=""))})).catch((e=>{n.textContent="Ошибка...",setTimeout((()=>n.remove()),5e3)}))):alert("Поля формы заполнены неверно!")})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds"),n=()=>{let e=(()=>{let e=(new Date("15 january 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();for(let t in e)switch(!0){case e[t]<10&&e[t]>0:e[t]="0"+e[t];break;case e[t]<=0:e[t]="00"}t.textContent=e.hours,o.textContent=e.minutes,a.textContent=e.seconds,e.timeRemaining<=0&&clearInterval(r)};n();let r=setInterval(n,1e3)})(),(()=>{const e=document.querySelector("menu");document.body.addEventListener("click",(t=>{t.target.closest(".menu")||t.target.matches("menu > ul > li > a")||"close-btn"===t.target.className?e.classList.toggle("active-menu"):t.target.closest("menu")||e.classList.remove("active-menu")}))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup");t.forEach((t=>{t.addEventListener("click",(()=>{o.style.display="block",screen.width>768&&e({duration:1e3,timing:e=>e,draw(e){o.style.opacity=e}})}))})),o.addEventListener("click",(t=>{!t.target.classList.contains("popup-close")&&t.target.closest(".popup-content")||(screen.width>768?(e({duration:1e3,timing:e=>1-e,draw(e){o.style.opacity=e}}),setTimeout((()=>{o.style.display="none",o.style.opacity=""}),1100)):(o.style.display="none",o.style.opacity=""))}))})(),((t=100)=>{const o=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),r=[],c=document.querySelector(".calc-type"),s=document.getElementById("total"),l=document.querySelector(".calc-block"),i=()=>{r.forEach((e=>{e.value=e.value.replace(/\D/gi,"")}))};r.push(o,a,n),r.forEach((e=>{e.addEventListener("input",i)})),l.addEventListener("change",(r=>{r.target!==c&&r.target!==o&&r.target!==a&&r.target!==n||(()=>{const r=+c.options[c.selectedIndex].value;let l=0,i=1,d=1;a.value>1&&(i+=+a.value/10),n.value&&n.value<5?d=2:n.value&&n.value<10&&(d=1.5),c.value&&o.value?(l=t*r*o.value*i*d,e({duration:1500,timing:e=>e,draw(e){s.textContent=Math.floor(e*l)}})):s.textContent=0})()}))})(100),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const a=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===a?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots"),a=2e3;let n,r,c=0;const s=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},i=()=>{s(t,c,"portfolio-item-active"),s(n,c,"dot-active"),c++,c>=t.length&&(c=0),l(t,c,"portfolio-item-active"),l(n,c,"dot-active")},d=(e=1500)=>{r=setInterval(i,a)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(s(t,c,"portfolio-item-active"),s(n,c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&n.forEach(((t,o)=>{e.target===t&&(c=o)})),c>=t.length?c=0:c<0&&(c=t.length-1),l(t,c,"portfolio-item-active"),l(n,c,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(r)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&d(a)}),!0),(()=>{for(let e=1;e<=t.length;e++){const t=document.createElement("li");t.classList.add("dot"),1===e&&t.classList.add("dot-active"),o.append(t)}n=document.querySelectorAll(".dot")})(),d(a)})(),t({formId:"form1",someElem:[{type:"block",id:"total"}]}),t({formId:"form2"}),t({formId:"form3"})})();