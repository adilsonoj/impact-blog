import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss'; 
import tailwindConfig from './tailwind.config'; 

export default defineConfig({
  css: {
    postcss: './postcss.config.mjs', 
  },
  plugins: [
    

  ],
});
