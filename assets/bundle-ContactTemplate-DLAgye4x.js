import { b as createAstro, c as createComponent, r as renderTemplate, u as unescapeHTML, a as renderComponent, m as maybeRenderHead, d as addAttribute } from './bundle-astro/server-CiTTiyOT.js';
import 'piccolore';
import { s as siteData, g as getPageData, $ as $$Layout, a as $$Header, b as $$Footer, D as DEFAULT_LANGUAGE } from './bundle-Footer-B23G-Nc0.js';
import 'clsx';
/* empty css                                */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.ob-simatic.com");
const $$LocalBusinessSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LocalBusinessSchema;
  const { lang } = Astro2.props;
  const siteEnv = "https://www.ob-simatic.com".replace(
    /\/$/,
    ""
  );
  const baseEnv = "/".replace(/\/$/, "");
  const baseUrl = baseEnv === "" ? siteEnv : `${siteEnv}${baseEnv}`;
  const contact = siteData.contact || {};
  const getDescription = () => {
    const aboutData = siteData.about?.[lang];
    if (aboutData && typeof aboutData === "object" && "aboutText" in aboutData) {
      return aboutData.aboutText?.split("\n")[0] || siteData.metaDescription || "";
    }
    return siteData.metaDescription || "";
  };
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: siteData.shortName || "OB Simatic",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/logo.png`,
    description: getDescription(),
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address || "",
      addressCountry: "TR"
    },
    telephone: contact.phone || "",
    ...contact.email && { email: contact.email },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    priceRange: "$$",
    currenciesAccepted: "TRY, EUR, USD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: {
      "@type": "Country",
      name: "Turkey"
    },
    serviceType: [
      "Industrial Automation",
      "PLC Sales",
      "HMI Panel",
      "Drives",
      "Technical Support"
    ]
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "</script>"])), unescapeHTML(JSON.stringify(localBusinessSchema)));
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/schema/LocalBusinessSchema.astro", void 0);

const $$Astro = createAstro("https://www.ob-simatic.com");
const $$ContactTemplate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactTemplate;
  const { lang } = Astro2.props;
  const { ui, site, isRTL } = await getPageData(lang);
  const baseUrl = "/".replace(/\/$/, "");
  const pageContent = {
    tr: {
      title: "İletişim",
      subtitle: "Bizimle iletişime geçin",
      formTitle: "Mesaj Gönderin",
      nameLabel: "Adınız Soyadınız",
      emailLabel: "E-posta Adresiniz",
      phoneLabel: "Telefon Numaranız",
      subjectLabel: "Konu",
      messageLabel: "Mesajınız",
      submitBtn: "Mesaj Gönder",
      addressTitle: "Adres",
      phoneTitle: "Telefon",
      emailTitle: "E-posta",
      whatsappTitle: "WhatsApp",
      workingHoursTitle: "Çalışma Saatleri",
      workingHours: "Pazartesi - Cumartesi: 09:00 - 18:00",
      quickContactTitle: "Hızlı İletişim",
      quickContactDesc: "WhatsApp üzerinden anında iletişime geçebilirsiniz."
    },
    en: {
      title: "Contact",
      subtitle: "Get in touch with us",
      formTitle: "Send a Message",
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      phoneLabel: "Your Phone",
      subjectLabel: "Subject",
      messageLabel: "Your Message",
      submitBtn: "Send Message",
      addressTitle: "Address",
      phoneTitle: "Phone",
      emailTitle: "Email",
      whatsappTitle: "WhatsApp",
      workingHoursTitle: "Working Hours",
      workingHours: "Monday - Saturday: 09:00 - 18:00",
      quickContactTitle: "Quick Contact",
      quickContactDesc: "You can reach us instantly via WhatsApp."
    },
    ar: {
      title: "اتصل بنا",
      subtitle: "تواصل معنا",
      formTitle: "أرسل رسالة",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "رقم الهاتف",
      subjectLabel: "الموضوع",
      messageLabel: "رسالتك",
      submitBtn: "إرسال الرسالة",
      addressTitle: "العنوان",
      phoneTitle: "الهاتف",
      emailTitle: "البريد الإلكتروني",
      whatsappTitle: "واتساب",
      workingHoursTitle: "ساعات العمل",
      workingHours: "الإثنين - السبت: 09:00 - 18:00",
      quickContactTitle: "تواصل سريع",
      quickContactDesc: "يمكنك التواصل معنا فوراً عبر واتساب."
    }
  };
  const content = pageContent[lang];
  const homeText = ui?.nav?.home || "Ana Sayfa";
  const contactInfo = site.contact || siteData.contact;
  const homeUrl = lang === DEFAULT_LANGUAGE ? `${baseUrl}/` : `${baseUrl}/${lang}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${content.title} | ${siteData.shortName}`, "lang": lang, "data-astro-cid-45b47qfu": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "LocalBusinessSchema", $$LocalBusinessSchema, { "lang": lang, "data-astro-cid-45b47qfu": true })} ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "ui": ui, "data-astro-cid-45b47qfu": true })} ${maybeRenderHead()}<main class="contact-page" data-astro-cid-45b47qfu> <div class="container" data-astro-cid-45b47qfu> <!-- Page Header --> <div class="page-header" data-astro-cid-45b47qfu> <h1 data-astro-cid-45b47qfu>${content.title}</h1> <p data-astro-cid-45b47qfu>${content.subtitle}</p> </div> <!-- Breadcrumb --> <nav class="breadcrumb" data-astro-cid-45b47qfu> <a${addAttribute(homeUrl, "href")} data-astro-cid-45b47qfu>${homeText}</a> <span data-astro-cid-45b47qfu>/</span> <span data-astro-cid-45b47qfu>${content.title}</span> </nav> <div class="contact-grid" data-astro-cid-45b47qfu> <!-- Contact Info --> <section class="contact-info-section" data-astro-cid-45b47qfu> <!-- Address --> <div class="info-card" data-astro-cid-45b47qfu> <div class="info-icon" data-astro-cid-45b47qfu> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-45b47qfu> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-45b47qfu></path> <circle cx="12" cy="10" r="3" data-astro-cid-45b47qfu></circle> </svg> </div> <div class="info-content" data-astro-cid-45b47qfu> <h3 data-astro-cid-45b47qfu>${content.addressTitle}</h3> <a${addAttribute(contactInfo.mapUrl ? contactInfo.mapUrl.startsWith("http") || contactInfo.mapUrl.startsWith("https") ? contactInfo.mapUrl : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.mapUrl)}` : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-45b47qfu> ${contactInfo.address} </a> </div> </div> <!-- Phone --> <div class="info-card" data-astro-cid-45b47qfu> <div class="info-icon" data-astro-cid-45b47qfu> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-45b47qfu> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-45b47qfu></path> </svg> </div> <div class="info-content" data-astro-cid-45b47qfu> <h3 data-astro-cid-45b47qfu>${content.phoneTitle}</h3> <a${addAttribute(`tel:${contactInfo.phone.replace(/\s/g, "")}`, "href")} data-astro-cid-45b47qfu>${contactInfo.phone}</a> </div> </div> <!-- Email --> <div class="info-card" data-astro-cid-45b47qfu> <div class="info-icon" data-astro-cid-45b47qfu> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-45b47qfu> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-45b47qfu></path> <polyline points="22,6 12,13 2,6" data-astro-cid-45b47qfu></polyline> </svg> </div> <div class="info-content" data-astro-cid-45b47qfu> <h3 data-astro-cid-45b47qfu>${content.emailTitle}</h3> <a${addAttribute(`mailto:${contactInfo.email}`, "href")} data-astro-cid-45b47qfu>${contactInfo.email}</a> </div> </div> <!-- Working Hours --> <div class="info-card" data-astro-cid-45b47qfu> <div class="info-icon" data-astro-cid-45b47qfu> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-45b47qfu> <circle cx="12" cy="12" r="10" data-astro-cid-45b47qfu></circle> <polyline points="12,6 12,12 16,14" data-astro-cid-45b47qfu></polyline> </svg> </div> <div class="info-content" data-astro-cid-45b47qfu> <h3 data-astro-cid-45b47qfu>${content.workingHoursTitle}</h3> <p data-astro-cid-45b47qfu>${content.workingHours}</p> </div> </div> <!-- WhatsApp CTA --> <div class="whatsapp-card" data-astro-cid-45b47qfu> <h3 data-astro-cid-45b47qfu>${content.quickContactTitle}</h3> <p data-astro-cid-45b47qfu>${content.quickContactDesc}</p> <a${addAttribute(`https://wa.me/${contactInfo.whatsapp.replace(/\+/g, "")}`, "href")} class="whatsapp-btn" target="_blank" data-astro-cid-45b47qfu> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-45b47qfu> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-45b47qfu></path> </svg> ${content.whatsappTitle} </a> </div> </section> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "ui": ui, "site": site, "data-astro-cid-45b47qfu": true })} ` })} `;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/templates/ContactTemplate.astro", void 0);

export { $$ContactTemplate as $ };
