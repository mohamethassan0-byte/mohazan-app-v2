import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'MOHAZAN - Global Marketplace',
        short_name: 'MOHAZAN',
        description: 'Shop global products, delivered fast.',
        theme_color: '#1F3A34',
        background_color: '#F2E9D8',
        display: 'standalone',
        start_url: '/wwww/',
        scope: '/wwww/',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  base: '/wwww/',
})
