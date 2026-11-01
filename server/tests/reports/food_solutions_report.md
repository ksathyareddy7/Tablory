# Solutions Evaluation Report (food)

**Summary:**
- Total Approaches: 150
- Passed: 150
- Failed: 0

## Detailed Results
### ✅ PASS : FOOD_001 - COUNT users
```sql
SELECT COUNT(*) AS total_users FROM users;
```

### ✅ PASS : FOOD_002 - COUNT active users
```sql
SELECT COUNT(*) AS active_users FROM users WHERE is_active = true;
```

### ✅ PASS : FOOD_002 - Boolean shorthand
```sql
SELECT COUNT(*) AS active_users FROM users WHERE is_active;
```

### ✅ PASS : FOOD_003 - COUNT restaurants
```sql
SELECT COUNT(*) AS total_restaurants FROM restaurants;
```

### ✅ PASS : FOOD_004 - COUNT active restaurants
```sql
SELECT COUNT(*) AS active_restaurants FROM restaurants WHERE is_active = true;
```

### ✅ PASS : FOOD_004 - Boolean shorthand
```sql
SELECT COUNT(*) AS active_restaurants FROM restaurants WHERE is_active;
```

### ✅ PASS : FOOD_005 - COUNT orders
```sql
SELECT COUNT(*) AS total_orders FROM orders;
```

### ✅ PASS : FOOD_006 - COUNT delivered orders
```sql
SELECT COUNT(*) AS delivered_orders FROM orders WHERE order_status = 'delivered';
```

### ✅ PASS : FOOD_007 - COUNT cancelled orders
```sql
SELECT COUNT(*) AS cancelled_orders FROM orders WHERE order_status = 'cancelled';
```

### ✅ PASS : FOOD_008 - AVG delivered value
```sql
SELECT AVG(total_amount) AS average_order_value FROM orders WHERE order_status = 'delivered';
```

### ✅ PASS : FOOD_008 - Manual average
```sql
SELECT SUM(total_amount) / NULLIF(COUNT(total_amount), 0) AS average_order_value FROM orders WHERE order_status = 'delivered';
```

### ✅ PASS : FOOD_009 - COUNT drivers
```sql
SELECT COUNT(*) AS total_drivers FROM drivers;
```

### ✅ PASS : FOOD_010 - COUNT active drivers
```sql
SELECT COUNT(*) AS active_drivers FROM drivers WHERE is_active = true;
```

### ✅ PASS : FOOD_010 - Boolean shorthand
```sql
SELECT COUNT(*) AS active_drivers FROM drivers WHERE is_active;
```

### ✅ PASS : FOOD_011 - COUNT menu items
```sql
SELECT COUNT(*) AS total_menu_items FROM menu_items;
```

### ✅ PASS : FOOD_012 - COUNT available items
```sql
SELECT COUNT(*) AS available_menu_items FROM menu_items WHERE is_available = true;
```

### ✅ PASS : FOOD_012 - Boolean shorthand
```sql
SELECT COUNT(*) AS available_menu_items FROM menu_items WHERE is_available;
```

### ✅ PASS : FOOD_013 - COUNT coupons
```sql
SELECT COUNT(*) AS total_coupons FROM coupons;
```

### ✅ PASS : FOOD_014 - COUNT active coupons
```sql
SELECT COUNT(*) AS active_coupons FROM coupons WHERE is_active = true;
```

### ✅ PASS : FOOD_014 - Boolean shorthand
```sql
SELECT COUNT(*) AS active_coupons FROM coupons WHERE is_active;
```

### ✅ PASS : FOOD_015 - COUNT coupon orders
```sql
SELECT COUNT(*) AS coupon_orders FROM orders WHERE coupon_id IS NOT NULL;
```

### ✅ PASS : FOOD_016 - COUNT reviews
```sql
SELECT COUNT(*) AS total_reviews FROM reviews;
```

### ✅ PASS : FOOD_017 - AVG rating
```sql
SELECT AVG(rating) AS average_rating FROM reviews;
```

### ✅ PASS : FOOD_017 - Manual average
```sql
SELECT SUM(rating)::numeric / NULLIF(COUNT(rating), 0) AS average_rating FROM reviews;
```

### ✅ PASS : FOOD_018 - DATE today
```sql
SELECT COUNT(*) AS orders_today FROM orders WHERE DATE(created_at) = CURRENT_DATE;
```

### ✅ PASS : FOOD_019 - COUNT city users
```sql
SELECT COUNT(*) AS users_in_hyderabad FROM users WHERE default_city = 'Hyderabad';
```

### ✅ PASS : FOOD_020 - COUNT city restaurants
```sql
SELECT COUNT(*) AS restaurants_in_hyderabad FROM restaurants WHERE city = 'Hyderabad';
```

### ✅ PASS : FOOD_021 - GROUP restaurant orders
```sql
SELECT restaurant_id, COUNT(*) AS total_orders FROM orders GROUP BY restaurant_id;
```

### ✅ PASS : FOOD_021 - Window count
```sql
SELECT DISTINCT restaurant_id, COUNT(*) OVER (PARTITION BY restaurant_id) AS total_orders FROM orders;
```

### ✅ PASS : FOOD_022 - GROUP delivered user orders
```sql
SELECT user_id, COUNT(*) AS delivered_orders FROM orders WHERE order_status = 'delivered' GROUP BY user_id;
```

### ✅ PASS : FOOD_022 - FILTER count
```sql
SELECT user_id, COUNT(*) FILTER (WHERE order_status = 'delivered') AS delivered_orders FROM orders GROUP BY user_id HAVING COUNT(*) FILTER (WHERE order_status = 'delivered') > 0;
```

### ✅ PASS : FOOD_023 - GROUP delivered revenue
```sql
SELECT restaurant_id, SUM(total_amount) AS total_revenue FROM orders WHERE order_status = 'delivered' GROUP BY restaurant_id;
```

### ✅ PASS : FOOD_023 - FILTER revenue
```sql
SELECT restaurant_id, SUM(total_amount) FILTER (WHERE order_status = 'delivered') AS total_revenue FROM orders GROUP BY restaurant_id HAVING SUM(total_amount) FILTER (WHERE order_status = 'delivered') IS NOT NULL;
```

### ✅ PASS : FOOD_024 - GROUP menu items
```sql
SELECT restaurant_id, COUNT(*) AS menu_item_count FROM menu_items GROUP BY restaurant_id;
```

### ✅ PASS : FOOD_024 - Window count
```sql
SELECT DISTINCT restaurant_id, COUNT(*) OVER (PARTITION BY restaurant_id) AS menu_item_count FROM menu_items;
```

### ✅ PASS : FOOD_025 - COUNT distinct users
```sql
SELECT COUNT(DISTINCT user_id) AS ordering_users FROM orders;
```

### ✅ PASS : FOOD_025 - Grouped users count
```sql
SELECT COUNT(*) AS ordering_users FROM (SELECT user_id FROM orders GROUP BY user_id) ordering_user_list;
```

### ✅ PASS : FOOD_026 - AVG delivery fee
```sql
SELECT AVG(delivery_fee) AS average_delivery_fee FROM orders WHERE order_status = 'delivered';
```

### ✅ PASS : FOOD_026 - Manual average
```sql
SELECT SUM(delivery_fee) / NULLIF(COUNT(delivery_fee), 0) AS average_delivery_fee FROM orders WHERE order_status = 'delivered';
```

### ✅ PASS : FOOD_027 - AVG packaging fee
```sql
SELECT AVG(packaging_fee) AS average_packaging_fee FROM orders WHERE order_status = 'delivered';
```

### ✅ PASS : FOOD_027 - Manual average
```sql
SELECT SUM(packaging_fee) / NULLIF(COUNT(packaging_fee), 0) AS average_packaging_fee FROM orders WHERE order_status = 'delivered';
```

### ✅ PASS : FOOD_028 - GROUP cuisine
```sql
SELECT cuisine, COUNT(*) AS restaurant_count FROM restaurants GROUP BY cuisine;
```

### ✅ PASS : FOOD_029 - ORDER BY LIMIT
```sql
SELECT id, total_amount FROM orders WHERE order_status = 'delivered' ORDER BY total_amount DESC, id ASC LIMIT 5;
```

### ✅ PASS : FOOD_029 - ROW_NUMBER top
```sql
SELECT id, total_amount FROM (SELECT id, total_amount, ROW_NUMBER() OVER (ORDER BY total_amount DESC, id ASC) AS rn FROM orders WHERE order_status = 'delivered') ranked_orders WHERE rn <= 5 ORDER BY total_amount DESC, id ASC;
```

### ✅ PASS : FOOD_030 - JOIN payments
```sql
SELECT o.id, p.payment_status FROM orders o JOIN payments p ON p.order_id = o.id;
```

### ✅ PASS : FOOD_031 - LEFT JOIN orders
```sql
SELECT r.id, r.name, COUNT(o.id) AS total_orders FROM restaurants r LEFT JOIN orders o ON o.restaurant_id = r.id GROUP BY r.id, r.name;
```

### ✅ PASS : FOOD_031 - Correlated count
```sql
SELECT r.id, r.name, (SELECT COUNT(*) FROM orders o WHERE o.restaurant_id = r.id) AS total_orders FROM restaurants r;
```

### ✅ PASS : FOOD_032 - LEFT JOIN delivered
```sql
SELECT u.id, u.full_name, COUNT(o.id) AS delivered_orders FROM users u LEFT JOIN orders o ON o.user_id = u.id AND o.order_status = 'delivered' GROUP BY u.id, u.full_name;
```

### ✅ PASS : FOOD_032 - Correlated count
```sql
SELECT u.id, u.full_name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id AND o.order_status = 'delivered') AS delivered_orders FROM users u;
```

### ✅ PASS : FOOD_033 - LEFT JOIN revenue
```sql
SELECT r.id, r.name, COUNT(o.id) AS delivered_orders, COALESCE(SUM(o.total_amount), 0) AS total_revenue FROM restaurants r LEFT JOIN orders o ON o.restaurant_id = r.id AND o.order_status = 'delivered' GROUP BY r.id, r.name;
```

### ✅ PASS : FOOD_033 - Correlated aggregates
```sql
SELECT r.id, r.name, (SELECT COUNT(*) FROM orders o WHERE o.restaurant_id = r.id AND o.order_status = 'delivered') AS delivered_orders, COALESCE((SELECT SUM(o.total_amount) FROM orders o WHERE o.restaurant_id = r.id AND o.order_status = 'delivered'), 0) AS total_revenue FROM restaurants r;
```

### ✅ PASS : FOOD_034 - JOIN rating average
```sql
SELECT r.id, r.name, AVG(rv.rating) AS average_rating FROM restaurants r JOIN reviews rv ON rv.restaurant_id = r.id GROUP BY r.id, r.name;
```

### ✅ PASS : FOOD_034 - Correlated average
```sql
SELECT r.id, r.name, (SELECT AVG(rv.rating) FROM reviews rv WHERE rv.restaurant_id = r.id) AS average_rating FROM restaurants r WHERE EXISTS (SELECT 1 FROM reviews rv WHERE rv.restaurant_id = r.id);
```

### ✅ PASS : FOOD_035 - LEFT JOIN anti-join
```sql
SELECT r.id, r.name FROM restaurants r LEFT JOIN orders o ON o.restaurant_id = r.id WHERE o.id IS NULL;
```

### ✅ PASS : FOOD_035 - NOT EXISTS
```sql
SELECT r.id, r.name FROM restaurants r WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.restaurant_id = r.id);
```

### ✅ PASS : FOOD_036 - LEFT JOIN anti-join
```sql
SELECT u.id, u.full_name FROM users u LEFT JOIN orders o ON o.user_id = u.id WHERE o.id IS NULL;
```

### ✅ PASS : FOOD_036 - NOT EXISTS
```sql
SELECT u.id, u.full_name FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
```

### ✅ PASS : FOOD_037 - JOIN driver
```sql
SELECT o.id, d.full_name AS driver_name FROM orders o JOIN driver_assignments da ON da.order_id = o.id JOIN drivers d ON d.id = da.driver_id WHERE o.order_status = 'delivered';
```

### ✅ PASS : FOOD_038 - LEFT JOIN usage
```sql
SELECT c.code, COUNT(o.id) AS usage_count FROM coupons c LEFT JOIN orders o ON o.coupon_id = c.id GROUP BY c.id, c.code;
```

### ✅ PASS : FOOD_038 - Correlated count
```sql
SELECT c.code, (SELECT COUNT(*) FROM orders o WHERE o.coupon_id = c.id) AS usage_count FROM coupons c;
```

### ✅ PASS : FOOD_039 - LEFT JOIN item count
```sql
SELECT o.id, COUNT(oi.id) AS item_count FROM orders o LEFT JOIN order_items oi ON oi.order_id = o.id GROUP BY o.id;
```

### ✅ PASS : FOOD_039 - Correlated count
```sql
SELECT o.id, (SELECT COUNT(*) FROM order_items oi WHERE oi.order_id = o.id) AS item_count FROM orders o;
```

### ✅ PASS : FOOD_040 - JOIN city revenue
```sql
SELECT r.city, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city;
```

### ✅ PASS : FOOD_040 - FILTER revenue
```sql
SELECT r.city, SUM(o.total_amount) FILTER (WHERE o.order_status = 'delivered') AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id GROUP BY r.city HAVING SUM(o.total_amount) FILTER (WHERE o.order_status = 'delivered') IS NOT NULL;
```

### ✅ PASS : FOOD_041 - GROUP HAVING
```sql
SELECT u.id, u.full_name, COUNT(ua.id) AS address_count FROM users u JOIN user_addresses ua ON ua.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(ua.id) > 1;
```

### ✅ PASS : FOOD_041 - Subquery filter
```sql
SELECT u.id, u.full_name, address_counts.address_count FROM users u JOIN (SELECT user_id, COUNT(*) AS address_count FROM user_addresses GROUP BY user_id HAVING COUNT(*) > 1) address_counts ON address_counts.user_id = u.id;
```

### ✅ PASS : FOOD_042 - Prep time filter
```sql
SELECT id, name, avg_prep_time_minutes FROM restaurants WHERE avg_prep_time_minutes > 30;
```

### ✅ PASS : FOOD_043 - Top revenue restaurants
```sql
SELECT r.id, r.name, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.id, r.name ORDER BY total_revenue DESC, r.id ASC LIMIT 5;
```

### ✅ PASS : FOOD_043 - CTE top revenue
```sql
WITH restaurant_revenue AS (SELECT r.id, r.name, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.id, r.name) SELECT id, name, total_revenue FROM restaurant_revenue ORDER BY total_revenue DESC, id ASC LIMIT 5;
```

### ✅ PASS : FOOD_043 - ROW_NUMBER top
```sql
SELECT id, name, total_revenue FROM (SELECT id, name, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, id ASC) AS rn FROM (SELECT r.id, r.name, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.id, r.name) revenue_totals) ranked WHERE rn <= 5 ORDER BY total_revenue DESC, id ASC;
```

### ✅ PASS : FOOD_044 - Top user spend
```sql
SELECT u.id, u.full_name, SUM(o.total_amount) AS total_spent FROM users u JOIN orders o ON o.user_id = u.id WHERE o.order_status = 'delivered' GROUP BY u.id, u.full_name ORDER BY total_spent DESC, u.id ASC LIMIT 5;
```

### ✅ PASS : FOOD_044 - CTE top spend
```sql
WITH user_spend AS (SELECT u.id, u.full_name, SUM(o.total_amount) AS total_spent FROM users u JOIN orders o ON o.user_id = u.id WHERE o.order_status = 'delivered' GROUP BY u.id, u.full_name) SELECT id, full_name, total_spent FROM user_spend ORDER BY total_spent DESC, id ASC LIMIT 5;
```

### ✅ PASS : FOOD_044 - ROW_NUMBER top
```sql
SELECT id, full_name, total_spent FROM (SELECT id, full_name, total_spent, ROW_NUMBER() OVER (ORDER BY total_spent DESC, id ASC) AS rn FROM (SELECT u.id, u.full_name, SUM(o.total_amount) AS total_spent FROM users u JOIN orders o ON o.user_id = u.id WHERE o.order_status = 'delivered' GROUP BY u.id, u.full_name) spend_totals) ranked WHERE rn <= 5 ORDER BY total_spent DESC, id ASC;
```

### ✅ PASS : FOOD_045 - DISTINCT restaurants
```sql
SELECT DISTINCT r.id, r.name FROM restaurants r JOIN orders o ON o.restaurant_id = r.id JOIN support_tickets st ON st.order_id = o.id;
```

### ✅ PASS : FOOD_045 - EXISTS ticket
```sql
SELECT r.id, r.name FROM restaurants r WHERE EXISTS (SELECT 1 FROM orders o JOIN support_tickets st ON st.order_id = o.id WHERE o.restaurant_id = r.id);
```

### ✅ PASS : FOOD_046 - Delay minutes
```sql
SELECT id, EXTRACT(EPOCH FROM (delivered_at - estimated_delivery_at)) / 60 AS delay_minutes FROM orders WHERE order_status = 'delivered' AND delivered_at IS NOT NULL AND estimated_delivery_at IS NOT NULL AND delivered_at > estimated_delivery_at;
```

### ✅ PASS : FOOD_047 - LEFT JOIN delivered
```sql
SELECT d.id, d.full_name, COUNT(da.id) AS completed_deliveries FROM drivers d LEFT JOIN driver_assignments da ON da.driver_id = d.id AND da.status = 'delivered' GROUP BY d.id, d.full_name;
```

### ✅ PASS : FOOD_047 - Correlated count
```sql
SELECT d.id, d.full_name, (SELECT COUNT(*) FROM driver_assignments da WHERE da.driver_id = d.id AND da.status = 'delivered') AS completed_deliveries FROM drivers d;
```

### ✅ PASS : FOOD_048 - Low inventory filter
```sql
SELECT id, restaurant_id, name, inventory_count, reorder_level FROM menu_items WHERE inventory_count IS NOT NULL AND reorder_level IS NOT NULL AND inventory_count <= reorder_level;
```

### ✅ PASS : FOOD_049 - DISTINCT failed users
```sql
SELECT DISTINCT u.id, u.full_name FROM users u JOIN orders o ON o.user_id = u.id JOIN payments p ON p.order_id = o.id WHERE p.payment_status = 'failed';
```

### ✅ PASS : FOOD_049 - EXISTS failed payment
```sql
SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM orders o JOIN payments p ON p.order_id = o.id WHERE o.user_id = u.id AND p.payment_status = 'failed');
```

### ✅ PASS : FOOD_050 - AVG delivery city
```sql
SELECT r.city, AVG(o.delivery_fee) AS average_delivery_fee FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city;
```

### ✅ PASS : FOOD_050 - FILTER average
```sql
SELECT r.city, AVG(o.delivery_fee) FILTER (WHERE o.order_status = 'delivered') AS average_delivery_fee FROM restaurants r JOIN orders o ON o.restaurant_id = r.id GROUP BY r.city HAVING AVG(o.delivery_fee) FILTER (WHERE o.order_status = 'delivered') IS NOT NULL;
```

### ✅ PASS : FOOD_051 - ROW_NUMBER top 3
```sql
WITH restaurant_revenue AS (SELECT r.city, r.id, r.name, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city, r.id, r.name), ranked_restaurants AS (SELECT city, id, name, total_revenue, ROW_NUMBER() OVER (PARTITION BY city ORDER BY total_revenue DESC, id ASC) AS rn FROM restaurant_revenue) SELECT city, id, name, total_revenue FROM ranked_restaurants WHERE rn <= 3;
```

### ✅ PASS : FOOD_052 - ROW_NUMBER latest
```sql
WITH ranked_orders AS (SELECT o.user_id, o.order_status, o.created_at, o.id, ROW_NUMBER() OVER (PARTITION BY o.user_id ORDER BY o.created_at DESC, o.id DESC) AS rn FROM orders o) SELECT u.id, u.full_name FROM users u JOIN ranked_orders ro ON ro.user_id = u.id WHERE ro.rn = 1 AND ro.order_status = 'cancelled';
```

### ✅ PASS : FOOD_052 - NOT EXISTS newer
```sql
SELECT u.id, u.full_name FROM users u JOIN orders o ON o.user_id = u.id WHERE o.order_status = 'cancelled' AND NOT EXISTS (SELECT 1 FROM orders newer WHERE newer.user_id = o.user_id AND (newer.created_at > o.created_at OR (newer.created_at = o.created_at AND newer.id > o.id)));
```

### ✅ PASS : FOOD_053 - Revenue above city avg
```sql
WITH restaurant_revenue AS (SELECT r.city, r.id, r.name, COALESCE(SUM(o.total_amount), 0) AS total_revenue FROM restaurants r LEFT JOIN orders o ON o.restaurant_id = r.id AND o.order_status = 'delivered' GROUP BY r.city, r.id, r.name), city_avg AS (SELECT city, AVG(total_revenue) AS avg_revenue FROM restaurant_revenue GROUP BY city) SELECT rr.id, rr.name, rr.city, rr.total_revenue FROM restaurant_revenue rr JOIN city_avg ca ON ca.city = rr.city WHERE rr.total_revenue > ca.avg_revenue;
```

### ✅ PASS : FOOD_053 - Window city average
```sql
WITH restaurant_revenue AS (SELECT r.city, r.id, r.name, COALESCE(SUM(o.total_amount), 0) AS total_revenue FROM restaurants r LEFT JOIN orders o ON o.restaurant_id = r.id AND o.order_status = 'delivered' GROUP BY r.city, r.id, r.name) SELECT id, name, city, total_revenue FROM (SELECT city, id, name, total_revenue, AVG(total_revenue) OVER (PARTITION BY city) AS avg_revenue FROM restaurant_revenue) x WHERE total_revenue > avg_revenue;
```

### ✅ PASS : FOOD_054 - LAG order days
```sql
WITH user_order_days AS (SELECT DISTINCT user_id, DATE(created_at) AS order_day FROM orders), ranked_days AS (SELECT user_id, order_day, LAG(order_day) OVER (PARTITION BY user_id ORDER BY order_day) AS previous_day FROM user_order_days) SELECT DISTINCT u.id, u.full_name FROM users u JOIN ranked_days rd ON rd.user_id = u.id WHERE rd.previous_day = rd.order_day - INTERVAL '1 day';
```

### ✅ PASS : FOOD_054 - Self join days
```sql
WITH user_order_days AS (SELECT DISTINCT user_id, DATE(created_at) AS order_day FROM orders) SELECT DISTINCT u.id, u.full_name FROM users u JOIN user_order_days d1 ON d1.user_id = u.id JOIN user_order_days d2 ON d2.user_id = u.id AND d2.order_day = d1.order_day + INTERVAL '1 day';
```

### ✅ PASS : FOOD_055 - ROW_NUMBER top item
```sql
WITH item_totals AS (SELECT mi.restaurant_id, mi.id AS menu_item_id, mi.name, SUM(oi.quantity) AS total_quantity FROM menu_items mi JOIN order_items oi ON oi.menu_item_id = mi.id GROUP BY mi.restaurant_id, mi.id, mi.name), ranked_items AS (SELECT restaurant_id, menu_item_id, name, total_quantity, ROW_NUMBER() OVER (PARTITION BY restaurant_id ORDER BY total_quantity DESC, menu_item_id ASC) AS rn FROM item_totals) SELECT restaurant_id, menu_item_id, name, total_quantity FROM ranked_items WHERE rn = 1;
```

### ✅ PASS : FOOD_056 - Cuisine coverage
```sql
WITH user_city AS (SELECT u.id AS user_id, u.full_name, MIN(r.city) AS city FROM users u JOIN orders o ON o.user_id = u.id JOIN restaurants r ON r.id = o.restaurant_id GROUP BY u.id, u.full_name HAVING COUNT(DISTINCT r.city) = 1), city_cuisines AS (SELECT city, COUNT(DISTINCT cuisine) AS total_cuisines FROM restaurants GROUP BY city), user_cuisines AS (SELECT uc.user_id, uc.full_name, uc.city, COUNT(DISTINCT r.cuisine) AS ordered_cuisines FROM user_city uc JOIN orders o ON o.user_id = uc.user_id JOIN restaurants r ON r.id = o.restaurant_id WHERE r.city = uc.city GROUP BY uc.user_id, uc.full_name, uc.city) SELECT uc.user_id AS id, uc.full_name, uc.city FROM user_cuisines uc JOIN city_cuisines cc ON cc.city = uc.city WHERE uc.ordered_cuisines = cc.total_cuisines;
```

### ✅ PASS : FOOD_057 - Running revenue
```sql
SELECT restaurant_id, id, created_at, SUM(total_amount) OVER (PARTITION BY restaurant_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_revenue FROM orders WHERE order_status = 'delivered';
```

### ✅ PASS : FOOD_058 - Above platform avg
```sql
WITH overall_avg AS (SELECT AVG(delivery_fee) AS avg_delivery_fee FROM orders WHERE order_status = 'delivered'), restaurant_avg AS (SELECT restaurant_id, AVG(delivery_fee) AS avg_delivery_fee FROM orders WHERE order_status = 'delivered' GROUP BY restaurant_id) SELECT r.id, r.name, ra.avg_delivery_fee AS average_delivery_fee FROM restaurant_avg ra JOIN restaurants r ON r.id = ra.restaurant_id CROSS JOIN overall_avg oa WHERE ra.avg_delivery_fee > oa.avg_delivery_fee;
```

### ✅ PASS : FOOD_058 - Scalar subquery avg
```sql
SELECT r.id, r.name, AVG(o.delivery_fee) AS average_delivery_fee FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.id, r.name HAVING AVG(o.delivery_fee) > (SELECT AVG(delivery_fee) FROM orders WHERE order_status = 'delivered');
```

### ✅ PASS : FOOD_059 - FILTER counts
```sql
SELECT u.id, u.full_name, COUNT(*) FILTER (WHERE o.order_status = 'cancelled') AS cancelled_orders, COUNT(*) FILTER (WHERE o.order_status = 'delivered') AS delivered_orders FROM users u JOIN orders o ON o.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) FILTER (WHERE o.order_status = 'cancelled') > COUNT(*) FILTER (WHERE o.order_status = 'delivered');
```

### ✅ PASS : FOOD_059 - CASE counts
```sql
SELECT u.id, u.full_name, SUM(CASE WHEN o.order_status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled_orders, SUM(CASE WHEN o.order_status = 'delivered' THEN 1 ELSE 0 END) AS delivered_orders FROM users u JOIN orders o ON o.user_id = u.id GROUP BY u.id, u.full_name HAVING SUM(CASE WHEN o.order_status = 'cancelled' THEN 1 ELSE 0 END) > SUM(CASE WHEN o.order_status = 'delivered' THEN 1 ELSE 0 END);
```

### ✅ PASS : FOOD_060 - Multi-restaurant day
```sql
SELECT d.id, d.full_name, DATE(da.delivered_at) AS delivery_date, COUNT(DISTINCT o.restaurant_id) AS restaurant_count FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id JOIN orders o ON o.id = da.order_id WHERE da.status = 'delivered' AND da.delivered_at IS NOT NULL GROUP BY d.id, d.full_name, DATE(da.delivered_at) HAVING COUNT(DISTINCT o.restaurant_id) > 1;
```

### ✅ PASS : FOOD_061 - ROW_NUMBER top 2
```sql
WITH user_city_spend AS (SELECT r.city, u.id, u.full_name, SUM(o.total_amount) AS total_spent FROM users u JOIN orders o ON o.user_id = u.id JOIN restaurants r ON r.id = o.restaurant_id WHERE o.order_status = 'delivered' GROUP BY r.city, u.id, u.full_name), ranked_users AS (SELECT city, id, full_name, total_spent, ROW_NUMBER() OVER (PARTITION BY city ORDER BY total_spent DESC, id ASC) AS rn FROM user_city_spend) SELECT city, id, full_name, total_spent FROM ranked_users WHERE rn <= 2;
```

### ✅ PASS : FOOD_062 - LEAD return gap
```sql
WITH user_orders AS (SELECT user_id, created_at, LEAD(created_at) OVER (PARTITION BY user_id ORDER BY created_at, id) AS next_order_at FROM orders) SELECT DISTINCT u.id, u.full_name FROM users u JOIN user_orders uo ON uo.user_id = u.id WHERE uo.next_order_at IS NOT NULL AND uo.next_order_at >= uo.created_at + INTERVAL '30 days';
```

### ✅ PASS : FOOD_063 - LAG monthly revenue
```sql
WITH monthly_revenue AS (SELECT restaurant_id, DATE_TRUNC('month', created_at) AS revenue_month, SUM(total_amount) AS total_revenue FROM orders WHERE order_status = 'delivered' GROUP BY restaurant_id, DATE_TRUNC('month', created_at)), revenue_with_prev AS (SELECT restaurant_id, revenue_month, total_revenue, LAG(total_revenue) OVER (PARTITION BY restaurant_id ORDER BY revenue_month) AS prev_month_revenue FROM monthly_revenue) SELECT r.id, r.name, revenue_month, total_revenue, prev_month_revenue FROM revenue_with_prev rwp JOIN restaurants r ON r.id = rwp.restaurant_id WHERE prev_month_revenue IS NOT NULL AND total_revenue > prev_month_revenue;
```

### ✅ PASS : FOOD_064 - FILTER all coupon
```sql
SELECT u.id, u.full_name FROM users u JOIN orders o ON o.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE o.coupon_id IS NOT NULL);
```

### ✅ PASS : FOOD_064 - NOT EXISTS no coupon
```sql
SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id) AND NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id AND o.coupon_id IS NULL);
```

### ✅ PASS : FOOD_065 - MAX rating
```sql
SELECT r.id, r.name, MAX(rv.rating) AS highest_rating FROM restaurants r JOIN reviews rv ON rv.restaurant_id = r.id GROUP BY r.id, r.name HAVING MAX(rv.rating) = 5;
```

### ✅ PASS : FOOD_066 - User average CTE
```sql
WITH user_avg AS (SELECT user_id, AVG(total_amount) AS avg_order_value FROM orders WHERE order_status = 'delivered' GROUP BY user_id) SELECT o.id, o.user_id, o.total_amount FROM orders o JOIN user_avg ua ON ua.user_id = o.user_id WHERE o.order_status = 'delivered' AND o.total_amount > ua.avg_order_value;
```

### ✅ PASS : FOOD_066 - Window average
```sql
SELECT id, user_id, total_amount FROM (SELECT id, user_id, total_amount, AVG(total_amount) OVER (PARTITION BY user_id) AS avg_order_value FROM orders WHERE order_status = 'delivered') x WHERE total_amount > avg_order_value;
```

### ✅ PASS : FOOD_067 - LEFT JOIN anti-join
```sql
SELECT mi.id, mi.name, mi.restaurant_id FROM menu_items mi LEFT JOIN order_items oi ON oi.menu_item_id = mi.id WHERE oi.id IS NULL;
```

### ✅ PASS : FOOD_067 - NOT EXISTS
```sql
SELECT mi.id, mi.name, mi.restaurant_id FROM menu_items mi WHERE NOT EXISTS (SELECT 1 FROM order_items oi WHERE oi.menu_item_id = mi.id);
```

### ✅ PASS : FOOD_068 - Repeat ratio
```sql
WITH user_restaurant_orders AS (SELECT restaurant_id, user_id, COUNT(*) AS order_count FROM orders GROUP BY restaurant_id, user_id), restaurant_customer_stats AS (SELECT restaurant_id, COUNT(*) AS total_customers, COUNT(*) FILTER (WHERE order_count >= 2) AS repeat_customers FROM user_restaurant_orders GROUP BY restaurant_id) SELECT r.id, r.name, (repeat_customers::numeric / NULLIF(total_customers, 0)) * 100 AS repeat_customer_percentage FROM restaurant_customer_stats rcs JOIN restaurants r ON r.id = rcs.restaurant_id WHERE (repeat_customers::numeric / NULLIF(total_customers, 0)) > 0.5;
```

### ✅ PASS : FOOD_069 - LAG same restaurant
```sql
WITH ranked_orders AS (SELECT user_id, restaurant_id, id, created_at, LAG(restaurant_id, 1) OVER (PARTITION BY user_id ORDER BY created_at, id) AS prev_restaurant_1, LAG(restaurant_id, 2) OVER (PARTITION BY user_id ORDER BY created_at, id) AS prev_restaurant_2 FROM orders) SELECT DISTINCT u.id, u.full_name FROM users u JOIN ranked_orders ro ON ro.user_id = u.id WHERE ro.prev_restaurant_1 = ro.restaurant_id AND ro.prev_restaurant_2 = ro.restaurant_id;
```

### ✅ PASS : FOOD_070 - Rolling 7 day avg
```sql
WITH daily_revenue AS (SELECT DATE(created_at) AS order_date, SUM(total_amount) AS total_revenue FROM orders WHERE order_status = 'delivered' GROUP BY DATE(created_at)) SELECT order_date, total_revenue, AVG(total_revenue) OVER (ORDER BY order_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS rolling_7_day_avg_revenue FROM daily_revenue;
```

### ✅ PASS : FOOD_071 - ROW_NUMBER top spender
```sql
WITH user_restaurant_spend AS (SELECT o.restaurant_id, o.user_id, SUM(o.total_amount) AS total_spent FROM orders o WHERE o.order_status = 'delivered' GROUP BY o.restaurant_id, o.user_id), ranked_spend AS (SELECT restaurant_id, user_id, total_spent, ROW_NUMBER() OVER (PARTITION BY restaurant_id ORDER BY total_spent DESC, user_id ASC) AS rn FROM user_restaurant_spend) SELECT restaurant_id, user_id, total_spent FROM ranked_spend WHERE rn = 1;
```

### ✅ PASS : FOOD_072 - Month coverage
```sql
WITH user_months AS (SELECT user_id, DATE_TRUNC('month', created_at) AS order_month FROM orders GROUP BY user_id, DATE_TRUNC('month', created_at)), user_bounds AS (SELECT user_id, MIN(order_month) AS first_month, MAX(order_month) AS last_month, COUNT(*) AS active_months FROM user_months GROUP BY user_id), expected_months AS (SELECT user_id, ((EXTRACT(YEAR FROM AGE(last_month, first_month)) * 12) + EXTRACT(MONTH FROM AGE(last_month, first_month)) + 1)::int AS expected_month_count, active_months FROM user_bounds) SELECT u.id, u.full_name FROM users u JOIN expected_months em ON em.user_id = u.id WHERE em.active_months = em.expected_month_count;
```

### ✅ PASS : FOOD_073 - Top delay restaurants
```sql
SELECT r.id, r.name, AVG(EXTRACT(EPOCH FROM (o.delivered_at - o.estimated_delivery_at)) / 60) AS avg_delay_minutes FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' AND o.delivered_at IS NOT NULL AND o.estimated_delivery_at IS NOT NULL AND o.delivered_at > o.estimated_delivery_at GROUP BY r.id, r.name ORDER BY avg_delay_minutes DESC, r.id ASC LIMIT 10;
```

### ✅ PASS : FOOD_073 - CTE delay totals
```sql
WITH restaurant_delays AS (SELECT r.id, r.name, AVG(EXTRACT(EPOCH FROM (o.delivered_at - o.estimated_delivery_at)) / 60) AS avg_delay_minutes FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' AND o.delivered_at IS NOT NULL AND o.estimated_delivery_at IS NOT NULL AND o.delivered_at > o.estimated_delivery_at GROUP BY r.id, r.name) SELECT id, name, avg_delay_minutes FROM restaurant_delays ORDER BY avg_delay_minutes DESC, id ASC LIMIT 10;
```

### ✅ PASS : FOOD_073 - ROW_NUMBER top
```sql
SELECT id, name, avg_delay_minutes FROM (SELECT id, name, avg_delay_minutes, ROW_NUMBER() OVER (ORDER BY avg_delay_minutes DESC, id ASC) AS rn FROM (SELECT r.id, r.name, AVG(EXTRACT(EPOCH FROM (o.delivered_at - o.estimated_delivery_at)) / 60) AS avg_delay_minutes FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' AND o.delivered_at IS NOT NULL AND o.estimated_delivery_at IS NOT NULL AND o.delivered_at > o.estimated_delivery_at GROUP BY r.id, r.name) delay_totals) ranked WHERE rn <= 10 ORDER BY avg_delay_minutes DESC, id ASC;
```

### ✅ PASS : FOOD_074 - ROW_NUMBER top driver
```sql
WITH driver_city_deliveries AS (SELECT r.city, d.id, d.full_name, COUNT(*) AS completed_deliveries FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id JOIN orders o ON o.id = da.order_id JOIN restaurants r ON r.id = o.restaurant_id WHERE da.status = 'delivered' GROUP BY r.city, d.id, d.full_name), ranked_drivers AS (SELECT city, id, full_name, completed_deliveries, ROW_NUMBER() OVER (PARTITION BY city ORDER BY completed_deliveries DESC, id ASC) AS rn FROM driver_city_deliveries) SELECT city, id, full_name, completed_deliveries FROM ranked_drivers WHERE rn = 1;
```

### ✅ PASS : FOOD_075 - FILTER all refunds
```sql
SELECT u.id, u.full_name FROM users u JOIN support_tickets st ON st.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE st.refund_amount > 0);
```

### ✅ PASS : FOOD_075 - NOT EXISTS no refund
```sql
SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM support_tickets st WHERE st.user_id = u.id) AND NOT EXISTS (SELECT 1 FROM support_tickets st WHERE st.user_id = u.id AND NOT (st.refund_amount > 0));
```

### ✅ PASS : FOOD_076 - ROW_NUMBER refund
```sql
WITH user_refunds AS (SELECT st.user_id, st.order_id, SUM(st.refund_amount) AS total_refund FROM support_tickets st GROUP BY st.user_id, st.order_id), ranked_refunds AS (SELECT user_id, order_id, total_refund, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY total_refund DESC, order_id ASC) AS rn FROM user_refunds) SELECT user_id, order_id, total_refund FROM ranked_refunds WHERE rn = 1;
```

### ✅ PASS : FOOD_077 - LAG order gaps
```sql
WITH ordered_gaps AS (SELECT user_id, order_created_at, LAG(order_created_at) OVER (PARTITION BY user_id ORDER BY order_created_at, order_id) AS previous_order_at FROM (SELECT o.user_id, o.id AS order_id, o.created_at AS order_created_at FROM orders o) base_orders) SELECT u.id, u.full_name, MAX(DATE_PART('day', og.order_created_at - og.previous_order_at)) AS longest_gap_days FROM users u JOIN ordered_gaps og ON og.user_id = u.id WHERE og.previous_order_at IS NOT NULL GROUP BY u.id, u.full_name;
```

### ✅ PASS : FOOD_078 - Consecutive day streak
```sql
WITH driver_days AS (SELECT DISTINCT da.driver_id, DATE(da.delivered_at) AS delivery_day FROM driver_assignments da WHERE da.status = 'delivered' AND da.delivered_at IS NOT NULL), grouped_days AS (SELECT driver_id, delivery_day, delivery_day - (ROW_NUMBER() OVER (PARTITION BY driver_id ORDER BY delivery_day))::int AS grp_key FROM driver_days), streaks AS (SELECT driver_id, COUNT(*) AS streak_length FROM grouped_days GROUP BY driver_id, grp_key) SELECT d.id, d.full_name FROM drivers d JOIN streaks s ON s.driver_id = d.id WHERE s.streak_length >= 5 GROUP BY d.id, d.full_name;
```

### ✅ PASS : FOOD_079 - LAG monthly counts
```sql
WITH monthly_orders AS (SELECT user_id, DATE_TRUNC('month', created_at) AS order_month, COUNT(*) AS order_count FROM orders GROUP BY user_id, DATE_TRUNC('month', created_at)), ranked_months AS (SELECT user_id, order_month, order_count, LAG(order_count) OVER (PARTITION BY user_id ORDER BY order_month) AS previous_month_order_count FROM monthly_orders) SELECT u.id, u.full_name, rm.order_month, rm.order_count, rm.previous_month_order_count FROM users u JOIN ranked_months rm ON rm.user_id = u.id WHERE rm.previous_month_order_count IS NOT NULL AND rm.order_count < rm.previous_month_order_count;
```

### ✅ PASS : FOOD_080 - Above restaurant delay
```sql
WITH delayed_orders AS (SELECT id, restaurant_id, EXTRACT(EPOCH FROM (delivered_at - estimated_delivery_at)) / 60 AS delay_minutes FROM orders WHERE order_status = 'delivered' AND delivered_at IS NOT NULL AND estimated_delivery_at IS NOT NULL AND delivered_at > estimated_delivery_at), restaurant_avg_delay AS (SELECT restaurant_id, AVG(delay_minutes) AS avg_delay_minutes FROM delayed_orders GROUP BY restaurant_id) SELECT dly.id, dly.restaurant_id, dly.delay_minutes FROM delayed_orders dly JOIN restaurant_avg_delay rad ON rad.restaurant_id = dly.restaurant_id WHERE dly.delay_minutes > rad.avg_delay_minutes;
```

### ✅ PASS : FOOD_080 - Window average
```sql
SELECT id, restaurant_id, delay_minutes FROM (SELECT id, restaurant_id, EXTRACT(EPOCH FROM (delivered_at - estimated_delivery_at)) / 60 AS delay_minutes, AVG(EXTRACT(EPOCH FROM (delivered_at - estimated_delivery_at)) / 60) OVER (PARTITION BY restaurant_id) AS avg_delay_minutes FROM orders WHERE order_status = 'delivered' AND delivered_at IS NOT NULL AND estimated_delivery_at IS NOT NULL AND delivered_at > estimated_delivery_at) x WHERE delay_minutes > avg_delay_minutes;
```

### ✅ PASS : FOOD_081 - ROW_NUMBER top cities
```sql
WITH monthly_city_revenue AS (SELECT DATE_TRUNC('month', o.created_at) AS revenue_month, r.city, SUM(o.total_amount) AS total_revenue FROM orders o JOIN restaurants r ON r.id = o.restaurant_id WHERE o.order_status = 'delivered' GROUP BY DATE_TRUNC('month', o.created_at), r.city), ranked_cities AS (SELECT revenue_month, city, total_revenue, ROW_NUMBER() OVER (PARTITION BY revenue_month ORDER BY total_revenue DESC, city ASC) AS rn FROM monthly_city_revenue) SELECT revenue_month, city, total_revenue FROM ranked_cities WHERE rn <= 3;
```

### ✅ PASS : FOOD_082 - ROW_NUMBER top coupons
```sql
WITH monthly_coupon_usage AS (SELECT DATE_TRUNC('month', o.created_at) AS usage_month, c.code, COUNT(*) AS usage_count FROM orders o JOIN coupons c ON c.id = o.coupon_id GROUP BY DATE_TRUNC('month', o.created_at), c.code), ranked_coupon_usage AS (SELECT usage_month, code, usage_count, ROW_NUMBER() OVER (PARTITION BY usage_month ORDER BY usage_count DESC, code ASC) AS rn FROM monthly_coupon_usage) SELECT usage_month, code, usage_count FROM ranked_coupon_usage WHERE rn <= 2;
```

### ✅ PASS : FOOD_083 - Weekend vs weekday
```sql
WITH delivered_orders AS (SELECT restaurant_id, total_amount, EXTRACT(ISODOW FROM created_at) AS order_isodow FROM orders WHERE order_status = 'delivered') SELECT r.id, r.name, SUM(o.total_amount) FILTER (WHERE o.order_isodow IN (6, 7)) AS weekend_revenue, SUM(o.total_amount) FILTER (WHERE o.order_isodow BETWEEN 1 AND 5) AS weekday_revenue FROM restaurants r JOIN delivered_orders o ON o.restaurant_id = r.id GROUP BY r.id, r.name HAVING COALESCE(SUM(o.total_amount) FILTER (WHERE o.order_isodow IN (6, 7)), 0) > COALESCE(SUM(o.total_amount) FILTER (WHERE o.order_isodow BETWEEN 1 AND 5), 0);
```

### ✅ PASS : FOOD_083 - CASE revenue
```sql
WITH delivered_orders AS (SELECT restaurant_id, total_amount, EXTRACT(ISODOW FROM created_at) AS order_isodow FROM orders WHERE order_status = 'delivered') SELECT r.id, r.name, SUM(CASE WHEN o.order_isodow IN (6, 7) THEN o.total_amount END) AS weekend_revenue, SUM(CASE WHEN o.order_isodow BETWEEN 1 AND 5 THEN o.total_amount END) AS weekday_revenue FROM restaurants r JOIN delivered_orders o ON o.restaurant_id = r.id GROUP BY r.id, r.name HAVING COALESCE(SUM(CASE WHEN o.order_isodow IN (6, 7) THEN o.total_amount END), 0) > COALESCE(SUM(CASE WHEN o.order_isodow BETWEEN 1 AND 5 THEN o.total_amount END), 0);
```

### ✅ PASS : FOOD_084 - Refunded order count
```sql
WITH refunded_orders AS (SELECT user_id, order_id, SUM(refund_amount) AS total_refund FROM support_tickets WHERE refund_amount > 0 GROUP BY user_id, order_id) SELECT u.id, u.full_name, COUNT(*) AS refunded_order_count FROM users u JOIN refunded_orders ro ON ro.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) > 1;
```

### ✅ PASS : FOOD_085 - FILTER delivery quality
```sql
SELECT d.id, d.full_name, COUNT(*) FILTER (WHERE da.status = 'delivered') AS delivered_count FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id GROUP BY d.id, d.full_name HAVING COUNT(*) FILTER (WHERE da.status = 'delivered') >= 10 AND COUNT(*) FILTER (WHERE da.status IN ('failed', 'cancelled')) = 0;
```

### ✅ PASS : FOOD_085 - CASE delivery quality
```sql
SELECT d.id, d.full_name, SUM(CASE WHEN da.status = 'delivered' THEN 1 ELSE 0 END) AS delivered_count FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id GROUP BY d.id, d.full_name HAVING SUM(CASE WHEN da.status = 'delivered' THEN 1 ELSE 0 END) >= 10 AND SUM(CASE WHEN da.status IN ('failed', 'cancelled') THEN 1 ELSE 0 END) = 0;
```

### ✅ PASS : FOOD_086 - Latest three growth
```sql
WITH monthly_revenue AS (SELECT restaurant_id, DATE_TRUNC('month', created_at) AS revenue_month, SUM(total_amount) AS total_revenue FROM orders WHERE order_status = 'delivered' GROUP BY restaurant_id, DATE_TRUNC('month', created_at)), ranked_months AS (SELECT restaurant_id, revenue_month, total_revenue, ROW_NUMBER() OVER (PARTITION BY restaurant_id ORDER BY revenue_month DESC) AS rn FROM monthly_revenue), last_three AS (SELECT restaurant_id, revenue_month, total_revenue FROM ranked_months WHERE rn <= 3), pivoted AS (SELECT restaurant_id, MAX(total_revenue) FILTER (WHERE rn = 1) AS month_1_revenue, MAX(total_revenue) FILTER (WHERE rn = 2) AS month_2_revenue, MAX(total_revenue) FILTER (WHERE rn = 3) AS month_3_revenue FROM (SELECT restaurant_id, total_revenue, ROW_NUMBER() OVER (PARTITION BY restaurant_id ORDER BY revenue_month DESC) AS rn FROM last_three) t GROUP BY restaurant_id) SELECT r.id, r.name, p.month_3_revenue AS oldest_month_revenue, p.month_2_revenue AS middle_month_revenue, p.month_1_revenue AS latest_month_revenue FROM pivoted p JOIN restaurants r ON r.id = p.restaurant_id WHERE p.month_1_revenue IS NOT NULL AND p.month_2_revenue IS NOT NULL AND p.month_3_revenue IS NOT NULL AND p.month_3_revenue < p.month_2_revenue AND p.month_2_revenue < p.month_1_revenue;
```

### ✅ PASS : FOOD_087 - Signup month coverage
```sql
WITH user_months AS (SELECT u.id AS user_id, DATE_TRUNC('month', u.created_at) AS signup_month, COUNT(DISTINCT DATE_TRUNC('month', o.created_at)) AS active_months, DATE_TRUNC('month', MAX(o.created_at)) AS last_order_month FROM users u JOIN orders o ON o.user_id = u.id GROUP BY u.id, DATE_TRUNC('month', u.created_at)), expected_months AS (SELECT user_id, ((EXTRACT(YEAR FROM AGE(last_order_month, signup_month)) * 12) + EXTRACT(MONTH FROM AGE(last_order_month, signup_month)) + 1)::int AS expected_month_count, active_months FROM user_months) SELECT u.id, u.full_name FROM users u JOIN expected_months em ON em.user_id = u.id WHERE em.active_months = em.expected_month_count;
```

### ✅ PASS : FOOD_088 - Coupon average discount
```sql
WITH coupon_avg_discount AS (SELECT coupon_id, AVG(discount_amount) AS avg_discount FROM orders WHERE coupon_id IS NOT NULL GROUP BY coupon_id) SELECT o.id, o.coupon_id, o.discount_amount FROM orders o JOIN coupon_avg_discount cad ON cad.coupon_id = o.coupon_id WHERE o.discount_amount > cad.avg_discount;
```

### ✅ PASS : FOOD_088 - Window coupon average
```sql
SELECT id, coupon_id, discount_amount FROM (SELECT id, coupon_id, discount_amount, AVG(discount_amount) OVER (PARTITION BY coupon_id) AS avg_discount FROM orders WHERE coupon_id IS NOT NULL) x WHERE discount_amount > avg_discount;
```

### ✅ PASS : FOOD_089 - Tip greater than delivery
```sql
SELECT driver_id, order_id, delivery_earnings, tip_earnings FROM driver_assignments WHERE tip_earnings > delivery_earnings;
```

### ✅ PASS : FOOD_090 - Review vs restaurant count
```sql
WITH distinct_user_restaurants AS (SELECT DISTINCT user_id, restaurant_id FROM orders), user_restaurants AS (SELECT user_id, COUNT(*) AS restaurant_count FROM distinct_user_restaurants GROUP BY user_id), user_reviews AS (SELECT user_id, COUNT(*) AS review_count FROM reviews GROUP BY user_id) SELECT u.id, u.full_name, urv.review_count, uro.restaurant_count FROM users u JOIN user_reviews urv ON urv.user_id = u.id JOIN user_restaurants uro ON uro.user_id = u.id WHERE urv.review_count > uro.restaurant_count;
```

### ✅ PASS : FOOD_091 - ROW_NUMBER top 3
```sql
WITH driver_deliveries AS (SELECT r.city, d.id, d.full_name, COUNT(*) AS completed_deliveries FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id JOIN orders o ON o.id = da.order_id JOIN restaurants r ON r.id = o.restaurant_id WHERE da.status = 'delivered' GROUP BY r.city, d.id, d.full_name), ranked_drivers AS (SELECT city, id, full_name, completed_deliveries, ROW_NUMBER() OVER (PARTITION BY city ORDER BY completed_deliveries DESC, id ASC) AS rn FROM driver_deliveries) SELECT city, id, full_name, completed_deliveries FROM ranked_drivers WHERE rn <= 3;
```

### ✅ PASS : FOOD_092 - FILTER weekend only
```sql
WITH user_orders AS (SELECT user_id, created_at FROM orders) SELECT u.id, u.full_name FROM users u JOIN user_orders uo ON uo.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE EXTRACT(ISODOW FROM uo.created_at) IN (6, 7));
```

### ✅ PASS : FOOD_092 - NOT EXISTS weekday
```sql
SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id) AND NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id AND EXTRACT(ISODOW FROM o.created_at) BETWEEN 1 AND 5);
```

### ✅ PASS : FOOD_093 - ROW_NUMBER top day
```sql
WITH daily_restaurant_revenue AS (SELECT r.city, r.id, r.name, DATE(o.created_at) AS order_date, SUM(o.total_amount) AS daily_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city, r.id, r.name, DATE(o.created_at)), ranked_revenue AS (SELECT city, id, name, order_date, daily_revenue, ROW_NUMBER() OVER (PARTITION BY city ORDER BY daily_revenue DESC, order_date ASC, id ASC) AS rn FROM daily_restaurant_revenue) SELECT city, id, name, order_date, daily_revenue FROM ranked_revenue WHERE rn = 1;
```

### ✅ PASS : FOOD_094 - Above city wait
```sql
WITH driver_city_wait AS (SELECT r.city, d.id, d.full_name, AVG(da.wait_time_minutes) AS avg_wait_time FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id JOIN orders o ON o.id = da.order_id JOIN restaurants r ON r.id = o.restaurant_id WHERE da.wait_time_minutes IS NOT NULL GROUP BY r.city, d.id, d.full_name), city_wait_avg AS (SELECT city, AVG(avg_wait_time) AS city_avg_wait_time FROM driver_city_wait GROUP BY city) SELECT dcw.city, dcw.id, dcw.full_name, dcw.avg_wait_time FROM driver_city_wait dcw JOIN city_wait_avg cwa ON cwa.city = dcw.city WHERE dcw.avg_wait_time > cwa.city_avg_wait_time;
```

### ✅ PASS : FOOD_094 - Window city average
```sql
WITH driver_city_wait AS (SELECT r.city, d.id, d.full_name, AVG(da.wait_time_minutes) AS avg_wait_time FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id JOIN orders o ON o.id = da.order_id JOIN restaurants r ON r.id = o.restaurant_id WHERE da.wait_time_minutes IS NOT NULL GROUP BY r.city, d.id, d.full_name) SELECT city, id, full_name, avg_wait_time FROM (SELECT city, id, full_name, avg_wait_time, AVG(avg_wait_time) OVER (PARTITION BY city) AS city_avg_wait_time FROM driver_city_wait) x WHERE avg_wait_time > city_avg_wait_time;
```

### ✅ PASS : FOOD_095 - NOT EXISTS stockout
```sql
SELECT r.id, r.name FROM restaurants r WHERE EXISTS (SELECT 1 FROM menu_items mi WHERE mi.restaurant_id = r.id) AND NOT EXISTS (SELECT 1 FROM menu_items mi JOIN menu_item_availability_logs l ON l.menu_item_id = mi.id WHERE mi.restaurant_id = r.id AND l.was_available = false);
```

### ✅ PASS : FOOD_096 - Previous best spend
```sql
WITH monthly_spend AS (SELECT user_id, DATE_TRUNC('month', created_at) AS spend_month, SUM(total_amount) AS total_spent FROM orders WHERE order_status = 'delivered' GROUP BY user_id, DATE_TRUNC('month', created_at)), spend_history AS (SELECT user_id, spend_month, total_spent, MAX(total_spent) OVER (PARTITION BY user_id ORDER BY spend_month ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING) AS previous_best_spend FROM monthly_spend) SELECT u.id, u.full_name, sh.spend_month, sh.total_spent FROM users u JOIN spend_history sh ON sh.user_id = u.id WHERE sh.previous_best_spend IS NOT NULL AND sh.total_spent > sh.previous_best_spend;
```

### ✅ PASS : FOOD_097 - Category coverage
```sql
WITH restaurant_categories AS (SELECT restaurant_id, COUNT(DISTINCT category) AS total_categories FROM menu_items GROUP BY restaurant_id), ordered_categories AS (SELECT mi.restaurant_id, COUNT(DISTINCT mi.category) AS ordered_categories FROM menu_items mi JOIN order_items oi ON oi.menu_item_id = mi.id GROUP BY mi.restaurant_id) SELECT r.id, r.name FROM restaurants r JOIN restaurant_categories rc ON rc.restaurant_id = r.id JOIN ordered_categories oc ON oc.restaurant_id = r.id WHERE rc.total_categories = oc.ordered_categories;
```

### ✅ PASS : FOOD_098 - Tickets vs orders
```sql
WITH user_order_counts AS (SELECT user_id, COUNT(*) AS order_count FROM orders GROUP BY user_id), user_ticket_counts AS (SELECT user_id, COUNT(*) AS ticket_count FROM support_tickets GROUP BY user_id) SELECT u.id, u.full_name, utc.ticket_count, uoc.order_count FROM users u JOIN user_ticket_counts utc ON utc.user_id = u.id JOIN user_order_counts uoc ON uoc.user_id = u.id WHERE utc.ticket_count > uoc.order_count;
```

### ✅ PASS : FOOD_099 - Previous best tip
```sql
WITH user_tip_history AS (SELECT user_id, id, created_at, tip_amount, MAX(tip_amount) OVER (PARTITION BY user_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING) AS previous_best_tip FROM orders) SELECT u.id AS user_id, u.full_name, uth.id AS order_id, uth.tip_amount FROM users u JOIN user_tip_history uth ON uth.user_id = u.id WHERE uth.previous_best_tip IS NOT NULL AND uth.tip_amount > uth.previous_best_tip;
```

### ✅ PASS : FOOD_100 - Latest month decline
```sql
WITH monthly_city_revenue AS (SELECT r.city, DATE_TRUNC('month', o.created_at) AS revenue_month, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city, DATE_TRUNC('month', o.created_at)), ranked_months AS (SELECT city, revenue_month, total_revenue, ROW_NUMBER() OVER (PARTITION BY city ORDER BY revenue_month DESC) AS rn, LEAD(total_revenue, 1) OVER (PARTITION BY city ORDER BY revenue_month DESC) AS previous_month_revenue FROM monthly_city_revenue) SELECT city, revenue_month AS latest_month, total_revenue AS latest_month_revenue, previous_month_revenue FROM ranked_months WHERE rn = 1 AND previous_month_revenue IS NOT NULL AND total_revenue < previous_month_revenue;
```

