-- Database schema for affiliate click tracking, user feedback, page views, and conversions.
-- Recommended provider: Neon, Supabase, or any Postgres-compatible database.
-- Migration command example:
--   psql "$DATABASE_URL" -f data/database-schema.sql

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS affiliate_clicks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  slug TEXT NOT NULL,
  affiliate_target_id TEXT NOT NULL,
  public_url TEXT NOT NULL,
  affiliate_url TEXT NOT NULL,
  status TEXT NOT NULL,
  user_agent TEXT,
  referrer TEXT,
  page_path TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_slug ON affiliate_clicks (slug);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_target_id ON affiliate_clicks (affiliate_target_id);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_occurred_at ON affiliate_clicks (occurred_at);

CREATE TABLE IF NOT EXISTS page_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  path TEXT NOT NULL,
  user_agent TEXT,
  referrer TEXT,
  page_url TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views (path);
CREATE INDEX IF NOT EXISTS idx_page_views_occurred_at ON page_views (occurred_at);

CREATE TABLE IF NOT EXISTS user_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  page_path TEXT,
  page_url TEXT,
  rating INTEGER,
  category TEXT,
  feedback TEXT,
  email TEXT,
  status TEXT DEFAULT 'new',
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_feedback_page_path ON user_feedback (page_path);
CREATE INDEX IF NOT EXISTS idx_user_feedback_rating ON user_feedback (rating);

CREATE TABLE IF NOT EXISTS conversions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  affiliate_click_id UUID,
  action TEXT NOT NULL,
  value NUMERIC,
  source TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  FOREIGN KEY (affiliate_click_id) REFERENCES affiliate_clicks(id)
);

CREATE INDEX IF NOT EXISTS idx_conversions_affiliate_click_id ON conversions (affiliate_click_id);
CREATE INDEX IF NOT EXISTS idx_conversions_action ON conversions (action);
