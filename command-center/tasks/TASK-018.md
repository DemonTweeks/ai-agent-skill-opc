# TASK-018

## Basic Info

Task ID: TASK-018
Title: Add dedicated tool profile collection for non-affiliate tools
Assigned Agent Type: DEV/WRITE
Priority: Medium
Status: DONE
Risk Level: Medium

## Objective

Create a dedicated tool profile collection so non-affiliate tools such as Codex, OpenClaw, Next.js, Markdown, local dev server, and Vercel can be linked without misclassifying them as affiliate targets.

## Target Files / Areas

- `data/tools.json`
- `apps/web/src/types/content.ts`
- `apps/web/src/lib/data.ts`
- `apps/web/src/app/tools`
- `apps/web/src/app/sitemap.ts`
- `apps/web/src/app/layout.tsx`
- `data/playbooks.json`

## Acceptance Criteria

- Tool list and detail routes exist.
- Tool profiles are included in sitemap and navigation.
- Related-link resolver can resolve tool names.
- Older playbook tool links can point to literal tool pages.
- Lint, typecheck, build, deploy, and production smoke checks pass.

## Testing Requirement

Run lint, typecheck, build, deploy, and production route checks.

## QA Requirement

Confirm tool profiles do not claim affiliate approval or hands-on benchmark evidence.

## Output File Path

`command-center/agent-results/TASK-018/programming.md`

## Testing File Path

`command-center/agent-results/TASK-018/testing.md`

## QA File Path

`command-center/agent-results/TASK-018/qa.md`

## User Action Required

None.

## Progress Update Required

Yes.

## Completion Notes

- Added `data/tools.json` with 6 non-affiliate tool profiles.
- Added `/tools` and `/tools/[slug]` routes.
- Added tools to navigation, sitemap, and related-link resolution.
- Reconnected older playbooks to literal Codex/OpenClaw tool pages.
- Latest production deployment ID: `dpl_DLEr5C2dwCDcBeqBwLNHzWh8WZgo`.
