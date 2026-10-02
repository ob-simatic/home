const f={whatsapp:"905011088779"},y={contact:f},l="ob_simatic_cart",c="cart-updated";function s(){if(typeof localStorage>"u")return[];const t=localStorage.getItem(l);return t?JSON.parse(t):[]}function d(t){typeof localStorage>"u"||(localStorage.setItem(l,JSON.stringify(t)),window.dispatchEvent(new CustomEvent(c,{detail:t})))}function w(t){const n=s(),e=n.find(i=>i.id===t.id);e?e.quantity+=1:n.push({...t,quantity:1}),d(n)}function h(t){const e=s().filter(i=>i.id!==t);d(e)}function m(t,n){const e=s(),i=e.find(a=>a.id===t);i&&(i.quantity=Math.max(1,n),d(e))}function $(t){return t.reduce((n,e)=>n+e.price*e.quantity,0)}function T(t){if(typeof window>"u")return()=>{};const n=e=>t(e.detail);return window.addEventListener(c,n),t(s()),()=>window.removeEventListener(c,n)}const u={tr:{greeting:"Merhaba, aşağıdaki ürünler için sipariş vermek istiyorum:",code:"Kod",price:"Fiyat",quantity:"Adet",subtotal:"Ara Toplam",totalItems:"Toplam Kalem",grandTotal:"GENEL TOPLAM"},en:{greeting:"Hello, I would like to order the following products:",code:"Code",price:"Price",quantity:"Quantity",subtotal:"Subtotal",totalItems:"Total Items",grandTotal:"GRAND TOTAL"},ar:{greeting:"مرحباً، أود طلب المنتجات التالية:",code:"الكود",price:"السعر",quantity:"الكمية",subtotal:"المجموع الفرعي",totalItems:"إجمالي العناصر",grandTotal:"المجموع الكلي"}};function C(t,n="tr",e){const i=y.contact.whatsapp;if(t.length===0)return"";const a=u[n]||u.tr;let o=`${e||a.greeting}

`;t.forEach((r,g)=>{o+=`${g+1}. *${r.title}* (${r.brand})
`,o+=`   ${a.code}: ${r.id}
`,o+=`   ${a.price}: €${r.price.toFixed(2)}
`,o+=`   ${a.quantity}: ${r.quantity}
`,o+=`   ${a.subtotal}: €${(r.price*r.quantity).toFixed(2)}

`});const p=$(t);return o+=`━━━━━━━━━━━━━━━━━━━━
`,o+=`${a.totalItems}: ${t.length}
`,o+=`*${a.grandTotal}: €${p.toFixed(2)}*`,`https://wa.me/${i}?text=${encodeURIComponent(o)}`}export{w as a,$ as b,C as g,h as r,T as s,m as u};
