import { Client } from "pg";

const connectionString = process.env.DATABASE_URL;

function createClient() {
  if (!connectionString) {
    throw new Error("Missing DATABASE_URL environment variable for database connection");
  }

  return new Client({ connectionString });
}

declare global {
  var __pgClient: Client | undefined;
}

async function getClient() {
  if (!connectionString) {
    throw new Error("Missing DATABASE_URL environment variable for database connection");
  }

  if (!global.__pgClient) {
    const client = createClient();
    await client.connect();
    global.__pgClient = client;
  }

  return global.__pgClient;
}

export type AffiliateClickInsert = {
  slug: string;
  affiliateTargetId: string;
  publicUrl: string;
  affiliateUrl: string;
  status: string;
  userAgent?: string | null;
  referrer?: string | null;
  pagePath?: string | null;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
};

export async function logAffiliateClick(details: AffiliateClickInsert) {
  if (!process.env.DATABASE_URL) {
    return;
  }

  const client = await getClient();
  const {
    slug,
    affiliateTargetId,
    publicUrl,
    affiliateUrl,
    status,
    userAgent,
    referrer,
    pagePath,
    utmSource,
    utmMedium,
    utmCampaign
  } = details;

  await client.query(
    `INSERT INTO affiliate_clicks (
      slug,
      affiliate_target_id,
      public_url,
      affiliate_url,
      status,
      user_agent,
      referrer,
      page_path,
      utm_source,
      utm_medium,
      utm_campaign
    ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
    [
      slug,
      affiliateTargetId,
      publicUrl,
      affiliateUrl,
      status,
      userAgent,
      referrer,
      pagePath,
      utmSource,
      utmMedium,
      utmCampaign
    ]
  );
}

export type UserFeedbackInsert = {
  pagePath?: string | null;
  pageUrl?: string | null;
  rating?: number | null;
  category?: string | null;
  feedback?: string | null;
  email?: string | null;
  metadata?: Record<string, unknown> | null;
};

export async function logFeedback(details: UserFeedbackInsert) {
  if (!process.env.DATABASE_URL) {
    return;
  }

  const client = await getClient();
  const {
    pagePath,
    pageUrl,
    rating,
    category,
    feedback,
    email,
    metadata
  } = details;

  await client.query(
    `INSERT INTO user_feedback (
      page_path,
      page_url,
      rating,
      category,
      feedback,
      email,
      metadata
    ) VALUES ($1,$2,$3,$4,$5,$6,$7)`,
    [
      pagePath,
      pageUrl,
      rating,
      category,
      feedback,
      email,
      metadata ? JSON.stringify(metadata) : null
    ]
  );
}
