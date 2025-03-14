import { defineNuxtPlugin } from 'nuxt/app';  // ✅ Correct import
import { createPinia } from 'pinia';

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
});
