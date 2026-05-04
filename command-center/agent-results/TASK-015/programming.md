# TASK-015 Programming Result

## Summary

Added environment-driven Google Search Console verification metadata support.

## Files Changed

- `apps/web/src/app/layout.tsx`

## Behavior

- Uses `GOOGLE_SITE_VERIFICATION` when set.
- Falls back to `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` when set.
- Emits no Google verification metadata when no token exists.

## Status

DONE_NEEDS_USER_TOKEN
