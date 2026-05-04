export type AffiliateClick = {
  id: string;
  occurredAt: Date;
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
  createdAt: Date;
};

export type PageView = {
  id: string;
  occurredAt: Date;
  path: string;
  userAgent?: string | null;
  referrer?: string | null;
  pageUrl?: string | null;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  metadata?: Record<string, unknown> | null;
  createdAt: Date;
};

export type UserFeedback = {
  id: string;
  submittedAt: Date;
  pagePath?: string | null;
  pageUrl?: string | null;
  rating?: number | null;
  category?: string | null;
  feedback?: string | null;
  email?: string | null;
  status: string;
  metadata?: Record<string, unknown> | null;
  createdAt: Date;
};

export type Conversion = {
  id: string;
  occurredAt: Date;
  affiliateClickId?: string | null;
  action: string;
  value?: number | null;
  source?: string | null;
  metadata?: Record<string, unknown> | null;
  createdAt: Date;
};
