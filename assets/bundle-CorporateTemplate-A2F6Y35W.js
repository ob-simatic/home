import { b as createAstro, c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './bundle-astro/server-CiTTiyOT.js';
import 'piccolore';
import { g as getPageData, s as siteData, $ as $$Layout, a as $$Header, b as $$Footer, D as DEFAULT_LANGUAGE } from './bundle-Footer-Bd7HbYMG.js';
/* empty css                                */

const $$Astro = createAstro("https://www.ob-simatic.com");
const $$CorporateTemplate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CorporateTemplate;
  const { lang } = Astro2.props;
  const { ui, site, isRTL } = await getPageData(lang);
  const baseUrl = "/".replace(/\/$/, "");
  const pageContentRaw = siteData.about || {};
  const getContent = (l) => pageContentRaw[l] || pageContentRaw["tr"];
  const getLocalizedContent = (l) => {
    const data = getContent(l);
    return {
      title: data.title || "Kurumsal",
      subtitle: data.subtitle || "OB Simatic Otomasyon Hakkında",
      aboutTitle: data.aboutTitle || "Hakkımızda",
      aboutText: data.aboutText || "",
      missionTitle: data.missionTitle || "Misyonumuz",
      missionText: data.missionText || "",
      visionTitle: data.visionTitle || "Vizyonumuz",
      visionText: data.visionText || "",
      valuesTitle: data.valuesTitle || "Değerlerimiz",
      values: Array.isArray(data.values) ? data.values : [],
      contactCta: l === "ar" ? "تواصل معنا" : l === "en" ? "Contact us" : "Bizimle iletişime geçin"
    };
  };
  const content = getLocalizedContent(lang);
  const homeText = ui?.nav?.home || "Ana Sayfa";
  const homeUrl = lang === DEFAULT_LANGUAGE ? `${baseUrl}/` : `${baseUrl}/${lang}`;
  const contactUrl = lang === DEFAULT_LANGUAGE ? `${baseUrl}/iletisim` : `${baseUrl}/${lang}/iletisim`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${content.title} | ${siteData.shortName}`, "lang": lang, "data-astro-cid-mhyhuvr6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "ui": ui, "data-astro-cid-mhyhuvr6": true })} ${maybeRenderHead()}<main class="kurumsal-page" data-astro-cid-mhyhuvr6> <div class="container" data-astro-cid-mhyhuvr6> <!-- Page Header --> <div class="page-header" data-astro-cid-mhyhuvr6> <h1 data-astro-cid-mhyhuvr6>${content.title}</h1> <p data-astro-cid-mhyhuvr6>${content.subtitle}</p> </div> <!-- Breadcrumb --> <nav class="breadcrumb" data-astro-cid-mhyhuvr6> <a${addAttribute(homeUrl, "href")} data-astro-cid-mhyhuvr6>${homeText}</a> <span data-astro-cid-mhyhuvr6>/</span> <span data-astro-cid-mhyhuvr6>${content.title}</span> </nav> <!-- About Section --> <section class="about-section" data-astro-cid-mhyhuvr6> <div class="section-content" data-astro-cid-mhyhuvr6> <h2 data-astro-cid-mhyhuvr6>${content.aboutTitle}</h2> <div class="about-text" data-astro-cid-mhyhuvr6> ${content.aboutText.split("\n\n").map((paragraph) => renderTemplate`<p data-astro-cid-mhyhuvr6>${paragraph}</p>`)} </div> </div> <div class="about-image" data-astro-cid-mhyhuvr6> <div class="image-placeholder" data-astro-cid-mhyhuvr6> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-mhyhuvr6> <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-mhyhuvr6></path> </svg> </div> </div> </section> <!-- Mission & Vision --> <section class="mission-vision" data-astro-cid-mhyhuvr6> <div class="card mission" data-astro-cid-mhyhuvr6> <div class="card-icon" data-astro-cid-mhyhuvr6> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-mhyhuvr6> <circle cx="12" cy="12" r="10" data-astro-cid-mhyhuvr6></circle> <path d="M12 16l4-4-4-4M8 12h8" data-astro-cid-mhyhuvr6></path> </svg> </div> <h3 data-astro-cid-mhyhuvr6>${content.missionTitle}</h3> <p data-astro-cid-mhyhuvr6>${content.missionText}</p> </div> <div class="card vision" data-astro-cid-mhyhuvr6> <div class="card-icon" data-astro-cid-mhyhuvr6> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-mhyhuvr6> <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-astro-cid-mhyhuvr6></path> <circle cx="12" cy="12" r="3" data-astro-cid-mhyhuvr6></circle> </svg> </div> <h3 data-astro-cid-mhyhuvr6>${content.visionTitle}</h3> <p data-astro-cid-mhyhuvr6>${content.visionText}</p> </div> </section> <!-- Values Section --> <section class="values-section" data-astro-cid-mhyhuvr6> <h2 data-astro-cid-mhyhuvr6>${content.valuesTitle}</h2> <div class="values-grid" data-astro-cid-mhyhuvr6> ${content.values.map((value, index) => renderTemplate`<div class="value-item" data-astro-cid-mhyhuvr6> <span class="value-number" data-astro-cid-mhyhuvr6> ${String(index + 1).padStart(2, "0")} </span> <span class="value-text" data-astro-cid-mhyhuvr6>${value}</span> </div>`)} </div> </section> <!-- Contact CTA --> <section class="contact-cta" data-astro-cid-mhyhuvr6> <a${addAttribute(contactUrl, "href")} class="cta-button" data-astro-cid-mhyhuvr6> ${content.contactCta} <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-mhyhuvr6> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-mhyhuvr6></path> </svg> </a> </section> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "ui": ui, "site": site, "data-astro-cid-mhyhuvr6": true })} ` })} `;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/templates/CorporateTemplate.astro", void 0);

export { $$CorporateTemplate as $ };
