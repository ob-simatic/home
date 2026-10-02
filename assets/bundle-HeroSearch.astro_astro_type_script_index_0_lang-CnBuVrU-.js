import{S as m}from"./bundle-searchEngine-BMgRELrn.js";import{f as g}from"./bundle-urlFormatter-Bet6ONXC.js";document.addEventListener("astro:page-load",async()=>{const a=m.getInstance(),n=document.querySelector('.hero-search input[name="q"]'),t=document.getElementById("heroSearchResults"),r=document.documentElement.lang||"tr";if(!n||!t)return;const d=s=>{if(s.length===0){t.classList.remove("active");return}const i=`${"/".replace(/\/$/,"")}${r==="tr"?"":`/${r}`}`;t.innerHTML=s.map(e=>{const o=e[`title_${r}`]||e.title_tr||e.id,u=`${i}/${g(e.id)}`,l=e.type==="category";return`
          <a href="${u}" class="search-result-item ${l?"category-item":""}">
            <div class="search-result-info">
              <span class="search-result-id">${e.id}</span>
              <span class="search-result-title">${o}</span>
            </div>
            ${l?'<span class="type-badge">Category</span>':""}
          </a>
        `}).join(""),t.classList.add("active")};n.addEventListener("focus",()=>a.init()),n.addEventListener("input",async s=>{const c=s.target.value.trim();if(!c){t.classList.remove("active");return}await a.init();const i={q:c,brand:[],inStock:!1,contactPrice:!1,minPrice:0,maxPrice:1/0},e=a.search(i),o=[...e.categories.slice(0,2),...e.products.slice(0,8)];d(o)}),document.addEventListener("click",s=>{!n.contains(s.target)&&!t.contains(s.target)&&t.classList.remove("active")})});
