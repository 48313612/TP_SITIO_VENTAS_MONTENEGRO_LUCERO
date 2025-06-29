import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true
  },
  base: 'https://github.com/48313612/TP_SITIO_VENTAS_MONTENEGRO_LUCERO/'
})
