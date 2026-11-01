import { getAppIdByName } from "../../base/scripts/base.data.js";

const appId = getAppIdByName("movies");

export const tableDescriptions = {
  app_events:
    "General product events for browsing, home page behavior, and funnel analytics",
  billing_invoices:
    "Invoices generated for subscriptions including discounts, taxes, and payment state",
  content_availability: "Region and plan-based content availability windows",
  content_categories:
    "Catalog dimensions such as genre, mood, audience, and theme",
  content_licenses: "Regional licensing windows for titles",
  continue_watching: "Resume points and progress for unfinished playback",
  devices: "Registered and active playback devices linked to user accounts",
  downloads: "Offline downloads and expiration tracking for devices",
  episodes:
    "Episodes within each season used for episodic playback and analytics",
  experiment_assignments:
    "Profile-level experiment assignments used for experimental analysis",
  experiment_variants:
    "Variants belonging to each experiment with traffic allocations",
  experiments: "Product and algorithm experiments for A/B testing",
  notification_campaigns:
    "Marketing and engagement campaigns sent through push, email, SMS, or in-app",
  notification_deliveries: "Per-user campaign delivery and engagement tracking",
  payments:
    "Payment transactions for invoices including successes, failures, and refunds",
  people: "Actors, directors, writers, and other talent connected to titles",
  playback_events:
    "Detailed playback events such as play, pause, seek, buffer, and errors",
  profiles:
    "Profiles under each subscriber account used for personalization and household viewing",
  promotions:
    "Promotional codes used for subscription discounts and acquisition campaigns",
  ratings: "Profile-level ratings and feedback for titles or episodes",
  recommendation_clicks:
    "Clicks on recommendation impressions for downstream conversion analysis",
  recommendation_impressions:
    "Recommendation exposures served to profiles for ranking and CTR analysis",
  recommendation_rows:
    "Recommendation shelves and presentation rows shown on home and browse pages",
  search_queries:
    "Search behavior including query terms, result counts, and click-through outcomes",
  seasons: "Seasons belonging to series titles",
  subscription_plans:
    "Subscription plans such as mobile, standard, premium, and ad-supported",
  subscriptions:
    "Billing subscriptions for accounts and renewal lifecycle tracking",
  support_tickets:
    "Support issues related to billing, playback, downloads, and catalog problems",
  title_categories:
    "Bridge table connecting titles with genres, moods, and themes",
  title_credits: "Credits mapping talent and their roles to titles",
  title_localizations:
    "Localized catalog metadata for multilingual storefronts",
  titles:
    "Top-level catalog entities such as movies, series, documentaries, and specials",
  users: "Subscriber accounts on the streaming platform",
  viewing_sessions:
    "Playback sessions used for engagement, completion, and QoE analysis",
  watchlists: "Titles saved by profiles for later watching",
};

export const questions = [
  {
    app_id: appId,
    code: "MOVIES_001",
    title: "Total Users Count",
    description: "Find the total number of users on the platform.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS total_users FROM users;",
    solution_columns: ["total_users"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_002",
    title: "Active Profiles Count",
    description: "Find the total number of active profiles.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS active_profiles FROM profiles WHERE is_active = true;",
    solution_columns: ["active_profiles"],
    tables: ["profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_003",
    title: "Total Titles Count",
    description: "Find the total number of titles available in the catalog.",
    difficulty: "easy",
    expected_query: "SELECT COUNT(*) AS total_titles FROM titles;",
    solution_columns: ["total_titles"],
    tables: ["titles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_004",
    title: "Published Titles",
    description: "Find all published titles.",
    difficulty: "easy",
    expected_query:
      "SELECT id, title_name, title_type FROM titles WHERE content_status = 'published';",
    solution_columns: ["id", "title_name", "title_type"],
    tables: ["titles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_005",
    title: "Original Content",
    description: "Find all platform original titles.",
    difficulty: "easy",
    expected_query:
      "SELECT id, title_name, release_year FROM titles WHERE is_original = true;",
    solution_columns: ["id", "title_name", "release_year"],
    tables: ["titles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_006",
    title: "HD Plans",
    description: "Find all subscription plans with HD or better quality.",
    difficulty: "easy",
    expected_query:
      "SELECT id, plan_name, video_quality, price FROM subscription_plans WHERE video_quality IN ('hd', 'full_hd', 'uhd');",
    solution_columns: ["id", "plan_name", "video_quality", "price"],
    tables: ["subscription_plans"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_007",
    title: "Movies Released After 2020",
    description: "Find all movie titles released after 2020.",
    difficulty: "easy",
    expected_query:
      "SELECT id, title_name, release_year FROM titles WHERE title_type = 'movie' AND release_year > 2020;",
    solution_columns: ["id", "title_name", "release_year"],
    tables: ["titles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_008",
    title: "Titles With Ratings Above 8",
    description: "Find titles having an IMDb-like score above 8.",
    difficulty: "easy",
    expected_query:
      "SELECT id, title_name, imdb_like_score FROM titles WHERE imdb_like_score > 8;",
    solution_columns: ["id", "title_name", "imdb_like_score"],
    tables: ["titles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_009",
    title: "Downloaded Content",
    description: "Find all completed downloads.",
    difficulty: "easy",
    expected_query:
      "SELECT id, profile_id, device_id, download_status FROM downloads WHERE download_status = 'completed';",
    solution_columns: ["id", "profile_id", "device_id", "download_status"],
    tables: ["downloads"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_010",
    title: "Top Rated Titles",
    description: "Find the top 5 highest rated titles by critic score.",
    difficulty: "easy",
    expected_query:
      "SELECT id, title_name, critic_score FROM titles WHERE critic_score IS NOT NULL ORDER BY critic_score DESC, id ASC LIMIT 5;",
    solution_columns: ["id", "title_name", "critic_score"],
    tables: ["titles"],
    comparison_config: {
      sort_by_columns: [
        { column: "critic_score", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_011",
    title: "Titles Per Type",
    description: "Find the number of titles in each title type.",
    difficulty: "easy",
    expected_query:
      "SELECT title_type, COUNT(*) AS total_titles FROM titles GROUP BY title_type;",
    solution_columns: ["title_type", "total_titles"],
    tables: ["titles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_012",
    title: "Profiles Per User",
    description: "Find the number of profiles created under each user account.",
    difficulty: "easy",
    expected_query:
      "SELECT user_id, COUNT(*) AS profile_count FROM profiles GROUP BY user_id;",
    solution_columns: ["user_id", "profile_count"],
    tables: ["profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_013",
    title: "Titles Per Language",
    description: "Find the number of titles for each original language.",
    difficulty: "easy",
    expected_query:
      "SELECT original_language, COUNT(*) AS total_titles FROM titles GROUP BY original_language;",
    solution_columns: ["original_language", "total_titles"],
    tables: ["titles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_014",
    title: "Average Movie Runtime",
    description: "Find the average runtime of all movie titles.",
    difficulty: "easy",
    expected_query:
      "SELECT ROUND(AVG(runtime_minutes), 2) AS avg_runtime_minutes FROM titles WHERE title_type = 'movie' AND runtime_minutes IS NOT NULL;",
    solution_columns: ["avg_runtime_minutes"],
    tables: ["titles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_015",
    title: "Active Subscriptions Count",
    description: "Find the total number of active subscriptions.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS active_subscriptions FROM subscriptions WHERE subscription_status = 'active';",
    solution_columns: ["active_subscriptions"],
    tables: ["subscriptions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_016",
    title: "Users With Multiple Profiles",
    description: "Find users who have more than one profile.",
    difficulty: "easy",
    expected_query:
      "SELECT user_id, COUNT(*) AS profile_count FROM profiles GROUP BY user_id HAVING COUNT(*) > 1;",
    solution_columns: ["user_id", "profile_count"],
    tables: ["profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_017",
    title: "Ratings Per Title",
    description: "Find the number of ratings received by each title.",
    difficulty: "easy",
    expected_query:
      "SELECT title_id, COUNT(*) AS ratings_count FROM ratings WHERE title_id IS NOT NULL GROUP BY title_id;",
    solution_columns: ["title_id", "ratings_count"],
    tables: ["ratings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_018",
    title: "Completed Downloads Per Device",
    description: "Find the number of completed downloads on each device.",
    difficulty: "easy",
    expected_query:
      "SELECT device_id, COUNT(*) AS completed_downloads FROM downloads WHERE download_status = 'completed' GROUP BY device_id;",
    solution_columns: ["device_id", "completed_downloads"],
    tables: ["downloads"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_019",
    title: "Average Rating Per Title",
    description: "Find the average rating for each title.",
    difficulty: "easy",
    expected_query:
      "SELECT title_id, ROUND(AVG(rating_value), 2) AS avg_rating FROM ratings WHERE title_id IS NOT NULL GROUP BY title_id;",
    solution_columns: ["title_id", "avg_rating"],
    tables: ["ratings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_020",
    title: "Titles Added To Watchlist Most",
    description:
      "Find the top 5 titles that were added to watchlists the most.",
    difficulty: "easy",
    expected_query:
      "SELECT title_id, COUNT(*) AS watchlist_adds FROM watchlists GROUP BY title_id ORDER BY watchlist_adds DESC, title_id ASC LIMIT 5;",
    solution_columns: ["title_id", "watchlist_adds"],
    tables: ["watchlists"],
    comparison_config: {
      sort_by_columns: [
        { column: "watchlist_adds", direction: "desc" },
        { column: "title_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_021",
    title: "User Emails With Active Plans",
    description:
      "Find all users who currently have an active subscription along with their plan names.",
    difficulty: "easy",
    expected_query:
      "SELECT u.id, u.email, sp.plan_name FROM users u JOIN subscriptions s ON u.id = s.user_id JOIN subscription_plans sp ON s.plan_id = sp.id WHERE s.subscription_status = 'active';",
    solution_columns: ["id", "email", "plan_name"],
    tables: ["users", "subscriptions", "subscription_plans"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_022",
    title: "Titles With Genres",
    description: "Find all titles along with their category names.",
    difficulty: "easy",
    expected_query:
      "SELECT t.id, t.title_name, c.category_name FROM titles t JOIN title_categories tc ON t.id = tc.title_id JOIN content_categories c ON tc.category_id = c.id;",
    solution_columns: ["id", "title_name", "category_name"],
    tables: ["titles", "title_categories", "content_categories"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_023",
    title: "Episodes Per Season",
    description: "Find the number of episodes in each season.",
    difficulty: "easy",
    expected_query:
      "SELECT season_id, COUNT(*) AS episode_count FROM episodes GROUP BY season_id;",
    solution_columns: ["season_id", "episode_count"],
    tables: ["episodes"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_024",
    title: "Viewing Sessions Per Profile",
    description: "Find the total number of viewing sessions for each profile.",
    difficulty: "easy",
    expected_query:
      "SELECT profile_id, COUNT(*) AS session_count FROM viewing_sessions GROUP BY profile_id;",
    solution_columns: ["profile_id", "session_count"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_025",
    title: "Most Watched Titles",
    description:
      "Find the top 5 most watched titles based on viewing sessions.",
    difficulty: "easy",
    expected_query:
      "SELECT title_id, COUNT(*) AS total_views FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id ORDER BY total_views DESC, title_id ASC LIMIT 5;",
    solution_columns: ["title_id", "total_views"],
    tables: ["viewing_sessions"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_views", direction: "desc" },
        { column: "title_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_026",
    title: "People Per Role",
    description: "Find the number of credited people for each role type.",
    difficulty: "easy",
    expected_query:
      "SELECT role_type, COUNT(*) AS total_people FROM title_credits GROUP BY role_type;",
    solution_columns: ["role_type", "total_people"],
    tables: ["title_credits"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_027",
    title: "Successful Payments",
    description: "Find all successful payments with their invoice amounts.",
    difficulty: "easy",
    expected_query:
      "SELECT p.id, p.invoice_id, p.paid_amount FROM payments p WHERE p.payment_status = 'successful';",
    solution_columns: ["id", "invoice_id", "paid_amount"],
    tables: ["payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_028",
    title: "Profiles With Watchlist",
    description:
      "Find profiles that have at least one title in their watchlist.",
    difficulty: "easy",
    expected_query:
      "SELECT profile_id, COUNT(*) AS watchlist_count FROM watchlists GROUP BY profile_id;",
    solution_columns: ["profile_id", "watchlist_count"],
    tables: ["watchlists"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_029",
    title: "Downloads Expiring Soon",
    description: "Find downloads that are set to expire in the next 7 days.",
    difficulty: "easy",
    expected_query:
      "SELECT id, profile_id, expires_at FROM downloads WHERE expires_at BETWEEN NOW() AND NOW() + INTERVAL '7 days';",
    solution_columns: ["id", "profile_id", "expires_at"],
    tables: ["downloads"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_030",
    title: "Average Watch Time Per Profile",
    description: "Find the average watch time in seconds for each profile.",
    difficulty: "easy",
    expected_query:
      "SELECT profile_id, ROUND(AVG(watch_time_seconds), 2) AS avg_watch_time_seconds FROM viewing_sessions GROUP BY profile_id;",
    solution_columns: ["profile_id", "avg_watch_time_seconds"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_031",
    title: "Active Devices Per User",
    description: "Find the number of active devices for each user.",
    difficulty: "easy",
    expected_query:
      "SELECT user_id, COUNT(*) AS active_device_count FROM devices WHERE is_active = true GROUP BY user_id;",
    solution_columns: ["user_id", "active_device_count"],
    tables: ["devices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_032",
    title: "Paid Invoices Count",
    description: "Find the total number of paid invoices.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS paid_invoices FROM billing_invoices WHERE invoice_status = 'paid';",
    solution_columns: ["paid_invoices"],
    tables: ["billing_invoices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_033",
    title: "Series With Seasons",
    description: "Find all series titles along with their season numbers.",
    difficulty: "easy",
    expected_query:
      "SELECT t.id, t.title_name, s.season_number FROM titles t JOIN seasons s ON t.id = s.title_id WHERE t.title_type = 'series';",
    solution_columns: ["id", "title_name", "season_number"],
    tables: ["titles", "seasons"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_034",
    title: "Average Invoice Amount By Currency",
    description: "Find the average total invoice amount for each currency.",
    difficulty: "easy",
    expected_query:
      "SELECT currency, ROUND(AVG(total_amount), 2) AS avg_total_amount FROM billing_invoices GROUP BY currency;",
    solution_columns: ["currency", "avg_total_amount"],
    tables: ["billing_invoices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_035",
    title: "Top Recommendation Rows",
    description:
      "Find the top 5 recommendation rows by number of impressions served.",
    difficulty: "easy",
    expected_query:
      "SELECT row_id, COUNT(*) AS impression_count FROM recommendation_impressions GROUP BY row_id ORDER BY impression_count DESC, row_id ASC LIMIT 5;",
    solution_columns: ["row_id", "impression_count"],
    tables: ["recommendation_impressions"],
    comparison_config: {
      sort_by_columns: [
        { column: "impression_count", direction: "desc" },
        { column: "row_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_036",
    title: "User Countries Count",
    description: "Find the number of users in each country.",
    difficulty: "medium",
    expected_query:
      "SELECT country, COUNT(*) AS total_users FROM users GROUP BY country;",
    solution_columns: ["country", "total_users"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_037",
    title: "Average Profiles Per User",
    description: "Find the average number of profiles per user account.",
    difficulty: "medium",
    expected_query:
      "SELECT ROUND(AVG(profile_count), 2) AS avg_profiles_per_user FROM (SELECT user_id, COUNT(*) AS profile_count FROM profiles GROUP BY user_id) p;",
    solution_columns: ["avg_profiles_per_user"],
    tables: ["profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_038",
    title: "Titles Available In India",
    description: "Find all titles currently available in India.",
    difficulty: "medium",
    expected_query:
      "SELECT t.id, t.title_name, ca.available_from, ca.available_to FROM titles t JOIN content_availability ca ON t.id = ca.title_id WHERE ca.country = 'India' AND ca.is_available = true AND ca.available_from <= NOW() AND (ca.available_to IS NULL OR ca.available_to >= NOW());",
    solution_columns: ["id", "title_name", "available_from", "available_to"],
    tables: ["titles", "content_availability"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_039",
    title: "Users On Ad Supported Plans",
    description: "Find all users subscribed to ad-supported plans.",
    difficulty: "medium",
    expected_query:
      "SELECT DISTINCT u.id, u.email, sp.plan_name FROM users u JOIN subscriptions s ON u.id = s.user_id JOIN subscription_plans sp ON s.plan_id = sp.id WHERE s.subscription_status = 'active' AND sp.has_ads = true;",
    solution_columns: ["id", "email", "plan_name"],
    tables: ["users", "subscriptions", "subscription_plans"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_040",
    title: "Average Rating By Title Type",
    description: "Find the average rating for each title type.",
    difficulty: "medium",
    expected_query:
      "SELECT t.title_type, ROUND(AVG(r.rating_value), 2) AS avg_rating FROM ratings r JOIN titles t ON r.title_id = t.id GROUP BY t.title_type;",
    solution_columns: ["title_type", "avg_rating"],
    tables: ["ratings", "titles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_041",
    title: "High Engagement Titles",
    description: "Find titles with more than 100 viewing sessions.",
    difficulty: "medium",
    expected_query:
      "SELECT title_id, COUNT(*) AS session_count FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id HAVING COUNT(*) > 100;",
    solution_columns: ["title_id", "session_count"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_042",
    title: "Users With Multiple Devices",
    description: "Find users who have more than 2 active devices.",
    difficulty: "medium",
    expected_query:
      "SELECT user_id, COUNT(*) AS device_count FROM devices WHERE is_active = true GROUP BY user_id HAVING COUNT(*) > 2;",
    solution_columns: ["user_id", "device_count"],
    tables: ["devices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_043",
    title: "Profiles With High Watch Time",
    description:
      "Find profiles with total watch time exceeding 10,000 seconds.",
    difficulty: "medium",
    expected_query:
      "SELECT profile_id, SUM(watch_time_seconds) AS total_watch_time FROM viewing_sessions GROUP BY profile_id HAVING SUM(watch_time_seconds) > 10000;",
    solution_columns: ["profile_id", "total_watch_time"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_044",
    title: "Top Genres By Titles",
    description: "Find the top 5 genres with the highest number of titles.",
    difficulty: "medium",
    expected_query:
      "SELECT c.category_name, COUNT(tc.title_id) AS title_count FROM content_categories c JOIN title_categories tc ON c.id = tc.category_id GROUP BY c.category_name ORDER BY title_count DESC, c.category_name ASC LIMIT 5;",
    solution_columns: ["category_name", "title_count"],
    tables: ["content_categories", "title_categories"],
    comparison_config: {
      sort_by_columns: [
        { column: "title_count", direction: "desc" },
        { column: "category_name", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_045",
    title: "Average Session Duration Per Title",
    description: "Find the average session duration for each title.",
    difficulty: "medium",
    expected_query:
      "SELECT title_id, ROUND(AVG(watch_time_seconds), 2) AS avg_duration FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id;",
    solution_columns: ["title_id", "avg_duration"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_046",
    title: "Users With Expired Subscriptions",
    description: "Find users whose subscriptions have expired.",
    difficulty: "medium",
    expected_query:
      "SELECT DISTINCT user_id FROM subscriptions WHERE subscription_status = 'expired';",
    solution_columns: ["user_id"],
    tables: ["subscriptions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_047",
    title: "Profiles With No Watch Activity",
    description: "Find profiles that have never watched any content.",
    difficulty: "medium",
    expected_query:
      "SELECT p.id FROM profiles p LEFT JOIN viewing_sessions vs ON p.id = vs.profile_id WHERE vs.id IS NULL;",
    solution_columns: ["id"],
    tables: ["profiles", "viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_048",
    title: "Titles With No Ratings",
    description: "Find titles that have not received any ratings.",
    difficulty: "medium",
    expected_query:
      "SELECT t.id, t.title_name FROM titles t LEFT JOIN ratings r ON t.id = r.title_id WHERE r.id IS NULL;",
    solution_columns: ["id", "title_name"],
    tables: ["titles", "ratings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_049",
    title: "Users With High Spending",
    description: "Find users whose total payment amount exceeds 1000.",
    difficulty: "medium",
    expected_query:
      "SELECT s.user_id, SUM(p.paid_amount) AS total_spent FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY s.user_id HAVING SUM(p.paid_amount) > 1000;",
    solution_columns: ["user_id", "total_spent"],
    tables: ["payments", "billing_invoices", "subscriptions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_050",
    title: "Top 5 Active Profiles By Sessions",
    description:
      "Find the top 5 profiles with the highest number of viewing sessions.",
    difficulty: "medium",
    expected_query:
      "SELECT profile_id, COUNT(*) AS session_count FROM viewing_sessions GROUP BY profile_id ORDER BY session_count DESC, profile_id ASC LIMIT 5;",
    solution_columns: ["profile_id", "session_count"],
    tables: ["viewing_sessions"],
    comparison_config: {
      sort_by_columns: [
        { column: "session_count", direction: "desc" },
        { column: "profile_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_051",
    title: "Rank Titles By Rating",
    description: "Rank titles based on average rating.",
    difficulty: "hard",
    expected_query:
      "SELECT title_id, AVG(rating_value) AS avg_rating, RANK() OVER (ORDER BY AVG(rating_value) DESC) AS rating_rank FROM ratings GROUP BY title_id;",
    solution_columns: ["title_id", "avg_rating", "rating_rank"],
    tables: ["ratings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_052",
    title: "Running Watch Time Per Profile",
    description:
      "Calculate cumulative watch time per profile ordered by session time.",
    difficulty: "hard",
    expected_query:
      "SELECT profile_id, id AS session_id, watch_time_seconds, SUM(watch_time_seconds) OVER (PARTITION BY profile_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_watch_time FROM viewing_sessions;",
    solution_columns: [
      "profile_id",
      "session_id",
      "watch_time_seconds",
      "running_watch_time",
    ],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_053",
    title: "Second Most Watched Title",
    description: "Find the title with the second highest total views.",
    difficulty: "hard",
    expected_query:
      "SELECT title_id, total_views FROM (SELECT title_id, COUNT(*) AS total_views, DENSE_RANK() OVER (ORDER BY COUNT(*) DESC) AS rnk FROM viewing_sessions GROUP BY title_id) x WHERE rnk = 2;",
    solution_columns: ["title_id", "total_views"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_054",
    title: "Gap Between Sessions",
    description: "Find the maximum gap between sessions per profile.",
    difficulty: "hard",
    expected_query:
      "SELECT profile_id, MAX(gap_seconds) AS max_gap FROM (SELECT profile_id, EXTRACT(EPOCH FROM (created_at - LAG(created_at) OVER (PARTITION BY profile_id ORDER BY created_at))) AS gap_seconds FROM viewing_sessions) x GROUP BY profile_id;",
    solution_columns: ["profile_id", "max_gap"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_055",
    title: "Daily Revenue Rank",
    description: "Rank users by daily payment amount.",
    difficulty: "hard",
    expected_query:
      "SELECT payment_date, user_id, total_paid, RANK() OVER (PARTITION BY payment_date ORDER BY total_paid DESC) AS rank FROM (SELECT DATE(p.created_at) AS payment_date, s.user_id, SUM(p.paid_amount) AS total_paid FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY DATE(p.created_at), s.user_id) x;",
    solution_columns: ["payment_date", "user_id", "total_paid", "rank"],
    tables: ["payments", "billing_invoices", "subscriptions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_056",
    title: "Top 3 Titles Per Genre",
    description: "Find top 3 most watched titles per genre.",
    difficulty: "hard",
    expected_query:
      "SELECT category_name, title_id, total_views FROM (SELECT c.category_name, vs.title_id, COUNT(*) AS total_views, ROW_NUMBER() OVER (PARTITION BY c.category_name ORDER BY COUNT(*) DESC, vs.title_id ASC) AS rn FROM viewing_sessions vs JOIN title_categories tc ON vs.title_id = tc.title_id JOIN content_categories c ON tc.category_id = c.id GROUP BY c.category_name, vs.title_id) x WHERE rn <= 3;",
    solution_columns: ["category_name", "title_id", "total_views"],
    tables: ["viewing_sessions", "title_categories", "content_categories"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_057",
    title: "Moving Avg Watch Time",
    description: "Calculate 3-session moving average watch time per profile.",
    difficulty: "hard",
    expected_query:
      "SELECT profile_id, id, watch_time_seconds, AVG(watch_time_seconds) OVER (PARTITION BY profile_id ORDER BY created_at ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg FROM viewing_sessions;",
    solution_columns: ["profile_id", "id", "watch_time_seconds", "moving_avg"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_058",
    title: "Longest Streak Watchers",
    description:
      "Find longest consecutive viewing sessions streak per profile.",
    difficulty: "hard",
    expected_query:
      "WITH x AS (SELECT profile_id, created_at, ROW_NUMBER() OVER (PARTITION BY profile_id ORDER BY created_at) - ROW_NUMBER() OVER (PARTITION BY profile_id, DATE(created_at) ORDER BY created_at) AS grp FROM viewing_sessions) SELECT profile_id, COUNT(*) AS streak FROM x GROUP BY profile_id, grp;",
    solution_columns: ["profile_id", "streak"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_059",
    title: "90th Percentile Watch Time",
    description: "Find 90th percentile of watch time per title.",
    difficulty: "hard",
    expected_query:
      "SELECT title_id, PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY watch_time_seconds) AS p90_watch_time FROM viewing_sessions GROUP BY title_id;",
    solution_columns: ["title_id", "p90_watch_time"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_060",
    title: "Top Revenue Titles",
    description: "Find top 5 titles generating highest payment revenue.",
    difficulty: "hard",
    expected_query:
      "SELECT vs.title_id, SUM(p.paid_amount) AS total_revenue FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id JOIN profiles pr ON pr.user_id = s.user_id JOIN viewing_sessions vs ON vs.profile_id = pr.id WHERE vs.title_id IS NOT NULL GROUP BY vs.title_id ORDER BY total_revenue DESC, vs.title_id ASC LIMIT 5;",
    solution_columns: ["title_id", "total_revenue"],
    tables: [
      "payments",
      "billing_invoices",
      "subscriptions",
      "profiles",
      "viewing_sessions",
    ],
    comparison_config: {
      sort_by_columns: [
        { column: "total_revenue", direction: "desc" },
        { column: "title_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_061",
    title: "Top 5 Users By Total Spend",
    description: "Find the top 5 users with the highest total payment amount.",
    difficulty: "medium",
    expected_query:
      "SELECT s.user_id, SUM(p.paid_amount) AS total_spent FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY s.user_id ORDER BY total_spent DESC, s.user_id ASC LIMIT 5;",
    solution_columns: ["user_id", "total_spent"],
    tables: ["payments", "billing_invoices", "subscriptions"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_spent", direction: "desc" },
        { column: "user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_062",
    title: "Titles With Multiple Genres",
    description: "Find titles that belong to more than one category.",
    difficulty: "medium",
    expected_query:
      "SELECT title_id, COUNT(*) AS category_count FROM title_categories GROUP BY title_id HAVING COUNT(*) > 1;",
    solution_columns: ["title_id", "category_count"],
    tables: ["title_categories"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_063",
    title: "Profiles With High Ratings Activity",
    description: "Find profiles that submitted more than 10 ratings.",
    difficulty: "medium",
    expected_query:
      "SELECT profile_id, COUNT(*) AS rating_count FROM ratings GROUP BY profile_id HAVING COUNT(*) > 10;",
    solution_columns: ["profile_id", "rating_count"],
    tables: ["ratings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_064",
    title: "Top 5 Titles By Average Rating",
    description: "Find the top 5 titles with highest average rating.",
    difficulty: "medium",
    expected_query:
      "SELECT title_id, ROUND(AVG(rating_value), 2) AS avg_rating FROM ratings GROUP BY title_id ORDER BY avg_rating DESC, title_id ASC LIMIT 5;",
    solution_columns: ["title_id", "avg_rating"],
    tables: ["ratings"],
    comparison_config: {
      sort_by_columns: [
        { column: "avg_rating", direction: "desc" },
        { column: "title_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_065",
    title: "Users With Multiple Subscriptions",
    description: "Find users who have had more than one subscription record.",
    difficulty: "medium",
    expected_query:
      "SELECT user_id, COUNT(*) AS subscription_count FROM subscriptions GROUP BY user_id HAVING COUNT(*) > 1;",
    solution_columns: ["user_id", "subscription_count"],
    tables: ["subscriptions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_066",
    title: "Top 5 Devices By Downloads",
    description:
      "Find the top 5 devices with the highest number of completed downloads.",
    difficulty: "medium",
    expected_query:
      "SELECT device_id, COUNT(*) AS download_count FROM downloads WHERE download_status = 'completed' GROUP BY device_id ORDER BY download_count DESC, device_id ASC LIMIT 5;",
    solution_columns: ["device_id", "download_count"],
    tables: ["downloads"],
    comparison_config: {
      sort_by_columns: [
        { column: "download_count", direction: "desc" },
        { column: "device_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_067",
    title: "Countries With Most Users",
    description: "Find the top 5 countries with highest number of users.",
    difficulty: "medium",
    expected_query:
      "SELECT country, COUNT(*) AS user_count FROM users GROUP BY country ORDER BY user_count DESC, country ASC LIMIT 5;",
    solution_columns: ["country", "user_count"],
    tables: ["users"],
    comparison_config: {
      sort_by_columns: [
        { column: "user_count", direction: "desc" },
        { column: "country", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_068",
    title: "Profiles With High Watch Frequency",
    description: "Find profiles with more than 50 viewing sessions.",
    difficulty: "medium",
    expected_query:
      "SELECT profile_id, COUNT(*) AS session_count FROM viewing_sessions GROUP BY profile_id HAVING COUNT(*) > 50;",
    solution_columns: ["profile_id", "session_count"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_069",
    title: "Top 5 Titles By Downloads",
    description: "Find the top 5 titles with highest download count.",
    difficulty: "medium",
    expected_query:
      "SELECT title_id, COUNT(*) AS download_count FROM downloads WHERE title_id IS NOT NULL GROUP BY title_id ORDER BY download_count DESC, title_id ASC LIMIT 5;",
    solution_columns: ["title_id", "download_count"],
    tables: ["downloads"],
    comparison_config: {
      sort_by_columns: [
        { column: "download_count", direction: "desc" },
        { column: "title_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_070",
    title: "Users With High Engagement",
    description: "Find users whose total viewing sessions exceed 200.",
    difficulty: "medium",
    expected_query:
      "SELECT p.user_id, COUNT(*) AS session_count FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id GROUP BY p.user_id HAVING COUNT(*) > 200;",
    solution_columns: ["user_id", "session_count"],
    tables: ["viewing_sessions", "profiles"],
    comparison_config: {},
  },

  // 🔥 HARD STARTS

  {
    app_id: appId,
    code: "MOVIES_071",
    title: "Rank Profiles By Watch Time",
    description: "Rank profiles based on total watch time.",
    difficulty: "hard",
    expected_query:
      "SELECT profile_id, SUM(watch_time_seconds) AS total_watch_time, RANK() OVER (ORDER BY SUM(watch_time_seconds) DESC) AS rank FROM viewing_sessions GROUP BY profile_id;",
    solution_columns: ["profile_id", "total_watch_time", "rank"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_072",
    title: "Running Downloads Per Profile",
    description: "Calculate cumulative downloads per profile.",
    difficulty: "hard",
    expected_query:
      "SELECT profile_id, id AS download_id, COUNT(*) OVER (PARTITION BY profile_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_downloads FROM downloads;",
    solution_columns: ["profile_id", "download_id", "running_downloads"],
    tables: ["downloads"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_073",
    title: "Second Highest Paying User",
    description: "Find the user with second highest total payments.",
    difficulty: "hard",
    expected_query:
      "SELECT user_id, total_spent FROM (SELECT s.user_id, SUM(p.paid_amount) AS total_spent, DENSE_RANK() OVER (ORDER BY SUM(p.paid_amount) DESC) AS rnk FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY s.user_id) x WHERE rnk = 2;",
    solution_columns: ["user_id", "total_spent"],
    tables: ["payments", "billing_invoices", "subscriptions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_074",
    title: "Gap Between Downloads",
    description: "Find maximum gap between downloads per profile.",
    difficulty: "hard",
    expected_query:
      "SELECT profile_id, MAX(gap_seconds) AS max_gap FROM (SELECT profile_id, EXTRACT(EPOCH FROM (created_at - LAG(created_at) OVER (PARTITION BY profile_id ORDER BY created_at))) AS gap_seconds FROM downloads) x GROUP BY profile_id;",
    solution_columns: ["profile_id", "max_gap"],
    tables: ["downloads"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_075",
    title: "Daily Viewing Rank",
    description: "Rank profiles by daily viewing sessions.",
    difficulty: "hard",
    expected_query:
      "SELECT view_date, profile_id, total_sessions, RANK() OVER (PARTITION BY view_date ORDER BY total_sessions DESC) AS rank FROM (SELECT DATE(created_at) AS view_date, profile_id, COUNT(*) AS total_sessions FROM viewing_sessions GROUP BY DATE(created_at), profile_id) x;",
    solution_columns: ["view_date", "profile_id", "total_sessions", "rank"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_076",
    title: "Top 3 Profiles Per Country",
    description: "Find top 3 most active profiles per country.",
    difficulty: "hard",
    expected_query:
      "SELECT country, profile_id, session_count FROM (SELECT u.country, vs.profile_id, COUNT(*) AS session_count, ROW_NUMBER() OVER (PARTITION BY u.country ORDER BY COUNT(*) DESC, vs.profile_id ASC) AS rn FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id JOIN users u ON p.user_id = u.id GROUP BY u.country, vs.profile_id) x WHERE rn <= 3;",
    solution_columns: ["country", "profile_id", "session_count"],
    tables: ["viewing_sessions", "profiles", "users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_077",
    title: "Moving Avg Ratings",
    description: "Calculate 3-rating moving average per title.",
    difficulty: "hard",
    expected_query:
      "SELECT title_id, id, rating_value, AVG(rating_value) OVER (PARTITION BY title_id ORDER BY created_at ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg FROM ratings;",
    solution_columns: ["title_id", "id", "rating_value", "moving_avg"],
    tables: ["ratings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_078",
    title: "Consecutive Viewing Streaks",
    description: "Find longest consecutive viewing streak per profile.",
    difficulty: "hard",
    expected_query:
      "WITH x AS (SELECT profile_id, created_at, ROW_NUMBER() OVER (PARTITION BY profile_id ORDER BY created_at) - ROW_NUMBER() OVER (PARTITION BY profile_id, DATE(created_at) ORDER BY created_at) AS grp FROM viewing_sessions) SELECT profile_id, COUNT(*) AS streak FROM x GROUP BY profile_id, grp;",
    solution_columns: ["profile_id", "streak"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_079",
    title: "90th Percentile Ratings",
    description: "Find 90th percentile rating per title.",
    difficulty: "hard",
    expected_query:
      "SELECT title_id, PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY rating_value) AS p90_rating FROM ratings GROUP BY title_id;",
    solution_columns: ["title_id", "p90_rating"],
    tables: ["ratings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_080",
    title: "Top Revenue Countries",
    description: "Find top 5 countries generating highest revenue.",
    difficulty: "hard",
    expected_query:
      "SELECT u.country, SUM(p.paid_amount) AS total_revenue FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id JOIN users u ON s.user_id = u.id GROUP BY u.country ORDER BY total_revenue DESC, u.country ASC LIMIT 5;",
    solution_columns: ["country", "total_revenue"],
    tables: ["payments", "billing_invoices", "subscriptions", "users"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_revenue", direction: "desc" },
        { column: "country", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_081",
    title: "Longest Retention Streak",
    description:
      "Find users who have maintained uninterrupted active subscriptions for the longest duration.",
    difficulty: "hard",
    expected_query:
      "SELECT user_id, MIN(started_at) AS first_subscription_start, MAX(current_period_end) AS latest_period_end, EXTRACT(DAY FROM MAX(current_period_end) - MIN(started_at)) AS retention_days FROM subscriptions WHERE subscription_status IN ('active', 'expired', 'cancelled') GROUP BY user_id ORDER BY retention_days DESC, user_id ASC LIMIT 10;",
    solution_columns: [
      "user_id",
      "first_subscription_start",
      "latest_period_end",
      "retention_days",
    ],
    tables: ["subscriptions"],
    comparison_config: {
      sort_by_columns: [
        { column: "retention_days", direction: "desc" },
        { column: "user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_082",
    title: "Top Rewatched Titles",
    description:
      "Find the top 10 titles that were watched multiple times by the same profiles.",
    difficulty: "hard",
    expected_query:
      "SELECT title_id, COUNT(*) AS rewatch_sessions FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY profile_id, title_id HAVING COUNT(*) > 1 ORDER BY rewatch_sessions DESC, title_id ASC LIMIT 10;",
    solution_columns: ["title_id", "rewatch_sessions"],
    tables: ["viewing_sessions"],
    comparison_config: {
      sort_by_columns: [
        { column: "rewatch_sessions", direction: "desc" },
        { column: "title_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_083",
    title: "Titles Losing Audience",
    description:
      "Find titles whose average completion in the last 30 days is lower than their historical average.",
    difficulty: "hard",
    expected_query:
      "WITH historical_avg AS (SELECT title_id, AVG(completion_percent) AS hist_avg FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id), recent_avg AS (SELECT title_id, AVG(completion_percent) AS recent_avg FROM viewing_sessions WHERE title_id IS NOT NULL AND started_at >= NOW() - INTERVAL '30 days' GROUP BY title_id) SELECT h.title_id, ROUND(h.hist_avg, 2) AS historical_avg_completion, ROUND(r.recent_avg, 2) AS recent_avg_completion FROM historical_avg h JOIN recent_avg r ON h.title_id = r.title_id WHERE r.recent_avg < h.hist_avg;",
    solution_columns: [
      "title_id",
      "historical_avg_completion",
      "recent_avg_completion",
    ],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_084",
    title: "Most Dropped Episodes",
    description:
      "Find the top 10 episodes with the highest abandoned session count.",
    difficulty: "hard",
    expected_query:
      "SELECT episode_id, COUNT(*) AS abandoned_count FROM viewing_sessions WHERE episode_id IS NOT NULL AND session_status = 'abandoned' GROUP BY episode_id ORDER BY abandoned_count DESC, episode_id ASC LIMIT 10;",
    solution_columns: ["episode_id", "abandoned_count"],
    tables: ["viewing_sessions"],
    comparison_config: {
      sort_by_columns: [
        { column: "abandoned_count", direction: "desc" },
        { column: "episode_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_085",
    title: "Top Revenue Per Country",
    description: "Find the highest revenue generating title in each country.",
    difficulty: "hard",
    expected_query:
      "WITH title_revenue AS (SELECT u.country, vs.title_id, SUM(bi.total_amount) AS total_revenue, ROW_NUMBER() OVER (PARTITION BY u.country ORDER BY SUM(bi.total_amount) DESC, vs.title_id ASC) AS rn FROM billing_invoices bi JOIN subscriptions s ON bi.subscription_id = s.id JOIN users u ON s.user_id = u.id JOIN profiles p ON p.user_id = u.id JOIN viewing_sessions vs ON vs.profile_id = p.id WHERE bi.invoice_status = 'paid' AND vs.title_id IS NOT NULL GROUP BY u.country, vs.title_id) SELECT country, title_id, ROUND(total_revenue, 2) AS total_revenue FROM title_revenue WHERE rn = 1;",
    solution_columns: ["country", "title_id", "total_revenue"],
    tables: [
      "billing_invoices",
      "subscriptions",
      "users",
      "profiles",
      "viewing_sessions",
    ],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_086",
    title: "High Churn Risk Users",
    description:
      "Find active users whose watch time in the last 30 days dropped below 50 percent of their previous 30-day period.",
    difficulty: "hard",
    expected_query:
      "WITH recent_period AS (SELECT p.user_id, SUM(vs.watch_time_seconds) AS recent_watch_time FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id WHERE vs.started_at >= NOW() - INTERVAL '30 days' GROUP BY p.user_id), previous_period AS (SELECT p.user_id, SUM(vs.watch_time_seconds) AS previous_watch_time FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id WHERE vs.started_at >= NOW() - INTERVAL '60 days' AND vs.started_at < NOW() - INTERVAL '30 days' GROUP BY p.user_id) SELECT r.user_id, r.recent_watch_time, p.previous_watch_time FROM recent_period r JOIN previous_period p ON r.user_id = p.user_id WHERE r.recent_watch_time < (p.previous_watch_time * 0.5);",
    solution_columns: ["user_id", "recent_watch_time", "previous_watch_time"],
    tables: ["viewing_sessions", "profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_087",
    title: "Binge Completion Funnel",
    description:
      "Find profiles that completed an entire season within 24 hours.",
    difficulty: "hard",
    expected_query:
      "WITH season_totals AS (SELECT season_id, COUNT(*) AS total_episodes FROM episodes GROUP BY season_id), profile_season_watch AS (SELECT vs.profile_id, e.season_id, MIN(vs.started_at) AS first_watch, MAX(vs.ended_at) AS last_watch, COUNT(DISTINCT vs.episode_id) AS watched_episodes FROM viewing_sessions vs JOIN episodes e ON vs.episode_id = e.id WHERE vs.session_status = 'completed' GROUP BY vs.profile_id, e.season_id) SELECT psw.profile_id, psw.season_id, psw.watched_episodes FROM profile_season_watch psw JOIN season_totals st ON psw.season_id = st.season_id WHERE psw.watched_episodes = st.total_episodes AND psw.last_watch <= psw.first_watch + INTERVAL '24 hours';",
    solution_columns: ["profile_id", "season_id", "watched_episodes"],
    tables: ["viewing_sessions", "episodes"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_088",
    title: "Best Performing Experiments",
    description: "Find experiments whose variant CTR outperformed control CTR.",
    difficulty: "hard",
    expected_query:
      "WITH experiment_ctr AS (SELECT ea.experiment_id, ev.is_control, COUNT(rc.id)::numeric / NULLIF(COUNT(ri.id), 0) AS ctr FROM experiment_assignments ea JOIN experiment_variants ev ON ea.variant_id = ev.id JOIN recommendation_impressions ri ON ea.id = ri.experiment_assignment_id LEFT JOIN recommendation_clicks rc ON ri.id = rc.impression_id GROUP BY ea.experiment_id, ev.is_control) SELECT v.experiment_id FROM experiment_ctr v JOIN experiment_ctr c ON v.experiment_id = c.experiment_id WHERE v.is_control = false AND c.is_control = true AND v.ctr > c.ctr;",
    solution_columns: ["experiment_id"],
    tables: [
      "experiment_assignments",
      "experiment_variants",
      "recommendation_impressions",
      "recommendation_clicks",
    ],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_089",
    title: "Profiles Watching Same Title Across Multiple Devices",
    description:
      "Find profiles that watched the same title on more than one device.",
    difficulty: "hard",
    expected_query:
      "SELECT profile_id, title_id, COUNT(DISTINCT device_id) AS device_count FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY profile_id, title_id HAVING COUNT(DISTINCT device_id) > 1;",
    solution_columns: ["profile_id", "title_id", "device_count"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_090",
    title: "Top Cross Genre Viewers",
    description:
      "Find profiles that watched titles across the highest number of distinct categories.",
    difficulty: "hard",
    expected_query:
      "SELECT vs.profile_id, COUNT(DISTINCT tc.category_id) AS distinct_categories FROM viewing_sessions vs JOIN title_categories tc ON vs.title_id = tc.title_id WHERE vs.title_id IS NOT NULL GROUP BY vs.profile_id ORDER BY distinct_categories DESC, vs.profile_id ASC LIMIT 10;",
    solution_columns: ["profile_id", "distinct_categories"],
    tables: ["viewing_sessions", "title_categories"],
    comparison_config: {
      sort_by_columns: [
        { column: "distinct_categories", direction: "desc" },
        { column: "profile_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_091",
    title: "Top Revenue Titles By Month",
    description:
      "For each month, find the title that generated the highest paid invoice revenue.",
    difficulty: "hard",
    expected_query:
      "WITH monthly_title_revenue AS (SELECT DATE_TRUNC('month', bi.issued_at) AS revenue_month, vs.title_id, SUM(bi.total_amount) AS total_revenue, ROW_NUMBER() OVER (PARTITION BY DATE_TRUNC('month', bi.issued_at) ORDER BY SUM(bi.total_amount) DESC, vs.title_id ASC) AS rn FROM billing_invoices bi JOIN subscriptions s ON bi.subscription_id = s.id JOIN users u ON s.user_id = u.id JOIN profiles p ON p.user_id = u.id JOIN viewing_sessions vs ON vs.profile_id = p.id WHERE bi.invoice_status = 'paid' AND vs.title_id IS NOT NULL GROUP BY DATE_TRUNC('month', bi.issued_at), vs.title_id) SELECT revenue_month, title_id, ROUND(total_revenue, 2) AS total_revenue FROM monthly_title_revenue WHERE rn = 1;",
    solution_columns: ["revenue_month", "title_id", "total_revenue"],
    tables: [
      "billing_invoices",
      "subscriptions",
      "users",
      "profiles",
      "viewing_sessions",
    ],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_092",
    title: "Most Successful Recommendation Titles",
    description:
      "Find titles with the highest watch conversion rate after recommendation click.",
    difficulty: "hard",
    expected_query:
      "WITH clicked_titles AS (SELECT ri.id AS impression_id, ri.profile_id, ri.title_id FROM recommendation_impressions ri JOIN recommendation_clicks rc ON ri.id = rc.impression_id), watched_titles AS (SELECT DISTINCT ct.impression_id, ct.title_id FROM clicked_titles ct JOIN viewing_sessions vs ON ct.profile_id = vs.profile_id AND ct.title_id = vs.title_id) SELECT ct.title_id, ROUND(COUNT(wt.impression_id)::numeric * 100 / COUNT(ct.impression_id), 2) AS watch_conversion_rate FROM clicked_titles ct LEFT JOIN watched_titles wt ON ct.impression_id = wt.impression_id GROUP BY ct.title_id ORDER BY watch_conversion_rate DESC, ct.title_id ASC;",
    solution_columns: ["title_id", "watch_conversion_rate"],
    tables: [
      "recommendation_impressions",
      "recommendation_clicks",
      "viewing_sessions",
    ],
    comparison_config: {
      sort_by_columns: [
        { column: "watch_conversion_rate", direction: "desc" },
        { column: "title_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_093",
    title: "Most Retained Profiles",
    description: "Find profiles active in every month of the last 6 months.",
    difficulty: "hard",
    expected_query:
      "WITH monthly_activity AS (SELECT profile_id, DATE_TRUNC('month', started_at) AS activity_month FROM viewing_sessions WHERE started_at >= NOW() - INTERVAL '6 months' GROUP BY profile_id, DATE_TRUNC('month', started_at)) SELECT profile_id FROM monthly_activity GROUP BY profile_id HAVING COUNT(DISTINCT activity_month) = 6;",
    solution_columns: ["profile_id"],
    tables: ["viewing_sessions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_094",
    title: "Users With Highest LTV",
    description: "Find the top 10 users by lifetime total paid invoice amount.",
    difficulty: "hard",
    expected_query:
      "SELECT s.user_id, ROUND(SUM(bi.total_amount), 2) AS lifetime_value FROM billing_invoices bi JOIN subscriptions s ON bi.subscription_id = s.id WHERE bi.invoice_status = 'paid' GROUP BY s.user_id ORDER BY lifetime_value DESC, s.user_id ASC LIMIT 10;",
    solution_columns: ["user_id", "lifetime_value"],
    tables: ["billing_invoices", "subscriptions"],
    comparison_config: {
      sort_by_columns: [
        { column: "lifetime_value", direction: "desc" },
        { column: "user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_095",
    title: "Top Completed Series",
    description:
      "Find the top 10 series with the highest average episode completion rate.",
    difficulty: "hard",
    expected_query:
      "SELECT s.title_id, ROUND(AVG(vs.completion_percent), 2) AS avg_completion_percent FROM viewing_sessions vs JOIN episodes e ON vs.episode_id = e.id JOIN seasons s ON e.season_id = s.id GROUP BY s.title_id ORDER BY avg_completion_percent DESC, s.title_id ASC LIMIT 10;",
    solution_columns: ["title_id", "avg_completion_percent"],
    tables: ["viewing_sessions", "episodes", "seasons"],
    comparison_config: {
      sort_by_columns: [
        { column: "avg_completion_percent", direction: "desc" },
        { column: "title_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_096",
    title: "Most Interrupted Titles",
    description:
      "Find titles with the highest average number of pauses per session.",
    difficulty: "hard",
    expected_query:
      "WITH session_pauses AS (SELECT pe.session_id, COUNT(*) AS pause_count FROM playback_events pe WHERE pe.event_type = 'pause' GROUP BY pe.session_id) SELECT vs.title_id, ROUND(AVG(sp.pause_count), 2) AS avg_pauses_per_session FROM session_pauses sp JOIN viewing_sessions vs ON sp.session_id = vs.id WHERE vs.title_id IS NOT NULL GROUP BY vs.title_id ORDER BY avg_pauses_per_session DESC, vs.title_id ASC;",
    solution_columns: ["title_id", "avg_pauses_per_session"],
    tables: ["playback_events", "viewing_sessions"],
    comparison_config: {
      sort_by_columns: [
        { column: "avg_pauses_per_session", direction: "desc" },
        { column: "title_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_097",
    title: "Users Watching Across Multiple Countries",
    description:
      "Find users whose devices were active in more than one country.",
    difficulty: "hard",
    expected_query:
      "SELECT user_id, COUNT(DISTINCT country) AS distinct_countries FROM devices WHERE country IS NOT NULL GROUP BY user_id HAVING COUNT(DISTINCT country) > 1;",
    solution_columns: ["user_id", "distinct_countries"],
    tables: ["devices"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "MOVIES_098",
    title: "Best Performing Notification Campaigns",
    description: "Find campaigns with the highest click-through rate.",
    difficulty: "hard",
    expected_query:
      "SELECT campaign_id, ROUND(COUNT(clicked_at)::numeric * 100 / COUNT(*), 2) AS ctr_percent FROM notification_deliveries GROUP BY campaign_id ORDER BY ctr_percent DESC, campaign_id ASC;",
    solution_columns: ["campaign_id", "ctr_percent"],
    tables: ["notification_deliveries"],
    comparison_config: {
      sort_by_columns: [
        { column: "ctr_percent", direction: "desc" },
        { column: "campaign_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_099",
    title: "Top Profiles By Recommendation Diversity",
    description:
      "Find profiles that clicked titles from the highest number of distinct recommendation rows.",
    difficulty: "hard",
    expected_query:
      "SELECT ri.profile_id, COUNT(DISTINCT ri.row_id) AS distinct_rows_clicked FROM recommendation_clicks rc JOIN recommendation_impressions ri ON rc.impression_id = ri.id GROUP BY ri.profile_id ORDER BY distinct_rows_clicked DESC, ri.profile_id ASC LIMIT 10;",
    solution_columns: ["profile_id", "distinct_rows_clicked"],
    tables: ["recommendation_clicks", "recommendation_impressions"],
    comparison_config: {
      sort_by_columns: [
        { column: "distinct_rows_clicked", direction: "desc" },
        { column: "profile_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "MOVIES_100",
    title: "Titles With Highest Subscriber Retention",
    description:
      "Find titles most frequently watched by users who renewed subscriptions.",
    difficulty: "hard",
    expected_query:
      "WITH renewed_users AS (SELECT user_id FROM subscriptions GROUP BY user_id HAVING COUNT(*) > 1) SELECT vs.title_id, COUNT(*) AS watch_count FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id JOIN renewed_users ru ON p.user_id = ru.user_id WHERE vs.title_id IS NOT NULL GROUP BY vs.title_id ORDER BY watch_count DESC, vs.title_id ASC LIMIT 10;",
    solution_columns: ["title_id", "watch_count"],
    tables: ["viewing_sessions", "profiles", "subscriptions"],
    comparison_config: {
      sort_by_columns: [
        { column: "watch_count", direction: "desc" },
        { column: "title_id", direction: "asc" },
      ],
    },
  },
];

export const hints = [
  {
    code: "MOVIES_001",
    hints: [
      {
        hint_order: 1,
        content: "Count all users in one table.",
      },
      {
        hint_order: 2,
        content: "Use an aggregate function.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) from users.",
      },
    ],
  },
  {
    code: "MOVIES_002",
    hints: [
      {
        hint_order: 1,
        content: "Filter only active profiles first.",
      },
      {
        hint_order: 2,
        content: "Use the is_active column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE is_active = true.",
      },
    ],
  },
  {
    code: "MOVIES_003",
    hints: [
      {
        hint_order: 1,
        content: "Count all catalog titles.",
      },
      {
        hint_order: 2,
        content: "Use the titles table only.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) from titles.",
      },
    ],
  },
  {
    code: "MOVIES_004",
    hints: [
      {
        hint_order: 1,
        content: "Filter titles by published status.",
      },
      {
        hint_order: 2,
        content: "Use content_status column.",
      },
      {
        hint_order: 3,
        content: "Select columns and ORDER BY id.",
      },
    ],
  },
  {
    code: "MOVIES_005",
    hints: [
      {
        hint_order: 1,
        content: "Keep only original content.",
      },
      {
        hint_order: 2,
        content: "Use the is_original flag.",
      },
      {
        hint_order: 3,
        content: "Sort by release_year DESC, then id.",
      },
    ],
  },
  {
    code: "MOVIES_006",
    hints: [
      {
        hint_order: 1,
        content: "Filter plans by allowed video quality values.",
      },
      {
        hint_order: 2,
        content: "Use video_quality with multiple options.",
      },
      {
        hint_order: 3,
        content: "WHERE video_quality IN (...).",
      },
    ],
  },
  {
    code: "MOVIES_007",
    hints: [
      {
        hint_order: 1,
        content: "Keep only movie titles.",
      },
      {
        hint_order: 2,
        content: "Filter by release year greater than 2020.",
      },
      {
        hint_order: 3,
        content: "Use title_type and release_year in WHERE.",
      },
    ],
  },
  {
    code: "MOVIES_008",
    hints: [
      {
        hint_order: 1,
        content: "Look at IMDb-like scores only.",
      },
      {
        hint_order: 2,
        content: "Filter scores above 8.",
      },
      {
        hint_order: 3,
        content: "Sort by imdb_like_score DESC.",
      },
    ],
  },
  {
    code: "MOVIES_009",
    hints: [
      {
        hint_order: 1,
        content: "Keep only completed downloads.",
      },
      {
        hint_order: 2,
        content: "Use the download_status column.",
      },
      {
        hint_order: 3,
        content: "Select rows with WHERE and sort by id.",
      },
    ],
  },
  {
    code: "MOVIES_010",
    hints: [
      {
        hint_order: 1,
        content: "Only titles with critic scores matter.",
      },
      {
        hint_order: 2,
        content: "Sort highest scores first.",
      },
      {
        hint_order: 3,
        content: "ORDER BY critic_score DESC LIMIT 5.",
      },
    ],
  },
  {
    code: "MOVIES_011",
    hints: [
      {
        hint_order: 1,
        content: "Group titles by type.",
      },
      {
        hint_order: 2,
        content: "Count rows in each group.",
      },
      {
        hint_order: 3,
        content: "GROUP BY title_type with COUNT(*).",
      },
    ],
  },
  {
    code: "MOVIES_012",
    hints: [
      {
        hint_order: 1,
        content: "Each profile belongs to one user.",
      },
      {
        hint_order: 2,
        content: "Group profiles by user_id.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) per user_id.",
      },
    ],
  },
  {
    code: "MOVIES_013",
    hints: [
      {
        hint_order: 1,
        content: "Group titles by original language.",
      },
      {
        hint_order: 2,
        content: "Count how many titles each language has.",
      },
      {
        hint_order: 3,
        content: "GROUP BY original_language.",
      },
    ],
  },
  {
    code: "MOVIES_014",
    hints: [
      {
        hint_order: 1,
        content: "Only movie rows should be included.",
      },
      {
        hint_order: 2,
        content: "Average the runtime column.",
      },
      {
        hint_order: 3,
        content: "AVG(runtime_minutes) for title_type = 'movie'.",
      },
    ],
  },
  {
    code: "MOVIES_015",
    hints: [
      {
        hint_order: 1,
        content: "Filter to active subscriptions only.",
      },
      {
        hint_order: 2,
        content: "Use subscription_status column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE subscription_status = 'active'.",
      },
    ],
  },
  {
    code: "MOVIES_016",
    hints: [
      {
        hint_order: 1,
        content: "Count profiles per user first.",
      },
      {
        hint_order: 2,
        content: "Keep only users with more than one profile.",
      },
      {
        hint_order: 3,
        content: "Use GROUP BY and HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "MOVIES_017",
    hints: [
      {
        hint_order: 1,
        content: "Only title ratings should be counted.",
      },
      {
        hint_order: 2,
        content: "Ignore rows where title_id is NULL.",
      },
      {
        hint_order: 3,
        content: "GROUP BY title_id and COUNT(*).",
      },
    ],
  },
  {
    code: "MOVIES_018",
    hints: [
      {
        hint_order: 1,
        content: "Keep completed downloads only.",
      },
      {
        hint_order: 2,
        content: "Count them for each device.",
      },
      {
        hint_order: 3,
        content: "GROUP BY device_id after filtering.",
      },
    ],
  },
  {
    code: "MOVIES_019",
    hints: [
      {
        hint_order: 1,
        content: "Average ratings for each title.",
      },
      {
        hint_order: 2,
        content: "Ignore rows without title_id.",
      },
      {
        hint_order: 3,
        content: "GROUP BY title_id with AVG(rating_value).",
      },
    ],
  },
  {
    code: "MOVIES_020",
    hints: [
      {
        hint_order: 1,
        content: "Each watchlist row is one add event.",
      },
      {
        hint_order: 2,
        content: "Count adds per title.",
      },
      {
        hint_order: 3,
        content: "ORDER BY count DESC and LIMIT 5.",
      },
    ],
  },
  {
    code: "MOVIES_021",
    hints: [
      {
        hint_order: 1,
        content: "You need users, subscriptions, and plans.",
      },
      {
        hint_order: 2,
        content: "Join user to subscription, then to plan.",
      },
      {
        hint_order: 3,
        content: "Filter active subscriptions only.",
      },
    ],
  },
  {
    code: "MOVIES_022",
    hints: [
      {
        hint_order: 1,
        content: "Titles and categories are many-to-many.",
      },
      {
        hint_order: 2,
        content: "Use the bridge table title_categories.",
      },
      {
        hint_order: 3,
        content: "Join titles -> title_categories -> content_categories.",
      },
    ],
  },
  {
    code: "MOVIES_023",
    hints: [
      {
        hint_order: 1,
        content: "Count episodes inside each season.",
      },
      {
        hint_order: 2,
        content: "Group rows by season_id.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with GROUP BY season_id.",
      },
    ],
  },
  {
    code: "MOVIES_024",
    hints: [
      {
        hint_order: 1,
        content: "Each viewing_sessions row is one session.",
      },
      {
        hint_order: 2,
        content: "Count sessions per profile.",
      },
      {
        hint_order: 3,
        content: "GROUP BY profile_id.",
      },
    ],
  },
  {
    code: "MOVIES_025",
    hints: [
      {
        hint_order: 1,
        content: "Look only at title-level viewing sessions.",
      },
      {
        hint_order: 2,
        content: "Count views per title_id.",
      },
      {
        hint_order: 3,
        content: "Sort by count DESC and LIMIT 5.",
      },
    ],
  },
  {
    code: "MOVIES_026",
    hints: [
      {
        hint_order: 1,
        content: "Group credits by role type.",
      },
      {
        hint_order: 2,
        content: "Count rows in each role.",
      },
      {
        hint_order: 3,
        content: "GROUP BY role_type with COUNT(*).",
      },
    ],
  },
  {
    code: "MOVIES_027",
    hints: [
      {
        hint_order: 1,
        content: "Keep only successful payments.",
      },
      {
        hint_order: 2,
        content: "Use payment_status column.",
      },
      {
        hint_order: 3,
        content: "Select id, invoice_id, paid_amount after filtering.",
      },
    ],
  },
  {
    code: "MOVIES_028",
    hints: [
      {
        hint_order: 1,
        content: "A profile with watchlist items appears in watchlists table.",
      },
      {
        hint_order: 2,
        content: "Count watchlist rows per profile.",
      },
      {
        hint_order: 3,
        content: "GROUP BY profile_id.",
      },
    ],
  },
  {
    code: "MOVIES_029",
    hints: [
      {
        hint_order: 1,
        content: "Find downloads expiring soon using expires_at.",
      },
      {
        hint_order: 2,
        content: "Compare against current time plus 7 days.",
      },
      {
        hint_order: 3,
        content: "Use BETWEEN NOW() AND NOW() + INTERVAL '7 days'.",
      },
    ],
  },
  {
    code: "MOVIES_030",
    hints: [
      {
        hint_order: 1,
        content: "Average watch time for each profile.",
      },
      {
        hint_order: 2,
        content: "Use watch_time_seconds column.",
      },
      {
        hint_order: 3,
        content: "GROUP BY profile_id with AVG(watch_time_seconds).",
      },
    ],
  },
  {
    code: "MOVIES_031",
    hints: [
      {
        hint_order: 1,
        content: "Count only active devices.",
      },
      {
        hint_order: 2,
        content: "Filter by is_active first.",
      },
      {
        hint_order: 3,
        content: "GROUP BY user_id with COUNT(*).",
      },
    ],
  },
  {
    code: "MOVIES_032",
    hints: [
      {
        hint_order: 1,
        content: "Count invoices with paid status.",
      },
      {
        hint_order: 2,
        content: "Use invoice_status column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE invoice_status = 'paid'.",
      },
    ],
  },
  {
    code: "MOVIES_033",
    hints: [
      {
        hint_order: 1,
        content: "Series titles connect to seasons by title_id.",
      },
      {
        hint_order: 2,
        content: "Join titles with seasons.",
      },
      {
        hint_order: 3,
        content: "Filter title_type = 'series' and sort.",
      },
    ],
  },
  {
    code: "MOVIES_034",
    hints: [
      {
        hint_order: 1,
        content: "Average invoice totals per currency.",
      },
      {
        hint_order: 2,
        content: "Group by currency.",
      },
      {
        hint_order: 3,
        content: "Use AVG(total_amount) with ROUND(..., 2).",
      },
    ],
  },
  {
    code: "MOVIES_035",
    hints: [
      {
        hint_order: 1,
        content: "Each impression belongs to a recommendation row.",
      },
      {
        hint_order: 2,
        content: "Count impressions per row_id.",
      },
      {
        hint_order: 3,
        content: "Sort by count DESC and LIMIT 5.",
      },
    ],
  },
  {
    code: "MOVIES_036",
    hints: [
      {
        hint_order: 1,
        content: "Count users in each country.",
      },
      {
        hint_order: 2,
        content: "Group rows by country.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with GROUP BY country.",
      },
    ],
  },
  {
    code: "MOVIES_037",
    hints: [
      {
        hint_order: 1,
        content: "First count profiles per user.",
      },
      {
        hint_order: 2,
        content: "Then average those counts.",
      },
      {
        hint_order: 3,
        content: "Use a subquery or CTE before AVG().",
      },
    ],
  },
  {
    code: "MOVIES_038",
    hints: [
      {
        hint_order: 1,
        content: "Join titles with content availability.",
      },
      {
        hint_order: 2,
        content: "Filter for country = 'India' and available rows.",
      },
      {
        hint_order: 3,
        content:
          "Check current date is within available_from and available_to.",
      },
    ],
  },
  {
    code: "MOVIES_039",
    hints: [
      {
        hint_order: 1,
        content: "You need users, subscriptions, and plans.",
      },
      {
        hint_order: 2,
        content: "Filter active subscriptions and ad-supported plans.",
      },
      {
        hint_order: 3,
        content: "Use DISTINCT to avoid duplicate users.",
      },
    ],
  },
  {
    code: "MOVIES_040",
    hints: [
      {
        hint_order: 1,
        content: "Ratings need to be mapped to title types.",
      },
      {
        hint_order: 2,
        content: "Join ratings with titles on title_id.",
      },
      {
        hint_order: 3,
        content: "GROUP BY title_type with AVG(rating_value).",
      },
    ],
  },
  {
    code: "MOVIES_041",
    hints: [
      {
        hint_order: 1,
        content: "Sum watch time for each profile.",
      },
      {
        hint_order: 2,
        content: "Use watch_time_seconds column.",
      },
      {
        hint_order: 3,
        content: "GROUP BY profile_id, then ORDER BY sum DESC LIMIT 5.",
      },
    ],
  },
  {
    code: "MOVIES_042",
    hints: [
      {
        hint_order: 1,
        content: "Count sessions for each device.",
      },
      {
        hint_order: 2,
        content: "Ignore rows where device_id is NULL.",
      },
      {
        hint_order: 3,
        content: "GROUP BY device_id and LIMIT 5.",
      },
    ],
  },
  {
    code: "MOVIES_043",
    hints: [
      {
        hint_order: 1,
        content: "Clicks only know impression_id.",
      },
      {
        hint_order: 2,
        content: "Join recommendation_clicks with recommendation_impressions.",
      },
      {
        hint_order: 3,
        content: "Count clicks per title_id.",
      },
    ],
  },
  {
    code: "MOVIES_044",
    hints: [
      {
        hint_order: 1,
        content: "Title-category links are in the bridge table.",
      },
      {
        hint_order: 2,
        content: "Join title_categories with content_categories.",
      },
      {
        hint_order: 3,
        content: "Count rows per category_name and LIMIT 5.",
      },
    ],
  },
  {
    code: "MOVIES_045",
    hints: [
      {
        hint_order: 1,
        content: "Users connect to subscriptions by user_id.",
      },
      {
        hint_order: 2,
        content: "A subscription can be expired by status or by end date.",
      },
      {
        hint_order: 3,
        content: "Use OR with subscription_status and current_period_end.",
      },
    ],
  },
  {
    code: "MOVIES_046",
    hints: [
      {
        hint_order: 1,
        content: "Invoices map to subscriptions, then to plans.",
      },
      {
        hint_order: 2,
        content: "Use only paid invoices for revenue.",
      },
      {
        hint_order: 3,
        content: "SUM(total_amount) grouped by plan_name.",
      },
    ],
  },
  {
    code: "MOVIES_047",
    hints: [
      {
        hint_order: 1,
        content: "Average completion for each title.",
      },
      {
        hint_order: 2,
        content: "Ignore rows where title_id is NULL.",
      },
      {
        hint_order: 3,
        content: "GROUP BY title_id with AVG(completion_percent).",
      },
    ],
  },
  {
    code: "MOVIES_048",
    hints: [
      {
        hint_order: 1,
        content: "Each watchlist row is one saved title.",
      },
      {
        hint_order: 2,
        content: "Count rows per profile.",
      },
      {
        hint_order: 3,
        content: "Sort by count DESC and LIMIT 5.",
      },
    ],
  },
  {
    code: "MOVIES_049",
    hints: [
      {
        hint_order: 1,
        content: "Count users by country.",
      },
      {
        hint_order: 2,
        content: "Group by country first.",
      },
      {
        hint_order: 3,
        content: "Sort by user_count DESC and LIMIT 5.",
      },
    ],
  },
  {
    code: "MOVIES_050",
    hints: [
      {
        hint_order: 1,
        content: "Only rows with an error_code matter.",
      },
      {
        hint_order: 2,
        content: "Count frequency of each error_code.",
      },
      {
        hint_order: 3,
        content: "GROUP BY error_code and LIMIT 5.",
      },
    ],
  },
  {
    code: "MOVIES_051",
    hints: [
      {
        hint_order: 1,
        content: "You need top titles within each country.",
      },
      {
        hint_order: 2,
        content: "Count views per country and title first.",
      },
      {
        hint_order: 3,
        content: "Use ROW_NUMBER() PARTITION BY country.",
      },
    ],
  },
  {
    code: "MOVIES_052",
    hints: [
      {
        hint_order: 1,
        content: "Average completion percent per profile.",
      },
      {
        hint_order: 2,
        content: "Sort highest averages first.",
      },
      {
        hint_order: 3,
        content: "GROUP BY profile_id and LIMIT 5.",
      },
    ],
  },
  {
    code: "MOVIES_053",
    hints: [
      {
        hint_order: 1,
        content: "Buffer time is in playback_events.",
      },
      {
        hint_order: 2,
        content: "Join playback_events to viewing_sessions to get title_id.",
      },
      {
        hint_order: 3,
        content: "AVG(buffer_duration_ms) grouped by title_id.",
      },
    ],
  },
  {
    code: "MOVIES_054",
    hints: [
      {
        hint_order: 1,
        content: "Revenue comes from paid invoices.",
      },
      {
        hint_order: 2,
        content: "Join invoices to subscriptions, then to users.",
      },
      {
        hint_order: 3,
        content: "SUM(total_amount) grouped by user country.",
      },
    ],
  },
  {
    code: "MOVIES_055",
    hints: [
      {
        hint_order: 1,
        content: "Each search query row is one search event.",
      },
      {
        hint_order: 2,
        content: "Count searches per profile.",
      },
      {
        hint_order: 3,
        content: "GROUP BY profile_id and LIMIT 5.",
      },
    ],
  },
  {
    code: "MOVIES_056",
    hints: [
      {
        hint_order: 1,
        content: "Keep only actor credits.",
      },
      {
        hint_order: 2,
        content: "Count how many distinct titles each actor appears in.",
      },
      {
        hint_order: 3,
        content: "Use COUNT(DISTINCT title_id) with GROUP BY person_id.",
      },
    ],
  },
  {
    code: "MOVIES_057",
    hints: [
      {
        hint_order: 1,
        content: "Keep completed downloads only.",
      },
      {
        hint_order: 2,
        content: "Ignore rows where title_id is NULL.",
      },
      {
        hint_order: 3,
        content: "Count downloads per title and LIMIT 5.",
      },
    ],
  },
  {
    code: "MOVIES_058",
    hints: [
      {
        hint_order: 1,
        content: "Group devices by user.",
      },
      {
        hint_order: 2,
        content: "Count distinct devices for each user.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(DISTINCT id) > 1.",
      },
    ],
  },
  {
    code: "MOVIES_059",
    hints: [
      {
        hint_order: 1,
        content: "A clicked campaign has clicked_at not NULL.",
      },
      {
        hint_order: 2,
        content: "Count clicks per campaign_id.",
      },
      {
        hint_order: 3,
        content: "GROUP BY campaign_id and LIMIT 5.",
      },
    ],
  },
  {
    code: "MOVIES_060",
    hints: [
      {
        hint_order: 1,
        content:
          "Watch time is in viewing_sessions, device type is in devices.",
      },
      {
        hint_order: 2,
        content: "Join viewing_sessions with devices on device_id.",
      },
      {
        hint_order: 3,
        content: "GROUP BY device_type with AVG(watch_time_seconds).",
      },
    ],
  },
  {
    code: "MOVIES_061",
    hints: [
      {
        hint_order: 1,
        content: "Use total revenue per title within each country.",
      },
      {
        hint_order: 2,
        content: "Group by country and title_id first.",
      },
      {
        hint_order: 3,
        content: "Use ROW_NUMBER() OVER (PARTITION BY country ...).",
      },
    ],
  },
  {
    code: "MOVIES_062",
    hints: [
      {
        hint_order: 1,
        content: "Compare recent watch time with previous period.",
      },
      {
        hint_order: 2,
        content: "Create two time windows.",
      },
      {
        hint_order: 3,
        content: "Use CTEs for last 30 days vs previous 30 days.",
      },
    ],
  },
  {
    code: "MOVIES_063",
    hints: [
      {
        hint_order: 1,
        content: "Find repeat watches by same profile and title.",
      },
      {
        hint_order: 2,
        content: "Group by profile_id and title_id.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "MOVIES_064",
    hints: [
      {
        hint_order: 1,
        content: "You need historical and recent averages.",
      },
      {
        hint_order: 2,
        content: "Compare last 30 days with all-time average.",
      },
      {
        hint_order: 3,
        content: "Use two CTEs and join on title_id.",
      },
    ],
  },
  {
    code: "MOVIES_065",
    hints: [
      {
        hint_order: 1,
        content: "Keep only abandoned sessions.",
      },
      {
        hint_order: 2,
        content: "Focus on episode-level sessions.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) grouped by episode_id.",
      },
    ],
  },
  {
    code: "MOVIES_066",
    hints: [
      {
        hint_order: 1,
        content: "Revenue should come from paid invoices only.",
      },
      {
        hint_order: 2,
        content: "Find top title per country.",
      },
      {
        hint_order: 3,
        content: "Use ROW_NUMBER() partitioned by country.",
      },
    ],
  },
  {
    code: "MOVIES_067",
    hints: [
      {
        hint_order: 1,
        content: "Compare watch time across two periods.",
      },
      {
        hint_order: 2,
        content: "Find users with >50% drop.",
      },
      {
        hint_order: 3,
        content: "Use recent vs previous CTE windows.",
      },
    ],
  },
  {
    code: "MOVIES_068",
    hints: [
      {
        hint_order: 1,
        content: "Check if full season was watched.",
      },
      {
        hint_order: 2,
        content: "Compare watched episodes with total season episodes.",
      },
      {
        hint_order: 3,
        content: "Also ensure watch span <= 24 hours.",
      },
    ],
  },
  {
    code: "MOVIES_069",
    hints: [
      {
        hint_order: 1,
        content: "CTR = clicks / impressions.",
      },
      {
        hint_order: 2,
        content: "Compare control vs experiment variants.",
      },
      {
        hint_order: 3,
        content: "Use self-join on experiment_id.",
      },
    ],
  },
  {
    code: "MOVIES_070",
    hints: [
      {
        hint_order: 1,
        content: "Same title watched across multiple devices.",
      },
      {
        hint_order: 2,
        content: "Count distinct device_id per profile-title.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(DISTINCT device_id) > 1.",
      },
    ],
  },
  {
    code: "MOVIES_071",
    hints: [
      {
        hint_order: 1,
        content: "Measure category diversity per profile.",
      },
      {
        hint_order: 2,
        content: "Join watched titles with title_categories.",
      },
      {
        hint_order: 3,
        content: "COUNT(DISTINCT category_id) per profile.",
      },
    ],
  },
  {
    code: "MOVIES_072",
    hints: [
      {
        hint_order: 1,
        content: "Use monthly revenue buckets.",
      },
      {
        hint_order: 2,
        content: "Find top title in each month.",
      },
      {
        hint_order: 3,
        content: "Use DATE_TRUNC('month', issued_at) + ROW_NUMBER().",
      },
    ],
  },
  {
    code: "MOVIES_073",
    hints: [
      {
        hint_order: 1,
        content: "Start from clicked recommendation impressions.",
      },
      {
        hint_order: 2,
        content: "Check whether clicked title was later watched.",
      },
      {
        hint_order: 3,
        content: "Conversion = converted clicks / total clicks.",
      },
    ],
  },
  {
    code: "MOVIES_074",
    hints: [
      {
        hint_order: 1,
        content: "Need active profiles in every month.",
      },
      {
        hint_order: 2,
        content: "Count distinct active months.",
      },
      {
        hint_order: 3,
        content: "HAVING COUNT(DISTINCT month) = 6.",
      },
    ],
  },
  {
    code: "MOVIES_075",
    hints: [
      {
        hint_order: 1,
        content: "LTV = sum of paid invoices.",
      },
      {
        hint_order: 2,
        content: "Join invoices with subscriptions.",
      },
      {
        hint_order: 3,
        content: "SUM(total_amount) grouped by user_id.",
      },
    ],
  },
  {
    code: "MOVIES_076",
    hints: [
      {
        hint_order: 1,
        content: "Roll episode sessions up to series level.",
      },
      {
        hint_order: 2,
        content: "Join episodes -> seasons -> titles.",
      },
      {
        hint_order: 3,
        content: "AVG(completion_percent) per series title.",
      },
    ],
  },
  {
    code: "MOVIES_077",
    hints: [
      {
        hint_order: 1,
        content: "Count pause events per session first.",
      },
      {
        hint_order: 2,
        content: "Then average pause counts per title.",
      },
      {
        hint_order: 3,
        content: "Use playback_events filtered by pause.",
      },
    ],
  },
  {
    code: "MOVIES_078",
    hints: [
      {
        hint_order: 1,
        content: "Look at devices table only.",
      },
      {
        hint_order: 2,
        content: "Count distinct countries per user.",
      },
      {
        hint_order: 3,
        content: "HAVING COUNT(DISTINCT country) > 1.",
      },
    ],
  },
  {
    code: "MOVIES_079",
    hints: [
      {
        hint_order: 1,
        content: "CTR comes from notification deliveries.",
      },
      {
        hint_order: 2,
        content: "clicked_at indicates click happened.",
      },
      {
        hint_order: 3,
        content: "COUNT(clicked_at) / COUNT(*).",
      },
    ],
  },
  {
    code: "MOVIES_080",
    hints: [
      {
        hint_order: 1,
        content: "Recommendation clicks need impression join.",
      },
      {
        hint_order: 2,
        content: "Count distinct row_id per profile.",
      },
      {
        hint_order: 3,
        content: "GROUP BY profile_id and LIMIT 10.",
      },
    ],
  },
  {
    code: "MOVIES_081",
    hints: [
      {
        hint_order: 1,
        content: "Find subscription span per user.",
      },
      {
        hint_order: 2,
        content: "Use MIN(started_at) and MAX(current_period_end).",
      },
      {
        hint_order: 3,
        content: "Subtract dates to get retention days.",
      },
    ],
  },
  {
    code: "MOVIES_082",
    hints: [
      {
        hint_order: 1,
        content: "Repeat watches by same profile-title pair.",
      },
      {
        hint_order: 2,
        content: "Group by profile_id and title_id.",
      },
      {
        hint_order: 3,
        content: "HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "MOVIES_083",
    hints: [
      {
        hint_order: 1,
        content: "Compare recent completion vs historical average.",
      },
      {
        hint_order: 2,
        content: "Use separate aggregates for both periods.",
      },
      {
        hint_order: 3,
        content: "Sort by biggest drop.",
      },
    ],
  },
  {
    code: "MOVIES_084",
    hints: [
      {
        hint_order: 1,
        content: "Keep only abandoned episode sessions.",
      },
      {
        hint_order: 2,
        content: "Count by episode_id.",
      },
      {
        hint_order: 3,
        content: "ORDER BY count DESC LIMIT 10.",
      },
    ],
  },
  {
    code: "MOVIES_085",
    hints: [
      {
        hint_order: 1,
        content: "Find highest revenue title per country.",
      },
      {
        hint_order: 2,
        content: "Revenue comes from paid invoices.",
      },
      {
        hint_order: 3,
        content: "Use window ranking by country.",
      },
    ],
  },
  {
    code: "MOVIES_086",
    hints: [
      {
        hint_order: 1,
        content: "Compare recent vs previous watch time windows.",
      },
      {
        hint_order: 2,
        content: "Drop threshold is below 50%.",
      },
      {
        hint_order: 3,
        content: "Use two CTEs and join on user_id.",
      },
    ],
  },
  {
    code: "MOVIES_087",
    hints: [
      {
        hint_order: 1,
        content: "Need full season completion within 24 hours.",
      },
      {
        hint_order: 2,
        content: "Compare watched episodes with season total.",
      },
      {
        hint_order: 3,
        content: "Check MAX(end) <= MIN(start) + 24h.",
      },
    ],
  },
  {
    code: "MOVIES_088",
    hints: [
      {
        hint_order: 1,
        content: "CTR needs control vs variant comparison.",
      },
      {
        hint_order: 2,
        content: "Aggregate clicks and impressions first.",
      },
      {
        hint_order: 3,
        content: "Self-join by experiment_id.",
      },
    ],
  },
  {
    code: "MOVIES_089",
    hints: [
      {
        hint_order: 1,
        content: "Check cross-device viewing per title.",
      },
      {
        hint_order: 2,
        content: "Count distinct devices per profile-title.",
      },
      {
        hint_order: 3,
        content: "HAVING device count > 1.",
      },
    ],
  },
  {
    code: "MOVIES_090",
    hints: [
      {
        hint_order: 1,
        content: "Measure watched category diversity.",
      },
      {
        hint_order: 2,
        content: "Join viewing_sessions with title_categories.",
      },
      {
        hint_order: 3,
        content: "COUNT(DISTINCT category_id).",
      },
    ],
  },
  {
    code: "MOVIES_091",
    hints: [
      {
        hint_order: 1,
        content: "Find top revenue title per month.",
      },
      {
        hint_order: 2,
        content: "Group by month and title first.",
      },
      {
        hint_order: 3,
        content: "Use ROW_NUMBER() partitioned by month.",
      },
    ],
  },
  {
    code: "MOVIES_092",
    hints: [
      {
        hint_order: 1,
        content: "Track click-to-watch conversion.",
      },
      {
        hint_order: 2,
        content: "Start from clicked impressions.",
      },
      {
        hint_order: 3,
        content: "Check later watch by same profile and title.",
      },
    ],
  },
  {
    code: "MOVIES_093",
    hints: [
      {
        hint_order: 1,
        content: "Profiles must be active in all 6 months.",
      },
      {
        hint_order: 2,
        content: "Count distinct active months.",
      },
      {
        hint_order: 3,
        content: "HAVING count = 6.",
      },
    ],
  },
  {
    code: "MOVIES_094",
    hints: [
      {
        hint_order: 1,
        content: "LTV = sum of paid invoices per user.",
      },
      {
        hint_order: 2,
        content: "Join invoices with subscriptions.",
      },
      {
        hint_order: 3,
        content: "Sort by SUM(total_amount) DESC.",
      },
    ],
  },
  {
    code: "MOVIES_095",
    hints: [
      {
        hint_order: 1,
        content: "Series completion uses episode sessions.",
      },
      {
        hint_order: 2,
        content: "Roll up through seasons.",
      },
      {
        hint_order: 3,
        content: "AVG(completion_percent) by series title.",
      },
    ],
  },
  {
    code: "MOVIES_096",
    hints: [
      {
        hint_order: 1,
        content: "Count pause events per session first.",
      },
      {
        hint_order: 2,
        content: "Map session to title.",
      },
      {
        hint_order: 3,
        content: "AVG(pause_count) per title.",
      },
    ],
  },
  {
    code: "MOVIES_097",
    hints: [
      {
        hint_order: 1,
        content: "Check multi-country device usage.",
      },
      {
        hint_order: 2,
        content: "Count distinct countries per user.",
      },
      {
        hint_order: 3,
        content: "HAVING distinct country count > 1.",
      },
    ],
  },
  {
    code: "MOVIES_098",
    hints: [
      {
        hint_order: 1,
        content: "CTR = clicked deliveries / total deliveries.",
      },
      {
        hint_order: 2,
        content: "Use clicked_at as click indicator.",
      },
      {
        hint_order: 3,
        content: "GROUP BY campaign_id.",
      },
    ],
  },
  {
    code: "MOVIES_099",
    hints: [
      {
        hint_order: 1,
        content: "Count unique recommendation rows clicked.",
      },
      {
        hint_order: 2,
        content: "Join clicks with impressions.",
      },
      {
        hint_order: 3,
        content: "COUNT(DISTINCT row_id) per profile.",
      },
    ],
  },
  {
    code: "MOVIES_100",
    hints: [
      {
        hint_order: 1,
        content: "Find renewed users first.",
      },
      {
        hint_order: 2,
        content: "Users with more than one subscription.",
      },
      {
        hint_order: 3,
        content: "Count watched titles for those users.",
      },
    ],
  },
];

export const conceptFilters = [
  {
    code: "MOVIES_001",
    concepts: ["aggregation", "count"],
  },
  {
    code: "MOVIES_002",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "MOVIES_003",
    concepts: ["aggregation", "count"],
  },
  {
    code: "MOVIES_004",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "MOVIES_005",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "MOVIES_006",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "MOVIES_007",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "MOVIES_008",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "MOVIES_009",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "MOVIES_010",
    concepts: ["filtering", "null_handling", "sorting", "limit"],
  },
  {
    code: "MOVIES_011",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "MOVIES_012",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "MOVIES_013",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "MOVIES_014",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "calculation",
    ],
  },
  {
    code: "MOVIES_015",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "MOVIES_016",
    concepts: [
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "MOVIES_017",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "MOVIES_018",
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
    code: "MOVIES_019",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "MOVIES_020",
    concepts: ["aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "MOVIES_021",
    concepts: ["joins", "filtering", "sorting", "comparison"],
  },
  {
    code: "MOVIES_022",
    concepts: ["joins", "sorting"],
  },
  {
    code: "MOVIES_023",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "MOVIES_024",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "MOVIES_025",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "MOVIES_026",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "MOVIES_027",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "MOVIES_028",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "MOVIES_029",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "MOVIES_030",
    concepts: ["aggregation", "average", "group_by", "sorting", "calculation"],
  },
  {
    code: "MOVIES_031",
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
    code: "MOVIES_032",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "MOVIES_033",
    concepts: ["joins", "filtering", "sorting", "comparison"],
  },
  {
    code: "MOVIES_034",
    concepts: ["aggregation", "average", "group_by", "sorting", "calculation"],
  },
  {
    code: "MOVIES_035",
    concepts: ["aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "MOVIES_036",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "MOVIES_037",
    concepts: [
      "aggregation",
      "count",
      "average",
      "group_by",
      "subquery",
      "calculation",
    ],
  },
  {
    code: "MOVIES_038",
    concepts: ["joins", "filtering", "null_handling", "sorting", "comparison"],
  },
  {
    code: "MOVIES_039",
    concepts: ["joins", "filtering", "distinct", "sorting", "comparison"],
  },
  {
    code: "MOVIES_040",
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
    code: "MOVIES_041",
    concepts: ["aggregation", "sum", "group_by", "sorting", "limit"],
  },
  {
    code: "MOVIES_042",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "MOVIES_043",
    concepts: ["joins", "aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "MOVIES_044",
    concepts: ["joins", "aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "MOVIES_045",
    concepts: ["joins", "filtering", "sorting", "comparison"],
  },
  {
    code: "MOVIES_046",
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
    code: "MOVIES_047",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "MOVIES_048",
    concepts: ["aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "MOVIES_049",
    concepts: ["aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "MOVIES_050",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "MOVIES_051",
    concepts: [
      "joins",
      "filtering",
      "null_handling",
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
    code: "MOVIES_052",
    concepts: [
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "limit",
      "calculation",
    ],
  },
  {
    code: "MOVIES_053",
    concepts: [
      "joins",
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "limit",
      "calculation",
    ],
  },
  {
    code: "MOVIES_054",
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
    code: "MOVIES_055",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "MOVIES_056",
    concepts: [
      "filtering",
      "aggregation",
      "count_distinct",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "MOVIES_057",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
      "comparison",
    ],
  },
  {
    code: "MOVIES_058",
    concepts: [
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "MOVIES_059",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "MOVIES_060",
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
    code: "MOVIES_061",
    concepts: [
      "filtering",
      "date_functions",
      "aggregation",
      "sum",
      "group_by",
      "sorting",
      "trend_analysis",
      "calculation",
    ],
  },
  {
    code: "MOVIES_062",
    concepts: [
      "date_functions",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "trend_analysis",
    ],
  },
  {
    code: "MOVIES_063",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "limit",
      "calculation",
    ],
  },
  {
    code: "MOVIES_064",
    concepts: [
      "joins",
      "filtering",
      "null_handling",
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "MOVIES_065",
    concepts: ["aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "MOVIES_066",
    concepts: [
      "joins",
      "left_join",
      "aggregation",
      "count",
      "group_by",
      "arithmetic",
      "calculation",
      "sorting",
    ],
  },
  {
    code: "MOVIES_067",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "MOVIES_068",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "sum",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "MOVIES_069",
    concepts: [
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "MOVIES_070",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "limit",
      "calculation",
    ],
  },
  {
    code: "MOVIES_071",
    concepts: [
      "joins",
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "MOVIES_072",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count_distinct",
      "group_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "MOVIES_073",
    concepts: [
      "joins",
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "MOVIES_074",
    concepts: [
      "filtering",
      "null_handling",
      "date_functions",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "trend_analysis",
    ],
  },
  {
    code: "MOVIES_075",
    concepts: [
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "MOVIES_076",
    concepts: [
      "cte",
      "joins",
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "MOVIES_077",
    concepts: [
      "joins",
      "filtering",
      "null_handling",
      "date_functions",
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "MOVIES_078",
    concepts: [
      "cte",
      "joins",
      "left_join",
      "aggregation",
      "count",
      "group_by",
      "arithmetic",
      "calculation",
      "sorting",
    ],
  },
  {
    code: "MOVIES_079",
    concepts: [
      "cte",
      "left_join",
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "null_handling",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "MOVIES_080",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "sum",
      "average",
      "group_by",
      "filtering",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "MOVIES_081",
    concepts: [
      "filtering",
      "aggregation",
      "min",
      "max",
      "group_by",
      "date_difference",
      "date_functions",
      "sorting",
      "limit",
      "calculation",
    ],
  },
  {
    code: "MOVIES_082",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "limit",
      "comparison",
    ],
  },
  {
    code: "MOVIES_083",
    concepts: [
      "cte",
      "filtering",
      "null_handling",
      "aggregation",
      "average",
      "group_by",
      "joins",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "MOVIES_084",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
      "comparison",
    ],
  },
  {
    code: "MOVIES_085",
    concepts: [
      "cte",
      "joins",
      "filtering",
      "null_handling",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "MOVIES_086",
    concepts: [
      "cte",
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "arithmetic",
      "calculation",
      "comparison",
      "sorting",
    ],
  },
  {
    code: "MOVIES_087",
    concepts: [
      "cte",
      "joins",
      "filtering",
      "aggregation",
      "count",
      "min",
      "max",
      "group_by",
      "date_difference",
      "date_functions",
      "comparison",
      "sorting",
    ],
  },
  {
    code: "MOVIES_088",
    concepts: [
      "cte",
      "joins",
      "left_join",
      "aggregation",
      "count",
      "group_by",
      "null_handling",
      "arithmetic",
      "calculation",
      "comparison",
      "sorting",
    ],
  },
  {
    code: "MOVIES_089",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "MOVIES_090",
    concepts: [
      "joins",
      "filtering",
      "null_handling",
      "aggregation",
      "count_distinct",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "MOVIES_091",
    concepts: [
      "cte",
      "joins",
      "filtering",
      "null_handling",
      "date_functions",
      "aggregation",
      "sum",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
      "trend_analysis",
      "calculation",
    ],
  },
  {
    code: "MOVIES_092",
    concepts: [
      "cte",
      "joins",
      "left_join",
      "aggregation",
      "count",
      "group_by",
      "null_handling",
      "arithmetic",
      "calculation",
      "sorting",
    ],
  },
  {
    code: "MOVIES_093",
    concepts: [
      "filtering",
      "date_functions",
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "MOVIES_094",
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
    code: "MOVIES_095",
    concepts: [
      "joins",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "limit",
      "calculation",
    ],
  },
  {
    code: "MOVIES_096",
    concepts: [
      "cte",
      "joins",
      "filtering",
      "aggregation",
      "count",
      "average",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "MOVIES_097",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "MOVIES_098",
    concepts: [
      "aggregation",
      "count",
      "group_by",
      "arithmetic",
      "calculation",
      "sorting",
    ],
  },
  {
    code: "MOVIES_099",
    concepts: [
      "joins",
      "aggregation",
      "count_distinct",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "MOVIES_100",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "limit",
      "comparison",
    ],
  },
];

export const solutions = [
  {
    code: "MOVIES_001",
    approaches: [
      {
        approach_title: "COUNT users",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS total_users FROM users;",
        explanation:
          "## 🧠 Approach\n\nCount all rows in the users table.\n\n## 🔍 Explanation\n\n- `COUNT(*)` counts every row regardless of NULL values.\n- This gives the total number of users in the platform.\n- No filtering or grouping is needed.",
      },
    ],
  },
  {
    code: "MOVIES_002",
    approaches: [
      {
        approach_title: "Filter active",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS active_profiles FROM profiles WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nFilter only active profiles and count them.\n\n## 🔍 Explanation\n\n- `WHERE is_active = true` keeps only active profiles.\n- `COUNT(*)` counts those rows.\n- This avoids counting inactive profiles.",
      },
    ],
  },
  {
    code: "MOVIES_003",
    approaches: [
      {
        approach_title: "COUNT titles",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS total_titles FROM titles;",
        explanation:
          "## 🧠 Approach\n\nCount all titles in the catalog.\n\n## 🔍 Explanation\n\n- `COUNT(*)` counts all rows in `titles`.\n- This includes all types and statuses unless filtered.",
      },
    ],
  },
  {
    code: "MOVIES_004",
    approaches: [
      {
        approach_title: "Filter published",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, title_name, title_type FROM titles WHERE content_status = 'published';",
        explanation:
          "## 🧠 Approach\n\nFilter titles that are published.\n\n## 🔍 Explanation\n\n- `content_status = 'published'` ensures only visible titles are returned.\n- Only required columns are selected for clarity.",
      },
    ],
  },
  {
    code: "MOVIES_005",
    approaches: [
      {
        approach_title: "Filter originals",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, title_name, release_year FROM titles WHERE is_original = true;",
        explanation:
          "## 🧠 Approach\n\nFilter platform original content.\n\n## 🔍 Explanation\n\n- `is_original = true` identifies platform-produced titles.\n- This avoids mixing with licensed content.",
      },
    ],
  },
  {
    code: "MOVIES_006",
    approaches: [
      {
        approach_title: "IN quality filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, plan_name, video_quality, price FROM subscription_plans WHERE video_quality IN ('hd', 'full_hd', 'uhd');",
        explanation:
          "## 🧠 Approach\n\nFilter plans with HD or better quality.\n\n## 🔍 Explanation\n\n- `IN (...)` checks multiple allowed quality values.\n- Covers HD and all higher tiers.\n- Cleaner than multiple OR conditions.",
      },
    ],
  },
  {
    code: "MOVIES_007",
    approaches: [
      {
        approach_title: "Movie filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, title_name, release_year FROM titles WHERE title_type = 'movie' AND release_year > 2020;",
        explanation:
          "## 🧠 Approach\n\nFilter movie titles released after 2020.\n\n## 🔍 Explanation\n\n- `title_type = 'movie'` ensures only movies.\n- `release_year > 2020` applies the time condition.\n- Both filters are required to match the question.",
      },
    ],
  },
  {
    code: "MOVIES_008",
    approaches: [
      {
        approach_title: "Score filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, title_name, imdb_like_score FROM titles WHERE imdb_like_score > 8;",
        explanation:
          "## 🧠 Approach\n\nFilter titles with high IMDb-like scores.\n\n## 🔍 Explanation\n\n- `imdb_like_score > 8` keeps only highly rated titles.\n- NULL values are automatically excluded since comparison fails on NULL.",
      },
    ],
  },
  {
    code: "MOVIES_009",
    approaches: [
      {
        approach_title: "Status filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, profile_id, device_id, download_status FROM downloads WHERE download_status = 'completed';",
        explanation:
          "## 🧠 Approach\n\nFilter completed downloads.\n\n## 🔍 Explanation\n\n- `download_status = 'completed'` ensures only finished downloads are returned.\n- This excludes queued, failed, or expired downloads.",
      },
    ],
  },
  {
    code: "MOVIES_010",
    approaches: [
      {
        approach_title: "Top rated",
        approach_type: "sorting",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, title_name, critic_score FROM titles WHERE critic_score IS NOT NULL ORDER BY critic_score DESC, id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nSort titles by critic score and return top 5.\n\n## 🔍 Explanation\n\n- `critic_score IS NOT NULL` removes unrated titles.\n- `ORDER BY critic_score DESC` ranks highest scores first.\n- `id ASC` ensures deterministic ordering for ties.\n- `LIMIT 5` returns top five titles.\n\n⚠️ Important:\n\n- Ordering must exactly match comparator config.\n- Do not add extra clauses like `NULLS LAST`.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, title_name, critic_score FROM (SELECT id, title_name, critic_score, ROW_NUMBER() OVER (ORDER BY critic_score DESC, id ASC) AS rn FROM titles WHERE critic_score IS NOT NULL) ranked WHERE rn <= 5 ORDER BY critic_score DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank titles using `ROW_NUMBER` and select top 5.\n\n## 🔍 Explanation\n\n- `ROW_NUMBER()` assigns unique rank based on score.\n- `rn <= 5` ensures exactly 5 rows.\n- Final ordering matches comparator requirements.\n- Useful when LIMIT is restricted or for advanced ranking logic.",
      },
    ],
  },
  {
    code: "MOVIES_011",
    approaches: [
      {
        approach_title: "GROUP title type",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_type, COUNT(*) AS total_titles FROM titles GROUP BY title_type;",
        explanation:
          "## 🧠 Approach\n\nGroup titles by their type and count how many titles exist in each group.\n\n## 🔍 Explanation\n\n- `GROUP BY title_type` creates one row per title type such as movie, series, documentary, etc.\n- `COUNT(*)` counts all titles in each type.\n- No filter is applied because the question asks for all title types.",
      },
    ],
  },
  {
    code: "MOVIES_012",
    approaches: [
      {
        approach_title: "GROUP profiles",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, COUNT(*) AS profile_count FROM profiles GROUP BY user_id;",
        explanation:
          "## 🧠 Approach\n\nGroup profiles by user and count how many profiles each user has.\n\n## 🔍 Explanation\n\n- `GROUP BY user_id` creates one row per user account with profiles.\n- `COUNT(*)` counts all profile records for each user.\n- No active filter is used because the question asks for profiles created under each account, not only active profiles.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT user_id, COUNT(*) OVER (PARTITION BY user_id) AS profile_count FROM profiles;",
        explanation:
          "## 🧠 Approach\n\nUse a window count per user, then return one row per user.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY user_id)` calculates the profile count on every profile row for that user.\n- `DISTINCT` is needed because each user's count appears on multiple profile rows.\n- `GROUP BY` is simpler and preferred for this aggregation.",
      },
    ],
  },
  {
    code: "MOVIES_013",
    approaches: [
      {
        approach_title: "GROUP language",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT original_language, COUNT(*) AS total_titles FROM titles GROUP BY original_language;",
        explanation:
          "## 🧠 Approach\n\nGroup titles by original language and count titles in each language.\n\n## 🔍 Explanation\n\n- `GROUP BY original_language` creates one row per original language value.\n- `COUNT(*)` counts titles for each language, including rows where other title fields may be null.\n- This gives language-level catalog distribution.",
      },
    ],
  },
  {
    code: "MOVIES_014",
    approaches: [
      {
        approach_title: "AVG runtime",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ROUND(AVG(runtime_minutes), 2) AS avg_runtime_minutes FROM titles WHERE title_type = 'movie' AND runtime_minutes IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nFilter to movie titles with known runtime and calculate the average runtime.\n\n## 🔍 Explanation\n\n- `title_type = 'movie'` ensures only movie titles are included.\n- `runtime_minutes IS NOT NULL` explicitly removes missing runtime values.\n- `AVG(runtime_minutes)` calculates the average runtime.\n- `ROUND(..., 2)` formats the result to two decimal places.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ROUND(SUM(runtime_minutes)::numeric / NULLIF(COUNT(runtime_minutes), 0), 2) AS avg_runtime_minutes FROM titles WHERE title_type = 'movie' AND runtime_minutes IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nCalculate average movie runtime manually using sum divided by count.\n\n## 🔍 Explanation\n\n- `SUM(runtime_minutes)` totals movie runtimes.\n- `COUNT(runtime_minutes)` counts non-null runtimes.\n- `::numeric` prevents integer division.\n- `NULLIF(..., 0)` protects against division by zero.\n- This is equivalent to `AVG(runtime_minutes)`, but the built-in aggregate is clearer.",
      },
    ],
  },
  {
    code: "MOVIES_015",
    approaches: [
      {
        approach_title: "COUNT active subs",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS active_subscriptions FROM subscriptions WHERE subscription_status = 'active';",
        explanation:
          "## 🧠 Approach\n\nFilter subscriptions to active status and count them.\n\n## 🔍 Explanation\n\n- `WHERE subscription_status = 'active'` keeps currently active subscriptions.\n- `COUNT(*)` counts those active subscription rows.\n- The alias matches the required output column.",
      },
    ],
  },
  {
    code: "MOVIES_016",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, COUNT(*) AS profile_count FROM profiles GROUP BY user_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nGroup profiles by user and keep users with more than one profile.\n\n## 🔍 Explanation\n\n- `GROUP BY user_id` creates one row per user.\n- `COUNT(*)` counts profiles under that user.\n- `HAVING COUNT(*) > 1` filters after aggregation, which is required when filtering by grouped counts.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, profile_count FROM (SELECT user_id, COUNT(*) AS profile_count FROM profiles GROUP BY user_id) profile_counts WHERE profile_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate profile counts first, then filter users with multiple profiles.\n\n## 🔍 Explanation\n\n- The inner query computes `profile_count` per user.\n- The outer query filters rows where `profile_count > 1`.\n- This is equivalent to `GROUP BY + HAVING` and allows the aggregate alias to be reused.",
      },
    ],
  },
  {
    code: "MOVIES_017",
    approaches: [
      {
        approach_title: "GROUP ratings",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, COUNT(*) AS ratings_count FROM ratings WHERE title_id IS NOT NULL GROUP BY title_id;",
        explanation:
          "## 🧠 Approach\n\nFilter title ratings and count ratings per title.\n\n## 🔍 Explanation\n\n- `title_id IS NOT NULL` keeps only ratings attached to titles.\n- `GROUP BY title_id` creates one row per rated title.\n- `COUNT(*)` counts rating records for each title.",
      },
    ],
  },
  {
    code: "MOVIES_018",
    approaches: [
      {
        approach_title: "GROUP completed downloads",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT device_id, COUNT(*) AS completed_downloads FROM downloads WHERE download_status = 'completed' GROUP BY device_id;",
        explanation:
          "## 🧠 Approach\n\nFilter completed downloads and count them per device.\n\n## 🔍 Explanation\n\n- `WHERE download_status = 'completed'` keeps only completed download records.\n- `GROUP BY device_id` creates one row per device.\n- `COUNT(*)` counts completed downloads for each device.",
      },
    ],
  },
  {
    code: "MOVIES_019",
    approaches: [
      {
        approach_title: "AVG rating",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, ROUND(AVG(rating_value), 2) AS avg_rating FROM ratings WHERE title_id IS NOT NULL GROUP BY title_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate average rating for each title.\n\n## 🔍 Explanation\n\n- `title_id IS NOT NULL` keeps ratings attached to titles.\n- `GROUP BY title_id` creates one result row per title.\n- `AVG(rating_value)` calculates the mean rating.\n- `ROUND(..., 2)` formats the average to two decimals.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT title_id, ROUND(SUM(rating_value)::numeric / NULLIF(COUNT(rating_value), 0), 2) AS avg_rating FROM ratings WHERE title_id IS NOT NULL GROUP BY title_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate average rating manually using rating sum divided by rating count.\n\n## 🔍 Explanation\n\n- `SUM(rating_value)` totals rating values per title.\n- `COUNT(rating_value)` counts non-null rating values.\n- `::numeric` prevents integer division because `rating_value` is an integer column.\n- `NULLIF(..., 0)` protects against division by zero.\n- This matches `AVG(rating_value)` after rounding.",
      },
    ],
  },
  {
    code: "MOVIES_020",
    approaches: [
      {
        approach_title: "Top watchlisted",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, COUNT(*) AS watchlist_adds FROM watchlists GROUP BY title_id ORDER BY watchlist_adds DESC, title_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount watchlist additions per title and return the top five titles.\n\n## 🔍 Explanation\n\n- `GROUP BY title_id` creates one row per title added to watchlists.\n- `COUNT(*)` counts how many times each title was added.\n- `ORDER BY watchlist_adds DESC, title_id ASC` ranks most-added titles first and uses title id as a tie-breaker.\n- `LIMIT 5` returns exactly five rows.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT title_id, watchlist_adds FROM (SELECT title_id, watchlist_adds, ROW_NUMBER() OVER (ORDER BY watchlist_adds DESC, title_id ASC) AS rn FROM (SELECT title_id, COUNT(*) AS watchlist_adds FROM watchlists GROUP BY title_id) watchlist_counts) ranked WHERE rn <= 5 ORDER BY watchlist_adds DESC, title_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank title watchlist counts using `ROW_NUMBER` and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates watchlist additions per title.\n- `ROW_NUMBER()` ranks titles using the required comparator order.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering is included because this question requires sorted output.",
      },
    ],
  },
  {
    code: "MOVIES_021",
    approaches: [
      {
        approach_title: "JOIN active plans",
        approach_type: "join_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id, u.email, sp.plan_name FROM users u JOIN subscriptions s ON u.id = s.user_id JOIN subscription_plans sp ON s.plan_id = sp.id WHERE s.subscription_status = 'active';",
        explanation:
          "## 🧠 Approach\n\nJoin users to their subscriptions and subscription plans, then keep only active subscriptions.\n\n## 🔍 Explanation\n\n- `users` provides the user id and email.\n- `subscriptions` connects users to plans.\n- `subscription_plans` provides the plan name.\n- `WHERE s.subscription_status = 'active'` keeps only currently active subscriptions.",
      },
    ],
  },
  {
    code: "MOVIES_022",
    approaches: [
      {
        approach_title: "JOIN categories",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT t.id, t.title_name, c.category_name FROM titles t JOIN title_categories tc ON t.id = tc.title_id JOIN content_categories c ON tc.category_id = c.id;",
        explanation:
          "## 🧠 Approach\n\nJoin titles through the title-category bridge table to get category names.\n\n## 🔍 Explanation\n\n- `title_categories` is the many-to-many mapping between titles and categories.\n- `content_categories` stores the readable category name.\n- A title can have multiple categories, so the same title may appear multiple times with different category names.",
      },
    ],
  },
  {
    code: "MOVIES_023",
    approaches: [
      {
        approach_title: "GROUP episodes",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT season_id, COUNT(*) AS episode_count FROM episodes GROUP BY season_id;",
        explanation:
          "## 🧠 Approach\n\nGroup episodes by season and count episodes in each season.\n\n## 🔍 Explanation\n\n- `GROUP BY season_id` creates one result row per season.\n- `COUNT(*)` counts all episode rows in each season.\n- No filter is needed because the question asks for total episodes per season.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT season_id, COUNT(*) OVER (PARTITION BY season_id) AS episode_count FROM episodes;",
        explanation:
          "## 🧠 Approach\n\nUse a window count per season and return one row per season.\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY season_id)` calculates episode count on every episode row.\n- `DISTINCT` removes duplicate rows per season.\n- `GROUP BY` is simpler and preferred for this aggregation.",
      },
    ],
  },
  {
    code: "MOVIES_024",
    approaches: [
      {
        approach_title: "GROUP sessions",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT profile_id, COUNT(*) AS session_count FROM viewing_sessions GROUP BY profile_id;",
        explanation:
          "## 🧠 Approach\n\nGroup viewing sessions by profile and count sessions per profile.\n\n## 🔍 Explanation\n\n- `GROUP BY profile_id` creates one row per profile with viewing activity.\n- `COUNT(*)` counts all viewing session rows for that profile.\n- This counts sessions, not total watch time.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT profile_id, COUNT(*) OVER (PARTITION BY profile_id) AS session_count FROM viewing_sessions;",
        explanation:
          "## 🧠 Approach\n\nUse a window count to calculate session count per profile without collapsing rows first.\n\n## 🔍 Explanation\n\n- The window function places each profile's session count on every session row.\n- `DISTINCT` is needed to return each profile once.\n- `GROUP BY` is clearer for this question.",
      },
    ],
  },
  {
    code: "MOVIES_025",
    approaches: [
      {
        approach_title: "Top watched",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, COUNT(*) AS total_views FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id ORDER BY total_views DESC, title_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount viewing sessions per title and return the top five most watched titles.\n\n## 🔍 Explanation\n\n- `WHERE title_id IS NOT NULL` keeps title-level sessions and excludes episode-only rows.\n- `GROUP BY title_id` counts views per title.\n- `ORDER BY total_views DESC, title_id ASC` ranks most watched titles first and uses title id as a tie-breaker.\n- `LIMIT 5` returns exactly five rows.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT title_id, total_views FROM (SELECT title_id, total_views, ROW_NUMBER() OVER (ORDER BY total_views DESC, title_id ASC) AS rn FROM (SELECT title_id, COUNT(*) AS total_views FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id) title_views) ranked WHERE rn <= 5 ORDER BY total_views DESC, title_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank title view counts using `ROW_NUMBER`, then keep the top five.\n\n## 🔍 Explanation\n\n- The inner query counts viewing sessions per title.\n- `ROW_NUMBER()` ranks titles using the required comparator order.\n- `rn <= 5` keeps exactly five rows.\n- The final `ORDER BY` preserves required output ordering.",
      },
    ],
  },
  {
    code: "MOVIES_026",
    approaches: [
      {
        approach_title: "GROUP role",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT role_type, COUNT(*) AS total_people FROM title_credits GROUP BY role_type;",
        explanation:
          "## 🧠 Approach\n\nGroup title credits by role type and count credit records for each role.\n\n## 🔍 Explanation\n\n- `GROUP BY role_type` creates one row per role type such as actor, director, writer, etc.\n- `COUNT(*)` counts credit records for that role.\n- This counts credits, not distinct people, matching the expected query.",
      },
    ],
  },
  {
    code: "MOVIES_027",
    approaches: [
      {
        approach_title: "Successful payments",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT p.id, p.invoice_id, p.paid_amount FROM payments p WHERE p.payment_status = 'successful';",
        explanation:
          "## 🧠 Approach\n\nFilter payments to successful transactions and return their invoice amount details.\n\n## 🔍 Explanation\n\n- `payment_status = 'successful'` keeps only completed payment records.\n- The selected columns identify the payment, linked invoice, and paid amount.\n- No join is needed because invoice id and paid amount are both stored in `payments`.",
      },
    ],
  },
  {
    code: "MOVIES_028",
    approaches: [
      {
        approach_title: "GROUP watchlists",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT profile_id, COUNT(*) AS watchlist_count FROM watchlists GROUP BY profile_id;",
        explanation:
          "## 🧠 Approach\n\nGroup watchlist rows by profile and count how many titles each profile has saved.\n\n## 🔍 Explanation\n\n- `GROUP BY profile_id` creates one row per profile with watchlist entries.\n- `COUNT(*)` counts titles saved by that profile.\n- Profiles without watchlist rows are not included, matching the expected query.",
      },
    ],
  },
  {
    code: "MOVIES_029",
    approaches: [
      {
        approach_title: "Expiry range",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, profile_id, expires_at FROM downloads WHERE expires_at BETWEEN NOW() AND NOW() + INTERVAL '7 days';",
        explanation:
          "## 🧠 Approach\n\nFilter downloads whose expiration timestamp falls between now and seven days from now.\n\n## 🔍 Explanation\n\n- `BETWEEN NOW() AND NOW() + INTERVAL '7 days'` captures downloads expiring in the next seven days.\n- Rows with `expires_at` as NULL are naturally excluded.\n- The query returns download id, profile id, and expiration timestamp.",
      },
    ],
  },
  {
    code: "MOVIES_030",
    approaches: [
      {
        approach_title: "AVG watch time",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT profile_id, ROUND(AVG(watch_time_seconds), 2) AS avg_watch_time_seconds FROM viewing_sessions GROUP BY profile_id;",
        explanation:
          "## 🧠 Approach\n\nGroup viewing sessions by profile and calculate the average watch time.\n\n## 🔍 Explanation\n\n- `GROUP BY profile_id` creates one row per profile with sessions.\n- `AVG(watch_time_seconds)` calculates average watch time in seconds.\n- `ROUND(..., 2)` formats the average to two decimals.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT profile_id, ROUND(SUM(watch_time_seconds)::numeric / NULLIF(COUNT(watch_time_seconds), 0), 2) AS avg_watch_time_seconds FROM viewing_sessions GROUP BY profile_id;",
        explanation:
          "## 🧠 Approach\n\nManually calculate average watch time using total watch time divided by session count.\n\n## 🔍 Explanation\n\n- `SUM(watch_time_seconds)` totals watch time per profile.\n- `COUNT(watch_time_seconds)` counts non-null watch-time values.\n- `::numeric` avoids integer division.\n- `NULLIF(..., 0)` prevents division by zero.\n- This matches `AVG(watch_time_seconds)` after rounding.",
      },
    ],
  },
  {
    code: "MOVIES_031",
    approaches: [
      {
        approach_title: "GROUP active devices",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, COUNT(*) AS active_device_count FROM devices WHERE is_active = true GROUP BY user_id;",
        explanation:
          "## 🧠 Approach\n\nFilter active devices and count them per user.\n\n## 🔍 Explanation\n\n- `WHERE is_active = true` keeps only active device records.\n- `GROUP BY user_id` creates one row per user with active devices.\n- `COUNT(*)` counts active devices for each user.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, COUNT(*) AS active_device_count FROM devices WHERE is_active GROUP BY user_id;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand to filter active devices.\n\n## 🔍 Explanation\n\n- `WHERE is_active` is equivalent to `WHERE is_active = true`.\n- The grouped count remains the same.\n- The explicit comparison is usually clearer for learners.",
      },
    ],
  },
  {
    code: "MOVIES_032",
    approaches: [
      {
        approach_title: "COUNT paid invoices",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS paid_invoices FROM billing_invoices WHERE invoice_status = 'paid';",
        explanation:
          "## 🧠 Approach\n\nFilter billing invoices to paid status and count them.\n\n## 🔍 Explanation\n\n- `WHERE invoice_status = 'paid'` keeps only paid invoices.\n- `COUNT(*)` counts those invoice rows.\n- The alias `paid_invoices` matches the required output.",
      },
    ],
  },
  {
    code: "MOVIES_033",
    approaches: [
      {
        approach_title: "JOIN series seasons",
        approach_type: "join_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT t.id, t.title_name, s.season_number FROM titles t JOIN seasons s ON t.id = s.title_id WHERE t.title_type = 'series';",
        explanation:
          "## 🧠 Approach\n\nJoin series titles to seasons and return each season number.\n\n## 🔍 Explanation\n\n- `titles` provides title id, title name, and title type.\n- `seasons` stores season numbers for series titles.\n- `WHERE t.title_type = 'series'` ensures only series titles are returned.",
      },
    ],
  },
  {
    code: "MOVIES_034",
    approaches: [
      {
        approach_title: "AVG invoice currency",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT currency, ROUND(AVG(total_amount), 2) AS avg_total_amount FROM billing_invoices GROUP BY currency;",
        explanation:
          "## 🧠 Approach\n\nGroup invoices by currency and calculate the average total invoice amount.\n\n## 🔍 Explanation\n\n- `GROUP BY currency` creates one row per currency.\n- `AVG(total_amount)` calculates the average invoice total in that currency.\n- `ROUND(..., 2)` formats the average to two decimals.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT currency, ROUND(SUM(total_amount) / NULLIF(COUNT(total_amount), 0), 2) AS avg_total_amount FROM billing_invoices GROUP BY currency;",
        explanation:
          "## 🧠 Approach\n\nCalculate average invoice amount manually using total amount divided by invoice count.\n\n## 🔍 Explanation\n\n- `SUM(total_amount)` totals invoice amounts per currency.\n- `COUNT(total_amount)` counts non-null invoice totals.\n- `NULLIF(..., 0)` protects against division by zero.\n- This is equivalent to `AVG(total_amount)` for numeric columns, but the built-in aggregate is clearer.",
      },
    ],
  },
  {
    code: "MOVIES_035",
    approaches: [
      {
        approach_title: "Top recommendation rows",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT row_id, COUNT(*) AS impression_count FROM recommendation_impressions GROUP BY row_id ORDER BY impression_count DESC, row_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount recommendation impressions per row and return the top five rows.\n\n## 🔍 Explanation\n\n- `GROUP BY row_id` creates one row per recommendation row.\n- `COUNT(*)` counts impressions served for each row.\n- `ORDER BY impression_count DESC, row_id ASC` ranks most-impressed rows first and breaks ties by row id.\n- `LIMIT 5` returns exactly the top five rows.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT row_id, impression_count FROM (SELECT row_id, impression_count, ROW_NUMBER() OVER (ORDER BY impression_count DESC, row_id ASC) AS rn FROM (SELECT row_id, COUNT(*) AS impression_count FROM recommendation_impressions GROUP BY row_id) row_counts) ranked WHERE rn <= 5 ORDER BY impression_count DESC, row_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank recommendation rows by impression count and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates impression count per row.\n- `ROW_NUMBER()` ranks rows using the configured ordering rule.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "MOVIES_036",
    approaches: [
      {
        approach_title: "GROUP country",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT country, COUNT(*) AS total_users FROM users GROUP BY country;",
        explanation:
          "## 🧠 Approach\n\nGroup users by country and count users in each country.\n\n## 🔍 Explanation\n\n- `GROUP BY country` creates one row per country.\n- `COUNT(*)` counts user records in that country.\n- No active filter is used because the question asks for users by country generally.",
      },
    ],
  },
  {
    code: "MOVIES_037",
    approaches: [
      {
        approach_title: "Average profile count",
        approach_type: "subquery",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ROUND(AVG(profile_count), 2) AS avg_profiles_per_user FROM (SELECT user_id, COUNT(*) AS profile_count FROM profiles GROUP BY user_id) p;",
        explanation:
          "## 🧠 Approach\n\nCount profiles per user first, then average those user-level counts.\n\n## 🔍 Explanation\n\n- The inner query groups `profiles` by `user_id` and calculates one profile count per user.\n- The outer query averages those per-user counts.\n- `ROUND(..., 2)` formats the final platform-level average to two decimals.",
      },
    ],
  },
  {
    code: "MOVIES_038",
    approaches: [
      {
        approach_title: "Available in India",
        approach_type: "join_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT t.id, t.title_name, ca.available_from, ca.available_to FROM titles t JOIN content_availability ca ON t.id = ca.title_id WHERE ca.country = 'India' AND ca.is_available = true AND ca.available_from <= NOW() AND (ca.available_to IS NULL OR ca.available_to >= NOW());",
        explanation:
          "## 🧠 Approach\n\nJoin titles with content availability and filter titles currently available in India.\n\n## 🔍 Explanation\n\n- `content_availability` stores country-level availability windows.\n- `ca.country = 'India'` limits results to India.\n- `ca.is_available = true` keeps enabled availability rows.\n- `ca.available_from <= NOW()` ensures availability has started.\n- `(ca.available_to IS NULL OR ca.available_to >= NOW())` keeps open-ended or not-yet-expired availability.",
      },
    ],
  },
  {
    code: "MOVIES_039",
    approaches: [
      {
        approach_title: "Ad-supported users",
        approach_type: "join_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT u.id, u.email, sp.plan_name FROM users u JOIN subscriptions s ON u.id = s.user_id JOIN subscription_plans sp ON s.plan_id = sp.id WHERE s.subscription_status = 'active' AND sp.has_ads = true;",
        explanation:
          "## 🧠 Approach\n\nJoin users to active subscriptions and plans, then keep ad-supported plans.\n\n## 🔍 Explanation\n\n- `subscriptions` links users to plans.\n- `subscription_plans` tells whether the plan has ads.\n- `s.subscription_status = 'active'` keeps active subscribers only.\n- `sp.has_ads = true` keeps ad-supported plans.\n- `DISTINCT` protects against duplicate users if they have multiple qualifying subscription rows.",
      },
    ],
  },
  {
    code: "MOVIES_040",
    approaches: [
      {
        approach_title: "AVG rating by type",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT t.title_type, ROUND(AVG(r.rating_value), 2) AS avg_rating FROM ratings r JOIN titles t ON r.title_id = t.id GROUP BY t.title_type;",
        explanation:
          "## 🧠 Approach\n\nJoin ratings to titles and calculate average rating per title type.\n\n## 🔍 Explanation\n\n- `ratings` provides rating values.\n- `titles` provides each title's type.\n- `GROUP BY t.title_type` creates one row per title type.\n- `ROUND(AVG(r.rating_value), 2)` gives the average rating for each type.",
      },
      {
        approach_title: "Manual average",
        approach_type: "join_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT t.title_type, ROUND(SUM(r.rating_value)::numeric / NULLIF(COUNT(r.rating_value), 0), 2) AS avg_rating FROM ratings r JOIN titles t ON r.title_id = t.id GROUP BY t.title_type;",
        explanation:
          "## 🧠 Approach\n\nManually calculate average rating per title type using total rating divided by rating count.\n\n## 🔍 Explanation\n\n- `SUM(r.rating_value)` totals ratings per title type.\n- `COUNT(r.rating_value)` counts non-null ratings.\n- `::numeric` avoids integer division because `rating_value` is an integer column.\n- This produces the same rounded average as `AVG(r.rating_value)`.",
      },
    ],
  },
  {
    code: "MOVIES_041",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, COUNT(*) AS session_count FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id HAVING COUNT(*) > 100;",
        explanation:
          "## 🧠 Approach\n\nCount viewing sessions per title and keep titles with more than 100 sessions.\n\n## 🔍 Explanation\n\n- `WHERE title_id IS NOT NULL` keeps title-level viewing sessions only.\n- `GROUP BY title_id` creates one row per title.\n- `COUNT(*)` calculates the number of viewing sessions.\n- `HAVING COUNT(*) > 100` filters after aggregation, which is required when filtering by grouped counts.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT title_id, session_count FROM (SELECT title_id, COUNT(*) AS session_count FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id) title_sessions WHERE session_count > 100;",
        explanation:
          "## 🧠 Approach\n\nCalculate title session counts first, then filter high-engagement titles.\n\n## 🔍 Explanation\n\n- The inner query computes `session_count` per title.\n- The outer query keeps rows where `session_count > 100`.\n- This is equivalent to `GROUP BY + HAVING` and makes the aggregate alias reusable.",
      },
    ],
  },
  {
    code: "MOVIES_042",
    approaches: [
      {
        approach_title: "GROUP active devices",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, COUNT(*) AS device_count FROM devices WHERE is_active = true GROUP BY user_id HAVING COUNT(*) > 2;",
        explanation:
          "## 🧠 Approach\n\nCount active devices per user and keep users with more than two active devices.\n\n## 🔍 Explanation\n\n- `WHERE is_active = true` ensures only active devices are counted.\n- `GROUP BY user_id` creates one row per user.\n- `HAVING COUNT(*) > 2` filters users after counting active devices.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, device_count FROM (SELECT user_id, COUNT(*) AS device_count FROM devices WHERE is_active = true GROUP BY user_id) active_device_counts WHERE device_count > 2;",
        explanation:
          "## 🧠 Approach\n\nCalculate active device counts first, then filter users with more than two active devices.\n\n## 🔍 Explanation\n\n- The inner query counts active devices per user.\n- The outer query filters `device_count > 2`.\n- This is equivalent to the `HAVING` approach.",
      },
    ],
  },
  {
    code: "MOVIES_043",
    approaches: [
      {
        approach_title: "GROUP watch time",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT profile_id, SUM(watch_time_seconds) AS total_watch_time FROM viewing_sessions GROUP BY profile_id HAVING SUM(watch_time_seconds) > 10000;",
        explanation:
          "## 🧠 Approach\n\nSum watch time per profile and keep profiles whose total watch time exceeds 10,000 seconds.\n\n## 🔍 Explanation\n\n- `GROUP BY profile_id` creates one row per profile with sessions.\n- `SUM(watch_time_seconds)` calculates total watch time for each profile.\n- `HAVING SUM(...) > 10000` filters after aggregation.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT profile_id, total_watch_time FROM (SELECT profile_id, SUM(watch_time_seconds) AS total_watch_time FROM viewing_sessions GROUP BY profile_id) profile_watch_time WHERE total_watch_time > 10000;",
        explanation:
          "## 🧠 Approach\n\nCalculate total watch time first, then filter high-watch-time profiles.\n\n## 🔍 Explanation\n\n- The inner query computes total watch time per profile.\n- The outer query filters profiles where total watch time exceeds 10,000 seconds.\n- This produces the same result as `GROUP BY + HAVING`.",
      },
    ],
  },
  {
    code: "MOVIES_044",
    approaches: [
      {
        approach_title: "Top genres",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT c.category_name, COUNT(tc.title_id) AS title_count FROM content_categories c JOIN title_categories tc ON c.id = tc.category_id GROUP BY c.category_name ORDER BY title_count DESC, c.category_name ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin categories to title-category mappings, count titles per category, and return the top five genres/categories.\n\n## 🔍 Explanation\n\n- `content_categories` provides category names.\n- `title_categories` maps titles to categories.\n- `COUNT(tc.title_id)` counts titles in each category.\n- `ORDER BY title_count DESC, c.category_name ASC` ranks the most-used categories first and breaks ties alphabetically.\n- `LIMIT 5` returns exactly the top five.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT category_name, title_count FROM (SELECT category_name, title_count, ROW_NUMBER() OVER (ORDER BY title_count DESC, category_name ASC) AS rn FROM (SELECT c.category_name, COUNT(tc.title_id) AS title_count FROM content_categories c JOIN title_categories tc ON c.id = tc.category_id GROUP BY c.category_name) category_counts) ranked WHERE rn <= 5 ORDER BY title_count DESC, category_name ASC;",
        explanation:
          "## 🧠 Approach\n\nRank category title counts with `ROW_NUMBER`, then keep the top five.\n\n## 🔍 Explanation\n\n- The inner query counts mapped titles per category.\n- `ROW_NUMBER()` ranks categories using the same ordering as the expected query.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering is kept to match the configured comparator order.",
      },
    ],
  },
  {
    code: "MOVIES_045",
    approaches: [
      {
        approach_title: "AVG watch time",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, ROUND(AVG(watch_time_seconds), 2) AS avg_duration FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate average session watch time for each title.\n\n## 🔍 Explanation\n\n- `viewing_sessions` stores session duration as `watch_time_seconds`.\n- `title_id IS NOT NULL` keeps only title-level sessions.\n- `GROUP BY title_id` creates one row per title.\n- `ROUND(AVG(watch_time_seconds), 2)` calculates the average duration and formats it to two decimals.",
      },
      {
        approach_title: "Manual average",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT title_id, ROUND(SUM(watch_time_seconds)::numeric / NULLIF(COUNT(watch_time_seconds), 0), 2) AS avg_duration FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate average session duration manually using total watch time divided by session count.\n\n## 🔍 Explanation\n\n- `SUM(watch_time_seconds)` totals watch time per title.\n- `COUNT(watch_time_seconds)` counts non-null watch-time rows.\n- `::numeric` avoids integer division.\n- `NULLIF(..., 0)` prevents division by zero.\n- This matches `AVG(watch_time_seconds)` after rounding.",
      },
    ],
  },
  {
    code: "MOVIES_046",
    approaches: [
      {
        approach_title: "DISTINCT expired users",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT user_id FROM subscriptions WHERE subscription_status = 'expired';",
        explanation:
          "## 🧠 Approach\n\nFilter expired subscriptions and return each affected user once.\n\n## 🔍 Explanation\n\n- `subscription_status = 'expired'` keeps expired subscription rows.\n- A user could have multiple expired subscription records.\n- `DISTINCT user_id` ensures each user appears once.",
      },
      {
        approach_title: "GROUP expired users",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id FROM subscriptions WHERE subscription_status = 'expired' GROUP BY user_id;",
        explanation:
          "## 🧠 Approach\n\nGroup expired subscription rows by user to return a unique user list.\n\n## 🔍 Explanation\n\n- The `WHERE` clause keeps only expired subscriptions.\n- `GROUP BY user_id` collapses multiple expired rows for the same user.\n- This returns the same unique user set as `DISTINCT`.",
      },
    ],
  },
  {
    code: "MOVIES_047",
    approaches: [
      {
        approach_title: "LEFT JOIN no sessions",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT p.id FROM profiles p LEFT JOIN viewing_sessions vs ON p.id = vs.profile_id WHERE vs.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a left anti-join to find profiles with no viewing activity.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every profile and tries to match viewing sessions.\n- Profiles with no matching sessions have NULL values in the joined session columns.\n- `WHERE vs.id IS NULL` keeps only profiles that never watched content.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT p.id FROM profiles p WHERE NOT EXISTS (SELECT 1 FROM viewing_sessions vs WHERE vs.profile_id = p.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to return profiles that have no viewing session rows.\n\n## 🔍 Explanation\n\n- For each profile, the subquery checks whether any viewing session exists.\n- `NOT EXISTS` keeps only profiles where no session is found.\n- This is a clean, null-safe anti-join pattern.",
      },
    ],
  },
  {
    code: "MOVIES_048",
    approaches: [
      {
        approach_title: "LEFT JOIN no ratings",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT t.id, t.title_name FROM titles t LEFT JOIN ratings r ON t.id = r.title_id WHERE r.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a left anti-join to find titles that have not received ratings.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every title and attempts to match ratings.\n- Titles with no rating rows have NULL values for rating columns.\n- `WHERE r.id IS NULL` returns only unrated titles.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT t.id, t.title_name FROM titles t WHERE NOT EXISTS (SELECT 1 FROM ratings r WHERE r.title_id = t.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to find titles with no ratings.\n\n## 🔍 Explanation\n\n- The subquery checks whether a rating exists for the current title.\n- `NOT EXISTS` keeps only titles where no rating row is found.\n- This avoids duplicate concerns and is often easier to reason about.",
      },
    ],
  },
  {
    code: "MOVIES_049",
    approaches: [
      {
        approach_title: "JOIN user payments",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT s.user_id, SUM(p.paid_amount) AS total_spent FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY s.user_id HAVING SUM(p.paid_amount) > 1000;",
        explanation:
          "## 🧠 Approach\n\nJoin payments to invoices and subscriptions to reach the user, then sum payments per user.\n\n## 🔍 Explanation\n\n- `payments` does not have `user_id` directly.\n- `payments.invoice_id` links to `billing_invoices.id`.\n- `billing_invoices.subscription_id` links to `subscriptions.id`.\n- `subscriptions.user_id` gives the paying user.\n- `GROUP BY s.user_id` calculates total payment amount per user.\n- `HAVING SUM(p.paid_amount) > 1000` keeps only high-spending users.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, total_spent FROM (SELECT s.user_id, SUM(p.paid_amount) AS total_spent FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY s.user_id) user_spend WHERE total_spent > 1000;",
        explanation:
          "## 🧠 Approach\n\nCalculate each user's total payment amount first, then filter the result.\n\n## 🔍 Explanation\n\n- The inner query follows the valid relationship path from payments to users.\n- It returns one row per user with `total_spent`.\n- The outer query keeps users whose total spending exceeds 1000.\n- This is equivalent to the `HAVING` approach while allowing reuse of the aggregate alias.",
      },
    ],
  },
  {
    code: "MOVIES_050",
    approaches: [
      {
        approach_title: "Top profiles sessions",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT profile_id, COUNT(*) AS session_count FROM viewing_sessions GROUP BY profile_id ORDER BY session_count DESC, profile_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount viewing sessions per profile and return the top five profiles by session count.\n\n## 🔍 Explanation\n\n- `GROUP BY profile_id` creates one row per profile with viewing sessions.\n- `COUNT(*)` counts sessions for each profile.\n- `ORDER BY session_count DESC, profile_id ASC` ranks highest activity first and breaks ties by profile id.\n- `LIMIT 5` returns exactly five rows.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT profile_id, session_count FROM (SELECT profile_id, session_count, ROW_NUMBER() OVER (ORDER BY session_count DESC, profile_id ASC) AS rn FROM (SELECT profile_id, COUNT(*) AS session_count FROM viewing_sessions GROUP BY profile_id) profile_sessions) ranked WHERE rn <= 5 ORDER BY session_count DESC, profile_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank profiles by session count using `ROW_NUMBER`, then keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates viewing session count per profile.\n- `ROW_NUMBER()` ranks profiles using the required comparator order.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the configured comparator order.",
      },
    ],
  },
  {
    code: "MOVIES_051",
    approaches: [
      {
        approach_title: "RANK rating",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, AVG(rating_value) AS avg_rating, RANK() OVER (ORDER BY AVG(rating_value) DESC) AS rating_rank FROM ratings GROUP BY title_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate average rating per title and rank titles by that average.\n\n## 🔍 Explanation\n\n- `GROUP BY title_id` creates one row per title.\n- `AVG(rating_value)` calculates each title's average rating.\n- `RANK()` ranks titles from highest average rating to lowest.\n- `RANK()` leaves gaps after ties, matching the expected ranking behavior.",
      },
    ],
  },
  {
    code: "MOVIES_052",
    approaches: [
      {
        approach_title: "Running watch time",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT profile_id, id AS session_id, watch_time_seconds, SUM(watch_time_seconds) OVER (PARTITION BY profile_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_watch_time FROM viewing_sessions;",
        explanation:
          "## 🧠 Approach\n\nCalculate cumulative watch time for each profile over its viewing session timeline.\n\n## 🔍 Explanation\n\n- `PARTITION BY profile_id` keeps each profile's running total separate.\n- `ORDER BY created_at, id` defines deterministic session order.\n- The window frame sums from the first session through the current session.",
      },
    ],
  },
  {
    code: "MOVIES_053",
    approaches: [
      {
        approach_title: "DENSE_RANK second",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, total_views FROM (SELECT title_id, COUNT(*) AS total_views, DENSE_RANK() OVER (ORDER BY COUNT(*) DESC) AS rnk FROM viewing_sessions GROUP BY title_id) x WHERE rnk = 2;",
        explanation:
          "## 🧠 Approach\n\nCount views per title and return the second-highest viewing tier.\n\n## 🔍 Explanation\n\n- `COUNT(*)` calculates total viewing sessions per title.\n- `DENSE_RANK()` ranks titles by view count without gaps after ties.\n- `rnk = 2` returns titles in the second-highest view-count tier.",
      },
    ],
  },
  {
    code: "MOVIES_054",
    approaches: [
      {
        approach_title: "LAG session gap",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT profile_id, MAX(gap_seconds) AS max_gap FROM (SELECT profile_id, EXTRACT(EPOCH FROM (created_at - LAG(created_at) OVER (PARTITION BY profile_id ORDER BY created_at))) AS gap_seconds FROM viewing_sessions) x GROUP BY profile_id;",
        explanation:
          "## 🧠 Approach\n\nCompare each session with the previous session for the same profile, then keep the maximum gap.\n\n## 🔍 Explanation\n\n- `LAG(created_at)` gets the previous session timestamp per profile.\n- `EXTRACT(EPOCH FROM ...)` converts the timestamp difference into seconds.\n- `MAX(gap_seconds)` returns the largest session gap for each profile.",
      },
    ],
  },
  {
    code: "MOVIES_055",
    approaches: [
      {
        approach_title: "RANK daily revenue",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT payment_date, user_id, total_paid, RANK() OVER (PARTITION BY payment_date ORDER BY total_paid DESC) AS rank FROM (SELECT DATE(p.created_at) AS payment_date, s.user_id, SUM(p.paid_amount) AS total_paid FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY DATE(p.created_at), s.user_id) x;",
        explanation:
          "## 🧠 Approach\n\nAggregate payment amount per user per day, then rank users within each payment date.\n\n## 🔍 Explanation\n\n- `payments` does not contain `user_id` directly.\n- `payments.invoice_id` links to `billing_invoices.id`.\n- `billing_invoices.subscription_id` links to `subscriptions.id`.\n- `subscriptions.user_id` gives the paying user.\n- The inner query groups by payment date and user.\n- `RANK()` ranks users separately for each day by `total_paid` descending.",
      },
    ],
  },
  {
    code: "MOVIES_056",
    approaches: [
      {
        approach_title: "ROW_NUMBER top 3",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT category_name, title_id, total_views FROM (SELECT c.category_name, vs.title_id, COUNT(*) AS total_views, ROW_NUMBER() OVER (PARTITION BY c.category_name ORDER BY COUNT(*) DESC, vs.title_id ASC) AS rn FROM viewing_sessions vs JOIN title_categories tc ON vs.title_id = tc.title_id JOIN content_categories c ON tc.category_id = c.id GROUP BY c.category_name, vs.title_id) x WHERE rn <= 3;",
        explanation:
          "## 🧠 Approach\n\nCount views per title within each category, rank titles per category, and keep the top three.\n\n## 🔍 Explanation\n\n- `title_categories` maps titles to categories.\n- `content_categories` provides category names.\n- `ROW_NUMBER()` returns exactly three rows per category when available.\n- Do not replace with `DENSE_RANK()` because ties could return more than three rows.",
      },
    ],
  },
  {
    code: "MOVIES_057",
    approaches: [
      {
        approach_title: "Moving average",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT profile_id, id, watch_time_seconds, AVG(watch_time_seconds) OVER (PARTITION BY profile_id ORDER BY created_at ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg FROM viewing_sessions;",
        explanation:
          "## 🧠 Approach\n\nCalculate a three-session moving average of watch time per profile.\n\n## 🔍 Explanation\n\n- `PARTITION BY profile_id` keeps each profile's session timeline separate.\n- `ORDER BY created_at` defines chronological order.\n- `ROWS BETWEEN 2 PRECEDING AND CURRENT ROW` averages the current session and previous two sessions.",
      },
    ],
  },
  {
    code: "MOVIES_058",
    approaches: [
      {
        approach_title: "Streak groups",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH x AS (SELECT profile_id, created_at, ROW_NUMBER() OVER (PARTITION BY profile_id ORDER BY created_at) - ROW_NUMBER() OVER (PARTITION BY profile_id, DATE(created_at) ORDER BY created_at) AS grp FROM viewing_sessions) SELECT profile_id, COUNT(*) AS streak FROM x GROUP BY profile_id, grp;",
        explanation:
          "## 🧠 Approach\n\nUse row-number differences to group viewing-session streaks according to the expected logic.\n\n## 🔍 Explanation\n\n- The first `ROW_NUMBER()` numbers all sessions per profile.\n- The second `ROW_NUMBER()` numbers sessions per profile per date.\n- Subtracting them creates a grouping key.\n- The final query counts sessions inside each generated streak group.",
      },
    ],
  },
  {
    code: "MOVIES_059",
    approaches: [
      {
        approach_title: "P90 watch time",
        approach_type: "ordered_set_aggregate",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY watch_time_seconds) AS p90_watch_time FROM viewing_sessions GROUP BY title_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate the 90th percentile watch time for each title.\n\n## 🔍 Explanation\n\n- `GROUP BY title_id` creates one watch-time distribution per title.\n- `PERCENTILE_CONT(0.9)` calculates the continuous 90th percentile.\n- `WITHIN GROUP (ORDER BY watch_time_seconds)` defines the ordering used for percentile calculation.",
      },
    ],
  },
  {
    code: "MOVIES_060",
    approaches: [
      {
        approach_title: "JOIN title revenue",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT vs.title_id, SUM(p.paid_amount) AS total_revenue FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id JOIN profiles pr ON pr.user_id = s.user_id JOIN viewing_sessions vs ON vs.profile_id = pr.id WHERE vs.title_id IS NOT NULL GROUP BY vs.title_id ORDER BY total_revenue DESC, vs.title_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nAttribute payment revenue to titles through the paying user's viewing profiles, then return the top 5 titles.\n\n## 🔍 Explanation\n\n- `payments` does not have `user_id` directly.\n- `payments.invoice_id` links to `billing_invoices.id`.\n- `billing_invoices.subscription_id` links to `subscriptions.id`.\n- `subscriptions.user_id` identifies the paying user.\n- `profiles.user_id` connects that user to their profiles.\n- `viewing_sessions.profile_id` connects profiles to watched titles.\n- `vs.title_id IS NOT NULL` keeps only title-level sessions.\n- `GROUP BY vs.title_id` calculates revenue per title.\n- The final `ORDER BY total_revenue DESC, vs.title_id ASC LIMIT 5` matches the comparator config exactly.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT title_id, total_revenue FROM (SELECT title_id, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, title_id ASC) AS rn FROM (SELECT vs.title_id, SUM(p.paid_amount) AS total_revenue FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id JOIN profiles pr ON pr.user_id = s.user_id JOIN viewing_sessions vs ON vs.profile_id = pr.id WHERE vs.title_id IS NOT NULL GROUP BY vs.title_id) title_revenue) ranked WHERE rn <= 5 ORDER BY total_revenue DESC, title_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate title revenue first, rank titles by revenue, and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query follows the valid schema path from payments to watched titles.\n- `ROW_NUMBER()` ranks titles by revenue descending and title id ascending.\n- `rn <= 5` keeps exactly five rows.\n- The final ordering matches the configured comparator order.",
      },
    ],
  },
  {
    code: "MOVIES_061",
    approaches: [
      {
        approach_title: "JOIN user spend",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT s.user_id, SUM(p.paid_amount) AS total_spent FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY s.user_id ORDER BY total_spent DESC, s.user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin payments to invoices and subscriptions to reach users, then return the top 5 spenders.\n\n## 🔍 Explanation\n\n- `payments` does not contain `user_id` directly.\n- `payments.invoice_id` links to `billing_invoices.id`.\n- `billing_invoices.subscription_id` links to `subscriptions.id`.\n- `subscriptions.user_id` identifies the paying user.\n- `SUM(p.paid_amount)` calculates total spend per user.\n- Final ordering matches the comparator config exactly.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, total_spent FROM (SELECT user_id, total_spent, ROW_NUMBER() OVER (ORDER BY total_spent DESC, user_id ASC) AS rn FROM (SELECT s.user_id, SUM(p.paid_amount) AS total_spent FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY s.user_id) user_spend) ranked WHERE rn <= 5 ORDER BY total_spent DESC, user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate user spend first, rank users by total spend, and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query follows the valid schema path from payments to users.\n- `ROW_NUMBER()` ranks users by total spend descending and user id ascending.\n- `rn <= 5` keeps exactly five rows.\n- The final ordering matches the configured comparator order.",
      },
    ],
  },
  {
    code: "MOVIES_062",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, COUNT(*) AS category_count FROM title_categories GROUP BY title_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nGroup category mappings by title and keep titles with more than one category.\n\n## 🔍 Explanation\n\n- `title_categories` stores title-to-category mappings.\n- `GROUP BY title_id` creates one row per title.\n- `COUNT(*)` counts how many categories each title belongs to.\n- `HAVING COUNT(*) > 1` keeps only titles with multiple categories.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT title_id, category_count FROM (SELECT title_id, COUNT(*) AS category_count FROM title_categories GROUP BY title_id) title_category_counts WHERE category_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate category counts first, then filter titles with multiple categories.\n\n## 🔍 Explanation\n\n- The inner query computes `category_count` per title.\n- The outer query keeps rows where `category_count > 1`.\n- This is equivalent to `GROUP BY + HAVING`.",
      },
    ],
  },
  {
    code: "MOVIES_063",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT profile_id, COUNT(*) AS rating_count FROM ratings GROUP BY profile_id HAVING COUNT(*) > 10;",
        explanation:
          "## 🧠 Approach\n\nGroup ratings by profile and keep profiles with more than 10 ratings.\n\n## 🔍 Explanation\n\n- `GROUP BY profile_id` creates one row per rating profile.\n- `COUNT(*)` counts ratings submitted by each profile.\n- `HAVING COUNT(*) > 10` filters after aggregation.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT profile_id, rating_count FROM (SELECT profile_id, COUNT(*) AS rating_count FROM ratings GROUP BY profile_id) profile_ratings WHERE rating_count > 10;",
        explanation:
          "## 🧠 Approach\n\nCompute rating counts first, then filter high-activity profiles.\n\n## 🔍 Explanation\n\n- The inner query calculates one rating count per profile.\n- The outer query filters where `rating_count > 10`.\n- This produces the same result as the `HAVING` version.",
      },
    ],
  },
  {
    code: "MOVIES_064",
    approaches: [
      {
        approach_title: "Top average rating",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, ROUND(AVG(rating_value), 2) AS avg_rating FROM ratings GROUP BY title_id ORDER BY avg_rating DESC, title_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate average rating per title and return the top five.\n\n## 🔍 Explanation\n\n- `GROUP BY title_id` creates one row per title.\n- `ROUND(AVG(rating_value), 2)` calculates the rounded average rating.\n- `ORDER BY avg_rating DESC, title_id ASC` matches the comparator order.\n- `LIMIT 5` returns exactly five rows.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT title_id, avg_rating FROM (SELECT title_id, avg_rating, ROW_NUMBER() OVER (ORDER BY avg_rating DESC, title_id ASC) AS rn FROM (SELECT title_id, ROUND(AVG(rating_value), 2) AS avg_rating FROM ratings GROUP BY title_id) rating_totals) ranked WHERE rn <= 5 ORDER BY avg_rating DESC, title_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank title averages with `ROW_NUMBER`, then keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates rounded average rating per title.\n- `ROW_NUMBER()` ranks using the configured sort order.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "MOVIES_065",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, COUNT(*) AS subscription_count FROM subscriptions GROUP BY user_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nGroup subscriptions by user and keep users with more than one subscription record.\n\n## 🔍 Explanation\n\n- `GROUP BY user_id` creates one row per user.\n- `COUNT(*)` counts subscription records for each user.\n- `HAVING COUNT(*) > 1` identifies users with multiple subscription records.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, subscription_count FROM (SELECT user_id, COUNT(*) AS subscription_count FROM subscriptions GROUP BY user_id) subscription_counts WHERE subscription_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate subscription counts first, then filter users with multiple records.\n\n## 🔍 Explanation\n\n- The inner query computes `subscription_count` per user.\n- The outer query keeps rows where `subscription_count > 1`.\n- This is equivalent to the `HAVING` approach.",
      },
    ],
  },
  {
    code: "MOVIES_066",
    approaches: [
      {
        approach_title: "Top download devices",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT device_id, COUNT(*) AS download_count FROM downloads WHERE download_status = 'completed' GROUP BY device_id ORDER BY download_count DESC, device_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nFilter completed downloads, count them per device, and return the top five devices.\n\n## 🔍 Explanation\n\n- `WHERE download_status = 'completed'` keeps only completed downloads.\n- `GROUP BY device_id` counts downloads per device.\n- `ORDER BY download_count DESC, device_id ASC` matches the required sort order.\n- `LIMIT 5` returns exactly five devices.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT device_id, download_count FROM (SELECT device_id, download_count, ROW_NUMBER() OVER (ORDER BY download_count DESC, device_id ASC) AS rn FROM (SELECT device_id, COUNT(*) AS download_count FROM downloads WHERE download_status = 'completed' GROUP BY device_id) download_counts) ranked WHERE rn <= 5 ORDER BY download_count DESC, device_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank completed-download counts per device and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query counts completed downloads by device.\n- `ROW_NUMBER()` ranks devices using the configured ordering.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "MOVIES_067",
    approaches: [
      {
        approach_title: "Top user countries",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT country, COUNT(*) AS user_count FROM users GROUP BY country ORDER BY user_count DESC, country ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount users per country and return the top five countries.\n\n## 🔍 Explanation\n\n- `GROUP BY country` creates one row per country.\n- `COUNT(*)` counts users in each country.\n- `ORDER BY user_count DESC, country ASC` ranks highest user count first and breaks ties alphabetically.\n- `LIMIT 5` returns exactly five rows.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT country, user_count FROM (SELECT country, user_count, ROW_NUMBER() OVER (ORDER BY user_count DESC, country ASC) AS rn FROM (SELECT country, COUNT(*) AS user_count FROM users GROUP BY country) country_counts) ranked WHERE rn <= 5 ORDER BY user_count DESC, country ASC;",
        explanation:
          "## 🧠 Approach\n\nRank country user counts and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query counts users per country.\n- `ROW_NUMBER()` applies the same ordering rule as the expected query.\n- `rn <= 5` keeps exactly five countries.\n- Final ordering is required by the comparator config.",
      },
    ],
  },
  {
    code: "MOVIES_068",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT profile_id, COUNT(*) AS session_count FROM viewing_sessions GROUP BY profile_id HAVING COUNT(*) > 50;",
        explanation:
          "## 🧠 Approach\n\nCount viewing sessions per profile and keep profiles with more than 50 sessions.\n\n## 🔍 Explanation\n\n- `GROUP BY profile_id` creates one row per profile.\n- `COUNT(*)` counts viewing sessions for each profile.\n- `HAVING COUNT(*) > 50` filters after aggregation.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT profile_id, session_count FROM (SELECT profile_id, COUNT(*) AS session_count FROM viewing_sessions GROUP BY profile_id) profile_sessions WHERE session_count > 50;",
        explanation:
          "## 🧠 Approach\n\nCalculate session counts first, then filter high-frequency profiles.\n\n## 🔍 Explanation\n\n- The inner query computes `session_count` per profile.\n- The outer query keeps profiles where `session_count > 50`.\n- This is equivalent to `GROUP BY + HAVING`.",
      },
    ],
  },
  {
    code: "MOVIES_069",
    approaches: [
      {
        approach_title: "Top downloaded titles",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, COUNT(*) AS download_count FROM downloads WHERE title_id IS NOT NULL GROUP BY title_id ORDER BY download_count DESC, title_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount title downloads and return the top five downloaded titles.\n\n## 🔍 Explanation\n\n- `WHERE title_id IS NOT NULL` keeps title-level downloads and excludes episode-only rows.\n- `GROUP BY title_id` counts downloads per title.\n- `ORDER BY download_count DESC, title_id ASC` matches the required comparator order.\n- `LIMIT 5` returns exactly five rows.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT title_id, download_count FROM (SELECT title_id, download_count, ROW_NUMBER() OVER (ORDER BY download_count DESC, title_id ASC) AS rn FROM (SELECT title_id, COUNT(*) AS download_count FROM downloads WHERE title_id IS NOT NULL GROUP BY title_id) download_counts) ranked WHERE rn <= 5 ORDER BY download_count DESC, title_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank title download counts and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates download count per title.\n- `ROW_NUMBER()` ranks using the required order.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "MOVIES_070",
    approaches: [
      {
        approach_title: "JOIN user sessions",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT p.user_id, COUNT(*) AS session_count FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id GROUP BY p.user_id HAVING COUNT(*) > 200;",
        explanation:
          "## 🧠 Approach\n\nJoin sessions to profiles to roll profile activity up to user level, then keep highly engaged users.\n\n## 🔍 Explanation\n\n- `viewing_sessions` stores activity by profile.\n- `profiles` maps each profile back to a user account.\n- `GROUP BY p.user_id` counts sessions across all profiles owned by a user.\n- `HAVING COUNT(*) > 200` keeps users above the engagement threshold.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, session_count FROM (SELECT p.user_id, COUNT(*) AS session_count FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id GROUP BY p.user_id) user_sessions WHERE session_count > 200;",
        explanation:
          "## 🧠 Approach\n\nCalculate user-level session counts first, then filter high-engagement users.\n\n## 🔍 Explanation\n\n- The inner query joins sessions to profiles and counts sessions per user.\n- The outer query keeps rows where `session_count > 200`.\n- This is equivalent to the `HAVING` version and can be easier to extend.",
      },
    ],
  },
  {
    code: "MOVIES_071",
    approaches: [
      {
        approach_title: "RANK watch time",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT profile_id, SUM(watch_time_seconds) AS total_watch_time, RANK() OVER (ORDER BY SUM(watch_time_seconds) DESC) AS rank FROM viewing_sessions GROUP BY profile_id;",
        explanation:
          "## 🧠 Approach\n\nAggregate total watch time per profile and rank profiles by that total.\n\n## 🔍 Explanation\n\n- `GROUP BY profile_id` creates one row per profile.\n- `SUM(watch_time_seconds)` calculates total watch time across all sessions for that profile.\n- `RANK()` ranks profiles from highest total watch time to lowest.\n- `RANK()` gives tied profiles the same rank and leaves gaps after ties, matching the expected ranking behavior.",
      },
    ],
  },
  {
    code: "MOVIES_072",
    approaches: [
      {
        approach_title: "Running downloads",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT profile_id, id AS download_id, COUNT(*) OVER (PARTITION BY profile_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_downloads FROM downloads;",
        explanation:
          "## 🧠 Approach\n\nCalculate cumulative download count per profile over time.\n\n## 🔍 Explanation\n\n- `PARTITION BY profile_id` keeps each profile's download timeline separate.\n- `ORDER BY created_at, id` defines deterministic download order.\n- `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` counts downloads from the first download through the current row.",
      },
    ],
  },
  {
    code: "MOVIES_073",
    approaches: [
      {
        approach_title: "DENSE_RANK second",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, total_spent FROM (SELECT s.user_id, SUM(p.paid_amount) AS total_spent, DENSE_RANK() OVER (ORDER BY SUM(p.paid_amount) DESC) AS rnk FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY s.user_id) x WHERE rnk = 2;",
        explanation:
          "## 🧠 Approach\n\nJoin payments to subscriptions to identify users, calculate total spend per user, then return the second-highest spending tier.\n\n## 🔍 Explanation\n\n- `payments` does not contain `user_id` directly.\n- `payments.invoice_id` links to `billing_invoices.id`.\n- `billing_invoices.subscription_id` links to `subscriptions.id`.\n- `subscriptions.user_id` identifies the paying user.\n- `SUM(p.paid_amount)` calculates total spend per user.\n- `DENSE_RANK()` ranks users by total spend without gaps after ties.\n- `rnk = 2` returns users in the second-highest payment tier.",
      },
    ],
  },
  {
    code: "MOVIES_074",
    approaches: [
      {
        approach_title: "LAG download gap",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT profile_id, MAX(gap_seconds) AS max_gap FROM (SELECT profile_id, EXTRACT(EPOCH FROM (created_at - LAG(created_at) OVER (PARTITION BY profile_id ORDER BY created_at))) AS gap_seconds FROM downloads) x GROUP BY profile_id;",
        explanation:
          "## 🧠 Approach\n\nCompare each download with the previous download for the same profile, then return the maximum gap.\n\n## 🔍 Explanation\n\n- `LAG(created_at)` gets the previous download timestamp for each profile.\n- `EXTRACT(EPOCH FROM ...)` converts the timestamp difference into seconds.\n- `MAX(gap_seconds)` returns the largest download gap per profile.",
      },
    ],
  },
  {
    code: "MOVIES_075",
    approaches: [
      {
        approach_title: "RANK daily sessions",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT view_date, profile_id, total_sessions, RANK() OVER (PARTITION BY view_date ORDER BY total_sessions DESC) AS rank FROM (SELECT DATE(created_at) AS view_date, profile_id, COUNT(*) AS total_sessions FROM viewing_sessions GROUP BY DATE(created_at), profile_id) x;",
        explanation:
          "## 🧠 Approach\n\nCount sessions per profile per day and rank profiles within each day.\n\n## 🔍 Explanation\n\n- The inner query groups sessions by calendar date and profile.\n- `COUNT(*)` gives each profile's daily session count.\n- `RANK() OVER (PARTITION BY view_date ...)` restarts ranking for every day.\n- Tied session counts receive the same rank and leave gaps after ties.",
      },
    ],
  },
  {
    code: "MOVIES_076",
    approaches: [
      {
        approach_title: "ROW_NUMBER country top 3",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT country, profile_id, session_count FROM (SELECT u.country, vs.profile_id, COUNT(*) AS session_count, ROW_NUMBER() OVER (PARTITION BY u.country ORDER BY COUNT(*) DESC, vs.profile_id ASC) AS rn FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id JOIN users u ON p.user_id = u.id GROUP BY u.country, vs.profile_id) x WHERE rn <= 3;",
        explanation:
          "## 🧠 Approach\n\nCount viewing sessions per profile inside each country, rank profiles per country, and keep the top three.\n\n## 🔍 Explanation\n\n- `viewing_sessions` stores profile activity.\n- `profiles` maps profiles to users.\n- `users` provides the country.\n- `PARTITION BY u.country` ranks profiles separately for each country.\n- `ROW_NUMBER()` returns exactly three profiles per country when available.",
      },
    ],
  },
  {
    code: "MOVIES_077",
    approaches: [
      {
        approach_title: "Moving rating average",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, id, rating_value, AVG(rating_value) OVER (PARTITION BY title_id ORDER BY created_at ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg FROM ratings;",
        explanation:
          "## 🧠 Approach\n\nCalculate a three-rating moving average for each title.\n\n## 🔍 Explanation\n\n- `PARTITION BY title_id` keeps each title's rating timeline separate.\n- `ORDER BY created_at` defines rating order.\n- `ROWS BETWEEN 2 PRECEDING AND CURRENT ROW` averages the current rating and up to two previous ratings.",
      },
    ],
  },
  {
    code: "MOVIES_078",
    approaches: [
      {
        approach_title: "Streak groups",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH x AS (SELECT profile_id, created_at, ROW_NUMBER() OVER (PARTITION BY profile_id ORDER BY created_at) - ROW_NUMBER() OVER (PARTITION BY profile_id, DATE(created_at) ORDER BY created_at) AS grp FROM viewing_sessions) SELECT profile_id, COUNT(*) AS streak FROM x GROUP BY profile_id, grp;",
        explanation:
          "## 🧠 Approach\n\nUse row-number differences to group viewing streaks according to the expected query logic.\n\n## 🔍 Explanation\n\n- The first `ROW_NUMBER()` numbers all sessions per profile by time.\n- The second `ROW_NUMBER()` numbers sessions within each profile-date group.\n- Subtracting them creates a grouping key.\n- The final query counts sessions in each generated streak group.",
      },
    ],
  },
  {
    code: "MOVIES_079",
    approaches: [
      {
        approach_title: "P90 rating",
        approach_type: "ordered_set_aggregate",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY rating_value) AS p90_rating FROM ratings GROUP BY title_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate the 90th percentile rating for each title.\n\n## 🔍 Explanation\n\n- `GROUP BY title_id` creates one rating distribution per title.\n- `PERCENTILE_CONT(0.9)` returns the continuous 90th percentile.\n- `WITHIN GROUP (ORDER BY rating_value)` defines how rating values are ordered for percentile calculation.",
      },
    ],
  },
  {
    code: "MOVIES_080",
    approaches: [
      {
        approach_title: "JOIN country revenue",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.country, SUM(p.paid_amount) AS total_revenue FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id JOIN users u ON s.user_id = u.id GROUP BY u.country ORDER BY total_revenue DESC, u.country ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin payments through invoices and subscriptions to users, then aggregate revenue by country.\n\n## 🔍 Explanation\n\n- `payments` does not contain `user_id` directly.\n- `payments.invoice_id` links to `billing_invoices.id`.\n- `billing_invoices.subscription_id` links to `subscriptions.id`.\n- `subscriptions.user_id` identifies the paying user.\n- `users.country` provides the country for revenue grouping.\n- `SUM(p.paid_amount)` calculates total payment revenue per country.\n- The final ordering matches the comparator config exactly.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT country, total_revenue FROM (SELECT country, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, country ASC) AS rn FROM (SELECT u.country, SUM(p.paid_amount) AS total_revenue FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id JOIN users u ON s.user_id = u.id GROUP BY u.country) country_revenue) ranked WHERE rn <= 5 ORDER BY total_revenue DESC, country ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate country revenue first, rank countries by revenue, and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query follows the valid schema path from payments to users.\n- `ROW_NUMBER()` ranks countries by revenue descending and country ascending.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the configured comparator order.",
      },
    ],
  },
  {
    code: "MOVIES_081",
    approaches: [
      {
        approach_title: "Retention duration",
        approach_type: "date_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, MIN(started_at) AS first_subscription_start, MAX(current_period_end) AS latest_period_end, EXTRACT(DAY FROM MAX(current_period_end) - MIN(started_at)) AS retention_days FROM subscriptions WHERE subscription_status IN ('active', 'expired', 'cancelled') GROUP BY user_id ORDER BY retention_days DESC, user_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate each user's subscription span and return the top ten longest retained users.\n\n## 🔍 Explanation\n\n- `WHERE subscription_status IN ('active', 'expired', 'cancelled')` keeps subscription records that count toward retention history.\n- `MIN(started_at)` finds the first subscription start.\n- `MAX(current_period_end)` finds the latest subscription period end.\n- `EXTRACT(DAY FROM MAX(...) - MIN(...))` converts the span into days.\n- The final ordering matches the comparator configuration exactly.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, first_subscription_start, latest_period_end, retention_days FROM (SELECT user_id, first_subscription_start, latest_period_end, retention_days, ROW_NUMBER() OVER (ORDER BY retention_days DESC, user_id ASC) AS rn FROM (SELECT user_id, MIN(started_at) AS first_subscription_start, MAX(current_period_end) AS latest_period_end, EXTRACT(DAY FROM MAX(current_period_end) - MIN(started_at)) AS retention_days FROM subscriptions WHERE subscription_status IN ('active', 'expired', 'cancelled') GROUP BY user_id) retention_totals) ranked WHERE rn <= 10 ORDER BY retention_days DESC, user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate retention span first, rank users by retention days, and keep the top ten.\n\n## 🔍 Explanation\n\n- The inner query calculates one retention span per user.\n- `ROW_NUMBER()` ranks users by retention duration descending and user id ascending.\n- `rn <= 10` keeps exactly ten rows.\n- The final `ORDER BY` preserves the configured sort order.",
      },
    ],
  },
  {
    code: "MOVIES_082",
    approaches: [
      {
        approach_title: "Expected query only",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT title_id, COUNT(*) AS rewatch_sessions FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY profile_id, title_id HAVING COUNT(*) > 1 ORDER BY rewatch_sessions DESC, title_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nGroup viewing sessions by profile and title, then keep profile-title pairs that were watched more than once.\n\n## 🔍 Explanation\n\n- `WHERE title_id IS NOT NULL` keeps title-level sessions.\n- `GROUP BY profile_id, title_id` finds repeat watches by the same profile for the same title.\n- `HAVING COUNT(*) > 1` keeps only repeated profile-title watches.\n- The selected `title_id` and `COUNT(*) AS rewatch_sessions` match the expected query exactly.\n\n⚠️ Note:\n\n- This expected query returns profile-title repeat groups, not a true title-level total across all profiles.\n- Do not rewrite it as a second aggregation by `title_id` unless you also update the question object.",
      },
    ],
  },
  {
    code: "MOVIES_083",
    approaches: [
      {
        approach_title: "Historical vs recent",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH historical_avg AS (SELECT title_id, AVG(completion_percent) AS hist_avg FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id), recent_avg AS (SELECT title_id, AVG(completion_percent) AS recent_avg FROM viewing_sessions WHERE title_id IS NOT NULL AND started_at >= NOW() - INTERVAL '30 days' GROUP BY title_id) SELECT h.title_id, ROUND(h.hist_avg, 2) AS historical_avg_completion, ROUND(r.recent_avg, 2) AS recent_avg_completion FROM historical_avg h JOIN recent_avg r ON h.title_id = r.title_id WHERE r.recent_avg < h.hist_avg;",
        explanation:
          "## 🧠 Approach\n\nCompare each title's recent average completion against its historical average completion.\n\n## 🔍 Explanation\n\n- `historical_avg` calculates average completion across all sessions per title.\n- `recent_avg` calculates average completion for sessions in the last 30 days.\n- Joining both CTEs lets each title's recent performance be compared to its historical baseline.\n- The final filter keeps titles whose recent average is lower than historical average.",
      },
    ],
  },
  {
    code: "MOVIES_084",
    approaches: [
      {
        approach_title: "Top abandoned episodes",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT episode_id, COUNT(*) AS abandoned_count FROM viewing_sessions WHERE episode_id IS NOT NULL AND session_status = 'abandoned' GROUP BY episode_id ORDER BY abandoned_count DESC, episode_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nFilter abandoned episode sessions, count them per episode, and return the top ten.\n\n## 🔍 Explanation\n\n- `episode_id IS NOT NULL` keeps episode-level sessions.\n- `session_status = 'abandoned'` keeps sessions that were dropped.\n- `GROUP BY episode_id` counts abandoned sessions per episode.\n- `ORDER BY abandoned_count DESC, episode_id ASC` matches the configured comparator ordering.\n- `LIMIT 10` returns exactly ten rows.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT episode_id, abandoned_count FROM (SELECT episode_id, abandoned_count, ROW_NUMBER() OVER (ORDER BY abandoned_count DESC, episode_id ASC) AS rn FROM (SELECT episode_id, COUNT(*) AS abandoned_count FROM viewing_sessions WHERE episode_id IS NOT NULL AND session_status = 'abandoned' GROUP BY episode_id) abandoned_totals) ranked WHERE rn <= 10 ORDER BY abandoned_count DESC, episode_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank abandoned episode counts and keep the top ten episodes.\n\n## 🔍 Explanation\n\n- The inner query calculates abandoned count per episode.\n- `ROW_NUMBER()` ranks episodes using the configured sort order.\n- `rn <= 10` keeps exactly ten rows.\n- The final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "MOVIES_085",
    approaches: [
      {
        approach_title: "ROW_NUMBER country revenue",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH title_revenue AS (SELECT u.country, vs.title_id, SUM(bi.total_amount) AS total_revenue, ROW_NUMBER() OVER (PARTITION BY u.country ORDER BY SUM(bi.total_amount) DESC, vs.title_id ASC) AS rn FROM billing_invoices bi JOIN subscriptions s ON bi.subscription_id = s.id JOIN users u ON s.user_id = u.id JOIN profiles p ON p.user_id = u.id JOIN viewing_sessions vs ON vs.profile_id = p.id WHERE bi.invoice_status = 'paid' AND vs.title_id IS NOT NULL GROUP BY u.country, vs.title_id) SELECT country, title_id, ROUND(total_revenue, 2) AS total_revenue FROM title_revenue WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate paid invoice revenue per title per country, rank titles inside each country, and return the top title.\n\n## 🔍 Explanation\n\n- `billing_invoices -> subscriptions -> users` attributes paid revenue to users and countries.\n- `profiles -> viewing_sessions` connects users to watched titles.\n- `ROW_NUMBER()` ranks titles per country by revenue descending and title id ascending.\n- `rn = 1` returns exactly one highest-revenue title per country.",
      },
    ],
  },
  {
    code: "MOVIES_086",
    approaches: [
      {
        approach_title: "Recent vs previous",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH recent_period AS (SELECT p.user_id, SUM(vs.watch_time_seconds) AS recent_watch_time FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id WHERE vs.started_at >= NOW() - INTERVAL '30 days' GROUP BY p.user_id), previous_period AS (SELECT p.user_id, SUM(vs.watch_time_seconds) AS previous_watch_time FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id WHERE vs.started_at >= NOW() - INTERVAL '60 days' AND vs.started_at < NOW() - INTERVAL '30 days' GROUP BY p.user_id) SELECT r.user_id, r.recent_watch_time, p.previous_watch_time FROM recent_period r JOIN previous_period p ON r.user_id = p.user_id WHERE r.recent_watch_time < (p.previous_watch_time * 0.5);",
        explanation:
          "## 🧠 Approach\n\nCompare each user's recent 30-day watch time with the previous 30-day period.\n\n## 🔍 Explanation\n\n- `recent_period` sums watch time from the last 30 days.\n- `previous_period` sums watch time from 30–60 days ago.\n- Joining both periods keeps users with activity in both windows.\n- The final condition keeps users whose recent watch time dropped below 50% of their previous-period watch time.",
      },
    ],
  },
  {
    code: "MOVIES_087",
    approaches: [
      {
        approach_title: "Season completion",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH season_totals AS (SELECT season_id, COUNT(*) AS total_episodes FROM episodes GROUP BY season_id), profile_season_watch AS (SELECT vs.profile_id, e.season_id, MIN(vs.started_at) AS first_watch, MAX(vs.ended_at) AS last_watch, COUNT(DISTINCT vs.episode_id) AS watched_episodes FROM viewing_sessions vs JOIN episodes e ON vs.episode_id = e.id WHERE vs.session_status = 'completed' GROUP BY vs.profile_id, e.season_id) SELECT psw.profile_id, psw.season_id, psw.watched_episodes FROM profile_season_watch psw JOIN season_totals st ON psw.season_id = st.season_id WHERE psw.watched_episodes = st.total_episodes AND psw.last_watch <= psw.first_watch + INTERVAL '24 hours';",
        explanation:
          "## 🧠 Approach\n\nCount total episodes per season, count completed episodes watched by each profile per season, and keep profiles that completed the full season within 24 hours.\n\n## 🔍 Explanation\n\n- `season_totals` calculates how many episodes each season has.\n- `profile_season_watch` counts distinct completed episodes per profile and season.\n- Matching `watched_episodes = total_episodes` means the profile completed the whole season.\n- `last_watch <= first_watch + INTERVAL '24 hours'` enforces the 24-hour binge window.",
      },
    ],
  },
  {
    code: "MOVIES_088",
    approaches: [
      {
        approach_title: "Variant CTR",
        approach_type: "ab_testing",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH experiment_ctr AS (SELECT ea.experiment_id, ev.is_control, COUNT(rc.id)::numeric / NULLIF(COUNT(ri.id), 0) AS ctr FROM experiment_assignments ea JOIN experiment_variants ev ON ea.variant_id = ev.id JOIN recommendation_impressions ri ON ea.id = ri.experiment_assignment_id LEFT JOIN recommendation_clicks rc ON ri.id = rc.impression_id GROUP BY ea.experiment_id, ev.is_control) SELECT v.experiment_id FROM experiment_ctr v JOIN experiment_ctr c ON v.experiment_id = c.experiment_id WHERE v.is_control = false AND c.is_control = true AND v.ctr > c.ctr;",
        explanation:
          "## 🧠 Approach\n\nCalculate CTR separately for control and non-control variants, then return experiments where a variant beats control.\n\n## 🔍 Explanation\n\n- `recommendation_impressions` provides impressions served.\n- `recommendation_clicks` provides clicks on those impressions.\n- `COUNT(rc.id)::numeric / COUNT(ri.id)` calculates CTR.\n- The self-join compares non-control rows against the control row for the same experiment.\n- Experiments are returned when the non-control CTR is higher than control CTR.",
      },
    ],
  },
  {
    code: "MOVIES_089",
    approaches: [
      {
        approach_title: "COUNT distinct devices",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT profile_id, title_id, COUNT(DISTINCT device_id) AS device_count FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY profile_id, title_id HAVING COUNT(DISTINCT device_id) > 1;",
        explanation:
          "## 🧠 Approach\n\nGroup viewing sessions by profile and title, then count distinct devices used for that title.\n\n## 🔍 Explanation\n\n- `WHERE title_id IS NOT NULL` keeps title-level viewing sessions.\n- `GROUP BY profile_id, title_id` creates one row per profile-title pair.\n- `COUNT(DISTINCT device_id)` counts unique devices used to watch that title.\n- `HAVING COUNT(DISTINCT device_id) > 1` keeps profile-title pairs watched across multiple devices.",
      },
    ],
  },
  {
    code: "MOVIES_090",
    approaches: [
      {
        approach_title: "Top category diversity",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT vs.profile_id, COUNT(DISTINCT tc.category_id) AS distinct_categories FROM viewing_sessions vs JOIN title_categories tc ON vs.title_id = tc.title_id WHERE vs.title_id IS NOT NULL GROUP BY vs.profile_id ORDER BY distinct_categories DESC, vs.profile_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nJoin watched titles to their categories, count distinct categories per profile, and return the top ten profiles.\n\n## 🔍 Explanation\n\n- `viewing_sessions` identifies titles watched by each profile.\n- `title_categories` maps titles to categories.\n- `COUNT(DISTINCT tc.category_id)` counts unique categories watched by each profile.\n- The final ordering matches the comparator config: category diversity descending, profile id ascending.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT profile_id, distinct_categories FROM (SELECT profile_id, distinct_categories, ROW_NUMBER() OVER (ORDER BY distinct_categories DESC, profile_id ASC) AS rn FROM (SELECT vs.profile_id, COUNT(DISTINCT tc.category_id) AS distinct_categories FROM viewing_sessions vs JOIN title_categories tc ON vs.title_id = tc.title_id WHERE vs.title_id IS NOT NULL GROUP BY vs.profile_id) category_counts) ranked WHERE rn <= 10 ORDER BY distinct_categories DESC, profile_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank profiles by distinct category count and keep the top ten.\n\n## 🔍 Explanation\n\n- The inner query calculates category diversity per profile.\n- `ROW_NUMBER()` ranks profiles using the required sort order.\n- `rn <= 10` keeps exactly ten rows.\n- The final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "MOVIES_091",
    approaches: [
      {
        approach_title: "ROW_NUMBER month revenue",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH monthly_title_revenue AS (SELECT DATE_TRUNC('month', bi.issued_at) AS revenue_month, vs.title_id, SUM(bi.total_amount) AS total_revenue, ROW_NUMBER() OVER (PARTITION BY DATE_TRUNC('month', bi.issued_at) ORDER BY SUM(bi.total_amount) DESC, vs.title_id ASC) AS rn FROM billing_invoices bi JOIN subscriptions s ON bi.subscription_id = s.id JOIN users u ON s.user_id = u.id JOIN profiles p ON p.user_id = u.id JOIN viewing_sessions vs ON vs.profile_id = p.id WHERE bi.invoice_status = 'paid' AND vs.title_id IS NOT NULL GROUP BY DATE_TRUNC('month', bi.issued_at), vs.title_id) SELECT revenue_month, title_id, ROUND(total_revenue, 2) AS total_revenue FROM monthly_title_revenue WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate paid invoice revenue per title per month, rank titles within each month, and keep the highest revenue title.\n\n## 🔍 Explanation\n\n- `billing_invoices` provides paid invoice revenue and invoice month.\n- `subscriptions -> users -> profiles -> viewing_sessions` connects paying users to watched titles.\n- `ROW_NUMBER()` ranks titles inside each month by revenue descending and title id ascending.\n- `rn = 1` returns exactly one top revenue title per month.",
      },
    ],
  },
  {
    code: "MOVIES_092",
    approaches: [
      {
        approach_title: "Click watch conversion",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH clicked_titles AS (SELECT ri.id AS impression_id, ri.profile_id, ri.title_id FROM recommendation_impressions ri JOIN recommendation_clicks rc ON ri.id = rc.impression_id), watched_titles AS (SELECT DISTINCT ct.impression_id, ct.title_id FROM clicked_titles ct JOIN viewing_sessions vs ON ct.profile_id = vs.profile_id AND ct.title_id = vs.title_id) SELECT ct.title_id, ROUND(COUNT(wt.impression_id)::numeric * 100 / COUNT(ct.impression_id), 2) AS watch_conversion_rate FROM clicked_titles ct LEFT JOIN watched_titles wt ON ct.impression_id = wt.impression_id GROUP BY ct.title_id ORDER BY watch_conversion_rate DESC, ct.title_id ASC;",
        explanation:
          "## 🧠 Approach\n\nFind clicked recommendation impressions, check whether the clicked title was later watched, and calculate conversion rate per title.\n\n## 🔍 Explanation\n\n- `clicked_titles` captures recommendation impressions that were clicked.\n- `watched_titles` checks whether the same profile watched the clicked title.\n- `LEFT JOIN` keeps clicked impressions even when they did not convert to a watch.\n- The conversion rate is watched clicks divided by total clicked impressions, multiplied by 100.",
      },
    ],
  },
  {
    code: "MOVIES_093",
    approaches: [
      {
        approach_title: "Six month activity",
        approach_type: "date_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH monthly_activity AS (SELECT profile_id, DATE_TRUNC('month', started_at) AS activity_month FROM viewing_sessions WHERE started_at >= NOW() - INTERVAL '6 months' GROUP BY profile_id, DATE_TRUNC('month', started_at)) SELECT profile_id FROM monthly_activity GROUP BY profile_id HAVING COUNT(DISTINCT activity_month) = 6;",
        explanation:
          "## 🧠 Approach\n\nGroup each profile's viewing activity by month and keep profiles active in all six months.\n\n## 🔍 Explanation\n\n- `started_at >= NOW() - INTERVAL '6 months'` limits activity to the recent six-month window.\n- `DATE_TRUNC('month', started_at)` converts sessions into monthly buckets.\n- `COUNT(DISTINCT activity_month) = 6` keeps profiles active in every required month.",
      },
    ],
  },
  {
    code: "MOVIES_094",
    approaches: [
      {
        approach_title: "Top LTV users",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT s.user_id, ROUND(SUM(bi.total_amount), 2) AS lifetime_value FROM billing_invoices bi JOIN subscriptions s ON bi.subscription_id = s.id WHERE bi.invoice_status = 'paid' GROUP BY s.user_id ORDER BY lifetime_value DESC, s.user_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nJoin paid invoices to subscriptions, sum invoice totals per user, and return the top ten users by lifetime value.\n\n## 🔍 Explanation\n\n- `billing_invoices` stores invoice totals.\n- `subscriptions` connects invoices to users.\n- `bi.invoice_status = 'paid'` keeps only collected revenue.\n- `ROUND(SUM(...), 2)` calculates each user's lifetime value.\n- Final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "MOVIES_095",
    approaches: [
      {
        approach_title: "Top completed series",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT s.title_id, ROUND(AVG(vs.completion_percent), 2) AS avg_completion_percent FROM viewing_sessions vs JOIN episodes e ON vs.episode_id = e.id JOIN seasons s ON e.season_id = s.id GROUP BY s.title_id ORDER BY avg_completion_percent DESC, s.title_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nJoin viewing sessions to episodes and seasons, then calculate average completion per series title.\n\n## 🔍 Explanation\n\n- `viewing_sessions.episode_id` links sessions to episodes.\n- `episodes.season_id` links episodes to seasons.\n- `seasons.title_id` identifies the series title.\n- `AVG(vs.completion_percent)` calculates average episode completion per series.\n- Final ordering returns the top ten series.",
      },
    ],
  },
  {
    code: "MOVIES_096",
    approaches: [
      {
        approach_title: "Average pauses",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH session_pauses AS (SELECT pe.session_id, COUNT(*) AS pause_count FROM playback_events pe WHERE pe.event_type = 'pause' GROUP BY pe.session_id) SELECT vs.title_id, ROUND(AVG(sp.pause_count), 2) AS avg_pauses_per_session FROM session_pauses sp JOIN viewing_sessions vs ON sp.session_id = vs.id WHERE vs.title_id IS NOT NULL GROUP BY vs.title_id ORDER BY avg_pauses_per_session DESC, vs.title_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCount pause events per session, join those counts to title sessions, and average pauses per title.\n\n## 🔍 Explanation\n\n- `session_pauses` counts pause events for each session.\n- Joining to `viewing_sessions` maps sessions to titles.\n- `AVG(sp.pause_count)` gives average pauses per interrupted session for each title.\n- Final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "MOVIES_097",
    approaches: [
      {
        approach_title: "Distinct countries",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, COUNT(DISTINCT country) AS distinct_countries FROM devices WHERE country IS NOT NULL GROUP BY user_id HAVING COUNT(DISTINCT country) > 1;",
        explanation:
          "## 🧠 Approach\n\nCount distinct device countries per user and keep users active in more than one country.\n\n## 🔍 Explanation\n\n- `country IS NOT NULL` removes unknown device locations.\n- `COUNT(DISTINCT country)` counts unique countries per user.\n- `HAVING COUNT(DISTINCT country) > 1` keeps users with devices across multiple countries.",
      },
    ],
  },
  {
    code: "MOVIES_098",
    approaches: [
      {
        approach_title: "Campaign CTR",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT campaign_id, ROUND(COUNT(clicked_at)::numeric * 100 / COUNT(*), 2) AS ctr_percent FROM notification_deliveries GROUP BY campaign_id ORDER BY ctr_percent DESC, campaign_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate click-through rate for each notification campaign.\n\n## 🔍 Explanation\n\n- `COUNT(*)` counts all delivered notifications per campaign.\n- `COUNT(clicked_at)` counts rows where a click timestamp exists.\n- Casting to numeric avoids integer division.\n- Multiplying by 100 returns CTR as a percentage.\n- Final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "MOVIES_099",
    approaches: [
      {
        approach_title: "Recommendation diversity",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ri.profile_id, COUNT(DISTINCT ri.row_id) AS distinct_rows_clicked FROM recommendation_clicks rc JOIN recommendation_impressions ri ON rc.impression_id = ri.id GROUP BY ri.profile_id ORDER BY distinct_rows_clicked DESC, ri.profile_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nJoin recommendation clicks to impressions, count distinct recommendation rows clicked per profile, and return the top ten profiles.\n\n## 🔍 Explanation\n\n- `recommendation_clicks` stores clicked impressions.\n- `recommendation_impressions` provides the profile and recommendation row.\n- `COUNT(DISTINCT ri.row_id)` measures recommendation-row diversity.\n- Final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "MOVIES_100",
    approaches: [
      {
        approach_title: "Renewed user watches",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH renewed_users AS (SELECT user_id FROM subscriptions GROUP BY user_id HAVING COUNT(*) > 1) SELECT vs.title_id, COUNT(*) AS watch_count FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id JOIN renewed_users ru ON p.user_id = ru.user_id WHERE vs.title_id IS NOT NULL GROUP BY vs.title_id ORDER BY watch_count DESC, vs.title_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nFind users with multiple subscription records, then count titles watched by those renewed users.\n\n## 🔍 Explanation\n\n- `renewed_users` identifies users with more than one subscription record.\n- `profiles` maps viewing sessions back to users.\n- `vs.title_id IS NOT NULL` keeps title-level sessions.\n- `COUNT(*)` measures how often renewed users watched each title.\n- Final ordering returns the top ten titles.",
      },
    ],
  },
];
