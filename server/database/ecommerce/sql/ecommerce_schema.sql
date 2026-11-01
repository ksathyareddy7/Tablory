-- ============================
-- ECOMMERCE APP
-- ============================
DROP SCHEMA IF EXISTS ecommerce_schema CASCADE;
CREATE SCHEMA ecommerce_schema;
SET search_path TO ecommerce_schema;
-- =========================
-- CUSTOMERS
-- =========================
CREATE TABLE customers (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  email VARCHAR(150) UNIQUE NOT NULL,
  phone VARCHAR(20),
  gender VARCHAR(20),
  date_of_birth DATE,
  loyalty_tier VARCHAR(30) CHECK (
    loyalty_tier IN ('bronze', 'silver', 'gold', 'platinum')
  ) DEFAULT 'bronze',
  preferred_language VARCHAR(20),
  referral_code VARCHAR(50) UNIQUE,
  referred_by_customer_id BIGINT REFERENCES customers(id) ON DELETE
  SET NULL,
    is_email_verified BOOLEAN DEFAULT FALSE,
    is_phone_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);
-- =========================
-- CUSTOMER DEVICES
-- =========================
CREATE TABLE customer_devices (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  device_type VARCHAR(30) CHECK (
    device_type IN ('mobile', 'desktop', 'tablet')
  ),
  os VARCHAR(50),
  browser VARCHAR(50),
  app_version VARCHAR(50),
  country VARCHAR(100),
  city VARCHAR(100),
  last_seen_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL
);
-- =========================
-- ADDRESSES
-- =========================
CREATE TABLE addresses (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  address_type VARCHAR(20) CHECK (address_type IN ('billing', 'shipping')),
  line1 TEXT NOT NULL,
  line2 TEXT,
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  postal_code VARCHAR(20),
  latitude NUMERIC(10, 6),
  longitude NUMERIC(10, 6),
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP
);
-- =========================
-- SELLERS
-- =========================
CREATE TABLE sellers (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(150) UNIQUE,
  phone VARCHAR(20),
  seller_status VARCHAR(30) CHECK (
    seller_status IN ('pending', 'active', 'suspended', 'closed')
  ) DEFAULT 'pending',
  commission_rate NUMERIC(5, 2) DEFAULT 0,
  rating NUMERIC(2, 1),
  joined_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP
);
-- =========================
-- BRANDS
-- =========================
CREATE TABLE brands (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(150) UNIQUE NOT NULL,
  description TEXT,
  website_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL
);
-- =========================
-- CATEGORIES
-- =========================
CREATE TABLE categories (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  parent_category_id BIGINT REFERENCES categories(id) ON DELETE
  SET NULL,
    category_level INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL
);
-- =========================
-- PRODUCTS
-- =========================
CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  seller_id BIGINT REFERENCES sellers(id) ON DELETE
  SET NULL,
    category_id BIGINT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    brand_id BIGINT REFERENCES brands(id) ON DELETE
  SET NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    sku VARCHAR(100) UNIQUE NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    cost_price NUMERIC(10, 2),
    mrp NUMERIC(10, 2),
    stock_quantity INTEGER DEFAULT 0,
    rating NUMERIC(2, 1),
    review_count INTEGER DEFAULT 0,
    weight_kg NUMERIC(8, 3),
    length_cm NUMERIC(8, 2),
    width_cm NUMERIC(8, 2),
    height_cm NUMERIC(8, 2),
    product_status VARCHAR(30) CHECK (
      product_status IN (
        'draft',
        'active',
        'out_of_stock',
        'discontinued'
      )
    ) DEFAULT 'active',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);
-- =========================
-- PRODUCT IMAGES
-- =========================
CREATE TABLE product_images (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text VARCHAR(255),
  display_order INTEGER DEFAULT 1,
  is_primary BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL
);
-- =========================
-- PRODUCT ATTRIBUTES
-- =========================
CREATE TABLE product_attributes (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  attribute_name VARCHAR(100) NOT NULL,
  attribute_value VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL
);
-- =========================
-- PRODUCT VARIANTS
-- =========================
CREATE TABLE product_variants (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  variant_sku VARCHAR(100) UNIQUE NOT NULL,
  color VARCHAR(50),
  size VARCHAR(50),
  material VARCHAR(100),
  price NUMERIC(10, 2),
  stock_quantity INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP
);
-- =========================
-- WAREHOUSES
-- =========================
CREATE TABLE warehouses (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  postal_code VARCHAR(20),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL
);
-- =========================
-- INVENTORY
-- =========================
CREATE TABLE inventory (
  id BIGSERIAL PRIMARY KEY,
  warehouse_id BIGINT NOT NULL REFERENCES warehouses(id) ON DELETE CASCADE,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  variant_id BIGINT REFERENCES product_variants(id) ON DELETE CASCADE,
  quantity_available INTEGER DEFAULT 0,
  quantity_reserved INTEGER DEFAULT 0,
  reorder_level INTEGER DEFAULT 0,
  updated_at TIMESTAMP,
  UNIQUE (warehouse_id, product_id, variant_id)
);
-- =========================
-- INVENTORY MOVEMENTS
-- =========================
CREATE TABLE inventory_movements (
  id BIGSERIAL PRIMARY KEY,
  warehouse_id BIGINT NOT NULL REFERENCES warehouses(id) ON DELETE CASCADE,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  variant_id BIGINT REFERENCES product_variants(id) ON DELETE
  SET NULL,
    movement_type VARCHAR(30) CHECK (
      movement_type IN (
        'stock_in',
        'stock_out',
        'reserved',
        'released',
        'adjustment',
        'return'
      )
    ),
    quantity INTEGER NOT NULL,
    reference_type VARCHAR(50),
    reference_id BIGINT,
    created_at TIMESTAMP NOT NULL
);
-- =========================
-- CARTS
-- =========================
CREATE TABLE carts (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  cart_status VARCHAR(30) CHECK (
    cart_status IN ('active', 'converted', 'abandoned', 'expired')
  ) DEFAULT 'active',
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP
);
-- =========================
-- CART ITEMS
-- =========================
CREATE TABLE cart_items (
  id BIGSERIAL PRIMARY KEY,
  cart_id BIGINT NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  variant_id BIGINT REFERENCES product_variants(id) ON DELETE
  SET NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price NUMERIC(10, 2) NOT NULL,
    added_at TIMESTAMP NOT NULL
);
-- =========================
-- WISHLISTS
-- =========================
CREATE TABLE wishlists (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  name VARCHAR(100) DEFAULT 'Default Wishlist',
  is_public BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL
);
-- =========================
-- WISHLIST ITEMS
-- =========================
CREATE TABLE wishlist_items (
  id BIGSERIAL PRIMARY KEY,
  wishlist_id BIGINT NOT NULL REFERENCES wishlists(id) ON DELETE CASCADE,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  added_at TIMESTAMP NOT NULL,
  UNIQUE (wishlist_id, product_id)
);
-- =========================
-- COUPONS
-- =========================
CREATE TABLE coupons (
  id BIGSERIAL PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  discount_type VARCHAR(30) CHECK (
    discount_type IN ('percentage', 'fixed_amount', 'free_shipping')
  ),
  discount_value NUMERIC(10, 2) NOT NULL,
  minimum_order_amount NUMERIC(12, 2) DEFAULT 0,
  max_discount_amount NUMERIC(12, 2),
  usage_limit INTEGER,
  used_count INTEGER DEFAULT 0,
  starts_at TIMESTAMP,
  expires_at TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL
);
-- =========================
-- ORDERS
-- =========================
CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  order_number VARCHAR(100) UNIQUE NOT NULL,
  status VARCHAR(30) CHECK (
    status IN (
      'pending',
      'confirmed',
      'packed',
      'shipped',
      'out_for_delivery',
      'delivered',
      'cancelled',
      'returned'
    )
  ),
  order_channel VARCHAR(30) CHECK (
    order_channel IN ('web', 'android', 'ios', 'admin')
  ),
  order_date TIMESTAMP NOT NULL,
  confirmed_at TIMESTAMP,
  shipped_at TIMESTAMP,
  delivered_at TIMESTAMP,
  cancelled_at TIMESTAMP,
  shipping_address_id BIGINT REFERENCES addresses(id) ON DELETE
  SET NULL,
    billing_address_id BIGINT REFERENCES addresses(id) ON DELETE
  SET NULL,
    coupon_id BIGINT REFERENCES coupons(id) ON DELETE
  SET NULL,
    subtotal NUMERIC(12, 2) NOT NULL,
    discount_amount NUMERIC(12, 2) DEFAULT 0,
    tax_amount NUMERIC(12, 2) DEFAULT 0,
    shipping_fee NUMERIC(12, 2) DEFAULT 0,
    total_amount NUMERIC(12, 2) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);
-- =========================
-- ORDER ITEMS
-- =========================
CREATE TABLE order_items (
  id BIGSERIAL PRIMARY KEY,
  order_id BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  variant_id BIGINT REFERENCES product_variants(id) ON DELETE
  SET NULL,
    seller_id BIGINT REFERENCES sellers(id) ON DELETE
  SET NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price NUMERIC(10, 2) NOT NULL,
    discount_amount NUMERIC(10, 2) DEFAULT 0,
    tax_amount NUMERIC(10, 2) DEFAULT 0,
    total_price NUMERIC(12, 2) NOT NULL,
    item_status VARCHAR(30) CHECK (
      item_status IN (
        'ordered',
        'packed',
        'shipped',
        'delivered',
        'cancelled',
        'returned'
      )
    ) DEFAULT 'ordered'
);
-- =========================
-- ORDER STATUS HISTORY
-- =========================
CREATE TABLE order_status_history (
  id BIGSERIAL PRIMARY KEY,
  order_id BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  old_status VARCHAR(30),
  new_status VARCHAR(30) NOT NULL,
  changed_by VARCHAR(100),
  note TEXT,
  changed_at TIMESTAMP NOT NULL
);
-- =========================
-- PAYMENTS
-- =========================
CREATE TABLE payments (
  id BIGSERIAL PRIMARY KEY,
  order_id BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  payment_method VARCHAR(50) CHECK (
    payment_method IN ('card', 'upi', 'net_banking', 'wallet', 'cod')
  ),
  payment_gateway VARCHAR(100),
  payment_status VARCHAR(50) CHECK (
    payment_status IN (
      'pending',
      'completed',
      'failed',
      'refunded',
      'partially_refunded'
    )
  ),
  paid_amount NUMERIC(12, 2) NOT NULL,
  paid_at TIMESTAMP,
  transaction_ref VARCHAR(100),
  failure_reason TEXT,
  created_at TIMESTAMP NOT NULL
);
-- =========================
-- REFUNDS
-- =========================
CREATE TABLE refunds (
  id BIGSERIAL PRIMARY KEY,
  payment_id BIGINT NOT NULL REFERENCES payments(id) ON DELETE CASCADE,
  order_id BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  refund_amount NUMERIC(12, 2) NOT NULL,
  refund_status VARCHAR(30) CHECK (
    refund_status IN (
      'requested',
      'processing',
      'completed',
      'failed',
      'rejected'
    )
  ),
  reason TEXT,
  processed_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL
);
-- =========================
-- SHIPMENTS
-- =========================
CREATE TABLE shipments (
  id BIGSERIAL PRIMARY KEY,
  order_id BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  warehouse_id BIGINT REFERENCES warehouses(id) ON DELETE
  SET NULL,
    carrier_name VARCHAR(100),
    tracking_number VARCHAR(100),
    shipment_status VARCHAR(30) CHECK (
      shipment_status IN (
        'pending',
        'packed',
        'in_transit',
        'out_for_delivery',
        'delivered',
        'failed',
        'returned'
      )
    ),
    shipped_at TIMESTAMP,
    estimated_delivery_at TIMESTAMP,
    delivered_at TIMESTAMP,
    shipping_cost NUMERIC(10, 2),
    created_at TIMESTAMP NOT NULL
);
-- =========================
-- SHIPMENT EVENTS
-- =========================
CREATE TABLE shipment_events (
  id BIGSERIAL PRIMARY KEY,
  shipment_id BIGINT NOT NULL REFERENCES shipments(id) ON DELETE CASCADE,
  event_status VARCHAR(50) NOT NULL,
  event_location VARCHAR(150),
  event_description TEXT,
  event_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP NOT NULL
);
-- =========================
-- RETURNS
-- =========================
CREATE TABLE returns (
  id BIGSERIAL PRIMARY KEY,
  order_id BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  customer_id BIGINT NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  return_status VARCHAR(30) CHECK (
    return_status IN (
      'requested',
      'approved',
      'rejected',
      'picked_up',
      'received',
      'refunded'
    )
  ),
  reason TEXT,
  requested_at TIMESTAMP NOT NULL,
  resolved_at TIMESTAMP
);
-- =========================
-- RETURN ITEMS
-- =========================
CREATE TABLE return_items (
  id BIGSERIAL PRIMARY KEY,
  return_id BIGINT NOT NULL REFERENCES returns(id) ON DELETE CASCADE,
  order_item_id BIGINT NOT NULL REFERENCES order_items(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  return_reason VARCHAR(100),
  refund_amount NUMERIC(12, 2)
);
-- =========================
-- REVIEWS
-- =========================
CREATE TABLE reviews (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  customer_id BIGINT NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  order_item_id BIGINT REFERENCES order_items(id) ON DELETE
  SET NULL,
    rating INTEGER CHECK (
      rating BETWEEN 1 AND 5
    ),
    review_title VARCHAR(255),
    review_text TEXT,
    is_verified_purchase BOOLEAN DEFAULT FALSE,
    helpful_count INTEGER DEFAULT 0,
    review_status VARCHAR(30) CHECK (
      review_status IN ('pending', 'approved', 'rejected')
    ) DEFAULT 'approved',
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);
-- =========================
-- REVIEW VOTES
-- =========================
CREATE TABLE review_votes (
  id BIGSERIAL PRIMARY KEY,
  review_id BIGINT NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
  customer_id BIGINT NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  vote_type VARCHAR(20) CHECK (vote_type IN ('helpful', 'not_helpful')),
  created_at TIMESTAMP NOT NULL,
  UNIQUE (review_id, customer_id)
);
-- =========================
-- PRODUCT VIEWS
-- =========================
CREATE TABLE product_views (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT REFERENCES customers(id) ON DELETE
  SET NULL,
    product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    device_id BIGINT REFERENCES customer_devices(id) ON DELETE
  SET NULL,
    viewed_at TIMESTAMP NOT NULL,
    source VARCHAR(50),
    session_id VARCHAR(100)
);
-- =========================
-- SEARCH QUERIES
-- =========================
CREATE TABLE search_queries (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT REFERENCES customers(id) ON DELETE
  SET NULL,
    query_text TEXT NOT NULL,
    result_count INTEGER DEFAULT 0,
    clicked_product_id BIGINT REFERENCES products(id) ON DELETE
  SET NULL,
    searched_at TIMESTAMP NOT NULL
);
-- =========================
-- SUPPORT TICKETS
-- =========================
CREATE TABLE support_tickets (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  order_id BIGINT REFERENCES orders(id) ON DELETE
  SET NULL,
    ticket_type VARCHAR(50) CHECK (
      ticket_type IN (
        'order_issue',
        'payment_issue',
        'return_issue',
        'product_issue',
        'other'
      )
    ),
    ticket_status VARCHAR(30) CHECK (
      ticket_status IN ('open', 'in_progress', 'resolved', 'closed')
    ) DEFAULT 'open',
    priority VARCHAR(20) CHECK (
      priority IN ('low', 'medium', 'high', 'urgent')
    ) DEFAULT 'medium',
    subject VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP NOT NULL,
    resolved_at TIMESTAMP
);
-- =========================
-- SUPPORT MESSAGES
-- =========================
CREATE TABLE support_messages (
  id BIGSERIAL PRIMARY KEY,
  ticket_id BIGINT NOT NULL REFERENCES support_tickets(id) ON DELETE CASCADE,
  sender_type VARCHAR(20) CHECK (sender_type IN ('customer', 'agent')),
  message_text TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL
);
-- =========================
-- INDEXES
-- =========================
-- Customers
CREATE INDEX idx_customers_created_at ON customers(created_at DESC);
CREATE INDEX idx_customers_is_active ON customers(is_active);
CREATE INDEX idx_customers_referred_by ON customers(referred_by_customer_id);
-- Devices / addresses
CREATE INDEX idx_customer_devices_customer_id ON customer_devices(customer_id);
CREATE INDEX idx_customer_devices_last_seen ON customer_devices(last_seen_at DESC);
CREATE INDEX idx_addresses_customer_id ON addresses(customer_id);
CREATE INDEX idx_addresses_city_state ON addresses(city, state);
-- Catalog
CREATE INDEX idx_categories_parent_id ON categories(parent_category_id);
CREATE INDEX idx_products_seller_id ON products(seller_id);
CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_products_brand_id ON products(brand_id);
CREATE INDEX idx_products_price ON products(price);
CREATE INDEX idx_products_rating ON products(rating DESC);
CREATE INDEX idx_products_status ON products(product_status);
CREATE INDEX idx_product_images_product_id ON product_images(product_id);
CREATE INDEX idx_product_attributes_product_id ON product_attributes(product_id);
CREATE INDEX idx_product_variants_product_id ON product_variants(product_id);
-- Inventory
CREATE INDEX idx_inventory_warehouse_id ON inventory(warehouse_id);
CREATE INDEX idx_inventory_product_id ON inventory(product_id);
CREATE INDEX idx_inventory_variant_id ON inventory(variant_id);
CREATE INDEX idx_inventory_movements_product_id ON inventory_movements(product_id);
CREATE INDEX idx_inventory_movements_created_at ON inventory_movements(created_at DESC);
-- Cart / wishlist
CREATE INDEX idx_carts_customer_id ON carts(customer_id);
CREATE INDEX idx_carts_status ON carts(cart_status);
CREATE INDEX idx_cart_items_cart_id ON cart_items(cart_id);
CREATE INDEX idx_cart_items_product_id ON cart_items(product_id);
CREATE INDEX idx_wishlists_customer_id ON wishlists(customer_id);
CREATE INDEX idx_wishlist_items_product_id ON wishlist_items(product_id);
-- Coupons
CREATE INDEX idx_coupons_code ON coupons(code);
CREATE INDEX idx_coupons_active ON coupons(is_active);
CREATE INDEX idx_coupons_expires_at ON coupons(expires_at);
-- Orders
CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_order_date ON orders(order_date DESC);
CREATE INDEX idx_orders_coupon_id ON orders(coupon_id);
CREATE INDEX idx_orders_total_amount ON orders(total_amount DESC);
-- Order items
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);
CREATE INDEX idx_order_items_seller_id ON order_items(seller_id);
CREATE INDEX idx_order_items_status ON order_items(item_status);
-- Order status history
CREATE INDEX idx_order_status_history_order_id ON order_status_history(order_id);
CREATE INDEX idx_order_status_history_changed_at ON order_status_history(changed_at DESC);
-- Payments / refunds
CREATE INDEX idx_payments_order_id ON payments(order_id);
CREATE INDEX idx_payments_status ON payments(payment_status);
CREATE INDEX idx_payments_paid_at ON payments(paid_at DESC);
CREATE INDEX idx_refunds_payment_id ON refunds(payment_id);
CREATE INDEX idx_refunds_order_id ON refunds(order_id);
CREATE INDEX idx_refunds_status ON refunds(refund_status);
-- Shipping
CREATE INDEX idx_shipments_order_id ON shipments(order_id);
CREATE INDEX idx_shipments_warehouse_id ON shipments(warehouse_id);
CREATE INDEX idx_shipments_status ON shipments(shipment_status);
CREATE INDEX idx_shipments_delivered_at ON shipments(delivered_at DESC);
CREATE INDEX idx_shipment_events_shipment_id ON shipment_events(shipment_id);
CREATE INDEX idx_shipment_events_event_at ON shipment_events(event_at DESC);
-- Returns
CREATE INDEX idx_returns_order_id ON returns(order_id);
CREATE INDEX idx_returns_customer_id ON returns(customer_id);
CREATE INDEX idx_returns_status ON returns(return_status);
CREATE INDEX idx_return_items_return_id ON return_items(return_id);
CREATE INDEX idx_return_items_order_item_id ON return_items(order_item_id);
-- Reviews
CREATE INDEX idx_reviews_product_id ON reviews(product_id);
CREATE INDEX idx_reviews_customer_id ON reviews(customer_id);
CREATE INDEX idx_reviews_rating ON reviews(rating DESC);
CREATE INDEX idx_reviews_created_at ON reviews(created_at DESC);
CREATE INDEX idx_review_votes_review_id ON review_votes(review_id);
CREATE INDEX idx_review_votes_customer_id ON review_votes(customer_id);
-- Analytics
CREATE INDEX idx_product_views_customer_id ON product_views(customer_id);
CREATE INDEX idx_product_views_product_id ON product_views(product_id);
CREATE INDEX idx_product_views_viewed_at ON product_views(viewed_at DESC);
CREATE INDEX idx_search_queries_customer_id ON search_queries(customer_id);
CREATE INDEX idx_search_queries_clicked_product_id ON search_queries(clicked_product_id);
CREATE INDEX idx_search_queries_searched_at ON search_queries(searched_at DESC);
-- Support
CREATE INDEX idx_support_tickets_customer_id ON support_tickets(customer_id);
CREATE INDEX idx_support_tickets_order_id ON support_tickets(order_id);
CREATE INDEX idx_support_tickets_status ON support_tickets(ticket_status);
CREATE INDEX idx_support_messages_ticket_id ON support_messages(ticket_id);