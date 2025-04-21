import { defineConfig } from 'vite'
import { reactRouter } from "@react-router/dev/vite";
import { vercelPreset } from '@vercel/react-router/vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [reactRouter()],
    base: '/',
    preview: {
      port: 3000
    },
    presets: [vercelPreset()],
  }
})
