import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';  // Исправленный импорт плагина

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Автоматическое обновление Service Worker
      devOptions: {
        enabled: true, // Включение PWA в режиме разработки
      },
      workbox: {
        runtimeCaching: [
          {
            // Кэширование изображений
            urlPattern: /\.(?:png|jpg|jpeg|svg|webp|avif)$/, // Исправленное регулярное выражение (две вертикальные черты || были лишними)
            handler: 'CacheFirst', // Использовать кэш в первую очередь
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 50, // Максимальное количество изображений
                maxAgeSeconds: 30 * 24 * 60 * 60, // Кэширование на 30 дней
              },
            },
          },
        ],
      },
    }),
  ],
});
