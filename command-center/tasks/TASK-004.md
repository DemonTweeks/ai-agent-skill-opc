# TASK-004

## Basic Info

Task ID: TASK-004
Title: Create first 5 comparison outlines
Assigned Agent Type: WRITE
Priority: High
Status: DONE
Risk Level: Low

## Objective

Create 5 high-commercial-intent comparison outlines.

## Background

The refined blueprint says comparison pages should be the first content priority.

## Input Files

- `command-center/03-blueprint.md`
- `apps/web/src/types/content.ts`

## Target Files / Areas

- `data/comparisons.json`

## Expected Output

5 comparison records with decision fields, best-for blocks, verdicts, and related content.

## Acceptance Criteria

- Each comparison has a target keyword.
- Each comparison has a clear winner or conditional verdict.
- Each comparison includes cheapest and safest options.
- No affiliate status is invented.
- Pages can later support CTA buttons.

## Dependencies

TASK-002.

## Parallel Group

C

## Testing Requirement

Validate JSON imports through TypeScript.

## QA Requirement

Check commercial intent and no unsupported claims.

## Output File Path

`command-center/agent-results/TASK-004/writing.md`

## Testing File Path

`command-center/agent-results/TASK-004/testing.md`

## QA File Path

`command-center/agent-results/TASK-004/qa.md`

## User Action Required

None.

## Progress Update Required

Yes.

## Notes

These are outlines, not final researched claims.
