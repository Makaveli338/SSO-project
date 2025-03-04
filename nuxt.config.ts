export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss', 
  ],

  compatibilityDate: '2025-03-03',
});