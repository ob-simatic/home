import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = path.join(process.cwd(), "src/data");
const NO_DATA_CATEGORY_SLUG = "__catalog_data_missing__";
const NO_DATA_PRODUCT_ID = "DATA-FILES-MISSING";
function missingCatalogCategory() {
  return {
    slug: NO_DATA_CATEGORY_SLUG,
    parentSlug: null,
    type: "system",
    order: 0,
    isSystemPlaceholder: true,
    showOnHome: true,
    i18n: {
      ar: { name: "لا توجد ملفات بيانات", title: "تنبيه للأدمن", description: "أنشئ products.json و categories.json داخل src/data ثم أعد تحميل Astro." },
      tr: { name: "Veri dosyaları yok", title: "Yönetici uyarısı", description: "src/data içinde products.json ve categories.json oluşturun." },
      en: { name: "No data files", title: "Administrator notice", description: "Create products.json and categories.json in src/data." }
    }
  };
}
function missingCatalogProduct() {
  return {
    id: NO_DATA_PRODUCT_ID,
    categorySlug: NO_DATA_CATEGORY_SLUG,
    price: "contact",
    stockStatus: "out_of_stock",
    isSystemPlaceholder: true,
    i18n: {
      ar: { title: "لا توجد ملفات بيانات للمنتجات والتصنيفات", description: "أنشئ ملفات البيانات في src/data ثم أعد تحميل الموقع." },
      tr: { title: "Ürün ve kategori veri dosyaları yok", description: "src/data içinde veri dosyalarını oluşturup siteyi yenileyin." },
      en: { title: "Product and category data files are missing", description: "Create the data files in src/data, then reload the site." }
    },
    translations: { ar: { keys: [] }, tr: { keys: [] }, en: { keys: [] } }
  };
}
function catalogFileExists(filename) {
  return fs.existsSync(path.join(DATA_DIR, filename));
}
function safeReadJson(filename, defaultValue = {}) {
  const filePath = path.join(DATA_DIR, filename);
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content);
    }
  } catch (e) {
    console.warn(`⚠️ Could not read ${filename}, using default value`);
  }
  return defaultValue;
}
function getProductsSync() {
  return catalogFileExists("products.json") ? safeReadJson("products.json", {}) : { [NO_DATA_PRODUCT_ID]: missingCatalogProduct() };
}
function getCategoriesSync() {
  return catalogFileExists("categories.json") ? safeReadJson("categories.json", {}) : { [NO_DATA_CATEGORY_SLUG]: missingCatalogCategory() };
}
function getPagesSync() {
  return safeReadJson("pages.json", {});
}
function getProductIds() {
  const products = getProductsSync();
  return Object.keys(products);
}
function getCategorySlugs() {
  const categories = getCategoriesSync();
  return Object.keys(categories);
}
function getPageSlugs() {
  const pages = getPagesSync();
  return Object.keys(pages);
}

const dataReader = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    NO_DATA_CATEGORY_SLUG,
    NO_DATA_PRODUCT_ID,
    getCategoriesSync,
    getCategorySlugs,
    getPageSlugs,
    getPagesSync,
    getProductIds,
    getProductsSync,
    safeReadJson
}, Symbol.toStringTag, { value: 'Module' }));

function formatUrlSlug(slug) {
  if (!slug) return "";
  return slug.trim().replace(/\s+/g, "-").replace(/[<>:"\/\\|?*]/g, "-").toLowerCase();
}

export { NO_DATA_PRODUCT_ID as N, getProductsSync as a, getPagesSync as b, getCategorySlugs as c, getPageSlugs as d, getProductIds as e, formatUrlSlug as f, getCategoriesSync as g, dataReader as h };
