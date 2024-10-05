import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
// https://vite.dev/guide/build.html#library-mode
export default defineConfig({
  build: { 
    lib: { 
      entry: resolve(__dirname, 'src/main.ts'), 
      formats: ['es', 'cjs'] 
    } 
  },
  resolve: { 
    alias: { 
      src: resolve('src/') 
    } 
  },
  plugins: [
    dts({ outDir: 'dist/types', insertTypesEntry: true })
  ],
})