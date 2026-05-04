# Database Connection Setup Guide

## Step 1: Create a Postgres Database (Neon Recommended)

1. Go to [neon.tech](https://neon.tech) and sign up
2. Create a new project
3. Copy the connection string from the dashboard
4. It will look like: `postgresql://user:password@host/database`

## Step 2: Add DATABASE_URL to Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your `ai-agent-skill-opc` project
3. Go to Settings → Environment Variables
4. Click "Add New"
5. Name: `DATABASE_URL`
6. Value: Paste your connection string from Neon
7. Environment: Production
8. Click Save

## Step 3: Run Database Migration

After the first deployment with DATABASE_URL, run the migration:

```bash
psql "$DATABASE_URL" -f data/database-schema.sql
```

Or use your database provider's SQL editor to run the schema.

## Step 4: Test Connection

Once deployed and migrated, the affiliate click logging will begin automatically.

## Environment Variables Checklist

- ✅ `GOOGLE_SITE_VERIFICATION` - Already configured
- ✅ `NEXT_PUBLIC_SITE_URL` - Auto-detected from Vercel
- ⬜ `DATABASE_URL` - Needs to be added
