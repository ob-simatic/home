import { b as createAstro, c as createComponent, a as renderComponent, f as renderScript, r as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment } from './bundle-astro/server-CiTTiyOT.js';
import 'piccolore';
import { g as getPageData, s as siteData, $ as $$Layout, a as $$Header, D as DEFAULT_LANGUAGE, b as $$Footer } from './bundle-Footer-BofT26yj.js';
import { g as getCategoryImage, $ as $$AddToCartBtn } from './bundle-categoryImages-DSXWgqVA.js';
import { c as categoriesData, f as formatUrlSlug } from './bundle-urlFormatter-uZsED8vM.js';
import products from './bundle-products-DmLyizlK.js';
import { g as getProductBrandSlug, b as getProductImage, a as getBrandNameFromSlug } from './bundle-brandUtils-BgBWm2iI.js';
/* empty css                                */

const $$Astro = createAstro("https://www.ob-simatic.com");
const $$SearchTemplate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchTemplate;
  const { lang } = Astro2.props;
  const { ui, site } = await getPageData(lang);
  const baseUrl = "/".replace(/\/$/, "");
  const searchQuery = Astro2.url.searchParams.get("q") || "";
  const parentSlugs = /* @__PURE__ */ new Set();
  Object.values(categoriesData).forEach((cat) => {
    if (cat.parentSlug) parentSlugs.add(cat.parentSlug);
  });
  function getAllProducts() {
    return Object.entries(products).map(([id, product]) => {
      const prod = product;
      return {
        ...prod,
        id,
        title: prod.i18n[lang]?.title || prod.i18n["en"]?.title || prod.i18n["tr"]?.title,
        image: getProductImage(id, prod.image)
      };
    });
  }
  function getAllCategories() {
    return Object.entries(categoriesData).filter(([slug]) => !parentSlugs.has(slug)).map(([slug, cat]) => ({
      ...cat,
      slug,
      name: cat.i18n[lang]?.name || cat.i18n["en"]?.name || cat.i18n["tr"]?.name,
      title: cat.i18n[lang]?.title || cat.i18n["en"]?.title || cat.i18n["tr"]?.title,
      description: cat.i18n[lang]?.description || cat.i18n["en"]?.description || cat.i18n["tr"]?.description,
      // Dynamically discover image from folder
      image: getCategoryImage(slug)
    }));
  }
  function getSpecsSearchText(product, currentLang) {
    const translations = product.translations || {};
    const allKeysText = [];
    ["tr", "en", "ar"].forEach((l) => {
      const keys = translations[l]?.keys || [];
      keys.forEach((spec) => {
        if (spec.key) allKeysText.push(spec.key);
        if (spec.value) allKeysText.push(spec.value);
      });
    });
    return allKeysText.join(" ");
  }
  const searchResults = getAllProducts().map((p) => ({
    ...p,
    // OVERRIDE static brand with dynamic category-based brand SLUG
    brand: getProductBrandSlug(p.categorySlug),
    // Stock Status
    inStock: !p.stockStatus || p.stockStatus === "in_stock",
    stockStatus: p.stockStatus || "in_stock",
    // Add specs text for search
    specsText: getSpecsSearchText(products[p.id])
  }));
  const categoryResults = getAllCategories();
  function getFilterOptions(products2) {
    const filters = {};
    const filterableFields = {
      brand: {
        label: { tr: "Marka", en: "Brand", ar: "العلامة التجارية" },
        type: "checkbox"
      },
      inStock: {
        label: { tr: "Stok Durumu", en: "Availability", ar: "التوفر" },
        type: "boolean"
      },
      categorySlug: {
        label: { tr: "Kategori", en: "Category", ar: "الفئة" },
        type: "checkbox"
      }
    };
    const rootSlugs = new Set(Object.values(categoriesData).filter((cat) => !cat.parentSlug).map((c) => c.slug));
    const allBrands = Object.values(categoriesData).filter(
      (cat) => {
        const isBrand = cat.type === "brand";
        const isLegacyBrand = !cat.type && cat.parentSlug && rootSlugs.has(cat.parentSlug);
        return (isBrand || isLegacyBrand) && (cat.showOnHome === void 0 || cat.showOnHome === true);
      }
    );
    if (!filters["brand"]) {
      filters["brand"] = { values: /* @__PURE__ */ new Map(), type: "checkbox" };
    }
    allBrands.forEach((b) => {
      const brandName = b.i18n?.["en"]?.name || b.slug;
      const normalizedBrand = brandName.toLowerCase().trim().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
      filters["brand"].values.set(normalizedBrand, 0);
    });
    products2.forEach((product) => {
      Object.entries(filterableFields).forEach(([field, config]) => {
        if (product[field] !== void 0 && product[field] !== null) {
          if (!filters[field]) {
            filters[field] = { values: /* @__PURE__ */ new Map(), type: config.type };
          }
          const value = String(product[field]);
          const count = filters[field].values.get(value) || 0;
          filters[field].values.set(value, count + 1);
        }
      });
    });
    return Object.entries(filters).map(([field, filterInfo]) => ({
      field,
      label: filterableFields[field]?.label[lang] || field,
      type: filterInfo.type,
      options: Array.from(filterInfo.values.entries()).map(([value, count]) => ({
        value,
        label: field === "categorySlug" ? categoriesData?.[value]?.i18n?.[lang]?.name || categoriesData?.[value]?.i18n?.["en"]?.name || value : field === "brand" ? getBrandNameFromSlug(value, lang) : value,
        count
      })).sort((a, b) => b.count - a.count)
    }));
  }
  function getPriceRange(products2) {
    const prices = products2.filter((p) => p.price).map((p) => p.price);
    if (prices.length === 0) return null;
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  }
  const filterOptions = getFilterOptions(searchResults);
  const priceRange = getPriceRange(searchResults);
  const categoriesText = lang === "ar" ? "الفئات" : lang === "en" ? "Categories" : "Kategoriler";
  const productsText = lang === "ar" ? "المنتجات" : lang === "en" ? "Products" : "Ürünler";
  const pageTitle = lang === "ar" ? "البحث" : lang === "en" ? "Search" : "Arama";
  const homeText = ui?.nav?.home || "Ana Sayfa";
  const searchText = lang === "ar" ? "البحث" : lang === "en" ? "Search" : "Arama";
  const noResultsText = lang === "ar" ? "لم يتم العثور على نتائج" : lang === "en" ? "No results found" : "Sonuç bulunamadı";
  const productCodeText = ui?.product?.code || "Ürün Kodu";
  const brandText = ui?.product?.brand || "Üretici";
  ui?.product?.inStock || "Stokta";
  ui?.product?.outOfStock || "Stok yok";
  const filterPlaceholderText = lang === "ar" ? "تصفية حسب الاسم أو الرمز" : lang === "en" ? "Filter by name or code" : "İsim veya kod ile filtrele";
  const filterText = lang === "ar" ? "تصفية" : lang === "en" ? "Filters" : "Filtreler";
  const clearFiltersText = lang === "ar" ? "مسح الفلاتر" : lang === "en" ? "Clear Filters" : "Filtreleri Temizle";
  const inStockOnlyText = lang === "ar" ? "المتوفر فقط" : lang === "en" ? "In Stock Only" : "Sadece Stokta Olanlar";
  const itemsPerPageText = lang === "ar" ? "عناصر في الصفحة:" : lang === "en" ? "Items per page:" : "Sayfa başına ürün:";
  const showCategoriesText = lang === "ar" ? "عرض الفئات" : lang === "en" ? "Show Categories" : "Kategorileri Göster";
  const hideCategoriesText = lang === "ar" ? "إخفاء الفئات" : lang === "en" ? "Hide Categories" : "Kategorileri Gizle";
  const homeUrl = lang === DEFAULT_LANGUAGE ? `${baseUrl}/` : `${baseUrl}/${lang}`;
  const baseUrlWithLang = lang === DEFAULT_LANGUAGE ? baseUrl : `${baseUrl}/${lang}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${pageTitle}: ${searchQuery} | ${siteData.shortName}`, "lang": lang, "data-astro-cid-ri5msau3": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "ui": ui, "data-astro-cid-ri5msau3": true })} ${maybeRenderHead()}<main class="search-page" id="search-page-container" data-astro-cid-ri5msau3> <!-- Hero Section --> <div class="hero-section" data-astro-cid-ri5msau3> <div class="hero-container" data-astro-cid-ri5msau3> <nav class="breadcrumb" data-astro-cid-ri5msau3> <a${addAttribute(homeUrl, "href")} data-astro-cid-ri5msau3>${homeText}</a> <span class="separator" data-astro-cid-ri5msau3>›</span> <span class="current" data-astro-cid-ri5msau3>${searchText}</span> </nav> <h1 data-astro-cid-ri5msau3>${pageTitle}</h1> </div> </div> <!-- Main Content --> <div class="main-content" data-astro-cid-ri5msau3> <div class="content-container" data-astro-cid-ri5msau3> <div class="page-layout row" data-astro-cid-ri5msau3> <!-- Sidebar Filters --> <aside class="filters-sidebar col-xl-2 col-lg-3" id="filters-sidebar" data-astro-cid-ri5msau3> <div class="sidebar-section" data-astro-cid-ri5msau3> <h3 class="sidebar-title" data-astro-cid-ri5msau3>${filterText}</h3> <!-- Text Filter --> <div class="filter-group" data-astro-cid-ri5msau3> <input type="text" id="filter-text"${addAttribute(filterPlaceholderText, "placeholder")} class="filter-input" data-astro-cid-ri5msau3> </div> <!-- In Stock Filter --> <div class="filter-group" data-astro-cid-ri5msau3> <label class="filter-checkbox" data-astro-cid-ri5msau3> <input type="checkbox" id="filter-instock" data-astro-cid-ri5msau3> <span class="checkmark" data-astro-cid-ri5msau3></span> <span class="label-text" data-astro-cid-ri5msau3>${inStockOnlyText}</span> </label> </div> <!-- Contact for Price Filter --> <div class="filter-group" data-astro-cid-ri5msau3> <label class="filter-checkbox" data-astro-cid-ri5msau3> <input type="checkbox" id="filter-contact-price" data-astro-cid-ri5msau3> <span class="checkmark" data-astro-cid-ri5msau3></span> <span class="label-text" data-astro-cid-ri5msau3> ${lang === "ar" ? "السعر عند الطلب" : lang === "en" ? "Contact for Price" : "Fiyat Sorunuz"} </span> </label> </div> <!-- Dynamic Brand Filters --> ${filterOptions.filter((f) => f.field === "brand").map((filter) => renderTemplate`<div class="filter-group" data-astro-cid-ri5msau3> <h4 class="filter-title" data-astro-cid-ri5msau3> ${filter.label} </h4> <div class="filter-options" data-astro-cid-ri5msau3> ${filter.options.map(
    (option) => renderTemplate`<label class="filter-checkbox" data-astro-cid-ri5msau3> <input type="checkbox" name="brand"${addAttribute(
      option.value,
      "value"
    )} data-astro-cid-ri5msau3> <span class="checkmark" data-astro-cid-ri5msau3></span> <span class="label-text" data-astro-cid-ri5msau3> ${option.label} </span> <span class="count" data-astro-cid-ri5msau3>
(${option.count})
</span> </label>`
  )} </div> </div>`)} <!-- Price Range (if available) --> ${priceRange && renderTemplate`<div class="filter-group" data-astro-cid-ri5msau3> <h4 class="filter-title" data-astro-cid-ri5msau3> ${lang === "ar" ? "نطاق السعر" : lang === "en" ? "Price Range" : "Fiyat Aralığı"} </h4> <div class="price-range-inputs" data-astro-cid-ri5msau3> <div class="price-input-group" data-astro-cid-ri5msau3> <span class="currency-symbol" data-astro-cid-ri5msau3>€</span> <input type="number" id="price-min" min="0"${addAttribute(priceRange.max, "max")} placeholder="Min" class="price-input" data-astro-cid-ri5msau3> </div> <span class="price-sep" data-astro-cid-ri5msau3>-</span> <div class="price-input-group" data-astro-cid-ri5msau3> <span class="currency-symbol" data-astro-cid-ri5msau3>€</span> <input type="number" id="price-max" min="0"${addAttribute(priceRange.max, "max")} placeholder="Max" class="price-input" data-astro-cid-ri5msau3> </div> <button id="apply-price-btn" class="apply-price-btn" data-astro-cid-ri5msau3>ok</button> </div> </div>`} <button class="clear-filters-btn" id="clear-filters" data-astro-cid-ri5msau3>${clearFiltersText}</button> </div> </aside> <!-- Results Content --> <div class="results-content col-xl-10 col-lg-9" data-astro-cid-ri5msau3> ${categoryResults.length > 0 || searchResults.length > 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-ri5msau3": true }, { "default": async ($$result3) => renderTemplate`${categoryResults.length > 0 && renderTemplate`<div class="results-section" data-astro-cid-ri5msau3> <h4 class="section-title" data-astro-cid-ri5msau3> ${categoriesText}${" "} <span class="count-badge" data-astro-cid-ri5msau3> ${categoryResults.length} </span> <button id="toggle-categories-btn" class="toggle-categories-btn"${addAttribute(showCategoriesText, "data-show-text")}${addAttribute(hideCategoriesText, "data-hide-text")} data-astro-cid-ri5msau3> ${showCategoriesText} </button> </h4> <div class="categories-grid" id="categories-grid" style="display: none;" data-astro-cid-ri5msau3> ${categoryResults.map((cat) => renderTemplate`<a${addAttribute(`${baseUrlWithLang}/${formatUrlSlug(cat.slug)}`, "href")} class="category-result-card"${addAttribute(cat.slug, "data-slug")}${addAttribute(`${cat.name} ${cat.title} ${cat.description} ${cat.slug}`.toLowerCase(), "data-search-text")} data-astro-cid-ri5msau3> <div class="cat-icon" data-astro-cid-ri5msau3> ${cat.image && !cat.image.includes("default") ? renderTemplate`<img${addAttribute(cat.image, "src")}${addAttribute(cat.name, "alt")} data-astro-cid-ri5msau3>` : renderTemplate`<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; color: #cbd5e1;" data-astro-cid-ri5msau3> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ri5msau3> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" data-astro-cid-ri5msau3></path> </svg> </div>`} </div> <div class="cat-info" data-astro-cid-ri5msau3> <div class="cat-name" data-astro-cid-ri5msau3> ${cat.name} </div> ${cat.title} </div> <div class="cat-arrow" data-astro-cid-ri5msau3>
→
</div> </a>`)} </div> </div>`}${searchResults.length > 0 && renderTemplate`<div class="results-section" data-astro-cid-ri5msau3> <h4 class="section-title" data-astro-cid-ri5msau3> ${productsText} <span class="count-badge" data-astro-cid-ri5msau3> ${searchResults.length} </span> </h4> <!-- Controls --> <div class="results-controls" data-astro-cid-ri5msau3> <div class="items-per-page" data-astro-cid-ri5msau3> <label for="itemsPerPage" data-astro-cid-ri5msau3>${itemsPerPageText}</label> <select id="itemsPerPage" data-astro-cid-ri5msau3> <option value="12" data-astro-cid-ri5msau3>12</option> <option value="24" data-astro-cid-ri5msau3>24</option> <option value="48" data-astro-cid-ri5msau3>48</option> <option value="9999" data-astro-cid-ri5msau3>All</option> </select> </div> </div> <div class="table-responsive" data-astro-cid-ri5msau3> <table class="table" id="results-table" data-astro-cid-ri5msau3> <thead data-astro-cid-ri5msau3> <tr data-astro-cid-ri5msau3> <th data-astro-cid-ri5msau3> ${productCodeText} </th> <th data-astro-cid-ri5msau3>${brandText}</th> <th data-astro-cid-ri5msau3> ${lang === "ar" ? "السعر" : lang === "en" ? "Price" : "Fiyat"} </th> <th style="width: 50px;" data-astro-cid-ri5msau3></th></tr> </thead> <tbody data-astro-cid-ri5msau3> ${searchResults.map(
    (product) => renderTemplate`<tr class="product-row"${addAttribute(
      product.brand,
      "data-brand"
    )}${addAttribute(String(
      product.inStock
    ), "data-instock")}${addAttribute(
      product.price || 0,
      "data-price"
    )}${addAttribute(
      product.categorySlug,
      "data-category"
    )}${addAttribute(`${product.id} ${product.title} ${product.brand} ${product.categorySlug} ${categoriesData[product.categorySlug]?.i18n?.[lang]?.name || ""} ${categoriesData[product.categorySlug]?.i18n?.[lang]?.title || ""} ${product.specsText || ""}`.toLowerCase(), "data-search-text")}${addAttribute(formatUrlSlug(product.id), "data-slug")} data-astro-cid-ri5msau3> <th data-astro-cid-ri5msau3> <div style="display: flex; align-items: center; gap: 10px;" data-astro-cid-ri5msau3> ${product.image ? renderTemplate`<img${addAttribute(product.image, "src")}${addAttribute(product.id, "alt")} style="width: 40px; height: 40px; object-fit: contain; border: 1px solid #eee; border-radius: 4px; background: #fff;" data-astro-cid-ri5msau3>` : renderTemplate`<div style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: #f8f9fa; border: 1px solid #eee; border-radius: 4px; color: #ccc;" data-astro-cid-ri5msau3> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ri5msau3> <rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-astro-cid-ri5msau3></rect> <circle cx="8.5" cy="8.5" r="1.5" data-astro-cid-ri5msau3></circle> <polyline points="21 15 16 10 5 21" data-astro-cid-ri5msau3></polyline> </svg> </div>`} <a${addAttribute(`${baseUrlWithLang}/${formatUrlSlug(product.id)}`, "href")} class="product-id-link" data-astro-cid-ri5msau3> ${product.id} </a> </div> </th> <td data-astro-cid-ri5msau3> ${getBrandNameFromSlug(product.brand, lang)} </td> <td class="product-price" data-astro-cid-ri5msau3> ${product.price === "contact" ? renderTemplate`<span class="badge bg-primary-subtle text-primary border border-primary-subtle" data-astro-cid-ri5msau3> ${lang === "ar" ? "تواصل معنا" : lang === "en" ? "Contact us" : "İletişime geçin"} </span>` : product.price ? `€${product.price}` : "-"} </td> <td style="padding: 5px;" data-astro-cid-ri5msau3> <div onclick="event.stopPropagation()" data-astro-cid-ri5msau3> ${renderComponent($$result3, "AddToCartBtn", $$AddToCartBtn, { "product": {
      id: product.id,
      title: product.i18n?.[lang]?.title || product.i18n?.["en"]?.title || product.i18n?.[DEFAULT_LANGUAGE]?.title || product.id,
      image: getProductImage(product.id),
      brand: getBrandNameFromSlug(product.brand, lang),
      categorySlug: product.categorySlug,
      price: product.price || 0
    }, "ui": ui, "variant": "icon", "data-astro-cid-ri5msau3": true })} </div> </td> </tr>`
  )} </tbody> </table> </div> <div class="pagination-container" id="pagination-container" style="display: none;" data-astro-cid-ri5msau3> <button class="pagination-btn" id="prev-page" data-astro-cid-ri5msau3>←</button> <div class="pagination-numbers" id="pagination-numbers" data-astro-cid-ri5msau3></div> <button class="pagination-btn" id="next-page" data-astro-cid-ri5msau3>→</button> </div> </div>`}<div class="no-results" id="no-results-msg" style="display: none;" data-astro-cid-ri5msau3> <div class="no-results-icon" data-astro-cid-ri5msau3>🔍</div> <h3 data-astro-cid-ri5msau3>${noResultsText}</h3> </div> ` })}` : renderTemplate`<div class="no-results" data-astro-cid-ri5msau3> <div class="no-results-icon" data-astro-cid-ri5msau3>🔍</div> <h3 data-astro-cid-ri5msau3> ${lang === "ar" ? "جاري التحميل..." : lang === "en" ? "Loading..." : "Yükleniyor..."} </h3> </div>`} </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "ui": ui, "site": site, "data-astro-cid-ri5msau3": true })} ` })} ${renderScript($$result, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/templates/SearchTemplate.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/templates/SearchTemplate.astro", void 0);

export { $$SearchTemplate as $ };
