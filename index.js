import{a as m,i as a,S as p}from"./assets/vendor-DFCQGEf1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",h="50666263-41be0f694eb808efe4a214ed6";async function d(o){const s=new URLSearchParams({key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await m.get(f,{params:s})).data}function g(o){return o.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:l,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${s}" alt="${i}" width="360" height="200" />
          </a>
          <ul class="info-list">
              <li class="info-item">
                <h3 class="item-title">Likes</h3>
                <p class="item-descr">${e}</p>
              </li>
              <li class="info-item">
                <h3 class="item-title">Views</h3>
                <p class="item-descr">${t}</p>
              </li>
              <li class="info-item">
                <h3 class="item-title">Comments</h3>
                <p class="item-descr">${l}</p>
              </li>
              <li class="info-item">
                <h3 class="item-title">Downloads</h3>
                <p class="item-descr">${u}</p>
              </li>
            </ul>
        </li>
    `).join("")}const n=document.querySelector(".loader-js"),y=document.querySelector(".form-js"),b=document.querySelector(".input-js"),c=document.querySelector(".gallery-js");y.addEventListener("submit",w);function w(o){o.preventDefault(),c.innerHTML="";const s=b.value.trim();if(!s){a.show({message:"Sorry, the request cannot be empty. Please try again...",position:"topRight",closeOnClick:!0,progressBar:!1,messageColor:"white",backgroundColor:"#ef4040"});return}n.style.display="block",d(s).then(r=>{if(!r.hits.length){a.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",closeOnClick:!0,progressBar:!1,messageColor:"white",backgroundColor:"#ef4040"});return}console.log(r.hits),c.insertAdjacentHTML("beforeend",g(r.hits)),new p(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt"}).refresh()}).catch(r=>a.show({title:"X",message:`${r.message}`,position:"center",color:"red"})).finally(()=>{o.target.reset(),n.style.display="none"})}
//# sourceMappingURL=index.js.map
