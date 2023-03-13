// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '##': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.mjs',
    ],
  },
  build:{
    lib: {
      name:'vite-verify-treeshaking-demo', // not sure what this adds
      // name:'random_name', // doesn't change the name...
      // Could also be a dictionary or array of multiple entry points
      entry: fileURLToPath(new URL('./src/index.mjs', import.meta.url))
    }
  },
})
