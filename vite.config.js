import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TP_SITIO_VENTAS_MONTENEGRO_LUCERO/',
  server: {
    historyApiFallback: true
  },
  
})
