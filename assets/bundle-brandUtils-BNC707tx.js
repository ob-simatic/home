import fs from 'fs';
import path from 'path';
import { f as formatUrlSlug, g as getCategoriesSync } from './bundle-urlFormatter-CZ929tX3.js';

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const BASE_URL = "/".replace(/\/$/, "");
let cachedFolders = null;
let folderMap = /* @__PURE__ */ new Map();
const imageCache = /* @__PURE__ */ new Map();
let lastCacheTime = 0;
function isCacheValid() {
  if (!cachedFolders || folderMap.size === 0) return false;
  return true;
}
function getFolders(productsDir) {
  if (isCacheValid()) return folderMap;
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
    lastCacheTime = Date.now();
    return folderMap;
  } catch (e) {
    console.error(`[DEBUG] Error scanning products directory:`, e);
    return /* @__PURE__ */ new Map();
  }
}
function getProductImages(productId) {
  if (!productId) return [];
  if (isCacheValid() && imageCache.has(productId)) {
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
  if (defaultImage) {
    try {
      const rootDir = process.cwd();
      let relativePath = defaultImage;
      if (BASE_URL && relativePath.startsWith(BASE_URL)) {
        relativePath = relativePath.slice(BASE_URL.length);
      }
      const decodedPath = decodeURIComponent(relativePath);
      const absolutePath = path.join(rootDir, "public", decodedPath.startsWith("/") ? decodedPath.slice(1) : decodedPath);
      if (fs.existsSync(absolutePath)) {
        if (defaultImage.startsWith("http") || BASE_URL && defaultImage.startsWith(BASE_URL)) {
          return defaultImage;
        }
        return `${BASE_URL}${defaultImage.startsWith("/") ? "" : "/"}${defaultImage}`;
      }
      return "";
    } catch (e) {
      return "";
    }
  }
  return getDefaultImage();
}

const categories = getCategoriesSync();
function normalizeBrandName(name) {
  return name.toLowerCase().trim().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function getProductBrandSlug(categorySlug) {
  if (!categorySlug || !categories[categorySlug]) return "Other";
  let current = categories[categorySlug];
  const chain = [current];
  while (current.parentSlug && categories[current.parentSlug]) {
    current = categories[current.parentSlug];
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
  const allCategories = Object.values(categories);
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
