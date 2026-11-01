# Solutions Evaluation Report (movies)

**Summary:**
- Total Approaches: 139
- Passed: 139
- Failed: 0

## Detailed Results
### ✅ PASS : MOVIES_001 - COUNT users
```sql
SELECT COUNT(*) AS total_users FROM users;
```

### ✅ PASS : MOVIES_002 - Filter active
```sql
SELECT COUNT(*) AS active_profiles FROM profiles WHERE is_active = true;
```

### ✅ PASS : MOVIES_003 - COUNT titles
```sql
SELECT COUNT(*) AS total_titles FROM titles;
```

### ✅ PASS : MOVIES_004 - Filter published
```sql
SELECT id, title_name, title_type FROM titles WHERE content_status = 'published';
```

### ✅ PASS : MOVIES_005 - Filter originals
```sql
SELECT id, title_name, release_year FROM titles WHERE is_original = true;
```

### ✅ PASS : MOVIES_006 - IN quality filter
```sql
SELECT id, plan_name, video_quality, price FROM subscription_plans WHERE video_quality IN ('hd', 'full_hd', 'uhd');
```

### ✅ PASS : MOVIES_007 - Movie filter
```sql
SELECT id, title_name, release_year FROM titles WHERE title_type = 'movie' AND release_year > 2020;
```

### ✅ PASS : MOVIES_008 - Score filter
```sql
SELECT id, title_name, imdb_like_score FROM titles WHERE imdb_like_score > 8;
```

### ✅ PASS : MOVIES_009 - Status filter
```sql
SELECT id, profile_id, device_id, download_status FROM downloads WHERE download_status = 'completed';
```

### ✅ PASS : MOVIES_010 - Top rated
```sql
SELECT id, title_name, critic_score FROM titles WHERE critic_score IS NOT NULL ORDER BY critic_score DESC, id ASC LIMIT 5;
```

### ✅ PASS : MOVIES_010 - ROW_NUMBER top
```sql
SELECT id, title_name, critic_score FROM (SELECT id, title_name, critic_score, ROW_NUMBER() OVER (ORDER BY critic_score DESC, id ASC) AS rn FROM titles WHERE critic_score IS NOT NULL) ranked WHERE rn <= 5 ORDER BY critic_score DESC, id ASC;
```

### ✅ PASS : MOVIES_011 - GROUP title type
```sql
SELECT title_type, COUNT(*) AS total_titles FROM titles GROUP BY title_type;
```

### ✅ PASS : MOVIES_012 - GROUP profiles
```sql
SELECT user_id, COUNT(*) AS profile_count FROM profiles GROUP BY user_id;
```

### ✅ PASS : MOVIES_012 - Window count
```sql
SELECT DISTINCT user_id, COUNT(*) OVER (PARTITION BY user_id) AS profile_count FROM profiles;
```

### ✅ PASS : MOVIES_013 - GROUP language
```sql
SELECT original_language, COUNT(*) AS total_titles FROM titles GROUP BY original_language;
```

### ✅ PASS : MOVIES_014 - AVG runtime
```sql
SELECT ROUND(AVG(runtime_minutes), 2) AS avg_runtime_minutes FROM titles WHERE title_type = 'movie' AND runtime_minutes IS NOT NULL;
```

### ✅ PASS : MOVIES_014 - Manual average
```sql
SELECT ROUND(SUM(runtime_minutes)::numeric / NULLIF(COUNT(runtime_minutes), 0), 2) AS avg_runtime_minutes FROM titles WHERE title_type = 'movie' AND runtime_minutes IS NOT NULL;
```

### ✅ PASS : MOVIES_015 - COUNT active subs
```sql
SELECT COUNT(*) AS active_subscriptions FROM subscriptions WHERE subscription_status = 'active';
```

### ✅ PASS : MOVIES_016 - GROUP HAVING
```sql
SELECT user_id, COUNT(*) AS profile_count FROM profiles GROUP BY user_id HAVING COUNT(*) > 1;
```

### ✅ PASS : MOVIES_016 - Subquery filter
```sql
SELECT user_id, profile_count FROM (SELECT user_id, COUNT(*) AS profile_count FROM profiles GROUP BY user_id) profile_counts WHERE profile_count > 1;
```

### ✅ PASS : MOVIES_017 - GROUP ratings
```sql
SELECT title_id, COUNT(*) AS ratings_count FROM ratings WHERE title_id IS NOT NULL GROUP BY title_id;
```

### ✅ PASS : MOVIES_018 - GROUP completed downloads
```sql
SELECT device_id, COUNT(*) AS completed_downloads FROM downloads WHERE download_status = 'completed' GROUP BY device_id;
```

### ✅ PASS : MOVIES_019 - AVG rating
```sql
SELECT title_id, ROUND(AVG(rating_value), 2) AS avg_rating FROM ratings WHERE title_id IS NOT NULL GROUP BY title_id;
```

### ✅ PASS : MOVIES_019 - Manual average
```sql
SELECT title_id, ROUND(SUM(rating_value)::numeric / NULLIF(COUNT(rating_value), 0), 2) AS avg_rating FROM ratings WHERE title_id IS NOT NULL GROUP BY title_id;
```

### ✅ PASS : MOVIES_020 - Top watchlisted
```sql
SELECT title_id, COUNT(*) AS watchlist_adds FROM watchlists GROUP BY title_id ORDER BY watchlist_adds DESC, title_id ASC LIMIT 5;
```

### ✅ PASS : MOVIES_020 - ROW_NUMBER top
```sql
SELECT title_id, watchlist_adds FROM (SELECT title_id, watchlist_adds, ROW_NUMBER() OVER (ORDER BY watchlist_adds DESC, title_id ASC) AS rn FROM (SELECT title_id, COUNT(*) AS watchlist_adds FROM watchlists GROUP BY title_id) watchlist_counts) ranked WHERE rn <= 5 ORDER BY watchlist_adds DESC, title_id ASC;
```

### ✅ PASS : MOVIES_021 - JOIN active plans
```sql
SELECT u.id, u.email, sp.plan_name FROM users u JOIN subscriptions s ON u.id = s.user_id JOIN subscription_plans sp ON s.plan_id = sp.id WHERE s.subscription_status = 'active';
```

### ✅ PASS : MOVIES_022 - JOIN categories
```sql
SELECT t.id, t.title_name, c.category_name FROM titles t JOIN title_categories tc ON t.id = tc.title_id JOIN content_categories c ON tc.category_id = c.id;
```

### ✅ PASS : MOVIES_023 - GROUP episodes
```sql
SELECT season_id, COUNT(*) AS episode_count FROM episodes GROUP BY season_id;
```

### ✅ PASS : MOVIES_023 - Window count
```sql
SELECT DISTINCT season_id, COUNT(*) OVER (PARTITION BY season_id) AS episode_count FROM episodes;
```

### ✅ PASS : MOVIES_024 - GROUP sessions
```sql
SELECT profile_id, COUNT(*) AS session_count FROM viewing_sessions GROUP BY profile_id;
```

### ✅ PASS : MOVIES_024 - Window count
```sql
SELECT DISTINCT profile_id, COUNT(*) OVER (PARTITION BY profile_id) AS session_count FROM viewing_sessions;
```

### ✅ PASS : MOVIES_025 - Top watched
```sql
SELECT title_id, COUNT(*) AS total_views FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id ORDER BY total_views DESC, title_id ASC LIMIT 5;
```

### ✅ PASS : MOVIES_025 - ROW_NUMBER top
```sql
SELECT title_id, total_views FROM (SELECT title_id, total_views, ROW_NUMBER() OVER (ORDER BY total_views DESC, title_id ASC) AS rn FROM (SELECT title_id, COUNT(*) AS total_views FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id) title_views) ranked WHERE rn <= 5 ORDER BY total_views DESC, title_id ASC;
```

### ✅ PASS : MOVIES_026 - GROUP role
```sql
SELECT role_type, COUNT(*) AS total_people FROM title_credits GROUP BY role_type;
```

### ✅ PASS : MOVIES_027 - Successful payments
```sql
SELECT p.id, p.invoice_id, p.paid_amount FROM payments p WHERE p.payment_status = 'successful';
```

### ✅ PASS : MOVIES_028 - GROUP watchlists
```sql
SELECT profile_id, COUNT(*) AS watchlist_count FROM watchlists GROUP BY profile_id;
```

### ✅ PASS : MOVIES_029 - Expiry range
```sql
SELECT id, profile_id, expires_at FROM downloads WHERE expires_at BETWEEN NOW() AND NOW() + INTERVAL '7 days';
```

### ✅ PASS : MOVIES_030 - AVG watch time
```sql
SELECT profile_id, ROUND(AVG(watch_time_seconds), 2) AS avg_watch_time_seconds FROM viewing_sessions GROUP BY profile_id;
```

### ✅ PASS : MOVIES_030 - Manual average
```sql
SELECT profile_id, ROUND(SUM(watch_time_seconds)::numeric / NULLIF(COUNT(watch_time_seconds), 0), 2) AS avg_watch_time_seconds FROM viewing_sessions GROUP BY profile_id;
```

### ✅ PASS : MOVIES_031 - GROUP active devices
```sql
SELECT user_id, COUNT(*) AS active_device_count FROM devices WHERE is_active = true GROUP BY user_id;
```

### ✅ PASS : MOVIES_031 - Boolean shorthand
```sql
SELECT user_id, COUNT(*) AS active_device_count FROM devices WHERE is_active GROUP BY user_id;
```

### ✅ PASS : MOVIES_032 - COUNT paid invoices
```sql
SELECT COUNT(*) AS paid_invoices FROM billing_invoices WHERE invoice_status = 'paid';
```

### ✅ PASS : MOVIES_033 - JOIN series seasons
```sql
SELECT t.id, t.title_name, s.season_number FROM titles t JOIN seasons s ON t.id = s.title_id WHERE t.title_type = 'series';
```

### ✅ PASS : MOVIES_034 - AVG invoice currency
```sql
SELECT currency, ROUND(AVG(total_amount), 2) AS avg_total_amount FROM billing_invoices GROUP BY currency;
```

### ✅ PASS : MOVIES_034 - Manual average
```sql
SELECT currency, ROUND(SUM(total_amount) / NULLIF(COUNT(total_amount), 0), 2) AS avg_total_amount FROM billing_invoices GROUP BY currency;
```

### ✅ PASS : MOVIES_035 - Top recommendation rows
```sql
SELECT row_id, COUNT(*) AS impression_count FROM recommendation_impressions GROUP BY row_id ORDER BY impression_count DESC, row_id ASC LIMIT 5;
```

### ✅ PASS : MOVIES_035 - ROW_NUMBER top
```sql
SELECT row_id, impression_count FROM (SELECT row_id, impression_count, ROW_NUMBER() OVER (ORDER BY impression_count DESC, row_id ASC) AS rn FROM (SELECT row_id, COUNT(*) AS impression_count FROM recommendation_impressions GROUP BY row_id) row_counts) ranked WHERE rn <= 5 ORDER BY impression_count DESC, row_id ASC;
```

### ✅ PASS : MOVIES_036 - GROUP country
```sql
SELECT country, COUNT(*) AS total_users FROM users GROUP BY country;
```

### ✅ PASS : MOVIES_037 - Average profile count
```sql
SELECT ROUND(AVG(profile_count), 2) AS avg_profiles_per_user FROM (SELECT user_id, COUNT(*) AS profile_count FROM profiles GROUP BY user_id) p;
```

### ✅ PASS : MOVIES_038 - Available in India
```sql
SELECT t.id, t.title_name, ca.available_from, ca.available_to FROM titles t JOIN content_availability ca ON t.id = ca.title_id WHERE ca.country = 'India' AND ca.is_available = true AND ca.available_from <= NOW() AND (ca.available_to IS NULL OR ca.available_to >= NOW());
```

### ✅ PASS : MOVIES_039 - Ad-supported users
```sql
SELECT DISTINCT u.id, u.email, sp.plan_name FROM users u JOIN subscriptions s ON u.id = s.user_id JOIN subscription_plans sp ON s.plan_id = sp.id WHERE s.subscription_status = 'active' AND sp.has_ads = true;
```

### ✅ PASS : MOVIES_040 - AVG rating by type
```sql
SELECT t.title_type, ROUND(AVG(r.rating_value), 2) AS avg_rating FROM ratings r JOIN titles t ON r.title_id = t.id GROUP BY t.title_type;
```

### ✅ PASS : MOVIES_040 - Manual average
```sql
SELECT t.title_type, ROUND(SUM(r.rating_value)::numeric / NULLIF(COUNT(r.rating_value), 0), 2) AS avg_rating FROM ratings r JOIN titles t ON r.title_id = t.id GROUP BY t.title_type;
```

### ✅ PASS : MOVIES_041 - GROUP HAVING
```sql
SELECT title_id, COUNT(*) AS session_count FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id HAVING COUNT(*) > 100;
```

### ✅ PASS : MOVIES_041 - Subquery filter
```sql
SELECT title_id, session_count FROM (SELECT title_id, COUNT(*) AS session_count FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id) title_sessions WHERE session_count > 100;
```

### ✅ PASS : MOVIES_042 - GROUP active devices
```sql
SELECT user_id, COUNT(*) AS device_count FROM devices WHERE is_active = true GROUP BY user_id HAVING COUNT(*) > 2;
```

### ✅ PASS : MOVIES_042 - Subquery filter
```sql
SELECT user_id, device_count FROM (SELECT user_id, COUNT(*) AS device_count FROM devices WHERE is_active = true GROUP BY user_id) active_device_counts WHERE device_count > 2;
```

### ✅ PASS : MOVIES_043 - GROUP watch time
```sql
SELECT profile_id, SUM(watch_time_seconds) AS total_watch_time FROM viewing_sessions GROUP BY profile_id HAVING SUM(watch_time_seconds) > 10000;
```

### ✅ PASS : MOVIES_043 - Subquery filter
```sql
SELECT profile_id, total_watch_time FROM (SELECT profile_id, SUM(watch_time_seconds) AS total_watch_time FROM viewing_sessions GROUP BY profile_id) profile_watch_time WHERE total_watch_time > 10000;
```

### ✅ PASS : MOVIES_044 - Top genres
```sql
SELECT c.category_name, COUNT(tc.title_id) AS title_count FROM content_categories c JOIN title_categories tc ON c.id = tc.category_id GROUP BY c.category_name ORDER BY title_count DESC, c.category_name ASC LIMIT 5;
```

### ✅ PASS : MOVIES_044 - ROW_NUMBER top
```sql
SELECT category_name, title_count FROM (SELECT category_name, title_count, ROW_NUMBER() OVER (ORDER BY title_count DESC, category_name ASC) AS rn FROM (SELECT c.category_name, COUNT(tc.title_id) AS title_count FROM content_categories c JOIN title_categories tc ON c.id = tc.category_id GROUP BY c.category_name) category_counts) ranked WHERE rn <= 5 ORDER BY title_count DESC, category_name ASC;
```

### ✅ PASS : MOVIES_045 - AVG watch time
```sql
SELECT title_id, ROUND(AVG(watch_time_seconds), 2) AS avg_duration FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id;
```

### ✅ PASS : MOVIES_045 - Manual average
```sql
SELECT title_id, ROUND(SUM(watch_time_seconds)::numeric / NULLIF(COUNT(watch_time_seconds), 0), 2) AS avg_duration FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id;
```

### ✅ PASS : MOVIES_046 - DISTINCT expired users
```sql
SELECT DISTINCT user_id FROM subscriptions WHERE subscription_status = 'expired';
```

### ✅ PASS : MOVIES_046 - GROUP expired users
```sql
SELECT user_id FROM subscriptions WHERE subscription_status = 'expired' GROUP BY user_id;
```

### ✅ PASS : MOVIES_047 - LEFT JOIN no sessions
```sql
SELECT p.id FROM profiles p LEFT JOIN viewing_sessions vs ON p.id = vs.profile_id WHERE vs.id IS NULL;
```

### ✅ PASS : MOVIES_047 - NOT EXISTS
```sql
SELECT p.id FROM profiles p WHERE NOT EXISTS (SELECT 1 FROM viewing_sessions vs WHERE vs.profile_id = p.id);
```

### ✅ PASS : MOVIES_048 - LEFT JOIN no ratings
```sql
SELECT t.id, t.title_name FROM titles t LEFT JOIN ratings r ON t.id = r.title_id WHERE r.id IS NULL;
```

### ✅ PASS : MOVIES_048 - NOT EXISTS
```sql
SELECT t.id, t.title_name FROM titles t WHERE NOT EXISTS (SELECT 1 FROM ratings r WHERE r.title_id = t.id);
```

### ✅ PASS : MOVIES_049 - JOIN user payments
```sql
SELECT s.user_id, SUM(p.paid_amount) AS total_spent FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY s.user_id HAVING SUM(p.paid_amount) > 1000;
```

### ✅ PASS : MOVIES_049 - Subquery filter
```sql
SELECT user_id, total_spent FROM (SELECT s.user_id, SUM(p.paid_amount) AS total_spent FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY s.user_id) user_spend WHERE total_spent > 1000;
```

### ✅ PASS : MOVIES_050 - Top profiles sessions
```sql
SELECT profile_id, COUNT(*) AS session_count FROM viewing_sessions GROUP BY profile_id ORDER BY session_count DESC, profile_id ASC LIMIT 5;
```

### ✅ PASS : MOVIES_050 - ROW_NUMBER top
```sql
SELECT profile_id, session_count FROM (SELECT profile_id, session_count, ROW_NUMBER() OVER (ORDER BY session_count DESC, profile_id ASC) AS rn FROM (SELECT profile_id, COUNT(*) AS session_count FROM viewing_sessions GROUP BY profile_id) profile_sessions) ranked WHERE rn <= 5 ORDER BY session_count DESC, profile_id ASC;
```

### ✅ PASS : MOVIES_051 - RANK rating
```sql
SELECT title_id, AVG(rating_value) AS avg_rating, RANK() OVER (ORDER BY AVG(rating_value) DESC) AS rating_rank FROM ratings GROUP BY title_id;
```

### ✅ PASS : MOVIES_052 - Running watch time
```sql
SELECT profile_id, id AS session_id, watch_time_seconds, SUM(watch_time_seconds) OVER (PARTITION BY profile_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_watch_time FROM viewing_sessions;
```

### ✅ PASS : MOVIES_053 - DENSE_RANK second
```sql
SELECT title_id, total_views FROM (SELECT title_id, COUNT(*) AS total_views, DENSE_RANK() OVER (ORDER BY COUNT(*) DESC) AS rnk FROM viewing_sessions GROUP BY title_id) x WHERE rnk = 2;
```

### ✅ PASS : MOVIES_054 - LAG session gap
```sql
SELECT profile_id, MAX(gap_seconds) AS max_gap FROM (SELECT profile_id, EXTRACT(EPOCH FROM (created_at - LAG(created_at) OVER (PARTITION BY profile_id ORDER BY created_at))) AS gap_seconds FROM viewing_sessions) x GROUP BY profile_id;
```

### ✅ PASS : MOVIES_055 - RANK daily revenue
```sql
SELECT payment_date, user_id, total_paid, RANK() OVER (PARTITION BY payment_date ORDER BY total_paid DESC) AS rank FROM (SELECT DATE(p.created_at) AS payment_date, s.user_id, SUM(p.paid_amount) AS total_paid FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY DATE(p.created_at), s.user_id) x;
```

### ✅ PASS : MOVIES_056 - ROW_NUMBER top 3
```sql
SELECT category_name, title_id, total_views FROM (SELECT c.category_name, vs.title_id, COUNT(*) AS total_views, ROW_NUMBER() OVER (PARTITION BY c.category_name ORDER BY COUNT(*) DESC, vs.title_id ASC) AS rn FROM viewing_sessions vs JOIN title_categories tc ON vs.title_id = tc.title_id JOIN content_categories c ON tc.category_id = c.id GROUP BY c.category_name, vs.title_id) x WHERE rn <= 3;
```

### ✅ PASS : MOVIES_057 - Moving average
```sql
SELECT profile_id, id, watch_time_seconds, AVG(watch_time_seconds) OVER (PARTITION BY profile_id ORDER BY created_at ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg FROM viewing_sessions;
```

### ✅ PASS : MOVIES_058 - Streak groups
```sql
WITH x AS (SELECT profile_id, created_at, ROW_NUMBER() OVER (PARTITION BY profile_id ORDER BY created_at) - ROW_NUMBER() OVER (PARTITION BY profile_id, DATE(created_at) ORDER BY created_at) AS grp FROM viewing_sessions) SELECT profile_id, COUNT(*) AS streak FROM x GROUP BY profile_id, grp;
```

### ✅ PASS : MOVIES_059 - P90 watch time
```sql
SELECT title_id, PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY watch_time_seconds) AS p90_watch_time FROM viewing_sessions GROUP BY title_id;
```

### ✅ PASS : MOVIES_060 - JOIN title revenue
```sql
SELECT vs.title_id, SUM(p.paid_amount) AS total_revenue FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id JOIN profiles pr ON pr.user_id = s.user_id JOIN viewing_sessions vs ON vs.profile_id = pr.id WHERE vs.title_id IS NOT NULL GROUP BY vs.title_id ORDER BY total_revenue DESC, vs.title_id ASC LIMIT 5;
```

### ✅ PASS : MOVIES_060 - ROW_NUMBER top
```sql
SELECT title_id, total_revenue FROM (SELECT title_id, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, title_id ASC) AS rn FROM (SELECT vs.title_id, SUM(p.paid_amount) AS total_revenue FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id JOIN profiles pr ON pr.user_id = s.user_id JOIN viewing_sessions vs ON vs.profile_id = pr.id WHERE vs.title_id IS NOT NULL GROUP BY vs.title_id) title_revenue) ranked WHERE rn <= 5 ORDER BY total_revenue DESC, title_id ASC;
```

### ✅ PASS : MOVIES_061 - JOIN user spend
```sql
SELECT s.user_id, SUM(p.paid_amount) AS total_spent FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY s.user_id ORDER BY total_spent DESC, s.user_id ASC LIMIT 5;
```

### ✅ PASS : MOVIES_061 - ROW_NUMBER top
```sql
SELECT user_id, total_spent FROM (SELECT user_id, total_spent, ROW_NUMBER() OVER (ORDER BY total_spent DESC, user_id ASC) AS rn FROM (SELECT s.user_id, SUM(p.paid_amount) AS total_spent FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY s.user_id) user_spend) ranked WHERE rn <= 5 ORDER BY total_spent DESC, user_id ASC;
```

### ✅ PASS : MOVIES_062 - GROUP HAVING
```sql
SELECT title_id, COUNT(*) AS category_count FROM title_categories GROUP BY title_id HAVING COUNT(*) > 1;
```

### ✅ PASS : MOVIES_062 - Subquery filter
```sql
SELECT title_id, category_count FROM (SELECT title_id, COUNT(*) AS category_count FROM title_categories GROUP BY title_id) title_category_counts WHERE category_count > 1;
```

### ✅ PASS : MOVIES_063 - GROUP HAVING
```sql
SELECT profile_id, COUNT(*) AS rating_count FROM ratings GROUP BY profile_id HAVING COUNT(*) > 10;
```

### ✅ PASS : MOVIES_063 - Subquery filter
```sql
SELECT profile_id, rating_count FROM (SELECT profile_id, COUNT(*) AS rating_count FROM ratings GROUP BY profile_id) profile_ratings WHERE rating_count > 10;
```

### ✅ PASS : MOVIES_064 - Top average rating
```sql
SELECT title_id, ROUND(AVG(rating_value), 2) AS avg_rating FROM ratings GROUP BY title_id ORDER BY avg_rating DESC, title_id ASC LIMIT 5;
```

### ✅ PASS : MOVIES_064 - ROW_NUMBER top
```sql
SELECT title_id, avg_rating FROM (SELECT title_id, avg_rating, ROW_NUMBER() OVER (ORDER BY avg_rating DESC, title_id ASC) AS rn FROM (SELECT title_id, ROUND(AVG(rating_value), 2) AS avg_rating FROM ratings GROUP BY title_id) rating_totals) ranked WHERE rn <= 5 ORDER BY avg_rating DESC, title_id ASC;
```

### ✅ PASS : MOVIES_065 - GROUP HAVING
```sql
SELECT user_id, COUNT(*) AS subscription_count FROM subscriptions GROUP BY user_id HAVING COUNT(*) > 1;
```

### ✅ PASS : MOVIES_065 - Subquery filter
```sql
SELECT user_id, subscription_count FROM (SELECT user_id, COUNT(*) AS subscription_count FROM subscriptions GROUP BY user_id) subscription_counts WHERE subscription_count > 1;
```

### ✅ PASS : MOVIES_066 - Top download devices
```sql
SELECT device_id, COUNT(*) AS download_count FROM downloads WHERE download_status = 'completed' GROUP BY device_id ORDER BY download_count DESC, device_id ASC LIMIT 5;
```

### ✅ PASS : MOVIES_066 - ROW_NUMBER top
```sql
SELECT device_id, download_count FROM (SELECT device_id, download_count, ROW_NUMBER() OVER (ORDER BY download_count DESC, device_id ASC) AS rn FROM (SELECT device_id, COUNT(*) AS download_count FROM downloads WHERE download_status = 'completed' GROUP BY device_id) download_counts) ranked WHERE rn <= 5 ORDER BY download_count DESC, device_id ASC;
```

### ✅ PASS : MOVIES_067 - Top user countries
```sql
SELECT country, COUNT(*) AS user_count FROM users GROUP BY country ORDER BY user_count DESC, country ASC LIMIT 5;
```

### ✅ PASS : MOVIES_067 - ROW_NUMBER top
```sql
SELECT country, user_count FROM (SELECT country, user_count, ROW_NUMBER() OVER (ORDER BY user_count DESC, country ASC) AS rn FROM (SELECT country, COUNT(*) AS user_count FROM users GROUP BY country) country_counts) ranked WHERE rn <= 5 ORDER BY user_count DESC, country ASC;
```

### ✅ PASS : MOVIES_068 - GROUP HAVING
```sql
SELECT profile_id, COUNT(*) AS session_count FROM viewing_sessions GROUP BY profile_id HAVING COUNT(*) > 50;
```

### ✅ PASS : MOVIES_068 - Subquery filter
```sql
SELECT profile_id, session_count FROM (SELECT profile_id, COUNT(*) AS session_count FROM viewing_sessions GROUP BY profile_id) profile_sessions WHERE session_count > 50;
```

### ✅ PASS : MOVIES_069 - Top downloaded titles
```sql
SELECT title_id, COUNT(*) AS download_count FROM downloads WHERE title_id IS NOT NULL GROUP BY title_id ORDER BY download_count DESC, title_id ASC LIMIT 5;
```

### ✅ PASS : MOVIES_069 - ROW_NUMBER top
```sql
SELECT title_id, download_count FROM (SELECT title_id, download_count, ROW_NUMBER() OVER (ORDER BY download_count DESC, title_id ASC) AS rn FROM (SELECT title_id, COUNT(*) AS download_count FROM downloads WHERE title_id IS NOT NULL GROUP BY title_id) download_counts) ranked WHERE rn <= 5 ORDER BY download_count DESC, title_id ASC;
```

### ✅ PASS : MOVIES_070 - JOIN user sessions
```sql
SELECT p.user_id, COUNT(*) AS session_count FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id GROUP BY p.user_id HAVING COUNT(*) > 200;
```

### ✅ PASS : MOVIES_070 - Subquery filter
```sql
SELECT user_id, session_count FROM (SELECT p.user_id, COUNT(*) AS session_count FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id GROUP BY p.user_id) user_sessions WHERE session_count > 200;
```

### ✅ PASS : MOVIES_071 - RANK watch time
```sql
SELECT profile_id, SUM(watch_time_seconds) AS total_watch_time, RANK() OVER (ORDER BY SUM(watch_time_seconds) DESC) AS rank FROM viewing_sessions GROUP BY profile_id;
```

### ✅ PASS : MOVIES_072 - Running downloads
```sql
SELECT profile_id, id AS download_id, COUNT(*) OVER (PARTITION BY profile_id ORDER BY created_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_downloads FROM downloads;
```

### ✅ PASS : MOVIES_073 - DENSE_RANK second
```sql
SELECT user_id, total_spent FROM (SELECT s.user_id, SUM(p.paid_amount) AS total_spent, DENSE_RANK() OVER (ORDER BY SUM(p.paid_amount) DESC) AS rnk FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id GROUP BY s.user_id) x WHERE rnk = 2;
```

### ✅ PASS : MOVIES_074 - LAG download gap
```sql
SELECT profile_id, MAX(gap_seconds) AS max_gap FROM (SELECT profile_id, EXTRACT(EPOCH FROM (created_at - LAG(created_at) OVER (PARTITION BY profile_id ORDER BY created_at))) AS gap_seconds FROM downloads) x GROUP BY profile_id;
```

### ✅ PASS : MOVIES_075 - RANK daily sessions
```sql
SELECT view_date, profile_id, total_sessions, RANK() OVER (PARTITION BY view_date ORDER BY total_sessions DESC) AS rank FROM (SELECT DATE(created_at) AS view_date, profile_id, COUNT(*) AS total_sessions FROM viewing_sessions GROUP BY DATE(created_at), profile_id) x;
```

### ✅ PASS : MOVIES_076 - ROW_NUMBER country top 3
```sql
SELECT country, profile_id, session_count FROM (SELECT u.country, vs.profile_id, COUNT(*) AS session_count, ROW_NUMBER() OVER (PARTITION BY u.country ORDER BY COUNT(*) DESC, vs.profile_id ASC) AS rn FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id JOIN users u ON p.user_id = u.id GROUP BY u.country, vs.profile_id) x WHERE rn <= 3;
```

### ✅ PASS : MOVIES_077 - Moving rating average
```sql
SELECT title_id, id, rating_value, AVG(rating_value) OVER (PARTITION BY title_id ORDER BY created_at ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg FROM ratings;
```

### ✅ PASS : MOVIES_078 - Streak groups
```sql
WITH x AS (SELECT profile_id, created_at, ROW_NUMBER() OVER (PARTITION BY profile_id ORDER BY created_at) - ROW_NUMBER() OVER (PARTITION BY profile_id, DATE(created_at) ORDER BY created_at) AS grp FROM viewing_sessions) SELECT profile_id, COUNT(*) AS streak FROM x GROUP BY profile_id, grp;
```

### ✅ PASS : MOVIES_079 - P90 rating
```sql
SELECT title_id, PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY rating_value) AS p90_rating FROM ratings GROUP BY title_id;
```

### ✅ PASS : MOVIES_080 - JOIN country revenue
```sql
SELECT u.country, SUM(p.paid_amount) AS total_revenue FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id JOIN users u ON s.user_id = u.id GROUP BY u.country ORDER BY total_revenue DESC, u.country ASC LIMIT 5;
```

### ✅ PASS : MOVIES_080 - ROW_NUMBER top
```sql
SELECT country, total_revenue FROM (SELECT country, total_revenue, ROW_NUMBER() OVER (ORDER BY total_revenue DESC, country ASC) AS rn FROM (SELECT u.country, SUM(p.paid_amount) AS total_revenue FROM payments p JOIN billing_invoices bi ON p.invoice_id = bi.id JOIN subscriptions s ON bi.subscription_id = s.id JOIN users u ON s.user_id = u.id GROUP BY u.country) country_revenue) ranked WHERE rn <= 5 ORDER BY total_revenue DESC, country ASC;
```

### ✅ PASS : MOVIES_081 - Retention duration
```sql
SELECT user_id, MIN(started_at) AS first_subscription_start, MAX(current_period_end) AS latest_period_end, EXTRACT(DAY FROM MAX(current_period_end) - MIN(started_at)) AS retention_days FROM subscriptions WHERE subscription_status IN ('active', 'expired', 'cancelled') GROUP BY user_id ORDER BY retention_days DESC, user_id ASC LIMIT 10;
```

### ✅ PASS : MOVIES_081 - ROW_NUMBER top
```sql
SELECT user_id, first_subscription_start, latest_period_end, retention_days FROM (SELECT user_id, first_subscription_start, latest_period_end, retention_days, ROW_NUMBER() OVER (ORDER BY retention_days DESC, user_id ASC) AS rn FROM (SELECT user_id, MIN(started_at) AS first_subscription_start, MAX(current_period_end) AS latest_period_end, EXTRACT(DAY FROM MAX(current_period_end) - MIN(started_at)) AS retention_days FROM subscriptions WHERE subscription_status IN ('active', 'expired', 'cancelled') GROUP BY user_id) retention_totals) ranked WHERE rn <= 10 ORDER BY retention_days DESC, user_id ASC;
```

### ✅ PASS : MOVIES_082 - Expected query only
```sql
SELECT title_id, COUNT(*) AS rewatch_sessions FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY profile_id, title_id HAVING COUNT(*) > 1 ORDER BY rewatch_sessions DESC, title_id ASC LIMIT 10;
```

### ✅ PASS : MOVIES_083 - Historical vs recent
```sql
WITH historical_avg AS (SELECT title_id, AVG(completion_percent) AS hist_avg FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY title_id), recent_avg AS (SELECT title_id, AVG(completion_percent) AS recent_avg FROM viewing_sessions WHERE title_id IS NOT NULL AND started_at >= NOW() - INTERVAL '30 days' GROUP BY title_id) SELECT h.title_id, ROUND(h.hist_avg, 2) AS historical_avg_completion, ROUND(r.recent_avg, 2) AS recent_avg_completion FROM historical_avg h JOIN recent_avg r ON h.title_id = r.title_id WHERE r.recent_avg < h.hist_avg;
```

### ✅ PASS : MOVIES_084 - Top abandoned episodes
```sql
SELECT episode_id, COUNT(*) AS abandoned_count FROM viewing_sessions WHERE episode_id IS NOT NULL AND session_status = 'abandoned' GROUP BY episode_id ORDER BY abandoned_count DESC, episode_id ASC LIMIT 10;
```

### ✅ PASS : MOVIES_084 - ROW_NUMBER top
```sql
SELECT episode_id, abandoned_count FROM (SELECT episode_id, abandoned_count, ROW_NUMBER() OVER (ORDER BY abandoned_count DESC, episode_id ASC) AS rn FROM (SELECT episode_id, COUNT(*) AS abandoned_count FROM viewing_sessions WHERE episode_id IS NOT NULL AND session_status = 'abandoned' GROUP BY episode_id) abandoned_totals) ranked WHERE rn <= 10 ORDER BY abandoned_count DESC, episode_id ASC;
```

### ✅ PASS : MOVIES_085 - ROW_NUMBER country revenue
```sql
WITH title_revenue AS (SELECT u.country, vs.title_id, SUM(bi.total_amount) AS total_revenue, ROW_NUMBER() OVER (PARTITION BY u.country ORDER BY SUM(bi.total_amount) DESC, vs.title_id ASC) AS rn FROM billing_invoices bi JOIN subscriptions s ON bi.subscription_id = s.id JOIN users u ON s.user_id = u.id JOIN profiles p ON p.user_id = u.id JOIN viewing_sessions vs ON vs.profile_id = p.id WHERE bi.invoice_status = 'paid' AND vs.title_id IS NOT NULL GROUP BY u.country, vs.title_id) SELECT country, title_id, ROUND(total_revenue, 2) AS total_revenue FROM title_revenue WHERE rn = 1;
```

### ✅ PASS : MOVIES_086 - Recent vs previous
```sql
WITH recent_period AS (SELECT p.user_id, SUM(vs.watch_time_seconds) AS recent_watch_time FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id WHERE vs.started_at >= NOW() - INTERVAL '30 days' GROUP BY p.user_id), previous_period AS (SELECT p.user_id, SUM(vs.watch_time_seconds) AS previous_watch_time FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id WHERE vs.started_at >= NOW() - INTERVAL '60 days' AND vs.started_at < NOW() - INTERVAL '30 days' GROUP BY p.user_id) SELECT r.user_id, r.recent_watch_time, p.previous_watch_time FROM recent_period r JOIN previous_period p ON r.user_id = p.user_id WHERE r.recent_watch_time < (p.previous_watch_time * 0.5);
```

### ✅ PASS : MOVIES_087 - Season completion
```sql
WITH season_totals AS (SELECT season_id, COUNT(*) AS total_episodes FROM episodes GROUP BY season_id), profile_season_watch AS (SELECT vs.profile_id, e.season_id, MIN(vs.started_at) AS first_watch, MAX(vs.ended_at) AS last_watch, COUNT(DISTINCT vs.episode_id) AS watched_episodes FROM viewing_sessions vs JOIN episodes e ON vs.episode_id = e.id WHERE vs.session_status = 'completed' GROUP BY vs.profile_id, e.season_id) SELECT psw.profile_id, psw.season_id, psw.watched_episodes FROM profile_season_watch psw JOIN season_totals st ON psw.season_id = st.season_id WHERE psw.watched_episodes = st.total_episodes AND psw.last_watch <= psw.first_watch + INTERVAL '24 hours';
```

### ✅ PASS : MOVIES_088 - Variant CTR
```sql
WITH experiment_ctr AS (SELECT ea.experiment_id, ev.is_control, COUNT(rc.id)::numeric / NULLIF(COUNT(ri.id), 0) AS ctr FROM experiment_assignments ea JOIN experiment_variants ev ON ea.variant_id = ev.id JOIN recommendation_impressions ri ON ea.id = ri.experiment_assignment_id LEFT JOIN recommendation_clicks rc ON ri.id = rc.impression_id GROUP BY ea.experiment_id, ev.is_control) SELECT v.experiment_id FROM experiment_ctr v JOIN experiment_ctr c ON v.experiment_id = c.experiment_id WHERE v.is_control = false AND c.is_control = true AND v.ctr > c.ctr;
```

### ✅ PASS : MOVIES_089 - COUNT distinct devices
```sql
SELECT profile_id, title_id, COUNT(DISTINCT device_id) AS device_count FROM viewing_sessions WHERE title_id IS NOT NULL GROUP BY profile_id, title_id HAVING COUNT(DISTINCT device_id) > 1;
```

### ✅ PASS : MOVIES_090 - Top category diversity
```sql
SELECT vs.profile_id, COUNT(DISTINCT tc.category_id) AS distinct_categories FROM viewing_sessions vs JOIN title_categories tc ON vs.title_id = tc.title_id WHERE vs.title_id IS NOT NULL GROUP BY vs.profile_id ORDER BY distinct_categories DESC, vs.profile_id ASC LIMIT 10;
```

### ✅ PASS : MOVIES_090 - ROW_NUMBER top
```sql
SELECT profile_id, distinct_categories FROM (SELECT profile_id, distinct_categories, ROW_NUMBER() OVER (ORDER BY distinct_categories DESC, profile_id ASC) AS rn FROM (SELECT vs.profile_id, COUNT(DISTINCT tc.category_id) AS distinct_categories FROM viewing_sessions vs JOIN title_categories tc ON vs.title_id = tc.title_id WHERE vs.title_id IS NOT NULL GROUP BY vs.profile_id) category_counts) ranked WHERE rn <= 10 ORDER BY distinct_categories DESC, profile_id ASC;
```

### ✅ PASS : MOVIES_091 - ROW_NUMBER month revenue
```sql
WITH monthly_title_revenue AS (SELECT DATE_TRUNC('month', bi.issued_at) AS revenue_month, vs.title_id, SUM(bi.total_amount) AS total_revenue, ROW_NUMBER() OVER (PARTITION BY DATE_TRUNC('month', bi.issued_at) ORDER BY SUM(bi.total_amount) DESC, vs.title_id ASC) AS rn FROM billing_invoices bi JOIN subscriptions s ON bi.subscription_id = s.id JOIN users u ON s.user_id = u.id JOIN profiles p ON p.user_id = u.id JOIN viewing_sessions vs ON vs.profile_id = p.id WHERE bi.invoice_status = 'paid' AND vs.title_id IS NOT NULL GROUP BY DATE_TRUNC('month', bi.issued_at), vs.title_id) SELECT revenue_month, title_id, ROUND(total_revenue, 2) AS total_revenue FROM monthly_title_revenue WHERE rn = 1;
```

### ✅ PASS : MOVIES_092 - Click watch conversion
```sql
WITH clicked_titles AS (SELECT ri.id AS impression_id, ri.profile_id, ri.title_id FROM recommendation_impressions ri JOIN recommendation_clicks rc ON ri.id = rc.impression_id), watched_titles AS (SELECT DISTINCT ct.impression_id, ct.title_id FROM clicked_titles ct JOIN viewing_sessions vs ON ct.profile_id = vs.profile_id AND ct.title_id = vs.title_id) SELECT ct.title_id, ROUND(COUNT(wt.impression_id)::numeric * 100 / COUNT(ct.impression_id), 2) AS watch_conversion_rate FROM clicked_titles ct LEFT JOIN watched_titles wt ON ct.impression_id = wt.impression_id GROUP BY ct.title_id ORDER BY watch_conversion_rate DESC, ct.title_id ASC;
```

### ✅ PASS : MOVIES_093 - Six month activity
```sql
WITH monthly_activity AS (SELECT profile_id, DATE_TRUNC('month', started_at) AS activity_month FROM viewing_sessions WHERE started_at >= NOW() - INTERVAL '6 months' GROUP BY profile_id, DATE_TRUNC('month', started_at)) SELECT profile_id FROM monthly_activity GROUP BY profile_id HAVING COUNT(DISTINCT activity_month) = 6;
```

### ✅ PASS : MOVIES_094 - Top LTV users
```sql
SELECT s.user_id, ROUND(SUM(bi.total_amount), 2) AS lifetime_value FROM billing_invoices bi JOIN subscriptions s ON bi.subscription_id = s.id WHERE bi.invoice_status = 'paid' GROUP BY s.user_id ORDER BY lifetime_value DESC, s.user_id ASC LIMIT 10;
```

### ✅ PASS : MOVIES_095 - Top completed series
```sql
SELECT s.title_id, ROUND(AVG(vs.completion_percent), 2) AS avg_completion_percent FROM viewing_sessions vs JOIN episodes e ON vs.episode_id = e.id JOIN seasons s ON e.season_id = s.id GROUP BY s.title_id ORDER BY avg_completion_percent DESC, s.title_id ASC LIMIT 10;
```

### ✅ PASS : MOVIES_096 - Average pauses
```sql
WITH session_pauses AS (SELECT pe.session_id, COUNT(*) AS pause_count FROM playback_events pe WHERE pe.event_type = 'pause' GROUP BY pe.session_id) SELECT vs.title_id, ROUND(AVG(sp.pause_count), 2) AS avg_pauses_per_session FROM session_pauses sp JOIN viewing_sessions vs ON sp.session_id = vs.id WHERE vs.title_id IS NOT NULL GROUP BY vs.title_id ORDER BY avg_pauses_per_session DESC, vs.title_id ASC;
```

### ✅ PASS : MOVIES_097 - Distinct countries
```sql
SELECT user_id, COUNT(DISTINCT country) AS distinct_countries FROM devices WHERE country IS NOT NULL GROUP BY user_id HAVING COUNT(DISTINCT country) > 1;
```

### ✅ PASS : MOVIES_098 - Campaign CTR
```sql
SELECT campaign_id, ROUND(COUNT(clicked_at)::numeric * 100 / COUNT(*), 2) AS ctr_percent FROM notification_deliveries GROUP BY campaign_id ORDER BY ctr_percent DESC, campaign_id ASC;
```

### ✅ PASS : MOVIES_099 - Recommendation diversity
```sql
SELECT ri.profile_id, COUNT(DISTINCT ri.row_id) AS distinct_rows_clicked FROM recommendation_clicks rc JOIN recommendation_impressions ri ON rc.impression_id = ri.id GROUP BY ri.profile_id ORDER BY distinct_rows_clicked DESC, ri.profile_id ASC LIMIT 10;
```

### ✅ PASS : MOVIES_100 - Renewed user watches
```sql
WITH renewed_users AS (SELECT user_id FROM subscriptions GROUP BY user_id HAVING COUNT(*) > 1) SELECT vs.title_id, COUNT(*) AS watch_count FROM viewing_sessions vs JOIN profiles p ON vs.profile_id = p.id JOIN renewed_users ru ON p.user_id = ru.user_id WHERE vs.title_id IS NOT NULL GROUP BY vs.title_id ORDER BY watch_count DESC, vs.title_id ASC LIMIT 10;
```

