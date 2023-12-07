// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon-180x180.png', 'maskable-icon-512x512.png'],
      manifest: {
        name: 'Novaroma Tarefas',
        short_name: 'Novaroma Tarefas',
        description: 'Gerenciador de Tarefas Novaroma',
        theme_color: '#ffffff',
        display: "standalone",
        icons: [
          {
            src: '/images/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        screenshots: [
          {
            src: "/images/screenshots/login-screenshot.png",
            type: "image/png",
            sizes: "1440x2960",
            form_factor: "narrow"
          },
          {
            src: "/images/screenshots/home-screenshot.png",
            type: "image/png",
            sizes: "1440x2960",
            form_factor: "narrow"
          },
          {
            src: "/images/screenshots/tasks-screenshot.png",
            type: "image/png",
            sizes: "1440x2960",
            form_factor: "narrow"
          },
          {
            src: "/images/screenshots/add-task-screenshot.png",
            type: "image/png",
            sizes: "1440x2960",
            form_factor: "narrow"
          },
          {
            src: "/images/screenshots/home-wide-screenshot.png",
            type: "image/png",
            sizes: "1920x1080",
            form_factor: "wide"
          },

        ]
      }
    }),

    vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})
