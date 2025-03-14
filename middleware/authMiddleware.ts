import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';
import { useAuthStore } from '../store/authStore.js'

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("🔍 OAuth Middleware Triggered");

  const authStore = useAuthStore();

  // Correct getter usage (Pinia getters are reactive properties)
  if (!authStore.isAuthenticated && to.path !== '/login') {
    console.warn("❌ No token found. Redirecting to login...");
    return navigateTo('/login');
  }

  console.log("✅ User is authenticated");
});
