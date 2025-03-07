import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Change from '/' to './'
  build: {
    assetsInlineLimit: 0, // Ensures all assets are properly resolved
  },
});
