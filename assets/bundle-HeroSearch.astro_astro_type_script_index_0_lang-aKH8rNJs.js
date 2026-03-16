import{S as u}from"./bundle-searchEngine-BwXPXmik.js";import{f as m}from"./bundle-urlFormatter-Bet6ONXC.js";document.addEventListener("astro:page-load",async()=>{const c=u.getInstance(),n=document.querySelector('.hero-search input[name="q"]'),t=document.getElementById("heroSearchResults"),i=document.documentElement.lang||"tr";if(!n||!t)return;const d=s=>{if(s.length===0){t.classList.remove("active");return}const a=i==="tr"?"":`/${i}`;t.innerHTML=s.map(e=>{const r=e[`title_${i}`]||e.title_tr||e.id,o=`${a}/${m(e.id)}`,l=e.type==="category";return`
          <a href="${o}" class="search-result-item ${l?"category-item":""}">
            <div class="search-result-info">
              <span class="search-result-id">${e.id}</span>
              <span class="search-result-title">${r}</span>
            </div>
            ${l?'<span class="type-badge">Category</span>':""}
          </a>
        `}).join(""),t.classList.add("active")};n.addEventListener("focus",()=>c.init()),n.addEventListener("input",async s=>{const a=s.target.value.trim();if(!a){t.classList.remove("active");return}await c.init();const e={q:a,brand:[],inStock:!1,contactPrice:!1,minPrice:0,maxPrice:1/0},r=c.search(e),o=[...r.categories.slice(0,2),...r.products.slice(0,8)];d(o)}),document.addEventListener("click",s=>{!n.contains(s.target)&&!t.contains(s.target)&&t.classList.remove("active")})});
