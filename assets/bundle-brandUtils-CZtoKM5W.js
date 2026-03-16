import fs from 'fs';
import path from 'path';
import { f as formatUrlSlug, c as categoriesData } from './bundle-urlFormatter-2bN1NoPj.js';

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const BASE_URL = "/".replace(/\/$/, "");
let cachedFolders = null;
let folderMap = /* @__PURE__ */ new Map();
const imageCache = /* @__PURE__ */ new Map();
function getFolders(productsDir) {
  if (cachedFolders && folderMap.size > 0) return folderMap;
  try {
    if (!fs.existsSync(productsDir)) return /* @__PURE__ */ new Map();
    const entries = fs.readdirSync(productsDir);
    const map = /* @__PURE__ */ new Map();
    for (const entry of entries) {
      const folderPath = path.join(productsDir, entry);
      if (fs.lstatSync(folderPath).isDirectory()) {
        map.set(formatUrlSlug(entry), entry);
      }
    }
    folderMap = map;
    cachedFolders = entries;
    return folderMap;
  } catch (e) {
    console.error(`[DEBUG] Error scanning products directory:`, e);
    return /* @__PURE__ */ new Map();
  }
}
function getProductImages(productId) {
  if (!productId) return [];
  if (imageCache.has(productId)) {
    return imageCache.get(productId) || [];
  }
  const rootDir = process.cwd();
  const productsDir = path.join(rootDir, "public", "images", "products");
  const safeTarget = formatUrlSlug(productId);
  try {
    const folders = getFolders(productsDir);
    const actualFolder = folders.get(safeTarget);
    if (!actualFolder) {
      imageCache.set(productId, []);
      return [];
    }
    const productDir = path.join(productsDir, actualFolder);
    const files = fs.readdirSync(productDir);
    const images = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext);
    }).map((img) => `${BASE_URL}/images/products/${actualFolder}/${encodeURIComponent(img)}`);
    imageCache.set(productId, images);
    return images;
  } catch (error) {
    console.error(`[DEBUG] Error reading product images for ${productId}:`, error);
    return [];
  }
}
function getDefaultImage() {
  return "";
}
function getProductImage(productId, defaultImage) {
  const images = getProductImages(productId);
  if (images.length > 0) return images[0];
  return defaultImage || getDefaultImage();
}

function normalizeBrandName(name) {
  return name.toLowerCase().trim().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function getProductBrandSlug(categorySlug) {
  if (!categorySlug || !categoriesData[categorySlug]) return "Other";
  let current = categoriesData[categorySlug];
  const chain = [current];
  while (current.parentSlug && categoriesData[current.parentSlug]) {
    current = categoriesData[current.parentSlug];
    chain.unshift(current);
  }
  for (let i = chain.length - 1; i >= 0; i--) {
    if (chain[i].type === "brand") {
      const brandCategory = chain[i];
      const brandName = brandCategory.i18n?.["en"]?.name || brandCategory.slug;
      return normalizeBrandName(brandName);
    }
  }
  if (chain.length >= 2) {
    const brandCategory = chain[1];
    const brandName = brandCategory.i18n?.["en"]?.name || brandCategory.slug;
    return normalizeBrandName(brandName);
  }
  return "Other";
}
function getBrandNameFromSlug(slug, lang) {
  if (slug === "Other" || slug === "other") {
    return lang === "ar" ? "آخر" : lang === "en" ? "Other" : "Diğer";
  }
  const allCategories = Object.values(categoriesData);
  const matchingCat = allCategories.find((cat) => {
    const enName = cat.i18n?.["en"]?.name || cat.slug;
    return normalizeBrandName(enName) === slug;
  });
  if (matchingCat) {
    const cat = matchingCat;
    return cat.i18n[lang]?.name || cat.i18n["en"]?.name || cat.i18n["tr"]?.name || slug;
  }
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

export { getBrandNameFromSlug as a, getProductImage as b, getProductImages as c, getProductBrandSlug as g };
