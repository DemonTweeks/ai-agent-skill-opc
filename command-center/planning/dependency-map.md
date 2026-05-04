# Dependency Map - Phase 2: Expansion

| Task ID | Title | Depends On | Blocks | Parallel Group | Risk |
|---|---|---|---|---|---|
| TASK-019 | Add 10 skill records | None | TASK-032 | Batch-7 | Low |
| TASK-020 | Add 5 agent roles | None | None | Batch-7 | Low |
| TASK-021 | Add 3 workflows | None | None | Batch-7 | Low |
| TASK-022 | Add 5 templates | None | None | Batch-7 | Low |
| TASK-023 | Design DB schema | None | TASK-024, TASK-026, TASK-027 | Batch-8 | Medium |
| TASK-024 | Create TS types | TASK-023 | TASK-025 | Batch-8 | Low |
| TASK-025 | Add connection setup | TASK-024 | None | Batch-8 | Medium |
| TASK-026 | Feedback form component | TASK-023 | TASK-028 | Batch-9 | Low |
| TASK-027 | Feedback API route | TASK-023 | TASK-028 | Batch-9 | Low |
| TASK-028 | Add feedback links | TASK-026, TASK-027 | None | Batch-9 | Low |
| TASK-029 | Google Analytics setup | None | None | Batch-9 | Low |
| TASK-030 | Monitoring utilities | None | None | Batch-9 | Low |
| TASK-031 | Structured data validation | None | None | Batch-9 | Low |
| TASK-032 | Deepen skill records | TASK-019 | None | Batch-10 | Low |
| TASK-033 | Add FAQ to comparisons | None | None | Batch-10 | Low |
| TASK-034 | Enhance playbooks | None | None | Batch-10 | Low |

## Parallel Execution Groups

### Batch-7: Content Expansion (All Parallel)
- TASK-019, TASK-020, TASK-021, TASK-022
- No dependencies between them
- Can execute simultaneously

### Batch-8: Infrastructure (Sequential)
- TASK-023 → TASK-024 → TASK-025
- Each depends on previous

### Batch-9: UX & Analytics (Mostly Parallel)
- TASK-026 and TASK-027 parallel, both depend on TASK-023
- TASK-028 depends on 026 and 027
- TASK-029, 030, 031 independent

### Batch-10: Quality Enhancement (All Parallel)
- TASK-032 depends on TASK-019
- TASK-033, TASK-034 independent

## Critical Path

Longest chain: TASK-023 → TASK-024 → TASK-025 (3 tasks sequential)

## Risk Assessment

- **Low Risk:** Content creation tasks (WRITE agents)
- **Medium Risk:** Infrastructure tasks (database, API routes)
- **High Risk:** None in this phase (no production deployments)

## User Dependencies

- Database choice affects TASK-023-025 (but can proceed with placeholder)
- Google Analytics ID affects TASK-029 (can use placeholder)
- Tool accounts block tutorial tasks (not in this phase)

## Blockers

- None identified for Phase 2 tasks
- External blockers recorded separately in blockers.md

