import { defineConfig, mergeCatalogRules } from 'pncat'

export default defineConfig({
  exclude: ['@types/vscode'],
  catalogRules: mergeCatalogRules([]),
  postRun: 'eslint --fix "**/package.json" "**/pnpm-workspace.yaml"',
})
