# Solutions Evaluation Report (chat)

**Summary:**
- Total Approaches: 245
- Passed: 245
- Failed: 0

## Detailed Results
### ✅ PASS : CHAT_001 - COUNT all
```sql
SELECT COUNT(*) AS active_users FROM users WHERE is_active = true;
```

### ✅ PASS : CHAT_001 - COUNT id
```sql
SELECT COUNT(id) AS active_users FROM users WHERE is_active = true;
```

### ✅ PASS : CHAT_002 - Filter active
```sql
SELECT id, workspace_name, workspace_type FROM workspaces WHERE is_active = true;
```

### ✅ PASS : CHAT_002 - Boolean shorthand
```sql
SELECT id, workspace_name, workspace_type FROM workspaces WHERE is_active;
```

### ✅ PASS : CHAT_002 - FILTER count
```sql
SELECT id, workspace_name, workspace_type FROM workspaces WHERE is_active IS TRUE;
```

### ✅ PASS : CHAT_002 - SUM CASE
```sql
SELECT id, workspace_name, workspace_type FROM (SELECT id, workspace_name, workspace_type FROM workspaces WHERE is_active = true) active_workspaces;
```

### ✅ PASS : CHAT_003 - Filter verified
```sql
SELECT id, full_name, email FROM users WHERE is_verified = true;
```

### ✅ PASS : CHAT_003 - Boolean shorthand
```sql
SELECT id, full_name, email FROM users WHERE is_verified;
```

### ✅ PASS : CHAT_003 - IS TRUE
```sql
SELECT id, full_name, email FROM users WHERE is_verified IS TRUE;
```

### ✅ PASS : CHAT_004 - Filter public
```sql
SELECT id, workspace_id, channel_name FROM channels WHERE visibility = 'public';
```

### ✅ PASS : CHAT_004 - IN filter
```sql
SELECT id, workspace_id, channel_name FROM channels WHERE visibility IN ('public');
```

### ✅ PASS : CHAT_005 - Filter bots
```sql
SELECT id, full_name, username FROM users WHERE is_bot = true;
```

### ✅ PASS : CHAT_005 - Boolean shorthand
```sql
SELECT id, full_name, username FROM users WHERE is_bot;
```

### ✅ PASS : CHAT_005 - IS TRUE
```sql
SELECT id, full_name, username FROM users WHERE is_bot IS TRUE;
```

### ✅ PASS : CHAT_006 - Filter GROUP BY
```sql
SELECT workspace_id, COUNT(*) AS active_member_count FROM workspace_members WHERE membership_status = 'active' GROUP BY workspace_id;
```

### ✅ PASS : CHAT_006 - FILTER count
```sql
SELECT workspace_id, COUNT(*) FILTER (WHERE membership_status = 'active') AS active_member_count FROM workspace_members GROUP BY workspace_id HAVING COUNT(*) FILTER (WHERE membership_status = 'active') > 0;
```

### ✅ PASS : CHAT_006 - SUM CASE
```sql
SELECT workspace_id, SUM(CASE WHEN membership_status = 'active' THEN 1 ELSE 0 END) AS active_member_count FROM workspace_members GROUP BY workspace_id HAVING SUM(CASE WHEN membership_status = 'active' THEN 1 ELSE 0 END) > 0;
```

### ✅ PASS : CHAT_007 - GROUP BY workspace
```sql
SELECT workspace_id, COUNT(*) AS total_channels FROM channels GROUP BY workspace_id;
```

### ✅ PASS : CHAT_007 - COUNT id
```sql
SELECT workspace_id, COUNT(id) AS total_channels FROM channels GROUP BY workspace_id;
```

### ✅ PASS : CHAT_007 - Subquery count
```sql
SELECT workspace_id, total_channels FROM (SELECT workspace_id, COUNT(*) AS total_channels FROM channels GROUP BY workspace_id) channel_counts;
```

### ✅ PASS : CHAT_008 - Filter archived
```sql
SELECT id, workspace_id, channel_name, archived_at FROM channels WHERE is_archived = true;
```

### ✅ PASS : CHAT_008 - Boolean shorthand
```sql
SELECT id, workspace_id, channel_name, archived_at FROM channels WHERE is_archived;
```

### ✅ PASS : CHAT_008 - IS TRUE
```sql
SELECT id, workspace_id, channel_name, archived_at FROM channels WHERE is_archived IS TRUE;
```

### ✅ PASS : CHAT_009 - Two filters
```sql
SELECT id, workspace_id, sender_member_id, sent_at FROM messages WHERE contains_link = true AND is_deleted = false;
```

### ✅ PASS : CHAT_009 - Boolean shorthand
```sql
SELECT id, workspace_id, sender_member_id, sent_at FROM messages WHERE contains_link AND NOT is_deleted;
```

### ✅ PASS : CHAT_009 - IS TRUE/FALSE
```sql
SELECT id, workspace_id, sender_member_id, sent_at FROM messages WHERE contains_link IS TRUE AND is_deleted IS FALSE;
```

### ✅ PASS : CHAT_010 - Filter direct
```sql
SELECT COUNT(*) AS direct_conversation_count FROM conversations WHERE conversation_type = 'direct';
```

### ✅ PASS : CHAT_010 - IN filter
```sql
SELECT COUNT(*) AS direct_conversation_count FROM conversations WHERE conversation_type IN ('direct');
```

### ✅ PASS : CHAT_010 - FILTER count
```sql
SELECT COUNT(*) FILTER (WHERE conversation_type = 'direct') AS direct_conversation_count FROM conversations;
```

### ✅ PASS : CHAT_010 - SUM CASE
```sql
SELECT SUM(CASE WHEN conversation_type = 'direct' THEN 1 ELSE 0 END) AS direct_conversation_count FROM conversations;
```

### ✅ PASS : CHAT_011 - Select pins
```sql
SELECT message_id, channel_id, pinned_by_member_id, pinned_at FROM message_pins;
```

### ✅ PASS : CHAT_012 - Filter unread
```sql
SELECT id, workspace_member_id, notification_type, created_at FROM notifications WHERE is_read = false;
```

### ✅ PASS : CHAT_012 - NOT boolean
```sql
SELECT id, workspace_member_id, notification_type, created_at FROM notifications WHERE NOT is_read;
```

### ✅ PASS : CHAT_012 - IS FALSE
```sql
SELECT id, workspace_member_id, notification_type, created_at FROM notifications WHERE is_read IS FALSE;
```

### ✅ PASS : CHAT_013 - JOIN online sessions
```sql
SELECT DISTINCT workspace_member_id FROM user_presence_logs WHERE presence_status = 'online' AND ended_at IS NULL;
```

### ✅ PASS : CHAT_013 - EXISTS online
```sql
SELECT DISTINCT upl.workspace_member_id FROM user_presence_logs upl WHERE upl.presence_status = 'online' AND upl.ended_at IS NULL AND EXISTS (SELECT 1 FROM workspace_members wm WHERE wm.id = upl.workspace_member_id);
```

### ✅ PASS : CHAT_014 - DATE equals today
```sql
SELECT COUNT(*) AS messages_sent_today FROM messages WHERE DATE(sent_at) = CURRENT_DATE;
```

### ✅ PASS : CHAT_014 - Timestamp range
```sql
SELECT COUNT(*) AS messages_sent_today FROM messages WHERE sent_at >= CURRENT_DATE AND sent_at < CURRENT_DATE + INTERVAL '1 day';
```

### ✅ PASS : CHAT_014 - DATE_TRUNC day
```sql
SELECT COUNT(*) AS messages_sent_today FROM messages WHERE DATE_TRUNC('day', sent_at) = DATE_TRUNC('day', CURRENT_DATE);
```

### ✅ PASS : CHAT_015 - GROUP BY emoji
```sql
SELECT emoji_code, COUNT(*) AS reaction_count FROM message_reactions GROUP BY emoji_code;
```

### ✅ PASS : CHAT_015 - COUNT id
```sql
SELECT emoji_code, COUNT(id) AS reaction_count FROM message_reactions GROUP BY emoji_code;
```

### ✅ PASS : CHAT_015 - Subquery count
```sql
SELECT emoji_code, reaction_count FROM (SELECT emoji_code, COUNT(*) AS reaction_count FROM message_reactions GROUP BY emoji_code) emoji_counts;
```

### ✅ PASS : CHAT_016 - Month trunc
```sql
SELECT id, workspace_id, user_id, joined_at FROM workspace_members WHERE DATE_TRUNC('month', joined_at) = DATE_TRUNC('month', CURRENT_DATE);
```

### ✅ PASS : CHAT_016 - Month range
```sql
SELECT id, workspace_id, user_id, joined_at FROM workspace_members WHERE joined_at >= DATE_TRUNC('month', CURRENT_DATE) AND joined_at < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month';
```

### ✅ PASS : CHAT_017 - Filter private group
```sql
SELECT workspace_id, COUNT(*) AS private_channel_count FROM channels WHERE visibility = 'private' GROUP BY workspace_id;
```

### ✅ PASS : CHAT_017 - FILTER count
```sql
SELECT workspace_id, COUNT(*) FILTER (WHERE visibility = 'private') AS private_channel_count FROM channels GROUP BY workspace_id HAVING COUNT(*) FILTER (WHERE visibility = 'private') > 0;
```

### ✅ PASS : CHAT_017 - SUM CASE
```sql
SELECT workspace_id, SUM(CASE WHEN visibility = 'private' THEN 1 ELSE 0 END) AS private_channel_count FROM channels GROUP BY workspace_id HAVING SUM(CASE WHEN visibility = 'private' THEN 1 ELSE 0 END) > 0;
```

### ✅ PASS : CHAT_018 - Filter deleted
```sql
SELECT id, workspace_id, sender_member_id, deleted_at FROM messages WHERE is_deleted = true;
```

### ✅ PASS : CHAT_018 - Boolean shorthand
```sql
SELECT id, workspace_id, sender_member_id, deleted_at FROM messages WHERE is_deleted;
```

### ✅ PASS : CHAT_018 - IS TRUE
```sql
SELECT id, workspace_id, sender_member_id, deleted_at FROM messages WHERE is_deleted IS TRUE;
```

### ✅ PASS : CHAT_019 - JOIN DND sessions
```sql
SELECT DISTINCT workspace_member_id FROM user_presence_logs WHERE presence_status = 'dnd' AND ended_at IS NULL;
```

### ✅ PASS : CHAT_019 - EXISTS DND
```sql
SELECT DISTINCT upl.workspace_member_id FROM user_presence_logs upl WHERE upl.presence_status = 'dnd' AND upl.ended_at IS NULL AND EXISTS (SELECT 1 FROM workspace_members wm WHERE wm.id = upl.workspace_member_id);
```

### ✅ PASS : CHAT_020 - IS NULL
```sql
SELECT id, full_name, email FROM users WHERE phone IS NULL;
```

### ✅ PASS : CHAT_020 - COALESCE empty
```sql
SELECT id, full_name, email FROM users WHERE COALESCE(phone, '') = '';
```

### ✅ PASS : CHAT_021 - Filter group
```sql
SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id;
```

### ✅ PASS : CHAT_021 - Boolean shorthand
```sql
SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND NOT is_deleted GROUP BY channel_id;
```

### ✅ PASS : CHAT_021 - FILTER count
```sql
SELECT channel_id, COUNT(*) FILTER (WHERE is_deleted = false) AS total_messages FROM messages WHERE channel_id IS NOT NULL GROUP BY channel_id HAVING COUNT(*) FILTER (WHERE is_deleted = false) > 0;
```

### ✅ PASS : CHAT_022 - Group replies
```sql
SELECT parent_message_id, COUNT(*) AS reply_count FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id;
```

### ✅ PASS : CHAT_022 - COUNT id
```sql
SELECT parent_message_id, COUNT(id) AS reply_count FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id;
```

### ✅ PASS : CHAT_022 - Subquery count
```sql
SELECT parent_message_id, reply_count FROM (SELECT parent_message_id, COUNT(*) AS reply_count FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id) reply_counts;
```

### ✅ PASS : CHAT_023 - Interval filter
```sql
SELECT id, full_name, username, created_at FROM users WHERE created_at >= CURRENT_DATE - INTERVAL '30 days';
```

### ✅ PASS : CHAT_023 - NOW interval
```sql
SELECT id, full_name, username, created_at FROM users WHERE created_at >= NOW() - INTERVAL '30 days';
```

### ✅ PASS : CHAT_024 - Select memberships
```sql
SELECT id, channel_id, workspace_member_id, joined_at FROM channel_members;
```

### ✅ PASS : CHAT_025 - GROUP BY type
```sql
SELECT attachment_type, COUNT(*) AS attachment_count FROM message_attachments GROUP BY attachment_type;
```

### ✅ PASS : CHAT_025 - COUNT id
```sql
SELECT attachment_type, COUNT(id) AS attachment_count FROM message_attachments GROUP BY attachment_type;
```

### ✅ PASS : CHAT_025 - Subquery count
```sql
SELECT attachment_type, attachment_count FROM (SELECT attachment_type, COUNT(*) AS attachment_count FROM message_attachments GROUP BY attachment_type) attachment_counts;
```

### ✅ PASS : CHAT_026 - Year trunc
```sql
SELECT id, workspace_name, workspace_type, created_at FROM workspaces WHERE DATE_TRUNC('year', created_at) = DATE_TRUNC('year', CURRENT_DATE);
```

### ✅ PASS : CHAT_026 - Year range
```sql
SELECT id, workspace_name, workspace_type, created_at FROM workspaces WHERE created_at >= DATE_TRUNC('year', CURRENT_DATE) AND created_at < DATE_TRUNC('year', CURRENT_DATE) + INTERVAL '1 year';
```

### ✅ PASS : CHAT_026 - EXTRACT year
```sql
SELECT id, workspace_name, workspace_type, created_at FROM workspaces WHERE EXTRACT(YEAR FROM created_at) = EXTRACT(YEAR FROM CURRENT_DATE);
```

### ✅ PASS : CHAT_027 - IS NOT NULL
```sql
SELECT id, workspace_member_id, mute_until FROM notification_preferences WHERE mute_until IS NOT NULL;
```

### ✅ PASS : CHAT_027 - Future mute
```sql
SELECT id, workspace_member_id, mute_until FROM notification_preferences WHERE NOT (mute_until IS NULL);
```

### ✅ PASS : CHAT_028 - Filter pending
```sql
SELECT id, workspace_id, invited_email, created_at FROM invites WHERE invite_status = 'pending';
```

### ✅ PASS : CHAT_028 - IN filter
```sql
SELECT id, workspace_id, invited_email, created_at FROM invites WHERE invite_status IN ('pending');
```

### ✅ PASS : CHAT_029 - Filter applied
```sql
SELECT id, workspace_id, action_type, created_at FROM moderation_actions WHERE action_status = 'applied';
```

### ✅ PASS : CHAT_029 - IN filter
```sql
SELECT id, workspace_id, action_type, created_at FROM moderation_actions WHERE action_status IN ('applied');
```

### ✅ PASS : CHAT_030 - Filter voice
```sql
SELECT COUNT(*) AS voice_calls_count FROM calls WHERE call_type = 'voice';
```

### ✅ PASS : CHAT_030 - IN filter
```sql
SELECT COUNT(*) AS voice_calls_count FROM calls WHERE call_type IN ('voice');
```

### ✅ PASS : CHAT_030 - FILTER count
```sql
SELECT COUNT(*) FILTER (WHERE call_type = 'voice') AS voice_calls_count FROM calls;
```

### ✅ PASS : CHAT_030 - SUM CASE
```sql
SELECT SUM(CASE WHEN call_type = 'voice' THEN 1 ELSE 0 END) AS voice_calls_count FROM calls;
```

### ✅ PASS : CHAT_031 - GROUP top 5
```sql
SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id ORDER BY total_messages DESC, channel_id ASC LIMIT 5;
```

### ✅ PASS : CHAT_031 - Subquery top
```sql
SELECT channel_id, total_messages FROM (SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id) channel_counts ORDER BY total_messages DESC, channel_id ASC LIMIT 5;
```

### ✅ PASS : CHAT_031 - ROW_NUMBER top
```sql
SELECT channel_id, total_messages FROM (SELECT channel_id, total_messages, ROW_NUMBER() OVER (ORDER BY total_messages DESC, channel_id ASC) AS rn FROM (SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id) channel_counts) ranked WHERE rn <= 5 ORDER BY total_messages DESC, channel_id ASC;
```

### ✅ PASS : CHAT_032 - DISTINCT members
```sql
SELECT DISTINCT workspace_member_id FROM saved_messages;
```

### ✅ PASS : CHAT_032 - GROUP BY members
```sql
SELECT workspace_member_id FROM saved_messages GROUP BY workspace_member_id;
```

### ✅ PASS : CHAT_033 - DISTINCT messages
```sql
SELECT DISTINCT ma.message_id FROM message_attachments ma;
```

### ✅ PASS : CHAT_033 - GROUP BY messages
```sql
SELECT message_id FROM message_attachments GROUP BY message_id;
```

### ✅ PASS : CHAT_034 - Inactive cutoff
```sql
SELECT id, full_name, last_seen_at FROM users WHERE last_seen_at < CURRENT_DATE - INTERVAL '30 days';
```

### ✅ PASS : CHAT_034 - NOW cutoff
```sql
SELECT id, full_name, last_seen_at FROM users WHERE last_seen_at < NOW() - INTERVAL '30 days';
```

### ✅ PASS : CHAT_035 - GROUP HAVING
```sql
SELECT call_id, COUNT(*) AS participant_count FROM call_participants GROUP BY call_id HAVING COUNT(*) > 2;
```

### ✅ PASS : CHAT_035 - Subquery filter
```sql
SELECT call_id, participant_count FROM (SELECT call_id, COUNT(*) AS participant_count FROM call_participants GROUP BY call_id) counts WHERE participant_count > 2;
```

### ✅ PASS : CHAT_035 - Window count
```sql
SELECT DISTINCT call_id, participant_count FROM (SELECT call_id, COUNT(*) OVER (PARTITION BY call_id) AS participant_count FROM call_participants) counts WHERE participant_count > 2;
```

### ✅ PASS : CHAT_036 - COUNT DISTINCT
```sql
SELECT user_id, COUNT(DISTINCT workspace_id) AS workspace_count FROM workspace_members WHERE membership_status = 'active' GROUP BY user_id HAVING COUNT(DISTINCT workspace_id) > 1;
```

### ✅ PASS : CHAT_036 - Pre-distinct
```sql
SELECT user_id, COUNT(*) AS workspace_count FROM (SELECT DISTINCT user_id, workspace_id FROM workspace_members WHERE membership_status = 'active') active_user_workspaces GROUP BY user_id HAVING COUNT(*) > 1;
```

### ✅ PASS : CHAT_037 - GROUP top 10
```sql
SELECT message_id, COUNT(*) AS reaction_count FROM message_reactions GROUP BY message_id ORDER BY reaction_count DESC, message_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_037 - Subquery top
```sql
SELECT message_id, reaction_count FROM (SELECT message_id, COUNT(*) AS reaction_count FROM message_reactions GROUP BY message_id) reaction_counts ORDER BY reaction_count DESC, message_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_037 - ROW_NUMBER top
```sql
SELECT message_id, reaction_count FROM (SELECT message_id, reaction_count, ROW_NUMBER() OVER (ORDER BY reaction_count DESC, message_id ASC) AS rn FROM (SELECT message_id, COUNT(*) AS reaction_count FROM message_reactions GROUP BY message_id) reaction_counts) ranked WHERE rn <= 10 ORDER BY reaction_count DESC, message_id ASC;
```

### ✅ PASS : CHAT_038 - Unread group
```sql
SELECT workspace_member_id, COUNT(*) AS unread_count FROM notifications WHERE is_read = false GROUP BY workspace_member_id;
```

### ✅ PASS : CHAT_038 - Boolean shorthand
```sql
SELECT workspace_member_id, COUNT(*) AS unread_count FROM notifications WHERE NOT is_read GROUP BY workspace_member_id;
```

### ✅ PASS : CHAT_038 - FILTER count
```sql
SELECT workspace_member_id, COUNT(*) FILTER (WHERE is_read = false) AS unread_count FROM notifications GROUP BY workspace_member_id HAVING COUNT(*) FILTER (WHERE is_read = false) > 0;
```

### ✅ PASS : CHAT_039 - Mention counts
```sql
SELECT mentioned_member_id AS workspace_member_id, COUNT(*) AS mention_count FROM message_mentions WHERE mentioned_member_id IS NOT NULL GROUP BY mentioned_member_id;
```

### ✅ PASS : CHAT_039 - COUNT id
```sql
SELECT mentioned_member_id AS workspace_member_id, COUNT(id) AS mention_count FROM message_mentions WHERE mentioned_member_id IS NOT NULL GROUP BY mentioned_member_id;
```

### ✅ PASS : CHAT_039 - Subquery count
```sql
SELECT workspace_member_id, mention_count FROM (SELECT mentioned_member_id AS workspace_member_id, COUNT(*) AS mention_count FROM message_mentions WHERE mentioned_member_id IS NOT NULL GROUP BY mentioned_member_id) mention_counts;
```

### ✅ PASS : CHAT_040 - Thread reply average
```sql
WITH thread_replies AS (SELECT parent_message_id, COUNT(*) AS reply_count FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id) SELECT ROUND(AVG(reply_count), 2) AS avg_replies_per_thread FROM thread_replies;
```

### ✅ PASS : CHAT_040 - Subquery average
```sql
SELECT ROUND(AVG(reply_count), 2) AS avg_replies_per_thread FROM (SELECT parent_message_id, COUNT(*) AS reply_count FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id) thread_replies;
```

### ✅ PASS : CHAT_041 - GROUP top 10
```sql
SELECT sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY sender_member_id ORDER BY message_count DESC, sender_member_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_041 - Boolean shorthand
```sql
SELECT sender_member_id, COUNT(*) AS message_count FROM messages WHERE NOT is_deleted GROUP BY sender_member_id ORDER BY message_count DESC, sender_member_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_041 - Subquery top
```sql
SELECT sender_member_id, message_count FROM (SELECT sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY sender_member_id) sender_counts ORDER BY message_count DESC, sender_member_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_041 - ROW_NUMBER top
```sql
SELECT sender_member_id, message_count FROM (SELECT sender_member_id, message_count, ROW_NUMBER() OVER (ORDER BY message_count DESC, sender_member_id ASC) AS rn FROM (SELECT sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY sender_member_id) sender_counts) ranked WHERE rn <= 10 ORDER BY message_count DESC, sender_member_id ASC;
```

### ✅ PASS : CHAT_042 - LEFT JOIN HAVING
```sql
SELECT c.id, c.workspace_id, c.channel_name FROM channels c LEFT JOIN messages m ON c.id = m.channel_id GROUP BY c.id, c.workspace_id, c.channel_name HAVING COUNT(m.id) = 0;
```

### ✅ PASS : CHAT_042 - LEFT anti join
```sql
SELECT c.id, c.workspace_id, c.channel_name FROM channels c LEFT JOIN messages m ON c.id = m.channel_id WHERE m.id IS NULL;
```

### ✅ PASS : CHAT_042 - NOT EXISTS
```sql
SELECT c.id, c.workspace_id, c.channel_name FROM channels c WHERE NOT EXISTS (SELECT 1 FROM messages m WHERE m.channel_id = c.id);
```

### ✅ PASS : CHAT_043 - LEFT JOIN HAVING
```sql
SELECT wm.id AS workspace_member_id FROM workspace_members wm LEFT JOIN messages m ON wm.id = m.sender_member_id WHERE wm.membership_status = 'active' GROUP BY wm.id HAVING COUNT(m.id) = 0;
```

### ✅ PASS : CHAT_043 - NOT EXISTS
```sql
SELECT wm.id AS workspace_member_id FROM workspace_members wm WHERE wm.membership_status = 'active' AND NOT EXISTS (SELECT 1 FROM messages m WHERE m.sender_member_id = wm.id);
```

### ✅ PASS : CHAT_043 - LEFT anti join
```sql
SELECT DISTINCT wm.id AS workspace_member_id FROM workspace_members wm LEFT JOIN messages m ON wm.id = m.sender_member_id WHERE wm.membership_status = 'active' AND m.id IS NULL;
```

### ✅ PASS : CHAT_044 - Channel average
```sql
WITH channel_message_counts AS (SELECT channel_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id) SELECT ROUND(AVG(message_count), 2) AS avg_messages_per_channel FROM channel_message_counts;
```

### ✅ PASS : CHAT_044 - Subquery average
```sql
SELECT ROUND(AVG(message_count), 2) AS avg_messages_per_channel FROM (SELECT channel_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id) channel_message_counts;
```

### ✅ PASS : CHAT_045 - GROUP HAVING
```sql
SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id HAVING COUNT(*) > 100;
```

### ✅ PASS : CHAT_045 - Subquery filter
```sql
SELECT channel_id, total_messages FROM (SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id) channel_counts WHERE total_messages > 100;
```

### ✅ PASS : CHAT_045 - FILTER count
```sql
SELECT channel_id, COUNT(*) FILTER (WHERE is_deleted = false) AS total_messages FROM messages WHERE channel_id IS NOT NULL GROUP BY channel_id HAVING COUNT(*) FILTER (WHERE is_deleted = false) > 100;
```

### ✅ PASS : CHAT_046 - JOIN distinct
```sql
SELECT DISTINCT m.sender_member_id AS workspace_member_id FROM messages m JOIN message_reactions r ON m.sender_member_id = r.workspace_member_id;
```

### ✅ PASS : CHAT_046 - EXISTS both
```sql
SELECT DISTINCT m.sender_member_id AS workspace_member_id FROM messages m WHERE EXISTS (SELECT 1 FROM message_reactions r WHERE r.workspace_member_id = m.sender_member_id);
```

### ✅ PASS : CHAT_046 - INTERSECT
```sql
SELECT sender_member_id AS workspace_member_id FROM messages INTERSECT SELECT workspace_member_id FROM message_reactions;
```

### ✅ PASS : CHAT_047 - GROUP top 10
```sql
SELECT workspace_id, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY workspace_id ORDER BY total_messages DESC, workspace_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_047 - Subquery top
```sql
SELECT workspace_id, total_messages FROM (SELECT workspace_id, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY workspace_id) counts ORDER BY total_messages DESC, workspace_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_047 - ROW_NUMBER top
```sql
SELECT workspace_id, total_messages FROM (SELECT workspace_id, total_messages, ROW_NUMBER() OVER (ORDER BY total_messages DESC, workspace_id ASC) AS rn FROM (SELECT workspace_id, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY workspace_id) counts) ranked WHERE rn <= 10 ORDER BY total_messages DESC, workspace_id ASC;
```

### ✅ PASS : CHAT_048 - Reaction average
```sql
WITH reaction_counts AS (SELECT message_id, COUNT(*) AS reaction_count FROM message_reactions GROUP BY message_id) SELECT ROUND(AVG(reaction_count), 2) AS avg_reaction_count FROM reaction_counts;
```

### ✅ PASS : CHAT_048 - Subquery average
```sql
SELECT ROUND(AVG(reaction_count), 2) AS avg_reaction_count FROM (SELECT message_id, COUNT(*) AS reaction_count FROM message_reactions GROUP BY message_id) reaction_counts;
```

### ✅ PASS : CHAT_049 - JOIN private
```sql
SELECT cm.channel_id, COUNT(*) AS member_count FROM channel_members cm JOIN channels c ON cm.channel_id = c.id WHERE c.visibility = 'private' GROUP BY cm.channel_id;
```

### ✅ PASS : CHAT_049 - WHERE IN private
```sql
SELECT channel_id, COUNT(*) AS member_count FROM channel_members WHERE channel_id IN (SELECT id FROM channels WHERE visibility = 'private') GROUP BY channel_id;
```

### ✅ PASS : CHAT_049 - EXISTS private
```sql
SELECT cm.channel_id, COUNT(*) AS member_count FROM channel_members cm WHERE EXISTS (SELECT 1 FROM channels c WHERE c.id = cm.channel_id AND c.visibility = 'private') GROUP BY cm.channel_id;
```

### ✅ PASS : CHAT_050 - Filter owners
```sql
SELECT workspace_id, COUNT(*) AS owner_count FROM workspace_members WHERE membership_status = 'active' AND member_type = 'owner' GROUP BY workspace_id;
```

### ✅ PASS : CHAT_050 - FILTER count
```sql
SELECT workspace_id, COUNT(*) FILTER (WHERE membership_status = 'active' AND member_type = 'owner') AS owner_count FROM workspace_members GROUP BY workspace_id HAVING COUNT(*) FILTER (WHERE membership_status = 'active' AND member_type = 'owner') > 0;
```

### ✅ PASS : CHAT_050 - SUM CASE
```sql
SELECT workspace_id, SUM(CASE WHEN membership_status = 'active' AND member_type = 'owner' THEN 1 ELSE 0 END) AS owner_count FROM workspace_members GROUP BY workspace_id HAVING SUM(CASE WHEN membership_status = 'active' AND member_type = 'owner' THEN 1 ELSE 0 END) > 0;
```

### ✅ PASS : CHAT_051 - COUNT DISTINCT top
```sql
SELECT channel_id, COUNT(DISTINCT sender_member_id) AS unique_senders FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id ORDER BY unique_senders DESC, channel_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_051 - Pre-distinct senders
```sql
SELECT channel_id, COUNT(*) AS unique_senders FROM (SELECT DISTINCT channel_id, sender_member_id FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false) channel_senders GROUP BY channel_id ORDER BY unique_senders DESC, channel_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_052 - COUNT DISTINCT
```sql
SELECT workspace_member_id, COUNT(DISTINCT channel_id) AS channel_count FROM channel_members GROUP BY workspace_member_id HAVING COUNT(DISTINCT channel_id) > 3;
```

### ✅ PASS : CHAT_052 - Pre-distinct channels
```sql
SELECT workspace_member_id, COUNT(*) AS channel_count FROM (SELECT DISTINCT workspace_member_id, channel_id FROM channel_members) member_channels GROUP BY workspace_member_id HAVING COUNT(*) > 3;
```

### ✅ PASS : CHAT_053 - LEFT anti join
```sql
SELECT c.id, c.workspace_id, c.channel_name FROM channels c LEFT JOIN channel_members cm ON c.id = cm.channel_id GROUP BY c.id, c.workspace_id, c.channel_name HAVING COUNT(cm.id) = 0;
```

### ✅ PASS : CHAT_053 - NOT EXISTS
```sql
SELECT c.id, c.workspace_id, c.channel_name FROM channels c WHERE NOT EXISTS (SELECT 1 FROM channel_members cm WHERE cm.channel_id = c.id);
```

### ✅ PASS : CHAT_053 - LEFT join null
```sql
SELECT c.id, c.workspace_id, c.channel_name FROM channels c LEFT JOIN channel_members cm ON c.id = cm.channel_id WHERE cm.id IS NULL;
```

### ✅ PASS : CHAT_054 - CTE totals
```sql
WITH workspace_message_counts AS (SELECT workspace_id, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY workspace_id), workspace_active_members AS (SELECT workspace_id, COUNT(*) AS active_members FROM workspace_members WHERE membership_status = 'active' GROUP BY workspace_id) SELECT wam.workspace_id, ROUND(COALESCE(wmc.total_messages, 0)::numeric / NULLIF(wam.active_members, 0), 2) AS avg_messages_per_active_member FROM workspace_active_members wam LEFT JOIN workspace_message_counts wmc ON wam.workspace_id = wmc.workspace_id;
```

### ✅ PASS : CHAT_054 - Inline totals
```sql
SELECT wam.workspace_id, ROUND(COALESCE(wmc.total_messages, 0)::numeric / NULLIF(wam.active_members, 0), 2) AS avg_messages_per_active_member FROM (SELECT workspace_id, COUNT(*) AS active_members FROM workspace_members WHERE membership_status = 'active' GROUP BY workspace_id) wam LEFT JOIN (SELECT workspace_id, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY workspace_id) wmc ON wam.workspace_id = wmc.workspace_id;
```

### ✅ PASS : CHAT_055 - GROUP top 10
```sql
SELECT message_id, COUNT(*) AS mention_count FROM message_mentions GROUP BY message_id ORDER BY mention_count DESC, message_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_055 - Subquery top
```sql
SELECT message_id, mention_count FROM (SELECT message_id, COUNT(*) AS mention_count FROM message_mentions GROUP BY message_id) mention_counts ORDER BY mention_count DESC, message_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_055 - ROW_NUMBER top
```sql
SELECT message_id, mention_count FROM (SELECT message_id, mention_count, ROW_NUMBER() OVER (ORDER BY mention_count DESC, message_id ASC) AS rn FROM (SELECT message_id, COUNT(*) AS mention_count FROM message_mentions GROUP BY message_id) mention_counts) ranked WHERE rn <= 10 ORDER BY mention_count DESC, message_id ASC;
```

### ✅ PASS : CHAT_056 - JOIN COUNT DISTINCT
```sql
SELECT mm.mentioned_member_id AS workspace_member_id, COUNT(DISTINCT m.workspace_id) AS workspace_count FROM message_mentions mm JOIN messages m ON mm.message_id = m.id GROUP BY mm.mentioned_member_id HAVING COUNT(DISTINCT m.workspace_id) > 1;
```

### ✅ PASS : CHAT_056 - Pre-distinct workspaces
```sql
SELECT workspace_member_id, COUNT(*) AS workspace_count FROM (SELECT DISTINCT mm.mentioned_member_id AS workspace_member_id, m.workspace_id FROM message_mentions mm JOIN messages m ON mm.message_id = m.id) member_workspaces GROUP BY workspace_member_id HAVING COUNT(*) > 1;
```

### ✅ PASS : CHAT_057 - Attachment messages
```sql
SELECT m.channel_id, COUNT(DISTINCT ma.message_id) AS attachment_message_count FROM message_attachments ma JOIN messages m ON ma.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id HAVING COUNT(DISTINCT ma.message_id) > 20;
```

### ✅ PASS : CHAT_057 - Pre-distinct messages
```sql
SELECT channel_id, COUNT(*) AS attachment_message_count FROM (SELECT DISTINCT m.channel_id, ma.message_id FROM message_attachments ma JOIN messages m ON ma.message_id = m.id WHERE m.channel_id IS NOT NULL) attached_messages GROUP BY channel_id HAVING COUNT(*) > 20;
```

### ✅ PASS : CHAT_058 - GROUP top conversations
```sql
SELECT conversation_id, COUNT(*) AS total_messages FROM messages WHERE conversation_id IS NOT NULL AND is_deleted = false GROUP BY conversation_id ORDER BY total_messages DESC, conversation_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_058 - Subquery top
```sql
SELECT conversation_id, total_messages FROM (SELECT conversation_id, COUNT(*) AS total_messages FROM messages WHERE conversation_id IS NOT NULL AND is_deleted = false GROUP BY conversation_id) conversation_counts ORDER BY total_messages DESC, conversation_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_058 - ROW_NUMBER top
```sql
SELECT conversation_id, total_messages FROM (SELECT conversation_id, total_messages, ROW_NUMBER() OVER (ORDER BY total_messages DESC, conversation_id ASC) AS rn FROM (SELECT conversation_id, COUNT(*) AS total_messages FROM messages WHERE conversation_id IS NOT NULL AND is_deleted = false GROUP BY conversation_id) conversation_counts) ranked WHERE rn <= 10 ORDER BY total_messages DESC, conversation_id ASC;
```

### ✅ PASS : CHAT_059 - Muted count
```sql
SELECT workspace_member_id, COUNT(*) AS muted_channel_count FROM notification_preferences WHERE mute_until IS NOT NULL GROUP BY workspace_member_id HAVING COUNT(*) > 2;
```

### ✅ PASS : CHAT_059 - Distinct muted channels
```sql
SELECT workspace_member_id, COUNT(DISTINCT channel_id) AS muted_channel_count FROM notification_preferences WHERE mute_until IS NOT NULL GROUP BY workspace_member_id HAVING COUNT(DISTINCT channel_id) > 2;
```

### ✅ PASS : CHAT_060 - FILTER counts
```sql
SELECT workspace_id, COUNT(*) FILTER (WHERE invite_status = 'accepted') AS accepted_invites, COUNT(*) FILTER (WHERE invite_status = 'pending') AS pending_invites FROM invites GROUP BY workspace_id;
```

### ✅ PASS : CHAT_060 - SUM CASE
```sql
SELECT workspace_id, SUM(CASE WHEN invite_status = 'accepted' THEN 1 ELSE 0 END) AS accepted_invites, SUM(CASE WHEN invite_status = 'pending' THEN 1 ELSE 0 END) AS pending_invites FROM invites GROUP BY workspace_id;
```

### ✅ PASS : CHAT_061 - ROW_NUMBER per workspace
```sql
WITH member_message_counts AS (SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id), ranked_members AS (SELECT workspace_id, sender_member_id, message_count, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY message_count DESC, sender_member_id ASC) AS rn FROM member_message_counts) SELECT workspace_id, sender_member_id, message_count FROM ranked_members WHERE rn = 1;
```

### ✅ PASS : CHAT_061 - DISTINCT ON
```sql
SELECT DISTINCT ON (workspace_id) workspace_id, sender_member_id, message_count FROM (SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id) counts ORDER BY workspace_id, message_count DESC, sender_member_id ASC;
```

### ✅ PASS : CHAT_061 - Max count join
```sql
WITH member_message_counts AS (SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id), max_counts AS (SELECT workspace_id, MAX(message_count) AS max_message_count FROM member_message_counts GROUP BY workspace_id) SELECT mmc.workspace_id, mmc.sender_member_id, mmc.message_count FROM member_message_counts mmc JOIN max_counts mc ON mmc.workspace_id = mc.workspace_id AND mmc.message_count = mc.max_message_count WHERE mmc.sender_member_id = (SELECT MIN(x.sender_member_id) FROM member_message_counts x WHERE x.workspace_id = mmc.workspace_id AND x.message_count = mmc.message_count);
```

### ✅ PASS : CHAT_062 - ROW_NUMBER per channel
```sql
WITH reaction_counts AS (SELECT m.channel_id, mr.message_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id, mr.message_id), ranked_messages AS (SELECT channel_id, message_id, reaction_count, ROW_NUMBER() OVER (PARTITION BY channel_id ORDER BY reaction_count DESC, message_id ASC) AS rn FROM reaction_counts) SELECT channel_id, message_id, reaction_count FROM ranked_messages WHERE rn = 1;
```

### ✅ PASS : CHAT_062 - DISTINCT ON
```sql
SELECT DISTINCT ON (channel_id) channel_id, message_id, reaction_count FROM (SELECT m.channel_id, mr.message_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id, mr.message_id) counts ORDER BY channel_id, reaction_count DESC, message_id ASC;
```

### ✅ PASS : CHAT_062 - Max count join
```sql
SELECT DISTINCT ON (channel_id) channel_id, message_id, reaction_count FROM (SELECT m.channel_id, mr.message_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id, mr.message_id) counts ORDER BY channel_id, reaction_count DESC, message_id ASC;
```

### ✅ PASS : CHAT_063 - Workspace average join
```sql
WITH member_counts AS (SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id), workspace_avg AS (SELECT workspace_id, AVG(message_count) AS avg_count FROM member_counts GROUP BY workspace_id) SELECT mc.workspace_id, mc.sender_member_id, mc.message_count FROM member_counts mc JOIN workspace_avg wa ON mc.workspace_id = wa.workspace_id WHERE mc.message_count > wa.avg_count;
```

### ✅ PASS : CHAT_063 - Window average
```sql
SELECT workspace_id, sender_member_id, message_count FROM (SELECT workspace_id, sender_member_id, message_count, AVG(message_count) OVER (PARTITION BY workspace_id) AS avg_count FROM (SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id) counts) x WHERE message_count > avg_count;
```

### ✅ PASS : CHAT_064 - First reply top
```sql
WITH first_replies AS (SELECT parent_message_id, MIN(sent_at) AS first_reply_at FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id) SELECT p.id AS parent_message_id, ROUND(EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0, 2) AS first_reply_minutes FROM messages p JOIN first_replies fr ON p.id = fr.parent_message_id ORDER BY first_reply_minutes ASC, parent_message_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_064 - Subquery first reply
```sql
SELECT p.id AS parent_message_id, ROUND(EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0, 2) AS first_reply_minutes FROM messages p JOIN (SELECT parent_message_id, MIN(sent_at) AS first_reply_at FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id) fr ON p.id = fr.parent_message_id ORDER BY first_reply_minutes ASC, parent_message_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_064 - LATERAL first reply
```sql
SELECT p.id AS parent_message_id, ROUND(EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0, 2) AS first_reply_minutes FROM messages p JOIN LATERAL (SELECT MIN(r.sent_at) AS first_reply_at FROM messages r WHERE r.parent_message_id = p.id) fr ON fr.first_reply_at IS NOT NULL ORDER BY first_reply_minutes ASC, parent_message_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_065 - GROUP top saved
```sql
SELECT message_id, COUNT(*) AS saved_count FROM saved_messages GROUP BY message_id ORDER BY saved_count DESC, message_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_065 - Subquery top
```sql
SELECT message_id, saved_count FROM (SELECT message_id, COUNT(*) AS saved_count FROM saved_messages GROUP BY message_id) counts ORDER BY saved_count DESC, message_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_065 - ROW_NUMBER top
```sql
SELECT message_id, saved_count FROM (SELECT message_id, saved_count, ROW_NUMBER() OVER (ORDER BY saved_count DESC, message_id ASC) AS rn FROM (SELECT message_id, COUNT(*) AS saved_count FROM saved_messages GROUP BY message_id) counts) ranked WHERE rn <= 10 ORDER BY saved_count DESC, message_id ASC;
```

### ✅ PASS : CHAT_066 - FILTER ratio
```sql
SELECT channel_id, COUNT(*) FILTER (WHERE parent_message_id IS NOT NULL) AS reply_count, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL GROUP BY channel_id HAVING COUNT(*) FILTER (WHERE parent_message_id IS NOT NULL)::numeric / COUNT(*) > 0.30;
```

### ✅ PASS : CHAT_066 - SUM CASE ratio
```sql
SELECT channel_id, SUM(CASE WHEN parent_message_id IS NOT NULL THEN 1 ELSE 0 END) AS reply_count, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL GROUP BY channel_id HAVING SUM(CASE WHEN parent_message_id IS NOT NULL THEN 1 ELSE 0 END)::numeric / COUNT(*) > 0.30;
```

### ✅ PASS : CHAT_066 - Pre-aggregate ratio
```sql
SELECT channel_id, reply_count, total_messages FROM (SELECT channel_id, COUNT(*) FILTER (WHERE parent_message_id IS NOT NULL) AS reply_count, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL GROUP BY channel_id) channel_counts WHERE reply_count::numeric / total_messages > 0.30;
```

### ✅ PASS : CHAT_067 - LEFT anti join
```sql
SELECT DISTINCT mr.workspace_member_id FROM message_reactions mr LEFT JOIN messages m ON mr.workspace_member_id = m.sender_member_id GROUP BY mr.workspace_member_id HAVING COUNT(m.id) = 0;
```

### ✅ PASS : CHAT_067 - NOT EXISTS
```sql
SELECT DISTINCT mr.workspace_member_id FROM message_reactions mr WHERE NOT EXISTS (SELECT 1 FROM messages m WHERE m.sender_member_id = mr.workspace_member_id);
```

### ✅ PASS : CHAT_067 - EXCEPT
```sql
SELECT workspace_member_id FROM message_reactions EXCEPT SELECT sender_member_id FROM messages;
```

### ✅ PASS : CHAT_068 - Daily count
```sql
SELECT DATE(sent_at) AS message_date, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '30 days' GROUP BY DATE(sent_at);
```

### ✅ PASS : CHAT_068 - DATE_TRUNC day
```sql
SELECT DATE_TRUNC('day', sent_at)::date AS message_date, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '30 days' GROUP BY DATE_TRUNC('day', sent_at)::date;
```

### ✅ PASS : CHAT_068 - Subquery bucket
```sql
SELECT message_date, COUNT(*) AS total_messages FROM (SELECT DATE(sent_at) AS message_date FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '30 days') daily_messages GROUP BY message_date;
```

### ✅ PASS : CHAT_069 - CTE average
```sql
WITH channel_counts AS (SELECT channel_id, COUNT(*) AS member_count FROM channel_members GROUP BY channel_id), avg_count AS (SELECT AVG(member_count) AS avg_members FROM channel_counts) SELECT cc.channel_id, cc.member_count FROM channel_counts cc CROSS JOIN avg_count ac WHERE cc.member_count > ac.avg_members;
```

### ✅ PASS : CHAT_069 - Scalar average
```sql
SELECT channel_id, member_count FROM (SELECT channel_id, COUNT(*) AS member_count FROM channel_members GROUP BY channel_id) channel_counts WHERE member_count > (SELECT AVG(member_count) FROM (SELECT channel_id, COUNT(*) AS member_count FROM channel_members GROUP BY channel_id) all_counts);
```

### ✅ PASS : CHAT_069 - Window average
```sql
SELECT channel_id, member_count FROM (SELECT channel_id, member_count, AVG(member_count) OVER () AS avg_members FROM (SELECT channel_id, COUNT(*) AS member_count FROM channel_members GROUP BY channel_id) channel_counts) x WHERE member_count > avg_members;
```

### ✅ PASS : CHAT_070 - GROUP hour top
```sql
SELECT EXTRACT(HOUR FROM sent_at) AS message_hour, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY EXTRACT(HOUR FROM sent_at) ORDER BY total_messages DESC, message_hour ASC LIMIT 1;
```

### ✅ PASS : CHAT_070 - Subquery top hour
```sql
SELECT message_hour, total_messages FROM (SELECT EXTRACT(HOUR FROM sent_at) AS message_hour, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY EXTRACT(HOUR FROM sent_at)) hourly_counts ORDER BY total_messages DESC, message_hour ASC LIMIT 1;
```

### ✅ PASS : CHAT_070 - ROW_NUMBER top
```sql
SELECT message_hour, total_messages FROM (SELECT message_hour, total_messages, ROW_NUMBER() OVER (ORDER BY total_messages DESC, message_hour ASC) AS rn FROM (SELECT EXTRACT(HOUR FROM sent_at) AS message_hour, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY EXTRACT(HOUR FROM sent_at)) hourly_counts) ranked WHERE rn = 1 ORDER BY total_messages DESC, message_hour ASC;
```

### ✅ PASS : CHAT_071 - Islands by date
```sql
WITH member_days AS (SELECT DISTINCT sender_member_id, DATE(sent_at) AS message_date FROM messages WHERE is_deleted = false), grouped_days AS (SELECT sender_member_id, message_date, message_date - (ROW_NUMBER() OVER (PARTITION BY sender_member_id ORDER BY message_date))::int AS grp FROM member_days) SELECT sender_member_id, COUNT(*) AS consecutive_days_count FROM grouped_days GROUP BY sender_member_id, grp HAVING COUNT(*) >= 3;
```

### ✅ PASS : CHAT_071 - Self join days
```sql
SELECT sender_member_id, consecutive_days_count FROM (WITH member_days AS ( SELECT DISTINCT sender_member_id, DATE(sent_at) AS message_date FROM messages WHERE is_deleted = false ), grouped_days AS ( SELECT sender_member_id, message_date, message_date - (ROW_NUMBER() OVER (PARTITION BY sender_member_id ORDER BY message_date))::int AS grp FROM member_days ) SELECT sender_member_id, COUNT(*) AS consecutive_days_count FROM grouped_days GROUP BY sender_member_id, grp HAVING COUNT(*) >= 3) streaks;
```

### ✅ PASS : CHAT_072 - CTE reply avg
```sql
WITH first_replies AS (SELECT parent_message_id, MIN(sent_at) AS first_reply_at FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id), reply_times AS (SELECT p.id AS parent_message_id, EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0 AS first_reply_minutes FROM messages p JOIN first_replies fr ON p.id = fr.parent_message_id), avg_reply AS (SELECT AVG(first_reply_minutes) AS avg_first_reply_minutes FROM reply_times) SELECT rt.parent_message_id, ROUND(rt.first_reply_minutes, 2) AS first_reply_minutes FROM reply_times rt CROSS JOIN avg_reply ar WHERE rt.first_reply_minutes < ar.avg_first_reply_minutes ORDER BY first_reply_minutes ASC, parent_message_id ASC;
```

### ✅ PASS : CHAT_072 - Window average
```sql
WITH first_replies AS (SELECT parent_message_id, MIN(sent_at) AS first_reply_at FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id), reply_times AS (SELECT p.id AS parent_message_id, EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0 AS first_reply_minutes FROM messages p JOIN first_replies fr ON p.id = fr.parent_message_id) SELECT parent_message_id, ROUND(first_reply_minutes, 2) AS first_reply_minutes FROM (SELECT parent_message_id, first_reply_minutes, AVG(first_reply_minutes) OVER () AS avg_first_reply_minutes FROM reply_times) x WHERE first_reply_minutes < avg_first_reply_minutes ORDER BY first_reply_minutes ASC, parent_message_id ASC;
```

### ✅ PASS : CHAT_073 - Channel vs member avg
```sql
WITH member_channel_counts AS (SELECT workspace_id, channel_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false AND channel_id IS NOT NULL GROUP BY workspace_id, channel_id, sender_member_id), member_workspace_avg AS (SELECT workspace_id, sender_member_id, AVG(message_count) AS avg_channel_message_count FROM member_channel_counts GROUP BY workspace_id, sender_member_id) SELECT mcc.workspace_id, mcc.channel_id, mcc.sender_member_id, mcc.message_count FROM member_channel_counts mcc JOIN member_workspace_avg mwa ON mcc.workspace_id = mwa.workspace_id AND mcc.sender_member_id = mwa.sender_member_id WHERE mcc.message_count > mwa.avg_channel_message_count;
```

### ✅ PASS : CHAT_073 - Window avg
```sql
SELECT workspace_id, channel_id, sender_member_id, message_count FROM (SELECT workspace_id, channel_id, sender_member_id, message_count, AVG(message_count) OVER (PARTITION BY workspace_id, sender_member_id) AS avg_channel_message_count FROM (SELECT workspace_id, channel_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false AND channel_id IS NOT NULL GROUP BY workspace_id, channel_id, sender_member_id) counts) x WHERE message_count > avg_channel_message_count;
```

### ✅ PASS : CHAT_074 - Reply join top
```sql
SELECT p.sender_member_id, COUNT(*) AS reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id GROUP BY p.sender_member_id ORDER BY reply_count DESC, p.sender_member_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_074 - Subquery top
```sql
SELECT sender_member_id, reply_count FROM (SELECT p.sender_member_id, COUNT(*) AS reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id GROUP BY p.sender_member_id) counts ORDER BY reply_count DESC, sender_member_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_074 - ROW_NUMBER top
```sql
SELECT sender_member_id, reply_count FROM (SELECT sender_member_id, reply_count, ROW_NUMBER() OVER (ORDER BY reply_count DESC, sender_member_id ASC) AS rn FROM (SELECT p.sender_member_id, COUNT(*) AS reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id GROUP BY p.sender_member_id) counts) ranked WHERE rn <= 10 ORDER BY reply_count DESC, sender_member_id ASC;
```

### ✅ PASS : CHAT_075 - Workspace avg reactions
```sql
WITH member_reaction_counts AS (SELECT m.workspace_id, mr.workspace_member_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id GROUP BY m.workspace_id, mr.workspace_member_id), workspace_avg AS (SELECT workspace_id, AVG(reaction_count) AS avg_reaction_count FROM member_reaction_counts GROUP BY workspace_id) SELECT mrc.workspace_id, mrc.workspace_member_id, mrc.reaction_count FROM member_reaction_counts mrc JOIN workspace_avg wa ON mrc.workspace_id = wa.workspace_id WHERE mrc.reaction_count > wa.avg_reaction_count;
```

### ✅ PASS : CHAT_075 - Window avg
```sql
SELECT workspace_id, workspace_member_id, reaction_count FROM (SELECT workspace_id, workspace_member_id, reaction_count, AVG(reaction_count) OVER (PARTITION BY workspace_id) AS avg_reaction_count FROM (SELECT m.workspace_id, mr.workspace_member_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id GROUP BY m.workspace_id, mr.workspace_member_id) counts) x WHERE reaction_count > avg_reaction_count;
```

### ✅ PASS : CHAT_076 - ROW_NUMBER top 3
```sql
WITH member_message_counts AS (SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id), ranked_members AS (SELECT workspace_id, sender_member_id, message_count, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY message_count DESC, sender_member_id ASC) AS rn FROM member_message_counts) SELECT workspace_id, sender_member_id, message_count FROM ranked_members WHERE rn <= 3 ORDER BY workspace_id ASC, message_count DESC, sender_member_id ASC;
```

### ✅ PASS : CHAT_076 - DENSE_RANK top tiers
```sql
SELECT workspace_id, sender_member_id, message_count FROM (SELECT workspace_id, sender_member_id, COUNT(*) AS message_count, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY COUNT(*) DESC, sender_member_id ASC) AS rn FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id) ranked WHERE rn <= 3 ORDER BY workspace_id ASC, message_count DESC, sender_member_id ASC;
```

### ✅ PASS : CHAT_077 - Recursive depth
```sql
WITH RECURSIVE message_tree AS (SELECT id AS root_message_id, id, parent_message_id, 0 AS depth FROM messages WHERE parent_message_id IS NULL UNION ALL SELECT mt.root_message_id, m.id, m.parent_message_id, mt.depth + 1 FROM messages m JOIN message_tree mt ON m.parent_message_id = mt.id) SELECT root_message_id, MAX(depth) AS max_reply_depth FROM message_tree GROUP BY root_message_id ORDER BY max_reply_depth DESC, root_message_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_078 - Reply popularity compare
```sql
WITH received_replies AS (SELECT p.sender_member_id AS member_id, COUNT(*) AS received_reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id GROUP BY p.sender_member_id), replier_received_replies AS (SELECT p.sender_member_id AS member_id, r.sender_member_id AS replier_member_id FROM messages r JOIN messages p ON r.parent_message_id = p.id), replier_avg AS (SELECT rrr.member_id, AVG(COALESCE(rr.received_reply_count, 0)) AS avg_replier_received_reply_count FROM replier_received_replies rrr LEFT JOIN received_replies rr ON rrr.replier_member_id = rr.member_id GROUP BY rrr.member_id) SELECT rr.member_id, rr.received_reply_count FROM received_replies rr JOIN replier_avg ra ON rr.member_id = ra.member_id WHERE rr.received_reply_count > ra.avg_replier_received_reply_count;
```

### ✅ PASS : CHAT_078 - Inline replier avg
```sql
WITH received_replies AS (SELECT p.sender_member_id AS member_id, COUNT(*) AS received_reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id GROUP BY p.sender_member_id) SELECT rr.member_id, rr.received_reply_count FROM received_replies rr WHERE rr.received_reply_count > (SELECT AVG(COALESCE(rr2.received_reply_count, 0)) FROM messages r JOIN messages p ON r.parent_message_id = p.id LEFT JOIN received_replies rr2 ON r.sender_member_id = rr2.member_id WHERE p.sender_member_id = rr.member_id);
```

### ✅ PASS : CHAT_079 - Rolling window leader
```sql
WITH daily_member_messages AS (SELECT DATE_TRUNC('day', sent_at) AS message_date, sender_member_id, COUNT(*) AS daily_count FROM messages WHERE is_deleted = false GROUP BY DATE_TRUNC('day', sent_at), sender_member_id), rolling_counts AS (SELECT message_date, sender_member_id, SUM(daily_count) OVER (PARTITION BY sender_member_id ORDER BY message_date RANGE BETWEEN INTERVAL '6 days' PRECEDING AND CURRENT ROW) AS rolling_7d_count FROM daily_member_messages), daily_leaders AS (SELECT DISTINCT ON (message_date) message_date::date AS message_date, sender_member_id, rolling_7d_count FROM rolling_counts ORDER BY message_date, rolling_7d_count DESC, sender_member_id ASC) SELECT message_date, sender_member_id, rolling_7d_count FROM daily_leaders ORDER BY message_date ASC;
```

### ✅ PASS : CHAT_079 - ROW_NUMBER leader
```sql
WITH daily_member_messages AS (SELECT DATE_TRUNC('day', sent_at) AS message_date, sender_member_id, COUNT(*) AS daily_count FROM messages WHERE is_deleted = false GROUP BY DATE_TRUNC('day', sent_at), sender_member_id), rolling_counts AS (SELECT message_date, sender_member_id, SUM(daily_count) OVER (PARTITION BY sender_member_id ORDER BY message_date RANGE BETWEEN INTERVAL '6 days' PRECEDING AND CURRENT ROW) AS rolling_7d_count FROM daily_member_messages), ranked AS (SELECT message_date::date AS message_date, sender_member_id, rolling_7d_count, ROW_NUMBER() OVER (PARTITION BY message_date ORDER BY rolling_7d_count DESC, sender_member_id ASC) AS rn FROM rolling_counts) SELECT message_date, sender_member_id, rolling_7d_count FROM ranked WHERE rn = 1 ORDER BY message_date ASC;
```

### ✅ PASS : CHAT_080 - Weekly growth islands
```sql
WITH weekly_channel_messages AS (SELECT channel_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS weekly_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id, DATE_TRUNC('week', sent_at)::date), weekly_growth AS (SELECT channel_id, week_start, weekly_count, LAG(weekly_count) OVER (PARTITION BY channel_id ORDER BY week_start) AS prev_week_count FROM weekly_channel_messages), growth_flags AS (SELECT channel_id, week_start, CASE WHEN prev_week_count IS NOT NULL AND weekly_count > prev_week_count THEN 1 ELSE 0 END AS is_growth_week FROM weekly_growth), grouped_flags AS (SELECT channel_id, week_start, is_growth_week, ROW_NUMBER() OVER (PARTITION BY channel_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY channel_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags), grouped_growth AS (SELECT channel_id, week_start, grp FROM grouped_flags WHERE is_growth_week = 1) SELECT channel_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY channel_id, grp HAVING COUNT(*) >= 3;
```

### ✅ PASS : CHAT_080 - Three-week self join
```sql
SELECT channel_id, consecutive_growth_weeks FROM (WITH weekly_channel_messages AS ( SELECT channel_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS weekly_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id, DATE_TRUNC('week', sent_at)::date ), weekly_growth AS ( SELECT channel_id, week_start, weekly_count, LAG(weekly_count) OVER (PARTITION BY channel_id ORDER BY week_start) AS prev_week_count FROM weekly_channel_messages ), growth_flags AS ( SELECT channel_id, week_start, CASE WHEN prev_week_count IS NOT NULL AND weekly_count > prev_week_count THEN 1 ELSE 0 END AS is_growth_week FROM weekly_growth ), grouped_flags AS ( SELECT channel_id, week_start, is_growth_week, ROW_NUMBER() OVER (PARTITION BY channel_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY channel_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags ), grouped_growth AS ( SELECT channel_id, week_start, grp FROM grouped_flags WHERE is_growth_week = 1 ) SELECT channel_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY channel_id, grp HAVING COUNT(*) >= 3) streaks;
```

### ✅ PASS : CHAT_081 - Median first reply
```sql
WITH first_replies AS (SELECT parent_message_id, MIN(sent_at) AS first_reply_at FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id), parent_reply_times AS (SELECT p.channel_id, EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0 AS first_reply_minutes FROM messages p JOIN first_replies fr ON p.id = fr.parent_message_id WHERE p.channel_id IS NOT NULL) SELECT channel_id, ROUND((PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY first_reply_minutes))::numeric, 2) AS median_first_reply_minutes FROM parent_reply_times GROUP BY channel_id ORDER BY median_first_reply_minutes ASC, channel_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_081 - Subquery median
```sql
SELECT channel_id, ROUND((PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY first_reply_minutes))::numeric, 2) AS median_first_reply_minutes FROM (SELECT p.channel_id, EXTRACT(EPOCH FROM (MIN(r.sent_at) - p.sent_at)) / 60.0 AS first_reply_minutes FROM messages p JOIN messages r ON r.parent_message_id = p.id WHERE p.channel_id IS NOT NULL GROUP BY p.id, p.channel_id, p.sent_at) reply_times GROUP BY channel_id ORDER BY median_first_reply_minutes ASC, channel_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_082 - Count public channels
```sql
WITH public_channels AS (SELECT workspace_id, COUNT(*) AS public_channel_count FROM channels WHERE visibility = 'public' GROUP BY workspace_id), public_memberships AS (SELECT c.workspace_id, cm.workspace_member_id, COUNT(DISTINCT cm.channel_id) AS joined_public_channels FROM channel_members cm JOIN channels c ON cm.channel_id = c.id WHERE c.visibility = 'public' GROUP BY c.workspace_id, cm.workspace_member_id) SELECT pm.workspace_id, pm.workspace_member_id FROM public_memberships pm JOIN public_channels pc ON pm.workspace_id = pc.workspace_id WHERE pm.joined_public_channels = pc.public_channel_count;
```

### ✅ PASS : CHAT_082 - NOT EXISTS division
```sql
SELECT wm.workspace_id, wm.id AS workspace_member_id FROM workspace_members wm WHERE NOT EXISTS (SELECT 1 FROM channels c WHERE c.workspace_id = wm.workspace_id AND c.visibility = 'public' AND NOT EXISTS (SELECT 1 FROM channel_members cm WHERE cm.channel_id = c.id AND cm.workspace_member_id = wm.id));
```

### ✅ PASS : CHAT_083 - FULL JOIN metrics
```sql
WITH message_counts AS (SELECT workspace_id, channel_id, sender_member_id AS workspace_member_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY workspace_id, channel_id, sender_member_id), reaction_counts AS (SELECT m.workspace_id, m.channel_id, mr.workspace_member_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.workspace_id, m.channel_id, mr.workspace_member_id), combined AS (SELECT COALESCE(mc.workspace_id, rc.workspace_id) AS workspace_id, COALESCE(mc.channel_id, rc.channel_id) AS channel_id, COALESCE(mc.workspace_member_id, rc.workspace_member_id) AS workspace_member_id, COALESCE(mc.message_count, 0) AS message_count, COALESCE(rc.reaction_count, 0) AS reaction_count FROM message_counts mc FULL OUTER JOIN reaction_counts rc ON mc.workspace_id = rc.workspace_id AND mc.channel_id = rc.channel_id AND mc.workspace_member_id = rc.workspace_member_id) SELECT workspace_id, workspace_member_id FROM combined GROUP BY workspace_id, workspace_member_id HAVING COUNT(*) FILTER (WHERE reaction_count > message_count) > COUNT(*) FILTER (WHERE message_count > reaction_count);
```

### ✅ PASS : CHAT_083 - UNION metrics
```sql
WITH combined AS (SELECT workspace_id, channel_id, sender_member_id AS workspace_member_id, COUNT(*) AS message_count, 0 AS reaction_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY workspace_id, channel_id, sender_member_id UNION ALL SELECT m.workspace_id, m.channel_id, mr.workspace_member_id, 0 AS message_count, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.workspace_id, m.channel_id, mr.workspace_member_id), rolled AS (SELECT workspace_id, channel_id, workspace_member_id, SUM(message_count) AS message_count, SUM(reaction_count) AS reaction_count FROM combined GROUP BY workspace_id, channel_id, workspace_member_id) SELECT workspace_id, workspace_member_id FROM rolled GROUP BY workspace_id, workspace_member_id HAVING COUNT(*) FILTER (WHERE reaction_count > message_count) > COUNT(*) FILTER (WHERE message_count > reaction_count);
```

### ✅ PASS : CHAT_084 - Recursive replies
```sql
WITH RECURSIVE reply_tree AS (SELECT m.workspace_id, m.id AS root_message_id, m.id, m.parent_message_id FROM messages m WHERE m.parent_message_id IS NULL UNION ALL SELECT rt.workspace_id, rt.root_message_id, m.id, m.parent_message_id FROM messages m JOIN reply_tree rt ON m.parent_message_id = rt.id), reply_totals AS (SELECT workspace_id, root_message_id, COUNT(*) - 1 AS total_descendant_replies FROM reply_tree GROUP BY workspace_id, root_message_id), ranked_roots AS (SELECT workspace_id, root_message_id, total_descendant_replies, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY total_descendant_replies DESC, root_message_id ASC) AS rn FROM reply_totals) SELECT workspace_id, root_message_id, total_descendant_replies FROM ranked_roots WHERE rn = 1;
```

### ✅ PASS : CHAT_085 - CTE reaction vs sent
```sql
WITH message_counts AS ( SELECT workspace_id, sender_member_id AS workspace_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id ), reaction_counts AS ( SELECT m.workspace_id, mr.workspace_member_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id GROUP BY m.workspace_id, mr.workspace_member_id ), mention_counts AS ( SELECT m.workspace_id, m.sender_member_id AS workspace_member_id, COUNT(*) AS mention_count FROM message_mentions mm JOIN messages m ON mm.message_id = m.id GROUP BY m.workspace_id, m.sender_member_id ), member_metrics AS ( SELECT COALESCE(mc.workspace_id, rc.workspace_id, mic.workspace_id) AS workspace_id, COALESCE(mc.workspace_member_id, rc.workspace_member_id, mic.workspace_member_id) AS workspace_member_id, COALESCE(mc.message_count, 0) AS message_count, COALESCE(rc.reaction_count, 0) AS reaction_count, COALESCE(mic.mention_count, 0) AS mention_count FROM message_counts mc FULL OUTER JOIN reaction_counts rc ON mc.workspace_id = rc.workspace_id AND mc.workspace_member_id = rc.workspace_member_id FULL OUTER JOIN mention_counts mic ON COALESCE(mc.workspace_id, rc.workspace_id) = mic.workspace_id AND COALESCE(mc.workspace_member_id, rc.workspace_member_id) = mic.workspace_member_id ), workspace_avg AS ( SELECT workspace_id, AVG(message_count) AS avg_message_count, AVG(reaction_count) AS avg_reaction_count, AVG(mention_count) AS avg_mention_count FROM member_metrics GROUP BY workspace_id ) SELECT mm.workspace_id, mm.workspace_member_id, mm.message_count, mm.reaction_count, mm.mention_count FROM member_metrics mm JOIN workspace_avg wa ON mm.workspace_id = wa.workspace_id WHERE mm.message_count > wa.avg_message_count AND mm.reaction_count > wa.avg_reaction_count AND mm.mention_count > wa.avg_mention_count;
```

### ✅ PASS : CHAT_085 - Inline counts
```sql
SELECT * FROM (WITH message_counts AS ( SELECT workspace_id, sender_member_id AS workspace_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id ), reaction_counts AS ( SELECT m.workspace_id, mr.workspace_member_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id GROUP BY m.workspace_id, mr.workspace_member_id ), mention_counts AS ( SELECT m.workspace_id, m.sender_member_id AS workspace_member_id, COUNT(*) AS mention_count FROM message_mentions mm JOIN messages m ON mm.message_id = m.id GROUP BY m.workspace_id, m.sender_member_id ), member_metrics AS ( SELECT COALESCE(mc.workspace_id, rc.workspace_id, mic.workspace_id) AS workspace_id, COALESCE(mc.workspace_member_id, rc.workspace_member_id, mic.workspace_member_id) AS workspace_member_id, COALESCE(mc.message_count, 0) AS message_count, COALESCE(rc.reaction_count, 0) AS reaction_count, COALESCE(mic.mention_count, 0) AS mention_count FROM message_counts mc FULL OUTER JOIN reaction_counts rc ON mc.workspace_id = rc.workspace_id AND mc.workspace_member_id = rc.workspace_member_id FULL OUTER JOIN mention_counts mic ON COALESCE(mc.workspace_id, rc.workspace_id) = mic.workspace_id AND COALESCE(mc.workspace_member_id, rc.workspace_member_id) = mic.workspace_member_id ), workspace_avg AS ( SELECT workspace_id, AVG(message_count) AS avg_message_count, AVG(reaction_count) AS avg_reaction_count, AVG(mention_count) AS avg_mention_count FROM member_metrics GROUP BY workspace_id ) SELECT mm.workspace_id, mm.workspace_member_id, mm.message_count, mm.reaction_count, mm.mention_count FROM member_metrics mm JOIN workspace_avg wa ON mm.workspace_id = wa.workspace_id WHERE mm.message_count > wa.avg_message_count AND mm.reaction_count > wa.avg_reaction_count AND mm.mention_count > wa.avg_mention_count) solution_rows;
```

### ✅ PASS : CHAT_086 - Daily top member
```sql
WITH last_sent AS ( SELECT sender_member_id AS workspace_member_id, MAX(sent_at) AS last_sent_at FROM messages WHERE is_deleted = false GROUP BY sender_member_id ), unread_counts AS ( SELECT cm.workspace_member_id, COUNT(m.id) AS unread_message_count FROM channel_members cm JOIN messages m ON m.channel_id = cm.channel_id AND m.sent_at > COALESCE(cm.last_read_at, TIMESTAMP '1970-01-01') AND m.is_deleted = false GROUP BY cm.workspace_member_id ) SELECT uc.workspace_member_id, uc.unread_message_count FROM unread_counts uc LEFT JOIN last_sent ls ON uc.workspace_member_id = ls.workspace_member_id WHERE (ls.last_sent_at IS NULL OR ls.last_sent_at < CURRENT_DATE - INTERVAL '30 days') AND uc.unread_message_count > 20 ORDER BY uc.unread_message_count DESC, uc.workspace_member_id ASC;
```

### ✅ PASS : CHAT_086 - DISTINCT ON
```sql
SELECT * FROM (WITH last_sent AS ( SELECT sender_member_id AS workspace_member_id, MAX(sent_at) AS last_sent_at FROM messages WHERE is_deleted = false GROUP BY sender_member_id ), unread_counts AS ( SELECT cm.workspace_member_id, COUNT(m.id) AS unread_message_count FROM channel_members cm JOIN messages m ON m.channel_id = cm.channel_id AND m.sent_at > COALESCE(cm.last_read_at, TIMESTAMP '1970-01-01') AND m.is_deleted = false GROUP BY cm.workspace_member_id ) SELECT uc.workspace_member_id, uc.unread_message_count FROM unread_counts uc LEFT JOIN last_sent ls ON uc.workspace_member_id = ls.workspace_member_id WHERE (ls.last_sent_at IS NULL OR ls.last_sent_at < CURRENT_DATE - INTERVAL '30 days') AND uc.unread_message_count > 20 ORDER BY uc.unread_message_count DESC, uc.workspace_member_id ASC) solution_rows;
```

### ✅ PASS : CHAT_087 - Active vs inactive
```sql
WITH direct_replies AS ( SELECT LEAST(p.sender_member_id, r.sender_member_id) AS member_1, GREATEST(p.sender_member_id, r.sender_member_id) AS member_2, p.sender_member_id AS original_sender, r.sender_member_id AS replier_sender, COUNT(*) AS reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id WHERE p.conversation_id IS NOT NULL AND r.conversation_id = p.conversation_id GROUP BY LEAST(p.sender_member_id, r.sender_member_id), GREATEST(p.sender_member_id, r.sender_member_id), p.sender_member_id, r.sender_member_id ), pair_summary AS ( SELECT member_1, member_2, COUNT(*) FILTER (WHERE original_sender = member_1 AND replier_sender = member_2 AND reply_count >= 3) AS c1, COUNT(*) FILTER (WHERE original_sender = member_2 AND replier_sender = member_1 AND reply_count >= 3) AS c2 FROM direct_replies GROUP BY member_1, member_2 ) SELECT member_1, member_2 FROM pair_summary WHERE c1 > 0 AND c2 > 0;
```

### ✅ PASS : CHAT_087 - SUM CASE
```sql
SELECT * FROM (WITH direct_replies AS ( SELECT LEAST(p.sender_member_id, r.sender_member_id) AS member_1, GREATEST(p.sender_member_id, r.sender_member_id) AS member_2, p.sender_member_id AS original_sender, r.sender_member_id AS replier_sender, COUNT(*) AS reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id WHERE p.conversation_id IS NOT NULL AND r.conversation_id = p.conversation_id GROUP BY LEAST(p.sender_member_id, r.sender_member_id), GREATEST(p.sender_member_id, r.sender_member_id), p.sender_member_id, r.sender_member_id ), pair_summary AS ( SELECT member_1, member_2, COUNT(*) FILTER (WHERE original_sender = member_1 AND replier_sender = member_2 AND reply_count >= 3) AS c1, COUNT(*) FILTER (WHERE original_sender = member_2 AND replier_sender = member_1 AND reply_count >= 3) AS c2 FROM direct_replies GROUP BY member_1, member_2 ) SELECT member_1, member_2 FROM pair_summary WHERE c1 > 0 AND c2 > 0) solution_rows;
```

### ✅ PASS : CHAT_088 - Reply percentage
```sql
WITH channel_member_counts AS ( SELECT channel_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id, sender_member_id ), channel_totals AS ( SELECT channel_id, SUM(message_count) AS total_messages, MAX(message_count) AS top_member_messages FROM channel_member_counts GROUP BY channel_id ) SELECT channel_id, top_member_messages, total_messages FROM channel_totals WHERE top_member_messages::numeric / total_messages > 0.50 ORDER BY top_member_messages DESC, channel_id ASC;
```

### ✅ PASS : CHAT_088 - SUM CASE ratio
```sql
SELECT * FROM (WITH channel_member_counts AS ( SELECT channel_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id, sender_member_id ), channel_totals AS ( SELECT channel_id, SUM(message_count) AS total_messages, MAX(message_count) AS top_member_messages FROM channel_member_counts GROUP BY channel_id ) SELECT channel_id, top_member_messages, total_messages FROM channel_totals WHERE top_member_messages::numeric / total_messages > 0.50 ORDER BY top_member_messages DESC, channel_id ASC) solution_rows;
```

### ✅ PASS : CHAT_089 - Top reactors
```sql
WITH weekly_workspace_messages AS ( SELECT workspace_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS weekly_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, DATE_TRUNC('week', sent_at)::date ), growth_flags AS ( SELECT workspace_id, week_start, CASE WHEN weekly_count > LAG(weekly_count) OVER (PARTITION BY workspace_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_workspace_messages ), grouped_growth AS ( SELECT workspace_id, week_start, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1 ) SELECT workspace_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_id, grp HAVING COUNT(*) >= 4;
```

### ✅ PASS : CHAT_089 - ROW_NUMBER top
```sql
SELECT * FROM (WITH weekly_workspace_messages AS ( SELECT workspace_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS weekly_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, DATE_TRUNC('week', sent_at)::date ), growth_flags AS ( SELECT workspace_id, week_start, CASE WHEN weekly_count > LAG(weekly_count) OVER (PARTITION BY workspace_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_workspace_messages ), grouped_growth AS ( SELECT workspace_id, week_start, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1 ) SELECT workspace_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_id, grp HAVING COUNT(*) >= 4) solution_rows;
```

### ✅ PASS : CHAT_090 - Channel engagement
```sql
WITH member_reply_times AS ( SELECT r.workspace_id, r.sender_member_id AS workspace_member_id, EXTRACT(EPOCH FROM (r.sent_at - p.sent_at)) / 60.0 AS reply_minutes FROM messages r JOIN messages p ON r.parent_message_id = p.id ), member_medians AS ( SELECT workspace_id, workspace_member_id, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY reply_minutes) AS member_median_reply_minutes FROM member_reply_times GROUP BY workspace_id, workspace_member_id ), workspace_reply_times AS ( SELECT workspace_id, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY reply_minutes) AS workspace_median_reply_minutes FROM member_reply_times GROUP BY workspace_id ) SELECT mm.workspace_id, mm.workspace_member_id, ROUND(mm.member_median_reply_minutes::numeric, 2) AS member_median_reply_minutes FROM member_medians mm JOIN workspace_reply_times wrt ON mm.workspace_id = wrt.workspace_id WHERE mm.member_median_reply_minutes < wrt.workspace_median_reply_minutes ORDER BY mm.workspace_id ASC, member_median_reply_minutes ASC, mm.workspace_member_id ASC;
```

### ✅ PASS : CHAT_090 - Inline join
```sql
SELECT * FROM (WITH member_reply_times AS ( SELECT r.workspace_id, r.sender_member_id AS workspace_member_id, EXTRACT(EPOCH FROM (r.sent_at - p.sent_at)) / 60.0 AS reply_minutes FROM messages r JOIN messages p ON r.parent_message_id = p.id ), member_medians AS ( SELECT workspace_id, workspace_member_id, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY reply_minutes) AS member_median_reply_minutes FROM member_reply_times GROUP BY workspace_id, workspace_member_id ), workspace_reply_times AS ( SELECT workspace_id, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY reply_minutes) AS workspace_median_reply_minutes FROM member_reply_times GROUP BY workspace_id ) SELECT mm.workspace_id, mm.workspace_member_id, ROUND(mm.member_median_reply_minutes::numeric, 2) AS member_median_reply_minutes FROM member_medians mm JOIN workspace_reply_times wrt ON mm.workspace_id = wrt.workspace_id WHERE mm.member_median_reply_minutes < wrt.workspace_median_reply_minutes ORDER BY mm.workspace_id ASC, member_median_reply_minutes ASC, mm.workspace_member_id ASC) solution_rows;
```

### ✅ PASS : CHAT_091 - FULL OUTER growth
```sql
WITH current_30d AS (SELECT sender_member_id AS member_id, COUNT(*) AS current_count FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '30 days' GROUP BY sender_member_id), previous_30d AS (SELECT sender_member_id AS member_id, COUNT(*) AS previous_count FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '60 days' AND sent_at < CURRENT_DATE - INTERVAL '30 days' GROUP BY sender_member_id) SELECT COALESCE(c.member_id, p.member_id) AS member_id, COALESCE(c.current_count, 0) - COALESCE(p.previous_count, 0) AS growth_count FROM current_30d c FULL OUTER JOIN previous_30d p ON c.member_id = p.member_id ORDER BY growth_count DESC, member_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_091 - Conditional counts
```sql
SELECT sender_member_id AS member_id, COUNT(*) FILTER (WHERE sent_at >= CURRENT_DATE - INTERVAL '30 days') - COUNT(*) FILTER (WHERE sent_at >= CURRENT_DATE - INTERVAL '60 days' AND sent_at < CURRENT_DATE - INTERVAL '30 days') AS growth_count FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '60 days' GROUP BY sender_member_id ORDER BY growth_count DESC, member_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_092 - Recursive thread stats
```sql
WITH RECURSIVE thread_tree AS (SELECT channel_id, id AS root_message_id, id, parent_message_id, 0 AS depth FROM messages WHERE parent_message_id IS NULL AND channel_id IS NOT NULL UNION ALL SELECT tt.channel_id, tt.root_message_id, m.id, m.parent_message_id, tt.depth + 1 FROM messages m JOIN thread_tree tt ON m.parent_message_id = tt.id), thread_stats AS (SELECT channel_id, root_message_id, MAX(depth) AS max_depth, COUNT(*) - 1 AS total_replies FROM thread_tree GROUP BY channel_id, root_message_id) SELECT DISTINCT channel_id FROM thread_stats WHERE max_depth > 5 AND total_replies > 20;
```

### ✅ PASS : CHAT_093 - Combined score
```sql
WITH channel_messages AS (SELECT channel_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id), channel_reactions AS (SELECT m.channel_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id), channel_replies AS (SELECT channel_id, COUNT(*) AS reply_count FROM messages WHERE channel_id IS NOT NULL AND parent_message_id IS NOT NULL GROUP BY channel_id) SELECT COALESCE(cm.channel_id, cr.channel_id, cp.channel_id) AS channel_id, COALESCE(cm.message_count,0) + COALESCE(cr.reaction_count,0) + COALESCE(cp.reply_count,0) AS interaction_score FROM channel_messages cm FULL OUTER JOIN channel_reactions cr ON cm.channel_id = cr.channel_id FULL OUTER JOIN channel_replies cp ON COALESCE(cm.channel_id, cr.channel_id) = cp.channel_id ORDER BY interaction_score DESC, channel_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_093 - UNION metric rows
```sql
SELECT channel_id, SUM(score_part) AS interaction_score FROM (SELECT channel_id, COUNT(*) AS score_part FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id UNION ALL SELECT m.channel_id, COUNT(*) AS score_part FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id UNION ALL SELECT channel_id, COUNT(*) AS score_part FROM messages WHERE channel_id IS NOT NULL AND parent_message_id IS NOT NULL GROUP BY channel_id) scores GROUP BY channel_id ORDER BY interaction_score DESC, channel_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_094 - Active channel count
```sql
WITH workspace_channels AS (SELECT workspace_id, COUNT(*) AS total_channels FROM channels GROUP BY workspace_id), member_channel_activity AS (SELECT workspace_id, sender_member_id AS member_id, COUNT(DISTINCT channel_id) AS active_channels FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY workspace_id, sender_member_id) SELECT mca.workspace_id, mca.member_id FROM member_channel_activity mca JOIN workspace_channels wc ON mca.workspace_id = wc.workspace_id WHERE mca.active_channels = wc.total_channels;
```

### ✅ PASS : CHAT_094 - NOT EXISTS division
```sql
SELECT wm.workspace_id, wm.id AS member_id FROM workspace_members wm WHERE NOT EXISTS (SELECT 1 FROM channels c WHERE c.workspace_id = wm.workspace_id AND NOT EXISTS (SELECT 1 FROM messages m WHERE m.workspace_id = wm.workspace_id AND m.channel_id = c.id AND m.sender_member_id = wm.id AND m.is_deleted = false));
```

### ✅ PASS : CHAT_095 - Reply velocity
```sql
WITH channel_replies AS (SELECT channel_id, COUNT(*) AS reply_count FROM messages WHERE channel_id IS NOT NULL AND parent_message_id IS NOT NULL AND sent_at >= CURRENT_DATE - INTERVAL '7 days' GROUP BY channel_id) SELECT channel_id, ROUND(reply_count::numeric / (7 * 24), 2) AS replies_per_hour FROM channel_replies ORDER BY replies_per_hour DESC, channel_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_095 - Direct aggregate
```sql
SELECT channel_id, ROUND(COUNT(*)::numeric / (7 * 24), 2) AS replies_per_hour FROM messages WHERE channel_id IS NOT NULL AND parent_message_id IS NOT NULL AND sent_at >= CURRENT_DATE - INTERVAL '7 days' GROUP BY channel_id ORDER BY replies_per_hour DESC, channel_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_095 - ROW_NUMBER top
```sql
SELECT channel_id, replies_per_hour FROM (SELECT channel_id, replies_per_hour, ROW_NUMBER() OVER (ORDER BY replies_per_hour DESC, channel_id ASC) AS rn FROM (SELECT channel_id, ROUND(COUNT(*)::numeric / (7 * 24), 2) AS replies_per_hour FROM messages WHERE channel_id IS NOT NULL AND parent_message_id IS NOT NULL AND sent_at >= CURRENT_DATE - INTERVAL '7 days' GROUP BY channel_id) rates) ranked WHERE rn <= 10 ORDER BY replies_per_hour DESC, channel_id ASC;
```

### ✅ PASS : CHAT_096 - Weekly growth islands
```sql
WITH weekly_mentions AS (SELECT mm.mentioned_member_id AS workspace_member_id, DATE_TRUNC('week', m.sent_at)::date AS week_start, COUNT(*) AS mention_count FROM message_mentions mm JOIN messages m ON mm.message_id = m.id GROUP BY mm.mentioned_member_id, DATE_TRUNC('week', m.sent_at)::date), growth_flags AS (SELECT workspace_member_id, week_start, CASE WHEN mention_count > LAG(mention_count) OVER (PARTITION BY workspace_member_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_mentions), grouped_growth AS (SELECT workspace_member_id, week_start, ROW_NUMBER() OVER (PARTITION BY workspace_member_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_member_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1) SELECT workspace_member_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_member_id, grp HAVING COUNT(*) >= 3;
```

### ✅ PASS : CHAT_096 - Three-week self join
```sql
SELECT workspace_member_id, consecutive_growth_weeks FROM (WITH weekly_mentions AS ( SELECT mm.mentioned_member_id AS workspace_member_id, DATE_TRUNC('week', m.sent_at)::date AS week_start, COUNT(*) AS mention_count FROM message_mentions mm JOIN messages m ON mm.message_id = m.id GROUP BY mm.mentioned_member_id, DATE_TRUNC('week', m.sent_at)::date ), growth_flags AS ( SELECT workspace_member_id, week_start, CASE WHEN mention_count > LAG(mention_count) OVER (PARTITION BY workspace_member_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_mentions ), grouped_growth AS ( SELECT workspace_member_id, week_start, ROW_NUMBER() OVER (PARTITION BY workspace_member_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_member_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1 ) SELECT workspace_member_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_member_id, grp HAVING COUNT(*) >= 3) streaks;
```

### ✅ PASS : CHAT_097 - Balance score
```sql
WITH sender_counts AS (SELECT conversation_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE conversation_id IS NOT NULL AND is_deleted = false GROUP BY conversation_id, sender_member_id), conversation_balance AS (SELECT conversation_id, MIN(message_count) AS min_sender_messages, MAX(message_count) AS max_sender_messages, SUM(message_count) AS total_messages, COUNT(*) AS sender_count FROM sender_counts GROUP BY conversation_id HAVING COUNT(*) > 1) SELECT conversation_id, sender_count, total_messages FROM conversation_balance ORDER BY (max_sender_messages - min_sender_messages) ASC, total_messages DESC, conversation_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_097 - Inline balance
```sql
SELECT conversation_id, sender_count, total_messages FROM (SELECT conversation_id, MIN(message_count) AS min_sender_messages, MAX(message_count) AS max_sender_messages, SUM(message_count) AS total_messages, COUNT(*) AS sender_count FROM (SELECT conversation_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE conversation_id IS NOT NULL AND is_deleted = false GROUP BY conversation_id, sender_member_id) sender_counts GROUP BY conversation_id HAVING COUNT(*) > 1) conversation_balance ORDER BY (max_sender_messages - min_sender_messages) ASC, total_messages DESC, conversation_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_098 - Weekly growth islands
```sql
WITH weekly_scores AS (SELECT workspace_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS message_score FROM messages WHERE is_deleted = false GROUP BY workspace_id, DATE_TRUNC('week', sent_at)::date), growth_flags AS (SELECT workspace_id, week_start, CASE WHEN message_score > LAG(message_score) OVER (PARTITION BY workspace_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_scores), grouped_growth AS (SELECT workspace_id, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1) SELECT workspace_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_id, grp HAVING COUNT(*) >= 4;
```

### ✅ PASS : CHAT_098 - Four-week self join
```sql
SELECT workspace_id, consecutive_growth_weeks FROM (WITH weekly_scores AS ( SELECT workspace_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS message_score FROM messages WHERE is_deleted = false GROUP BY workspace_id, DATE_TRUNC('week', sent_at)::date ), growth_flags AS ( SELECT workspace_id, week_start, CASE WHEN message_score > LAG(message_score) OVER (PARTITION BY workspace_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_scores ), grouped_growth AS ( SELECT workspace_id, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1 ) SELECT workspace_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_id, grp HAVING COUNT(*) >= 4) streaks;
```

### ✅ PASS : CHAT_099 - P90 cutoff
```sql
WITH member_counts AS (SELECT sender_member_id AS member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY sender_member_id), percentile_value AS (SELECT PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY message_count) AS p90 FROM member_counts) SELECT mc.member_id, mc.message_count FROM member_counts mc CROSS JOIN percentile_value pv WHERE mc.message_count > pv.p90 ORDER BY mc.message_count DESC, mc.member_id ASC;
```

### ✅ PASS : CHAT_099 - Window percentile
```sql
SELECT member_id, message_count FROM (SELECT sender_member_id AS member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY sender_member_id) member_counts WHERE message_count > (SELECT PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY message_count) FROM (SELECT sender_member_id AS member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY sender_member_id) counts) ORDER BY message_count DESC, member_id ASC;
```

### ✅ PASS : CHAT_100 - Workspace threshold
```sql
WITH workspace_user_counts AS (SELECT workspace_id, sender_member_id AS member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id HAVING COUNT(*) >= 50) SELECT member_id, COUNT(DISTINCT workspace_id) AS active_workspace_count FROM workspace_user_counts GROUP BY member_id ORDER BY active_workspace_count DESC, member_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_100 - Subquery threshold
```sql
SELECT member_id, COUNT(DISTINCT workspace_id) AS active_workspace_count FROM (SELECT workspace_id, sender_member_id AS member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id HAVING COUNT(*) >= 50) workspace_user_counts GROUP BY member_id ORDER BY active_workspace_count DESC, member_id ASC LIMIT 10;
```

### ✅ PASS : CHAT_100 - ROW_NUMBER top
```sql
SELECT member_id, active_workspace_count FROM (SELECT member_id, active_workspace_count, ROW_NUMBER() OVER (ORDER BY active_workspace_count DESC, member_id ASC) AS rn FROM (WITH workspace_user_counts AS (SELECT workspace_id, sender_member_id AS member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id HAVING COUNT(*) >= 50) SELECT member_id, COUNT(DISTINCT workspace_id) AS active_workspace_count FROM workspace_user_counts GROUP BY member_id) counts) ranked WHERE rn <= 10 ORDER BY active_workspace_count DESC, member_id ASC;
```

