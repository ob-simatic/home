import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, f as renderScript, r as renderTemplate, u as unescapeHTML, a as renderComponent } from './bundle-astro/server-CiTTiyOT.js';
import 'piccolore';
import 'clsx';
import { s as siteData, c as getLocalizedPath, D as DEFAULT_LANGUAGE } from './bundle-Footer-BofT26yj.js';
import fs from 'node:fs';
import path from 'node:path';
/* empty css                                */
import { c as categoriesData, f as formatUrlSlug } from './bundle-urlFormatter-uZsED8vM.js';
import { g as getCategoryImage, $ as $$AddToCartBtn } from './bundle-categoryImages-DSXWgqVA.js';
import products from './bundle-products-DmLyizlK.js';
import { b as getProductImage, a as getBrandNameFromSlug, g as getProductBrandSlug } from './bundle-brandUtils-BgBWm2iI.js';

const $$Astro$6 = createAstro("https://www.ob-simatic.com");
const $$HeroSearch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeroSearch;
  const { lang = "tr", ui } = Astro2.props;
  const heroTitle = ui?.hero?.title || "Aradığınız Ürünü Bulun";
  const heroSubtitle = ui?.hero?.subtitle || "Siemens PLC, Sürücü, Panel ve Otomasyon Yedek Parçaları";
  const searchPlaceholder = ui?.search?.placeholderMobile || "Ürün numarasını yazın (Örn: 6ES7...)";
  const searchButton = ui?.buttons?.search || "ARA";
  let heroImage = "";
  const BASE_URL = "/".replace(/\/$/, "");
  const selectedImage = siteData?.hero?.backgroundImage;
  if (selectedImage) {
    if (selectedImage.startsWith(BASE_URL)) {
      heroImage = selectedImage;
    } else {
      heroImage = `${BASE_URL}${selectedImage.startsWith("/") ? "" : "/"}${selectedImage}`;
    }
  }
  if (!heroImage) {
    try {
      const heroDir = path.join(process.cwd(), "public", "images", "background");
      if (fs.existsSync(heroDir)) {
        const files = fs.readdirSync(heroDir);
        const image = files.find((f) => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
        if (image) {
          heroImage = `${BASE_URL}/images/background/${image}`;
        }
      }
    } catch (e) {
      console.error("Error finding hero image:", e);
    }
  }
  return renderTemplate`${maybeRenderHead()}<section class="hero-search"${addAttribute(heroImage ? `background-image: url('${heroImage}');` : `background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);`, "style")} data-astro-cid-gp6napx3> <div class="overlay" data-astro-cid-gp6napx3></div> <div class="content" data-astro-cid-gp6napx3> <h1 data-astro-cid-gp6napx3>${heroTitle}</h1> <p data-astro-cid-gp6napx3>${heroSubtitle}</p> <div class="search-container" data-astro-cid-gp6napx3> <form${addAttribute(getLocalizedPath("/arama", lang), "action")} method="get" data-astro-cid-gp6napx3> <input type="text" name="q"${addAttribute(searchPlaceholder, "placeholder")} data-astro-cid-gp6napx3> <button type="submit"${addAttribute(searchButton, "title")} data-astro-cid-gp6napx3> <span class="btn-text" data-astro-cid-gp6napx3>${searchButton}</span> <span class="btn-icon" data-astro-cid-gp6napx3> <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-gp6napx3> <circle cx="11" cy="11" r="8" data-astro-cid-gp6napx3></circle> <line x1="21" y1="21" x2="16.65" y2="16.65" data-astro-cid-gp6napx3></line> </svg> </span> </button> </form> <div id="heroSearchResults" class="search-results" data-astro-cid-gp6napx3></div> </div> </div> </section> ${renderScript($$result, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/HeroSearch.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/HeroSearch.astro", void 0);

const $$Astro$5 = createAstro("https://www.ob-simatic.com");
const $$ServicePillars = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ServicePillars;
  const { lang = "tr", ui, site } = Astro2.props;
  const services = site?.services || { enabled: true, items: {} };
  const isSectionEnabled = services.enabled !== false;
  const defaultIcons = {
    sales: `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
    purchase: `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.83a2 2 0 0 0-1.78-1.07l-2.45.15a2 2 0 0 0-1.5 1l-1.39 2.5a.6.6 0 0 1-.52.28H6a2 2 0 0 0-2 2v6l-2 3.4a2 2 0 0 0 1.76 2.91H20a2 2 0 0 0 2-2V7a2 2 0 0 0-.58-1.5z"></path><circle cx="12" cy="13" r="1.5"></circle></svg>`,
    technical: `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
  };
  const links = {
    sales: "/teknik-servis",
    purchase: "/satin-alma",
    technical: "/teknik-servis"
  };
  const pillars = [];
  ["sales", "purchase", "technical"].forEach((key) => {
    const item = services.items?.[key];
    if (item && item.enabled !== false) {
      pillars.push({
        key,
        title: item.title,
        desc: item.desc,
        button: item.button,
        icon: defaultIcons[key],
        link: links[key]
      });
    }
  });
  const showSection = isSectionEnabled && pillars.length > 0;
  return renderTemplate`${showSection && renderTemplate`${maybeRenderHead()}<section class="p-home__services" data-astro-cid-2gbovvl7><div class="container"${addAttribute(`grid-template-columns: repeat(${pillars.length}, 1fr)`, "style")} data-astro-cid-2gbovvl7>${pillars.map((pillar) => renderTemplate`<div class="service-item" data-astro-cid-2gbovvl7><div${addAttribute(`icon-wrapper ${pillar.key}`, "class")} data-astro-cid-2gbovvl7>${unescapeHTML(pillar.icon)}</div><div class="content" data-astro-cid-2gbovvl7><h3 data-astro-cid-2gbovvl7>${pillar.title}</h3><p data-astro-cid-2gbovvl7>${pillar.desc}</p><a${addAttribute(getLocalizedPath(pillar.link, lang), "href")} class="service-link" data-astro-cid-2gbovvl7><span data-astro-cid-2gbovvl7>${pillar.button}</span><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2gbovvl7><line x1="5" y1="12" x2="19" y2="12" data-astro-cid-2gbovvl7></line><polyline points="12 5 19 12 12 19" data-astro-cid-2gbovvl7></polyline></svg></a></div></div>`)}</div></section>`}`;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/ServicePillars.astro", void 0);

const $$Astro$4 = createAstro("https://www.ob-simatic.com");
const $$ProductCategories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProductCategories;
  const { lang = "tr", ui } = Astro2.props;
  const sectionTitle = ui?.sections?.productGroups || "Otomasyon \xDCr\xFCn Gruplar\u0131";
  const sectionDesc = ui?.sections?.productGroupsDesc || "\u0130htiyac\u0131n\u0131z olan t\xFCm end\xFCstriyel \xE7\xF6z\xFCm \xFCr\xFCnleri stoklar\u0131m\u0131zda";
  const viewProductsText = ui?.buttons?.viewProducts || "\xDCr\xFCnleri \u0130ncele";
  function getCatLoc(cat, lang2) {
    return cat.i18n[lang2] || cat.i18n["en"] || cat.i18n["tr"];
  }
  const allCategories = Object.values(categoriesData).map((cat) => {
    const loc = getCatLoc(cat, lang);
    return {
      slug: cat.slug,
      name: loc.name,
      title: loc.title,
      parentSlug: cat.parentSlug,
      order: cat.order || 0,
      // Dynamically discover image from folder instead of using cat.image
      image: getCategoryImage(cat.slug)
    };
  });
  const categories = allCategories.filter((cat) => cat.parentSlug === null).sort((a, b) => (a.order || 0) - (b.order || 0)).map((cat) => ({
    title: cat.name,
    slug: cat.slug,
    image: cat.image
  }));
  return renderTemplate`${maybeRenderHead()}<section class="products" data-astro-cid-xf6hngan> <div class="container" data-astro-cid-xf6hngan> <div class="section-title" data-astro-cid-xf6hngan> <h2 data-astro-cid-xf6hngan>${sectionTitle}</h2> <p data-astro-cid-xf6hngan>${sectionDesc}</p> </div> <div class="grid" data-astro-cid-xf6hngan> ${categories.map((cat) => renderTemplate`<a${addAttribute(
    cat.slug ? getLocalizedPath(`/${formatUrlSlug(cat.slug)}`, lang) : "#",
    "href"
  )} class="category-card" data-astro-cid-xf6hngan> <div class="card-image" data-astro-cid-xf6hngan> ${cat.image && !cat.image.includes("default") ? renderTemplate`<img${addAttribute(cat.image, "src")}${addAttribute(cat.title, "alt")} loading="lazy" data-astro-cid-xf6hngan>` : renderTemplate`<i class="fas fa-folder-open fa-3x text-primary opacity-50" data-astro-cid-xf6hngan></i>`} </div> <h3 data-astro-cid-xf6hngan>${cat.title}</h3> <span class="view-btn" data-astro-cid-xf6hngan>${viewProductsText}</span> </a>`)} </div> </div> </section> `;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/ProductCategories.astro", void 0);

const $$Astro$3 = createAstro("https://www.ob-simatic.com");
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const {
    image,
    brand,
    title,
    code,
    href = "#",
    ui,
    categorySlug = "",
    price = 0,
    lang = "tr"
  } = Astro2.props;
  const base = "/".replace(/\/$/, "");
  const isAbsolute = typeof image === "string" && (image.startsWith("http") || image.startsWith("data:"));
  const isLegacy = typeof image === "string" && image.includes("cpu-1516");
  const hasImage = image && !isLegacy;
  let imagePath = image;
  if (hasImage && typeof image === "string" && !isAbsolute) {
    const hasBase = image.startsWith(base);
    if (!hasBase) {
      imagePath = `${base}${image.startsWith("/") ? "" : "/"}${image}`;
    }
  }
  const isContactPrice = price === "contact";
  const formattedPrice = isContactPrice ? "" : `€${price}`;
  const contactText = ui?.product?.contactForPrice || (lang === "ar" ? "تواصل معنا للسعر" : lang === "en" ? "Contact for Price" : "Fiyat için iletişime geçin");
  return renderTemplate`${maybeRenderHead()}<div class="product-card" data-astro-cid-tjdfhdqb> <a${addAttribute(href, "href")} class="product-image skeleton-loader" data-astro-cid-tjdfhdqb> ${hasImage ? renderTemplate`<img${addAttribute(imagePath, "src")}${addAttribute(title, "alt")} loading="lazy" onload="this.parentElement.classList.remove('skeleton-loader'); this.classList.add('loaded')" data-astro-cid-tjdfhdqb>` : renderTemplate`<div class="no-image-placeholder" data-astro-cid-tjdfhdqb> <i class="fas fa-cube" data-astro-cid-tjdfhdqb></i> </div>`} </a> <div class="product-info" data-astro-cid-tjdfhdqb> <a href="#" class="product-brand" data-astro-cid-tjdfhdqb>${brand}</a> <a${addAttribute(href, "href")} class="product-title"${addAttribute(title, "title")} data-astro-cid-tjdfhdqb> <span class="product-code" data-astro-cid-tjdfhdqb>${code}</span> ${title} </a> <div class="product-price-row mt-2" data-astro-cid-tjdfhdqb> ${isContactPrice ? renderTemplate`<span class="text-primary fw-bold small" data-astro-cid-tjdfhdqb> <i class="fas fa-envelope me-1" data-astro-cid-tjdfhdqb></i> ${contactText} </span>` : renderTemplate`<span class="fw-bold text-dark" data-astro-cid-tjdfhdqb>${formattedPrice}</span>`} </div> </div> <div class="product-actions" style="margin-top: 15px;" data-astro-cid-tjdfhdqb> ${renderComponent($$result, "AddToCartBtn", $$AddToCartBtn, { "product": { id: code, title, image, brand, categorySlug, price }, "ui": ui, "variant": "secondary", "lang": lang, "data-astro-cid-tjdfhdqb": true })} </div> </div> `;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/ProductCard.astro", void 0);

const $$Astro$2 = createAstro("https://www.ob-simatic.com");
const $$FeaturedProducts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeaturedProducts;
  const { lang = "tr", ui } = Astro2.props;
  const allProductsMap = /* @__PURE__ */ new Map();
  Object.values(products).forEach((prod) => {
    const image = getProductImage(prod.id);
    allProductsMap.set(prod.id, {
      ...prod,
      image,
      title: prod.i18n[lang]?.title || prod.i18n["en"]?.title || prod.i18n["tr"]?.title || prod.i18n["ar"]?.title,
      brandName: getBrandNameFromSlug(getProductBrandSlug(prod.categorySlug), lang)
    });
  });
  let featuredProducts = [];
  if (siteData.featuredProducts && siteData.featuredProducts.length > 0) {
    siteData.featuredProducts.forEach((id) => {
      if (allProductsMap.has(id)) {
        featuredProducts.push(allProductsMap.get(id));
      }
    });
  }
  const sectionTitle = lang === "ar" ? "\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0645\u064A\u0632\u0629" : lang === "en" ? "Featured Products" : "\xD6ne \xC7\u0131kan \xDCr\xFCnler";
  const viewAllText = ui?.buttons?.viewAll || (lang === "ar" ? "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644" : lang === "en" ? "View All" : "T\xFCm\xFCn\xFC G\xF6ster");
  return renderTemplate`${featuredProducts.length > 0 && renderTemplate`${maybeRenderHead()}<section class="featured-products" data-astro-cid-izcvjprn><div class="container" data-astro-cid-izcvjprn><div class="section-header" data-astro-cid-izcvjprn><h2 data-astro-cid-izcvjprn>${sectionTitle}</h2><a${addAttribute(getLocalizedPath("/arama", lang), "href")} class="view-all-btn" data-astro-cid-izcvjprn>${viewAllText}</a></div><div class="products-grid" data-astro-cid-izcvjprn>${featuredProducts.map((product) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "image": product.image, "brand": product.brandName, "title": product.title, "code": product.id, "href": getLocalizedPath(`/${formatUrlSlug(product.id)}`, lang), "ui": ui, "categorySlug": product.categorySlug, "price": product.price, "lang": lang, "data-astro-cid-izcvjprn": true })}`)}</div></div></section>`}`;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/FeaturedProducts.astro", void 0);

const $$Astro$1 = createAstro("https://www.ob-simatic.com");
const $$Manufacturers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Manufacturers;
  const { lang = "tr", ui } = Astro2.props;
  const sectionTitle = ui?.sections?.brands || "\xC7al\u0131\u015Ft\u0131\u011F\u0131m\u0131z Markalar";
  function getCatLoc(cat, lang2) {
    return cat.i18n[lang2] || cat.i18n["en"] || cat.i18n["tr"] || {};
  }
  const searchUrl = lang === DEFAULT_LANGUAGE ? "/arama" : `/${lang}/arama`;
  const rootCategories = Object.values(categoriesData).filter(
    (cat) => !cat.parentSlug
  );
  const rootSlugs = new Set(rootCategories.map((cat) => cat.slug));
  const brandCategories = Object.values(categoriesData).filter(
    (cat) => {
      const isBrand = cat.type === "brand";
      const isLegacyBrand = !cat.type && cat.parentSlug && rootSlugs.has(cat.parentSlug);
      return (isBrand || isLegacyBrand) && (cat.showOnHome === void 0 || cat.showOnHome === true);
    }
  );
  const brandsMap = /* @__PURE__ */ new Map();
  brandCategories.forEach((cat) => {
    const name = getCatLoc(cat, lang).name;
    const canonicalSlug = getProductBrandSlug(cat.slug);
    if (!brandsMap.has(canonicalSlug)) {
      brandsMap.set(canonicalSlug, {
        name,
        slug: canonicalSlug,
        image: getCategoryImage(cat.slug)
      });
    }
  });
  const brands = Array.from(brandsMap.values()).sort(
    (a, b) => a.name.localeCompare(b.name)
  );
  return renderTemplate`${maybeRenderHead()}<section class="manufacturers" data-astro-cid-vhoeen67> <div class="container" data-astro-cid-vhoeen67> <div class="section-title" data-astro-cid-vhoeen67> <h2 data-astro-cid-vhoeen67>${sectionTitle}</h2> </div> <div class="brand-grid" data-astro-cid-vhoeen67> ${brands.map((brand) => renderTemplate`<a${addAttribute(`${searchUrl}?brand=${encodeURIComponent(brand.slug)}`, "href")} class="brand-item" data-astro-cid-vhoeen67> ${brand.image && !brand.image.includes("default") ? renderTemplate`<img${addAttribute(brand.image, "src")}${addAttribute(brand.name, "alt")} class="brand-image" data-astro-cid-vhoeen67>` : renderTemplate`<span class="brand-name" data-astro-cid-vhoeen67>${brand.name}</span>`} </a>`)} </div> </div> </section> `;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/Manufacturers.astro", void 0);

const pricelists = [
];

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const BASE_URL = "/".replace(/\/$/, "");
function getPriceListImages(id) {
  if (!id) return [];
  const safeId = id.replace(/[<>:"\/\\|?*]/g, "-");
  const dir = path.join(process.cwd(), "public", "images", "pricelists", safeId);
  try {
    if (!fs.existsSync(dir)) {
      return [];
    }
    const files = fs.readdirSync(dir);
    const images = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext);
    });
    return images.map((img) => `${BASE_URL}/images/pricelists/${safeId}/${img}`);
  } catch (error) {
    console.error(`Error reading price list images for ${id}:`, error);
    return [];
  }
}
function getPriceListImage(id) {
  const images = getPriceListImages(id);
  return images.length > 0 ? images[0] : null;
}
function getPriceListPDF(id) {
  if (!id) return null;
  const safeId = id.replace(/[<>:"\/\\|?*]/g, "-");
  const dir = path.join(process.cwd(), "public", "files", "pricelists", safeId);
  try {
    if (!fs.existsSync(dir)) return null;
    const files = fs.readdirSync(dir);
    const pdfs = files.filter((file) => path.extname(file).toLowerCase() === ".pdf");
    return pdfs.length > 0 ? `${BASE_URL}/files/pricelists/${safeId}/${pdfs[0]}` : null;
  } catch (error) {
    console.error(`Error reading price list PDF for ${id}:`, error);
    return null;
  }
}

const $$Astro = createAstro("https://www.ob-simatic.com");
const $$PriceList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PriceList;
  const { lang = "tr", ui } = Astro2.props;
  const sectionTitle = ui?.sections?.priceList || "Fiyat Listeleri";
  const downloadText = ui?.sections?.downloadPDF || "PDF \u0130ndir";
  ui?.sections?.noPriceLists || "\u015Eu anda fiyat listesi bulunmamaktad\u0131r";
  let items = [];
  if (Array.isArray(pricelists)) {
    items = pricelists;
  } else {
    items = Object.values(pricelists);
  }
  items.sort((a, b) => (a.order || 0) - (b.order || 0));
  function getName(item) {
    return item.i18n?.[lang]?.name || item.i18n?.["en"]?.name || item.i18n?.["tr"]?.name || item.name || "";
  }
  function resolveImage(id, jsonPath) {
    const discovered = getPriceListImage(id);
    if (discovered) return discovered;
    if (jsonPath) {
      try {
        const absolutePath = path.join(process.cwd(), "public", jsonPath);
        if (fs.existsSync(absolutePath)) {
          return jsonPath;
        }
      } catch (e) {
      }
    }
    return null;
  }
  function resolvePDF(id, jsonPath) {
    const discovered = getPriceListPDF(id);
    if (discovered) return discovered;
    if (jsonPath) {
      try {
        const absolutePath = path.join(process.cwd(), "public", jsonPath);
        if (fs.existsSync(absolutePath)) {
          return jsonPath;
        }
      } catch (e) {
      }
    }
    return null;
  }
  return renderTemplate`${items.length > 0 && renderTemplate`${maybeRenderHead()}<section class="price-list-section" data-astro-cid-os7f7dgy><div class="container" data-astro-cid-os7f7dgy><div class="section-title" data-astro-cid-os7f7dgy><h2 data-astro-cid-os7f7dgy>${sectionTitle}</h2></div><div class="items-grid" data-astro-cid-os7f7dgy>${items.map((item) => {
    const name = getName(item);
    const finalImage = resolveImage(item.id, item.image);
    const finalPDF = resolvePDF(item.id, item.pdf);
    return renderTemplate`<div class="grid-item" data-astro-cid-os7f7dgy><div class="item-content" data-astro-cid-os7f7dgy>${finalImage ? renderTemplate`<img${addAttribute(finalImage, "src")}${addAttribute(item.keywords || name, "alt")} class="item-image" data-astro-cid-os7f7dgy>` : renderTemplate`<div class="item-placeholder" data-astro-cid-os7f7dgy><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-os7f7dgy><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-astro-cid-os7f7dgy></path><polyline points="14 2 14 8 20 8" data-astro-cid-os7f7dgy></polyline><line x1="16" y1="13" x2="8" y2="13" data-astro-cid-os7f7dgy></line><line x1="16" y1="17" x2="8" y2="17" data-astro-cid-os7f7dgy></line><polyline points="10 9 9 9 8 9" data-astro-cid-os7f7dgy></polyline></svg></div>`}${finalPDF && renderTemplate`<a${addAttribute(finalPDF, "href")} target="_blank" class="pdf-overlay"${addAttribute(name, "title")} download data-astro-cid-os7f7dgy><i class="fas fa-file-pdf" data-astro-cid-os7f7dgy></i><span data-astro-cid-os7f7dgy>${downloadText}</span></a>`}</div><div class="item-name" data-astro-cid-os7f7dgy>${name}</div></div>`;
  })}</div></div></section>`}`;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/PriceList.astro", void 0);

const $$Popup = createComponent(($$result, $$props, $$slots) => {
  const settings = siteData.campaign_popup || {};
  const enabled = settings.enabled !== false;
  let image = "";
  try {
    const popupDir = path.join(process.cwd(), "public", "images", "floatingpopup");
    if (fs.existsSync(popupDir)) {
      const files = fs.readdirSync(popupDir);
      const foundImage = files.find((f) => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
      if (foundImage) {
        image = `${"/".replace(/\/$/, "")}/images/floatingpopup/${foundImage}`;
      }
    }
  } catch (e) {
    console.error("Error finding popup image:", e);
  }
  if (!enabled || !image) {
    return;
  }
  const ctaLink = settings.cta_link || "#";
  const hasLink = ctaLink !== "#";
  return renderTemplate`${maybeRenderHead()}<div id="campaign-popup" class="popup-overlay" data-astro-cid-qzaw6m73> <div class="popup-content" data-astro-cid-qzaw6m73> <button id="close-popup" class="close-btn" data-astro-cid-qzaw6m73>&times;</button> ${hasLink ? renderTemplate`<a${addAttribute(ctaLink, "href")} class="popup-link" data-astro-cid-qzaw6m73> <img${addAttribute(image, "src")} alt="Special Offer" class="popup-image" data-astro-cid-qzaw6m73> </a>` : renderTemplate`<img${addAttribute(image, "src")} alt="Special Offer" class="popup-image" data-astro-cid-qzaw6m73>`} </div> </div> ${renderScript($$result, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/Popup.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/Popup.astro", void 0);

export { $$Popup as $, $$HeroSearch as a, $$ServicePillars as b, $$ProductCategories as c, $$FeaturedProducts as d, $$PriceList as e, $$Manufacturers as f, $$ProductCard as g };
