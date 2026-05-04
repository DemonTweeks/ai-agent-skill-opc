# Decisions

- Chat communication with the user is Chinese.
- Development files and artifacts use English.
- Final product name is `AI Agent Skill for One Person Company`.
- Deployment target is Vercel.
- No custom domain for now; use the Vercel-provided domain after deployment.
- The project is an SEO-first, affiliate-first decision platform, not a generic AI directory.
- TypeScript / Next.js owns website, UI, SEO, content rendering, affiliate redirects, and public routes.
- Python owns future agent-engine, orchestration, research automation, content generation, and QA/security evaluation.
- Local JSON seed data is acceptable for the first MVP foundation.
- AdSense is not an early priority.
- Commercial comparison pages are the first content priority.
- First affiliate targets should be selected from current research, not assumed from the blueprint.
- Use a Postgres-compatible provider for tracking and analytics, with Neon recommended for the first MVP.
- Store only analytics metadata in the database and continue to drive content from file-based JSON records.
