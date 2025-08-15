// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Attempt to infer the correct base path for GitHub Pages.
// If deploying to <user>.github.io (root pages site) we keep base as '/'.
// Otherwise for a project page we set base to '/repo-name/'.
// You can override by setting BASE_PATH env var (e.g. BASE_PATH=/custom/).
function computeBase() {
  if (process.env.BASE_PATH) return process.env.BASE_PATH
  const repo = process.env.GITHUB_REPOSITORY // e.g. user/repo
  if (!repo) return '/'
  const [, name] = repo.split('/')
  if (!name) return '/'
  if (name.endsWith('.github.io')) return '/'
  return `/${name}/`
}

export default defineConfig({
  base: computeBase(),
        plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})