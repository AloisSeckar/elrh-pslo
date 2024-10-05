import { defineConfig } from 'vite'
import { resolve } from 'path'

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
})