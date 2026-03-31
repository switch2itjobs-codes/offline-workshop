import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const externalAssetsDir =
  '/Users/rahul/.cursor/projects/Users-rahul-Workshop/assets'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [projectRoot, externalAssetsDir],
    },
  },
})
