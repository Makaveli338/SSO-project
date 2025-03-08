import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
  nitro: {
    preset: 'node-server', // Ensure Nitro is set up for a Node.js server
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  compatibilityDate: '2025-03-03',
});