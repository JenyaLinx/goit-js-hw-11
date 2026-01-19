import{a as f,S as m,i as a}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",y="54273308-bf413a89d7aaddbdadec825f7";async function g(o){return(await f.get(p,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new m(".gallery a");function b(o){const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:n,comments:d,downloads:u})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${r}</p>
          <p><b>Views</b> ${n}</p>
          <p><b>Comments</b> ${d}</p>
          <p><b>Downloads</b> ${u}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function S(){l.classList.add("is-hidden")}const v=document.querySelector(".form");v.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(t){L(),w();try{const s=await g(t);if(s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(s.hits)}catch{a.error({message:"Something went wrong"})}finally{S()}}});
//# sourceMappingURL=index.js.map
