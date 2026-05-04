# TASK-002

## Basic Info

Task ID: TASK-002
Title: Define MVP data schema
Assigned Agent Type: DEV
Priority: High
Status: DONE
Risk Level: Medium

## Objective

Create TypeScript data contracts for the MVP content platform.

## Background

The refined blueprint requires schema fields for SEO intent, monetization priority, score breakdown, trust and safety, decision guidance, and conversion blocks.

## Input Files

- `command-center/03-blueprint.md`

## Target Files / Areas

- `apps/web/src/types/content.ts`
- `apps/web/src/lib/data.ts`
- `data/`

## Expected Output

Reusable TypeScript types and data loading helpers.

## Acceptance Criteria

- Skill model includes scoreBreakdown and safety fields.
- Comparison model includes winner, best-for blocks, final verdict, and affiliate tool slugs.
- Workflow model includes human checkpoints and conversion fields.
- Types support SEO fields and monetization priority.
- TypeScript compilation passes.

## Dependencies

TASK-001.

## Parallel Group

B

## Testing Requirement

Run TypeScript check.

## QA Requirement

Check schema against blueprint data model.

## Output File Path

`command-center/agent-results/TASK-002/programming.md`

## Testing File Path

`command-center/agent-results/TASK-002/testing.md`

## QA File Path

`command-center/agent-results/TASK-002/qa.md`

## User Action Required

None.

## Progress Update Required

Yes.

## Notes

Use local JSON first.
