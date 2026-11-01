import { getAppIdByName } from "../../base/scripts/base.data.js";

const appId = getAppIdByName("realestate");

export const tableDescriptions = {
  amenities: "Master list of amenities available across properties",
  app_events:
    "Behavioral product analytics events across search, discovery, lead, and conversion funnels",
  executive_profiles:
    "Internal operational staff profiles for verification, support, and assisted workflows",
  inquiries:
    "Lead generation records when seekers express interest in listings",
  leases: "Executed rental agreements between owners and tenants",
  listing_media:
    "Images, videos, floor plans, and documents attached to property listings",
  listing_price_history:
    "Historical pricing changes used for pricing trend and negotiation analysis",
  listing_status_history:
    "Audit trail of listing status transitions such as draft, live, paused, rented, and archived",
  listings:
    "Market-facing listings with pricing, availability, targeting, and lifecycle states",
  locations:
    "Normalized geography data for property discovery and location-based analytics",
  maintenance_tickets:
    "Property issue tickets raised during tenancy or ownership operations",
  offers: "Negotiation offers and counters raised by seekers against listings",
  owner_profiles:
    "Extended owner account data used for onboarding, verification, and portfolio analysis",
  owner_verification_requests:
    "Manual owner ownership verification cases handled by operations teams",
  properties:
    "Core property master records that can later be listed for rent, sale, or lease",
  property_amenities: "Mapping table linking properties and their amenities",
  property_ownership_history:
    "Historical ownership periods for audit, transfer, and title tracking",
  property_views:
    "Listing view events used for demand, conversion funnel, and engagement analytics",
  property_visits:
    "Property site visits scheduled between seekers, owners, and operations teams",
  referrals: "Referral records for owner, seeker, and tenant growth loops",
  rent_payments: "Recurring rent payment transactions for active leases",
  rental_applications:
    "Formal tenant applications submitted for rental listings",
  seeker_profiles:
    "Seeker preferences and tenant qualification details for demand-side analysis",
  shortlists: "Saved listings shortlisted by users for later comparison",
  support_tickets:
    "Cross-functional support issues related to listings, payments, visits, and leasing",
  user_documents:
    "KYC and supporting documents uploaded by users for verification and trust workflows",
  users:
    "All platform users including seekers, owners, tenants, executives, and admins",
};

export const questions = [
  {
    app_id: appId,
    code: "REALESTATE_001",
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
    code: "REALESTATE_002",
    title: "Verified Owners Count",
    description: "Find the total number of owner profiles that are verified.",
    difficulty: "easy",
    expected_query:
      "SELECT COUNT(*) AS verified_owners FROM owner_profiles WHERE verification_status = 'verified';",
    solution_columns: ["verified_owners"],
    tables: ["owner_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_003",
    title: "Live Listings",
    description:
      "Find the id, property_id, and listed_for of all listings that are currently live.",
    difficulty: "easy",
    expected_query:
      "SELECT id, property_id, listed_for FROM listings WHERE listing_status = 'live';",
    solution_columns: ["id", "property_id", "listed_for"],
    tables: ["listings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_004",
    title: "Properties In Gated Communities",
    description:
      "Find the id, property_title, and property_type of properties that are in gated communities.",
    difficulty: "easy",
    expected_query:
      "SELECT id, property_title, property_type FROM properties WHERE is_gated_community = true;",
    solution_columns: ["id", "property_title", "property_type"],
    tables: ["properties"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_005",
    title: "Listings With Pets Allowed",
    description:
      "Find the id, rent_amount, and preferred_tenant_type of live listings where pets are allowed.",
    difficulty: "easy",
    expected_query:
      "SELECT id, rent_amount, preferred_tenant_type FROM listings WHERE listing_status = 'live' AND pet_allowed = true;",
    solution_columns: ["id", "rent_amount", "preferred_tenant_type"],
    tables: ["listings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_006",
    title: "Top 5 Most Expensive Rental Listings",
    description:
      "Find the top 5 live rental listings with the highest rent amount.",
    difficulty: "easy",
    expected_query:
      "SELECT id, property_id, rent_amount FROM listings WHERE listing_status = 'live' AND listed_for = 'rent' AND rent_amount IS NOT NULL ORDER BY rent_amount DESC, id ASC LIMIT 5;",
    solution_columns: ["id", "property_id", "rent_amount"],
    tables: ["listings"],
    comparison_config: {
      sort_by_columns: [
        { column: "rent_amount", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_007",
    title: "Users Signed Up By Source",
    description:
      "Find each signup source and the number of users who signed up through it.",
    difficulty: "easy",
    expected_query:
      "SELECT signup_source, COUNT(*) AS user_count FROM users WHERE signup_source IS NOT NULL GROUP BY signup_source;",
    solution_columns: ["signup_source", "user_count"],
    tables: ["users"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_008",
    title: "Property Count By Type",
    description:
      "Find each property type and the total number of properties of that type.",
    difficulty: "easy",
    expected_query:
      "SELECT property_type, COUNT(*) AS property_count FROM properties GROUP BY property_type;",
    solution_columns: ["property_type", "property_count"],
    tables: ["properties"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_009",
    title: "Listings Per City",
    description:
      "Find each city and the number of listings associated with properties in that city.",
    difficulty: "medium",
    expected_query:
      "SELECT loc.city, COUNT(*) AS listing_count FROM listings l JOIN properties p ON p.id = l.property_id JOIN locations loc ON loc.id = p.location_id GROUP BY loc.city;",
    solution_columns: ["city", "listing_count"],
    tables: ["listings", "properties", "locations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_010",
    title: "Owners With More Than 3 Properties",
    description:
      "Find owners who have more than 3 properties registered on the platform.",
    difficulty: "medium",
    expected_query:
      "SELECT op.id, op.user_id, COUNT(p.id) AS property_count FROM owner_profiles op JOIN properties p ON p.owner_profile_id = op.id GROUP BY op.id, op.user_id HAVING COUNT(p.id) > 3;",
    solution_columns: ["id", "user_id", "property_count"],
    tables: ["owner_profiles", "properties"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_011",
    title: "Pending Owner Checks",
    description:
      "Find the id, owner_profile_id, and assigned_executive_user_id of owner verification requests that are still pending.",
    difficulty: "easy",
    expected_query:
      "SELECT id, owner_profile_id, assigned_executive_user_id FROM owner_verification_requests WHERE request_status = 'pending';",
    solution_columns: ["id", "owner_profile_id", "assigned_executive_user_id"],
    tables: ["owner_verification_requests"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_012",
    title: "Expired User Docs",
    description:
      "Find the id, user_id, document_type, and expires_at of user documents that have already expired.",
    difficulty: "easy",
    expected_query:
      "SELECT id, user_id, document_type, expires_at FROM user_documents WHERE expires_at IS NOT NULL AND expires_at < NOW();",
    solution_columns: ["id", "user_id", "document_type", "expires_at"],
    tables: ["user_documents"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_013",
    title: "Vacant Listings",
    description:
      "Find the id, property_id, and listed_for of live listings that are currently available.",
    difficulty: "easy",
    expected_query:
      "SELECT id, property_id, listed_for FROM listings WHERE listing_status = 'live' AND availability_status = 'available';",
    solution_columns: ["id", "property_id", "listed_for"],
    tables: ["listings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_014",
    title: "Properties By City",
    description:
      "Find each city and the total number of properties located there.",
    difficulty: "easy",
    expected_query:
      "SELECT l.city, COUNT(*) AS property_count FROM properties p JOIN locations l ON p.location_id = l.id GROUP BY l.city;",
    solution_columns: ["city", "property_count"],
    tables: ["properties", "locations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_015",
    title: "Listings Without Media",
    description:
      "Find the ids of listings that do not have any media attached.",
    difficulty: "easy",
    expected_query:
      "SELECT l.id FROM listings l LEFT JOIN listing_media lm ON l.id = lm.listing_id WHERE lm.id IS NULL;",
    solution_columns: ["id"],
    tables: ["listings", "listing_media"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_016",
    title: "Top Viewed Listings",
    description:
      "Find the top 5 listings with the highest number of property views.",
    difficulty: "medium",
    expected_query:
      "SELECT listing_id, COUNT(*) AS view_count FROM property_views GROUP BY listing_id ORDER BY view_count DESC, listing_id ASC LIMIT 5;",
    solution_columns: ["listing_id", "view_count"],
    tables: ["property_views"],
    comparison_config: {
      sort_by_columns: [
        { column: "view_count", direction: "desc" },
        { column: "listing_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_017",
    title: "Owners With Live Listings",
    description:
      "Find owner profiles that currently have at least one live listing.",
    difficulty: "medium",
    expected_query:
      "SELECT owner_profile_id, COUNT(*) AS live_listing_count FROM listings WHERE listing_status = 'live' GROUP BY owner_profile_id;",
    solution_columns: ["owner_profile_id", "live_listing_count"],
    tables: ["listings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_018",
    title: "Visit Requests Per Listing",
    description:
      "Find each listing and the number of property visits scheduled for it.",
    difficulty: "medium",
    expected_query:
      "SELECT listing_id, COUNT(*) AS visit_count FROM property_visits GROUP BY listing_id;",
    solution_columns: ["listing_id", "visit_count"],
    tables: ["property_visits"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_019",
    title: "Owners Without Properties",
    description:
      "Find owner profiles that do not have any properties registered.",
    difficulty: "medium",
    expected_query:
      "SELECT op.id, op.user_id FROM owner_profiles op LEFT JOIN properties p ON op.id = p.owner_profile_id WHERE p.id IS NULL;",
    solution_columns: ["id", "user_id"],
    tables: ["owner_profiles", "properties"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_020",
    title: "Most Common Amenities",
    description:
      "Find the top 5 amenities that are linked to the highest number of properties.",
    difficulty: "medium",
    expected_query:
      "SELECT a.id, a.amenity_name, COUNT(pa.property_id) AS property_count FROM amenities a JOIN property_amenities pa ON a.id = pa.amenity_id GROUP BY a.id, a.amenity_name ORDER BY property_count DESC, a.id ASC LIMIT 5;",
    solution_columns: ["id", "amenity_name", "property_count"],
    tables: ["amenities", "property_amenities"],
    comparison_config: {
      sort_by_columns: [
        { column: "property_count", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_021",
    title: "Applications Pending Review",
    description:
      "Find the id, listing_id, and seeker_user_id of rental applications that are currently under review.",
    difficulty: "easy",
    expected_query:
      "SELECT id, listing_id, seeker_user_id FROM rental_applications WHERE application_status = 'under_review';",
    solution_columns: ["id", "listing_id", "seeker_user_id"],
    tables: ["rental_applications"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_022",
    title: "Active Leases",
    description:
      "Find the id, property_id, tenant_user_id, and monthly_rent of all active leases.",
    difficulty: "easy",
    expected_query:
      "SELECT id, property_id, tenant_user_id, monthly_rent FROM leases WHERE lease_status = 'active';",
    solution_columns: ["id", "property_id", "tenant_user_id", "monthly_rent"],
    tables: ["leases"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_023",
    title: "Overdue Rent Payments",
    description:
      "Find rent payments whose due date has passed and are still pending or overdue.",
    difficulty: "easy",
    expected_query:
      "SELECT id, lease_id, tenant_user_id, due_date, payment_status FROM rent_payments WHERE due_date < CURRENT_DATE AND payment_status IN ('pending', 'overdue');",
    solution_columns: [
      "id",
      "lease_id",
      "tenant_user_id",
      "due_date",
      "payment_status",
    ],
    tables: ["rent_payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_024",
    title: "Open Maintenance Tickets",
    description:
      "Find all maintenance tickets that are still open or in progress.",
    difficulty: "easy",
    expected_query:
      "SELECT id, property_id, issue_type, ticket_status FROM maintenance_tickets WHERE ticket_status IN ('open', 'assigned', 'in_progress');",
    solution_columns: ["id", "property_id", "issue_type", "ticket_status"],
    tables: ["maintenance_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_025",
    title: "High Value Rentals",
    description: "Find live rental listings where rent is greater than 50000.",
    difficulty: "easy",
    expected_query:
      "SELECT id, property_id, rent_amount FROM listings WHERE listing_status = 'live' AND listed_for = 'rent' AND rent_amount > 50000 ORDER BY rent_amount DESC, id ASC;",
    solution_columns: ["id", "property_id", "rent_amount"],
    tables: ["listings"],
    comparison_config: {
      sort_by_columns: [
        { column: "rent_amount", direction: "desc" },
        { column: "id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_026",
    title: "Applications Per Listing",
    description:
      "Find each listing and the total number of rental applications received.",
    difficulty: "medium",
    expected_query:
      "SELECT listing_id, COUNT(*) AS application_count FROM rental_applications GROUP BY listing_id;",
    solution_columns: ["listing_id", "application_count"],
    tables: ["rental_applications"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_027",
    title: "Revenue By Owner",
    description:
      "Find each owner and the total monthly rent from active leases.",
    difficulty: "medium",
    expected_query:
      "SELECT owner_profile_id, SUM(monthly_rent) AS total_monthly_rent FROM leases WHERE lease_status = 'active' GROUP BY owner_profile_id;",
    solution_columns: ["owner_profile_id", "total_monthly_rent"],
    tables: ["leases"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_028",
    title: "Listings By Amenity",
    description: "Find each amenity and the number of properties that have it.",
    difficulty: "medium",
    expected_query:
      "SELECT a.amenity_name, COUNT(pa.property_id) AS property_count FROM amenities a JOIN property_amenities pa ON a.id = pa.amenity_id GROUP BY a.amenity_name;",
    solution_columns: ["amenity_name", "property_count"],
    tables: ["amenities", "property_amenities"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_029",
    title: "Avg Rent By City",
    description: "Find the average live rental price for each city.",
    difficulty: "medium",
    expected_query:
      "SELECT loc.city, AVG(l.rent_amount) AS avg_rent FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.listing_status = 'live' AND l.listed_for = 'rent' AND l.rent_amount IS NOT NULL GROUP BY loc.city;",
    solution_columns: ["city", "avg_rent"],
    tables: ["listings", "properties", "locations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_030",
    title: "Top Inquiry Listings",
    description:
      "Find the top 5 listings with the highest number of inquiries.",
    difficulty: "medium",
    expected_query:
      "SELECT listing_id, COUNT(*) AS inquiry_count FROM inquiries GROUP BY listing_id ORDER BY inquiry_count DESC, listing_id ASC LIMIT 5;",
    solution_columns: ["listing_id", "inquiry_count"],
    tables: ["inquiries"],
    comparison_config: {
      sort_by_columns: [
        { column: "inquiry_count", direction: "desc" },
        { column: "listing_id", direction: "asc" },
      ],
    },
  },

  {
    app_id: appId,
    code: "REALESTATE_031",
    title: "Late Fee Payments",
    description: "Find rent payments where a late fee was charged.",
    difficulty: "easy",
    expected_query:
      "SELECT id, lease_id, tenant_user_id, late_fee FROM rent_payments WHERE late_fee > 0;",
    solution_columns: ["id", "lease_id", "tenant_user_id", "late_fee"],
    tables: ["rent_payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_032",
    title: "Long Lease Listings",
    description: "Find listings with lease duration greater than 12 months.",
    difficulty: "easy",
    expected_query:
      "SELECT id, property_id, lease_duration_months FROM listings WHERE lease_duration_months > 12;",
    solution_columns: ["id", "property_id", "lease_duration_months"],
    tables: ["listings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_033",
    title: "Executives By Team",
    description: "Find each team and the number of active executives in it.",
    difficulty: "easy",
    expected_query:
      "SELECT team_name, COUNT(*) AS executive_count FROM executive_profiles WHERE is_active = true GROUP BY team_name;",
    solution_columns: ["team_name", "executive_count"],
    tables: ["executive_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_034",
    title: "Rejected Owner Requests",
    description: "Find owner verification requests that were rejected.",
    difficulty: "easy",
    expected_query:
      "SELECT id, owner_profile_id, rejection_reason FROM owner_verification_requests WHERE request_status = 'rejected';",
    solution_columns: ["id", "owner_profile_id", "rejection_reason"],
    tables: ["owner_verification_requests"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_035",
    title: "Price Drop Listings",
    description:
      "Find listing price history records where the rent price was reduced.",
    difficulty: "easy",
    expected_query:
      "SELECT id, listing_id, old_rent_amount, new_rent_amount FROM listing_price_history WHERE old_rent_amount IS NOT NULL AND new_rent_amount IS NOT NULL AND new_rent_amount < old_rent_amount;",
    solution_columns: [
      "id",
      "listing_id",
      "old_rent_amount",
      "new_rent_amount",
    ],
    tables: ["listing_price_history"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_036",
    title: "Lease Renewals",
    description: "Find properties that have had more than one lease.",
    difficulty: "medium",
    expected_query:
      "SELECT property_id, COUNT(*) AS lease_count FROM leases GROUP BY property_id HAVING COUNT(*) > 1;",
    solution_columns: ["property_id", "lease_count"],
    tables: ["leases"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_037",
    title: "Maintenance Cost By Property",
    description:
      "Find the total maintenance resolution cost for each property.",
    difficulty: "medium",
    expected_query:
      "SELECT property_id, SUM(COALESCE(resolution_cost, 0)) AS total_maintenance_cost FROM maintenance_tickets GROUP BY property_id;",
    solution_columns: ["property_id", "total_maintenance_cost"],
    tables: ["maintenance_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_038",
    title: "Avg Response Time By Executive",
    description:
      "Find the average resolution time for support tickets handled per user.",
    difficulty: "medium",
    expected_query:
      "SELECT user_id, AVG(resolution_time_mins) AS avg_resolution_time FROM support_tickets WHERE resolution_time_mins IS NOT NULL GROUP BY user_id;",
    solution_columns: ["user_id", "avg_resolution_time"],
    tables: ["support_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_039",
    title: "Top Referrers",
    description: "Find the top 5 users who referred the most converted users.",
    difficulty: "medium",
    expected_query:
      "SELECT referrer_user_id, COUNT(*) AS converted_count FROM referrals WHERE referral_status = 'converted' GROUP BY referrer_user_id ORDER BY converted_count DESC, referrer_user_id ASC LIMIT 5;",
    solution_columns: ["referrer_user_id", "converted_count"],
    tables: ["referrals"],
    comparison_config: {
      sort_by_columns: [
        { column: "converted_count", direction: "desc" },
        { column: "referrer_user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_040",
    title: "Most Active Cities",
    description:
      "Find the top 5 cities with the highest number of property views.",
    difficulty: "medium",
    expected_query:
      "SELECT ae.city, COUNT(*) AS event_count FROM app_events ae WHERE ae.event_name = 'property_view' GROUP BY ae.city ORDER BY event_count DESC, ae.city ASC LIMIT 5;",
    solution_columns: ["city", "event_count"],
    tables: ["app_events"],
    comparison_config: {
      sort_by_columns: [
        { column: "event_count", direction: "desc" },
        { column: "city", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_041",
    title: "Top Rent Cities",
    description: "Find the cities with the highest average live rental price.",
    difficulty: "medium",
    expected_query:
      "SELECT loc.city, AVG(l.rent_amount) AS avg_rent FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.listing_status = 'live' AND l.listed_for = 'rent' AND l.rent_amount IS NOT NULL GROUP BY loc.city ORDER BY avg_rent DESC, loc.city ASC;",
    solution_columns: ["city", "avg_rent"],
    tables: ["listings", "properties", "locations"],
    comparison_config: {
      sort_by_columns: [
        { column: "avg_rent", direction: "desc" },
        { column: "city", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_042",
    title: "Top Viewed Listings",
    description:
      "Find the top 10 listings with the highest number of property views.",
    difficulty: "medium",
    expected_query:
      "SELECT listing_id, COUNT(*) AS total_views FROM property_views GROUP BY listing_id ORDER BY total_views DESC, listing_id ASC LIMIT 10;",
    solution_columns: ["listing_id", "total_views"],
    tables: ["property_views"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_views", direction: "desc" },
        { column: "listing_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_043",
    title: "High Demand Listings",
    description: "Find listings that have more inquiries than visits.",
    difficulty: "medium",
    expected_query:
      "SELECT l.id, COUNT(DISTINCT i.id) AS inquiry_count, COUNT(DISTINCT pv.id) AS visit_count FROM listings l LEFT JOIN inquiries i ON l.id = i.listing_id LEFT JOIN property_visits pv ON l.id = pv.listing_id GROUP BY l.id HAVING COUNT(DISTINCT i.id) > COUNT(DISTINCT pv.id);",
    solution_columns: ["id", "inquiry_count", "visit_count"],
    tables: ["listings", "inquiries", "property_visits"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_044",
    title: "Owners By Portfolio Value",
    description:
      "Find owners ordered by total sale price of their live sale listings.",
    difficulty: "medium",
    expected_query:
      "SELECT owner_profile_id, SUM(sale_price) AS total_portfolio_value FROM listings WHERE listing_status = 'live' AND listed_for = 'sale' AND sale_price IS NOT NULL GROUP BY owner_profile_id ORDER BY total_portfolio_value DESC, owner_profile_id ASC;",
    solution_columns: ["owner_profile_id", "total_portfolio_value"],
    tables: ["listings"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_portfolio_value", direction: "desc" },
        { column: "owner_profile_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_045",
    title: "Frequent Applicants",
    description: "Find users who have applied for more than 2 listings.",
    difficulty: "medium",
    expected_query:
      "SELECT seeker_user_id, COUNT(*) AS application_count FROM rental_applications GROUP BY seeker_user_id HAVING COUNT(*) > 2;",
    solution_columns: ["seeker_user_id", "application_count"],
    tables: ["rental_applications"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_046",
    title: "Most Leased Properties",
    description: "Find properties with the highest number of completed leases.",
    difficulty: "medium",
    expected_query:
      "SELECT property_id, COUNT(*) AS lease_count FROM leases GROUP BY property_id ORDER BY lease_count DESC, property_id ASC;",
    solution_columns: ["property_id", "lease_count"],
    tables: ["leases"],
    comparison_config: {
      sort_by_columns: [
        { column: "lease_count", direction: "desc" },
        { column: "property_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_047",
    title: "Unpaid Lease Amount",
    description: "Find active leases with the total unpaid rent amount.",
    difficulty: "medium",
    expected_query:
      "SELECT rp.lease_id, SUM(rp.amount_due - rp.amount_paid) AS unpaid_amount FROM rent_payments rp JOIN leases l ON rp.lease_id = l.id WHERE l.lease_status = 'active' AND rp.amount_paid < rp.amount_due GROUP BY rp.lease_id;",
    solution_columns: ["lease_id", "unpaid_amount"],
    tables: ["rent_payments", "leases"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_048",
    title: "Busy Executives",
    description: "Find executives handling the most open maintenance tickets.",
    difficulty: "medium",
    expected_query:
      "SELECT assigned_executive_user_id, COUNT(*) AS ticket_count FROM maintenance_tickets WHERE ticket_status IN ('open', 'assigned', 'in_progress') AND assigned_executive_user_id IS NOT NULL GROUP BY assigned_executive_user_id ORDER BY ticket_count DESC, assigned_executive_user_id ASC;",
    solution_columns: ["assigned_executive_user_id", "ticket_count"],
    tables: ["maintenance_tickets"],
    comparison_config: {
      sort_by_columns: [
        { column: "ticket_count", direction: "desc" },
        { column: "assigned_executive_user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_049",
    title: "Amenities Per Property",
    description: "Find properties with more than 3 amenities.",
    difficulty: "medium",
    expected_query:
      "SELECT property_id, COUNT(*) AS amenity_count FROM property_amenities GROUP BY property_id HAVING COUNT(*) > 3;",
    solution_columns: ["property_id", "amenity_count"],
    tables: ["property_amenities"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_050",
    title: "Inactive Owners",
    description: "Find owners who have no live listings.",
    difficulty: "medium",
    expected_query:
      "SELECT op.id, op.user_id FROM owner_profiles op LEFT JOIN listings l ON op.id = l.owner_profile_id AND l.listing_status = 'live' WHERE l.id IS NULL;",
    solution_columns: ["id", "user_id"],
    tables: ["owner_profiles", "listings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_051",
    title: "Repeated Viewers",
    description: "Find users who viewed the same listing more than once.",
    difficulty: "medium",
    expected_query:
      "SELECT user_id, listing_id, COUNT(*) AS view_count FROM property_views WHERE user_id IS NOT NULL GROUP BY user_id, listing_id HAVING COUNT(*) > 1;",
    solution_columns: ["user_id", "listing_id", "view_count"],
    tables: ["property_views"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_052",
    title: "Offer Heavy Listings",
    description: "Find listings that received more than 2 offers.",
    difficulty: "medium",
    expected_query:
      "SELECT listing_id, COUNT(*) AS offer_count FROM offers GROUP BY listing_id HAVING COUNT(*) > 2;",
    solution_columns: ["listing_id", "offer_count"],
    tables: ["offers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_053",
    title: "Rejected Applications",
    description:
      "Find users whose rental applications were rejected more than once.",
    difficulty: "medium",
    expected_query:
      "SELECT seeker_user_id, COUNT(*) AS rejected_count FROM rental_applications WHERE application_status = 'rejected' GROUP BY seeker_user_id HAVING COUNT(*) > 1;",
    solution_columns: ["seeker_user_id", "rejected_count"],
    tables: ["rental_applications"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_054",
    title: "Costly Issue Types",
    description:
      "Find each maintenance issue type and its total resolution cost.",
    difficulty: "medium",
    expected_query:
      "SELECT issue_type, SUM(COALESCE(resolution_cost, 0)) AS total_cost FROM maintenance_tickets GROUP BY issue_type;",
    solution_columns: ["issue_type", "total_cost"],
    tables: ["maintenance_tickets"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_055",
    title: "Expired Offers",
    description: "Find offers that expired without a response.",
    difficulty: "medium",
    expected_query:
      "SELECT id, listing_id, seeker_user_id, expires_at FROM offers WHERE offer_status = 'pending' AND expires_at IS NOT NULL AND expires_at < NOW();",
    solution_columns: ["id", "listing_id", "seeker_user_id", "expires_at"],
    tables: ["offers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_056",
    title: "Active Leases By City",
    description: "Find each city and the number of active leases there.",
    difficulty: "medium",
    expected_query:
      "SELECT loc.city, COUNT(*) AS lease_count FROM leases le JOIN properties p ON le.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE le.lease_status = 'active' GROUP BY loc.city;",
    solution_columns: ["city", "lease_count"],
    tables: ["leases", "properties", "locations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_057",
    title: "Owner Response Load",
    description: "Find owners by total inquiries received on their listings.",
    difficulty: "medium",
    expected_query:
      "SELECT l.owner_profile_id, COUNT(i.id) AS inquiry_count FROM listings l JOIN inquiries i ON l.id = i.listing_id GROUP BY l.owner_profile_id;",
    solution_columns: ["owner_profile_id", "inquiry_count"],
    tables: ["listings", "inquiries"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_058",
    title: "Inactive Listings",
    description: "Find live listings that received no property views.",
    difficulty: "medium",
    expected_query:
      "SELECT l.id, l.property_id FROM listings l LEFT JOIN property_views pv ON l.id = pv.listing_id WHERE l.listing_status = 'live' GROUP BY l.id, l.property_id HAVING COUNT(pv.id) = 0;",
    solution_columns: ["id", "property_id"],
    tables: ["listings", "property_views"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_059",
    title: "Cities With Luxury Rentals",
    description:
      "Find cities that have at least 3 live rental listings with rent above 100000.",
    difficulty: "medium",
    expected_query:
      "SELECT loc.city, COUNT(*) AS luxury_listing_count FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.listing_status = 'live' AND l.listed_for = 'rent' AND l.rent_amount > 100000 GROUP BY loc.city HAVING COUNT(*) >= 3;",
    solution_columns: ["city", "luxury_listing_count"],
    tables: ["listings", "properties", "locations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_060",
    title: "Verified Owners Without Live Listings",
    description: "Find verified owners who do not have any live listings.",
    difficulty: "medium",
    expected_query:
      "SELECT op.id, op.user_id FROM owner_profiles op LEFT JOIN listings l ON op.id = l.owner_profile_id AND l.listing_status = 'live' WHERE op.verification_status = 'verified' AND l.id IS NULL;",
    solution_columns: ["id", "user_id"],
    tables: ["owner_profiles", "listings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_061",
    title: "Top 5 Owners By Total Rent",
    description:
      "Find the top 5 owners earning the highest total monthly rent from active leases.",
    difficulty: "medium",
    expected_query:
      "SELECT owner_profile_id, SUM(monthly_rent) AS total_rent FROM leases WHERE lease_status = 'active' GROUP BY owner_profile_id ORDER BY total_rent DESC, owner_profile_id ASC LIMIT 5;",
    solution_columns: ["owner_profile_id", "total_rent"],
    tables: ["leases"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_rent", direction: "desc" },
        { column: "owner_profile_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_062",
    title: "Listings With High Inquiry Rate",
    description: "Find listings where number of inquiries is greater than 5.",
    difficulty: "medium",
    expected_query:
      "SELECT listing_id, COUNT(*) AS inquiry_count FROM inquiries GROUP BY listing_id HAVING COUNT(*) > 5;",
    solution_columns: ["listing_id", "inquiry_count"],
    tables: ["inquiries"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_063",
    title: "Properties With Multiple Listings",
    description: "Find properties that have more than one listing created.",
    difficulty: "medium",
    expected_query:
      "SELECT property_id, COUNT(*) AS listing_count FROM listings GROUP BY property_id HAVING COUNT(*) > 1;",
    solution_columns: ["property_id", "listing_count"],
    tables: ["listings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_064",
    title: "Top 5 Cities By Total Rent",
    description:
      "Find the top 5 cities generating the highest total rent from active leases.",
    difficulty: "medium",
    expected_query:
      "SELECT loc.city, SUM(le.monthly_rent) AS total_rent FROM leases le JOIN properties p ON le.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE le.lease_status = 'active' GROUP BY loc.city ORDER BY total_rent DESC, loc.city ASC LIMIT 5;",
    solution_columns: ["city", "total_rent"],
    tables: ["leases", "properties", "locations"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_rent", direction: "desc" },
        { column: "city", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_065",
    title: "Listings With Multiple Price Drops",
    description: "Find listings that had more than one price drop in history.",
    difficulty: "medium",
    expected_query:
      "SELECT listing_id, COUNT(*) AS drop_count FROM listing_price_history WHERE new_rent_amount < old_rent_amount GROUP BY listing_id HAVING COUNT(*) > 1;",
    solution_columns: ["listing_id", "drop_count"],
    tables: ["listing_price_history"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_066",
    title: "Users With Multiple Roles",
    description: "Find users who have both owner and seeker roles.",
    difficulty: "medium",
    expected_query:
      "SELECT u.id FROM users u JOIN owner_profiles op ON u.id = op.user_id JOIN seeker_profiles sp ON u.id = sp.user_id;",
    solution_columns: ["id"],
    tables: ["users", "owner_profiles", "seeker_profiles"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_067",
    title: "Listings With Highest Visits",
    description: "Find the top 5 listings with the highest number of visits.",
    difficulty: "medium",
    expected_query:
      "SELECT listing_id, COUNT(*) AS visit_count FROM property_visits GROUP BY listing_id ORDER BY visit_count DESC, listing_id ASC LIMIT 5;",
    solution_columns: ["listing_id", "visit_count"],
    tables: ["property_visits"],
    comparison_config: {
      sort_by_columns: [
        { column: "visit_count", direction: "desc" },
        { column: "listing_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_068",
    title: "Cities With High Maintenance Cost",
    description: "Find cities where total maintenance cost exceeds 1,00,000.",
    difficulty: "medium",
    expected_query:
      "SELECT loc.city, SUM(mt.resolution_cost) AS total_cost FROM maintenance_tickets mt JOIN properties p ON mt.property_id = p.id JOIN locations loc ON p.location_id = loc.id GROUP BY loc.city HAVING SUM(mt.resolution_cost) > 100000;",
    solution_columns: ["city", "total_cost"],
    tables: ["maintenance_tickets", "properties", "locations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_069",
    title: "Most Active Seekers",
    description: "Find seekers who submitted more than 3 rental applications.",
    difficulty: "medium",
    expected_query:
      "SELECT seeker_user_id, COUNT(*) AS application_count FROM rental_applications GROUP BY seeker_user_id HAVING COUNT(*) > 3;",
    solution_columns: ["seeker_user_id", "application_count"],
    tables: ["rental_applications"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_070",
    title: "Top 5 Listings By Offers",
    description: "Find the top 5 listings with the highest number of offers.",
    difficulty: "medium",
    expected_query:
      "SELECT listing_id, COUNT(*) AS offer_count FROM offers GROUP BY listing_id ORDER BY offer_count DESC, listing_id ASC LIMIT 5;",
    solution_columns: ["listing_id", "offer_count"],
    tables: ["offers"],
    comparison_config: {
      sort_by_columns: [
        { column: "offer_count", direction: "desc" },
        { column: "listing_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_071",
    title: "Rank Listings By Rent",
    description: "For each city, rank listings by rent in descending order.",
    difficulty: "hard",
    expected_query:
      "SELECT loc.city, l.id AS listing_id, l.rent_amount, RANK() OVER (PARTITION BY loc.city ORDER BY l.rent_amount DESC, l.id ASC) AS rent_rank FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.listing_status = 'live';",
    solution_columns: ["city", "listing_id", "rent_amount", "rent_rank"],
    tables: ["listings", "properties", "locations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_072",
    title: "Running Rent Per Owner",
    description:
      "Calculate running total rent per owner ordered by lease start date.",
    difficulty: "hard",
    expected_query:
      "SELECT owner_profile_id, id AS lease_id, lease_start_date, monthly_rent, SUM(monthly_rent) OVER (PARTITION BY owner_profile_id ORDER BY lease_start_date, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_rent FROM leases;",
    solution_columns: [
      "owner_profile_id",
      "lease_id",
      "lease_start_date",
      "monthly_rent",
      "running_rent",
    ],
    tables: ["leases"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_073",
    title: "Second Highest Rent Property",
    description: "Find the property with the second highest rent listing.",
    difficulty: "hard",
    expected_query:
      "SELECT property_id, rent_amount FROM (SELECT property_id, rent_amount, DENSE_RANK() OVER (ORDER BY rent_amount DESC) AS rnk FROM listings WHERE rent_amount IS NOT NULL) x WHERE rnk = 2;",
    solution_columns: ["property_id", "rent_amount"],
    tables: ["listings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_074",
    title: "Gap Between Visits",
    description: "Find the maximum gap between visits for each listing.",
    difficulty: "hard",
    expected_query:
      "SELECT listing_id, MAX(gap_minutes) AS max_gap FROM (SELECT listing_id, EXTRACT(EPOCH FROM (view_time - LAG(view_time) OVER (PARTITION BY listing_id ORDER BY view_time))) / 60 AS gap_minutes FROM property_views) x GROUP BY listing_id;",
    solution_columns: ["listing_id", "max_gap"],
    tables: ["property_views"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_075",
    title: "Daily Revenue Rank",
    description: "Rank owners by total rent per day.",
    difficulty: "hard",
    expected_query:
      "SELECT revenue_date, owner_profile_id, total_rent, RANK() OVER (PARTITION BY revenue_date ORDER BY total_rent DESC, owner_profile_id ASC) AS rank FROM (SELECT DATE(lease_start_date) AS revenue_date, owner_profile_id, SUM(monthly_rent) AS total_rent FROM leases GROUP BY DATE(lease_start_date), owner_profile_id) x;",
    solution_columns: [
      "revenue_date",
      "owner_profile_id",
      "total_rent",
      "rank",
    ],
    tables: ["leases"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_076",
    title: "Top 3 Listings Per City",
    description: "Find top 3 rent listings per city.",
    difficulty: "hard",
    expected_query:
      "SELECT city, listing_id, rent_amount FROM (SELECT loc.city, l.id AS listing_id, l.rent_amount, ROW_NUMBER() OVER (PARTITION BY loc.city ORDER BY l.rent_amount DESC, l.id ASC) AS rn FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.rent_amount IS NOT NULL) x WHERE rn <= 3;",
    solution_columns: ["city", "listing_id", "rent_amount"],
    tables: ["listings", "properties", "locations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_077",
    title: "Moving Avg Rent",
    description: "Calculate 3-listing moving average rent per city.",
    difficulty: "hard",
    expected_query:
      "SELECT loc.city, l.id, l.rent_amount, AVG(l.rent_amount) OVER (PARTITION BY loc.city ORDER BY l.created_at ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.rent_amount IS NOT NULL;",
    solution_columns: ["city", "id", "rent_amount", "moving_avg"],
    tables: ["listings", "properties", "locations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_078",
    title: "Consecutive Listing Activity",
    description: "Find longest consecutive active listings streak per owner.",
    difficulty: "hard",
    expected_query:
      "WITH x AS (SELECT owner_profile_id, created_at, ROW_NUMBER() OVER (PARTITION BY owner_profile_id ORDER BY created_at) - ROW_NUMBER() OVER (PARTITION BY owner_profile_id, listing_status ORDER BY created_at) AS grp FROM listings WHERE listing_status = 'live') SELECT owner_profile_id, COUNT(*) AS streak FROM x GROUP BY owner_profile_id, grp;",
    solution_columns: ["owner_profile_id", "streak"],
    tables: ["listings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_079",
    title: "Percentile Rent",
    description: "Find 90th percentile rent per city.",
    difficulty: "hard",
    expected_query:
      "SELECT loc.city, PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY l.rent_amount) AS p90_rent FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.rent_amount IS NOT NULL GROUP BY loc.city;",
    solution_columns: ["city", "p90_rent"],
    tables: ["listings", "properties", "locations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_080",
    title: "Top Revenue Zones",
    description: "Find top 5 zones generating highest rent.",
    difficulty: "hard",
    expected_query:
      "SELECT loc.zone_name, SUM(l.rent_amount) AS total_rent FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.rent_amount IS NOT NULL GROUP BY loc.zone_name ORDER BY total_rent DESC, loc.zone_name ASC LIMIT 5;",
    solution_columns: ["zone_name", "total_rent"],
    tables: ["listings", "properties", "locations"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_rent", direction: "desc" },
        { column: "zone_name", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_081",
    title: "Top Lease Revenue Cities",
    description:
      "Find cities generating the highest total monthly rent from active leases.",
    difficulty: "hard",
    expected_query:
      "SELECT loc.city, SUM(le.monthly_rent) AS total_monthly_rent FROM leases le JOIN properties p ON le.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE le.lease_status = 'active' GROUP BY loc.city ORDER BY total_monthly_rent DESC, loc.city ASC;",
    solution_columns: ["city", "total_monthly_rent"],
    tables: ["leases", "properties", "locations"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_monthly_rent", direction: "desc" },
        { column: "city", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_082",
    title: "Owners With Mixed Inventory",
    description:
      "Find owners who have both live rental listings and live sale listings.",
    difficulty: "hard",
    expected_query:
      "SELECT owner_profile_id FROM listings WHERE listing_status = 'live' GROUP BY owner_profile_id HAVING COUNT(*) FILTER (WHERE listed_for = 'rent') > 0 AND COUNT(*) FILTER (WHERE listed_for = 'sale') > 0;",
    solution_columns: ["owner_profile_id"],
    tables: ["listings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_083",
    title: "Visit Heavy No Offer Listings",
    description:
      "Find listings that had completed visits but received no offers.",
    difficulty: "hard",
    expected_query:
      "SELECT pv.listing_id, COUNT(*) AS completed_visit_count FROM property_visits pv LEFT JOIN offers o ON pv.listing_id = o.listing_id WHERE pv.visit_status = 'completed' GROUP BY pv.listing_id HAVING COUNT(o.id) = 0;",
    solution_columns: ["listing_id", "completed_visit_count"],
    tables: ["property_visits", "offers"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_084",
    title: "Tenants With Late Fee Ratio",
    description:
      "Find tenants whose rent payments charged late fees more than once.",
    difficulty: "hard",
    expected_query:
      "SELECT tenant_user_id, COUNT(*) AS late_fee_payment_count FROM rent_payments WHERE late_fee > 0 GROUP BY tenant_user_id HAVING COUNT(*) > 1;",
    solution_columns: ["tenant_user_id", "late_fee_payment_count"],
    tables: ["rent_payments"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_085",
    title: "Expensive Areas By Sqft",
    description:
      "Find localities with the highest average rent per built up area for live rental listings.",
    difficulty: "hard",
    expected_query:
      "SELECT loc.locality, AVG(l.rent_amount / NULLIF(p.built_up_area_sqft, 0)) AS avg_rent_per_sqft FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.listing_status = 'live' AND l.listed_for = 'rent' AND l.rent_amount IS NOT NULL AND p.built_up_area_sqft IS NOT NULL AND p.built_up_area_sqft > 0 GROUP BY loc.locality ORDER BY avg_rent_per_sqft DESC, loc.locality ASC;",
    solution_columns: ["locality", "avg_rent_per_sqft"],
    tables: ["listings", "properties", "locations"],
    comparison_config: {
      sort_by_columns: [
        { column: "avg_rent_per_sqft", direction: "desc" },
        { column: "locality", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_086",
    title: "Owners With Repeated Price Drops",
    description:
      "Find owners whose listings had price drops on more than one record.",
    difficulty: "hard",
    expected_query:
      "SELECT l.owner_profile_id, COUNT(*) AS price_drop_count FROM listing_price_history lph JOIN listings l ON lph.listing_id = l.id WHERE lph.old_rent_amount IS NOT NULL AND lph.new_rent_amount IS NOT NULL AND lph.new_rent_amount < lph.old_rent_amount GROUP BY l.owner_profile_id HAVING COUNT(*) > 1;",
    solution_columns: ["owner_profile_id", "price_drop_count"],
    tables: ["listing_price_history", "listings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_087",
    title: "Applications Without Offers",
    description:
      "Find rental applications that were submitted without any linked offer.",
    difficulty: "hard",
    expected_query:
      "SELECT id, listing_id, seeker_user_id FROM rental_applications WHERE offer_id IS NULL;",
    solution_columns: ["id", "listing_id", "seeker_user_id"],
    tables: ["rental_applications"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_088",
    title: "Owners With Multi Amenity Properties",
    description:
      "Find owners who have at least one property with more than 5 amenities.",
    difficulty: "hard",
    expected_query:
      "SELECT DISTINCT p.owner_profile_id FROM properties p JOIN property_amenities pa ON p.id = pa.property_id GROUP BY p.id, p.owner_profile_id HAVING COUNT(pa.id) > 5;",
    solution_columns: ["owner_profile_id"],
    tables: ["properties", "property_amenities"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_089",
    title: "Localities Above City Rent",
    description:
      "Find localities where the average live rental price is greater than the average live rental price of their city.",
    difficulty: "hard",
    expected_query:
      "SELECT x.city, x.locality, x.avg_locality_rent FROM (SELECT loc.city, loc.locality, AVG(l.rent_amount) AS avg_locality_rent FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.listing_status = 'live' AND l.listed_for = 'rent' AND l.rent_amount IS NOT NULL GROUP BY loc.city, loc.locality) x JOIN (SELECT loc.city, AVG(l.rent_amount) AS avg_city_rent FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.listing_status = 'live' AND l.listed_for = 'rent' AND l.rent_amount IS NOT NULL GROUP BY loc.city) y ON x.city = y.city WHERE x.avg_locality_rent > y.avg_city_rent;",
    solution_columns: ["city", "locality", "avg_locality_rent"],
    tables: ["listings", "properties", "locations"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_090",
    title: "Seeker Funnel Completion",
    description:
      "Find seekers who completed the full funnel of inquiry, completed visit, accepted offer, and active lease.",
    difficulty: "hard",
    expected_query:
      "SELECT DISTINCT i.seeker_user_id FROM inquiries i JOIN property_visits pv ON i.listing_id = pv.listing_id AND i.seeker_user_id = pv.seeker_user_id JOIN offers o ON i.listing_id = o.listing_id AND i.seeker_user_id = o.seeker_user_id JOIN leases le ON i.listing_id = le.listing_id AND le.tenant_user_id = i.seeker_user_id WHERE pv.visit_status = 'completed' AND o.offer_status = 'accepted' AND le.lease_status = 'active';",
    solution_columns: ["seeker_user_id"],
    tables: ["inquiries", "property_visits", "offers", "leases"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_091",
    title: "Top Maintenance Spend Cities",
    description:
      "Find cities with the highest total maintenance resolution cost.",
    difficulty: "hard",
    expected_query:
      "SELECT loc.city, SUM(COALESCE(mt.resolution_cost, 0)) AS total_maintenance_cost FROM maintenance_tickets mt JOIN properties p ON mt.property_id = p.id JOIN locations loc ON p.location_id = loc.id GROUP BY loc.city ORDER BY total_maintenance_cost DESC, loc.city ASC;",
    solution_columns: ["city", "total_maintenance_cost"],
    tables: ["maintenance_tickets", "properties", "locations"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_maintenance_cost", direction: "desc" },
        { column: "city", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_092",
    title: "Owners With Only Rent Listings",
    description:
      "Find owners whose live listings are only for rent and none for sale.",
    difficulty: "hard",
    expected_query:
      "SELECT owner_profile_id FROM listings WHERE listing_status = 'live' GROUP BY owner_profile_id HAVING COUNT(*) FILTER (WHERE listed_for = 'rent') > 0 AND COUNT(*) FILTER (WHERE listed_for = 'sale') = 0;",
    solution_columns: ["owner_profile_id"],
    tables: ["listings"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_093",
    title: "Properties With Repeated Tenants",
    description:
      "Find properties that have been leased by the same tenant more than once.",
    difficulty: "hard",
    expected_query:
      "SELECT property_id, tenant_user_id, COUNT(*) AS lease_count FROM leases GROUP BY property_id, tenant_user_id HAVING COUNT(*) > 1;",
    solution_columns: ["property_id", "tenant_user_id", "lease_count"],
    tables: ["leases"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_094",
    title: "Listings With More Visits Than Inquiries",
    description: "Find listings where completed visits exceed total inquiries.",
    difficulty: "hard",
    expected_query:
      "SELECT l.id, COUNT(DISTINCT pv.id) AS completed_visit_count, COUNT(DISTINCT i.id) AS inquiry_count FROM listings l LEFT JOIN property_visits pv ON l.id = pv.listing_id AND pv.visit_status = 'completed' LEFT JOIN inquiries i ON l.id = i.listing_id GROUP BY l.id HAVING COUNT(DISTINCT pv.id) > COUNT(DISTINCT i.id);",
    solution_columns: ["id", "completed_visit_count", "inquiry_count"],
    tables: ["listings", "property_visits", "inquiries"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_095",
    title: "Long Pending Applications",
    description:
      "Find rental applications that have remained under review for more than 7 days.",
    difficulty: "hard",
    expected_query:
      "SELECT id, listing_id, seeker_user_id, created_at FROM rental_applications WHERE application_status = 'under_review' AND created_at < NOW() - INTERVAL '7 days';",
    solution_columns: ["id", "listing_id", "seeker_user_id", "created_at"],
    tables: ["rental_applications"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_096",
    title: "High Conversion Owners",
    description:
      "Find owners whose listings have both inquiries and active leases for more than one listing.",
    difficulty: "hard",
    expected_query:
      "SELECT l.owner_profile_id, COUNT(DISTINCT l.id) AS converted_listing_count FROM listings l JOIN inquiries i ON l.id = i.listing_id JOIN leases le ON l.id = le.listing_id AND le.lease_status = 'active' GROUP BY l.owner_profile_id HAVING COUNT(DISTINCT l.id) > 1;",
    solution_columns: ["owner_profile_id", "converted_listing_count"],
    tables: ["listings", "inquiries", "leases"],
    comparison_config: {},
  },
  {
    app_id: appId,
    code: "REALESTATE_097",
    title: "Top Referral Users",
    description:
      "Find users who have the highest total referral reward amount.",
    difficulty: "hard",
    expected_query:
      "SELECT referrer_user_id, SUM(reward_amount) AS total_reward_amount FROM referrals GROUP BY referrer_user_id ORDER BY total_reward_amount DESC, referrer_user_id ASC;",
    solution_columns: ["referrer_user_id", "total_reward_amount"],
    tables: ["referrals"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_reward_amount", direction: "desc" },
        { column: "referrer_user_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_098",
    title: "Cities With Highest Lease Default",
    description: "Find cities with the highest total overdue rent amount.",
    difficulty: "hard",
    expected_query:
      "SELECT loc.city, SUM(rp.amount_due - rp.amount_paid) AS overdue_amount FROM rent_payments rp JOIN leases le ON rp.lease_id = le.id JOIN properties p ON le.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE rp.payment_status = 'overdue' GROUP BY loc.city ORDER BY overdue_amount DESC, loc.city ASC;",
    solution_columns: ["city", "overdue_amount"],
    tables: ["rent_payments", "leases", "properties", "locations"],
    comparison_config: {
      sort_by_columns: [
        { column: "overdue_amount", direction: "desc" },
        { column: "city", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_099",
    title: "Most Stable Owners",
    description:
      "Find owners whose listings have the fewest status changes among owners with at least one live listing.",
    difficulty: "hard",
    expected_query:
      "SELECT l.owner_profile_id, COUNT(lsh.id) AS status_change_count FROM listings l LEFT JOIN listing_status_history lsh ON l.id = lsh.listing_id WHERE l.listing_status = 'live' GROUP BY l.owner_profile_id ORDER BY status_change_count ASC, l.owner_profile_id ASC;",
    solution_columns: ["owner_profile_id", "status_change_count"],
    tables: ["listings", "listing_status_history"],
    comparison_config: {
      sort_by_columns: [
        { column: "status_change_count", direction: "asc" },
        { column: "owner_profile_id", direction: "asc" },
      ],
    },
  },
  {
    app_id: appId,
    code: "REALESTATE_100",
    title: "Top Revenue Properties",
    description:
      "Find properties generating the highest total paid rent amount.",
    difficulty: "hard",
    expected_query:
      "SELECT le.property_id, SUM(rp.amount_paid) AS total_paid_rent FROM rent_payments rp JOIN leases le ON rp.lease_id = le.id WHERE rp.payment_status IN ('paid', 'partial') GROUP BY le.property_id ORDER BY total_paid_rent DESC, le.property_id ASC;",
    solution_columns: ["property_id", "total_paid_rent"],
    tables: ["rent_payments", "leases"],
    comparison_config: {
      sort_by_columns: [
        { column: "total_paid_rent", direction: "desc" },
        { column: "property_id", direction: "asc" },
      ],
    },
  },
];

export const hints = [
  {
    code: "REALESTATE_001",
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
    code: "REALESTATE_002",
    hints: [
      {
        hint_order: 1,
        content: "Filter verified owners first.",
      },
      {
        hint_order: 2,
        content: "Use verification_status in owner_profiles.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) where status is verified.",
      },
    ],
  },
  {
    code: "REALESTATE_003",
    hints: [
      {
        hint_order: 1,
        content: "Only live listings should be returned.",
      },
      {
        hint_order: 2,
        content: "Pick id, property_id, and listed_for.",
      },
      {
        hint_order: 3,
        content: "Use WHERE listing_status = 'live'.",
      },
    ],
  },
  {
    code: "REALESTATE_004",
    hints: [
      {
        hint_order: 1,
        content: "Look in properties only.",
      },
      {
        hint_order: 2,
        content: "Use the gated community flag.",
      },
      {
        hint_order: 3,
        content: "Filter is_gated_community = true.",
      },
    ],
  },
  {
    code: "REALESTATE_005",
    hints: [
      {
        hint_order: 1,
        content: "Start from listings.",
      },
      {
        hint_order: 2,
        content: "Keep live listings where pets are allowed.",
      },
      {
        hint_order: 3,
        content: "Use both listing_status and pet_allowed.",
      },
    ],
  },
  {
    code: "REALESTATE_006",
    hints: [
      {
        hint_order: 1,
        content: "Only live rental listings matter.",
      },
      {
        hint_order: 2,
        content: "Sort by highest rent first.",
      },
      {
        hint_order: 3,
        content: "ORDER BY rent_amount DESC with LIMIT 5.",
      },
    ],
  },
  {
    code: "REALESTATE_007",
    hints: [
      {
        hint_order: 1,
        content: "Group users by signup source.",
      },
      {
        hint_order: 2,
        content: "Ignore NULL signup_source values.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) with GROUP BY signup_source.",
      },
    ],
  },
  {
    code: "REALESTATE_008",
    hints: [
      {
        hint_order: 1,
        content: "Use properties table.",
      },
      {
        hint_order: 2,
        content: "Group by property_type.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) for each type.",
      },
    ],
  },
  {
    code: "REALESTATE_009",
    hints: [
      {
        hint_order: 1,
        content:
          "A listing belongs to a property, and a property belongs to a location.",
      },
      {
        hint_order: 2,
        content: "Join listings, properties, and locations.",
      },
      {
        hint_order: 3,
        content: "Group by city and count listings.",
      },
    ],
  },
  {
    code: "REALESTATE_010",
    hints: [
      {
        hint_order: 1,
        content: "Each property belongs to an owner profile.",
      },
      {
        hint_order: 2,
        content: "Join owner_profiles with properties.",
      },
      {
        hint_order: 3,
        content: "Group by owner and use HAVING COUNT(...) > 3.",
      },
    ],
  },
  {
    code: "REALESTATE_011",
    hints: [
      {
        hint_order: 1,
        content: "Use owner_verification_requests only.",
      },
      {
        hint_order: 2,
        content: "Keep only pending requests.",
      },
      {
        hint_order: 3,
        content: "Filter request_status = 'pending'.",
      },
    ],
  },
  {
    code: "REALESTATE_012",
    hints: [
      {
        hint_order: 1,
        content: "Look at document expiry date.",
      },
      {
        hint_order: 2,
        content: "Ignore rows with NULL expires_at.",
      },
      {
        hint_order: 3,
        content: "Compare expires_at with NOW().",
      },
    ],
  },
  {
    code: "REALESTATE_013",
    hints: [
      {
        hint_order: 1,
        content: "This is about live listings that are still available.",
      },
      {
        hint_order: 2,
        content: "Use both listing_status and availability_status.",
      },
      {
        hint_order: 3,
        content: "Filter live + available.",
      },
    ],
  },
  {
    code: "REALESTATE_014",
    hints: [
      {
        hint_order: 1,
        content: "Properties store location_id.",
      },
      {
        hint_order: 2,
        content: "Join properties with locations.",
      },
      {
        hint_order: 3,
        content: "Group by city and count properties.",
      },
    ],
  },
  {
    code: "REALESTATE_015",
    hints: [
      {
        hint_order: 1,
        content: "Some listings may not have rows in listing_media.",
      },
      {
        hint_order: 2,
        content: "Use a LEFT JOIN from listings to listing_media.",
      },
      {
        hint_order: 3,
        content: "Keep rows where the media side is NULL.",
      },
    ],
  },
  {
    code: "REALESTATE_016",
    hints: [
      {
        hint_order: 1,
        content: "Views are stored in property_views.",
      },
      {
        hint_order: 2,
        content: "Count views per listing_id.",
      },
      {
        hint_order: 3,
        content: "Sort by count descending and limit to 5.",
      },
    ],
  },
  {
    code: "REALESTATE_017",
    hints: [
      {
        hint_order: 1,
        content: "Only live listings matter here.",
      },
      {
        hint_order: 2,
        content: "Group listings by owner_profile_id.",
      },
      {
        hint_order: 3,
        content: "Count live listings per owner.",
      },
    ],
  },
  {
    code: "REALESTATE_018",
    hints: [
      {
        hint_order: 1,
        content: "Visits are stored in property_visits.",
      },
      {
        hint_order: 2,
        content: "Group by listing_id.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) visits per listing.",
      },
    ],
  },
  {
    code: "REALESTATE_019",
    hints: [
      {
        hint_order: 1,
        content: "Some owners may not have any properties.",
      },
      {
        hint_order: 2,
        content: "Use a LEFT JOIN from owner_profiles to properties.",
      },
      {
        hint_order: 3,
        content: "Keep owners where property id is NULL.",
      },
    ],
  },
  {
    code: "REALESTATE_020",
    hints: [
      {
        hint_order: 1,
        content: "Amenities are connected through property_amenities.",
      },
      {
        hint_order: 2,
        content: "Join amenities with property_amenities.",
      },
      {
        hint_order: 3,
        content: "Count linked properties per amenity and take top 5.",
      },
    ],
  },
  {
    code: "REALESTATE_021",
    hints: [
      {
        hint_order: 1,
        content: "Use rental_applications only.",
      },
      {
        hint_order: 2,
        content: "Keep applications under review.",
      },
      {
        hint_order: 3,
        content: "Filter application_status = 'under_review'.",
      },
    ],
  },
  {
    code: "REALESTATE_022",
    hints: [
      {
        hint_order: 1,
        content: "Use leases table.",
      },
      {
        hint_order: 2,
        content: "Keep only active leases.",
      },
      {
        hint_order: 3,
        content: "Filter lease_status = 'active'.",
      },
    ],
  },
  {
    code: "REALESTATE_023",
    hints: [
      {
        hint_order: 1,
        content: "Overdue means due date already passed.",
      },
      {
        hint_order: 2,
        content: "Only pending or overdue statuses matter.",
      },
      {
        hint_order: 3,
        content: "Use due_date < CURRENT_DATE with WHERE ... IN (...).",
      },
    ],
  },
  {
    code: "REALESTATE_024",
    hints: [
      {
        hint_order: 1,
        content: "This is only about maintenance_tickets.",
      },
      {
        hint_order: 2,
        content: "Open work includes multiple statuses.",
      },
      {
        hint_order: 3,
        content: "Use ticket_status IN ('open', 'assigned', 'in_progress').",
      },
    ],
  },
  {
    code: "REALESTATE_025",
    hints: [
      {
        hint_order: 1,
        content: "Look at live rental listings only.",
      },
      {
        hint_order: 2,
        content: "Apply the rent threshold.",
      },
      {
        hint_order: 3,
        content: "Use listed_for = 'rent' and rent_amount > 50000.",
      },
    ],
  },
  {
    code: "REALESTATE_026",
    hints: [
      {
        hint_order: 1,
        content: "Applications belong to listings.",
      },
      {
        hint_order: 2,
        content: "Group rental_applications by listing_id.",
      },
      {
        hint_order: 3,
        content: "COUNT(*) applications per listing.",
      },
    ],
  },
  {
    code: "REALESTATE_027",
    hints: [
      {
        hint_order: 1,
        content: "Revenue comes from active leases.",
      },
      {
        hint_order: 2,
        content: "Group leases by owner_profile_id.",
      },
      {
        hint_order: 3,
        content: "SUM(monthly_rent) for active leases.",
      },
    ],
  },
  {
    code: "REALESTATE_028",
    hints: [
      {
        hint_order: 1,
        content: "Amenities are linked through property_amenities.",
      },
      {
        hint_order: 2,
        content: "Join amenities to the mapping table.",
      },
      {
        hint_order: 3,
        content: "Group by amenity_name and count properties.",
      },
    ],
  },
  {
    code: "REALESTATE_029",
    hints: [
      {
        hint_order: 1,
        content: "You need listing rent and city together.",
      },
      {
        hint_order: 2,
        content: "Join listings -> properties -> locations.",
      },
      {
        hint_order: 3,
        content: "Group by city and use AVG(rent_amount).",
      },
    ],
  },
  {
    code: "REALESTATE_030",
    hints: [
      {
        hint_order: 1,
        content: "Inquiries belong to listings.",
      },
      {
        hint_order: 2,
        content: "Count inquiries per listing_id.",
      },
      {
        hint_order: 3,
        content: "Sort descending and limit to top 5.",
      },
    ],
  },
  {
    code: "REALESTATE_031",
    hints: [
      {
        hint_order: 1,
        content: "Look at rent_payments only.",
      },
      {
        hint_order: 2,
        content: "A charged late fee means the value is above zero.",
      },
      {
        hint_order: 3,
        content: "Filter late_fee > 0 and sort by late_fee.",
      },
    ],
  },
  {
    code: "REALESTATE_032",
    hints: [
      {
        hint_order: 1,
        content: "Use listings table.",
      },
      {
        hint_order: 2,
        content: "Check lease_duration_months.",
      },
      {
        hint_order: 3,
        content: "Filter durations greater than 12 months.",
      },
    ],
  },
  {
    code: "REALESTATE_033",
    hints: [
      {
        hint_order: 1,
        content: "Count executives by team.",
      },
      {
        hint_order: 2,
        content: "Only active executives should be included.",
      },
      {
        hint_order: 3,
        content: "Group by team_name and count rows.",
      },
    ],
  },
  {
    code: "REALESTATE_034",
    hints: [
      {
        hint_order: 1,
        content: "Use owner_verification_requests.",
      },
      {
        hint_order: 2,
        content: "Keep only rejected requests.",
      },
      {
        hint_order: 3,
        content: "Filter request_status = 'rejected'.",
      },
    ],
  },
  {
    code: "REALESTATE_035",
    hints: [
      {
        hint_order: 1,
        content: "Compare old rent and new rent in listing_price_history.",
      },
      {
        hint_order: 2,
        content: "A drop means the new value is smaller.",
      },
      {
        hint_order: 3,
        content: "Filter rows where new_rent_amount < old_rent_amount.",
      },
    ],
  },
  {
    code: "REALESTATE_036",
    hints: [
      {
        hint_order: 1,
        content: "This is about repeated leases on the same property.",
      },
      {
        hint_order: 2,
        content: "Group leases by property_id.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "REALESTATE_037",
    hints: [
      {
        hint_order: 1,
        content: "Sum maintenance costs per property.",
      },
      {
        hint_order: 2,
        content: "Use maintenance_tickets.",
      },
      {
        hint_order: 3,
        content: "Group by property_id and SUM resolution_cost.",
      },
    ],
  },
  {
    code: "REALESTATE_038",
    hints: [
      {
        hint_order: 1,
        content: "Average resolution time per user.",
      },
      {
        hint_order: 2,
        content: "Ignore NULL resolution_time_mins.",
      },
      {
        hint_order: 3,
        content: "Group by user_id and use AVG(resolution_time_mins).",
      },
    ],
  },
  {
    code: "REALESTATE_039",
    hints: [
      {
        hint_order: 1,
        content: "Only converted referrals matter.",
      },
      {
        hint_order: 2,
        content: "Group referrals by referrer_user_id.",
      },
      {
        hint_order: 3,
        content: "Count converted rows and keep the top 5.",
      },
    ],
  },
  {
    code: "REALESTATE_040",
    hints: [
      {
        hint_order: 1,
        content: "Use app_events, not property_views.",
      },
      {
        hint_order: 2,
        content: "Keep only property_view events.",
      },
      {
        hint_order: 3,
        content: "Group by city, count events, and limit to 5.",
      },
    ],
  },
  {
    code: "REALESTATE_041",
    hints: [
      {
        hint_order: 1,
        content: "This asks for average rent by city.",
      },
      {
        hint_order: 2,
        content: "Join listings to properties and locations.",
      },
      {
        hint_order: 3,
        content: "Group by city and use AVG(rent_amount).",
      },
    ],
  },
  {
    code: "REALESTATE_042",
    hints: [
      {
        hint_order: 1,
        content: "Live listings need to be tied to localities.",
      },
      {
        hint_order: 2,
        content: "Join listings -> properties -> locations.",
      },
      {
        hint_order: 3,
        content: "Group by locality and count listings.",
      },
    ],
  },
  {
    code: "REALESTATE_043",
    hints: [
      {
        hint_order: 1,
        content: "Compare inquiries and visits per listing.",
      },
      {
        hint_order: 2,
        content: "Join listings with inquiries and property_visits.",
      },
      {
        hint_order: 3,
        content: "Use DISTINCT counts to avoid duplicate multiplication.",
      },
    ],
  },
  {
    code: "REALESTATE_044",
    hints: [
      {
        hint_order: 1,
        content: "Use only live sale listings.",
      },
      {
        hint_order: 2,
        content: "Group by owner_profile_id.",
      },
      {
        hint_order: 3,
        content: "SUM sale_price for each owner.",
      },
    ],
  },
  {
    code: "REALESTATE_045",
    hints: [
      {
        hint_order: 1,
        content: "Count applications per seeker.",
      },
      {
        hint_order: 2,
        content: "Use rental_applications.",
      },
      {
        hint_order: 3,
        content: "Group by seeker_user_id and keep counts above 2.",
      },
    ],
  },
  {
    code: "REALESTATE_046",
    hints: [
      {
        hint_order: 1,
        content: "Find how many leases each property had.",
      },
      {
        hint_order: 2,
        content: "Use leases only.",
      },
      {
        hint_order: 3,
        content: "Group by property_id and count rows.",
      },
    ],
  },
  {
    code: "REALESTATE_047",
    hints: [
      {
        hint_order: 1,
        content: "Unpaid amount is due minus paid.",
      },
      {
        hint_order: 2,
        content: "Only active leases should be included.",
      },
      {
        hint_order: 3,
        content:
          "Join rent_payments to leases, then SUM(amount_due - amount_paid).",
      },
    ],
  },
  {
    code: "REALESTATE_048",
    hints: [
      {
        hint_order: 1,
        content: "Look at maintenance tickets still in progress.",
      },
      {
        hint_order: 2,
        content: "Group by assigned_executive_user_id.",
      },
      {
        hint_order: 3,
        content: "Count open or active ticket statuses per executive.",
      },
    ],
  },
  {
    code: "REALESTATE_049",
    hints: [
      {
        hint_order: 1,
        content: "Amenities are stored in property_amenities.",
      },
      {
        hint_order: 2,
        content: "Count amenities per property.",
      },
      {
        hint_order: 3,
        content: "Group by property_id and use HAVING COUNT(*) > 3.",
      },
    ],
  },
  {
    code: "REALESTATE_050",
    hints: [
      {
        hint_order: 1,
        content: "Owners with no live listings are needed.",
      },
      {
        hint_order: 2,
        content: "Use a LEFT JOIN from owner_profiles to listings.",
      },
      {
        hint_order: 3,
        content: "Join only live listings and keep NULL matches.",
      },
    ],
  },
  {
    code: "REALESTATE_051",
    hints: [
      {
        hint_order: 1,
        content:
          "Repeated viewing means the same user and listing pair appears multiple times.",
      },
      {
        hint_order: 2,
        content: "Ignore anonymous rows where user_id is NULL.",
      },
      {
        hint_order: 3,
        content: "Group by user_id, listing_id and use HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "REALESTATE_052",
    hints: [
      {
        hint_order: 1,
        content: "This is a grouped offer count per listing.",
      },
      {
        hint_order: 2,
        content: "Use offers table only.",
      },
      {
        hint_order: 3,
        content: "Group by listing_id and keep counts above 2.",
      },
    ],
  },
  {
    code: "REALESTATE_053",
    hints: [
      {
        hint_order: 1,
        content: "Only rejected applications matter.",
      },
      {
        hint_order: 2,
        content: "Group by seeker_user_id.",
      },
      {
        hint_order: 3,
        content: "Filter rejected rows first, then HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "REALESTATE_054",
    hints: [
      {
        hint_order: 1,
        content: "Resolution cost needs to be summed by issue type.",
      },
      {
        hint_order: 2,
        content: "Use maintenance_tickets.",
      },
      {
        hint_order: 3,
        content: "Group by issue_type and SUM resolution_cost.",
      },
    ],
  },
  {
    code: "REALESTATE_055",
    hints: [
      {
        hint_order: 1,
        content:
          "An expired offer is still pending but its expiry time has passed.",
      },
      {
        hint_order: 2,
        content: "Ignore rows where expires_at is NULL.",
      },
      {
        hint_order: 3,
        content: "Filter pending offers with expires_at < NOW().",
      },
    ],
  },
  {
    code: "REALESTATE_056",
    hints: [
      {
        hint_order: 1,
        content: "Active leases need city information.",
      },
      {
        hint_order: 2,
        content: "Join leases to properties and then locations.",
      },
      {
        hint_order: 3,
        content: "Group by city and count active leases.",
      },
    ],
  },
  {
    code: "REALESTATE_057",
    hints: [
      {
        hint_order: 1,
        content: "Inquiries belong to listings, and listings belong to owners.",
      },
      {
        hint_order: 2,
        content: "Join listings with inquiries.",
      },
      {
        hint_order: 3,
        content: "Group by owner_profile_id and count inquiries.",
      },
    ],
  },
  {
    code: "REALESTATE_058",
    hints: [
      {
        hint_order: 1,
        content: "You need live listings with no views.",
      },
      {
        hint_order: 2,
        content: "Use a LEFT JOIN from listings to property_views.",
      },
      {
        hint_order: 3,
        content:
          "Keep live listings where the view count is zero or view id is NULL.",
      },
    ],
  },
  {
    code: "REALESTATE_059",
    hints: [
      {
        hint_order: 1,
        content: "Focus on live rental listings with rent above 100000.",
      },
      {
        hint_order: 2,
        content: "Bring city using properties and locations.",
      },
      {
        hint_order: 3,
        content: "Group by city and keep cities with at least 3 such listings.",
      },
    ],
  },
  {
    code: "REALESTATE_060",
    hints: [
      {
        hint_order: 1,
        content: "Start with verified owners only.",
      },
      {
        hint_order: 2,
        content: "Then check whether they have any live listings.",
      },
      {
        hint_order: 3,
        content:
          "Use LEFT JOIN or NOT EXISTS to keep only owners without live listings.",
      },
    ],
  },
  {
    code: "REALESTATE_061",
    hints: [
      {
        hint_order: 1,
        content: "Start with active leases only.",
      },
      {
        hint_order: 2,
        content: "Join leases to properties and then locations.",
      },
      {
        hint_order: 3,
        content: "Group by city and SUM monthly_rent.",
      },
    ],
  },
  {
    code: "REALESTATE_062",
    hints: [
      {
        hint_order: 1,
        content: "A property can have multiple visits.",
      },
      {
        hint_order: 2,
        content: "Count only completed visits.",
      },
      {
        hint_order: 3,
        content: "Group by listing_id with WHERE visit_status = 'completed'.",
      },
    ],
  },
  {
    code: "REALESTATE_063",
    hints: [
      {
        hint_order: 1,
        content: "Owners are identified through listings.",
      },
      {
        hint_order: 2,
        content: "Count live listings per owner.",
      },
      {
        hint_order: 3,
        content: "Use GROUP BY owner_profile_id and HAVING COUNT(*) > 5.",
      },
    ],
  },
  {
    code: "REALESTATE_064",
    hints: [
      {
        hint_order: 1,
        content: "Use offers table only.",
      },
      {
        hint_order: 2,
        content: "Keep accepted offers.",
      },
      {
        hint_order: 3,
        content: "Group by listing_id and count accepted offers.",
      },
    ],
  },
  {
    code: "REALESTATE_065",
    hints: [
      {
        hint_order: 1,
        content: "Check rent payments with overdue status.",
      },
      {
        hint_order: 2,
        content: "Group by tenant_user_id.",
      },
      {
        hint_order: 3,
        content: "COUNT overdue rows per tenant.",
      },
    ],
  },
  {
    code: "REALESTATE_066",
    hints: [
      {
        hint_order: 1,
        content: "Maintenance issues belong to properties.",
      },
      {
        hint_order: 2,
        content: "Join maintenance_tickets to properties.",
      },
      {
        hint_order: 3,
        content: "Group by property_id and SUM resolution_cost.",
      },
    ],
  },
  {
    code: "REALESTATE_067",
    hints: [
      {
        hint_order: 1,
        content: "A conversion means inquiry led to lease.",
      },
      {
        hint_order: 2,
        content: "Join inquiries and leases on listing_id and user.",
      },
      {
        hint_order: 3,
        content: "Count distinct converted seekers.",
      },
    ],
  },
  {
    code: "REALESTATE_068",
    hints: [
      {
        hint_order: 1,
        content: "Use property_views only.",
      },
      {
        hint_order: 2,
        content: "Group by user_id and listing_id.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(*) > 3 for repeated views.",
      },
    ],
  },
  {
    code: "REALESTATE_069",
    hints: [
      {
        hint_order: 1,
        content: "Join listings with properties and locations.",
      },
      {
        hint_order: 2,
        content: "Focus on live rent listings only.",
      },
      {
        hint_order: 3,
        content: "Group by locality and AVG rent_amount.",
      },
    ],
  },
  {
    code: "REALESTATE_070",
    hints: [
      {
        hint_order: 1,
        content: "Use rental_applications.",
      },
      {
        hint_order: 2,
        content: "Filter approved applications.",
      },
      {
        hint_order: 3,
        content: "Group by listing_id and count approvals.",
      },
    ],
  },
  {
    code: "REALESTATE_071",
    hints: [
      {
        hint_order: 1,
        content: "Use lease renewal history or repeated leases.",
      },
      {
        hint_order: 2,
        content: "Group by tenant and property.",
      },
      {
        hint_order: 3,
        content: "Keep pairs with more than one lease.",
      },
    ],
  },
  {
    code: "REALESTATE_072",
    hints: [
      {
        hint_order: 1,
        content: "Offers are tied to listings and seekers.",
      },
      {
        hint_order: 2,
        content: "Count offers per seeker_user_id.",
      },
      {
        hint_order: 3,
        content: "Use HAVING COUNT(*) > 2.",
      },
    ],
  },
  {
    code: "REALESTATE_073",
    hints: [
      {
        hint_order: 1,
        content: "Track status changes in listing_status_history.",
      },
      {
        hint_order: 2,
        content: "Group by listing_id.",
      },
      {
        hint_order: 3,
        content: "Count history rows and sort descending.",
      },
    ],
  },
  {
    code: "REALESTATE_074",
    hints: [
      {
        hint_order: 1,
        content: "Join referrals with users if needed.",
      },
      {
        hint_order: 2,
        content: "Sum rewards by referrer.",
      },
      {
        hint_order: 3,
        content: "GROUP BY referrer_user_id and SUM reward_amount.",
      },
    ],
  },
  {
    code: "REALESTATE_075",
    hints: [
      {
        hint_order: 1,
        content: "Join leases with rent payments.",
      },
      {
        hint_order: 2,
        content: "Compare due and paid amounts.",
      },
      {
        hint_order: 3,
        content: "SUM(amount_due - amount_paid) by lease_id.",
      },
    ],
  },
  {
    code: "REALESTATE_076",
    hints: [
      {
        hint_order: 1,
        content: "Amenities are many-to-many.",
      },
      {
        hint_order: 2,
        content: "Join property_amenities with amenities.",
      },
      {
        hint_order: 3,
        content: "Group by amenity_name and count properties.",
      },
    ],
  },
  {
    code: "REALESTATE_077",
    hints: [
      {
        hint_order: 1,
        content: "Use inquiries only.",
      },
      {
        hint_order: 2,
        content: "Group by seeker_user_id.",
      },
      {
        hint_order: 3,
        content: "Keep users with inquiries on more than 5 listings.",
      },
    ],
  },
  {
    code: "REALESTATE_078",
    hints: [
      {
        hint_order: 1,
        content: "Properties belong to cities through locations.",
      },
      {
        hint_order: 2,
        content: "Join properties to locations.",
      },
      {
        hint_order: 3,
        content: "Count properties per city and sort descending.",
      },
    ],
  },
  {
    code: "REALESTATE_079",
    hints: [
      {
        hint_order: 1,
        content: "Use owner_profiles and listings together.",
      },
      {
        hint_order: 2,
        content: "Find verified owners with live listings.",
      },
      {
        hint_order: 3,
        content: "Join and group by owner id.",
      },
    ],
  },
  {
    code: "REALESTATE_080",
    hints: [
      {
        hint_order: 1,
        content: "Applications belong to seekers.",
      },
      {
        hint_order: 2,
        content: "Count pending applications per seeker.",
      },
      {
        hint_order: 3,
        content: "Filter pending status then group.",
      },
    ],
  },
  {
    code: "REALESTATE_081",
    hints: [
      {
        hint_order: 1,
        content: "Maintenance cost needs city info.",
      },
      {
        hint_order: 2,
        content: "Join tickets -> properties -> locations.",
      },
      {
        hint_order: 3,
        content: "Group by city and SUM resolution_cost.",
      },
    ],
  },
  {
    code: "REALESTATE_082",
    hints: [
      {
        hint_order: 1,
        content: "Check listing mix per owner.",
      },
      {
        hint_order: 2,
        content: "Count rent and sale separately.",
      },
      {
        hint_order: 3,
        content: "Use FILTER or CASE in HAVING.",
      },
    ],
  },
  {
    code: "REALESTATE_083",
    hints: [
      {
        hint_order: 1,
        content: "Count completed visits per listing.",
      },
      {
        hint_order: 2,
        content: "Exclude listings that already have offers.",
      },
      {
        hint_order: 3,
        content: "Use LEFT JOIN offers and HAVING COUNT(offer_id)=0.",
      },
    ],
  },
  {
    code: "REALESTATE_084",
    hints: [
      {
        hint_order: 1,
        content: "Late fee means a positive value.",
      },
      {
        hint_order: 2,
        content: "Group by tenant_user_id.",
      },
      {
        hint_order: 3,
        content: "Keep tenants with count greater than 1.",
      },
    ],
  },
  {
    code: "REALESTATE_085",
    hints: [
      {
        hint_order: 1,
        content: "Rent per sqft needs area and rent.",
      },
      {
        hint_order: 2,
        content: "Join listings with properties and locations.",
      },
      {
        hint_order: 3,
        content: "AVG(rent_amount / built_up_area_sqft) by locality.",
      },
    ],
  },
  {
    code: "REALESTATE_086",
    hints: [
      {
        hint_order: 1,
        content: "Use listing_price_history.",
      },
      {
        hint_order: 2,
        content: "A drop means new rent is lower.",
      },
      {
        hint_order: 3,
        content: "Join listings and count drops per owner.",
      },
    ],
  },
  {
    code: "REALESTATE_087",
    hints: [
      {
        hint_order: 1,
        content: "Applications without offers have NULL offer_id.",
      },
      {
        hint_order: 2,
        content: "Return id, listing_id, seeker_user_id.",
      },
      {
        hint_order: 3,
        content: "Use WHERE offer_id IS NULL.",
      },
    ],
  },
  {
    code: "REALESTATE_088",
    hints: [
      {
        hint_order: 1,
        content: "Amenities are counted per property.",
      },
      {
        hint_order: 2,
        content: "Then return distinct owners.",
      },
      {
        hint_order: 3,
        content: "Group by property and HAVING COUNT(*) > 5.",
      },
    ],
  },
  {
    code: "REALESTATE_089",
    hints: [
      {
        hint_order: 1,
        content: "Compare locality average with city average.",
      },
      {
        hint_order: 2,
        content: "Use two aggregation levels.",
      },
      {
        hint_order: 3,
        content: "CTE or subquery join works best.",
      },
    ],
  },
  {
    code: "REALESTATE_090",
    hints: [
      {
        hint_order: 1,
        content: "This is a funnel: inquiry → visit → offer → lease.",
      },
      {
        hint_order: 2,
        content: "Join all stages on listing and seeker.",
      },
      {
        hint_order: 3,
        content: "Return DISTINCT seeker_user_id.",
      },
    ],
  },
  {
    code: "REALESTATE_091",
    hints: [
      {
        hint_order: 1,
        content: "Maintenance cost grouped by city.",
      },
      {
        hint_order: 2,
        content: "Join tickets to locations through properties.",
      },
      {
        hint_order: 3,
        content: "SUM resolution_cost per city.",
      },
    ],
  },
  {
    code: "REALESTATE_092",
    hints: [
      {
        hint_order: 1,
        content: "Owner should have rent listings only.",
      },
      {
        hint_order: 2,
        content: "Count rent and sale separately.",
      },
      {
        hint_order: 3,
        content: "HAVING rent_count > 0 AND sale_count = 0.",
      },
    ],
  },
  {
    code: "REALESTATE_093",
    hints: [
      {
        hint_order: 1,
        content: "Find repeated tenant-property pairs.",
      },
      {
        hint_order: 2,
        content: "Group by property_id and tenant_user_id.",
      },
      {
        hint_order: 3,
        content: "HAVING COUNT(*) > 1.",
      },
    ],
  },
  {
    code: "REALESTATE_094",
    hints: [
      {
        hint_order: 1,
        content: "Compare completed visits vs inquiries.",
      },
      {
        hint_order: 2,
        content: "Use DISTINCT counts after joins.",
      },
      {
        hint_order: 3,
        content: "HAVING completed_visit_count > inquiry_count.",
      },
    ],
  },
  {
    code: "REALESTATE_095",
    hints: [
      {
        hint_order: 1,
        content: "Under review applications older than 7 days.",
      },
      {
        hint_order: 2,
        content: "Use created_at with interval comparison.",
      },
      {
        hint_order: 3,
        content: "created_at < NOW() - INTERVAL '7 days'.",
      },
    ],
  },
  {
    code: "REALESTATE_096",
    hints: [
      {
        hint_order: 1,
        content: "Converted listing means inquiry plus active lease.",
      },
      {
        hint_order: 2,
        content: "Count distinct listings per owner.",
      },
      {
        hint_order: 3,
        content: "HAVING converted count > 1.",
      },
    ],
  },
  {
    code: "REALESTATE_097",
    hints: [
      {
        hint_order: 1,
        content: "Rewards are in referrals.",
      },
      {
        hint_order: 2,
        content: "Group by referrer_user_id.",
      },
      {
        hint_order: 3,
        content: "SUM reward_amount.",
      },
    ],
  },
  {
    code: "REALESTATE_098",
    hints: [
      {
        hint_order: 1,
        content: "Overdue amount = amount_due - amount_paid.",
      },
      {
        hint_order: 2,
        content: "Bring city through leases and properties.",
      },
      {
        hint_order: 3,
        content: "Group by city for overdue payments.",
      },
    ],
  },
  {
    code: "REALESTATE_099",
    hints: [
      {
        hint_order: 1,
        content: "Start with live listings only.",
      },
      {
        hint_order: 2,
        content: "Join listing_status_history.",
      },
      {
        hint_order: 3,
        content: "Count history rows per owner.",
      },
    ],
  },
  {
    code: "REALESTATE_100",
    hints: [
      {
        hint_order: 1,
        content: "Use paid and partial rent payments.",
      },
      {
        hint_order: 2,
        content: "Join payments with leases.",
      },
      {
        hint_order: 3,
        content: "SUM amount_paid per property.",
      },
    ],
  },
];

export const conceptFilters = [
  {
    code: "REALESTATE_001",
    concepts: ["aggregation", "count"],
  },
  {
    code: "REALESTATE_002",
    concepts: ["filtering", "aggregation", "count", "comparison"],
  },
  {
    code: "REALESTATE_003",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_004",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_005",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_006",
    concepts: ["filtering", "null_handling", "sorting", "limit", "comparison"],
  },
  {
    code: "REALESTATE_007",
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
    code: "REALESTATE_008",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "REALESTATE_009",
    concepts: ["joins", "aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "REALESTATE_010",
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
    code: "REALESTATE_011",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_012",
    concepts: [
      "filtering",
      "null_handling",
      "date_functions",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "REALESTATE_013",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_014",
    concepts: ["joins", "aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "REALESTATE_015",
    concepts: ["left_join", "joins", "null_handling", "sorting"],
  },
  {
    code: "REALESTATE_016",
    concepts: ["aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "REALESTATE_017",
    concepts: ["filtering", "aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "REALESTATE_018",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "REALESTATE_019",
    concepts: ["left_join", "joins", "null_handling", "sorting"],
  },
  {
    code: "REALESTATE_020",
    concepts: ["joins", "aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "REALESTATE_021",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_022",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_023",
    concepts: ["filtering", "date_functions", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_024",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_025",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_026",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "REALESTATE_027",
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
    code: "REALESTATE_028",
    concepts: ["joins", "aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "REALESTATE_029",
    concepts: [
      "joins",
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
    code: "REALESTATE_030",
    concepts: ["aggregation", "count", "group_by", "sorting", "limit"],
  },
  {
    code: "REALESTATE_031",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_032",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_033",
    concepts: ["filtering", "aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "REALESTATE_034",
    concepts: ["filtering", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_035",
    concepts: ["filtering", "null_handling", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_036",
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
    code: "REALESTATE_037",
    concepts: [
      "aggregation",
      "sum",
      "null_handling",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "REALESTATE_038",
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
    code: "REALESTATE_039",
    concepts: [
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "REALESTATE_040",
    concepts: [
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
      "limit",
    ],
  },
  {
    code: "REALESTATE_041",
    concepts: [
      "joins",
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
    code: "REALESTATE_042",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "REALESTATE_043",
    concepts: [
      "left_join",
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
    code: "REALESTATE_044",
    concepts: [
      "filtering",
      "null_handling",
      "aggregation",
      "sum",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "REALESTATE_045",
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
    code: "REALESTATE_046",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "REALESTATE_047",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "sorting",
      "arithmetic",
      "calculation",
    ],
  },
  {
    code: "REALESTATE_048",
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
    code: "REALESTATE_049",
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
    code: "REALESTATE_050",
    concepts: ["left_join", "joins", "filtering", "null_handling", "sorting"],
  },
  {
    code: "REALESTATE_051",
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
    code: "REALESTATE_052",
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
    code: "REALESTATE_053",
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
    code: "REALESTATE_054",
    concepts: [
      "aggregation",
      "sum",
      "null_handling",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "REALESTATE_055",
    concepts: [
      "filtering",
      "null_handling",
      "date_functions",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "REALESTATE_056",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "REALESTATE_057",
    concepts: ["joins", "aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "REALESTATE_058",
    concepts: [
      "left_join",
      "joins",
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
    code: "REALESTATE_059",
    concepts: [
      "joins",
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
    code: "REALESTATE_060",
    concepts: ["left_join", "joins", "filtering", "null_handling", "sorting"],
  },
  {
    code: "REALESTATE_061",
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
    code: "REALESTATE_062",
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
    code: "REALESTATE_063",
    concepts: ["filtering", "aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "REALESTATE_064",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "REALESTATE_065",
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
    code: "REALESTATE_066",
    concepts: [
      "left_join",
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
    code: "REALESTATE_067",
    concepts: [
      "left_join",
      "joins",
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
    code: "REALESTATE_068",
    concepts: [
      "joins",
      "filtering",
      "conditional_aggregation",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "REALESTATE_069",
    concepts: [
      "joins",
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
    code: "REALESTATE_070",
    concepts: [
      "left_join",
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
    code: "REALESTATE_071",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "count_distinct",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "REALESTATE_072",
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
    code: "REALESTATE_073",
    concepts: ["exists", "subquery", "filtering", "sorting"],
  },
  {
    code: "REALESTATE_074",
    concepts: [
      "subquery",
      "filtering",
      "aggregation",
      "average",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "REALESTATE_075",
    concepts: ["joins", "aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "REALESTATE_076",
    concepts: [
      "conditional_aggregation",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "REALESTATE_077",
    concepts: ["filtering", "date_functions", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_078",
    concepts: ["joins", "filtering", "distinct", "date_functions", "sorting"],
  },
  {
    code: "REALESTATE_079",
    concepts: [
      "subquery",
      "joins",
      "filtering",
      "aggregation",
      "average",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "REALESTATE_080",
    concepts: ["aggregation", "count", "group_by", "sorting"],
  },
  {
    code: "REALESTATE_081",
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
    code: "REALESTATE_082",
    concepts: [
      "conditional_aggregation",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "REALESTATE_083",
    concepts: [
      "left_join",
      "joins",
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
    code: "REALESTATE_084",
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
    code: "REALESTATE_085",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "arithmetic",
      "calculation",
    ],
  },
  {
    code: "REALESTATE_086",
    concepts: [
      "joins",
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
    code: "REALESTATE_087",
    concepts: ["filtering", "null_handling", "sorting"],
  },
  {
    code: "REALESTATE_088",
    concepts: [
      "joins",
      "aggregation",
      "count",
      "group_by",
      "having",
      "distinct",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "REALESTATE_089",
    concepts: [
      "subquery",
      "joins",
      "filtering",
      "aggregation",
      "average",
      "group_by",
      "sorting",
      "comparison",
      "calculation",
    ],
  },
  {
    code: "REALESTATE_090",
    concepts: ["joins", "filtering", "distinct", "sorting"],
  },
  {
    code: "REALESTATE_091",
    concepts: [
      "joins",
      "aggregation",
      "sum",
      "null_handling",
      "group_by",
      "sorting",
      "calculation",
    ],
  },
  {
    code: "REALESTATE_092",
    concepts: [
      "conditional_aggregation",
      "group_by",
      "having",
      "sorting",
      "comparison",
    ],
  },
  {
    code: "REALESTATE_093",
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
    code: "REALESTATE_094",
    concepts: [
      "left_join",
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
    code: "REALESTATE_095",
    concepts: ["filtering", "date_functions", "sorting", "comparison"],
  },
  {
    code: "REALESTATE_096",
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
    code: "REALESTATE_097",
    concepts: ["aggregation", "sum", "group_by", "sorting", "calculation"],
  },
  {
    code: "REALESTATE_098",
    concepts: [
      "joins",
      "filtering",
      "aggregation",
      "sum",
      "group_by",
      "sorting",
      "arithmetic",
      "calculation",
    ],
  },
  {
    code: "REALESTATE_099",
    concepts: [
      "left_join",
      "joins",
      "filtering",
      "aggregation",
      "count",
      "group_by",
      "sorting",
    ],
  },
  {
    code: "REALESTATE_100",
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
];

export const solutions = [
  {
    code: "REALESTATE_001",
    approaches: [
      {
        approach_title: "COUNT users",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query: "SELECT COUNT(*) AS total_users FROM users;",
        explanation:
          "## 🧠 Approach\n\nCount all users on the platform.\n\n## 🔍 Explanation\n\n- Each row in `users` represents one platform user.\n- `COUNT(*)` counts all rows, including rows with nullable fields.\n- No filter is needed because the question asks for total users.",
      },
    ],
  },
  {
    code: "REALESTATE_002",
    approaches: [
      {
        approach_title: "Verified owners",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT COUNT(*) AS verified_owners FROM owner_profiles WHERE verification_status = 'verified';",
        explanation:
          "## 🧠 Approach\n\nFilter owner profiles to verified status and count them.\n\n## 🔍 Explanation\n\n- `owner_profiles` stores owner-specific profile and verification data.\n- `verification_status = 'verified'` keeps only fully verified owners.\n- `COUNT(*)` returns the total verified owner profile count.",
      },
    ],
  },
  {
    code: "REALESTATE_003",
    approaches: [
      {
        approach_title: "Live listings",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, property_id, listed_for FROM listings WHERE listing_status = 'live';",
        explanation:
          "## 🧠 Approach\n\nFilter listings that are currently live.\n\n## 🔍 Explanation\n\n- `listing_status = 'live'` identifies listings visible/active on the platform.\n- The selected columns match the required output exactly.\n- No joins are needed because all requested fields are in `listings`.",
      },
    ],
  },
  {
    code: "REALESTATE_004",
    approaches: [
      {
        approach_title: "Gated properties",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, property_title, property_type FROM properties WHERE is_gated_community = true;",
        explanation:
          "## 🧠 Approach\n\nFilter properties that are marked as gated communities.\n\n## 🔍 Explanation\n\n- `properties` stores the `is_gated_community` boolean flag.\n- `is_gated_community = true` keeps only gated community properties.\n- The query returns property identity, title, and type.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, property_title, property_type FROM properties WHERE is_gated_community;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand for the gated-community filter.\n\n## 🔍 Explanation\n\n- `WHERE is_gated_community` is equivalent to `WHERE is_gated_community = true`.\n- It returns the same rows.\n- The explicit comparison is usually clearer for beginner-facing exercises.",
      },
    ],
  },
  {
    code: "REALESTATE_005",
    approaches: [
      {
        approach_title: "Pet allowed live",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, rent_amount, preferred_tenant_type FROM listings WHERE listing_status = 'live' AND pet_allowed = true;",
        explanation:
          "## 🧠 Approach\n\nFilter live listings where pets are allowed.\n\n## 🔍 Explanation\n\n- `listing_status = 'live'` keeps only active listings.\n- `pet_allowed = true` keeps listings that allow pets.\n- The selected columns match the expected output.",
      },
    ],
  },
  {
    code: "REALESTATE_006",
    approaches: [
      {
        approach_title: "Top rent listings",
        approach_type: "sorting",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, property_id, rent_amount FROM listings WHERE listing_status = 'live' AND listed_for = 'rent' AND rent_amount IS NOT NULL ORDER BY rent_amount DESC, id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nFilter live rental listings, sort by rent amount, and return the top five.\n\n## 🔍 Explanation\n\n- `listing_status = 'live'` keeps active listings.\n- `listed_for = 'rent'` keeps rental listings only.\n- `rent_amount IS NOT NULL` removes listings without rent data.\n- `ORDER BY rent_amount DESC, id ASC` matches the comparator order exactly.\n- `LIMIT 5` returns the five most expensive rental listings.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, property_id, rent_amount FROM (SELECT id, property_id, rent_amount, ROW_NUMBER() OVER (ORDER BY rent_amount DESC, id ASC) AS rn FROM listings WHERE listing_status = 'live' AND listed_for = 'rent' AND rent_amount IS NOT NULL) ranked WHERE rn <= 5 ORDER BY rent_amount DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank live rental listings by rent amount and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query filters valid live rental listings.\n- `ROW_NUMBER()` ranks listings by rent descending and id ascending.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the configured comparator order.",
      },
    ],
  },
  {
    code: "REALESTATE_007",
    approaches: [
      {
        approach_title: "GROUP signup source",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT signup_source, COUNT(*) AS user_count FROM users WHERE signup_source IS NOT NULL GROUP BY signup_source;",
        explanation:
          "## 🧠 Approach\n\nGroup users by signup source and count users in each source.\n\n## 🔍 Explanation\n\n- `signup_source IS NOT NULL` removes users where source was not captured.\n- `GROUP BY signup_source` creates one row per source.\n- `COUNT(*)` counts users for each signup source.",
      },
    ],
  },
  {
    code: "REALESTATE_008",
    approaches: [
      {
        approach_title: "GROUP property type",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT property_type, COUNT(*) AS property_count FROM properties GROUP BY property_type;",
        explanation:
          "## 🧠 Approach\n\nGroup properties by type and count how many properties exist in each type.\n\n## 🔍 Explanation\n\n- `property_type` stores values like apartment, villa, studio, office, and similar types.\n- `GROUP BY property_type` creates one row per property type.\n- `COUNT(*)` returns the number of properties in each group.",
      },
    ],
  },
  {
    code: "REALESTATE_009",
    approaches: [
      {
        approach_title: "JOIN city listings",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.city, COUNT(*) AS listing_count FROM listings l JOIN properties p ON p.id = l.property_id JOIN locations loc ON loc.id = p.location_id GROUP BY loc.city;",
        explanation:
          "## 🧠 Approach\n\nJoin listings to properties and locations, then count listings per city.\n\n## 🔍 Explanation\n\n- `listings.property_id` links each listing to a property.\n- `properties.location_id` links the property to its location.\n- `locations.city` provides the city.\n- `GROUP BY loc.city` creates one row per city.\n- `COUNT(*)` counts listings associated with properties in that city.",
      },
    ],
  },
  {
    code: "REALESTATE_010",
    approaches: [
      {
        approach_title: "GROUP owner properties",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT op.id, op.user_id, COUNT(p.id) AS property_count FROM owner_profiles op JOIN properties p ON p.owner_profile_id = op.id GROUP BY op.id, op.user_id HAVING COUNT(p.id) > 3;",
        explanation:
          "## 🧠 Approach\n\nJoin owners to properties, count properties per owner, and keep owners with more than three properties.\n\n## 🔍 Explanation\n\n- `owner_profiles` stores platform owner records.\n- `properties.owner_profile_id` links properties to owners.\n- `GROUP BY op.id, op.user_id` creates one row per owner profile.\n- `COUNT(p.id)` counts registered properties for each owner.\n- `HAVING COUNT(p.id) > 3` filters after aggregation.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, user_id, property_count FROM (SELECT op.id, op.user_id, COUNT(p.id) AS property_count FROM owner_profiles op JOIN properties p ON p.owner_profile_id = op.id GROUP BY op.id, op.user_id) owner_property_counts WHERE property_count > 3;",
        explanation:
          "## 🧠 Approach\n\nCalculate each owner's property count first, then filter the result.\n\n## 🔍 Explanation\n\n- The inner query joins owners to properties and counts properties per owner.\n- The outer query keeps only owners where `property_count > 3`.\n- This is equivalent to the `HAVING` approach while allowing reuse of the aggregate alias.",
      },
    ],
  },
  {
    code: "REALESTATE_011",
    approaches: [
      {
        approach_title: "Pending requests",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, owner_profile_id, assigned_executive_user_id FROM owner_verification_requests WHERE request_status = 'pending';",
        explanation:
          "## 🧠 Approach\n\nFilter owner verification requests that are still pending.\n\n## 🔍 Explanation\n\n- `owner_verification_requests` stores onboarding/verification checks for owners.\n- `request_status = 'pending'` keeps requests that have not yet moved into review or final decision.\n- The selected columns match the required output exactly.",
      },
    ],
  },
  {
    code: "REALESTATE_012",
    approaches: [
      {
        approach_title: "Expired docs",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, user_id, document_type, expires_at FROM user_documents WHERE expires_at IS NOT NULL AND expires_at < NOW();",
        explanation:
          "## 🧠 Approach\n\nFind documents with an expiry timestamp earlier than now.\n\n## 🔍 Explanation\n\n- `expires_at IS NOT NULL` keeps only documents that have an expiry date.\n- `expires_at < NOW()` identifies documents already expired.\n- The selected columns show which user and document type are affected.",
      },
    ],
  },
  {
    code: "REALESTATE_013",
    approaches: [
      {
        approach_title: "Available live listings",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, property_id, listed_for FROM listings WHERE listing_status = 'live' AND availability_status = 'available';",
        explanation:
          "## 🧠 Approach\n\nFilter listings that are both live and currently available.\n\n## 🔍 Explanation\n\n- `listing_status = 'live'` keeps listings visible on the platform.\n- `availability_status = 'available'` keeps listings that are not blocked, occupied, or under negotiation.\n- Both conditions are required for a vacant listing.",
      },
    ],
  },
  {
    code: "REALESTATE_014",
    approaches: [
      {
        approach_title: "JOIN city properties",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT l.city, COUNT(*) AS property_count FROM properties p JOIN locations l ON p.location_id = l.id GROUP BY l.city;",
        explanation:
          "## 🧠 Approach\n\nJoin properties to locations and count properties per city.\n\n## 🔍 Explanation\n\n- `properties.location_id` links each property to a location row.\n- `locations.city` gives the city for that property.\n- `GROUP BY l.city` creates one row per city.\n- `COUNT(*)` returns the total number of properties located in each city.",
      },
    ],
  },
  {
    code: "REALESTATE_015",
    approaches: [
      {
        approach_title: "LEFT JOIN no media",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT l.id FROM listings l LEFT JOIN listing_media lm ON l.id = lm.listing_id WHERE lm.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a left anti-join to find listings without media records.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every listing and attempts to match media rows.\n- Listings without media have NULL values from `listing_media`.\n- `WHERE lm.id IS NULL` keeps only listings with no attached media.",
      },
      {
        approach_title: "NOT EXISTS media",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT l.id FROM listings l WHERE NOT EXISTS (SELECT 1 FROM listing_media lm WHERE lm.listing_id = l.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to return listings that have no related media rows.\n\n## 🔍 Explanation\n\n- The subquery checks whether any media exists for the current listing.\n- `NOT EXISTS` keeps only listings where no media row is found.\n- This is a clean null-safe anti-join alternative.",
      },
    ],
  },
  {
    code: "REALESTATE_016",
    approaches: [
      {
        approach_title: "Top viewed",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT listing_id, COUNT(*) AS view_count FROM property_views GROUP BY listing_id ORDER BY view_count DESC, listing_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount property views per listing and return the five most viewed listings.\n\n## 🔍 Explanation\n\n- `GROUP BY listing_id` creates one row per viewed listing.\n- `COUNT(*)` counts total view events for each listing.\n- `ORDER BY view_count DESC, listing_id ASC` matches the comparator order exactly.\n- `LIMIT 5` returns the top five listings.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT listing_id, view_count FROM (SELECT listing_id, view_count, ROW_NUMBER() OVER (ORDER BY view_count DESC, listing_id ASC) AS rn FROM (SELECT listing_id, COUNT(*) AS view_count FROM property_views GROUP BY listing_id) listing_views) ranked WHERE rn <= 5 ORDER BY view_count DESC, listing_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank listings by view count and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates total views per listing.\n- `ROW_NUMBER()` ranks listings using the configured order.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "REALESTATE_017",
    approaches: [
      {
        approach_title: "GROUP live owners",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT owner_profile_id, COUNT(*) AS live_listing_count FROM listings WHERE listing_status = 'live' GROUP BY owner_profile_id;",
        explanation:
          "## 🧠 Approach\n\nFilter live listings and count them per owner profile.\n\n## 🔍 Explanation\n\n- `listing_status = 'live'` keeps only currently live listings.\n- `GROUP BY owner_profile_id` creates one row per owner with live listings.\n- `COUNT(*)` returns the number of live listings each owner has.",
      },
    ],
  },
  {
    code: "REALESTATE_018",
    approaches: [
      {
        approach_title: "GROUP visits",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT listing_id, COUNT(*) AS visit_count FROM property_visits GROUP BY listing_id;",
        explanation:
          "## 🧠 Approach\n\nGroup scheduled property visits by listing and count visits per listing.\n\n## 🔍 Explanation\n\n- `property_visits` stores scheduled and completed visit records.\n- `GROUP BY listing_id` creates one row per listing with visit records.\n- `COUNT(*)` counts all visits for each listing.",
      },
    ],
  },
  {
    code: "REALESTATE_019",
    approaches: [
      {
        approach_title: "LEFT JOIN no properties",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT op.id, op.user_id FROM owner_profiles op LEFT JOIN properties p ON op.id = p.owner_profile_id WHERE p.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a left anti-join to find owners without registered properties.\n\n## 🔍 Explanation\n\n- `LEFT JOIN` keeps every owner profile and attempts to match properties.\n- Owners without properties have NULL values for joined property columns.\n- `WHERE p.id IS NULL` keeps only owners with no matching property rows.",
      },
      {
        approach_title: "NOT EXISTS properties",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT op.id, op.user_id FROM owner_profiles op WHERE NOT EXISTS (SELECT 1 FROM properties p WHERE p.owner_profile_id = op.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to return owner profiles with no properties.\n\n## 🔍 Explanation\n\n- The subquery checks whether any property exists for the current owner profile.\n- `NOT EXISTS` keeps owners where no property row is found.\n- This avoids duplicate concerns and is a clean anti-join pattern.",
      },
    ],
  },
  {
    code: "REALESTATE_020",
    approaches: [
      {
        approach_title: "Top amenities",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.id, a.amenity_name, COUNT(pa.property_id) AS property_count FROM amenities a JOIN property_amenities pa ON a.id = pa.amenity_id GROUP BY a.id, a.amenity_name ORDER BY property_count DESC, a.id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin amenities to property-amenity mappings, count linked properties per amenity, and return the top five.\n\n## 🔍 Explanation\n\n- `property_amenities` maps properties to amenities.\n- `amenities` provides amenity identity and name.\n- `COUNT(pa.property_id)` counts how many properties have each amenity.\n- `ORDER BY property_count DESC, a.id ASC` matches the comparator order exactly.\n- `LIMIT 5` returns the five most common amenities.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT id, amenity_name, property_count FROM (SELECT id, amenity_name, property_count, ROW_NUMBER() OVER (ORDER BY property_count DESC, id ASC) AS rn FROM (SELECT a.id, a.amenity_name, COUNT(pa.property_id) AS property_count FROM amenities a JOIN property_amenities pa ON a.id = pa.amenity_id GROUP BY a.id, a.amenity_name) amenity_counts) ranked WHERE rn <= 5 ORDER BY property_count DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank amenities by linked property count and keep the top five.\n\n## 🔍 Explanation\n\n- The innermost query calculates property count per amenity.\n- `ROW_NUMBER()` ranks amenities by property count descending and id ascending.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the configured comparator order.",
      },
    ],
  },
  {
    code: "REALESTATE_021",
    approaches: [
      {
        approach_title: "Under review",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, listing_id, seeker_user_id FROM rental_applications WHERE application_status = 'under_review';",
        explanation:
          "## 🧠 Approach\n\nFilter rental applications that are currently under review.\n\n## 🔍 Explanation\n\n- `rental_applications` stores submitted applications for listings.\n- `application_status = 'under_review'` keeps applications currently being reviewed.\n- The selected columns match the required output exactly.",
      },
    ],
  },
  {
    code: "REALESTATE_022",
    approaches: [
      {
        approach_title: "Active leases",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, property_id, tenant_user_id, monthly_rent FROM leases WHERE lease_status = 'active';",
        explanation:
          "## 🧠 Approach\n\nFilter leases that are currently active.\n\n## 🔍 Explanation\n\n- `lease_status = 'active'` keeps only active lease records.\n- The query returns lease id, property id, tenant user id, and monthly rent.\n- No joins are needed because all required fields exist in `leases`.",
      },
    ],
  },
  {
    code: "REALESTATE_023",
    approaches: [
      {
        approach_title: "Overdue unpaid",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, lease_id, tenant_user_id, due_date, payment_status FROM rent_payments WHERE due_date < CURRENT_DATE AND payment_status IN ('pending', 'overdue');",
        explanation:
          "## 🧠 Approach\n\nFind rent payments whose due date has passed and are still unpaid/pending.\n\n## 🔍 Explanation\n\n- `due_date < CURRENT_DATE` identifies payments past their due date.\n- `payment_status IN ('pending', 'overdue')` keeps payments that are not settled.\n- The selected columns identify the payment, lease, tenant, due date, and status.",
      },
    ],
  },
  {
    code: "REALESTATE_024",
    approaches: [
      {
        approach_title: "Open tickets",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, property_id, issue_type, ticket_status FROM maintenance_tickets WHERE ticket_status IN ('open', 'assigned', 'in_progress');",
        explanation:
          "## 🧠 Approach\n\nFilter maintenance tickets that are not yet resolved or closed.\n\n## 🔍 Explanation\n\n- `ticket_status IN ('open', 'assigned', 'in_progress')` captures active/open work states.\n- Resolved, closed, and cancelled tickets are excluded.\n- The selected columns match the expected output.",
      },
    ],
  },
  {
    code: "REALESTATE_025",
    approaches: [
      {
        approach_title: "High rent listings",
        approach_type: "filtering_sorting",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, property_id, rent_amount FROM listings WHERE listing_status = 'live' AND listed_for = 'rent' AND rent_amount > 50000 ORDER BY rent_amount DESC, id ASC;",
        explanation:
          "## 🧠 Approach\n\nFilter live rental listings above 50000 rent and order them by rent amount.\n\n## 🔍 Explanation\n\n- `listing_status = 'live'` keeps active listings.\n- `listed_for = 'rent'` keeps rental listings only.\n- `rent_amount > 50000` applies the high-value threshold.\n- `ORDER BY rent_amount DESC, id ASC` matches the configured comparator order exactly.",
      },
    ],
  },
  {
    code: "REALESTATE_026",
    approaches: [
      {
        approach_title: "GROUP applications",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT listing_id, COUNT(*) AS application_count FROM rental_applications GROUP BY listing_id;",
        explanation:
          "## 🧠 Approach\n\nGroup rental applications by listing and count applications per listing.\n\n## 🔍 Explanation\n\n- `GROUP BY listing_id` creates one row per listing that received applications.\n- `COUNT(*)` counts all application records for each listing.\n- No status filter is applied because the question asks for total applications received.",
      },
    ],
  },
  {
    code: "REALESTATE_027",
    approaches: [
      {
        approach_title: "Active rent by owner",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT owner_profile_id, SUM(monthly_rent) AS total_monthly_rent FROM leases WHERE lease_status = 'active' GROUP BY owner_profile_id;",
        explanation:
          "## 🧠 Approach\n\nFilter active leases and sum monthly rent per owner.\n\n## 🔍 Explanation\n\n- `lease_status = 'active'` keeps only currently active leases.\n- `GROUP BY owner_profile_id` creates one row per owner.\n- `SUM(monthly_rent)` calculates total active monthly rental revenue for each owner.",
      },
    ],
  },
  {
    code: "REALESTATE_028",
    approaches: [
      {
        approach_title: "GROUP amenities",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT a.amenity_name, COUNT(pa.property_id) AS property_count FROM amenities a JOIN property_amenities pa ON a.id = pa.amenity_id GROUP BY a.amenity_name;",
        explanation:
          "## 🧠 Approach\n\nJoin amenities to property-amenity mappings and count properties per amenity.\n\n## 🔍 Explanation\n\n- `amenities` provides the readable amenity name.\n- `property_amenities` maps properties to amenities.\n- `COUNT(pa.property_id)` counts how many properties are linked to each amenity.\n- `GROUP BY a.amenity_name` returns one row per amenity name.",
      },
    ],
  },
  {
    code: "REALESTATE_029",
    approaches: [
      {
        approach_title: "AVG rent city",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.city, AVG(l.rent_amount) AS avg_rent FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.listing_status = 'live' AND l.listed_for = 'rent' AND l.rent_amount IS NOT NULL GROUP BY loc.city;",
        explanation:
          "## 🧠 Approach\n\nJoin live rental listings to property locations and calculate average rent per city.\n\n## 🔍 Explanation\n\n- `listings` stores rent and listing status.\n- `properties` links listings to locations.\n- `locations` provides the city.\n- Filters keep only live rent listings with a known rent amount.\n- `AVG(l.rent_amount)` calculates average live rent for each city.",
      },
    ],
  },
  {
    code: "REALESTATE_030",
    approaches: [
      {
        approach_title: "Top inquiry listings",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT listing_id, COUNT(*) AS inquiry_count FROM inquiries GROUP BY listing_id ORDER BY inquiry_count DESC, listing_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount inquiries per listing and return the top five listings.\n\n## 🔍 Explanation\n\n- `GROUP BY listing_id` creates one row per listing with inquiries.\n- `COUNT(*)` counts inquiry records for each listing.\n- `ORDER BY inquiry_count DESC, listing_id ASC` matches the configured comparator order.\n- `LIMIT 5` returns exactly five rows.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT listing_id, inquiry_count FROM (SELECT listing_id, inquiry_count, ROW_NUMBER() OVER (ORDER BY inquiry_count DESC, listing_id ASC) AS rn FROM (SELECT listing_id, COUNT(*) AS inquiry_count FROM inquiries GROUP BY listing_id) inquiry_counts) ranked WHERE rn <= 5 ORDER BY inquiry_count DESC, listing_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank listings by inquiry count and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates inquiry count per listing.\n- `ROW_NUMBER()` ranks listings using the configured order.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the comparator configuration.",
      },
    ],
  },
  {
    code: "REALESTATE_031",
    approaches: [
      {
        approach_title: "Late fee filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, lease_id, tenant_user_id, late_fee FROM rent_payments WHERE late_fee > 0;",
        explanation:
          "## 🧠 Approach\n\nFilter rent payments where a late fee was charged.\n\n## 🔍 Explanation\n\n- `rent_payments` stores rent payment details.\n- `late_fee > 0` keeps only payments with an actual late fee.\n- The selected columns identify the payment, lease, tenant, and late fee amount.",
      },
    ],
  },
  {
    code: "REALESTATE_032",
    approaches: [
      {
        approach_title: "Long lease filter",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, property_id, lease_duration_months FROM listings WHERE lease_duration_months > 12;",
        explanation:
          "## 🧠 Approach\n\nFilter listings whose lease duration is greater than 12 months.\n\n## 🔍 Explanation\n\n- `lease_duration_months > 12` keeps long-duration lease listings.\n- NULL lease durations are automatically excluded by the comparison.\n- The selected columns match the expected output.",
      },
    ],
  },
  {
    code: "REALESTATE_033",
    approaches: [
      {
        approach_title: "GROUP active team",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT team_name, COUNT(*) AS executive_count FROM executive_profiles WHERE is_active = true GROUP BY team_name;",
        explanation:
          "## 🧠 Approach\n\nFilter active executives and count them per team.\n\n## 🔍 Explanation\n\n- `is_active = true` keeps only active executive profiles.\n- `GROUP BY team_name` creates one row per team.\n- `COUNT(*)` returns active executive count for each team.",
      },
      {
        approach_title: "Boolean shorthand",
        approach_type: "filtering_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT team_name, COUNT(*) AS executive_count FROM executive_profiles WHERE is_active GROUP BY team_name;",
        explanation:
          "## 🧠 Approach\n\nUse PostgreSQL boolean shorthand to filter active executives.\n\n## 🔍 Explanation\n\n- `WHERE is_active` is equivalent to `WHERE is_active = true`.\n- It returns the same active executive counts.\n- The explicit comparison is usually clearer for learners.",
      },
    ],
  },
  {
    code: "REALESTATE_034",
    approaches: [
      {
        approach_title: "Rejected requests",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, owner_profile_id, rejection_reason FROM owner_verification_requests WHERE request_status = 'rejected';",
        explanation:
          "## 🧠 Approach\n\nFilter owner verification requests that were rejected.\n\n## 🔍 Explanation\n\n- `request_status = 'rejected'` keeps only rejected owner verification requests.\n- The selected columns show request id, owner profile, and rejection reason.",
      },
    ],
  },
  {
    code: "REALESTATE_035",
    approaches: [
      {
        approach_title: "Rent price drop",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, listing_id, old_rent_amount, new_rent_amount FROM listing_price_history WHERE old_rent_amount IS NOT NULL AND new_rent_amount IS NOT NULL AND new_rent_amount < old_rent_amount;",
        explanation:
          "## 🧠 Approach\n\nFind rent price history rows where the new rent amount is lower than the old rent amount.\n\n## 🔍 Explanation\n\n- `old_rent_amount IS NOT NULL` ensures there was a previous rent value.\n- `new_rent_amount IS NOT NULL` ensures the new rent value exists.\n- `new_rent_amount < old_rent_amount` identifies actual rent reductions.",
      },
    ],
  },
  {
    code: "REALESTATE_036",
    approaches: [
      {
        approach_title: "GROUP lease renewals",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT property_id, COUNT(*) AS lease_count FROM leases GROUP BY property_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nGroup leases by property and keep properties that have more than one lease record.\n\n## 🔍 Explanation\n\n- `GROUP BY property_id` creates one row per property with leases.\n- `COUNT(*)` counts lease records for each property.\n- `HAVING COUNT(*) > 1` filters after aggregation to find properties with repeated leases or renewals.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT property_id, lease_count FROM (SELECT property_id, COUNT(*) AS lease_count FROM leases GROUP BY property_id) lease_counts WHERE lease_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate lease counts first, then filter properties with more than one lease.\n\n## 🔍 Explanation\n\n- The inner query computes `lease_count` per property.\n- The outer query keeps rows where `lease_count > 1`.\n- This is equivalent to the `HAVING` approach while allowing reuse of the aggregate alias.",
      },
    ],
  },
  {
    code: "REALESTATE_037",
    approaches: [
      {
        approach_title: "SUM maintenance",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT property_id, SUM(COALESCE(resolution_cost, 0)) AS total_maintenance_cost FROM maintenance_tickets GROUP BY property_id;",
        explanation:
          "## 🧠 Approach\n\nGroup maintenance tickets by property and sum resolution costs.\n\n## 🔍 Explanation\n\n- `GROUP BY property_id` creates one row per property with maintenance tickets.\n- `COALESCE(resolution_cost, 0)` treats unresolved or missing costs as zero.\n- `SUM(...)` calculates total maintenance resolution cost per property.",
      },
    ],
  },
  {
    code: "REALESTATE_038",
    approaches: [
      {
        approach_title: "AVG resolution time",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, AVG(resolution_time_mins) AS avg_resolution_time FROM support_tickets WHERE resolution_time_mins IS NOT NULL GROUP BY user_id;",
        explanation:
          "## 🧠 Approach\n\nFilter support tickets with recorded resolution time and average them per user.\n\n## 🔍 Explanation\n\n- `resolution_time_mins IS NOT NULL` keeps only tickets with measured resolution time.\n- `GROUP BY user_id` creates one row per user.\n- `AVG(resolution_time_mins)` calculates the average resolution time for tickets associated with that user.",
      },
    ],
  },
  {
    code: "REALESTATE_039",
    approaches: [
      {
        approach_title: "Top referrers",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT referrer_user_id, COUNT(*) AS converted_count FROM referrals WHERE referral_status = 'converted' GROUP BY referrer_user_id ORDER BY converted_count DESC, referrer_user_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nFilter converted referrals, count conversions per referrer, and return the top five referrers.\n\n## 🔍 Explanation\n\n- `referral_status = 'converted'` keeps only successful referrals.\n- `GROUP BY referrer_user_id` counts converted referrals per referrer.\n- `ORDER BY converted_count DESC, referrer_user_id ASC` matches the comparator config.\n- `LIMIT 5` returns the top five referrers.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT referrer_user_id, converted_count FROM (SELECT referrer_user_id, converted_count, ROW_NUMBER() OVER (ORDER BY converted_count DESC, referrer_user_id ASC) AS rn FROM (SELECT referrer_user_id, COUNT(*) AS converted_count FROM referrals WHERE referral_status = 'converted' GROUP BY referrer_user_id) referrer_counts) ranked WHERE rn <= 5 ORDER BY converted_count DESC, referrer_user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank converted referral counts and keep the top five referrers.\n\n## 🔍 Explanation\n\n- The inner query counts converted referrals per referrer.\n- `ROW_NUMBER()` ranks referrers by conversion count descending and user id ascending.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the configured comparator order.",
      },
    ],
  },
  {
    code: "REALESTATE_040",
    approaches: [
      {
        approach_title: "Top event cities",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT ae.city, COUNT(*) AS event_count FROM app_events ae WHERE ae.event_name = 'property_view' GROUP BY ae.city ORDER BY event_count DESC, ae.city ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nFilter property view events, count them per city, and return the top five cities.\n\n## 🔍 Explanation\n\n- `event_name = 'property_view'` keeps only property-view analytics events.\n- `GROUP BY ae.city` counts view events per city.\n- `ORDER BY event_count DESC, ae.city ASC` matches the comparator config.\n- `LIMIT 5` returns the five most active cities by property-view events.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT city, event_count FROM (SELECT city, event_count, ROW_NUMBER() OVER (ORDER BY event_count DESC, city ASC) AS rn FROM (SELECT ae.city, COUNT(*) AS event_count FROM app_events ae WHERE ae.event_name = 'property_view' GROUP BY ae.city) city_events) ranked WHERE rn <= 5 ORDER BY event_count DESC, city ASC;",
        explanation:
          "## 🧠 Approach\n\nRank cities by property-view event count and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query counts property-view events per city.\n- `ROW_NUMBER()` ranks cities using the required ordering.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the configured comparator order.",
      },
    ],
  },
  {
    code: "REALESTATE_041",
    approaches: [
      {
        approach_title: "Top rent cities",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.city, AVG(l.rent_amount) AS avg_rent FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.listing_status = 'live' AND l.listed_for = 'rent' AND l.rent_amount IS NOT NULL GROUP BY loc.city ORDER BY avg_rent DESC, loc.city ASC;",
        explanation:
          "## 🧠 Approach\n\nJoin live rental listings to locations, calculate average rent per city, and order cities by rent.\n\n## 🔍 Explanation\n\n- `listings` stores rent amount and listing status.\n- `properties` links listings to locations.\n- `locations` provides the city.\n- Filters keep only live rental listings with non-null rent.\n- `AVG(l.rent_amount)` calculates average rent per city.\n- Final ordering matches the comparator config exactly.",
      },
    ],
  },
  {
    code: "REALESTATE_042",
    approaches: [
      {
        approach_title: "Top viewed listings",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT listing_id, COUNT(*) AS total_views FROM property_views GROUP BY listing_id ORDER BY total_views DESC, listing_id ASC LIMIT 10;",
        explanation:
          "## 🧠 Approach\n\nCount property views per listing and return the top 10 most viewed listings.\n\n## 🔍 Explanation\n\n- `property_views` stores one row per listing view.\n- `COUNT(*)` calculates the total number of views for each listing.\n- `GROUP BY listing_id` creates one aggregated row per listing.\n- `ORDER BY total_views DESC, listing_id ASC` ranks listings by popularity and resolves ties consistently.\n- `LIMIT 10` keeps only the top 10 listings.",
      },
      {
        approach_title: "ROW_NUMBER ranking",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT listing_id, total_views FROM (SELECT listing_id, total_views, ROW_NUMBER() OVER (ORDER BY total_views DESC, listing_id ASC) AS rn FROM (SELECT listing_id, COUNT(*) AS total_views FROM property_views GROUP BY listing_id) view_counts) ranked WHERE rn <= 10 ORDER BY total_views DESC, listing_id ASC;",
        explanation:
          "## 🧠 Approach\n\nAggregate view counts first, then rank listings using `ROW_NUMBER()`.\n\n## 🔍 Explanation\n\n- The inner query calculates total views for each listing.\n- `ROW_NUMBER()` assigns rankings using the required ordering rule.\n- `rn <= 10` keeps the top 10 ranked listings.\n- Final ordering matches the configured comparator exactly.",
      },
    ],
  },
  {
    code: "REALESTATE_043",
    approaches: [
      {
        approach_title: "Demand comparison",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT l.id, COUNT(DISTINCT i.id) AS inquiry_count, COUNT(DISTINCT pv.id) AS visit_count FROM listings l LEFT JOIN inquiries i ON l.id = i.listing_id LEFT JOIN property_visits pv ON l.id = pv.listing_id GROUP BY l.id HAVING COUNT(DISTINCT i.id) > COUNT(DISTINCT pv.id);",
        explanation:
          "## 🧠 Approach\n\nCompare inquiry count and visit count per listing, then keep listings where inquiries are higher.\n\n## 🔍 Explanation\n\n- `LEFT JOIN inquiries` keeps listings even if they have zero inquiries.\n- `LEFT JOIN property_visits` keeps listings even if they have zero visits.\n- `COUNT(DISTINCT ...)` avoids inflated counts caused by joining two one-to-many tables together.\n- `HAVING inquiry count > visit count` identifies high-demand listings.",
      },
    ],
  },
  {
    code: "REALESTATE_044",
    approaches: [
      {
        approach_title: "Portfolio value",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT owner_profile_id, SUM(sale_price) AS total_portfolio_value FROM listings WHERE listing_status = 'live' AND listed_for = 'sale' AND sale_price IS NOT NULL GROUP BY owner_profile_id ORDER BY total_portfolio_value DESC, owner_profile_id ASC;",
        explanation:
          "## 🧠 Approach\n\nFilter live sale listings, sum sale prices per owner, and order owners by portfolio value.\n\n## 🔍 Explanation\n\n- `listing_status = 'live'` keeps active listings.\n- `listed_for = 'sale'` keeps sale listings only.\n- `sale_price IS NOT NULL` keeps listings with a known sale price.\n- `GROUP BY owner_profile_id` calculates total listed sale value per owner.\n- Final ordering matches the comparator config exactly.",
      },
    ],
  },
  {
    code: "REALESTATE_045",
    approaches: [
      {
        approach_title: "Frequent applicants",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT seeker_user_id, COUNT(*) AS application_count FROM rental_applications GROUP BY seeker_user_id HAVING COUNT(*) > 2;",
        explanation:
          "## 🧠 Approach\n\nGroup rental applications by seeker and keep users with more than two applications.\n\n## 🔍 Explanation\n\n- `GROUP BY seeker_user_id` creates one row per applicant.\n- `COUNT(*)` counts applications submitted by each seeker.\n- `HAVING COUNT(*) > 2` filters after aggregation to keep frequent applicants.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT seeker_user_id, application_count FROM (SELECT seeker_user_id, COUNT(*) AS application_count FROM rental_applications GROUP BY seeker_user_id) applicant_counts WHERE application_count > 2;",
        explanation:
          "## 🧠 Approach\n\nCalculate application count per seeker first, then filter frequent applicants.\n\n## 🔍 Explanation\n\n- The inner query computes `application_count` per seeker.\n- The outer query keeps rows where `application_count > 2`.\n- This is equivalent to the `HAVING` approach.",
      },
    ],
  },
  {
    code: "REALESTATE_046",
    approaches: [
      {
        approach_title: "Most leased properties",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT property_id, COUNT(*) AS lease_count FROM leases GROUP BY property_id ORDER BY lease_count DESC, property_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCount leases per property and order properties by lease count.\n\n## 🔍 Explanation\n\n- `GROUP BY property_id` creates one row per leased property.\n- `COUNT(*)` counts lease records for each property.\n- `ORDER BY lease_count DESC, property_id ASC` matches the comparator config exactly.",
      },
    ],
  },
  {
    code: "REALESTATE_047",
    approaches: [
      {
        approach_title: "Unpaid active leases",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT rp.lease_id, SUM(rp.amount_due - rp.amount_paid) AS unpaid_amount FROM rent_payments rp JOIN leases l ON rp.lease_id = l.id WHERE l.lease_status = 'active' AND rp.amount_paid < rp.amount_due GROUP BY rp.lease_id;",
        explanation:
          "## 🧠 Approach\n\nJoin rent payments to active leases and sum unpaid balance per lease.\n\n## 🔍 Explanation\n\n- `leases` is used to keep only active leases.\n- `rp.amount_paid < rp.amount_due` keeps payments that still have an unpaid balance.\n- `amount_due - amount_paid` calculates unpaid amount for each payment row.\n- `SUM(...)` gives total unpaid rent amount per lease.",
      },
    ],
  },
  {
    code: "REALESTATE_048",
    approaches: [
      {
        approach_title: "Busy executives",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT assigned_executive_user_id, COUNT(*) AS ticket_count FROM maintenance_tickets WHERE ticket_status IN ('open', 'assigned', 'in_progress') AND assigned_executive_user_id IS NOT NULL GROUP BY assigned_executive_user_id ORDER BY ticket_count DESC, assigned_executive_user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCount open maintenance workload per assigned executive and order by ticket count.\n\n## 🔍 Explanation\n\n- `ticket_status IN ('open', 'assigned', 'in_progress')` keeps unresolved active tickets.\n- `assigned_executive_user_id IS NOT NULL` keeps tickets assigned to an executive.\n- `GROUP BY assigned_executive_user_id` counts tickets per executive.\n- Final ordering matches the comparator config exactly.",
      },
    ],
  },
  {
    code: "REALESTATE_049",
    approaches: [
      {
        approach_title: "Amenities count",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT property_id, COUNT(*) AS amenity_count FROM property_amenities GROUP BY property_id HAVING COUNT(*) > 3;",
        explanation:
          "## 🧠 Approach\n\nGroup property amenities by property and keep properties with more than three amenities.\n\n## 🔍 Explanation\n\n- `property_amenities` stores property-to-amenity mappings.\n- `GROUP BY property_id` creates one row per property.\n- `COUNT(*)` counts amenities assigned to each property.\n- `HAVING COUNT(*) > 3` filters after aggregation.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT property_id, amenity_count FROM (SELECT property_id, COUNT(*) AS amenity_count FROM property_amenities GROUP BY property_id) property_amenities_count WHERE amenity_count > 3;",
        explanation:
          "## 🧠 Approach\n\nCalculate amenity count per property first, then filter properties with more than three amenities.\n\n## 🔍 Explanation\n\n- The inner query computes `amenity_count` per property.\n- The outer query filters rows where `amenity_count > 3`.\n- This is equivalent to the `HAVING` approach.",
      },
    ],
  },
  {
    code: "REALESTATE_050",
    approaches: [
      {
        approach_title: "No live listings",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT op.id, op.user_id FROM owner_profiles op LEFT JOIN listings l ON op.id = l.owner_profile_id AND l.listing_status = 'live' WHERE l.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a left anti-join to find owner profiles with no live listings.\n\n## 🔍 Explanation\n\n- The join only matches listings where `listing_status = 'live'`.\n- Owners with no live listing matches have NULL joined listing fields.\n- `WHERE l.id IS NULL` keeps only owners without any live listings.\n- Owners with draft, paused, archived, rented, or sold listings but no live listings still qualify.",
      },
      {
        approach_title: "NOT EXISTS live listing",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT op.id, op.user_id FROM owner_profiles op WHERE NOT EXISTS (SELECT 1 FROM listings l WHERE l.owner_profile_id = op.id AND l.listing_status = 'live');",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to return owner profiles without any live listing.\n\n## 🔍 Explanation\n\n- The subquery checks whether a live listing exists for the current owner profile.\n- `NOT EXISTS` keeps only owners where no such listing exists.\n- This is often clearer and avoids duplicate issues.",
      },
    ],
  },
  {
    code: "REALESTATE_051",
    approaches: [
      {
        approach_title: "GROUP repeated views",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT user_id, listing_id, COUNT(*) AS view_count FROM property_views WHERE user_id IS NOT NULL GROUP BY user_id, listing_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nGroup property views by user and listing, then keep pairs viewed more than once.\n\n## 🔍 Explanation\n\n- `user_id IS NOT NULL` excludes anonymous views.\n- `GROUP BY user_id, listing_id` creates one row per user-listing pair.\n- `COUNT(*)` counts how many times that user viewed that listing.\n- `HAVING COUNT(*) > 1` keeps repeated viewers.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT user_id, listing_id, view_count FROM (SELECT user_id, listing_id, COUNT(*) AS view_count FROM property_views WHERE user_id IS NOT NULL GROUP BY user_id, listing_id) repeated_views WHERE view_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate view count per user-listing pair first, then filter repeated views.\n\n## 🔍 Explanation\n\n- The inner query computes `view_count` for each user and listing.\n- The outer query keeps only rows where `view_count > 1`.\n- This is equivalent to the `HAVING` approach while allowing reuse of the aggregate alias.",
      },
    ],
  },
  {
    code: "REALESTATE_052",
    approaches: [
      {
        approach_title: "GROUP offers",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT listing_id, COUNT(*) AS offer_count FROM offers GROUP BY listing_id HAVING COUNT(*) > 2;",
        explanation:
          "## 🧠 Approach\n\nGroup offers by listing and keep listings that received more than two offers.\n\n## 🔍 Explanation\n\n- `GROUP BY listing_id` creates one row per listing with offers.\n- `COUNT(*)` counts offer records for each listing.\n- `HAVING COUNT(*) > 2` filters after aggregation.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT listing_id, offer_count FROM (SELECT listing_id, COUNT(*) AS offer_count FROM offers GROUP BY listing_id) offer_counts WHERE offer_count > 2;",
        explanation:
          "## 🧠 Approach\n\nCalculate offer count per listing first, then filter offer-heavy listings.\n\n## 🔍 Explanation\n\n- The inner query computes `offer_count` for each listing.\n- The outer query keeps listings where `offer_count > 2`.\n- This is equivalent to `GROUP BY + HAVING`.",
      },
    ],
  },
  {
    code: "REALESTATE_053",
    approaches: [
      {
        approach_title: "Rejected applications",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT seeker_user_id, COUNT(*) AS rejected_count FROM rental_applications WHERE application_status = 'rejected' GROUP BY seeker_user_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nFilter rejected applications, count them per seeker, and keep seekers rejected more than once.\n\n## 🔍 Explanation\n\n- `application_status = 'rejected'` keeps only rejected applications.\n- `GROUP BY seeker_user_id` creates one row per seeker.\n- `HAVING COUNT(*) > 1` keeps users with multiple rejected applications.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT seeker_user_id, rejected_count FROM (SELECT seeker_user_id, COUNT(*) AS rejected_count FROM rental_applications WHERE application_status = 'rejected' GROUP BY seeker_user_id) rejected_applicants WHERE rejected_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate rejected application count per seeker first, then filter repeated rejections.\n\n## 🔍 Explanation\n\n- The inner query counts rejected applications by seeker.\n- The outer query keeps rows where `rejected_count > 1`.\n- This produces the same result as the `HAVING` version.",
      },
    ],
  },
  {
    code: "REALESTATE_054",
    approaches: [
      {
        approach_title: "Cost by issue type",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT issue_type, SUM(COALESCE(resolution_cost, 0)) AS total_cost FROM maintenance_tickets GROUP BY issue_type;",
        explanation:
          "## 🧠 Approach\n\nGroup maintenance tickets by issue type and sum their resolution costs.\n\n## 🔍 Explanation\n\n- `GROUP BY issue_type` creates one row per maintenance issue type.\n- `COALESCE(resolution_cost, 0)` treats missing resolution costs as zero.\n- `SUM(...)` calculates total cost for each issue type.",
      },
    ],
  },
  {
    code: "REALESTATE_055",
    approaches: [
      {
        approach_title: "Expired pending offers",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, listing_id, seeker_user_id, expires_at FROM offers WHERE offer_status = 'pending' AND expires_at IS NOT NULL AND expires_at < NOW();",
        explanation:
          "## 🧠 Approach\n\nFind pending offers whose expiry time has already passed.\n\n## 🔍 Explanation\n\n- `offer_status = 'pending'` keeps offers without a final response.\n- `expires_at IS NOT NULL` keeps offers that have an expiry timestamp.\n- `expires_at < NOW()` identifies offers that are already expired.",
      },
    ],
  },
  {
    code: "REALESTATE_056",
    approaches: [
      {
        approach_title: "Active leases city",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.city, COUNT(*) AS lease_count FROM leases le JOIN properties p ON le.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE le.lease_status = 'active' GROUP BY loc.city;",
        explanation:
          "## 🧠 Approach\n\nJoin active leases to properties and locations, then count active leases per city.\n\n## 🔍 Explanation\n\n- `leases.property_id` links leases to properties.\n- `properties.location_id` links properties to locations.\n- `locations.city` provides the city.\n- `lease_status = 'active'` keeps only active leases.\n- `GROUP BY loc.city` creates one lease count per city.",
      },
    ],
  },
  {
    code: "REALESTATE_057",
    approaches: [
      {
        approach_title: "Owner inquiries",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT l.owner_profile_id, COUNT(i.id) AS inquiry_count FROM listings l JOIN inquiries i ON l.id = i.listing_id GROUP BY l.owner_profile_id;",
        explanation:
          "## 🧠 Approach\n\nJoin listings to inquiries and count inquiries received per owner.\n\n## 🔍 Explanation\n\n- `listings.owner_profile_id` identifies the owner of each listing.\n- `inquiries.listing_id` links inquiries to listings.\n- `GROUP BY l.owner_profile_id` aggregates total inquiries across each owner's listings.\n- `COUNT(i.id)` counts inquiry records.",
      },
    ],
  },
  {
    code: "REALESTATE_058",
    approaches: [
      {
        approach_title: "No views live",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT l.id, l.property_id FROM listings l LEFT JOIN property_views pv ON l.id = pv.listing_id WHERE l.listing_status = 'live' GROUP BY l.id, l.property_id HAVING COUNT(pv.id) = 0;",
        explanation:
          "## 🧠 Approach\n\nLeft join live listings to property views and keep listings with zero views.\n\n## 🔍 Explanation\n\n- `listing_status = 'live'` restricts the result to live listings.\n- `LEFT JOIN` keeps live listings even when no views exist.\n- `COUNT(pv.id) = 0` identifies live listings with no view rows.",
      },
      {
        approach_title: "NOT EXISTS views",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT l.id, l.property_id FROM listings l WHERE l.listing_status = 'live' AND NOT EXISTS (SELECT 1 FROM property_views pv WHERE pv.listing_id = l.id);",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to find live listings with no property views.\n\n## 🔍 Explanation\n\n- The outer query starts from live listings.\n- The subquery checks whether any view exists for the listing.\n- `NOT EXISTS` keeps only listings where no matching view is found.",
      },
    ],
  },
  {
    code: "REALESTATE_059",
    approaches: [
      {
        approach_title: "Luxury cities",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.city, COUNT(*) AS luxury_listing_count FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.listing_status = 'live' AND l.listed_for = 'rent' AND l.rent_amount > 100000 GROUP BY loc.city HAVING COUNT(*) >= 3;",
        explanation:
          "## 🧠 Approach\n\nFind cities with at least three live rental listings above 100000 rent.\n\n## 🔍 Explanation\n\n- The joins connect listings to property city.\n- Filters keep live rental listings with rent greater than 100000.\n- `GROUP BY loc.city` counts luxury rental listings per city.\n- `HAVING COUNT(*) >= 3` keeps cities with at least three such listings.",
      },
    ],
  },
  {
    code: "REALESTATE_060",
    approaches: [
      {
        approach_title: "Verified no live",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT op.id, op.user_id FROM owner_profiles op LEFT JOIN listings l ON op.id = l.owner_profile_id AND l.listing_status = 'live' WHERE op.verification_status = 'verified' AND l.id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nUse a left anti-join to find verified owners with no live listings.\n\n## 🔍 Explanation\n\n- `op.verification_status = 'verified'` keeps only verified owner profiles.\n- The join only matches live listings.\n- Verified owners without live listing matches have `l.id IS NULL`.\n- This returns verified owners who currently have no live listings.",
      },
      {
        approach_title: "NOT EXISTS live listing",
        approach_type: "anti_join",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT op.id, op.user_id FROM owner_profiles op WHERE op.verification_status = 'verified' AND NOT EXISTS (SELECT 1 FROM listings l WHERE l.owner_profile_id = op.id AND l.listing_status = 'live');",
        explanation:
          "## 🧠 Approach\n\nUse `NOT EXISTS` to find verified owners without any live listing.\n\n## 🔍 Explanation\n\n- The outer query filters verified owners.\n- The subquery checks for a live listing owned by the current owner profile.\n- `NOT EXISTS` keeps owners where no live listing exists.",
      },
    ],
  },
  {
    code: "REALESTATE_061",
    approaches: [
      {
        approach_title: "Top owner rent",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT owner_profile_id, SUM(monthly_rent) AS total_rent FROM leases WHERE lease_status = 'active' GROUP BY owner_profile_id ORDER BY total_rent DESC, owner_profile_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nFilter active leases, sum monthly rent per owner, and return the top five owners.\n\n## 🔍 Explanation\n\n- `lease_status = 'active'` keeps only currently active leases.\n- `GROUP BY owner_profile_id` creates one row per owner.\n- `SUM(monthly_rent)` calculates active monthly rent earned by each owner.\n- `ORDER BY total_rent DESC, owner_profile_id ASC` matches the configured comparator order.\n- `LIMIT 5` returns exactly five owners.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT owner_profile_id, total_rent FROM (SELECT owner_profile_id, total_rent, ROW_NUMBER() OVER (ORDER BY total_rent DESC, owner_profile_id ASC) AS rn FROM (SELECT owner_profile_id, SUM(monthly_rent) AS total_rent FROM leases WHERE lease_status = 'active' GROUP BY owner_profile_id) owner_rent) ranked WHERE rn <= 5 ORDER BY total_rent DESC, owner_profile_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate active rent per owner first, rank owners by total rent, and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query aggregates active monthly rent per owner.\n- `ROW_NUMBER()` ranks owners by total rent descending and owner id ascending.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the comparator configuration.",
      },
    ],
  },
  {
    code: "REALESTATE_062",
    approaches: [
      {
        approach_title: "GROUP inquiries",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT listing_id, COUNT(*) AS inquiry_count FROM inquiries GROUP BY listing_id HAVING COUNT(*) > 5;",
        explanation:
          "## 🧠 Approach\n\nGroup inquiries by listing and keep listings with more than five inquiries.\n\n## 🔍 Explanation\n\n- `GROUP BY listing_id` creates one row per listing with inquiries.\n- `COUNT(*)` counts inquiry records for each listing.\n- `HAVING COUNT(*) > 5` filters after aggregation.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT listing_id, inquiry_count FROM (SELECT listing_id, COUNT(*) AS inquiry_count FROM inquiries GROUP BY listing_id) inquiry_counts WHERE inquiry_count > 5;",
        explanation:
          "## 🧠 Approach\n\nCalculate inquiry count per listing first, then filter high-inquiry listings.\n\n## 🔍 Explanation\n\n- The inner query computes `inquiry_count` per listing.\n- The outer query keeps rows where `inquiry_count > 5`.\n- This is equivalent to `GROUP BY + HAVING`.",
      },
    ],
  },
  {
    code: "REALESTATE_063",
    approaches: [
      {
        approach_title: "GROUP property listings",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT property_id, COUNT(*) AS listing_count FROM listings GROUP BY property_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nGroup listings by property and keep properties with more than one listing record.\n\n## 🔍 Explanation\n\n- `GROUP BY property_id` creates one row per property.\n- `COUNT(*)` counts listing records for each property.\n- `HAVING COUNT(*) > 1` finds properties listed more than once.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT property_id, listing_count FROM (SELECT property_id, COUNT(*) AS listing_count FROM listings GROUP BY property_id) listing_counts WHERE listing_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate listing count per property first, then filter properties with multiple listings.\n\n## 🔍 Explanation\n\n- The inner query computes `listing_count` per property.\n- The outer query keeps rows where `listing_count > 1`.\n- This is equivalent to the `HAVING` version.",
      },
    ],
  },
  {
    code: "REALESTATE_064",
    approaches: [
      {
        approach_title: "Top rent cities",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.city, SUM(le.monthly_rent) AS total_rent FROM leases le JOIN properties p ON le.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE le.lease_status = 'active' GROUP BY loc.city ORDER BY total_rent DESC, loc.city ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin active leases to property locations, sum rent per city, and return the top five cities.\n\n## 🔍 Explanation\n\n- `leases` stores active monthly rent.\n- `properties` links leases to location ids.\n- `locations` provides the city.\n- `lease_status = 'active'` keeps only active leases.\n- `SUM(le.monthly_rent)` calculates active rent per city.\n- Final ordering matches the comparator config.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT city, total_rent FROM (SELECT city, total_rent, ROW_NUMBER() OVER (ORDER BY total_rent DESC, city ASC) AS rn FROM (SELECT loc.city, SUM(le.monthly_rent) AS total_rent FROM leases le JOIN properties p ON le.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE le.lease_status = 'active' GROUP BY loc.city) city_rent) ranked WHERE rn <= 5 ORDER BY total_rent DESC, city ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate active rent per city first, rank cities by total rent, and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query aggregates total active rent by city.\n- `ROW_NUMBER()` ranks cities by rent descending and city ascending.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the comparator configuration.",
      },
    ],
  },
  {
    code: "REALESTATE_065",
    approaches: [
      {
        approach_title: "Multiple price drops",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT listing_id, COUNT(*) AS drop_count FROM listing_price_history WHERE new_rent_amount < old_rent_amount GROUP BY listing_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nFilter price history rows where rent dropped, then keep listings with more than one drop.\n\n## 🔍 Explanation\n\n- `new_rent_amount < old_rent_amount` identifies rent price reductions.\n- `GROUP BY listing_id` creates one row per listing.\n- `COUNT(*)` counts price-drop records for each listing.\n- `HAVING COUNT(*) > 1` keeps listings with repeated drops.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT listing_id, drop_count FROM (SELECT listing_id, COUNT(*) AS drop_count FROM listing_price_history WHERE new_rent_amount < old_rent_amount GROUP BY listing_id) price_drops WHERE drop_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate price-drop count per listing first, then filter repeated price drops.\n\n## 🔍 Explanation\n\n- The inner query computes `drop_count` per listing.\n- The outer query keeps rows where `drop_count > 1`.\n- This is equivalent to the `HAVING` version.",
      },
    ],
  },
  {
    code: "REALESTATE_066",
    approaches: [
      {
        approach_title: "Owner and seeker",
        approach_type: "join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT u.id FROM users u JOIN owner_profiles op ON u.id = op.user_id JOIN seeker_profiles sp ON u.id = sp.user_id;",
        explanation:
          "## 🧠 Approach\n\nJoin users to both owner and seeker profiles to find users who exist in both role profile tables.\n\n## 🔍 Explanation\n\n- `owner_profiles.user_id` identifies users with owner profile records.\n- `seeker_profiles.user_id` identifies users with seeker profile records.\n- Joining both to `users` keeps only users who have both role profiles.\n- The output returns the user id only.",
      },
    ],
  },
  {
    code: "REALESTATE_067",
    approaches: [
      {
        approach_title: "Top visits",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT listing_id, COUNT(*) AS visit_count FROM property_visits GROUP BY listing_id ORDER BY visit_count DESC, listing_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount property visits per listing and return the top five listings.\n\n## 🔍 Explanation\n\n- `GROUP BY listing_id` creates one row per listing with visits.\n- `COUNT(*)` counts all visit records for each listing.\n- `ORDER BY visit_count DESC, listing_id ASC` matches the configured comparator order.\n- `LIMIT 5` returns the top five listings by visit count.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT listing_id, visit_count FROM (SELECT listing_id, visit_count, ROW_NUMBER() OVER (ORDER BY visit_count DESC, listing_id ASC) AS rn FROM (SELECT listing_id, COUNT(*) AS visit_count FROM property_visits GROUP BY listing_id) listing_visits) ranked WHERE rn <= 5 ORDER BY visit_count DESC, listing_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank listings by visit count and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates total visit count per listing.\n- `ROW_NUMBER()` ranks listings by visits descending and listing id ascending.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the configured comparator order.",
      },
    ],
  },
  {
    code: "REALESTATE_068",
    approaches: [
      {
        approach_title: "High maintenance cities",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.city, SUM(mt.resolution_cost) AS total_cost FROM maintenance_tickets mt JOIN properties p ON mt.property_id = p.id JOIN locations loc ON p.location_id = loc.id GROUP BY loc.city HAVING SUM(mt.resolution_cost) > 100000;",
        explanation:
          "## 🧠 Approach\n\nJoin maintenance tickets to property locations, sum resolution cost per city, and keep cities above 100000 total cost.\n\n## 🔍 Explanation\n\n- `maintenance_tickets.property_id` links tickets to properties.\n- `properties.location_id` links properties to locations.\n- `locations.city` provides the city.\n- `SUM(mt.resolution_cost)` calculates total maintenance cost per city.\n- `HAVING SUM(mt.resolution_cost) > 100000` filters cities after aggregation.",
      },
    ],
  },
  {
    code: "REALESTATE_069",
    approaches: [
      {
        approach_title: "Active seekers",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT seeker_user_id, COUNT(*) AS application_count FROM rental_applications GROUP BY seeker_user_id HAVING COUNT(*) > 3;",
        explanation:
          "## 🧠 Approach\n\nGroup rental applications by seeker and keep seekers with more than three applications.\n\n## 🔍 Explanation\n\n- `GROUP BY seeker_user_id` creates one row per seeker.\n- `COUNT(*)` counts applications submitted by each seeker.\n- `HAVING COUNT(*) > 3` filters after aggregation.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT seeker_user_id, application_count FROM (SELECT seeker_user_id, COUNT(*) AS application_count FROM rental_applications GROUP BY seeker_user_id) seeker_application_counts WHERE application_count > 3;",
        explanation:
          "## 🧠 Approach\n\nCalculate application count per seeker first, then filter active seekers.\n\n## 🔍 Explanation\n\n- The inner query computes `application_count` per seeker.\n- The outer query keeps rows where `application_count > 3`.\n- This is equivalent to the `HAVING` approach.",
      },
    ],
  },
  {
    code: "REALESTATE_070",
    approaches: [
      {
        approach_title: "Top offer listings",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT listing_id, COUNT(*) AS offer_count FROM offers GROUP BY listing_id ORDER BY offer_count DESC, listing_id ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nCount offers per listing and return the top five listings.\n\n## 🔍 Explanation\n\n- `GROUP BY listing_id` creates one row per listing with offers.\n- `COUNT(*)` counts all offers for each listing.\n- `ORDER BY offer_count DESC, listing_id ASC` matches the configured comparator order.\n- `LIMIT 5` returns the top five offer-heavy listings.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT listing_id, offer_count FROM (SELECT listing_id, offer_count, ROW_NUMBER() OVER (ORDER BY offer_count DESC, listing_id ASC) AS rn FROM (SELECT listing_id, COUNT(*) AS offer_count FROM offers GROUP BY listing_id) offer_counts) ranked WHERE rn <= 5 ORDER BY offer_count DESC, listing_id ASC;",
        explanation:
          "## 🧠 Approach\n\nRank listings by offer count and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates offer count per listing.\n- `ROW_NUMBER()` ranks listings by offers descending and listing id ascending.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the configured comparator order.",
      },
    ],
  },
  {
    code: "REALESTATE_071",
    approaches: [
      {
        approach_title: "RANK rent city",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.city, l.id AS listing_id, l.rent_amount, RANK() OVER (PARTITION BY loc.city ORDER BY l.rent_amount DESC, l.id ASC) AS rent_rank FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.listing_status = 'live';",
        explanation:
          "## 🧠 Approach\n\nRank live listings inside each city by rent amount.\n\n## 🔍 Explanation\n\n- `listings` provides listing id and rent amount.\n- `properties` links each listing to a location.\n- `locations.city` provides the city partition.\n- `RANK() OVER (PARTITION BY loc.city ORDER BY l.rent_amount DESC, l.id ASC)` ranks listings separately per city.\n- `RANK()` gives tied ordering positions according to the expected query semantics.",
      },
    ],
  },
  {
    code: "REALESTATE_072",
    approaches: [
      {
        approach_title: "Running rent",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT owner_profile_id, id AS lease_id, lease_start_date, monthly_rent, SUM(monthly_rent) OVER (PARTITION BY owner_profile_id ORDER BY lease_start_date, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_rent FROM leases;",
        explanation:
          "## 🧠 Approach\n\nCompute cumulative rent per owner over time.\n\n## 🔍 Explanation\n\n- `PARTITION BY owner_profile_id` isolates each owner's data.\n- `ORDER BY lease_start_date, id` ensures deterministic ordering.\n- Window frame accumulates rent from first lease to current lease.\n- This is a standard running total pattern.",
      },
    ],
  },
  {
    code: "REALESTATE_073",
    approaches: [
      {
        approach_title: "DENSE_RANK second",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT property_id, rent_amount FROM (SELECT property_id, rent_amount, DENSE_RANK() OVER (ORDER BY rent_amount DESC) AS rnk FROM listings WHERE rent_amount IS NOT NULL) x WHERE rnk = 2;",
        explanation:
          "## 🧠 Approach\n\nRank rent values and extract second-highest tier.\n\n## 🔍 Explanation\n\n- `DENSE_RANK()` avoids gaps between ranks.\n- `rnk = 2` returns second-highest rent.\n- Multiple rows possible if there are ties.",
      },
      {
        approach_title: "Subquery MAX",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT property_id, rent_amount FROM listings WHERE rent_amount = (SELECT MAX(rent_amount) FROM listings WHERE rent_amount < (SELECT MAX(rent_amount) FROM listings));",
        explanation:
          "## 🧠 Approach\n\nFind second highest rent using nested MAX queries.\n\n## 🔍 Explanation\n\n- Inner MAX gets highest rent.\n- Outer MAX gets highest below that value.\n- Outer query returns matching rows.\n- Less flexible than window functions.",
      },
    ],
  },
  {
    code: "REALESTATE_074",
    approaches: [
      {
        approach_title: "LAG gap",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT listing_id, MAX(gap_minutes) AS max_gap FROM (SELECT listing_id, EXTRACT(EPOCH FROM (view_time - LAG(view_time) OVER (PARTITION BY listing_id ORDER BY view_time))) / 60 AS gap_minutes FROM property_views) x GROUP BY listing_id;",
        explanation:
          "## 🧠 Approach\n\nCalculate time gaps between consecutive visits.\n\n## 🔍 Explanation\n\n- `LAG(view_time)` fetches previous visit.\n- Difference gives time gap.\n- Convert to minutes using `EXTRACT(EPOCH)`.\n- `MAX()` finds largest gap per listing.",
      },
    ],
  },
  {
    code: "REALESTATE_075",
    approaches: [
      {
        approach_title: "Daily rent rank",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT revenue_date, owner_profile_id, total_rent, RANK() OVER (PARTITION BY revenue_date ORDER BY total_rent DESC, owner_profile_id ASC) AS rank FROM (SELECT DATE(lease_start_date) AS revenue_date, owner_profile_id, SUM(monthly_rent) AS total_rent FROM leases GROUP BY DATE(lease_start_date), owner_profile_id) x;",
        explanation:
          "## 🧠 Approach\n\nAggregate rent per owner per day and rank within each day.\n\n## 🔍 Explanation\n\n- Inner query calculates daily rent.\n- `PARTITION BY revenue_date` isolates ranking per day.\n- `RANK()` handles ties with gaps.\n- Useful for daily leaderboard style analytics.",
      },
      {
        approach_title: "ROW_NUMBER rank",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT revenue_date, owner_profile_id, total_rent, ROW_NUMBER() OVER (PARTITION BY revenue_date ORDER BY total_rent DESC, owner_profile_id ASC) AS rank FROM (SELECT DATE(lease_start_date) AS revenue_date, owner_profile_id, SUM(monthly_rent) AS total_rent FROM leases GROUP BY DATE(lease_start_date), owner_profile_id) x;",
        explanation:
          "## 🧠 Approach\n\nUse strict ranking with `ROW_NUMBER()`.\n\n## 🔍 Explanation\n\n- Unlike `RANK()`, this gives unique positions.\n- No ties — every row gets a distinct rank.\n- Behavior differs when equal values exist.",
      },
    ],
  },
  {
    code: "REALESTATE_076",
    approaches: [
      {
        approach_title: "ROW_NUMBER top 3",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT city, listing_id, rent_amount FROM (SELECT loc.city, l.id AS listing_id, l.rent_amount, ROW_NUMBER() OVER (PARTITION BY loc.city ORDER BY l.rent_amount DESC, l.id ASC) AS rn FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.rent_amount IS NOT NULL) x WHERE rn <= 3;",
        explanation:
          "## 🧠 Approach\n\nRank listings by rent within each city and keep top 3.\n\n## 🔍 Explanation\n\n- `PARTITION BY loc.city` resets ranking per city.\n- `ORDER BY rent DESC` ensures highest rents first.\n- `ROW_NUMBER()` ensures exactly 3 rows per city.\n- Deterministic tie-breaking using `id`.",
      },
      {
        approach_title: "DENSE_RANK tiers",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT city, listing_id, rent_amount FROM (SELECT loc.city, l.id AS listing_id, l.rent_amount, DENSE_RANK() OVER (PARTITION BY loc.city ORDER BY l.rent_amount DESC) AS rnk FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.rent_amount IS NOT NULL) x WHERE rnk <= 3;",
        explanation:
          "## 🧠 Approach\n\nReturn top 3 rent tiers per city.\n\n## 🔍 Explanation\n\n- `DENSE_RANK()` groups equal rents.\n- May return more than 3 rows per city if ties exist.\n- Useful when ranking tiers instead of strict row count.",
      },
    ],
  },
  {
    code: "REALESTATE_077",
    approaches: [
      {
        approach_title: "Moving average rent",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.city, l.id, l.rent_amount, AVG(l.rent_amount) OVER (PARTITION BY loc.city ORDER BY l.created_at ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.rent_amount IS NOT NULL;",
        explanation:
          "## 🧠 Approach\n\nCalculate a three-listing moving average rent per city.\n\n## 🔍 Explanation\n\n- `PARTITION BY loc.city` keeps each city's listing sequence separate.\n- `ORDER BY l.created_at` defines listing order inside each city.\n- `ROWS BETWEEN 2 PRECEDING AND CURRENT ROW` averages the current listing and previous two listings.",
      },
    ],
  },
  {
    code: "REALESTATE_078",
    approaches: [
      {
        approach_title: "Live listing streak",
        approach_type: "window",
        is_optimal: true,
        display_order: 1,
        query:
          "WITH x AS (SELECT owner_profile_id, created_at, ROW_NUMBER() OVER (PARTITION BY owner_profile_id ORDER BY created_at) - ROW_NUMBER() OVER (PARTITION BY owner_profile_id, listing_status ORDER BY created_at) AS grp FROM listings WHERE listing_status = 'live') SELECT owner_profile_id, COUNT(*) AS streak FROM x GROUP BY owner_profile_id, grp;",
        explanation:
          "## 🧠 Approach\n\nUse row-number differences to group consecutive live-listing activity according to the expected query logic.\n\n## 🔍 Explanation\n\n- The first `ROW_NUMBER()` numbers live listings per owner by creation time.\n- The second `ROW_NUMBER()` numbers rows per owner/status by creation time.\n- Since the query filters only `listing_status = 'live'`, this follows the provided expected logic exactly.\n- The outer query counts rows in each generated streak group.",
      },
    ],
  },
  {
    code: "REALESTATE_079",
    approaches: [
      {
        approach_title: "P90 rent",
        approach_type: "ordered_set_aggregate",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.city, PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY l.rent_amount) AS p90_rent FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.rent_amount IS NOT NULL GROUP BY loc.city;",
        explanation:
          "## 🧠 Approach\n\nCalculate the 90th percentile rent for each city.\n\n## 🔍 Explanation\n\n- The joins connect listings to cities.\n- `rent_amount IS NOT NULL` keeps only listings with rent data.\n- `GROUP BY loc.city` creates one rent distribution per city.\n- `PERCENTILE_CONT(0.9)` calculates the continuous 90th percentile.",
      },
    ],
  },
  {
    code: "REALESTATE_080",
    approaches: [
      {
        approach_title: "Top revenue zones",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.zone_name, SUM(l.rent_amount) AS total_rent FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.rent_amount IS NOT NULL GROUP BY loc.zone_name ORDER BY total_rent DESC, loc.zone_name ASC LIMIT 5;",
        explanation:
          "## 🧠 Approach\n\nJoin listings to locations, sum rent by zone, and return the top five zones.\n\n## 🔍 Explanation\n\n- `properties.location_id` connects listings to locations.\n- `locations.zone_name` provides the zone.\n- `rent_amount IS NOT NULL` keeps listings with rent values.\n- `SUM(l.rent_amount)` calculates total listed rent per zone.\n- Final ordering matches the comparator config exactly.",
      },
      {
        approach_title: "ROW_NUMBER top",
        approach_type: "window",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT zone_name, total_rent FROM (SELECT zone_name, total_rent, ROW_NUMBER() OVER (ORDER BY total_rent DESC, zone_name ASC) AS rn FROM (SELECT loc.zone_name, SUM(l.rent_amount) AS total_rent FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.rent_amount IS NOT NULL GROUP BY loc.zone_name) zone_rent) ranked WHERE rn <= 5 ORDER BY total_rent DESC, zone_name ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate zone rent first, rank zones, and keep the top five.\n\n## 🔍 Explanation\n\n- The inner query calculates total rent per zone.\n- `ROW_NUMBER()` ranks zones by total rent descending and zone name ascending.\n- `rn <= 5` keeps exactly five rows.\n- Final ordering matches the configured comparator order.",
      },
    ],
  },
  {
    code: "REALESTATE_081",
    approaches: [
      {
        approach_title: "Lease revenue cities",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.city, SUM(le.monthly_rent) AS total_monthly_rent FROM leases le JOIN properties p ON le.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE le.lease_status = 'active' GROUP BY loc.city ORDER BY total_monthly_rent DESC, loc.city ASC;",
        explanation:
          "## 🧠 Approach\n\nJoin active leases to property locations and calculate total monthly rent per city.\n\n## 🔍 Explanation\n\n- `leases` stores monthly rent and lease status.\n- `properties` connects each lease to a location.\n- `locations` provides the city.\n- `lease_status = 'active'` keeps only active leases.\n- `SUM(le.monthly_rent)` calculates total active monthly rent per city.\n- Final ordering matches the comparator config exactly.",
      },
    ],
  },
  {
    code: "REALESTATE_082",
    approaches: [
      {
        approach_title: "Mixed inventory owners",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT owner_profile_id FROM listings WHERE listing_status = 'live' GROUP BY owner_profile_id HAVING COUNT(*) FILTER (WHERE listed_for = 'rent') > 0 AND COUNT(*) FILTER (WHERE listed_for = 'sale') > 0;",
        explanation:
          "## 🧠 Approach\n\nGroup live listings by owner and check whether each owner has both rental and sale inventory.\n\n## 🔍 Explanation\n\n- `listing_status = 'live'` keeps only active listings.\n- `COUNT(*) FILTER (WHERE listed_for = 'rent') > 0` ensures at least one live rental listing.\n- `COUNT(*) FILTER (WHERE listed_for = 'sale') > 0` ensures at least one live sale listing.\n- Owners satisfying both conditions have mixed inventory.",
      },
      {
        approach_title: "CASE counts",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT owner_profile_id FROM listings WHERE listing_status = 'live' GROUP BY owner_profile_id HAVING SUM(CASE WHEN listed_for = 'rent' THEN 1 ELSE 0 END) > 0 AND SUM(CASE WHEN listed_for = 'sale' THEN 1 ELSE 0 END) > 0;",
        explanation:
          "## 🧠 Approach\n\nUse `CASE` expressions to count live rent and sale listings per owner.\n\n## 🔍 Explanation\n\n- Each `CASE` returns 1 for a matching listing type and 0 otherwise.\n- `SUM(...) > 0` confirms the owner has at least one listing of that type.\n- This is equivalent to the PostgreSQL `FILTER` approach.",
      },
    ],
  },
  {
    code: "REALESTATE_083",
    approaches: [
      {
        approach_title: "Visits no offers",
        approach_type: "anti_join",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT pv.listing_id, COUNT(*) AS completed_visit_count FROM property_visits pv LEFT JOIN offers o ON pv.listing_id = o.listing_id WHERE pv.visit_status = 'completed' GROUP BY pv.listing_id HAVING COUNT(o.id) = 0;",
        explanation:
          "## 🧠 Approach\n\nCount completed visits per listing and keep listings that have no offers.\n\n## 🔍 Explanation\n\n- `pv.visit_status = 'completed'` keeps only completed visits.\n- `LEFT JOIN offers` keeps visited listings even when no offer exists.\n- `HAVING COUNT(o.id) = 0` filters to listings with zero offer rows.\n- `COUNT(*)` returns completed visit count for those listings.",
      },
    ],
  },
  {
    code: "REALESTATE_084",
    approaches: [
      {
        approach_title: "Late fee tenants",
        approach_type: "filtering_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT tenant_user_id, COUNT(*) AS late_fee_payment_count FROM rent_payments WHERE late_fee > 0 GROUP BY tenant_user_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nFilter rent payments with late fees, count them per tenant, and keep tenants with more than one late-fee payment.\n\n## 🔍 Explanation\n\n- `late_fee > 0` keeps payments where a late fee was charged.\n- `GROUP BY tenant_user_id` creates one row per tenant.\n- `HAVING COUNT(*) > 1` keeps tenants with repeated late-fee payments.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT tenant_user_id, late_fee_payment_count FROM (SELECT tenant_user_id, COUNT(*) AS late_fee_payment_count FROM rent_payments WHERE late_fee > 0 GROUP BY tenant_user_id) tenant_late_fees WHERE late_fee_payment_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate late-fee payment count per tenant first, then filter repeated cases.\n\n## 🔍 Explanation\n\n- The inner query counts late-fee payments per tenant.\n- The outer query keeps rows where the count is greater than one.\n- This is equivalent to the `HAVING` approach.",
      },
    ],
  },
  {
    code: "REALESTATE_085",
    approaches: [
      {
        approach_title: "Rent per sqft",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.locality, AVG(l.rent_amount / NULLIF(p.built_up_area_sqft, 0)) AS avg_rent_per_sqft FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.listing_status = 'live' AND l.listed_for = 'rent' AND l.rent_amount IS NOT NULL AND p.built_up_area_sqft IS NOT NULL AND p.built_up_area_sqft > 0 GROUP BY loc.locality ORDER BY avg_rent_per_sqft DESC, loc.locality ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate average rent per square foot for live rental listings in each locality.\n\n## 🔍 Explanation\n\n- The joins connect listings to property location data.\n- Filters keep only live rental listings with valid rent and built-up area.\n- `rent_amount / NULLIF(built_up_area_sqft, 0)` calculates rent per sqft safely.\n- `AVG(...)` calculates locality-level average rent per sqft.\n- Final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "REALESTATE_086",
    approaches: [
      {
        approach_title: "Owner price drops",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT l.owner_profile_id, COUNT(*) AS price_drop_count FROM listing_price_history lph JOIN listings l ON lph.listing_id = l.id WHERE lph.old_rent_amount IS NOT NULL AND lph.new_rent_amount IS NOT NULL AND lph.new_rent_amount < lph.old_rent_amount GROUP BY l.owner_profile_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nJoin listing price history to listings, count rent price drops per owner, and keep owners with repeated drops.\n\n## 🔍 Explanation\n\n- `listing_price_history` stores old and new rent values.\n- `listings` maps each price change to an owner.\n- `new_rent_amount < old_rent_amount` identifies price drops.\n- `GROUP BY l.owner_profile_id` aggregates price drops per owner.\n- `HAVING COUNT(*) > 1` keeps owners with more than one price-drop record.",
      },
    ],
  },
  {
    code: "REALESTATE_087",
    approaches: [
      {
        approach_title: "No linked offer",
        approach_type: "filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, listing_id, seeker_user_id FROM rental_applications WHERE offer_id IS NULL;",
        explanation:
          "## 🧠 Approach\n\nFilter rental applications that do not reference an offer.\n\n## 🔍 Explanation\n\n- `rental_applications.offer_id` links an application to an offer when one exists.\n- `offer_id IS NULL` finds applications submitted without any linked offer.\n- No join is needed because all required columns are in `rental_applications`.",
      },
    ],
  },
  {
    code: "REALESTATE_088",
    approaches: [
      {
        approach_title: "Multi amenity owners",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT p.owner_profile_id FROM properties p JOIN property_amenities pa ON p.id = pa.property_id GROUP BY p.id, p.owner_profile_id HAVING COUNT(pa.id) > 5;",
        explanation:
          "## 🧠 Approach\n\nGroup amenities per property and return owners who have at least one property with more than five amenities.\n\n## 🔍 Explanation\n\n- `properties` provides the owner for each property.\n- `property_amenities` stores amenity links for each property.\n- `GROUP BY p.id, p.owner_profile_id` counts amenities per individual property.\n- `HAVING COUNT(pa.id) > 5` keeps only properties with more than five amenities.\n- `DISTINCT` returns each qualifying owner once.",
      },
    ],
  },
  {
    code: "REALESTATE_089",
    approaches: [
      {
        approach_title: "Above city average",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT x.city, x.locality, x.avg_locality_rent FROM (SELECT loc.city, loc.locality, AVG(l.rent_amount) AS avg_locality_rent FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.listing_status = 'live' AND l.listed_for = 'rent' AND l.rent_amount IS NOT NULL GROUP BY loc.city, loc.locality) x JOIN (SELECT loc.city, AVG(l.rent_amount) AS avg_city_rent FROM listings l JOIN properties p ON l.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE l.listing_status = 'live' AND l.listed_for = 'rent' AND l.rent_amount IS NOT NULL GROUP BY loc.city) y ON x.city = y.city WHERE x.avg_locality_rent > y.avg_city_rent;",
        explanation:
          "## 🧠 Approach\n\nCompare each locality's average live rent with its city-level average live rent.\n\n## 🔍 Explanation\n\n- The `x` subquery calculates average rent per city-locality pair.\n- The `y` subquery calculates average rent per city.\n- Joining on city allows each locality to be compared with its city baseline.\n- The final filter keeps localities where locality average rent is higher than city average rent.",
      },
    ],
  },
  {
    code: "REALESTATE_090",
    approaches: [
      {
        approach_title: "Full funnel seekers",
        approach_type: "join_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT DISTINCT i.seeker_user_id FROM inquiries i JOIN property_visits pv ON i.listing_id = pv.listing_id AND i.seeker_user_id = pv.seeker_user_id JOIN offers o ON i.listing_id = o.listing_id AND i.seeker_user_id = o.seeker_user_id JOIN leases le ON i.listing_id = le.listing_id AND le.tenant_user_id = i.seeker_user_id WHERE pv.visit_status = 'completed' AND o.offer_status = 'accepted' AND le.lease_status = 'active';",
        explanation:
          "## 🧠 Approach\n\nJoin inquiry, visit, offer, and lease records to find seekers who completed the full rental funnel.\n\n## 🔍 Explanation\n\n- `inquiries` identifies interested seekers.\n- `property_visits` confirms the seeker completed a visit for the same listing.\n- `offers` confirms the seeker had an accepted offer for that listing.\n- `leases` confirms the seeker became an active tenant for that listing.\n- `DISTINCT` returns each qualifying seeker once.",
      },
    ],
  },
  {
    code: "REALESTATE_091",
    approaches: [
      {
        approach_title: "Maintenance spend cities",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.city, SUM(COALESCE(mt.resolution_cost, 0)) AS total_maintenance_cost FROM maintenance_tickets mt JOIN properties p ON mt.property_id = p.id JOIN locations loc ON p.location_id = loc.id GROUP BY loc.city ORDER BY total_maintenance_cost DESC, loc.city ASC;",
        explanation:
          "## 🧠 Approach\n\nJoin maintenance tickets to property locations, sum maintenance resolution cost per city, and order cities by total spend.\n\n## 🔍 Explanation\n\n- `maintenance_tickets.property_id` links each ticket to a property.\n- `properties.location_id` links the property to its location.\n- `locations.city` provides the city.\n- `COALESCE(mt.resolution_cost, 0)` treats missing costs as zero.\n- `SUM(...)` calculates total maintenance cost per city.\n- Final ordering matches the comparator config exactly.",
      },
    ],
  },
  {
    code: "REALESTATE_092",
    approaches: [
      {
        approach_title: "Only rent owners",
        approach_type: "conditional_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT owner_profile_id FROM listings WHERE listing_status = 'live' GROUP BY owner_profile_id HAVING COUNT(*) FILTER (WHERE listed_for = 'rent') > 0 AND COUNT(*) FILTER (WHERE listed_for = 'sale') = 0;",
        explanation:
          "## 🧠 Approach\n\nGroup live listings by owner and keep owners whose live inventory is only rental listings.\n\n## 🔍 Explanation\n\n- `listing_status = 'live'` limits the check to currently live listings.\n- `COUNT(*) FILTER (WHERE listed_for = 'rent') > 0` ensures the owner has at least one live rental listing.\n- `COUNT(*) FILTER (WHERE listed_for = 'sale') = 0` ensures the owner has no live sale listings.",
      },
      {
        approach_title: "CASE counts",
        approach_type: "conditional_aggregation",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT owner_profile_id FROM listings WHERE listing_status = 'live' GROUP BY owner_profile_id HAVING SUM(CASE WHEN listed_for = 'rent' THEN 1 ELSE 0 END) > 0 AND SUM(CASE WHEN listed_for = 'sale' THEN 1 ELSE 0 END) = 0;",
        explanation:
          "## 🧠 Approach\n\nUse `CASE` expressions to count rent and sale listings for each owner.\n\n## 🔍 Explanation\n\n- The `CASE` expression returns 1 for matching listing type and 0 otherwise.\n- Summing the rent flag confirms at least one rent listing.\n- Summing the sale flag confirms there are zero sale listings.\n- This is equivalent to the PostgreSQL `FILTER` version.",
      },
    ],
  },
  {
    code: "REALESTATE_093",
    approaches: [
      {
        approach_title: "Repeated tenant leases",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT property_id, tenant_user_id, COUNT(*) AS lease_count FROM leases GROUP BY property_id, tenant_user_id HAVING COUNT(*) > 1;",
        explanation:
          "## 🧠 Approach\n\nGroup leases by property and tenant, then keep pairs with more than one lease.\n\n## 🔍 Explanation\n\n- `GROUP BY property_id, tenant_user_id` creates one row per property-tenant pair.\n- `COUNT(*)` counts how many lease records exist for that pair.\n- `HAVING COUNT(*) > 1` identifies properties leased by the same tenant more than once.",
      },
      {
        approach_title: "Subquery filter",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT property_id, tenant_user_id, lease_count FROM (SELECT property_id, tenant_user_id, COUNT(*) AS lease_count FROM leases GROUP BY property_id, tenant_user_id) lease_pairs WHERE lease_count > 1;",
        explanation:
          "## 🧠 Approach\n\nCalculate lease count per property-tenant pair first, then filter repeated tenant leases.\n\n## 🔍 Explanation\n\n- The inner query computes `lease_count` for every property and tenant pair.\n- The outer query keeps rows where `lease_count > 1`.\n- This is equivalent to the `HAVING` approach while allowing reuse of the aggregate alias.",
      },
    ],
  },
  {
    code: "REALESTATE_094",
    approaches: [
      {
        approach_title: "Visits exceed inquiries",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT l.id, COUNT(DISTINCT pv.id) AS completed_visit_count, COUNT(DISTINCT i.id) AS inquiry_count FROM listings l LEFT JOIN property_visits pv ON l.id = pv.listing_id AND pv.visit_status = 'completed' LEFT JOIN inquiries i ON l.id = i.listing_id GROUP BY l.id HAVING COUNT(DISTINCT pv.id) > COUNT(DISTINCT i.id);",
        explanation:
          "## 🧠 Approach\n\nCompare completed visit count and inquiry count per listing, then keep listings where completed visits are higher.\n\n## 🔍 Explanation\n\n- `LEFT JOIN property_visits` keeps listings even when they have no visits.\n- The visit join includes only `visit_status = 'completed'`.\n- `LEFT JOIN inquiries` keeps listings even when they have no inquiries.\n- `COUNT(DISTINCT ...)` prevents count inflation from joining two one-to-many tables.\n- `HAVING completed visits > inquiries` applies the comparison after aggregation.",
      },
    ],
  },
  {
    code: "REALESTATE_095",
    approaches: [
      {
        approach_title: "Long pending",
        approach_type: "date_filtering",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT id, listing_id, seeker_user_id, created_at FROM rental_applications WHERE application_status = 'under_review' AND created_at < NOW() - INTERVAL '7 days';",
        explanation:
          "## 🧠 Approach\n\nFilter rental applications that are still under review and were created more than seven days ago.\n\n## 🔍 Explanation\n\n- `application_status = 'under_review'` keeps applications still awaiting decision.\n- `created_at < NOW() - INTERVAL '7 days'` identifies applications pending longer than seven days.\n- The selected columns identify the application and seeker.",
      },
    ],
  },
  {
    code: "REALESTATE_096",
    approaches: [
      {
        approach_title: "Converted owner listings",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT l.owner_profile_id, COUNT(DISTINCT l.id) AS converted_listing_count FROM listings l JOIN inquiries i ON l.id = i.listing_id JOIN leases le ON l.id = le.listing_id AND le.lease_status = 'active' GROUP BY l.owner_profile_id HAVING COUNT(DISTINCT l.id) > 1;",
        explanation:
          "## 🧠 Approach\n\nFind owners whose listings received inquiries and converted into active leases for more than one listing.\n\n## 🔍 Explanation\n\n- `listings` provides the owner and listing id.\n- `inquiries` confirms the listing received interest.\n- `leases` confirms the listing has an active lease.\n- `COUNT(DISTINCT l.id)` counts converted listings per owner without duplication from multiple inquiries.\n- `HAVING COUNT(DISTINCT l.id) > 1` keeps owners with more than one converted listing.",
      },
    ],
  },
  {
    code: "REALESTATE_097",
    approaches: [
      {
        approach_title: "Referral rewards",
        approach_type: "aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT referrer_user_id, SUM(reward_amount) AS total_reward_amount FROM referrals GROUP BY referrer_user_id ORDER BY total_reward_amount DESC, referrer_user_id ASC;",
        explanation:
          "## 🧠 Approach\n\nSum referral rewards per referrer and order users by total reward amount.\n\n## 🔍 Explanation\n\n- `GROUP BY referrer_user_id` creates one row per referrer.\n- `SUM(reward_amount)` calculates total referral reward earned by each user.\n- `ORDER BY total_reward_amount DESC, referrer_user_id ASC` matches the comparator config exactly.",
      },
    ],
  },
  {
    code: "REALESTATE_098",
    approaches: [
      {
        approach_title: "Overdue rent cities",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT loc.city, SUM(rp.amount_due - rp.amount_paid) AS overdue_amount FROM rent_payments rp JOIN leases le ON rp.lease_id = le.id JOIN properties p ON le.property_id = p.id JOIN locations loc ON p.location_id = loc.id WHERE rp.payment_status = 'overdue' GROUP BY loc.city ORDER BY overdue_amount DESC, loc.city ASC;",
        explanation:
          "## 🧠 Approach\n\nJoin overdue rent payments to leases, properties, and locations, then sum overdue balance per city.\n\n## 🔍 Explanation\n\n- `rent_payments` stores due and paid amounts.\n- `payment_status = 'overdue'` keeps overdue rent payments.\n- `leases` links payments to properties.\n- `properties -> locations` provides the city.\n- `amount_due - amount_paid` calculates unpaid overdue amount.\n- Final ordering matches the comparator config.",
      },
    ],
  },
  {
    code: "REALESTATE_099",
    approaches: [
      {
        approach_title: "Stable owners",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT l.owner_profile_id, COUNT(lsh.id) AS status_change_count FROM listings l LEFT JOIN listing_status_history lsh ON l.id = lsh.listing_id WHERE l.listing_status = 'live' GROUP BY l.owner_profile_id ORDER BY status_change_count ASC, l.owner_profile_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCount listing status history rows for each owner among owners with live listings, then order by fewest status changes.\n\n## 🔍 Explanation\n\n- `listings` filters to owners with at least one live listing.\n- `LEFT JOIN listing_status_history` keeps live listings even if they have no status-change history.\n- `COUNT(lsh.id)` counts status changes and returns zero when no history exists.\n- Ordering ascending finds the most stable owners first.",
      },
    ],
  },
  {
    code: "REALESTATE_100",
    approaches: [
      {
        approach_title: "Paid rent totals",
        approach_type: "join_aggregation",
        is_optimal: true,
        display_order: 1,
        query:
          "SELECT le.property_id, SUM(rp.amount_paid) AS total_paid_rent FROM rent_payments rp JOIN leases le ON rp.lease_id = le.id WHERE rp.payment_status IN ('paid', 'partial') GROUP BY le.property_id ORDER BY total_paid_rent DESC, le.property_id ASC;",
        explanation:
          "## 🧠 Approach\n\nJoin rent payments to leases, sum paid rent per property, and order by total paid rent.\n\n## 🔍 Explanation\n\n- `rent_payments` stores payment amounts and status.\n- `leases` maps rent payments to properties.\n- `payment_status IN ('paid', 'partial')` keeps payments where rent was collected at least partially.\n- `SUM(rp.amount_paid)` calculates total collected rent per property.\n- Final ordering matches the comparator config exactly.",
      },
      {
        approach_title: "Subquery paid totals",
        approach_type: "subquery",
        is_optimal: false,
        display_order: 2,
        query:
          "SELECT property_id, total_paid_rent FROM (SELECT le.property_id, SUM(rp.amount_paid) AS total_paid_rent FROM rent_payments rp JOIN leases le ON rp.lease_id = le.id WHERE rp.payment_status IN ('paid', 'partial') GROUP BY le.property_id) property_rent ORDER BY total_paid_rent DESC, property_id ASC;",
        explanation:
          "## 🧠 Approach\n\nCalculate total paid rent per property first, then order the result.\n\n## 🔍 Explanation\n\n- The inner query follows the same valid relationship path from rent payments to properties.\n- The outer query keeps the result readable and applies the required final ordering.\n- This is equivalent to the grouped join approach.",
      },
    ],
  },
];
