import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://vrajshah2311.github.io/Ruju-Vraj-/ on GitHub Pages,
// so assets must be referenced under that sub-path.
// https://vite.dev/config/
export default defineConfig({
  base: '/Ruju-Vraj-/',
  plugins: [react()],
})
