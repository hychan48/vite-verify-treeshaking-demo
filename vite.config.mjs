// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env': {} },
  resolve: {
    alias: {
      //https://vitejs.dev/guide/build.html#library-mode
      '##': fileURLToPath(new URL('./src', import.meta.url)),
      '##cwd': fileURLToPath(new URL('./',import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.mjs',
    ],
  },
  // build:[
  build:{
    lib:{ name:'vite-verify-treeshaking-demo', // not sure what this adds
        // name:'random_name', // doesn't change the name...
        // Could also be a dictionary or array of multiple entry points
        // entry: fileURLToPath(new URL('./src/index.mjs', import.meta.url))
        entry:[ //"entry" can be a dictionary or array of multiple entry points
          fileURLToPath(new URL('./src/index.mjs', import.meta.url)),
          fileURLToPath(new URL('./src/nested_function_static_example.mjs', import.meta.url)),
          fileURLToPath(new URL('./src/location_old.mjs', import.meta.url)),
          // fileURLToPath(new URL('./src/nested_function_static_example.mjs', import.meta.url)),
        ]
      }
},
    // {lib: {
    //   name:'vite-verify-treeshaking-demo', // not sure what this adds
    //   // name:'random_name', // doesn't change the name...
    //   // Could also be a dictionary or array of multiple entry points
    //   entry: fileURLToPath(new URL('./src/index.mjs', import.meta.url))
    // }}
  // ],//build
})
