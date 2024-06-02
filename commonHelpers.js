import{a as p,i as d,S as f,A as w}from"./assets/vendor-55288c14.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const m="https://portfolio-js.b.goit.study/api/reviews",h=async()=>{try{const r=await p.get(m);if(r.status!==200)throw new Error(r.status);return r.data}catch{throw new Error(iziToast.error({message:msg,class:"error-notification",timeout:5e3,titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0}))}},g=r=>r.map(({_id:t,avatar_url:i,author:n,review:e})=>`<li class="review-card swiper-slide" id="${t}">
            <p class="review-card-text">${e}</p>
            <div class="review-card-author">
             <img class="review-card-author-avata" src="${i}" alt="${n}" alt="review author photo" width="40" height="40" loading="lazy">
              <p class="review-card-author-name">${n}</p>
           </div>
         </li>`).join(""),y=document.querySelector("#review-swiper-list"),v=async()=>{try{const r=await h(),t=g(r);if(!t){d.error({title:"Error",message:"Sorry, reviews not found.",position:"bottomLeft"});return}y.insertAdjacentHTML("beforeend",t);const i=new f("#swiper3",{direction:"horizontal",autoHeight:!0,scrollbar:{el:".swiper-scrollbar",draggable:!0},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{slidesPerView:1,spaceBetween:10},1280:{slidesPerView:2,spaceBetween:32}},navigation:{nextEl:".custom-button-next",prevEl:".custom-button-prev"}})}catch{d.error({title:"Error",message:"Error while fetching reviews from server",position:"bottomLeft"})}},a=document.querySelectorAll(".li-projects"),u=document.querySelector(".load-more");let s=3;function l(r,t){for(let i=r;i<t&&i<a.length;i+=1)a[i].style.display="block"}a.forEach((r,t)=>{t>=s&&(r.style.display="none")});l(0,s);u.addEventListener("click",function(){l(s,s+3),s+=3,s>=a.length&&(u.style.display="none"),window.scrollTo({top:window.scrollY+700,behavior:"smooth"})});function b(){new w(".accordion-container",{openOnInit:[0]})}v();l();initReviewsSection();b();
//# sourceMappingURL=commonHelpers.js.map
