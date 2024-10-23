import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Learn-React/docs/Tic-Tac-Toe/',
  plugins: [react()]
})
