import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { faker } from "@faker-js/faker";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

faker.seed(20260430);

const OUTPUT_DIR = path.join(__dirname, "..", "seedData");

const CONFIG = {
  customers: 5_000,
  sellers: 220,
  brands: 120,
  categoriesRoot: 16,
  categoriesChildren: 28,
  products: 5_000,
  warehouses: 18,
  orders: 12_000,
  reviews: 15_000,
  productViews: 50_000,
  searchQueries: 25_000,
  supportTickets: 2_000,
};

const DATE_RANGE = {
  start: new Date("2024-01-01T00:00:00.000Z"),
  end: new Date("2026-03-31T23:59:59.000Z"),
};

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function rmDir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.rmSync(dir, { recursive: true, force: true });
}

function csvEscape(value) {
  if (value === null || value === undefined) return "";
  const s = String(value);
  if (s.includes('"') || s.includes(",") || s.includes("\n") || s.includes("\r")) {
    return `"${s.replaceAll('"', '""')}"`;
  }
  return s;
}

class CsvWriter {
  constructor(filePath, headers) {
    this.stream = fs.createWriteStream(filePath, { encoding: "utf8" });
    this.stream.write(headers.map(csvEscape).join(",") + "\n");
  }

  writeRow(values) {
    this.stream.write(values.map(csvEscape).join(",") + "\n");
  }

  close() {
    return new Promise((resolve, reject) => {
      this.stream.end(() => resolve());
      this.stream.on("error", reject);
    });
  }
}

function randInt(min, max) {
  return faker.number.int({ min, max });
}

function chance(p) {
  return faker.number.float({ min: 0, max: 1 }) < p;
}

function pick(arr) {
  return arr[randInt(0, arr.length - 1)];
}

function iso(ts) {
  if (!ts) return "";
  return new Date(ts).toISOString().replace("T", " ").replace("Z", "");
}

function dateOnly(d) {
  if (!d) return "";
  return new Date(d).toISOString().slice(0, 10);
}

function randomDateTimeBetween(start, end) {
  return faker.date.between({ from: start, to: end });
}

function clampNumber(num, min, max) {
  return Math.max(min, Math.min(max, num));
}

function money(min, max) {
  return faker.number.float({ min, max, fractionDigits: 2 });
}

function fixed2(n) {
  if (n === null || n === undefined || n === "") return "";
  return Number(Number(n).toFixed(2));
}

function buildUnique(prefix, n) {
  return `${prefix}_${String(n).padStart(6, "0")}`;
}

function safeEmail(prefix, n) {
  return `${prefix}.${String(n).padStart(6, "0")}@example.com`;
}

function safePhone(n) {
  const base = String(1000000000 + (n % 9000000000));
  return `+1${base}`.slice(0, 20);
}

function main() {
  rmDir(OUTPUT_DIR);
  ensureDir(OUTPUT_DIR);

  const languages = ["en", "es", "fr", "de", "hi", "pt", "it"];
  const genders = ["male", "female", "non_binary", "prefer_not_to_say"];
  const loyaltyTiers = ["bronze", "silver", "gold", "platinum"];
  const deviceTypes = ["mobile", "desktop", "tablet"];
  const browsers = ["Chrome", "Safari", "Firefox", "Edge"];
  const osList = ["iOS", "Android", "Windows", "macOS", "Linux"];
  const countries = ["United States", "India", "United Kingdom", "Canada", "Germany"];
  const orderStatusFlow = [
    "pending",
    "confirmed",
    "packed",
    "shipped",
    "out_for_delivery",
    "delivered",
  ];
  const orderChannels = ["web", "android", "ios", "admin"];
  const paymentMethods = ["card", "upi", "net_banking", "wallet", "cod"];
  const refundStatuses = ["requested", "processing", "completed", "failed", "rejected"];
  const shipmentStatuses = [
    "pending",
    "packed",
    "in_transit",
    "out_for_delivery",
    "delivered",
    "failed",
    "returned",
  ];
  const returnStatuses = ["requested", "approved", "rejected", "picked_up", "received", "refunded"];

  const customers = new CsvWriter(path.join(OUTPUT_DIR, "customers.csv"), [
    "first_name",
    "last_name",
    "email",
    "phone",
    "gender",
    "date_of_birth",
    "loyalty_tier",
    "preferred_language",
    "referral_code",
    "referred_by_customer_id",
    "is_email_verified",
    "is_phone_verified",
    "is_active",
    "created_at",
    "updated_at",
  ]);

  const customerDevices = new CsvWriter(path.join(OUTPUT_DIR, "customer_devices.csv"), [
    "customer_id",
    "device_type",
    "os",
    "browser",
    "app_version",
    "country",
    "city",
    "last_seen_at",
    "created_at",
  ]);

  const addresses = new CsvWriter(path.join(OUTPUT_DIR, "addresses.csv"), [
    "customer_id",
    "address_type",
    "line1",
    "line2",
    "city",
    "state",
    "country",
    "postal_code",
    "latitude",
    "longitude",
    "is_default",
    "created_at",
    "updated_at",
  ]);

  const sellers = new CsvWriter(path.join(OUTPUT_DIR, "sellers.csv"), [
    "name",
    "email",
    "phone",
    "seller_status",
    "commission_rate",
    "rating",
    "joined_at",
    "created_at",
    "updated_at",
  ]);

  const brands = new CsvWriter(path.join(OUTPUT_DIR, "brands.csv"), [
    "name",
    "description",
    "website_url",
    "is_active",
    "created_at",
  ]);

  const categories = new CsvWriter(path.join(OUTPUT_DIR, "categories.csv"), [
    "name",
    "parent_category_id",
    "category_level",
    "is_active",
    "created_at",
  ]);

  const products = new CsvWriter(path.join(OUTPUT_DIR, "products.csv"), [
    "seller_id",
    "category_id",
    "brand_id",
    "name",
    "description",
    "sku",
    "price",
    "cost_price",
    "mrp",
    "stock_quantity",
    "rating",
    "review_count",
    "weight_kg",
    "length_cm",
    "width_cm",
    "height_cm",
    "product_status",
    "is_active",
    "created_at",
    "updated_at",
  ]);

  const productImages = new CsvWriter(path.join(OUTPUT_DIR, "product_images.csv"), [
    "product_id",
    "image_url",
    "alt_text",
    "display_order",
    "is_primary",
    "created_at",
  ]);

  const productAttributes = new CsvWriter(path.join(OUTPUT_DIR, "product_attributes.csv"), [
    "product_id",
    "attribute_name",
    "attribute_value",
    "created_at",
  ]);

  const productVariants = new CsvWriter(path.join(OUTPUT_DIR, "product_variants.csv"), [
    "product_id",
    "variant_sku",
    "color",
    "size",
    "material",
    "price",
    "stock_quantity",
    "is_active",
    "created_at",
    "updated_at",
  ]);

  const warehouses = new CsvWriter(path.join(OUTPUT_DIR, "warehouses.csv"), [
    "name",
    "city",
    "state",
    "country",
    "postal_code",
    "is_active",
    "created_at",
  ]);

  const inventory = new CsvWriter(path.join(OUTPUT_DIR, "inventory.csv"), [
    "warehouse_id",
    "product_id",
    "variant_id",
    "quantity_available",
    "quantity_reserved",
    "reorder_level",
    "updated_at",
  ]);

  const inventoryMovements = new CsvWriter(path.join(OUTPUT_DIR, "inventory_movements.csv"), [
    "warehouse_id",
    "product_id",
    "variant_id",
    "movement_type",
    "quantity",
    "reference_type",
    "reference_id",
    "created_at",
  ]);

  const carts = new CsvWriter(path.join(OUTPUT_DIR, "carts.csv"), [
    "customer_id",
    "cart_status",
    "created_at",
    "updated_at",
  ]);

  const cartItems = new CsvWriter(path.join(OUTPUT_DIR, "cart_items.csv"), [
    "cart_id",
    "product_id",
    "variant_id",
    "quantity",
    "unit_price",
    "added_at",
  ]);

  const wishlists = new CsvWriter(path.join(OUTPUT_DIR, "wishlists.csv"), [
    "customer_id",
    "name",
    "is_public",
    "created_at",
  ]);

  const wishlistItems = new CsvWriter(path.join(OUTPUT_DIR, "wishlist_items.csv"), [
    "wishlist_id",
    "product_id",
    "added_at",
  ]);

  const coupons = new CsvWriter(path.join(OUTPUT_DIR, "coupons.csv"), [
    "code",
    "description",
    "discount_type",
    "discount_value",
    "minimum_order_amount",
    "max_discount_amount",
    "usage_limit",
    "used_count",
    "starts_at",
    "expires_at",
    "is_active",
    "created_at",
  ]);

  const orders = new CsvWriter(path.join(OUTPUT_DIR, "orders.csv"), [
    "customer_id",
    "order_number",
    "status",
    "order_channel",
    "order_date",
    "confirmed_at",
    "shipped_at",
    "delivered_at",
    "cancelled_at",
    "shipping_address_id",
    "billing_address_id",
    "coupon_id",
    "subtotal",
    "discount_amount",
    "tax_amount",
    "shipping_fee",
    "total_amount",
    "created_at",
    "updated_at",
  ]);

  const orderItems = new CsvWriter(path.join(OUTPUT_DIR, "order_items.csv"), [
    "order_id",
    "product_id",
    "variant_id",
    "seller_id",
    "quantity",
    "unit_price",
    "discount_amount",
    "tax_amount",
    "total_price",
    "item_status",
  ]);

  const orderStatusHistory = new CsvWriter(path.join(OUTPUT_DIR, "order_status_history.csv"), [
    "order_id",
    "old_status",
    "new_status",
    "changed_by",
    "note",
    "changed_at",
  ]);

  const payments = new CsvWriter(path.join(OUTPUT_DIR, "payments.csv"), [
    "order_id",
    "payment_method",
    "payment_gateway",
    "payment_status",
    "paid_amount",
    "paid_at",
    "transaction_ref",
    "failure_reason",
    "created_at",
  ]);

  const refunds = new CsvWriter(path.join(OUTPUT_DIR, "refunds.csv"), [
    "payment_id",
    "order_id",
    "refund_amount",
    "refund_status",
    "reason",
    "processed_at",
    "created_at",
  ]);

  const shipments = new CsvWriter(path.join(OUTPUT_DIR, "shipments.csv"), [
    "order_id",
    "warehouse_id",
    "carrier_name",
    "tracking_number",
    "shipment_status",
    "shipped_at",
    "estimated_delivery_at",
    "delivered_at",
    "shipping_cost",
    "created_at",
  ]);

  const shipmentEvents = new CsvWriter(path.join(OUTPUT_DIR, "shipment_events.csv"), [
    "shipment_id",
    "event_status",
    "event_location",
    "event_description",
    "event_at",
    "created_at",
  ]);

  const returns = new CsvWriter(path.join(OUTPUT_DIR, "returns.csv"), [
    "order_id",
    "customer_id",
    "return_status",
    "reason",
    "requested_at",
    "resolved_at",
  ]);

  const returnItems = new CsvWriter(path.join(OUTPUT_DIR, "return_items.csv"), [
    "return_id",
    "order_item_id",
    "quantity",
    "return_reason",
    "refund_amount",
  ]);

  const reviews = new CsvWriter(path.join(OUTPUT_DIR, "reviews.csv"), [
    "product_id",
    "customer_id",
    "order_item_id",
    "rating",
    "review_title",
    "review_text",
    "is_verified_purchase",
    "helpful_count",
    "review_status",
    "created_at",
    "updated_at",
  ]);

  const reviewVotes = new CsvWriter(path.join(OUTPUT_DIR, "review_votes.csv"), [
    "review_id",
    "customer_id",
    "vote_type",
    "created_at",
  ]);

  const productViews = new CsvWriter(path.join(OUTPUT_DIR, "product_views.csv"), [
    "customer_id",
    "product_id",
    "device_id",
    "viewed_at",
    "source",
    "session_id",
  ]);

  const searchQueries = new CsvWriter(path.join(OUTPUT_DIR, "search_queries.csv"), [
    "customer_id",
    "query_text",
    "result_count",
    "clicked_product_id",
    "searched_at",
  ]);

  const supportTickets = new CsvWriter(path.join(OUTPUT_DIR, "support_tickets.csv"), [
    "customer_id",
    "order_id",
    "ticket_type",
    "ticket_status",
    "priority",
    "subject",
    "description",
    "created_at",
    "resolved_at",
  ]);

  const supportMessages = new CsvWriter(path.join(OUTPUT_DIR, "support_messages.csv"), [
    "ticket_id",
    "sender_type",
    "message_text",
    "created_at",
  ]);

  // --- Customers, devices, addresses ---
  const customerCreatedAt = new Array(CONFIG.customers + 1);
  /** @type {Map<number,{shipping:number[],billing:number[]}>} */
  const addressIdsByCustomer = new Map();
  /** @type {Map<number, number[]>} */
  const deviceIdsByCustomer = new Map();

  let deviceId = 0;
  let addressId = 0;
  for (let i = 1; i <= CONFIG.customers; i += 1) {
    const createdAt = randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end);
    const updatedAt = chance(0.65)
      ? randomDateTimeBetween(createdAt, DATE_RANGE.end)
      : null;

    customerCreatedAt[i] = createdAt;
    const firstName = faker.person.firstName();
    const lastName = chance(0.92) ? faker.person.lastName() : null;
    const email = safeEmail("customer", i);
    const phone = chance(0.8) ? safePhone(i) : null;
    const gender = chance(0.8) ? pick(genders) : null;
    const dob = chance(0.55)
      ? faker.date.birthdate({ min: 18, max: 65, mode: "age" })
      : null;
    const loyalty = chance(0.5) ? "bronze" : chance(0.35) ? "silver" : chance(0.2) ? "gold" : "platinum";
    const preferredLanguage = chance(0.75) ? pick(languages) : null;
    const referralCode = chance(0.22) ? buildUnique("REF", i) : null;
    const referredBy = chance(0.18) && i > 3 ? randInt(1, i - 1) : null;
    const isEmailVerified = chance(0.72);
    const isPhoneVerified = chance(0.54);
    const isActive = chance(0.97);

    customers.writeRow([
      firstName,
      lastName,
      email,
      phone,
      gender,
      dob ? dateOnly(dob) : "",
      loyaltyTiers.includes(loyalty) ? loyalty : "bronze",
      preferredLanguage,
      referralCode,
      referredBy,
      isEmailVerified,
      isPhoneVerified,
      isActive,
      iso(createdAt),
      updatedAt ? iso(updatedAt) : "",
    ]);

    // Devices (0-2)
    const devicesCount = chance(0.25) ? 0 : randInt(1, 2);
    const deviceIds = [];
    for (let d = 0; d < devicesCount; d += 1) {
      deviceId += 1;
      deviceIds.push(deviceId);
      const lastSeen = chance(0.75) ? randomDateTimeBetween(createdAt, DATE_RANGE.end) : null;
      const country = pick(countries);
      customerDevices.writeRow([
        i,
        pick(deviceTypes),
        pick(osList),
        pick(browsers),
        `v${randInt(1, 6)}.${randInt(0, 9)}.${randInt(0, 9)}`,
        country,
        faker.location.city(),
        lastSeen ? iso(lastSeen) : "",
        iso(createdAt),
      ]);
    }
    if (deviceIds.length) deviceIdsByCustomer.set(i, deviceIds);

    // Addresses (1-3, mix shipping/billing; set defaults)
    const shipIds = [];
    const billIds = [];
    const addrCount = randInt(1, 3);
    for (let a = 0; a < addrCount; a += 1) {
      addressId += 1;
      const isShipping = a === 0 ? true : chance(0.55);
      const addressType = isShipping ? "shipping" : "billing";
      if (addressType === "shipping") shipIds.push(addressId);
      else billIds.push(addressId);

      const addrCreated = randomDateTimeBetween(createdAt, DATE_RANGE.end);
      const addrUpdated = chance(0.4) ? randomDateTimeBetween(addrCreated, DATE_RANGE.end) : null;
      const country = pick(countries);
      const city = faker.location.city();
      addresses.writeRow([
        i,
        addressType,
        faker.location.streetAddress({ useFullAddress: true }),
        chance(0.25) ? faker.location.secondaryAddress() : "",
        city,
        faker.location.state(),
        country,
        faker.location.zipCode(),
        chance(0.65) ? faker.number.float({ min: -89, max: 89, fractionDigits: 6 }) : "",
        chance(0.65) ? faker.number.float({ min: -179, max: 179, fractionDigits: 6 }) : "",
        false,
        iso(addrCreated),
        addrUpdated ? iso(addrUpdated) : "",
      ]);
    }

    if (!shipIds.length) shipIds.push(billIds[0] ?? addressId);
    if (!billIds.length) billIds.push(shipIds[0]);
    addressIdsByCustomer.set(i, { shipping: shipIds, billing: billIds });
  }

  // --- Sellers ---
  const sellerMeta = new Map();
  const sellerStatuses = ["pending", "active", "suspended", "closed"];
  for (let i = 1; i <= CONFIG.sellers; i += 1) {
    const createdAt = randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end);
    const joinedAt = randomDateTimeBetween(DATE_RANGE.start, createdAt);
    const updatedAt = chance(0.55) ? randomDateTimeBetween(createdAt, DATE_RANGE.end) : null;
    const status = i <= Math.floor(CONFIG.sellers * 0.72) ? "active" : pick(sellerStatuses);
    const rating = status === "active" ? clampNumber(faker.number.float({ min: 2.5, max: 5, fractionDigits: 1 }), 0, 5) : "";
    sellers.writeRow([
      faker.company.name().slice(0, 150),
      safeEmail("seller", i),
      chance(0.65) ? safePhone(500_000 + i) : "",
      status,
      faker.number.float({ min: 0, max: 12, fractionDigits: 2 }),
      rating,
      iso(joinedAt),
      iso(createdAt),
      updatedAt ? iso(updatedAt) : "",
    ]);
    sellerMeta.set(i, { status });
  }

  // --- Brands ---
  for (let i = 1; i <= CONFIG.brands; i += 1) {
    const createdAt = randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end);
    brands.writeRow([
      `Brand ${String(i).padStart(3, "0")}`,
      chance(0.65) ? faker.company.catchPhrase() : "",
      chance(0.4) ? faker.internet.url() : "",
      chance(0.95),
      iso(createdAt),
    ]);
  }

  // --- Categories (roots then children) ---
  const categoryIds = [];
  const catCreatedAt = randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end);
  for (let i = 1; i <= CONFIG.categoriesRoot; i += 1) {
    categories.writeRow([
      `Category ${String(i).padStart(2, "0")}`,
      "",
      1,
      true,
      iso(catCreatedAt),
    ]);
    categoryIds.push(i);
  }
  for (let i = 1; i <= CONFIG.categoriesChildren; i += 1) {
    const id = CONFIG.categoriesRoot + i;
    categories.writeRow([
      `Category ${String(id).padStart(2, "0")}`,
      pick(categoryIds),
      2,
      true,
      iso(catCreatedAt),
    ]);
    categoryIds.push(id);
  }

  // --- Products + images/attributes/variants ---
  /** @type {Map<number,{sellerId:number|null, basePrice:number, variants:number[]}>} */
  const productMeta = new Map();
  let variantId = 0;

  const colors = ["Black", "White", "Blue", "Red", "Green", "Gray", "Yellow", "Purple"];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const materials = ["Cotton", "Polyester", "Leather", "Steel", "Aluminum", "Wood", "Plastic"];
  const productStatuses = ["draft", "active", "out_of_stock", "discontinued"];

  for (let i = 1; i <= CONFIG.products; i += 1) {
    const createdAt = randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end);
    const updatedAt = chance(0.55) ? randomDateTimeBetween(createdAt, DATE_RANGE.end) : null;
    const sellerId = chance(0.82) ? randInt(1, CONFIG.sellers) : null;
    const brandId = chance(0.72) ? randInt(1, CONFIG.brands) : null;
    const categoryId = pick(categoryIds);
    const basePrice = money(5, 500);
    const costPrice = chance(0.7) ? clampNumber(basePrice * faker.number.float({ min: 0.4, max: 0.9 }), 0.01, 999999) : "";
    const mrp = chance(0.75) ? clampNumber(basePrice * faker.number.float({ min: 1.0, max: 1.35 }), 0.01, 999999) : "";
    const stock = randInt(0, 500);
    const rating = chance(0.55) ? faker.number.float({ min: 2.5, max: 5, fractionDigits: 1 }) : "";
    const reviewCount = chance(0.4) ? randInt(0, 2000) : 0;
    const status = stock === 0 ? "out_of_stock" : pick(productStatuses);

    const name = faker.commerce.productName().slice(0, 255);
    products.writeRow([
      sellerId,
      categoryId,
      brandId,
      name,
      chance(0.88) ? faker.commerce.productDescription() : "",
      buildUnique("SKU", i),
      basePrice,
      costPrice,
      mrp,
      stock,
      rating,
      reviewCount,
      chance(0.65) ? faker.number.float({ min: 0.05, max: 30, fractionDigits: 3 }) : "",
      chance(0.4) ? faker.number.float({ min: 5, max: 120, fractionDigits: 2 }) : "",
      chance(0.4) ? faker.number.float({ min: 5, max: 120, fractionDigits: 2 }) : "",
      chance(0.4) ? faker.number.float({ min: 1, max: 120, fractionDigits: 2 }) : "",
      status,
      true,
      iso(createdAt),
      updatedAt ? iso(updatedAt) : "",
    ]);

    // Images
    const imgCount = randInt(1, 3);
    for (let im = 1; im <= imgCount; im += 1) {
      productImages.writeRow([
        i,
        faker.image.urlLoremFlickr({ category: "product" }),
        `${name} image ${im}`,
        im,
        im === 1,
        iso(createdAt),
      ]);
    }

    // Attributes
    const attrs = [
      ["brand", brandId ? `Brand ${String(brandId).padStart(3, "0")}` : pick(["Generic", "Unbranded"])],
      ["warranty", pick(["6 months", "1 year", "2 years", "No warranty"])],
      ["origin_country", pick(countries)],
    ];
    for (const [k, v] of attrs) {
      productAttributes.writeRow([i, k, v, iso(createdAt)]);
    }
    const extraAttrCount = randInt(0, 2);
    for (let ea = 0; ea < extraAttrCount; ea += 1) {
      productAttributes.writeRow([
        i,
        faker.commerce.productAdjective().toLowerCase(),
        faker.commerce.productMaterial().slice(0, 255),
        iso(createdAt),
      ]);
    }

    // Variants (0-3)
    const variants = [];
    const vCount = chance(0.55) ? randInt(1, 3) : 0;
    for (let v = 0; v < vCount; v += 1) {
      variantId += 1;
      variants.push(variantId);
      const vCreated = randomDateTimeBetween(createdAt, DATE_RANGE.end);
      const vUpdated = chance(0.35) ? randomDateTimeBetween(vCreated, DATE_RANGE.end) : null;
      const priceDelta = faker.number.float({ min: -0.15, max: 0.25 });
      const variantPrice = clampNumber(basePrice * (1 + priceDelta), 0.5, 999999);
      const vStock = randInt(0, 250);
      productVariants.writeRow([
        i,
        buildUnique("VSKU", variantId),
        pick(colors),
        chance(0.7) ? pick(sizes) : "",
        chance(0.55) ? pick(materials) : "",
        variantPrice,
        vStock,
        true,
        iso(vCreated),
        vUpdated ? iso(vUpdated) : "",
      ]);
    }

    productMeta.set(i, { sellerId, basePrice, variants });
  }

  // --- Warehouses ---
  const warehouseCities = ["New York", "San Francisco", "Austin", "Chicago", "Toronto", "London", "Berlin", "Bengaluru"];
  for (let i = 1; i <= CONFIG.warehouses; i += 1) {
    const createdAt = randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end);
    warehouses.writeRow([
      `Warehouse ${String(i).padStart(2, "0")}`,
      pick(warehouseCities),
      faker.location.state(),
      pick(countries),
      faker.location.zipCode(),
      true,
      iso(createdAt),
    ]);
  }

  // --- Inventory + movements ---
  const inventoryKey = new Set();
  let invRows = 0;
  for (let p = 1; p <= CONFIG.products; p += 1) {
    const meta = productMeta.get(p);
    const warehouseId = randInt(1, CONFIG.warehouses);

    // Base product row (variant NULL)
    const baseKey = `${warehouseId}|${p}|null`;
    if (!inventoryKey.has(baseKey)) {
      inventoryKey.add(baseKey);
      invRows += 1;
      inventory.writeRow([
        warehouseId,
        p,
        "",
        randInt(0, 1000),
        randInt(0, 50),
        randInt(0, 30),
        iso(randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end)),
      ]);
    }

    // Variant rows
    if (meta?.variants?.length) {
      for (const vId of meta.variants) {
        const key = `${warehouseId}|${p}|${vId}`;
        if (inventoryKey.has(key)) continue;
        inventoryKey.add(key);
        invRows += 1;
        inventory.writeRow([
          warehouseId,
          p,
          vId,
          randInt(0, 400),
          randInt(0, 30),
          randInt(0, 20),
          iso(randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end)),
        ]);
      }
    }
  }

  const movementTypes = ["stock_in", "stock_out", "reserved", "released", "adjustment", "return"];
  const movementCount = Math.min(40_000, invRows * 3);
  for (let i = 1; i <= movementCount; i += 1) {
    const productId = randInt(1, CONFIG.products);
    const meta = productMeta.get(productId);
    const warehouseId = randInt(1, CONFIG.warehouses);
    const variantChoice = meta?.variants?.length && chance(0.4) ? pick(meta.variants) : null;
    const mvCreated = randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end);
    inventoryMovements.writeRow([
      warehouseId,
      productId,
      variantChoice ?? "",
      pick(movementTypes),
      randInt(1, 100),
      chance(0.35) ? pick(["order", "return", "manual", "shipment"]) : "",
      chance(0.35) ? randInt(1, 50_000) : "",
      iso(mvCreated),
    ]);
  }

  // --- Coupons ---
  const couponIds = [];
  const discountTypes = ["percentage", "fixed_amount", "free_shipping"];
  for (let i = 1; i <= 80; i += 1) {
    couponIds.push(i);
    const createdAt = randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end);
    const startsAt = chance(0.65) ? randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end) : null;
    const expiresAt =
      startsAt && chance(0.85) ? randomDateTimeBetween(startsAt, DATE_RANGE.end) : null;
    const dtype = pick(discountTypes);
    const discountValue =
      dtype === "percentage"
        ? faker.number.float({ min: 5, max: 40, fractionDigits: 2 })
        : dtype === "fixed_amount"
          ? money(5, 80)
          : money(0, 20);
    coupons.writeRow([
      buildUnique("CPN", i),
      faker.commerce.productAdjective() + " discount",
      dtype,
      discountValue,
      money(0, 200),
      chance(0.5) ? money(10, 100) : "",
      chance(0.45) ? randInt(50, 5000) : "",
      randInt(0, 50),
      startsAt ? iso(startsAt) : "",
      expiresAt ? iso(expiresAt) : "",
      true,
      iso(createdAt),
    ]);
  }

  // --- Carts / wishlist ---
  let cartId = 0;
  const cartIdsByCustomer = new Map();
  let wishlistId = 0;
  /** @type {Map<number,{wishlistId:number, createdAt:Date}>} */
  const wishlistByCustomer = new Map();
  for (let c = 1; c <= CONFIG.customers; c += 1) {
    if (!chance(0.55)) continue;
    cartId += 1;
    const createdAt = randomDateTimeBetween(customerCreatedAt[c], DATE_RANGE.end);
    const updatedAt = chance(0.6) ? randomDateTimeBetween(createdAt, DATE_RANGE.end) : null;
    const status = chance(0.78) ? "active" : pick(["converted", "abandoned", "expired"]);
    carts.writeRow([c, status, iso(createdAt), updatedAt ? iso(updatedAt) : ""]);
    cartIdsByCustomer.set(c, cartId);

    const itemsCount = randInt(1, 5);
    for (let it = 0; it < itemsCount; it += 1) {
      const productId = randInt(1, CONFIG.products);
      const meta = productMeta.get(productId);
      const variantChoice = meta?.variants?.length && chance(0.35) ? pick(meta.variants) : null;
      const qty = randInt(1, 4);
      const unitPrice = variantChoice ? money(3, 600) : meta?.basePrice ?? money(3, 600);
      cartItems.writeRow([
        cartId,
        productId,
        variantChoice ?? "",
        qty,
        unitPrice,
        iso(randomDateTimeBetween(createdAt, DATE_RANGE.end)),
      ]);
    }

    // Wishlist (one per customer)
    if (chance(0.7)) {
      wishlistId += 1;
      wishlistByCustomer.set(c, { wishlistId, createdAt });
      wishlists.writeRow([
        c,
        chance(0.25) ? `${faker.word.adjective()} picks` : "Default Wishlist",
        chance(0.18),
        iso(createdAt),
      ]);
    }
  }

  const wishlistItemKeys = new Set();
  for (const [customerId, wl] of wishlistByCustomer.entries()) {
    const wlId = wl.wishlistId;
    const createdAt = wl.createdAt;
    const items = randInt(1, 4);
    let written = 0;
    while (written < items) {
      const productId = randInt(1, CONFIG.products);
      const key = `${wlId}|${productId}`;
      if (wishlistItemKeys.has(key)) continue;
      wishlistItemKeys.add(key);
      wishlistItems.writeRow([
        wlId,
        productId,
        iso(randomDateTimeBetween(createdAt, DATE_RANGE.end)),
      ]);
      written += 1;
    }
  }

  // --- Orders, items, status history, payments, refunds, shipments, returns ---
  /** @type {Array<{orderId:number, customerId:number, status:string, orderDate:Date, total:number, paymentId:number|null, shipmentId:number|null}>} */
  const orderMeta = [];
  /** @type {Array<{orderItemId:number, orderId:number, productId:number, customerId:number}>} */
  const orderItemsMeta = [];

  let orderId = 0;
  let orderItemId = 0;
  let paymentId = 0;
  let shipmentId = 0;
  let returnId = 0;

  for (let i = 1; i <= CONFIG.orders; i += 1) {
    orderId += 1;
    const customerId = randInt(1, CONFIG.customers);
    const baseCreated = customerCreatedAt[customerId];
    const orderDate = randomDateTimeBetween(baseCreated, DATE_RANGE.end);
    const status = chance(0.65) ? "delivered" : pick(["pending", "confirmed", "packed", "shipped", "cancelled", "returned"]);
    const channel = pick(orderChannels);
    const addr = addressIdsByCustomer.get(customerId);
    const shippingAddressId = addr ? pick(addr.shipping) : "";
    const billingAddressId = addr ? pick(addr.billing) : "";
    const couponId = chance(0.18) ? pick(couponIds) : "";

    // items
    const itemsCount = randInt(1, 5);
    let subtotal = 0;
    let itemTotalDiscount = 0;
    let itemTotalTax = 0;
    for (let it = 0; it < itemsCount; it += 1) {
      orderItemId += 1;
      const productId = randInt(1, CONFIG.products);
      const meta = productMeta.get(productId);
      const sellerId = meta?.sellerId ?? "";
      const variantChoice = meta?.variants?.length && chance(0.35) ? pick(meta.variants) : null;
      const qty = randInt(1, 3);
      const unitPrice = variantChoice ? money(3, 650) : meta?.basePrice ?? money(3, 650);
      const discount = chance(0.18) ? money(0, Math.min(unitPrice * qty * 0.25, 50)) : 0;
      const tax = money(0, unitPrice * qty * 0.12);
      const totalPrice = clampNumber(unitPrice * qty - discount + tax, 0.01, 999999);
      subtotal += unitPrice * qty;
      itemTotalDiscount += discount;
      itemTotalTax += tax;

      const itemStatus =
        status === "cancelled"
          ? "cancelled"
          : status === "returned"
            ? "returned"
            : status === "delivered"
              ? "delivered"
              : pick(["ordered", "packed", "shipped"]);
      orderItems.writeRow([
        orderId,
        productId,
        variantChoice ?? "",
        sellerId,
        qty,
        unitPrice,
        discount,
        tax,
        totalPrice,
        itemStatus,
      ]);

      orderItemsMeta.push({ orderItemId, orderId, productId, customerId });
    }

    const shippingFee = chance(0.6) ? money(0, 25) : 0;
    const discountAmount = couponId ? money(0, Math.min(subtotal * 0.2, 60)) : 0;
    const taxAmount = clampNumber(itemTotalTax, 0, 999999);
    const totalAmount = clampNumber(subtotal - discountAmount + taxAmount + shippingFee, 0.01, 9999999);

    const confirmedAt = ["confirmed", "packed", "shipped", "out_for_delivery", "delivered"].includes(status)
      ? randomDateTimeBetween(orderDate, DATE_RANGE.end)
      : null;
    const shippedAt = ["shipped", "out_for_delivery", "delivered"].includes(status)
      ? randomDateTimeBetween(confirmedAt ?? orderDate, DATE_RANGE.end)
      : null;
    const deliveredAt = status === "delivered" ? randomDateTimeBetween(shippedAt ?? orderDate, DATE_RANGE.end) : null;
    const cancelledAt = status === "cancelled" ? randomDateTimeBetween(orderDate, DATE_RANGE.end) : null;
    const createdAt = orderDate;
    const updatedAt = chance(0.7) ? randomDateTimeBetween(createdAt, DATE_RANGE.end) : null;

    orders.writeRow([
      customerId,
      buildUnique("ORD", orderId),
      status,
      channel,
      iso(orderDate),
      confirmedAt ? iso(confirmedAt) : "",
      shippedAt ? iso(shippedAt) : "",
      deliveredAt ? iso(deliveredAt) : "",
      cancelledAt ? iso(cancelledAt) : "",
      shippingAddressId,
      billingAddressId,
      couponId,
      fixed2(subtotal),
      fixed2(discountAmount),
      fixed2(taxAmount),
      fixed2(shippingFee),
      fixed2(totalAmount),
      iso(createdAt),
      updatedAt ? iso(updatedAt) : "",
    ]);

    // Status history (1-4)
    const historySteps = status === "delivered" ? randInt(2, 4) : randInt(1, 3);
    let prev = null;
    let lastAt = orderDate;
    for (let h = 0; h < historySteps; h += 1) {
      const next = status === "cancelled"
        ? (h === historySteps - 1 ? "cancelled" : pick(orderStatusFlow))
        : status === "returned"
          ? (h === historySteps - 1 ? "returned" : pick(orderStatusFlow))
          : (h === historySteps - 1 ? status : pick(orderStatusFlow));
      const at = randomDateTimeBetween(lastAt, DATE_RANGE.end);
      orderStatusHistory.writeRow([
        orderId,
        prev ?? "",
        next,
        pick(["system", "customer", "admin"]),
        chance(0.25) ? faker.lorem.sentence() : "",
        iso(at),
      ]);
      prev = next;
      lastAt = at;
    }

    // Payment
    paymentId += 1;
    const paymentMethod = pick(paymentMethods);
    const paymentStatus = status === "cancelled" ? "failed" : chance(0.86) ? "completed" : "failed";
    const paidAt = paymentStatus === "completed" ? randomDateTimeBetween(orderDate, DATE_RANGE.end) : null;
    payments.writeRow([
      orderId,
      paymentMethod,
      paymentMethod === "card" ? pick(["stripe", "razorpay", "adyen"]) : pick(["razorpay", "payu", "cash"]),
      paymentStatus,
      fixed2(totalAmount),
      paidAt ? iso(paidAt) : "",
      paymentStatus === "completed" ? buildUnique("TXN", paymentId) : "",
      paymentStatus === "failed" ? pick(["insufficient_funds", "gateway_error", "user_cancelled"]) : "",
      iso(orderDate),
    ]);

    // Refund (only if completed and returned/cancelled sometimes)
    let refundAdded = false;
    if (paymentStatus === "completed" && (status === "returned" || status === "cancelled") && chance(0.55)) {
      const refundAmount = clampNumber(totalAmount * faker.number.float({ min: 0.2, max: 1 }), 0.01, totalAmount);
      const processedAt = randomDateTimeBetween(orderDate, DATE_RANGE.end);
      refunds.writeRow([
        paymentId,
        orderId,
        fixed2(refundAmount),
        pick(refundStatuses),
        chance(0.6) ? "policy_refund" : "customer_request",
        iso(processedAt),
        iso(processedAt),
      ]);
      refundAdded = true;
    }

    // Shipment
    let createdShipmentId = null;
    if (["shipped", "out_for_delivery", "delivered", "returned"].includes(status)) {
      shipmentId += 1;
      createdShipmentId = shipmentId;
      const shipCreated = shippedAt ?? randomDateTimeBetween(orderDate, DATE_RANGE.end);
      const deliveredAt2 = status === "delivered" ? deliveredAt : null;
      const est = randomDateTimeBetween(shipCreated, DATE_RANGE.end);
      shipments.writeRow([
        orderId,
        chance(0.85) ? randInt(1, CONFIG.warehouses) : "",
        pick(["DHL", "FedEx", "UPS", "BlueDart", "Delhivery"]),
        buildUnique("TRK", shipmentId),
        pick(shipmentStatuses),
        iso(shipCreated),
        iso(est),
        deliveredAt2 ? iso(deliveredAt2) : "",
        money(0, 30),
        iso(shipCreated),
      ]);

      const events = randInt(1, 4);
      let evtAt = shipCreated;
      for (let e = 0; e < events; e += 1) {
        evtAt = randomDateTimeBetween(evtAt, DATE_RANGE.end);
        shipmentEvents.writeRow([
          shipmentId,
          pick(["Packed", "In Transit", "Arrived at Hub", "Out for Delivery", "Delivered"]),
          faker.location.city(),
          chance(0.55) ? faker.lorem.sentence() : "",
          iso(evtAt),
          iso(evtAt),
        ]);
      }
    }

    // Return
    let createdReturnId = null;
    if (status === "returned" && chance(0.7)) {
      returnId += 1;
      createdReturnId = returnId;
      const requestedAt = randomDateTimeBetween(orderDate, DATE_RANGE.end);
      const resolvedAt = chance(0.7) ? randomDateTimeBetween(requestedAt, DATE_RANGE.end) : null;
      returns.writeRow([
        orderId,
        customerId,
        pick(returnStatuses),
        chance(0.8) ? pick(["Damaged", "Wrong item", "Late delivery", "Changed mind"]) : "",
        iso(requestedAt),
        resolvedAt ? iso(resolvedAt) : "",
      ]);
    }

    orderMeta.push({
      orderId,
      customerId,
      status,
      orderDate,
      total: totalAmount,
      paymentId,
      shipmentId: createdShipmentId,
      returnId: createdReturnId,
      refundAdded,
    });
  }

  // Return items (dependent on returns + order_items)
  const orderItemsByOrder = new Map();
  for (const it of orderItemsMeta) {
    const list = orderItemsByOrder.get(it.orderId) ?? [];
    list.push(it);
    orderItemsByOrder.set(it.orderId, list);
  }
  for (const om of orderMeta) {
    if (!om.returnId) continue;
    const items = orderItemsByOrder.get(om.orderId) ?? [];
    if (!items.length) continue;
    const toReturn = Math.min(items.length, randInt(1, 2));
    const chosen = faker.helpers.arrayElements(items, toReturn);
    for (const it of chosen) {
      returnItems.writeRow([
        om.returnId,
        it.orderItemId,
        1,
        pick(["Damaged", "Not as described", "Wrong size", "Other"]),
        money(1, 100),
      ]);
    }
  }

  // --- Reviews + votes ---
  const reviewMeta = [];
  const usedReviewOrderItems = new Set();
  let reviewId = 0;
  for (let i = 0; i < CONFIG.reviews; i += 1) {
    const it = pick(orderItemsMeta);
    if (usedReviewOrderItems.has(it.orderItemId)) continue;
    usedReviewOrderItems.add(it.orderItemId);
    reviewId += 1;
    const createdAt = randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end);
    const updatedAt = chance(0.35) ? randomDateTimeBetween(createdAt, DATE_RANGE.end) : null;
    const rating = randInt(1, 5);
    const verified = true;
    const status = chance(0.9) ? "approved" : pick(["pending", "rejected"]);
    const helpful = randInt(0, 50);
    reviews.writeRow([
      it.productId,
      it.customerId,
      it.orderItemId,
      rating,
      chance(0.5) ? faker.lorem.words({ min: 2, max: 6 }).slice(0, 255) : "",
      chance(0.8) ? faker.lorem.paragraph() : "",
      verified,
      helpful,
      status,
      iso(createdAt),
      updatedAt ? iso(updatedAt) : "",
    ]);
    reviewMeta.push({ reviewId, productId: it.productId });
  }

  const reviewVoteKeys = new Set();
  const voteTypes = ["helpful", "not_helpful"];
  let voteWritten = 0;
  const targetVotes = Math.min(8_000, reviewMeta.length * 2);
  while (voteWritten < targetVotes && reviewMeta.length) {
    const r = pick(reviewMeta);
    const customerId = randInt(1, CONFIG.customers);
    const key = `${r.reviewId}|${customerId}`;
    if (reviewVoteKeys.has(key)) continue;
    reviewVoteKeys.add(key);
    reviewVotes.writeRow([
      r.reviewId,
      customerId,
      pick(voteTypes),
      iso(randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end)),
    ]);
    voteWritten += 1;
  }

  // --- Product views ---
  for (let i = 0; i < CONFIG.productViews; i += 1) {
    const productId = randInt(1, CONFIG.products);
    const customerId = chance(0.78) ? randInt(1, CONFIG.customers) : null;
    const deviceIds = customerId ? deviceIdsByCustomer.get(customerId) : null;
    const deviceIdChoice = deviceIds?.length ? pick(deviceIds) : null;
    const viewedAt = randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end);
    productViews.writeRow([
      customerId ?? "",
      productId,
      deviceIdChoice ?? "",
      iso(viewedAt),
      pick(["search", "category", "home", "ad", "wishlist"]),
      buildUnique("sess", i + 1),
    ]);
  }

  // --- Search queries ---
  for (let i = 0; i < CONFIG.searchQueries; i += 1) {
    const customerId = chance(0.72) ? randInt(1, CONFIG.customers) : null;
    const searchedAt = randomDateTimeBetween(DATE_RANGE.start, DATE_RANGE.end);
    const resultCount = randInt(0, 300);
    const clicked = resultCount > 0 && chance(0.4) ? randInt(1, CONFIG.products) : null;
    searchQueries.writeRow([
      customerId ?? "",
      faker.commerce.product().toLowerCase(),
      resultCount,
      clicked ?? "",
      iso(searchedAt),
    ]);
  }

  // --- Support tickets + messages ---
  let ticketId = 0;
  for (let i = 0; i < CONFIG.supportTickets; i += 1) {
    ticketId += 1;
    const customerId = randInt(1, CONFIG.customers);
    const orderIdChoice = chance(0.45) ? randInt(1, CONFIG.orders) : null;
    const createdAt = randomDateTimeBetween(customerCreatedAt[customerId], DATE_RANGE.end);
    const resolvedAt = chance(0.55) ? randomDateTimeBetween(createdAt, DATE_RANGE.end) : null;
    const ticketType = pick(["order_issue", "payment_issue", "return_issue", "product_issue", "other"]);
    const ticketStatus = resolvedAt ? pick(["resolved", "closed"]) : pick(["open", "in_progress"]);
    const priority = pick(["low", "medium", "high", "urgent"]);
    supportTickets.writeRow([
      customerId,
      orderIdChoice ?? "",
      ticketType,
      ticketStatus,
      priority,
      faker.lorem.words({ min: 3, max: 6 }).slice(0, 255),
      chance(0.9) ? faker.lorem.paragraph() : "",
      iso(createdAt),
      resolvedAt ? iso(resolvedAt) : "",
    ]);

    // Messages 1-4
    const msgCount = randInt(1, 4);
    let msgAt = createdAt;
    for (let m = 0; m < msgCount; m += 1) {
      msgAt = randomDateTimeBetween(msgAt, DATE_RANGE.end);
      supportMessages.writeRow([
        ticketId,
        m === 0 ? "customer" : pick(["customer", "agent"]),
        faker.lorem.sentence({ min: 6, max: 14 }),
        iso(msgAt),
      ]);
    }
  }

  return Promise.all([
    customers.close(),
    customerDevices.close(),
    addresses.close(),
    sellers.close(),
    brands.close(),
    categories.close(),
    products.close(),
    productImages.close(),
    productAttributes.close(),
    productVariants.close(),
    warehouses.close(),
    inventory.close(),
    inventoryMovements.close(),
    carts.close(),
    cartItems.close(),
    wishlists.close(),
    wishlistItems.close(),
    coupons.close(),
    orders.close(),
    orderItems.close(),
    orderStatusHistory.close(),
    payments.close(),
    refunds.close(),
    shipments.close(),
    shipmentEvents.close(),
    returns.close(),
    returnItems.close(),
    reviews.close(),
    reviewVotes.close(),
    productViews.close(),
    searchQueries.close(),
    supportTickets.close(),
    supportMessages.close(),
  ]).then(() => {
    // eslint-disable-next-line no-console
    console.log(`[ecommerce] seed CSVs written to ${OUTPUT_DIR}`);
  });
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error("[ecommerce] generate error:", err);
  process.exitCode = 1;
});
