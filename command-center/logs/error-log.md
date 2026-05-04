# Error Log

| Date | Error | Resolution |
|---|---|---|
| 2026-05-02 | Root workspace dev launch passed hostname/port as positional args, causing Next to treat `127.0.0.1` as a project directory | Started dev server from `apps/web` with explicit flags |
| 2026-05-02 | Dev server returned 500 after production build rewrote `.next` chunks while dev server was running | Restarted dev server and route smoke checks passed |
| 2026-05-02 | PowerShell route check used unsupported `-SkipHttpErrorCheck` parameter | Re-ran route checks with compatible error handling |
| 2026-05-02 | First Vercel deploy failed because folder-derived project name had spaces/uppercase | Deployed from a local staging folder named `ai-agent-skill-opc` |
| 2026-05-02 | Vercel deploy failed because `.next` was expected at repo root | Added `outputDirectory: "apps/web/.next"` to `vercel.json` |
| 2026-05-02 | One redeploy refresh command ran from the staging folder and targeted a nested staging path | Re-ran staging refresh with absolute root and confirmed 61-route production build |
