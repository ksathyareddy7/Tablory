import { getAppIdByName } from "../../base/scripts/base.data.js";

const appId = getAppIdByName("food");

export const tableDescriptions = {
  coupon_usage_logs: "Coupon usage history for fraud and performance analysis",
  coupons: "Discount coupons that can be applied to orders",
  driver_assignments: "Assignment of an order to a driver",
  driver_shifts: "Working shifts of drivers",
  drivers: "Delivery drivers",
  menu_item_availability_logs: "Availability history of menu items",
  menu_items: "Items sold by restaurants",
  order_items: "Line items of an order",
  order_status_history: "Order status transition history",
  orders: "Orders placed by users",
  payments: "Payments for orders",
  restaurant_operating_hours:
    "Operating schedule of restaurants by day of week",
  restaurants: "Restaurants that accept orders",
  reviews: "User reviews for delivered orders",
  support_tickets: "Customer support and refund issues related to orders",
  user_addresses: "Saved delivery addresses of users",
  users: "End users who place food orders",
};

export const questions = [
  {
    app_id: appId,
    code: "FOOD_001",
    title: "Total Users Count",
    description: "Find the total number of users registered on the platform.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS total_users FROM users;",
    solution_columns: ["total_users"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_002",
    title: "Active Users Count",
    description: "Find the total number of users who are currently active.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS active_users FROM users WHERE is_active = true;",
    solution_columns: ["active_users"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_003",
    title: "Total Restaurants Count",
    description: "Find the total number of restaurants listed on the platform.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS total_restaurants FROM restaurants;",
    solution_columns: ["total_restaurants"],
    tables: ["restaurants"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_004",
    title: "Active Restaurants Count",
    description: "Find the number of restaurants that are currently active.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS active_restaurants FROM restaurants WHERE is_active = true;",
    solution_columns: ["active_restaurants"],
    tables: ["restaurants"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_005",
    title: "Total Orders Count",
    description: "Find the total number of orders placed on the platform.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS total_orders FROM orders;",
    solution_columns: ["total_orders"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_006",
    title: "Delivered Orders Count",
    description:
      "Find the total number of orders that were delivered successfully.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS delivered_orders FROM orders WHERE order_status = 'delivered';",
    solution_columns: ["delivered_orders"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_007",
    title: "Cancelled Orders Count",
    description: "Find the total number of orders that were cancelled.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS cancelled_orders FROM orders WHERE order_status = 'cancelled';",
    solution_columns: ["cancelled_orders"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_008",
    title: "Average Order Value",
    description: "Calculate the average total amount of all delivered orders.",
    difficulty: "easy",
    expected_query:
      "SELECT AVG(total_amount) AS average_order_value FROM orders WHERE order_status = 'delivered';",
    solution_columns: ["average_order_value"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_009",
    title: "Total Drivers Count",
    description: "Find the total number of drivers on the platform.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS total_drivers FROM drivers;",
    solution_columns: ["total_drivers"],
    tables: ["drivers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_010",
    title: "Active Drivers Count",
    description: "Find the number of drivers who are currently active.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS active_drivers FROM drivers WHERE is_active = true;",
    solution_columns: ["active_drivers"],
    tables: ["drivers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_011",
    title: "Total Menu Items Count",
    description:
      "Find the total number of menu items listed across all restaurants.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS total_menu_items FROM menu_items;",
    solution_columns: ["total_menu_items"],
    tables: ["menu_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_012",
    title: "Available Menu Items Count",
    description:
      "Find the number of menu items currently available for ordering.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS available_menu_items FROM menu_items WHERE is_available = true;",
    solution_columns: ["available_menu_items"],
    tables: ["menu_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_013",
    title: "Total Coupons Count",
    description: "Find the total number of coupons created on the platform.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS total_coupons FROM coupons;",
    solution_columns: ["total_coupons"],
    tables: ["coupons"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_014",
    title: "Active Coupons Count",
    description: "Find the number of currently active coupons.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS active_coupons FROM coupons WHERE is_active = true;",
    solution_columns: ["active_coupons"],
    tables: ["coupons"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_015",
    title: "Orders With Coupons",
    description: "Find how many orders were placed using a coupon.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS coupon_orders FROM orders WHERE coupon_id IS NOT NULL;",
    solution_columns: ["coupon_orders"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_016",
    title: "Total Reviews Count",
    description: "Find the total number of reviews submitted by users.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS total_reviews FROM reviews;",
    solution_columns: ["total_reviews"],
    tables: ["reviews"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_017",
    title: "Average Restaurant Rating",
    description: "Find the average overall rating given by users.",
    difficulty: "easy",
    expected_query: "SELECT AVG(rating) AS average_rating FROM reviews;",
    solution_columns: ["average_rating"],
    tables: ["reviews"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_018",
    title: "Orders Placed Today",
    description: "Find the number of orders placed today.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS orders_today FROM orders WHERE DATE(created_at) = CURRENT_DATE;",
    solution_columns: ["orders_today"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_019",
    title: "Users From Hyderabad",
    description: "Find the number of users whose default city is Hyderabad.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS users_in_hyderabad FROM users WHERE default_city = 'Hyderabad';",
    solution_columns: ["users_in_hyderabad"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_020",
    title: "Restaurants In Hyderabad",
    description: "Find the number of restaurants located in Hyderabad.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS restaurants_in_hyderabad FROM restaurants WHERE city = 'Hyderabad';",
    solution_columns: ["restaurants_in_hyderabad"],
    tables: ["restaurants"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_021",
    title: "Orders Per Restaurant",
    description: "For each restaurant, find how many orders have been placed.",
    difficulty: "easy",
    expected_query:
      "SELECT restaurant_id, COUNT(*) AS total_orders FROM orders GROUP BY restaurant_id;",
    solution_columns: ["restaurant_id", "total_orders"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_022",
    title: "Delivered Orders Per User",
    description:
      "For each user, count how many delivered orders they have completed.",
    difficulty: "easy",
    expected_query:
      "SELECT user_id, COUNT(*) AS delivered_orders FROM orders WHERE order_status = 'delivered' GROUP BY user_id;",
    solution_columns: ["user_id", "delivered_orders"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_023",
    title: "Revenue By Restaurant",
    description:
      "For each restaurant, calculate the total revenue generated from delivered orders.",
    difficulty: "easy",
    expected_query:
      "SELECT restaurant_id, SUM(total_amount) AS total_revenue FROM orders WHERE order_status = 'delivered' GROUP BY restaurant_id;",
    solution_columns: ["restaurant_id", "total_revenue"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_024",
    title: "Menu Items Per Restaurant",
    description:
      "Find how many menu items each restaurant currently has listed.",
    difficulty: "easy",
    expected_query:
      "SELECT restaurant_id, COUNT(*) AS menu_item_count FROM menu_items GROUP BY restaurant_id;",
    solution_columns: ["restaurant_id", "menu_item_count"],
    tables: ["menu_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_025",
    title: "Users Who Placed At Least One Order",
    description:
      "Find the number of unique users who have placed at least one order.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(DISTINCT user_id) AS ordering_users FROM orders;",
    solution_columns: ["ordering_users"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_026",
    title: "Average Delivery Fee",
    description:
      "Calculate the average delivery fee charged on delivered orders.",
    difficulty: "easy",
    expected_query:
      "SELECT AVG(delivery_fee) AS average_delivery_fee FROM orders WHERE order_status = 'delivered';",
    solution_columns: ["average_delivery_fee"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_027",
    title: "Average Packaging Fee",
    description:
      "Calculate the average packaging fee charged across delivered orders.",
    difficulty: "easy",
    expected_query:
      "SELECT AVG(packaging_fee) AS average_packaging_fee FROM orders WHERE order_status = 'delivered';",
    solution_columns: ["average_packaging_fee"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_028",
    title: "Restaurants By Cuisine",
    description: "For each cuisine, count how many restaurants belong to it.",
    difficulty: "easy",
    expected_query:
      "SELECT cuisine, COUNT(*) AS restaurant_count FROM restaurants GROUP BY cuisine;",
    solution_columns: ["cuisine", "restaurant_count"],
    tables: ["restaurants"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_029",
    title: "Top 5 Highest Value Orders",
    description:
      "Find the top 5 delivered orders with the highest total amount.",
    difficulty: "easy",
    expected_query:
      "SELECT id, total_amount FROM orders WHERE order_status = 'delivered' ORDER BY total_amount DESC, id ASC LIMIT 5;",
    solution_columns: ["id", "total_amount"],
    tables: ["orders"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_amount", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "FOOD_030",
    title: "Orders With Payment Status",
    description: "Show each order id along with its payment status.",
    difficulty: "easy",
    expected_query:
      "SELECT o.id, p.payment_status FROM orders o JOIN payments p ON p.order_id = o.id;",
    solution_columns: ["id", "payment_status"],
    tables: ["orders", "payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_031",
    title: "Restaurant Names With Total Orders",
    description:
      "For each restaurant, show its name along with the total number of orders placed.",
    difficulty: "easy",
    expected_query:
      "SELECT r.id, r.name, COUNT(o.id) AS total_orders FROM restaurants r LEFT JOIN orders o ON o.restaurant_id = r.id GROUP BY r.id, r.name;",
    solution_columns: ["id", "name", "total_orders"],
    tables: ["restaurants", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_032",
    title: "Users With Their Total Delivered Orders",
    description:
      "For each user, show the total number of delivered orders they have completed.",
    difficulty: "easy",
    expected_query:
      "SELECT u.id, u.full_name, COUNT(o.id) AS delivered_orders FROM users u LEFT JOIN orders o ON o.user_id = u.id AND o.order_status = 'delivered' GROUP BY u.id, u.full_name;",
    solution_columns: ["id", "full_name", "delivered_orders"],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_033",
    title: "Revenue And Delivered Order Count Per Restaurant",
    description:
      "For each restaurant, calculate the number of delivered orders and total delivered revenue.",
    difficulty: "easy",
    expected_query:
      "SELECT r.id, r.name, COUNT(o.id) AS delivered_orders, COALESCE(SUM(o.total_amount), 0) AS total_revenue FROM restaurants r LEFT JOIN orders o ON o.restaurant_id = r.id AND o.order_status = 'delivered' GROUP BY r.id, r.name;",
    solution_columns: ["id", "name", "delivered_orders", "total_revenue"],
    tables: ["restaurants", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_034",
    title: "Average Rating Per Restaurant",
    description: "For each restaurant, find its average review rating.",
    difficulty: "easy",
    expected_query:
      "SELECT r.id, r.name, AVG(rv.rating) AS average_rating FROM restaurants r JOIN reviews rv ON rv.restaurant_id = r.id GROUP BY r.id, r.name;",
    solution_columns: ["id", "name", "average_rating"],
    tables: ["restaurants", "reviews"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_035",
    title: "Restaurants With No Orders",
    description: "Find restaurants that have not received any orders yet.",
    difficulty: "easy",
    expected_query:
      "SELECT r.id, r.name FROM restaurants r LEFT JOIN orders o ON o.restaurant_id = r.id WHERE o.id IS NULL;",
    solution_columns: ["id", "name"],
    tables: ["restaurants", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_036",
    title: "Users Who Never Ordered",
    description:
      "Find users who signed up on the platform but never placed an order.",
    difficulty: "easy",
    expected_query:
      "SELECT u.id, u.full_name FROM users u LEFT JOIN orders o ON o.user_id = u.id WHERE o.id IS NULL;",
    solution_columns: ["id", "full_name"],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_037",
    title: "Orders With Driver Name",
    description:
      "Show each delivered order along with the assigned driver name.",
    difficulty: "easy",
    expected_query:
      "SELECT o.id, d.full_name AS driver_name FROM orders o JOIN driver_assignments da ON da.order_id = o.id JOIN drivers d ON d.id = da.driver_id WHERE o.order_status = 'delivered';",
    solution_columns: ["id", "driver_name"],
    tables: ["orders", "driver_assignments", "drivers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_038",
    title: "Coupon Usage Count By Coupon Code",
    description: "For each coupon, find how many orders used it.",
    difficulty: "easy",
    expected_query:
      "SELECT c.code, COUNT(o.id) AS usage_count FROM coupons c LEFT JOIN orders o ON o.coupon_id = c.id GROUP BY c.id, c.code;",
    solution_columns: ["code", "usage_count"],
    tables: ["coupons", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_039",
    title: "Orders With Item Count",
    description:
      "For each order, show how many line items were included in it.",
    difficulty: "easy",
    expected_query:
      "SELECT o.id, COUNT(oi.id) AS item_count FROM orders o LEFT JOIN order_items oi ON oi.order_id = o.id GROUP BY o.id;",
    solution_columns: ["id", "item_count"],
    tables: ["orders", "order_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_040",
    title: "Revenue By City",
    description:
      "For each city, calculate the total delivered order revenue generated by restaurants in that city.",
    difficulty: "easy",
    expected_query:
      "SELECT r.city, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city;",
    solution_columns: ["city", "total_revenue"],
    tables: ["restaurants", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_041",
    title: "Users With Multiple Saved Addresses",
    description: "Find users who have saved more than one delivery address.",
    difficulty: "medium",
    expected_query:
      "SELECT u.id, u.full_name, COUNT(ua.id) AS address_count FROM users u JOIN user_addresses ua ON ua.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(ua.id) > 1;",
    solution_columns: ["id", "full_name", "address_count"],
    tables: ["users", "user_addresses"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_042",
    title: "Restaurants With Average Prep Time Above 30 Minutes",
    description:
      "Find restaurants whose average configured preparation time is greater than 30 minutes.",
    difficulty: "medium",
    expected_query:
      "SELECT id, name, avg_prep_time_minutes FROM restaurants WHERE avg_prep_time_minutes > 30;",
    solution_columns: ["id", "name", "avg_prep_time_minutes"],
    tables: ["restaurants"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_043",
    title: "Top 5 Restaurants By Delivered Revenue",
    description:
      "Find the top 5 restaurants with the highest revenue from delivered orders.",
    difficulty: "medium",
    expected_query:
      "SELECT r.id, r.name, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.id, r.name ORDER BY total_revenue DESC, r.id ASC LIMIT 5;",
    solution_columns: ["id", "name", "total_revenue"],
    tables: ["restaurants", "orders"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_revenue", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "FOOD_044",
    title: "Top 5 Users By Delivered Spend",
    description: "Find the top 5 users who spent the most on delivered orders.",
    difficulty: "medium",
    expected_query:
      "SELECT u.id, u.full_name, SUM(o.total_amount) AS total_spent FROM users u JOIN orders o ON o.user_id = u.id WHERE o.order_status = 'delivered' GROUP BY u.id, u.full_name ORDER BY total_spent DESC, u.id ASC LIMIT 5;",
    solution_columns: ["id", "full_name", "total_spent"],
    tables: ["users", "orders"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_spent", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "FOOD_045",
    title: "Restaurants With Support Tickets",
    description:
      "Find restaurants that have at least one support ticket raised on one of their orders.",
    difficulty: "medium",
    expected_query:
      "SELECT DISTINCT r.id, r.name FROM restaurants r JOIN orders o ON o.restaurant_id = r.id JOIN support_tickets st ON st.order_id = o.id;",
    solution_columns: ["id", "name"],
    tables: ["restaurants", "orders", "support_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_046",
    title: "Orders With Delay Minutes",
    description:
      "For each delivered order, show how many minutes late it was compared to its estimated delivery time.",
    difficulty: "medium",
    expected_query:
      "SELECT id, EXTRACT(EPOCH FROM (delivered_at - estimated_delivery_at)) / 60 AS delay_minutes FROM orders WHERE order_status = 'delivered' AND delivered_at IS NOT NULL AND estimated_delivery_at IS NOT NULL AND delivered_at > estimated_delivery_at;",
    solution_columns: ["id", "delay_minutes"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_047",
    title: "Drivers With Completed Deliveries Count",
    description: "For each driver, find how many deliveries they completed.",
    difficulty: "medium",
    expected_query:
      "SELECT d.id, d.full_name, COUNT(da.id) AS completed_deliveries FROM drivers d LEFT JOIN driver_assignments da ON da.driver_id = d.id AND da.status = 'delivered' GROUP BY d.id, d.full_name;",
    solution_columns: ["id", "full_name", "completed_deliveries"],
    tables: ["drivers", "driver_assignments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_048",
    title: "Restaurants With Low Inventory Items",
    description:
      "Find menu items whose inventory count is less than or equal to their reorder level.",
    difficulty: "medium",
    expected_query:
      "SELECT id, restaurant_id, name, inventory_count, reorder_level FROM menu_items WHERE inventory_count IS NOT NULL AND reorder_level IS NOT NULL AND inventory_count <= reorder_level;",
    solution_columns: [
      "id",
      "restaurant_id",
      "name",
      "inventory_count",
      "reorder_level",
    ],
    tables: ["menu_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_049",
    title: "Users With Failed Payments",
    description: "Find users who have at least one order whose payment failed.",
    difficulty: "medium",
    expected_query:
      "SELECT DISTINCT u.id, u.full_name FROM users u JOIN orders o ON o.user_id = u.id JOIN payments p ON p.order_id = o.id WHERE p.payment_status = 'failed';",
    solution_columns: ["id", "full_name"],
    tables: ["users", "orders", "payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_050",
    title: "Average Delivery Fee By City",
    description:
      "For each city, calculate the average delivery fee of delivered orders.",
    difficulty: "medium",
    expected_query:
      "SELECT r.city, AVG(o.delivery_fee) AS average_delivery_fee FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city;",
    solution_columns: ["city", "average_delivery_fee"],
    tables: ["restaurants", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_051",
    title: "Top 3 Restaurants Per City By Delivered Revenue",
    description:
      "For each city, find the top 3 restaurants with the highest delivered order revenue.",
    difficulty: "medium",
    expected_query:
      "WITH restaurant_revenue AS (SELECT r.city, r.id, r.name, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city, r.id, r.name), ranked_restaurants AS (SELECT city, id, name, total_revenue, ROW_NUMBER() OVER (PARTITION BY city ORDER BY total_revenue DESC, id ASC) AS rn FROM restaurant_revenue) SELECT city, id, name, total_revenue FROM ranked_restaurants WHERE rn <= 3;",
    solution_columns: ["city", "id", "name", "total_revenue"],
    tables: ["restaurants", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_052",
    title: "Users Whose Last Order Was Cancelled",
    description: "Find users whose most recent order ended in cancellation.",
    difficulty: "medium",
    expected_query:
      "WITH ranked_orders AS (SELECT o.user_id, o.order_status, o.created_at, o.id, ROW_NUMBER() OVER (PARTITION BY o.user_id ORDER BY o.created_at DESC, o.id DESC) AS rn FROM orders o) SELECT u.id, u.full_name FROM users u JOIN ranked_orders ro ON ro.user_id = u.id WHERE ro.rn = 1 AND ro.order_status = 'cancelled';",
    solution_columns: ["id", "full_name"],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_053",
    title: "Restaurants With Revenue Above City Average",
    description:
      "Find restaurants whose delivered order revenue is greater than the average delivered revenue of restaurants in the same city.",
    difficulty: "medium",
    expected_query:
      "WITH restaurant_revenue AS (SELECT r.city, r.id, r.name, COALESCE(SUM(o.total_amount), 0) AS total_revenue FROM restaurants r LEFT JOIN orders o ON o.restaurant_id = r.id AND o.order_status = 'delivered' GROUP BY r.city, r.id, r.name), city_avg AS (SELECT city, AVG(total_revenue) AS avg_revenue FROM restaurant_revenue GROUP BY city) SELECT rr.id, rr.name, rr.city, rr.total_revenue FROM restaurant_revenue rr JOIN city_avg ca ON ca.city = rr.city WHERE rr.total_revenue > ca.avg_revenue;",
    solution_columns: ["id", "name", "city", "total_revenue"],
    tables: ["restaurants", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_054",
    title: "Users With Orders On Consecutive Days",
    description:
      "Find users who placed orders on at least two consecutive calendar days.",
    difficulty: "medium",
    expected_query:
      "WITH user_order_days AS (SELECT DISTINCT user_id, DATE(created_at) AS order_day FROM orders), ranked_days AS (SELECT user_id, order_day, LAG(order_day) OVER (PARTITION BY user_id ORDER BY order_day) AS previous_day FROM user_order_days) SELECT DISTINCT u.id, u.full_name FROM users u JOIN ranked_days rd ON rd.user_id = u.id WHERE rd.previous_day = rd.order_day - INTERVAL '1 day';",
    solution_columns: ["id", "full_name"],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_055",
    title: "Most Frequently Ordered Item Per Restaurant",
    description:
      "For each restaurant, find the menu item with the highest total ordered quantity.",
    difficulty: "medium",
    expected_query:
      "WITH item_totals AS (SELECT mi.restaurant_id, mi.id AS menu_item_id, mi.name, SUM(oi.quantity) AS total_quantity FROM menu_items mi JOIN order_items oi ON oi.menu_item_id = mi.id GROUP BY mi.restaurant_id, mi.id, mi.name), ranked_items AS (SELECT restaurant_id, menu_item_id, name, total_quantity, ROW_NUMBER() OVER (PARTITION BY restaurant_id ORDER BY total_quantity DESC, menu_item_id ASC) AS rn FROM item_totals) SELECT restaurant_id, menu_item_id, name, total_quantity FROM ranked_items WHERE rn = 1;",
    solution_columns: [
      "restaurant_id",
      "menu_item_id",
      "name",
      "total_quantity",
    ],
    tables: ["menu_items", "order_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_056",
    title: "Users Who Ordered From Every Cuisine In Their City",
    description:
      "Find users whose delivered orders cover every available cuisine in a single derived city they order from.",
    difficulty: "medium",
    expected_query:
      "WITH user_city AS (SELECT u.id AS user_id, u.full_name, MIN(r.city) AS city FROM users u JOIN orders o ON o.user_id = u.id JOIN restaurants r ON r.id = o.restaurant_id GROUP BY u.id, u.full_name HAVING COUNT(DISTINCT r.city) = 1), city_cuisines AS (SELECT city, COUNT(DISTINCT cuisine) AS total_cuisines FROM restaurants GROUP BY city), user_cuisines AS (SELECT uc.user_id, uc.full_name, uc.city, COUNT(DISTINCT r.cuisine) AS ordered_cuisines FROM user_city uc JOIN orders o ON o.user_id = uc.user_id JOIN restaurants r ON r.id = o.restaurant_id WHERE r.city = uc.city GROUP BY uc.user_id, uc.full_name, uc.city) SELECT uc.user_id AS id, uc.full_name, uc.city FROM user_cuisines uc JOIN city_cuisines cc ON cc.city = uc.city WHERE uc.ordered_cuisines = cc.total_cuisines;",
    solution_columns: ["id", "full_name", "city"],
    tables: ["users", "orders", "restaurants"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_057",
    title: "Running Delivered Revenue By Restaurant",
    description:
      "For each delivered order, show the cumulative delivered revenue for its restaurant ordered by creation time.",
    difficulty: "medium",
    expected_query:
      "SELECT restaurant_id, id, created_at, SUM(total_amount) OVER (PARTITION BY restaurant_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_revenue FROM orders WHERE order_status = 'delivered';",
    solution_columns: ["restaurant_id", "id", "created_at", "running_revenue"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_058",
    title: "Restaurants With Above-Average Delivery Fees",
    description:
      "Find restaurants whose average delivery fee on delivered orders is higher than the platform-wide average delivery fee for delivered orders.",
    difficulty: "medium",
    expected_query:
      "WITH overall_avg AS (SELECT AVG(delivery_fee) AS avg_delivery_fee FROM orders WHERE order_status = 'delivered'), restaurant_avg AS (SELECT restaurant_id, AVG(delivery_fee) AS avg_delivery_fee FROM orders WHERE order_status = 'delivered' GROUP BY restaurant_id) SELECT r.id, r.name, ra.avg_delivery_fee AS average_delivery_fee FROM restaurant_avg ra JOIN restaurants r ON r.id = ra.restaurant_id CROSS JOIN overall_avg oa WHERE ra.avg_delivery_fee > oa.avg_delivery_fee;",
    solution_columns: ["id", "name", "average_delivery_fee"],
    tables: ["restaurants", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_059",
    title: "Users With More Cancelled Than Delivered Orders",
    description:
      "Find users whose total cancelled orders exceed their total delivered orders.",
    difficulty: "medium",
    expected_query:
      "SELECT u.id, u.full_name, COUNT(*) FILTER (WHERE o.order_status = 'cancelled') AS cancelled_orders, COUNT(*) FILTER (WHERE o.order_status = 'delivered') AS delivered_orders FROM users u JOIN orders o ON o.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) FILTER (WHERE o.order_status = 'cancelled') > COUNT(*) FILTER (WHERE o.order_status = 'delivered');",
    solution_columns: [
      "id",
      "full_name",
      "cancelled_orders",
      "delivered_orders",
    ],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_060",
    title: "Drivers Who Completed Deliveries For Multiple Restaurants In A Day",
    description:
      "Find driver and delivery date combinations where the driver completed deliveries for more than one distinct restaurant on the same day.",
    difficulty: "medium",
    expected_query:
      "SELECT d.id, d.full_name, DATE(da.delivered_at) AS delivery_date, COUNT(DISTINCT o.restaurant_id) AS restaurant_count FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id JOIN orders o ON o.id = da.order_id WHERE da.status = 'delivered' AND da.delivered_at IS NOT NULL GROUP BY d.id, d.full_name, DATE(da.delivered_at) HAVING COUNT(DISTINCT o.restaurant_id) > 1;",
    solution_columns: ["id", "full_name", "delivery_date", "restaurant_count"],
    tables: ["drivers", "driver_assignments", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_061",
    title: "Top 2 Users Per City By Delivered Spend",
    description:
      "For each city, find the top 2 users who spent the most on delivered orders.",
    difficulty: "medium",
    expected_query:
      "WITH user_city_spend AS (SELECT r.city, u.id, u.full_name, SUM(o.total_amount) AS total_spent FROM users u JOIN orders o ON o.user_id = u.id JOIN restaurants r ON r.id = o.restaurant_id WHERE o.order_status = 'delivered' GROUP BY r.city, u.id, u.full_name), ranked_users AS (SELECT city, id, full_name, total_spent, ROW_NUMBER() OVER (PARTITION BY city ORDER BY total_spent DESC, id ASC) AS rn FROM user_city_spend) SELECT city, id, full_name, total_spent FROM ranked_users WHERE rn <= 2;",
    solution_columns: ["city", "id", "full_name", "total_spent"],
    tables: ["users", "orders", "restaurants"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_062",
    title: "Users Who Returned After 30 Days",
    description:
      "Find users who placed an order and then placed another order at least 30 days later.",
    difficulty: "medium",
    expected_query:
      "WITH user_orders AS (SELECT user_id, created_at, LEAD(created_at) OVER (PARTITION BY user_id ORDER BY created_at, id) AS next_order_at FROM orders) SELECT DISTINCT u.id, u.full_name FROM users u JOIN user_orders uo ON uo.user_id = u.id WHERE uo.next_order_at IS NOT NULL AND uo.next_order_at >= uo.created_at + INTERVAL '30 days';",
    solution_columns: ["id", "full_name"],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_063",
    title: "Restaurants With Month Over Month Revenue Growth",
    description:
      "Find restaurants whose delivered revenue increased compared to the previous month.",
    difficulty: "medium",
    expected_query:
      "WITH monthly_revenue AS (SELECT restaurant_id, DATE_TRUNC('month', created_at) AS revenue_month, SUM(total_amount) AS total_revenue FROM orders WHERE order_status = 'delivered' GROUP BY restaurant_id, DATE_TRUNC('month', created_at)), revenue_with_prev AS (SELECT restaurant_id, revenue_month, total_revenue, LAG(total_revenue) OVER (PARTITION BY restaurant_id ORDER BY revenue_month) AS prev_month_revenue FROM monthly_revenue) SELECT r.id, r.name, revenue_month, total_revenue, prev_month_revenue FROM revenue_with_prev rwp JOIN restaurants r ON r.id = rwp.restaurant_id WHERE prev_month_revenue IS NOT NULL AND total_revenue > prev_month_revenue;",
    solution_columns: [
      "id",
      "name",
      "revenue_month",
      "total_revenue",
      "prev_month_revenue",
    ],
    tables: ["restaurants", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_064",
    title: "Users Whose Every Order Used A Coupon",
    description: "Find users for whom every placed order used a coupon.",
    difficulty: "medium",
    expected_query:
      "SELECT u.id, u.full_name FROM users u JOIN orders o ON o.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE o.coupon_id IS NOT NULL);",
    solution_columns: ["id", "full_name"],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_065",
    title: "Restaurants Whose Best Rated Review Is 5",
    description:
      "Find restaurants whose highest received review rating is exactly 5.",
    difficulty: "medium",
    expected_query:
      "SELECT r.id, r.name, MAX(rv.rating) AS highest_rating FROM restaurants r JOIN reviews rv ON rv.restaurant_id = r.id GROUP BY r.id, r.name HAVING MAX(rv.rating) = 5;",
    solution_columns: ["id", "name", "highest_rating"],
    tables: ["restaurants", "reviews"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_066",
    title: "Orders Greater Than User Average Spend",
    description:
      "Find delivered orders whose total amount is greater than the average delivered order value of that same user.",
    difficulty: "medium",
    expected_query:
      "WITH user_avg AS (SELECT user_id, AVG(total_amount) AS avg_order_value FROM orders WHERE order_status = 'delivered' GROUP BY user_id) SELECT o.id, o.user_id, o.total_amount FROM orders o JOIN user_avg ua ON ua.user_id = o.user_id WHERE o.order_status = 'delivered' AND o.total_amount > ua.avg_order_value;",
    solution_columns: ["id", "user_id", "total_amount"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_067",
    title: "Menu Items Never Ordered",
    description: "Find menu items that have never appeared in any order.",
    difficulty: "medium",
    expected_query:
      "SELECT mi.id, mi.name, mi.restaurant_id FROM menu_items mi LEFT JOIN order_items oi ON oi.menu_item_id = mi.id WHERE oi.id IS NULL;",
    solution_columns: ["id", "name", "restaurant_id"],
    tables: ["menu_items", "order_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_068",
    title: "Restaurants With Repeat Customers Ratio Above 50 Percent",
    description:
      "Find restaurants where more than 50 percent of ordering users have placed at least 2 orders from that restaurant.",
    difficulty: "medium",
    expected_query:
      "WITH user_restaurant_orders AS (SELECT restaurant_id, user_id, COUNT(*) AS order_count FROM orders GROUP BY restaurant_id, user_id), restaurant_customer_stats AS (SELECT restaurant_id, COUNT(*) AS total_customers, COUNT(*) FILTER (WHERE order_count >= 2) AS repeat_customers FROM user_restaurant_orders GROUP BY restaurant_id) SELECT r.id, r.name, (repeat_customers::numeric / NULLIF(total_customers, 0)) * 100 AS repeat_customer_percentage FROM restaurant_customer_stats rcs JOIN restaurants r ON r.id = rcs.restaurant_id WHERE (repeat_customers::numeric / NULLIF(total_customers, 0)) > 0.5;",
    solution_columns: ["id", "name", "repeat_customer_percentage"],
    tables: ["restaurants", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_069",
    title: "Users Who Ordered From The Same Restaurant On 3 Consecutive Orders",
    description:
      "Find users whose three consecutive orders were all placed from the same restaurant.",
    difficulty: "medium",
    expected_query:
      "WITH ranked_orders AS (SELECT user_id, restaurant_id, id, created_at, LAG(restaurant_id, 1) OVER (PARTITION BY user_id ORDER BY created_at, id) AS prev_restaurant_1, LAG(restaurant_id, 2) OVER (PARTITION BY user_id ORDER BY created_at, id) AS prev_restaurant_2 FROM orders) SELECT DISTINCT u.id, u.full_name FROM users u JOIN ranked_orders ro ON ro.user_id = u.id WHERE ro.prev_restaurant_1 = ro.restaurant_id AND ro.prev_restaurant_2 = ro.restaurant_id;",
    solution_columns: ["id", "full_name"],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_070",
    title: "Daily Delivered Revenue With 7 Day Rolling Average",
    description:
      "For each day, calculate delivered revenue and its 7 day rolling average.",
    difficulty: "medium",
    expected_query:
      "WITH daily_revenue AS (SELECT DATE(created_at) AS order_date, SUM(total_amount) AS total_revenue FROM orders WHERE order_status = 'delivered' GROUP BY DATE(created_at)) SELECT order_date, total_revenue, AVG(total_revenue) OVER (ORDER BY order_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS rolling_7_day_avg_revenue FROM daily_revenue;",
    solution_columns: [
      "order_date",
      "total_revenue",
      "rolling_7_day_avg_revenue",
    ],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_071",
    title: "Top Spending User Per Restaurant",
    description:
      "For each restaurant, find the user who has spent the most on delivered orders.",
    difficulty: "hard",
    expected_query:
      "WITH user_restaurant_spend AS (SELECT o.restaurant_id, o.user_id, SUM(o.total_amount) AS total_spent FROM orders o WHERE o.order_status = 'delivered' GROUP BY o.restaurant_id, o.user_id), ranked_spend AS (SELECT restaurant_id, user_id, total_spent, ROW_NUMBER() OVER (PARTITION BY restaurant_id ORDER BY total_spent DESC, user_id ASC) AS rn FROM user_restaurant_spend) SELECT restaurant_id, user_id, total_spent FROM ranked_spend WHERE rn = 1;",
    solution_columns: ["restaurant_id", "user_id", "total_spent"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_072",
    title: "Users With No Missing Active Month Since First Order",
    description:
      "Find users who placed at least one order in every calendar month from their first order month to their latest order month.",
    difficulty: "hard",
    expected_query:
      "WITH user_months AS (SELECT user_id, DATE_TRUNC('month', created_at) AS order_month FROM orders GROUP BY user_id, DATE_TRUNC('month', created_at)), user_bounds AS (SELECT user_id, MIN(order_month) AS first_month, MAX(order_month) AS last_month, COUNT(*) AS active_months FROM user_months GROUP BY user_id), expected_months AS (SELECT user_id, ((EXTRACT(YEAR FROM AGE(last_month, first_month)) * 12) + EXTRACT(MONTH FROM AGE(last_month, first_month)) + 1)::int AS expected_month_count, active_months FROM user_bounds) SELECT u.id, u.full_name FROM users u JOIN expected_months em ON em.user_id = u.id WHERE em.active_months = em.expected_month_count;",
    solution_columns: ["id", "full_name"],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_073",
    title: "Restaurants With Longest Average Delivery Delay",
    description:
      "Find the top 10 restaurants with the highest average delivery delay in minutes for delivered orders.",
    difficulty: "hard",
    expected_query:
      "SELECT r.id, r.name, AVG(EXTRACT(EPOCH FROM (o.delivered_at - o.estimated_delivery_at)) / 60) AS avg_delay_minutes FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' AND o.delivered_at IS NOT NULL AND o.estimated_delivery_at IS NOT NULL AND o.delivered_at > o.estimated_delivery_at GROUP BY r.id, r.name ORDER BY avg_delay_minutes DESC, r.id ASC LIMIT 10;",
    solution_columns: ["id", "name", "avg_delay_minutes"],
    tables: ["restaurants", "orders"],
    comparison_config: {
      sort_by_columns: [
        { column: "avg_delay_minutes", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "FOOD_074",
    title: "Top Driver By Completed Deliveries In Each City",
    description:
      "For each city, find the driver who completed the highest number of delivered orders.",
    difficulty: "hard",
    expected_query:
      "WITH driver_city_deliveries AS (SELECT r.city, d.id, d.full_name, COUNT(*) AS completed_deliveries FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id JOIN orders o ON o.id = da.order_id JOIN restaurants r ON r.id = o.restaurant_id WHERE da.status = 'delivered' GROUP BY r.city, d.id, d.full_name), ranked_drivers AS (SELECT city, id, full_name, completed_deliveries, ROW_NUMBER() OVER (PARTITION BY city ORDER BY completed_deliveries DESC, id ASC) AS rn FROM driver_city_deliveries) SELECT city, id, full_name, completed_deliveries FROM ranked_drivers WHERE rn = 1;",
    solution_columns: ["city", "id", "full_name", "completed_deliveries"],
    tables: ["drivers", "driver_assignments", "orders", "restaurants"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_075",
    title: "Users Whose Support Tickets Always Led To Refunds",
    description:
      "Find users for whom every support ticket has a refund amount greater than zero.",
    difficulty: "hard",
    expected_query:
      "SELECT u.id, u.full_name FROM users u JOIN support_tickets st ON st.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE st.refund_amount > 0);",
    solution_columns: ["id", "full_name"],
    tables: ["users", "support_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_076",
    title: "Highest Refund Order Per User",
    description:
      "For each user, find the order for which they received the highest refund amount through support tickets.",
    difficulty: "hard",
    expected_query:
      "WITH user_refunds AS (SELECT st.user_id, st.order_id, SUM(st.refund_amount) AS total_refund FROM support_tickets st GROUP BY st.user_id, st.order_id), ranked_refunds AS (SELECT user_id, order_id, total_refund, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY total_refund DESC, order_id ASC) AS rn FROM user_refunds) SELECT user_id, order_id, total_refund FROM ranked_refunds WHERE rn = 1;",
    solution_columns: ["user_id", "order_id", "total_refund"],
    tables: ["support_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_077",
    title: "Longest Gap Between Consecutive Orders Per User",
    description:
      "For each user, find the longest time gap in days between two consecutive orders.",
    difficulty: "hard",
    expected_query:
      "WITH ordered_gaps AS (SELECT user_id, order_created_at, LAG(order_created_at) OVER (PARTITION BY user_id ORDER BY order_created_at, order_id) AS previous_order_at FROM (SELECT o.user_id, o.id AS order_id, o.created_at AS order_created_at FROM orders o) base_orders) SELECT u.id, u.full_name, MAX(DATE_PART('day', og.order_created_at - og.previous_order_at)) AS longest_gap_days FROM users u JOIN ordered_gaps og ON og.user_id = u.id WHERE og.previous_order_at IS NOT NULL GROUP BY u.id, u.full_name;",
    solution_columns: ["id", "full_name", "longest_gap_days"],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_078",
    title: "Drivers With Consecutive Delivered Days",
    description:
      "Find drivers who completed deliveries on at least 5 consecutive calendar days.",
    difficulty: "hard",
    expected_query:
      "WITH driver_days AS (SELECT DISTINCT da.driver_id, DATE(da.delivered_at) AS delivery_day FROM driver_assignments da WHERE da.status = 'delivered' AND da.delivered_at IS NOT NULL), grouped_days AS (SELECT driver_id, delivery_day, delivery_day - (ROW_NUMBER() OVER (PARTITION BY driver_id ORDER BY delivery_day))::int AS grp_key FROM driver_days), streaks AS (SELECT driver_id, COUNT(*) AS streak_length FROM grouped_days GROUP BY driver_id, grp_key) SELECT d.id, d.full_name FROM drivers d JOIN streaks s ON s.driver_id = d.id WHERE s.streak_length >= 5 GROUP BY d.id, d.full_name;",
    solution_columns: ["id", "full_name"],
    tables: ["drivers", "driver_assignments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_079",
    title: "Users With Declining Monthly Order Counts",
    description:
      "Find users whose order count in a month is lower than in their immediately previous recorded month.",
    difficulty: "hard",
    expected_query:
      "WITH monthly_orders AS (SELECT user_id, DATE_TRUNC('month', created_at) AS order_month, COUNT(*) AS order_count FROM orders GROUP BY user_id, DATE_TRUNC('month', created_at)), ranked_months AS (SELECT user_id, order_month, order_count, LAG(order_count) OVER (PARTITION BY user_id ORDER BY order_month) AS previous_month_order_count FROM monthly_orders) SELECT u.id, u.full_name, rm.order_month, rm.order_count, rm.previous_month_order_count FROM users u JOIN ranked_months rm ON rm.user_id = u.id WHERE rm.previous_month_order_count IS NOT NULL AND rm.order_count < rm.previous_month_order_count;",
    solution_columns: [
      "id",
      "full_name",
      "order_month",
      "order_count",
      "previous_month_order_count",
    ],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_080",
    title: "Orders With Delay Greater Than Restaurant Average Delay",
    description:
      "Find delivered orders whose delay in minutes is greater than the average delivered delay for that same restaurant.",
    difficulty: "hard",
    expected_query:
      "WITH delayed_orders AS (SELECT id, restaurant_id, EXTRACT(EPOCH FROM (delivered_at - estimated_delivery_at)) / 60 AS delay_minutes FROM orders WHERE order_status = 'delivered' AND delivered_at IS NOT NULL AND estimated_delivery_at IS NOT NULL AND delivered_at > estimated_delivery_at), restaurant_avg_delay AS (SELECT restaurant_id, AVG(delay_minutes) AS avg_delay_minutes FROM delayed_orders GROUP BY restaurant_id) SELECT dly.id, dly.restaurant_id, dly.delay_minutes FROM delayed_orders dly JOIN restaurant_avg_delay rad ON rad.restaurant_id = dly.restaurant_id WHERE dly.delay_minutes > rad.avg_delay_minutes;",
    solution_columns: ["id", "restaurant_id", "delay_minutes"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_081",
    title: "Top 3 Cities By Monthly Delivered Revenue",
    description:
      "For each month, find the top 3 cities with the highest delivered order revenue.",
    difficulty: "hard",
    expected_query:
      "WITH monthly_city_revenue AS (SELECT DATE_TRUNC('month', o.created_at) AS revenue_month, r.city, SUM(o.total_amount) AS total_revenue FROM orders o JOIN restaurants r ON r.id = o.restaurant_id WHERE o.order_status = 'delivered' GROUP BY DATE_TRUNC('month', o.created_at), r.city), ranked_cities AS (SELECT revenue_month, city, total_revenue, ROW_NUMBER() OVER (PARTITION BY revenue_month ORDER BY total_revenue DESC, city ASC) AS rn FROM monthly_city_revenue) SELECT revenue_month, city, total_revenue FROM ranked_cities WHERE rn <= 3;",
    solution_columns: ["revenue_month", "city", "total_revenue"],
    tables: ["orders", "restaurants"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_082",
    title: "Top 2 Coupons Per Month By Usage",
    description:
      "For each month, find the top 2 coupons used in the highest number of orders.",
    difficulty: "hard",
    expected_query:
      "WITH monthly_coupon_usage AS (SELECT DATE_TRUNC('month', o.created_at) AS usage_month, c.code, COUNT(*) AS usage_count FROM orders o JOIN coupons c ON c.id = o.coupon_id GROUP BY DATE_TRUNC('month', o.created_at), c.code), ranked_coupon_usage AS (SELECT usage_month, code, usage_count, ROW_NUMBER() OVER (PARTITION BY usage_month ORDER BY usage_count DESC, code ASC) AS rn FROM monthly_coupon_usage) SELECT usage_month, code, usage_count FROM ranked_coupon_usage WHERE rn <= 2;",
    solution_columns: ["usage_month", "code", "usage_count"],
    tables: ["orders", "coupons"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_083",
    title: "Restaurants With Higher Weekend Revenue Than Weekday Revenue",
    description:
      "Find restaurants whose delivered revenue from weekend orders is greater than their delivered revenue from weekday orders.",
    difficulty: "hard",
    expected_query:
      "WITH delivered_orders AS (SELECT restaurant_id, total_amount, EXTRACT(ISODOW FROM created_at) AS order_isodow FROM orders WHERE order_status = 'delivered') SELECT r.id, r.name, SUM(o.total_amount) FILTER (WHERE o.order_isodow IN (6, 7)) AS weekend_revenue, SUM(o.total_amount) FILTER (WHERE o.order_isodow BETWEEN 1 AND 5) AS weekday_revenue FROM restaurants r JOIN delivered_orders o ON o.restaurant_id = r.id GROUP BY r.id, r.name HAVING COALESCE(SUM(o.total_amount) FILTER (WHERE o.order_isodow IN (6, 7)), 0) > COALESCE(SUM(o.total_amount) FILTER (WHERE o.order_isodow BETWEEN 1 AND 5), 0);",
    solution_columns: ["id", "name", "weekend_revenue", "weekday_revenue"],
    tables: ["restaurants", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_084",
    title: "Users With Refunds On Multiple Orders",
    description:
      "Find users who received refunds on more than one distinct order.",
    difficulty: "hard",
    expected_query:
      "WITH refunded_orders AS (SELECT user_id, order_id, SUM(refund_amount) AS total_refund FROM support_tickets WHERE refund_amount > 0 GROUP BY user_id, order_id) SELECT u.id, u.full_name, COUNT(*) AS refunded_order_count FROM users u JOIN refunded_orders ro ON ro.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) > 1;",
    solution_columns: ["id", "full_name", "refunded_order_count"],
    tables: ["users", "support_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_085",
    title: "Drivers With Zero Failed Deliveries",
    description:
      "Find drivers who have completed at least 10 deliveries and have never had a failed or cancelled assignment.",
    difficulty: "hard",
    expected_query:
      "SELECT d.id, d.full_name, COUNT(*) FILTER (WHERE da.status = 'delivered') AS delivered_count FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id GROUP BY d.id, d.full_name HAVING COUNT(*) FILTER (WHERE da.status = 'delivered') >= 10 AND COUNT(*) FILTER (WHERE da.status IN ('failed', 'cancelled')) = 0;",
    solution_columns: ["id", "full_name", "delivered_count"],
    tables: ["drivers", "driver_assignments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_086",
    title: "Restaurants With Increasing Revenue In Latest Three Months",
    description:
      "Find restaurants whose delivered revenue increased month over month across their latest three recorded months.",
    difficulty: "hard",
    expected_query:
      "WITH monthly_revenue AS (SELECT restaurant_id, DATE_TRUNC('month', created_at) AS revenue_month, SUM(total_amount) AS total_revenue FROM orders WHERE order_status = 'delivered' GROUP BY restaurant_id, DATE_TRUNC('month', created_at)), ranked_months AS (SELECT restaurant_id, revenue_month, total_revenue, ROW_NUMBER() OVER (PARTITION BY restaurant_id ORDER BY revenue_month DESC) AS rn FROM monthly_revenue), last_three AS (SELECT restaurant_id, revenue_month, total_revenue FROM ranked_months WHERE rn <= 3), pivoted AS (SELECT restaurant_id, MAX(total_revenue) FILTER (WHERE rn = 1) AS month_1_revenue, MAX(total_revenue) FILTER (WHERE rn = 2) AS month_2_revenue, MAX(total_revenue) FILTER (WHERE rn = 3) AS month_3_revenue FROM (SELECT restaurant_id, total_revenue, ROW_NUMBER() OVER (PARTITION BY restaurant_id ORDER BY revenue_month DESC) AS rn FROM last_three) t GROUP BY restaurant_id) SELECT r.id, r.name, p.month_3_revenue AS oldest_month_revenue, p.month_2_revenue AS middle_month_revenue, p.month_1_revenue AS latest_month_revenue FROM pivoted p JOIN restaurants r ON r.id = p.restaurant_id WHERE p.month_1_revenue IS NOT NULL AND p.month_2_revenue IS NOT NULL AND p.month_3_revenue IS NOT NULL AND p.month_3_revenue < p.month_2_revenue AND p.month_2_revenue < p.month_1_revenue;",
    solution_columns: [
      "id",
      "name",
      "oldest_month_revenue",
      "middle_month_revenue",
      "latest_month_revenue",
    ],
    tables: ["restaurants", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_087",
    title: "Users Active In Every Month Since Signup",
    description:
      "Find users who placed at least one order in every calendar month from their signup month to their latest order month.",
    difficulty: "hard",
    expected_query:
      "WITH user_months AS (SELECT u.id AS user_id, DATE_TRUNC('month', u.created_at) AS signup_month, COUNT(DISTINCT DATE_TRUNC('month', o.created_at)) AS active_months, DATE_TRUNC('month', MAX(o.created_at)) AS last_order_month FROM users u JOIN orders o ON o.user_id = u.id GROUP BY u.id, DATE_TRUNC('month', u.created_at)), expected_months AS (SELECT user_id, ((EXTRACT(YEAR FROM AGE(last_order_month, signup_month)) * 12) + EXTRACT(MONTH FROM AGE(last_order_month, signup_month)) + 1)::int AS expected_month_count, active_months FROM user_months) SELECT u.id, u.full_name FROM users u JOIN expected_months em ON em.user_id = u.id WHERE em.active_months = em.expected_month_count;",
    solution_columns: ["id", "full_name"],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_088",
    title: "Orders With Discount Above Coupon Average",
    description:
      "Find orders whose discount amount is greater than the average discount amount of other orders using the same coupon.",
    difficulty: "hard",
    expected_query:
      "WITH coupon_avg_discount AS (SELECT coupon_id, AVG(discount_amount) AS avg_discount FROM orders WHERE coupon_id IS NOT NULL GROUP BY coupon_id) SELECT o.id, o.coupon_id, o.discount_amount FROM orders o JOIN coupon_avg_discount cad ON cad.coupon_id = o.coupon_id WHERE o.discount_amount > cad.avg_discount;",
    solution_columns: ["id", "coupon_id", "discount_amount"],
    tables: ["orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_089",
    title: "Drivers With Higher Tip Earnings Than Delivery Earnings",
    description:
      "Find driver assignments where tip earnings were greater than delivery earnings.",
    difficulty: "hard",
    expected_query:
      "SELECT driver_id, order_id, delivery_earnings, tip_earnings FROM driver_assignments WHERE tip_earnings > delivery_earnings;",
    solution_columns: [
      "driver_id",
      "order_id",
      "delivery_earnings",
      "tip_earnings",
    ],
    tables: ["driver_assignments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_090",
    title: "Users With More Reviews Than Distinct Restaurants Ordered",
    description:
      "Find users whose total number of reviews is greater than the number of distinct restaurants they have ordered from.",
    difficulty: "hard",
    expected_query:
      "WITH distinct_user_restaurants AS (SELECT DISTINCT user_id, restaurant_id FROM orders), user_restaurants AS (SELECT user_id, COUNT(*) AS restaurant_count FROM distinct_user_restaurants GROUP BY user_id), user_reviews AS (SELECT user_id, COUNT(*) AS review_count FROM reviews GROUP BY user_id) SELECT u.id, u.full_name, urv.review_count, uro.restaurant_count FROM users u JOIN user_reviews urv ON urv.user_id = u.id JOIN user_restaurants uro ON uro.user_id = u.id WHERE urv.review_count > uro.restaurant_count;",
    solution_columns: ["id", "full_name", "review_count", "restaurant_count"],
    tables: ["users", "reviews", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_091",
    title: "Top 3 Drivers Per City By Completed Deliveries",
    description:
      "For each city, find the top 3 drivers with the highest number of completed deliveries.",
    difficulty: "hard",
    expected_query:
      "WITH driver_deliveries AS (SELECT r.city, d.id, d.full_name, COUNT(*) AS completed_deliveries FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id JOIN orders o ON o.id = da.order_id JOIN restaurants r ON r.id = o.restaurant_id WHERE da.status = 'delivered' GROUP BY r.city, d.id, d.full_name), ranked_drivers AS (SELECT city, id, full_name, completed_deliveries, ROW_NUMBER() OVER (PARTITION BY city ORDER BY completed_deliveries DESC, id ASC) AS rn FROM driver_deliveries) SELECT city, id, full_name, completed_deliveries FROM ranked_drivers WHERE rn <= 3;",
    solution_columns: ["city", "id", "full_name", "completed_deliveries"],
    tables: ["drivers", "driver_assignments", "orders", "restaurants"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_092",
    title: "Users Whose All Orders Were Placed On Weekends",
    description:
      "Find users who placed at least one order and every one of their orders was placed on a weekend.",
    difficulty: "hard",
    expected_query:
      "WITH user_orders AS (SELECT user_id, created_at FROM orders) SELECT u.id, u.full_name FROM users u JOIN user_orders uo ON uo.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE EXTRACT(ISODOW FROM uo.created_at) IN (6, 7));",
    solution_columns: ["id", "full_name"],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_093",
    title: "Highest Single Day Revenue Restaurant Per City",
    description:
      "For each city, find the restaurant-day combination with the highest delivered revenue in a single day.",
    difficulty: "hard",
    expected_query:
      "WITH daily_restaurant_revenue AS (SELECT r.city, r.id, r.name, DATE(o.created_at) AS order_date, SUM(o.total_amount) AS daily_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city, r.id, r.name, DATE(o.created_at)), ranked_revenue AS (SELECT city, id, name, order_date, daily_revenue, ROW_NUMBER() OVER (PARTITION BY city ORDER BY daily_revenue DESC, order_date ASC, id ASC) AS rn FROM daily_restaurant_revenue) SELECT city, id, name, order_date, daily_revenue FROM ranked_revenue WHERE rn = 1;",
    solution_columns: ["city", "id", "name", "order_date", "daily_revenue"],
    tables: ["restaurants", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_094",
    title: "Drivers With Average Wait Time Above City Average",
    description:
      "Find drivers whose average restaurant wait time is greater than the average wait time of drivers in the same city.",
    difficulty: "hard",
    expected_query:
      "WITH driver_city_wait AS (SELECT r.city, d.id, d.full_name, AVG(da.wait_time_minutes) AS avg_wait_time FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id JOIN orders o ON o.id = da.order_id JOIN restaurants r ON r.id = o.restaurant_id WHERE da.wait_time_minutes IS NOT NULL GROUP BY r.city, d.id, d.full_name), city_wait_avg AS (SELECT city, AVG(avg_wait_time) AS city_avg_wait_time FROM driver_city_wait GROUP BY city) SELECT dcw.city, dcw.id, dcw.full_name, dcw.avg_wait_time FROM driver_city_wait dcw JOIN city_wait_avg cwa ON cwa.city = dcw.city WHERE dcw.avg_wait_time > cwa.city_avg_wait_time;",
    solution_columns: ["city", "id", "full_name", "avg_wait_time"],
    tables: ["drivers", "driver_assignments", "orders", "restaurants"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_095",
    title: "Restaurants With No Stockout In Any Item",
    description:
      "Find restaurants where every menu item has never been marked unavailable in the availability logs.",
    difficulty: "hard",
    expected_query:
      "SELECT r.id, r.name FROM restaurants r WHERE EXISTS (SELECT 1 FROM menu_items mi WHERE mi.restaurant_id = r.id) AND NOT EXISTS (SELECT 1 FROM menu_items mi JOIN menu_item_availability_logs l ON l.menu_item_id = mi.id WHERE mi.restaurant_id = r.id AND l.was_available = false);",
    solution_columns: ["id", "name"],
    tables: ["restaurants", "menu_items", "menu_item_availability_logs"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_096",
    title: "Users Whose Monthly Spend Beat All Previous Months",
    description:
      "Find user-months where the delivered spend was greater than every previous recorded month for that user.",
    difficulty: "hard",
    expected_query:
      "WITH monthly_spend AS (SELECT user_id, DATE_TRUNC('month', created_at) AS spend_month, SUM(total_amount) AS total_spent FROM orders WHERE order_status = 'delivered' GROUP BY user_id, DATE_TRUNC('month', created_at)), spend_history AS (SELECT user_id, spend_month, total_spent, MAX(total_spent) OVER (PARTITION BY user_id ORDER BY spend_month ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING) AS previous_best_spend FROM monthly_spend) SELECT u.id, u.full_name, sh.spend_month, sh.total_spent FROM users u JOIN spend_history sh ON sh.user_id = u.id WHERE sh.previous_best_spend IS NOT NULL AND sh.total_spent > sh.previous_best_spend;",
    solution_columns: ["id", "full_name", "spend_month", "total_spent"],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_097",
    title: "Restaurants Whose Every Menu Category Has Been Ordered",
    description:
      "Find restaurants where every menu category has appeared in at least one order.",
    difficulty: "hard",
    expected_query:
      "WITH restaurant_categories AS (SELECT restaurant_id, COUNT(DISTINCT category) AS total_categories FROM menu_items GROUP BY restaurant_id), ordered_categories AS (SELECT mi.restaurant_id, COUNT(DISTINCT mi.category) AS ordered_categories FROM menu_items mi JOIN order_items oi ON oi.menu_item_id = mi.id GROUP BY mi.restaurant_id) SELECT r.id, r.name FROM restaurants r JOIN restaurant_categories rc ON rc.restaurant_id = r.id JOIN ordered_categories oc ON oc.restaurant_id = r.id WHERE rc.total_categories = oc.ordered_categories;",
    solution_columns: ["id", "name"],
    tables: ["restaurants", "menu_items", "order_items"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_098",
    title: "Users With More Support Tickets Than Orders",
    description:
      "Find users whose number of support tickets is greater than their total number of orders.",
    difficulty: "hard",
    expected_query:
      "WITH user_order_counts AS (SELECT user_id, COUNT(*) AS order_count FROM orders GROUP BY user_id), user_ticket_counts AS (SELECT user_id, COUNT(*) AS ticket_count FROM support_tickets GROUP BY user_id) SELECT u.id, u.full_name, utc.ticket_count, uoc.order_count FROM users u JOIN user_ticket_counts utc ON utc.user_id = u.id JOIN user_order_counts uoc ON uoc.user_id = u.id WHERE utc.ticket_count > uoc.order_count;",
    solution_columns: ["id", "full_name", "ticket_count", "order_count"],
    tables: ["users", "orders", "support_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_099",
    title: "Orders Whose Tip Exceeded All Previous Tips For Same User",
    description:
      "Find orders where the tip amount is greater than every previous order tip of the same user.",
    difficulty: "hard",
    expected_query:
      "WITH user_tip_history AS (SELECT user_id, id, created_at, tip_amount, MAX(tip_amount) OVER (PARTITION BY user_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING) AS previous_best_tip FROM orders) SELECT u.id AS user_id, u.full_name, uth.id AS order_id, uth.tip_amount FROM users u JOIN user_tip_history uth ON uth.user_id = u.id WHERE uth.previous_best_tip IS NOT NULL AND uth.tip_amount > uth.previous_best_tip;",
    solution_columns: ["user_id", "full_name", "order_id", "tip_amount"],
    tables: ["users", "orders"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "FOOD_100",
    title: "Cities Where Delivered Revenue Declined In Latest Month",
    description:
      "Find cities whose delivered revenue in the latest recorded month is lower than in the previous recorded month.",
    difficulty: "hard",
    expected_query:
      "WITH monthly_city_revenue AS (SELECT r.city, DATE_TRUNC('month', o.created_at) AS revenue_month, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city, DATE_TRUNC('month', o.created_at)), ranked_months AS (SELECT city, revenue_month, total_revenue, ROW_NUMBER() OVER (PARTITION BY city ORDER BY revenue_month DESC) AS rn, LEAD(total_revenue, 1) OVER (PARTITION BY city ORDER BY revenue_month DESC) AS previous_month_revenue FROM monthly_city_revenue) SELECT city, revenue_month AS latest_month, total_revenue AS latest_month_revenue, previous_month_revenue FROM ranked_months WHERE rn = 1 AND previous_month_revenue IS NOT NULL AND total_revenue < previous_month_revenue;",
    solution_columns: [
      "city",
      "latest_month",
      "latest_month_revenue",
      "previous_month_revenue",
    ],
    tables: ["restaurants", "orders"],
    comparison_config: {},
  },
];

export const hints = [
  {
    code: "FOOD_001",
    hints: [
      {
        hint_order: 1,
        content: "Use an aggregate function.",
      },
      {
        hint_order: 2,
        content: "Count all rows in the users table.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) will give total users.",
      },
    ],
  },
  {
    code: "FOOD_002",
    hints: [
      {
        hint_order: 1,
        content: "Filter active users first.",
      },
      {
        hint_order: 2,
        content: "Check the is_active column.",
      },
      {
        hint_order: 3,
        content: "Use COUNT(*) with WHERE is_active = true.",
      },
    ],
  },
  {
    code: "FOOD_003",
    hints: [
      {
        hint_order: 1,
        content: "Count all restaurants.",
      },
      {
        hint_order: 2,
        content: "No filtering is needed.",
      },
      {
        hint_order: 3,
        content: "Use COUNT(*) on restaurants.",
      },
    ],
  },
  {
    code: "FOOD_004",
    hints: [
      {
        hint_order: 1,
        content: "Only active restaurants should be counted.",
      },
      {
        hint_order: 2,
        content: "Check the is_active flag.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE is_active = true.",
      },
    ],
  },
  {
    code: "FOOD_005",
    hints: [
      {
        hint_order: 1,
        content: "Count all orders placed.",
      },
      {
        hint_order: 2,
        content: "Use orders table only.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) returns total orders.",
      },
    ],
  },
  {
    code: "FOOD_006",
    hints: [
      {
        hint_order: 1,
        content: "Filter delivered orders.",
      },
      {
        hint_order: 2,
        content: "Check order_status column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE order_status = 'delivered'.",
      },
    ],
  },
  {
    code: "FOOD_007",
    hints: [
      {
        hint_order: 1,
        content: "Find cancelled orders only.",
      },
      {
        hint_order: 2,
        content: "Use order_status filter.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) where status is cancelled.",
      },
    ],
  },
  {
    code: "FOOD_008",
    hints: [
      {
        hint_order: 1,
        content: "Use an aggregate average function.",
      },
      {
        hint_order: 2,
        content: "Consider only delivered orders.",
      },
      {
        hint_order: 3,
        content: "AVG(total_amount) gives average order value.",
      },
    ],
  },
  {
    code: "FOOD_009",
    hints: [
      {
        hint_order: 1,
        content: "Count all drivers.",
      },
      {
        hint_order: 2,
        content: "Use drivers table.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) gives total drivers.",
      },
    ],
  },
  {
    code: "FOOD_010",
    hints: [
      {
        hint_order: 1,
        content: "Filter active drivers.",
      },
      {
        hint_order: 2,
        content: "Check is_active field.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) where is_active = true.",
      },
    ],
  },
  {
    code: "FOOD_011",
    hints: [
      {
        hint_order: 1,
        content: "Count all menu items.",
      },
      {
        hint_order: 2,
        content: "Use menu_items table.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) returns total menu items.",
      },
    ],
  },
  {
    code: "FOOD_012",
    hints: [
      {
        hint_order: 1,
        content: "Only available items matter.",
      },
      {
        hint_order: 2,
        content: "Check is_available flag.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE is_available = true.",
      },
    ],
  },
  {
    code: "FOOD_013",
    hints: [
      {
        hint_order: 1,
        content: "Count all coupons created.",
      },
      {
        hint_order: 2,
        content: "Use coupons table.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) gives total coupons.",
      },
    ],
  },
  {
    code: "FOOD_014",
    hints: [
      {
        hint_order: 1,
        content: "Filter active coupons.",
      },
      {
        hint_order: 2,
        content: "Check is_active column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) where is_active = true.",
      },
    ],
  },
  {
    code: "FOOD_015",
    hints: [
      {
        hint_order: 1,
        content: "Orders using coupons have coupon_id filled.",
      },
      {
        hint_order: 2,
        content: "Check for non-null coupon_id.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE coupon_id IS NOT NULL.",
      },
    ],
  },
  {
    code: "FOOD_016",
    hints: [
      {
        hint_order: 1,
        content: "Count all submitted reviews.",
      },
      {
        hint_order: 2,
        content: "Use reviews table.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) gives total reviews.",
      },
    ],
  },
  {
    code: "FOOD_017",
    hints: [
      {
        hint_order: 1,
        content: "Use AVG on ratings.",
      },
      {
        hint_order: 2,
        content: "Read values from reviews table.",
      },
      {
        hint_order: 3,
        content: "AVG(rating) gives average rating.",
      },
    ],
  },
  {
    code: "FOOD_018",
    hints: [
      {
        hint_order: 1,
        content: "Filter orders placed today.",
      },
      {
        hint_order: 2,
        content: "Compare created_at date with CURRENT_DATE.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) where DATE(created_at) = CURRENT_DATE.",
      },
    ],
  },
  {
    code: "FOOD_019",
    hints: [
      {
        hint_order: 1,
        content: "Filter users by city.",
      },
      {
        hint_order: 2,
        content: "Check default_city column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) where default_city = 'Hyderabad'.",
      },
    ],
  },
  {
    code: "FOOD_020",
    hints: [
      {
        hint_order: 1,
        content: "Filter restaurants by city.",
      },
      {
        hint_order: 2,
        content: "Check city column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) where city = 'Hyderabad'.",
      },
    ],
  },
  {
    code: "FOOD_021",
    hints: [
      {
        hint_order: 1,
        content: "Group orders by user.",
      },
      {
        hint_order: 2,
        content: "Count orders per user.",
      },
      {
        hint_order: 3,
        content: "Use GROUP BY user_id with COUNT(*).",
      },
    ],
  },
  {
    code: "FOOD_022",
    hints: [
      {
        hint_order: 1,
        content: "Group restaurants by city.",
      },
      {
        hint_order: 2,
        content: "Count restaurants in each city.",
      },
      {
        hint_order: 3,
        content: "GROUP BY city with COUNT(*).",
      },
    ],
  },
  {
    code: "FOOD_023",
    hints: [
      {
        hint_order: 1,
        content: "Find highest order value.",
      },
      {
        hint_order: 2,
        content: "Use MAX on total_amount.",
      },
      {
        hint_order: 3,
        content: "MAX(total_amount) gives highest order.",
      },
    ],
  },
  {
    code: "FOOD_024",
    hints: [
      {
        hint_order: 1,
        content: "Find cheapest menu item.",
      },
      {
        hint_order: 2,
        content: "Use MIN on price.",
      },
      {
        hint_order: 3,
        content: "MIN(price) gives cheapest item.",
      },
    ],
  },
  {
    code: "FOOD_025",
    hints: [
      {
        hint_order: 1,
        content: "Group orders by restaurant.",
      },
      {
        hint_order: 2,
        content: "Sum total_amount for delivered orders.",
      },
      {
        hint_order: 3,
        content: "Use SUM(total_amount) with GROUP BY restaurant_id.",
      },
    ],
  },
  {
    code: "FOOD_026",
    hints: [
      {
        hint_order: 1,
        content: "Count reviews per restaurant.",
      },
      {
        hint_order: 2,
        content: "Group by restaurant_id.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with GROUP BY restaurant_id.",
      },
    ],
  },
  {
    code: "FOOD_027",
    hints: [
      {
        hint_order: 1,
        content: "Find users with more than one order.",
      },
      {
        hint_order: 2,
        content: "Group by user_id and count orders.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "FOOD_028",
    hints: [
      {
        hint_order: 1,
        content: "Find restaurants with average rating above threshold.",
      },
      {
        hint_order: 2,
        content: "Use AVG(rating).",
      },
      {
        hint_order: 3,
        content: "HAVING AVG(rating) > 4.",
      },
    ],
  },
  {
    code: "FOOD_029",
    hints: [
      {
        hint_order: 1,
        content: "Count delivered orders per driver.",
      },
      {
        hint_order: 2,
        content: "Filter by delivered status.",
      },
      {
        hint_order: 3,
        content: "GROUP BY driver_id with COUNT(*).",
      },
    ],
  },
  {
    code: "FOOD_030",
    hints: [
      {
        hint_order: 1,
        content: "Find total revenue by city.",
      },
      {
        hint_order: 2,
        content: "Join restaurants with orders.",
      },
      {
        hint_order: 3,
        content: "SUM(total_amount) grouped by city.",
      },
    ],
  },
  {
    code: "FOOD_031",
    hints: [
      {
        hint_order: 1,
        content: "Join restaurants with orders.",
      },
      {
        hint_order: 2,
        content: "Group the results by city.",
      },
      {
        hint_order: 3,
        content: "Count orders per city and sort by total orders descending.",
      },
    ],
  },
  {
    code: "FOOD_032",
    hints: [
      {
        hint_order: 1,
        content: "Find users who never placed an order.",
      },
      {
        hint_order: 2,
        content: "Try LEFT JOIN users with orders.",
      },
      {
        hint_order: 3,
        content: "Keep rows where order id is NULL.",
      },
    ],
  },
  {
    code: "FOOD_033",
    hints: [
      {
        hint_order: 1,
        content: "Find restaurants with no reviews.",
      },
      {
        hint_order: 2,
        content: "LEFT JOIN restaurants with reviews.",
      },
      {
        hint_order: 3,
        content: "Filter where review id is NULL.",
      },
    ],
  },
  {
    code: "FOOD_034",
    hints: [
      {
        hint_order: 1,
        content: "Find the most expensive menu item per restaurant.",
      },
      {
        hint_order: 2,
        content: "Group by restaurant_id.",
      },
      {
        hint_order: 3,
        content: "Use MAX(price) for each restaurant.",
      },
    ],
  },
  {
    code: "FOOD_035",
    hints: [
      {
        hint_order: 1,
        content: "Find users who used coupons more than once.",
      },
      {
        hint_order: 2,
        content: "Filter coupon_id IS NOT NULL.",
      },
      {
        hint_order: 3,
        content: "GROUP BY user_id HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "FOOD_036",
    hints: [
      {
        hint_order: 1,
        content: "Calculate revenue for each restaurant.",
      },
      {
        hint_order: 2,
        content: "Consider only delivered orders.",
      },
      {
        hint_order: 3,
        content: "Use SUM(total_amount) grouped by restaurant_id.",
      },
    ],
  },
  {
    code: "FOOD_037",
    hints: [
      {
        hint_order: 1,
        content: "Find drivers with highest completed deliveries.",
      },
      {
        hint_order: 2,
        content: "Filter delivered assignments only.",
      },
      {
        hint_order: 3,
        content: "Sort by COUNT(*) descending and LIMIT 1.",
      },
    ],
  },
  {
    code: "FOOD_038",
    hints: [
      {
        hint_order: 1,
        content: "Find average review rating per city.",
      },
      {
        hint_order: 2,
        content: "Join reviews with restaurants.",
      },
      {
        hint_order: 3,
        content: "Use AVG(rating) grouped by city.",
      },
    ],
  },
  {
    code: "FOOD_039",
    hints: [
      {
        hint_order: 1,
        content: "Find total discount amount used per coupon.",
      },
      {
        hint_order: 2,
        content: "Group by coupon_id.",
      },
      {
        hint_order: 3,
        content: "Use SUM(discount_amount).",
      },
    ],
  },
  {
    code: "FOOD_040",
    hints: [
      {
        hint_order: 1,
        content: "Find users who ordered from multiple restaurants.",
      },
      {
        hint_order: 2,
        content: "Count distinct restaurant_id per user.",
      },
      {
        hint_order: 3,
        content: "HAVING COUNT(DISTINCT restaurant_id) > 1.",
      },
    ],
  },
  {
    code: "FOOD_041",
    hints: [
      {
        hint_order: 1,
        content: "Find total menu items per restaurant.",
      },
      {
        hint_order: 2,
        content: "Group by restaurant_id.",
      },
      {
        hint_order: 3,
        content: "Use COUNT(*) for each restaurant.",
      },
    ],
  },
  {
    code: "FOOD_042",
    hints: [
      {
        hint_order: 1,
        content: "Find total delivered revenue per city.",
      },
      {
        hint_order: 2,
        content: "Join restaurants and orders.",
      },
      {
        hint_order: 3,
        content: "SUM(total_amount) grouped by city.",
      },
    ],
  },
  {
    code: "FOOD_043",
    hints: [
      {
        hint_order: 1,
        content: "Find restaurants with more than 100 orders.",
      },
      {
        hint_order: 2,
        content: "Group orders by restaurant_id.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(*) > 100.",
      },
    ],
  },
  {
    code: "FOOD_044",
    hints: [
      {
        hint_order: 1,
        content: "Find users whose average order value is above 500.",
      },
      {
        hint_order: 2,
        content: "Group orders by user_id.",
      },
      {
        hint_order: 3,
        content: "Use HAVING AVG(total_amount) > 500.",
      },
    ],
  },
  {
    code: "FOOD_045",
    hints: [
      {
        hint_order: 1,
        content: "Find coupon usage count by month.",
      },
      {
        hint_order: 2,
        content: "Use DATE_TRUNC on created_at.",
      },
      {
        hint_order: 3,
        content: "Group by month and coupon code.",
      },
    ],
  },
  {
    code: "FOOD_046",
    hints: [
      {
        hint_order: 1,
        content: "Find most reviewed restaurant.",
      },
      {
        hint_order: 2,
        content: "Count reviews per restaurant.",
      },
      {
        hint_order: 3,
        content: "Sort descending and LIMIT 1.",
      },
    ],
  },
  {
    code: "FOOD_047",
    hints: [
      {
        hint_order: 1,
        content: "Find users with consecutive orders on same day.",
      },
      {
        hint_order: 2,
        content: "Use DATE(created_at).",
      },
      {
        hint_order: 3,
        content: "Group by user and date, then HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "FOOD_048",
    hints: [
      {
        hint_order: 1,
        content: "Find total orders by weekday.",
      },
      {
        hint_order: 2,
        content: "Extract weekday from created_at.",
      },
      {
        hint_order: 3,
        content: "Use GROUP BY EXTRACT(DOW ...).",
      },
    ],
  },
  {
    code: "FOOD_049",
    hints: [
      {
        hint_order: 1,
        content: "Find restaurants where average menu price > city average.",
      },
      {
        hint_order: 2,
        content: "First calculate restaurant average.",
      },
      {
        hint_order: 3,
        content: "Compare with city-level average using CTE.",
      },
    ],
  },
  {
    code: "FOOD_050",
    hints: [
      {
        hint_order: 1,
        content: "Find top spending user overall.",
      },
      {
        hint_order: 2,
        content: "Sum delivered spend by user.",
      },
      {
        hint_order: 3,
        content: "Sort descending and LIMIT 1.",
      },
    ],
  },
  {
    code: "FOOD_051",
    hints: [
      {
        hint_order: 1,
        content: "First calculate delivered revenue per restaurant.",
      },
      {
        hint_order: 2,
        content: "Rank restaurants within each city.",
      },
      {
        hint_order: 3,
        content: "Use ROW_NUMBER() and keep top 3.",
      },
    ],
  },
  {
    code: "FOOD_052",
    hints: [
      {
        hint_order: 1,
        content: "Find users with orders in every month.",
      },
      {
        hint_order: 2,
        content: "Count distinct months per user.",
      },
      {
        hint_order: 3,
        content: "Compare with total months in dataset.",
      },
    ],
  },
  {
    code: "FOOD_053",
    hints: [
      {
        hint_order: 1,
        content: "Calculate restaurant revenue first.",
      },
      {
        hint_order: 2,
        content: "Find city average revenue.",
      },
      {
        hint_order: 3,
        content: "Keep restaurants above that average.",
      },
    ],
  },
  {
    code: "FOOD_054",
    hints: [
      {
        hint_order: 1,
        content: "Find restaurants with weekend revenue > weekday revenue.",
      },
      {
        hint_order: 2,
        content: "Use conditional SUM.",
      },
      {
        hint_order: 3,
        content: "Compare weekend and weekday totals.",
      },
    ],
  },
  {
    code: "FOOD_055",
    hints: [
      {
        hint_order: 1,
        content: "Count ordered quantity per menu item.",
      },
      {
        hint_order: 2,
        content: "Partition by restaurant.",
      },
      {
        hint_order: 3,
        content: "Use ROW_NUMBER() to get top item per restaurant.",
      },
    ],
  },
  {
    code: "FOOD_056",
    hints: [
      {
        hint_order: 1,
        content: "Find all cuisines available in each city.",
      },
      {
        hint_order: 2,
        content: "Count cuisines ordered by each user in that city.",
      },
      {
        hint_order: 3,
        content: "Keep users where both counts match.",
      },
    ],
  },
  {
    code: "FOOD_057",
    hints: [
      {
        hint_order: 1,
        content: "Find average delivery time per driver.",
      },
      {
        hint_order: 2,
        content: "Use delivered_at - assigned_at.",
      },
      {
        hint_order: 3,
        content: "AVG over completed assignments.",
      },
    ],
  },
  {
    code: "FOOD_058",
    hints: [
      {
        hint_order: 1,
        content: "Find users who always order from same restaurant.",
      },
      {
        hint_order: 2,
        content: "Count distinct restaurant_id per user.",
      },
      {
        hint_order: 3,
        content: "Keep only users with count = 1.",
      },
    ],
  },
  {
    code: "FOOD_059",
    hints: [
      {
        hint_order: 1,
        content: "Find restaurants with highest order growth month-over-month.",
      },
      {
        hint_order: 2,
        content: "Use monthly grouped revenue.",
      },
      {
        hint_order: 3,
        content: "Use LAG() to compare previous month.",
      },
    ],
  },
  {
    code: "FOOD_060",
    hints: [
      {
        hint_order: 1,
        content: "Find restaurants with more repeat users than new users.",
      },
      {
        hint_order: 2,
        content: "Count orders per user per restaurant.",
      },
      {
        hint_order: 3,
        content: "Compare repeat customer count vs single-order users.",
      },
    ],
  },
  {
    code: "FOOD_061",
    hints: [
      {
        hint_order: 1,
        content: "Calculate total delivered spend per user within each city.",
      },
      {
        hint_order: 2,
        content: "Rank users inside each city by spend.",
      },
      {
        hint_order: 3,
        content: "Use ROW_NUMBER() and keep top 2 per city.",
      },
    ],
  },
  {
    code: "FOOD_062",
    hints: [
      {
        hint_order: 1,
        content: "Compare each order with the next order of the same user.",
      },
      {
        hint_order: 2,
        content: "Use a window function to get next created_at.",
      },
      {
        hint_order: 3,
        content: "Check if the gap is at least 30 days.",
      },
    ],
  },
  {
    code: "FOOD_063",
    hints: [
      {
        hint_order: 1,
        content: "Group delivered revenue by restaurant and month.",
      },
      {
        hint_order: 2,
        content: "Compare current month with previous month.",
      },
      {
        hint_order: 3,
        content: "Use LAG() for month-over-month growth.",
      },
    ],
  },
  {
    code: "FOOD_064",
    hints: [
      {
        hint_order: 1,
        content: "Find users who used a coupon in every order.",
      },
      {
        hint_order: 2,
        content: "Compare total orders with coupon orders.",
      },
      {
        hint_order: 3,
        content: "Use conditional COUNT with HAVING.",
      },
    ],
  },
  {
    code: "FOOD_065",
    hints: [
      {
        hint_order: 1,
        content: "Find the maximum rating for each restaurant.",
      },
      {
        hint_order: 2,
        content: "Group by restaurant.",
      },
      {
        hint_order: 3,
        content: "Keep rows where MAX(rating) = 5.",
      },
    ],
  },
  {
    code: "FOOD_066",
    hints: [
      {
        hint_order: 1,
        content: "Find each user's average delivered order value.",
      },
      {
        hint_order: 2,
        content: "Compare every delivered order with that average.",
      },
      {
        hint_order: 3,
        content: "Use AVG() in a CTE or window function.",
      },
    ],
  },
  {
    code: "FOOD_067",
    hints: [
      {
        hint_order: 1,
        content: "Find menu items that were never ordered.",
      },
      {
        hint_order: 2,
        content: "LEFT JOIN menu_items with order_items.",
      },
      {
        hint_order: 3,
        content: "Filter rows where order item is NULL.",
      },
    ],
  },
  {
    code: "FOOD_068",
    hints: [
      {
        hint_order: 1,
        content: "Count repeat customers per restaurant.",
      },
      {
        hint_order: 2,
        content: "A repeat customer ordered more than once.",
      },
      {
        hint_order: 3,
        content: "Compare repeat count with total customer count.",
      },
    ],
  },
  {
    code: "FOOD_069",
    hints: [
      {
        hint_order: 1,
        content: "Check order sequence per user.",
      },
      {
        hint_order: 2,
        content: "Compare current restaurant with previous two orders.",
      },
      {
        hint_order: 3,
        content: "Use LAG() twice to detect 3 consecutive same restaurants.",
      },
    ],
  },
  {
    code: "FOOD_070",
    hints: [
      {
        hint_order: 1,
        content: "Calculate daily delivered revenue.",
      },
      {
        hint_order: 2,
        content: "Create a rolling 7-day window.",
      },
      {
        hint_order: 3,
        content: "Use AVG() OVER with ROWS BETWEEN 6 PRECEDING.",
      },
    ],
  },
  {
    code: "FOOD_071",
    hints: [
      {
        hint_order: 1,
        content: "Sum delivered spend per user per restaurant.",
      },
      {
        hint_order: 2,
        content: "Rank users within each restaurant.",
      },
      {
        hint_order: 3,
        content: "Use ROW_NUMBER() and keep rank 1.",
      },
    ],
  },
  {
    code: "FOOD_072",
    hints: [
      {
        hint_order: 1,
        content: "Group orders by month.",
      },
      {
        hint_order: 2,
        content: "Use DATE_TRUNC on created_at.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) gives monthly order count.",
      },
    ],
  },
  {
    code: "FOOD_073",
    hints: [
      {
        hint_order: 1,
        content: "Count how many times each coupon was used.",
      },
      {
        hint_order: 2,
        content: "Sort by usage count descending.",
      },
      {
        hint_order: 3,
        content: "Return the most used coupon.",
      },
    ],
  },
  {
    code: "FOOD_074",
    hints: [
      {
        hint_order: 1,
        content: "Find drivers with zero failed deliveries.",
      },
      {
        hint_order: 2,
        content: "They should have at least 10 delivered trips.",
      },
      {
        hint_order: 3,
        content: "Use conditional COUNT in HAVING.",
      },
    ],
  },
  {
    code: "FOOD_075",
    hints: [
      {
        hint_order: 1,
        content: "Calculate delivery duration in minutes.",
      },
      {
        hint_order: 2,
        content: "Use delivered_at minus assigned_at.",
      },
      {
        hint_order: 3,
        content: "Average it per restaurant.",
      },
    ],
  },
  {
    code: "FOOD_076",
    hints: [
      {
        hint_order: 1,
        content: "Find frequent users.",
      },
      {
        hint_order: 2,
        content: "Group by user_id.",
      },
      {
        hint_order: 3,
        content: "Keep users with at least 5 orders.",
      },
    ],
  },
  {
    code: "FOOD_077",
    hints: [
      {
        hint_order: 1,
        content: "Sort each user's orders by time.",
      },
      {
        hint_order: 2,
        content: "Find the previous order date.",
      },
      {
        hint_order: 3,
        content: "Use LAG() and take MAX date difference.",
      },
    ],
  },
  {
    code: "FOOD_078",
    hints: [
      {
        hint_order: 1,
        content: "Group delivered revenue by day.",
      },
      {
        hint_order: 2,
        content: "Sort by total revenue descending.",
      },
      {
        hint_order: 3,
        content: "Return the highest revenue day.",
      },
    ],
  },
  {
    code: "FOOD_079",
    hints: [
      {
        hint_order: 1,
        content: "Count orders per user per month.",
      },
      {
        hint_order: 2,
        content: "Compare current month with previous month.",
      },
      {
        hint_order: 3,
        content: "Use LAG() to find declining counts.",
      },
    ],
  },
  {
    code: "FOOD_080",
    hints: [
      {
        hint_order: 1,
        content: "Count total orders for each city.",
      },
      {
        hint_order: 2,
        content: "Join restaurants with orders.",
      },
      {
        hint_order: 3,
        content: "Sort by order count descending and keep top city.",
      },
    ],
  },
  {
    code: "FOOD_081",
    hints: [
      {
        hint_order: 1,
        content: "Calculate average menu item price per restaurant.",
      },
      {
        hint_order: 2,
        content: "Group by restaurant_id.",
      },
      {
        hint_order: 3,
        content: "Use AVG(price).",
      },
    ],
  },
  {
    code: "FOOD_082",
    hints: [
      {
        hint_order: 1,
        content: "Count coupon usage per month.",
      },
      {
        hint_order: 2,
        content: "Rank coupons within each month.",
      },
      {
        hint_order: 3,
        content: "Use ROW_NUMBER() and keep top 2.",
      },
    ],
  },
  {
    code: "FOOD_083",
    hints: [
      {
        hint_order: 1,
        content: "Split revenue into weekend and weekday buckets.",
      },
      {
        hint_order: 2,
        content: "Use EXTRACT(ISODOW FROM created_at).",
      },
      {
        hint_order: 3,
        content: "Keep restaurants where weekend > weekday.",
      },
    ],
  },
  {
    code: "FOOD_084",
    hints: [
      {
        hint_order: 1,
        content: "Find average rating per restaurant.",
      },
      {
        hint_order: 2,
        content: "Sort by average rating descending.",
      },
      {
        hint_order: 3,
        content: "Return top 5 restaurants.",
      },
    ],
  },
  {
    code: "FOOD_085",
    hints: [
      {
        hint_order: 1,
        content: "Drivers need at least 10 deliveries.",
      },
      {
        hint_order: 2,
        content: "Ensure failed and cancelled count is zero.",
      },
      {
        hint_order: 3,
        content: "Use FILTER inside HAVING.",
      },
    ],
  },
  {
    code: "FOOD_086",
    hints: [
      {
        hint_order: 1,
        content: "Calculate monthly revenue per restaurant.",
      },
      {
        hint_order: 2,
        content: "Focus on latest 3 months.",
      },
      {
        hint_order: 3,
        content: "Check strictly increasing trend.",
      },
    ],
  },
  {
    code: "FOOD_087",
    hints: [
      {
        hint_order: 1,
        content: "Find all active months for each user.",
      },
      {
        hint_order: 2,
        content: "Calculate expected months since signup.",
      },
      {
        hint_order: 3,
        content: "Keep users where both counts match.",
      },
    ],
  },
  {
    code: "FOOD_088",
    hints: [
      {
        hint_order: 1,
        content: "Find average discount per coupon.",
      },
      {
        hint_order: 2,
        content: "Compare each order's discount against that average.",
      },
      {
        hint_order: 3,
        content: "Keep only above-average discount orders.",
      },
    ],
  },
  {
    code: "FOOD_089",
    hints: [
      {
        hint_order: 1,
        content: "Sum delivered spending by user.",
      },
      {
        hint_order: 2,
        content: "Sort descending by spend.",
      },
      {
        hint_order: 3,
        content: "Return top 10 users.",
      },
    ],
  },
  {
    code: "FOOD_090",
    hints: [
      {
        hint_order: 1,
        content: "Count reviews per user.",
      },
      {
        hint_order: 2,
        content: "Count distinct restaurants ordered by user.",
      },
      {
        hint_order: 3,
        content: "Keep users where reviews > distinct restaurants.",
      },
    ],
  },
  {
    code: "FOOD_091",
    hints: [
      {
        hint_order: 1,
        content: "Group deliveries by city and driver.",
      },
      {
        hint_order: 2,
        content: "Count completed deliveries for each driver in each city.",
      },
      {
        hint_order: 3,
        content:
          "Use ROW_NUMBER() partitioned by city ordered by delivery count desc.",
      },
    ],
  },
  {
    code: "FOOD_092",
    hints: [
      {
        hint_order: 1,
        content: "You need users who placed at least one order.",
      },
      {
        hint_order: 2,
        content: "Check whether every order day is Saturday or Sunday.",
      },
      {
        hint_order: 3,
        content: "Compare total orders with a conditional weekend count.",
      },
    ],
  },
  {
    code: "FOOD_093",
    hints: [
      {
        hint_order: 1,
        content: "First calculate delivered revenue per restaurant per day.",
      },
      {
        hint_order: 2,
        content: "Then rank those daily revenues within each city.",
      },
      {
        hint_order: 3,
        content: "Keep only rank 1 for each city.",
      },
    ],
  },
  {
    code: "FOOD_094",
    hints: [
      {
        hint_order: 1,
        content: "Look for users with no recent orders.",
      },
      {
        hint_order: 2,
        content: "Recent means within the last 30 days.",
      },
      {
        hint_order: 3,
        content: "A NOT EXISTS check on recent orders will help.",
      },
    ],
  },
  {
    code: "FOOD_095",
    hints: [
      {
        hint_order: 1,
        content: "Aggregate item quantities by city and menu item.",
      },
      {
        hint_order: 2,
        content: "You need the top-selling item inside each city.",
      },
      {
        hint_order: 3,
        content:
          "Use ROW_NUMBER() partitioned by city ordered by quantity desc.",
      },
    ],
  },
  {
    code: "FOOD_096",
    hints: [
      {
        hint_order: 1,
        content: "Summarize delivered spend by user and month first.",
      },
      {
        hint_order: 2,
        content:
          "For each month, compare spend with all earlier months of the same user.",
      },
      {
        hint_order: 3,
        content: "A running MAX over previous rows is useful here.",
      },
    ],
  },
  {
    code: "FOOD_097",
    hints: [
      {
        hint_order: 1,
        content: "Count how many distinct categories each restaurant has.",
      },
      {
        hint_order: 2,
        content:
          "Count how many distinct categories have actually appeared in orders.",
      },
      {
        hint_order: 3,
        content: "Keep restaurants where those two counts are equal.",
      },
    ],
  },
  {
    code: "FOOD_098",
    hints: [
      {
        hint_order: 1,
        content: "Find the average delivery time per driver first.",
      },
      {
        hint_order: 2,
        content:
          "Delivery time can be calculated from assigned_at and delivered_at.",
      },
      {
        hint_order: 3,
        content: "Sort by average time ascending and keep the fastest one.",
      },
    ],
  },
  {
    code: "FOOD_099",
    hints: [
      {
        hint_order: 1,
        content: "Group delivered orders by restaurant.",
      },
      {
        hint_order: 2,
        content: "Calculate the average total_amount for each restaurant.",
      },
      {
        hint_order: 3,
        content: "Filter restaurants whose average is greater than 500.",
      },
    ],
  },
  {
    code: "FOOD_100",
    hints: [
      {
        hint_order: 1,
        content: "Sum delivered spending for each user.",
      },
      {
        hint_order: 2,
        content: "Order users by total spent descending.",
      },
      {
        hint_order: 3,
        content: "Return only the top 5 users.",
      },
    ],
  },
];

export const conceptFilters = [
  {
    code: "FOOD_001",
    concepts: ["aggregation", "count"],
  },
  {
    code: "FOOD_002",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "FOOD_003",
    concepts: ["aggregation", "count"],
  },
  {
    code: "FOOD_004",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "FOOD_005",
    concepts: ["aggregation", "count"],
  },
  {
    code: "FOOD_006",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "FOOD_007",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "FOOD_008",
    concepts: ["filtering", "aggregation", "average", "calculation"],
  },
  {
    code: "FOOD_009",
    concepts: ["aggregation", "count"],
  },
  {
    code: "FOOD_010",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "FOOD_011",
    concepts: ["aggregation", "count"],
  },
  {
    code: "FOOD_012",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "FOOD_013",
    concepts: ["aggregation", "count"],
  },
  {
    code: "FOOD_014",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "FOOD_015",
    concepts: ["filtering", "aggregation", "count", "null_handling"],
  },
  {
    code: "FOOD_016",
    concepts: ["aggregation", "count"],
  },
  {
    code: "FOOD_017",
    concepts: ["aggregation", "average", "calculation"],
  },
  {
    code: "FOOD_018",
    concepts: [
      "filtering",
      "aggregation",
      "count",
      "date_functions",
      "comparison",
    ],
  },
  {
    code: "FOOD_019",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "FOOD_020",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "FOOD_021",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "FOOD_022",
    concepts: [
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "FOOD_023",
    concepts: [
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "FOOD_024",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "FOOD_025",
    concepts: ["aggregation", "count_distinct", "distinct"],
  },
  {
    code: "FOOD_026",
    concepts: ["filtering", "aggregation", "average", "calculation"],
  },
  {
    code: "FOOD_027",
    concepts: ["filtering", "aggregation", "average", "calculation"],
  },
  {
    code: "FOOD_028",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "FOOD_029",
    concepts: ["filtering", "sorting", "limit", "comparison"],
  },
  {
    code: "FOOD_030",
    concepts: ["joins", "sorting"],
  },
  {
    code: "FOOD_031",
    concepts: [
      "joins",
      "left_join",
      "aggregation",
      "count",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "FOOD_032",
    concepts: [
      "joins",
      "left_join",
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "FOOD_033",
    concepts: [
      "joins",
      "left_join",
      "filtering",
      "aggregation",
      "count",
      "sum",
      "group_by",
      "sorting",
      "null_handling",
    ],
  },
  {
    code: "FOOD_034",
    concepts: [
      "joins",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "FOOD_035",
    concepts: ["joins", "left_join", "filtering", "null_handling", "sorting"],
  },
  {
    code: "FOOD_036",
    concepts: ["joins", "left_join", "filtering", "null_handling", "sorting"],
  },
  {
    code: "FOOD_037",
    concepts: ["joins", "filtering", "sorting"],
  },
  {
    code: "FOOD_038",
    concepts: [
      "joins",
      "left_join",
      "aggregation",
      "count",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "FOOD_039",
    concepts: [
      "joins",
      "left_join",
      "aggregation",
      "count",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "FOOD_040",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "FOOD_041",
    concepts: [
      "joins",
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "FOOD_042",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "FOOD_043",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "sorting",
      "limit",
      "calculation",
    ],
  },
  {
    code: "FOOD_044",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "sorting",
      "limit",
      "calculation",
    ],
  },
  {
    code: "FOOD_045",
    concepts: ["joins", "distinct", "sorting"],
  },
  {
    code: "FOOD_046",
    concepts: [
      "filtering",
      "arithmetic",
      "date_functions",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "FOOD_047",
    concepts: [
      "joins",
      "left_join",
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "FOOD_048",
    concepts: ["filtering", "null_handling", "comparison", "sorting"],
  },
  {
    code: "FOOD_049",
    concepts: ["joins", "filtering", "distinct", "sorting", "comparison"],
  },
  {
    code: "FOOD_050",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "FOOD_051",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "FOOD_052",
    concepts: [
      "cte",
      "joins",
      "window_functions",
      "row_number",
      "partition_by",
      "filtering",
      "sorting",
    ],
  },
  {
    code: "FOOD_053",
    concepts: [
      "cte",
      "joins",
      "left_join",
      "aggregation",
      "sum",
      "average",
      "group_by",
      "filtering",
      "sorting",
      "comparison",
      "null_handling",
    ],
  },
  {
    code: "FOOD_054",
    concepts: [
      "cte",
      "joins",
      "distinct",
      "window_functions",
      "lag",
      "lag_lead",
      "partition_by",
      "date_functions",
      "filtering",
      "sorting",
    ],
  },
  {
    code: "FOOD_055",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
    ],
  },
  {
    code: "FOOD_056",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "comparison",
      "sorting",
    ],
  },
  {
    code: "FOOD_057",
    concepts: [
      "filtering",
      "window_functions",
      "sum",
      "running_total",
      "partition_by",
      "sorting",
    ],
  },
  {
    code: "FOOD_058",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "average",
      "group_by",
      "filtering",
      "comparison",
      "sorting",
    ],
  },
  {
    code: "FOOD_059",
    concepts: [
      "joins",
      "aggregation",
      "count",
      "conditional_aggregation",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "FOOD_060",
    concepts: [
      "joins",
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "date_functions",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "FOOD_061",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "FOOD_062",
    concepts: [
      "cte",
      "joins",
      "window_functions",
      "lead",
      "lag_lead",
      "partition_by",
      "date_functions",
      "filtering",
      "distinct",
      "sorting",
    ],
  },
  {
    code: "FOOD_063",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "lag",
      "lag_lead",
      "partition_by",
      "trend_analysis",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "FOOD_064",
    concepts: [
      "joins",
      "aggregation",
      "count",
      "conditional_aggregation",
      "group_by",
      "having",
      "null_handling",
      "sorting",
    ],
  },
  {
    code: "FOOD_065",
    concepts: [
      "joins",
      "aggregation",
      "max",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "FOOD_066",
    concepts: [
      "cte",
      "joins",
      "filtering",
      "aggregation",
      "average",
      "group_by",
      "comparison",
      "sorting",
    ],
  },
  {
    code: "FOOD_067",
    concepts: ["joins", "left_join", "filtering", "null_handling", "sorting"],
  },
  {
    code: "FOOD_068",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "conditional_aggregation",
      "group_by",
      "having",
      "arithmetic",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "FOOD_069",
    concepts: [
      "cte",
      "joins",
      "window_functions",
      "lag",
      "lag_lead",
      "partition_by",
      "filtering",
      "distinct",
      "sorting",
    ],
  },
  {
    code: "FOOD_070",
    concepts: [
      "cte",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "moving_average",
      "average",
      "sorting",
      "trend_analysis",
    ],
  },
  {
    code: "FOOD_071",
    concepts: [
      "cte",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
    ],
  },
  {
    code: "FOOD_072",
    concepts: [
      "cte",
      "aggregation",
      "count",
      "group_by",
      "date_functions",
      "arithmetic",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "FOOD_073",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "limit",
      "date_functions",
      "calculation",
    ],
  },
  {
    code: "FOOD_074",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
    ],
  },
  {
    code: "FOOD_075",
    concepts: [
      "joins",
      "aggregation",
      "count",
      "conditional_aggregation",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "FOOD_076",
    concepts: [
      "cte",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
    ],
  },
  {
    code: "FOOD_077",
    concepts: [
      "cte",
      "joins",
      "window_functions",
      "lag",
      "lag_lead",
      "partition_by",
      "aggregation",
      "max",
      "group_by",
      "sorting",
      "date_difference",
    ],
  },
  {
    code: "FOOD_078",
    concepts: [
      "cte",
      "joins",
      "distinct",
      "window_functions",
      "row_number",
      "partition_by",
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "pattern_detection",
    ],
  },
  {
    code: "FOOD_079",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "group_by",
      "window_functions",
      "lag",
      "lag_lead",
      "partition_by",
      "trend_analysis",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "FOOD_080",
    concepts: [
      "cte",
      "filtering",
      "aggregation",
      "average",
      "group_by",
      "joins",
      "comparison",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "FOOD_081",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
      "limit",
      "trend_analysis",
    ],
  },
  {
    code: "FOOD_082",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "FOOD_083",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "conditional_aggregation",
      "group_by",
      "having",
      "date_functions",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "FOOD_084",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "count",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "FOOD_085",
    concepts: [
      "joins",
      "aggregation",
      "count",
      "conditional_aggregation",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "FOOD_086",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "conditional_aggregation",
      "sorting",
      "trend_analysis",
      "comparison",
    ],
  },
  {
    code: "FOOD_087",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count_distinct",
      "group_by",
      "date_functions",
      "arithmetic",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "FOOD_088",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "average",
      "group_by",
      "filtering",
      "comparison",
      "sorting",
    ],
  },
  {
    code: "FOOD_089",
    concepts: ["filtering", "comparison", "sorting"],
  },
  {
    code: "FOOD_090",
    concepts: [
      "cte",
      "joins",
      "distinct",
      "aggregation",
      "count",
      "group_by",
      "comparison",
      "sorting",
    ],
  },
  {
    code: "FOOD_091",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "FOOD_092",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "conditional_aggregation",
      "group_by",
      "having",
      "date_functions",
      "sorting",
    ],
  },
  {
    code: "FOOD_093",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
    ],
  },
  {
    code: "FOOD_094",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "average",
      "group_by",
      "filtering",
      "comparison",
      "sorting",
    ],
  },
  {
    code: "FOOD_095",
    concepts: ["subquery", "exists", "joins", "filtering", "sorting"],
  },
  {
    code: "FOOD_096",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "running_max",
      "partition_by",
      "trend_analysis",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "FOOD_097",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count_distinct",
      "group_by",
      "comparison",
      "sorting",
    ],
  },
  {
    code: "FOOD_098",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "group_by",
      "comparison",
      "sorting",
    ],
  },
  {
    code: "FOOD_099",
    concepts: [
      "cte",
      "joins",
      "window_functions",
      "running_max",
      "partition_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "FOOD_100",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "lead",
      "lag_lead",
      "partition_by",
      "trend_analysis",
      "sorting",
      "comparison",
    ],
  },
];

export const solutions = [
  {
    code: "FOOD_001",
    approaches: [
      {
        approach_title: "COUNT users",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS total_users FROM users;",
        explanation:
          "## 🧠 Approach\n\nCount all user records in the platform.\n\n## 🔍 Explanation\n\n- `COUNT(*)` counts every row in the `users` table.\n- No filter is applied because the question asks for the total number of registered users.\n- The alias `total_users` matches the required output column.",
      },
    ],
  },
  {
    code: "FOOD_002",
    approaches: [
      {
        approach_title: "COUNT active users",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS active_users FROM users WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nFilter users to active records, then count them.\n\n## 🔍 Explanation\n\n- `WHERE is_active = true` keeps only currently active users.\n- `COUNT(*)` counts those matching rows.\n- The alias `active_users` matches the expected result.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering_aggregation",
        is_optimal: false,
        display_order: 2,
        query: "SELECT COUNT(*) AS active_users FROM users WHERE is_active;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand to count active users.\n\n## 🔍 Explanation\n\n- In PostgreSQL, `WHERE is_active` is equivalent to `WHERE is_active = true`.\n- This produces the same count with shorter syntax.\n- The explicit comparison is usually clearer for beginners.",
      },
    ],
  },
  {
    code: "FOOD_003",
    approaches: [
      {
        approach_title: "COUNT restaurants",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS total_restaurants FROM restaurants;",
        explanation:
          "## 🧠 Approach\n\nCount all restaurants listed on the platform.\n\n## 🔍 Explanation\n\n- `COUNT(*)` counts every row in the `restaurants` table.\n- No status filter is applied because the question asks for all listed restaurants.\n- The alias `total_restaurants` matches the required output column.",
      },
    ],
  },
  {
    code: "FOOD_004",
    approaches: [
      {
        approach_title: "COUNT active restaurants",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS active_restaurants FROM restaurants WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nFilter restaurants to active ones, then count them.\n\n## 🔍 Explanation\n\n- `WHERE is_active = true` keeps only currently active restaurants.\n- `COUNT(*)` counts those active restaurant records.\n- The alias `active_restaurants` matches the expected output.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) AS active_restaurants FROM restaurants WHERE is_active;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand for the active restaurant filter.\n\n## 🔍 Explanation\n\n- `WHERE is_active` returns rows where the boolean value is true.\n- This is equivalent to `is_active = true` in PostgreSQL.\n- It is concise, while the explicit version is easier for learners.",
      },
    ],
  },
  {
    code: "FOOD_005",
    approaches: [
      {
        approach_title: "COUNT orders",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS total_orders FROM orders;",
        explanation:
          "## 🧠 Approach\n\nCount all orders placed on the platform.\n\n## 🔍 Explanation\n\n- `COUNT(*)` counts every row in the `orders` table.\n- No status filter is used because the question asks for total orders, not only delivered or cancelled ones.\n- The output column is aliased as `total_orders`.",
      },
    ],
  },
  {
    code: "FOOD_006",
    approaches: [
      {
        approach_title: "COUNT delivered orders",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS delivered_orders FROM orders WHERE order_status = 'delivered';",
        explanation:
          "## 🧠 Approach\n\nFilter orders to delivered status and count them.\n\n## 🔍 Explanation\n\n- `WHERE order_status = 'delivered'` keeps only successfully delivered orders.\n- `COUNT(*)` counts the delivered order rows.\n- The alias `delivered_orders` matches the required result column.",
      },
    ],
  },
  {
    code: "FOOD_007",
    approaches: [
      {
        approach_title: "COUNT cancelled orders",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS cancelled_orders FROM orders WHERE order_status = 'cancelled';",
        explanation:
          "## 🧠 Approach\n\nFilter orders to cancelled status and count them.\n\n## 🔍 Explanation\n\n- `WHERE order_status = 'cancelled'` keeps only cancelled orders.\n- `COUNT(*)` counts those cancelled rows.\n- The alias `cancelled_orders` matches the expected output.",
      },
    ],
  },
  {
    code: "FOOD_008",
    approaches: [
      {
        approach_title: "AVG delivered value",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT AVG(total_amount) AS average_order_value FROM orders WHERE order_status = 'delivered';",
        explanation:
          "## 🧠 Approach\n\nCalculate the average order value using only delivered orders.\n\n## 🔍 Explanation\n\n- `WHERE order_status = 'delivered'` keeps only completed delivered orders.\n- `AVG(total_amount)` calculates the average delivered order amount.\n- `AVG` automatically ignores null values if any exist.\n- No rounding is applied because the expected query returns the raw average.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT SUM(total_amount) / NULLIF(COUNT(total_amount), 0) AS average_order_value FROM orders WHERE order_status = 'delivered';",
        explanation:
          "## 🧠 Approach\n\nManually calculate average order value as total delivered revenue divided by delivered order count.\n\n## 🔍 Explanation\n\n- `SUM(total_amount)` totals delivered order amounts.\n- `COUNT(total_amount)` counts delivered orders with non-null amounts.\n- `NULLIF(..., 0)` protects against division by zero.\n- This is equivalent to `AVG(total_amount)`, but the built-in `AVG` is clearer.",
      },
    ],
  },
  {
    code: "FOOD_009",
    approaches: [
      {
        approach_title: "COUNT drivers",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS total_drivers FROM drivers;",
        explanation:
          "## 🧠 Approach\n\nCount all driver records on the platform.\n\n## 🔍 Explanation\n\n- `COUNT(*)` counts every row in the `drivers` table.\n- No active-status filter is applied because the question asks for total drivers.\n- The alias `total_drivers` matches the expected output.",
      },
    ],
  },
  {
    code: "FOOD_010",
    approaches: [
      {
        approach_title: "COUNT active drivers",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS active_drivers FROM drivers WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nFilter drivers to active records, then count them.\n\n## 🔍 Explanation\n\n- `WHERE is_active = true` keeps only currently active drivers.\n- `COUNT(*)` counts those active driver rows.\n- The alias `active_drivers` matches the required output column.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) AS active_drivers FROM drivers WHERE is_active;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand to filter active drivers.\n\n## 🔍 Explanation\n\n- `WHERE is_active` is equivalent to `WHERE is_active = true`.\n- This returns the same count with concise syntax.\n- The explicit comparison is usually better for beginner-facing lessons.",
      },
    ],
  },
  {
    code: "FOOD_011",
    approaches: [
      {
        approach_title: "COUNT menu items",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS total_menu_items FROM menu_items;",
        explanation:
          "## 🧠 Approach\n\nCount all menu item records across restaurants.\n\n## 🔍 Explanation\n\n- `COUNT(*)` counts every row in `menu_items`.\n- No availability filter is applied because the question asks for total listed menu items.\n- The alias `total_menu_items` matches the required output column.",
      },
    ],
  },
  {
    code: "FOOD_012",
    approaches: [
      {
        approach_title: "COUNT available items",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS available_menu_items FROM menu_items WHERE is_available = true;",
        explanation:
          "## 🧠 Approach\n\nFilter menu items to currently available ones, then count them.\n\n## 🔍 Explanation\n\n- `WHERE is_available = true` keeps only items available for ordering.\n- `COUNT(*)` counts those available menu item rows.\n- The alias `available_menu_items` matches the expected output.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) AS available_menu_items FROM menu_items WHERE is_available;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand for the availability filter.\n\n## 🔍 Explanation\n\n- `WHERE is_available` is equivalent to `WHERE is_available = true`.\n- This gives the same count with shorter syntax.\n- The explicit version is usually clearer for beginners.",
      },
    ],
  },
  {
    code: "FOOD_013",
    approaches: [
      {
        approach_title: "COUNT coupons",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS total_coupons FROM coupons;",
        explanation:
          "## 🧠 Approach\n\nCount all coupon records created on the platform.\n\n## 🔍 Explanation\n\n- `COUNT(*)` counts every row in `coupons`.\n- No active filter is applied because the question asks for total coupons created.\n- The alias `total_coupons` matches the expected output column.",
      },
    ],
  },
  {
    code: "FOOD_014",
    approaches: [
      {
        approach_title: "COUNT active coupons",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS active_coupons FROM coupons WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nFilter coupons to active ones, then count them.\n\n## 🔍 Explanation\n\n- `WHERE is_active = true` keeps only currently active coupons.\n- `COUNT(*)` counts those active coupon rows.\n- The alias `active_coupons` matches the expected output.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) AS active_coupons FROM coupons WHERE is_active;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand to count active coupons.\n\n## 🔍 Explanation\n\n- `WHERE is_active` returns only rows where the boolean is true.\n- This is equivalent to `is_active = true`.\n- It is concise, but the explicit comparison is more beginner-friendly.",
      },
    ],
  },
  {
    code: "FOOD_015",
    approaches: [
      {
        approach_title: "COUNT coupon orders",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS coupon_orders FROM orders WHERE coupon_id IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nCount orders where a coupon was used.\n\n## 🔍 Explanation\n\n- `coupon_id IS NOT NULL` identifies orders linked to a coupon.\n- `COUNT(*)` counts all such orders.\n- The alias `coupon_orders` matches the required output column.",
      },
    ],
  },
  {
    code: "FOOD_016",
    approaches: [
      {
        approach_title: "COUNT reviews",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS total_reviews FROM reviews;",
        explanation:
          "## 🧠 Approach\n\nCount all review records submitted by users.\n\n## 🔍 Explanation\n\n- `COUNT(*)` counts every row in `reviews`.\n- No rating or restaurant filter is needed because the question asks for total reviews.\n- The alias `total_reviews` matches the expected output.",
      },
    ],
  },
  {
    code: "FOOD_017",
    approaches: [
      {
        approach_title: "AVG rating",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT AVG(rating) AS average_rating FROM reviews;",
        explanation:
          "## 🧠 Approach\n\nCalculate the average rating across all reviews.\n\n## 🔍 Explanation\n\n- `AVG(rating)` computes the mean rating value from the `reviews` table.\n- `AVG` ignores null values automatically if any exist.\n- No rounding is applied because the expected query returns the raw average.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT SUM(rating)::numeric / NULLIF(COUNT(rating), 0) AS average_rating FROM reviews;",
        explanation:
          "## 🧠 Approach\n\nManually calculate average rating using total rating divided by rating count.\n\n## 🔍 Explanation\n\n- `SUM(rating)` totals all non-null rating values.\n- `COUNT(rating)` counts non-null rating rows.\n- `::numeric` avoids integer division if `rating` is an integer column.\n- `NULLIF(..., 0)` prevents division by zero.\n- `AVG(rating)` is still clearer and preferred.",
      },
    ],
  },
  {
    code: "FOOD_018",
    approaches: [
      {
        approach_title: "DATE today",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS orders_today FROM orders WHERE DATE(created_at) = CURRENT_DATE;",
        explanation:
          "## 🧠 Approach\n\nCount orders whose creation date is today.\n\n## 🔍 Explanation\n\n- `DATE(created_at)` extracts the date portion from the timestamp.\n- `CURRENT_DATE` represents today's date in PostgreSQL.\n- The query counts orders created today, regardless of time.",
      },
    ],
  },
  {
    code: "FOOD_019",
    approaches: [
      {
        approach_title: "COUNT city users",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS users_in_hyderabad FROM users WHERE default_city = 'Hyderabad';",
        explanation:
          "## 🧠 Approach\n\nFilter users whose default city is Hyderabad, then count them.\n\n## 🔍 Explanation\n\n- `WHERE default_city = 'Hyderabad'` keeps only users with Hyderabad as their default city.\n- `COUNT(*)` counts those matching user rows.\n- The alias `users_in_hyderabad` matches the expected result.",
      },
    ],
  },
  {
    code: "FOOD_020",
    approaches: [
      {
        approach_title: "COUNT city restaurants",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS restaurants_in_hyderabad FROM restaurants WHERE city = 'Hyderabad';",
        explanation:
          "## 🧠 Approach\n\nFilter restaurants located in Hyderabad, then count them.\n\n## 🔍 Explanation\n\n- `WHERE city = 'Hyderabad'` keeps only Hyderabad restaurants.\n- `COUNT(*)` counts those restaurant rows.\n- The alias `restaurants_in_hyderabad` matches the required output column.",
      },
    ],
  },
  {
    code: "FOOD_021",
    approaches: [
      {
        approach_title: "GROUP restaurant orders",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT restaurant_id, COUNT(*) AS total_orders FROM orders GROUP BY restaurant_id;",
        explanation:
          "## 🧠 Approach\n\nGroup orders by restaurant and count how many orders each restaurant has received.\n\n## 🔍 Explanation\n\n- `GROUP BY restaurant_id` creates one result row per restaurant that has orders.\n- `COUNT(*)` counts all order rows for each restaurant.\n- No status filter is used because the question asks for how many orders have been placed, not only delivered orders.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT restaurant_id, COUNT(*) OVER (PARTITION BY restaurant_id) AS total_orders FROM orders;",
        explanation:
          "## 🧠 Approach\n\nUse a window function to count orders per restaurant, then deduplicate the result.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY restaurant_id)` calculates the order count for each restaurant on every order row.\n- `DISTINCT` is needed so each restaurant appears once.\n- `GROUP BY` is simpler and preferred for this aggregation.",
      },
    ],
  },
  {
    code: "FOOD_022",
    approaches: [
      {
        approach_title: "GROUP delivered user orders",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, COUNT(*) AS delivered_orders FROM orders WHERE order_status = 'delivered' GROUP BY user_id;",
        explanation:
          "## 🧠 Approach\n\nFilter delivered orders first, then count them per user.\n\n## 🔍 Explanation\n\n- `WHERE order_status = 'delivered'` keeps only completed delivered orders.\n- `GROUP BY user_id` creates one row per user who has delivered orders.\n- `COUNT(*)` counts delivered orders for each user.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, COUNT(*) FILTER (WHERE order_status = 'delivered') AS delivered_orders FROM orders GROUP BY user_id HAVING COUNT(*) FILTER (WHERE order_status = 'delivered') > 0;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to count delivered orders per user.\n\n## 🔍 Explanation\n\n- `FILTER` counts only rows where `order_status = 'delivered'`.\n- `HAVING` removes users whose delivered count is zero, matching the filtered `WHERE` approach.\n- This style is useful when calculating multiple status-based counts together.",
      },
    ],
  },
  {
    code: "FOOD_023",
    approaches: [
      {
        approach_title: "GROUP delivered revenue",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT restaurant_id, SUM(total_amount) AS total_revenue FROM orders WHERE order_status = 'delivered' GROUP BY restaurant_id;",
        explanation:
          "## 🧠 Approach\n\nFilter delivered orders and sum revenue per restaurant.\n\n## 🔍 Explanation\n\n- `WHERE order_status = 'delivered'` ensures only completed delivered orders contribute to revenue.\n- `GROUP BY restaurant_id` creates one row per restaurant with delivered orders.\n- `SUM(total_amount)` calculates total delivered revenue for each restaurant.",
      },
      {
        approach_title: "FILTER revenue",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT restaurant_id, SUM(total_amount) FILTER (WHERE order_status = 'delivered') AS total_revenue FROM orders GROUP BY restaurant_id HAVING SUM(total_amount) FILTER (WHERE order_status = 'delivered') IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to sum only delivered order revenue.\n\n## 🔍 Explanation\n\n- `FILTER` lets only delivered orders contribute to the sum.\n- `HAVING ... IS NOT NULL` removes restaurants that have no delivered orders, matching the filtered `WHERE` query.\n- This is useful when calculating delivered, cancelled, and total revenue in one grouped query.",
      },
    ],
  },
  {
    code: "FOOD_024",
    approaches: [
      {
        approach_title: "GROUP menu items",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT restaurant_id, COUNT(*) AS menu_item_count FROM menu_items GROUP BY restaurant_id;",
        explanation:
          "## 🧠 Approach\n\nGroup menu items by restaurant and count listed items.\n\n## 🔍 Explanation\n\n- `GROUP BY restaurant_id` creates one row per restaurant that has menu items.\n- `COUNT(*)` counts all menu item rows for each restaurant.\n- No availability filter is applied because the question asks how many items are listed, not only available items.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT restaurant_id, COUNT(*) OVER (PARTITION BY restaurant_id) AS menu_item_count FROM menu_items;",
        explanation:
          "## 🧠 Approach\n\nUse a window count per restaurant and then return one row per restaurant.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY restaurant_id)` calculates each restaurant's item count on every menu item row.\n- `DISTINCT` removes duplicate restaurant rows.\n- `GROUP BY` is more direct and efficient for this question.",
      },
    ],
  },
  {
    code: "FOOD_025",
    approaches: [
      {
        approach_title: "COUNT distinct users",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(DISTINCT user_id) AS ordering_users FROM orders;",
        explanation:
          "## 🧠 Approach\n\nCount unique users who have at least one order row.\n\n## 🔍 Explanation\n\n- `orders` contains one row per order.\n- A user can appear many times if they placed multiple orders.\n- `COUNT(DISTINCT user_id)` counts each ordering user only once.",
      },
      {
        approach_title: "Grouped users count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) AS ordering_users FROM (SELECT user_id FROM orders GROUP BY user_id) ordering_user_list;",
        explanation:
          "## 🧠 Approach\n\nBuild a unique list of ordering users first, then count that list.\n\n## 🔍 Explanation\n\n- The inner query groups orders by `user_id`, producing one row per user who ordered.\n- The outer `COUNT(*)` counts those unique users.\n- This is equivalent to `COUNT(DISTINCT user_id)` but more verbose.",
      },
    ],
  },
  {
    code: "FOOD_026",
    approaches: [
      {
        approach_title: "AVG delivery fee",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT AVG(delivery_fee) AS average_delivery_fee FROM orders WHERE order_status = 'delivered';",
        explanation:
          "## 🧠 Approach\n\nCalculate the average delivery fee for delivered orders.\n\n## 🔍 Explanation\n\n- `WHERE order_status = 'delivered'` keeps only delivered orders.\n- `AVG(delivery_fee)` calculates the mean delivery fee.\n- `AVG` ignores null values automatically if any exist.\n- No rounding is applied because the expected query returns the raw average.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT SUM(delivery_fee) / NULLIF(COUNT(delivery_fee), 0) AS average_delivery_fee FROM orders WHERE order_status = 'delivered';",
        explanation:
          "## 🧠 Approach\n\nManually calculate average delivery fee as total delivery fees divided by delivery-fee count.\n\n## 🔍 Explanation\n\n- `SUM(delivery_fee)` totals delivery fees from delivered orders.\n- `COUNT(delivery_fee)` counts non-null delivery fees.\n- `NULLIF(..., 0)` protects against division by zero.\n- This matches `AVG(delivery_fee)` when `delivery_fee` is numeric. If the column were integer, a numeric cast would be needed to avoid integer division.",
      },
    ],
  },
  {
    code: "FOOD_027",
    approaches: [
      {
        approach_title: "AVG packaging fee",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT AVG(packaging_fee) AS average_packaging_fee FROM orders WHERE order_status = 'delivered';",
        explanation:
          "## 🧠 Approach\n\nCalculate the average packaging fee for delivered orders.\n\n## 🔍 Explanation\n\n- `WHERE order_status = 'delivered'` keeps only delivered orders.\n- `AVG(packaging_fee)` calculates the mean packaging fee.\n- No rounding is applied because the expected query returns the raw average.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT SUM(packaging_fee) / NULLIF(COUNT(packaging_fee), 0) AS average_packaging_fee FROM orders WHERE order_status = 'delivered';",
        explanation:
          "## 🧠 Approach\n\nManually calculate average packaging fee using total divided by count.\n\n## 🔍 Explanation\n\n- `SUM(packaging_fee)` totals delivered order packaging fees.\n- `COUNT(packaging_fee)` counts non-null packaging fee values.\n- `NULLIF(..., 0)` prevents division by zero.\n- This is equivalent to `AVG(packaging_fee)` when the fee column is numeric.",
      },
    ],
  },
  {
    code: "FOOD_028",
    approaches: [
      {
        approach_title: "GROUP cuisine",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT cuisine, COUNT(*) AS restaurant_count FROM restaurants GROUP BY cuisine;",
        explanation:
          "## 🧠 Approach\n\nGroup restaurants by cuisine and count restaurants in each cuisine.\n\n## 🔍 Explanation\n\n- `GROUP BY cuisine` creates one row per cuisine value.\n- `COUNT(*)` counts restaurants in each cuisine group.\n- No active filter is applied because the question asks how many restaurants belong to each cuisine.",
      },
    ],
  },
  {
    code: "FOOD_029",
    approaches: [
      {
        approach_title: "ORDER BY LIMIT",
        approach_type: "sorting",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, total_amount FROM orders WHERE order_status = 'delivered' ORDER BY total_amount DESC, id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nFilter delivered orders, sort by highest value, and return the top five.\n\n## 🔍 Explanation\n\n- `WHERE order_status = 'delivered'` keeps only delivered orders.\n- `ORDER BY total_amount DESC` puts the highest-value orders first.\n- `id ASC` is the deterministic tie-breaker when multiple orders have the same amount.\n- `LIMIT 5` returns exactly the top five rows.\n- This question requires ordering, so the query must follow the configured sort columns.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, total_amount FROM (SELECT id, total_amount, ROW_NUMBER() OVER (ORDER BY total_amount DESC, id ASC) AS rn FROM orders WHERE order_status = 'delivered') ranked_orders WHERE rn <= 5 ORDER BY total_amount DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank delivered orders by value using `ROW_NUMBER`, then keep the top five.\n\n## 🔍 Explanation\n\n- `ROW_NUMBER()` assigns a unique rank based on total amount descending and id ascending.\n- `rn <= 5` keeps the top five delivered orders.\n- The final `ORDER BY` is still included so the returned rows match the required comparator order.",
      },
    ],
  },
  {
    code: "FOOD_030",
    approaches: [
      {
        approach_title: "JOIN payments",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT o.id, p.payment_status FROM orders o JOIN payments p ON p.order_id = o.id;",
        explanation:
          "## 🧠 Approach\n\nJoin orders with payments to show each order's payment status.\n\n## 🔍 Explanation\n\n- `orders` provides the order id.\n- `payments` stores payment information linked by `order_id`.\n- The inner join returns orders that have matching payment rows.\n- The selected columns match the required output: order id and payment status.",
      },
    ],
  },
  {
    code: "FOOD_031",
    approaches: [
      {
        approach_title: "LEFT JOIN orders",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT r.id, r.name, COUNT(o.id) AS total_orders FROM restaurants r LEFT JOIN orders o ON o.restaurant_id = r.id GROUP BY r.id, r.name;",
        explanation:
          "## 🧠 Approach\n\nJoin restaurants with their orders and count orders per restaurant.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every restaurant, including restaurants with no orders.\n- `COUNT(o.id)` counts only matching order rows, so restaurants with no orders get `0`.\n- `GROUP BY r.id, r.name` returns one row per restaurant with its total order count.",
      },
      {
        approach_title: "Correlated count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT r.id, r.name, (SELECT COUNT(*) FROM orders o WHERE o.restaurant_id = r.id) AS total_orders FROM restaurants r;",
        explanation:
          "## 🧠 Approach\n\nFor each restaurant, use a correlated subquery to count its orders.\n\n## 🔍 Explanation\n\n- The outer query reads restaurants.\n- The subquery counts orders where `orders.restaurant_id` matches the current restaurant.\n- This produces the same result as the `LEFT JOIN` approach, but the join aggregation is usually better for large datasets.",
      },
    ],
  },
  {
    code: "FOOD_032",
    approaches: [
      {
        approach_title: "LEFT JOIN delivered",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name, COUNT(o.id) AS delivered_orders FROM users u LEFT JOIN orders o ON o.user_id = u.id AND o.order_status = 'delivered' GROUP BY u.id, u.full_name;",
        explanation:
          "## 🧠 Approach\n\nJoin users with only their delivered orders and count delivered orders per user.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps all users, including users with zero delivered orders.\n- The delivered-order filter belongs in the `ON` clause so users without delivered orders are not removed.\n- `COUNT(o.id)` counts only matching delivered orders.\n- Grouping returns one row per user.",
      },
      {
        approach_title: "Correlated count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id AND o.order_status = 'delivered') AS delivered_orders FROM users u;",
        explanation:
          "## 🧠 Approach\n\nFor each user, count delivered orders with a correlated subquery.\n\n## 🔍 Explanation\n\n- The outer query returns every user.\n- The subquery counts delivered orders for the current user.\n- This is equivalent to the `LEFT JOIN` solution and can be easy to read, but may be less efficient on large data.",
      },
    ],
  },
  {
    code: "FOOD_033",
    approaches: [
      {
        approach_title: "LEFT JOIN revenue",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT r.id, r.name, COUNT(o.id) AS delivered_orders, COALESCE(SUM(o.total_amount), 0) AS total_revenue FROM restaurants r LEFT JOIN orders o ON o.restaurant_id = r.id AND o.order_status = 'delivered' GROUP BY r.id, r.name;",
        explanation:
          "## 🧠 Approach\n\nJoin restaurants with delivered orders, then calculate delivered order count and delivered revenue.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps restaurants even if they have no delivered orders.\n- The `order_status = 'delivered'` condition is placed in the `ON` clause so unmatched restaurants remain in the result.\n- `COUNT(o.id)` returns `0` for restaurants with no delivered orders.\n- `SUM(o.total_amount)` returns `NULL` when no delivered orders exist, so `COALESCE(..., 0)` converts that to zero.",
      },
      {
        approach_title: "Correlated aggregates",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT r.id, r.name, (SELECT COUNT(*) FROM orders o WHERE o.restaurant_id = r.id AND o.order_status = 'delivered') AS delivered_orders, COALESCE((SELECT SUM(o.total_amount) FROM orders o WHERE o.restaurant_id = r.id AND o.order_status = 'delivered'), 0) AS total_revenue FROM restaurants r;",
        explanation:
          "## 🧠 Approach\n\nUse separate correlated subqueries to calculate delivered order count and delivered revenue per restaurant.\n\n## 🔍 Explanation\n\n- The first subquery counts delivered orders for the current restaurant.\n- The second subquery sums delivered revenue for the current restaurant.\n- `COALESCE` converts missing revenue to zero.\n- This is readable but repeats the same filtering logic, so the join aggregation is usually preferred.",
      },
    ],
  },
  {
    code: "FOOD_034",
    approaches: [
      {
        approach_title: "JOIN rating average",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT r.id, r.name, AVG(rv.rating) AS average_rating FROM restaurants r JOIN reviews rv ON rv.restaurant_id = r.id GROUP BY r.id, r.name;",
        explanation:
          "## 🧠 Approach\n\nJoin restaurants with reviews and calculate the average rating for each reviewed restaurant.\n\n## 🔍 Explanation\n\n- `JOIN reviews` returns only restaurants that have at least one review.\n- `AVG(rv.rating)` calculates the average rating per restaurant.\n- `GROUP BY r.id, r.name` returns one row per reviewed restaurant.",
      },
      {
        approach_title: "Correlated average",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT r.id, r.name, (SELECT AVG(rv.rating) FROM reviews rv WHERE rv.restaurant_id = r.id) AS average_rating FROM restaurants r WHERE EXISTS (SELECT 1 FROM reviews rv WHERE rv.restaurant_id = r.id);",
        explanation:
          "## 🧠 Approach\n\nUse a correlated subquery to calculate average rating per restaurant.\n\n## 🔍 Explanation\n\n- The subquery calculates the average review rating for the current restaurant.\n- `WHERE EXISTS` keeps only restaurants with reviews, matching the inner join behavior.\n- Without `EXISTS`, unrated restaurants would appear with `NULL`, which would not match the expected query.",
      },
    ],
  },
  {
    code: "FOOD_035",
    approaches: [
      {
        approach_title: "LEFT JOIN anti-join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT r.id, r.name FROM restaurants r LEFT JOIN orders o ON o.restaurant_id = r.id WHERE o.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a left anti-join to find restaurants with no matching orders.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps all restaurants and tries to match orders.\n- Restaurants with no orders have `NULL` values for the joined order columns.\n- `WHERE o.id IS NULL` filters to only those restaurants with no matching order.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT r.id, r.name FROM restaurants r WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.restaurant_id = r.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to return restaurants that have no orders.\n\n## 🔍 Explanation\n\n- For each restaurant, the subquery checks whether an order exists for that restaurant.\n- `NOT EXISTS` keeps only restaurants where no such order is found.\n- This is often a clean and reliable anti-join pattern.",
      },
    ],
  },
  {
    code: "FOOD_036",
    approaches: [
      {
        approach_title: "LEFT JOIN anti-join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name FROM users u LEFT JOIN orders o ON o.user_id = u.id WHERE o.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a left anti-join to find users with no matching orders.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every user and attempts to match their orders.\n- Users who never ordered will have `NULL` in the joined order columns.\n- `WHERE o.id IS NULL` keeps only users without any orders.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to find users who never placed an order.\n\n## 🔍 Explanation\n\n- The subquery checks whether at least one order exists for the current user.\n- `NOT EXISTS` keeps users where no matching order is found.\n- This avoids pitfalls associated with `NOT IN` when nulls are present.",
      },
    ],
  },
  {
    code: "FOOD_037",
    approaches: [
      {
        approach_title: "JOIN driver",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT o.id, d.full_name AS driver_name FROM orders o JOIN driver_assignments da ON da.order_id = o.id JOIN drivers d ON d.id = da.driver_id WHERE o.order_status = 'delivered';",
        explanation:
          "## 🧠 Approach\n\nJoin delivered orders to driver assignments and drivers to show the assigned driver name.\n\n## 🔍 Explanation\n\n- `orders` provides the delivered order id.\n- `driver_assignments` maps orders to assigned drivers.\n- `drivers` provides the driver's full name.\n- The `WHERE` clause keeps only delivered orders.",
      },
    ],
  },
  {
    code: "FOOD_038",
    approaches: [
      {
        approach_title: "LEFT JOIN usage",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT c.code, COUNT(o.id) AS usage_count FROM coupons c LEFT JOIN orders o ON o.coupon_id = c.id GROUP BY c.id, c.code;",
        explanation:
          "## 🧠 Approach\n\nJoin coupons with orders and count how many orders used each coupon.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps coupons that were never used.\n- `COUNT(o.id)` counts only orders that matched the coupon.\n- Coupons with no matching orders return `0` usage count.\n- Grouping by `c.id, c.code` produces one row per coupon.",
      },
      {
        approach_title: "Correlated count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT c.code, (SELECT COUNT(*) FROM orders o WHERE o.coupon_id = c.id) AS usage_count FROM coupons c;",
        explanation:
          "## 🧠 Approach\n\nFor each coupon, count matching orders using a correlated subquery.\n\n## 🔍 Explanation\n\n- The subquery counts orders where `coupon_id` matches the current coupon.\n- This keeps coupons with zero usage and returns `0` for them.\n- The `LEFT JOIN` aggregation is usually better when working with large datasets.",
      },
    ],
  },
  {
    code: "FOOD_039",
    approaches: [
      {
        approach_title: "LEFT JOIN item count",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT o.id, COUNT(oi.id) AS item_count FROM orders o LEFT JOIN order_items oi ON oi.order_id = o.id GROUP BY o.id;",
        explanation:
          "## 🧠 Approach\n\nJoin orders with order items and count the line items per order.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps orders even if no line items are found.\n- `COUNT(oi.id)` counts only matching order item rows.\n- `GROUP BY o.id` returns one row per order.",
      },
      {
        approach_title: "Correlated count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT o.id, (SELECT COUNT(*) FROM order_items oi WHERE oi.order_id = o.id) AS item_count FROM orders o;",
        explanation:
          "## 🧠 Approach\n\nFor each order, count line items with a correlated subquery.\n\n## 🔍 Explanation\n\n- The outer query returns every order.\n- The subquery counts rows in `order_items` for the current order.\n- This is equivalent to the `LEFT JOIN` version and can be easier to read for simple cases.",
      },
    ],
  },
  {
    code: "FOOD_040",
    approaches: [
      {
        approach_title: "JOIN city revenue",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT r.city, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city;",
        explanation:
          "## 🧠 Approach\n\nJoin restaurants to delivered orders and sum delivered revenue per city.\n\n## 🔍 Explanation\n\n- `restaurants` provides the restaurant city.\n- `orders` provides delivered order revenue.\n- `WHERE o.order_status = 'delivered'` ensures only delivered orders count as revenue.\n- `GROUP BY r.city` returns one total revenue value per city.",
      },
      {
        approach_title: "FILTER revenue",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT r.city, SUM(o.total_amount) FILTER (WHERE o.order_status = 'delivered') AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id GROUP BY r.city HAVING SUM(o.total_amount) FILTER (WHERE o.order_status = 'delivered') IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to sum only delivered revenue per city.\n\n## 🔍 Explanation\n\n- `FILTER` lets only delivered orders contribute to the city revenue total.\n- The `HAVING` clause removes cities with no delivered orders, matching the filtered `WHERE` approach.\n- This pattern is useful when calculating multiple status-based revenue metrics in the same grouped query.",
      },
    ],
  },
  {
    code: "FOOD_041",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name, COUNT(ua.id) AS address_count FROM users u JOIN user_addresses ua ON ua.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(ua.id) > 1;",
        explanation:
          "## 🧠 Approach\n\nJoin users with saved addresses, count addresses per user, and keep users with more than one address.\n\n## 🔍 Explanation\n\n- `JOIN user_addresses` includes only users who have at least one saved address.\n- `GROUP BY u.id, u.full_name` creates one group per user.\n- `COUNT(ua.id)` counts saved addresses for each user.\n- `HAVING COUNT(ua.id) > 1` filters after aggregation, keeping only users with multiple saved addresses.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name, address_counts.address_count FROM users u JOIN (SELECT user_id, COUNT(*) AS address_count FROM user_addresses GROUP BY user_id HAVING COUNT(*) > 1) address_counts ON address_counts.user_id = u.id;",
        explanation:
          "## 🧠 Approach\n\nCount addresses per user first, then join those counts back to users.\n\n## 🔍 Explanation\n\n- The subquery groups `user_addresses` by `user_id` and keeps only users with more than one address.\n- Joining to `users` adds the user's name.\n- This separates counting logic from user lookup and is equivalent to the direct join aggregation.",
      },
    ],
  },
  {
    code: "FOOD_042",
    approaches: [
      {
        approach_title: "Prep time filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, name, avg_prep_time_minutes FROM restaurants WHERE avg_prep_time_minutes > 30;",
        explanation:
          "## 🧠 Approach\n\nFilter restaurants whose configured average preparation time is above 30 minutes.\n\n## 🔍 Explanation\n\n- `WHERE avg_prep_time_minutes > 30` keeps restaurants with longer preparation times.\n- `NULL` prep times are naturally excluded because comparisons with `NULL` do not evaluate to true.\n- The selected columns match the required output exactly.",
      },
    ],
  },
  {
    code: "FOOD_043",
    approaches: [
      {
        approach_title: "Top revenue restaurants",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT r.id, r.name, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.id, r.name ORDER BY total_revenue DESC, r.id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin restaurants with delivered orders, calculate revenue per restaurant, and return the top five.\n\n## 🔍 Explanation\n\n- `JOIN orders` connects each order to its restaurant.\n- `WHERE o.order_status = 'delivered'` ensures only completed delivered orders count as revenue.\n- `SUM(o.total_amount)` calculates delivered revenue per restaurant.\n- `ORDER BY total_revenue DESC, r.id ASC` ranks highest revenue first and uses restaurant id as the tie-breaker.\n- `LIMIT 5` returns the top five restaurants.",
      },
      {
        approach_title: "CTE top revenue",
        approach_type: "cte",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH restaurant_revenue AS (SELECT r.id, r.name, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.id, r.name) SELECT id, name, total_revenue FROM restaurant_revenue ORDER BY total_revenue DESC, id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate restaurant revenue in a CTE, then sort and limit the result.\n\n## 🔍 Explanation\n\n- The CTE isolates delivered revenue calculation.\n- The outer query applies the required top-five ordering.\n- This is useful when the aggregation becomes part of a larger query.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, name, total_revenue FROM (SELECT id, name, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, id ASC) AS rn FROM (SELECT r.id, r.name, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.id, r.name) revenue_totals) ranked WHERE rn <= 5 ORDER BY total_revenue DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank restaurants by delivered revenue with `ROW_NUMBER`, then keep the top five.\n\n## 🔍 Explanation\n\n- The innermost query calculates delivered revenue per restaurant.\n- `ROW_NUMBER()` assigns a deterministic rank using revenue descending and restaurant id ascending.\n- `rn <= 5` keeps exactly five rows.\n- The final `ORDER BY` matches the required comparator ordering.",
      },
    ],
  },
  {
    code: "FOOD_044",
    approaches: [
      {
        approach_title: "Top user spend",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name, SUM(o.total_amount) AS total_spent FROM users u JOIN orders o ON o.user_id = u.id WHERE o.order_status = 'delivered' GROUP BY u.id, u.full_name ORDER BY total_spent DESC, u.id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin users with delivered orders, calculate total spend per user, and return the top five spenders.\n\n## 🔍 Explanation\n\n- `JOIN orders` connects each delivered order to the user who placed it.\n- `WHERE o.order_status = 'delivered'` ensures only completed delivered orders count toward spend.\n- `SUM(o.total_amount)` calculates total delivered spend per user.\n- `ORDER BY total_spent DESC, u.id ASC` ranks highest spend first and uses user id as the tie-breaker.\n- `LIMIT 5` returns exactly the top five users.",
      },
      {
        approach_title: "CTE top spend",
        approach_type: "cte",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH user_spend AS (SELECT u.id, u.full_name, SUM(o.total_amount) AS total_spent FROM users u JOIN orders o ON o.user_id = u.id WHERE o.order_status = 'delivered' GROUP BY u.id, u.full_name) SELECT id, full_name, total_spent FROM user_spend ORDER BY total_spent DESC, id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate delivered spend per user in a CTE, then sort and limit the result.\n\n## 🔍 Explanation\n\n- The CTE keeps the spend aggregation readable.\n- The outer query applies the top-five ranking.\n- This is equivalent to the direct grouped query and can be useful when extending the analysis.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, full_name, total_spent FROM (SELECT id, full_name, total_spent, ROW_NUMBER() OVER (ORDER BY total_spent DESC, id ASC) AS rn FROM (SELECT u.id, u.full_name, SUM(o.total_amount) AS total_spent FROM users u JOIN orders o ON o.user_id = u.id WHERE o.order_status = 'delivered' GROUP BY u.id, u.full_name) spend_totals) ranked WHERE rn <= 5 ORDER BY total_spent DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank users by delivered spend using `ROW_NUMBER`, then keep the top five.\n\n## 🔍 Explanation\n\n- The inner aggregation calculates each user's delivered spend.\n- `ROW_NUMBER()` ranks users by spend descending and id ascending.\n- `rn <= 5` returns exactly five users.\n- The final `ORDER BY` matches the configured comparator ordering.",
      },
    ],
  },
  {
    code: "FOOD_045",
    approaches: [
      {
        approach_title: "DISTINCT restaurants",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT r.id, r.name FROM restaurants r JOIN orders o ON o.restaurant_id = r.id JOIN support_tickets st ON st.order_id = o.id;",
        explanation:
          "## 🧠 Approach\n\nJoin restaurants to orders and support tickets, then return each matching restaurant once.\n\n## 🔍 Explanation\n\n- `orders` connects support tickets back to restaurants.\n- `support_tickets` identifies orders that had a ticket raised.\n- A restaurant may have many ticketed orders, so `DISTINCT` ensures each restaurant appears only once.",
      },
      {
        approach_title: "EXISTS ticket",
        approach_type: "semi_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT r.id, r.name FROM restaurants r WHERE EXISTS (SELECT 1 FROM orders o JOIN support_tickets st ON st.order_id = o.id WHERE o.restaurant_id = r.id);",
        explanation:
          "## 🧠 Approach\n\nUse `EXISTS` to check whether a restaurant has at least one order with a support ticket.\n\n## 🔍 Explanation\n\n- For each restaurant, the subquery searches for a matching order with a support ticket.\n- `EXISTS` returns true as soon as one match is found.\n- This naturally avoids duplicates without using `DISTINCT`.",
      },
    ],
  },
  {
    code: "FOOD_046",
    approaches: [
      {
        approach_title: "Delay minutes",
        approach_type: "date_time",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, EXTRACT(EPOCH FROM (delivered_at - estimated_delivery_at)) / 60 AS delay_minutes FROM orders WHERE order_status = 'delivered' AND delivered_at IS NOT NULL AND estimated_delivery_at IS NOT NULL AND delivered_at > estimated_delivery_at;",
        explanation:
          "## 🧠 Approach\n\nCalculate delay duration for delivered orders that arrived after the estimated delivery time.\n\n## 🔍 Explanation\n\n- `delivered_at - estimated_delivery_at` produces the time interval between actual and estimated delivery.\n- `EXTRACT(EPOCH FROM ...) / 60` converts that interval into minutes.\n- The filters ensure both timestamps exist and only late delivered orders are returned.",
      },
    ],
  },
  {
    code: "FOOD_047",
    approaches: [
      {
        approach_title: "LEFT JOIN delivered",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT d.id, d.full_name, COUNT(da.id) AS completed_deliveries FROM drivers d LEFT JOIN driver_assignments da ON da.driver_id = d.id AND da.status = 'delivered' GROUP BY d.id, d.full_name;",
        explanation:
          "## 🧠 Approach\n\nJoin drivers with delivered assignments and count completed deliveries per driver.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps all drivers, including drivers with zero completed deliveries.\n- The `da.status = 'delivered'` filter is placed in the `ON` clause so drivers without delivered assignments are still included.\n- `COUNT(da.id)` counts only matching completed delivery assignment rows.",
      },
      {
        approach_title: "Correlated count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT d.id, d.full_name, (SELECT COUNT(*) FROM driver_assignments da WHERE da.driver_id = d.id AND da.status = 'delivered') AS completed_deliveries FROM drivers d;",
        explanation:
          "## 🧠 Approach\n\nFor each driver, count delivered assignments using a correlated subquery.\n\n## 🔍 Explanation\n\n- The outer query returns every driver.\n- The subquery counts assignments for the current driver where status is delivered.\n- This produces the same result as the left join aggregation, but the join version is generally better for larger datasets.",
      },
    ],
  },
  {
    code: "FOOD_048",
    approaches: [
      {
        approach_title: "Low inventory filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, restaurant_id, name, inventory_count, reorder_level FROM menu_items WHERE inventory_count IS NOT NULL AND reorder_level IS NOT NULL AND inventory_count <= reorder_level;",
        explanation:
          "## 🧠 Approach\n\nFind menu items whose current inventory is at or below the reorder threshold.\n\n## 🔍 Explanation\n\n- `inventory_count IS NOT NULL` and `reorder_level IS NOT NULL` ensure the comparison is meaningful.\n- `inventory_count <= reorder_level` identifies items that need restocking.\n- The selected columns provide item identity, restaurant, current stock, and reorder threshold.",
      },
    ],
  },
  {
    code: "FOOD_049",
    approaches: [
      {
        approach_title: "DISTINCT failed users",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT u.id, u.full_name FROM users u JOIN orders o ON o.user_id = u.id JOIN payments p ON p.order_id = o.id WHERE p.payment_status = 'failed';",
        explanation:
          "## 🧠 Approach\n\nJoin users to orders and failed payments, then return each affected user once.\n\n## 🔍 Explanation\n\n- `orders` connects users to their payments.\n- `payments` identifies failed payment attempts using `payment_status = 'failed'`.\n- A user may have multiple failed payments, so `DISTINCT` prevents duplicate user rows.",
      },
      {
        approach_title: "EXISTS failed payment",
        approach_type: "semi_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM orders o JOIN payments p ON p.order_id = o.id WHERE o.user_id = u.id AND p.payment_status = 'failed');",
        explanation:
          "## 🧠 Approach\n\nUse `EXISTS` to find users with at least one failed payment.\n\n## 🔍 Explanation\n\n- For each user, the subquery checks whether any of their orders has a failed payment.\n- `EXISTS` avoids duplicate rows naturally because it only answers whether a match exists.\n- This is often cleaner than `JOIN + DISTINCT` for existence-style questions.",
      },
    ],
  },
  {
    code: "FOOD_050",
    approaches: [
      {
        approach_title: "AVG delivery city",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT r.city, AVG(o.delivery_fee) AS average_delivery_fee FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city;",
        explanation:
          "## 🧠 Approach\n\nJoin restaurants to delivered orders and calculate average delivery fee per city.\n\n## 🔍 Explanation\n\n- `restaurants` provides the city for each order's restaurant.\n- `orders` provides delivery fees.\n- `WHERE o.order_status = 'delivered'` keeps only completed delivered orders.\n- `AVG(o.delivery_fee)` calculates the average delivery fee for each city.",
      },
      {
        approach_title: "FILTER average",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT r.city, AVG(o.delivery_fee) FILTER (WHERE o.order_status = 'delivered') AS average_delivery_fee FROM restaurants r JOIN orders o ON o.restaurant_id = r.id GROUP BY r.city HAVING AVG(o.delivery_fee) FILTER (WHERE o.order_status = 'delivered') IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to average only delivered-order delivery fees per city.\n\n## 🔍 Explanation\n\n- `FILTER` lets only delivered orders contribute to the average.\n- The `HAVING` clause removes cities with no delivered orders, matching the filtered `WHERE` approach.\n- This pattern is useful when calculating multiple order-status metrics in the same query.",
      },
    ],
  },
  {
    code: "FOOD_051",
    approaches: [
      {
        approach_title: "ROW_NUMBER top 3",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH restaurant_revenue AS (SELECT r.city, r.id, r.name, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city, r.id, r.name), ranked_restaurants AS (SELECT city, id, name, total_revenue, ROW_NUMBER() OVER (PARTITION BY city ORDER BY total_revenue DESC, id ASC) AS rn FROM restaurant_revenue) SELECT city, id, name, total_revenue FROM ranked_restaurants WHERE rn <= 3;",
        explanation:
          "## 🧠 Approach\n\nCalculate delivered revenue per restaurant, rank restaurants within each city, and keep the top three per city.\n\n## 🔍 Explanation\n\n- `restaurant_revenue` sums delivered order revenue for each restaurant.\n- `PARTITION BY city` restarts ranking separately for every city.\n- `ORDER BY total_revenue DESC, id ASC` ranks highest revenue first and uses restaurant id as a deterministic tie-breaker.\n- `rn <= 3` returns exactly the top three restaurants per city when available.",
      },
    ],
  },
  {
    code: "FOOD_052",
    approaches: [
      {
        approach_title: "ROW_NUMBER latest",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH ranked_orders AS (SELECT o.user_id, o.order_status, o.created_at, o.id, ROW_NUMBER() OVER (PARTITION BY o.user_id ORDER BY o.created_at DESC, o.id DESC) AS rn FROM orders o) SELECT u.id, u.full_name FROM users u JOIN ranked_orders ro ON ro.user_id = u.id WHERE ro.rn = 1 AND ro.order_status = 'cancelled';",
        explanation:
          "## 🧠 Approach\n\nRank each user's orders from newest to oldest and keep users whose latest order was cancelled.\n\n## 🔍 Explanation\n\n- `ROW_NUMBER()` assigns one latest order per user.\n- `ORDER BY o.created_at DESC, o.id DESC` chooses the most recent order and breaks timestamp ties by higher order id.\n- The outer query keeps only `rn = 1` rows where the latest order status is `cancelled`.\n- Joining to `users` returns the requested user id and full name.",
      },
      {
        approach_title: "NOT EXISTS newer",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name FROM users u JOIN orders o ON o.user_id = u.id WHERE o.order_status = 'cancelled' AND NOT EXISTS (SELECT 1 FROM orders newer WHERE newer.user_id = o.user_id AND (newer.created_at > o.created_at OR (newer.created_at = o.created_at AND newer.id > o.id)));",
        explanation:
          "## 🧠 Approach\n\nFind cancelled orders for which no newer order exists for the same user.\n\n## 🔍 Explanation\n\n- The main query starts from cancelled orders.\n- `NOT EXISTS` checks that there is no later order for the same user.\n- The timestamp and id comparison mirrors the latest-order tie-breaker from the window solution.\n- This returns users whose most recent order is cancelled without using a window function.",
      },
    ],
  },
  {
    code: "FOOD_053",
    approaches: [
      {
        approach_title: "Revenue above city avg",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH restaurant_revenue AS (SELECT r.city, r.id, r.name, COALESCE(SUM(o.total_amount), 0) AS total_revenue FROM restaurants r LEFT JOIN orders o ON o.restaurant_id = r.id AND o.order_status = 'delivered' GROUP BY r.city, r.id, r.name), city_avg AS (SELECT city, AVG(total_revenue) AS avg_revenue FROM restaurant_revenue GROUP BY city) SELECT rr.id, rr.name, rr.city, rr.total_revenue FROM restaurant_revenue rr JOIN city_avg ca ON ca.city = rr.city WHERE rr.total_revenue > ca.avg_revenue;",
        explanation:
          "## 🧠 Approach\n\nCalculate delivered revenue per restaurant, calculate the city average, then return restaurants above that city average.\n\n## 🔍 Explanation\n\n- The `LEFT JOIN` includes restaurants with no delivered orders.\n- `COALESCE(SUM(...), 0)` gives zero revenue to restaurants without delivered orders.\n- `city_avg` averages restaurant revenue within each city.\n- The final filter keeps restaurants whose revenue is greater than their city's average.",
      },
      {
        approach_title: "Window city average",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH restaurant_revenue AS (SELECT r.city, r.id, r.name, COALESCE(SUM(o.total_amount), 0) AS total_revenue FROM restaurants r LEFT JOIN orders o ON o.restaurant_id = r.id AND o.order_status = 'delivered' GROUP BY r.city, r.id, r.name) SELECT id, name, city, total_revenue FROM (SELECT city, id, name, total_revenue, AVG(total_revenue) OVER (PARTITION BY city) AS avg_revenue FROM restaurant_revenue) x WHERE total_revenue > avg_revenue;",
        explanation:
          "## 🧠 Approach\n\nUse a window average to attach each city's average revenue to every restaurant row.\n\n## 🔍 Explanation\n\n- `restaurant_revenue` calculates one row per restaurant.\n- `AVG(total_revenue) OVER (PARTITION BY city)` computes the city average without collapsing restaurant rows.\n- The outer query filters restaurants above that computed city average.",
      },
    ],
  },
  {
    code: "FOOD_054",
    approaches: [
      {
        approach_title: "LAG order days",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_order_days AS (SELECT DISTINCT user_id, DATE(created_at) AS order_day FROM orders), ranked_days AS (SELECT user_id, order_day, LAG(order_day) OVER (PARTITION BY user_id ORDER BY order_day) AS previous_day FROM user_order_days) SELECT DISTINCT u.id, u.full_name FROM users u JOIN ranked_days rd ON rd.user_id = u.id WHERE rd.previous_day = rd.order_day - INTERVAL '1 day';",
        explanation:
          "## 🧠 Approach\n\nDeduplicate each user's order dates, compare each date with the previous order date, and return users with consecutive order days.\n\n## 🔍 Explanation\n\n- `user_order_days` creates one row per user per calendar order day.\n- `LAG(order_day)` gets the previous ordering day for that user.\n- `rd.previous_day = rd.order_day - INTERVAL '1 day'` identifies consecutive calendar days.\n- `DISTINCT` ensures each qualifying user is returned once.",
      },
      {
        approach_title: "Self join days",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH user_order_days AS (SELECT DISTINCT user_id, DATE(created_at) AS order_day FROM orders) SELECT DISTINCT u.id, u.full_name FROM users u JOIN user_order_days d1 ON d1.user_id = u.id JOIN user_order_days d2 ON d2.user_id = u.id AND d2.order_day = d1.order_day + INTERVAL '1 day';",
        explanation:
          "## 🧠 Approach\n\nBuild distinct user order days and self join each day to the next calendar day.\n\n## 🔍 Explanation\n\n- `user_order_days` avoids duplicate same-day orders affecting the result.\n- The self join checks whether a user has an order on the immediately following day.\n- `DISTINCT` returns each qualifying user only once.",
      },
    ],
  },
  {
    code: "FOOD_055",
    approaches: [
      {
        approach_title: "ROW_NUMBER top item",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH item_totals AS (SELECT mi.restaurant_id, mi.id AS menu_item_id, mi.name, SUM(oi.quantity) AS total_quantity FROM menu_items mi JOIN order_items oi ON oi.menu_item_id = mi.id GROUP BY mi.restaurant_id, mi.id, mi.name), ranked_items AS (SELECT restaurant_id, menu_item_id, name, total_quantity, ROW_NUMBER() OVER (PARTITION BY restaurant_id ORDER BY total_quantity DESC, menu_item_id ASC) AS rn FROM item_totals) SELECT restaurant_id, menu_item_id, name, total_quantity FROM ranked_items WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nAggregate ordered quantity per menu item, rank items within each restaurant, and return the top item per restaurant.\n\n## 🔍 Explanation\n\n- `item_totals` calculates total ordered quantity for every ordered menu item.\n- `PARTITION BY restaurant_id` ranks menu items separately for each restaurant.\n- `ORDER BY total_quantity DESC, menu_item_id ASC` chooses the most ordered item and breaks ties by smaller menu item id.\n- `rn = 1` returns exactly one item per restaurant.",
      },
    ],
  },
  {
    code: "FOOD_056",
    approaches: [
      {
        approach_title: "Cuisine coverage",
        approach_type: "relational_division",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_city AS (SELECT u.id AS user_id, u.full_name, MIN(r.city) AS city FROM users u JOIN orders o ON o.user_id = u.id JOIN restaurants r ON r.id = o.restaurant_id GROUP BY u.id, u.full_name HAVING COUNT(DISTINCT r.city) = 1), city_cuisines AS (SELECT city, COUNT(DISTINCT cuisine) AS total_cuisines FROM restaurants GROUP BY city), user_cuisines AS (SELECT uc.user_id, uc.full_name, uc.city, COUNT(DISTINCT r.cuisine) AS ordered_cuisines FROM user_city uc JOIN orders o ON o.user_id = uc.user_id JOIN restaurants r ON r.id = o.restaurant_id WHERE r.city = uc.city GROUP BY uc.user_id, uc.full_name, uc.city) SELECT uc.user_id AS id, uc.full_name, uc.city FROM user_cuisines uc JOIN city_cuisines cc ON cc.city = uc.city WHERE uc.ordered_cuisines = cc.total_cuisines;",
        explanation:
          "## 🧠 Approach\n\nFind users who order from exactly one city, then compare their ordered cuisines with all cuisines available in that city.\n\n## 🔍 Explanation\n\n- `user_city` keeps users whose order history belongs to one derived city.\n- `city_cuisines` counts all distinct cuisines available in each city.\n- `user_cuisines` counts distinct cuisines each user ordered from within that city.\n- Matching the two counts means the user has ordered from every cuisine available in that city.",
      },
    ],
  },
  {
    code: "FOOD_057",
    approaches: [
      {
        approach_title: "Running revenue",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT restaurant_id, id, created_at, SUM(total_amount) OVER (PARTITION BY restaurant_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_revenue FROM orders WHERE order_status = 'delivered';",
        explanation:
          "## 🧠 Approach\n\nUse a window sum to calculate cumulative delivered revenue for each restaurant over time.\n\n## 🔍 Explanation\n\n- `WHERE order_status = 'delivered'` keeps only delivered orders in the revenue stream.\n- `PARTITION BY restaurant_id` calculates the running total separately for each restaurant.\n- `ORDER BY created_at, id` defines the chronological order and handles same-time ties deterministically.\n- `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` sums from the first delivered order through the current row.",
      },
    ],
  },
  {
    code: "FOOD_058",
    approaches: [
      {
        approach_title: "Above platform avg",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH overall_avg AS (SELECT AVG(delivery_fee) AS avg_delivery_fee FROM orders WHERE order_status = 'delivered'), restaurant_avg AS (SELECT restaurant_id, AVG(delivery_fee) AS avg_delivery_fee FROM orders WHERE order_status = 'delivered' GROUP BY restaurant_id) SELECT r.id, r.name, ra.avg_delivery_fee AS average_delivery_fee FROM restaurant_avg ra JOIN restaurants r ON r.id = ra.restaurant_id CROSS JOIN overall_avg oa WHERE ra.avg_delivery_fee > oa.avg_delivery_fee;",
        explanation:
          "## 🧠 Approach\n\nCalculate the platform-wide delivered delivery-fee average, calculate each restaurant's average, then compare them.\n\n## 🔍 Explanation\n\n- `overall_avg` stores the platform-wide average delivery fee for delivered orders.\n- `restaurant_avg` calculates average delivery fee per restaurant.\n- `CROSS JOIN overall_avg` makes the single overall average available to every restaurant row.\n- The final filter keeps restaurants whose average delivery fee is above the platform average.",
      },
      {
        approach_title: "Scalar subquery avg",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT r.id, r.name, AVG(o.delivery_fee) AS average_delivery_fee FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.id, r.name HAVING AVG(o.delivery_fee) > (SELECT AVG(delivery_fee) FROM orders WHERE order_status = 'delivered');",
        explanation:
          "## 🧠 Approach\n\nGroup delivered orders by restaurant and compare each restaurant average against a scalar subquery for the platform average.\n\n## 🔍 Explanation\n\n- The grouped query calculates `AVG(o.delivery_fee)` per restaurant.\n- The scalar subquery calculates the overall delivered-order delivery fee average.\n- `HAVING` is used because the restaurant average is an aggregate value.",
      },
    ],
  },
  {
    code: "FOOD_059",
    approaches: [
      {
        approach_title: "FILTER counts",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name, COUNT(*) FILTER (WHERE o.order_status = 'cancelled') AS cancelled_orders, COUNT(*) FILTER (WHERE o.order_status = 'delivered') AS delivered_orders FROM users u JOIN orders o ON o.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) FILTER (WHERE o.order_status = 'cancelled') > COUNT(*) FILTER (WHERE o.order_status = 'delivered');",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to count cancelled and delivered orders per user, then compare the counts.\n\n## 🔍 Explanation\n\n- `COUNT(*) FILTER (...)` calculates separate counts for different order statuses in one grouped query.\n- The query groups by user so each user gets their own cancelled and delivered counts.\n- `HAVING` compares aggregate values and keeps users whose cancelled orders exceed delivered orders.",
      },
      {
        approach_title: "CASE counts",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name, SUM(CASE WHEN o.order_status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled_orders, SUM(CASE WHEN o.order_status = 'delivered' THEN 1 ELSE 0 END) AS delivered_orders FROM users u JOIN orders o ON o.user_id = u.id GROUP BY u.id, u.full_name HAVING SUM(CASE WHEN o.order_status = 'cancelled' THEN 1 ELSE 0 END) > SUM(CASE WHEN o.order_status = 'delivered' THEN 1 ELSE 0 END);",
        explanation:
          "## 🧠 Approach\n\nUse `CASE` expressions to count cancelled and delivered orders separately.\n\n## 🔍 Explanation\n\n- Each `CASE` returns `1` for matching rows and `0` otherwise.\n- `SUM` turns those flags into per-user counts.\n- This is portable SQL and equivalent to PostgreSQL's `FILTER` syntax, though more verbose.",
      },
    ],
  },
  {
    code: "FOOD_060",
    approaches: [
      {
        approach_title: "Multi-restaurant day",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT d.id, d.full_name, DATE(da.delivered_at) AS delivery_date, COUNT(DISTINCT o.restaurant_id) AS restaurant_count FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id JOIN orders o ON o.id = da.order_id WHERE da.status = 'delivered' AND da.delivered_at IS NOT NULL GROUP BY d.id, d.full_name, DATE(da.delivered_at) HAVING COUNT(DISTINCT o.restaurant_id) > 1;",
        explanation:
          "## 🧠 Approach\n\nGroup delivered assignments by driver and delivery date, then count how many distinct restaurants they delivered from that day.\n\n## 🔍 Explanation\n\n- `driver_assignments` gives the driver and delivered timestamp.\n- `orders` provides the restaurant for each delivery.\n- `DATE(da.delivered_at)` converts the delivery timestamp into a calendar date.\n- `COUNT(DISTINCT o.restaurant_id)` counts how many unique restaurants the driver served that day.\n- `HAVING ... > 1` keeps only driver-day combinations involving multiple restaurants.",
      },
    ],
  },
  {
    code: "FOOD_061",
    approaches: [
      {
        approach_title: "ROW_NUMBER top 2",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_city_spend AS (SELECT r.city, u.id, u.full_name, SUM(o.total_amount) AS total_spent FROM users u JOIN orders o ON o.user_id = u.id JOIN restaurants r ON r.id = o.restaurant_id WHERE o.order_status = 'delivered' GROUP BY r.city, u.id, u.full_name), ranked_users AS (SELECT city, id, full_name, total_spent, ROW_NUMBER() OVER (PARTITION BY city ORDER BY total_spent DESC, id ASC) AS rn FROM user_city_spend) SELECT city, id, full_name, total_spent FROM ranked_users WHERE rn <= 2;",
        explanation:
          "## 🧠 Approach\n\nCalculate delivered spend per user in each city, rank users within each city, and keep the top two.\n\n## 🔍 Explanation\n\n- `user_city_spend` sums delivered order value per user and restaurant city.\n- `PARTITION BY city` restarts ranking for every city.\n- `ORDER BY total_spent DESC, id ASC` ranks highest spend first and breaks ties by smaller user id.\n- `rn <= 2` returns exactly the top two users per city when available.",
      },
    ],
  },
  {
    code: "FOOD_062",
    approaches: [
      {
        approach_title: "LEAD return gap",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_orders AS (SELECT user_id, created_at, LEAD(created_at) OVER (PARTITION BY user_id ORDER BY created_at, id) AS next_order_at FROM orders) SELECT DISTINCT u.id, u.full_name FROM users u JOIN user_orders uo ON uo.user_id = u.id WHERE uo.next_order_at IS NOT NULL AND uo.next_order_at >= uo.created_at + INTERVAL '30 days';",
        explanation:
          "## 🧠 Approach\n\nCompare each order with the next order from the same user and find users who returned after at least 30 days.\n\n## 🔍 Explanation\n\n- `LEAD(created_at)` gets the next order timestamp for each user.\n- `ORDER BY created_at, id` makes the sequence deterministic when multiple orders share the same timestamp.\n- The filter checks whether the next order happened at least 30 days after the current order.\n- `DISTINCT` returns each qualifying user only once.",
      },
    ],
  },
  {
    code: "FOOD_063",
    approaches: [
      {
        approach_title: "LAG monthly revenue",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH monthly_revenue AS (SELECT restaurant_id, DATE_TRUNC('month', created_at) AS revenue_month, SUM(total_amount) AS total_revenue FROM orders WHERE order_status = 'delivered' GROUP BY restaurant_id, DATE_TRUNC('month', created_at)), revenue_with_prev AS (SELECT restaurant_id, revenue_month, total_revenue, LAG(total_revenue) OVER (PARTITION BY restaurant_id ORDER BY revenue_month) AS prev_month_revenue FROM monthly_revenue) SELECT r.id, r.name, revenue_month, total_revenue, prev_month_revenue FROM revenue_with_prev rwp JOIN restaurants r ON r.id = rwp.restaurant_id WHERE prev_month_revenue IS NOT NULL AND total_revenue > prev_month_revenue;",
        explanation:
          "## 🧠 Approach\n\nAggregate delivered revenue by restaurant and month, then compare each month with the previous recorded month.\n\n## 🔍 Explanation\n\n- `monthly_revenue` calculates delivered revenue per restaurant per month.\n- `LAG(total_revenue)` retrieves the previous recorded month revenue for that restaurant.\n- The final filter keeps months where revenue increased compared to the previous recorded month.\n- Joining `restaurants` adds restaurant id and name to the output.",
      },
    ],
  },
  {
    code: "FOOD_064",
    approaches: [
      {
        approach_title: "FILTER all coupon",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name FROM users u JOIN orders o ON o.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE o.coupon_id IS NOT NULL);",
        explanation:
          "## 🧠 Approach\n\nGroup each user's orders and keep only users whose every order used a coupon.\n\n## 🔍 Explanation\n\n- The inner join ensures only users with at least one order are considered.\n- `COUNT(*)` counts all orders per user.\n- `COUNT(*) FILTER (WHERE o.coupon_id IS NOT NULL)` counts coupon orders per user.\n- If both counts are equal, every order placed by that user used a coupon.",
      },
      {
        approach_title: "NOT EXISTS no coupon",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id) AND NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id AND o.coupon_id IS NULL);",
        explanation:
          "## 🧠 Approach\n\nUse existence checks to require at least one order and reject users with any non-coupon order.\n\n## 🔍 Explanation\n\n- The first `EXISTS` ensures the user has placed at least one order.\n- The `NOT EXISTS` clause removes users who have any order without a coupon.\n- This directly expresses “every order used a coupon” and avoids aggregate counts.",
      },
    ],
  },
  {
    code: "FOOD_065",
    approaches: [
      {
        approach_title: "MAX rating",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT r.id, r.name, MAX(rv.rating) AS highest_rating FROM restaurants r JOIN reviews rv ON rv.restaurant_id = r.id GROUP BY r.id, r.name HAVING MAX(rv.rating) = 5;",
        explanation:
          "## 🧠 Approach\n\nFind each restaurant's highest review rating and keep restaurants whose best rating is 5.\n\n## 🔍 Explanation\n\n- `JOIN reviews` includes restaurants that have reviews.\n- `MAX(rv.rating)` finds the highest rating per restaurant.\n- `HAVING MAX(rv.rating) = 5` filters by the aggregate result after grouping.\n- The output includes the restaurant id, name, and highest rating.",
      },
    ],
  },
  {
    code: "FOOD_066",
    approaches: [
      {
        approach_title: "User average CTE",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_avg AS (SELECT user_id, AVG(total_amount) AS avg_order_value FROM orders WHERE order_status = 'delivered' GROUP BY user_id) SELECT o.id, o.user_id, o.total_amount FROM orders o JOIN user_avg ua ON ua.user_id = o.user_id WHERE o.order_status = 'delivered' AND o.total_amount > ua.avg_order_value;",
        explanation:
          "## 🧠 Approach\n\nCalculate each user's average delivered order value, then return delivered orders above that user's average.\n\n## 🔍 Explanation\n\n- `user_avg` calculates average delivered order value per user.\n- The final query joins each delivered order to its user's average.\n- `o.total_amount > ua.avg_order_value` keeps only orders greater than that user's own average, not the platform average.",
      },
      {
        approach_title: "Window average",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, user_id, total_amount FROM (SELECT id, user_id, total_amount, AVG(total_amount) OVER (PARTITION BY user_id) AS avg_order_value FROM orders WHERE order_status = 'delivered') x WHERE total_amount > avg_order_value;",
        explanation:
          "## 🧠 Approach\n\nUse a window average to attach each user's average delivered order value to every delivered order row.\n\n## 🔍 Explanation\n\n- `AVG(total_amount) OVER (PARTITION BY user_id)` computes the user's average without collapsing rows.\n- Each delivered order keeps its original id and amount.\n- The outer query filters orders above their user's average.",
      },
    ],
  },
  {
    code: "FOOD_067",
    approaches: [
      {
        approach_title: "LEFT JOIN anti-join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT mi.id, mi.name, mi.restaurant_id FROM menu_items mi LEFT JOIN order_items oi ON oi.menu_item_id = mi.id WHERE oi.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a left anti-join to find menu items that have no matching order item rows.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every menu item and tries to match it to order items.\n- Items that were never ordered have `NULL` in the joined `order_items` columns.\n- `WHERE oi.id IS NULL` keeps only those never-ordered menu items.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT mi.id, mi.name, mi.restaurant_id FROM menu_items mi WHERE NOT EXISTS (SELECT 1 FROM order_items oi WHERE oi.menu_item_id = mi.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to return menu items that never appeared in orders.\n\n## 🔍 Explanation\n\n- For each menu item, the subquery checks whether a matching order item exists.\n- `NOT EXISTS` keeps only menu items where no match is found.\n- This avoids duplicate handling and is a clean anti-join pattern.",
      },
    ],
  },
  {
    code: "FOOD_068",
    approaches: [
      {
        approach_title: "Repeat ratio",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_restaurant_orders AS (SELECT restaurant_id, user_id, COUNT(*) AS order_count FROM orders GROUP BY restaurant_id, user_id), restaurant_customer_stats AS (SELECT restaurant_id, COUNT(*) AS total_customers, COUNT(*) FILTER (WHERE order_count >= 2) AS repeat_customers FROM user_restaurant_orders GROUP BY restaurant_id) SELECT r.id, r.name, (repeat_customers::numeric / NULLIF(total_customers, 0)) * 100 AS repeat_customer_percentage FROM restaurant_customer_stats rcs JOIN restaurants r ON r.id = rcs.restaurant_id WHERE (repeat_customers::numeric / NULLIF(total_customers, 0)) > 0.5;",
        explanation:
          "## 🧠 Approach\n\nCount each user's orders per restaurant, calculate repeat-customer ratio per restaurant, and keep restaurants above 50%.\n\n## 🔍 Explanation\n\n- `user_restaurant_orders` creates one row per restaurant-user pair with their order count.\n- `restaurant_customer_stats` counts total ordering customers and customers with at least two orders.\n- `repeat_customers::numeric / total_customers` prevents integer division and calculates the repeat ratio.\n- The output multiplies by 100 to show the percentage value while the filter checks the ratio is greater than 0.5.",
      },
    ],
  },
  {
    code: "FOOD_069",
    approaches: [
      {
        approach_title: "LAG same restaurant",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH ranked_orders AS (SELECT user_id, restaurant_id, id, created_at, LAG(restaurant_id, 1) OVER (PARTITION BY user_id ORDER BY created_at, id) AS prev_restaurant_1, LAG(restaurant_id, 2) OVER (PARTITION BY user_id ORDER BY created_at, id) AS prev_restaurant_2 FROM orders) SELECT DISTINCT u.id, u.full_name FROM users u JOIN ranked_orders ro ON ro.user_id = u.id WHERE ro.prev_restaurant_1 = ro.restaurant_id AND ro.prev_restaurant_2 = ro.restaurant_id;",
        explanation:
          "## 🧠 Approach\n\nUse window functions to compare each order's restaurant with the previous two orders from the same user.\n\n## 🔍 Explanation\n\n- `LAG(restaurant_id, 1)` gets the immediately previous order's restaurant.\n- `LAG(restaurant_id, 2)` gets the restaurant from two orders back.\n- If both previous restaurants equal the current restaurant, the user has three consecutive orders from the same restaurant.\n- `DISTINCT` returns each qualifying user once.",
      },
    ],
  },
  {
    code: "FOOD_070",
    approaches: [
      {
        approach_title: "Rolling 7 day avg",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH daily_revenue AS (SELECT DATE(created_at) AS order_date, SUM(total_amount) AS total_revenue FROM orders WHERE order_status = 'delivered' GROUP BY DATE(created_at)) SELECT order_date, total_revenue, AVG(total_revenue) OVER (ORDER BY order_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS rolling_7_day_avg_revenue FROM daily_revenue;",
        explanation:
          "## 🧠 Approach\n\nCalculate delivered revenue per calendar day, then apply a seven-row rolling average over those daily totals.\n\n## 🔍 Explanation\n\n- `daily_revenue` produces one row per date with delivered revenue.\n- `AVG(total_revenue) OVER (...)` computes the rolling average over the current day and up to six previous daily rows.\n- `ORDER BY order_date` defines the chronological window.\n- This is a seven-row rolling average over recorded revenue dates, matching the expected query.",
      },
    ],
  },
  {
    code: "FOOD_071",
    approaches: [
      {
        approach_title: "ROW_NUMBER top spender",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_restaurant_spend AS (SELECT o.restaurant_id, o.user_id, SUM(o.total_amount) AS total_spent FROM orders o WHERE o.order_status = 'delivered' GROUP BY o.restaurant_id, o.user_id), ranked_spend AS (SELECT restaurant_id, user_id, total_spent, ROW_NUMBER() OVER (PARTITION BY restaurant_id ORDER BY total_spent DESC, user_id ASC) AS rn FROM user_restaurant_spend) SELECT restaurant_id, user_id, total_spent FROM ranked_spend WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate each user's delivered spend per restaurant, rank users within each restaurant, and keep the top spender.\n\n## 🔍 Explanation\n\n- `user_restaurant_spend` sums delivered order value for each restaurant-user pair.\n- `PARTITION BY restaurant_id` ranks users separately for every restaurant.\n- `ORDER BY total_spent DESC, user_id ASC` chooses the highest spender and breaks ties by smaller user id.\n- `rn = 1` returns exactly one top spending user per restaurant.",
      },
    ],
  },
  {
    code: "FOOD_072",
    approaches: [
      {
        approach_title: "Month coverage",
        approach_type: "date_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_months AS (SELECT user_id, DATE_TRUNC('month', created_at) AS order_month FROM orders GROUP BY user_id, DATE_TRUNC('month', created_at)), user_bounds AS (SELECT user_id, MIN(order_month) AS first_month, MAX(order_month) AS last_month, COUNT(*) AS active_months FROM user_months GROUP BY user_id), expected_months AS (SELECT user_id, ((EXTRACT(YEAR FROM AGE(last_month, first_month)) * 12) + EXTRACT(MONTH FROM AGE(last_month, first_month)) + 1)::int AS expected_month_count, active_months FROM user_bounds) SELECT u.id, u.full_name FROM users u JOIN expected_months em ON em.user_id = u.id WHERE em.active_months = em.expected_month_count;",
        explanation:
          "## 🧠 Approach\n\nCompare each user's actual active order months with the number of months between their first and latest order month.\n\n## 🔍 Explanation\n\n- `user_months` creates one row per user per month where they ordered.\n- `user_bounds` finds each user's first month, latest month, and number of active months.\n- `expected_months` calculates how many calendar months exist from first to latest month inclusive.\n- If `active_months = expected_month_count`, the user has no missing active month in that range.",
      },
    ],
  },
  {
    code: "FOOD_073",
    approaches: [
      {
        approach_title: "Top delay restaurants",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT r.id, r.name, AVG(EXTRACT(EPOCH FROM (o.delivered_at - o.estimated_delivery_at)) / 60) AS avg_delay_minutes FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' AND o.delivered_at IS NOT NULL AND o.estimated_delivery_at IS NOT NULL AND o.delivered_at > o.estimated_delivery_at GROUP BY r.id, r.name ORDER BY avg_delay_minutes DESC, r.id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate average late-delivery delay per restaurant and return the top ten restaurants with the longest average delay.\n\n## 🔍 Explanation\n\n- The timestamp difference `delivered_at - estimated_delivery_at` gives the delivery delay interval.\n- `EXTRACT(EPOCH FROM ...) / 60` converts that delay to minutes.\n- The filters keep only delivered orders that were actually late and have both timestamps.\n- `AVG(...)` calculates average delay per restaurant.\n- The final ordering returns restaurants with the highest average delay first, using restaurant id as a tie-breaker.",
      },
      {
        approach_title: "CTE delay totals",
        approach_type: "cte",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH restaurant_delays AS (SELECT r.id, r.name, AVG(EXTRACT(EPOCH FROM (o.delivered_at - o.estimated_delivery_at)) / 60) AS avg_delay_minutes FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' AND o.delivered_at IS NOT NULL AND o.estimated_delivery_at IS NOT NULL AND o.delivered_at > o.estimated_delivery_at GROUP BY r.id, r.name) SELECT id, name, avg_delay_minutes FROM restaurant_delays ORDER BY avg_delay_minutes DESC, id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate restaurant delay averages in a CTE, then apply the top-ten ordering outside.\n\n## 🔍 Explanation\n\n- The CTE keeps the delay calculation readable.\n- The outer query applies the required order and limit.\n- This is equivalent to the direct aggregate query and useful when the delay calculation needs to be reused.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, name, avg_delay_minutes FROM (SELECT id, name, avg_delay_minutes, ROW_NUMBER() OVER (ORDER BY avg_delay_minutes DESC, id ASC) AS rn FROM (SELECT r.id, r.name, AVG(EXTRACT(EPOCH FROM (o.delivered_at - o.estimated_delivery_at)) / 60) AS avg_delay_minutes FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' AND o.delivered_at IS NOT NULL AND o.estimated_delivery_at IS NOT NULL AND o.delivered_at > o.estimated_delivery_at GROUP BY r.id, r.name) delay_totals) ranked WHERE rn <= 10 ORDER BY avg_delay_minutes DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank restaurants by average delivery delay using `ROW_NUMBER`, then return the top ten.\n\n## 🔍 Explanation\n\n- The innermost query calculates average late-delivery delay per restaurant.\n- `ROW_NUMBER()` ranks restaurants by delay descending and id ascending.\n- `rn <= 10` keeps exactly ten rows.\n- The final `ORDER BY` matches the configured comparator order.",
      },
    ],
  },
  {
    code: "FOOD_074",
    approaches: [
      {
        approach_title: "ROW_NUMBER top driver",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH driver_city_deliveries AS (SELECT r.city, d.id, d.full_name, COUNT(*) AS completed_deliveries FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id JOIN orders o ON o.id = da.order_id JOIN restaurants r ON r.id = o.restaurant_id WHERE da.status = 'delivered' GROUP BY r.city, d.id, d.full_name), ranked_drivers AS (SELECT city, id, full_name, completed_deliveries, ROW_NUMBER() OVER (PARTITION BY city ORDER BY completed_deliveries DESC, id ASC) AS rn FROM driver_city_deliveries) SELECT city, id, full_name, completed_deliveries FROM ranked_drivers WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nCount completed deliveries per driver per city, rank drivers within each city, and keep the top driver.\n\n## 🔍 Explanation\n\n- `driver_city_deliveries` joins assignments through orders to restaurants so each completed delivery is tied to a city.\n- `COUNT(*)` calculates completed deliveries per driver and city.\n- `PARTITION BY city` ranks drivers separately for each city.\n- `ORDER BY completed_deliveries DESC, id ASC` chooses the highest delivery count and breaks ties by smaller driver id.\n- `rn = 1` returns exactly one top driver per city.",
      },
    ],
  },
  {
    code: "FOOD_075",
    approaches: [
      {
        approach_title: "FILTER all refunds",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.full_name FROM users u JOIN support_tickets st ON st.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE st.refund_amount > 0);",
        explanation:
          "## 🧠 Approach\n\nGroup support tickets by user and keep users whose every ticket has a positive refund amount.\n\n## 🔍 Explanation\n\n- The join ensures only users with at least one support ticket are considered.\n- `COUNT(*)` counts all support tickets for the user.\n- `COUNT(*) FILTER (WHERE st.refund_amount > 0)` counts tickets that resulted in a positive refund.\n- If both counts are equal, every support ticket for that user led to a refund.",
      },
      {
        approach_title: "NOT EXISTS no refund",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM support_tickets st WHERE st.user_id = u.id) AND NOT EXISTS (SELECT 1 FROM support_tickets st WHERE st.user_id = u.id AND NOT (st.refund_amount > 0));",
        explanation:
          "## 🧠 Approach\n\nRequire at least one support ticket and reject users who have any ticket without a positive refund.\n\n## 🔍 Explanation\n\n- The first `EXISTS` ensures the user has support tickets.\n- The `NOT EXISTS` clause removes users with any ticket where `refund_amount > 0` is not true.\n- This handles both zero and null refund amounts as non-refunded tickets, matching the aggregate filter logic.",
      },
    ],
  },
  {
    code: "FOOD_076",
    approaches: [
      {
        approach_title: "ROW_NUMBER refund",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_refunds AS (SELECT st.user_id, st.order_id, SUM(st.refund_amount) AS total_refund FROM support_tickets st GROUP BY st.user_id, st.order_id), ranked_refunds AS (SELECT user_id, order_id, total_refund, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY total_refund DESC, order_id ASC) AS rn FROM user_refunds) SELECT user_id, order_id, total_refund FROM ranked_refunds WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nSum refunds per user and order, rank refunded orders within each user, and return the highest-refund order per user.\n\n## 🔍 Explanation\n\n- `user_refunds` groups support tickets by `user_id` and `order_id` because multiple tickets can exist for the same order.\n- `SUM(st.refund_amount)` calculates the total refund for that user-order pair.\n- `ROW_NUMBER()` ranks orders per user by highest refund first and then by smaller order id.\n- `rn = 1` returns exactly one highest-refund order per user.",
      },
    ],
  },
  {
    code: "FOOD_077",
    approaches: [
      {
        approach_title: "LAG order gaps",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH ordered_gaps AS (SELECT user_id, order_created_at, LAG(order_created_at) OVER (PARTITION BY user_id ORDER BY order_created_at, order_id) AS previous_order_at FROM (SELECT o.user_id, o.id AS order_id, o.created_at AS order_created_at FROM orders o) base_orders) SELECT u.id, u.full_name, MAX(DATE_PART('day', og.order_created_at - og.previous_order_at)) AS longest_gap_days FROM users u JOIN ordered_gaps og ON og.user_id = u.id WHERE og.previous_order_at IS NOT NULL GROUP BY u.id, u.full_name;",
        explanation:
          "## 🧠 Approach\n\nUse `LAG` to compare each order with the previous order from the same user, then return the maximum gap per user.\n\n## 🔍 Explanation\n\n- `LAG(order_created_at)` gets the previous order timestamp for each user's order sequence.\n- `ORDER BY order_created_at, order_id` makes ordering deterministic when timestamps tie.\n- `DATE_PART('day', current - previous)` calculates the gap in days.\n- `MAX(...)` returns the longest consecutive-order gap for each user.",
      },
    ],
  },
  {
    code: "FOOD_078",
    approaches: [
      {
        approach_title: "Consecutive day streak",
        approach_type: "gaps_and_islands",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH driver_days AS (SELECT DISTINCT da.driver_id, DATE(da.delivered_at) AS delivery_day FROM driver_assignments da WHERE da.status = 'delivered' AND da.delivered_at IS NOT NULL), grouped_days AS (SELECT driver_id, delivery_day, delivery_day - (ROW_NUMBER() OVER (PARTITION BY driver_id ORDER BY delivery_day))::int AS grp_key FROM driver_days), streaks AS (SELECT driver_id, COUNT(*) AS streak_length FROM grouped_days GROUP BY driver_id, grp_key) SELECT d.id, d.full_name FROM drivers d JOIN streaks s ON s.driver_id = d.id WHERE s.streak_length >= 5 GROUP BY d.id, d.full_name;",
        explanation:
          "## 🧠 Approach\n\nUse the gaps-and-islands technique to find drivers with delivered-day streaks of at least five days.\n\n## 🔍 Explanation\n\n- `driver_days` creates one row per driver per delivered calendar day.\n- Subtracting `ROW_NUMBER()` from the date creates the same group key for consecutive dates.\n- `streaks` counts how many days are in each consecutive-day group.\n- Drivers with any streak length of at least five are returned.",
      },
    ],
  },
  {
    code: "FOOD_079",
    approaches: [
      {
        approach_title: "LAG monthly counts",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH monthly_orders AS (SELECT user_id, DATE_TRUNC('month', created_at) AS order_month, COUNT(*) AS order_count FROM orders GROUP BY user_id, DATE_TRUNC('month', created_at)), ranked_months AS (SELECT user_id, order_month, order_count, LAG(order_count) OVER (PARTITION BY user_id ORDER BY order_month) AS previous_month_order_count FROM monthly_orders) SELECT u.id, u.full_name, rm.order_month, rm.order_count, rm.previous_month_order_count FROM users u JOIN ranked_months rm ON rm.user_id = u.id WHERE rm.previous_month_order_count IS NOT NULL AND rm.order_count < rm.previous_month_order_count;",
        explanation:
          "## 🧠 Approach\n\nAggregate orders by user and month, then compare each month with the user's previous recorded month.\n\n## 🔍 Explanation\n\n- `monthly_orders` calculates one order count per user per month.\n- `LAG(order_count)` retrieves the previous recorded month count for that user.\n- The final filter keeps user-month rows where the current order count is lower than the previous recorded month.\n- Joining users adds the requested full name.",
      },
    ],
  },
  {
    code: "FOOD_080",
    approaches: [
      {
        approach_title: "Above restaurant delay",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH delayed_orders AS (SELECT id, restaurant_id, EXTRACT(EPOCH FROM (delivered_at - estimated_delivery_at)) / 60 AS delay_minutes FROM orders WHERE order_status = 'delivered' AND delivered_at IS NOT NULL AND estimated_delivery_at IS NOT NULL AND delivered_at > estimated_delivery_at), restaurant_avg_delay AS (SELECT restaurant_id, AVG(delay_minutes) AS avg_delay_minutes FROM delayed_orders GROUP BY restaurant_id) SELECT dly.id, dly.restaurant_id, dly.delay_minutes FROM delayed_orders dly JOIN restaurant_avg_delay rad ON rad.restaurant_id = dly.restaurant_id WHERE dly.delay_minutes > rad.avg_delay_minutes;",
        explanation:
          "## 🧠 Approach\n\nCalculate delay minutes for late delivered orders, calculate each restaurant's average delay, then return orders above that restaurant average.\n\n## 🔍 Explanation\n\n- `delayed_orders` computes delay minutes only for delivered orders that were late.\n- `restaurant_avg_delay` averages those delay values per restaurant.\n- Joining the two lets each delayed order be compared to its own restaurant's average delay.\n- The final filter keeps orders with delay greater than that restaurant average.",
      },
      {
        approach_title: "Window average",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, restaurant_id, delay_minutes FROM (SELECT id, restaurant_id, EXTRACT(EPOCH FROM (delivered_at - estimated_delivery_at)) / 60 AS delay_minutes, AVG(EXTRACT(EPOCH FROM (delivered_at - estimated_delivery_at)) / 60) OVER (PARTITION BY restaurant_id) AS avg_delay_minutes FROM orders WHERE order_status = 'delivered' AND delivered_at IS NOT NULL AND estimated_delivery_at IS NOT NULL AND delivered_at > estimated_delivery_at) x WHERE delay_minutes > avg_delay_minutes;",
        explanation:
          "## 🧠 Approach\n\nUse a window average to attach each restaurant's average delay to every delayed order row.\n\n## 🔍 Explanation\n\n- The inner query calculates each order's delay minutes.\n- `AVG(...) OVER (PARTITION BY restaurant_id)` computes the restaurant average without collapsing rows.\n- The outer query filters orders whose delay is greater than their restaurant's average delay.",
      },
    ],
  },
  {
    code: "FOOD_081",
    approaches: [
      {
        approach_title: "ROW_NUMBER top cities",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH monthly_city_revenue AS (SELECT DATE_TRUNC('month', o.created_at) AS revenue_month, r.city, SUM(o.total_amount) AS total_revenue FROM orders o JOIN restaurants r ON r.id = o.restaurant_id WHERE o.order_status = 'delivered' GROUP BY DATE_TRUNC('month', o.created_at), r.city), ranked_cities AS (SELECT revenue_month, city, total_revenue, ROW_NUMBER() OVER (PARTITION BY revenue_month ORDER BY total_revenue DESC, city ASC) AS rn FROM monthly_city_revenue) SELECT revenue_month, city, total_revenue FROM ranked_cities WHERE rn <= 3;",
        explanation:
          "## 🧠 Approach\n\nCalculate delivered revenue per city per month, rank cities within each month, and return the top three cities per month.\n\n## 🔍 Explanation\n\n- `monthly_city_revenue` groups delivered order revenue by month and restaurant city.\n- `PARTITION BY revenue_month` restarts the ranking for every month.\n- `ORDER BY total_revenue DESC, city ASC` ranks highest revenue first and uses city name as a deterministic tie-breaker.\n- `rn <= 3` returns exactly the top three city rows per month when available.",
      },
    ],
  },
  {
    code: "FOOD_082",
    approaches: [
      {
        approach_title: "ROW_NUMBER top coupons",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH monthly_coupon_usage AS (SELECT DATE_TRUNC('month', o.created_at) AS usage_month, c.code, COUNT(*) AS usage_count FROM orders o JOIN coupons c ON c.id = o.coupon_id GROUP BY DATE_TRUNC('month', o.created_at), c.code), ranked_coupon_usage AS (SELECT usage_month, code, usage_count, ROW_NUMBER() OVER (PARTITION BY usage_month ORDER BY usage_count DESC, code ASC) AS rn FROM monthly_coupon_usage) SELECT usage_month, code, usage_count FROM ranked_coupon_usage WHERE rn <= 2;",
        explanation:
          "## 🧠 Approach\n\nCount coupon usage by month, rank coupons within each month, and return the top two coupons per month.\n\n## 🔍 Explanation\n\n- The join to `coupons` gives the coupon code used by each coupon order.\n- `monthly_coupon_usage` counts how many orders used each coupon code in each month.\n- `PARTITION BY usage_month` ranks coupons separately for each month.\n- `ORDER BY usage_count DESC, code ASC` ranks most-used coupons first and breaks ties by coupon code.\n- `rn <= 2` returns exactly the top two coupons per month when available.",
      },
    ],
  },
  {
    code: "FOOD_083",
    approaches: [
      {
        approach_title: "Weekend vs weekday",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH delivered_orders AS (SELECT restaurant_id, total_amount, EXTRACT(ISODOW FROM created_at) AS order_isodow FROM orders WHERE order_status = 'delivered') SELECT r.id, r.name, SUM(o.total_amount) FILTER (WHERE o.order_isodow IN (6, 7)) AS weekend_revenue, SUM(o.total_amount) FILTER (WHERE o.order_isodow BETWEEN 1 AND 5) AS weekday_revenue FROM restaurants r JOIN delivered_orders o ON o.restaurant_id = r.id GROUP BY r.id, r.name HAVING COALESCE(SUM(o.total_amount) FILTER (WHERE o.order_isodow IN (6, 7)), 0) > COALESCE(SUM(o.total_amount) FILTER (WHERE o.order_isodow BETWEEN 1 AND 5), 0);",
        explanation:
          "## 🧠 Approach\n\nSplit delivered revenue into weekend and weekday buckets, then keep restaurants where weekend revenue is higher.\n\n## 🔍 Explanation\n\n- `EXTRACT(ISODOW FROM created_at)` returns ISO day of week, where 6 and 7 are Saturday and Sunday.\n- `FILTER` calculates separate revenue totals for weekend and weekday orders.\n- `COALESCE` treats missing weekend or weekday revenue as zero for comparison.\n- The `HAVING` clause compares the grouped revenue totals after aggregation.",
      },
      {
        approach_title: "CASE revenue",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH delivered_orders AS (SELECT restaurant_id, total_amount, EXTRACT(ISODOW FROM created_at) AS order_isodow FROM orders WHERE order_status = 'delivered') SELECT r.id, r.name, SUM(CASE WHEN o.order_isodow IN (6, 7) THEN o.total_amount END) AS weekend_revenue, SUM(CASE WHEN o.order_isodow BETWEEN 1 AND 5 THEN o.total_amount END) AS weekday_revenue FROM restaurants r JOIN delivered_orders o ON o.restaurant_id = r.id GROUP BY r.id, r.name HAVING COALESCE(SUM(CASE WHEN o.order_isodow IN (6, 7) THEN o.total_amount END), 0) > COALESCE(SUM(CASE WHEN o.order_isodow BETWEEN 1 AND 5 THEN o.total_amount END), 0);",
        explanation:
          "## 🧠 Approach\n\nUse `CASE` expressions instead of `FILTER` to calculate weekend and weekday revenue.\n\n## 🔍 Explanation\n\n- `CASE` sends weekend order amounts into the weekend sum and weekday order amounts into the weekday sum.\n- Rows that do not match the condition contribute `NULL`, which `SUM` ignores.\n- The `HAVING` comparison uses `COALESCE` so missing buckets compare as zero.\n- This is equivalent to the `FILTER` version and is more portable across SQL dialects.",
      },
    ],
  },
  {
    code: "FOOD_084",
    approaches: [
      {
        approach_title: "Refunded order count",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH refunded_orders AS (SELECT user_id, order_id, SUM(refund_amount) AS total_refund FROM support_tickets WHERE refund_amount > 0 GROUP BY user_id, order_id) SELECT u.id, u.full_name, COUNT(*) AS refunded_order_count FROM users u JOIN refunded_orders ro ON ro.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nCollapse positive refunds to one row per user-order pair, then count how many distinct refunded orders each user has.\n\n## 🔍 Explanation\n\n- `refunded_orders` filters to support tickets with positive refunds.\n- Grouping by `user_id, order_id` ensures multiple tickets for the same order count as one refunded order.\n- The outer query counts refunded orders per user.\n- `HAVING COUNT(*) > 1` keeps only users refunded on multiple distinct orders.",
      },
    ],
  },
  {
    code: "FOOD_085",
    approaches: [
      {
        approach_title: "FILTER delivery quality",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT d.id, d.full_name, COUNT(*) FILTER (WHERE da.status = 'delivered') AS delivered_count FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id GROUP BY d.id, d.full_name HAVING COUNT(*) FILTER (WHERE da.status = 'delivered') >= 10 AND COUNT(*) FILTER (WHERE da.status IN ('failed', 'cancelled')) = 0;",
        explanation:
          "## 🧠 Approach\n\nUse conditional counts to find drivers with at least ten delivered assignments and no failed or cancelled assignments.\n\n## 🔍 Explanation\n\n- `COUNT(*) FILTER (WHERE da.status = 'delivered')` counts completed deliveries.\n- `COUNT(*) FILTER (WHERE da.status IN ('failed', 'cancelled'))` counts bad outcomes.\n- The `HAVING` clause keeps drivers with enough completed deliveries and zero failed/cancelled assignments.\n- The selected delivered count matches the required output.",
      },
      {
        approach_title: "CASE delivery quality",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT d.id, d.full_name, SUM(CASE WHEN da.status = 'delivered' THEN 1 ELSE 0 END) AS delivered_count FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id GROUP BY d.id, d.full_name HAVING SUM(CASE WHEN da.status = 'delivered' THEN 1 ELSE 0 END) >= 10 AND SUM(CASE WHEN da.status IN ('failed', 'cancelled') THEN 1 ELSE 0 END) = 0;",
        explanation:
          "## 🧠 Approach\n\nUse `CASE` expressions to count delivered and failed/cancelled assignments.\n\n## 🔍 Explanation\n\n- Each `CASE` converts matching rows into `1` and non-matching rows into `0`.\n- `SUM` turns those flags into per-driver counts.\n- The `HAVING` clause applies both business rules after grouping.\n- This is equivalent to the `FILTER` version but more verbose.",
      },
    ],
  },
  {
    code: "FOOD_086",
    approaches: [
      {
        approach_title: "Latest three growth",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH monthly_revenue AS (SELECT restaurant_id, DATE_TRUNC('month', created_at) AS revenue_month, SUM(total_amount) AS total_revenue FROM orders WHERE order_status = 'delivered' GROUP BY restaurant_id, DATE_TRUNC('month', created_at)), ranked_months AS (SELECT restaurant_id, revenue_month, total_revenue, ROW_NUMBER() OVER (PARTITION BY restaurant_id ORDER BY revenue_month DESC) AS rn FROM monthly_revenue), last_three AS (SELECT restaurant_id, revenue_month, total_revenue FROM ranked_months WHERE rn <= 3), pivoted AS (SELECT restaurant_id, MAX(total_revenue) FILTER (WHERE rn = 1) AS month_1_revenue, MAX(total_revenue) FILTER (WHERE rn = 2) AS month_2_revenue, MAX(total_revenue) FILTER (WHERE rn = 3) AS month_3_revenue FROM (SELECT restaurant_id, total_revenue, ROW_NUMBER() OVER (PARTITION BY restaurant_id ORDER BY revenue_month DESC) AS rn FROM last_three) t GROUP BY restaurant_id) SELECT r.id, r.name, p.month_3_revenue AS oldest_month_revenue, p.month_2_revenue AS middle_month_revenue, p.month_1_revenue AS latest_month_revenue FROM pivoted p JOIN restaurants r ON r.id = p.restaurant_id WHERE p.month_1_revenue IS NOT NULL AND p.month_2_revenue IS NOT NULL AND p.month_3_revenue IS NOT NULL AND p.month_3_revenue < p.month_2_revenue AND p.month_2_revenue < p.month_1_revenue;",
        explanation:
          "## 🧠 Approach\n\nCalculate monthly delivered revenue, select each restaurant's latest three recorded months, pivot those three values, and check strict month-over-month growth.\n\n## 🔍 Explanation\n\n- `monthly_revenue` aggregates delivered revenue per restaurant and month.\n- `ranked_months` identifies the latest recorded months per restaurant.\n- `pivoted` turns the latest three months into separate columns.\n- The final filter requires all three months to exist and checks `oldest < middle < latest`.",
      },
    ],
  },
  {
    code: "FOOD_087",
    approaches: [
      {
        approach_title: "Signup month coverage",
        approach_type: "date_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_months AS (SELECT u.id AS user_id, DATE_TRUNC('month', u.created_at) AS signup_month, COUNT(DISTINCT DATE_TRUNC('month', o.created_at)) AS active_months, DATE_TRUNC('month', MAX(o.created_at)) AS last_order_month FROM users u JOIN orders o ON o.user_id = u.id GROUP BY u.id, DATE_TRUNC('month', u.created_at)), expected_months AS (SELECT user_id, ((EXTRACT(YEAR FROM AGE(last_order_month, signup_month)) * 12) + EXTRACT(MONTH FROM AGE(last_order_month, signup_month)) + 1)::int AS expected_month_count, active_months FROM user_months) SELECT u.id, u.full_name FROM users u JOIN expected_months em ON em.user_id = u.id WHERE em.active_months = em.expected_month_count;",
        explanation:
          "## 🧠 Approach\n\nCompare each user's active order months with the number of months from signup month through latest order month.\n\n## 🔍 Explanation\n\n- `user_months` counts distinct months where the user placed orders and captures signup month plus latest order month.\n- `expected_months` calculates the inclusive month count between signup and latest order.\n- If active months equal expected months, the user ordered in every month across that range.\n- The join to `users` returns the requested id and full name.",
      },
    ],
  },
  {
    code: "FOOD_088",
    approaches: [
      {
        approach_title: "Coupon average discount",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH coupon_avg_discount AS (SELECT coupon_id, AVG(discount_amount) AS avg_discount FROM orders WHERE coupon_id IS NOT NULL GROUP BY coupon_id) SELECT o.id, o.coupon_id, o.discount_amount FROM orders o JOIN coupon_avg_discount cad ON cad.coupon_id = o.coupon_id WHERE o.discount_amount > cad.avg_discount;",
        explanation:
          "## 🧠 Approach\n\nCalculate average discount per coupon, then return orders whose discount is above that coupon's average.\n\n## 🔍 Explanation\n\n- `coupon_avg_discount` groups orders by coupon and calculates the average discount amount.\n- The final query joins each coupon order to its coupon's average discount.\n- `o.discount_amount > cad.avg_discount` keeps orders with discounts greater than the average for that same coupon.",
      },
      {
        approach_title: "Window coupon average",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, coupon_id, discount_amount FROM (SELECT id, coupon_id, discount_amount, AVG(discount_amount) OVER (PARTITION BY coupon_id) AS avg_discount FROM orders WHERE coupon_id IS NOT NULL) x WHERE discount_amount > avg_discount;",
        explanation:
          "## 🧠 Approach\n\nUse a window average to attach each coupon's average discount to every coupon order.\n\n## 🔍 Explanation\n\n- `AVG(discount_amount) OVER (PARTITION BY coupon_id)` calculates the coupon-level average without collapsing rows.\n- Each order keeps its own id and discount amount.\n- The outer query filters orders above their coupon's average discount.",
      },
    ],
  },
  {
    code: "FOOD_089",
    approaches: [
      {
        approach_title: "Tip greater than delivery",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT driver_id, order_id, delivery_earnings, tip_earnings FROM driver_assignments WHERE tip_earnings > delivery_earnings;",
        explanation:
          "## 🧠 Approach\n\nFilter driver assignments where tip earnings exceed delivery earnings.\n\n## 🔍 Explanation\n\n- `tip_earnings > delivery_earnings` keeps assignments where the tip amount is larger than the delivery earning amount.\n- Rows with null values are naturally excluded because comparisons with null do not evaluate to true.\n- The selected columns match the expected output exactly.",
      },
    ],
  },
  {
    code: "FOOD_090",
    approaches: [
      {
        approach_title: "Review vs restaurant count",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH distinct_user_restaurants AS (SELECT DISTINCT user_id, restaurant_id FROM orders), user_restaurants AS (SELECT user_id, COUNT(*) AS restaurant_count FROM distinct_user_restaurants GROUP BY user_id), user_reviews AS (SELECT user_id, COUNT(*) AS review_count FROM reviews GROUP BY user_id) SELECT u.id, u.full_name, urv.review_count, uro.restaurant_count FROM users u JOIN user_reviews urv ON urv.user_id = u.id JOIN user_restaurants uro ON uro.user_id = u.id WHERE urv.review_count > uro.restaurant_count;",
        explanation:
          "## 🧠 Approach\n\nCount each user's reviews and distinct ordered restaurants separately, then return users with more reviews than restaurants ordered from.\n\n## 🔍 Explanation\n\n- `distinct_user_restaurants` removes duplicate user-restaurant order pairs.\n- `user_restaurants` counts how many distinct restaurants each user ordered from.\n- `user_reviews` counts how many reviews each user submitted.\n- The final comparison keeps users whose review count is greater than their distinct restaurant count.",
      },
    ],
  },
  {
    code: "FOOD_091",
    approaches: [
      {
        approach_title: "ROW_NUMBER top 3",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH driver_deliveries AS (SELECT r.city, d.id, d.full_name, COUNT(*) AS completed_deliveries FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id JOIN orders o ON o.id = da.order_id JOIN restaurants r ON r.id = o.restaurant_id WHERE da.status = 'delivered' GROUP BY r.city, d.id, d.full_name), ranked_drivers AS (SELECT city, id, full_name, completed_deliveries, ROW_NUMBER() OVER (PARTITION BY city ORDER BY completed_deliveries DESC, id ASC) AS rn FROM driver_deliveries) SELECT city, id, full_name, completed_deliveries FROM ranked_drivers WHERE rn <= 3;",
        explanation:
          "## 🧠 Approach\n\nCount completed deliveries per driver in each city, rank drivers within each city, and keep the top three.\n\n## 🔍 Explanation\n\n- `driver_deliveries` joins drivers, assignments, orders, and restaurants so each completed delivery is tied to a city.\n- `COUNT(*)` calculates completed deliveries per driver per city.\n- `PARTITION BY city` ranks drivers separately for every city.\n- `ORDER BY completed_deliveries DESC, id ASC` ranks highest delivery count first and breaks ties by smaller driver id.\n- `rn <= 3` returns exactly the top three drivers per city when available.",
      },
    ],
  },
  {
    code: "FOOD_092",
    approaches: [
      {
        approach_title: "FILTER weekend only",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_orders AS (SELECT user_id, created_at FROM orders) SELECT u.id, u.full_name FROM users u JOIN user_orders uo ON uo.user_id = u.id GROUP BY u.id, u.full_name HAVING COUNT(*) > 0 AND COUNT(*) = COUNT(*) FILTER (WHERE EXTRACT(ISODOW FROM uo.created_at) IN (6, 7));",
        explanation:
          "## 🧠 Approach\n\nGroup orders by user and keep users whose every order was placed on a weekend.\n\n## 🔍 Explanation\n\n- `EXTRACT(ISODOW FROM created_at)` returns ISO day of week, where 6 is Saturday and 7 is Sunday.\n- `COUNT(*)` counts all orders per user.\n- `COUNT(*) FILTER (WHERE ... IN (6, 7))` counts weekend orders per user.\n- If both counts are equal, every order for that user was placed on a weekend.",
      },
      {
        approach_title: "NOT EXISTS weekday",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT u.id, u.full_name FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id) AND NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id AND EXTRACT(ISODOW FROM o.created_at) BETWEEN 1 AND 5);",
        explanation:
          "## 🧠 Approach\n\nRequire at least one order and reject users who have any weekday order.\n\n## 🔍 Explanation\n\n- The first `EXISTS` ensures users with no orders are not included.\n- The `NOT EXISTS` clause removes users with orders from Monday through Friday.\n- This directly expresses “all orders were on weekends” without aggregate counts.",
      },
    ],
  },
  {
    code: "FOOD_093",
    approaches: [
      {
        approach_title: "ROW_NUMBER top day",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH daily_restaurant_revenue AS (SELECT r.city, r.id, r.name, DATE(o.created_at) AS order_date, SUM(o.total_amount) AS daily_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city, r.id, r.name, DATE(o.created_at)), ranked_revenue AS (SELECT city, id, name, order_date, daily_revenue, ROW_NUMBER() OVER (PARTITION BY city ORDER BY daily_revenue DESC, order_date ASC, id ASC) AS rn FROM daily_restaurant_revenue) SELECT city, id, name, order_date, daily_revenue FROM ranked_revenue WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate delivered revenue per restaurant per day, rank restaurant-day rows inside each city, and keep the highest one.\n\n## 🔍 Explanation\n\n- `daily_restaurant_revenue` groups delivered revenue by city, restaurant, and date.\n- `PARTITION BY city` ranks rows separately for every city.\n- `ORDER BY daily_revenue DESC, order_date ASC, id ASC` chooses the highest revenue day, with deterministic tie-breakers.\n- `rn = 1` returns exactly one restaurant-day result per city.",
      },
    ],
  },
  {
    code: "FOOD_094",
    approaches: [
      {
        approach_title: "Above city wait",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH driver_city_wait AS (SELECT r.city, d.id, d.full_name, AVG(da.wait_time_minutes) AS avg_wait_time FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id JOIN orders o ON o.id = da.order_id JOIN restaurants r ON r.id = o.restaurant_id WHERE da.wait_time_minutes IS NOT NULL GROUP BY r.city, d.id, d.full_name), city_wait_avg AS (SELECT city, AVG(avg_wait_time) AS city_avg_wait_time FROM driver_city_wait GROUP BY city) SELECT dcw.city, dcw.id, dcw.full_name, dcw.avg_wait_time FROM driver_city_wait dcw JOIN city_wait_avg cwa ON cwa.city = dcw.city WHERE dcw.avg_wait_time > cwa.city_avg_wait_time;",
        explanation:
          "## 🧠 Approach\n\nCalculate each driver's average restaurant wait time per city, calculate the city average, and return drivers above that city average.\n\n## 🔍 Explanation\n\n- `driver_city_wait` joins assignments through orders to restaurants so each wait time belongs to a city.\n- It calculates average wait time per driver per city.\n- `city_wait_avg` calculates the average of driver averages within each city.\n- The final filter keeps drivers whose average wait time is greater than their city's average.",
      },
      {
        approach_title: "Window city average",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH driver_city_wait AS (SELECT r.city, d.id, d.full_name, AVG(da.wait_time_minutes) AS avg_wait_time FROM drivers d JOIN driver_assignments da ON da.driver_id = d.id JOIN orders o ON o.id = da.order_id JOIN restaurants r ON r.id = o.restaurant_id WHERE da.wait_time_minutes IS NOT NULL GROUP BY r.city, d.id, d.full_name) SELECT city, id, full_name, avg_wait_time FROM (SELECT city, id, full_name, avg_wait_time, AVG(avg_wait_time) OVER (PARTITION BY city) AS city_avg_wait_time FROM driver_city_wait) x WHERE avg_wait_time > city_avg_wait_time;",
        explanation:
          "## 🧠 Approach\n\nUse a window average to attach each city's driver-average wait time to every driver row.\n\n## 🔍 Explanation\n\n- `driver_city_wait` first produces one row per driver per city.\n- `AVG(avg_wait_time) OVER (PARTITION BY city)` calculates the city-level average across those driver rows.\n- The outer query keeps drivers whose wait time is above their city's average.",
      },
    ],
  },
  {
    code: "FOOD_095",
    approaches: [
      {
        approach_title: "NOT EXISTS stockout",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT r.id, r.name FROM restaurants r WHERE EXISTS (SELECT 1 FROM menu_items mi WHERE mi.restaurant_id = r.id) AND NOT EXISTS (SELECT 1 FROM menu_items mi JOIN menu_item_availability_logs l ON l.menu_item_id = mi.id WHERE mi.restaurant_id = r.id AND l.was_available = false);",
        explanation:
          "## 🧠 Approach\n\nReturn restaurants that have menu items but none of those items were ever logged as unavailable.\n\n## 🔍 Explanation\n\n- The first `EXISTS` ensures the restaurant has at least one menu item.\n- The `NOT EXISTS` clause rejects restaurants where any menu item has an availability log with `was_available = false`.\n- This expresses “no stockout in any item” as an anti-join condition.",
      },
    ],
  },
  {
    code: "FOOD_096",
    approaches: [
      {
        approach_title: "Previous best spend",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH monthly_spend AS (SELECT user_id, DATE_TRUNC('month', created_at) AS spend_month, SUM(total_amount) AS total_spent FROM orders WHERE order_status = 'delivered' GROUP BY user_id, DATE_TRUNC('month', created_at)), spend_history AS (SELECT user_id, spend_month, total_spent, MAX(total_spent) OVER (PARTITION BY user_id ORDER BY spend_month ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING) AS previous_best_spend FROM monthly_spend) SELECT u.id, u.full_name, sh.spend_month, sh.total_spent FROM users u JOIN spend_history sh ON sh.user_id = u.id WHERE sh.previous_best_spend IS NOT NULL AND sh.total_spent > sh.previous_best_spend;",
        explanation:
          "## 🧠 Approach\n\nCalculate monthly delivered spend per user, track the best previous month, and return months that beat all earlier months.\n\n## 🔍 Explanation\n\n- `monthly_spend` aggregates delivered spend by user and month.\n- `MAX(total_spent) OVER (... 1 PRECEDING)` gives the highest spend before the current month.\n- Rows with no previous month are excluded.\n- The final filter keeps user-months where current spend is greater than every previous recorded month.",
      },
    ],
  },
  {
    code: "FOOD_097",
    approaches: [
      {
        approach_title: "Category coverage",
        approach_type: "relational_division",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH restaurant_categories AS (SELECT restaurant_id, COUNT(DISTINCT category) AS total_categories FROM menu_items GROUP BY restaurant_id), ordered_categories AS (SELECT mi.restaurant_id, COUNT(DISTINCT mi.category) AS ordered_categories FROM menu_items mi JOIN order_items oi ON oi.menu_item_id = mi.id GROUP BY mi.restaurant_id) SELECT r.id, r.name FROM restaurants r JOIN restaurant_categories rc ON rc.restaurant_id = r.id JOIN ordered_categories oc ON oc.restaurant_id = r.id WHERE rc.total_categories = oc.ordered_categories;",
        explanation:
          "## 🧠 Approach\n\nCompare the number of menu categories a restaurant has with the number of its categories that appeared in orders.\n\n## 🔍 Explanation\n\n- `restaurant_categories` counts all distinct menu categories for each restaurant.\n- `ordered_categories` counts distinct categories that appeared in order items.\n- If both counts match, every category offered by the restaurant has been ordered at least once.",
      },
    ],
  },
  {
    code: "FOOD_098",
    approaches: [
      {
        approach_title: "Tickets vs orders",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_order_counts AS (SELECT user_id, COUNT(*) AS order_count FROM orders GROUP BY user_id), user_ticket_counts AS (SELECT user_id, COUNT(*) AS ticket_count FROM support_tickets GROUP BY user_id) SELECT u.id, u.full_name, utc.ticket_count, uoc.order_count FROM users u JOIN user_ticket_counts utc ON utc.user_id = u.id JOIN user_order_counts uoc ON uoc.user_id = u.id WHERE utc.ticket_count > uoc.order_count;",
        explanation:
          "## 🧠 Approach\n\nCount orders and support tickets separately per user, then compare the counts.\n\n## 🔍 Explanation\n\n- `user_order_counts` calculates each user's total order count.\n- `user_ticket_counts` calculates each user's support ticket count.\n- Joining both count sets ensures the user has both orders and tickets.\n- The final filter keeps users whose ticket count is greater than their order count.",
      },
    ],
  },
  {
    code: "FOOD_099",
    approaches: [
      {
        approach_title: "Previous best tip",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH user_tip_history AS (SELECT user_id, id, created_at, tip_amount, MAX(tip_amount) OVER (PARTITION BY user_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING) AS previous_best_tip FROM orders) SELECT u.id AS user_id, u.full_name, uth.id AS order_id, uth.tip_amount FROM users u JOIN user_tip_history uth ON uth.user_id = u.id WHERE uth.previous_best_tip IS NOT NULL AND uth.tip_amount > uth.previous_best_tip;",
        explanation:
          "## 🧠 Approach\n\nFor each user's order timeline, track the best previous tip and return orders whose tip beat all previous tips.\n\n## 🔍 Explanation\n\n- `MAX(tip_amount) OVER (... 1 PRECEDING)` calculates the highest tip before the current order.\n- `ORDER BY created_at, id` makes the order history deterministic.\n- Rows without a previous order are excluded.\n- The final filter keeps orders where the current tip amount is greater than the user's previous best tip.",
      },
    ],
  },
  {
    code: "FOOD_100",
    approaches: [
      {
        approach_title: "Latest month decline",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH monthly_city_revenue AS (SELECT r.city, DATE_TRUNC('month', o.created_at) AS revenue_month, SUM(o.total_amount) AS total_revenue FROM restaurants r JOIN orders o ON o.restaurant_id = r.id WHERE o.order_status = 'delivered' GROUP BY r.city, DATE_TRUNC('month', o.created_at)), ranked_months AS (SELECT city, revenue_month, total_revenue, ROW_NUMBER() OVER (PARTITION BY city ORDER BY revenue_month DESC) AS rn, LEAD(total_revenue, 1) OVER (PARTITION BY city ORDER BY revenue_month DESC) AS previous_month_revenue FROM monthly_city_revenue) SELECT city, revenue_month AS latest_month, total_revenue AS latest_month_revenue, previous_month_revenue FROM ranked_months WHERE rn = 1 AND previous_month_revenue IS NOT NULL AND total_revenue < previous_month_revenue;",
        explanation:
          "## 🧠 Approach\n\nCalculate monthly delivered revenue per city, identify the latest month, and compare it with the previous recorded month.\n\n## 🔍 Explanation\n\n- `monthly_city_revenue` aggregates delivered revenue by city and month.\n- `ROW_NUMBER() ... ORDER BY revenue_month DESC` marks the latest recorded month as `rn = 1`.\n- `LEAD(total_revenue)` fetches the previous month because the ordering is descending.\n- The final filter keeps only cities where latest-month revenue is lower than the previous recorded month.",
      },
    ],
  },
];
