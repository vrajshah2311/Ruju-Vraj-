import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// In dev the site is served from the root (http://localhost:5173/).
// For the production build it must be served from the GitHub Pages
// sub-path: https://vrajshah2311.github.io/Ruju-Vraj-/
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Ruju-Vraj-/' : '/',
  plugins: [react()],
}))
