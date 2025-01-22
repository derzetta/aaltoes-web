import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    base: '/',
    preview: {
      port: 3000
    },
    define: {
      'process.env.POSTGRES_URL': JSON.stringify(env.POSTGRES_URL)
    }
  }
})
