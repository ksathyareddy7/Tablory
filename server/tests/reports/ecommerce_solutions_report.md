# Solutions Evaluation Report (ecommerce)

**Summary:**
- Total Approaches: 259
- Passed: 259
- Failed: 0

## Detailed Results
### ✅ PASS : ECOMMERCE_001 - COUNT all
```sql
SELECT COUNT(*) AS count FROM customers;
```

### ✅ PASS : ECOMMERCE_001 - COUNT id
```sql
SELECT COUNT(id) AS count FROM customers;
```

### ✅ PASS : ECOMMERCE_002 - Filter active
```sql
SELECT COUNT(*) AS count FROM sellers WHERE seller_status = 'active';
```

### ✅ PASS : ECOMMERCE_002 - CASE count
```sql
SELECT COUNT(*) FILTER (WHERE seller_status = 'active') AS count FROM sellers;
```

### ✅ PASS : ECOMMERCE_003 - Boolean filter
```sql
SELECT COUNT(*) AS count FROM products WHERE is_active = TRUE;
```

### ✅ PASS : ECOMMERCE_003 - Shorthand filter
```sql
SELECT COUNT(*) AS count FROM products WHERE is_active;
```

### ✅ PASS : ECOMMERCE_004 - Zero stock
```sql
SELECT COUNT(*) AS count FROM products WHERE stock_quantity = 0;
```

### ✅ PASS : ECOMMERCE_004 - CASE count
```sql
SELECT COUNT(*) FILTER (WHERE stock_quantity = 0) AS count FROM products;
```

### ✅ PASS : ECOMMERCE_005 - Direct filter
```sql
SELECT id, name, stock_quantity FROM products WHERE stock_quantity < 10;
```

### ✅ PASS : ECOMMERCE_005 - Derived table
```sql
SELECT * FROM (SELECT id, name, stock_quantity FROM products) p WHERE stock_quantity < 10;
```

### ✅ PASS : ECOMMERCE_006 - Active brands
```sql
SELECT id, name FROM brands WHERE is_active = TRUE;
```

### ✅ PASS : ECOMMERCE_006 - Boolean shorthand
```sql
SELECT id, name FROM brands WHERE is_active;
```

### ✅ PASS : ECOMMERCE_007 - Shipping default
```sql
SELECT id, customer_id, city, state, country FROM addresses WHERE address_type = 'shipping' AND is_default = TRUE;
```

### ✅ PASS : ECOMMERCE_007 - FILTER style
```sql
SELECT id, customer_id, city, state, country FROM addresses WHERE address_type = 'shipping' AND is_default;
```

### ✅ PASS : ECOMMERCE_008 - Mobile filter
```sql
SELECT id, customer_id, os, browser, last_seen_at FROM customer_devices WHERE device_type = 'mobile';
```

### ✅ PASS : ECOMMERCE_008 - IN filter
```sql
SELECT id, customer_id, os, browser, last_seen_at FROM customer_devices WHERE device_type IN ('mobile');
```

### ✅ PASS : ECOMMERCE_009 - Active coupons
```sql
SELECT id, code, discount_type, discount_value FROM coupons WHERE is_active = TRUE;
```

### ✅ PASS : ECOMMERCE_009 - Boolean shorthand
```sql
SELECT id, code, discount_type, discount_value FROM coupons WHERE is_active;
```

### ✅ PASS : ECOMMERCE_010 - Date filter
```sql
SELECT id, code, expires_at FROM coupons WHERE expires_at < '2026-01-01';
```

### ✅ PASS : ECOMMERCE_010 - DATE cast
```sql
SELECT id, code, expires_at FROM coupons WHERE DATE(expires_at) < '2026-01-01';
```

### ✅ PASS : ECOMMERCE_011 - Delivered filter
```sql
SELECT id, customer_id, order_number, order_date, total_amount FROM orders WHERE status = 'delivered';
```

### ✅ PASS : ECOMMERCE_011 - IN filter
```sql
SELECT id, customer_id, order_number, order_date, total_amount FROM orders WHERE status IN ('delivered');
```

### ✅ PASS : ECOMMERCE_012 - Cancelled count
```sql
SELECT COUNT(*) AS count FROM orders WHERE status = 'cancelled';
```

### ✅ PASS : ECOMMERCE_012 - FILTER count
```sql
SELECT COUNT(*) FILTER (WHERE status = 'cancelled') AS count FROM orders;
```

### ✅ PASS : ECOMMERCE_012 - SUM CASE
```sql
SELECT SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) AS count FROM orders;
```

### ✅ PASS : ECOMMERCE_013 - Completed count
```sql
SELECT COUNT(*) AS count FROM payments WHERE payment_status = 'completed';
```

### ✅ PASS : ECOMMERCE_013 - FILTER count
```sql
SELECT COUNT(*) FILTER (WHERE payment_status = 'completed') AS count FROM payments;
```

### ✅ PASS : ECOMMERCE_013 - SUM CASE
```sql
SELECT SUM(CASE WHEN payment_status = 'completed' THEN 1 ELSE 0 END) AS count FROM payments;
```

### ✅ PASS : ECOMMERCE_014 - Failed filter
```sql
SELECT id, order_id, paid_amount, failure_reason FROM payments WHERE payment_status = 'failed';
```

### ✅ PASS : ECOMMERCE_014 - IN filter
```sql
SELECT id, order_id, paid_amount, failure_reason FROM payments WHERE payment_status IN ('failed');
```

### ✅ PASS : ECOMMERCE_015 - Pending filter
```sql
SELECT id, order_id, warehouse_id, carrier_name, created_at FROM shipments WHERE shipment_status = 'pending';
```

### ✅ PASS : ECOMMERCE_015 - IN filter
```sql
SELECT id, order_id, warehouse_id, carrier_name, created_at FROM shipments WHERE shipment_status IN ('pending');
```

### ✅ PASS : ECOMMERCE_016 - Requested returns
```sql
SELECT id, order_id, customer_id, reason, requested_at FROM returns WHERE return_status = 'requested';
```

### ✅ PASS : ECOMMERCE_016 - IN filter
```sql
SELECT id, order_id, customer_id, reason, requested_at FROM returns WHERE return_status IN ('requested');
```

### ✅ PASS : ECOMMERCE_017 - Open tickets
```sql
SELECT id, customer_id, order_id, ticket_type, subject FROM support_tickets WHERE ticket_status = 'open';
```

### ✅ PASS : ECOMMERCE_017 - IN filter
```sql
SELECT id, customer_id, order_id, ticket_type, subject FROM support_tickets WHERE ticket_status IN ('open');
```

### ✅ PASS : ECOMMERCE_018 - Public filter
```sql
SELECT id, customer_id, name FROM wishlists WHERE is_public = TRUE;
```

### ✅ PASS : ECOMMERCE_018 - Boolean shorthand
```sql
SELECT id, customer_id, name FROM wishlists WHERE is_public;
```

### ✅ PASS : ECOMMERCE_018 - IS TRUE
```sql
SELECT id, customer_id, name FROM wishlists WHERE is_public IS TRUE;
```

### ✅ PASS : ECOMMERCE_019 - Active carts
```sql
SELECT id, customer_id, created_at, updated_at FROM carts WHERE cart_status = 'active';
```

### ✅ PASS : ECOMMERCE_019 - IN filter
```sql
SELECT id, customer_id, created_at, updated_at FROM carts WHERE cart_status IN ('active');
```

### ✅ PASS : ECOMMERCE_020 - Approved reviews
```sql
SELECT id, product_id, customer_id, rating, created_at FROM reviews WHERE review_status = 'approved';
```

### ✅ PASS : ECOMMERCE_020 - IN filter
```sql
SELECT id, product_id, customer_id, rating, created_at FROM reviews WHERE review_status IN ('approved');
```

### ✅ PASS : ECOMMERCE_021 - COUNT all
```sql
SELECT COUNT(*) AS count FROM warehouses;
```

### ✅ PASS : ECOMMERCE_021 - COUNT id
```sql
SELECT COUNT(id) AS count FROM warehouses;
```

### ✅ PASS : ECOMMERCE_022 - Active warehouses
```sql
SELECT id, name, city, state, country FROM warehouses WHERE is_active = TRUE;
```

### ✅ PASS : ECOMMERCE_022 - Boolean shorthand
```sql
SELECT id, name, city, state, country FROM warehouses WHERE is_active;
```

### ✅ PASS : ECOMMERCE_022 - IS TRUE
```sql
SELECT id, name, city, state, country FROM warehouses WHERE is_active IS TRUE;
```

### ✅ PASS : ECOMMERCE_023 - Below reorder
```sql
SELECT id, warehouse_id, product_id, variant_id, quantity_available, reorder_level FROM inventory WHERE quantity_available < reorder_level;
```

### ✅ PASS : ECOMMERCE_023 - Difference check
```sql
SELECT id, warehouse_id, product_id, variant_id, quantity_available, reorder_level FROM inventory WHERE reorder_level - quantity_available > 0;
```

### ✅ PASS : ECOMMERCE_024 - Reserved positive
```sql
SELECT id, warehouse_id, product_id, variant_id, quantity_reserved FROM inventory WHERE quantity_reserved > 0;
```

### ✅ PASS : ECOMMERCE_024 - Not zero
```sql
SELECT id, warehouse_id, product_id, variant_id, quantity_reserved FROM inventory WHERE quantity_reserved <> 0;
```

### ✅ PASS : ECOMMERCE_025 - Stock in
```sql
SELECT id, warehouse_id, product_id, variant_id, quantity, created_at FROM inventory_movements WHERE movement_type = 'stock_in';
```

### ✅ PASS : ECOMMERCE_025 - IN filter
```sql
SELECT id, warehouse_id, product_id, variant_id, quantity, created_at FROM inventory_movements WHERE movement_type IN ('stock_in');
```

### ✅ PASS : ECOMMERCE_026 - Free shipping
```sql
SELECT id, code, minimum_order_amount, expires_at FROM coupons WHERE discount_type = 'free_shipping';
```

### ✅ PASS : ECOMMERCE_026 - IN filter
```sql
SELECT id, code, minimum_order_amount, expires_at FROM coupons WHERE discount_type IN ('free_shipping');
```

### ✅ PASS : ECOMMERCE_027 - Priority IN
```sql
SELECT id, customer_id, order_id, ticket_type, priority, subject FROM support_tickets WHERE priority IN ('high', 'urgent');
```

### ✅ PASS : ECOMMERCE_027 - OR filter
```sql
SELECT id, customer_id, order_id, ticket_type, priority, subject FROM support_tickets WHERE priority = 'high' OR priority = 'urgent';
```

### ✅ PASS : ECOMMERCE_028 - Requested refunds
```sql
SELECT id, payment_id, order_id, refund_amount, reason FROM refunds WHERE refund_status = 'requested';
```

### ✅ PASS : ECOMMERCE_028 - IN filter
```sql
SELECT id, payment_id, order_id, refund_amount, reason FROM refunds WHERE refund_status IN ('requested');
```

### ✅ PASS : ECOMMERCE_029 - Verified purchase
```sql
SELECT id, product_id, customer_id, rating, helpful_count FROM reviews WHERE is_verified_purchase = TRUE;
```

### ✅ PASS : ECOMMERCE_029 - Boolean shorthand
```sql
SELECT id, product_id, customer_id, rating, helpful_count FROM reviews WHERE is_verified_purchase;
```

### ✅ PASS : ECOMMERCE_029 - IS TRUE
```sql
SELECT id, product_id, customer_id, rating, helpful_count FROM reviews WHERE is_verified_purchase IS TRUE;
```

### ✅ PASS : ECOMMERCE_030 - Helpful threshold
```sql
SELECT id, product_id, customer_id, rating, helpful_count FROM reviews WHERE helpful_count >= 10;
```

### ✅ PASS : ECOMMERCE_030 - Between lower bound
```sql
SELECT id, product_id, customer_id, rating, helpful_count FROM reviews WHERE helpful_count BETWEEN 10 AND 2147483647;
```

### ✅ PASS : ECOMMERCE_031 - SUM revenue
```sql
SELECT SUM(total_amount) AS total_revenue FROM orders;
```

### ✅ PASS : ECOMMERCE_031 - COALESCE sum
```sql
SELECT COALESCE(SUM(total_amount), 0) AS total_revenue FROM orders;
```

### ✅ PASS : ECOMMERCE_032 - AVG order value
```sql
SELECT ROUND(AVG(total_amount), 2) AS avg_order_value FROM orders;
```

### ✅ PASS : ECOMMERCE_032 - Manual average
```sql
SELECT ROUND(SUM(total_amount) / NULLIF(COUNT(*), 0), 2) AS avg_order_value FROM orders;
```

### ✅ PASS : ECOMMERCE_033 - SUM shipping
```sql
SELECT SUM(shipping_fee) AS total_shipping_fee FROM orders;
```

### ✅ PASS : ECOMMERCE_033 - COALESCE sum
```sql
SELECT COALESCE(SUM(shipping_fee), 0) AS total_shipping_fee FROM orders;
```

### ✅ PASS : ECOMMERCE_034 - SUM refunds
```sql
SELECT SUM(refund_amount) AS total_refund_amount FROM refunds;
```

### ✅ PASS : ECOMMERCE_034 - COALESCE sum
```sql
SELECT COALESCE(SUM(refund_amount), 0) AS total_refund_amount FROM refunds;
```

### ✅ PASS : ECOMMERCE_035 - AVG price
```sql
SELECT ROUND(AVG(price), 2) AS avg_price FROM products;
```

### ✅ PASS : ECOMMERCE_035 - Manual average
```sql
SELECT ROUND(SUM(price) / NULLIF(COUNT(*), 0), 2) AS avg_price FROM products;
```

### ✅ PASS : ECOMMERCE_036 - SUM available
```sql
SELECT SUM(quantity_available) AS total_available_quantity FROM inventory;
```

### ✅ PASS : ECOMMERCE_036 - COALESCE sum
```sql
SELECT COALESCE(SUM(quantity_available), 0) AS total_available_quantity FROM inventory;
```

### ✅ PASS : ECOMMERCE_037 - AVG seller rating
```sql
SELECT ROUND(AVG(rating), 2) AS avg_seller_rating FROM sellers;
```

### ✅ PASS : ECOMMERCE_037 - Manual average
```sql
SELECT ROUND(SUM(rating) / NULLIF(COUNT(rating), 0), 2) AS avg_seller_rating FROM sellers;
```

### ✅ PASS : ECOMMERCE_038 - COUNT views
```sql
SELECT COUNT(*) AS count FROM product_views;
```

### ✅ PASS : ECOMMERCE_038 - COUNT id
```sql
SELECT COUNT(id) AS count FROM product_views;
```

### ✅ PASS : ECOMMERCE_039 - Clicked searches
```sql
SELECT COUNT(*) AS count FROM search_queries WHERE clicked_product_id IS NOT NULL;
```

### ✅ PASS : ECOMMERCE_039 - COUNT clicked id
```sql
SELECT COUNT(clicked_product_id) AS count FROM search_queries;
```

### ✅ PASS : ECOMMERCE_040 - Android orders
```sql
SELECT id, customer_id, order_number, order_date, total_amount FROM orders WHERE order_channel = 'android';
```

### ✅ PASS : ECOMMERCE_040 - IN filter
```sql
SELECT id, customer_id, order_number, order_date, total_amount FROM orders WHERE order_channel IN ('android');
```

### ✅ PASS : ECOMMERCE_041 - GROUP orders
```sql
SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id;
```

### ✅ PASS : ECOMMERCE_041 - COUNT id
```sql
SELECT customer_id, COUNT(id) AS order_count FROM orders GROUP BY customer_id;
```

### ✅ PASS : ECOMMERCE_041 - Window count
```sql
SELECT DISTINCT customer_id, order_count FROM (SELECT customer_id, COUNT(*) OVER (PARTITION BY customer_id) AS order_count FROM orders) x;
```

### ✅ PASS : ECOMMERCE_042 - GROUP products
```sql
SELECT category_id, COUNT(*) AS product_count FROM products GROUP BY category_id;
```

### ✅ PASS : ECOMMERCE_042 - COUNT id
```sql
SELECT category_id, COUNT(id) AS product_count FROM products GROUP BY category_id;
```

### ✅ PASS : ECOMMERCE_042 - Window count
```sql
SELECT DISTINCT category_id, product_count FROM (SELECT category_id, COUNT(*) OVER (PARTITION BY category_id) AS product_count FROM products) x;
```

### ✅ PASS : ECOMMERCE_043 - GROUP inventory
```sql
SELECT warehouse_id, SUM(quantity_available) AS total_quantity FROM inventory GROUP BY warehouse_id;
```

### ✅ PASS : ECOMMERCE_043 - COALESCE sum
```sql
SELECT warehouse_id, COALESCE(SUM(quantity_available), 0) AS total_quantity FROM inventory GROUP BY warehouse_id;
```

### ✅ PASS : ECOMMERCE_043 - Window sum
```sql
SELECT DISTINCT warehouse_id, total_quantity FROM (SELECT warehouse_id, SUM(quantity_available) OVER (PARTITION BY warehouse_id) AS total_quantity FROM inventory) x;
```

### ✅ PASS : ECOMMERCE_044 - GROUP revenue
```sql
SELECT customer_id, SUM(total_amount) AS total_revenue FROM orders GROUP BY customer_id;
```

### ✅ PASS : ECOMMERCE_044 - COALESCE sum
```sql
SELECT customer_id, COALESCE(SUM(total_amount), 0) AS total_revenue FROM orders GROUP BY customer_id;
```

### ✅ PASS : ECOMMERCE_044 - Window sum
```sql
SELECT DISTINCT customer_id, total_revenue FROM (SELECT customer_id, SUM(total_amount) OVER (PARTITION BY customer_id) AS total_revenue FROM orders) x;
```

### ✅ PASS : ECOMMERCE_045 - GROUP AVG
```sql
SELECT customer_id, ROUND(AVG(total_amount), 2) AS avg_order_value FROM orders GROUP BY customer_id;
```

### ✅ PASS : ECOMMERCE_045 - Manual average
```sql
SELECT customer_id, ROUND(SUM(total_amount) / NULLIF(COUNT(*), 0), 2) AS avg_order_value FROM orders GROUP BY customer_id;
```

### ✅ PASS : ECOMMERCE_045 - Window AVG
```sql
SELECT DISTINCT customer_id, avg_order_value FROM (SELECT customer_id, ROUND(AVG(total_amount) OVER (PARTITION BY customer_id), 2) AS avg_order_value FROM orders) x;
```

### ✅ PASS : ECOMMERCE_046 - GROUP quantity
```sql
SELECT product_id, SUM(quantity) AS total_quantity_sold FROM order_items GROUP BY product_id;
```

### ✅ PASS : ECOMMERCE_046 - COALESCE sum
```sql
SELECT product_id, COALESCE(SUM(quantity), 0) AS total_quantity_sold FROM order_items GROUP BY product_id;
```

### ✅ PASS : ECOMMERCE_046 - Window sum
```sql
SELECT DISTINCT product_id, total_quantity_sold FROM (SELECT product_id, SUM(quantity) OVER (PARTITION BY product_id) AS total_quantity_sold FROM order_items) x;
```

### ✅ PASS : ECOMMERCE_047 - GROUP product revenue
```sql
SELECT product_id, SUM(total_price) AS total_revenue FROM order_items GROUP BY product_id;
```

### ✅ PASS : ECOMMERCE_047 - Quantity times price
```sql
SELECT product_id, SUM(total_price) AS total_revenue FROM order_items GROUP BY product_id HAVING SUM(total_price) >= 0;
```

### ✅ PASS : ECOMMERCE_047 - Window sum
```sql
SELECT DISTINCT product_id, total_revenue FROM (SELECT product_id, SUM(total_price) OVER (PARTITION BY product_id) AS total_revenue FROM order_items) x;
```

### ✅ PASS : ECOMMERCE_048 - GROUP reviews
```sql
SELECT product_id, COUNT(*) AS review_count FROM reviews GROUP BY product_id;
```

### ✅ PASS : ECOMMERCE_048 - COUNT id
```sql
SELECT product_id, COUNT(id) AS review_count FROM reviews GROUP BY product_id;
```

### ✅ PASS : ECOMMERCE_048 - Window count
```sql
SELECT DISTINCT product_id, review_count FROM (SELECT product_id, COUNT(*) OVER (PARTITION BY product_id) AS review_count FROM reviews) x;
```

### ✅ PASS : ECOMMERCE_049 - GROUP status
```sql
SELECT payment_status, COUNT(*) AS payment_count FROM payments GROUP BY payment_status;
```

### ✅ PASS : ECOMMERCE_049 - COUNT id
```sql
SELECT payment_status, COUNT(id) AS payment_count FROM payments GROUP BY payment_status;
```

### ✅ PASS : ECOMMERCE_049 - Window count
```sql
SELECT DISTINCT payment_status, payment_count FROM (SELECT payment_status, COUNT(*) OVER (PARTITION BY payment_status) AS payment_count FROM payments) x;
```

### ✅ PASS : ECOMMERCE_050 - GROUP order status
```sql
SELECT status, COUNT(*) AS order_count FROM orders GROUP BY status;
```

### ✅ PASS : ECOMMERCE_050 - COUNT id
```sql
SELECT status, COUNT(id) AS order_count FROM orders GROUP BY status;
```

### ✅ PASS : ECOMMERCE_050 - Window count
```sql
SELECT DISTINCT status, order_count FROM (SELECT status, COUNT(*) OVER (PARTITION BY status) AS order_count FROM orders) x;
```

### ✅ PASS : ECOMMERCE_051 - GROUP coupons
```sql
SELECT coupon_id, COUNT(*) AS usage_count FROM orders WHERE coupon_id IS NOT NULL GROUP BY coupon_id;
```

### ✅ PASS : ECOMMERCE_051 - COUNT coupon id
```sql
SELECT coupon_id, COUNT(coupon_id) AS usage_count FROM orders WHERE coupon_id IS NOT NULL GROUP BY coupon_id;
```

### ✅ PASS : ECOMMERCE_051 - Window count
```sql
SELECT DISTINCT coupon_id, usage_count FROM (SELECT coupon_id, COUNT(*) OVER (PARTITION BY coupon_id) AS usage_count FROM orders WHERE coupon_id IS NOT NULL) x;
```

### ✅ PASS : ECOMMERCE_052 - GROUP carts
```sql
SELECT cart_id, COUNT(*) AS item_count FROM cart_items GROUP BY cart_id;
```

### ✅ PASS : ECOMMERCE_052 - COUNT id
```sql
SELECT cart_id, COUNT(id) AS item_count FROM cart_items GROUP BY cart_id;
```

### ✅ PASS : ECOMMERCE_052 - Window count
```sql
SELECT DISTINCT cart_id, item_count FROM (SELECT cart_id, COUNT(*) OVER (PARTITION BY cart_id) AS item_count FROM cart_items) x;
```

### ✅ PASS : ECOMMERCE_053 - GROUP wishlists
```sql
SELECT wishlist_id, COUNT(*) AS item_count FROM wishlist_items GROUP BY wishlist_id;
```

### ✅ PASS : ECOMMERCE_053 - COUNT product
```sql
SELECT wishlist_id, COUNT(product_id) AS item_count FROM wishlist_items GROUP BY wishlist_id;
```

### ✅ PASS : ECOMMERCE_053 - Window count
```sql
SELECT DISTINCT wishlist_id, item_count FROM (SELECT wishlist_id, COUNT(*) OVER (PARTITION BY wishlist_id) AS item_count FROM wishlist_items) x;
```

### ✅ PASS : ECOMMERCE_054 - GROUP warehouses
```sql
SELECT warehouse_id, COUNT(*) AS shipment_count FROM shipments GROUP BY warehouse_id;
```

### ✅ PASS : ECOMMERCE_054 - COUNT id
```sql
SELECT warehouse_id, COUNT(id) AS shipment_count FROM shipments GROUP BY warehouse_id;
```

### ✅ PASS : ECOMMERCE_054 - Window count
```sql
SELECT DISTINCT warehouse_id, shipment_count FROM (SELECT warehouse_id, COUNT(*) OVER (PARTITION BY warehouse_id) AS shipment_count FROM shipments) x;
```

### ✅ PASS : ECOMMERCE_055 - GROUP returns
```sql
SELECT customer_id, COUNT(*) AS return_count FROM returns GROUP BY customer_id;
```

### ✅ PASS : ECOMMERCE_055 - COUNT id
```sql
SELECT customer_id, COUNT(id) AS return_count FROM returns GROUP BY customer_id;
```

### ✅ PASS : ECOMMERCE_055 - Window count
```sql
SELECT DISTINCT customer_id, return_count FROM (SELECT customer_id, COUNT(*) OVER (PARTITION BY customer_id) AS return_count FROM returns) x;
```

### ✅ PASS : ECOMMERCE_056 - GROUP refund amount
```sql
SELECT order_id, SUM(refund_amount) AS total_refund FROM refunds GROUP BY order_id;
```

### ✅ PASS : ECOMMERCE_056 - COALESCE sum
```sql
SELECT order_id, COALESCE(SUM(refund_amount), 0) AS total_refund FROM refunds GROUP BY order_id;
```

### ✅ PASS : ECOMMERCE_056 - Window sum
```sql
SELECT DISTINCT order_id, total_refund FROM (SELECT order_id, SUM(refund_amount) OVER (PARTITION BY order_id) AS total_refund FROM refunds) x;
```

### ✅ PASS : ECOMMERCE_057 - GROUP views
```sql
SELECT product_id, COUNT(*) AS view_count FROM product_views GROUP BY product_id;
```

### ✅ PASS : ECOMMERCE_057 - COUNT id
```sql
SELECT product_id, COUNT(id) AS view_count FROM product_views GROUP BY product_id;
```

### ✅ PASS : ECOMMERCE_057 - Window count
```sql
SELECT DISTINCT product_id, view_count FROM (SELECT product_id, COUNT(*) OVER (PARTITION BY product_id) AS view_count FROM product_views) x;
```

### ✅ PASS : ECOMMERCE_058 - GROUP searches
```sql
SELECT customer_id, COUNT(*) AS search_count FROM search_queries WHERE customer_id IS NOT NULL GROUP BY customer_id;
```

### ✅ PASS : ECOMMERCE_058 - COUNT customer id
```sql
SELECT customer_id, COUNT(customer_id) AS search_count FROM search_queries WHERE customer_id IS NOT NULL GROUP BY customer_id;
```

### ✅ PASS : ECOMMERCE_058 - Window count
```sql
SELECT DISTINCT customer_id, search_count FROM (SELECT customer_id, COUNT(*) OVER (PARTITION BY customer_id) AS search_count FROM search_queries WHERE customer_id IS NOT NULL) x;
```

### ✅ PASS : ECOMMERCE_059 - GROUP ticket type
```sql
SELECT ticket_type, COUNT(*) AS ticket_count FROM support_tickets GROUP BY ticket_type;
```

### ✅ PASS : ECOMMERCE_059 - COUNT id
```sql
SELECT ticket_type, COUNT(id) AS ticket_count FROM support_tickets GROUP BY ticket_type;
```

### ✅ PASS : ECOMMERCE_059 - Window count
```sql
SELECT DISTINCT ticket_type, ticket_count FROM (SELECT ticket_type, COUNT(*) OVER (PARTITION BY ticket_type) AS ticket_count FROM support_tickets) x;
```

### ✅ PASS : ECOMMERCE_060 - GROUP messages
```sql
SELECT ticket_id, COUNT(*) AS message_count FROM support_messages GROUP BY ticket_id;
```

### ✅ PASS : ECOMMERCE_060 - COUNT id
```sql
SELECT ticket_id, COUNT(id) AS message_count FROM support_messages GROUP BY ticket_id;
```

### ✅ PASS : ECOMMERCE_060 - Window count
```sql
SELECT DISTINCT ticket_id, message_count FROM (SELECT ticket_id, COUNT(*) OVER (PARTITION BY ticket_id) AS message_count FROM support_messages) x;
```

### ✅ PASS : ECOMMERCE_061 - JOIN category quantity
```sql
SELECT p.category_id, SUM(oi.quantity) AS total_quantity_sold FROM order_items oi JOIN products p ON oi.product_id = p.id GROUP BY p.category_id;
```

### ✅ PASS : ECOMMERCE_061 - Pre-aggregate products
```sql
SELECT category_id, SUM(product_quantity_sold) AS total_quantity_sold FROM (SELECT p.category_id, oi.product_id, SUM(oi.quantity) AS product_quantity_sold FROM order_items oi JOIN products p ON oi.product_id = p.id GROUP BY p.category_id, oi.product_id) product_sales GROUP BY category_id;
```

### ✅ PASS : ECOMMERCE_062 - JOIN category revenue
```sql
SELECT p.category_id, SUM(oi.total_price) AS total_revenue FROM order_items oi JOIN products p ON oi.product_id = p.id GROUP BY p.category_id;
```

### ✅ PASS : ECOMMERCE_062 - Quantity times price
```sql
SELECT p.category_id, SUM(oi.total_price) AS total_revenue FROM order_items oi JOIN products p ON oi.product_id = p.id GROUP BY p.category_id HAVING SUM(oi.total_price) >= 0;
```

### ✅ PASS : ECOMMERCE_062 - Pre-aggregate products
```sql
SELECT category_id, SUM(product_revenue) AS total_revenue FROM (SELECT p.category_id, oi.product_id, SUM(oi.total_price) AS product_revenue FROM order_items oi JOIN products p ON oi.product_id = p.id GROUP BY p.category_id, oi.product_id) product_revenue GROUP BY category_id;
```

### ✅ PASS : ECOMMERCE_063 - JOIN category rating
```sql
SELECT p.category_id, ROUND(AVG(r.rating), 2) AS avg_rating FROM reviews r JOIN products p ON r.product_id = p.id GROUP BY p.category_id;
```

### ✅ PASS : ECOMMERCE_063 - Product average first
```sql
SELECT p.category_id, ROUND((SUM(r.rating)::numeric / NULLIF(COUNT(r.rating), 0)), 2) AS avg_rating FROM reviews r JOIN products p ON r.product_id = p.id GROUP BY p.category_id;
```

### ✅ PASS : ECOMMERCE_063 - Window average
```sql
SELECT DISTINCT category_id, avg_rating FROM (SELECT p.category_id, ROUND(AVG(r.rating) OVER (PARTITION BY p.category_id), 2) AS avg_rating FROM reviews r JOIN products p ON r.product_id = p.id) x;
```

### ✅ PASS : ECOMMERCE_064 - JOIN city orders
```sql
SELECT a.city, COUNT(*) AS order_count FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city;
```

### ✅ PASS : ECOMMERCE_064 - COUNT order id
```sql
SELECT a.city, COUNT(o.id) AS order_count FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city;
```

### ✅ PASS : ECOMMERCE_064 - Preselect city
```sql
SELECT city, COUNT(*) AS order_count FROM (SELECT o.id, a.city FROM orders o JOIN addresses a ON o.shipping_address_id = a.id) order_cities GROUP BY city;
```

### ✅ PASS : ECOMMERCE_065 - JOIN city revenue
```sql
SELECT a.city, SUM(o.total_amount) AS total_revenue FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city;
```

### ✅ PASS : ECOMMERCE_065 - COALESCE sum
```sql
SELECT a.city, COALESCE(SUM(o.total_amount), 0) AS total_revenue FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city;
```

### ✅ PASS : ECOMMERCE_065 - Preselect city
```sql
SELECT city, SUM(total_amount) AS total_revenue FROM (SELECT a.city, o.total_amount FROM orders o JOIN addresses a ON o.shipping_address_id = a.id) order_cities GROUP BY city;
```

### ✅ PASS : ECOMMERCE_066 - JOIN state orders
```sql
SELECT a.state, COUNT(*) AS order_count FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.state;
```

### ✅ PASS : ECOMMERCE_066 - COUNT order id
```sql
SELECT a.state, COUNT(o.id) AS order_count FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.state;
```

### ✅ PASS : ECOMMERCE_066 - Preselect state
```sql
SELECT state, COUNT(*) AS order_count FROM (SELECT o.id, a.state FROM orders o JOIN addresses a ON o.shipping_address_id = a.id) order_states GROUP BY state;
```

### ✅ PASS : ECOMMERCE_067 - JOIN state revenue
```sql
SELECT a.state, SUM(o.total_amount) AS total_revenue FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.state;
```

### ✅ PASS : ECOMMERCE_067 - COALESCE sum
```sql
SELECT a.state, COALESCE(SUM(o.total_amount), 0) AS total_revenue FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.state;
```

### ✅ PASS : ECOMMERCE_067 - Preselect state
```sql
SELECT state, SUM(total_amount) AS total_revenue FROM (SELECT a.state, o.total_amount FROM orders o JOIN addresses a ON o.shipping_address_id = a.id) order_states GROUP BY state;
```

### ✅ PASS : ECOMMERCE_068 - GROUP seller revenue
```sql
SELECT oi.seller_id, SUM(oi.total_price) AS total_revenue FROM order_items oi GROUP BY oi.seller_id;
```

### ✅ PASS : ECOMMERCE_068 - Quantity times price
```sql
SELECT seller_id, SUM(total_price) AS total_revenue FROM order_items GROUP BY seller_id HAVING SUM(total_price) >= 0;
```

### ✅ PASS : ECOMMERCE_068 - Window sum
```sql
SELECT DISTINCT seller_id, total_revenue FROM (SELECT seller_id, SUM(total_price) OVER (PARTITION BY seller_id) AS total_revenue FROM order_items) x;
```

### ✅ PASS : ECOMMERCE_069 - GROUP channel
```sql
SELECT order_channel, COUNT(*) AS order_count FROM orders GROUP BY order_channel;
```

### ✅ PASS : ECOMMERCE_069 - COUNT id
```sql
SELECT order_channel, COUNT(id) AS order_count FROM orders GROUP BY order_channel;
```

### ✅ PASS : ECOMMERCE_069 - Window count
```sql
SELECT DISTINCT order_channel, order_count FROM (SELECT order_channel, COUNT(*) OVER (PARTITION BY order_channel) AS order_count FROM orders) x;
```

### ✅ PASS : ECOMMERCE_070 - GROUP carrier AVG
```sql
SELECT carrier_name, ROUND(AVG(shipping_cost), 2) AS avg_shipping_cost FROM shipments GROUP BY carrier_name;
```

### ✅ PASS : ECOMMERCE_070 - Manual average
```sql
SELECT carrier_name, ROUND(SUM(shipping_cost) / NULLIF(COUNT(shipping_cost), 0), 2) AS avg_shipping_cost FROM shipments GROUP BY carrier_name;
```

### ✅ PASS : ECOMMERCE_070 - Window AVG
```sql
SELECT DISTINCT carrier_name, avg_shipping_cost FROM (SELECT carrier_name, ROUND(AVG(shipping_cost) OVER (PARTITION BY carrier_name), 2) AS avg_shipping_cost FROM shipments) x;
```

### ✅ PASS : ECOMMERCE_071 - GROUP return status
```sql
SELECT return_status, COUNT(*) AS return_count FROM returns GROUP BY return_status;
```

### ✅ PASS : ECOMMERCE_071 - COUNT id
```sql
SELECT return_status, COUNT(id) AS return_count FROM returns GROUP BY return_status;
```

### ✅ PASS : ECOMMERCE_071 - Window count
```sql
SELECT DISTINCT return_status, return_count FROM (SELECT return_status, COUNT(*) OVER (PARTITION BY return_status) AS return_count FROM returns) x;
```

### ✅ PASS : ECOMMERCE_072 - GROUP refund status
```sql
SELECT refund_status, COUNT(*) AS refund_count FROM refunds GROUP BY refund_status;
```

### ✅ PASS : ECOMMERCE_072 - COUNT id
```sql
SELECT refund_status, COUNT(id) AS refund_count FROM refunds GROUP BY refund_status;
```

### ✅ PASS : ECOMMERCE_072 - Window count
```sql
SELECT DISTINCT refund_status, refund_count FROM (SELECT refund_status, COUNT(*) OVER (PARTITION BY refund_status) AS refund_count FROM refunds) x;
```

### ✅ PASS : ECOMMERCE_073 - GROUP sellers
```sql
SELECT seller_id, COUNT(*) AS product_count FROM products GROUP BY seller_id;
```

### ✅ PASS : ECOMMERCE_073 - COUNT id
```sql
SELECT seller_id, COUNT(id) AS product_count FROM products GROUP BY seller_id;
```

### ✅ PASS : ECOMMERCE_073 - Window count
```sql
SELECT DISTINCT seller_id, product_count FROM (SELECT seller_id, COUNT(*) OVER (PARTITION BY seller_id) AS product_count FROM products) x;
```

### ✅ PASS : ECOMMERCE_074 - GROUP seller AVG
```sql
SELECT seller_id, ROUND(AVG(price), 2) AS avg_price FROM products GROUP BY seller_id;
```

### ✅ PASS : ECOMMERCE_074 - Manual average
```sql
SELECT seller_id, ROUND(SUM(price) / NULLIF(COUNT(price), 0), 2) AS avg_price FROM products GROUP BY seller_id;
```

### ✅ PASS : ECOMMERCE_074 - Window AVG
```sql
SELECT DISTINCT seller_id, avg_price FROM (SELECT seller_id, ROUND(AVG(price) OVER (PARTITION BY seller_id), 2) AS avg_price FROM products) x;
```

### ✅ PASS : ECOMMERCE_075 - JOIN device views
```sql
SELECT d.device_type, COUNT(*) AS view_count FROM product_views pv JOIN customer_devices d ON pv.device_id = d.id GROUP BY d.device_type;
```

### ✅ PASS : ECOMMERCE_075 - COUNT view id
```sql
SELECT d.device_type, COUNT(pv.id) AS view_count FROM product_views pv JOIN customer_devices d ON pv.device_id = d.id GROUP BY d.device_type;
```

### ✅ PASS : ECOMMERCE_075 - Preselect type
```sql
SELECT device_type, COUNT(*) AS view_count FROM (SELECT d.device_type FROM product_views pv JOIN customer_devices d ON pv.device_id = d.id) device_views GROUP BY device_type;
```

### ✅ PASS : ECOMMERCE_076 - GROUP query AVG
```sql
SELECT query_text, ROUND(AVG(result_count), 2) AS avg_results FROM search_queries GROUP BY query_text;
```

### ✅ PASS : ECOMMERCE_076 - Manual average
```sql
SELECT query_text, ROUND(SUM(result_count)::numeric / NULLIF(COUNT(result_count), 0), 2) AS avg_results FROM search_queries GROUP BY query_text;
```

### ✅ PASS : ECOMMERCE_076 - Window AVG
```sql
SELECT DISTINCT query_text, avg_results FROM (SELECT query_text, ROUND(AVG(result_count) OVER (PARTITION BY query_text), 2) AS avg_results FROM search_queries) x;
```

### ✅ PASS : ECOMMERCE_077 - DATE group
```sql
SELECT DATE(order_date) AS order_day, COUNT(*) AS order_count FROM orders GROUP BY DATE(order_date);
```

### ✅ PASS : ECOMMERCE_077 - DATE_TRUNC day
```sql
SELECT DATE_TRUNC('day', order_date)::date AS order_day, COUNT(*) AS order_count FROM orders GROUP BY DATE_TRUNC('day', order_date)::date;
```

### ✅ PASS : ECOMMERCE_077 - Subquery day
```sql
SELECT order_day, COUNT(*) AS order_count FROM (SELECT DATE(order_date) AS order_day FROM orders) daily_orders GROUP BY order_day;
```

### ✅ PASS : ECOMMERCE_078 - DATE revenue
```sql
SELECT DATE(order_date) AS order_day, SUM(total_amount) AS total_revenue FROM orders GROUP BY DATE(order_date);
```

### ✅ PASS : ECOMMERCE_078 - DATE_TRUNC revenue
```sql
SELECT DATE_TRUNC('day', order_date)::date AS order_day, SUM(total_amount) AS total_revenue FROM orders GROUP BY DATE_TRUNC('day', order_date)::date;
```

### ✅ PASS : ECOMMERCE_078 - Subquery day
```sql
SELECT order_day, SUM(total_amount) AS total_revenue FROM (SELECT DATE(order_date) AS order_day, total_amount FROM orders) daily_orders GROUP BY order_day;
```

### ✅ PASS : ECOMMERCE_079 - GROUP shipment events
```sql
SELECT shipment_id, COUNT(*) AS event_count FROM shipment_events GROUP BY shipment_id;
```

### ✅ PASS : ECOMMERCE_079 - COUNT id
```sql
SELECT shipment_id, COUNT(id) AS event_count FROM shipment_events GROUP BY shipment_id;
```

### ✅ PASS : ECOMMERCE_079 - Window count
```sql
SELECT DISTINCT shipment_id, event_count FROM (SELECT shipment_id, COUNT(*) OVER (PARTITION BY shipment_id) AS event_count FROM shipment_events) x;
```

### ✅ PASS : ECOMMERCE_080 - GROUP status changes
```sql
SELECT order_id, COUNT(*) AS change_count FROM order_status_history GROUP BY order_id;
```

### ✅ PASS : ECOMMERCE_080 - COUNT id
```sql
SELECT order_id, COUNT(id) AS change_count FROM order_status_history GROUP BY order_id;
```

### ✅ PASS : ECOMMERCE_080 - Window count
```sql
SELECT DISTINCT order_id, change_count FROM (SELECT order_id, COUNT(*) OVER (PARTITION BY order_id) AS change_count FROM order_status_history) x;
```

### ✅ PASS : ECOMMERCE_081 - GROUP top 5
```sql
SELECT customer_id, SUM(total_amount) AS total_revenue FROM orders GROUP BY customer_id ORDER BY total_revenue DESC, customer_id ASC LIMIT 5;
```

### ✅ PASS : ECOMMERCE_081 - Subquery top
```sql
SELECT customer_id, total_revenue FROM (SELECT customer_id, SUM(total_amount) AS total_revenue FROM orders GROUP BY customer_id) customer_revenue ORDER BY total_revenue DESC, customer_id ASC LIMIT 5;
```

### ✅ PASS : ECOMMERCE_081 - ROW_NUMBER top
```sql
SELECT customer_id, total_revenue FROM (SELECT customer_id, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, customer_id ASC) AS rn FROM (SELECT customer_id, SUM(total_amount) AS total_revenue FROM orders GROUP BY customer_id) customer_revenue) ranked WHERE rn <= 5 ORDER BY total_revenue DESC, customer_id ASC;
```

### ✅ PASS : ECOMMERCE_082 - GROUP top quantity
```sql
SELECT product_id, SUM(quantity) AS total_quantity_sold FROM order_items GROUP BY product_id ORDER BY total_quantity_sold DESC, product_id ASC LIMIT 5;
```

### ✅ PASS : ECOMMERCE_082 - Subquery top
```sql
SELECT product_id, total_quantity_sold FROM (SELECT product_id, SUM(quantity) AS total_quantity_sold FROM order_items GROUP BY product_id) product_quantity ORDER BY total_quantity_sold DESC, product_id ASC LIMIT 5;
```

### ✅ PASS : ECOMMERCE_082 - ROW_NUMBER top
```sql
SELECT product_id, total_quantity_sold FROM (SELECT product_id, total_quantity_sold, ROW_NUMBER() OVER (ORDER BY total_quantity_sold DESC, product_id ASC) AS rn FROM (SELECT product_id, SUM(quantity) AS total_quantity_sold FROM order_items GROUP BY product_id) product_quantity) ranked WHERE rn <= 5 ORDER BY total_quantity_sold DESC, product_id ASC;
```

### ✅ PASS : ECOMMERCE_083 - GROUP seller top
```sql
SELECT seller_id, SUM(total_price) AS total_revenue FROM order_items WHERE seller_id IS NOT NULL GROUP BY seller_id ORDER BY total_revenue DESC, seller_id ASC LIMIT 5;
```

### ✅ PASS : ECOMMERCE_083 - Quantity times price
```sql
SELECT seller_id, SUM(total_price) AS total_revenue FROM order_items WHERE seller_id IS NOT NULL GROUP BY seller_id HAVING SUM(total_price) >= 0 ORDER BY total_revenue DESC, seller_id ASC LIMIT 5;
```

### ✅ PASS : ECOMMERCE_083 - ROW_NUMBER top
```sql
SELECT seller_id, total_revenue FROM (SELECT seller_id, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, seller_id ASC) AS rn FROM (SELECT seller_id, SUM(total_price) AS total_revenue FROM order_items WHERE seller_id IS NOT NULL GROUP BY seller_id) seller_revenue) ranked WHERE rn <= 5 ORDER BY total_revenue DESC, seller_id ASC;
```

### ✅ PASS : ECOMMERCE_084 - GROUP views top
```sql
SELECT product_id, COUNT(*) AS view_count FROM product_views GROUP BY product_id ORDER BY view_count DESC, product_id ASC LIMIT 5;
```

### ✅ PASS : ECOMMERCE_084 - Subquery top
```sql
SELECT product_id, view_count FROM (SELECT product_id, COUNT(*) AS view_count FROM product_views GROUP BY product_id) product_views_count ORDER BY view_count DESC, product_id ASC LIMIT 5;
```

### ✅ PASS : ECOMMERCE_084 - ROW_NUMBER top
```sql
SELECT product_id, view_count FROM (SELECT product_id, view_count, ROW_NUMBER() OVER (ORDER BY view_count DESC, product_id ASC) AS rn FROM (SELECT product_id, COUNT(*) AS view_count FROM product_views GROUP BY product_id) product_views_count) ranked WHERE rn <= 5 ORDER BY view_count DESC, product_id ASC;
```

### ✅ PASS : ECOMMERCE_085 - LEFT anti join
```sql
SELECT p.id AS product_id FROM products p LEFT JOIN reviews r ON p.id = r.product_id WHERE r.product_id IS NULL;
```

### ✅ PASS : ECOMMERCE_085 - NOT EXISTS
```sql
SELECT p.id AS product_id FROM products p WHERE NOT EXISTS (SELECT 1 FROM reviews r WHERE r.product_id = p.id);
```

### ✅ PASS : ECOMMERCE_085 - NOT IN
```sql
SELECT id AS product_id FROM products WHERE id NOT IN (SELECT product_id FROM reviews WHERE product_id IS NOT NULL);
```

### ✅ PASS : ECOMMERCE_086 - LEFT anti join
```sql
SELECT c.id AS customer_id FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE o.customer_id IS NULL;
```

### ✅ PASS : ECOMMERCE_086 - NOT EXISTS
```sql
SELECT c.id AS customer_id FROM customers c WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);
```

### ✅ PASS : ECOMMERCE_086 - NOT IN
```sql
SELECT id AS customer_id FROM customers WHERE id NOT IN (SELECT customer_id FROM orders WHERE customer_id IS NOT NULL);
```

### ✅ PASS : ECOMMERCE_087 - Active cart items
```sql
SELECT c.id AS cart_id, c.customer_id, COUNT(ci.id) AS item_count FROM carts c JOIN cart_items ci ON c.id = ci.cart_id WHERE c.cart_status = 'active' GROUP BY c.id, c.customer_id;
```

### ✅ PASS : ECOMMERCE_087 - COUNT star
```sql
SELECT c.id AS cart_id, c.customer_id, COUNT(*) AS item_count FROM carts c JOIN cart_items ci ON c.id = ci.cart_id WHERE c.cart_status = 'active' GROUP BY c.id, c.customer_id;
```

### ✅ PASS : ECOMMERCE_087 - Pre-aggregate items
```sql
SELECT c.id AS cart_id, c.customer_id, ci.item_count FROM carts c JOIN (SELECT cart_id, COUNT(*) AS item_count FROM cart_items GROUP BY cart_id) ci ON c.id = ci.cart_id WHERE c.cart_status = 'active';
```

### ✅ PASS : ECOMMERCE_088 - Category avg join
```sql
SELECT p.id AS product_id, p.category_id, p.price FROM products p JOIN (SELECT category_id, AVG(price) AS avg_price FROM products GROUP BY category_id) category_prices ON p.category_id = category_prices.category_id WHERE p.price > category_prices.avg_price;
```

### ✅ PASS : ECOMMERCE_088 - Window average
```sql
SELECT product_id, category_id, price FROM (SELECT id AS product_id, category_id, price, AVG(price) OVER (PARTITION BY category_id) AS avg_category_price FROM products) p WHERE price > avg_category_price;
```

### ✅ PASS : ECOMMERCE_089 - GROUP HAVING
```sql
SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id HAVING COUNT(*) > 10;
```

### ✅ PASS : ECOMMERCE_089 - Subquery filter
```sql
SELECT customer_id, order_count FROM (SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id) customer_orders WHERE order_count > 10;
```

### ✅ PASS : ECOMMERCE_089 - Window count
```sql
SELECT DISTINCT customer_id, order_count FROM (SELECT customer_id, COUNT(*) OVER (PARTITION BY customer_id) AS order_count FROM orders) x WHERE order_count > 10;
```

### ✅ PASS : ECOMMERCE_090 - COUNT DISTINCT HAVING
```sql
SELECT product_id, COUNT(DISTINCT order_id) AS order_count FROM order_items GROUP BY product_id HAVING COUNT(DISTINCT order_id) > 100;
```

### ✅ PASS : ECOMMERCE_090 - Pre-distinct orders
```sql
SELECT product_id, COUNT(*) AS order_count FROM (SELECT DISTINCT product_id, order_id FROM order_items) product_orders GROUP BY product_id HAVING COUNT(*) > 100;
```

### ✅ PASS : ECOMMERCE_090 - Subquery filter
```sql
SELECT product_id, order_count FROM (SELECT product_id, COUNT(DISTINCT order_id) AS order_count FROM order_items GROUP BY product_id) product_order_counts WHERE order_count > 100;
```

### ✅ PASS : ECOMMERCE_091 - ROW_NUMBER top
```sql
SELECT category_id, product_id, rating FROM (SELECT category_id, id AS product_id, rating, ROW_NUMBER() OVER (PARTITION BY category_id ORDER BY rating DESC, id ASC) AS rn FROM products WHERE rating IS NOT NULL) ranked WHERE rn = 1;
```

### ✅ PASS : ECOMMERCE_091 - DISTINCT ON
```sql
SELECT DISTINCT ON (category_id) category_id, id AS product_id, rating FROM products WHERE rating IS NOT NULL ORDER BY category_id, rating DESC, id ASC;
```

### ✅ PASS : ECOMMERCE_091 - Max rating join
```sql
SELECT p.category_id, MIN(p.id) AS product_id, p.rating FROM products p JOIN (SELECT category_id, MAX(rating) AS max_rating FROM products WHERE rating IS NOT NULL GROUP BY category_id) m ON p.category_id = m.category_id AND p.rating = m.max_rating GROUP BY p.category_id, p.rating;
```

### ✅ PASS : ECOMMERCE_092 - ROW_NUMBER seller product
```sql
SELECT seller_id, product_id, total_quantity_sold FROM (SELECT oi.seller_id, oi.product_id, SUM(oi.quantity) AS total_quantity_sold, ROW_NUMBER() OVER (PARTITION BY oi.seller_id ORDER BY SUM(oi.quantity) DESC, oi.product_id ASC) AS rn FROM order_items oi WHERE oi.seller_id IS NOT NULL GROUP BY oi.seller_id, oi.product_id) ranked WHERE rn = 1;
```

### ✅ PASS : ECOMMERCE_092 - DISTINCT ON
```sql
SELECT DISTINCT ON (seller_id) seller_id, product_id, total_quantity_sold FROM (SELECT seller_id, product_id, SUM(quantity) AS total_quantity_sold FROM order_items WHERE seller_id IS NOT NULL GROUP BY seller_id, product_id) product_sales ORDER BY seller_id, total_quantity_sold DESC, product_id ASC;
```

### ✅ PASS : ECOMMERCE_092 - Max quantity join
```sql
WITH product_sales AS (SELECT seller_id, product_id, SUM(quantity) AS total_quantity_sold FROM order_items WHERE seller_id IS NOT NULL GROUP BY seller_id, product_id), max_sales AS (SELECT seller_id, MAX(total_quantity_sold) AS max_quantity FROM product_sales GROUP BY seller_id) SELECT ps.seller_id, MIN(ps.product_id) AS product_id, ps.total_quantity_sold FROM product_sales ps JOIN max_sales ms ON ps.seller_id = ms.seller_id AND ps.total_quantity_sold = ms.max_quantity GROUP BY ps.seller_id, ps.total_quantity_sold;
```

### ✅ PASS : ECOMMERCE_093 - ROW_NUMBER latest
```sql
SELECT customer_id, order_id, order_date FROM (SELECT customer_id, id AS order_id, order_date, ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC, id ASC) AS rn FROM orders) ranked WHERE rn = 1;
```

### ✅ PASS : ECOMMERCE_093 - DISTINCT ON
```sql
SELECT DISTINCT ON (customer_id) customer_id, id AS order_id, order_date FROM orders ORDER BY customer_id, order_date DESC, id ASC;
```

### ✅ PASS : ECOMMERCE_093 - Latest date join
```sql
WITH latest_dates AS (SELECT customer_id, MAX(order_date) AS latest_order_date FROM orders GROUP BY customer_id) SELECT o.customer_id, MIN(o.id) AS order_id, o.order_date FROM orders o JOIN latest_dates ld ON o.customer_id = ld.customer_id AND o.order_date = ld.latest_order_date GROUP BY o.customer_id, o.order_date;
```

### ✅ PASS : ECOMMERCE_094 - Monthly running sum
```sql
SELECT revenue_month, monthly_revenue, SUM(monthly_revenue) OVER (ORDER BY revenue_month ASC) AS running_total FROM (SELECT DATE_TRUNC('month', order_date)::date AS revenue_month, SUM(total_amount) AS monthly_revenue FROM orders GROUP BY DATE_TRUNC('month', order_date)::date) monthly_revenue_data ORDER BY revenue_month ASC;
```

### ✅ PASS : ECOMMERCE_094 - CTE running sum
```sql
WITH monthly_revenue_data AS (SELECT DATE_TRUNC('month', order_date)::date AS revenue_month, SUM(total_amount) AS monthly_revenue FROM orders GROUP BY DATE_TRUNC('month', order_date)::date) SELECT revenue_month, monthly_revenue, SUM(monthly_revenue) OVER (ORDER BY revenue_month ASC) AS running_total FROM monthly_revenue_data ORDER BY revenue_month ASC;
```

### ✅ PASS : ECOMMERCE_094 - Self join running total
```sql
WITH monthly_revenue_data AS (SELECT DATE_TRUNC('month', order_date)::date AS revenue_month, SUM(total_amount) AS monthly_revenue FROM orders GROUP BY DATE_TRUNC('month', order_date)::date) SELECT m1.revenue_month, m1.monthly_revenue, SUM(m2.monthly_revenue) AS running_total FROM monthly_revenue_data m1 JOIN monthly_revenue_data m2 ON m2.revenue_month <= m1.revenue_month GROUP BY m1.revenue_month, m1.monthly_revenue ORDER BY m1.revenue_month ASC;
```

### ✅ PASS : ECOMMERCE_095 - ROW_NUMBER city top
```sql
SELECT city, customer_id, total_revenue FROM (SELECT a.city, o.customer_id, SUM(o.total_amount) AS total_revenue, ROW_NUMBER() OVER (PARTITION BY a.city ORDER BY SUM(o.total_amount) DESC, o.customer_id ASC) AS rn FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city, o.customer_id) ranked WHERE rn <= 3;
```

### ✅ PASS : ECOMMERCE_095 - DENSE_RANK city tiers
```sql
SELECT city, customer_id, total_revenue FROM (SELECT a.city, o.customer_id, SUM(o.total_amount) AS total_revenue, DENSE_RANK() OVER (PARTITION BY a.city ORDER BY SUM(o.total_amount) DESC) AS rnk FROM orders o JOIN addresses a ON o.shipping_address_id = a.id GROUP BY a.city, o.customer_id) ranked WHERE rnk <= 3;
```

### ✅ PASS : ECOMMERCE_096 - LEFT anti join
```sql
SELECT pv.product_id FROM product_views pv LEFT JOIN order_items oi ON pv.product_id = oi.product_id WHERE oi.product_id IS NULL GROUP BY pv.product_id;
```

### ✅ PASS : ECOMMERCE_096 - NOT EXISTS
```sql
SELECT DISTINCT pv.product_id FROM product_views pv WHERE NOT EXISTS (SELECT 1 FROM order_items oi WHERE oi.product_id = pv.product_id);
```

### ✅ PASS : ECOMMERCE_096 - EXCEPT
```sql
SELECT product_id FROM product_views EXCEPT SELECT product_id FROM order_items;
```

### ✅ PASS : ECOMMERCE_097 - COUNT DISTINCT categories
```sql
SELECT o.customer_id, COUNT(DISTINCT p.category_id) AS category_count FROM orders o JOIN order_items oi ON o.id = oi.order_id JOIN products p ON oi.product_id = p.id GROUP BY o.customer_id HAVING COUNT(DISTINCT p.category_id) > 3;
```

### ✅ PASS : ECOMMERCE_097 - Pre-distinct categories
```sql
SELECT customer_id, COUNT(*) AS category_count FROM (SELECT DISTINCT o.customer_id, p.category_id FROM orders o JOIN order_items oi ON o.id = oi.order_id JOIN products p ON oi.product_id = p.id) customer_categories GROUP BY customer_id HAVING COUNT(*) > 3;
```

### ✅ PASS : ECOMMERCE_098 - Delayed filter
```sql
SELECT id AS shipment_id, order_id, estimated_delivery_at, delivered_at FROM shipments WHERE delivered_at IS NOT NULL AND estimated_delivery_at IS NOT NULL AND delivered_at > estimated_delivery_at;
```

### ✅ PASS : ECOMMERCE_098 - Delay interval
```sql
SELECT id AS shipment_id, order_id, estimated_delivery_at, delivered_at FROM shipments WHERE delivered_at IS NOT NULL AND estimated_delivery_at IS NOT NULL AND delivered_at - estimated_delivery_at > INTERVAL '0 seconds';
```

### ✅ PASS : ECOMMERCE_099 - HAVING completed count
```sql
SELECT o.customer_id FROM orders o JOIN payments p ON o.id = p.order_id GROUP BY o.customer_id HAVING COUNT(*) = COUNT(CASE WHEN p.payment_status = 'completed' THEN 1 END);
```

### ✅ PASS : ECOMMERCE_099 - BOOL_AND
```sql
SELECT o.customer_id FROM orders o JOIN payments p ON o.id = p.order_id GROUP BY o.customer_id HAVING BOOL_AND(p.payment_status = 'completed');
```

### ✅ PASS : ECOMMERCE_099 - NOT EXISTS failed
```sql
SELECT DISTINCT o.customer_id FROM orders o JOIN payments p ON o.id = p.order_id WHERE NOT EXISTS (SELECT 1 FROM orders o2 JOIN payments p2 ON o2.id = p2.order_id WHERE o2.customer_id = o.customer_id AND p2.payment_status <> 'completed');
```

### ✅ PASS : ECOMMERCE_100 - LAG monthly orders
```sql
SELECT DISTINCT customer_id FROM (SELECT customer_id, order_month, LAG(order_month) OVER (PARTITION BY customer_id ORDER BY order_month ASC) AS previous_order_month FROM (SELECT DISTINCT customer_id, DATE_TRUNC('month', order_date)::date AS order_month FROM orders) monthly_orders) sequenced WHERE previous_order_month = (order_month - INTERVAL '1 month')::date;
```

### ✅ PASS : ECOMMERCE_100 - Self join months
```sql
WITH monthly_orders AS (SELECT DISTINCT customer_id, DATE_TRUNC('month', order_date)::date AS order_month FROM orders) SELECT DISTINCT m1.customer_id FROM monthly_orders m1 JOIN monthly_orders m2 ON m2.customer_id = m1.customer_id AND m2.order_month = (m1.order_month + INTERVAL '1 month')::date;
```

