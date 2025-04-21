import { defineConfig } from 'vite'
import { reactRouter } from "@react-router/dev/vite";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [reactRouter()],
    base: '/',
    preview: {
      port: 3000
    }
  }
})
