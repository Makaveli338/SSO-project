<template>
  <div>
    <h1>Redirecting...</h1>
    <p v-if="loading">Exchanging authorization code for access token...</p>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useFetch } from '#app';
import { ref, onMounted } from 'vue';
import { useAuthStore } from '~/store/authStore';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const loading = ref(false);
const error = ref(''); // Initialize error here

const exchangeCode = async () => {
  if (!route.query.code) {
    error.value = "❌ No authorization code found in URL!";
    console.error(error.value);
    router.push('/error');
    return;
  }

  
  try {
    loading.value = true;
    error.value = ''; // Reset error before making the request
    
    // Log the request payload
    
    authStore.setAuthCode(route.query.code);
    console.log("🔍 Authorization code set in authStore.");
    console.log("🔍 Sending POST request to /api/exchangecode with code:", route.query.code, "and state:", route.query.state);

    // Make a POST request to the server
    const { data, error: fetchError } = await useFetch('/api/exchangecode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { code: route.query.code, state: route.query.state },
    });

    // Log the server response
    console.log("🔍 Server response:", data.value);

    if (fetchError.value) {
      throw new Error(fetchError.value.message || "Failed to exchange code for token");
    }

    if (data.value?.access_token) {
      console.log("✅ Access token received:", data.value.access_token);
      authStore.setAccessToken(data.value.access_token);
      console.log("🔍 Access token set in authStore.");

      const redirectUrl = route.query.state || '/dashboard';
      console.log("🔍 Redirecting to:", redirectUrl);
      router.push(redirectUrl);
    } else {
      throw new Error("No access token received from the server");
    }
  } catch (err) {
    error.value = err.message || "Failed to exchange code for token"; // Set error message
    console.error("❌ Error during token exchange:", err);
    router.push('/error');
  } finally {
    loading.value = false;
  }
};

onMounted(exchangeCode);
</script>

<style scoped>
.error {
  color: red;
}
</style>