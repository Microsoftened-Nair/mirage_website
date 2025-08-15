# Deployment Guide: GitHub Pages (Vite + React)

This project is configured for seamless deployment to **GitHub Pages** using **GitHub Actions**.

## 1. Repository Setup
1. Create a GitHub repository (if not already):
   - For a user/organization site: `<username>.github.io`
   - For a project site: any repo name, e.g. `mirage_website`
2. Push this project to the repo root (not a subfolder).

## 2. Branch & Pages Settings
1. Default branch should be `main` (or `master`). The workflow listens to both.
2. In GitHub repo settings:
   - Go to: Settings → Pages
   - Set **Source** = GitHub Actions (no need to pick a branch after first successful deploy).

## 3. How Base Path Works
Vite needs `base` set correctly so asset paths work under `/repo-name/`.
We added dynamic logic in `vite.config.js`:
- If repo name ends with `.github.io` → base = `/`
- Else → base = `/<repo-name>/`
- You can override with env var `BASE_PATH` (or GitHub secret `BASE_PATH_OVERRIDE`).

## 4. Automatic Deploy (CI)
The workflow file: `.github/workflows/deploy.yml`
It triggers on pushes to `main` or `master` and publishes `/dist` to Pages.

### First Deploy Steps
1. Commit & push all changes.
2. Wait for Actions to finish (check "Actions" tab).
3. Visit the URL shown in the deploy job output (also appears under Settings → Pages).

## 5. Manual Trigger
You can also trigger manually:
- Actions → Deploy to GitHub Pages → Run workflow.

## 6. Local Test of Production Build
```
npm run build
npm run preview   # Vite preview server
# OR
npm run deploy:local  # build then serve using 'serve'
```

## 7. Custom Domain (Optional)
1. Add a `CNAME` file inside `public/` with your domain (e.g. `example.com`).
2. Configure DNS A/AAAA records to GitHub Pages IPs.
3. Re-run deployment.

## 8. Cache Busting / Updates
Vite outputs hashed assets—normal pushes will invalidate old bundles automatically.

## 9. Common Issues
| Symptom | Cause | Fix |
|---------|-------|-----|
| 404 on refresh of a route | SPA needs fallback | Add a `404.html` copying `index.html` (Pages quirk) |
| Assets 404 | Wrong base | Ensure `base` matches repo path |
| Old version showing | Browser cache | Hard refresh (Ctrl+Shift+R) |
| Workflow fails at build | Lockfile mismatch | Delete `package-lock.json` and regenerate with `npm ci` |

### SPA 404 Fallback
Already automated: a `postbuild` script copies `dist/index.html` to `dist/404.html` so client-side routes work on refresh.
If you need cross-platform (Windows) support, replace the shell copy with a tiny Node script.

## 10. Cross-platform 404 Copy (Optional)
Create `scripts/copy404.mjs` and change postbuild to `node scripts/copy404.mjs` if Windows support is needed. Ask and I can add it.

---
Need more help? Open an issue or ask your assistant.
