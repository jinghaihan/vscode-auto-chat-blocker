import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  external: ['vscode'],
  shims: false,
  dts: false,
  clean: true,
  sourcemap: true,
})
