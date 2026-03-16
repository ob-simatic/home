import { b as createAstro, c as createComponent, f as renderScript, m as maybeRenderHead, d as addAttribute, r as renderTemplate, a as renderComponent, F as Fragment } from './bundle-astro/server-CiTTiyOT.js';
import 'piccolore';
import { s as siteData } from './bundle-Footer-B2ZFu6VJ.js';
/* empty css                                */
import fs from 'fs';
import path from 'path';
import { f as formatUrlSlug } from './bundle-urlFormatter-2bN1NoPj.js';

const $$Astro = createAstro("https://www.ob-simatic.com");
const $$AddToCartBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AddToCartBtn;
  const { product, ui, variant = "primary", contactType = "email" } = Astro2.props;
  const btnText = ui?.cart?.addToCart || "Add to Cart";
  ui?.cart?.added || "Added!";
  const isContact = product.price === "contact";
  const propsLang = Astro2.props.lang;
  const lang = propsLang || Astro2.currentLocale || "tr";
  const contact = siteData.contact || {};
  const localized = contact.i18n?.[lang] || {};
  const contactEmail = localized.email || contact.email || siteData.contact.email;
  const subject = lang === "ar" ? "\u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0639\u0646 \u0645\u0646\u062A\u062C" : lang === "en" ? "Product Inquiry" : "\xDCr\xFCn Hakk\u0131nda Bilgi";
  const msgTemplate = siteData.messages.product_inquiry[lang] || siteData.messages.product_inquiry["tr"];
  const body = msgTemplate.replace("{id}", product.id);
  const mailLink = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const waRaw = localized.whatsapp || contact.whatsapp || siteData.contact.whatsapp;
  const waNumber = waRaw ? waRaw.replace(/\D/g, "") : "";
  const waMessage = msgTemplate.replace("{id}", product.id);
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
  const finalLink = contactType === "whatsapp" ? waLink : mailLink;
  const isWhatsapp = contactType === "whatsapp";
  const contactBtnText = ui?.buttons?.whatsapp || (lang === "ar" ? "\u062A\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628" : lang === "en" ? "Contact via WhatsApp" : "WhatsApp ile \u0130leti\u015Fim");
  return renderTemplate`${isContact ? renderTemplate`${maybeRenderHead()}<a${addAttribute(finalLink, "href")}${addAttribute(isWhatsapp ? "_blank" : "_self", "target")}${addAttribute(`add-to-cart-btn contact-mode ${variant} ${isWhatsapp ? "whatsapp" : ""}`, "class")}${addAttribute(contactBtnText, "aria-label")} role="button" data-astro-cid-qcxqbkbb>${variant === "icon" ? isWhatsapp ? renderTemplate`<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-qcxqbkbb><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-qcxqbkbb></path></svg>` : renderTemplate`<i class="fas fa-headset fa-lg text-primary" data-astro-cid-qcxqbkbb></i>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-qcxqbkbb": true }, { "default": ($$result2) => renderTemplate`${isWhatsapp ? renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-qcxqbkbb><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-qcxqbkbb></path></svg>` : renderTemplate`<i class="fas fa-headset fa-lg text-primary me-2" data-astro-cid-qcxqbkbb></i>`}<span class="btn-text" data-astro-cid-qcxqbkbb>${contactBtnText}</span>` })}`}</a>` : renderTemplate`<button${addAttribute(`add-to-cart-btn ${variant}`, "class")}${addAttribute(JSON.stringify(product), "data-product")}${addAttribute(btnText, "aria-label")} data-astro-cid-qcxqbkbb>${variant === "icon" ? renderTemplate`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qcxqbkbb><path d="M12 5v14M5 12h14" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-qcxqbkbb></path></svg>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-qcxqbkbb": true }, { "default": ($$result2) => renderTemplate`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-qcxqbkbb><circle cx="9" cy="21" r="1" data-astro-cid-qcxqbkbb></circle><circle cx="20" cy="21" r="1" data-astro-cid-qcxqbkbb></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" data-astro-cid-qcxqbkbb></path></svg><span class="btn-text" data-astro-cid-qcxqbkbb>${btnText}</span>` })}`}</button>`}${renderScript($$result, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/AddToCartBtn.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/AddToCartBtn.astro", void 0);

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const BASE_URL = "/".replace(/\/$/, "");
function getCategoryImages(slug) {
  if (!slug) return [];
  const safeSlug = formatUrlSlug(slug);
  const categoryDir = path.join(process.cwd(), "public", "images", "categories", safeSlug);
  try {
    if (!fs.existsSync(categoryDir)) {
      return [];
    }
    const files = fs.readdirSync(categoryDir);
    const images = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext);
    });
    return images.map((img) => `${BASE_URL}/images/categories/${safeSlug}/${img}`);
  } catch (error) {
    console.error(`Error reading category images for ${slug}:`, error);
    return [];
  }
}
function getCategoryImage(slug, defaultImage = `${BASE_URL}/images/default/category.png`) {
  const images = getCategoryImages(slug);
  return images.length > 0 ? images[0] : defaultImage;
}

export { $$AddToCartBtn as $, getCategoryImage as g };
