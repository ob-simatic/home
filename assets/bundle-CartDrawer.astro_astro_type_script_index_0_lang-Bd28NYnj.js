import{s as R,g as S,b as A,u as w,r as B}from"./bundle-cart-Ca7pvTzF.js";import{g as D,f as N}from"./bundle-currency-Dyj8FtcO.js";let E=null,u=null;document.addEventListener("astro:page-load",()=>{const m=document.getElementById("cart-drawer"),y=JSON.parse(m?.dataset?.translations||"{}"),L=m?.dataset?.lang||"tr",$=document.getElementById("cart-overlay"),C=document.getElementById("close-cart");document.getElementById("cart-items"),document.getElementById("cart-total-count"),document.getElementById("cart-total-price"),document.getElementById("cart-total-try"),document.getElementById("whatsapp-checkout");let p=null;D().then(e=>{p=e;const a=document.getElementById("cart-try-row"),r=document.getElementById("cart-rate-row"),c=document.getElementById("cart-rate-info");e?(r&&(r.style.display="flex"),c&&(c.textContent=`(1 EUR = ${e.toFixed(2)} TL)`)):(a&&(a.style.display="none"),r&&(r.style.display="none"))});function I(){document.getElementById("cart-drawer")?.classList.add("open"),document.body.style.overflow="hidden",document.body.classList.add("cart-open")}function g(){document.getElementById("cart-drawer")?.classList.remove("open"),document.body.style.overflow="",document.body.classList.remove("cart-open")}function v(e){return`€${e.toFixed(2)}`}function q(e){const a=document.getElementById("cart-items"),r=document.getElementById("whatsapp-checkout"),c=document.getElementById("cart-total-count"),d=document.getElementById("cart-total-price"),i=document.getElementById("cart-total-try");if(!a||!r||!c)return;if(e.length===0)a.innerHTML=`
                <div class="empty-cart-message">
                  <div class="empty-icon">🛒</div>
                  <p>${y.empty}</p>
                  <button class="continue-shopping-custom">${y.continue}</button>
                </div>
              `,a.querySelector(".continue-shopping-custom")?.addEventListener("click",g),r.removeAttribute("href"),r.classList.add("disabled"),d&&(d.textContent="€0.00"),i&&(i.textContent="₺0");else{a.innerHTML=e.map(t=>`
                <div class="cart-item">
                  <div class="item-image">
                    ${t.image?`<img src="${"/".replace(/\/$/,"")}${t.image}" alt="${t.title}" />`:'<div class="item-image-placeholder" aria-label="No product image"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg></div>'}
                  </div>
                  <div class="item-details">
                    <h4>${t.title}</h4>
                    <div class="item-meta">
                       <span class="item-code">${t.id}</span>
                       ${t.brand?`<span class="item-brand">${t.brand}</span>`:""}
                    </div>
                    <div class="item-price-row">
                      <span class="item-price">${v(t.price||0)}</span>
                      <span class="item-subtotal">× ${t.quantity} = ${v((t.price||0)*t.quantity)}</span>
                    </div>
                    <div class="item-actions">
                      <div class="quantity-controls">
                        <button class="qty-btn minus" data-id="${t.id}">-</button>
                        <span class="qty">${t.quantity}</span>
                        <button class="qty-btn plus" data-id="${t.id}">+</button>
                      </div>
                      <button class="remove-btn" data-id="${t.id}">${y.remove}</button>
                    </div>
                  </div>
                </div>
              `).join(""),r.href=S(e,L,m?.dataset?.intro),r.classList.remove("disabled");const l=A(e);d&&(d.textContent=v(l)),i&&p&&(i.textContent=N(l,p)),document.querySelectorAll(".qty-btn.minus").forEach(t=>{t.addEventListener("click",s=>{const n=s.currentTarget.dataset.id;if(!n)return;const o=e.find(f=>f.id===n);o&&o.quantity>1?w(n,o.quantity-1):B(n)})}),document.querySelectorAll(".qty-btn.plus").forEach(t=>{t.addEventListener("click",s=>{const n=s.currentTarget.dataset.id;if(!n)return;const o=e.find(f=>f.id===n);o&&w(n,o.quantity+1)})}),document.querySelectorAll(".remove-btn").forEach(t=>{t.addEventListener("click",s=>{const n=s.currentTarget.dataset.id;n&&B(n)})})}const T=e.reduce((l,t)=>l+t.quantity,0);c.textContent=String(T)}E&&E(),E=R(q);function h(e){if(!e)return null;const a=e.cloneNode(!0);return e.parentNode?.replaceChild(a,e),a}const x=h($),k=h(C);x?.addEventListener("click",g),k?.addEventListener("click",g),u&&document.removeEventListener("open-cart",u),u=I,document.addEventListener("open-cart",u)});
