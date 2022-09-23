import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'
console.log(dynamicImportVars.default)

export default defineConfig({
  server: { port: 8080 },
  build: {
    outDir: 'docs',
    rollupOptions: {
      plugins: [dynamicImportVars.default({})],
    },
  },
  base: '',
  plugins: [tsconfigPaths()],
})
