import { getAppIdByName } from "../../base/scripts/base.data.js";

const appId = getAppIdByName("ecommerce");

export const tableDescriptions = {
  addresses: "Stores customer billing and shipping addresses",
  categories: "Stores product categories",
  customers: "Stores customer information",
  order_items: "Stores items for each order",
  orders: "Stores orders placed by customers",
  payments: "Stores payment transactions",
  products: "Stores product catalog",
  reviews: "Stores product reviews",
};

export const questions = [
  {
    app_id: appId,
    code: "ECOMMERCE_001",
    title: "Total Customers",
    description:
      "Find the total number of customers registered on the platform.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS count FROM customers;",
    solution_columns: ["count"],
    tables: ["customers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_002",
    title: "Active Sellers",
    description: "Find the number of sellers whose seller status is active.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS count FROM sellers WHERE seller_status = 'active';",
    solution_columns: ["count"],
    tables: ["sellers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_003",
    title: "Active Products",
    description: "Find the number of products that are currently active.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS count FROM products WHERE is_active = TRUE;",
    solution_columns: ["count"],
    tables: ["products"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_004",
    title: "Out Of Stock Products",
    description: "Find the number of products whose stock quantity is zero.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS count FROM products WHERE stock_quantity = 0;",
    solution_columns: ["count"],
    tables: ["products"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_005",
    title: "Low Inventory Products",
    description: "Find products whose stock quantity is less than 10.",
    difficulty: "easy",
    expected_query:
      "SELECT id, name, stock_quantity FROM products WHERE stock_quantity < 10;",
    solution_columns: ["id", "name", "stock_quantity"],
    tables: ["products"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_006",
    title: "Published Brands",
    description: "Find all active brands.",
    difficulty: "easy",
    expected_query: "SELECT id, name FROM brands WHERE is_active = TRUE;",
    solution_columns: ["id", "name"],
    tables: ["brands"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_007",
    title: "Default Shipping Addresses",
    description: "Find all default shipping addresses.",
    difficulty: "easy",
    expected_query:
      "SELECT id, customer_id, city, state, country FROM addresses WHERE address_type = 'shipping' AND is_default = TRUE;",
    solution_columns: ["id", "customer_id", "city", "state", "country"],
    tables: ["addresses"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_008",
    title: "Mobile Customer Devices",
    description: "Find all customer devices where the device type is mobile.",
    difficulty: "easy",
    expected_query:
      "SELECT id, customer_id, os, browser, last_seen_at FROM customer_devices WHERE device_type = 'mobile';",
    solution_columns: ["id", "customer_id", "os", "browser", "last_seen_at"],
    tables: ["customer_devices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_009",
    title: "Active Coupons",
    description: "Find all currently active coupons.",
    difficulty: "easy",
    expected_query:
      "SELECT id, code, discount_type, discount_value FROM coupons WHERE is_active = TRUE;",
    solution_columns: ["id", "code", "discount_type", "discount_value"],
    tables: ["coupons"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_010",
    title: "Expired Coupons",
    description:
      "Find coupons whose expiry timestamp is before January 1, 2026.",
    difficulty: "easy",
    expected_query:
      "SELECT id, code, expires_at FROM coupons WHERE expires_at < '2026-01-01';",
    solution_columns: ["id", "code", "expires_at"],
    tables: ["coupons"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_011",
    title: "Delivered Orders",
    description: "Find orders that have been delivered.",
    difficulty: "easy",
    expected_query:
      "SELECT id, customer_id, order_number, order_date, total_amount FROM orders WHERE status = 'delivered';",
    solution_columns: [
      "id",
      "customer_id",
      "order_number",
      "order_date",
      "total_amount",
    ],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_012",
    title: "Cancelled Orders Count",
    description: "Find the number of cancelled orders.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS count FROM orders WHERE status = 'cancelled';",
    solution_columns: ["count"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_013",
    title: "Completed Payments Count",
    description: "Find the number of completed payments.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS count FROM payments WHERE payment_status = 'completed';",
    solution_columns: ["count"],
    tables: ["payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_014",
    title: "Failed Payments",
    description: "Find failed payment records with their failure reason.",
    difficulty: "easy",
    expected_query:
      "SELECT id, order_id, paid_amount, failure_reason FROM payments WHERE payment_status = 'failed';",
    solution_columns: ["id", "order_id", "paid_amount", "failure_reason"],
    tables: ["payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_015",
    title: "Pending Shipments",
    description: "Find shipments that are still pending.",
    difficulty: "easy",
    expected_query:
      "SELECT id, order_id, warehouse_id, carrier_name, created_at FROM shipments WHERE shipment_status = 'pending';",
    solution_columns: [
      "id",
      "order_id",
      "warehouse_id",
      "carrier_name",
      "created_at",
    ],
    tables: ["shipments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_016",
    title: "Return Requests",
    description: "Find returns that are still in requested status.",
    difficulty: "easy",
    expected_query:
      "SELECT id, order_id, customer_id, reason, requested_at FROM returns WHERE return_status = 'requested';",
    solution_columns: [
      "id",
      "order_id",
      "customer_id",
      "reason",
      "requested_at",
    ],
    tables: ["returns"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_017",
    title: "Open Support Tickets",
    description: "Find support tickets that are currently open.",
    difficulty: "easy",
    expected_query:
      "SELECT id, customer_id, order_id, ticket_type, subject FROM support_tickets WHERE ticket_status = 'open';",
    solution_columns: [
      "id",
      "customer_id",
      "order_id",
      "ticket_type",
      "subject",
    ],
    tables: ["support_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_018",
    title: "Public Wishlists",
    description: "Find all public wishlists.",
    difficulty: "easy",
    expected_query:
      "SELECT id, customer_id, name FROM wishlists WHERE is_public = TRUE;",
    solution_columns: ["id", "customer_id", "name"],
    tables: ["wishlists"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_019",
    title: "Active Carts",
    description: "Find carts that are currently active.",
    difficulty: "easy",
    expected_query:
      "SELECT id, customer_id, created_at, updated_at FROM carts WHERE cart_status = 'active';",
    solution_columns: ["id", "customer_id", "created_at", "updated_at"],
    tables: ["carts"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_020",
    title: "Approved Reviews",
    description: "Find approved product reviews.",
    difficulty: "easy",
    expected_query:
      "SELECT id, product_id, customer_id, rating, created_at FROM reviews WHERE review_status = 'approved';",
    solution_columns: [
      "id",
      "product_id",
      "customer_id",
      "rating",
      "created_at",
    ],
    tables: ["reviews"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_021",
    title: "Total Warehouses",
    description: "Find the total number of warehouses.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS count FROM warehouses;",
    solution_columns: ["count"],
    tables: ["warehouses"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_022",
    title: "Active Warehouses",
    description: "Find warehouses that are currently active.",
    difficulty: "easy",
    expected_query:
      "SELECT id, name, city, state, country FROM warehouses WHERE is_active = TRUE;",
    solution_columns: ["id", "name", "city", "state", "country"],
    tables: ["warehouses"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_023",
    title: "Low Warehouse Inventory",
    description:
      "Find inventory records where available quantity is below the reorder level.",
    difficulty: "easy",
    expected_query:
      "SELECT id, warehouse_id, product_id, variant_id, quantity_available, reorder_level FROM inventory WHERE quantity_available < reorder_level;",
    solution_columns: [
      "id",
      "warehouse_id",
      "product_id",
      "variant_id",
      "quantity_available",
      "reorder_level",
    ],
    tables: ["inventory"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_024",
    title: "Reserved Inventory",
    description:
      "Find inventory records where some quantity is currently reserved.",
    difficulty: "easy",
    expected_query:
      "SELECT id, warehouse_id, product_id, variant_id, quantity_reserved FROM inventory WHERE quantity_reserved > 0;",
    solution_columns: [
      "id",
      "warehouse_id",
      "product_id",
      "variant_id",
      "quantity_reserved",
    ],
    tables: ["inventory"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_025",
    title: "Stock In Movements",
    description: "Find all inventory movement records where stock was added.",
    difficulty: "easy",
    expected_query:
      "SELECT id, warehouse_id, product_id, variant_id, quantity, created_at FROM inventory_movements WHERE movement_type = 'stock_in';",
    solution_columns: [
      "id",
      "warehouse_id",
      "product_id",
      "variant_id",
      "quantity",
      "created_at",
    ],
    tables: ["inventory_movements"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_026",
    title: "Free Shipping Coupons",
    description: "Find coupons that provide free shipping.",
    difficulty: "easy",
    expected_query:
      "SELECT id, code, minimum_order_amount, expires_at FROM coupons WHERE discount_type = 'free_shipping';",
    solution_columns: ["id", "code", "minimum_order_amount", "expires_at"],
    tables: ["coupons"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_027",
    title: "High Priority Support Tickets",
    description: "Find support tickets with high or urgent priority.",
    difficulty: "easy",
    expected_query:
      "SELECT id, customer_id, order_id, ticket_type, priority, subject FROM support_tickets WHERE priority IN ('high', 'urgent');",
    solution_columns: [
      "id",
      "customer_id",
      "order_id",
      "ticket_type",
      "priority",
      "subject",
    ],
    tables: ["support_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_028",
    title: "Refund Requests",
    description: "Find refunds that are still in requested status.",
    difficulty: "easy",
    expected_query:
      "SELECT id, payment_id, order_id, refund_amount, reason FROM refunds WHERE refund_status = 'requested';",
    solution_columns: [
      "id",
      "payment_id",
      "order_id",
      "refund_amount",
      "reason",
    ],
    tables: ["refunds"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_029",
    title: "Verified Purchase Reviews",
    description: "Find reviews that came from verified purchases.",
    difficulty: "easy",
    expected_query:
      "SELECT id, product_id, customer_id, rating, helpful_count FROM reviews WHERE is_verified_purchase = TRUE;",
    solution_columns: [
      "id",
      "product_id",
      "customer_id",
      "rating",
      "helpful_count",
    ],
    tables: ["reviews"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_030",
    title: "Helpful Reviews",
    description: "Find reviews that have at least 10 helpful votes.",
    difficulty: "easy",
    expected_query:
      "SELECT id, product_id, customer_id, rating, helpful_count FROM reviews WHERE helpful_count >= 10;",
    solution_columns: [
      "id",
      "product_id",
      "customer_id",
      "rating",
      "helpful_count",
    ],
    tables: ["reviews"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_031",
    title: "Total Order Revenue",
    description: "Find the total revenue from all orders.",
    difficulty: "easy",
    expected_query: "SELECT SUM(total_amount) AS total_revenue FROM orders;",
    solution_columns: ["total_revenue"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_032",
    title: "Average Order Value",
    description: "Find the average total amount across all orders.",
    difficulty: "easy",
    expected_query:
      "SELECT ROUND(AVG(total_amount), 2) AS avg_order_value FROM orders;",
    solution_columns: ["avg_order_value"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_033",
    title: "Total Shipping Fees",
    description: "Find the total shipping fee collected from all orders.",
    difficulty: "easy",
    expected_query:
      "SELECT SUM(shipping_fee) AS total_shipping_fee FROM orders;",
    solution_columns: ["total_shipping_fee"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_034",
    title: "Total Refund Amount",
    description: "Find the total refund amount across all refunds.",
    difficulty: "easy",
    expected_query:
      "SELECT SUM(refund_amount) AS total_refund_amount FROM refunds;",
    solution_columns: ["total_refund_amount"],
    tables: ["refunds"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_035",
    title: "Average Product Price",
    description: "Find the average price of all products.",
    difficulty: "easy",
    expected_query: "SELECT ROUND(AVG(price), 2) AS avg_price FROM products;",
    solution_columns: ["avg_price"],
    tables: ["products"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_036",
    title: "Total Available Inventory",
    description:
      "Find the total available inventory quantity across all warehouses.",
    difficulty: "easy",
    expected_query:
      "SELECT SUM(quantity_available) AS total_available_quantity FROM inventory;",
    solution_columns: ["total_available_quantity"],
    tables: ["inventory"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_037",
    title: "Average Seller Rating",
    description: "Find the average rating across all sellers.",
    difficulty: "easy",
    expected_query:
      "SELECT ROUND(AVG(rating), 2) AS avg_seller_rating FROM sellers;",
    solution_columns: ["avg_seller_rating"],
    tables: ["sellers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_038",
    title: "Total Product Views",
    description: "Find the total number of product view events.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS count FROM product_views;",
    solution_columns: ["count"],
    tables: ["product_views"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_039",
    title: "Searches With Clicked Product",
    description:
      "Find the number of search queries where a product was clicked.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS count FROM search_queries WHERE clicked_product_id IS NOT NULL;",
    solution_columns: ["count"],
    tables: ["search_queries"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_040",
    title: "Android Orders",
    description: "Find orders placed through the Android app.",
    difficulty: "easy",
    expected_query:
      "SELECT id, customer_id, order_number, order_date, total_amount FROM orders WHERE order_channel = 'android';",
    solution_columns: [
      "id",
      "customer_id",
      "order_number",
      "order_date",
      "total_amount",
    ],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_041",
    title: "Orders Per Customer",
    description:
      "Find each customer and the total number of orders they have placed.",
    difficulty: "medium",
    expected_query:
      "SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id;",
    solution_columns: ["customer_id", "order_count"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_042",
    title: "Products Per Category",
    description: "Find each category and the total number of products in it.",
    difficulty: "medium",
    expected_query:
      "SELECT category_id, COUNT(*) AS product_count FROM products GROUP BY category_id;",
    solution_columns: ["category_id", "product_count"],
    tables: ["products"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_043",
    title: "Inventory Per Warehouse",
    description:
      "Find each warehouse and the total available inventory quantity.",
    difficulty: "medium",
    expected_query:
      "SELECT warehouse_id, SUM(quantity_available) AS total_quantity FROM inventory GROUP BY warehouse_id;",
    solution_columns: ["warehouse_id", "total_quantity"],
    tables: ["inventory"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_044",
    title: "Revenue Per Customer",
    description:
      "Find each customer and the total revenue generated from their orders.",
    difficulty: "medium",
    expected_query:
      "SELECT customer_id, SUM(total_amount) AS total_revenue FROM orders GROUP BY customer_id;",
    solution_columns: ["customer_id", "total_revenue"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_045",
    title: "Average Order Value Per Customer",
    description: "Find each customer and their average order value.",
    difficulty: "medium",
    expected_query:
      "SELECT customer_id, ROUND(AVG(total_amount), 2) AS avg_order_value FROM orders GROUP BY customer_id;",
    solution_columns: ["customer_id", "avg_order_value"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_046",
    title: "Quantity Sold Per Product",
    description:
      "Find each product and the total quantity sold across all order items.",
    difficulty: "medium",
    expected_query:
      "SELECT product_id, SUM(quantity) AS total_quantity_sold FROM order_items GROUP BY product_id;",
    solution_columns: ["product_id", "total_quantity_sold"],
    tables: ["order_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_047",
    title: "Revenue Per Product",
    description: "Find each product and the total revenue generated from it.",
    difficulty: "medium",
    expected_query:
      "SELECT product_id, SUM(total_price) AS total_revenue FROM order_items GROUP BY product_id;",
    solution_columns: ["product_id", "total_revenue"],
    tables: ["order_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_048",
    title: "Reviews Per Product",
    description:
      "Find each product and the total number of reviews it has received.",
    difficulty: "medium",
    expected_query:
      "SELECT product_id, COUNT(*) AS review_count FROM reviews GROUP BY product_id;",
    solution_columns: ["product_id", "review_count"],
    tables: ["reviews"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_049",
    title: "Payments By Status",
    description: "Find each payment status and the total number of payments.",
    difficulty: "medium",
    expected_query:
      "SELECT payment_status, COUNT(*) AS payment_count FROM payments GROUP BY payment_status;",
    solution_columns: ["payment_status", "payment_count"],
    tables: ["payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_050",
    title: "Orders By Status",
    description: "Find each order status and the number of orders.",
    difficulty: "medium",
    expected_query:
      "SELECT status, COUNT(*) AS order_count FROM orders GROUP BY status;",
    solution_columns: ["status", "order_count"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_051",
    title: "Coupons Usage Count",
    description:
      "Find each coupon and how many times it has been used in orders.",
    difficulty: "medium",
    expected_query:
      "SELECT coupon_id, COUNT(*) AS usage_count FROM orders WHERE coupon_id IS NOT NULL GROUP BY coupon_id;",
    solution_columns: ["coupon_id", "usage_count"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_052",
    title: "Cart Items Per Cart",
    description: "Find each cart and the number of items in it.",
    difficulty: "medium",
    expected_query:
      "SELECT cart_id, COUNT(*) AS item_count FROM cart_items GROUP BY cart_id;",
    solution_columns: ["cart_id", "item_count"],
    tables: ["cart_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_053",
    title: "Wishlist Items Per Wishlist",
    description: "Find each wishlist and the number of products saved in it.",
    difficulty: "medium",
    expected_query:
      "SELECT wishlist_id, COUNT(*) AS item_count FROM wishlist_items GROUP BY wishlist_id;",
    solution_columns: ["wishlist_id", "item_count"],
    tables: ["wishlist_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_054",
    title: "Shipments Per Warehouse",
    description:
      "Find each warehouse and the number of shipments processed from it.",
    difficulty: "medium",
    expected_query:
      "SELECT warehouse_id, COUNT(*) AS shipment_count FROM shipments GROUP BY warehouse_id;",
    solution_columns: ["warehouse_id", "shipment_count"],
    tables: ["shipments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_055",
    title: "Returns Per Customer",
    description:
      "Find each customer and the total number of returns they have initiated.",
    difficulty: "medium",
    expected_query:
      "SELECT customer_id, COUNT(*) AS return_count FROM returns GROUP BY customer_id;",
    solution_columns: ["customer_id", "return_count"],
    tables: ["returns"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_056",
    title: "Refund Amount Per Order",
    description: "Find each order and the total refund amount issued.",
    difficulty: "medium",
    expected_query:
      "SELECT order_id, SUM(refund_amount) AS total_refund FROM refunds GROUP BY order_id;",
    solution_columns: ["order_id", "total_refund"],
    tables: ["refunds"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_057",
    title: "Product Views Per Product",
    description:
      "Find each product and the number of times it has been viewed.",
    difficulty: "medium",
    expected_query:
      "SELECT product_id, COUNT(*) AS view_count FROM product_views GROUP BY product_id;",
    solution_columns: ["product_id", "view_count"],
    tables: ["product_views"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_058",
    title: "Search Queries Per Customer",
    description:
      "Find each customer and the number of searches they performed.",
    difficulty: "medium",
    expected_query:
      "SELECT customer_id, COUNT(*) AS search_count FROM search_queries WHERE customer_id IS NOT NULL GROUP BY customer_id;",
    solution_columns: ["customer_id", "search_count"],
    tables: ["search_queries"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_059",
    title: "Support Tickets Per Type",
    description: "Find each ticket type and the number of tickets raised.",
    difficulty: "medium",
    expected_query:
      "SELECT ticket_type, COUNT(*) AS ticket_count FROM support_tickets GROUP BY ticket_type;",
    solution_columns: ["ticket_type", "ticket_count"],
    tables: ["support_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_060",
    title: "Messages Per Ticket",
    description:
      "Find each support ticket and the number of messages exchanged.",
    difficulty: "medium",
    expected_query:
      "SELECT ticket_id, COUNT(*) AS message_count FROM support_messages GROUP BY ticket_id;",
    solution_columns: ["ticket_id", "message_count"],
    tables: ["support_messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_061",
    title: "Total Quantity Sold By Category",
    description: "Find each category and the total quantity of products sold.",
    difficulty: "medium",
    expected_query:
      "SELECT p.category_id, SUM(oi.quantity) AS total_quantity_sold FROM order_items oi JOIN products p ON oi.product_id = p.id GROUP BY p.category_id;",
    solution_columns: ["category_id", "total_quantity_sold"],
    tables: ["order_items", "products"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_062",
    title: "Revenue By Category",
    description: "Find each category and the total revenue generated.",
    difficulty: "medium",
    expected_query:
      "SELECT p.category_id, SUM(oi.total_price) AS total_revenue FROM order_items oi JOIN products p ON oi.product_id = p.id GROUP BY p.category_id;",
    solution_columns: ["category_id", "total_revenue"],
    tables: ["order_items", "products"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_063",
    title: "Average Rating By Category",
    description: "Find each category and the average rating based on reviews.",
    difficulty: "medium",
    expected_query:
      "SELECT p.category_id, ROUND(AVG(r.rating), 2) AS avg_rating FROM reviews r JOIN products p ON r.product_id = p.id GROUP BY p.category_id;",
    solution_columns: ["category_id", "avg_rating"],
    tables: ["reviews", "products"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_064",
    title: "Orders By City",
    description: "Find each city and the total number of orders shipped there.",
    difficulty: "medium",
    expected_query:
      "SELECT a.city, COUNT(*) AS order_count FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city;",
    solution_columns: ["city", "order_count"],
    tables: ["orders", "addresses"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_065",
    title: "Revenue By City",
    description: "Find each city and the total revenue generated.",
    difficulty: "medium",
    expected_query:
      "SELECT a.city, SUM(o.total_amount) AS total_revenue FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city;",
    solution_columns: ["city", "total_revenue"],
    tables: ["orders", "addresses"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_066",
    title: "Orders By State",
    description: "Find each state and the number of orders shipped there.",
    difficulty: "medium",
    expected_query:
      "SELECT a.state, COUNT(*) AS order_count FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.state;",
    solution_columns: ["state", "order_count"],
    tables: ["orders", "addresses"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_067",
    title: "Revenue By State",
    description: "Find each state and the total revenue generated.",
    difficulty: "medium",
    expected_query:
      "SELECT a.state, SUM(o.total_amount) AS total_revenue FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.state;",
    solution_columns: ["state", "total_revenue"],
    tables: ["orders", "addresses"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_068",
    title: "Revenue By Seller",
    description:
      "Find each seller and the total revenue generated from their products.",
    difficulty: "medium",
    expected_query:
      "SELECT oi.seller_id, SUM(oi.total_price) AS total_revenue FROM order_items oi GROUP BY oi.seller_id;",
    solution_columns: ["seller_id", "total_revenue"],
    tables: ["order_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_069",
    title: "Orders By Channel",
    description:
      "Find each order channel and the number of orders placed through it.",
    difficulty: "medium",
    expected_query:
      "SELECT order_channel, COUNT(*) AS order_count FROM orders GROUP BY order_channel;",
    solution_columns: ["order_channel", "order_count"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_070",
    title: "Average Shipment Cost By Carrier",
    description: "Find each carrier and the average shipping cost.",
    difficulty: "medium",
    expected_query:
      "SELECT carrier_name, ROUND(AVG(shipping_cost), 2) AS avg_shipping_cost FROM shipments GROUP BY carrier_name;",
    solution_columns: ["carrier_name", "avg_shipping_cost"],
    tables: ["shipments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_071",
    title: "Return Count By Status",
    description: "Find each return status and the number of returns.",
    difficulty: "medium",
    expected_query:
      "SELECT return_status, COUNT(*) AS return_count FROM returns GROUP BY return_status;",
    solution_columns: ["return_status", "return_count"],
    tables: ["returns"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_072",
    title: "Refund Count By Status",
    description: "Find each refund status and the number of refunds.",
    difficulty: "medium",
    expected_query:
      "SELECT refund_status, COUNT(*) AS refund_count FROM refunds GROUP BY refund_status;",
    solution_columns: ["refund_status", "refund_count"],
    tables: ["refunds"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_073",
    title: "Products Per Seller",
    description:
      "Find each seller and the number of products they have listed.",
    difficulty: "medium",
    expected_query:
      "SELECT seller_id, COUNT(*) AS product_count FROM products GROUP BY seller_id;",
    solution_columns: ["seller_id", "product_count"],
    tables: ["products"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_074",
    title: "Average Product Price By Seller",
    description: "Find each seller and the average price of their products.",
    difficulty: "medium",
    expected_query:
      "SELECT seller_id, ROUND(AVG(price), 2) AS avg_price FROM products GROUP BY seller_id;",
    solution_columns: ["seller_id", "avg_price"],
    tables: ["products"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_075",
    title: "Views By Device Type",
    description: "Find each device type and the number of product views.",
    difficulty: "medium",
    expected_query:
      "SELECT d.device_type, COUNT(*) AS view_count FROM product_views pv JOIN customer_devices d ON pv.device_id = d.id GROUP BY d.device_type;",
    solution_columns: ["device_type", "view_count"],
    tables: ["product_views", "customer_devices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_076",
    title: "Search Result Average Count",
    description: "Find each search query text and the average result count.",
    difficulty: "medium",
    expected_query:
      "SELECT query_text, ROUND(AVG(result_count), 2) AS avg_results FROM search_queries GROUP BY query_text;",
    solution_columns: ["query_text", "avg_results"],
    tables: ["search_queries"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_077",
    title: "Orders Per Day",
    description: "Find each day and the number of orders placed.",
    difficulty: "medium",
    expected_query:
      "SELECT DATE(order_date) AS order_day, COUNT(*) AS order_count FROM orders GROUP BY DATE(order_date);",
    solution_columns: ["order_day", "order_count"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_078",
    title: "Revenue Per Day",
    description: "Find each day and the total revenue generated.",
    difficulty: "medium",
    expected_query:
      "SELECT DATE(order_date) AS order_day, SUM(total_amount) AS total_revenue FROM orders GROUP BY DATE(order_date);",
    solution_columns: ["order_day", "total_revenue"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_079",
    title: "Shipment Events Per Shipment",
    description: "Find each shipment and the number of events recorded.",
    difficulty: "medium",
    expected_query:
      "SELECT shipment_id, COUNT(*) AS event_count FROM shipment_events GROUP BY shipment_id;",
    solution_columns: ["shipment_id", "event_count"],
    tables: ["shipment_events"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_080",
    title: "Order Status Changes Count",
    description: "Find each order and the number of status changes recorded.",
    difficulty: "medium",
    expected_query:
      "SELECT order_id, COUNT(*) AS change_count FROM order_status_history GROUP BY order_id;",
    solution_columns: ["order_id", "change_count"],
    tables: ["order_status_history"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_081",
    title: "Top 5 Customers By Revenue",
    description:
      "Find the top 5 customers who generated the highest total revenue from orders.",
    difficulty: "hard",
    expected_query:
      "SELECT customer_id, SUM(total_amount) AS total_revenue FROM orders GROUP BY customer_id ORDER BY total_revenue DESC, customer_id ASC LIMIT 5;",
    solution_columns: ["customer_id", "total_revenue"],
    tables: ["orders"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_revenue", direction: "desc" },
        { column: "customer_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "ECOMMERCE_082",
    title: "Top 5 Products By Quantity Sold",
    description:
      "Find the top 5 products with the highest total quantity sold.",
    difficulty: "hard",
    expected_query:
      "SELECT product_id, SUM(quantity) AS total_quantity_sold FROM order_items GROUP BY product_id ORDER BY total_quantity_sold DESC, product_id ASC LIMIT 5;",
    solution_columns: ["product_id", "total_quantity_sold"],
    tables: ["order_items"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_quantity_sold", direction: "desc" },
        { column: "product_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "ECOMMERCE_083",
    title: "Top 5 Sellers By Revenue",
    description:
      "Find the top 5 sellers by total revenue generated from order items.",
    difficulty: "hard",
    expected_query:
      "SELECT seller_id, SUM(total_price) AS total_revenue FROM order_items WHERE seller_id IS NOT NULL GROUP BY seller_id ORDER BY total_revenue DESC, seller_id ASC LIMIT 5;",
    solution_columns: ["seller_id", "total_revenue"],
    tables: ["order_items"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_revenue", direction: "desc" },
        { column: "seller_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "ECOMMERCE_084",
    title: "Top 5 Products By Views",
    description:
      "Find the top 5 products with the highest number of product views.",
    difficulty: "hard",
    expected_query:
      "SELECT product_id, COUNT(*) AS view_count FROM product_views GROUP BY product_id ORDER BY view_count DESC, product_id ASC LIMIT 5;",
    solution_columns: ["product_id", "view_count"],
    tables: ["product_views"],
    comparison_config: {
      sort_by_columns: [
        { column: "view_count", direction: "desc" },
        { column: "product_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "ECOMMERCE_085",
    title: "Products With No Reviews",
    description: "Find products that have not received any reviews.",
    difficulty: "hard",
    expected_query:
      "SELECT p.id AS product_id FROM products p LEFT JOIN reviews r ON p.id = r.product_id WHERE r.product_id IS NULL;",
    solution_columns: ["product_id"],
    tables: ["products", "reviews"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_086",
    title: "Customers With No Orders",
    description: "Find customers who have never placed an order.",
    difficulty: "hard",
    expected_query:
      "SELECT c.id AS customer_id FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE o.customer_id IS NULL;",
    solution_columns: ["customer_id"],
    tables: ["customers", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_087",
    title: "Abandoned Carts",
    description:
      "Find active carts that have items but were never converted into an order.",
    difficulty: "hard",
    expected_query:
      "SELECT c.id AS cart_id, c.customer_id, COUNT(ci.id) AS item_count FROM carts c JOIN cart_items ci ON c.id = ci.cart_id WHERE c.cart_status = 'active' GROUP BY c.id, c.customer_id;",
    solution_columns: ["cart_id", "customer_id", "item_count"],
    tables: ["carts", "cart_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_088",
    title: "Products Priced Above Category Average",
    description:
      "Find products whose price is greater than the average product price in their category.",
    difficulty: "hard",
    expected_query:
      "SELECT p.id AS product_id, p.category_id, p.price FROM products p JOIN (SELECT category_id, AVG(price) AS avg_price FROM products GROUP BY category_id) category_prices ON p.category_id = category_prices.category_id WHERE p.price > category_prices.avg_price;",
    solution_columns: ["product_id", "category_id", "price"],
    tables: ["products"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_089",
    title: "Customers With More Than 10 Orders",
    description: "Find customers who have placed more than 10 orders.",
    difficulty: "hard",
    expected_query:
      "SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id HAVING COUNT(*) > 10;",
    solution_columns: ["customer_id", "order_count"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_090",
    title: "Products Ordered In More Than 100 Orders",
    description: "Find products that appear in more than 100 distinct orders.",
    difficulty: "hard",
    expected_query:
      "SELECT product_id, COUNT(DISTINCT order_id) AS order_count FROM order_items GROUP BY product_id HAVING COUNT(DISTINCT order_id) > 100;",
    solution_columns: ["product_id", "order_count"],
    tables: ["order_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_091",
    title: "Highest Rated Product In Each Category",
    description:
      "Find the highest rated product in each category. Break ties by smaller product id.",
    difficulty: "hard",
    expected_query:
      "SELECT category_id, product_id, rating FROM (SELECT category_id, id AS product_id, rating, ROW_NUMBER() OVER (PARTITION BY category_id ORDER BY rating DESC, id ASC) AS rn FROM products WHERE rating IS NOT NULL) ranked WHERE rn = 1;",
    solution_columns: ["category_id", "product_id", "rating"],
    tables: ["products"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_092",
    title: "Most Ordered Product Per Seller",
    description:
      "Find each seller's most ordered product by total quantity sold. Break ties by smaller product id.",
    difficulty: "hard",
    expected_query:
      "SELECT seller_id, product_id, total_quantity_sold FROM (SELECT oi.seller_id, oi.product_id, SUM(oi.quantity) AS total_quantity_sold, ROW_NUMBER() OVER (PARTITION BY oi.seller_id ORDER BY SUM(oi.quantity) DESC, oi.product_id ASC) AS rn FROM order_items oi WHERE oi.seller_id IS NOT NULL GROUP BY oi.seller_id, oi.product_id) ranked WHERE rn = 1;",
    solution_columns: ["seller_id", "product_id", "total_quantity_sold"],
    tables: ["order_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_093",
    title: "Latest Order Per Customer",
    description:
      "Find each customer's latest order. If multiple orders have the same order date, choose the smaller order id.",
    difficulty: "hard",
    expected_query:
      "SELECT customer_id, order_id, order_date FROM (SELECT customer_id, id AS order_id, order_date, ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC, id ASC) AS rn FROM orders) ranked WHERE rn = 1;",
    solution_columns: ["customer_id", "order_id", "order_date"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_094",
    title: "Monthly Revenue Running Total",
    description:
      "For each revenue month, calculate monthly revenue and the running total revenue ordered by month.",
    difficulty: "hard",
    expected_query:
      "SELECT revenue_month, monthly_revenue, SUM(monthly_revenue) OVER (ORDER BY revenue_month ASC) AS running_total FROM (SELECT DATE_TRUNC('month', order_date)::date AS revenue_month, SUM(total_amount) AS monthly_revenue FROM orders GROUP BY DATE_TRUNC('month', order_date)::date) monthly_revenue_data ORDER BY revenue_month ASC;",
    solution_columns: ["revenue_month", "monthly_revenue", "running_total"],
    tables: ["orders"],
    comparison_config: {
      sort_by_columns: [{ column: "revenue_month", direction: "asc" }],
    },
  },
  {
    app_id: appId,
    code: "ECOMMERCE_095",
    title: "Top 3 Customers Per City By Revenue",
    description:
      "For each shipping city, find the top 3 customers by total revenue. Break ties by smaller customer id.",
    difficulty: "hard",
    expected_query:
      "SELECT city, customer_id, total_revenue FROM (SELECT a.city, o.customer_id, SUM(o.total_amount) AS total_revenue, ROW_NUMBER() OVER (PARTITION BY a.city ORDER BY SUM(o.total_amount) DESC, o.customer_id ASC) AS rn FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city, o.customer_id) ranked WHERE rn <= 3;",
    solution_columns: ["city", "customer_id", "total_revenue"],
    tables: ["orders", "addresses"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_096",
    title: "Products With View But No Purchase",
    description:
      "Find products that have been viewed at least once but never purchased.",
    difficulty: "hard",
    expected_query:
      "SELECT pv.product_id FROM product_views pv LEFT JOIN order_items oi ON pv.product_id = oi.product_id WHERE oi.product_id IS NULL GROUP BY pv.product_id;",
    solution_columns: ["product_id"],
    tables: ["product_views", "order_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_097",
    title: "Customers Who Bought From More Than 3 Categories",
    description:
      "Find customers who purchased products from more than 3 distinct categories.",
    difficulty: "hard",
    expected_query:
      "SELECT o.customer_id, COUNT(DISTINCT p.category_id) AS category_count FROM orders o JOIN order_items oi ON o.id = oi.order_id JOIN products p ON oi.product_id = p.id GROUP BY o.customer_id HAVING COUNT(DISTINCT p.category_id) > 3;",
    solution_columns: ["customer_id", "category_count"],
    tables: ["orders", "order_items", "products"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_098",
    title: "Delayed Shipments",
    description:
      "Find shipments that were delivered after their estimated delivery timestamp.",
    difficulty: "hard",
    expected_query:
      "SELECT id AS shipment_id, order_id, estimated_delivery_at, delivered_at FROM shipments WHERE delivered_at IS NOT NULL AND estimated_delivery_at IS NOT NULL AND delivered_at > estimated_delivery_at;",
    solution_columns: [
      "shipment_id",
      "order_id",
      "estimated_delivery_at",
      "delivered_at",
    ],
    tables: ["shipments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_099",
    title: "Customers With Only Completed Payments",
    description:
      "Find customers for whom every payment associated with their orders has completed status.",
    difficulty: "hard",
    expected_query:
      "SELECT o.customer_id FROM orders o JOIN payments p ON o.id = p.order_id GROUP BY o.customer_id HAVING COUNT(*) = COUNT(CASE WHEN p.payment_status = 'completed' THEN 1 END);",
    solution_columns: ["customer_id"],
    tables: ["orders", "payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "ECOMMERCE_100",
    title: "Repeat Purchase Customers By Month",
    description:
      "Find customers who placed orders in at least two consecutive months.",
    difficulty: "hard",
    expected_query:
      "SELECT DISTINCT customer_id FROM (SELECT customer_id, order_month, LAG(order_month) OVER (PARTITION BY customer_id ORDER BY order_month ASC) AS previous_order_month FROM (SELECT DISTINCT customer_id, DATE_TRUNC('month', order_date)::date AS order_month FROM orders) monthly_orders) sequenced WHERE previous_order_month = (order_month - INTERVAL '1 month')::date;",
    solution_columns: ["customer_id"],
    tables: ["orders"],
    comparison_config: {},
  },
];

export const hints = [
  {
    code: "ECOMMERCE_001",
    hints: [
      {
        hint_order: 1,
        content: "You need the total number of rows in the customers table.",
      },
      { hint_order: 2, content: "Use COUNT(*) to count all customer records." },
      { hint_order: 3, content: "Select COUNT(*) AS count from customers." },
    ],
  },
  {
    code: "ECOMMERCE_002",
    hints: [
      { hint_order: 1, content: "Look for sellers with active status." },
      {
        hint_order: 2,
        content: "Filter the sellers table using seller_status.",
      },
      {
        hint_order: 3,
        content: "Use WHERE seller_status = 'active' and COUNT(*).",
      },
    ],
  },
  {
    code: "ECOMMERCE_003",
    hints: [
      { hint_order: 1, content: "Look for products that are marked active." },
      {
        hint_order: 2,
        content: "Use the is_active boolean column in products.",
      },
      {
        hint_order: 3,
        content: "Filter products with is_active = TRUE and count them.",
      },
    ],
  },
  {
    code: "ECOMMERCE_004",
    hints: [
      { hint_order: 1, content: "Out of stock means no stock is available." },
      {
        hint_order: 2,
        content: "Use the stock_quantity column from products.",
      },
      { hint_order: 3, content: "Filter products where stock_quantity = 0." },
    ],
  },
  {
    code: "ECOMMERCE_005",
    hints: [
      {
        hint_order: 1,
        content: "Low inventory means stock quantity is below 10.",
      },
      {
        hint_order: 2,
        content: "Return product id, name, and stock quantity.",
      },
      { hint_order: 3, content: "Use WHERE stock_quantity < 10 on products." },
    ],
  },
  {
    code: "ECOMMERCE_006",
    hints: [
      {
        hint_order: 1,
        content: "Active brands are stored in the brands table.",
      },
      { hint_order: 2, content: "Use the is_active column to filter brands." },
      { hint_order: 3, content: "Select id and name where is_active = TRUE." },
    ],
  },
  {
    code: "ECOMMERCE_007",
    hints: [
      { hint_order: 1, content: "You need addresses used for shipping." },
      {
        hint_order: 2,
        content: "Also filter only addresses marked as default.",
      },
      {
        hint_order: 3,
        content: "Use address_type = 'shipping' and is_default = TRUE.",
      },
    ],
  },
  {
    code: "ECOMMERCE_008",
    hints: [
      {
        hint_order: 1,
        content: "Customer device records are in customer_devices.",
      },
      {
        hint_order: 2,
        content: "Filter records where the device type is mobile.",
      },
      { hint_order: 3, content: "Use WHERE device_type = 'mobile'." },
    ],
  },
  {
    code: "ECOMMERCE_009",
    hints: [
      {
        hint_order: 1,
        content: "Active coupons are marked using a boolean column.",
      },
      { hint_order: 2, content: "Use the is_active column in coupons." },
      {
        hint_order: 3,
        content: "Select coupon details where is_active = TRUE.",
      },
    ],
  },
  {
    code: "ECOMMERCE_010",
    hints: [
      {
        hint_order: 1,
        content:
          "Expired coupons have an expiry timestamp before the cutoff date.",
      },
      { hint_order: 2, content: "Compare expires_at with January 1, 2026." },
      { hint_order: 3, content: "Use WHERE expires_at < '2026-01-01'." },
    ],
  },
  {
    code: "ECOMMERCE_011",
    hints: [
      {
        hint_order: 1,
        content: "Delivered orders are identified by their status.",
      },
      { hint_order: 2, content: "Use the status column in the orders table." },
      { hint_order: 3, content: "Filter orders where status = 'delivered'." },
    ],
  },
  {
    code: "ECOMMERCE_012",
    hints: [
      { hint_order: 1, content: "You need only cancelled orders." },
      { hint_order: 2, content: "Filter the orders table by status." },
      {
        hint_order: 3,
        content: "Use COUNT(*) with WHERE status = 'cancelled'.",
      },
    ],
  },
  {
    code: "ECOMMERCE_013",
    hints: [
      {
        hint_order: 1,
        content: "Completed payments are stored in the payments table.",
      },
      { hint_order: 2, content: "Use the payment_status column." },
      {
        hint_order: 3,
        content: "Count rows where payment_status = 'completed'.",
      },
    ],
  },
  {
    code: "ECOMMERCE_014",
    hints: [
      {
        hint_order: 1,
        content: "Failed payments may include a failure reason.",
      },
      { hint_order: 2, content: "Filter payments by payment_status." },
      { hint_order: 3, content: "Use WHERE payment_status = 'failed'." },
    ],
  },
  {
    code: "ECOMMERCE_015",
    hints: [
      {
        hint_order: 1,
        content: "Pending shipments are in the shipments table.",
      },
      {
        hint_order: 2,
        content: "Use shipment_status to filter shipment records.",
      },
      { hint_order: 3, content: "Filter where shipment_status = 'pending'." },
    ],
  },
  {
    code: "ECOMMERCE_016",
    hints: [
      {
        hint_order: 1,
        content: "Return requests are stored in the returns table.",
      },
      {
        hint_order: 2,
        content: "Use return_status to find requested returns.",
      },
      {
        hint_order: 3,
        content: "Filter returns where return_status = 'requested'.",
      },
    ],
  },
  {
    code: "ECOMMERCE_017",
    hints: [
      {
        hint_order: 1,
        content: "Open support tickets are in support_tickets.",
      },
      { hint_order: 2, content: "Use the ticket_status column." },
      {
        hint_order: 3,
        content: "Filter tickets where ticket_status = 'open'.",
      },
    ],
  },
  {
    code: "ECOMMERCE_018",
    hints: [
      {
        hint_order: 1,
        content: "Public wishlists are marked with a boolean flag.",
      },
      { hint_order: 2, content: "Use the is_public column in wishlists." },
      { hint_order: 3, content: "Filter wishlists where is_public = TRUE." },
    ],
  },
  {
    code: "ECOMMERCE_019",
    hints: [
      { hint_order: 1, content: "Active carts are stored in the carts table." },
      { hint_order: 2, content: "Use cart_status to identify active carts." },
      { hint_order: 3, content: "Filter carts where cart_status = 'active'." },
    ],
  },
  {
    code: "ECOMMERCE_020",
    hints: [
      {
        hint_order: 1,
        content: "Approved reviews are stored in the reviews table.",
      },
      { hint_order: 2, content: "Use the review_status column." },
      {
        hint_order: 3,
        content: "Filter reviews where review_status = 'approved'.",
      },
    ],
  },
  {
    code: "ECOMMERCE_021",
    hints: [
      {
        hint_order: 1,
        content: "You need the total number of warehouse records.",
      },
      { hint_order: 2, content: "Use COUNT(*) on the warehouses table." },
      { hint_order: 3, content: "Select COUNT(*) AS count from warehouses." },
    ],
  },
  {
    code: "ECOMMERCE_022",
    hints: [
      {
        hint_order: 1,
        content: "Active warehouses are marked with is_active.",
      },
      {
        hint_order: 2,
        content: "Filter the warehouses table using the active flag.",
      },
      { hint_order: 3, content: "Use WHERE is_active = TRUE." },
    ],
  },
  {
    code: "ECOMMERCE_023",
    hints: [
      {
        hint_order: 1,
        content:
          "Low inventory means available quantity is below reorder level.",
      },
      {
        hint_order: 2,
        content: "Compare quantity_available with reorder_level.",
      },
      {
        hint_order: 3,
        content: "Use WHERE quantity_available < reorder_level.",
      },
    ],
  },
  {
    code: "ECOMMERCE_024",
    hints: [
      {
        hint_order: 1,
        content:
          "Reserved inventory means reserved quantity is greater than zero.",
      },
      { hint_order: 2, content: "Use the quantity_reserved column." },
      {
        hint_order: 3,
        content: "Filter inventory where quantity_reserved > 0.",
      },
    ],
  },
  {
    code: "ECOMMERCE_025",
    hints: [
      {
        hint_order: 1,
        content: "Stock additions are recorded as inventory movements.",
      },
      { hint_order: 2, content: "Use the movement_type column." },
      {
        hint_order: 3,
        content: "Filter inventory_movements where movement_type = 'stock_in'.",
      },
    ],
  },
  {
    code: "ECOMMERCE_026",
    hints: [
      {
        hint_order: 1,
        content: "Free shipping coupons are a type of coupon discount.",
      },
      { hint_order: 2, content: "Use the discount_type column." },
      {
        hint_order: 3,
        content: "Filter coupons where discount_type = 'free_shipping'.",
      },
    ],
  },
  {
    code: "ECOMMERCE_027",
    hints: [
      {
        hint_order: 1,
        content: "High priority tickets include both high and urgent.",
      },
      { hint_order: 2, content: "Use the priority column in support_tickets." },
      { hint_order: 3, content: "Filter priority IN ('high', 'urgent')." },
    ],
  },
  {
    code: "ECOMMERCE_028",
    hints: [
      {
        hint_order: 1,
        content: "Refund requests are stored in the refunds table.",
      },
      {
        hint_order: 2,
        content: "Use refund_status to find requested refunds.",
      },
      {
        hint_order: 3,
        content: "Filter refunds where refund_status = 'requested'.",
      },
    ],
  },
  {
    code: "ECOMMERCE_029",
    hints: [
      {
        hint_order: 1,
        content: "Verified purchase reviews have a boolean flag.",
      },
      { hint_order: 2, content: "Use is_verified_purchase from reviews." },
      {
        hint_order: 3,
        content: "Filter reviews where is_verified_purchase = TRUE.",
      },
    ],
  },
  {
    code: "ECOMMERCE_030",
    hints: [
      { hint_order: 1, content: "Helpful reviews are based on helpful_count." },
      {
        hint_order: 2,
        content: "Find reviews with helpful_count of at least 10.",
      },
      { hint_order: 3, content: "Use WHERE helpful_count >= 10." },
    ],
  },
  {
    code: "ECOMMERCE_031",
    hints: [
      { hint_order: 1, content: "You need the total revenue from all orders." },
      {
        hint_order: 2,
        content: "Use the total_amount column from the orders table.",
      },
      { hint_order: 3, content: "Apply SUM(total_amount) on orders." },
    ],
  },
  {
    code: "ECOMMERCE_032",
    hints: [
      { hint_order: 1, content: "You need the average value of all orders." },
      { hint_order: 2, content: "Use AVG on total_amount." },
      { hint_order: 3, content: "Round the result to 2 decimal places." },
    ],
  },
  {
    code: "ECOMMERCE_033",
    hints: [
      { hint_order: 1, content: "Shipping fee is stored in the orders table." },
      { hint_order: 2, content: "You need the total across all rows." },
      { hint_order: 3, content: "Use SUM(shipping_fee)." },
    ],
  },
  {
    code: "ECOMMERCE_034",
    hints: [
      { hint_order: 1, content: "Refund amount is stored in refunds." },
      { hint_order: 2, content: "You need total refund amount." },
      { hint_order: 3, content: "Use SUM(refund_amount)." },
    ],
  },
  {
    code: "ECOMMERCE_035",
    hints: [
      { hint_order: 1, content: "You need the average product price." },
      { hint_order: 2, content: "Use the price column from products." },
      { hint_order: 3, content: "Apply AVG(price)." },
    ],
  },
  {
    code: "ECOMMERCE_036",
    hints: [
      { hint_order: 1, content: "Inventory stores available quantities." },
      { hint_order: 2, content: "You need the total across all warehouses." },
      { hint_order: 3, content: "Use SUM(quantity_available)." },
    ],
  },
  {
    code: "ECOMMERCE_037",
    hints: [
      { hint_order: 1, content: "Seller ratings are stored in sellers." },
      { hint_order: 2, content: "You need the average rating." },
      { hint_order: 3, content: "Use AVG(rating)." },
    ],
  },
  {
    code: "ECOMMERCE_038",
    hints: [
      {
        hint_order: 1,
        content: "Each row in product_views represents a view.",
      },
      { hint_order: 2, content: "You need total number of views." },
      { hint_order: 3, content: "Use COUNT(*) on product_views." },
    ],
  },
  {
    code: "ECOMMERCE_039",
    hints: [
      { hint_order: 1, content: "Some searches lead to a clicked product." },
      { hint_order: 2, content: "Check clicked_product_id column." },
      {
        hint_order: 3,
        content: "Count rows where clicked_product_id IS NOT NULL.",
      },
    ],
  },
  {
    code: "ECOMMERCE_040",
    hints: [
      { hint_order: 1, content: "Orders have a channel field." },
      { hint_order: 2, content: "You need only Android orders." },
      {
        hint_order: 3,
        content: "Filter orders where order_channel = 'android'.",
      },
    ],
  },
  {
    code: "ECOMMERCE_041",
    hints: [
      { hint_order: 1, content: "Group orders by customer." },
      { hint_order: 2, content: "Count number of orders per customer." },
      { hint_order: 3, content: "Use GROUP BY customer_id with COUNT(*)." },
    ],
  },
  {
    code: "ECOMMERCE_042",
    hints: [
      { hint_order: 1, content: "Each product belongs to a category." },
      { hint_order: 2, content: "Group products by category_id." },
      { hint_order: 3, content: "Use COUNT(*) grouped by category_id." },
    ],
  },
  {
    code: "ECOMMERCE_043",
    hints: [
      { hint_order: 1, content: "Inventory is stored per warehouse." },
      {
        hint_order: 2,
        content: "You need total available quantity per warehouse.",
      },
      {
        hint_order: 3,
        content: "Use SUM(quantity_available) grouped by warehouse_id.",
      },
    ],
  },
  {
    code: "ECOMMERCE_044",
    hints: [
      { hint_order: 1, content: "Revenue comes from orders." },
      { hint_order: 2, content: "Group orders by customer." },
      {
        hint_order: 3,
        content: "Use SUM(total_amount) grouped by customer_id.",
      },
    ],
  },
  {
    code: "ECOMMERCE_045",
    hints: [
      {
        hint_order: 1,
        content: "Average order value is computed per customer.",
      },
      { hint_order: 2, content: "Use AVG(total_amount)." },
      { hint_order: 3, content: "Group by customer_id and round the result." },
    ],
  },
  {
    code: "ECOMMERCE_046",
    hints: [
      { hint_order: 1, content: "Order items store quantity per product." },
      { hint_order: 2, content: "Group by product_id." },
      { hint_order: 3, content: "Use SUM(quantity)." },
    ],
  },
  {
    code: "ECOMMERCE_047",
    hints: [
      { hint_order: 1, content: "Revenue per product comes from order_items." },
      { hint_order: 2, content: "Use total_price column." },
      { hint_order: 3, content: "Group by product_id and SUM(total_price)." },
    ],
  },
  {
    code: "ECOMMERCE_048",
    hints: [
      { hint_order: 1, content: "Reviews table stores product reviews." },
      { hint_order: 2, content: "Group by product_id." },
      { hint_order: 3, content: "Use COUNT(*) per product." },
    ],
  },
  {
    code: "ECOMMERCE_049",
    hints: [
      { hint_order: 1, content: "Payments have different statuses." },
      { hint_order: 2, content: "Group by payment_status." },
      { hint_order: 3, content: "Use COUNT(*) per status." },
    ],
  },
  {
    code: "ECOMMERCE_050",
    hints: [
      { hint_order: 1, content: "Orders have multiple statuses." },
      { hint_order: 2, content: "Group orders by status." },
      { hint_order: 3, content: "Use COUNT(*) grouped by status." },
    ],
  },
  {
    code: "ECOMMERCE_051",
    hints: [
      { hint_order: 1, content: "Orders may have coupons applied." },
      { hint_order: 2, content: "Filter rows where coupon_id is not null." },
      { hint_order: 3, content: "Group by coupon_id and count." },
    ],
  },
  {
    code: "ECOMMERCE_052",
    hints: [
      { hint_order: 1, content: "Cart items belong to carts." },
      { hint_order: 2, content: "Group items by cart_id." },
      { hint_order: 3, content: "Use COUNT(*) per cart." },
    ],
  },
  {
    code: "ECOMMERCE_053",
    hints: [
      { hint_order: 1, content: "Wishlist items belong to wishlists." },
      { hint_order: 2, content: "Group items by wishlist_id." },
      { hint_order: 3, content: "Use COUNT(*) per wishlist." },
    ],
  },
  {
    code: "ECOMMERCE_054",
    hints: [
      { hint_order: 1, content: "Shipments are processed from warehouses." },
      { hint_order: 2, content: "Group shipments by warehouse_id." },
      { hint_order: 3, content: "Use COUNT(*) per warehouse." },
    ],
  },
  {
    code: "ECOMMERCE_055",
    hints: [
      { hint_order: 1, content: "Returns are linked to customers." },
      { hint_order: 2, content: "Group returns by customer_id." },
      { hint_order: 3, content: "Use COUNT(*) per customer." },
    ],
  },
  {
    code: "ECOMMERCE_056",
    hints: [
      { hint_order: 1, content: "Refunds belong to orders." },
      { hint_order: 2, content: "Group refunds by order_id." },
      { hint_order: 3, content: "Use SUM(refund_amount)." },
    ],
  },
  {
    code: "ECOMMERCE_057",
    hints: [
      { hint_order: 1, content: "Each product view is stored as a row." },
      { hint_order: 2, content: "Group by product_id." },
      { hint_order: 3, content: "Use COUNT(*) per product." },
    ],
  },
  {
    code: "ECOMMERCE_058",
    hints: [
      { hint_order: 1, content: "Search queries can belong to customers." },
      { hint_order: 2, content: "Ignore null customer_id values." },
      { hint_order: 3, content: "Group by customer_id and count." },
    ],
  },
  {
    code: "ECOMMERCE_059",
    hints: [
      { hint_order: 1, content: "Support tickets have different types." },
      { hint_order: 2, content: "Group by ticket_type." },
      { hint_order: 3, content: "Use COUNT(*) per type." },
    ],
  },
  {
    code: "ECOMMERCE_060",
    hints: [
      { hint_order: 1, content: "Messages belong to support tickets." },
      { hint_order: 2, content: "Group messages by ticket_id." },
      { hint_order: 3, content: "Use COUNT(*) per ticket." },
    ],
  },
  {
    code: "ECOMMERCE_061",
    hints: [
      { hint_order: 1, content: "Order items link products to orders." },
      {
        hint_order: 2,
        content: "Join order_items with products to get category.",
      },
      { hint_order: 3, content: "Group by category_id and SUM(quantity)." },
    ],
  },
  {
    code: "ECOMMERCE_062",
    hints: [
      {
        hint_order: 1,
        content: "Revenue per category comes from order_items.",
      },
      { hint_order: 2, content: "Join products to get category_id." },
      { hint_order: 3, content: "Group by category_id and SUM(total_price)." },
    ],
  },
  {
    code: "ECOMMERCE_063",
    hints: [
      { hint_order: 1, content: "Reviews store ratings for products." },
      { hint_order: 2, content: "Join products to get category." },
      { hint_order: 3, content: "Group by category_id and AVG(rating)." },
    ],
  },
  {
    code: "ECOMMERCE_064",
    hints: [
      { hint_order: 1, content: "Orders have shipping_address_id." },
      { hint_order: 2, content: "Join addresses to get city." },
      { hint_order: 3, content: "Group by city and COUNT orders." },
    ],
  },
  {
    code: "ECOMMERCE_065",
    hints: [
      { hint_order: 1, content: "Revenue is stored in orders." },
      { hint_order: 2, content: "Join addresses for city." },
      { hint_order: 3, content: "Group by city and SUM(total_amount)." },
    ],
  },
  {
    code: "ECOMMERCE_066",
    hints: [
      { hint_order: 1, content: "Shipping address contains state." },
      { hint_order: 2, content: "Join orders with addresses." },
      { hint_order: 3, content: "Group by state and COUNT orders." },
    ],
  },
  {
    code: "ECOMMERCE_067",
    hints: [
      { hint_order: 1, content: "Revenue per state uses orders + addresses." },
      { hint_order: 2, content: "Join using shipping_address_id." },
      { hint_order: 3, content: "Group by state and SUM(total_amount)." },
    ],
  },
  {
    code: "ECOMMERCE_068",
    hints: [
      { hint_order: 1, content: "Seller revenue is stored in order_items." },
      { hint_order: 2, content: "Each row has seller_id and total_price." },
      { hint_order: 3, content: "Group by seller_id and SUM(total_price)." },
    ],
  },
  {
    code: "ECOMMERCE_069",
    hints: [
      { hint_order: 1, content: "Orders contain order_channel." },
      { hint_order: 2, content: "Group orders by order_channel." },
      { hint_order: 3, content: "Use COUNT(*) per channel." },
    ],
  },
  {
    code: "ECOMMERCE_070",
    hints: [
      { hint_order: 1, content: "Shipments contain carrier_name and cost." },
      { hint_order: 2, content: "Group by carrier_name." },
      { hint_order: 3, content: "Use AVG(shipping_cost)." },
    ],
  },
  {
    code: "ECOMMERCE_071",
    hints: [
      { hint_order: 1, content: "Returns table contains return_status." },
      { hint_order: 2, content: "Group by return_status." },
      { hint_order: 3, content: "Use COUNT(*) per status." },
    ],
  },
  {
    code: "ECOMMERCE_072",
    hints: [
      { hint_order: 1, content: "Refunds table contains refund_status." },
      { hint_order: 2, content: "Group by refund_status." },
      { hint_order: 3, content: "Use COUNT(*) per status." },
    ],
  },
  {
    code: "ECOMMERCE_073",
    hints: [
      { hint_order: 1, content: "Products belong to sellers." },
      { hint_order: 2, content: "Group products by seller_id." },
      { hint_order: 3, content: "Use COUNT(*) per seller." },
    ],
  },
  {
    code: "ECOMMERCE_074",
    hints: [
      { hint_order: 1, content: "Each product has a price and seller." },
      { hint_order: 2, content: "Group products by seller_id." },
      { hint_order: 3, content: "Use AVG(price)." },
    ],
  },
  {
    code: "ECOMMERCE_075",
    hints: [
      { hint_order: 1, content: "Product views reference devices." },
      { hint_order: 2, content: "Join product_views with customer_devices." },
      { hint_order: 3, content: "Group by device_type and COUNT views." },
    ],
  },
  {
    code: "ECOMMERCE_076",
    hints: [
      { hint_order: 1, content: "Search queries store result_count." },
      { hint_order: 2, content: "Group by query_text." },
      { hint_order: 3, content: "Use AVG(result_count)." },
    ],
  },
  {
    code: "ECOMMERCE_077",
    hints: [
      { hint_order: 1, content: "Orders have timestamps." },
      { hint_order: 2, content: "Extract date from order_date." },
      { hint_order: 3, content: "Group by DATE(order_date) and COUNT." },
    ],
  },
  {
    code: "ECOMMERCE_078",
    hints: [
      { hint_order: 1, content: "Revenue is stored in orders." },
      { hint_order: 2, content: "Group by date." },
      { hint_order: 3, content: "Use SUM(total_amount)." },
    ],
  },
  {
    code: "ECOMMERCE_079",
    hints: [
      { hint_order: 1, content: "Shipment events belong to shipments." },
      { hint_order: 2, content: "Group by shipment_id." },
      { hint_order: 3, content: "Use COUNT(*) per shipment." },
    ],
  },
  {
    code: "ECOMMERCE_080",
    hints: [
      { hint_order: 1, content: "Order status history logs changes." },
      { hint_order: 2, content: "Group by order_id." },
      { hint_order: 3, content: "Use COUNT(*) per order." },
    ],
  },
  {
    code: "ECOMMERCE_081",
    hints: [
      { hint_order: 1, content: "Find revenue per customer first." },
      { hint_order: 2, content: "Sort customers by revenue descending." },
      { hint_order: 3, content: "Use LIMIT 5 to get top customers." },
    ],
  },
  {
    code: "ECOMMERCE_082",
    hints: [
      { hint_order: 1, content: "Aggregate total quantity per product." },
      { hint_order: 2, content: "Sort by quantity descending." },
      { hint_order: 3, content: "Limit results to top 5." },
    ],
  },
  {
    code: "ECOMMERCE_083",
    hints: [
      { hint_order: 1, content: "Revenue per seller comes from order_items." },
      { hint_order: 2, content: "Group by seller_id." },
      { hint_order: 3, content: "Sort descending and limit to 5." },
    ],
  },
  {
    code: "ECOMMERCE_084",
    hints: [
      { hint_order: 1, content: "Count views per product." },
      { hint_order: 2, content: "Sort by view_count descending." },
      { hint_order: 3, content: "Use LIMIT 5." },
    ],
  },
  {
    code: "ECOMMERCE_085",
    hints: [
      { hint_order: 1, content: "Join products with reviews." },
      { hint_order: 2, content: "Use LEFT JOIN to find missing reviews." },
      { hint_order: 3, content: "Filter where review is NULL." },
    ],
  },
  {
    code: "ECOMMERCE_086",
    hints: [
      { hint_order: 1, content: "Join customers with orders." },
      { hint_order: 2, content: "Use LEFT JOIN." },
      { hint_order: 3, content: "Filter where order is NULL." },
    ],
  },
  {
    code: "ECOMMERCE_087",
    hints: [
      { hint_order: 1, content: "Active carts are not converted yet." },
      { hint_order: 2, content: "Join carts with cart_items." },
      { hint_order: 3, content: "Group by cart_id and count items." },
    ],
  },
  {
    code: "ECOMMERCE_088",
    hints: [
      { hint_order: 1, content: "Find average price per category." },
      { hint_order: 2, content: "Join this with products." },
      { hint_order: 3, content: "Filter products where price > avg." },
    ],
  },
  {
    code: "ECOMMERCE_089",
    hints: [
      { hint_order: 1, content: "Group orders by customer." },
      { hint_order: 2, content: "Count orders per customer." },
      { hint_order: 3, content: "Use HAVING COUNT(*) > 10." },
    ],
  },
  {
    code: "ECOMMERCE_090",
    hints: [
      { hint_order: 1, content: "Count distinct orders per product." },
      { hint_order: 2, content: "Group by product_id." },
      { hint_order: 3, content: "Use HAVING COUNT(DISTINCT order_id) > 100." },
    ],
  },
  {
    code: "ECOMMERCE_091",
    hints: [
      { hint_order: 1, content: "You need ranking per category." },
      { hint_order: 2, content: "Use ROW_NUMBER() partitioned by category." },
      { hint_order: 3, content: "Pick rows where rank = 1." },
    ],
  },
  {
    code: "ECOMMERCE_092",
    hints: [
      { hint_order: 1, content: "Aggregate quantity per seller-product pair." },
      { hint_order: 2, content: "Use ROW_NUMBER() partitioned by seller." },
      { hint_order: 3, content: "Select rank = 1." },
    ],
  },
  {
    code: "ECOMMERCE_093",
    hints: [
      { hint_order: 1, content: "You need latest order per customer." },
      { hint_order: 2, content: "Sort by order_date descending." },
      { hint_order: 3, content: "Use ROW_NUMBER() and filter rank = 1." },
    ],
  },
  {
    code: "ECOMMERCE_094",
    hints: [
      { hint_order: 1, content: "Group orders by month." },
      { hint_order: 2, content: "Compute monthly revenue." },
      { hint_order: 3, content: "Use SUM(...) OVER for running total." },
    ],
  },
  {
    code: "ECOMMERCE_095",
    hints: [
      { hint_order: 1, content: "Join orders with addresses to get city." },
      { hint_order: 2, content: "Compute revenue per customer per city." },
      { hint_order: 3, content: "Use ROW_NUMBER() partitioned by city." },
    ],
  },
  {
    code: "ECOMMERCE_096",
    hints: [
      { hint_order: 1, content: "Start with products that have views." },
      { hint_order: 2, content: "Left join order_items." },
      { hint_order: 3, content: "Filter where purchase is NULL." },
    ],
  },
  {
    code: "ECOMMERCE_097",
    hints: [
      { hint_order: 1, content: "Join orders → order_items → products." },
      { hint_order: 2, content: "Count distinct categories per customer." },
      { hint_order: 3, content: "Use HAVING COUNT(DISTINCT category_id) > 3." },
    ],
  },
  {
    code: "ECOMMERCE_098",
    hints: [
      {
        hint_order: 1,
        content: "Compare delivered_at with estimated_delivery_at.",
      },
      { hint_order: 2, content: "Ensure both values are not NULL." },
      {
        hint_order: 3,
        content: "Filter where delivered_at > estimated_delivery_at.",
      },
    ],
  },
  {
    code: "ECOMMERCE_099",
    hints: [
      { hint_order: 1, content: "Join orders with payments." },
      {
        hint_order: 2,
        content: "Compare total payments vs completed payments.",
      },
      { hint_order: 3, content: "Use HAVING COUNT(*) = COUNT(CASE WHEN ...)." },
    ],
  },
  {
    code: "ECOMMERCE_100",
    hints: [
      { hint_order: 1, content: "Group orders by customer and month." },
      { hint_order: 2, content: "Use LAG to compare previous month." },
      { hint_order: 3, content: "Find consecutive months difference of 1." },
    ],
  },
];

export const conceptFilters = [
  { code: "ECOMMERCE_001", concepts: ["aggregation", "count"] },
  { code: "ECOMMERCE_002", concepts: ["filtering", "aggregation", "count"] },
  { code: "ECOMMERCE_003", concepts: ["filtering", "aggregation", "count"] },
  { code: "ECOMMERCE_004", concepts: ["filtering", "aggregation", "count"] },
  { code: "ECOMMERCE_005", concepts: ["filtering", "comparison"] },
  { code: "ECOMMERCE_006", concepts: ["filtering"] },
  { code: "ECOMMERCE_007", concepts: ["filtering", "comparison"] },
  { code: "ECOMMERCE_008", concepts: ["filtering"] },
  { code: "ECOMMERCE_009", concepts: ["filtering"] },
  { code: "ECOMMERCE_010", concepts: ["filtering", "comparison"] },
  { code: "ECOMMERCE_011", concepts: ["filtering"] },
  { code: "ECOMMERCE_012", concepts: ["filtering", "aggregation", "count"] },
  { code: "ECOMMERCE_013", concepts: ["filtering", "aggregation", "count"] },
  { code: "ECOMMERCE_014", concepts: ["filtering"] },
  { code: "ECOMMERCE_015", concepts: ["filtering"] },
  { code: "ECOMMERCE_016", concepts: ["filtering"] },
  { code: "ECOMMERCE_017", concepts: ["filtering"] },
  { code: "ECOMMERCE_018", concepts: ["filtering"] },
  { code: "ECOMMERCE_019", concepts: ["filtering"] },
  { code: "ECOMMERCE_020", concepts: ["filtering"] },

  { code: "ECOMMERCE_021", concepts: ["aggregation", "count"] },
  { code: "ECOMMERCE_022", concepts: ["filtering"] },
  { code: "ECOMMERCE_023", concepts: ["filtering", "comparison"] },
  { code: "ECOMMERCE_024", concepts: ["filtering", "comparison"] },
  { code: "ECOMMERCE_025", concepts: ["filtering"] },
  { code: "ECOMMERCE_026", concepts: ["filtering"] },
  { code: "ECOMMERCE_027", concepts: ["filtering"] },
  { code: "ECOMMERCE_028", concepts: ["filtering"] },
  { code: "ECOMMERCE_029", concepts: ["filtering"] },
  { code: "ECOMMERCE_030", concepts: ["filtering", "comparison"] },

  { code: "ECOMMERCE_031", concepts: ["aggregation", "sum"] },
  { code: "ECOMMERCE_032", concepts: ["aggregation", "average"] },
  { code: "ECOMMERCE_033", concepts: ["aggregation", "sum"] },
  { code: "ECOMMERCE_034", concepts: ["aggregation", "sum"] },
  { code: "ECOMMERCE_035", concepts: ["aggregation", "average"] },
  { code: "ECOMMERCE_036", concepts: ["aggregation", "sum"] },
  { code: "ECOMMERCE_037", concepts: ["aggregation", "average"] },
  { code: "ECOMMERCE_038", concepts: ["aggregation", "count"] },
  { code: "ECOMMERCE_039", concepts: ["filtering", "aggregation", "count"] },
  { code: "ECOMMERCE_040", concepts: ["filtering"] },

  { code: "ECOMMERCE_041", concepts: ["aggregation", "group_by", "count"] },
  { code: "ECOMMERCE_042", concepts: ["aggregation", "group_by", "count"] },
  { code: "ECOMMERCE_043", concepts: ["aggregation", "group_by", "sum"] },
  { code: "ECOMMERCE_044", concepts: ["aggregation", "group_by", "sum"] },
  { code: "ECOMMERCE_045", concepts: ["aggregation", "group_by", "average"] },
  { code: "ECOMMERCE_046", concepts: ["aggregation", "group_by", "sum"] },
  { code: "ECOMMERCE_047", concepts: ["aggregation", "group_by", "sum"] },
  { code: "ECOMMERCE_048", concepts: ["aggregation", "group_by", "count"] },
  { code: "ECOMMERCE_049", concepts: ["aggregation", "group_by", "count"] },
  { code: "ECOMMERCE_050", concepts: ["aggregation", "group_by", "count"] },
  {
    code: "ECOMMERCE_051",
    concepts: ["filtering", "aggregation", "group_by", "count"],
  },
  { code: "ECOMMERCE_052", concepts: ["aggregation", "group_by", "count"] },
  { code: "ECOMMERCE_053", concepts: ["aggregation", "group_by", "count"] },
  { code: "ECOMMERCE_054", concepts: ["aggregation", "group_by", "count"] },
  { code: "ECOMMERCE_055", concepts: ["aggregation", "group_by", "count"] },
  { code: "ECOMMERCE_056", concepts: ["aggregation", "group_by", "sum"] },
  { code: "ECOMMERCE_057", concepts: ["aggregation", "group_by", "count"] },
  {
    code: "ECOMMERCE_058",
    concepts: ["filtering", "aggregation", "group_by", "count"],
  },
  { code: "ECOMMERCE_059", concepts: ["aggregation", "group_by", "count"] },
  { code: "ECOMMERCE_060", concepts: ["aggregation", "group_by", "count"] },

  {
    code: "ECOMMERCE_061",
    concepts: ["joins", "aggregation", "group_by", "sum"],
  },
  {
    code: "ECOMMERCE_062",
    concepts: ["joins", "aggregation", "group_by", "sum"],
  },
  {
    code: "ECOMMERCE_063",
    concepts: ["joins", "aggregation", "group_by", "average"],
  },
  {
    code: "ECOMMERCE_064",
    concepts: ["joins", "aggregation", "group_by", "count"],
  },
  {
    code: "ECOMMERCE_065",
    concepts: ["joins", "aggregation", "group_by", "sum"],
  },
  {
    code: "ECOMMERCE_066",
    concepts: ["joins", "aggregation", "group_by", "count"],
  },
  {
    code: "ECOMMERCE_067",
    concepts: ["joins", "aggregation", "group_by", "sum"],
  },
  { code: "ECOMMERCE_068", concepts: ["aggregation", "group_by", "sum"] },
  { code: "ECOMMERCE_069", concepts: ["aggregation", "group_by", "count"] },
  { code: "ECOMMERCE_070", concepts: ["aggregation", "group_by", "average"] },
  { code: "ECOMMERCE_071", concepts: ["aggregation", "group_by", "count"] },
  { code: "ECOMMERCE_072", concepts: ["aggregation", "group_by", "count"] },
  { code: "ECOMMERCE_073", concepts: ["aggregation", "group_by", "count"] },
  { code: "ECOMMERCE_074", concepts: ["aggregation", "group_by", "average"] },
  {
    code: "ECOMMERCE_075",
    concepts: ["joins", "aggregation", "group_by", "count"],
  },
  { code: "ECOMMERCE_076", concepts: ["aggregation", "group_by", "average"] },
  {
    code: "ECOMMERCE_077",
    concepts: ["date_functions", "aggregation", "group_by", "count"],
  },
  {
    code: "ECOMMERCE_078",
    concepts: ["date_functions", "aggregation", "group_by", "sum"],
  },
  { code: "ECOMMERCE_079", concepts: ["aggregation", "group_by", "count"] },
  { code: "ECOMMERCE_080", concepts: ["aggregation", "group_by", "count"] },

  {
    code: "ECOMMERCE_081",
    concepts: ["aggregation", "group_by", "sum", "sorting", "limit"],
  },
  {
    code: "ECOMMERCE_082",
    concepts: ["aggregation", "group_by", "sum", "sorting", "limit"],
  },
  {
    code: "ECOMMERCE_083",
    concepts: ["aggregation", "group_by", "sum", "sorting", "limit"],
  },
  {
    code: "ECOMMERCE_084",
    concepts: ["aggregation", "group_by", "count", "sorting", "limit"],
  },
  { code: "ECOMMERCE_085", concepts: ["left_join", "anti_join"] },
  { code: "ECOMMERCE_086", concepts: ["left_join", "anti_join"] },
  {
    code: "ECOMMERCE_087",
    concepts: ["joins", "aggregation", "group_by", "count"],
  },
  {
    code: "ECOMMERCE_088",
    concepts: ["subquery", "joins", "aggregation", "average", "comparison"],
  },
  {
    code: "ECOMMERCE_089",
    concepts: ["aggregation", "group_by", "having", "count"],
  },
  {
    code: "ECOMMERCE_090",
    concepts: ["aggregation", "group_by", "having", "count_distinct"],
  },
  {
    code: "ECOMMERCE_091",
    concepts: ["window_functions", "row_number", "partition_by", "ranking"],
  },
  {
    code: "ECOMMERCE_092",
    concepts: ["window_functions", "row_number", "partition_by", "aggregation"],
  },
  {
    code: "ECOMMERCE_093",
    concepts: ["window_functions", "row_number", "partition_by", "sorting"],
  },
  {
    code: "ECOMMERCE_094",
    concepts: [
      "window_functions",
      "running_total",
      "date_functions",
      "aggregation",
    ],
  },
  {
    code: "ECOMMERCE_095",
    concepts: ["window_functions", "row_number", "partition_by", "joins"],
  },
  { code: "ECOMMERCE_096", concepts: ["left_join", "anti_join"] },
  {
    code: "ECOMMERCE_097",
    concepts: ["joins", "aggregation", "group_by", "count_distinct"],
  },
  { code: "ECOMMERCE_098", concepts: ["filtering", "comparison"] },
  {
    code: "ECOMMERCE_099",
    concepts: ["aggregation", "group_by", "having", "conditional_aggregation"],
  },
  {
    code: "ECOMMERCE_100",
    concepts: [
      "window_functions",
      "lag",
      "date_functions",
      "pattern_detection",
    ],
  },
];

export const solutions = [
  {
    code: "ECOMMERCE_001",
    approaches: [
      {
        approach_title: "COUNT all",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS count FROM customers;",
        explanation:
          "## 🧠 Approach\n\nCount all rows in the customers table.\n\n## 🔍 Explanation\n\n- `COUNT(*)` counts every row.\n- Since no filter is applied → total registered customers.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query: "SELECT COUNT(id) AS count FROM customers;",
        explanation:
          "## 🧠 Approach\n\nCount using a specific column.\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts non-null ids.\n- Equivalent to `COUNT(*)` if `id` is NOT NULL.",
      },
    ],
  },
  {
    code: "ECOMMERCE_002",
    approaches: [
      {
        approach_title: "Filter active",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS count FROM sellers WHERE seller_status = 'active';",
        explanation:
          "## 🧠 Approach\n\nFilter sellers first, then count.\n\n## 🔍 Explanation\n\n- `WHERE seller_status = 'active'` filters active sellers.\n- `COUNT(*)` counts remaining rows.",
      },
      {
        approach_title: "CASE count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) FILTER (WHERE seller_status = 'active') AS count FROM sellers;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation.\n\n## 🔍 Explanation\n\n- `FILTER` counts only rows matching condition.\n- Useful when multiple counts are needed in same query.",
      },
    ],
  },
  {
    code: "ECOMMERCE_003",
    approaches: [
      {
        approach_title: "Boolean filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS count FROM products WHERE is_active = TRUE;",
        explanation:
          "## 🧠 Approach\n\nFilter active products.\n\n## 🔍 Explanation\n\n- `is_active = TRUE` selects active products.\n- `COUNT(*)` counts them.",
      },
      {
        approach_title: "Shorthand filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query: "SELECT COUNT(*) AS count FROM products WHERE is_active;",
        explanation:
          "## 🧠 Approach\n\nUse boolean shorthand.\n\n## 🔍 Explanation\n\n- `WHERE is_active` is equivalent to `= TRUE`.\n- Cleaner syntax in PostgreSQL.",
      },
    ],
  },
  {
    code: "ECOMMERCE_004",
    approaches: [
      {
        approach_title: "Zero stock",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS count FROM products WHERE stock_quantity = 0;",
        explanation:
          "## 🧠 Approach\n\nFilter products with zero stock.\n\n## 🔍 Explanation\n\n- `stock_quantity = 0` identifies out-of-stock items.",
      },
      {
        approach_title: "CASE count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) FILTER (WHERE stock_quantity = 0) AS count FROM products;",
        explanation:
          "## 🧠 Approach\n\nUse conditional counting.\n\n## 🔍 Explanation\n\n- Counts only rows where stock is zero.\n- Same result without filtering rows globally.",
      },
    ],
  },
  {
    code: "ECOMMERCE_005",
    approaches: [
      {
        approach_title: "Direct filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, name, stock_quantity FROM products WHERE stock_quantity < 10;",
        explanation:
          "## 🧠 Approach\n\nFilter products with low inventory.\n\n## 🔍 Explanation\n\n- `stock_quantity < 10` identifies low stock items.\n- Returns detailed product info.",
      },
      {
        approach_title: "Derived table",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT * FROM (SELECT id, name, stock_quantity FROM products) p WHERE stock_quantity < 10;",
        explanation:
          "## 🧠 Approach\n\nWrap table in subquery then filter.\n\n## 🔍 Explanation\n\n- Same logic but less efficient.\n- Useful when preprocessing needed.",
      },
    ],
  },
  {
    code: "ECOMMERCE_006",
    approaches: [
      {
        approach_title: "Active brands",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query: "SELECT id, name FROM brands WHERE is_active = TRUE;",
        explanation:
          "## 🧠 Approach\n\nFilter active brands.\n\n## 🔍 Explanation\n\n- Returns only active brands.\n- Simple boolean filtering.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query: "SELECT id, name FROM brands WHERE is_active;",
        explanation:
          "## 🧠 Approach\n\nUse shorthand condition.\n\n## 🔍 Explanation\n\n- Equivalent to `= TRUE`.",
      },
    ],
  },
  {
    code: "ECOMMERCE_007",
    approaches: [
      {
        approach_title: "Shipping default",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, customer_id, city, state, country FROM addresses WHERE address_type = 'shipping' AND is_default = TRUE;",
        explanation:
          "## 🧠 Approach\n\nFilter by type and default flag.\n\n## 🔍 Explanation\n\n- Combines two conditions.\n- Returns only default shipping addresses.",
      },
      {
        approach_title: "FILTER style",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, customer_id, city, state, country FROM addresses WHERE address_type = 'shipping' AND is_default;",
        explanation:
          "## 🧠 Approach\n\nUse boolean shorthand.\n\n## 🔍 Explanation\n\n- Cleaner syntax.\n- Same filtering logic.",
      },
    ],
  },
  {
    code: "ECOMMERCE_008",
    approaches: [
      {
        approach_title: "Mobile filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, customer_id, os, browser, last_seen_at FROM customer_devices WHERE device_type = 'mobile';",
        explanation:
          "## 🧠 Approach\n\nFilter mobile devices.\n\n## 🔍 Explanation\n\n- Straightforward equality filter.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, customer_id, os, browser, last_seen_at FROM customer_devices WHERE device_type IN ('mobile');",
        explanation:
          "## 🧠 Approach\n\nUse IN operator.\n\n## 🔍 Explanation\n\n- Useful when multiple device types are needed.",
      },
    ],
  },
  {
    code: "ECOMMERCE_009",
    approaches: [
      {
        approach_title: "Active coupons",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, code, discount_type, discount_value FROM coupons WHERE is_active = TRUE;",
        explanation:
          "## 🧠 Approach\n\nFilter active coupons.\n\n## 🔍 Explanation\n\n- `is_active = TRUE` ensures current coupons.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, code, discount_type, discount_value FROM coupons WHERE is_active;",
        explanation:
          "## 🧠 Approach\n\nUse shorthand boolean filter.\n\n## 🔍 Explanation\n\n- Equivalent syntax.",
      },
    ],
  },
  {
    code: "ECOMMERCE_010",
    approaches: [
      {
        approach_title: "Date filter",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, code, expires_at FROM coupons WHERE expires_at < '2026-01-01';",
        explanation:
          "## 🧠 Approach\n\nFilter coupons expired before a fixed date.\n\n## 🔍 Explanation\n\n- Direct comparison with date literal.\n- Works because `expires_at` is timestamp/date.",
      },
      {
        approach_title: "DATE cast",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, code, expires_at FROM coupons WHERE DATE(expires_at) < '2026-01-01';",
        explanation:
          "## 🧠 Approach\n\nCast timestamp to date before comparison.\n\n## 🔍 Explanation\n\n- Useful when ignoring time component.\n- Slightly less efficient due to function on column.",
      },
    ],
  },
  {
    code: "ECOMMERCE_011",
    approaches: [
      {
        approach_title: "Delivered filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, customer_id, order_number, order_date, total_amount FROM orders WHERE status = 'delivered';",
        explanation:
          "## 🧠 Approach\n\nFilter orders by delivered status.\n\n## 🔍 Explanation\n\n- `WHERE status = 'delivered'` keeps only delivered orders.\n- The selected columns match the required output exactly.\n- No ordering is needed because the question does not require ordered results.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, customer_id, order_number, order_date, total_amount FROM orders WHERE status IN ('delivered');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` for the delivered status condition.\n\n## 🔍 Explanation\n\n- `IN ('delivered')` is equivalent to `= 'delivered'` for one value.\n- This style becomes useful when multiple statuses need to be included.\n- For a single status, direct equality is simpler.",
      },
    ],
  },
  {
    code: "ECOMMERCE_012",
    approaches: [
      {
        approach_title: "Cancelled count",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS count FROM orders WHERE status = 'cancelled';",
        explanation:
          "## 🧠 Approach\n\nFilter cancelled orders first, then count them.\n\n## 🔍 Explanation\n\n- `WHERE status = 'cancelled'` keeps only cancelled orders.\n- `COUNT(*)` counts all matching rows.\n- The alias `count` matches the expected output column.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) FILTER (WHERE status = 'cancelled') AS count FROM orders;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to count cancelled orders.\n\n## 🔍 Explanation\n\n- `FILTER` applies the condition only inside the aggregate.\n- This returns the same count as filtering rows first.\n- It is useful when calculating multiple status counts in one query.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) AS count FROM orders;",
        explanation:
          "## 🧠 Approach\n\nConvert cancelled rows into `1` and all other rows into `0`, then sum.\n\n## 🔍 Explanation\n\n- Cancelled orders contribute `1`.\n- Non-cancelled orders contribute `0`.\n- `SUM(...)` gives the total cancelled order count.",
      },
    ],
  },
  {
    code: "ECOMMERCE_013",
    approaches: [
      {
        approach_title: "Completed count",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS count FROM payments WHERE payment_status = 'completed';",
        explanation:
          "## 🧠 Approach\n\nFilter completed payments first, then count them.\n\n## 🔍 Explanation\n\n- `WHERE payment_status = 'completed'` keeps only completed payments.\n- `COUNT(*)` counts the matching payment records.\n- The output column is aliased as `count`.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) FILTER (WHERE payment_status = 'completed') AS count FROM payments;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL's aggregate `FILTER` clause.\n\n## 🔍 Explanation\n\n- The table is scanned and only completed payments are counted inside the aggregate.\n- This is especially useful when counting completed, failed, pending, and refunded payments together.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT SUM(CASE WHEN payment_status = 'completed' THEN 1 ELSE 0 END) AS count FROM payments;",
        explanation:
          "## 🧠 Approach\n\nUse a conditional numeric flag for completed payments.\n\n## 🔍 Explanation\n\n- Completed payments return `1`.\n- Other payment statuses return `0`.\n- Summing those values gives the number of completed payments.",
      },
    ],
  },
  {
    code: "ECOMMERCE_014",
    approaches: [
      {
        approach_title: "Failed filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, order_id, paid_amount, failure_reason FROM payments WHERE payment_status = 'failed';",
        explanation:
          "## 🧠 Approach\n\nFilter payment records to only failed payments.\n\n## 🔍 Explanation\n\n- `payment_status = 'failed'` selects failed payment attempts.\n- The query returns payment id, order id, paid amount, and failure reason.\n- These columns match the expected result shape.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, order_id, paid_amount, failure_reason FROM payments WHERE payment_status IN ('failed');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` to filter failed payment records.\n\n## 🔍 Explanation\n\n- `IN ('failed')` gives the same result as equality here.\n- It is useful when the requirement expands to multiple failure-like statuses.\n- Direct equality remains clearer for this single value.",
      },
    ],
  },
  {
    code: "ECOMMERCE_015",
    approaches: [
      {
        approach_title: "Pending filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, order_id, warehouse_id, carrier_name, created_at FROM shipments WHERE shipment_status = 'pending';",
        explanation:
          "## 🧠 Approach\n\nFilter shipments to records that are still pending.\n\n## 🔍 Explanation\n\n- `WHERE shipment_status = 'pending'` keeps shipments not yet processed or shipped.\n- The selected columns provide shipment identity, order, warehouse, carrier, and creation time.\n- No sorting is required.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, order_id, warehouse_id, carrier_name, created_at FROM shipments WHERE shipment_status IN ('pending');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` for the shipment status condition.\n\n## 🔍 Explanation\n\n- `IN ('pending')` is equivalent to `= 'pending'` for one value.\n- It is helpful when multiple shipment statuses need to be included later.",
      },
    ],
  },
  {
    code: "ECOMMERCE_016",
    approaches: [
      {
        approach_title: "Requested returns",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, order_id, customer_id, reason, requested_at FROM returns WHERE return_status = 'requested';",
        explanation:
          "## 🧠 Approach\n\nFilter return records where the return is still requested.\n\n## 🔍 Explanation\n\n- `return_status = 'requested'` keeps returns that are waiting for review or processing.\n- The query returns the return id, order id, customer id, reason, and request timestamp.\n- The selected columns match the expected output.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, order_id, customer_id, reason, requested_at FROM returns WHERE return_status IN ('requested');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` to match requested return records.\n\n## 🔍 Explanation\n\n- `IN ('requested')` works the same as `= 'requested'` here.\n- This form is useful if several early-stage return statuses should be included later.",
      },
    ],
  },
  {
    code: "ECOMMERCE_017",
    approaches: [
      {
        approach_title: "Open tickets",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, customer_id, order_id, ticket_type, subject FROM support_tickets WHERE ticket_status = 'open';",
        explanation:
          "## 🧠 Approach\n\nFilter support tickets to currently open tickets.\n\n## 🔍 Explanation\n\n- `ticket_status = 'open'` keeps unresolved tickets.\n- The query returns ticket identity, customer, related order, ticket type, and subject.\n- This directly matches the required output columns.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, customer_id, order_id, ticket_type, subject FROM support_tickets WHERE ticket_status IN ('open');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` for the open ticket status.\n\n## 🔍 Explanation\n\n- `IN ('open')` returns the same rows as direct equality.\n- This style is useful if the question later includes multiple active statuses.",
      },
    ],
  },
  {
    code: "ECOMMERCE_018",
    approaches: [
      {
        approach_title: "Public filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, customer_id, name FROM wishlists WHERE is_public = TRUE;",
        explanation:
          "## 🧠 Approach\n\nFilter wishlists where the public flag is true.\n\n## 🔍 Explanation\n\n- `is_public = TRUE` keeps only public wishlists.\n- The selected columns return wishlist id, owner customer id, and wishlist name.\n- This is the clearest beginner-friendly boolean comparison.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query: "SELECT id, customer_id, name FROM wishlists WHERE is_public;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand.\n\n## 🔍 Explanation\n\n- `WHERE is_public` is equivalent to `WHERE is_public = TRUE`.\n- False and null values are excluded.\n- This is concise and commonly used with boolean columns.",
      },
      {
        approach_title: "IS TRUE",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, customer_id, name FROM wishlists WHERE is_public IS TRUE;",
        explanation:
          "## 🧠 Approach\n\nUse `IS TRUE` for an explicit boolean truth check.\n\n## 🔍 Explanation\n\n- `IS TRUE` includes only rows where `is_public` is exactly true.\n- It excludes false and null values.\n- This is useful when nullable booleans are possible.",
      },
    ],
  },
  {
    code: "ECOMMERCE_019",
    approaches: [
      {
        approach_title: "Active carts",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, customer_id, created_at, updated_at FROM carts WHERE cart_status = 'active';",
        explanation:
          "## 🧠 Approach\n\nFilter carts that are currently active.\n\n## 🔍 Explanation\n\n- `cart_status = 'active'` keeps carts still in progress.\n- The query returns cart id, customer id, creation time, and last update time.\n- No ordering is required by the question.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, customer_id, created_at, updated_at FROM carts WHERE cart_status IN ('active');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` to match active cart status.\n\n## 🔍 Explanation\n\n- `IN ('active')` is equivalent to `= 'active'` for one value.\n- This pattern is useful when several cart statuses need to be included.",
      },
    ],
  },
  {
    code: "ECOMMERCE_020",
    approaches: [
      {
        approach_title: "Approved reviews",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, product_id, customer_id, rating, created_at FROM reviews WHERE review_status = 'approved';",
        explanation:
          "## 🧠 Approach\n\nFilter reviews to only approved product reviews.\n\n## 🔍 Explanation\n\n- `review_status = 'approved'` keeps reviews that passed moderation.\n- The output includes review id, product id, customer id, rating, and creation time.\n- The selected columns match the expected result.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, product_id, customer_id, rating, created_at FROM reviews WHERE review_status IN ('approved');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` for the approved review status.\n\n## 🔍 Explanation\n\n- `IN ('approved')` returns the same rows as `= 'approved'`.\n- It is useful when filtering for several acceptable review statuses.\n- For this question, direct equality is simpler.",
      },
    ],
  },
  {
    code: "ECOMMERCE_021",
    approaches: [
      {
        approach_title: "COUNT all",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS count FROM warehouses;",
        explanation:
          "## 🧠 Approach\n\nCount every warehouse row.\n\n## 🔍 Explanation\n\n- `COUNT(*)` counts all rows in `warehouses`.\n- Since no filter is needed, this returns the total number of warehouses.\n- The alias `count` matches the expected output column.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query: "SELECT COUNT(id) AS count FROM warehouses;",
        explanation:
          "## 🧠 Approach\n\nCount non-null warehouse IDs.\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts only rows where `id` is not null.\n- If `id` is the primary key, this returns the same value as `COUNT(*)`.\n- `COUNT(*)` is preferred for total row counts.",
      },
    ],
  },
  {
    code: "ECOMMERCE_022",
    approaches: [
      {
        approach_title: "Active warehouses",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, name, city, state, country FROM warehouses WHERE is_active = TRUE;",
        explanation:
          "## 🧠 Approach\n\nFilter warehouses where the active flag is true.\n\n## 🔍 Explanation\n\n- `is_active = TRUE` keeps only active warehouses.\n- The query returns warehouse identity and location fields.\n- No ordering is required because the question does not specify sorted results.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, name, city, state, country FROM warehouses WHERE is_active;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand.\n\n## 🔍 Explanation\n\n- `WHERE is_active` is equivalent to `WHERE is_active = TRUE`.\n- False and null values are excluded.\n- This is concise, but the explicit comparison is clearer for beginners.",
      },
      {
        approach_title: "IS TRUE",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, name, city, state, country FROM warehouses WHERE is_active IS TRUE;",
        explanation:
          "## 🧠 Approach\n\nUse `IS TRUE` for an explicit boolean truth check.\n\n## 🔍 Explanation\n\n- `IS TRUE` includes rows where `is_active` is exactly true.\n- It excludes false and null values.\n- This is useful when boolean columns may be nullable.",
      },
    ],
  },
  {
    code: "ECOMMERCE_023",
    approaches: [
      {
        approach_title: "Below reorder",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, warehouse_id, product_id, variant_id, quantity_available, reorder_level FROM inventory WHERE quantity_available < reorder_level;",
        explanation:
          "## 🧠 Approach\n\nCompare available quantity with the reorder level.\n\n## 🔍 Explanation\n\n- `quantity_available < reorder_level` identifies inventory records that are below the reorder threshold.\n- This is a column-to-column comparison.\n- The selected columns show the inventory record, item, available quantity, and reorder level.",
      },
      {
        approach_title: "Difference check",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, warehouse_id, product_id, variant_id, quantity_available, reorder_level FROM inventory WHERE reorder_level - quantity_available > 0;",
        explanation:
          "## 🧠 Approach\n\nCalculate how far the inventory is below the reorder level.\n\n## 🔍 Explanation\n\n- `reorder_level - quantity_available > 0` means available stock is less than the reorder level.\n- It returns the same rows as `quantity_available < reorder_level`.\n- The direct comparison is simpler and more index-friendly.",
      },
    ],
  },
  {
    code: "ECOMMERCE_024",
    approaches: [
      {
        approach_title: "Reserved positive",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, warehouse_id, product_id, variant_id, quantity_reserved FROM inventory WHERE quantity_reserved > 0;",
        explanation:
          "## 🧠 Approach\n\nFilter inventory records where reserved quantity is greater than zero.\n\n## 🔍 Explanation\n\n- `quantity_reserved > 0` means some stock is already reserved for orders or operations.\n- The query returns the inventory id, warehouse, product, variant, and reserved quantity.\n- This directly matches the expected output.",
      },
      {
        approach_title: "Not zero",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, warehouse_id, product_id, variant_id, quantity_reserved FROM inventory WHERE quantity_reserved <> 0;",
        explanation:
          "## 🧠 Approach\n\nFilter inventory rows where reserved quantity is not zero.\n\n## 🔍 Explanation\n\n- If reserved quantity cannot be negative, `<> 0` is equivalent to `> 0`.\n- `> 0` is more precise because the question asks for quantity currently reserved.\n- Use the direct positive comparison for clarity.",
      },
    ],
  },
  {
    code: "ECOMMERCE_025",
    approaches: [
      {
        approach_title: "Stock in",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, warehouse_id, product_id, variant_id, quantity, created_at FROM inventory_movements WHERE movement_type = 'stock_in';",
        explanation:
          "## 🧠 Approach\n\nFilter inventory movements where stock was added.\n\n## 🔍 Explanation\n\n- `movement_type = 'stock_in'` selects stock addition records.\n- The query returns movement id, warehouse, product, variant, quantity, and timestamp.\n- This directly answers the question.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, warehouse_id, product_id, variant_id, quantity, created_at FROM inventory_movements WHERE movement_type IN ('stock_in');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` for the movement type filter.\n\n## 🔍 Explanation\n\n- `IN ('stock_in')` is equivalent to `= 'stock_in'` for one value.\n- It is useful when multiple stock addition movement types need to be included later.\n- For this question, equality is simpler.",
      },
    ],
  },
  {
    code: "ECOMMERCE_026",
    approaches: [
      {
        approach_title: "Free shipping",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, code, minimum_order_amount, expires_at FROM coupons WHERE discount_type = 'free_shipping';",
        explanation:
          "## 🧠 Approach\n\nFilter coupons by free-shipping discount type.\n\n## 🔍 Explanation\n\n- `discount_type = 'free_shipping'` keeps coupons that provide free shipping.\n- The selected columns return coupon id, code, minimum order amount, and expiry timestamp.\n- No ordering is required.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, code, minimum_order_amount, expires_at FROM coupons WHERE discount_type IN ('free_shipping');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` for the discount type condition.\n\n## 🔍 Explanation\n\n- `IN ('free_shipping')` returns the same rows as direct equality.\n- This form is useful if more coupon types are included later.\n- Direct equality is clearer for a single discount type.",
      },
    ],
  },
  {
    code: "ECOMMERCE_027",
    approaches: [
      {
        approach_title: "Priority IN",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, customer_id, order_id, ticket_type, priority, subject FROM support_tickets WHERE priority IN ('high', 'urgent');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` because two priority values are accepted.\n\n## 🔍 Explanation\n\n- `priority IN ('high', 'urgent')` keeps both high-priority and urgent tickets.\n- This is cleaner than writing multiple `OR` conditions.\n- The output includes ticket identity, customer, order, type, priority, and subject.",
      },
      {
        approach_title: "OR filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, customer_id, order_id, ticket_type, priority, subject FROM support_tickets WHERE priority = 'high' OR priority = 'urgent';",
        explanation:
          "## 🧠 Approach\n\nUse explicit `OR` conditions for each allowed priority.\n\n## 🔍 Explanation\n\n- The first condition keeps high-priority tickets.\n- The second condition keeps urgent tickets.\n- This is equivalent to `IN`, but `IN` is shorter and easier to extend.",
      },
    ],
  },
  {
    code: "ECOMMERCE_028",
    approaches: [
      {
        approach_title: "Requested refunds",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, payment_id, order_id, refund_amount, reason FROM refunds WHERE refund_status = 'requested';",
        explanation:
          "## 🧠 Approach\n\nFilter refunds that are still in requested status.\n\n## 🔍 Explanation\n\n- `refund_status = 'requested'` keeps refunds that have been requested but not yet completed or rejected.\n- The query returns refund identity, related payment/order, refund amount, and reason.\n- This directly matches the expected columns.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, payment_id, order_id, refund_amount, reason FROM refunds WHERE refund_status IN ('requested');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` for the requested refund status.\n\n## 🔍 Explanation\n\n- `IN ('requested')` is equivalent to `= 'requested'` here.\n- It becomes useful when filtering multiple refund statuses.\n- For one status, direct equality is simpler.",
      },
    ],
  },
  {
    code: "ECOMMERCE_029",
    approaches: [
      {
        approach_title: "Verified purchase",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, product_id, customer_id, rating, helpful_count FROM reviews WHERE is_verified_purchase = TRUE;",
        explanation:
          "## 🧠 Approach\n\nFilter reviews where the verified-purchase flag is true.\n\n## 🔍 Explanation\n\n- `is_verified_purchase = TRUE` keeps reviews linked to verified purchases.\n- The selected columns show the review, product, customer, rating, and helpful vote count.\n- This is the clearest boolean comparison.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, product_id, customer_id, rating, helpful_count FROM reviews WHERE is_verified_purchase;",
        explanation:
          "## 🧠 Approach\n\nUse the boolean column directly in `WHERE`.\n\n## 🔍 Explanation\n\n- In PostgreSQL, `WHERE is_verified_purchase` means the value is true.\n- It excludes false and null values.\n- This is concise and equivalent to `= TRUE`.",
      },
      {
        approach_title: "IS TRUE",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, product_id, customer_id, rating, helpful_count FROM reviews WHERE is_verified_purchase IS TRUE;",
        explanation:
          "## 🧠 Approach\n\nUse `IS TRUE` for explicit boolean filtering.\n\n## 🔍 Explanation\n\n- `IS TRUE` includes only reviews where the flag is exactly true.\n- It excludes false and null values.\n- This is useful if the boolean column can be nullable.",
      },
    ],
  },
  {
    code: "ECOMMERCE_030",
    approaches: [
      {
        approach_title: "Helpful threshold",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, product_id, customer_id, rating, helpful_count FROM reviews WHERE helpful_count >= 10;",
        explanation:
          "## 🧠 Approach\n\nFilter reviews with at least 10 helpful votes.\n\n## 🔍 Explanation\n\n- `helpful_count >= 10` includes reviews with 10 or more helpful votes.\n- The selected columns provide review id, product id, customer id, rating, and helpful count.\n- This directly matches the requirement.",
      },
      {
        approach_title: "Between lower bound",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, product_id, customer_id, rating, helpful_count FROM reviews WHERE helpful_count BETWEEN 10 AND 2147483647;",
        explanation:
          "## 🧠 Approach\n\nUse `BETWEEN` with a high upper bound to represent at least 10.\n\n## 🔍 Explanation\n\n- `BETWEEN 10 AND 2147483647` includes values from 10 upward within a typical integer range.\n- This is much less clear than `helpful_count >= 10`.\n- The direct comparison is preferred.",
      },
    ],
  },
  {
    code: "ECOMMERCE_031",
    approaches: [
      {
        approach_title: "SUM revenue",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT SUM(total_amount) AS total_revenue FROM orders;",
        explanation:
          "## 🧠 Approach\n\nAdd all order totals to calculate total revenue.\n\n## 🔍 Explanation\n\n- `SUM(total_amount)` adds the total amount from every order row.\n- This gives the platform's total order revenue.\n- The alias `total_revenue` matches the expected output column.",
      },
      {
        approach_title: "COALESCE sum",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COALESCE(SUM(total_amount), 0) AS total_revenue FROM orders;",
        explanation:
          "## 🧠 Approach\n\nReturn zero if there are no order amounts to sum.\n\n## 🔍 Explanation\n\n- `SUM(total_amount)` returns `NULL` if there are no rows or all values are null.\n- `COALESCE(..., 0)` converts that null into zero.\n- Use this only if the expected result should be zero instead of null for an empty dataset.",
      },
    ],
  },
  {
    code: "ECOMMERCE_032",
    approaches: [
      {
        approach_title: "AVG order value",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ROUND(AVG(total_amount), 2) AS avg_order_value FROM orders;",
        explanation:
          "## 🧠 Approach\n\nCalculate the average order amount and round it to two decimals.\n\n## 🔍 Explanation\n\n- `AVG(total_amount)` calculates the mean order total.\n- `ROUND(..., 2)` formats the result to two decimal places.\n- The alias `avg_order_value` matches the expected output column.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ROUND(SUM(total_amount) / NULLIF(COUNT(*), 0), 2) AS avg_order_value FROM orders;",
        explanation:
          "## 🧠 Approach\n\nCalculate average manually using total revenue divided by order count.\n\n## 🔍 Explanation\n\n- `SUM(total_amount)` gives total order value.\n- `COUNT(*)` gives number of orders.\n- `NULLIF(COUNT(*), 0)` prevents division by zero if the table is empty.\n- `AVG(total_amount)` is simpler and preferred.",
      },
    ],
  },
  {
    code: "ECOMMERCE_033",
    approaches: [
      {
        approach_title: "SUM shipping",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT SUM(shipping_fee) AS total_shipping_fee FROM orders;",
        explanation:
          "## 🧠 Approach\n\nAdd all shipping fees from orders.\n\n## 🔍 Explanation\n\n- `SUM(shipping_fee)` totals shipping fees across all orders.\n- `SUM` ignores null values by default.\n- The alias `total_shipping_fee` matches the expected output.",
      },
      {
        approach_title: "COALESCE sum",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COALESCE(SUM(shipping_fee), 0) AS total_shipping_fee FROM orders;",
        explanation:
          "## 🧠 Approach\n\nReturn zero if there is no shipping fee value to sum.\n\n## 🔍 Explanation\n\n- If no rows exist, `SUM(shipping_fee)` returns `NULL`.\n- `COALESCE(..., 0)` replaces that null with zero.\n- This is useful for reporting, but only if zero is accepted by the expected output.",
      },
    ],
  },
  {
    code: "ECOMMERCE_034",
    approaches: [
      {
        approach_title: "SUM refunds",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT SUM(refund_amount) AS total_refund_amount FROM refunds;",
        explanation:
          "## 🧠 Approach\n\nAdd all refund amounts.\n\n## 🔍 Explanation\n\n- `SUM(refund_amount)` calculates the total refund amount across all refunds.\n- Null refund amounts are ignored by `SUM`.\n- The alias `total_refund_amount` matches the required output.",
      },
      {
        approach_title: "COALESCE sum",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COALESCE(SUM(refund_amount), 0) AS total_refund_amount FROM refunds;",
        explanation:
          "## 🧠 Approach\n\nConvert a null sum into zero.\n\n## 🔍 Explanation\n\n- `SUM(refund_amount)` can return `NULL` for an empty table.\n- `COALESCE` changes that to zero.\n- This is useful in dashboards but may differ from the expected result if null is required.",
      },
    ],
  },
  {
    code: "ECOMMERCE_035",
    approaches: [
      {
        approach_title: "AVG price",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT ROUND(AVG(price), 2) AS avg_price FROM products;",
        explanation:
          "## 🧠 Approach\n\nCalculate average product price and round it.\n\n## 🔍 Explanation\n\n- `AVG(price)` calculates the mean price across products.\n- `ROUND(..., 2)` returns the value with two decimal places.\n- The alias `avg_price` matches the expected output column.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ROUND(SUM(price) / NULLIF(COUNT(*), 0), 2) AS avg_price FROM products;",
        explanation:
          "## 🧠 Approach\n\nCalculate average price manually from sum divided by count.\n\n## 🔍 Explanation\n\n- `SUM(price)` totals product prices.\n- `COUNT(*)` counts product rows.\n- `NULLIF` prevents division by zero.\n- `AVG(price)` is clearer and handles nulls more naturally.",
      },
    ],
  },
  {
    code: "ECOMMERCE_036",
    approaches: [
      {
        approach_title: "SUM available",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT SUM(quantity_available) AS total_available_quantity FROM inventory;",
        explanation:
          "## 🧠 Approach\n\nAdd available inventory quantity across all records.\n\n## 🔍 Explanation\n\n- `SUM(quantity_available)` totals stock available across warehouses and products.\n- This answers total available inventory quantity.\n- The alias `total_available_quantity` matches the expected result.",
      },
      {
        approach_title: "COALESCE sum",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COALESCE(SUM(quantity_available), 0) AS total_available_quantity FROM inventory;",
        explanation:
          "## 🧠 Approach\n\nReturn zero if no available inventory quantity exists.\n\n## 🔍 Explanation\n\n- `SUM(quantity_available)` returns `NULL` if there are no rows.\n- `COALESCE(..., 0)` makes the output dashboard-friendly.\n- Only use this if zero is valid for the expected answer.",
      },
    ],
  },
  {
    code: "ECOMMERCE_037",
    approaches: [
      {
        approach_title: "AVG seller rating",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ROUND(AVG(rating), 2) AS avg_seller_rating FROM sellers;",
        explanation:
          "## 🧠 Approach\n\nCalculate the average rating across all sellers.\n\n## 🔍 Explanation\n\n- `AVG(rating)` computes the mean seller rating.\n- `ROUND(..., 2)` formats the result to two decimal places.\n- The alias `avg_seller_rating` matches the expected output.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ROUND(SUM(rating) / NULLIF(COUNT(rating), 0), 2) AS avg_seller_rating FROM sellers;",
        explanation:
          "## 🧠 Approach\n\nManually calculate average seller rating.\n\n## 🔍 Explanation\n\n- `SUM(rating)` adds all non-null ratings.\n- `COUNT(rating)` counts non-null rating values.\n- `NULLIF` prevents division by zero.\n- This mimics `AVG(rating)`, but `AVG` is simpler and more readable.",
      },
    ],
  },
  {
    code: "ECOMMERCE_038",
    approaches: [
      {
        approach_title: "COUNT views",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS count FROM product_views;",
        explanation:
          "## 🧠 Approach\n\nCount all product view events.\n\n## 🔍 Explanation\n\n- Each row in `product_views` represents one product view event.\n- `COUNT(*)` counts every event row.\n- The alias `count` matches the expected output.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query: "SELECT COUNT(id) AS count FROM product_views;",
        explanation:
          "## 🧠 Approach\n\nCount non-null product view IDs.\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts only rows where `id` is not null.\n- If `id` is always populated, it matches `COUNT(*)`.\n- `COUNT(*)` is preferred for counting event rows.",
      },
    ],
  },
  {
    code: "ECOMMERCE_039",
    approaches: [
      {
        approach_title: "Clicked searches",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS count FROM search_queries WHERE clicked_product_id IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nCount search queries that resulted in a clicked product.\n\n## 🔍 Explanation\n\n- `clicked_product_id IS NOT NULL` identifies search rows where a product was clicked.\n- `COUNT(*)` counts those successful click-through search records.\n- The alias `count` matches the expected output.",
      },
      {
        approach_title: "COUNT clicked id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query: "SELECT COUNT(clicked_product_id) AS count FROM search_queries;",
        explanation:
          "## 🧠 Approach\n\nCount non-null clicked product IDs directly.\n\n## 🔍 Explanation\n\n- `COUNT(clicked_product_id)` counts only non-null clicked product ids.\n- This gives the number of searches where a product was clicked.\n- It is compact, but the explicit `WHERE clicked_product_id IS NOT NULL` is clearer for learners.",
      },
    ],
  },
  {
    code: "ECOMMERCE_040",
    approaches: [
      {
        approach_title: "Android orders",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, customer_id, order_number, order_date, total_amount FROM orders WHERE order_channel = 'android';",
        explanation:
          "## 🧠 Approach\n\nFilter orders placed through the Android app.\n\n## 🔍 Explanation\n\n- `order_channel = 'android'` keeps only Android-channel orders.\n- The selected columns return order identity, customer, order number, order date, and total amount.\n- No sorting is required by the question.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, customer_id, order_number, order_date, total_amount FROM orders WHERE order_channel IN ('android');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` for the order channel filter.\n\n## 🔍 Explanation\n\n- `IN ('android')` returns the same rows as direct equality.\n- This pattern is useful when filtering for multiple app channels.\n- Direct equality is simpler for one channel.",
      },
    ],
  },
  {
    code: "ECOMMERCE_041",
    approaches: [
      {
        approach_title: "GROUP orders",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id;",
        explanation:
          "## 🧠 Approach\n\nGroup orders by customer and count each customer's orders.\n\n## 🔍 Explanation\n\n- `GROUP BY customer_id` creates one group per customer.\n- `COUNT(*)` counts all orders inside each customer group.\n- The result shows how many orders each customer placed.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT customer_id, COUNT(id) AS order_count FROM orders GROUP BY customer_id;",
        explanation:
          "## 🧠 Approach\n\nCount non-null order IDs per customer.\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts order rows where `id` is not null.\n- If `id` is always present, this matches `COUNT(*)`.\n- `COUNT(*)` is preferred when counting rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT customer_id, order_count FROM (SELECT customer_id, COUNT(*) OVER (PARTITION BY customer_id) AS order_count FROM orders) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window function to count orders per customer, then deduplicate.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY customer_id)` calculates the customer's order count on every order row.\n- Because each order row remains, `DISTINCT` is needed to return one row per customer.\n- This is valid, but `GROUP BY` is simpler for this result shape.",
      },
    ],
  },
  {
    code: "ECOMMERCE_042",
    approaches: [
      {
        approach_title: "GROUP products",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT category_id, COUNT(*) AS product_count FROM products GROUP BY category_id;",
        explanation:
          "## 🧠 Approach\n\nGroup products by category and count products in each category.\n\n## 🔍 Explanation\n\n- `GROUP BY category_id` creates one group per category.\n- `COUNT(*)` counts all products in each category group.\n- The result shows product count per category.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT category_id, COUNT(id) AS product_count FROM products GROUP BY category_id;",
        explanation:
          "## 🧠 Approach\n\nCount non-null product IDs per category.\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts products where `id` is not null.\n- If `id` is the primary key, it should match `COUNT(*)`.\n- `COUNT(*)` is clearer for counting rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT category_id, product_count FROM (SELECT category_id, COUNT(*) OVER (PARTITION BY category_id) AS product_count FROM products) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window function to calculate category product counts.\n\n## 🔍 Explanation\n\n- The window count calculates the product count for each product's category.\n- `DISTINCT` collapses repeated rows into one row per category.\n- `GROUP BY` remains the simplest approach.",
      },
    ],
  },
  {
    code: "ECOMMERCE_043",
    approaches: [
      {
        approach_title: "GROUP inventory",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT warehouse_id, SUM(quantity_available) AS total_quantity FROM inventory GROUP BY warehouse_id;",
        explanation:
          "## 🧠 Approach\n\nGroup inventory by warehouse and sum available quantity.\n\n## 🔍 Explanation\n\n- `GROUP BY warehouse_id` creates one result row per warehouse.\n- `SUM(quantity_available)` totals all available stock in that warehouse.\n- The alias `total_quantity` matches the expected output.",
      },
      {
        approach_title: "COALESCE sum",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT warehouse_id, COALESCE(SUM(quantity_available), 0) AS total_quantity FROM inventory GROUP BY warehouse_id;",
        explanation:
          "## 🧠 Approach\n\nConvert null sums to zero per warehouse.\n\n## 🔍 Explanation\n\n- `SUM(quantity_available)` can return null if all values in a group are null.\n- `COALESCE(..., 0)` turns that into zero.\n- Use this only if the expected result treats missing quantities as zero.",
      },
      {
        approach_title: "Window sum",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT warehouse_id, total_quantity FROM (SELECT warehouse_id, SUM(quantity_available) OVER (PARTITION BY warehouse_id) AS total_quantity FROM inventory) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window function to calculate total quantity per warehouse.\n\n## 🔍 Explanation\n\n- `SUM(...) OVER (PARTITION BY warehouse_id)` calculates the warehouse total on each inventory row.\n- `DISTINCT` is needed because every inventory row remains in the result.\n- `GROUP BY` is cleaner for returning one row per warehouse.",
      },
    ],
  },
  {
    code: "ECOMMERCE_044",
    approaches: [
      {
        approach_title: "GROUP revenue",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT customer_id, SUM(total_amount) AS total_revenue FROM orders GROUP BY customer_id;",
        explanation:
          "## 🧠 Approach\n\nGroup orders by customer and sum their order amounts.\n\n## 🔍 Explanation\n\n- `GROUP BY customer_id` creates one row per customer.\n- `SUM(total_amount)` adds all order values for that customer.\n- This returns customer-level revenue.",
      },
      {
        approach_title: "COALESCE sum",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT customer_id, COALESCE(SUM(total_amount), 0) AS total_revenue FROM orders GROUP BY customer_id;",
        explanation:
          "## 🧠 Approach\n\nUse `COALESCE` to convert null totals to zero.\n\n## 🔍 Explanation\n\n- If a customer's grouped order amounts were all null, `SUM` would return null.\n- `COALESCE` changes null to zero.\n- Use only when zero is the desired reporting behavior.",
      },
      {
        approach_title: "Window sum",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT customer_id, total_revenue FROM (SELECT customer_id, SUM(total_amount) OVER (PARTITION BY customer_id) AS total_revenue FROM orders) x;",
        explanation:
          "## 🧠 Approach\n\nCalculate customer revenue using a window sum.\n\n## 🔍 Explanation\n\n- The window sum calculates total revenue for each customer's order rows.\n- `DISTINCT` reduces repeated customer rows to one row per customer.\n- This is valid, but grouped aggregation is better for this output.",
      },
    ],
  },
  {
    code: "ECOMMERCE_045",
    approaches: [
      {
        approach_title: "GROUP AVG",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT customer_id, ROUND(AVG(total_amount), 2) AS avg_order_value FROM orders GROUP BY customer_id;",
        explanation:
          "## 🧠 Approach\n\nGroup orders by customer and calculate their average order value.\n\n## 🔍 Explanation\n\n- `GROUP BY customer_id` creates one group per customer.\n- `AVG(total_amount)` computes the mean order amount for each customer.\n- `ROUND(..., 2)` formats the average to two decimals.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT customer_id, ROUND(SUM(total_amount) / NULLIF(COUNT(*), 0), 2) AS avg_order_value FROM orders GROUP BY customer_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate average order value manually from sum divided by order count.\n\n## 🔍 Explanation\n\n- `SUM(total_amount)` gives total customer spend.\n- `COUNT(*)` gives number of orders.\n- `NULLIF` protects against division by zero.\n- `AVG(total_amount)` is simpler and handles nulls correctly.",
      },
      {
        approach_title: "Window AVG",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT customer_id, avg_order_value FROM (SELECT customer_id, ROUND(AVG(total_amount) OVER (PARTITION BY customer_id), 2) AS avg_order_value FROM orders) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window average per customer, then deduplicate customers.\n\n## 🔍 Explanation\n\n- `AVG(...) OVER (PARTITION BY customer_id)` calculates average order value on every order row.\n- `DISTINCT` returns one row per customer.\n- This is valid but less direct than `GROUP BY`.",
      },
    ],
  },
  {
    code: "ECOMMERCE_046",
    approaches: [
      {
        approach_title: "GROUP quantity",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT product_id, SUM(quantity) AS total_quantity_sold FROM order_items GROUP BY product_id;",
        explanation:
          "## 🧠 Approach\n\nGroup order items by product and sum sold quantities.\n\n## 🔍 Explanation\n\n- `GROUP BY product_id` creates one result row per product.\n- `SUM(quantity)` totals units sold across all order items for that product.\n- This returns product-level quantity sold.",
      },
      {
        approach_title: "COALESCE sum",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT product_id, COALESCE(SUM(quantity), 0) AS total_quantity_sold FROM order_items GROUP BY product_id;",
        explanation:
          "## 🧠 Approach\n\nConvert null quantity totals into zero.\n\n## 🔍 Explanation\n\n- `SUM(quantity)` returns null if all quantities in a group are null.\n- `COALESCE(..., 0)` replaces null with zero.\n- Use only when zero should represent missing quantity values.",
      },
      {
        approach_title: "Window sum",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT product_id, total_quantity_sold FROM (SELECT product_id, SUM(quantity) OVER (PARTITION BY product_id) AS total_quantity_sold FROM order_items) x;",
        explanation:
          "## 🧠 Approach\n\nCalculate quantity sold using a window sum.\n\n## 🔍 Explanation\n\n- The window sum calculates total sold quantity for each product row.\n- `DISTINCT` is needed to return one row per product.\n- `GROUP BY` is preferred for this result shape.",
      },
    ],
  },
  {
    code: "ECOMMERCE_047",
    approaches: [
      {
        approach_title: "GROUP product revenue",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT product_id, SUM(total_price) AS total_revenue FROM order_items GROUP BY product_id;",
        explanation:
          "## 🧠 Approach\n\nGroup order items by product and sum item revenue.\n\n## 🔍 Explanation\n\n- `GROUP BY product_id` creates one row per product.\n- `SUM(total_price)` totals all revenue from order items for that product.\n- This returns product-level revenue.",
      },
      {
        approach_title: "Quantity times price",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT product_id, SUM(total_price) AS total_revenue FROM order_items GROUP BY product_id HAVING SUM(total_price) >= 0;",
        explanation:
          "## 🧠 Approach\n\nSum stored line revenue and drop groups that have no positive total.\n\n## 🔍 Explanation\n\n- `SUM(total_price)` is the stored line revenue.\n- `HAVING SUM(total_price) >= 0` keeps every product group, because line totals are never negative.\n- This matches a direct `GROUP BY` on `total_price`.",
      },
      {
        approach_title: "Window sum",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT product_id, total_revenue FROM (SELECT product_id, SUM(total_price) OVER (PARTITION BY product_id) AS total_revenue FROM order_items) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window sum to calculate product revenue.\n\n## 🔍 Explanation\n\n- The window sum calculates total revenue for each product across item rows.\n- Since each order item remains, `DISTINCT` is required.\n- `GROUP BY` is simpler and more efficient here.",
      },
    ],
  },
  {
    code: "ECOMMERCE_048",
    approaches: [
      {
        approach_title: "GROUP reviews",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT product_id, COUNT(*) AS review_count FROM reviews GROUP BY product_id;",
        explanation:
          "## 🧠 Approach\n\nGroup reviews by product and count reviews in each product group.\n\n## 🔍 Explanation\n\n- `GROUP BY product_id` creates one row per reviewed product.\n- `COUNT(*)` counts all reviews for that product.\n- The alias `review_count` matches the expected output.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT product_id, COUNT(id) AS review_count FROM reviews GROUP BY product_id;",
        explanation:
          "## 🧠 Approach\n\nCount non-null review IDs per product.\n\n## 🔍 Explanation\n\n- If `id` is always present, this equals `COUNT(*)`.\n- `COUNT(*)` is clearer because the goal is to count review rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT product_id, review_count FROM (SELECT product_id, COUNT(*) OVER (PARTITION BY product_id) AS review_count FROM reviews) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate reviews per product.\n\n## 🔍 Explanation\n\n- The window count places each product's review count on every review row.\n- `DISTINCT` collapses repeated product rows.\n- `GROUP BY` is the better fit for one row per product.",
      },
    ],
  },
  {
    code: "ECOMMERCE_049",
    approaches: [
      {
        approach_title: "GROUP status",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT payment_status, COUNT(*) AS payment_count FROM payments GROUP BY payment_status;",
        explanation:
          "## 🧠 Approach\n\nGroup payments by status and count each status group.\n\n## 🔍 Explanation\n\n- `GROUP BY payment_status` creates one group per payment status.\n- `COUNT(*)` counts payments in each status.\n- This returns the payment distribution by status.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT payment_status, COUNT(id) AS payment_count FROM payments GROUP BY payment_status;",
        explanation:
          "## 🧠 Approach\n\nCount non-null payment IDs per status.\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts payment records with non-null ids.\n- If `id` is always populated, this equals `COUNT(*)`.\n- `COUNT(*)` is preferred for counting rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT payment_status, payment_count FROM (SELECT payment_status, COUNT(*) OVER (PARTITION BY payment_status) AS payment_count FROM payments) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate payment counts by status.\n\n## 🔍 Explanation\n\n- The window count calculates each status count on every payment row.\n- `DISTINCT` is required to return one row per status.\n- Grouped aggregation is cleaner.",
      },
    ],
  },
  {
    code: "ECOMMERCE_050",
    approaches: [
      {
        approach_title: "GROUP order status",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT status, COUNT(*) AS order_count FROM orders GROUP BY status;",
        explanation:
          "## 🧠 Approach\n\nGroup orders by status and count orders in each status group.\n\n## 🔍 Explanation\n\n- `GROUP BY status` creates one row per order status.\n- `COUNT(*)` counts orders in each status.\n- This returns the order distribution by status.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT status, COUNT(id) AS order_count FROM orders GROUP BY status;",
        explanation:
          "## 🧠 Approach\n\nCount non-null order IDs per order status.\n\n## 🔍 Explanation\n\n- If `id` is always non-null, this matches `COUNT(*)`.\n- `COUNT(*)` is clearer and better for row counts.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT status, order_count FROM (SELECT status, COUNT(*) OVER (PARTITION BY status) AS order_count FROM orders) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate order count per status.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY status)` computes each status total on every order row.\n- `DISTINCT` collapses repeated rows.\n- `GROUP BY` is the most direct approach.",
      },
    ],
  },
  {
    code: "ECOMMERCE_051",
    approaches: [
      {
        approach_title: "GROUP coupons",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT coupon_id, COUNT(*) AS usage_count FROM orders WHERE coupon_id IS NOT NULL GROUP BY coupon_id;",
        explanation:
          "## 🧠 Approach\n\nFilter orders that used a coupon, then count usage per coupon.\n\n## 🔍 Explanation\n\n- `coupon_id IS NOT NULL` keeps only orders where a coupon was applied.\n- `GROUP BY coupon_id` creates one group per coupon.\n- `COUNT(*)` counts how many orders used each coupon.",
      },
      {
        approach_title: "COUNT coupon id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT coupon_id, COUNT(coupon_id) AS usage_count FROM orders WHERE coupon_id IS NOT NULL GROUP BY coupon_id;",
        explanation:
          "## 🧠 Approach\n\nCount non-null coupon ids after filtering coupon orders.\n\n## 🔍 Explanation\n\n- Since the query already filters `coupon_id IS NOT NULL`, `COUNT(coupon_id)` matches `COUNT(*)`.\n- `COUNT(*)` is still preferred because it clearly counts order rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT coupon_id, usage_count FROM (SELECT coupon_id, COUNT(*) OVER (PARTITION BY coupon_id) AS usage_count FROM orders WHERE coupon_id IS NOT NULL) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count per coupon, then deduplicate.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY coupon_id)` calculates coupon usage count on every matching order row.\n- `DISTINCT` collapses repeated coupon rows.\n- This works, but `GROUP BY` is simpler for one row per coupon.",
      },
    ],
  },
  {
    code: "ECOMMERCE_052",
    approaches: [
      {
        approach_title: "GROUP carts",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT cart_id, COUNT(*) AS item_count FROM cart_items GROUP BY cart_id;",
        explanation:
          "## 🧠 Approach\n\nGroup cart item rows by cart and count items in each cart.\n\n## 🔍 Explanation\n\n- `GROUP BY cart_id` creates one result row per cart.\n- `COUNT(*)` counts item rows inside each cart.\n- The result shows how many cart item records each cart contains.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT cart_id, COUNT(id) AS item_count FROM cart_items GROUP BY cart_id;",
        explanation:
          "## 🧠 Approach\n\nCount non-null cart item ids per cart.\n\n## 🔍 Explanation\n\n- If `id` is always present, `COUNT(id)` matches `COUNT(*)`.\n- `COUNT(*)` is clearer because the question asks for number of item rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT cart_id, item_count FROM (SELECT cart_id, COUNT(*) OVER (PARTITION BY cart_id) AS item_count FROM cart_items) x;",
        explanation:
          "## 🧠 Approach\n\nCalculate item count per cart with a window function.\n\n## 🔍 Explanation\n\n- The window count places each cart's item count on every cart item row.\n- `DISTINCT` is needed to return one row per cart.\n- `GROUP BY` is more direct and efficient here.",
      },
    ],
  },
  {
    code: "ECOMMERCE_053",
    approaches: [
      {
        approach_title: "GROUP wishlists",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT wishlist_id, COUNT(*) AS item_count FROM wishlist_items GROUP BY wishlist_id;",
        explanation:
          "## 🧠 Approach\n\nGroup wishlist items by wishlist and count saved products.\n\n## 🔍 Explanation\n\n- `GROUP BY wishlist_id` creates one row per wishlist.\n- `COUNT(*)` counts saved product rows in that wishlist.\n- The alias `item_count` matches the expected output.",
      },
      {
        approach_title: "COUNT product",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT wishlist_id, COUNT(product_id) AS item_count FROM wishlist_items GROUP BY wishlist_id;",
        explanation:
          "## 🧠 Approach\n\nCount non-null product ids per wishlist.\n\n## 🔍 Explanation\n\n- `COUNT(product_id)` counts saved product references.\n- If `product_id` is always populated, this matches `COUNT(*)`.\n- `COUNT(*)` is preferred for counting wishlist item rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT wishlist_id, item_count FROM (SELECT wishlist_id, COUNT(*) OVER (PARTITION BY wishlist_id) AS item_count FROM wishlist_items) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count per wishlist and remove duplicates.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY wishlist_id)` calculates the item count for each wishlist.\n- Since every item row remains, `DISTINCT` returns one row per wishlist.\n- `GROUP BY` is the better fit for this output.",
      },
    ],
  },
  {
    code: "ECOMMERCE_054",
    approaches: [
      {
        approach_title: "GROUP warehouses",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT warehouse_id, COUNT(*) AS shipment_count FROM shipments GROUP BY warehouse_id;",
        explanation:
          "## 🧠 Approach\n\nGroup shipments by warehouse and count shipments processed from each warehouse.\n\n## 🔍 Explanation\n\n- `GROUP BY warehouse_id` creates one group per warehouse.\n- `COUNT(*)` counts shipment records in each group.\n- This returns shipment volume per warehouse.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT warehouse_id, COUNT(id) AS shipment_count FROM shipments GROUP BY warehouse_id;",
        explanation:
          "## 🧠 Approach\n\nCount non-null shipment ids per warehouse.\n\n## 🔍 Explanation\n\n- `COUNT(id)` matches `COUNT(*)` if shipment ids are always present.\n- `COUNT(*)` is clearer for counting rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT warehouse_id, shipment_count FROM (SELECT warehouse_id, COUNT(*) OVER (PARTITION BY warehouse_id) AS shipment_count FROM shipments) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate shipments per warehouse.\n\n## 🔍 Explanation\n\n- The window count computes the warehouse shipment count on every shipment row.\n- `DISTINCT` is needed to return one row per warehouse.\n- Grouped aggregation is simpler.",
      },
    ],
  },
  {
    code: "ECOMMERCE_055",
    approaches: [
      {
        approach_title: "GROUP returns",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT customer_id, COUNT(*) AS return_count FROM returns GROUP BY customer_id;",
        explanation:
          "## 🧠 Approach\n\nGroup returns by customer and count returns initiated by each customer.\n\n## 🔍 Explanation\n\n- `GROUP BY customer_id` creates one row per customer.\n- `COUNT(*)` counts return records for that customer.\n- This gives customer-level return count.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT customer_id, COUNT(id) AS return_count FROM returns GROUP BY customer_id;",
        explanation:
          "## 🧠 Approach\n\nCount non-null return ids per customer.\n\n## 🔍 Explanation\n\n- If `id` is always present, this matches `COUNT(*)`.\n- `COUNT(*)` is preferred for counting return rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT customer_id, return_count FROM (SELECT customer_id, COUNT(*) OVER (PARTITION BY customer_id) AS return_count FROM returns) x;",
        explanation:
          "## 🧠 Approach\n\nCalculate return count per customer with a window function.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY customer_id)` calculates the customer return count on every return row.\n- `DISTINCT` collapses repeated customer rows.\n- `GROUP BY` is the most direct option.",
      },
    ],
  },
  {
    code: "ECOMMERCE_056",
    approaches: [
      {
        approach_title: "GROUP refund amount",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT order_id, SUM(refund_amount) AS total_refund FROM refunds GROUP BY order_id;",
        explanation:
          "## 🧠 Approach\n\nGroup refunds by order and sum refund amount for each order.\n\n## 🔍 Explanation\n\n- `GROUP BY order_id` creates one row per refunded order.\n- `SUM(refund_amount)` adds all refund amounts for that order.\n- This handles orders with multiple refund records.",
      },
      {
        approach_title: "COALESCE sum",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT order_id, COALESCE(SUM(refund_amount), 0) AS total_refund FROM refunds GROUP BY order_id;",
        explanation:
          "## 🧠 Approach\n\nConvert null refund totals into zero.\n\n## 🔍 Explanation\n\n- `SUM(refund_amount)` can return null if all refund amounts in a group are null.\n- `COALESCE(..., 0)` changes that to zero.\n- Use only if the expected output treats missing refund amounts as zero.",
      },
      {
        approach_title: "Window sum",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT order_id, total_refund FROM (SELECT order_id, SUM(refund_amount) OVER (PARTITION BY order_id) AS total_refund FROM refunds) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window sum to calculate total refund per order.\n\n## 🔍 Explanation\n\n- The window sum calculates each order's refund total on every refund row.\n- `DISTINCT` returns one row per order.\n- `GROUP BY` is clearer for this result shape.",
      },
    ],
  },
  {
    code: "ECOMMERCE_057",
    approaches: [
      {
        approach_title: "GROUP views",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT product_id, COUNT(*) AS view_count FROM product_views GROUP BY product_id;",
        explanation:
          "## 🧠 Approach\n\nGroup product view events by product and count views.\n\n## 🔍 Explanation\n\n- `GROUP BY product_id` creates one row per viewed product.\n- `COUNT(*)` counts all view events for that product.\n- This gives product-level view count.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT product_id, COUNT(id) AS view_count FROM product_views GROUP BY product_id;",
        explanation:
          "## 🧠 Approach\n\nCount non-null view event ids per product.\n\n## 🔍 Explanation\n\n- If `id` is always present, this equals `COUNT(*)`.\n- `COUNT(*)` is preferred because each row is a view event.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT product_id, view_count FROM (SELECT product_id, COUNT(*) OVER (PARTITION BY product_id) AS view_count FROM product_views) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count per product and deduplicate.\n\n## 🔍 Explanation\n\n- The window count places product view count on every view row.\n- `DISTINCT` collapses repeated rows.\n- `GROUP BY` is simpler and more efficient.",
      },
    ],
  },
  {
    code: "ECOMMERCE_058",
    approaches: [
      {
        approach_title: "GROUP searches",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT customer_id, COUNT(*) AS search_count FROM search_queries WHERE customer_id IS NOT NULL GROUP BY customer_id;",
        explanation:
          "## 🧠 Approach\n\nFilter searches linked to customers, then count searches per customer.\n\n## 🔍 Explanation\n\n- `customer_id IS NOT NULL` removes anonymous or unlinked searches.\n- `GROUP BY customer_id` creates one row per customer.\n- `COUNT(*)` counts search query rows for each customer.",
      },
      {
        approach_title: "COUNT customer id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT customer_id, COUNT(customer_id) AS search_count FROM search_queries WHERE customer_id IS NOT NULL GROUP BY customer_id;",
        explanation:
          "## 🧠 Approach\n\nCount non-null customer ids after filtering linked searches.\n\n## 🔍 Explanation\n\n- Since `customer_id IS NOT NULL` is already applied, `COUNT(customer_id)` matches `COUNT(*)`.\n- `COUNT(*)` is clearer because the goal is counting search rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT customer_id, search_count FROM (SELECT customer_id, COUNT(*) OVER (PARTITION BY customer_id) AS search_count FROM search_queries WHERE customer_id IS NOT NULL) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate searches per customer.\n\n## 🔍 Explanation\n\n- The window count calculates each customer's search count on every search row.\n- `DISTINCT` returns one row per customer.\n- Grouped aggregation is the better fit.",
      },
    ],
  },
  {
    code: "ECOMMERCE_059",
    approaches: [
      {
        approach_title: "GROUP ticket type",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ticket_type, COUNT(*) AS ticket_count FROM support_tickets GROUP BY ticket_type;",
        explanation:
          "## 🧠 Approach\n\nGroup support tickets by ticket type and count each type.\n\n## 🔍 Explanation\n\n- `GROUP BY ticket_type` creates one row per ticket type.\n- `COUNT(*)` counts tickets in each type.\n- This returns ticket volume by type.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ticket_type, COUNT(id) AS ticket_count FROM support_tickets GROUP BY ticket_type;",
        explanation:
          "## 🧠 Approach\n\nCount non-null support ticket ids per type.\n\n## 🔍 Explanation\n\n- If `id` is always present, this matches `COUNT(*)`.\n- `COUNT(*)` is clearer for counting rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT ticket_type, ticket_count FROM (SELECT ticket_type, COUNT(*) OVER (PARTITION BY ticket_type) AS ticket_count FROM support_tickets) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count for ticket count by type.\n\n## 🔍 Explanation\n\n- The window count calculates each ticket type's count on every ticket row.\n- `DISTINCT` collapses repeated ticket type rows.\n- `GROUP BY` is simpler.",
      },
    ],
  },
  {
    code: "ECOMMERCE_060",
    approaches: [
      {
        approach_title: "GROUP messages",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ticket_id, COUNT(*) AS message_count FROM support_messages GROUP BY ticket_id;",
        explanation:
          "## 🧠 Approach\n\nGroup support messages by ticket and count messages exchanged per ticket.\n\n## 🔍 Explanation\n\n- `GROUP BY ticket_id` creates one row per support ticket.\n- `COUNT(*)` counts all support message rows for that ticket.\n- This gives message volume per ticket.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ticket_id, COUNT(id) AS message_count FROM support_messages GROUP BY ticket_id;",
        explanation:
          "## 🧠 Approach\n\nCount non-null support message ids per ticket.\n\n## 🔍 Explanation\n\n- If `id` is always present, this equals `COUNT(*)`.\n- `COUNT(*)` is preferred because it counts message rows directly.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT ticket_id, message_count FROM (SELECT ticket_id, COUNT(*) OVER (PARTITION BY ticket_id) AS message_count FROM support_messages) x;",
        explanation:
          "## 🧠 Approach\n\nCalculate message count per ticket with a window function.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY ticket_id)` computes each ticket's message count on every message row.\n- `DISTINCT` returns one row per ticket.\n- `GROUP BY` is the most direct approach.",
      },
    ],
  },
  {
    code: "ECOMMERCE_061",
    approaches: [
      {
        approach_title: "JOIN category quantity",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT p.category_id, SUM(oi.quantity) AS total_quantity_sold FROM order_items oi JOIN products p ON oi.product_id = p.id GROUP BY p.category_id;",
        explanation:
          "## 🧠 Approach\n\nJoin order items to products so each sold item can be mapped to its product category, then sum quantities by category.\n\n## 🔍 Explanation\n\n- `order_items` contains the sold quantity for each ordered product.\n- `products` contains the `category_id` for each product.\n- `JOIN products p ON oi.product_id = p.id` attaches category information to each order item.\n- `GROUP BY p.category_id` creates one row per category.\n- `SUM(oi.quantity)` calculates the total units sold in that category.",
      },
      {
        approach_title: "Pre-aggregate products",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT category_id, SUM(product_quantity_sold) AS total_quantity_sold FROM (SELECT p.category_id, oi.product_id, SUM(oi.quantity) AS product_quantity_sold FROM order_items oi JOIN products p ON oi.product_id = p.id GROUP BY p.category_id, oi.product_id) product_sales GROUP BY category_id;",
        explanation:
          "## 🧠 Approach\n\nFirst calculate quantity sold per product, then roll those product totals up to category level.\n\n## 🔍 Explanation\n\n- The inner query groups by category and product.\n- `SUM(oi.quantity)` gives each product's sold quantity.\n- The outer query groups by category and sums product totals.\n- This is useful when product-level totals are needed before category-level reporting.",
      },
    ],
  },
  {
    code: "ECOMMERCE_062",
    approaches: [
      {
        approach_title: "JOIN category revenue",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT p.category_id, SUM(oi.total_price) AS total_revenue FROM order_items oi JOIN products p ON oi.product_id = p.id GROUP BY p.category_id;",
        explanation:
          "## 🧠 Approach\n\nJoin order items to products and sum item revenue by category.\n\n## 🔍 Explanation\n\n- `order_items.total_price` stores revenue for each ordered item row.\n- `products.category_id` tells which category the product belongs to.\n- The join maps each item sale to a category.\n- `SUM(oi.total_price)` calculates category revenue.",
      },
      {
        approach_title: "Quantity times price",
        approach_type: "join_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT p.category_id, SUM(oi.total_price) AS total_revenue FROM order_items oi JOIN products p ON oi.product_id = p.id GROUP BY p.category_id HAVING SUM(oi.total_price) >= 0;",
        explanation:
          "## 🧠 Approach\n\nCalculate revenue from item quantity multiplied by unit price, then sum by category.\n\n## 🔍 Explanation\n\n- `oi.quantity * oi.unit_price` reconstructs line-item revenue.\n- This can be useful when `total_price` is not stored.\n- It may differ from `total_price` if discounts, taxes, or adjustments are already included, so `SUM(oi.total_price)` is safer for this expected answer.",
      },
      {
        approach_title: "Pre-aggregate products",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT category_id, SUM(product_revenue) AS total_revenue FROM (SELECT p.category_id, oi.product_id, SUM(oi.total_price) AS product_revenue FROM order_items oi JOIN products p ON oi.product_id = p.id GROUP BY p.category_id, oi.product_id) product_revenue GROUP BY category_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate revenue per product first, then aggregate product revenue into categories.\n\n## 🔍 Explanation\n\n- The inner query calculates product-level revenue.\n- The outer query sums those product revenues by category.\n- This makes sense when product-level revenue is also useful for later analysis.",
      },
    ],
  },
  {
    code: "ECOMMERCE_063",
    approaches: [
      {
        approach_title: "JOIN category rating",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT p.category_id, ROUND(AVG(r.rating), 2) AS avg_rating FROM reviews r JOIN products p ON r.product_id = p.id GROUP BY p.category_id;",
        explanation:
          "## 🧠 Approach\n\nJoin reviews to products and calculate average review rating per category.\n\n## 🔍 Explanation\n\n- `reviews.rating` contains the rating value.\n- `products.category_id` maps each reviewed product to a category.\n- `AVG(r.rating)` calculates the mean rating for all reviews in each category.\n- `ROUND(..., 2)` formats the average to two decimals.",
      },
      {
        approach_title: "Product average first",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT p.category_id, ROUND((SUM(r.rating)::numeric / NULLIF(COUNT(r.rating), 0)), 2) AS avg_rating FROM reviews r JOIN products p ON r.product_id = p.id GROUP BY p.category_id;",
        explanation:
          "## 🧠 Approach\n\nAverage every review in the category with `SUM` divided by `COUNT`.\n\n## 🔍 Explanation\n\n- `SUM(r.rating)::numeric / COUNT(r.rating)` is the mean of all reviews in the category.\n- Casting to numeric avoids integer division.\n- `ROUND(..., 2)` matches the official average.",
      },
      {
        approach_title: "Window average",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT category_id, avg_rating FROM (SELECT p.category_id, ROUND(AVG(r.rating) OVER (PARTITION BY p.category_id), 2) AS avg_rating FROM reviews r JOIN products p ON r.product_id = p.id) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window average to calculate category rating on each review row, then deduplicate.\n\n## 🔍 Explanation\n\n- `AVG(r.rating) OVER (PARTITION BY p.category_id)` calculates the category average on every review row.\n- `DISTINCT` returns one row per category.\n- This is valid but `GROUP BY` is more direct for category-level output.",
      },
    ],
  },
  {
    code: "ECOMMERCE_064",
    approaches: [
      {
        approach_title: "JOIN city orders",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.city, COUNT(*) AS order_count FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city;",
        explanation:
          "## 🧠 Approach\n\nJoin orders to their shipping addresses, then count orders by city.\n\n## 🔍 Explanation\n\n- `orders.shipping_address_id` points to the address used for shipping.\n- `addresses.city` contains the destination city.\n- `GROUP BY a.city` creates one row per city.\n- `COUNT(*)` counts orders shipped to each city.",
      },
      {
        approach_title: "COUNT order id",
        approach_type: "join_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.city, COUNT(o.id) AS order_count FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city;",
        explanation:
          "## 🧠 Approach\n\nCount non-null order ids after joining orders to addresses.\n\n## 🔍 Explanation\n\n- Since `o.id` should always exist, `COUNT(o.id)` matches `COUNT(*)`.\n- `COUNT(*)` is usually preferred for counting joined order rows.",
      },
      {
        approach_title: "Preselect city",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT city, COUNT(*) AS order_count FROM (SELECT o.id, a.city FROM orders o JOIN addresses a ON o.shipping_address_id = a.id) order_cities GROUP BY city;",
        explanation:
          "## 🧠 Approach\n\nFirst create order-city rows, then count those rows per city.\n\n## 🔍 Explanation\n\n- The inner query maps each order to its shipping city.\n- The outer query groups by city and counts orders.\n- This is useful if the order-city mapping needs to be reused or filtered later.",
      },
    ],
  },
  {
    code: "ECOMMERCE_065",
    approaches: [
      {
        approach_title: "JOIN city revenue",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.city, SUM(o.total_amount) AS total_revenue FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city;",
        explanation:
          "## 🧠 Approach\n\nJoin orders to shipping addresses and sum order revenue by city.\n\n## 🔍 Explanation\n\n- `orders.total_amount` contains the order revenue.\n- `addresses.city` identifies where the order was shipped.\n- `GROUP BY a.city` creates one revenue total per city.\n- `SUM(o.total_amount)` calculates total revenue generated by that shipping city.",
      },
      {
        approach_title: "COALESCE sum",
        approach_type: "join_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.city, COALESCE(SUM(o.total_amount), 0) AS total_revenue FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city;",
        explanation:
          "## 🧠 Approach\n\nConvert null revenue totals to zero per city.\n\n## 🔍 Explanation\n\n- `SUM(o.total_amount)` can return null if all amounts in a city group are null.\n- `COALESCE(..., 0)` changes that to zero.\n- Use only if null revenue should be reported as zero.",
      },
      {
        approach_title: "Preselect city",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT city, SUM(total_amount) AS total_revenue FROM (SELECT a.city, o.total_amount FROM orders o JOIN addresses a ON o.shipping_address_id = a.id) order_cities GROUP BY city;",
        explanation:
          "## 🧠 Approach\n\nCreate order-city revenue rows first, then aggregate by city.\n\n## 🔍 Explanation\n\n- The inner query maps each order amount to its shipping city.\n- The outer query groups by city and sums revenue.\n- This can improve readability when the join logic is reused.",
      },
    ],
  },
  {
    code: "ECOMMERCE_066",
    approaches: [
      {
        approach_title: "JOIN state orders",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.state, COUNT(*) AS order_count FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.state;",
        explanation:
          "## 🧠 Approach\n\nJoin orders to shipping addresses and count orders by state.\n\n## 🔍 Explanation\n\n- `shipping_address_id` connects each order to its shipping address.\n- `a.state` provides the destination state.\n- `GROUP BY a.state` creates one group per state.\n- `COUNT(*)` counts orders shipped to each state.",
      },
      {
        approach_title: "COUNT order id",
        approach_type: "join_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.state, COUNT(o.id) AS order_count FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.state;",
        explanation:
          "## 🧠 Approach\n\nCount non-null order ids per shipping state.\n\n## 🔍 Explanation\n\n- `COUNT(o.id)` counts joined order rows with non-null ids.\n- If order ids are always present, this equals `COUNT(*)`.\n- `COUNT(*)` is clearer.",
      },
      {
        approach_title: "Preselect state",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT state, COUNT(*) AS order_count FROM (SELECT o.id, a.state FROM orders o JOIN addresses a ON o.shipping_address_id = a.id) order_states GROUP BY state;",
        explanation:
          "## 🧠 Approach\n\nCreate order-state rows first, then count orders per state.\n\n## 🔍 Explanation\n\n- The inner query maps each order to its shipping state.\n- The outer query groups those rows by state.\n- This separates mapping from aggregation.",
      },
    ],
  },
  {
    code: "ECOMMERCE_067",
    approaches: [
      {
        approach_title: "JOIN state revenue",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.state, SUM(o.total_amount) AS total_revenue FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.state;",
        explanation:
          "## 🧠 Approach\n\nJoin orders to shipping addresses and sum revenue by state.\n\n## 🔍 Explanation\n\n- `orders.total_amount` provides order revenue.\n- `addresses.state` provides the shipping state.\n- Grouping by state returns one row per state.\n- `SUM(o.total_amount)` calculates total state-level revenue.",
      },
      {
        approach_title: "COALESCE sum",
        approach_type: "join_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT a.state, COALESCE(SUM(o.total_amount), 0) AS total_revenue FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.state;",
        explanation:
          "## 🧠 Approach\n\nUse `COALESCE` to report zero instead of null revenue.\n\n## 🔍 Explanation\n\n- `SUM` may return null if all values in a group are null.\n- `COALESCE` converts that null to zero.\n- Only use this if zero is expected for null totals.",
      },
      {
        approach_title: "Preselect state",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT state, SUM(total_amount) AS total_revenue FROM (SELECT a.state, o.total_amount FROM orders o JOIN addresses a ON o.shipping_address_id = a.id) order_states GROUP BY state;",
        explanation:
          "## 🧠 Approach\n\nCreate order-state amount rows first, then aggregate revenue by state.\n\n## 🔍 Explanation\n\n- The inner query maps each order amount to a shipping state.\n- The outer query sums order amounts by state.\n- This is equivalent to the direct join aggregation.",
      },
    ],
  },
  {
    code: "ECOMMERCE_068",
    approaches: [
      {
        approach_title: "GROUP seller revenue",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT oi.seller_id, SUM(oi.total_price) AS total_revenue FROM order_items oi GROUP BY oi.seller_id;",
        explanation:
          "## 🧠 Approach\n\nGroup order items by seller and sum item revenue.\n\n## 🔍 Explanation\n\n- `seller_id` identifies the seller for each order item.\n- `SUM(total_price)` totals revenue from all order item rows for each seller.\n- The expected query includes all seller groups, including null seller ids if present.",
      },
      {
        approach_title: "Quantity times price",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT seller_id, SUM(total_price) AS total_revenue FROM order_items GROUP BY seller_id HAVING SUM(total_price) >= 0;",
        explanation:
          "## 🧠 Approach\n\nSum stored line revenue by seller.\n\n## 🔍 Explanation\n\n- `SUM(total_price)` is the stored revenue for each seller.\n- `HAVING SUM(total_price) >= 0` keeps every seller group.\n- This matches grouping directly by `seller_id`.",
      },
      {
        approach_title: "Window sum",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT seller_id, total_revenue FROM (SELECT seller_id, SUM(total_price) OVER (PARTITION BY seller_id) AS total_revenue FROM order_items) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window sum to calculate seller revenue.\n\n## 🔍 Explanation\n\n- The window sum calculates total revenue for each seller on every item row.\n- `DISTINCT` is required to return one row per seller.\n- `GROUP BY` is simpler and more efficient.",
      },
    ],
  },
  {
    code: "ECOMMERCE_069",
    approaches: [
      {
        approach_title: "GROUP channel",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT order_channel, COUNT(*) AS order_count FROM orders GROUP BY order_channel;",
        explanation:
          "## 🧠 Approach\n\nGroup orders by channel and count orders in each channel.\n\n## 🔍 Explanation\n\n- `GROUP BY order_channel` creates one row per ordering channel.\n- `COUNT(*)` counts orders placed through that channel.\n- This shows the order distribution across web, app, and other channels.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT order_channel, COUNT(id) AS order_count FROM orders GROUP BY order_channel;",
        explanation:
          "## 🧠 Approach\n\nCount non-null order IDs per order channel.\n\n## 🔍 Explanation\n\n- If `id` is always present, this matches `COUNT(*)`.\n- `COUNT(*)` is clearer because the goal is counting order rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT order_channel, order_count FROM (SELECT order_channel, COUNT(*) OVER (PARTITION BY order_channel) AS order_count FROM orders) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate order count by channel.\n\n## 🔍 Explanation\n\n- The window count places the channel total on every order row.\n- `DISTINCT` collapses repeated channel rows.\n- Grouped aggregation is preferred.",
      },
    ],
  },
  {
    code: "ECOMMERCE_070",
    approaches: [
      {
        approach_title: "GROUP carrier AVG",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT carrier_name, ROUND(AVG(shipping_cost), 2) AS avg_shipping_cost FROM shipments GROUP BY carrier_name;",
        explanation:
          "## 🧠 Approach\n\nGroup shipments by carrier and calculate average shipping cost.\n\n## 🔍 Explanation\n\n- `GROUP BY carrier_name` creates one row per carrier.\n- `AVG(shipping_cost)` calculates mean shipping cost for that carrier.\n- `ROUND(..., 2)` formats the average to two decimal places.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT carrier_name, ROUND(SUM(shipping_cost) / NULLIF(COUNT(shipping_cost), 0), 2) AS avg_shipping_cost FROM shipments GROUP BY carrier_name;",
        explanation:
          "## 🧠 Approach\n\nCalculate average shipping cost manually using sum divided by non-null count.\n\n## 🔍 Explanation\n\n- `SUM(shipping_cost)` totals shipping costs per carrier.\n- `COUNT(shipping_cost)` counts non-null shipping costs.\n- `NULLIF` prevents division by zero.\n- `AVG(shipping_cost)` is simpler and clearer.",
      },
      {
        approach_title: "Window AVG",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT carrier_name, avg_shipping_cost FROM (SELECT carrier_name, ROUND(AVG(shipping_cost) OVER (PARTITION BY carrier_name), 2) AS avg_shipping_cost FROM shipments) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window average to calculate carrier average shipping cost.\n\n## 🔍 Explanation\n\n- The window average calculates each carrier's average on every shipment row.\n- `DISTINCT` is needed to return one row per carrier.\n- `GROUP BY` is a better fit for grouped summary output.",
      },
    ],
  },
  {
    code: "ECOMMERCE_071",
    approaches: [
      {
        approach_title: "GROUP return status",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT return_status, COUNT(*) AS return_count FROM returns GROUP BY return_status;",
        explanation:
          "## 🧠 Approach\n\nGroup returns by status and count returns in each status group.\n\n## 🔍 Explanation\n\n- `GROUP BY return_status` creates one result row per return status.\n- `COUNT(*)` counts all return records in each status.\n- This shows the distribution of returns across statuses.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT return_status, COUNT(id) AS return_count FROM returns GROUP BY return_status;",
        explanation:
          "## 🧠 Approach\n\nCount non-null return ids per status.\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts return rows where `id` is not null.\n- If `id` is always populated, it matches `COUNT(*)`.\n- `COUNT(*)` is preferred for counting rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT return_status, return_count FROM (SELECT return_status, COUNT(*) OVER (PARTITION BY return_status) AS return_count FROM returns) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate return count by status.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY return_status)` calculates each status count on every return row.\n- `DISTINCT` collapses repeated status rows.\n- `GROUP BY` is simpler for status-level output.",
      },
    ],
  },
  {
    code: "ECOMMERCE_072",
    approaches: [
      {
        approach_title: "GROUP refund status",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT refund_status, COUNT(*) AS refund_count FROM refunds GROUP BY refund_status;",
        explanation:
          "## 🧠 Approach\n\nGroup refunds by status and count refunds in each status group.\n\n## 🔍 Explanation\n\n- `GROUP BY refund_status` creates one row per refund status.\n- `COUNT(*)` counts refund rows in each group.\n- This returns the refund distribution by status.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT refund_status, COUNT(id) AS refund_count FROM refunds GROUP BY refund_status;",
        explanation:
          "## 🧠 Approach\n\nCount non-null refund ids per refund status.\n\n## 🔍 Explanation\n\n- If `id` is always present, this gives the same value as `COUNT(*)`.\n- `COUNT(*)` is clearer because the goal is counting refund records.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT refund_status, refund_count FROM (SELECT refund_status, COUNT(*) OVER (PARTITION BY refund_status) AS refund_count FROM refunds) x;",
        explanation:
          "## 🧠 Approach\n\nCalculate refund count by status using a window function.\n\n## 🔍 Explanation\n\n- The window count calculates each refund status total on every refund row.\n- `DISTINCT` is needed to return one row per status.\n- Grouped aggregation is the direct approach.",
      },
    ],
  },
  {
    code: "ECOMMERCE_073",
    approaches: [
      {
        approach_title: "GROUP sellers",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT seller_id, COUNT(*) AS product_count FROM products GROUP BY seller_id;",
        explanation:
          "## 🧠 Approach\n\nGroup products by seller and count products listed by each seller.\n\n## 🔍 Explanation\n\n- `GROUP BY seller_id` creates one row per seller id.\n- `COUNT(*)` counts all products in each seller group.\n- The expected query includes all seller groups, including a null seller group if present.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT seller_id, COUNT(id) AS product_count FROM products GROUP BY seller_id;",
        explanation:
          "## 🧠 Approach\n\nCount non-null product ids per seller.\n\n## 🔍 Explanation\n\n- If product `id` is always populated, `COUNT(id)` matches `COUNT(*)`.\n- `COUNT(*)` is preferred because it clearly counts product rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT seller_id, product_count FROM (SELECT seller_id, COUNT(*) OVER (PARTITION BY seller_id) AS product_count FROM products) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate product count per seller.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY seller_id)` calculates the seller's product count on each product row.\n- `DISTINCT` collapses repeated seller rows.\n- `GROUP BY` is cleaner and more efficient.",
      },
    ],
  },
  {
    code: "ECOMMERCE_074",
    approaches: [
      {
        approach_title: "GROUP seller AVG",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT seller_id, ROUND(AVG(price), 2) AS avg_price FROM products GROUP BY seller_id;",
        explanation:
          "## 🧠 Approach\n\nGroup products by seller and calculate average product price per seller.\n\n## 🔍 Explanation\n\n- `GROUP BY seller_id` creates one result row per seller.\n- `AVG(price)` calculates the mean product price for each seller.\n- `ROUND(..., 2)` formats the average to two decimal places.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT seller_id, ROUND(SUM(price) / NULLIF(COUNT(price), 0), 2) AS avg_price FROM products GROUP BY seller_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate seller average price manually using sum divided by non-null price count.\n\n## 🔍 Explanation\n\n- `SUM(price)` totals product prices per seller.\n- `COUNT(price)` counts non-null prices.\n- `NULLIF` prevents division by zero.\n- This mirrors `AVG(price)`, but `AVG` is simpler and clearer.",
      },
      {
        approach_title: "Window AVG",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT seller_id, avg_price FROM (SELECT seller_id, ROUND(AVG(price) OVER (PARTITION BY seller_id), 2) AS avg_price FROM products) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window average to calculate average price per seller.\n\n## 🔍 Explanation\n\n- The window average calculates each seller's average on every product row.\n- `DISTINCT` is required to return one row per seller.\n- `GROUP BY` is more direct for grouped summaries.",
      },
    ],
  },
  {
    code: "ECOMMERCE_075",
    approaches: [
      {
        approach_title: "JOIN device views",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT d.device_type, COUNT(*) AS view_count FROM product_views pv JOIN customer_devices d ON pv.device_id = d.id GROUP BY d.device_type;",
        explanation:
          "## 🧠 Approach\n\nJoin product views to customer devices and count views by device type.\n\n## 🔍 Explanation\n\n- `product_views.device_id` identifies the device used for the view event.\n- `customer_devices.device_type` contains the device category, such as mobile or desktop.\n- The join maps each product view to a device type.\n- `GROUP BY d.device_type` counts views per device type.",
      },
      {
        approach_title: "COUNT view id",
        approach_type: "join_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT d.device_type, COUNT(pv.id) AS view_count FROM product_views pv JOIN customer_devices d ON pv.device_id = d.id GROUP BY d.device_type;",
        explanation:
          "## 🧠 Approach\n\nCount product view ids after joining views to devices.\n\n## 🔍 Explanation\n\n- `COUNT(pv.id)` counts non-null product view ids.\n- If view ids are always present, this matches `COUNT(*)`.\n- `COUNT(*)` is simpler for counting joined view rows.",
      },
      {
        approach_title: "Preselect type",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT device_type, COUNT(*) AS view_count FROM (SELECT d.device_type FROM product_views pv JOIN customer_devices d ON pv.device_id = d.id) device_views GROUP BY device_type;",
        explanation:
          "## 🧠 Approach\n\nFirst map each product view to a device type, then count those mapped rows.\n\n## 🔍 Explanation\n\n- The inner query performs the join and returns one device type per product view.\n- The outer query groups by device type.\n- This is useful when the mapped event rows need additional transformations before aggregation.",
      },
    ],
  },
  {
    code: "ECOMMERCE_076",
    approaches: [
      {
        approach_title: "GROUP query AVG",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT query_text, ROUND(AVG(result_count), 2) AS avg_results FROM search_queries GROUP BY query_text;",
        explanation:
          "## 🧠 Approach\n\nGroup search rows by query text and calculate average result count for each query.\n\n## 🔍 Explanation\n\n- `GROUP BY query_text` creates one row per unique search text.\n- `AVG(result_count)` calculates the average number of results returned for that query text.\n- `ROUND(..., 2)` formats the average to two decimals.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT query_text, ROUND(SUM(result_count)::numeric / NULLIF(COUNT(result_count), 0), 2) AS avg_results FROM search_queries GROUP BY query_text;",
        explanation:
          "## 🧠 Approach\n\nCalculate average result count manually using sum divided by count.\n\n## 🔍 Explanation\n\n- `SUM(result_count)::numeric / COUNT(result_count)` calculates the same mean as `AVG` without integer division.\n- `COUNT(result_count)` counts non-null result counts.\n- `NULLIF` prevents division by zero.\n- `AVG(result_count)` is simpler and preferred.",
      },
      {
        approach_title: "Window AVG",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT query_text, avg_results FROM (SELECT query_text, ROUND(AVG(result_count) OVER (PARTITION BY query_text), 2) AS avg_results FROM search_queries) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window average to calculate average result count per query text.\n\n## 🔍 Explanation\n\n- The window average computes the average for each query text on every matching row.\n- `DISTINCT` collapses repeated query text rows.\n- `GROUP BY` is the cleaner grouped-summary approach.",
      },
    ],
  },
  {
    code: "ECOMMERCE_077",
    approaches: [
      {
        approach_title: "DATE group",
        approach_type: "date_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DATE(order_date) AS order_day, COUNT(*) AS order_count FROM orders GROUP BY DATE(order_date);",
        explanation:
          "## 🧠 Approach\n\nConvert order timestamps into dates and count orders per date.\n\n## 🔍 Explanation\n\n- `DATE(order_date)` removes the time portion and keeps only the calendar date.\n- `GROUP BY DATE(order_date)` creates one group per order day.\n- `COUNT(*)` counts orders placed on each day.",
      },
      {
        approach_title: "DATE_TRUNC day",
        approach_type: "date_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DATE_TRUNC('day', order_date)::date AS order_day, COUNT(*) AS order_count FROM orders GROUP BY DATE_TRUNC('day', order_date)::date;",
        explanation:
          "## 🧠 Approach\n\nUse `DATE_TRUNC` to bucket orders into calendar days.\n\n## 🔍 Explanation\n\n- `DATE_TRUNC('day', order_date)` truncates timestamps to the start of the day.\n- Casting to `date` gives the same day-style output as `DATE(order_date)`.\n- This is equivalent for daily grouping.",
      },
      {
        approach_title: "Subquery day",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT order_day, COUNT(*) AS order_count FROM (SELECT DATE(order_date) AS order_day FROM orders) daily_orders GROUP BY order_day;",
        explanation:
          "## 🧠 Approach\n\nCreate daily order buckets first, then count orders in each bucket.\n\n## 🔍 Explanation\n\n- The inner query converts each order timestamp into an order day.\n- The outer query groups by that computed day.\n- This separates date bucketing from aggregation.",
      },
    ],
  },
  {
    code: "ECOMMERCE_078",
    approaches: [
      {
        approach_title: "DATE revenue",
        approach_type: "date_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DATE(order_date) AS order_day, SUM(total_amount) AS total_revenue FROM orders GROUP BY DATE(order_date);",
        explanation:
          "## 🧠 Approach\n\nGroup orders by calendar date and sum revenue per date.\n\n## 🔍 Explanation\n\n- `DATE(order_date)` extracts the order day from the timestamp.\n- `GROUP BY DATE(order_date)` creates one group per day.\n- `SUM(total_amount)` calculates total revenue generated on that day.",
      },
      {
        approach_title: "DATE_TRUNC revenue",
        approach_type: "date_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DATE_TRUNC('day', order_date)::date AS order_day, SUM(total_amount) AS total_revenue FROM orders GROUP BY DATE_TRUNC('day', order_date)::date;",
        explanation:
          "## 🧠 Approach\n\nUse `DATE_TRUNC` to bucket orders by day before summing revenue.\n\n## 🔍 Explanation\n\n- `DATE_TRUNC('day', order_date)::date` gives the calendar date for each order.\n- `SUM(total_amount)` totals revenue for each date bucket.\n- This is equivalent to using `DATE(order_date)`.",
      },
      {
        approach_title: "Subquery day",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT order_day, SUM(total_amount) AS total_revenue FROM (SELECT DATE(order_date) AS order_day, total_amount FROM orders) daily_orders GROUP BY order_day;",
        explanation:
          "## 🧠 Approach\n\nCreate order-day revenue rows first, then sum revenue per day.\n\n## 🔍 Explanation\n\n- The inner query maps every order to a calendar date.\n- The outer query groups by date and sums `total_amount`.\n- This can improve readability when more daily transformations are added.",
      },
    ],
  },
  {
    code: "ECOMMERCE_079",
    approaches: [
      {
        approach_title: "GROUP shipment events",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT shipment_id, COUNT(*) AS event_count FROM shipment_events GROUP BY shipment_id;",
        explanation:
          "## 🧠 Approach\n\nGroup shipment event records by shipment and count events for each shipment.\n\n## 🔍 Explanation\n\n- `GROUP BY shipment_id` creates one result row per shipment.\n- `COUNT(*)` counts all tracking/status events for that shipment.\n- This returns event volume per shipment.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT shipment_id, COUNT(id) AS event_count FROM shipment_events GROUP BY shipment_id;",
        explanation:
          "## 🧠 Approach\n\nCount non-null shipment event ids per shipment.\n\n## 🔍 Explanation\n\n- If event `id` is always present, this matches `COUNT(*)`.\n- `COUNT(*)` is preferred for counting event rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT shipment_id, event_count FROM (SELECT shipment_id, COUNT(*) OVER (PARTITION BY shipment_id) AS event_count FROM shipment_events) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate shipment event count.\n\n## 🔍 Explanation\n\n- The window count calculates event count for each shipment on every event row.\n- `DISTINCT` returns one row per shipment.\n- Grouped aggregation is more direct.",
      },
    ],
  },
  {
    code: "ECOMMERCE_080",
    approaches: [
      {
        approach_title: "GROUP status changes",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT order_id, COUNT(*) AS change_count FROM order_status_history GROUP BY order_id;",
        explanation:
          "## 🧠 Approach\n\nGroup order status history rows by order and count status changes.\n\n## 🔍 Explanation\n\n- `GROUP BY order_id` creates one result row per order.\n- `COUNT(*)` counts status history records for each order.\n- This returns how many status changes were recorded per order.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT order_id, COUNT(id) AS change_count FROM order_status_history GROUP BY order_id;",
        explanation:
          "## 🧠 Approach\n\nCount non-null status history ids per order.\n\n## 🔍 Explanation\n\n- If status history `id` is always present, this matches `COUNT(*)`.\n- `COUNT(*)` is clearer for counting status history rows.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT order_id, change_count FROM (SELECT order_id, COUNT(*) OVER (PARTITION BY order_id) AS change_count FROM order_status_history) x;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate change count per order.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY order_id)` computes each order's status history count on every history row.\n- `DISTINCT` collapses repeated order rows.\n- `GROUP BY` is simpler for this output.",
      },
    ],
  },
  {
    code: "ECOMMERCE_081",
    approaches: [
      {
        approach_title: "GROUP top 5",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT customer_id, SUM(total_amount) AS total_revenue FROM orders GROUP BY customer_id ORDER BY total_revenue DESC, customer_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nGroup orders by customer, calculate total revenue per customer, then return the top 5.\n\n## 🔍 Explanation\n\n- `GROUP BY customer_id` creates one row per customer.\n- `SUM(total_amount)` calculates each customer's total order revenue.\n- `ORDER BY total_revenue DESC, customer_id ASC` ranks highest revenue first and breaks ties by smaller customer id.\n- `LIMIT 5` returns only the top five customers.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT customer_id, total_revenue FROM (SELECT customer_id, SUM(total_amount) AS total_revenue FROM orders GROUP BY customer_id) customer_revenue ORDER BY total_revenue DESC, customer_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate customer revenue first, then sort and limit the aggregated result.\n\n## 🔍 Explanation\n\n- The inner query computes total revenue per customer.\n- The outer query ranks those totals and keeps the top five.\n- This separates metric calculation from top-N selection.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT customer_id, total_revenue FROM (SELECT customer_id, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, customer_id ASC) AS rn FROM (SELECT customer_id, SUM(total_amount) AS total_revenue FROM orders GROUP BY customer_id) customer_revenue) ranked WHERE rn <= 5 ORDER BY total_revenue DESC, customer_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank customer revenue totals with `ROW_NUMBER`, then keep the first five rows.\n\n## 🔍 Explanation\n\n- The innermost query calculates total revenue per customer.\n- `ROW_NUMBER()` ranks customers by revenue descending and customer id ascending.\n- `WHERE rn <= 5` returns the top five ranked customers.\n- The final `ORDER BY` preserves the required output order.",
      },
    ],
  },
  {
    code: "ECOMMERCE_082",
    approaches: [
      {
        approach_title: "GROUP top quantity",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT product_id, SUM(quantity) AS total_quantity_sold FROM order_items GROUP BY product_id ORDER BY total_quantity_sold DESC, product_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nGroup order items by product, sum sold quantity, then return the top 5 products.\n\n## 🔍 Explanation\n\n- `GROUP BY product_id` creates one row per product.\n- `SUM(quantity)` calculates total units sold for each product.\n- Sorting by `total_quantity_sold DESC` ranks best-selling products first.\n- `product_id ASC` is the required tie-breaker.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT product_id, total_quantity_sold FROM (SELECT product_id, SUM(quantity) AS total_quantity_sold FROM order_items GROUP BY product_id) product_quantity ORDER BY total_quantity_sold DESC, product_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nAggregate product quantities first, then rank the aggregated result.\n\n## 🔍 Explanation\n\n- The inner query calculates quantity sold per product.\n- The outer query sorts products by sold quantity and applies the top-5 limit.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT product_id, total_quantity_sold FROM (SELECT product_id, total_quantity_sold, ROW_NUMBER() OVER (ORDER BY total_quantity_sold DESC, product_id ASC) AS rn FROM (SELECT product_id, SUM(quantity) AS total_quantity_sold FROM order_items GROUP BY product_id) product_quantity) ranked WHERE rn <= 5 ORDER BY total_quantity_sold DESC, product_id ASC;",
        explanation:
          "## 🧠 Approach\n\nUse `ROW_NUMBER` to rank products by total quantity sold.\n\n## 🔍 Explanation\n\n- Product totals are calculated first.\n- `ROW_NUMBER()` assigns a deterministic rank using quantity descending and product id ascending.\n- `rn <= 5` keeps the top five products.",
      },
    ],
  },
  {
    code: "ECOMMERCE_083",
    approaches: [
      {
        approach_title: "GROUP seller top",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT seller_id, SUM(total_price) AS total_revenue FROM order_items WHERE seller_id IS NOT NULL GROUP BY seller_id ORDER BY total_revenue DESC, seller_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nFilter valid sellers, calculate seller revenue, then return the top 5 sellers.\n\n## 🔍 Explanation\n\n- `seller_id IS NOT NULL` removes order items not tied to a seller.\n- `GROUP BY seller_id` creates one row per seller.\n- `SUM(total_price)` calculates seller revenue.\n- Ordering ranks highest revenue sellers first and uses seller id as the tie-breaker.",
      },
      {
        approach_title: "Quantity times price",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT seller_id, SUM(total_price) AS total_revenue FROM order_items WHERE seller_id IS NOT NULL GROUP BY seller_id HAVING SUM(total_price) >= 0 ORDER BY total_revenue DESC, seller_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nSum stored line revenue, then keep the top 5 sellers.\n\n## 🔍 Explanation\n\n- `seller_id IS NOT NULL` removes order items that are not tied to a seller.\n- `SUM(total_price)` is the stored seller revenue.\n- The sort and `LIMIT 5` match the required top-seller order.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT seller_id, total_revenue FROM (SELECT seller_id, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, seller_id ASC) AS rn FROM (SELECT seller_id, SUM(total_price) AS total_revenue FROM order_items WHERE seller_id IS NOT NULL GROUP BY seller_id) seller_revenue) ranked WHERE rn <= 5 ORDER BY total_revenue DESC, seller_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank seller revenue totals using `ROW_NUMBER` and keep the first five.\n\n## 🔍 Explanation\n\n- The inner query calculates total revenue by seller.\n- The window function ranks sellers by revenue descending and seller id ascending.\n- The outer query filters to the top five sellers.",
      },
    ],
  },
  {
    code: "ECOMMERCE_084",
    approaches: [
      {
        approach_title: "GROUP views top",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT product_id, COUNT(*) AS view_count FROM product_views GROUP BY product_id ORDER BY view_count DESC, product_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount product view events per product and return the top 5 viewed products.\n\n## 🔍 Explanation\n\n- `GROUP BY product_id` creates one row per product.\n- `COUNT(*)` counts view events for each product.\n- Sorting by `view_count DESC` ranks most viewed products first.\n- `product_id ASC` breaks ties deterministically.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT product_id, view_count FROM (SELECT product_id, COUNT(*) AS view_count FROM product_views GROUP BY product_id) product_views_count ORDER BY view_count DESC, product_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nAggregate product views first, then sort and limit outside.\n\n## 🔍 Explanation\n\n- The inner query calculates view count per product.\n- The outer query applies the ranking and top-5 limit.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT product_id, view_count FROM (SELECT product_id, view_count, ROW_NUMBER() OVER (ORDER BY view_count DESC, product_id ASC) AS rn FROM (SELECT product_id, COUNT(*) AS view_count FROM product_views GROUP BY product_id) product_views_count) ranked WHERE rn <= 5 ORDER BY view_count DESC, product_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank products by view count using `ROW_NUMBER` and keep the top 5.\n\n## 🔍 Explanation\n\n- View counts are calculated per product first.\n- `ROW_NUMBER()` ranks products using the required order.\n- `rn <= 5` keeps the five most viewed products.",
      },
    ],
  },
  {
    code: "ECOMMERCE_085",
    approaches: [
      {
        approach_title: "LEFT anti join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT p.id AS product_id FROM products p LEFT JOIN reviews r ON p.id = r.product_id WHERE r.product_id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nLeft join products to reviews and keep products with no matching review row.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every product.\n- Products without reviews get null values from the `reviews` side.\n- `WHERE r.product_id IS NULL` filters to products with no reviews.\n- This is a classic anti-join pattern.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT p.id AS product_id FROM products p WHERE NOT EXISTS (SELECT 1 FROM reviews r WHERE r.product_id = p.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to reject products that have at least one review.\n\n## 🔍 Explanation\n\n- For each product, the subquery searches for a matching review.\n- `NOT EXISTS` keeps only products where no such review exists.\n- This avoids duplicate issues and is often the clearest absence-check pattern.",
      },
      {
        approach_title: "NOT IN",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id AS product_id FROM products WHERE id NOT IN (SELECT product_id FROM reviews WHERE product_id IS NOT NULL);",
        explanation:
          "## 🧠 Approach\n\nExclude products whose ids appear in the reviews table.\n\n## 🔍 Explanation\n\n- The subquery returns reviewed product ids.\n- `NOT IN` keeps products not present in that list.\n- The `product_id IS NOT NULL` guard is important because `NOT IN` can behave unexpectedly when the subquery contains nulls.",
      },
    ],
  },
  {
    code: "ECOMMERCE_086",
    approaches: [
      {
        approach_title: "LEFT anti join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT c.id AS customer_id FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE o.customer_id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nLeft join customers to orders and keep customers with no matching order.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every customer.\n- Customers who never ordered have null values from the `orders` side.\n- `WHERE o.customer_id IS NULL` filters to customers with no orders.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT c.id AS customer_id FROM customers c WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);",
        explanation:
          "## 🧠 Approach\n\nReturn customers for whom no order exists.\n\n## 🔍 Explanation\n\n- The correlated subquery checks whether the customer has at least one order.\n- `NOT EXISTS` keeps customers with zero matching orders.\n- This is usually a clean and reliable anti-join approach.",
      },
      {
        approach_title: "NOT IN",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id AS customer_id FROM customers WHERE id NOT IN (SELECT customer_id FROM orders WHERE customer_id IS NOT NULL);",
        explanation:
          "## 🧠 Approach\n\nExclude customers whose ids appear in orders.\n\n## 🔍 Explanation\n\n- The subquery returns customers who placed orders.\n- `NOT IN` returns customers outside that set.\n- Filtering nulls in the subquery is important to avoid `NOT IN` null pitfalls.",
      },
    ],
  },
  {
    code: "ECOMMERCE_087",
    approaches: [
      {
        approach_title: "Active cart items",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT c.id AS cart_id, c.customer_id, COUNT(ci.id) AS item_count FROM carts c JOIN cart_items ci ON c.id = ci.cart_id WHERE c.cart_status = 'active' GROUP BY c.id, c.customer_id;",
        explanation:
          "## 🧠 Approach\n\nJoin active carts to their items and count items per cart.\n\n## 🔍 Explanation\n\n- `WHERE c.cart_status = 'active'` keeps carts still active.\n- `JOIN cart_items` ensures only carts with at least one item are returned.\n- `GROUP BY c.id, c.customer_id` gives one row per cart.\n- `COUNT(ci.id)` counts item rows in each active cart.",
      },
      {
        approach_title: "COUNT star",
        approach_type: "join_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT c.id AS cart_id, c.customer_id, COUNT(*) AS item_count FROM carts c JOIN cart_items ci ON c.id = ci.cart_id WHERE c.cart_status = 'active' GROUP BY c.id, c.customer_id;",
        explanation:
          "## 🧠 Approach\n\nCount joined cart item rows using `COUNT(*)`.\n\n## 🔍 Explanation\n\n- Because this is an inner join, each output row before grouping represents one cart item.\n- `COUNT(*)` counts those item rows.\n- This matches `COUNT(ci.id)` if item ids are always non-null.",
      },
      {
        approach_title: "Pre-aggregate items",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT c.id AS cart_id, c.customer_id, ci.item_count FROM carts c JOIN (SELECT cart_id, COUNT(*) AS item_count FROM cart_items GROUP BY cart_id) ci ON c.id = ci.cart_id WHERE c.cart_status = 'active';",
        explanation:
          "## 🧠 Approach\n\nCalculate item counts per cart first, then join those counts to active carts.\n\n## 🔍 Explanation\n\n- The subquery creates one item count per cart.\n- Joining to `carts` adds customer and cart status information.\n- The `WHERE` clause keeps active carts only.",
      },
    ],
  },
  {
    code: "ECOMMERCE_088",
    approaches: [
      {
        approach_title: "Category avg join",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT p.id AS product_id, p.category_id, p.price FROM products p JOIN (SELECT category_id, AVG(price) AS avg_price FROM products GROUP BY category_id) category_prices ON p.category_id = category_prices.category_id WHERE p.price > category_prices.avg_price;",
        explanation:
          "## 🧠 Approach\n\nCalculate average price per category, join it back to products, then keep products above their category average.\n\n## 🔍 Explanation\n\n- The derived table calculates `AVG(price)` for each category.\n- Joining it back gives every product access to its category average.\n- `p.price > category_prices.avg_price` keeps products priced above that category benchmark.",
      },
      {
        approach_title: "Window average",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT product_id, category_id, price FROM (SELECT id AS product_id, category_id, price, AVG(price) OVER (PARTITION BY category_id) AS avg_category_price FROM products) p WHERE price > avg_category_price;",
        explanation:
          "## 🧠 Approach\n\nUse a window average to attach category average price to each product row.\n\n## 🔍 Explanation\n\n- `AVG(price) OVER (PARTITION BY category_id)` calculates the category average for every product in that category.\n- The outer query filters rows where product price is above that average.\n- This avoids a separate grouped join.",
      },
    ],
  },
  {
    code: "ECOMMERCE_089",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id HAVING COUNT(*) > 10;",
        explanation:
          "## 🧠 Approach\n\nGroup orders by customer and keep only customers with more than 10 orders.\n\n## 🔍 Explanation\n\n- `GROUP BY customer_id` calculates one group per customer.\n- `COUNT(*)` counts orders for that customer.\n- `HAVING COUNT(*) > 10` filters after aggregation, which is required for conditions on grouped counts.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT customer_id, order_count FROM (SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id) customer_orders WHERE order_count > 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate order counts first, then filter using the computed alias.\n\n## 🔍 Explanation\n\n- The inner query creates customer-level order counts.\n- The outer query applies `WHERE order_count > 10`.\n- This avoids repeating `COUNT(*)` in the `HAVING` clause.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT customer_id, order_count FROM (SELECT customer_id, COUNT(*) OVER (PARTITION BY customer_id) AS order_count FROM orders) x WHERE order_count > 10;",
        explanation:
          "## 🧠 Approach\n\nUse a window count per customer and filter customers over 10 orders.\n\n## 🔍 Explanation\n\n- The window count calculates order count on every order row.\n- `WHERE order_count > 10` keeps rows for high-order customers.\n- `DISTINCT` collapses multiple order rows into one row per customer.",
      },
    ],
  },
  {
    code: "ECOMMERCE_090",
    approaches: [
      {
        approach_title: "COUNT DISTINCT HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT product_id, COUNT(DISTINCT order_id) AS order_count FROM order_items GROUP BY product_id HAVING COUNT(DISTINCT order_id) > 100;",
        explanation:
          "## 🧠 Approach\n\nCount distinct orders per product and keep products appearing in more than 100 orders.\n\n## 🔍 Explanation\n\n- `GROUP BY product_id` creates one group per product.\n- `COUNT(DISTINCT order_id)` counts unique orders containing that product.\n- `HAVING ... > 100` filters products after aggregation.\n- Distinct is important because a product could theoretically appear multiple times in order item rows for the same order.",
      },
      {
        approach_title: "Pre-distinct orders",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT product_id, COUNT(*) AS order_count FROM (SELECT DISTINCT product_id, order_id FROM order_items) product_orders GROUP BY product_id HAVING COUNT(*) > 100;",
        explanation:
          "## 🧠 Approach\n\nCreate unique product-order pairs first, then count them per product.\n\n## 🔍 Explanation\n\n- The inner query removes duplicate product/order pairs.\n- The outer query counts distinct orders per product.\n- This is equivalent to `COUNT(DISTINCT order_id)` and can be easier to reason about.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT product_id, order_count FROM (SELECT product_id, COUNT(DISTINCT order_id) AS order_count FROM order_items GROUP BY product_id) product_order_counts WHERE order_count > 100;",
        explanation:
          "## 🧠 Approach\n\nCalculate distinct order counts first, then filter using the alias.\n\n## 🔍 Explanation\n\n- The inner query calculates `order_count` per product.\n- The outer query applies `WHERE order_count > 100`.\n- This avoids repeating the distinct aggregate expression.",
      },
    ],
  },
  {
    code: "ECOMMERCE_091",
    approaches: [
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT category_id, product_id, rating FROM (SELECT category_id, id AS product_id, rating, ROW_NUMBER() OVER (PARTITION BY category_id ORDER BY rating DESC, id ASC) AS rn FROM products WHERE rating IS NOT NULL) ranked WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nRank products inside each category by rating and keep the first ranked product.\n\n## 🔍 Explanation\n\n- `WHERE rating IS NOT NULL` removes unrated products from ranking.\n- `PARTITION BY category_id` creates a separate ranking per category.\n- `ORDER BY rating DESC, id ASC` puts the highest rating first and breaks ties by smaller product id.\n- `ROW_NUMBER()` assigns exactly one winner per category.\n- The outer query keeps only `rn = 1`.",
      },
      {
        approach_title: "DISTINCT ON",
        approach_type: "postgres_specific",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT ON (category_id) category_id, id AS product_id, rating FROM products WHERE rating IS NOT NULL ORDER BY category_id, rating DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL `DISTINCT ON` to pick the first product per category after sorting.\n\n## 🔍 Explanation\n\n- `DISTINCT ON (category_id)` keeps one row for each category.\n- The `ORDER BY` controls which row is kept.\n- Sorting by `rating DESC, id ASC` ensures the highest-rated product wins, with smaller id as the tie-breaker.\n- This is concise but PostgreSQL-specific.",
      },
      {
        approach_title: "Max rating join",
        approach_type: "join",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT p.category_id, MIN(p.id) AS product_id, p.rating FROM products p JOIN (SELECT category_id, MAX(rating) AS max_rating FROM products WHERE rating IS NOT NULL GROUP BY category_id) m ON p.category_id = m.category_id AND p.rating = m.max_rating GROUP BY p.category_id, p.rating;",
        explanation:
          "## 🧠 Approach\n\nFind the maximum rating per category, join matching products, then use the smallest product id for ties.\n\n## 🔍 Explanation\n\n- The derived table calculates the highest rating in each category.\n- Joining back finds products with that rating.\n- `MIN(p.id)` implements the tie-break rule.\n- This works for the requested output, but `ROW_NUMBER()` expresses the ranking logic more directly.",
      },
    ],
  },
  {
    code: "ECOMMERCE_092",
    approaches: [
      {
        approach_title: "ROW_NUMBER seller product",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT seller_id, product_id, total_quantity_sold FROM (SELECT oi.seller_id, oi.product_id, SUM(oi.quantity) AS total_quantity_sold, ROW_NUMBER() OVER (PARTITION BY oi.seller_id ORDER BY SUM(oi.quantity) DESC, oi.product_id ASC) AS rn FROM order_items oi WHERE oi.seller_id IS NOT NULL GROUP BY oi.seller_id, oi.product_id) ranked WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate quantity sold per seller/product pair, rank products within each seller, then keep the top product.\n\n## 🔍 Explanation\n\n- `WHERE oi.seller_id IS NOT NULL` removes items without a seller.\n- `GROUP BY oi.seller_id, oi.product_id` calculates product totals per seller.\n- `SUM(oi.quantity)` gives total quantity sold for each seller/product pair.\n- `ROW_NUMBER()` ranks products inside each seller by quantity sold descending and product id ascending.\n- `rn = 1` returns one most ordered product per seller.",
      },
      {
        approach_title: "DISTINCT ON",
        approach_type: "postgres_specific",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT ON (seller_id) seller_id, product_id, total_quantity_sold FROM (SELECT seller_id, product_id, SUM(quantity) AS total_quantity_sold FROM order_items WHERE seller_id IS NOT NULL GROUP BY seller_id, product_id) product_sales ORDER BY seller_id, total_quantity_sold DESC, product_id ASC;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL `DISTINCT ON` after calculating seller/product sales totals.\n\n## 🔍 Explanation\n\n- The inner query calculates quantity sold per seller/product pair.\n- `DISTINCT ON (seller_id)` keeps one product per seller.\n- The `ORDER BY` ensures the highest quantity is chosen, with smaller product id used for ties.",
      },
      {
        approach_title: "Max quantity join",
        approach_type: "join",
        is_optimal: false,
        display_order: 3,
        query:
          "WITH product_sales AS (SELECT seller_id, product_id, SUM(quantity) AS total_quantity_sold FROM order_items WHERE seller_id IS NOT NULL GROUP BY seller_id, product_id), max_sales AS (SELECT seller_id, MAX(total_quantity_sold) AS max_quantity FROM product_sales GROUP BY seller_id) SELECT ps.seller_id, MIN(ps.product_id) AS product_id, ps.total_quantity_sold FROM product_sales ps JOIN max_sales ms ON ps.seller_id = ms.seller_id AND ps.total_quantity_sold = ms.max_quantity GROUP BY ps.seller_id, ps.total_quantity_sold;",
        explanation:
          "## 🧠 Approach\n\nCalculate seller/product totals, find the maximum quantity per seller, then choose the smaller product id among ties.\n\n## 🔍 Explanation\n\n- `product_sales` computes total quantity sold for every seller/product pair.\n- `max_sales` finds the maximum quantity for each seller.\n- Joining them keeps products tied at the seller's max quantity.\n- `MIN(product_id)` applies the required tie-breaker.",
      },
    ],
  },
  {
    code: "ECOMMERCE_093",
    approaches: [
      {
        approach_title: "ROW_NUMBER latest",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT customer_id, order_id, order_date FROM (SELECT customer_id, id AS order_id, order_date, ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC, id ASC) AS rn FROM orders) ranked WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nRank each customer's orders from latest to oldest and keep the first row.\n\n## 🔍 Explanation\n\n- `PARTITION BY customer_id` ranks orders separately for every customer.\n- `ORDER BY order_date DESC` puts latest orders first.\n- `id ASC` breaks ties when multiple orders share the same date.\n- `ROW_NUMBER()` gives one deterministic latest order per customer.\n- The outer query keeps `rn = 1`.",
      },
      {
        approach_title: "DISTINCT ON",
        approach_type: "postgres_specific",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT ON (customer_id) customer_id, id AS order_id, order_date FROM orders ORDER BY customer_id, order_date DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL `DISTINCT ON` to pick the first sorted order per customer.\n\n## 🔍 Explanation\n\n- `DISTINCT ON (customer_id)` keeps one row for each customer.\n- The row kept is determined by the `ORDER BY`.\n- `order_date DESC, id ASC` chooses the latest order and uses smaller order id for ties.",
      },
      {
        approach_title: "Latest date join",
        approach_type: "join",
        is_optimal: false,
        display_order: 3,
        query:
          "WITH latest_dates AS (SELECT customer_id, MAX(order_date) AS latest_order_date FROM orders GROUP BY customer_id) SELECT o.customer_id, MIN(o.id) AS order_id, o.order_date FROM orders o JOIN latest_dates ld ON o.customer_id = ld.customer_id AND o.order_date = ld.latest_order_date GROUP BY o.customer_id, o.order_date;",
        explanation:
          "## 🧠 Approach\n\nFind each customer's latest order date, join matching orders, then choose the smaller order id for ties.\n\n## 🔍 Explanation\n\n- `latest_dates` finds the maximum `order_date` per customer.\n- Joining back returns orders placed on that latest date.\n- `MIN(o.id)` applies the tie-break rule if multiple orders share that date.\n- `ROW_NUMBER()` is usually cleaner for this problem.",
      },
    ],
  },
  {
    code: "ECOMMERCE_094",
    approaches: [
      {
        approach_title: "Monthly running sum",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT revenue_month, monthly_revenue, SUM(monthly_revenue) OVER (ORDER BY revenue_month ASC) AS running_total FROM (SELECT DATE_TRUNC('month', order_date)::date AS revenue_month, SUM(total_amount) AS monthly_revenue FROM orders GROUP BY DATE_TRUNC('month', order_date)::date) monthly_revenue_data ORDER BY revenue_month ASC;",
        explanation:
          "## 🧠 Approach\n\nAggregate revenue by month, then use a window sum to calculate the cumulative running total.\n\n## 🔍 Explanation\n\n- The inner query groups orders by month using `DATE_TRUNC('month', order_date)::date`.\n- `SUM(total_amount)` calculates monthly revenue.\n- The outer `SUM(monthly_revenue) OVER (ORDER BY revenue_month ASC)` adds current and previous months to produce a running total.\n- `ORDER BY revenue_month ASC` keeps the result in chronological order.",
      },
      {
        approach_title: "CTE running sum",
        approach_type: "cte",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH monthly_revenue_data AS (SELECT DATE_TRUNC('month', order_date)::date AS revenue_month, SUM(total_amount) AS monthly_revenue FROM orders GROUP BY DATE_TRUNC('month', order_date)::date) SELECT revenue_month, monthly_revenue, SUM(monthly_revenue) OVER (ORDER BY revenue_month ASC) AS running_total FROM monthly_revenue_data ORDER BY revenue_month ASC;",
        explanation:
          "## 🧠 Approach\n\nName the monthly revenue step with a CTE, then calculate running total.\n\n## 🔍 Explanation\n\n- The CTE makes the monthly aggregation easier to read.\n- The final select applies a window running sum over the monthly rows.\n- This is equivalent to the derived-table approach but clearer for teaching.",
      },
      {
        approach_title: "Self join running total",
        approach_type: "join",
        is_optimal: false,
        display_order: 3,
        query:
          "WITH monthly_revenue_data AS (SELECT DATE_TRUNC('month', order_date)::date AS revenue_month, SUM(total_amount) AS monthly_revenue FROM orders GROUP BY DATE_TRUNC('month', order_date)::date) SELECT m1.revenue_month, m1.monthly_revenue, SUM(m2.monthly_revenue) AS running_total FROM monthly_revenue_data m1 JOIN monthly_revenue_data m2 ON m2.revenue_month <= m1.revenue_month GROUP BY m1.revenue_month, m1.monthly_revenue ORDER BY m1.revenue_month ASC;",
        explanation:
          "## 🧠 Approach\n\nJoin each month to all previous months and sum those previous monthly revenues.\n\n## 🔍 Explanation\n\n- `m1` is the current month.\n- `m2.revenue_month <= m1.revenue_month` includes all months up to the current month.\n- `SUM(m2.monthly_revenue)` produces the running total.\n- This teaches the logic behind running totals, but the window function is simpler and usually faster.",
      },
    ],
  },
  {
    code: "ECOMMERCE_095",
    approaches: [
      {
        approach_title: "ROW_NUMBER city top",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT city, customer_id, total_revenue FROM (SELECT a.city, o.customer_id, SUM(o.total_amount) AS total_revenue, ROW_NUMBER() OVER (PARTITION BY a.city ORDER BY SUM(o.total_amount) DESC, o.customer_id ASC) AS rn FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city, o.customer_id) ranked WHERE rn <= 3;",
        explanation:
          "## 🧠 Approach\n\nCalculate customer revenue per city, rank customers within each city, and keep the top 3.\n\n## 🔍 Explanation\n\n- Orders are joined to shipping addresses to get the city.\n- `GROUP BY a.city, o.customer_id` calculates total customer revenue within each city.\n- `ROW_NUMBER() OVER (PARTITION BY a.city ...)` ranks customers separately per city.\n- Revenue descending ranks highest spenders first.\n- Customer id ascending breaks ties.\n- `rn <= 3` keeps the top three customers per city.",
      },
      {
        approach_title: "DENSE_RANK city tiers",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT city, customer_id, total_revenue FROM (SELECT a.city, o.customer_id, SUM(o.total_amount) AS total_revenue, DENSE_RANK() OVER (PARTITION BY a.city ORDER BY SUM(o.total_amount) DESC) AS rnk FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city, o.customer_id) ranked WHERE rnk <= 3;",
        explanation:
          "## 🧠 Approach\n\nUse `DENSE_RANK` to return the top 3 revenue tiers per city.\n\n## 🔍 Explanation\n\n- Customers with the same revenue get the same rank.\n- `rnk <= 3` may return more than three customers per city when ties exist.\n- This is useful for top revenue levels, but not ideal when the requirement says top 3 customers with a tie-breaker.",
      },
    ],
  },
  {
    code: "ECOMMERCE_096",
    approaches: [
      {
        approach_title: "LEFT anti join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT pv.product_id FROM product_views pv LEFT JOIN order_items oi ON pv.product_id = oi.product_id WHERE oi.product_id IS NULL GROUP BY pv.product_id;",
        explanation:
          "## 🧠 Approach\n\nStart from viewed products, left join purchases, and keep products with no matching purchase.\n\n## 🔍 Explanation\n\n- `product_views` ensures the product was viewed at least once.\n- `LEFT JOIN order_items` checks whether the viewed product was purchased.\n- `WHERE oi.product_id IS NULL` keeps products with no purchase rows.\n- `GROUP BY pv.product_id` returns each product only once.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT pv.product_id FROM product_views pv WHERE NOT EXISTS (SELECT 1 FROM order_items oi WHERE oi.product_id = pv.product_id);",
        explanation:
          "## 🧠 Approach\n\nReturn viewed products for which no order item exists.\n\n## 🔍 Explanation\n\n- The outer query reads products from view events.\n- `NOT EXISTS` rejects products that appear in `order_items`.\n- `DISTINCT` ensures each product appears once even if it was viewed many times.",
      },
      {
        approach_title: "EXCEPT",
        approach_type: "set_operation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT product_id FROM product_views EXCEPT SELECT product_id FROM order_items;",
        explanation:
          "## 🧠 Approach\n\nUse set difference between viewed products and purchased products.\n\n## 🔍 Explanation\n\n- The first set contains products that were viewed.\n- The second set contains products that were purchased.\n- `EXCEPT` returns products in the first set but not the second.\n- Set operations remove duplicates automatically.",
      },
    ],
  },
  {
    code: "ECOMMERCE_097",
    approaches: [
      {
        approach_title: "COUNT DISTINCT categories",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT o.customer_id, COUNT(DISTINCT p.category_id) AS category_count FROM orders o JOIN order_items oi ON o.id = oi.order_id JOIN products p ON oi.product_id = p.id GROUP BY o.customer_id HAVING COUNT(DISTINCT p.category_id) > 3;",
        explanation:
          "## 🧠 Approach\n\nJoin orders to items and products, count distinct purchased categories per customer, then keep customers with more than 3 categories.\n\n## 🔍 Explanation\n\n- `orders` provides the customer.\n- `order_items` provides purchased products.\n- `products` provides the product category.\n- `COUNT(DISTINCT p.category_id)` counts unique categories bought by each customer.\n- `HAVING ... > 3` filters customers after aggregation.",
      },
      {
        approach_title: "Pre-distinct categories",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT customer_id, COUNT(*) AS category_count FROM (SELECT DISTINCT o.customer_id, p.category_id FROM orders o JOIN order_items oi ON o.id = oi.order_id JOIN products p ON oi.product_id = p.id) customer_categories GROUP BY customer_id HAVING COUNT(*) > 3;",
        explanation:
          "## 🧠 Approach\n\nCreate unique customer-category pairs first, then count those pairs per customer.\n\n## 🔍 Explanation\n\n- The inner query removes duplicate purchases from the same category by the same customer.\n- The outer query counts how many unique categories remain per customer.\n- This is equivalent to `COUNT(DISTINCT p.category_id)`.",
      },
    ],
  },
  {
    code: "ECOMMERCE_098",
    approaches: [
      {
        approach_title: "Delayed filter",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id AS shipment_id, order_id, estimated_delivery_at, delivered_at FROM shipments WHERE delivered_at IS NOT NULL AND estimated_delivery_at IS NOT NULL AND delivered_at > estimated_delivery_at;",
        explanation:
          "## 🧠 Approach\n\nCompare actual delivery timestamp against estimated delivery timestamp.\n\n## 🔍 Explanation\n\n- `delivered_at IS NOT NULL` ensures the shipment has actually been delivered.\n- `estimated_delivery_at IS NOT NULL` ensures there is an estimate to compare against.\n- `delivered_at > estimated_delivery_at` identifies delayed shipments.\n- The selected columns show shipment id, order id, estimate, and actual delivery timestamp.",
      },
      {
        approach_title: "Delay interval",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id AS shipment_id, order_id, estimated_delivery_at, delivered_at FROM shipments WHERE delivered_at IS NOT NULL AND estimated_delivery_at IS NOT NULL AND delivered_at - estimated_delivery_at > INTERVAL '0 seconds';",
        explanation:
          "## 🧠 Approach\n\nCalculate the delivery delay interval and keep positive delays.\n\n## 🔍 Explanation\n\n- `delivered_at - estimated_delivery_at` returns an interval.\n- If that interval is greater than zero, the shipment was late.\n- This is equivalent to `delivered_at > estimated_delivery_at`, but direct timestamp comparison is simpler.",
      },
    ],
  },
  {
    code: "ECOMMERCE_099",
    approaches: [
      {
        approach_title: "HAVING completed count",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT o.customer_id FROM orders o JOIN payments p ON o.id = p.order_id GROUP BY o.customer_id HAVING COUNT(*) = COUNT(CASE WHEN p.payment_status = 'completed' THEN 1 END);",
        explanation:
          "## 🧠 Approach\n\nGroup payments by customer and keep customers where every payment is completed.\n\n## 🔍 Explanation\n\n- Joining orders to payments connects each payment to a customer.\n- `COUNT(*)` counts all payments for that customer.\n- `COUNT(CASE WHEN p.payment_status = 'completed' THEN 1 END)` counts only completed payments.\n- If both counts are equal, every associated payment is completed.",
      },
      {
        approach_title: "BOOL_AND",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT o.customer_id FROM orders o JOIN payments p ON o.id = p.order_id GROUP BY o.customer_id HAVING BOOL_AND(p.payment_status = 'completed');",
        explanation:
          "## 🧠 Approach\n\nUse `BOOL_AND` to require all payment rows to be completed.\n\n## 🔍 Explanation\n\n- `BOOL_AND(...)` returns true only if the condition is true for every row in the group.\n- Grouping by customer creates one group of payments per customer.\n- This expresses the all-payments-completed requirement very directly in PostgreSQL.",
      },
      {
        approach_title: "NOT EXISTS failed",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT o.customer_id FROM orders o JOIN payments p ON o.id = p.order_id WHERE NOT EXISTS (SELECT 1 FROM orders o2 JOIN payments p2 ON o2.id = p2.order_id WHERE o2.customer_id = o.customer_id AND p2.payment_status <> 'completed');",
        explanation:
          "## 🧠 Approach\n\nReturn customers for whom no non-completed payment exists.\n\n## 🔍 Explanation\n\n- The outer query starts from customers who have at least one payment.\n- The correlated subquery searches for any payment for the same customer where status is not completed.\n- `NOT EXISTS` keeps only customers without such bad payments.\n- `DISTINCT` removes duplicates caused by multiple payments.",
      },
    ],
  },
  {
    code: "ECOMMERCE_100",
    approaches: [
      {
        approach_title: "LAG monthly orders",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT customer_id FROM (SELECT customer_id, order_month, LAG(order_month) OVER (PARTITION BY customer_id ORDER BY order_month ASC) AS previous_order_month FROM (SELECT DISTINCT customer_id, DATE_TRUNC('month', order_date)::date AS order_month FROM orders) monthly_orders) sequenced WHERE previous_order_month = (order_month - INTERVAL '1 month')::date;",
        explanation:
          "## 🧠 Approach\n\nConvert orders into unique customer-month activity, then use `LAG` to find consecutive months.\n\n## 🔍 Explanation\n\n- The inner query creates one row per customer per month, avoiding duplicate orders in the same month.\n- `LAG(order_month)` reads the previous active order month for each customer.\n- If the previous month equals the current month minus one month, the customer ordered in consecutive months.\n- `DISTINCT customer_id` returns each repeat-purchase customer once.",
      },
      {
        approach_title: "Self join months",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH monthly_orders AS (SELECT DISTINCT customer_id, DATE_TRUNC('month', order_date)::date AS order_month FROM orders) SELECT DISTINCT m1.customer_id FROM monthly_orders m1 JOIN monthly_orders m2 ON m2.customer_id = m1.customer_id AND m2.order_month = (m1.order_month + INTERVAL '1 month')::date;",
        explanation:
          "## 🧠 Approach\n\nCreate unique customer-month rows and join each month to the next month for the same customer.\n\n## 🔍 Explanation\n\n- `monthly_orders` removes duplicate orders within the same month.\n- `m2.order_month = m1.order_month + INTERVAL '1 month'` checks for an order in the following month.\n- Matching rows indicate at least two consecutive active months.\n- `DISTINCT` returns each customer once.",
      },
    ],
  },
];
