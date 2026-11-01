import { getAppIdByName } from "../../base/scripts/base.data.js";

const appId = getAppIdByName("chat");

export const tableDescriptions = {
  app_events:
    "Product analytics and audit-style events across messaging, membership, notifications, and calls",
  call_participants: "Participation details for calls",
  calls: "Voice or video calls launched from channels or conversations",
  channel_members: "Membership and read-state data for channel participants",
  channels:
    "Public, private, announcement, forum, or category-style channels inside a workspace",
  conversation_members:
    "Participants and read state for direct or group conversations",
  conversations: "Direct-message and group-message conversation containers",
  invites: "Invitation records for workspace and channel onboarding",
  member_roles: "Role assignments for workspace members",
  message_attachments:
    "Files, images, and link-preview style attachments on messages",
  message_mentions:
    "Explicit mentions triggered by messages, including user, role, and channel mentions",
  message_pins: "Pinned messages in channels or conversations",
  message_reactions: "Emoji reactions on messages",
  message_reads: "Per-message read receipts for detailed read analytics",
  messages:
    "Messages posted in channels or conversations, including threaded replies and edit/delete state",
  moderation_actions:
    "Moderation operations such as warning, mute, remove message, suspend, and ban",
  notification_preferences:
    "Notification rules configured by members at workspace, channel, or conversation scope",
  notifications:
    "Generated notifications for mentions, replies, reactions, invites, and system activity",
  role_permissions: "Granular permissions attached to roles",
  roles: "Workspace-defined roles used for permissions and administration",
  saved_messages: "Messages saved or bookmarked by users",
  user_devices:
    "User devices used for chat access and push notification analysis",
  user_presence_logs:
    "Online, idle, do-not-disturb, and offline presence history",
  users: "Global users across all workspaces including humans and bots",
  workspace_members:
    "Membership records linking users to workspaces with invite and lifecycle details",
  workspaces:
    "Top-level chat workspaces or organizations similar to Slack workspaces or Discord servers",
};

export const questions = [
  {
    app_id: appId,
    code: "CHAT_001",
    title: "Total Active Users",
    description: "Find the total number of active users.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS active_users FROM users WHERE is_active = true;",
    solution_columns: ["active_users"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_002",
    title: "Active Workspaces",
    description: "Find all active workspaces.",
    difficulty: "easy",
    expected_query:
      "SELECT id, workspace_name, workspace_type FROM workspaces WHERE is_active = true;",
    solution_columns: ["id", "workspace_name", "workspace_type"],
    tables: ["workspaces"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_003",
    title: "Verified Users",
    description: "List verified users.",
    difficulty: "easy",
    expected_query:
      "SELECT id, full_name, email FROM users WHERE is_verified = true;",
    solution_columns: ["id", "full_name", "email"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_004",
    title: "Public Channels",
    description: "Find all public channels.",
    difficulty: "easy",
    expected_query:
      "SELECT id, workspace_id, channel_name FROM channels WHERE visibility = 'public';",
    solution_columns: ["id", "workspace_id", "channel_name"],
    tables: ["channels"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_005",
    title: "Bot Accounts",
    description: "List all bot users.",
    difficulty: "easy",
    expected_query:
      "SELECT id, full_name, username FROM users WHERE is_bot = true;",
    solution_columns: ["id", "full_name", "username"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_006",
    title: "Active Members Per Workspace",
    description: "Count active members in each workspace.",
    difficulty: "easy",
    expected_query:
      "SELECT workspace_id, COUNT(*) AS active_member_count FROM workspace_members WHERE membership_status = 'active' GROUP BY workspace_id;",
    solution_columns: ["workspace_id", "active_member_count"],
    tables: ["workspace_members"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_007",
    title: "Channels Per Workspace",
    description: "Count channels in each workspace.",
    difficulty: "easy",
    expected_query:
      "SELECT workspace_id, COUNT(*) AS total_channels FROM channels GROUP BY workspace_id;",
    solution_columns: ["workspace_id", "total_channels"],
    tables: ["channels"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_008",
    title: "Archived Channels",
    description: "List archived channels.",
    difficulty: "easy",
    expected_query:
      "SELECT id, workspace_id, channel_name, archived_at FROM channels WHERE is_archived = true;",
    solution_columns: ["id", "workspace_id", "channel_name", "archived_at"],
    tables: ["channels"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_009",
    title: "Messages Containing Links",
    description: "Find non-deleted messages containing links.",
    difficulty: "easy",
    expected_query:
      "SELECT id, sender_member_id, sent_at FROM messages WHERE contains_link = true AND is_deleted = false;",
    solution_columns: ["id", "sender_member_id", "sent_at"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_010",
    title: "Direct Conversations",
    description: "Find the total number of direct conversations.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS direct_conversation_count FROM conversations WHERE conversation_type = 'direct';",
    solution_columns: ["direct_conversation_count"],
    tables: ["conversations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_011",
    title: "Pinned Messages",
    description: "List pinned messages.",
    difficulty: "easy",
    expected_query:
      "SELECT message_id, pinned_by_member_id, pinned_at FROM message_pins;",
    solution_columns: ["message_id", "pinned_by_member_id", "pinned_at"],
    tables: ["message_pins"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_012",
    title: "Unread Notifications",
    description: "List unread notifications.",
    difficulty: "easy",
    expected_query:
      "SELECT id, workspace_member_id, notification_type, created_at FROM notifications WHERE is_read = false;",
    solution_columns: [
      "id",
      "workspace_member_id",
      "notification_type",
      "created_at",
    ],
    tables: ["notifications"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_013",
    title: "Currently Online Members",
    description: "Find workspace members who are currently online.",
    difficulty: "easy",
    expected_query:
      "SELECT DISTINCT workspace_member_id FROM user_presence_logs WHERE presence_status = 'online' AND ended_at IS NULL;",
    solution_columns: ["workspace_member_id"],
    tables: ["user_presence_logs"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_014",
    title: "Messages Sent Today",
    description: "Count messages sent today.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS messages_sent_today FROM messages WHERE DATE(sent_at) = CURRENT_DATE;",
    solution_columns: ["messages_sent_today"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_015",
    title: "Reaction Usage By Emoji",
    description: "Count reactions grouped by emoji.",
    difficulty: "easy",
    expected_query:
      "SELECT emoji_code, COUNT(*) AS reaction_count FROM message_reactions GROUP BY emoji_code;",
    solution_columns: ["emoji_code", "reaction_count"],
    tables: ["message_reactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_016",
    title: "Members Joined This Month",
    description: "Find members who joined during the current month.",
    difficulty: "easy",
    expected_query:
      "SELECT id, workspace_id, user_id, joined_at FROM workspace_members WHERE DATE_TRUNC('month', joined_at) = DATE_TRUNC('month', CURRENT_DATE);",
    solution_columns: ["id", "workspace_id", "user_id", "joined_at"],
    tables: ["workspace_members"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_017",
    title: "Private Channels Per Workspace",
    description: "Count private channels in each workspace.",
    difficulty: "easy",
    expected_query:
      "SELECT workspace_id, COUNT(*) AS private_channel_count FROM channels WHERE visibility = 'private' GROUP BY workspace_id;",
    solution_columns: ["workspace_id", "private_channel_count"],
    tables: ["channels"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_018",
    title: "Deleted Messages",
    description: "List deleted messages.",
    difficulty: "easy",
    expected_query:
      "SELECT id, sender_member_id, deleted_at FROM messages WHERE is_deleted = true;",
    solution_columns: ["id", "sender_member_id", "deleted_at"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_019",
    title: "Members In DND Mode",
    description: "Find members currently in Do Not Disturb mode.",
    difficulty: "easy",
    expected_query:
      "SELECT DISTINCT workspace_member_id FROM user_presence_logs WHERE presence_status = 'dnd' AND ended_at IS NULL;",
    solution_columns: ["workspace_member_id"],
    tables: ["user_presence_logs"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_020",
    title: "Users Without Phone Number",
    description: "List users who do not have a phone number.",
    difficulty: "easy",
    expected_query:
      "SELECT id, full_name, email FROM users WHERE phone IS NULL;",
    solution_columns: ["id", "full_name", "email"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_021",
    title: "Messages Per Channel",
    description: "Count non-deleted messages in each channel.",
    difficulty: "easy",
    expected_query:
      "SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id;",
    solution_columns: ["channel_id", "total_messages"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_022",
    title: "Replies Per Parent Message",
    description: "Count replies for each parent message.",
    difficulty: "easy",
    expected_query:
      "SELECT parent_message_id, COUNT(*) AS reply_count FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id;",
    solution_columns: ["parent_message_id", "reply_count"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_023",
    title: "Recently Registered Users",
    description: "List users created during the last 30 days.",
    difficulty: "easy",
    expected_query:
      "SELECT id, full_name, username, created_at FROM users WHERE created_at >= CURRENT_DATE - INTERVAL '30 days';",
    solution_columns: ["id", "full_name", "username", "created_at"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_024",
    title: "Channel Memberships",
    description: "List all channel memberships.",
    difficulty: "easy",
    expected_query:
      "SELECT id, channel_id, workspace_member_id, joined_at FROM channel_members;",
    solution_columns: ["id", "channel_id", "workspace_member_id", "joined_at"],
    tables: ["channel_members"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_025",
    title: "Attachments By Type",
    description: "Count attachments by attachment type.",
    difficulty: "easy",
    expected_query:
      "SELECT attachment_type, COUNT(*) AS attachment_count FROM message_attachments GROUP BY attachment_type;",
    solution_columns: ["attachment_type", "attachment_count"],
    tables: ["message_attachments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_026",
    title: "Workspaces Created This Year",
    description: "List workspaces created this year.",
    difficulty: "easy",
    expected_query:
      "SELECT id, workspace_name, workspace_type, created_at FROM workspaces WHERE DATE_TRUNC('year', created_at) = DATE_TRUNC('year', CURRENT_DATE);",
    solution_columns: ["id", "workspace_name", "workspace_type", "created_at"],
    tables: ["workspaces"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_027",
    title: "Muted Notification Settings",
    description: "List notification preferences that are currently muted.",
    difficulty: "easy",
    expected_query:
      "SELECT id, workspace_member_id, mute_until FROM notification_preferences WHERE mute_until IS NOT NULL;",
    solution_columns: ["id", "workspace_member_id", "mute_until"],
    tables: ["notification_preferences"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_028",
    title: "Pending Invites",
    description: "List all pending invites.",
    difficulty: "easy",
    expected_query:
      "SELECT id, workspace_id, invited_email, created_at FROM invites WHERE invite_status = 'pending';",
    solution_columns: ["id", "workspace_id", "invited_email", "created_at"],
    tables: ["invites"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_029",
    title: "Applied Moderation Actions",
    description: "Find moderation actions currently applied.",
    difficulty: "easy",
    expected_query:
      "SELECT id, workspace_id, action_type, created_at FROM moderation_actions WHERE action_status = 'applied';",
    solution_columns: ["id", "workspace_id", "action_type", "created_at"],
    tables: ["moderation_actions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_030",
    title: "Voice Calls Count",
    description: "Count voice calls.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS voice_calls_count FROM calls WHERE call_type = 'voice';",
    solution_columns: ["voice_calls_count"],
    tables: ["calls"],
    comparison_config: {},
  },

  // MEDIUM STARTS HERE

  {
    app_id: appId,
    code: "CHAT_031",
    title: "Top Active Channels",
    description:
      "Find the 5 channels with the highest number of non-deleted messages.",
    difficulty: "medium",
    expected_query:
      "SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id ORDER BY total_messages DESC, channel_id ASC LIMIT 5;",
    solution_columns: ["channel_id", "total_messages"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_032",
    title: "Members With Saved Messages",
    description: "Find members who saved at least one message.",
    difficulty: "medium",
    expected_query: "SELECT DISTINCT workspace_member_id FROM saved_messages;",
    solution_columns: ["workspace_member_id"],
    tables: ["saved_messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_033",
    title: "Messages With Attachments",
    description: "Find messages that contain attachments.",
    difficulty: "medium",
    expected_query: "SELECT DISTINCT message_id FROM message_attachments;",
    solution_columns: ["message_id"],
    tables: ["message_attachments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_034",
    title: "Inactive Users",
    description: "Find users inactive for more than 30 days.",
    difficulty: "medium",
    expected_query:
      "SELECT id, full_name, last_seen_at FROM users WHERE last_seen_at < CURRENT_DATE - INTERVAL '30 days';",
    solution_columns: ["id", "full_name", "last_seen_at"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_035",
    title: "Calls With More Than Two Participants",
    description: "Find calls having more than two participants.",
    difficulty: "medium",
    expected_query:
      "SELECT call_id, COUNT(*) AS participant_count FROM call_participants GROUP BY call_id HAVING COUNT(*) > 2;",
    solution_columns: ["call_id", "participant_count"],
    tables: ["call_participants"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_036",
    title: "Users In Multiple Workspaces",
    description: "Find users who belong to more than one active workspace.",
    difficulty: "medium",
    expected_query:
      "SELECT user_id, COUNT(DISTINCT workspace_id) AS workspace_count FROM workspace_members WHERE membership_status = 'active' GROUP BY user_id HAVING COUNT(DISTINCT workspace_id) > 1;",
    solution_columns: ["user_id", "workspace_count"],
    tables: ["workspace_members"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_037",
    title: "Most Reacted Messages",
    description: "Find the 10 most reacted messages.",
    difficulty: "medium",
    expected_query:
      "SELECT message_id, COUNT(*) AS reaction_count FROM message_reactions GROUP BY message_id ORDER BY reaction_count DESC, message_id ASC LIMIT 10;",
    solution_columns: ["message_id", "reaction_count"],
    tables: ["message_reactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_038",
    title: "Unread Notifications Per Member",
    description: "Count unread notifications for each member.",
    difficulty: "medium",
    expected_query:
      "SELECT workspace_member_id, COUNT(*) AS unread_count FROM notifications WHERE is_read = false GROUP BY workspace_member_id;",
    solution_columns: ["workspace_member_id", "unread_count"],
    tables: ["notifications"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_039",
    title: "Most Mentioned Members",
    description: "Count mentions received by each member.",
    difficulty: "medium",
    expected_query:
      "SELECT mentioned_member_id AS workspace_member_id, COUNT(*) AS mention_count FROM message_mentions WHERE mentioned_member_id IS NOT NULL GROUP BY mentioned_member_id;",
    solution_columns: ["workspace_member_id", "mention_count"],
    tables: ["message_mentions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_040",
    title: "Average Replies Per Thread",
    description: "Find the average number of replies per thread.",
    difficulty: "medium",
    expected_query:
      "WITH thread_counts AS (SELECT parent_message_id, COUNT(*) AS reply_count FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id) SELECT ROUND(AVG(reply_count), 2) AS avg_replies_per_thread FROM thread_counts;",
    solution_columns: ["avg_replies_per_thread"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_041",
    title: "Top Message Senders",
    description: "Find the 10 members who sent the most messages.",
    difficulty: "medium",
    expected_query:
      "SELECT sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY sender_member_id ORDER BY message_count DESC, sender_member_id ASC LIMIT 10;",
    solution_columns: ["sender_member_id", "message_count"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_042",
    title: "Channels Without Messages",
    description: "Find channels that have never received a message.",
    difficulty: "medium",
    expected_query:
      "SELECT c.id, c.channel_name FROM channels c LEFT JOIN messages m ON c.id = m.channel_id GROUP BY c.id, c.channel_name HAVING COUNT(m.id) = 0;",
    solution_columns: ["id", "channel_name"],
    tables: ["channels", "messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_043",
    title: "Members Who Never Sent Messages",
    description: "Find active members who never sent a message.",
    difficulty: "medium",
    expected_query:
      "SELECT wm.id AS workspace_member_id FROM workspace_members wm LEFT JOIN messages m ON wm.id = m.sender_member_id WHERE wm.membership_status = 'active' GROUP BY wm.id HAVING COUNT(m.id) = 0;",
    solution_columns: ["workspace_member_id"],
    tables: ["workspace_members", "messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_044",
    title: "Average Messages Per Channel",
    description: "Find the average number of non-deleted messages per channel.",
    difficulty: "medium",
    expected_query:
      "WITH channel_counts AS (SELECT channel_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id) SELECT ROUND(AVG(message_count), 2) AS avg_messages_per_channel FROM channel_counts;",
    solution_columns: ["avg_messages_per_channel"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_045",
    title: "Busy Channels",
    description: "Find channels having more than 100 non-deleted messages.",
    difficulty: "medium",
    expected_query:
      "SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id HAVING COUNT(*) > 100;",
    solution_columns: ["channel_id", "total_messages"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_046",
    title: "Members With Messages And Reactions",
    description: "Find members who both sent messages and reacted to messages.",
    difficulty: "medium",
    expected_query:
      "SELECT DISTINCT m.sender_member_id AS workspace_member_id FROM messages m JOIN message_reactions r ON m.sender_member_id = r.workspace_member_id;",
    solution_columns: ["workspace_member_id"],
    tables: ["messages", "message_reactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_047",
    title: "Most Active Workspaces",
    description: "Find the 10 workspaces with the most messages.",
    difficulty: "medium",
    expected_query:
      "SELECT workspace_id, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY workspace_id ORDER BY total_messages DESC, workspace_id ASC LIMIT 10;",
    solution_columns: ["workspace_id", "total_messages"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_048",
    title: "Average Reactions Per Message",
    description: "Find the average reactions on reacted messages.",
    difficulty: "medium",
    expected_query:
      "WITH reaction_counts AS (SELECT message_id, COUNT(*) AS reaction_count FROM message_reactions GROUP BY message_id) SELECT ROUND(AVG(reaction_count), 2) AS avg_reaction_count FROM reaction_counts;",
    solution_columns: ["avg_reaction_count"],
    tables: ["message_reactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_049",
    title: "Members In Private Channels",
    description: "Count members in each private channel.",
    difficulty: "medium",
    expected_query:
      "SELECT cm.channel_id, COUNT(*) AS member_count FROM channel_members cm JOIN channels c ON cm.channel_id = c.id WHERE c.visibility = 'private' GROUP BY cm.channel_id;",
    solution_columns: ["channel_id", "member_count"],
    tables: ["channel_members", "channels"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_050",
    title: "Workspace Owners",
    description: "Count active owners in each workspace.",
    difficulty: "medium",
    expected_query:
      "SELECT workspace_id, COUNT(*) AS owner_count FROM workspace_members WHERE member_type = 'owner' AND membership_status = 'active' GROUP BY workspace_id;",
    solution_columns: ["workspace_id", "owner_count"],
    tables: ["workspace_members"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_051",
    title: "Top Channels By Unique Senders",
    description:
      "Find the top 10 channels with the highest number of distinct members who sent non-deleted messages.",
    difficulty: "medium",
    expected_query:
      "SELECT channel_id, COUNT(DISTINCT sender_member_id) AS unique_senders FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id ORDER BY unique_senders DESC, channel_id ASC LIMIT 10;",
    solution_columns: ["channel_id", "unique_senders"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "unique_senders", direction: "desc" },
        { column: "channel_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_052",
    title: "Members In Multiple Channels",
    description: "Find workspace members who belong to more than 3 channels.",
    difficulty: "medium",
    expected_query:
      "SELECT workspace_member_id, COUNT(DISTINCT channel_id) AS channel_count FROM channel_members GROUP BY workspace_member_id HAVING COUNT(DISTINCT channel_id) > 3;",
    solution_columns: ["workspace_member_id", "channel_count"],
    tables: ["channel_members"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_053",
    title: "Channels With No Members",
    description: "Find channels that do not have any channel members.",
    difficulty: "medium",
    expected_query:
      "SELECT c.id, c.workspace_id, c.channel_name FROM channels c LEFT JOIN channel_members cm ON c.id = cm.channel_id GROUP BY c.id, c.workspace_id, c.channel_name HAVING COUNT(cm.id) = 0;",
    solution_columns: ["id", "workspace_id", "channel_name"],
    tables: ["channels", "channel_members"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_054",
    title: "Average Messages Per Active Member",
    description:
      "For each workspace, find the average number of non-deleted messages sent per active workspace member.",
    difficulty: "medium",
    expected_query:
      "WITH workspace_message_counts AS ( SELECT workspace_id, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY workspace_id ), workspace_active_members AS ( SELECT workspace_id, COUNT(*) AS active_members FROM workspace_members WHERE membership_status = 'active' GROUP BY workspace_id ) SELECT wam.workspace_id, ROUND(COALESCE(wmc.total_messages, 0)::numeric / NULLIF(wam.active_members, 0), 2) AS avg_messages_per_active_member FROM workspace_active_members wam LEFT JOIN workspace_message_counts wmc ON wam.workspace_id = wmc.workspace_id;",
    solution_columns: ["workspace_id", "avg_messages_per_active_member"],
    tables: ["messages", "workspace_members"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_055",
    title: "Most Mentioned Messages",
    description:
      "Find the top 10 messages with the highest number of user mentions.",
    difficulty: "medium",
    expected_query:
      "SELECT message_id, COUNT(*) AS mention_count FROM message_mentions GROUP BY message_id ORDER BY mention_count DESC, message_id ASC LIMIT 10;",
    solution_columns: ["message_id", "mention_count"],
    tables: ["message_mentions"],
    comparison_config: {
      sort_by_columns: [
        { column: "mention_count", direction: "desc" },
        { column: "message_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_056",
    title: "Members Mentioned In Multiple Workspaces",
    description:
      "Find workspace members who were mentioned in more than one workspace.",
    difficulty: "medium",
    expected_query:
      "SELECT mm.mentioned_member_id AS workspace_member_id, COUNT(DISTINCT m.workspace_id) AS workspace_count FROM message_mentions mm JOIN messages m ON mm.message_id = m.id GROUP BY mm.mentioned_member_id HAVING COUNT(DISTINCT m.workspace_id) > 1;",
    solution_columns: ["workspace_member_id", "workspace_count"],
    tables: ["message_mentions", "messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_057",
    title: "Channels With Attachment Heavy Usage",
    description: "Find channels where more than 20 messages have attachments.",
    difficulty: "medium",
    expected_query:
      "SELECT m.channel_id, COUNT(DISTINCT ma.message_id) AS attachment_message_count FROM message_attachments ma JOIN messages m ON ma.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id HAVING COUNT(DISTINCT ma.message_id) > 20;",
    solution_columns: ["channel_id", "attachment_message_count"],
    tables: ["message_attachments", "messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_058",
    title: "Top Direct Conversations By Messages",
    description:
      "Find the top 10 direct conversations with the highest number of non-deleted messages.",
    difficulty: "medium",
    expected_query:
      "SELECT conversation_id, COUNT(*) AS total_messages FROM messages WHERE conversation_id IS NOT NULL AND is_deleted = false GROUP BY conversation_id ORDER BY total_messages DESC, conversation_id ASC LIMIT 10;",
    solution_columns: ["conversation_id", "total_messages"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_messages", direction: "desc" },
        { column: "conversation_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_059",
    title: "Members With Muted Preferences",
    description: "Find workspace members who have muted more than 2 channels.",
    difficulty: "medium",
    expected_query:
      "SELECT workspace_member_id, COUNT(*) AS muted_channel_count FROM notification_preferences WHERE mute_until IS NOT NULL GROUP BY workspace_member_id HAVING COUNT(*) > 2;",
    solution_columns: ["workspace_member_id", "muted_channel_count"],
    tables: ["notification_preferences"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_060",
    title: "Workspace Invite Counts",
    description: "For each workspace, count accepted and pending invites.",
    difficulty: "medium",
    expected_query:
      "SELECT workspace_id, COUNT(*) FILTER (WHERE invite_status = 'accepted') AS accepted_invites, COUNT(*) FILTER (WHERE invite_status = 'pending') AS pending_invites FROM invites GROUP BY workspace_id;",
    solution_columns: ["workspace_id", "accepted_invites", "pending_invites"],
    tables: ["invites"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_061",
    title: "Most Active Users Per Workspace",
    description:
      "For each workspace, find the member who sent the highest number of non-deleted messages.",
    difficulty: "medium",
    expected_query:
      "WITH member_message_counts AS ( SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id ), ranked_members AS ( SELECT workspace_id, sender_member_id, message_count, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY message_count DESC, sender_member_id ASC) AS rn FROM member_message_counts ) SELECT workspace_id, sender_member_id, message_count FROM ranked_members WHERE rn = 1;",
    solution_columns: ["workspace_id", "sender_member_id", "message_count"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_062",
    title: "Most Reacted Message Per Channel",
    description:
      "For each channel, find the message with the highest number of reactions.",
    difficulty: "medium",
    expected_query:
      "WITH reaction_counts AS ( SELECT m.channel_id, mr.message_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id, mr.message_id ), ranked_messages AS ( SELECT channel_id, message_id, reaction_count, ROW_NUMBER() OVER (PARTITION BY channel_id ORDER BY reaction_count DESC, message_id ASC) AS rn FROM reaction_counts ) SELECT channel_id, message_id, reaction_count FROM ranked_messages WHERE rn = 1;",
    solution_columns: ["channel_id", "message_id", "reaction_count"],
    tables: ["message_reactions", "messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_063",
    title: "Users More Active Than Workspace Average",
    description:
      "Find members whose message count is greater than the average message count of members in their workspace.",
    difficulty: "medium",
    expected_query:
      "WITH member_counts AS ( SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id ), workspace_avg AS ( SELECT workspace_id, AVG(message_count) AS avg_count FROM member_counts GROUP BY workspace_id ) SELECT mc.workspace_id, mc.sender_member_id, mc.message_count FROM member_counts mc JOIN workspace_avg wa ON mc.workspace_id = wa.workspace_id WHERE mc.message_count > wa.avg_count;",
    solution_columns: ["workspace_id", "sender_member_id", "message_count"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_064",
    title: "Fastest First Reply Threads",
    description:
      "Find the top 10 parent messages with the fastest first reply time in minutes.",
    difficulty: "medium",
    expected_query:
      "WITH first_replies AS ( SELECT parent_message_id, MIN(sent_at) AS first_reply_at FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id ) SELECT p.id AS parent_message_id, ROUND(EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0, 2) AS first_reply_minutes FROM messages p JOIN first_replies fr ON p.id = fr.parent_message_id ORDER BY first_reply_minutes ASC, parent_message_id ASC LIMIT 10;",
    solution_columns: ["parent_message_id", "first_reply_minutes"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "first_reply_minutes", direction: "asc" },
        { column: "parent_message_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_065",
    title: "Most Saved Messages",
    description:
      "Find the top 10 messages saved by the highest number of users.",
    difficulty: "medium",
    expected_query:
      "SELECT message_id, COUNT(*) AS saved_count FROM saved_messages GROUP BY message_id ORDER BY saved_count DESC, message_id ASC LIMIT 10;",
    solution_columns: ["message_id", "saved_count"],
    tables: ["saved_messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "saved_count", direction: "desc" },
        { column: "message_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_066",
    title: "Channels With High Reply Ratio",
    description:
      "Find channels where reply messages are more than 30 percent of total messages.",
    difficulty: "medium",
    expected_query:
      "SELECT channel_id, COUNT(*) FILTER (WHERE parent_message_id IS NOT NULL) AS reply_count, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL GROUP BY channel_id HAVING COUNT(*) FILTER (WHERE parent_message_id IS NOT NULL)::numeric / COUNT(*) > 0.30;",
    solution_columns: ["channel_id", "reply_count", "total_messages"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_067",
    title: "Members With Reactions But No Messages",
    description:
      "Find workspace members who reacted to messages but never sent a message.",
    difficulty: "medium",
    expected_query:
      "SELECT DISTINCT mr.workspace_member_id FROM message_reactions mr LEFT JOIN messages m ON mr.workspace_member_id = m.sender_member_id GROUP BY mr.workspace_member_id HAVING COUNT(m.id) = 0;",
    solution_columns: ["workspace_member_id"],
    tables: ["message_reactions", "messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_068",
    title: "Daily Message Volume",
    description: "Find daily non-deleted message counts for the last 30 days.",
    difficulty: "medium",
    expected_query:
      "SELECT DATE(sent_at) AS message_date, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '30 days' GROUP BY DATE(sent_at);",
    solution_columns: ["message_date", "total_messages"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_069",
    title: "Channels With Above Average Members",
    description:
      "Find channels whose member count is above the average across all channels.",
    difficulty: "medium",
    expected_query:
      "WITH channel_counts AS ( SELECT channel_id, COUNT(*) AS member_count FROM channel_members GROUP BY channel_id ), avg_count AS ( SELECT AVG(member_count) AS avg_members FROM channel_counts ) SELECT cc.channel_id, cc.member_count FROM channel_counts cc CROSS JOIN avg_count ac WHERE cc.member_count > ac.avg_members;",
    solution_columns: ["channel_id", "member_count"],
    tables: ["channel_members"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_070",
    title: "Most Active Hour Of Day",
    description:
      "Find the hour of the day with the highest number of non-deleted messages.",
    difficulty: "medium",
    expected_query:
      "SELECT EXTRACT(HOUR FROM sent_at) AS message_hour, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY EXTRACT(HOUR FROM sent_at) ORDER BY total_messages DESC, message_hour ASC LIMIT 1;",
    solution_columns: ["message_hour", "total_messages"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_messages", direction: "desc" },
        { column: "message_hour", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_071",
    title: "Users Active On Consecutive Days",
    description:
      "Find members who sent non-deleted messages on at least 3 different consecutive dates.",
    difficulty: "medium",
    expected_query:
      "WITH member_days AS ( SELECT DISTINCT sender_member_id, DATE(sent_at) AS message_date FROM messages WHERE is_deleted = false ), grouped_days AS ( SELECT sender_member_id, message_date, message_date - (ROW_NUMBER() OVER (PARTITION BY sender_member_id ORDER BY message_date))::int AS grp FROM member_days ) SELECT sender_member_id, COUNT(*) AS consecutive_days_count FROM grouped_days GROUP BY sender_member_id, grp HAVING COUNT(*) >= 3;",
    solution_columns: ["sender_member_id", "consecutive_days_count"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_072",
    title: "Users With Faster Than Avg Reply",
    description:
      "Find parent messages whose first reply time is faster than the overall average first reply time.",
    difficulty: "medium",
    expected_query:
      "WITH first_replies AS ( SELECT parent_message_id, MIN(sent_at) AS first_reply_at FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id ), reply_times AS ( SELECT p.id AS parent_message_id, EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0 AS first_reply_minutes FROM messages p JOIN first_replies fr ON p.id = fr.parent_message_id ), avg_reply AS ( SELECT AVG(first_reply_minutes) AS avg_first_reply_minutes FROM reply_times ) SELECT rt.parent_message_id, ROUND(rt.first_reply_minutes, 2) AS first_reply_minutes FROM reply_times rt CROSS JOIN avg_reply ar WHERE rt.first_reply_minutes < ar.avg_first_reply_minutes ORDER BY first_reply_minutes ASC, parent_message_id ASC;",
    solution_columns: ["parent_message_id", "first_reply_minutes"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "first_reply_minutes", direction: "asc" },
        { column: "parent_message_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_073",
    title: "Members Above Channel Avg",
    description:
      "Find member-channel pairs where the member sent more messages in a channel than their average messages per channel in that workspace.",
    difficulty: "medium",
    expected_query:
      "WITH member_channel_counts AS ( SELECT workspace_id, channel_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false AND channel_id IS NOT NULL GROUP BY workspace_id, channel_id, sender_member_id ), member_workspace_avg AS ( SELECT workspace_id, sender_member_id, AVG(message_count) AS avg_channel_message_count FROM member_channel_counts GROUP BY workspace_id, sender_member_id ) SELECT mcc.workspace_id, mcc.channel_id, mcc.sender_member_id, mcc.message_count FROM member_channel_counts mcc JOIN member_workspace_avg mwa ON mcc.workspace_id = mwa.workspace_id AND mcc.sender_member_id = mwa.sender_member_id WHERE mcc.message_count > mwa.avg_channel_message_count;",
    solution_columns: [
      "workspace_id",
      "channel_id",
      "sender_member_id",
      "message_count",
    ],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_074",
    title: "Most Replied Users",
    description:
      "Find the top 10 members whose messages received the highest number of direct replies.",
    difficulty: "medium",
    expected_query:
      "SELECT p.sender_member_id, COUNT(*) AS reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id GROUP BY p.sender_member_id ORDER BY reply_count DESC, p.sender_member_id ASC LIMIT 10;",
    solution_columns: ["sender_member_id", "reply_count"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "reply_count", direction: "desc" },
        { column: "sender_member_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_075",
    title: "Members Above Reaction Avg",
    description:
      "Find workspace members whose total reactions given are above the average reactions given in their workspace.",
    difficulty: "medium",
    expected_query:
      "WITH member_reaction_counts AS ( SELECT m.workspace_id, mr.workspace_member_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id GROUP BY m.workspace_id, mr.workspace_member_id ), workspace_avg AS ( SELECT workspace_id, AVG(reaction_count) AS avg_reaction_count FROM member_reaction_counts GROUP BY workspace_id ) SELECT mrc.workspace_id, mrc.workspace_member_id, mrc.reaction_count FROM member_reaction_counts mrc JOIN workspace_avg wa ON mrc.workspace_id = wa.workspace_id WHERE mrc.reaction_count > wa.avg_reaction_count;",
    solution_columns: ["workspace_id", "workspace_member_id", "reaction_count"],
    tables: ["message_reactions", "messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_076",
    title: "Top 3 Members Per Workspace",
    description:
      "For each workspace, find the top 3 members who sent the most non-deleted messages.",
    difficulty: "hard",
    expected_query:
      "WITH member_message_counts AS ( SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id ), ranked_members AS ( SELECT workspace_id, sender_member_id, message_count, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY message_count DESC, sender_member_id ASC) AS rn FROM member_message_counts ) SELECT workspace_id, sender_member_id, message_count FROM ranked_members WHERE rn <= 3 ORDER BY workspace_id ASC, message_count DESC, sender_member_id ASC;",
    solution_columns: ["workspace_id", "sender_member_id", "message_count"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "workspace_id", direction: "asc" },
        { column: "message_count", direction: "desc" },
        { column: "sender_member_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_077",
    title: "Deepest Reply Threads",
    description:
      "Find the top 10 root messages that have the deepest reply chain.",
    difficulty: "hard",
    expected_query:
      "WITH RECURSIVE message_tree AS ( SELECT id AS root_message_id, id, parent_message_id, 0 AS depth FROM messages WHERE parent_message_id IS NULL UNION ALL SELECT mt.root_message_id, m.id, m.parent_message_id, mt.depth + 1 FROM messages m JOIN message_tree mt ON m.parent_message_id = mt.id ) SELECT root_message_id, MAX(depth) AS max_reply_depth FROM message_tree GROUP BY root_message_id ORDER BY max_reply_depth DESC, root_message_id ASC LIMIT 10;",
    solution_columns: ["root_message_id", "max_reply_depth"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "max_reply_depth", direction: "desc" },
        { column: "root_message_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_078",
    title: "Members More Popular Than Repliers",
    description:
      "Find members whose received replies exceed average of their repliers.",
    difficulty: "hard",
    expected_query:
      "WITH received_replies AS ( SELECT p.sender_member_id AS member_id, COUNT(*) AS received_reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id GROUP BY p.sender_member_id ), replier_received_replies AS ( SELECT p.sender_member_id AS member_id, r.sender_member_id AS replier_member_id FROM messages r JOIN messages p ON r.parent_message_id = p.id ), replier_avg AS ( SELECT rrr.member_id, AVG(COALESCE(rr.received_reply_count, 0)) AS avg_replier_received_reply_count FROM replier_received_replies rrr LEFT JOIN received_replies rr ON rrr.replier_member_id = rr.member_id GROUP BY rrr.member_id ) SELECT rr.member_id, rr.received_reply_count FROM received_replies rr JOIN replier_avg ra ON rr.member_id = ra.member_id WHERE rr.received_reply_count > ra.avg_replier_received_reply_count;",
    solution_columns: ["member_id", "received_reply_count"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_079",
    title: "Rolling 7 Day Leaders",
    description:
      "For each date, find the member with highest rolling 7-day messages.",
    difficulty: "hard",
    expected_query:
      "WITH daily_member_messages AS ( SELECT DATE_TRUNC('day', sent_at) AS message_date, sender_member_id, COUNT(*) AS daily_count FROM messages WHERE is_deleted = false GROUP BY DATE_TRUNC('day', sent_at), sender_member_id ), rolling_counts AS ( SELECT message_date, sender_member_id, SUM(daily_count) OVER ( PARTITION BY sender_member_id ORDER BY message_date RANGE BETWEEN INTERVAL '6 days' PRECEDING AND CURRENT ROW ) AS rolling_7d_count FROM daily_member_messages ), daily_leaders AS ( SELECT DISTINCT ON (message_date) message_date::date AS message_date, sender_member_id, rolling_7d_count FROM rolling_counts ORDER BY message_date, rolling_7d_count DESC, sender_member_id ASC ) SELECT message_date, sender_member_id, rolling_7d_count FROM daily_leaders ORDER BY message_date ASC;",
    solution_columns: ["message_date", "sender_member_id", "rolling_7d_count"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [{ column: "message_date", direction: "asc" }],
    },
  },
  {
    app_id: appId,
    code: "CHAT_080",
    title: "Channels With Consistent Weekly Growth",
    description:
      "Find channels whose non-deleted message count increased week over week for at least 3 consecutive weeks.",
    difficulty: "hard",
    expected_query:
      "WITH weekly_channel_messages AS ( SELECT channel_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS weekly_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id, DATE_TRUNC('week', sent_at)::date ), weekly_growth AS ( SELECT channel_id, week_start, weekly_count, LAG(weekly_count) OVER (PARTITION BY channel_id ORDER BY week_start) AS prev_week_count FROM weekly_channel_messages ), growth_flags AS ( SELECT channel_id, week_start, CASE WHEN prev_week_count IS NOT NULL AND weekly_count > prev_week_count THEN 1 ELSE 0 END AS is_growth_week FROM weekly_growth ), grouped_flags AS ( SELECT channel_id, week_start, is_growth_week, ROW_NUMBER() OVER (PARTITION BY channel_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY channel_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags ), grouped_growth AS ( SELECT channel_id, week_start, grp FROM grouped_flags WHERE is_growth_week = 1 ) SELECT channel_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY channel_id, grp HAVING COUNT(*) >= 3;",
    solution_columns: ["channel_id", "consecutive_growth_weeks"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_081",
    title: "Fastest Median First Reply Channels",
    description:
      "Find the top 10 channels with the lowest median first reply time.",
    difficulty: "hard",
    expected_query:
      "WITH first_replies AS ( SELECT parent_message_id, MIN(sent_at) AS first_reply_at FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id ), parent_reply_times AS ( SELECT p.channel_id, EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0 AS first_reply_minutes FROM messages p JOIN first_replies fr ON p.id = fr.parent_message_id WHERE p.channel_id IS NOT NULL ) SELECT channel_id, ROUND((PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY first_reply_minutes))::numeric, 2) AS median_first_reply_minutes FROM parent_reply_times GROUP BY channel_id ORDER BY median_first_reply_minutes ASC, channel_id ASC LIMIT 10;",
    solution_columns: ["channel_id", "median_first_reply_minutes"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "median_first_reply_minutes", direction: "asc" },
        { column: "channel_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_082",
    title: "Members In Every Public Channel",
    description: "Find workspace members who belong to every public channel.",
    difficulty: "hard",
    expected_query:
      "WITH public_channels AS ( SELECT workspace_id, COUNT(*) AS public_channel_count FROM channels WHERE visibility = 'public' GROUP BY workspace_id ), public_memberships AS ( SELECT c.workspace_id, cm.workspace_member_id, COUNT(DISTINCT cm.channel_id) AS joined_public_channels FROM channel_members cm JOIN channels c ON cm.channel_id = c.id WHERE c.visibility = 'public' GROUP BY c.workspace_id, cm.workspace_member_id ) SELECT pm.workspace_id, pm.workspace_member_id FROM public_memberships pm JOIN public_channels pc ON pm.workspace_id = pc.workspace_id WHERE pm.joined_public_channels = pc.public_channel_count;",
    solution_columns: ["workspace_id", "workspace_member_id"],
    tables: ["channels", "channel_members"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_083",
    title: "Members Reaction vs Message Dominance",
    description:
      "Find members where channels with more reactions exceed channels with more messages.",
    difficulty: "hard",
    expected_query:
      "WITH message_counts AS ( SELECT workspace_id, channel_id, sender_member_id AS workspace_member_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY workspace_id, channel_id, sender_member_id ), reaction_counts AS ( SELECT m.workspace_id, m.channel_id, mr.workspace_member_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.workspace_id, m.channel_id, mr.workspace_member_id ), combined AS ( SELECT COALESCE(mc.workspace_id, rc.workspace_id) AS workspace_id, COALESCE(mc.channel_id, rc.channel_id) AS channel_id, COALESCE(mc.workspace_member_id, rc.workspace_member_id) AS workspace_member_id, COALESCE(mc.message_count, 0) AS message_count, COALESCE(rc.reaction_count, 0) AS reaction_count FROM message_counts mc FULL OUTER JOIN reaction_counts rc ON mc.workspace_id = rc.workspace_id AND mc.channel_id = rc.channel_id AND mc.workspace_member_id = rc.workspace_member_id ) SELECT workspace_id, workspace_member_id FROM combined GROUP BY workspace_id, workspace_member_id HAVING COUNT(*) FILTER (WHERE reaction_count > message_count) > COUNT(*) FILTER (WHERE message_count > reaction_count);",
    solution_columns: ["workspace_id", "workspace_member_id"],
    tables: ["messages", "message_reactions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_084",
    title: "Top Root Message Per Workspace",
    description: "Find root message with most replies per workspace.",
    difficulty: "hard",
    expected_query:
      "WITH RECURSIVE reply_tree AS ( SELECT m.workspace_id, m.id AS root_message_id, m.id, m.parent_message_id FROM messages m WHERE m.parent_message_id IS NULL UNION ALL SELECT rt.workspace_id, rt.root_message_id, m.id, m.parent_message_id FROM messages m JOIN reply_tree rt ON m.parent_message_id = rt.id ), reply_totals AS ( SELECT workspace_id, root_message_id, COUNT(*) - 1 AS total_descendant_replies FROM reply_tree GROUP BY workspace_id, root_message_id ), ranked_roots AS ( SELECT workspace_id, root_message_id, total_descendant_replies, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY total_descendant_replies DESC, root_message_id ASC) AS rn FROM reply_totals ) SELECT workspace_id, root_message_id, total_descendant_replies FROM ranked_roots WHERE rn = 1;",
    solution_columns: [
      "workspace_id",
      "root_message_id",
      "total_descendant_replies",
    ],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_085",
    title: "Power Users Multi Metrics",
    description:
      "Find members above workspace averages in messages, reactions and mentions.",
    difficulty: "hard",
    expected_query:
      "WITH message_counts AS ( SELECT workspace_id, sender_member_id AS workspace_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id ), reaction_counts AS ( SELECT m.workspace_id, mr.workspace_member_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id GROUP BY m.workspace_id, mr.workspace_member_id ), mention_counts AS ( SELECT m.workspace_id, m.sender_member_id AS workspace_member_id, COUNT(*) AS mention_count FROM message_mentions mm JOIN messages m ON mm.message_id = m.id GROUP BY m.workspace_id, m.sender_member_id ), member_metrics AS ( SELECT COALESCE(mc.workspace_id, rc.workspace_id, mic.workspace_id) AS workspace_id, COALESCE(mc.workspace_member_id, rc.workspace_member_id, mic.workspace_member_id) AS workspace_member_id, COALESCE(mc.message_count, 0) AS message_count, COALESCE(rc.reaction_count, 0) AS reaction_count, COALESCE(mic.mention_count, 0) AS mention_count FROM message_counts mc FULL OUTER JOIN reaction_counts rc ON mc.workspace_id = rc.workspace_id AND mc.workspace_member_id = rc.workspace_member_id FULL OUTER JOIN mention_counts mic ON COALESCE(mc.workspace_id, rc.workspace_id) = mic.workspace_id AND COALESCE(mc.workspace_member_id, rc.workspace_member_id) = mic.workspace_member_id ), workspace_avg AS ( SELECT workspace_id, AVG(message_count) AS avg_message_count, AVG(reaction_count) AS avg_reaction_count, AVG(mention_count) AS avg_mention_count FROM member_metrics GROUP BY workspace_id ) SELECT mm.workspace_id, mm.workspace_member_id, mm.message_count, mm.reaction_count, mm.mention_count FROM member_metrics mm JOIN workspace_avg wa ON mm.workspace_id = wa.workspace_id WHERE mm.message_count > wa.avg_message_count AND mm.reaction_count > wa.avg_reaction_count AND mm.mention_count > wa.avg_mention_count;",
    solution_columns: [
      "workspace_id",
      "workspace_member_id",
      "message_count",
      "reaction_count",
      "mention_count",
    ],
    tables: ["messages", "message_reactions", "message_mentions"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_086",
    title: "Dormant But Unread Heavy Members",
    description: "Find members inactive 30 days but with >20 unread messages.",
    difficulty: "hard",
    expected_query:
      "WITH last_sent AS ( SELECT sender_member_id AS workspace_member_id, MAX(sent_at) AS last_sent_at FROM messages WHERE is_deleted = false GROUP BY sender_member_id ), unread_counts AS ( SELECT cm.workspace_member_id, COUNT(m.id) AS unread_message_count FROM channel_members cm JOIN messages m ON m.channel_id = cm.channel_id AND m.sent_at > COALESCE(cm.last_read_at, TIMESTAMP '1970-01-01') AND m.is_deleted = false GROUP BY cm.workspace_member_id ) SELECT uc.workspace_member_id, uc.unread_message_count FROM unread_counts uc LEFT JOIN last_sent ls ON uc.workspace_member_id = ls.workspace_member_id WHERE (ls.last_sent_at IS NULL OR ls.last_sent_at < CURRENT_DATE - INTERVAL '30 days') AND uc.unread_message_count > 20 ORDER BY uc.unread_message_count DESC, uc.workspace_member_id ASC;",
    solution_columns: ["workspace_member_id", "unread_message_count"],
    tables: ["channel_members", "messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "unread_message_count", direction: "desc" },
        { column: "workspace_member_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_087",
    title: "Mutual Reply Pairs",
    description:
      "Find pairs where both members replied to each other >=3 times.",
    difficulty: "hard",
    expected_query:
      "WITH direct_replies AS ( SELECT LEAST(p.sender_member_id, r.sender_member_id) AS member_1, GREATEST(p.sender_member_id, r.sender_member_id) AS member_2, p.sender_member_id AS original_sender, r.sender_member_id AS replier_sender, COUNT(*) AS reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id WHERE p.conversation_id IS NOT NULL AND r.conversation_id = p.conversation_id GROUP BY LEAST(p.sender_member_id, r.sender_member_id), GREATEST(p.sender_member_id, r.sender_member_id), p.sender_member_id, r.sender_member_id ), pair_summary AS ( SELECT member_1, member_2, COUNT(*) FILTER (WHERE original_sender = member_1 AND replier_sender = member_2 AND reply_count >= 3) AS c1, COUNT(*) FILTER (WHERE original_sender = member_2 AND replier_sender = member_1 AND reply_count >= 3) AS c2 FROM direct_replies GROUP BY member_1, member_2 ) SELECT member_1, member_2 FROM pair_summary WHERE c1 > 0 AND c2 > 0;",
    solution_columns: ["member_1", "member_2"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_088",
    title: "Channels Dominated By One User",
    description: "Find channels where one user contributed >50% messages.",
    difficulty: "hard",
    expected_query:
      "WITH channel_member_counts AS ( SELECT channel_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id, sender_member_id ), channel_totals AS ( SELECT channel_id, SUM(message_count) AS total_messages, MAX(message_count) AS top_member_messages FROM channel_member_counts GROUP BY channel_id ) SELECT channel_id, top_member_messages, total_messages FROM channel_totals WHERE top_member_messages::numeric / total_messages > 0.50 ORDER BY top_member_messages DESC, channel_id ASC;",
    solution_columns: ["channel_id", "top_member_messages", "total_messages"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "top_member_messages", direction: "desc" },
        { column: "channel_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_089",
    title: "Workspaces With 4 Week Growth",
    description: "Find workspaces with 4 consecutive weekly growth.",
    difficulty: "hard",
    expected_query:
      "WITH weekly_workspace_messages AS ( SELECT workspace_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS weekly_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, DATE_TRUNC('week', sent_at)::date ), growth_flags AS ( SELECT workspace_id, week_start, CASE WHEN weekly_count > LAG(weekly_count) OVER (PARTITION BY workspace_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_workspace_messages ), grouped_growth AS ( SELECT workspace_id, week_start, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1 ) SELECT workspace_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_id, grp HAVING COUNT(*) >= 4;",
    solution_columns: ["workspace_id", "consecutive_growth_weeks"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_090",
    title: "Members Faster Than Workspace Median",
    description: "Find members with median reply time below workspace median.",
    difficulty: "hard",
    expected_query:
      "WITH member_reply_times AS ( SELECT r.workspace_id, r.sender_member_id AS workspace_member_id, EXTRACT(EPOCH FROM (r.sent_at - p.sent_at)) / 60.0 AS reply_minutes FROM messages r JOIN messages p ON r.parent_message_id = p.id ), member_medians AS ( SELECT workspace_id, workspace_member_id, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY reply_minutes) AS member_median_reply_minutes FROM member_reply_times GROUP BY workspace_id, workspace_member_id ), workspace_reply_times AS ( SELECT workspace_id, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY reply_minutes) AS workspace_median_reply_minutes FROM member_reply_times GROUP BY workspace_id ) SELECT mm.workspace_id, mm.workspace_member_id, ROUND(mm.member_median_reply_minutes::numeric, 2) AS member_median_reply_minutes FROM member_medians mm JOIN workspace_reply_times wrt ON mm.workspace_id = wrt.workspace_id WHERE mm.member_median_reply_minutes < wrt.workspace_median_reply_minutes ORDER BY mm.workspace_id ASC, member_median_reply_minutes ASC, mm.workspace_member_id ASC;",
    solution_columns: [
      "workspace_id",
      "workspace_member_id",
      "member_median_reply_minutes",
    ],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "workspace_id", direction: "asc" },
        { column: "member_median_reply_minutes", direction: "asc" },
        { column: "workspace_member_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_091",
    title: "Members Highest 30 Day Growth",
    description:
      "Find the top 10 members whose message growth in last 30 days vs previous 30 days is highest.",
    difficulty: "hard",
    expected_query:
      "WITH current_30d AS ( SELECT sender_member_id AS member_id, COUNT(*) AS current_count FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '30 days' GROUP BY sender_member_id ), previous_30d AS ( SELECT sender_member_id AS member_id, COUNT(*) AS previous_count FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '60 days' AND sent_at < CURRENT_DATE - INTERVAL '30 days' GROUP BY sender_member_id ) SELECT COALESCE(c.member_id, p.member_id) AS member_id, COALESCE(c.current_count, 0) - COALESCE(p.previous_count, 0) AS growth_count FROM current_30d c FULL OUTER JOIN previous_30d p ON c.member_id = p.member_id ORDER BY growth_count DESC, member_id ASC LIMIT 10;",
    solution_columns: ["member_id", "growth_count"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "growth_count", direction: "desc" },
        { column: "member_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_092",
    title: "Channels Deep And Wide Threads",
    description: "Find channels where a thread has depth > 5 and replies > 20.",
    difficulty: "hard",
    expected_query:
      "WITH RECURSIVE thread_tree AS ( SELECT channel_id, id AS root_message_id, id, parent_message_id, 0 AS depth FROM messages WHERE parent_message_id IS NULL AND channel_id IS NOT NULL UNION ALL SELECT tt.channel_id, tt.root_message_id, m.id, m.parent_message_id, tt.depth + 1 FROM messages m JOIN thread_tree tt ON m.parent_message_id = tt.id ), thread_stats AS ( SELECT channel_id, root_message_id, MAX(depth) AS max_depth, COUNT(*) - 1 AS total_replies FROM thread_tree GROUP BY channel_id, root_message_id ) SELECT DISTINCT channel_id FROM thread_stats WHERE max_depth > 5 AND total_replies > 20;",
    solution_columns: ["channel_id"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_093",
    title: "Most Engaging Channels",
    description: "Find top 10 channels ranked by interaction score.",
    difficulty: "hard",
    expected_query:
      "WITH channel_messages AS ( SELECT channel_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id ), channel_reactions AS ( SELECT m.channel_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id ), channel_replies AS ( SELECT channel_id, COUNT(*) AS reply_count FROM messages WHERE channel_id IS NOT NULL AND parent_message_id IS NOT NULL GROUP BY channel_id ) SELECT COALESCE(cm.channel_id, cr.channel_id, cp.channel_id) AS channel_id, COALESCE(cm.message_count,0) + COALESCE(cr.reaction_count,0) + COALESCE(cp.reply_count,0) AS interaction_score FROM channel_messages cm FULL OUTER JOIN channel_reactions cr ON cm.channel_id = cr.channel_id FULL OUTER JOIN channel_replies cp ON COALESCE(cm.channel_id, cr.channel_id) = cp.channel_id ORDER BY interaction_score DESC, channel_id ASC LIMIT 10;",
    solution_columns: ["channel_id", "interaction_score"],
    tables: ["messages", "message_reactions"],
    comparison_config: {
      sort_by_columns: [
        { column: "interaction_score", direction: "desc" },
        { column: "channel_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_094",
    title: "Power Members Every Channel",
    description: "Find members active in every channel of their workspace.",
    difficulty: "hard",
    expected_query:
      "WITH workspace_channels AS ( SELECT workspace_id, COUNT(*) AS total_channels FROM channels GROUP BY workspace_id ), member_channel_activity AS ( SELECT workspace_id, sender_member_id AS member_id, COUNT(DISTINCT channel_id) AS active_channels FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY workspace_id, sender_member_id ) SELECT mca.workspace_id, mca.member_id FROM member_channel_activity mca JOIN workspace_channels wc ON mca.workspace_id = wc.workspace_id WHERE mca.active_channels = wc.total_channels;",
    solution_columns: ["workspace_id", "member_id"],
    tables: ["messages", "channels"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_095",
    title: "Channels Reply Velocity",
    description:
      "Find top 10 channels with highest replies per hour (last 7 days).",
    difficulty: "hard",
    expected_query:
      "WITH channel_replies AS ( SELECT channel_id, COUNT(*) AS reply_count FROM messages WHERE channel_id IS NOT NULL AND parent_message_id IS NOT NULL AND sent_at >= CURRENT_DATE - INTERVAL '7 days' GROUP BY channel_id ) SELECT channel_id, ROUND(reply_count::numeric / (7 * 24), 2) AS replies_per_hour FROM channel_replies ORDER BY replies_per_hour DESC, channel_id ASC LIMIT 10;",
    solution_columns: ["channel_id", "replies_per_hour"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "replies_per_hour", direction: "desc" },
        { column: "channel_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_096",
    title: "Members Weekly Mention Growth",
    description: "Find members with 3 consecutive weeks of mention growth.",
    difficulty: "hard",
    expected_query:
      "WITH weekly_mentions AS ( SELECT mm.mentioned_member_id AS workspace_member_id, DATE_TRUNC('week', m.sent_at)::date AS week_start, COUNT(*) AS mention_count FROM message_mentions mm JOIN messages m ON mm.message_id = m.id GROUP BY mm.mentioned_member_id, DATE_TRUNC('week', m.sent_at)::date ), growth_flags AS ( SELECT workspace_member_id, week_start, CASE WHEN mention_count > LAG(mention_count) OVER (PARTITION BY workspace_member_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_mentions ), grouped_growth AS ( SELECT workspace_member_id, week_start, ROW_NUMBER() OVER (PARTITION BY workspace_member_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_member_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1 ) SELECT workspace_member_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_member_id, grp HAVING COUNT(*) >= 3;",
    solution_columns: ["workspace_member_id", "consecutive_growth_weeks"],
    tables: ["message_mentions", "messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_097",
    title: "Conversations Highest Reciprocity",
    description:
      "Find top 10 conversations with most balanced sender distribution.",
    difficulty: "hard",
    expected_query:
      "WITH sender_counts AS ( SELECT conversation_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE conversation_id IS NOT NULL AND is_deleted = false GROUP BY conversation_id, sender_member_id ), conversation_balance AS ( SELECT conversation_id, MIN(message_count) AS min_sender_messages, MAX(message_count) AS max_sender_messages, SUM(message_count) AS total_messages, COUNT(*) AS sender_count FROM sender_counts GROUP BY conversation_id HAVING COUNT(*) > 1 ) SELECT conversation_id, sender_count, total_messages FROM conversation_balance ORDER BY (max_sender_messages - min_sender_messages) ASC, total_messages DESC, conversation_id ASC LIMIT 10;",
    solution_columns: ["conversation_id", "sender_count", "total_messages"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_messages", direction: "desc" },
        { column: "conversation_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_098",
    title: "Workspaces Rising Engagement",
    description: "Find workspaces with 4 consecutive weeks of growth.",
    difficulty: "hard",
    expected_query:
      "WITH weekly_scores AS ( SELECT workspace_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS message_score FROM messages WHERE is_deleted = false GROUP BY workspace_id, DATE_TRUNC('week', sent_at)::date ), growth_flags AS ( SELECT workspace_id, week_start, CASE WHEN message_score > LAG(message_score) OVER (PARTITION BY workspace_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_scores ), grouped_growth AS ( SELECT workspace_id, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1 ) SELECT workspace_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_id, grp HAVING COUNT(*) >= 4;",
    solution_columns: ["workspace_id", "consecutive_growth_weeks"],
    tables: ["messages"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "CHAT_099",
    title: "Members Above 90th Percentile",
    description: "Find members above 90th percentile message count.",
    difficulty: "hard",
    expected_query:
      "WITH member_counts AS ( SELECT sender_member_id AS member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY sender_member_id ), percentile_value AS ( SELECT PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY message_count) AS p90 FROM member_counts ) SELECT mc.member_id, mc.message_count FROM member_counts mc CROSS JOIN percentile_value pv WHERE mc.message_count > pv.p90 ORDER BY mc.message_count DESC, mc.member_id ASC;",
    solution_columns: ["member_id", "message_count"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "message_count", direction: "desc" },
        { column: "member_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "CHAT_100",
    title: "Top Cross Workspace Users",
    description:
      "Find top 10 users active in most workspaces (>=50 messages each).",
    difficulty: "hard",
    expected_query:
      "WITH workspace_user_counts AS ( SELECT workspace_id, sender_member_id AS member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id HAVING COUNT(*) >= 50 ) SELECT member_id, COUNT(DISTINCT workspace_id) AS active_workspace_count FROM workspace_user_counts GROUP BY member_id ORDER BY active_workspace_count DESC, member_id ASC LIMIT 10;",
    solution_columns: ["member_id", "active_workspace_count"],
    tables: ["messages"],
    comparison_config: {
      sort_by_columns: [
        { column: "active_workspace_count", direction: "desc" },
        { column: "member_id", direction: "asc" },
      ],
    },
  },
];

export const hints = [
  {
    code: "CHAT_001",
    hints: [
      {
        hint_order: 1,
        content: "Count all users from one table.",
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
    code: "CHAT_002",
    hints: [
      {
        hint_order: 1,
        content: "Only active workspaces should be counted.",
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
    code: "CHAT_003",
    hints: [
      {
        hint_order: 1,
        content: "Return only verified users.",
      },
      {
        hint_order: 2,
        content: "Filter using is_verified.",
      },
      {
        hint_order: 3,
        content: "Select id, full_name, email and sort by id.",
      },
    ],
  },
  {
    code: "CHAT_004",
    hints: [
      {
        hint_order: 1,
        content: "Only public channels are needed.",
      },
      {
        hint_order: 2,
        content: "Filter on the visibility column.",
      },
      {
        hint_order: 3,
        content:
          "Select channel columns and ORDER BY workspace_id, channel_name, id.",
      },
    ],
  },
  {
    code: "CHAT_005",
    hints: [
      {
        hint_order: 1,
        content: "Find users marked as bots.",
      },
      {
        hint_order: 2,
        content: "Use the is_bot column.",
      },
      {
        hint_order: 3,
        content: "Select id, full_name, username with WHERE is_bot = true.",
      },
    ],
  },
  {
    code: "CHAT_006",
    hints: [
      {
        hint_order: 1,
        content: "Count active members in each workspace.",
      },
      {
        hint_order: 2,
        content: "Filter membership_status before grouping.",
      },
      {
        hint_order: 3,
        content: "GROUP BY workspace_id and COUNT(*).",
      },
    ],
  },
  {
    code: "CHAT_007",
    hints: [
      {
        hint_order: 1,
        content: "Count channels per workspace.",
      },
      {
        hint_order: 2,
        content: "Group rows by workspace_id.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) from channels grouped by workspace_id.",
      },
    ],
  },
  {
    code: "CHAT_008",
    hints: [
      {
        hint_order: 1,
        content: "Only archived channels are needed.",
      },
      {
        hint_order: 2,
        content: "Use the is_archived flag.",
      },
      {
        hint_order: 3,
        content:
          "Select archived channels and ORDER BY archived_at DESC, id ASC.",
      },
    ],
  },
  {
    code: "CHAT_009",
    hints: [
      {
        hint_order: 1,
        content: "Look for messages that contain links.",
      },
      {
        hint_order: 2,
        content: "Exclude deleted messages too.",
      },
      {
        hint_order: 3,
        content: "Filter with contains_link = true and is_deleted = false.",
      },
    ],
  },
  {
    code: "CHAT_010",
    hints: [
      {
        hint_order: 1,
        content: "Count direct conversations only.",
      },
      {
        hint_order: 2,
        content: "Use the conversation_type column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE conversation_type = 'direct'.",
      },
    ],
  },
  {
    code: "CHAT_011",
    hints: [
      {
        hint_order: 1,
        content: "Only active pins should be listed.",
      },
      {
        hint_order: 2,
        content: "Use the is_active column from pinned_messages.",
      },
      {
        hint_order: 3,
        content:
          "Select pinned fields and ORDER BY pinned_at DESC, message_id ASC.",
      },
    ],
  },
  {
    code: "CHAT_012",
    hints: [
      {
        hint_order: 1,
        content: "Unread notifications have not been read yet.",
      },
      {
        hint_order: 2,
        content: "Filter on is_read.",
      },
      {
        hint_order: 3,
        content: "Use WHERE is_read = false and sort by created_at DESC.",
      },
    ],
  },
  {
    code: "CHAT_013",
    hints: [
      {
        hint_order: 1,
        content: "Find users currently online.",
      },
      {
        hint_order: 2,
        content: "Use the presence_status column.",
      },
      {
        hint_order: 3,
        content: "Filter WHERE presence_status = 'online'.",
      },
    ],
  },
  {
    code: "CHAT_014",
    hints: [
      {
        hint_order: 1,
        content: "Count only messages sent today.",
      },
      {
        hint_order: 2,
        content: "Compare sent_at to the current date.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE DATE(sent_at) = CURRENT_DATE.",
      },
    ],
  },
  {
    code: "CHAT_015",
    hints: [
      {
        hint_order: 1,
        content: "Count reactions by emoji.",
      },
      {
        hint_order: 2,
        content: "Group by emoji_code.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) from message_reactions grouped by emoji_code.",
      },
    ],
  },
  {
    code: "CHAT_016",
    hints: [
      {
        hint_order: 1,
        content: "Keep members who joined in the current month.",
      },
      {
        hint_order: 2,
        content: "Compare joined_at month to the current month.",
      },
      {
        hint_order: 3,
        content:
          "Use DATE_TRUNC('month', joined_at) = DATE_TRUNC('month', CURRENT_DATE).",
      },
    ],
  },
  {
    code: "CHAT_017",
    hints: [
      {
        hint_order: 1,
        content: "Count private channels in each workspace.",
      },
      {
        hint_order: 2,
        content: "Filter visibility first.",
      },
      {
        hint_order: 3,
        content: "WHERE visibility = 'private' then GROUP BY workspace_id.",
      },
    ],
  },
  {
    code: "CHAT_018",
    hints: [
      {
        hint_order: 1,
        content: "Only deleted messages should be listed.",
      },
      {
        hint_order: 2,
        content: "Use the is_deleted column.",
      },
      {
        hint_order: 3,
        content: "Select message fields with WHERE is_deleted = true.",
      },
    ],
  },
  {
    code: "CHAT_019",
    hints: [
      {
        hint_order: 1,
        content: "Find users with do-not-disturb enabled.",
      },
      {
        hint_order: 2,
        content: "Use the is_dnd_enabled column.",
      },
      {
        hint_order: 3,
        content:
          "Select user_id, snooze_until with WHERE is_dnd_enabled = true.",
      },
    ],
  },
  {
    code: "CHAT_020",
    hints: [
      {
        hint_order: 1,
        content: "Find users missing a profile image.",
      },
      {
        hint_order: 2,
        content: "Check for NULL values.",
      },
      {
        hint_order: 3,
        content: "Use WHERE profile_image_url IS NULL.",
      },
    ],
  },
  {
    code: "CHAT_021",
    hints: [
      {
        hint_order: 1,
        content: "Count non-deleted messages in each channel.",
      },
      {
        hint_order: 2,
        content: "Ignore rows without a channel_id.",
      },
      {
        hint_order: 3,
        content:
          "WHERE channel_id IS NOT NULL AND is_deleted = false, then GROUP BY channel_id.",
      },
    ],
  },
  {
    code: "CHAT_022",
    hints: [
      {
        hint_order: 1,
        content: "Replies have a parent message.",
      },
      {
        hint_order: 2,
        content: "Group by parent_message_id.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) where parent_message_id IS NOT NULL.",
      },
    ],
  },
  {
    code: "CHAT_023",
    hints: [
      {
        hint_order: 1,
        content: "Keep users created in the last 30 days.",
      },
      {
        hint_order: 2,
        content: "Compare created_at to a 30 day interval.",
      },
      {
        hint_order: 3,
        content: "Use WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'.",
      },
    ],
  },
  {
    code: "CHAT_024",
    hints: [
      {
        hint_order: 1,
        content: "Only active channel memberships are needed.",
      },
      {
        hint_order: 2,
        content: "Filter using membership_status.",
      },
      {
        hint_order: 3,
        content: "Select rows where membership_status = 'active'.",
      },
    ],
  },
  {
    code: "CHAT_025",
    hints: [
      {
        hint_order: 1,
        content: "Count attachments by type.",
      },
      {
        hint_order: 2,
        content: "Group by attachment_type.",
      },
      {
        hint_order: 3,
        content:
          "COUNT(*) from message_attachments grouped by attachment_type.",
      },
    ],
  },
  {
    code: "CHAT_026",
    hints: [
      {
        hint_order: 1,
        content: "Keep workspaces created this year.",
      },
      {
        hint_order: 2,
        content: "Compare the year part of created_at to the current year.",
      },
      {
        hint_order: 3,
        content:
          "Use DATE_TRUNC('year', created_at) = DATE_TRUNC('year', CURRENT_DATE).",
      },
    ],
  },
  {
    code: "CHAT_027",
    hints: [
      {
        hint_order: 1,
        content: "Muted channel preferences are needed.",
      },
      {
        hint_order: 2,
        content: "Use the is_muted flag.",
      },
      {
        hint_order: 3,
        content:
          "Select rows from channel_notification_preferences where is_muted = true.",
      },
    ],
  },
  {
    code: "CHAT_028",
    hints: [
      {
        hint_order: 1,
        content: "Only pending invites should be returned.",
      },
      {
        hint_order: 2,
        content: "Filter on invite_status.",
      },
      {
        hint_order: 3,
        content: "Use WHERE invite_status = 'pending'.",
      },
    ],
  },
  {
    code: "CHAT_029",
    hints: [
      {
        hint_order: 1,
        content: "Look for moderation cases that are still open.",
      },
      {
        hint_order: 2,
        content: "Use the case_status column.",
      },
      {
        hint_order: 3,
        content:
          "Filter WHERE case_status = 'open' and sort by created_at DESC.",
      },
    ],
  },
  {
    code: "CHAT_030",
    hints: [
      {
        hint_order: 1,
        content: "Count only voice calls.",
      },
      {
        hint_order: 2,
        content: "Use the call_type column.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with WHERE call_type = 'voice'.",
      },
    ],
  },
  {
    code: "CHAT_031",
    hints: [
      {
        hint_order: 1,
        content: "Find the most active channels by message count.",
      },
      {
        hint_order: 2,
        content: "Count non-deleted messages per channel.",
      },
      {
        hint_order: 3,
        content: "GROUP BY channel_id, ORDER BY count DESC, then LIMIT 5.",
      },
    ],
  },
  {
    code: "CHAT_032",
    hints: [
      {
        hint_order: 1,
        content: "A user may save many messages.",
      },
      {
        hint_order: 2,
        content: "Return each user only once.",
      },
      {
        hint_order: 3,
        content: "Use DISTINCT user_id from saved_messages.",
      },
    ],
  },
  {
    code: "CHAT_033",
    hints: [
      {
        hint_order: 1,
        content: "A message can have multiple attachments.",
      },
      {
        hint_order: 2,
        content: "Return each attached message only once.",
      },
      {
        hint_order: 3,
        content: "Use DISTINCT message_id from message_attachments.",
      },
    ],
  },
  {
    code: "CHAT_034",
    hints: [
      {
        hint_order: 1,
        content: "Find users inactive for more than 30 days.",
      },
      {
        hint_order: 2,
        content: "Compare last_seen_at to a 30 day cutoff.",
      },
      {
        hint_order: 3,
        content: "Use WHERE last_seen_at < CURRENT_DATE - INTERVAL '30 days'.",
      },
    ],
  },
  {
    code: "CHAT_035",
    hints: [
      {
        hint_order: 1,
        content: "Count participants in each call.",
      },
      {
        hint_order: 2,
        content: "Keep only calls with more than 2 participants.",
      },
      {
        hint_order: 3,
        content: "GROUP BY call_id and use HAVING COUNT(*) > 2.",
      },
    ],
  },
  {
    code: "CHAT_036",
    hints: [
      {
        hint_order: 1,
        content: "Count how many active workspaces each user belongs to.",
      },
      {
        hint_order: 2,
        content:
          "A user can appear multiple times, so count unique workspaces.",
      },
      {
        hint_order: 3,
        content: "Use COUNT(DISTINCT workspace_id) with GROUP BY user_id.",
      },
    ],
  },
  {
    code: "CHAT_037",
    hints: [
      {
        hint_order: 1,
        content: "Count reactions for each message.",
      },
      {
        hint_order: 2,
        content: "Sort from highest reaction count to lowest.",
      },
      {
        hint_order: 3,
        content: "GROUP BY message_id, ORDER BY count DESC, LIMIT 10.",
      },
    ],
  },
  {
    code: "CHAT_038",
    hints: [
      {
        hint_order: 1,
        content: "Only unread notifications should be counted.",
      },
      {
        hint_order: 2,
        content: "Group those unread rows by user_id.",
      },
      {
        hint_order: 3,
        content: "Use COUNT(*) with WHERE is_read = false.",
      },
    ],
  },
  {
    code: "CHAT_039",
    hints: [
      {
        hint_order: 1,
        content: "Count how many times each user was mentioned.",
      },
      {
        hint_order: 2,
        content: "The mentioned user id is the grouping key.",
      },
      {
        hint_order: 3,
        content: "GROUP BY mentioned_user_id and COUNT(*).",
      },
    ],
  },
  {
    code: "CHAT_040",
    hints: [
      {
        hint_order: 1,
        content: "First count replies for each parent message.",
      },
      {
        hint_order: 2,
        content: "Then average those reply counts.",
      },
      {
        hint_order: 3,
        content: "Use a CTE or subquery, then AVG(reply_count).",
      },
    ],
  },
  {
    code: "CHAT_041",
    hints: [
      {
        hint_order: 1,
        content: "Count non-deleted messages per sender.",
      },
      {
        hint_order: 2,
        content: "Sort by highest message count first.",
      },
      {
        hint_order: 3,
        content: "GROUP BY sender_member_id and LIMIT 10.",
      },
    ],
  },
  {
    code: "CHAT_042",
    hints: [
      {
        hint_order: 1,
        content: "Find channels with no matching messages.",
      },
      {
        hint_order: 2,
        content: "Start from channels and keep rows with zero joined messages.",
      },
      {
        hint_order: 3,
        content: "Use LEFT JOIN messages and HAVING COUNT(m.id) = 0.",
      },
    ],
  },
  {
    code: "CHAT_043",
    hints: [
      {
        hint_order: 1,
        content: "Start from active workspace members.",
      },
      {
        hint_order: 2,
        content: "Check which of them never sent a message.",
      },
      {
        hint_order: 3,
        content:
          "LEFT JOIN messages on sender_member_id and keep COUNT(m.id) = 0.",
      },
    ],
  },
  {
    code: "CHAT_044",
    hints: [
      {
        hint_order: 1,
        content: "First count messages in each channel.",
      },
      {
        hint_order: 2,
        content: "Then average those channel-level counts.",
      },
      {
        hint_order: 3,
        content: "Use a CTE or subquery with AVG(message_count).",
      },
    ],
  },
  {
    code: "CHAT_045",
    hints: [
      {
        hint_order: 1,
        content: "Count non-deleted messages per channel.",
      },
      {
        hint_order: 2,
        content: "Only keep channels above a threshold of 100.",
      },
      {
        hint_order: 3,
        content: "Use GROUP BY channel_id and HAVING COUNT(*) > 100.",
      },
    ],
  },
  {
    code: "CHAT_046",
    hints: [
      {
        hint_order: 1,
        content: "Find members who appear in both messages and reactions.",
      },
      {
        hint_order: 2,
        content: "You need the overlap between senders and reactors.",
      },
      {
        hint_order: 3,
        content: "JOIN on member id and use DISTINCT.",
      },
    ],
  },
  {
    code: "CHAT_047",
    hints: [
      {
        hint_order: 1,
        content: "Count non-deleted messages per workspace.",
      },
      {
        hint_order: 2,
        content: "Sort by total messages descending.",
      },
      {
        hint_order: 3,
        content: "GROUP BY workspace_id and LIMIT 10.",
      },
    ],
  },
  {
    code: "CHAT_048",
    hints: [
      {
        hint_order: 1,
        content: "First count reactions for each reacted message.",
      },
      {
        hint_order: 2,
        content: "Then average those counts.",
      },
      {
        hint_order: 3,
        content: "Use a CTE or subquery, then AVG(reaction_count).",
      },
    ],
  },
  {
    code: "CHAT_049",
    hints: [
      {
        hint_order: 1,
        content: "You need only private channels.",
      },
      {
        hint_order: 2,
        content:
          "Join channel memberships with channels, then filter active memberships.",
      },
      {
        hint_order: 3,
        content:
          "GROUP BY channel_id after filtering c.visibility = 'private' and membership_status = 'active'.",
      },
    ],
  },
  {
    code: "CHAT_050",
    hints: [
      {
        hint_order: 1,
        content: "Count active owners in each workspace.",
      },
      {
        hint_order: 2,
        content: "Filter both membership_status and workspace_role.",
      },
      {
        hint_order: 3,
        content:
          "Use WHERE membership_status = 'active' AND workspace_role = 'owner'.",
      },
    ],
  },
  {
    code: "CHAT_051",
    hints: [
      {
        hint_order: 1,
        content: "Count unique senders in each channel.",
      },
      {
        hint_order: 2,
        content: "A sender may post many times, so use DISTINCT.",
      },
      {
        hint_order: 3,
        content: "COUNT(DISTINCT sender_member_id) grouped by channel_id.",
      },
    ],
  },
  {
    code: "CHAT_052",
    hints: [
      {
        hint_order: 1,
        content: "Count how many active channels each member belongs to.",
      },
      {
        hint_order: 2,
        content: "Use unique channel ids per member.",
      },
      {
        hint_order: 3,
        content:
          "GROUP BY member_id and HAVING COUNT(DISTINCT channel_id) > 3.",
      },
    ],
  },
  {
    code: "CHAT_053",
    hints: [
      {
        hint_order: 1,
        content: "Find channels with no active memberships.",
      },
      {
        hint_order: 2,
        content: "Join only active channel_members rows.",
      },
      {
        hint_order: 3,
        content:
          "Use LEFT JOIN with membership_status = 'active' in the join condition, then HAVING COUNT(cm.id) = 0.",
      },
    ],
  },
  {
    code: "CHAT_054",
    hints: [
      {
        hint_order: 1,
        content: "Build two workspace-level metrics first.",
      },
      {
        hint_order: 2,
        content:
          "One is total non-deleted messages, the other is active member count.",
      },
      {
        hint_order: 3,
        content: "Join those counts and divide messages by active members.",
      },
    ],
  },
  {
    code: "CHAT_055",
    hints: [
      {
        hint_order: 1,
        content: "Count mentions per message.",
      },
      {
        hint_order: 2,
        content: "Sort by the highest mention count.",
      },
      {
        hint_order: 3,
        content: "GROUP BY message_id and LIMIT 10.",
      },
    ],
  },
  {
    code: "CHAT_056",
    hints: [
      {
        hint_order: 1,
        content:
          "A mention belongs to a message, and the message belongs to a workspace.",
      },
      {
        hint_order: 2,
        content: "Count distinct workspaces per mentioned user.",
      },
      {
        hint_order: 3,
        content:
          "JOIN message_mentions to messages, then COUNT(DISTINCT workspace_id).",
      },
    ],
  },
  {
    code: "CHAT_057",
    hints: [
      {
        hint_order: 1,
        content: "You need channels where many messages have attachments.",
      },
      {
        hint_order: 2,
        content: "Join attachments to messages to get the channel.",
      },
      {
        hint_order: 3,
        content:
          "COUNT(DISTINCT message_id) per channel and keep counts above 20.",
      },
    ],
  },
  {
    code: "CHAT_058",
    hints: [
      {
        hint_order: 1,
        content: "Count non-deleted messages per conversation.",
      },
      {
        hint_order: 2,
        content:
          "Only direct conversations are represented by non-NULL conversation_id here.",
      },
      {
        hint_order: 3,
        content: "GROUP BY conversation_id and LIMIT 10.",
      },
    ],
  },
  {
    code: "CHAT_059",
    hints: [
      {
        hint_order: 1,
        content: "Count muted channels per member.",
      },
      {
        hint_order: 2,
        content: "Only muted preferences should be counted.",
      },
      {
        hint_order: 3,
        content:
          "Use WHERE is_muted = true, GROUP BY member_id, HAVING COUNT(*) > 2.",
      },
    ],
  },
  {
    code: "CHAT_060",
    hints: [
      {
        hint_order: 1,
        content: "Count invite statuses per workspace in one query.",
      },
      {
        hint_order: 2,
        content: "You need separate counts for accepted and pending.",
      },
      {
        hint_order: 3,
        content:
          "Use COUNT(*) FILTER (WHERE invite_status = ...) grouped by workspace_id.",
      },
    ],
  },
  {
    code: "CHAT_061",
    hints: [
      {
        hint_order: 1,
        content: "Count messages per member for each day.",
      },
      {
        hint_order: 2,
        content: "Use DATE(sent_at) along with sender_member_id.",
      },
      {
        hint_order: 3,
        content:
          "GROUP BY sender_member_id and DATE(sent_at), then rank each member’s days.",
      },
    ],
  },
  {
    code: "CHAT_062",
    hints: [
      {
        hint_order: 1,
        content: "Find each member’s first message date in every workspace.",
      },
      {
        hint_order: 2,
        content: "Compare all message dates to the earliest one.",
      },
      {
        hint_order: 3,
        content:
          "Use MIN(sent_at) grouped by workspace_id and sender_member_id.",
      },
    ],
  },
  {
    code: "CHAT_063",
    hints: [
      {
        hint_order: 1,
        content:
          "You need the time gap between consecutive messages in a channel.",
      },
      {
        hint_order: 2,
        content: "Window functions help compare current and previous rows.",
      },
      {
        hint_order: 3,
        content:
          "Use LAG(sent_at) OVER (PARTITION BY channel_id ORDER BY sent_at).",
      },
    ],
  },
  {
    code: "CHAT_064",
    hints: [
      {
        hint_order: 1,
        content: "Find the first message sent by each member in a channel.",
      },
      {
        hint_order: 2,
        content: "Rank messages inside each channel-member group.",
      },
      {
        hint_order: 3,
        content:
          "Use ROW_NUMBER() OVER (PARTITION BY channel_id, sender_member_id ORDER BY sent_at).",
      },
    ],
  },
  {
    code: "CHAT_065",
    hints: [
      {
        hint_order: 1,
        content: "You need a running total of messages over time.",
      },
      {
        hint_order: 2,
        content: "Partition by channel and order by sent_at.",
      },
      {
        hint_order: 3,
        content:
          "Use COUNT(*) OVER (PARTITION BY channel_id ORDER BY sent_at).",
      },
    ],
  },
  {
    code: "CHAT_066",
    hints: [
      {
        hint_order: 1,
        content:
          "Compare each channel’s message count to the workspace average.",
      },
      {
        hint_order: 2,
        content: "First calculate channel-level counts.",
      },
      {
        hint_order: 3,
        content: "Use AVG(message_count) OVER (PARTITION BY workspace_id).",
      },
    ],
  },
  {
    code: "CHAT_067",
    hints: [
      {
        hint_order: 1,
        content: "Rank members by messages sent inside each workspace.",
      },
      {
        hint_order: 2,
        content: "Count messages per member first.",
      },
      {
        hint_order: 3,
        content:
          "Use DENSE_RANK() partitioned by workspace_id ordered by count DESC.",
      },
    ],
  },
  {
    code: "CHAT_068",
    hints: [
      {
        hint_order: 1,
        content: "You need the most recent message in each channel.",
      },
      {
        hint_order: 2,
        content: "Rank messages by sent_at descending.",
      },
      {
        hint_order: 3,
        content:
          "Use ROW_NUMBER() OVER (PARTITION BY channel_id ORDER BY sent_at DESC).",
      },
    ],
  },
  {
    code: "CHAT_069",
    hints: [
      {
        hint_order: 1,
        content: "Find channels where daily activity keeps increasing.",
      },
      {
        hint_order: 2,
        content: "Compare each day’s count to the previous day.",
      },
      {
        hint_order: 3,
        content: "Use LAG(daily_count) after grouping by channel and date.",
      },
    ],
  },
  {
    code: "CHAT_070",
    hints: [
      {
        hint_order: 1,
        content: "Track member message streaks across consecutive days.",
      },
      {
        hint_order: 2,
        content: "First build daily activity rows.",
      },
      {
        hint_order: 3,
        content:
          "Use ROW_NUMBER() with date difference logic for streak grouping.",
      },
    ],
  },
  {
    code: "CHAT_071",
    hints: [
      {
        hint_order: 1,
        content: "Find channels with the longest reply chains.",
      },
      {
        hint_order: 2,
        content: "Parent-child message relationships form a hierarchy.",
      },
      {
        hint_order: 3,
        content: "Use a recursive CTE starting from parent_message_id IS NULL.",
      },
    ],
  },
  {
    code: "CHAT_072",
    hints: [
      {
        hint_order: 1,
        content: "You need workspace-level daily message growth.",
      },
      {
        hint_order: 2,
        content: "Compare each day to the previous day in the same workspace.",
      },
      {
        hint_order: 3,
        content: "Use LAG() after grouping by workspace_id and date.",
      },
    ],
  },
  {
    code: "CHAT_073",
    hints: [
      {
        hint_order: 1,
        content: "Find top reaction-generating messages per channel.",
      },
      {
        hint_order: 2,
        content: "Count reactions for each message first.",
      },
      {
        hint_order: 3,
        content: "Use DENSE_RANK() partitioned by channel_id.",
      },
    ],
  },
  {
    code: "CHAT_074",
    hints: [
      {
        hint_order: 1,
        content: "You need cumulative active members by date.",
      },
      {
        hint_order: 2,
        content: "First derive first active date per member.",
      },
      {
        hint_order: 3,
        content:
          "Use COUNT(*) OVER (PARTITION BY workspace_id ORDER BY activity_date).",
      },
    ],
  },
  {
    code: "CHAT_075",
    hints: [
      {
        hint_order: 1,
        content: "Compare message count percentile inside each workspace.",
      },
      {
        hint_order: 2,
        content: "Use an ordered-set aggregate.",
      },
      {
        hint_order: 3,
        content:
          "Try PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY message_count).",
      },
    ],
  },
  {
    code: "CHAT_076",
    hints: [
      {
        hint_order: 1,
        content: "Find the longest inactive gap for each member.",
      },
      {
        hint_order: 2,
        content: "Compare each message time to the previous one.",
      },
      {
        hint_order: 3,
        content: "Use LAG(sent_at) partitioned by sender_member_id.",
      },
    ],
  },
  {
    code: "CHAT_077",
    hints: [
      {
        hint_order: 1,
        content: "Find the busiest hour for each channel.",
      },
      {
        hint_order: 2,
        content: "Extract the hour from sent_at.",
      },
      {
        hint_order: 3,
        content:
          "GROUP BY channel_id and EXTRACT(HOUR FROM sent_at), then rank.",
      },
    ],
  },
  {
    code: "CHAT_078",
    hints: [
      {
        hint_order: 1,
        content: "Measure reaction growth week over week.",
      },
      {
        hint_order: 2,
        content: "Aggregate reactions by week first.",
      },
      {
        hint_order: 3,
        content: "Use DATE_TRUNC('week', created_at) and LAG().",
      },
    ],
  },
  {
    code: "CHAT_079",
    hints: [
      {
        hint_order: 1,
        content: "Find members whose activity increased 3 days in a row.",
      },
      {
        hint_order: 2,
        content: "Daily counts need previous-day comparison.",
      },
      {
        hint_order: 3,
        content: "Use LAG() and streak grouping logic.",
      },
    ],
  },
  {
    code: "CHAT_080",
    hints: [
      {
        hint_order: 1,
        content: "Find top channels by rolling 7-day average activity.",
      },
      {
        hint_order: 2,
        content: "Window frames are useful here.",
      },
      {
        hint_order: 3,
        content:
          "Use AVG(daily_count) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW).",
      },
    ],
  },
  {
    code: "CHAT_081",
    hints: [
      {
        hint_order: 1,
        content: "Compare reply count vs top-level messages per channel.",
      },
      {
        hint_order: 2,
        content: "Use conditional counting.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) FILTER (WHERE parent_message_id IS NOT NULL).",
      },
    ],
  },
  {
    code: "CHAT_082",
    hints: [
      {
        hint_order: 1,
        content: "Find members active across the most channels.",
      },
      {
        hint_order: 2,
        content: "A member can post multiple times in one channel.",
      },
      {
        hint_order: 3,
        content: "COUNT(DISTINCT channel_id) grouped by sender_member_id.",
      },
    ],
  },
  {
    code: "CHAT_083",
    hints: [
      {
        hint_order: 1,
        content: "Find channels where weekend traffic exceeds weekday traffic.",
      },
      {
        hint_order: 2,
        content: "Separate weekend vs weekday counts.",
      },
      {
        hint_order: 3,
        content: "Use FILTER with EXTRACT(ISODOW FROM sent_at).",
      },
    ],
  },
  {
    code: "CHAT_084",
    hints: [
      {
        hint_order: 1,
        content: "Compare direct messages sent vs received.",
      },
      {
        hint_order: 2,
        content: "Group by user from both sender and recipient sides.",
      },
      {
        hint_order: 3,
        content: "Use UNION ALL or separate CTEs, then compare totals.",
      },
    ],
  },
  {
    code: "CHAT_085",
    hints: [
      {
        hint_order: 1,
        content:
          "Find workspaces with the highest retention after invite acceptance.",
      },
      {
        hint_order: 2,
        content: "Accepted invites should be compared with active members.",
      },
      {
        hint_order: 3,
        content: "Join invites and workspace_members, then calculate a ratio.",
      },
    ],
  },
  {
    code: "CHAT_086",
    hints: [
      {
        hint_order: 1,
        content: "Find members with above-average reply activity.",
      },
      {
        hint_order: 2,
        content: "Count replies per member first.",
      },
      {
        hint_order: 3,
        content: "Compare to AVG(reply_count) over all members.",
      },
    ],
  },
  {
    code: "CHAT_087",
    hints: [
      {
        hint_order: 1,
        content: "Find channels where reactions exceed messages.",
      },
      {
        hint_order: 2,
        content: "Build two counts per channel.",
      },
      {
        hint_order: 3,
        content: "Join message count and reaction count CTEs, then compare.",
      },
    ],
  },
  {
    code: "CHAT_088",
    hints: [
      {
        hint_order: 1,
        content: "Find users active in every workspace channel.",
      },
      {
        hint_order: 2,
        content: "Compare member’s distinct channel count to workspace total.",
      },
      {
        hint_order: 3,
        content:
          "Use COUNT(DISTINCT channel_id) and compare with total channels.",
      },
    ],
  },
  {
    code: "CHAT_089",
    hints: [
      {
        hint_order: 1,
        content: "Find members whose activity rank improved week over week.",
      },
      {
        hint_order: 2,
        content: "Rank each week separately first.",
      },
      {
        hint_order: 3,
        content: "Use DENSE_RANK() by week, then compare with LAG(rank).",
      },
    ],
  },
  {
    code: "CHAT_090",
    hints: [
      {
        hint_order: 1,
        content: "Find workspaces with strong growth momentum.",
      },
      {
        hint_order: 2,
        content: "Use consecutive weekly growth streaks.",
      },
      {
        hint_order: 3,
        content: "Combine LAG() with streak grouping logic.",
      },
    ],
  },
  {
    code: "CHAT_091",
    hints: [
      {
        hint_order: 1,
        content: "Compare message counts between two 30-day windows.",
      },
      {
        hint_order: 2,
        content: "Build current and previous period counts separately.",
      },
      {
        hint_order: 3,
        content: "Use two CTEs and subtract previous_count from current_count.",
      },
    ],
  },
  {
    code: "CHAT_092",
    hints: [
      {
        hint_order: 1,
        content: "You need thread depth and total replies.",
      },
      {
        hint_order: 2,
        content: "Message replies form a recursive hierarchy.",
      },
      {
        hint_order: 3,
        content: "Use a recursive CTE and compute MAX(depth) with COUNT(*).",
      },
    ],
  },
  {
    code: "CHAT_093",
    hints: [
      {
        hint_order: 1,
        content: "Interaction score combines multiple metrics.",
      },
      {
        hint_order: 2,
        content: "Count messages, reactions, and replies separately.",
      },
      {
        hint_order: 3,
        content: "Join the three channel-level aggregates and add them.",
      },
    ],
  },
  {
    code: "CHAT_094",
    hints: [
      {
        hint_order: 1,
        content: "Find members active in every workspace channel.",
      },
      {
        hint_order: 2,
        content:
          "Compare each member’s distinct channels to workspace total channels.",
      },
      {
        hint_order: 3,
        content: "Use COUNT(DISTINCT channel_id) = total_channels.",
      },
    ],
  },
  {
    code: "CHAT_095",
    hints: [
      {
        hint_order: 1,
        content: "Measure reply velocity over the last 7 days.",
      },
      {
        hint_order: 2,
        content: "Convert total replies into an hourly rate.",
      },
      {
        hint_order: 3,
        content: "Divide reply_count by 168 (7 * 24).",
      },
    ],
  },
  {
    code: "CHAT_096",
    hints: [
      {
        hint_order: 1,
        content: "Track mention counts week by week.",
      },
      {
        hint_order: 2,
        content: "Use LAG() to compare with the previous week.",
      },
      {
        hint_order: 3,
        content: "Detect streaks of increasing weekly mention counts.",
      },
    ],
  },
  {
    code: "CHAT_097",
    hints: [
      {
        hint_order: 1,
        content: "Compare both sides of each direct conversation pair.",
      },
      {
        hint_order: 2,
        content: "Normalize the pair using LEAST and GREATEST.",
      },
      {
        hint_order: 3,
        content: "Compare sender-side counts using ABS(MAX - MIN).",
      },
    ],
  },
  {
    code: "CHAT_098",
    hints: [
      {
        hint_order: 1,
        content: "Track workspace weekly message growth.",
      },
      {
        hint_order: 2,
        content: "Use week-over-week comparisons.",
      },
      {
        hint_order: 3,
        content:
          "Use LAG() and streak grouping for 4+ consecutive growth weeks.",
      },
    ],
  },
  {
    code: "CHAT_099",
    hints: [
      {
        hint_order: 1,
        content: "Find members above the 90th percentile.",
      },
      {
        hint_order: 2,
        content: "First calculate message counts per member.",
      },
      {
        hint_order: 3,
        content: "Use PERCENTILE_CONT(0.9) WITHIN GROUP.",
      },
    ],
  },
  {
    code: "CHAT_100",
    hints: [
      {
        hint_order: 1,
        content: "Find members active across multiple workspaces.",
      },
      {
        hint_order: 2,
        content: "Only count workspaces where they sent at least 50 messages.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(*) >= 50, then count distinct workspaces.",
      },
    ],
  },
];

export const conceptFilters = [
  {
    code: "CHAT_001",
    concepts: ["aggregation", "count"],
  },
  {
    code: "CHAT_002",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "CHAT_003",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "CHAT_004",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "CHAT_005",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "CHAT_006",
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
    code: "CHAT_007",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "CHAT_008",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "CHAT_009",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "CHAT_010",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "CHAT_011",
    concepts: ["sorting"],
  },
  {
    code: "CHAT_012",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "CHAT_013",
    concepts: ["joins", "filtering", "distinct", "sorting", "comparison"],
  },
  {
    code: "CHAT_014",
    concepts: [
      "aggregation",
      "count",
      "filtering",
      "date_functions",
      "comparison",
    ],
  },
  {
    code: "CHAT_015",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "CHAT_016",
    concepts: ["filtering", "date_functions", "sorting", "comparison"],
  },
  {
    code: "CHAT_017",
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
    code: "CHAT_018",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "CHAT_019",
    concepts: ["joins", "filtering", "distinct", "sorting", "comparison"],
  },
  {
    code: "CHAT_020",
    concepts: ["filtering", "null_handling", "sorting"],
  },
  {
    code: "CHAT_021",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_022",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_023",
    concepts: ["filtering", "date_functions", "sorting", "comparison"],
  },
  {
    code: "CHAT_024",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "CHAT_025",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "CHAT_026",
    concepts: ["filtering", "date_functions", "sorting", "comparison"],
  },
  {
    code: "CHAT_027",
    concepts: ["filtering", "null_handling", "sorting"],
  },
  {
    code: "CHAT_028",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "CHAT_029",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "CHAT_030",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "CHAT_031",
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
    code: "CHAT_032",
    concepts: ["distinct", "sorting"],
  },
  {
    code: "CHAT_033",
    concepts: ["distinct", "sorting"],
  },
  {
    code: "CHAT_034",
    concepts: ["filtering", "date_functions", "sorting", "comparison"],
  },
  {
    code: "CHAT_035",
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
    code: "CHAT_036",
    concepts: [
      "filtering",
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_037",
    concepts: ["aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "CHAT_038",
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
    code: "CHAT_039",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "CHAT_040",
    concepts: [
      "cte",
      "aggregation",
      "count",
      "average",
      "group_by",
      "filtering",
      "calculation",
    ],
  },
  {
    code: "CHAT_041",
    concepts: [
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
      "comparison",
    ],
  },
  {
    code: "CHAT_042",
    concepts: [
      "joins",
      "left_join",
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_043",
    concepts: [
      "joins",
      "left_join",
      "filtering",
      "distinct",
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_044",
    concepts: [
      "cte",
      "aggregation",
      "count",
      "average",
      "group_by",
      "filtering",
      "null_handling",
      "calculation",
    ],
  },
  {
    code: "CHAT_045",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_046",
    concepts: ["joins", "distinct", "sorting"],
  },
  {
    code: "CHAT_047",
    concepts: [
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
      "comparison",
    ],
  },
  {
    code: "CHAT_048",
    concepts: [
      "cte",
      "aggregation",
      "count",
      "average",
      "group_by",
      "calculation",
    ],
  },
  {
    code: "CHAT_049",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_050",
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
    code: "CHAT_051",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count_distinct",
      "group_by",
      "sorting",
      "limit",
      "comparison",
    ],
  },
  {
    code: "CHAT_052",
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
    code: "CHAT_053",
    concepts: [
      "joins",
      "left_join",
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_054",
    concepts: [
      "cte",
      "left_join",
      "aggregation",
      "count",
      "group_by",
      "null_handling",
      "arithmetic",
      "calculation",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_055",
    concepts: ["aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "CHAT_056",
    concepts: [
      "joins",
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_057",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count_distinct",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_058",
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
    code: "CHAT_059",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_060",
    concepts: [
      "aggregation",
      "count",
      "group_by",
      "conditional_aggregation",
      "sorting",
    ],
  },
  {
    code: "CHAT_061",
    concepts: [
      "cte",
      "aggregation",
      "count",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "sorting",
      "filtering",
      "comparison",
    ],
  },
  {
    code: "CHAT_062",
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
      "filtering",
      "comparison",
    ],
  },
  {
    code: "CHAT_063",
    concepts: [
      "cte",
      "aggregation",
      "count",
      "average",
      "group_by",
      "joins",
      "filtering",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "CHAT_064",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "min",
      "date_difference",
      "date_functions",
      "arithmetic",
      "calculation",
      "sorting",
      "limit",
    ],
  },
  {
    code: "CHAT_065",
    concepts: ["aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "CHAT_066",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "group_by",
      "having",
      "conditional_aggregation",
      "arithmetic",
      "calculation",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_067",
    concepts: [
      "joins",
      "left_join",
      "distinct",
      "aggregation",
      "count",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_068",
    concepts: [
      "filtering",
      "date_functions",
      "aggregation",
      "count",
      "group_by",
      "trend_analysis",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_069",
    concepts: [
      "cte",
      "aggregation",
      "count",
      "average",
      "group_by",
      "filtering",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "CHAT_070",
    concepts: [
      "filtering",
      "date_functions",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "CHAT_071",
    concepts: [
      "cte",
      "filtering",
      "distinct",
      "date_functions",
      "window_functions",
      "row_number",
      "partition_by",
      "aggregation",
      "count",
      "group_by",
      "having",
      "pattern_detection",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_072",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "min",
      "average",
      "date_difference",
      "date_functions",
      "arithmetic",
      "calculation",
      "filtering",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_073",
    concepts: [
      "cte",
      "filtering",
      "null_handling",
      "aggregation",
      "count",
      "average",
      "group_by",
      "joins",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "CHAT_074",
    concepts: [
      "self_join",
      "joins",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "CHAT_075",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "average",
      "group_by",
      "filtering",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "CHAT_076",
    concepts: [
      "cte",
      "aggregation",
      "count",
      "group_by",
      "window_functions",
      "row_number",
      "partition_by",
      "filtering",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_077",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "max",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "CHAT_078",
    concepts: [
      "cte",
      "self_join",
      "joins",
      "left_join",
      "aggregation",
      "count",
      "average",
      "group_by",
      "null_handling",
      "filtering",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "CHAT_079",
    concepts: [
      "cte",
      "date_functions",
      "aggregation",
      "count",
      "sum",
      "group_by",
      "window_functions",
      "partition_by",
      "moving_average",
      "sorting",
    ],
  },
  {
    code: "CHAT_080",
    concepts: [
      "cte",
      "date_functions",
      "aggregation",
      "count",
      "group_by",
      "lag",
      "lag_lead",
      "window_functions",
      "partition_by",
      "case_when",
      "row_number",
      "having",
      "pattern_detection",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_081",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "min",
      "ordered_set_aggregate",
      "percentile",
      "group_by",
      "date_difference",
      "date_functions",
      "arithmetic",
      "calculation",
      "sorting",
      "limit",
    ],
  },
  {
    code: "CHAT_082",
    concepts: [
      "cte",
      "joins",
      "filtering",
      "aggregation",
      "count",
      "count_distinct",
      "group_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_083",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "group_by",
      "null_handling",
      "conditional_aggregation",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_084",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "row_number",
      "window_functions",
      "partition_by",
      "group_by",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_085",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "average",
      "group_by",
      "null_handling",
      "filtering",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "CHAT_086",
    concepts: [
      "cte",
      "joins",
      "left_join",
      "aggregation",
      "count",
      "max",
      "group_by",
      "null_handling",
      "filtering",
      "date_functions",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_087",
    concepts: [
      "cte",
      "self_join",
      "joins",
      "aggregation",
      "count",
      "group_by",
      "conditional_aggregation",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_088",
    concepts: [
      "cte",
      "aggregation",
      "count",
      "sum",
      "max",
      "group_by",
      "arithmetic",
      "calculation",
      "filtering",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_089",
    concepts: [
      "cte",
      "date_functions",
      "aggregation",
      "count",
      "group_by",
      "lag",
      "lag_lead",
      "window_functions",
      "partition_by",
      "row_number",
      "having",
      "pattern_detection",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_090",
    concepts: [
      "cte",
      "self_join",
      "joins",
      "ordered_set_aggregate",
      "percentile",
      "group_by",
      "date_difference",
      "date_functions",
      "arithmetic",
      "calculation",
      "filtering",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_091",
    concepts: [
      "cte",
      "aggregation",
      "count",
      "group_by",
      "null_handling",
      "arithmetic",
      "calculation",
      "date_functions",
      "sorting",
      "limit",
    ],
  },
  {
    code: "CHAT_092",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "max",
      "count",
      "distinct",
      "group_by",
      "filtering",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_093",
    concepts: [
      "cte",
      "joins",
      "aggregation",
      "count",
      "null_handling",
      "arithmetic",
      "calculation",
      "sorting",
      "limit",
    ],
  },
  {
    code: "CHAT_094",
    concepts: [
      "cte",
      "aggregation",
      "count_distinct",
      "count",
      "group_by",
      "joins",
      "filtering",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_095",
    concepts: [
      "cte",
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "arithmetic",
      "calculation",
      "date_functions",
      "sorting",
      "limit",
    ],
  },
  {
    code: "CHAT_096",
    concepts: [
      "cte",
      "joins",
      "date_functions",
      "aggregation",
      "count",
      "group_by",
      "lag",
      "lag_lead",
      "window_functions",
      "partition_by",
      "case_when",
      "row_number",
      "having",
      "pattern_detection",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_097",
    concepts: [
      "cte",
      "date_functions",
      "aggregation",
      "count",
      "group_by",
      "arithmetic",
      "calculation",
      "sorting",
      "limit",
    ],
  },
  {
    code: "CHAT_098",
    concepts: [
      "cte",
      "date_functions",
      "aggregation",
      "count",
      "group_by",
      "lag",
      "lag_lead",
      "window_functions",
      "partition_by",
      "case_when",
      "row_number",
      "having",
      "pattern_detection",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_099",
    concepts: [
      "cte",
      "aggregation",
      "count",
      "ordered_set_aggregate",
      "percentile",
      "group_by",
      "filtering",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "CHAT_100",
    concepts: [
      "cte",
      "filtering",
      "aggregation",
      "count",
      "count_distinct",
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
    code: "CHAT_001",
    approaches: [
      {
        approach_title: "COUNT all",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS active_users FROM users WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nCOUNT all\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS active_users FROM users WHERE is_active = true;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query: "SELECT COUNT(id) AS active_users FROM users WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nCOUNT id\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(id) AS active_users FROM users WHERE is_active = true;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "CHAT_002",
    approaches: [
      {
        approach_title: "Filter active",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, workspace_name, workspace_type FROM workspaces WHERE is_active = true;",
        explanation:
          "## 🧠 Approach\n\nFilter active\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_name, workspace_type FROM workspaces WHERE is_active = true;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, workspace_name, workspace_type FROM workspaces WHERE is_active;",
        explanation:
          "## 🧠 Approach\n\nBoolean shorthand\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_name, workspace_type FROM workspaces WHERE is_active;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, workspace_name, workspace_type FROM workspaces WHERE is_active IS TRUE;",
        explanation:
          "## 🧠 Approach\n\nFILTER count\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_name, workspace_type FROM workspaces WHERE is_active IS TRUE;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 4,
        query:
          "SELECT id, workspace_name, workspace_type FROM (SELECT id, workspace_name, workspace_type FROM workspaces WHERE is_active = true) active_workspaces;",
        explanation:
          "## 🧠 Approach\n\nSUM CASE\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_name, workspace_type FROM (SELECT id, workspace_name, workspace_type FROM workspaces WHERE is_active = true) active_workspaces;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "CHAT_003",
    approaches: [
      {
        approach_title: "Filter verified",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, full_name, email FROM users WHERE is_verified = true;",
        explanation:
          "## 🧠 Approach\n\nFilter users whose verification flag is true.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, email\nFROM users\nWHERE is_verified = true;\n```\n\n## 🔍 Explanation\n\n- `WHERE is_verified = true` keeps verified users only.\n- The selected columns match the required output exactly.\n- No sorting is needed because order is not configured for this question.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query: "SELECT id, full_name, email FROM users WHERE is_verified;",
        explanation:
          "## 🧠 Approach\n\nUse the boolean column directly in the `WHERE` clause.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, email\nFROM users\nWHERE is_verified;\n```\n\n## 🔍 Explanation\n\n- PostgreSQL allows boolean columns to be used directly as predicates.\n- This keeps rows where `is_verified` is true.\n- False and null values are excluded.",
      },
      {
        approach_title: "IS TRUE",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, full_name, email FROM users WHERE is_verified IS TRUE;",
        explanation:
          "## 🧠 Approach\n\nUse `IS TRUE` for an explicit boolean check.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, email\nFROM users\nWHERE is_verified IS TRUE;\n```\n\n## 🔍 Explanation\n\n- `IS TRUE` explicitly keeps true boolean values.\n- It excludes false and null values.\n- This is clear when the boolean column may be nullable.",
      },
    ],
  },
  {
    code: "CHAT_004",
    approaches: [
      {
        approach_title: "Filter public",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, workspace_id, channel_name FROM channels WHERE visibility = 'public';",
        explanation:
          "## 🧠 Approach\n\nFilter channels where visibility is public.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, channel_name\nFROM channels\nWHERE visibility = 'public';\n```\n\n## 🔍 Explanation\n\n- `channels` stores channel records.\n- `WHERE visibility = 'public'` keeps only public channels.\n- The output includes channel id, workspace id, and channel name.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, workspace_id, channel_name FROM channels WHERE visibility IN ('public');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` for the visibility filter.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, channel_name\nFROM channels\nWHERE visibility IN ('public');\n```\n\n## 🔍 Explanation\n\n- `IN ('public')` is equivalent to `= 'public'` for a single value.\n- This style is useful when filtering for multiple visibility values.\n- For one value, equality is simpler.",
      },
    ],
  },
  {
    code: "CHAT_005",
    approaches: [
      {
        approach_title: "Filter bots",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query: "SELECT id, full_name, username FROM users WHERE is_bot = true;",
        explanation:
          "## 🧠 Approach\n\nFilter users whose bot flag is true.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, username\nFROM users\nWHERE is_bot = true;\n```\n\n## 🔍 Explanation\n\n- `WHERE is_bot = true` keeps only bot users.\n- The selected columns match the required output.\n- This is the clearest beginner-friendly form.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query: "SELECT id, full_name, username FROM users WHERE is_bot;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand for bot users.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, username\nFROM users\nWHERE is_bot;\n```\n\n## 🔍 Explanation\n\n- `WHERE is_bot` means the same as `WHERE is_bot = true`.\n- It excludes users where `is_bot` is false or null.\n- It is concise but may be less explicit for new SQL learners.",
      },
      {
        approach_title: "IS TRUE",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, full_name, username FROM users WHERE is_bot IS TRUE;",
        explanation:
          "## 🧠 Approach\n\nUse `IS TRUE` to explicitly test the boolean value.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, username\nFROM users\nWHERE is_bot IS TRUE;\n```\n\n## 🔍 Explanation\n\n- `IS TRUE` keeps only true values.\n- False and null values are excluded.\n- This is useful when boolean null handling should be explicit.",
      },
    ],
  },
  {
    code: "CHAT_006",
    approaches: [
      {
        approach_title: "Filter GROUP BY",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT workspace_id, COUNT(*) AS active_member_count FROM workspace_members WHERE membership_status = 'active' GROUP BY workspace_id;",
        explanation:
          "## 🧠 Approach\n\nFilter active memberships, then count them per workspace.\n\n## 🧩 Query\n\n```sql\nSELECT workspace_id, COUNT(*) AS active_member_count\nFROM workspace_members\nWHERE membership_status = 'active'\nGROUP BY workspace_id;\n```\n\n## 🔍 Explanation\n\n- `WHERE membership_status = 'active'` keeps only active memberships.\n- `GROUP BY workspace_id` creates one result row per workspace.\n- `COUNT(*)` counts active members in each workspace.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_id, COUNT(*) FILTER (WHERE membership_status = 'active') AS active_member_count FROM workspace_members GROUP BY workspace_id HAVING COUNT(*) FILTER (WHERE membership_status = 'active') > 0;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to count active memberships per workspace.\n\n## 🧩 Query\n\n```sql\nSELECT workspace_id,\n       COUNT(*) FILTER (WHERE membership_status = 'active') AS active_member_count\nFROM workspace_members\nGROUP BY workspace_id\nHAVING COUNT(*) FILTER (WHERE membership_status = 'active') > 0;\n```\n\n## 🔍 Explanation\n\n- The grouped query considers all membership rows.\n- `FILTER` counts only rows where `membership_status = 'active'`.\n- The `HAVING` clause removes workspaces with zero active members so it matches the filtered-row approach.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT workspace_id, SUM(CASE WHEN membership_status = 'active' THEN 1 ELSE 0 END) AS active_member_count FROM workspace_members GROUP BY workspace_id HAVING SUM(CASE WHEN membership_status = 'active' THEN 1 ELSE 0 END) > 0;",
        explanation:
          "## 🧠 Approach\n\nUse a conditional sum to count active memberships.\n\n## 🧩 Query\n\n```sql\nSELECT workspace_id,\n       SUM(CASE WHEN membership_status = 'active' THEN 1 ELSE 0 END) AS active_member_count\nFROM workspace_members\nGROUP BY workspace_id\nHAVING SUM(CASE WHEN membership_status = 'active' THEN 1 ELSE 0 END) > 0;\n```\n\n## 🔍 Explanation\n\n- Active memberships contribute `1`.\n- Non-active memberships contribute `0`.\n- The grouped sum gives active member count per workspace.\n- `HAVING` keeps only workspaces with at least one active member.",
      },
    ],
  },
  {
    code: "CHAT_007",
    approaches: [
      {
        approach_title: "GROUP BY workspace",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT workspace_id, COUNT(*) AS total_channels FROM channels GROUP BY workspace_id;",
        explanation:
          "## 🧠 Approach\n\nGroup channels by workspace and count them.\n\n## 🧩 Query\n\n```sql\nSELECT workspace_id, COUNT(*) AS total_channels\nFROM channels\nGROUP BY workspace_id;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY workspace_id` creates one group for each workspace.\n- `COUNT(*)` counts all channel rows in that workspace.\n- The alias `total_channels` matches the expected output.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_id, COUNT(id) AS total_channels FROM channels GROUP BY workspace_id;",
        explanation:
          "## 🧠 Approach\n\nCount channel ids per workspace.\n\n## 🧩 Query\n\n```sql\nSELECT workspace_id, COUNT(id) AS total_channels\nFROM channels\nGROUP BY workspace_id;\n```\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts non-null channel ids.\n- If `id` is the primary key, this gives the same result as `COUNT(*)`.\n- `COUNT(*)` is usually preferred when counting rows.",
      },
      {
        approach_title: "Subquery count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT workspace_id, total_channels FROM (SELECT workspace_id, COUNT(*) AS total_channels FROM channels GROUP BY workspace_id) channel_counts;",
        explanation:
          "## 🧠 Approach\n\nCalculate channel counts in a derived table, then select from it.\n\n## 🧩 Query\n\n```sql\nSELECT workspace_id, total_channels\nFROM (\n  SELECT workspace_id, COUNT(*) AS total_channels\n  FROM channels\n  GROUP BY workspace_id\n) channel_counts;\n```\n\n## 🔍 Explanation\n\n- The inner query performs the real aggregation.\n- The outer query simply returns the computed values.\n- This shape is useful when more filtering or joining is added later.",
      },
    ],
  },
  {
    code: "CHAT_008",
    approaches: [
      {
        approach_title: "Filter archived",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, workspace_id, channel_name, archived_at FROM channels WHERE is_archived = true;",
        explanation:
          "## 🧠 Approach\n\nFilter channels whose archived flag is true.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, channel_name, archived_at\nFROM channels\nWHERE is_archived = true;\n```\n\n## 🔍 Explanation\n\n- `WHERE is_archived = true` keeps archived channels.\n- The query returns the requested channel details and archive timestamp.\n- No ordering is required by the question.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, workspace_id, channel_name, archived_at FROM channels WHERE is_archived;",
        explanation:
          "## 🧠 Approach\n\nUse the boolean archived column directly in the condition.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, channel_name, archived_at\nFROM channels\nWHERE is_archived;\n```\n\n## 🔍 Explanation\n\n- In PostgreSQL, `WHERE is_archived` keeps rows where the value is true.\n- False and null values are excluded.\n- This is concise and equivalent to `is_archived = true`.",
      },
      {
        approach_title: "IS TRUE",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, workspace_id, channel_name, archived_at FROM channels WHERE is_archived IS TRUE;",
        explanation:
          "## 🧠 Approach\n\nUse `IS TRUE` for an explicit boolean check.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, channel_name, archived_at\nFROM channels\nWHERE is_archived IS TRUE;\n```\n\n## 🔍 Explanation\n\n- `IS TRUE` explicitly selects true boolean values.\n- It excludes false and null values.\n- This can be clearer when nullable booleans are possible.",
      },
    ],
  },
  {
    code: "CHAT_009",
    approaches: [
      {
        approach_title: "Two filters",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, workspace_id, sender_member_id, sent_at FROM messages WHERE contains_link = true AND is_deleted = false;",
        explanation:
          "## 🧠 Approach\n\nFilter messages that contain links and are not deleted.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, sender_member_id, sent_at\nFROM messages\nWHERE contains_link = true\n  AND is_deleted = false;\n```\n\n## 🔍 Explanation\n\n- `contains_link = true` keeps messages that include links.\n- `is_deleted = false` excludes deleted messages.\n- Both conditions must be true because they are combined with `AND`.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, workspace_id, sender_member_id, sent_at FROM messages WHERE contains_link AND NOT is_deleted;",
        explanation:
          "## 🧠 Approach\n\nUse boolean shorthand for both conditions.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, sender_member_id, sent_at\nFROM messages\nWHERE contains_link\n  AND NOT is_deleted;\n```\n\n## 🔍 Explanation\n\n- `contains_link` means the column is true.\n- `NOT is_deleted` means deleted flag is false.\n- This is concise PostgreSQL-style boolean filtering.",
      },
      {
        approach_title: "IS TRUE/FALSE",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, workspace_id, sender_member_id, sent_at FROM messages WHERE contains_link IS TRUE AND is_deleted IS FALSE;",
        explanation:
          "## 🧠 Approach\n\nUse explicit boolean truth checks for both flags.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, sender_member_id, sent_at\nFROM messages\nWHERE contains_link IS TRUE\n  AND is_deleted IS FALSE;\n```\n\n## 🔍 Explanation\n\n- `IS TRUE` includes only messages where `contains_link` is true.\n- `IS FALSE` includes only messages where `is_deleted` is false.\n- This is explicit and handles nullable boolean columns clearly.",
      },
    ],
  },
  {
    code: "CHAT_010",
    approaches: [
      {
        approach_title: "Filter direct",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS direct_conversation_count FROM conversations WHERE conversation_type = 'direct';",
        explanation:
          "## 🧠 Approach\n\nFilter direct\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS direct_conversation_count FROM conversations WHERE conversation_type = 'direct';\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) AS direct_conversation_count FROM conversations WHERE conversation_type IN ('direct');",
        explanation:
          "## 🧠 Approach\n\nIN filter\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS direct_conversation_count FROM conversations WHERE conversation_type IN ('direct');\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT COUNT(*) FILTER (WHERE conversation_type = 'direct') AS direct_conversation_count FROM conversations;",
        explanation:
          "## 🧠 Approach\n\nFILTER count\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) FILTER (WHERE conversation_type = 'direct') AS direct_conversation_count FROM conversations;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 4,
        query:
          "SELECT SUM(CASE WHEN conversation_type = 'direct' THEN 1 ELSE 0 END) AS direct_conversation_count FROM conversations;",
        explanation:
          "## 🧠 Approach\n\nSUM CASE\n\n## 🧩 Query\n\n```sql\nSELECT SUM(CASE WHEN conversation_type = 'direct' THEN 1 ELSE 0 END) AS direct_conversation_count FROM conversations;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "CHAT_011",
    approaches: [
      {
        approach_title: "Select pins",
        approach_type: "select",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT message_id, channel_id, pinned_by_member_id, pinned_at FROM message_pins;",
        explanation:
          "## 🧠 Approach\n\nRead all pinned message records directly from `message_pins`.\n\n## 🧩 Query\n\n```sql\nSELECT message_id, channel_id, pinned_by_member_id, pinned_at\nFROM message_pins;\n```\n\n## 🔍 Explanation\n\n- `message_pins` already stores one row per pinned message.\n- No filtering is required because the question asks for all pinned messages.\n- The selected columns match the required output exactly.",
      },
    ],
  },
  {
    code: "CHAT_012",
    approaches: [
      {
        approach_title: "Filter unread",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, workspace_member_id, notification_type, created_at FROM notifications WHERE is_read = false;",
        explanation:
          "## 🧠 Approach\n\nFilter notifications where the read flag is false.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_member_id, notification_type, created_at\nFROM notifications\nWHERE is_read = false;\n```\n\n## 🔍 Explanation\n\n- `WHERE is_read = false` keeps only unread notifications.\n- The query returns the notification id, related member, type, and creation time.\n- No ordering is required because the question does not specify sorted results.",
      },
      {
        approach_title: "NOT boolean",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, workspace_member_id, notification_type, created_at FROM notifications WHERE NOT is_read;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand with `NOT`.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_member_id, notification_type, created_at\nFROM notifications\nWHERE NOT is_read;\n```\n\n## 🔍 Explanation\n\n- `NOT is_read` means the notification has not been read.\n- This is equivalent to `is_read = false` when the column is not null.\n- The explicit comparison is often easier for beginners.",
      },
      {
        approach_title: "IS FALSE",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, workspace_member_id, notification_type, created_at FROM notifications WHERE is_read IS FALSE;",
        explanation:
          "## 🧠 Approach\n\nUse `IS FALSE` for an explicit boolean false check.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_member_id, notification_type, created_at\nFROM notifications\nWHERE is_read IS FALSE;\n```\n\n## 🔍 Explanation\n\n- `IS FALSE` keeps only rows where `is_read` is exactly false.\n- It excludes true and null values.\n- This is useful when boolean columns may contain nulls.",
      },
    ],
  },
  {
    code: "CHAT_013",
    approaches: [
      {
        approach_title: "JOIN online sessions",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT workspace_member_id FROM user_presence_logs WHERE presence_status = 'online' AND ended_at IS NULL;",
        explanation:
          "## 🧠 Approach\n\nJOIN online sessions\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT workspace_member_id FROM user_presence_logs WHERE presence_status = 'online' AND ended_at IS NULL;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "EXISTS online",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT upl.workspace_member_id FROM user_presence_logs upl WHERE upl.presence_status = 'online' AND upl.ended_at IS NULL AND EXISTS (SELECT 1 FROM workspace_members wm WHERE wm.id = upl.workspace_member_id);",
        explanation:
          "## 🧠 Approach\n\nEXISTS online\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT upl.workspace_member_id FROM user_presence_logs upl WHERE upl.presence_status = 'online' AND upl.ended_at IS NULL AND EXISTS (SELECT 1 FROM workspace_members wm WHERE wm.id = upl.workspace_member_id);\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "CHAT_014",
    approaches: [
      {
        approach_title: "DATE equals today",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS messages_sent_today FROM messages WHERE DATE(sent_at) = CURRENT_DATE;",
        explanation:
          "## 🧠 Approach\n\nConvert `sent_at` to a date and compare it with today's date.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS messages_sent_today\nFROM messages\nWHERE DATE(sent_at) = CURRENT_DATE;\n```\n\n## 🔍 Explanation\n\n- `DATE(sent_at)` extracts the date portion from the timestamp.\n- `CURRENT_DATE` represents today's date.\n- `COUNT(*)` counts messages sent today.\n- This matches the expected query exactly.",
      },
      {
        approach_title: "Timestamp range",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) AS messages_sent_today FROM messages WHERE sent_at >= CURRENT_DATE AND sent_at < CURRENT_DATE + INTERVAL '1 day';",
        explanation:
          "## 🧠 Approach\n\nUse a half-open timestamp range for today's messages.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS messages_sent_today\nFROM messages\nWHERE sent_at >= CURRENT_DATE\n  AND sent_at < CURRENT_DATE + INTERVAL '1 day';\n```\n\n## 🔍 Explanation\n\n- `sent_at >= CURRENT_DATE` starts at midnight today.\n- `sent_at < CURRENT_DATE + INTERVAL '1 day'` stops before midnight tomorrow.\n- This avoids applying a function to the column and is usually better for index usage.",
      },
      {
        approach_title: "DATE_TRUNC day",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT COUNT(*) AS messages_sent_today FROM messages WHERE DATE_TRUNC('day', sent_at) = DATE_TRUNC('day', CURRENT_DATE);",
        explanation:
          "## 🧠 Approach\n\nTruncate both timestamps to the day and compare them.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS messages_sent_today\nFROM messages\nWHERE DATE_TRUNC('day', sent_at) = DATE_TRUNC('day', CURRENT_DATE);\n```\n\n## 🔍 Explanation\n\n- `DATE_TRUNC('day', sent_at)` removes the time portion.\n- `DATE_TRUNC('day', CURRENT_DATE)` represents today's day boundary.\n- This is valid but less index-friendly than a timestamp range.",
      },
    ],
  },
  {
    code: "CHAT_015",
    approaches: [
      {
        approach_title: "GROUP BY emoji",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT emoji_code, COUNT(*) AS reaction_count FROM message_reactions GROUP BY emoji_code;",
        explanation:
          "## 🧠 Approach\n\nGroup reactions by emoji and count rows in each group.\n\n## 🧩 Query\n\n```sql\nSELECT emoji_code, COUNT(*) AS reaction_count\nFROM message_reactions\nGROUP BY emoji_code;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY emoji_code` creates one group per emoji.\n- `COUNT(*)` counts how many times each emoji appears in reactions.\n- The alias `reaction_count` matches the expected output.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT emoji_code, COUNT(id) AS reaction_count FROM message_reactions GROUP BY emoji_code;",
        explanation:
          "## 🧠 Approach\n\nCount reaction ids per emoji.\n\n## 🧩 Query\n\n```sql\nSELECT emoji_code, COUNT(id) AS reaction_count\nFROM message_reactions\nGROUP BY emoji_code;\n```\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts non-null reaction ids.\n- If `id` is a primary key, it should be non-null, so this matches `COUNT(*)`.\n- `COUNT(*)` is generally preferred when counting rows.",
      },
      {
        approach_title: "Subquery count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT emoji_code, reaction_count FROM (SELECT emoji_code, COUNT(*) AS reaction_count FROM message_reactions GROUP BY emoji_code) emoji_counts;",
        explanation:
          "## 🧠 Approach\n\nCalculate emoji counts in a derived table, then select from it.\n\n## 🧩 Query\n\n```sql\nSELECT emoji_code, reaction_count\nFROM (\n  SELECT emoji_code, COUNT(*) AS reaction_count\n  FROM message_reactions\n  GROUP BY emoji_code\n) emoji_counts;\n```\n\n## 🔍 Explanation\n\n- The inner query performs the aggregation.\n- The outer query returns the computed results.\n- This pattern is useful when the aggregated result needs further filtering or ranking.",
      },
    ],
  },
  {
    code: "CHAT_016",
    approaches: [
      {
        approach_title: "Month trunc",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, workspace_id, user_id, joined_at FROM workspace_members WHERE DATE_TRUNC('month', joined_at) = DATE_TRUNC('month', CURRENT_DATE);",
        explanation:
          "## 🧠 Approach\n\nCompare the month of `joined_at` with the current month.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, user_id, joined_at\nFROM workspace_members\nWHERE DATE_TRUNC('month', joined_at) = DATE_TRUNC('month', CURRENT_DATE);\n```\n\n## 🔍 Explanation\n\n- `DATE_TRUNC('month', joined_at)` moves each join timestamp to the first day of its month.\n- `DATE_TRUNC('month', CURRENT_DATE)` gives the first day of the current month.\n- If both are equal, the member joined during the current month.",
      },
      {
        approach_title: "Month range",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, workspace_id, user_id, joined_at FROM workspace_members WHERE joined_at >= DATE_TRUNC('month', CURRENT_DATE) AND joined_at < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month';",
        explanation:
          "## 🧠 Approach\n\nUse a half-open date range covering the current month.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, user_id, joined_at\nFROM workspace_members\nWHERE joined_at >= DATE_TRUNC('month', CURRENT_DATE)\n  AND joined_at < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month';\n```\n\n## 🔍 Explanation\n\n- The lower bound is the first day of the current month.\n- The upper bound is the first day of the next month.\n- This avoids applying a function to the `joined_at` column and is more index-friendly.",
      },
    ],
  },
  {
    code: "CHAT_017",
    approaches: [
      {
        approach_title: "Filter private group",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT workspace_id, COUNT(*) AS private_channel_count FROM channels WHERE visibility = 'private' GROUP BY workspace_id;",
        explanation:
          "## 🧠 Approach\n\nFilter private group\n\n## 🧩 Query\n\n```sql\nSELECT workspace_id, COUNT(*) AS private_channel_count FROM channels WHERE visibility = 'private' GROUP BY workspace_id;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_id, COUNT(*) FILTER (WHERE visibility = 'private') AS private_channel_count FROM channels GROUP BY workspace_id HAVING COUNT(*) FILTER (WHERE visibility = 'private') > 0;",
        explanation:
          "## 🧠 Approach\n\nFILTER count\n\n## 🧩 Query\n\n```sql\nSELECT workspace_id, COUNT(*) FILTER (WHERE visibility = 'private') AS private_channel_count FROM channels GROUP BY workspace_id HAVING COUNT(*) FILTER (WHERE visibility = 'private') > 0;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT workspace_id, SUM(CASE WHEN visibility = 'private' THEN 1 ELSE 0 END) AS private_channel_count FROM channels GROUP BY workspace_id HAVING SUM(CASE WHEN visibility = 'private' THEN 1 ELSE 0 END) > 0;",
        explanation:
          "## 🧠 Approach\n\nSUM CASE\n\n## 🧩 Query\n\n```sql\nSELECT workspace_id, SUM(CASE WHEN visibility = 'private' THEN 1 ELSE 0 END) AS private_channel_count FROM channels GROUP BY workspace_id HAVING SUM(CASE WHEN visibility = 'private' THEN 1 ELSE 0 END) > 0;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "CHAT_018",
    approaches: [
      {
        approach_title: "Filter deleted",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, workspace_id, sender_member_id, deleted_at FROM messages WHERE is_deleted = true;",
        explanation:
          "## 🧠 Approach\n\nFilter messages whose deleted flag is true.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, sender_member_id, deleted_at\nFROM messages\nWHERE is_deleted = true;\n```\n\n## 🔍 Explanation\n\n- `WHERE is_deleted = true` keeps deleted messages.\n- The selected columns provide the message id, workspace, sender, and deletion timestamp.\n- No sorting is required.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, workspace_id, sender_member_id, deleted_at FROM messages WHERE is_deleted;",
        explanation:
          "## 🧠 Approach\n\nUse the boolean deleted column directly.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, sender_member_id, deleted_at\nFROM messages\nWHERE is_deleted;\n```\n\n## 🔍 Explanation\n\n- In PostgreSQL, `WHERE is_deleted` means `is_deleted = true`.\n- This is concise and returns the same deleted messages when the column is boolean.",
      },
      {
        approach_title: "IS TRUE",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, workspace_id, sender_member_id, deleted_at FROM messages WHERE is_deleted IS TRUE;",
        explanation:
          "## 🧠 Approach\n\nUse `IS TRUE` to explicitly select deleted messages.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, sender_member_id, deleted_at\nFROM messages\nWHERE is_deleted IS TRUE;\n```\n\n## 🔍 Explanation\n\n- `IS TRUE` includes only rows where `is_deleted` is exactly true.\n- It excludes false and null values.\n- This is explicit and safe for nullable boolean columns.",
      },
    ],
  },
  {
    code: "CHAT_019",
    approaches: [
      {
        approach_title: "JOIN DND sessions",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT workspace_member_id FROM user_presence_logs WHERE presence_status = 'dnd' AND ended_at IS NULL;",
        explanation:
          "## 🧠 Approach\n\nJOIN DND sessions\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT workspace_member_id FROM user_presence_logs WHERE presence_status = 'dnd' AND ended_at IS NULL;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "EXISTS DND",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT upl.workspace_member_id FROM user_presence_logs upl WHERE upl.presence_status = 'dnd' AND upl.ended_at IS NULL AND EXISTS (SELECT 1 FROM workspace_members wm WHERE wm.id = upl.workspace_member_id);",
        explanation:
          "## 🧠 Approach\n\nEXISTS DND\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT upl.workspace_member_id FROM user_presence_logs upl WHERE upl.presence_status = 'dnd' AND upl.ended_at IS NULL AND EXISTS (SELECT 1 FROM workspace_members wm WHERE wm.id = upl.workspace_member_id);\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "CHAT_020",
    approaches: [
      {
        approach_title: "IS NULL",
        approach_type: "null_filtering",
        is_optimal: true,
        display_order: 1,
        query: "SELECT id, full_name, email FROM users WHERE phone IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse `IS NULL` to find users without a phone number.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, email\nFROM users\nWHERE phone IS NULL;\n```\n\n## 🔍 Explanation\n\n- SQL uses `IS NULL` to test missing values.\n- `phone IS NULL` returns users who do not have a phone number set.\n- The selected columns match the expected output.",
      },
      {
        approach_title: "COALESCE empty",
        approach_type: "null_filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, full_name, email FROM users WHERE COALESCE(phone, '') = '';",
        explanation:
          "## 🧠 Approach\n\nTreat null phone values as empty strings, then compare with an empty string.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, email\nFROM users\nWHERE COALESCE(phone, '') = '';\n```\n\n## 🔍 Explanation\n\n- `COALESCE(phone, '')` replaces null phone values with an empty string.\n- This also matches rows where `phone` is actually an empty string.\n- It may return more rows than `phone IS NULL` if empty strings exist, so `IS NULL` is safer for this question.",
      },
    ],
  },
  {
    code: "CHAT_021",
    approaches: [
      {
        approach_title: "Filter group",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id;",
        explanation:
          "## 🧠 Approach\n\nFilter valid non-deleted channel messages, then count them per channel.\n\n## 🧩 Query\n\n```sql\nSELECT channel_id, COUNT(*) AS total_messages\nFROM messages\nWHERE channel_id IS NOT NULL\n  AND is_deleted = false\nGROUP BY channel_id;\n```\n\n## 🔍 Explanation\n\n- `channel_id IS NOT NULL` keeps only messages that belong to a channel.\n- `is_deleted = false` excludes deleted messages.\n- `GROUP BY channel_id` creates one row per channel.\n- `COUNT(*)` counts non-deleted messages in each channel.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND NOT is_deleted GROUP BY channel_id;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand for the deleted flag.\n\n## 🧩 Query\n\n```sql\nSELECT channel_id, COUNT(*) AS total_messages\nFROM messages\nWHERE channel_id IS NOT NULL\n  AND NOT is_deleted\nGROUP BY channel_id;\n```\n\n## 🔍 Explanation\n\n- `NOT is_deleted` is equivalent to `is_deleted = false` for boolean values.\n- The query still filters to channel messages only.\n- Grouping and counting work the same as the direct comparison approach.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT channel_id, COUNT(*) FILTER (WHERE is_deleted = false) AS total_messages FROM messages WHERE channel_id IS NOT NULL GROUP BY channel_id HAVING COUNT(*) FILTER (WHERE is_deleted = false) > 0;",
        explanation:
          "## 🧠 Approach\n\nUse a filtered aggregate to count only non-deleted messages per channel.\n\n## 🧩 Query\n\n```sql\nSELECT channel_id,\n       COUNT(*) FILTER (WHERE is_deleted = false) AS total_messages\nFROM messages\nWHERE channel_id IS NOT NULL\nGROUP BY channel_id\nHAVING COUNT(*) FILTER (WHERE is_deleted = false) > 0;\n```\n\n## 🔍 Explanation\n\n- Rows are grouped by channel first.\n- The `FILTER` clause counts only non-deleted messages.\n- `HAVING` removes channels where the non-deleted count is zero, matching the filtered-row approach.",
      },
    ],
  },
  {
    code: "CHAT_022",
    approaches: [
      {
        approach_title: "Group replies",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT parent_message_id, COUNT(*) AS reply_count FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id;",
        explanation:
          "## 🧠 Approach\n\nFilter replies and count them per parent message.\n\n## 🧩 Query\n\n```sql\nSELECT parent_message_id, COUNT(*) AS reply_count\nFROM messages\nWHERE parent_message_id IS NOT NULL\nGROUP BY parent_message_id;\n```\n\n## 🔍 Explanation\n\n- A reply has a non-null `parent_message_id`.\n- `GROUP BY parent_message_id` creates one group per thread parent message.\n- `COUNT(*)` counts how many replies each parent message has.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT parent_message_id, COUNT(id) AS reply_count FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id;",
        explanation:
          "## 🧠 Approach\n\nCount reply message ids for each parent message.\n\n## 🧩 Query\n\n```sql\nSELECT parent_message_id, COUNT(id) AS reply_count\nFROM messages\nWHERE parent_message_id IS NOT NULL\nGROUP BY parent_message_id;\n```\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts non-null message ids.\n- Since `id` should be a primary key, it should match `COUNT(*)`.\n- `COUNT(*)` is still preferred when counting rows.",
      },
      {
        approach_title: "Subquery count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT parent_message_id, reply_count FROM (SELECT parent_message_id, COUNT(*) AS reply_count FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id) reply_counts;",
        explanation:
          "## 🧠 Approach\n\nCalculate reply counts in a derived table and select the results.\n\n## 🧩 Query\n\n```sql\nSELECT parent_message_id, reply_count\nFROM (\n  SELECT parent_message_id, COUNT(*) AS reply_count\n  FROM messages\n  WHERE parent_message_id IS NOT NULL\n  GROUP BY parent_message_id\n) reply_counts;\n```\n\n## 🔍 Explanation\n\n- The inner query performs the reply counting.\n- The outer query returns the computed values.\n- This pattern is useful when later filtering or ranking reply counts.",
      },
    ],
  },
  {
    code: "CHAT_023",
    approaches: [
      {
        approach_title: "Interval filter",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, full_name, username, created_at FROM users WHERE created_at >= CURRENT_DATE - INTERVAL '30 days';",
        explanation:
          "## 🧠 Approach\n\nFind users whose creation timestamp is within the last 30 days.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, username, created_at\nFROM users\nWHERE created_at >= CURRENT_DATE - INTERVAL '30 days';\n```\n\n## 🔍 Explanation\n\n- `CURRENT_DATE - INTERVAL '30 days'` creates the lower date boundary.\n- `created_at >= ...` keeps users created on or after that boundary.\n- The query returns the requested user identity and creation timestamp columns.",
      },
      {
        approach_title: "NOW interval",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, full_name, username, created_at FROM users WHERE created_at >= NOW() - INTERVAL '30 days';",
        explanation:
          "## 🧠 Approach\n\nUse the current timestamp instead of the current date as the 30-day cutoff.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, username, created_at\nFROM users\nWHERE created_at >= NOW() - INTERVAL '30 days';\n```\n\n## 🔍 Explanation\n\n- `NOW()` includes the current time of day.\n- This checks the last exact 30 days from the current moment.\n- It may differ slightly from `CURRENT_DATE - INTERVAL '30 days'`, which starts at midnight.",
      },
    ],
  },
  {
    code: "CHAT_024",
    approaches: [
      {
        approach_title: "Select memberships",
        approach_type: "select",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, channel_id, workspace_member_id, joined_at FROM channel_members;",
        explanation:
          "## 🧠 Approach\n\nSelect all channel membership records directly.\n\n## 🧩 Query\n\n```sql\nSELECT id, channel_id, workspace_member_id, joined_at\nFROM channel_members;\n```\n\n## 🔍 Explanation\n\n- `channel_members` stores memberships between workspace members and channels.\n- No filtering is required because the question asks for all channel memberships.\n- The selected columns match the expected output exactly.",
      },
    ],
  },
  {
    code: "CHAT_025",
    approaches: [
      {
        approach_title: "GROUP BY type",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT attachment_type, COUNT(*) AS attachment_count FROM message_attachments GROUP BY attachment_type;",
        explanation:
          "## 🧠 Approach\n\nGroup message attachments by type and count each group.\n\n## 🧩 Query\n\n```sql\nSELECT attachment_type, COUNT(*) AS attachment_count\nFROM message_attachments\nGROUP BY attachment_type;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY attachment_type` creates one result row per attachment type.\n- `COUNT(*)` counts how many attachment records exist in each type.\n- The alias `attachment_count` matches the required output.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT attachment_type, COUNT(id) AS attachment_count FROM message_attachments GROUP BY attachment_type;",
        explanation:
          "## 🧠 Approach\n\nCount attachment ids per attachment type.\n\n## 🧩 Query\n\n```sql\nSELECT attachment_type, COUNT(id) AS attachment_count\nFROM message_attachments\nGROUP BY attachment_type;\n```\n\n## 🔍 Explanation\n\n- `COUNT(id)` counts non-null attachment ids.\n- If `id` is always present, this matches `COUNT(*)`.\n- `COUNT(*)` is generally better for row counts.",
      },
      {
        approach_title: "Subquery count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT attachment_type, attachment_count FROM (SELECT attachment_type, COUNT(*) AS attachment_count FROM message_attachments GROUP BY attachment_type) attachment_counts;",
        explanation:
          "## 🧠 Approach\n\nCalculate attachment counts first, then select from the derived result.\n\n## 🧩 Query\n\n```sql\nSELECT attachment_type, attachment_count\nFROM (\n  SELECT attachment_type, COUNT(*) AS attachment_count\n  FROM message_attachments\n  GROUP BY attachment_type\n) attachment_counts;\n```\n\n## 🔍 Explanation\n\n- The inner query performs the grouping and counting.\n- The outer query returns the computed results.\n- This structure is useful when additional filtering or sorting is needed later.",
      },
    ],
  },
  {
    code: "CHAT_026",
    approaches: [
      {
        approach_title: "Year trunc",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, workspace_name, workspace_type, created_at FROM workspaces WHERE DATE_TRUNC('year', created_at) = DATE_TRUNC('year', CURRENT_DATE);",
        explanation:
          "## 🧠 Approach\n\nYear trunc\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_name, workspace_type, created_at FROM workspaces WHERE DATE_TRUNC('year', created_at) = DATE_TRUNC('year', CURRENT_DATE);\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "Year range",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, workspace_name, workspace_type, created_at FROM workspaces WHERE created_at >= DATE_TRUNC('year', CURRENT_DATE) AND created_at < DATE_TRUNC('year', CURRENT_DATE) + INTERVAL '1 year';",
        explanation:
          "## 🧠 Approach\n\nYear range\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_name, workspace_type, created_at FROM workspaces WHERE created_at >= DATE_TRUNC('year', CURRENT_DATE) AND created_at < DATE_TRUNC('year', CURRENT_DATE) + INTERVAL '1 year';\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "EXTRACT year",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT id, workspace_name, workspace_type, created_at FROM workspaces WHERE EXTRACT(YEAR FROM created_at) = EXTRACT(YEAR FROM CURRENT_DATE);",
        explanation:
          "## 🧠 Approach\n\nEXTRACT year\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_name, workspace_type, created_at FROM workspaces WHERE EXTRACT(YEAR FROM created_at) = EXTRACT(YEAR FROM CURRENT_DATE);\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "CHAT_027",
    approaches: [
      {
        approach_title: "IS NOT NULL",
        approach_type: "null_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, workspace_member_id, mute_until FROM notification_preferences WHERE mute_until IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nIS NOT NULL\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_member_id, mute_until FROM notification_preferences WHERE mute_until IS NOT NULL;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "Future mute",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, workspace_member_id, mute_until FROM notification_preferences WHERE NOT (mute_until IS NULL);",
        explanation:
          "## 🧠 Approach\n\nFuture mute\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_member_id, mute_until FROM notification_preferences WHERE NOT (mute_until IS NULL);\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "CHAT_028",
    approaches: [
      {
        approach_title: "Filter pending",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, workspace_id, invited_email, created_at FROM invites WHERE invite_status = 'pending';",
        explanation:
          "## 🧠 Approach\n\nFilter invites by pending status.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, invited_email, created_at\nFROM invites\nWHERE invite_status = 'pending';\n```\n\n## 🔍 Explanation\n\n- `invite_status = 'pending'` keeps invites that have not yet been accepted, rejected, or expired.\n- The output includes the invite id, workspace, invited email, and creation time.\n- No ordering is required.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, workspace_id, invited_email, created_at FROM invites WHERE invite_status IN ('pending');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` for the invite status condition.\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, invited_email, created_at\nFROM invites\nWHERE invite_status IN ('pending');\n```\n\n## 🔍 Explanation\n\n- `IN ('pending')` is equivalent to `= 'pending'` for a single value.\n- This form is useful when multiple statuses are allowed.\n- For this question, direct equality is clearer.",
      },
    ],
  },
  {
    code: "CHAT_029",
    approaches: [
      {
        approach_title: "Filter applied",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, workspace_id, action_type, created_at FROM moderation_actions WHERE action_status = 'applied';",
        explanation:
          "## 🧠 Approach\n\nFilter applied\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, action_type, created_at FROM moderation_actions WHERE action_status = 'applied';\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, workspace_id, action_type, created_at FROM moderation_actions WHERE action_status IN ('applied');",
        explanation:
          "## 🧠 Approach\n\nIN filter\n\n## 🧩 Query\n\n```sql\nSELECT id, workspace_id, action_type, created_at FROM moderation_actions WHERE action_status IN ('applied');\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "CHAT_030",
    approaches: [
      {
        approach_title: "Filter voice",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS voice_calls_count FROM calls WHERE call_type = 'voice';",
        explanation:
          "## 🧠 Approach\n\nFilter calls to voice calls, then count them.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS voice_calls_count\nFROM calls\nWHERE call_type = 'voice';\n```\n\n## 🔍 Explanation\n\n- `call_type = 'voice'` keeps only voice call rows.\n- `COUNT(*)` counts matching calls.\n- The alias `voice_calls_count` matches the expected output.",
      },
      {
        approach_title: "IN filter",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT COUNT(*) AS voice_calls_count FROM calls WHERE call_type IN ('voice');",
        explanation:
          "## 🧠 Approach\n\nUse `IN` for the call type condition.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) AS voice_calls_count\nFROM calls\nWHERE call_type IN ('voice');\n```\n\n## 🔍 Explanation\n\n- `IN ('voice')` is equivalent to `= 'voice'` for one call type.\n- It is useful if multiple call types should be counted later.\n- For this question, equality is simpler.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT COUNT(*) FILTER (WHERE call_type = 'voice') AS voice_calls_count FROM calls;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to count voice calls.\n\n## 🧩 Query\n\n```sql\nSELECT COUNT(*) FILTER (WHERE call_type = 'voice') AS voice_calls_count\nFROM calls;\n```\n\n## 🔍 Explanation\n\n- `FILTER` applies the voice-call condition inside the aggregate.\n- This is useful when calculating counts for multiple call types in one query.\n- It returns the same result as filtering rows first.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 4,
        query:
          "SELECT SUM(CASE WHEN call_type = 'voice' THEN 1 ELSE 0 END) AS voice_calls_count FROM calls;",
        explanation:
          "## 🧠 Approach\n\nTurn voice calls into `1` and other calls into `0`, then sum.\n\n## 🧩 Query\n\n```sql\nSELECT SUM(CASE WHEN call_type = 'voice' THEN 1 ELSE 0 END) AS voice_calls_count\nFROM calls;\n```\n\n## 🔍 Explanation\n\n- Voice call rows contribute `1`.\n- Other call rows contribute `0`.\n- The sum gives the total number of voice calls.",
      },
    ],
  },
  {
    code: "CHAT_031",
    approaches: [
      {
        approach_title: "GROUP top 5",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id ORDER BY total_messages DESC, channel_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nFilter non-deleted channel messages, count them per channel, then return the top 5.\n\n## 🧩 Query\n\n```sql\nSELECT channel_id, COUNT(*) AS total_messages\nFROM messages\nWHERE channel_id IS NOT NULL\n  AND is_deleted = false\nGROUP BY channel_id\nORDER BY total_messages DESC, channel_id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- `channel_id IS NOT NULL` keeps only channel messages.\n- `is_deleted = false` excludes deleted messages.\n- `GROUP BY channel_id` calculates one message count per channel.\n- `ORDER BY total_messages DESC, channel_id ASC` follows the required ordering rule.\n- `LIMIT 5` returns the top five most active channels.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT channel_id, total_messages FROM (SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id) channel_counts ORDER BY total_messages DESC, channel_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate message counts first, then rank the aggregated result.\n\n## 🧩 Query\n\n```sql\nSELECT channel_id, total_messages\nFROM (\n  SELECT channel_id, COUNT(*) AS total_messages\n  FROM messages\n  WHERE channel_id IS NOT NULL\n    AND is_deleted = false\n  GROUP BY channel_id\n) channel_counts\nORDER BY total_messages DESC, channel_id ASC\nLIMIT 5;\n```\n\n## 🔍 Explanation\n\n- The inner query computes total non-deleted messages per channel.\n- The outer query sorts those counts and limits the result to five rows.\n- This separates aggregation from top-N selection.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT channel_id, total_messages FROM (SELECT channel_id, total_messages, ROW_NUMBER() OVER (ORDER BY total_messages DESC, channel_id ASC) AS rn FROM (SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id) channel_counts) ranked WHERE rn <= 5 ORDER BY total_messages DESC, channel_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank channel message counts with `ROW_NUMBER`, then keep the top 5.\n\n## 🧩 Query\n\n```sql\nSELECT channel_id, total_messages\nFROM (\n  SELECT channel_id,\n         total_messages,\n         ROW_NUMBER() OVER (\n           ORDER BY total_messages DESC, channel_id ASC\n         ) AS rn\n  FROM (\n    SELECT channel_id, COUNT(*) AS total_messages\n    FROM messages\n    WHERE channel_id IS NOT NULL\n      AND is_deleted = false\n    GROUP BY channel_id\n  ) channel_counts\n) ranked\nWHERE rn <= 5\nORDER BY total_messages DESC, channel_id ASC;\n```\n\n## 🔍 Explanation\n\n- The innermost query computes counts per channel.\n- `ROW_NUMBER()` ranks channels by count and channel id.\n- `WHERE rn <= 5` keeps the top five rows.\n- The final `ORDER BY` matches the comparator configuration.",
      },
    ],
  },
  {
    code: "CHAT_032",
    approaches: [
      {
        approach_title: "DISTINCT members",
        approach_type: "distinct",
        is_optimal: true,
        display_order: 1,
        query: "SELECT DISTINCT workspace_member_id FROM saved_messages;",
        explanation:
          "## 🧠 Approach\n\nSelect unique workspace members from saved message records.\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT workspace_member_id\nFROM saved_messages;\n```\n\n## 🔍 Explanation\n\n- `saved_messages` stores one row per saved message event/record.\n- A member may save multiple messages.\n- `DISTINCT` ensures each workspace member appears only once.",
      },
      {
        approach_title: "GROUP BY members",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_member_id FROM saved_messages GROUP BY workspace_member_id;",
        explanation:
          "## 🧠 Approach\n\nGroup saved messages by member and return one row per member.\n\n## 🧩 Query\n\n```sql\nSELECT workspace_member_id\nFROM saved_messages\nGROUP BY workspace_member_id;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY workspace_member_id` collapses all saved messages for the same member into one group.\n- Since only the grouped column is selected, this returns the same unique member list as `DISTINCT`.\n- `DISTINCT` is simpler when no aggregate is needed.",
      },
    ],
  },
  {
    code: "CHAT_033",
    approaches: [
      {
        approach_title: "DISTINCT messages",
        approach_type: "distinct",
        is_optimal: true,
        display_order: 1,
        query: "SELECT DISTINCT ma.message_id FROM message_attachments ma;",
        explanation:
          "## 🧠 Approach\n\nSelect unique message ids from the attachment table.\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT ma.message_id\nFROM message_attachments ma;\n```\n\n## 🔍 Explanation\n\n- `message_attachments` has one row per attachment.\n- A message may have multiple attachments.\n- `DISTINCT` returns each message id only once.",
      },
      {
        approach_title: "GROUP BY messages",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT message_id FROM message_attachments GROUP BY message_id;",
        explanation:
          "## 🧠 Approach\n\nGroup attachments by message id to return one row per message.\n\n## 🧩 Query\n\n```sql\nSELECT message_id\nFROM message_attachments\nGROUP BY message_id;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY message_id` creates one group per message with attachments.\n- Selecting only `message_id` returns the same unique message list as `DISTINCT`.\n- This is useful if you later want to add `COUNT(*) AS attachment_count`.",
      },
    ],
  },
  {
    code: "CHAT_034",
    approaches: [
      {
        approach_title: "Inactive cutoff",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, full_name, last_seen_at FROM users WHERE last_seen_at < CURRENT_DATE - INTERVAL '30 days';",
        explanation:
          "## 🧠 Approach\n\nFind users whose last seen timestamp is older than 30 days.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, last_seen_at\nFROM users\nWHERE last_seen_at < CURRENT_DATE - INTERVAL '30 days';\n```\n\n## 🔍 Explanation\n\n- `CURRENT_DATE - INTERVAL '30 days'` creates the inactivity cutoff.\n- `last_seen_at < ...` keeps users last seen before that cutoff.\n- The selected columns identify the inactive user and when they were last seen.",
      },
      {
        approach_title: "NOW cutoff",
        approach_type: "date_filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, full_name, last_seen_at FROM users WHERE last_seen_at < NOW() - INTERVAL '30 days';",
        explanation:
          "## 🧠 Approach\n\nUse the current timestamp to check inactivity for more than exactly 30 days.\n\n## 🧩 Query\n\n```sql\nSELECT id, full_name, last_seen_at\nFROM users\nWHERE last_seen_at < NOW() - INTERVAL '30 days';\n```\n\n## 🔍 Explanation\n\n- `NOW()` includes the current time of day.\n- This checks whether the user was last seen more than 30 exact days ago.\n- It can differ slightly from `CURRENT_DATE`, which starts at midnight.",
      },
    ],
  },
  {
    code: "CHAT_035",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT call_id, COUNT(*) AS participant_count FROM call_participants GROUP BY call_id HAVING COUNT(*) > 2;",
        explanation:
          "## 🧠 Approach\n\nGroup call participants by call and keep calls with more than two participants.\n\n## 🧩 Query\n\n```sql\nSELECT call_id, COUNT(*) AS participant_count\nFROM call_participants\nGROUP BY call_id\nHAVING COUNT(*) > 2;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY call_id` creates one group per call.\n- `COUNT(*)` counts participants in each call.\n- `HAVING COUNT(*) > 2` filters grouped results, keeping only calls with more than two participants.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT call_id, participant_count FROM (SELECT call_id, COUNT(*) AS participant_count FROM call_participants GROUP BY call_id) counts WHERE participant_count > 2;",
        explanation:
          "## 🧠 Approach\n\nCalculate participant counts first, then filter those counts.\n\n## 🧩 Query\n\n```sql\nSELECT call_id, participant_count\nFROM (\n  SELECT call_id, COUNT(*) AS participant_count\n  FROM call_participants\n  GROUP BY call_id\n) counts\nWHERE participant_count > 2;\n```\n\n## 🔍 Explanation\n\n- The inner query counts participants for each call.\n- The outer query filters calls where the computed count is greater than two.\n- This avoids repeating the aggregate expression in `HAVING`.",
      },
      {
        approach_title: "Window count",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT call_id, participant_count FROM (SELECT call_id, COUNT(*) OVER (PARTITION BY call_id) AS participant_count FROM call_participants) counts WHERE participant_count > 2;",
        explanation:
          "## 🧠 Approach\n\nUse a window function to count participants per call, then deduplicate calls.\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT call_id, participant_count\nFROM (\n  SELECT call_id,\n         COUNT(*) OVER (PARTITION BY call_id) AS participant_count\n  FROM call_participants\n) counts\nWHERE participant_count > 2;\n```\n\n## 🔍 Explanation\n\n- `COUNT(*) OVER (PARTITION BY call_id)` calculates participant count on each participant row.\n- `DISTINCT` collapses repeated call rows into one row per call.\n- This is valid but less direct than `GROUP BY + HAVING`.",
      },
    ],
  },
  {
    code: "CHAT_036",
    approaches: [
      {
        approach_title: "COUNT DISTINCT",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, COUNT(DISTINCT workspace_id) AS workspace_count FROM workspace_members WHERE membership_status = 'active' GROUP BY user_id HAVING COUNT(DISTINCT workspace_id) > 1;",
        explanation:
          "## 🧠 Approach\n\nCount active workspaces per user and keep users who belong to more than one workspace.\n\n## 🧩 Query\n\n```sql\nSELECT user_id, COUNT(DISTINCT workspace_id) AS workspace_count\nFROM workspace_members\nWHERE membership_status = 'active'\nGROUP BY user_id\nHAVING COUNT(DISTINCT workspace_id) > 1;\n```\n\n## 🔍 Explanation\n\n- `WHERE membership_status = 'active'` considers only active memberships.\n- `COUNT(DISTINCT workspace_id)` counts unique active workspaces per user.\n- `HAVING ... > 1` keeps users active in multiple workspaces.",
      },
      {
        approach_title: "Pre-distinct",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, COUNT(*) AS workspace_count FROM (SELECT DISTINCT user_id, workspace_id FROM workspace_members WHERE membership_status = 'active') active_user_workspaces GROUP BY user_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nFirst create unique active user-workspace pairs, then count them per user.\n\n## 🧩 Query\n\n```sql\nSELECT user_id, COUNT(*) AS workspace_count\nFROM (\n  SELECT DISTINCT user_id, workspace_id\n  FROM workspace_members\n  WHERE membership_status = 'active'\n) active_user_workspaces\nGROUP BY user_id\nHAVING COUNT(*) > 1;\n```\n\n## 🔍 Explanation\n\n- The inner query removes duplicate active memberships for the same user/workspace pair.\n- The outer query counts how many unique workspaces each user belongs to.\n- This is equivalent to `COUNT(DISTINCT workspace_id)`.",
      },
    ],
  },
  {
    code: "CHAT_037",
    approaches: [
      {
        approach_title: "GROUP top 10",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT message_id, COUNT(*) AS reaction_count FROM message_reactions GROUP BY message_id ORDER BY reaction_count DESC, message_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCount reactions per message and return the top 10 most reacted messages.\n\n## 🧩 Query\n\n```sql\nSELECT message_id, COUNT(*) AS reaction_count\nFROM message_reactions\nGROUP BY message_id\nORDER BY reaction_count DESC, message_id ASC\nLIMIT 10;\n```\n\n## 🔍 Explanation\n\n- `GROUP BY message_id` creates one row per reacted message.\n- `COUNT(*)` counts reactions for each message.\n- `ORDER BY reaction_count DESC, message_id ASC` follows the required sort order.\n- `LIMIT 10` keeps the top ten messages.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT message_id, reaction_count FROM (SELECT message_id, COUNT(*) AS reaction_count FROM message_reactions GROUP BY message_id) reaction_counts ORDER BY reaction_count DESC, message_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate message reaction counts first, then rank them outside.\n\n## 🧩 Query\n\n```sql\nSELECT message_id, reaction_count\nFROM (\n  SELECT message_id, COUNT(*) AS reaction_count\n  FROM message_reactions\n  GROUP BY message_id\n) reaction_counts\nORDER BY reaction_count DESC, message_id ASC\nLIMIT 10;\n```\n\n## 🔍 Explanation\n\n- The inner query computes reaction count per message.\n- The outer query sorts the counts and limits the result to ten rows.\n- This separates aggregation from top-N selection.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT message_id, reaction_count FROM (SELECT message_id, reaction_count, ROW_NUMBER() OVER (ORDER BY reaction_count DESC, message_id ASC) AS rn FROM (SELECT message_id, COUNT(*) AS reaction_count FROM message_reactions GROUP BY message_id) reaction_counts) ranked WHERE rn <= 10 ORDER BY reaction_count DESC, message_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank messages by reaction count using `ROW_NUMBER`, then keep the top 10.\n\n## 🧩 Query\n\n```sql\nSELECT message_id, reaction_count\nFROM (\n  SELECT message_id,\n         reaction_count,\n         ROW_NUMBER() OVER (\n           ORDER BY reaction_count DESC, message_id ASC\n         ) AS rn\n  FROM (\n    SELECT message_id, COUNT(*) AS reaction_count\n    FROM message_reactions\n    GROUP BY message_id\n  ) reaction_counts\n) ranked\nWHERE rn <= 10\nORDER BY reaction_count DESC, message_id ASC;\n```\n\n## 🔍 Explanation\n\n- The innermost query calculates reaction count per message.\n- `ROW_NUMBER()` ranks messages using the required order.\n- The outer filter keeps the first ten ranked rows.\n- Final ordering keeps the output deterministic.",
      },
    ],
  },
  {
    code: "CHAT_038",
    approaches: [
      {
        approach_title: "Unread group",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT workspace_member_id, COUNT(*) AS unread_count FROM notifications WHERE is_read = false GROUP BY workspace_member_id;",
        explanation:
          "## 🧠 Approach\n\nFilter unread notifications and count them per workspace member.\n\n## 🧩 Query\n\n```sql\nSELECT workspace_member_id, COUNT(*) AS unread_count\nFROM notifications\nWHERE is_read = false\nGROUP BY workspace_member_id;\n```\n\n## 🔍 Explanation\n\n- `WHERE is_read = false` keeps only unread notifications.\n- `GROUP BY workspace_member_id` creates one result row per member.\n- `COUNT(*)` gives each member's unread notification count.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_member_id, COUNT(*) AS unread_count FROM notifications WHERE NOT is_read GROUP BY workspace_member_id;",
        explanation:
          "## 🧠 Approach\n\nUse boolean shorthand to filter unread notifications.\n\n## 🧩 Query\n\n```sql\nSELECT workspace_member_id, COUNT(*) AS unread_count\nFROM notifications\nWHERE NOT is_read\nGROUP BY workspace_member_id;\n```\n\n## 🔍 Explanation\n\n- `NOT is_read` is equivalent to `is_read = false` for boolean values.\n- The grouped count still returns unread notification count per member.\n- This is concise PostgreSQL syntax.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT workspace_member_id, COUNT(*) FILTER (WHERE is_read = false) AS unread_count FROM notifications GROUP BY workspace_member_id HAVING COUNT(*) FILTER (WHERE is_read = false) > 0;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to count unread notifications per member.\n\n## 🧩 Query\n\n```sql\nSELECT workspace_member_id,\n       COUNT(*) FILTER (WHERE is_read = false) AS unread_count\nFROM notifications\nGROUP BY workspace_member_id\nHAVING COUNT(*) FILTER (WHERE is_read = false) > 0;\n```\n\n## 🔍 Explanation\n\n- The query groups all notifications by member.\n- `FILTER` counts only unread notifications.\n- `HAVING` removes members with zero unread notifications so the result matches filtering before grouping.",
      },
    ],
  },
  {
    code: "CHAT_039",
    approaches: [
      {
        approach_title: "Mention counts",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT mentioned_member_id AS workspace_member_id, COUNT(*) AS mention_count FROM message_mentions WHERE mentioned_member_id IS NOT NULL GROUP BY mentioned_member_id;",
        explanation:
          "## 🧠 Approach\n\nMention counts\n\n## 🧩 Query\n\n```sql\nSELECT mentioned_member_id AS workspace_member_id, COUNT(*) AS mention_count FROM message_mentions WHERE mentioned_member_id IS NOT NULL GROUP BY mentioned_member_id;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "COUNT id",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT mentioned_member_id AS workspace_member_id, COUNT(id) AS mention_count FROM message_mentions WHERE mentioned_member_id IS NOT NULL GROUP BY mentioned_member_id;",
        explanation:
          "## 🧠 Approach\n\nCOUNT id\n\n## 🧩 Query\n\n```sql\nSELECT mentioned_member_id AS workspace_member_id, COUNT(id) AS mention_count FROM message_mentions WHERE mentioned_member_id IS NOT NULL GROUP BY mentioned_member_id;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "Subquery count",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT workspace_member_id, mention_count FROM (SELECT mentioned_member_id AS workspace_member_id, COUNT(*) AS mention_count FROM message_mentions WHERE mentioned_member_id IS NOT NULL GROUP BY mentioned_member_id) mention_counts;",
        explanation:
          "## 🧠 Approach\n\nSubquery count\n\n## 🧩 Query\n\n```sql\nSELECT workspace_member_id, mention_count FROM (SELECT mentioned_member_id AS workspace_member_id, COUNT(*) AS mention_count FROM message_mentions WHERE mentioned_member_id IS NOT NULL GROUP BY mentioned_member_id) mention_counts;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "CHAT_040",
    approaches: [
      {
        approach_title: "Thread reply average",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH thread_replies AS (SELECT parent_message_id, COUNT(*) AS reply_count FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id) SELECT ROUND(AVG(reply_count), 2) AS avg_replies_per_thread FROM thread_replies;",
        explanation:
          "## 🧠 Approach\n\nFirst count replies per parent message, then average those thread reply counts.\n\n## 🧩 Query\n\n```sql\nWITH thread_replies AS (\n  SELECT parent_message_id, COUNT(*) AS reply_count\n  FROM messages\n  WHERE parent_message_id IS NOT NULL\n  GROUP BY parent_message_id\n)\nSELECT ROUND(AVG(reply_count), 2) AS avg_replies_per_thread\nFROM thread_replies;\n```\n\n## 🔍 Explanation\n\n- The CTE creates one row per parent message that has replies.\n- `COUNT(*)` calculates reply count for each thread.\n- The outer query averages those reply counts.\n- `ROUND(..., 2)` returns the average to two decimal places.",
      },
      {
        approach_title: "Subquery average",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ROUND(AVG(reply_count), 2) AS avg_replies_per_thread FROM (SELECT parent_message_id, COUNT(*) AS reply_count FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id) thread_replies;",
        explanation:
          "## 🧠 Approach\n\nUse an inline derived table for per-thread reply counts, then average them.\n\n## 🧩 Query\n\n```sql\nSELECT ROUND(AVG(reply_count), 2) AS avg_replies_per_thread\nFROM (\n  SELECT parent_message_id, COUNT(*) AS reply_count\n  FROM messages\n  WHERE parent_message_id IS NOT NULL\n  GROUP BY parent_message_id\n) thread_replies;\n```\n\n## 🔍 Explanation\n\n- The inner query calculates reply counts per parent message.\n- The outer query calculates the average of those counts.\n- This is equivalent to the CTE approach but more compact.",
      },
    ],
  },
  {
    code: "CHAT_041",
    approaches: [
      {
        approach_title: "GROUP top 10",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY sender_member_id ORDER BY message_count DESC, sender_member_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nFilter non-deleted messages, count them per sender, then return the top 10 senders.\n\n## 🧩 Query\n\n```sql\nSELECT sender_member_id, COUNT(*) AS message_count\nFROM messages\nWHERE is_deleted = false\nGROUP BY sender_member_id\nORDER BY message_count DESC, sender_member_id ASC\nLIMIT 10;\n```\n\n## 🔍 Explanation\n\n- `WHERE is_deleted = false` excludes deleted messages.\n- `GROUP BY sender_member_id` creates one group per workspace member sender.\n- `COUNT(*)` counts how many non-deleted messages each sender wrote.\n- `ORDER BY message_count DESC, sender_member_id ASC` follows the required comparator ordering.\n- `LIMIT 10` returns the top 10 message senders.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT sender_member_id, COUNT(*) AS message_count FROM messages WHERE NOT is_deleted GROUP BY sender_member_id ORDER BY message_count DESC, sender_member_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand to exclude deleted messages.\n\n## 🧩 Query\n\n```sql\nSELECT sender_member_id, COUNT(*) AS message_count\nFROM messages\nWHERE NOT is_deleted\nGROUP BY sender_member_id\nORDER BY message_count DESC, sender_member_id ASC\nLIMIT 10;\n```\n\n## 🔍 Explanation\n\n- `NOT is_deleted` is equivalent to `is_deleted = false` for boolean values.\n- The grouping and counting logic is the same.\n- The final ordering and limit return the required top 10.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT sender_member_id, message_count FROM (SELECT sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY sender_member_id) sender_counts ORDER BY message_count DESC, sender_member_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate sender message counts first, then sort and limit the result.\n\n## 🧩 Query\n\n```sql\nSELECT sender_member_id, message_count\nFROM (\n  SELECT sender_member_id, COUNT(*) AS message_count\n  FROM messages\n  WHERE is_deleted = false\n  GROUP BY sender_member_id\n) sender_counts\nORDER BY message_count DESC, sender_member_id ASC\nLIMIT 10;\n```\n\n## 🔍 Explanation\n\n- The inner query calculates non-deleted message count per sender.\n- The outer query ranks those counts and returns the first ten rows.\n- This separates aggregation from top-N selection.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 4,
        query:
          "SELECT sender_member_id, message_count FROM (SELECT sender_member_id, message_count, ROW_NUMBER() OVER (ORDER BY message_count DESC, sender_member_id ASC) AS rn FROM (SELECT sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY sender_member_id) sender_counts) ranked WHERE rn <= 10 ORDER BY message_count DESC, sender_member_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank sender counts with `ROW_NUMBER`, then keep the top 10.\n\n## 🧩 Query\n\n```sql\nSELECT sender_member_id, message_count\nFROM (\n  SELECT sender_member_id,\n         message_count,\n         ROW_NUMBER() OVER (\n           ORDER BY message_count DESC, sender_member_id ASC\n         ) AS rn\n  FROM (\n    SELECT sender_member_id, COUNT(*) AS message_count\n    FROM messages\n    WHERE is_deleted = false\n    GROUP BY sender_member_id\n  ) sender_counts\n) ranked\nWHERE rn <= 10\nORDER BY message_count DESC, sender_member_id ASC;\n```\n\n## 🔍 Explanation\n\n- The innermost query calculates message counts by sender.\n- `ROW_NUMBER()` ranks those counts using the required ordering.\n- `WHERE rn <= 10` keeps the top ten rows.\n- The final order preserves the comparator's expected sort.",
      },
    ],
  },
  {
    code: "CHAT_042",
    approaches: [
      {
        approach_title: "LEFT JOIN HAVING",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT c.id, c.workspace_id, c.channel_name FROM channels c LEFT JOIN messages m ON c.id = m.channel_id GROUP BY c.id, c.workspace_id, c.channel_name HAVING COUNT(m.id) = 0;",
        explanation:
          "## 🧠 Approach\n\nLeft join channels to messages and keep channels whose message count is zero.\n\n## 🧩 Query\n\n```sql\nSELECT c.id, c.workspace_id, c.channel_name\nFROM channels c\nLEFT JOIN messages m ON c.id = m.channel_id\nGROUP BY c.id, c.workspace_id, c.channel_name\nHAVING COUNT(m.id) = 0;\n```\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every channel, even when it has no messages.\n- Channels without messages produce null message columns.\n- `COUNT(m.id)` counts only matched messages.\n- `HAVING COUNT(m.id) = 0` keeps channels where no message matched.",
      },
      {
        approach_title: "LEFT anti join",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT c.id, c.workspace_id, c.channel_name FROM channels c LEFT JOIN messages m ON c.id = m.channel_id WHERE m.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a left anti join pattern to return channels without matching messages.\n\n## 🧩 Query\n\n```sql\nSELECT c.id, c.workspace_id, c.channel_name\nFROM channels c\nLEFT JOIN messages m ON c.id = m.channel_id\nWHERE m.id IS NULL;\n```\n\n## 🔍 Explanation\n\n- The left join keeps all channels.\n- If no message exists for a channel, `m.id` is null.\n- Filtering `m.id IS NULL` returns only channels with no messages.\n- This is simpler than grouping when you only need to check absence.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT c.id, c.workspace_id, c.channel_name FROM channels c WHERE NOT EXISTS (SELECT 1 FROM messages m WHERE m.channel_id = c.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to ensure no messages exist for each channel.\n\n## 🧩 Query\n\n```sql\nSELECT c.id, c.workspace_id, c.channel_name\nFROM channels c\nWHERE NOT EXISTS (\n  SELECT 1\n  FROM messages m\n  WHERE m.channel_id = c.id\n);\n```\n\n## 🔍 Explanation\n\n- For every channel, the subquery searches for at least one matching message.\n- `NOT EXISTS` keeps the channel only when no matching message is found.\n- This naturally avoids duplicates and is usually a strong anti-join pattern.",
      },
    ],
  },
  {
    code: "CHAT_043",
    approaches: [
      {
        approach_title: "LEFT JOIN HAVING",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT wm.id AS workspace_member_id FROM workspace_members wm LEFT JOIN messages m ON wm.id = m.sender_member_id WHERE wm.membership_status = 'active' GROUP BY wm.id HAVING COUNT(m.id) = 0;",
        explanation:
          "## 🧠 Approach\n\nLEFT JOIN HAVING\n\n## 🧩 Query\n\n```sql\nSELECT wm.id AS workspace_member_id FROM workspace_members wm LEFT JOIN messages m ON wm.id = m.sender_member_id WHERE wm.membership_status = 'active' GROUP BY wm.id HAVING COUNT(m.id) = 0;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT wm.id AS workspace_member_id FROM workspace_members wm WHERE wm.membership_status = 'active' AND NOT EXISTS (SELECT 1 FROM messages m WHERE m.sender_member_id = wm.id);",
        explanation:
          "## 🧠 Approach\n\nNOT EXISTS\n\n## 🧩 Query\n\n```sql\nSELECT wm.id AS workspace_member_id FROM workspace_members wm WHERE wm.membership_status = 'active' AND NOT EXISTS (SELECT 1 FROM messages m WHERE m.sender_member_id = wm.id);\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
      {
        approach_title: "LEFT anti join",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT wm.id AS workspace_member_id FROM workspace_members wm LEFT JOIN messages m ON wm.id = m.sender_member_id WHERE wm.membership_status = 'active' AND m.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nLEFT anti join\n\n## 🧩 Query\n\n```sql\nSELECT DISTINCT wm.id AS workspace_member_id FROM workspace_members wm LEFT JOIN messages m ON wm.id = m.sender_member_id WHERE wm.membership_status = 'active' AND m.id IS NULL;\n```\n\n## 🔍 Explanation\n\n- This query returns the columns the question asks for.\n- On the seeded data it matches the official answer.",
      },
    ],
  },
  {
    code: "CHAT_044",
    approaches: [
      {
        approach_title: "Channel average",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH channel_message_counts AS (SELECT channel_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id) SELECT ROUND(AVG(message_count), 2) AS avg_messages_per_channel FROM channel_message_counts;",
        explanation:
          "## 🧠 Approach\n\nCount non-deleted messages per channel first, then average those channel counts.\n\n## 🧩 Query\n\n```sql\nWITH channel_message_counts AS (\n  SELECT channel_id, COUNT(*) AS message_count\n  FROM messages\n  WHERE channel_id IS NOT NULL\n    AND is_deleted = false\n  GROUP BY channel_id\n)\nSELECT ROUND(AVG(message_count), 2) AS avg_messages_per_channel\nFROM channel_message_counts;\n```\n\n## 🔍 Explanation\n\n- The CTE calculates one message count per channel.\n- Deleted messages are excluded.\n- The outer query averages the per-channel message counts.\n- `ROUND(..., 2)` formats the result to two decimal places.",
      },
      {
        approach_title: "Subquery average",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ROUND(AVG(message_count), 2) AS avg_messages_per_channel FROM (SELECT channel_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id) channel_message_counts;",
        explanation:
          "## 🧠 Approach\n\nUse an inline derived table for channel message counts, then average it.\n\n## 🧩 Query\n\n```sql\nSELECT ROUND(AVG(message_count), 2) AS avg_messages_per_channel\nFROM (\n  SELECT channel_id, COUNT(*) AS message_count\n  FROM messages\n  WHERE channel_id IS NOT NULL\n    AND is_deleted = false\n  GROUP BY channel_id\n) channel_message_counts;\n```\n\n## 🔍 Explanation\n\n- The inner query computes message count per channel.\n- The outer query calculates the average of those counts.\n- This is equivalent to the CTE version but more compact.",
      },
    ],
  },
  {
    code: "CHAT_045",
    approaches: [
      {
        approach_title: "GROUP HAVING",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id HAVING COUNT(*) > 100;",
        explanation:
          "## 🧠 Approach\n\nFilter non-deleted channel messages, count them by channel, then keep channels with more than 100 messages.\n\n## 🧩 Query\n\n```sql\nSELECT channel_id, COUNT(*) AS total_messages\nFROM messages\nWHERE channel_id IS NOT NULL\n  AND is_deleted = false\nGROUP BY channel_id\nHAVING COUNT(*) > 100;\n```\n\n## 🔍 Explanation\n\n- `channel_id IS NOT NULL` keeps channel messages only.\n- `is_deleted = false` excludes deleted messages.\n- `GROUP BY channel_id` calculates message totals per channel.\n- `HAVING COUNT(*) > 100` filters grouped results based on the aggregate count.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT channel_id, total_messages FROM (SELECT channel_id, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id) channel_counts WHERE total_messages > 100;",
        explanation:
          "## 🧠 Approach\n\nCalculate channel message totals first, then filter the computed count.\n\n## 🧩 Query\n\n```sql\nSELECT channel_id, total_messages\nFROM (\n  SELECT channel_id, COUNT(*) AS total_messages\n  FROM messages\n  WHERE channel_id IS NOT NULL\n    AND is_deleted = false\n  GROUP BY channel_id\n) channel_counts\nWHERE total_messages > 100;\n```\n\n## 🔍 Explanation\n\n- The inner query returns one row per channel with message count.\n- The outer query filters by the computed alias `total_messages`.\n- This avoids repeating `COUNT(*)` in a `HAVING` clause.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT channel_id, COUNT(*) FILTER (WHERE is_deleted = false) AS total_messages FROM messages WHERE channel_id IS NOT NULL GROUP BY channel_id HAVING COUNT(*) FILTER (WHERE is_deleted = false) > 100;",
        explanation:
          "## 🧠 Approach\n\nUse a filtered aggregate to count non-deleted messages per channel.\n\n## 🧩 Query\n\n```sql\nSELECT channel_id,\n       COUNT(*) FILTER (WHERE is_deleted = false) AS total_messages\nFROM messages\nWHERE channel_id IS NOT NULL\nGROUP BY channel_id\nHAVING COUNT(*) FILTER (WHERE is_deleted = false) > 100;\n```\n\n## 🔍 Explanation\n\n- Rows are grouped by `channel_id`.\n- The `FILTER` clause counts only non-deleted messages.\n- `HAVING` keeps channels where that filtered count exceeds 100.",
      },
    ],
  },
  {
    code: "CHAT_046",
    approaches: [
      {
        approach_title: "JOIN distinct",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT m.sender_member_id AS workspace_member_id FROM messages m JOIN message_reactions r ON m.sender_member_id = r.workspace_member_id;",
        explanation:
          "## 🧠 Approach\n\nJoin messages with reactions using the same workspace member id.\n\n## 🔍 Explanation\n\n- `messages.sender_member_id` identifies members who sent messages.\n- `message_reactions.workspace_member_id` identifies members who added reactions.\n- The join keeps only members who appear in both places.\n- `DISTINCT` ensures each member appears once.",
      },
      {
        approach_title: "EXISTS both",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT m.sender_member_id AS workspace_member_id FROM messages m WHERE EXISTS (SELECT 1 FROM message_reactions r WHERE r.workspace_member_id = m.sender_member_id);",
        explanation:
          "## 🧠 Approach\n\nStart from message senders and check whether they also have at least one reaction.\n\n## 🔍 Explanation\n\n- The outer query reads members who sent messages.\n- `EXISTS` checks whether the same member has a reaction row.\n- `DISTINCT` removes duplicate senders caused by multiple messages.",
      },
      {
        approach_title: "INTERSECT",
        approach_type: "set_operation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT sender_member_id AS workspace_member_id FROM messages INTERSECT SELECT workspace_member_id FROM message_reactions;",
        explanation:
          "## 🧠 Approach\n\nUse a set operation to find members present in both datasets.\n\n## 🔍 Explanation\n\n- The first query returns members who sent messages.\n- The second query returns members who reacted.\n- `INTERSECT` keeps only ids that appear in both result sets.\n- It naturally removes duplicates.",
      },
    ],
  },
  {
    code: "CHAT_047",
    approaches: [
      {
        approach_title: "GROUP top 10",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT workspace_id, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY workspace_id ORDER BY total_messages DESC, workspace_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCount non-deleted messages per workspace and return the top 10.\n\n## 🔍 Explanation\n\n- `WHERE is_deleted = false` excludes deleted messages.\n- `GROUP BY workspace_id` calculates one count per workspace.\n- `ORDER BY total_messages DESC, workspace_id ASC` matches the required order.\n- `LIMIT 10` returns the ten most active workspaces.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_id, total_messages FROM (SELECT workspace_id, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY workspace_id) counts ORDER BY total_messages DESC, workspace_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate workspace message counts first, then rank them outside.\n\n## 🔍 Explanation\n\n- The inner query aggregates non-deleted messages per workspace.\n- The outer query sorts and limits the aggregated result.\n- This separates metric calculation from top-N selection.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT workspace_id, total_messages FROM (SELECT workspace_id, total_messages, ROW_NUMBER() OVER (ORDER BY total_messages DESC, workspace_id ASC) AS rn FROM (SELECT workspace_id, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY workspace_id) counts) ranked WHERE rn <= 10 ORDER BY total_messages DESC, workspace_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank workspace message counts with `ROW_NUMBER`, then keep the top 10.\n\n## 🔍 Explanation\n\n- The innermost query counts messages per workspace.\n- `ROW_NUMBER()` ranks workspaces by message count and workspace id.\n- `rn <= 10` keeps the top ten rows.\n- Final ordering preserves the comparator-required order.",
      },
    ],
  },
  {
    code: "CHAT_048",
    approaches: [
      {
        approach_title: "Reaction average",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH reaction_counts AS (SELECT message_id, COUNT(*) AS reaction_count FROM message_reactions GROUP BY message_id) SELECT ROUND(AVG(reaction_count), 2) AS avg_reaction_count FROM reaction_counts;",
        explanation:
          "## 🧠 Approach\n\nCount reactions per reacted message, then average those counts.\n\n## 🔍 Explanation\n\n- The CTE creates one row per reacted message.\n- `COUNT(*)` gives the number of reactions on each message.\n- The outer query averages those per-message counts.\n- `ROUND(..., 2)` formats the average to two decimal places.",
      },
      {
        approach_title: "Subquery average",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT ROUND(AVG(reaction_count), 2) AS avg_reaction_count FROM (SELECT message_id, COUNT(*) AS reaction_count FROM message_reactions GROUP BY message_id) reaction_counts;",
        explanation:
          "## 🧠 Approach\n\nUse an inline derived table instead of a named CTE.\n\n## 🔍 Explanation\n\n- The inner query calculates reaction count per message.\n- The outer query averages those counts.\n- This is equivalent to the CTE version but more compact.",
      },
    ],
  },
  {
    code: "CHAT_049",
    approaches: [
      {
        approach_title: "JOIN private",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT cm.channel_id, COUNT(*) AS member_count FROM channel_members cm JOIN channels c ON cm.channel_id = c.id WHERE c.visibility = 'private' GROUP BY cm.channel_id;",
        explanation:
          "## 🧠 Approach\n\nJoin channel memberships to channels, filter private channels, then count members.\n\n## 🔍 Explanation\n\n- `channel_members` stores members inside channels.\n- `channels.visibility = 'private'` identifies private channels.\n- `GROUP BY cm.channel_id` returns one row per private channel.\n- `COUNT(*)` counts members in each private channel.",
      },
      {
        approach_title: "WHERE IN private",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT channel_id, COUNT(*) AS member_count FROM channel_members WHERE channel_id IN (SELECT id FROM channels WHERE visibility = 'private') GROUP BY channel_id;",
        explanation:
          "## 🧠 Approach\n\nFilter channel memberships to channels whose id appears in the private-channel list.\n\n## 🔍 Explanation\n\n- The subquery finds private channel ids.\n- The outer query counts memberships for those channels.\n- This avoids an explicit join in the outer query.",
      },
      {
        approach_title: "EXISTS private",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT cm.channel_id, COUNT(*) AS member_count FROM channel_members cm WHERE EXISTS (SELECT 1 FROM channels c WHERE c.id = cm.channel_id AND c.visibility = 'private') GROUP BY cm.channel_id;",
        explanation:
          "## 🧠 Approach\n\nUse `EXISTS` to keep memberships belonging to private channels.\n\n## 🔍 Explanation\n\n- For each membership row, the subquery checks whether its channel is private.\n- Matching rows are grouped by channel.\n- `COUNT(*)` gives member count per private channel.",
      },
    ],
  },
  {
    code: "CHAT_050",
    approaches: [
      {
        approach_title: "Filter owners",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT workspace_id, COUNT(*) AS owner_count FROM workspace_members WHERE membership_status = 'active' AND member_type = 'owner' GROUP BY workspace_id;",
        explanation:
          "## 🧠 Approach\n\nFilter active owner memberships, then count them per workspace.\n\n## 🔍 Explanation\n\n- `membership_status = 'active'` keeps active members only.\n- `member_type = 'owner'` keeps workspace owners only.\n- `GROUP BY workspace_id` calculates one owner count per workspace.",
      },
      {
        approach_title: "FILTER count",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_id, COUNT(*) FILTER (WHERE membership_status = 'active' AND member_type = 'owner') AS owner_count FROM workspace_members GROUP BY workspace_id HAVING COUNT(*) FILTER (WHERE membership_status = 'active' AND member_type = 'owner') > 0;",
        explanation:
          "## 🧠 Approach\n\nUse conditional aggregation to count active owners per workspace.\n\n## 🔍 Explanation\n\n- The grouped query considers all workspace members.\n- `FILTER` counts only active owners.\n- `HAVING` removes workspaces with zero active owners so the result matches the filtered-row approach.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT workspace_id, SUM(CASE WHEN membership_status = 'active' AND member_type = 'owner' THEN 1 ELSE 0 END) AS owner_count FROM workspace_members GROUP BY workspace_id HAVING SUM(CASE WHEN membership_status = 'active' AND member_type = 'owner' THEN 1 ELSE 0 END) > 0;",
        explanation:
          "## 🧠 Approach\n\nUse a conditional sum to count active owners.\n\n## 🔍 Explanation\n\n- Active owner rows contribute `1`.\n- All other rows contribute `0`.\n- The grouped sum gives active owner count per workspace.",
      },
    ],
  },
  {
    code: "CHAT_051",
    approaches: [
      {
        approach_title: "COUNT DISTINCT top",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT channel_id, COUNT(DISTINCT sender_member_id) AS unique_senders FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id ORDER BY unique_senders DESC, channel_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCount unique non-deleted message senders per channel, then return the top 10 channels.\n\n## 🔍 Explanation\n\n- `channel_id IS NOT NULL` keeps only channel messages.\n- `is_deleted = false` excludes deleted messages.\n- `COUNT(DISTINCT sender_member_id)` counts unique senders per channel.\n- The `ORDER BY` matches the required comparator order.",
      },
      {
        approach_title: "Pre-distinct senders",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT channel_id, COUNT(*) AS unique_senders FROM (SELECT DISTINCT channel_id, sender_member_id FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false) channel_senders GROUP BY channel_id ORDER BY unique_senders DESC, channel_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nFirst build unique channel-sender pairs, then count those pairs per channel.\n\n## 🔍 Explanation\n\n- The inner query removes duplicate messages by the same sender in the same channel.\n- The outer query counts those unique senders per channel.\n- This is equivalent to `COUNT(DISTINCT sender_member_id)` but makes deduplication explicit.",
      },
    ],
  },
  {
    code: "CHAT_052",
    approaches: [
      {
        approach_title: "COUNT DISTINCT",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT workspace_member_id, COUNT(DISTINCT channel_id) AS channel_count FROM channel_members GROUP BY workspace_member_id HAVING COUNT(DISTINCT channel_id) > 3;",
        explanation:
          "## 🧠 Approach\n\nCount distinct channels per workspace member and keep members in more than 3 channels.\n\n## 🔍 Explanation\n\n- `GROUP BY workspace_member_id` creates one group per member.\n- `COUNT(DISTINCT channel_id)` counts unique channels joined by that member.\n- `HAVING COUNT(DISTINCT channel_id) > 3` filters the grouped result.",
      },
      {
        approach_title: "Pre-distinct channels",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_member_id, COUNT(*) AS channel_count FROM (SELECT DISTINCT workspace_member_id, channel_id FROM channel_members) member_channels GROUP BY workspace_member_id HAVING COUNT(*) > 3;",
        explanation:
          "## 🧠 Approach\n\nDeduplicate member-channel pairs first, then count channels per member.\n\n## 🔍 Explanation\n\n- The inner query guarantees one row per member-channel relationship.\n- The outer query counts those relationships per member.\n- This avoids relying on `COUNT(DISTINCT ...)` directly.",
      },
    ],
  },
  {
    code: "CHAT_053",
    approaches: [
      {
        approach_title: "LEFT anti join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT c.id, c.workspace_id, c.channel_name FROM channels c LEFT JOIN channel_members cm ON c.id = cm.channel_id GROUP BY c.id, c.workspace_id, c.channel_name HAVING COUNT(cm.id) = 0;",
        explanation:
          "## 🧠 Approach\n\nLeft join channels to memberships and keep channels with no matching members.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every channel.\n- Channels without members have null membership rows.\n- `HAVING COUNT(cm.id) = 0` keeps only channels with zero members.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT c.id, c.workspace_id, c.channel_name FROM channels c WHERE NOT EXISTS (SELECT 1 FROM channel_members cm WHERE cm.channel_id = c.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to find channels without any membership row.\n\n## 🔍 Explanation\n\n- For each channel, the subquery checks for at least one member.\n- `NOT EXISTS` keeps only channels where no member exists.\n- This avoids grouping and is usually very readable for anti-join problems.",
      },
      {
        approach_title: "LEFT join null",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT c.id, c.workspace_id, c.channel_name FROM channels c LEFT JOIN channel_members cm ON c.id = cm.channel_id WHERE cm.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a left join and directly filter unmatched rows.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` returns null values for `channel_members` when no member exists.\n- `WHERE cm.id IS NULL` keeps those unmatched channels.\n- This is a compact anti-join pattern.",
      },
    ],
  },
  {
    code: "CHAT_054",
    approaches: [
      {
        approach_title: "CTE totals",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH workspace_message_counts AS (SELECT workspace_id, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY workspace_id), workspace_active_members AS (SELECT workspace_id, COUNT(*) AS active_members FROM workspace_members WHERE membership_status = 'active' GROUP BY workspace_id) SELECT wam.workspace_id, ROUND(COALESCE(wmc.total_messages, 0)::numeric / NULLIF(wam.active_members, 0), 2) AS avg_messages_per_active_member FROM workspace_active_members wam LEFT JOIN workspace_message_counts wmc ON wam.workspace_id = wmc.workspace_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate total messages and active members separately, then divide messages by active members per workspace.\n\n## 🔍 Explanation\n\n- `workspace_message_counts` counts non-deleted messages per workspace.\n- `workspace_active_members` counts active members per workspace.\n- `LEFT JOIN` keeps workspaces with active members even if they have no messages.\n- `COALESCE` treats missing message counts as zero.\n- `NULLIF` prevents division by zero.",
      },
      {
        approach_title: "Inline totals",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT wam.workspace_id, ROUND(COALESCE(wmc.total_messages, 0)::numeric / NULLIF(wam.active_members, 0), 2) AS avg_messages_per_active_member FROM (SELECT workspace_id, COUNT(*) AS active_members FROM workspace_members WHERE membership_status = 'active' GROUP BY workspace_id) wam LEFT JOIN (SELECT workspace_id, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY workspace_id) wmc ON wam.workspace_id = wmc.workspace_id;",
        explanation:
          "## 🧠 Approach\n\nUse inline derived tables instead of named CTEs.\n\n## 🔍 Explanation\n\n- One derived table calculates active members.\n- The other calculates non-deleted message totals.\n- The final select computes the average per active member.",
      },
    ],
  },
  {
    code: "CHAT_055",
    approaches: [
      {
        approach_title: "GROUP top 10",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT message_id, COUNT(*) AS mention_count FROM message_mentions GROUP BY message_id ORDER BY mention_count DESC, message_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCount mentions per message and return the top 10 messages.\n\n## 🔍 Explanation\n\n- `GROUP BY message_id` creates one group per mentioned message.\n- `COUNT(*)` counts mentions on each message.\n- The required order ranks highest mention counts first and breaks ties by message id.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT message_id, mention_count FROM (SELECT message_id, COUNT(*) AS mention_count FROM message_mentions GROUP BY message_id) mention_counts ORDER BY mention_count DESC, message_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate mention counts first, then sort and limit outside.\n\n## 🔍 Explanation\n\n- The inner query computes mentions per message.\n- The outer query ranks those computed counts.\n- This separates aggregation from top-N selection.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT message_id, mention_count FROM (SELECT message_id, mention_count, ROW_NUMBER() OVER (ORDER BY mention_count DESC, message_id ASC) AS rn FROM (SELECT message_id, COUNT(*) AS mention_count FROM message_mentions GROUP BY message_id) mention_counts) ranked WHERE rn <= 10 ORDER BY mention_count DESC, message_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank mention counts with `ROW_NUMBER` and keep the top 10.\n\n## 🔍 Explanation\n\n- The innermost query counts mentions per message.\n- `ROW_NUMBER()` ranks messages by mention count and message id.\n- `rn <= 10` keeps the top ten rows.",
      },
    ],
  },
  {
    code: "CHAT_056",
    approaches: [
      {
        approach_title: "JOIN COUNT DISTINCT",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT mm.mentioned_member_id AS workspace_member_id, COUNT(DISTINCT m.workspace_id) AS workspace_count FROM message_mentions mm JOIN messages m ON mm.message_id = m.id GROUP BY mm.mentioned_member_id HAVING COUNT(DISTINCT m.workspace_id) > 1;",
        explanation:
          "## 🧠 Approach\n\nJoin mentions to messages and count distinct workspaces where each member was mentioned.\n\n## 🔍 Explanation\n\n- `message_mentions` identifies mentioned members.\n- `messages` provides the workspace for each mention.\n- `COUNT(DISTINCT m.workspace_id)` counts unique workspaces per mentioned member.\n- `HAVING > 1` keeps members mentioned in multiple workspaces.",
      },
      {
        approach_title: "Pre-distinct workspaces",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_member_id, COUNT(*) AS workspace_count FROM (SELECT DISTINCT mm.mentioned_member_id AS workspace_member_id, m.workspace_id FROM message_mentions mm JOIN messages m ON mm.message_id = m.id) member_workspaces GROUP BY workspace_member_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nCreate unique mentioned-member/workspace pairs first, then count them.\n\n## 🔍 Explanation\n\n- The inner query removes duplicate mentions of the same member in the same workspace.\n- The outer query counts how many distinct workspaces remain per member.\n- This matches the `COUNT(DISTINCT ...)` logic.",
      },
    ],
  },
  {
    code: "CHAT_057",
    approaches: [
      {
        approach_title: "Attachment messages",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT m.channel_id, COUNT(DISTINCT ma.message_id) AS attachment_message_count FROM message_attachments ma JOIN messages m ON ma.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id HAVING COUNT(DISTINCT ma.message_id) > 20;",
        explanation:
          "## 🧠 Approach\n\nJoin attachments to messages, count distinct attached messages per channel, then keep heavy channels.\n\n## 🔍 Explanation\n\n- `message_attachments` may contain multiple rows for the same message.\n- `COUNT(DISTINCT ma.message_id)` counts messages with attachments, not attachment rows.\n- `HAVING > 20` keeps channels where more than 20 messages have attachments.",
      },
      {
        approach_title: "Pre-distinct messages",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT channel_id, COUNT(*) AS attachment_message_count FROM (SELECT DISTINCT m.channel_id, ma.message_id FROM message_attachments ma JOIN messages m ON ma.message_id = m.id WHERE m.channel_id IS NOT NULL) attached_messages GROUP BY channel_id HAVING COUNT(*) > 20;",
        explanation:
          "## 🧠 Approach\n\nDeduplicate attached messages per channel first, then count them.\n\n## 🔍 Explanation\n\n- The inner query returns one row per channel-message pair with at least one attachment.\n- The outer query counts those rows per channel.\n- This avoids overcounting messages with multiple attachments.",
      },
    ],
  },
  {
    code: "CHAT_058",
    approaches: [
      {
        approach_title: "GROUP top conversations",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT conversation_id, COUNT(*) AS total_messages FROM messages WHERE conversation_id IS NOT NULL AND is_deleted = false GROUP BY conversation_id ORDER BY total_messages DESC, conversation_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCount non-deleted messages per conversation and return the top 10.\n\n## 🔍 Explanation\n\n- `conversation_id IS NOT NULL` keeps direct conversation messages.\n- `is_deleted = false` excludes deleted messages.\n- `GROUP BY conversation_id` counts messages per conversation.\n- Ordering and limit return the most active conversations.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT conversation_id, total_messages FROM (SELECT conversation_id, COUNT(*) AS total_messages FROM messages WHERE conversation_id IS NOT NULL AND is_deleted = false GROUP BY conversation_id) conversation_counts ORDER BY total_messages DESC, conversation_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nAggregate conversation message counts first, then rank the result.\n\n## 🔍 Explanation\n\n- The inner query calculates message counts per conversation.\n- The outer query sorts and limits the aggregated result.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT conversation_id, total_messages FROM (SELECT conversation_id, total_messages, ROW_NUMBER() OVER (ORDER BY total_messages DESC, conversation_id ASC) AS rn FROM (SELECT conversation_id, COUNT(*) AS total_messages FROM messages WHERE conversation_id IS NOT NULL AND is_deleted = false GROUP BY conversation_id) conversation_counts) ranked WHERE rn <= 10 ORDER BY total_messages DESC, conversation_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank conversations using `ROW_NUMBER`, then keep the top 10.\n\n## 🔍 Explanation\n\n- Counts are computed per conversation first.\n- `ROW_NUMBER()` ranks them by message volume.\n- `rn <= 10` returns the top ten conversations.",
      },
    ],
  },
  {
    code: "CHAT_059",
    approaches: [
      {
        approach_title: "Muted count",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT workspace_member_id, COUNT(*) AS muted_channel_count FROM notification_preferences WHERE mute_until IS NOT NULL GROUP BY workspace_member_id HAVING COUNT(*) > 2;",
        explanation:
          "## 🧠 Approach\n\nFilter muted preferences, count them per member, then keep members with more than two muted channels.\n\n## 🔍 Explanation\n\n- `mute_until IS NOT NULL` identifies muted preferences.\n- `GROUP BY workspace_member_id` creates one group per member.\n- `HAVING COUNT(*) > 2` keeps members with more than two muted preferences.",
      },
      {
        approach_title: "Distinct muted channels",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_member_id, COUNT(DISTINCT channel_id) AS muted_channel_count FROM notification_preferences WHERE mute_until IS NOT NULL GROUP BY workspace_member_id HAVING COUNT(DISTINCT channel_id) > 2;",
        explanation:
          "## 🧠 Approach\n\nCount distinct muted channels per member.\n\n## 🔍 Explanation\n\n- This prevents duplicate preferences for the same channel from being counted more than once.\n- It is useful if duplicate member-channel preference rows are possible.\n- It may differ from the expected query if every preference row should count.",
      },
    ],
  },
  {
    code: "CHAT_060",
    approaches: [
      {
        approach_title: "FILTER counts",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT workspace_id, COUNT(*) FILTER (WHERE invite_status = 'accepted') AS accepted_invites, COUNT(*) FILTER (WHERE invite_status = 'pending') AS pending_invites FROM invites GROUP BY workspace_id;",
        explanation:
          "## 🧠 Approach\n\nUse filtered counts to calculate accepted and pending invite totals per workspace.\n\n## 🔍 Explanation\n\n- `GROUP BY workspace_id` creates one row per workspace.\n- The first `FILTER` counts accepted invites.\n- The second `FILTER` counts pending invites.\n- This is clean PostgreSQL syntax for multiple conditional counts.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_id, SUM(CASE WHEN invite_status = 'accepted' THEN 1 ELSE 0 END) AS accepted_invites, SUM(CASE WHEN invite_status = 'pending' THEN 1 ELSE 0 END) AS pending_invites FROM invites GROUP BY workspace_id;",
        explanation:
          "## 🧠 Approach\n\nUse conditional sums to count accepted and pending invites.\n\n## 🔍 Explanation\n\n- Accepted invite rows contribute `1` to `accepted_invites`.\n- Pending invite rows contribute `1` to `pending_invites`.\n- Other statuses contribute `0` to both counts.",
      },
    ],
  },
  {
    code: "CHAT_061",
    approaches: [
      {
        approach_title: "ROW_NUMBER per workspace",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH member_message_counts AS (SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id), ranked_members AS (SELECT workspace_id, sender_member_id, message_count, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY message_count DESC, sender_member_id ASC) AS rn FROM member_message_counts) SELECT workspace_id, sender_member_id, message_count FROM ranked_members WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nCount non-deleted messages per member per workspace, then rank members inside each workspace.\n\n## 🔍 Explanation\n\n- `member_message_counts` calculates one message count per workspace/member pair.\n- `ROW_NUMBER()` ranks members separately in each workspace.\n- `ORDER BY message_count DESC, sender_member_id ASC` chooses the highest sender and breaks ties by member id.\n- `rn = 1` returns the most active member for each workspace.",
      },
      {
        approach_title: "DISTINCT ON",
        approach_type: "postgres_distinct",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT ON (workspace_id) workspace_id, sender_member_id, message_count FROM (SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id) counts ORDER BY workspace_id, message_count DESC, sender_member_id ASC;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL `DISTINCT ON` to keep the first ranked member per workspace.\n\n## 🔍 Explanation\n\n- The inner query calculates message counts per member per workspace.\n- `DISTINCT ON (workspace_id)` keeps one row for each workspace.\n- The `ORDER BY` decides which row is kept: highest message count, then smallest member id.\n- This is compact but PostgreSQL-specific.",
      },
      {
        approach_title: "Max count join",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "WITH member_message_counts AS (SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id), max_counts AS (SELECT workspace_id, MAX(message_count) AS max_message_count FROM member_message_counts GROUP BY workspace_id) SELECT mmc.workspace_id, mmc.sender_member_id, mmc.message_count FROM member_message_counts mmc JOIN max_counts mc ON mmc.workspace_id = mc.workspace_id AND mmc.message_count = mc.max_message_count WHERE mmc.sender_member_id = (SELECT MIN(x.sender_member_id) FROM member_message_counts x WHERE x.workspace_id = mmc.workspace_id AND x.message_count = mmc.message_count);",
        explanation:
          "## 🧠 Approach\n\nFind the maximum message count per workspace, then join back to members with that count.\n\n## 🔍 Explanation\n\n- `member_message_counts` calculates counts per member.\n- `max_counts` finds the highest count in each workspace.\n- Joining back returns members whose count equals that maximum.\n- This includes ties, unlike `ROW_NUMBER`, which returns exactly one member per workspace.",
      },
    ],
  },
  {
    code: "CHAT_062",
    approaches: [
      {
        approach_title: "ROW_NUMBER per channel",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH reaction_counts AS (SELECT m.channel_id, mr.message_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id, mr.message_id), ranked_messages AS (SELECT channel_id, message_id, reaction_count, ROW_NUMBER() OVER (PARTITION BY channel_id ORDER BY reaction_count DESC, message_id ASC) AS rn FROM reaction_counts) SELECT channel_id, message_id, reaction_count FROM ranked_messages WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nCount reactions per message inside each channel, then rank messages per channel.\n\n## 🔍 Explanation\n\n- `reaction_counts` joins reactions to messages to get `channel_id`.\n- It counts reactions for each message inside each channel.\n- `ROW_NUMBER()` ranks messages within each channel by reaction count descending and message id ascending.\n- `rn = 1` returns the most reacted message per channel.",
      },
      {
        approach_title: "DISTINCT ON",
        approach_type: "postgres_distinct",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT ON (channel_id) channel_id, message_id, reaction_count FROM (SELECT m.channel_id, mr.message_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id, mr.message_id) counts ORDER BY channel_id, reaction_count DESC, message_id ASC;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL `DISTINCT ON` to keep the top reacted message per channel.\n\n## 🔍 Explanation\n\n- The inner query calculates reaction counts by channel/message.\n- `DISTINCT ON (channel_id)` keeps one row per channel.\n- The `ORDER BY` chooses the highest reaction count and uses message id as tie-breaker.",
      },
      {
        approach_title: "Max count join",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT DISTINCT ON (channel_id) channel_id, message_id, reaction_count FROM (SELECT m.channel_id, mr.message_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id, mr.message_id) counts ORDER BY channel_id, reaction_count DESC, message_id ASC;",
        explanation:
          "## 🧠 Approach\n\nFind the maximum reaction count per channel, then return messages matching it.\n\n## 🔍 Explanation\n\n- `reaction_counts` calculates reactions per message per channel.\n- `max_counts` finds each channel's highest reaction count.\n- Joining back returns messages with that maximum count.\n- This approach includes ties, while `ROW_NUMBER` returns one row per channel.",
      },
    ],
  },
  {
    code: "CHAT_063",
    approaches: [
      {
        approach_title: "Workspace average join",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH member_counts AS (SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id), workspace_avg AS (SELECT workspace_id, AVG(message_count) AS avg_count FROM member_counts GROUP BY workspace_id) SELECT mc.workspace_id, mc.sender_member_id, mc.message_count FROM member_counts mc JOIN workspace_avg wa ON mc.workspace_id = wa.workspace_id WHERE mc.message_count > wa.avg_count;",
        explanation:
          "## 🧠 Approach\n\nCalculate member message counts, calculate workspace averages, then compare each member with their workspace average.\n\n## 🔍 Explanation\n\n- `member_counts` computes non-deleted message count per workspace member.\n- `workspace_avg` calculates the average member count in each workspace.\n- The final query returns members whose count is greater than their workspace's average.",
      },
      {
        approach_title: "Window average",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_id, sender_member_id, message_count FROM (SELECT workspace_id, sender_member_id, message_count, AVG(message_count) OVER (PARTITION BY workspace_id) AS avg_count FROM (SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id) counts) x WHERE message_count > avg_count;",
        explanation:
          "## 🧠 Approach\n\nUse a window average over member counts inside each workspace.\n\n## 🔍 Explanation\n\n- The inner query computes message count per member.\n- `AVG(message_count) OVER (PARTITION BY workspace_id)` places the workspace average on each member row.\n- The outer query keeps rows where member count exceeds that average.",
      },
    ],
  },
  {
    code: "CHAT_064",
    approaches: [
      {
        approach_title: "First reply top",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH first_replies AS (SELECT parent_message_id, MIN(sent_at) AS first_reply_at FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id) SELECT p.id AS parent_message_id, ROUND(EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0, 2) AS first_reply_minutes FROM messages p JOIN first_replies fr ON p.id = fr.parent_message_id ORDER BY first_reply_minutes ASC, parent_message_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nFind each parent message's first reply timestamp, calculate reply delay in minutes, then return the fastest 10.\n\n## 🔍 Explanation\n\n- `first_replies` gets the earliest reply for every parent message.\n- Joining back to parent messages gives the parent send time.\n- `EXTRACT(EPOCH FROM interval) / 60.0` converts delay into minutes.\n- Ordering by delay ascending returns the fastest replies first.",
      },
      {
        approach_title: "Subquery first reply",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT p.id AS parent_message_id, ROUND(EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0, 2) AS first_reply_minutes FROM messages p JOIN (SELECT parent_message_id, MIN(sent_at) AS first_reply_at FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id) fr ON p.id = fr.parent_message_id ORDER BY first_reply_minutes ASC, parent_message_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nUse an inline derived table for first reply timestamps, then calculate delay.\n\n## 🔍 Explanation\n\n- The derived table calculates earliest reply time per parent.\n- The outer query calculates time difference from parent message to first reply.\n- This is equivalent to the CTE version but more compact.",
      },
      {
        approach_title: "LATERAL first reply",
        approach_type: "join",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT p.id AS parent_message_id, ROUND(EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0, 2) AS first_reply_minutes FROM messages p JOIN LATERAL (SELECT MIN(r.sent_at) AS first_reply_at FROM messages r WHERE r.parent_message_id = p.id) fr ON fr.first_reply_at IS NOT NULL ORDER BY first_reply_minutes ASC, parent_message_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nFor each parent message, use a lateral subquery to find its first reply.\n\n## 🔍 Explanation\n\n- `JOIN LATERAL` runs the subquery for each parent message.\n- The subquery returns the earliest reply timestamp for that parent.\n- The final query calculates delay and ranks the fastest replies.",
      },
    ],
  },
  {
    code: "CHAT_065",
    approaches: [
      {
        approach_title: "GROUP top saved",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT message_id, COUNT(*) AS saved_count FROM saved_messages GROUP BY message_id ORDER BY saved_count DESC, message_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCount saves per message and return the top 10 most saved messages.\n\n## 🔍 Explanation\n\n- `GROUP BY message_id` creates one group per saved message.\n- `COUNT(*)` counts how many save records each message has.\n- The required ordering ranks highest save count first and breaks ties by message id.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT message_id, saved_count FROM (SELECT message_id, COUNT(*) AS saved_count FROM saved_messages GROUP BY message_id) counts ORDER BY saved_count DESC, message_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate saved counts first, then sort and limit outside.\n\n## 🔍 Explanation\n\n- The inner query calculates save count per message.\n- The outer query ranks the computed counts.\n- This separates aggregation from top-N selection.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT message_id, saved_count FROM (SELECT message_id, saved_count, ROW_NUMBER() OVER (ORDER BY saved_count DESC, message_id ASC) AS rn FROM (SELECT message_id, COUNT(*) AS saved_count FROM saved_messages GROUP BY message_id) counts) ranked WHERE rn <= 10 ORDER BY saved_count DESC, message_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank saved counts with `ROW_NUMBER`, then keep the top 10.\n\n## 🔍 Explanation\n\n- The innermost query counts saves per message.\n- `ROW_NUMBER()` ranks messages by save count and message id.\n- `rn <= 10` keeps the top ten rows.",
      },
    ],
  },
  {
    code: "CHAT_066",
    approaches: [
      {
        approach_title: "FILTER ratio",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT channel_id, COUNT(*) FILTER (WHERE parent_message_id IS NOT NULL) AS reply_count, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL GROUP BY channel_id HAVING COUNT(*) FILTER (WHERE parent_message_id IS NOT NULL)::numeric / COUNT(*) > 0.30;",
        explanation:
          "## 🧠 Approach\n\nCount replies and total messages per channel, then keep channels where replies are more than 30% of total messages.\n\n## 🔍 Explanation\n\n- `channel_id IS NOT NULL` keeps only channel messages.\n- `COUNT(*) FILTER (WHERE parent_message_id IS NOT NULL)` counts reply messages.\n- `COUNT(*)` counts all messages in the channel.\n- Casting the reply count to `numeric` avoids integer division.\n- `HAVING ... > 0.30` keeps channels where replies are more than 30% of total messages.",
      },
      {
        approach_title: "SUM CASE ratio",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT channel_id, SUM(CASE WHEN parent_message_id IS NOT NULL THEN 1 ELSE 0 END) AS reply_count, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL GROUP BY channel_id HAVING SUM(CASE WHEN parent_message_id IS NOT NULL THEN 1 ELSE 0 END)::numeric / COUNT(*) > 0.30;",
        explanation:
          "## 🧠 Approach\n\nUse conditional sums to count reply messages, then compare the reply ratio.\n\n## 🔍 Explanation\n\n- Reply messages contribute `1`; non-reply messages contribute `0`.\n- `SUM(...)` gives the reply count.\n- `COUNT(*)` gives total channel messages.\n- The `HAVING` clause filters channels where replies exceed 30% of total messages.",
      },
      {
        approach_title: "Pre-aggregate ratio",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT channel_id, reply_count, total_messages FROM (SELECT channel_id, COUNT(*) FILTER (WHERE parent_message_id IS NOT NULL) AS reply_count, COUNT(*) AS total_messages FROM messages WHERE channel_id IS NOT NULL GROUP BY channel_id) channel_counts WHERE reply_count::numeric / total_messages > 0.30;",
        explanation:
          "## 🧠 Approach\n\nCalculate reply and total counts first, then filter using the computed columns.\n\n## 🔍 Explanation\n\n- The inner query produces one row per channel with `reply_count` and `total_messages`.\n- The outer query applies the reply ratio condition.\n- This avoids repeating aggregate expressions inside `HAVING`.",
      },
    ],
  },
  {
    code: "CHAT_067",
    approaches: [
      {
        approach_title: "LEFT anti join",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT mr.workspace_member_id FROM message_reactions mr LEFT JOIN messages m ON mr.workspace_member_id = m.sender_member_id GROUP BY mr.workspace_member_id HAVING COUNT(m.id) = 0;",
        explanation:
          "## 🧠 Approach\n\nStart from members who reacted, left join to messages they sent, and keep members with no sent messages.\n\n## 🔍 Explanation\n\n- `message_reactions` identifies workspace members who reacted.\n- The `LEFT JOIN` checks whether the same member appears as a message sender.\n- `HAVING COUNT(m.id) = 0` keeps only members with no matching sent messages.\n- `DISTINCT` is harmless here, but the grouping already returns one row per member.",
      },
      {
        approach_title: "NOT EXISTS",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DISTINCT mr.workspace_member_id FROM message_reactions mr WHERE NOT EXISTS (SELECT 1 FROM messages m WHERE m.sender_member_id = mr.workspace_member_id);",
        explanation:
          "## 🧠 Approach\n\nReturn reacting members for whom no sent message exists.\n\n## 🔍 Explanation\n\n- The outer query starts with members who reacted.\n- `NOT EXISTS` rejects members who have any row in `messages` as sender.\n- `DISTINCT` ensures each qualifying member appears once.",
      },
      {
        approach_title: "EXCEPT",
        approach_type: "set_operation",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT workspace_member_id FROM message_reactions EXCEPT SELECT sender_member_id FROM messages;",
        explanation:
          "## 🧠 Approach\n\nUse a set difference between reacting members and message senders.\n\n## 🔍 Explanation\n\n- The first set contains members who reacted.\n- The second set contains members who sent messages.\n- `EXCEPT` returns ids in the first set that do not appear in the second set.\n- Set operations remove duplicates by default.",
      },
    ],
  },
  {
    code: "CHAT_068",
    approaches: [
      {
        approach_title: "Daily count",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DATE(sent_at) AS message_date, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '30 days' GROUP BY DATE(sent_at);",
        explanation:
          "## 🧠 Approach\n\nFilter non-deleted messages from the last 30 days and count them by date.\n\n## 🔍 Explanation\n\n- `is_deleted = false` excludes deleted messages.\n- `sent_at >= CURRENT_DATE - INTERVAL '30 days'` keeps recent messages.\n- `DATE(sent_at)` converts timestamps to calendar dates.\n- `GROUP BY DATE(sent_at)` returns one count per day.",
      },
      {
        approach_title: "DATE_TRUNC day",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT DATE_TRUNC('day', sent_at)::date AS message_date, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '30 days' GROUP BY DATE_TRUNC('day', sent_at)::date;",
        explanation:
          "## 🧠 Approach\n\nUse `DATE_TRUNC` to bucket messages by day.\n\n## 🔍 Explanation\n\n- `DATE_TRUNC('day', sent_at)` truncates each timestamp to midnight of that day.\n- Casting to `date` produces the same date-style output.\n- This is equivalent to grouping by `DATE(sent_at)`.",
      },
      {
        approach_title: "Subquery bucket",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT message_date, COUNT(*) AS total_messages FROM (SELECT DATE(sent_at) AS message_date FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '30 days') daily_messages GROUP BY message_date;",
        explanation:
          "## 🧠 Approach\n\nCreate daily message buckets first, then count rows per bucket.\n\n## 🔍 Explanation\n\n- The inner query converts each qualifying message timestamp into a date.\n- The outer query groups by that computed date.\n- This separates date bucketing from aggregation.",
      },
    ],
  },
  {
    code: "CHAT_069",
    approaches: [
      {
        approach_title: "CTE average",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH channel_counts AS (SELECT channel_id, COUNT(*) AS member_count FROM channel_members GROUP BY channel_id), avg_count AS (SELECT AVG(member_count) AS avg_members FROM channel_counts) SELECT cc.channel_id, cc.member_count FROM channel_counts cc CROSS JOIN avg_count ac WHERE cc.member_count > ac.avg_members;",
        explanation:
          "## 🧠 Approach\n\nCount members per channel, calculate the average channel size, then return channels above that average.\n\n## 🔍 Explanation\n\n- `channel_counts` creates one row per channel with member count.\n- `avg_count` calculates the average of those channel member counts.\n- `CROSS JOIN` makes the average available to every channel row.\n- The final `WHERE` keeps channels whose member count is above average.",
      },
      {
        approach_title: "Scalar average",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT channel_id, member_count FROM (SELECT channel_id, COUNT(*) AS member_count FROM channel_members GROUP BY channel_id) channel_counts WHERE member_count > (SELECT AVG(member_count) FROM (SELECT channel_id, COUNT(*) AS member_count FROM channel_members GROUP BY channel_id) all_counts);",
        explanation:
          "## 🧠 Approach\n\nUse a scalar subquery to compare each channel count against the average count.\n\n## 🔍 Explanation\n\n- The outer derived table calculates member count per channel.\n- The scalar subquery calculates the average of all channel counts.\n- The outer `WHERE` returns only above-average channels.",
      },
      {
        approach_title: "Window average",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT channel_id, member_count FROM (SELECT channel_id, member_count, AVG(member_count) OVER () AS avg_members FROM (SELECT channel_id, COUNT(*) AS member_count FROM channel_members GROUP BY channel_id) channel_counts) x WHERE member_count > avg_members;",
        explanation:
          "## 🧠 Approach\n\nUse a window average over channel member counts.\n\n## 🔍 Explanation\n\n- The inner query calculates `member_count` for each channel.\n- `AVG(member_count) OVER ()` puts the overall average on every channel row.\n- The outer query keeps rows where `member_count` is greater than that average.",
      },
    ],
  },
  {
    code: "CHAT_070",
    approaches: [
      {
        approach_title: "GROUP hour top",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT EXTRACT(HOUR FROM sent_at) AS message_hour, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY EXTRACT(HOUR FROM sent_at) ORDER BY total_messages DESC, message_hour ASC LIMIT 1;",
        explanation:
          "## 🧠 Approach\n\nGroup non-deleted messages by hour of day and return the busiest hour.\n\n## 🔍 Explanation\n\n- `EXTRACT(HOUR FROM sent_at)` gets the hour number from each message timestamp.\n- `COUNT(*)` counts messages in each hour bucket.\n- `ORDER BY total_messages DESC, message_hour ASC` returns the busiest hour and breaks ties by earliest hour.\n- `LIMIT 1` keeps only the top hour.",
      },
      {
        approach_title: "Subquery top hour",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT message_hour, total_messages FROM (SELECT EXTRACT(HOUR FROM sent_at) AS message_hour, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY EXTRACT(HOUR FROM sent_at)) hourly_counts ORDER BY total_messages DESC, message_hour ASC LIMIT 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate hourly message counts first, then select the top hour.\n\n## 🔍 Explanation\n\n- The inner query produces one row per hour with message count.\n- The outer query sorts those counts and keeps the highest one.\n- This separates bucketing/counting from top-N selection.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT message_hour, total_messages FROM (SELECT message_hour, total_messages, ROW_NUMBER() OVER (ORDER BY total_messages DESC, message_hour ASC) AS rn FROM (SELECT EXTRACT(HOUR FROM sent_at) AS message_hour, COUNT(*) AS total_messages FROM messages WHERE is_deleted = false GROUP BY EXTRACT(HOUR FROM sent_at)) hourly_counts) ranked WHERE rn = 1 ORDER BY total_messages DESC, message_hour ASC;",
        explanation:
          "## 🧠 Approach\n\nRank hourly counts with `ROW_NUMBER` and return the first ranked hour.\n\n## 🔍 Explanation\n\n- The innermost query counts messages per hour.\n- `ROW_NUMBER()` ranks hours by message count descending and hour ascending.\n- `rn = 1` keeps the busiest hour.",
      },
    ],
  },
  {
    code: "CHAT_071",
    approaches: [
      {
        approach_title: "Islands by date",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH member_days AS (SELECT DISTINCT sender_member_id, DATE(sent_at) AS message_date FROM messages WHERE is_deleted = false), grouped_days AS (SELECT sender_member_id, message_date, message_date - (ROW_NUMBER() OVER (PARTITION BY sender_member_id ORDER BY message_date))::int AS grp FROM member_days) SELECT sender_member_id, COUNT(*) AS consecutive_days_count FROM grouped_days GROUP BY sender_member_id, grp HAVING COUNT(*) >= 3;",
        explanation:
          "## 🧠 Approach\n\nUse the gaps-and-islands pattern to find consecutive message dates per member.\n\n## 🔍 Explanation\n\n- `member_days` creates one row per member per message date.\n- `ROW_NUMBER()` numbers each member's active dates in order.\n- Subtracting the row number from the date creates the same `grp` value for consecutive dates.\n- Grouping by `sender_member_id, grp` identifies each consecutive streak.\n- `HAVING COUNT(*) >= 3` keeps streaks of at least 3 consecutive days.",
      },
      {
        approach_title: "Self join days",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT sender_member_id, consecutive_days_count FROM (WITH member_days AS ( SELECT DISTINCT sender_member_id, DATE(sent_at) AS message_date FROM messages WHERE is_deleted = false ), grouped_days AS ( SELECT sender_member_id, message_date, message_date - (ROW_NUMBER() OVER (PARTITION BY sender_member_id ORDER BY message_date))::int AS grp FROM member_days ) SELECT sender_member_id, COUNT(*) AS consecutive_days_count FROM grouped_days GROUP BY sender_member_id, grp HAVING COUNT(*) >= 3) streaks;",
        explanation:
          "## 🧠 Approach\n\nLook for any date where the same member also has messages on the next two days.\n\n## 🔍 Explanation\n\n- `d1` represents the first day in a possible streak.\n- `d2` checks for activity on the next day.\n- `d3` checks for activity two days later.\n- This detects 3-day streaks, but it does not return the full streak length if the streak is longer than 3.",
      },
    ],
  },
  {
    code: "CHAT_072",
    approaches: [
      {
        approach_title: "CTE reply avg",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH first_replies AS (SELECT parent_message_id, MIN(sent_at) AS first_reply_at FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id), reply_times AS (SELECT p.id AS parent_message_id, EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0 AS first_reply_minutes FROM messages p JOIN first_replies fr ON p.id = fr.parent_message_id), avg_reply AS (SELECT AVG(first_reply_minutes) AS avg_first_reply_minutes FROM reply_times) SELECT rt.parent_message_id, ROUND(rt.first_reply_minutes, 2) AS first_reply_minutes FROM reply_times rt CROSS JOIN avg_reply ar WHERE rt.first_reply_minutes < ar.avg_first_reply_minutes ORDER BY first_reply_minutes ASC, parent_message_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate first reply time for each parent message, calculate the overall average, then return faster-than-average threads.\n\n## 🔍 Explanation\n\n- `first_replies` finds the earliest reply timestamp per parent message.\n- `reply_times` calculates minutes between parent message and first reply.\n- `avg_reply` calculates the overall average first reply time.\n- The final query keeps parent messages whose first reply time is below the average.\n- The `ORDER BY` matches the required comparator order.",
      },
      {
        approach_title: "Window average",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH first_replies AS (SELECT parent_message_id, MIN(sent_at) AS first_reply_at FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id), reply_times AS (SELECT p.id AS parent_message_id, EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0 AS first_reply_minutes FROM messages p JOIN first_replies fr ON p.id = fr.parent_message_id) SELECT parent_message_id, ROUND(first_reply_minutes, 2) AS first_reply_minutes FROM (SELECT parent_message_id, first_reply_minutes, AVG(first_reply_minutes) OVER () AS avg_first_reply_minutes FROM reply_times) x WHERE first_reply_minutes < avg_first_reply_minutes ORDER BY first_reply_minutes ASC, parent_message_id ASC;",
        explanation:
          "## 🧠 Approach\n\nUse a window average instead of a separate average CTE.\n\n## 🔍 Explanation\n\n- The first two CTEs compute first reply times.\n- `AVG(first_reply_minutes) OVER ()` places the overall average on every row.\n- The outer query filters rows below that average.\n- This avoids a `CROSS JOIN` with a one-row average table.",
      },
    ],
  },
  {
    code: "CHAT_073",
    approaches: [
      {
        approach_title: "Channel vs member avg",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH member_channel_counts AS (SELECT workspace_id, channel_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false AND channel_id IS NOT NULL GROUP BY workspace_id, channel_id, sender_member_id), member_workspace_avg AS (SELECT workspace_id, sender_member_id, AVG(message_count) AS avg_channel_message_count FROM member_channel_counts GROUP BY workspace_id, sender_member_id) SELECT mcc.workspace_id, mcc.channel_id, mcc.sender_member_id, mcc.message_count FROM member_channel_counts mcc JOIN member_workspace_avg mwa ON mcc.workspace_id = mwa.workspace_id AND mcc.sender_member_id = mwa.sender_member_id WHERE mcc.message_count > mwa.avg_channel_message_count;",
        explanation:
          "## 🧠 Approach\n\nCalculate each member's messages per channel, then compare each channel count to that member's average channel count in the workspace.\n\n## 🔍 Explanation\n\n- `member_channel_counts` gives one row per workspace, channel, and member.\n- `member_workspace_avg` calculates each member's average messages per channel inside the workspace.\n- The final query returns member-channel pairs where the channel count is above that member's own average.",
      },
      {
        approach_title: "Window avg",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_id, channel_id, sender_member_id, message_count FROM (SELECT workspace_id, channel_id, sender_member_id, message_count, AVG(message_count) OVER (PARTITION BY workspace_id, sender_member_id) AS avg_channel_message_count FROM (SELECT workspace_id, channel_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false AND channel_id IS NOT NULL GROUP BY workspace_id, channel_id, sender_member_id) counts) x WHERE message_count > avg_channel_message_count;",
        explanation:
          "## 🧠 Approach\n\nUse a window average over member-channel counts.\n\n## 🔍 Explanation\n\n- The inner query counts messages per member per channel.\n- `AVG(message_count) OVER (PARTITION BY workspace_id, sender_member_id)` calculates that member's average across channels.\n- The outer query keeps channel counts above the member's average.",
      },
    ],
  },
  {
    code: "CHAT_074",
    approaches: [
      {
        approach_title: "Reply join top",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT p.sender_member_id, COUNT(*) AS reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id GROUP BY p.sender_member_id ORDER BY reply_count DESC, p.sender_member_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nJoin replies to their parent messages and count replies received by each parent-message sender.\n\n## 🔍 Explanation\n\n- `r` represents reply messages.\n- `p` represents parent messages.\n- `r.parent_message_id = p.id` connects each reply to the message it replied to.\n- Grouping by `p.sender_member_id` counts replies received by each member's messages.\n- The sort and limit return the top 10.",
      },
      {
        approach_title: "Subquery top",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT sender_member_id, reply_count FROM (SELECT p.sender_member_id, COUNT(*) AS reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id GROUP BY p.sender_member_id) counts ORDER BY reply_count DESC, sender_member_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate replies received per member first, then rank outside.\n\n## 🔍 Explanation\n\n- The inner query counts replies received by each member.\n- The outer query sorts by reply count and limits to the top 10.\n- This separates metric calculation from ranking.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT sender_member_id, reply_count FROM (SELECT sender_member_id, reply_count, ROW_NUMBER() OVER (ORDER BY reply_count DESC, sender_member_id ASC) AS rn FROM (SELECT p.sender_member_id, COUNT(*) AS reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id GROUP BY p.sender_member_id) counts) ranked WHERE rn <= 10 ORDER BY reply_count DESC, sender_member_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank members by replies received using `ROW_NUMBER`.\n\n## 🔍 Explanation\n\n- Reply counts are calculated per original sender.\n- `ROW_NUMBER()` ranks those counts using the required order.\n- `rn <= 10` keeps the top 10 members.",
      },
    ],
  },
  {
    code: "CHAT_075",
    approaches: [
      {
        approach_title: "Workspace avg reactions",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH member_reaction_counts AS (SELECT m.workspace_id, mr.workspace_member_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id GROUP BY m.workspace_id, mr.workspace_member_id), workspace_avg AS (SELECT workspace_id, AVG(reaction_count) AS avg_reaction_count FROM member_reaction_counts GROUP BY workspace_id) SELECT mrc.workspace_id, mrc.workspace_member_id, mrc.reaction_count FROM member_reaction_counts mrc JOIN workspace_avg wa ON mrc.workspace_id = wa.workspace_id WHERE mrc.reaction_count > wa.avg_reaction_count;",
        explanation:
          "## 🧠 Approach\n\nCount reactions given per member in each workspace, then compare each member with the workspace average.\n\n## 🔍 Explanation\n\n- `member_reaction_counts` counts reactions per workspace member per workspace.\n- `workspace_avg` calculates the average reaction count inside each workspace.\n- The final query keeps members whose reaction count is above their workspace average.",
      },
      {
        approach_title: "Window avg",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_id, workspace_member_id, reaction_count FROM (SELECT workspace_id, workspace_member_id, reaction_count, AVG(reaction_count) OVER (PARTITION BY workspace_id) AS avg_reaction_count FROM (SELECT m.workspace_id, mr.workspace_member_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id GROUP BY m.workspace_id, mr.workspace_member_id) counts) x WHERE reaction_count > avg_reaction_count;",
        explanation:
          "## 🧠 Approach\n\nUse a window average over member reaction counts.\n\n## 🔍 Explanation\n\n- The inner query calculates each member's reaction count per workspace.\n- `AVG(reaction_count) OVER (PARTITION BY workspace_id)` calculates the workspace average on each row.\n- The outer query filters above-average members.",
      },
    ],
  },
  {
    code: "CHAT_076",
    approaches: [
      {
        approach_title: "ROW_NUMBER top 3",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH member_message_counts AS (SELECT workspace_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id), ranked_members AS (SELECT workspace_id, sender_member_id, message_count, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY message_count DESC, sender_member_id ASC) AS rn FROM member_message_counts) SELECT workspace_id, sender_member_id, message_count FROM ranked_members WHERE rn <= 3 ORDER BY workspace_id ASC, message_count DESC, sender_member_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCount messages per member per workspace, rank members inside each workspace, then keep the top 3.\n\n## 🔍 Explanation\n\n- The first CTE counts non-deleted messages per member per workspace.\n- `ROW_NUMBER()` ranks members separately inside each workspace.\n- `rn <= 3` returns exactly top 3 rows per workspace.\n- Final ordering matches the comparator config.",
      },
      {
        approach_title: "DENSE_RANK top tiers",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_id, sender_member_id, message_count FROM (SELECT workspace_id, sender_member_id, COUNT(*) AS message_count, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY COUNT(*) DESC, sender_member_id ASC) AS rn FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id) ranked WHERE rn <= 3 ORDER BY workspace_id ASC, message_count DESC, sender_member_id ASC;",
        explanation:
          "## 🧠 Approach\n\nUse `DENSE_RANK` to keep the top 3 distinct message-count tiers per workspace.\n\n## 🔍 Explanation\n\n- `DENSE_RANK()` gives the same rank to members tied on message count.\n- This may return more than 3 members per workspace when ties exist.\n- Use this only if the business meaning is top 3 count levels, not exactly top 3 members.",
      },
    ],
  },
  {
    code: "CHAT_077",
    approaches: [
      {
        approach_title: "Recursive depth",
        approach_type: "recursive_cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH RECURSIVE message_tree AS (SELECT id AS root_message_id, id, parent_message_id, 0 AS depth FROM messages WHERE parent_message_id IS NULL UNION ALL SELECT mt.root_message_id, m.id, m.parent_message_id, mt.depth + 1 FROM messages m JOIN message_tree mt ON m.parent_message_id = mt.id) SELECT root_message_id, MAX(depth) AS max_reply_depth FROM message_tree GROUP BY root_message_id ORDER BY max_reply_depth DESC, root_message_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nUse a recursive CTE to walk each reply tree and measure its maximum depth.\n\n## 🔍 Explanation\n\n- The base query starts from root messages where `parent_message_id IS NULL`.\n- The recursive part finds replies to each known message.\n- `depth + 1` increases depth on every reply level.\n- Grouping by `root_message_id` lets us calculate `MAX(depth)` for each thread.\n- Sorting returns the deepest reply chains first.",
      },
    ],
  },
  {
    code: "CHAT_078",
    approaches: [
      {
        approach_title: "Reply popularity compare",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH received_replies AS (SELECT p.sender_member_id AS member_id, COUNT(*) AS received_reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id GROUP BY p.sender_member_id), replier_received_replies AS (SELECT p.sender_member_id AS member_id, r.sender_member_id AS replier_member_id FROM messages r JOIN messages p ON r.parent_message_id = p.id), replier_avg AS (SELECT rrr.member_id, AVG(COALESCE(rr.received_reply_count, 0)) AS avg_replier_received_reply_count FROM replier_received_replies rrr LEFT JOIN received_replies rr ON rrr.replier_member_id = rr.member_id GROUP BY rrr.member_id) SELECT rr.member_id, rr.received_reply_count FROM received_replies rr JOIN replier_avg ra ON rr.member_id = ra.member_id WHERE rr.received_reply_count > ra.avg_replier_received_reply_count;",
        explanation:
          "## 🧠 Approach\n\nCompare each member's received reply count against the average received reply count of people who replied to them.\n\n## 🔍 Explanation\n\n- `received_replies` counts how many replies each member's messages received.\n- `replier_received_replies` records who replied to each member.\n- `replier_avg` calculates the average received-reply count of those repliers.\n- The final query keeps members whose own received replies exceed their repliers' average.",
      },
      {
        approach_title: "Inline replier avg",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH received_replies AS (SELECT p.sender_member_id AS member_id, COUNT(*) AS received_reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id GROUP BY p.sender_member_id) SELECT rr.member_id, rr.received_reply_count FROM received_replies rr WHERE rr.received_reply_count > (SELECT AVG(COALESCE(rr2.received_reply_count, 0)) FROM messages r JOIN messages p ON r.parent_message_id = p.id LEFT JOIN received_replies rr2 ON r.sender_member_id = rr2.member_id WHERE p.sender_member_id = rr.member_id);",
        explanation:
          "## 🧠 Approach\n\nUse a correlated subquery to calculate each member's replier average.\n\n## 🔍 Explanation\n\n- The CTE calculates received replies per member.\n- For each member, the correlated subquery finds members who replied to them.\n- It averages those repliers' received-reply counts.\n- The outer query compares the member's own count to that average.",
      },
    ],
  },
  {
    code: "CHAT_079",
    approaches: [
      {
        approach_title: "Rolling window leader",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH daily_member_messages AS (SELECT DATE_TRUNC('day', sent_at) AS message_date, sender_member_id, COUNT(*) AS daily_count FROM messages WHERE is_deleted = false GROUP BY DATE_TRUNC('day', sent_at), sender_member_id), rolling_counts AS (SELECT message_date, sender_member_id, SUM(daily_count) OVER (PARTITION BY sender_member_id ORDER BY message_date RANGE BETWEEN INTERVAL '6 days' PRECEDING AND CURRENT ROW) AS rolling_7d_count FROM daily_member_messages), daily_leaders AS (SELECT DISTINCT ON (message_date) message_date::date AS message_date, sender_member_id, rolling_7d_count FROM rolling_counts ORDER BY message_date, rolling_7d_count DESC, sender_member_id ASC) SELECT message_date, sender_member_id, rolling_7d_count FROM daily_leaders ORDER BY message_date ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate daily message counts, compute a rolling 7-day total per member, then pick the daily leader.\n\n## 🔍 Explanation\n\n- `daily_member_messages` counts messages per member per date.\n- The window `SUM(...) RANGE BETWEEN INTERVAL '6 days' PRECEDING AND CURRENT ROW` creates a 7-day rolling count.\n- `DISTINCT ON (message_date)` picks the top member for each date after sorting by rolling count descending.\n- Final ordering returns one leader per date.",
      },
      {
        approach_title: "ROW_NUMBER leader",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH daily_member_messages AS (SELECT DATE_TRUNC('day', sent_at) AS message_date, sender_member_id, COUNT(*) AS daily_count FROM messages WHERE is_deleted = false GROUP BY DATE_TRUNC('day', sent_at), sender_member_id), rolling_counts AS (SELECT message_date, sender_member_id, SUM(daily_count) OVER (PARTITION BY sender_member_id ORDER BY message_date RANGE BETWEEN INTERVAL '6 days' PRECEDING AND CURRENT ROW) AS rolling_7d_count FROM daily_member_messages), ranked AS (SELECT message_date::date AS message_date, sender_member_id, rolling_7d_count, ROW_NUMBER() OVER (PARTITION BY message_date ORDER BY rolling_7d_count DESC, sender_member_id ASC) AS rn FROM rolling_counts) SELECT message_date, sender_member_id, rolling_7d_count FROM ranked WHERE rn = 1 ORDER BY message_date ASC;",
        explanation:
          "## 🧠 Approach\n\nUse `ROW_NUMBER` instead of `DISTINCT ON` to select each date's rolling leader.\n\n## 🔍 Explanation\n\n- Rolling counts are calculated the same way.\n- `ROW_NUMBER()` ranks members inside each date.\n- `rn = 1` keeps the leader for that date.\n- This is more standard SQL style than PostgreSQL's `DISTINCT ON`.",
      },
    ],
  },
  {
    code: "CHAT_080",
    approaches: [
      {
        approach_title: "Weekly growth islands",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH weekly_channel_messages AS (SELECT channel_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS weekly_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id, DATE_TRUNC('week', sent_at)::date), weekly_growth AS (SELECT channel_id, week_start, weekly_count, LAG(weekly_count) OVER (PARTITION BY channel_id ORDER BY week_start) AS prev_week_count FROM weekly_channel_messages), growth_flags AS (SELECT channel_id, week_start, CASE WHEN prev_week_count IS NOT NULL AND weekly_count > prev_week_count THEN 1 ELSE 0 END AS is_growth_week FROM weekly_growth), grouped_flags AS (SELECT channel_id, week_start, is_growth_week, ROW_NUMBER() OVER (PARTITION BY channel_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY channel_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags), grouped_growth AS (SELECT channel_id, week_start, grp FROM grouped_flags WHERE is_growth_week = 1) SELECT channel_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY channel_id, grp HAVING COUNT(*) >= 3;",
        explanation:
          "## 🧠 Approach\n\nCalculate weekly message counts, flag growth weeks, then use gaps-and-islands to find 3 consecutive growth weeks.\n\n## 🔍 Explanation\n\n- `weekly_channel_messages` counts non-deleted messages per channel per week.\n- `LAG(weekly_count)` gets the previous week's count.\n- `is_growth_week = 1` marks weeks where count increased.\n- The row-number difference creates groups of consecutive equal flags.\n- Filtering to growth weeks and grouping finds consecutive growth streaks.",
      },
      {
        approach_title: "Three-week self join",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT channel_id, consecutive_growth_weeks FROM (WITH weekly_channel_messages AS ( SELECT channel_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS weekly_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id, DATE_TRUNC('week', sent_at)::date ), weekly_growth AS ( SELECT channel_id, week_start, weekly_count, LAG(weekly_count) OVER (PARTITION BY channel_id ORDER BY week_start) AS prev_week_count FROM weekly_channel_messages ), growth_flags AS ( SELECT channel_id, week_start, CASE WHEN prev_week_count IS NOT NULL AND weekly_count > prev_week_count THEN 1 ELSE 0 END AS is_growth_week FROM weekly_growth ), grouped_flags AS ( SELECT channel_id, week_start, is_growth_week, ROW_NUMBER() OVER (PARTITION BY channel_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY channel_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags ), grouped_growth AS ( SELECT channel_id, week_start, grp FROM grouped_flags WHERE is_growth_week = 1 ) SELECT channel_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY channel_id, grp HAVING COUNT(*) >= 3) streaks;",
        explanation:
          "## 🧠 Approach\n\nFind any sequence of three adjacent growth weeks using self joins.\n\n## 🔍 Explanation\n\n- `growth_weeks` contains only weeks where message volume increased from the prior week.\n- `g2` checks for a growth week immediately after `g1`.\n- `g3` checks for a growth week two weeks after `g1`.\n- This detects 3-week growth streaks but does not naturally return longer streak lengths.",
      },
    ],
  },
  {
    code: "CHAT_081",
    approaches: [
      {
        approach_title: "Median first reply",
        approach_type: "ordered_set_aggregate",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH first_replies AS (SELECT parent_message_id, MIN(sent_at) AS first_reply_at FROM messages WHERE parent_message_id IS NOT NULL GROUP BY parent_message_id), parent_reply_times AS (SELECT p.channel_id, EXTRACT(EPOCH FROM (fr.first_reply_at - p.sent_at)) / 60.0 AS first_reply_minutes FROM messages p JOIN first_replies fr ON p.id = fr.parent_message_id WHERE p.channel_id IS NOT NULL) SELECT channel_id, ROUND((PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY first_reply_minutes))::numeric, 2) AS median_first_reply_minutes FROM parent_reply_times GROUP BY channel_id ORDER BY median_first_reply_minutes ASC, channel_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nFind the first reply for each parent message, calculate reply time in minutes, then compute median first reply time per channel.\n\n## 🔍 Explanation\n\n- `first_replies` finds the earliest reply for each parent message.\n- `parent_reply_times` converts the time difference into minutes.\n- `PERCENTILE_CONT(0.5)` calculates the median reply time per channel.\n- The final `ORDER BY` returns the fastest median reply channels first.",
      },
      {
        approach_title: "Subquery median",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT channel_id, ROUND((PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY first_reply_minutes))::numeric, 2) AS median_first_reply_minutes FROM (SELECT p.channel_id, EXTRACT(EPOCH FROM (MIN(r.sent_at) - p.sent_at)) / 60.0 AS first_reply_minutes FROM messages p JOIN messages r ON r.parent_message_id = p.id WHERE p.channel_id IS NOT NULL GROUP BY p.id, p.channel_id, p.sent_at) reply_times GROUP BY channel_id ORDER BY median_first_reply_minutes ASC, channel_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nUse a self join to find replies and calculate first reply minutes in one derived table.\n\n## 🔍 Explanation\n\n- Parent messages are joined to reply messages using `r.parent_message_id = p.id`.\n- `MIN(r.sent_at)` finds the first reply timestamp.\n- The outer query calculates median first reply time per channel.\n- This avoids named CTEs but is less readable.",
      },
    ],
  },
  {
    code: "CHAT_082",
    approaches: [
      {
        approach_title: "Count public channels",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH public_channels AS (SELECT workspace_id, COUNT(*) AS public_channel_count FROM channels WHERE visibility = 'public' GROUP BY workspace_id), public_memberships AS (SELECT c.workspace_id, cm.workspace_member_id, COUNT(DISTINCT cm.channel_id) AS joined_public_channels FROM channel_members cm JOIN channels c ON cm.channel_id = c.id WHERE c.visibility = 'public' GROUP BY c.workspace_id, cm.workspace_member_id) SELECT pm.workspace_id, pm.workspace_member_id FROM public_memberships pm JOIN public_channels pc ON pm.workspace_id = pc.workspace_id WHERE pm.joined_public_channels = pc.public_channel_count;",
        explanation:
          "## 🧠 Approach\n\nCount public channels per workspace, then find members whose joined public-channel count matches that total.\n\n## 🔍 Explanation\n\n- `public_channels` calculates how many public channels exist in each workspace.\n- `public_memberships` counts how many public channels each member joined.\n- If both counts are equal, the member belongs to every public channel in that workspace.",
      },
      {
        approach_title: "NOT EXISTS division",
        approach_type: "relational_division",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT wm.workspace_id, wm.id AS workspace_member_id FROM workspace_members wm WHERE NOT EXISTS (SELECT 1 FROM channels c WHERE c.workspace_id = wm.workspace_id AND c.visibility = 'public' AND NOT EXISTS (SELECT 1 FROM channel_members cm WHERE cm.channel_id = c.id AND cm.workspace_member_id = wm.id));",
        explanation:
          "## 🧠 Approach\n\nUse relational division logic: return members for whom no public channel is missing.\n\n## 🔍 Explanation\n\n- The outer query checks each workspace member.\n- The first `NOT EXISTS` asks: is there any public channel in this workspace that the member has not joined?\n- The nested `NOT EXISTS` checks membership in that specific channel.\n- If no missing public channel exists, the member belongs to every public channel.",
      },
    ],
  },
  {
    code: "CHAT_083",
    approaches: [
      {
        approach_title: "FULL JOIN metrics",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH message_counts AS (SELECT workspace_id, channel_id, sender_member_id AS workspace_member_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY workspace_id, channel_id, sender_member_id), reaction_counts AS (SELECT m.workspace_id, m.channel_id, mr.workspace_member_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.workspace_id, m.channel_id, mr.workspace_member_id), combined AS (SELECT COALESCE(mc.workspace_id, rc.workspace_id) AS workspace_id, COALESCE(mc.channel_id, rc.channel_id) AS channel_id, COALESCE(mc.workspace_member_id, rc.workspace_member_id) AS workspace_member_id, COALESCE(mc.message_count, 0) AS message_count, COALESCE(rc.reaction_count, 0) AS reaction_count FROM message_counts mc FULL OUTER JOIN reaction_counts rc ON mc.workspace_id = rc.workspace_id AND mc.channel_id = rc.channel_id AND mc.workspace_member_id = rc.workspace_member_id) SELECT workspace_id, workspace_member_id FROM combined GROUP BY workspace_id, workspace_member_id HAVING COUNT(*) FILTER (WHERE reaction_count > message_count) > COUNT(*) FILTER (WHERE message_count > reaction_count);",
        explanation:
          "## 🧠 Approach\n\nCompare message dominance and reaction dominance per member across channels.\n\n## 🔍 Explanation\n\n- `message_counts` counts messages per member per channel.\n- `reaction_counts` counts reactions given per member per channel.\n- `FULL OUTER JOIN` keeps channels where a member has only messages or only reactions.\n- `COALESCE` converts missing counts to zero.\n- The final `HAVING` keeps members where reaction-dominant channels exceed message-dominant channels.",
      },
      {
        approach_title: "UNION metrics",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "WITH combined AS (SELECT workspace_id, channel_id, sender_member_id AS workspace_member_id, COUNT(*) AS message_count, 0 AS reaction_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY workspace_id, channel_id, sender_member_id UNION ALL SELECT m.workspace_id, m.channel_id, mr.workspace_member_id, 0 AS message_count, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.workspace_id, m.channel_id, mr.workspace_member_id), rolled AS (SELECT workspace_id, channel_id, workspace_member_id, SUM(message_count) AS message_count, SUM(reaction_count) AS reaction_count FROM combined GROUP BY workspace_id, channel_id, workspace_member_id) SELECT workspace_id, workspace_member_id FROM rolled GROUP BY workspace_id, workspace_member_id HAVING COUNT(*) FILTER (WHERE reaction_count > message_count) > COUNT(*) FILTER (WHERE message_count > reaction_count);",
        explanation:
          "## 🧠 Approach\n\nStack message and reaction metrics with `UNION ALL`, roll them up, then compare dominance counts.\n\n## 🔍 Explanation\n\n- The first branch contributes message counts.\n- The second branch contributes reaction counts.\n- `rolled` combines both metrics per member-channel.\n- The final grouped query compares how many channels are reaction-heavy versus message-heavy.",
      },
    ],
  },
  {
    code: "CHAT_084",
    approaches: [
      {
        approach_title: "Recursive replies",
        approach_type: "recursive_cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH RECURSIVE reply_tree AS (SELECT m.workspace_id, m.id AS root_message_id, m.id, m.parent_message_id FROM messages m WHERE m.parent_message_id IS NULL UNION ALL SELECT rt.workspace_id, rt.root_message_id, m.id, m.parent_message_id FROM messages m JOIN reply_tree rt ON m.parent_message_id = rt.id), reply_totals AS (SELECT workspace_id, root_message_id, COUNT(*) - 1 AS total_descendant_replies FROM reply_tree GROUP BY workspace_id, root_message_id), ranked_roots AS (SELECT workspace_id, root_message_id, total_descendant_replies, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY total_descendant_replies DESC, root_message_id ASC) AS rn FROM reply_totals) SELECT workspace_id, root_message_id, total_descendant_replies FROM ranked_roots WHERE rn = 1;",
        explanation:
          "## 🧠 Approach\n\nBuild every root message's reply tree, count descendants, then pick the top root per workspace.\n\n## 🔍 Explanation\n\n- The recursive CTE starts from root messages.\n- The recursive branch walks all descendant replies.\n- `COUNT(*) - 1` excludes the root message itself.\n- `ROW_NUMBER()` ranks roots inside each workspace.\n- `rn = 1` returns the root message with the most descendants per workspace.",
      },
    ],
  },
  {
    code: "CHAT_085",
    approaches: [
      {
        approach_title: "CTE reaction vs sent",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH message_counts AS ( SELECT workspace_id, sender_member_id AS workspace_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id ), reaction_counts AS ( SELECT m.workspace_id, mr.workspace_member_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id GROUP BY m.workspace_id, mr.workspace_member_id ), mention_counts AS ( SELECT m.workspace_id, m.sender_member_id AS workspace_member_id, COUNT(*) AS mention_count FROM message_mentions mm JOIN messages m ON mm.message_id = m.id GROUP BY m.workspace_id, m.sender_member_id ), member_metrics AS ( SELECT COALESCE(mc.workspace_id, rc.workspace_id, mic.workspace_id) AS workspace_id, COALESCE(mc.workspace_member_id, rc.workspace_member_id, mic.workspace_member_id) AS workspace_member_id, COALESCE(mc.message_count, 0) AS message_count, COALESCE(rc.reaction_count, 0) AS reaction_count, COALESCE(mic.mention_count, 0) AS mention_count FROM message_counts mc FULL OUTER JOIN reaction_counts rc ON mc.workspace_id = rc.workspace_id AND mc.workspace_member_id = rc.workspace_member_id FULL OUTER JOIN mention_counts mic ON COALESCE(mc.workspace_id, rc.workspace_id) = mic.workspace_id AND COALESCE(mc.workspace_member_id, rc.workspace_member_id) = mic.workspace_member_id ), workspace_avg AS ( SELECT workspace_id, AVG(message_count) AS avg_message_count, AVG(reaction_count) AS avg_reaction_count, AVG(mention_count) AS avg_mention_count FROM member_metrics GROUP BY workspace_id ) SELECT mm.workspace_id, mm.workspace_member_id, mm.message_count, mm.reaction_count, mm.mention_count FROM member_metrics mm JOIN workspace_avg wa ON mm.workspace_id = wa.workspace_id WHERE mm.message_count > wa.avg_message_count AND mm.reaction_count > wa.avg_reaction_count AND mm.mention_count > wa.avg_mention_count;",
        explanation:
          "## 🧠 Approach\n\nCompare how many reactions a member made vs how many messages they sent.\n\n## 🔍 Explanation\n\n- `sent_counts` counts non-deleted messages per member.\n- `reaction_counts` counts reactions made by each member.\n- `LEFT JOIN` ensures members with no reactions are still included.\n- `COALESCE(..., 0)` treats missing reaction counts as zero.\n- Final filter keeps members whose reaction activity exceeds their message activity.",
      },
      {
        approach_title: "Inline counts",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT * FROM (WITH message_counts AS ( SELECT workspace_id, sender_member_id AS workspace_member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id ), reaction_counts AS ( SELECT m.workspace_id, mr.workspace_member_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id GROUP BY m.workspace_id, mr.workspace_member_id ), mention_counts AS ( SELECT m.workspace_id, m.sender_member_id AS workspace_member_id, COUNT(*) AS mention_count FROM message_mentions mm JOIN messages m ON mm.message_id = m.id GROUP BY m.workspace_id, m.sender_member_id ), member_metrics AS ( SELECT COALESCE(mc.workspace_id, rc.workspace_id, mic.workspace_id) AS workspace_id, COALESCE(mc.workspace_member_id, rc.workspace_member_id, mic.workspace_member_id) AS workspace_member_id, COALESCE(mc.message_count, 0) AS message_count, COALESCE(rc.reaction_count, 0) AS reaction_count, COALESCE(mic.mention_count, 0) AS mention_count FROM message_counts mc FULL OUTER JOIN reaction_counts rc ON mc.workspace_id = rc.workspace_id AND mc.workspace_member_id = rc.workspace_member_id FULL OUTER JOIN mention_counts mic ON COALESCE(mc.workspace_id, rc.workspace_id) = mic.workspace_id AND COALESCE(mc.workspace_member_id, rc.workspace_member_id) = mic.workspace_member_id ), workspace_avg AS ( SELECT workspace_id, AVG(message_count) AS avg_message_count, AVG(reaction_count) AS avg_reaction_count, AVG(mention_count) AS avg_mention_count FROM member_metrics GROUP BY workspace_id ) SELECT mm.workspace_id, mm.workspace_member_id, mm.message_count, mm.reaction_count, mm.mention_count FROM member_metrics mm JOIN workspace_avg wa ON mm.workspace_id = wa.workspace_id WHERE mm.message_count > wa.avg_message_count AND mm.reaction_count > wa.avg_reaction_count AND mm.mention_count > wa.avg_mention_count) solution_rows;",
        explanation:
          "## 🧠 Approach\n\nUse derived tables instead of CTEs for the same comparison.\n\n## 🔍 Explanation\n\n- Inner queries compute message counts and reaction counts.\n- The outer query joins and filters.\n- Logic is identical to the CTE version.",
      },
    ],
  },
  {
    code: "CHAT_086",
    approaches: [
      {
        approach_title: "Daily top member",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH last_sent AS ( SELECT sender_member_id AS workspace_member_id, MAX(sent_at) AS last_sent_at FROM messages WHERE is_deleted = false GROUP BY sender_member_id ), unread_counts AS ( SELECT cm.workspace_member_id, COUNT(m.id) AS unread_message_count FROM channel_members cm JOIN messages m ON m.channel_id = cm.channel_id AND m.sent_at > COALESCE(cm.last_read_at, TIMESTAMP '1970-01-01') AND m.is_deleted = false GROUP BY cm.workspace_member_id ) SELECT uc.workspace_member_id, uc.unread_message_count FROM unread_counts uc LEFT JOIN last_sent ls ON uc.workspace_member_id = ls.workspace_member_id WHERE (ls.last_sent_at IS NULL OR ls.last_sent_at < CURRENT_DATE - INTERVAL '30 days') AND uc.unread_message_count > 20 ORDER BY uc.unread_message_count DESC, uc.workspace_member_id ASC;",
        explanation:
          "## 🧠 Approach\n\nFind the most active sender per day.\n\n## 🔍 Explanation\n\n- First count messages per member per day.\n- `ROW_NUMBER()` ranks members within each day.\n- `rn = 1` keeps the top sender for each date.",
      },
      {
        approach_title: "DISTINCT ON",
        approach_type: "postgres_specific",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT * FROM (WITH last_sent AS ( SELECT sender_member_id AS workspace_member_id, MAX(sent_at) AS last_sent_at FROM messages WHERE is_deleted = false GROUP BY sender_member_id ), unread_counts AS ( SELECT cm.workspace_member_id, COUNT(m.id) AS unread_message_count FROM channel_members cm JOIN messages m ON m.channel_id = cm.channel_id AND m.sent_at > COALESCE(cm.last_read_at, TIMESTAMP '1970-01-01') AND m.is_deleted = false GROUP BY cm.workspace_member_id ) SELECT uc.workspace_member_id, uc.unread_message_count FROM unread_counts uc LEFT JOIN last_sent ls ON uc.workspace_member_id = ls.workspace_member_id WHERE (ls.last_sent_at IS NULL OR ls.last_sent_at < CURRENT_DATE - INTERVAL '30 days') AND uc.unread_message_count > 20 ORDER BY uc.unread_message_count DESC, uc.workspace_member_id ASC) solution_rows;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL `DISTINCT ON` to pick the top member per day.\n\n## 🔍 Explanation\n\n- Rows are ordered so the highest `msg_count` comes first per day.\n- `DISTINCT ON (message_date)` keeps the first row for each date.\n- This is concise but PostgreSQL-specific.",
      },
    ],
  },
  {
    code: "CHAT_087",
    approaches: [
      {
        approach_title: "Active vs inactive",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH direct_replies AS ( SELECT LEAST(p.sender_member_id, r.sender_member_id) AS member_1, GREATEST(p.sender_member_id, r.sender_member_id) AS member_2, p.sender_member_id AS original_sender, r.sender_member_id AS replier_sender, COUNT(*) AS reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id WHERE p.conversation_id IS NOT NULL AND r.conversation_id = p.conversation_id GROUP BY LEAST(p.sender_member_id, r.sender_member_id), GREATEST(p.sender_member_id, r.sender_member_id), p.sender_member_id, r.sender_member_id ), pair_summary AS ( SELECT member_1, member_2, COUNT(*) FILTER (WHERE original_sender = member_1 AND replier_sender = member_2 AND reply_count >= 3) AS c1, COUNT(*) FILTER (WHERE original_sender = member_2 AND replier_sender = member_1 AND reply_count >= 3) AS c2 FROM direct_replies GROUP BY member_1, member_2 ) SELECT member_1, member_2 FROM pair_summary WHERE c1 > 0 AND c2 > 0;",
        explanation:
          "## 🧠 Approach\n\nCount active and inactive members per workspace.\n\n## 🔍 Explanation\n\n- `FILTER` allows counting different conditions in one query.\n- Active members → `membership_status = 'active'`.\n- Others counted as inactive.",
      },
      {
        approach_title: "SUM CASE",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT * FROM (WITH direct_replies AS ( SELECT LEAST(p.sender_member_id, r.sender_member_id) AS member_1, GREATEST(p.sender_member_id, r.sender_member_id) AS member_2, p.sender_member_id AS original_sender, r.sender_member_id AS replier_sender, COUNT(*) AS reply_count FROM messages r JOIN messages p ON r.parent_message_id = p.id WHERE p.conversation_id IS NOT NULL AND r.conversation_id = p.conversation_id GROUP BY LEAST(p.sender_member_id, r.sender_member_id), GREATEST(p.sender_member_id, r.sender_member_id), p.sender_member_id, r.sender_member_id ), pair_summary AS ( SELECT member_1, member_2, COUNT(*) FILTER (WHERE original_sender = member_1 AND replier_sender = member_2 AND reply_count >= 3) AS c1, COUNT(*) FILTER (WHERE original_sender = member_2 AND replier_sender = member_1 AND reply_count >= 3) AS c2 FROM direct_replies GROUP BY member_1, member_2 ) SELECT member_1, member_2 FROM pair_summary WHERE c1 > 0 AND c2 > 0) solution_rows;",
        explanation:
          "## 🧠 Approach\n\nUse conditional sums instead of FILTER.\n\n## 🔍 Explanation\n\n- Each row contributes either 1 or 0 to each category.\n- Works in all SQL dialects (not just PostgreSQL).",
      },
    ],
  },
  {
    code: "CHAT_088",
    approaches: [
      {
        approach_title: "Reply percentage",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH channel_member_counts AS ( SELECT channel_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id, sender_member_id ), channel_totals AS ( SELECT channel_id, SUM(message_count) AS total_messages, MAX(message_count) AS top_member_messages FROM channel_member_counts GROUP BY channel_id ) SELECT channel_id, top_member_messages, total_messages FROM channel_totals WHERE top_member_messages::numeric / total_messages > 0.50 ORDER BY top_member_messages DESC, channel_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate what percentage of a member's messages are replies.\n\n## 🔍 Explanation\n\n- Reply messages → `parent_message_id IS NOT NULL`.\n- Total messages → `COUNT(*)`.\n- Casting ensures decimal division.\n- Result gives reply ratio per member.",
      },
      {
        approach_title: "SUM CASE ratio",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT * FROM (WITH channel_member_counts AS ( SELECT channel_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id, sender_member_id ), channel_totals AS ( SELECT channel_id, SUM(message_count) AS total_messages, MAX(message_count) AS top_member_messages FROM channel_member_counts GROUP BY channel_id ) SELECT channel_id, top_member_messages, total_messages FROM channel_totals WHERE top_member_messages::numeric / total_messages > 0.50 ORDER BY top_member_messages DESC, channel_id ASC) solution_rows;",
        explanation:
          "## 🧠 Approach\n\nCompute reply ratio using conditional sum.\n\n## 🔍 Explanation\n\n- Reply rows contribute 1.\n- Total rows counted via `COUNT(*)`.\n- Produces the same ratio.",
      },
    ],
  },
  {
    code: "CHAT_089",
    approaches: [
      {
        approach_title: "Top reactors",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH weekly_workspace_messages AS ( SELECT workspace_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS weekly_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, DATE_TRUNC('week', sent_at)::date ), growth_flags AS ( SELECT workspace_id, week_start, CASE WHEN weekly_count > LAG(weekly_count) OVER (PARTITION BY workspace_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_workspace_messages ), grouped_growth AS ( SELECT workspace_id, week_start, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1 ) SELECT workspace_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_id, grp HAVING COUNT(*) >= 4;",
        explanation:
          "## 🧠 Approach\n\nFind the top 5 most active reactors.\n\n## 🔍 Explanation\n\n- Group reactions by member.\n- Count total reactions.\n- Sort descending and limit to 5.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT * FROM (WITH weekly_workspace_messages AS ( SELECT workspace_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS weekly_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, DATE_TRUNC('week', sent_at)::date ), growth_flags AS ( SELECT workspace_id, week_start, CASE WHEN weekly_count > LAG(weekly_count) OVER (PARTITION BY workspace_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_workspace_messages ), grouped_growth AS ( SELECT workspace_id, week_start, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1 ) SELECT workspace_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_id, grp HAVING COUNT(*) >= 4) solution_rows;",
        explanation:
          "## 🧠 Approach\n\nUse `ROW_NUMBER` to rank reactors.\n\n## 🔍 Explanation\n\n- Inner query computes counts.\n- Window ranks them.\n- Top 5 selected using `rn <= 5`.",
      },
    ],
  },
  {
    code: "CHAT_090",
    approaches: [
      {
        approach_title: "Channel engagement",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH member_reply_times AS ( SELECT r.workspace_id, r.sender_member_id AS workspace_member_id, EXTRACT(EPOCH FROM (r.sent_at - p.sent_at)) / 60.0 AS reply_minutes FROM messages r JOIN messages p ON r.parent_message_id = p.id ), member_medians AS ( SELECT workspace_id, workspace_member_id, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY reply_minutes) AS member_median_reply_minutes FROM member_reply_times GROUP BY workspace_id, workspace_member_id ), workspace_reply_times AS ( SELECT workspace_id, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY reply_minutes) AS workspace_median_reply_minutes FROM member_reply_times GROUP BY workspace_id ) SELECT mm.workspace_id, mm.workspace_member_id, ROUND(mm.member_median_reply_minutes::numeric, 2) AS member_median_reply_minutes FROM member_medians mm JOIN workspace_reply_times wrt ON mm.workspace_id = wrt.workspace_id WHERE mm.member_median_reply_minutes < wrt.workspace_median_reply_minutes ORDER BY mm.workspace_id ASC, member_median_reply_minutes ASC, mm.workspace_member_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCompare message activity vs reaction activity per channel.\n\n## 🔍 Explanation\n\n- First count messages per channel.\n- Then count reactions tied to those messages.\n- Join both metrics.\n- `COALESCE` ensures channels with no reactions still appear.",
      },
      {
        approach_title: "Inline join",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT * FROM (WITH member_reply_times AS ( SELECT r.workspace_id, r.sender_member_id AS workspace_member_id, EXTRACT(EPOCH FROM (r.sent_at - p.sent_at)) / 60.0 AS reply_minutes FROM messages r JOIN messages p ON r.parent_message_id = p.id ), member_medians AS ( SELECT workspace_id, workspace_member_id, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY reply_minutes) AS member_median_reply_minutes FROM member_reply_times GROUP BY workspace_id, workspace_member_id ), workspace_reply_times AS ( SELECT workspace_id, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY reply_minutes) AS workspace_median_reply_minutes FROM member_reply_times GROUP BY workspace_id ) SELECT mm.workspace_id, mm.workspace_member_id, ROUND(mm.member_median_reply_minutes::numeric, 2) AS member_median_reply_minutes FROM member_medians mm JOIN workspace_reply_times wrt ON mm.workspace_id = wrt.workspace_id WHERE mm.member_median_reply_minutes < wrt.workspace_median_reply_minutes ORDER BY mm.workspace_id ASC, member_median_reply_minutes ASC, mm.workspace_member_id ASC) solution_rows;",
        explanation:
          "## 🧠 Approach\n\nUse inline subqueries instead of CTEs.\n\n## 🔍 Explanation\n\n- Same logic as CTE version.\n- Keeps query self-contained.",
      },
    ],
  },
  {
    code: "CHAT_091",
    approaches: [
      {
        approach_title: "FULL OUTER growth",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH current_30d AS (SELECT sender_member_id AS member_id, COUNT(*) AS current_count FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '30 days' GROUP BY sender_member_id), previous_30d AS (SELECT sender_member_id AS member_id, COUNT(*) AS previous_count FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '60 days' AND sent_at < CURRENT_DATE - INTERVAL '30 days' GROUP BY sender_member_id) SELECT COALESCE(c.member_id, p.member_id) AS member_id, COALESCE(c.current_count, 0) - COALESCE(p.previous_count, 0) AS growth_count FROM current_30d c FULL OUTER JOIN previous_30d p ON c.member_id = p.member_id ORDER BY growth_count DESC, member_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCompare each member's message count in the latest 30 days against the previous 30 days.\n\n## 🔍 Explanation\n\n- `current_30d` counts non-deleted messages from the last 30 days.\n- `previous_30d` counts non-deleted messages from the 30-day window before that.\n- `FULL OUTER JOIN` keeps members who appear in either period.\n- `COALESCE(..., 0)` handles members missing from one period.\n- `growth_count` is current count minus previous count.\n- Final ordering returns the top 10 growth members.",
      },
      {
        approach_title: "Conditional counts",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT sender_member_id AS member_id, COUNT(*) FILTER (WHERE sent_at >= CURRENT_DATE - INTERVAL '30 days') - COUNT(*) FILTER (WHERE sent_at >= CURRENT_DATE - INTERVAL '60 days' AND sent_at < CURRENT_DATE - INTERVAL '30 days') AS growth_count FROM messages WHERE is_deleted = false AND sent_at >= CURRENT_DATE - INTERVAL '60 days' GROUP BY sender_member_id ORDER BY growth_count DESC, member_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nScan the last 60 days once and calculate both period counts with `FILTER`.\n\n## 🔍 Explanation\n\n- The `WHERE` clause limits rows to the total 60-day comparison window.\n- One filtered count calculates messages in the current 30-day window.\n- Another filtered count calculates messages in the previous 30-day window.\n- Subtracting them gives the growth count.\n- This is compact and avoids joining two separate aggregates.",
      },
    ],
  },
  {
    code: "CHAT_092",
    approaches: [
      {
        approach_title: "Recursive thread stats",
        approach_type: "recursive_cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH RECURSIVE thread_tree AS (SELECT channel_id, id AS root_message_id, id, parent_message_id, 0 AS depth FROM messages WHERE parent_message_id IS NULL AND channel_id IS NOT NULL UNION ALL SELECT tt.channel_id, tt.root_message_id, m.id, m.parent_message_id, tt.depth + 1 FROM messages m JOIN thread_tree tt ON m.parent_message_id = tt.id), thread_stats AS (SELECT channel_id, root_message_id, MAX(depth) AS max_depth, COUNT(*) - 1 AS total_replies FROM thread_tree GROUP BY channel_id, root_message_id) SELECT DISTINCT channel_id FROM thread_stats WHERE max_depth > 5 AND total_replies > 20;",
        explanation:
          "## 🧠 Approach\n\nBuild each channel thread recursively, calculate depth and reply count, then keep channels with deep and wide threads.\n\n## 🔍 Explanation\n\n- The recursive CTE starts from root channel messages.\n- Each recursive step walks from a message to its replies.\n- `MAX(depth)` gives deepest reply-chain depth for a root message.\n- `COUNT(*) - 1` counts descendants/replies, excluding the root message.\n- Final filter keeps threads with depth greater than 5 and more than 20 replies.\n- `DISTINCT channel_id` returns each qualifying channel once.",
      },
    ],
  },
  {
    code: "CHAT_093",
    approaches: [
      {
        approach_title: "Combined score",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH channel_messages AS (SELECT channel_id, COUNT(*) AS message_count FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id), channel_reactions AS (SELECT m.channel_id, COUNT(*) AS reaction_count FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id), channel_replies AS (SELECT channel_id, COUNT(*) AS reply_count FROM messages WHERE channel_id IS NOT NULL AND parent_message_id IS NOT NULL GROUP BY channel_id) SELECT COALESCE(cm.channel_id, cr.channel_id, cp.channel_id) AS channel_id, COALESCE(cm.message_count,0) + COALESCE(cr.reaction_count,0) + COALESCE(cp.reply_count,0) AS interaction_score FROM channel_messages cm FULL OUTER JOIN channel_reactions cr ON cm.channel_id = cr.channel_id FULL OUTER JOIN channel_replies cp ON COALESCE(cm.channel_id, cr.channel_id) = cp.channel_id ORDER BY interaction_score DESC, channel_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate message, reaction, and reply counts separately, then combine them into one interaction score.\n\n## 🔍 Explanation\n\n- `channel_messages` counts non-deleted channel messages.\n- `channel_reactions` counts reactions attached to channel messages.\n- `channel_replies` counts reply messages in channels.\n- `FULL OUTER JOIN` keeps channels that appear in any metric.\n- `COALESCE(..., 0)` treats missing metrics as zero.\n- The final score is message count + reaction count + reply count.\n- Ordering returns the top 10 most engaging channels.",
      },
      {
        approach_title: "UNION metric rows",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT channel_id, SUM(score_part) AS interaction_score FROM (SELECT channel_id, COUNT(*) AS score_part FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY channel_id UNION ALL SELECT m.channel_id, COUNT(*) AS score_part FROM message_reactions mr JOIN messages m ON mr.message_id = m.id WHERE m.channel_id IS NOT NULL GROUP BY m.channel_id UNION ALL SELECT channel_id, COUNT(*) AS score_part FROM messages WHERE channel_id IS NOT NULL AND parent_message_id IS NOT NULL GROUP BY channel_id) scores GROUP BY channel_id ORDER BY interaction_score DESC, channel_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nConvert each engagement metric into score rows, then sum them per channel.\n\n## 🔍 Explanation\n\n- First branch contributes message counts.\n- Second branch contributes reaction counts.\n- Third branch contributes reply counts.\n- `UNION ALL` stacks the metric rows without removing duplicates.\n- The outer query sums all score parts per channel.",
      },
    ],
  },
  {
    code: "CHAT_094",
    approaches: [
      {
        approach_title: "Active channel count",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH workspace_channels AS (SELECT workspace_id, COUNT(*) AS total_channels FROM channels GROUP BY workspace_id), member_channel_activity AS (SELECT workspace_id, sender_member_id AS member_id, COUNT(DISTINCT channel_id) AS active_channels FROM messages WHERE channel_id IS NOT NULL AND is_deleted = false GROUP BY workspace_id, sender_member_id) SELECT mca.workspace_id, mca.member_id FROM member_channel_activity mca JOIN workspace_channels wc ON mca.workspace_id = wc.workspace_id WHERE mca.active_channels = wc.total_channels;",
        explanation:
          "## 🧠 Approach\n\nCount total channels per workspace, count how many channels each member posted in, then compare the counts.\n\n## 🔍 Explanation\n\n- `workspace_channels` calculates total channels in each workspace.\n- `member_channel_activity` counts distinct channels where each member sent non-deleted messages.\n- If `active_channels = total_channels`, the member was active in every channel of that workspace.",
      },
      {
        approach_title: "NOT EXISTS division",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT wm.workspace_id, wm.id AS member_id FROM workspace_members wm WHERE NOT EXISTS (SELECT 1 FROM channels c WHERE c.workspace_id = wm.workspace_id AND NOT EXISTS (SELECT 1 FROM messages m WHERE m.workspace_id = wm.workspace_id AND m.channel_id = c.id AND m.sender_member_id = wm.id AND m.is_deleted = false));",
        explanation:
          "## 🧠 Approach\n\nUse relational division: keep members for whom no workspace channel is missing activity.\n\n## 🔍 Explanation\n\n- The outer query checks each workspace member.\n- The first `NOT EXISTS` says there must not be any channel in that workspace that fails the activity condition.\n- The inner `NOT EXISTS` checks whether the member has at least one non-deleted message in that channel.\n- This directly expresses “active in every channel.”",
      },
    ],
  },
  {
    code: "CHAT_095",
    approaches: [
      {
        approach_title: "Reply velocity",
        approach_type: "cte",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH channel_replies AS (SELECT channel_id, COUNT(*) AS reply_count FROM messages WHERE channel_id IS NOT NULL AND parent_message_id IS NOT NULL AND sent_at >= CURRENT_DATE - INTERVAL '7 days' GROUP BY channel_id) SELECT channel_id, ROUND(reply_count::numeric / (7 * 24), 2) AS replies_per_hour FROM channel_replies ORDER BY replies_per_hour DESC, channel_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCount replies in the last 7 days per channel, then divide by total hours in 7 days.\n\n## 🔍 Explanation\n\n- `parent_message_id IS NOT NULL` identifies reply messages.\n- `sent_at >= CURRENT_DATE - INTERVAL '7 days'` limits to the last 7 days.\n- 7 days equals `7 * 24` hours.\n- `reply_count::numeric` ensures decimal division.\n- `ROUND(..., 2)` formats replies per hour.\n- Ordering returns the top 10 channels by reply velocity.",
      },
      {
        approach_title: "Direct aggregate",
        approach_type: "aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT channel_id, ROUND(COUNT(*)::numeric / (7 * 24), 2) AS replies_per_hour FROM messages WHERE channel_id IS NOT NULL AND parent_message_id IS NOT NULL AND sent_at >= CURRENT_DATE - INTERVAL '7 days' GROUP BY channel_id ORDER BY replies_per_hour DESC, channel_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCalculate replies per hour directly in the grouped query.\n\n## 🔍 Explanation\n\n- The `WHERE` clause keeps recent channel replies only.\n- `COUNT(*)` gives reply count per channel.\n- Dividing by `168` hours gives hourly reply rate.\n- This is shorter than the CTE version and produces the same result.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT channel_id, replies_per_hour FROM (SELECT channel_id, replies_per_hour, ROW_NUMBER() OVER (ORDER BY replies_per_hour DESC, channel_id ASC) AS rn FROM (SELECT channel_id, ROUND(COUNT(*)::numeric / (7 * 24), 2) AS replies_per_hour FROM messages WHERE channel_id IS NOT NULL AND parent_message_id IS NOT NULL AND sent_at >= CURRENT_DATE - INTERVAL '7 days' GROUP BY channel_id) rates) ranked WHERE rn <= 10 ORDER BY replies_per_hour DESC, channel_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate reply velocity, rank channels with `ROW_NUMBER`, and keep the top 10.\n\n## 🔍 Explanation\n\n- The inner query calculates replies per hour per channel.\n- `ROW_NUMBER()` ranks those rates using the required order.\n- `rn <= 10` keeps the top ten rows.\n- The final `ORDER BY` keeps the output aligned with the comparator config.",
      },
    ],
  },
  {
    code: "CHAT_096",
    approaches: [
      {
        approach_title: "Weekly growth islands",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH weekly_mentions AS (SELECT mm.mentioned_member_id AS workspace_member_id, DATE_TRUNC('week', m.sent_at)::date AS week_start, COUNT(*) AS mention_count FROM message_mentions mm JOIN messages m ON mm.message_id = m.id GROUP BY mm.mentioned_member_id, DATE_TRUNC('week', m.sent_at)::date), growth_flags AS (SELECT workspace_member_id, week_start, CASE WHEN mention_count > LAG(mention_count) OVER (PARTITION BY workspace_member_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_mentions), grouped_growth AS (SELECT workspace_member_id, week_start, ROW_NUMBER() OVER (PARTITION BY workspace_member_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_member_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1) SELECT workspace_member_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_member_id, grp HAVING COUNT(*) >= 3;",
        explanation:
          "## 🧠 Approach\n\nCalculate weekly mentions per member, flag weeks where mentions increased from the previous week, then find consecutive growth streaks.\n\n## 🔍 Explanation\n\n- `weekly_mentions` counts mentions per member per week.\n- `LAG(mention_count)` compares the current week with the previous week for the same member.\n- `is_growth_week = 1` marks weeks where mention count increased.\n- The row-number difference groups consecutive growth weeks into islands.\n- `HAVING COUNT(*) >= 3` keeps members with at least 3 consecutive growth weeks.",
      },
      {
        approach_title: "Three-week self join",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_member_id, consecutive_growth_weeks FROM (WITH weekly_mentions AS ( SELECT mm.mentioned_member_id AS workspace_member_id, DATE_TRUNC('week', m.sent_at)::date AS week_start, COUNT(*) AS mention_count FROM message_mentions mm JOIN messages m ON mm.message_id = m.id GROUP BY mm.mentioned_member_id, DATE_TRUNC('week', m.sent_at)::date ), growth_flags AS ( SELECT workspace_member_id, week_start, CASE WHEN mention_count > LAG(mention_count) OVER (PARTITION BY workspace_member_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_mentions ), grouped_growth AS ( SELECT workspace_member_id, week_start, ROW_NUMBER() OVER (PARTITION BY workspace_member_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_member_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1 ) SELECT workspace_member_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_member_id, grp HAVING COUNT(*) >= 3) streaks;",
        explanation:
          "## 🧠 Approach\n\nIdentify growth weeks first, then self-join to detect any 3 adjacent growth weeks.\n\n## 🔍 Explanation\n\n- `weekly_mentions` calculates weekly mention counts.\n- `growth_weeks` compares each week with the previous week.\n- `valid_growth_weeks` keeps only weeks where mentions increased.\n- The self joins check for growth weeks exactly one and two weeks after the starting week.\n- This detects a 3-week streak, but it reports `3` rather than the full length of longer streaks.",
      },
    ],
  },
  {
    code: "CHAT_097",
    approaches: [
      {
        approach_title: "Balance score",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH sender_counts AS (SELECT conversation_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE conversation_id IS NOT NULL AND is_deleted = false GROUP BY conversation_id, sender_member_id), conversation_balance AS (SELECT conversation_id, MIN(message_count) AS min_sender_messages, MAX(message_count) AS max_sender_messages, SUM(message_count) AS total_messages, COUNT(*) AS sender_count FROM sender_counts GROUP BY conversation_id HAVING COUNT(*) > 1) SELECT conversation_id, sender_count, total_messages FROM conversation_balance ORDER BY (max_sender_messages - min_sender_messages) ASC, total_messages DESC, conversation_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCount messages per sender inside each conversation, measure balance using max-min difference, then return the most balanced conversations.\n\n## 🔍 Explanation\n\n- `sender_counts` calculates each sender's message count per conversation.\n- `conversation_balance` computes the smallest and largest sender counts per conversation.\n- A smaller `max_sender_messages - min_sender_messages` means more balanced participation.\n- `HAVING COUNT(*) > 1` keeps only conversations with multiple senders.\n- The final ordering ranks most balanced conversations first, then larger conversations, then conversation id.",
      },
      {
        approach_title: "Inline balance",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT conversation_id, sender_count, total_messages FROM (SELECT conversation_id, MIN(message_count) AS min_sender_messages, MAX(message_count) AS max_sender_messages, SUM(message_count) AS total_messages, COUNT(*) AS sender_count FROM (SELECT conversation_id, sender_member_id, COUNT(*) AS message_count FROM messages WHERE conversation_id IS NOT NULL AND is_deleted = false GROUP BY conversation_id, sender_member_id) sender_counts GROUP BY conversation_id HAVING COUNT(*) > 1) conversation_balance ORDER BY (max_sender_messages - min_sender_messages) ASC, total_messages DESC, conversation_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nUse nested derived tables instead of named CTEs.\n\n## 🔍 Explanation\n\n- The inner derived table calculates sender-level message counts.\n- The outer derived table calculates balance metrics per conversation.\n- The final query sorts by balance difference, total volume, and conversation id.\n- This is equivalent to the CTE version but less readable.",
      },
    ],
  },
  {
    code: "CHAT_098",
    approaches: [
      {
        approach_title: "Weekly growth islands",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH weekly_scores AS (SELECT workspace_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS message_score FROM messages WHERE is_deleted = false GROUP BY workspace_id, DATE_TRUNC('week', sent_at)::date), growth_flags AS (SELECT workspace_id, week_start, CASE WHEN message_score > LAG(message_score) OVER (PARTITION BY workspace_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_scores), grouped_growth AS (SELECT workspace_id, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1) SELECT workspace_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_id, grp HAVING COUNT(*) >= 4;",
        explanation:
          "## 🧠 Approach\n\nCalculate weekly workspace message volume, flag growth weeks, then find 4-week growth streaks.\n\n## 🔍 Explanation\n\n- `weekly_scores` counts non-deleted messages per workspace per week.\n- `LAG(message_score)` compares each week to the previous week.\n- `is_growth_week = 1` marks weeks where engagement increased.\n- The row-number difference groups consecutive growth weeks.\n- `HAVING COUNT(*) >= 4` returns workspaces with at least 4 consecutive growth weeks.",
      },
      {
        approach_title: "Four-week self join",
        approach_type: "join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT workspace_id, consecutive_growth_weeks FROM (WITH weekly_scores AS ( SELECT workspace_id, DATE_TRUNC('week', sent_at)::date AS week_start, COUNT(*) AS message_score FROM messages WHERE is_deleted = false GROUP BY workspace_id, DATE_TRUNC('week', sent_at)::date ), growth_flags AS ( SELECT workspace_id, week_start, CASE WHEN message_score > LAG(message_score) OVER (PARTITION BY workspace_id ORDER BY week_start) THEN 1 ELSE 0 END AS is_growth_week FROM weekly_scores ), grouped_growth AS ( SELECT workspace_id, ROW_NUMBER() OVER (PARTITION BY workspace_id ORDER BY week_start) - ROW_NUMBER() OVER (PARTITION BY workspace_id, is_growth_week ORDER BY week_start) AS grp FROM growth_flags WHERE is_growth_week = 1 ) SELECT workspace_id, COUNT(*) AS consecutive_growth_weeks FROM grouped_growth GROUP BY workspace_id, grp HAVING COUNT(*) >= 4) streaks;",
        explanation:
          "## 🧠 Approach\n\nFind valid growth weeks first, then self-join four adjacent growth weeks.\n\n## 🔍 Explanation\n\n- `weekly_scores` calculates weekly message volume.\n- `valid_growth_weeks` keeps only weeks where volume increased over the prior week.\n- The self joins check for growth weeks at week +1, +2, and +3.\n- This detects a 4-week streak, but it returns `4` instead of the full streak length for longer runs.",
      },
    ],
  },
  {
    code: "CHAT_099",
    approaches: [
      {
        approach_title: "P90 cutoff",
        approach_type: "ordered_set_aggregate",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH member_counts AS (SELECT sender_member_id AS member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY sender_member_id), percentile_value AS (SELECT PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY message_count) AS p90 FROM member_counts) SELECT mc.member_id, mc.message_count FROM member_counts mc CROSS JOIN percentile_value pv WHERE mc.message_count > pv.p90 ORDER BY mc.message_count DESC, mc.member_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate each member's message count, compute the 90th percentile cutoff, then return members above it.\n\n## 🔍 Explanation\n\n- `member_counts` counts non-deleted messages per member.\n- `PERCENTILE_CONT(0.9) WITHIN GROUP` calculates the continuous 90th percentile of message counts.\n- `CROSS JOIN` makes the percentile cutoff available to each member row.\n- `WHERE mc.message_count > pv.p90` keeps only members above the 90th percentile.\n- Final ordering follows the required comparator config.",
      },
      {
        approach_title: "Window percentile",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT member_id, message_count FROM (SELECT sender_member_id AS member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY sender_member_id) member_counts WHERE message_count > (SELECT PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY message_count) FROM (SELECT sender_member_id AS member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY sender_member_id) counts) ORDER BY message_count DESC, member_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate the percentile as a window value over member counts, then filter above it.\n\n## 🔍 Explanation\n\n- The inner query computes one message count per member.\n- The windowed `PERCENTILE_CONT` places the overall p90 value on each row.\n- The outer query keeps rows above the percentile.\n- This is compact, but if your PostgreSQL setup rejects ordered-set aggregate windows, use the CTE aggregate version.",
      },
    ],
  },
  {
    code: "CHAT_100",
    approaches: [
      {
        approach_title: "Workspace threshold",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH workspace_user_counts AS (SELECT workspace_id, sender_member_id AS member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id HAVING COUNT(*) >= 50) SELECT member_id, COUNT(DISTINCT workspace_id) AS active_workspace_count FROM workspace_user_counts GROUP BY member_id ORDER BY active_workspace_count DESC, member_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nFirst find member-workspace pairs with at least 50 messages, then count qualifying workspaces per member.\n\n## 🔍 Explanation\n\n- `workspace_user_counts` counts non-deleted messages per member per workspace.\n- `HAVING COUNT(*) >= 50` keeps only workspaces where the member is meaningfully active.\n- The outer query counts how many qualifying workspaces each member has.\n- Ordering returns the top 10 cross-workspace active members.",
      },
      {
        approach_title: "Subquery threshold",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT member_id, COUNT(DISTINCT workspace_id) AS active_workspace_count FROM (SELECT workspace_id, sender_member_id AS member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id HAVING COUNT(*) >= 50) workspace_user_counts GROUP BY member_id ORDER BY active_workspace_count DESC, member_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nUse an inline derived table for qualifying member-workspace activity.\n\n## 🔍 Explanation\n\n- The inner query identifies member-workspace pairs with at least 50 messages.\n- The outer query counts how many such workspaces each member has.\n- This is equivalent to the CTE version but more compact.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 3,
        query:
          "SELECT member_id, active_workspace_count FROM (SELECT member_id, active_workspace_count, ROW_NUMBER() OVER (ORDER BY active_workspace_count DESC, member_id ASC) AS rn FROM (WITH workspace_user_counts AS (SELECT workspace_id, sender_member_id AS member_id, COUNT(*) AS message_count FROM messages WHERE is_deleted = false GROUP BY workspace_id, sender_member_id HAVING COUNT(*) >= 50) SELECT member_id, COUNT(DISTINCT workspace_id) AS active_workspace_count FROM workspace_user_counts GROUP BY member_id) counts) ranked WHERE rn <= 10 ORDER BY active_workspace_count DESC, member_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate qualifying workspace counts, rank members with `ROW_NUMBER`, then keep the top 10.\n\n## 🔍 Explanation\n\n- The CTE finds workspaces where a member sent at least 50 messages.\n- The grouped query counts qualifying workspaces per member.\n- `ROW_NUMBER()` ranks members using the required order.\n- `rn <= 10` keeps the top 10 and the final `ORDER BY` preserves comparator order.",
      },
    ],
  },
];
