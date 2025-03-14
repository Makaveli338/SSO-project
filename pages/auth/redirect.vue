<template>
  <div>
    <h1>Redirecting...</h1>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useFetch } from '#app';
import { ref, onMounted } from 'vue';
import { useAuthStore } from '~/stores/accesstoken';

// Define page metadata to use the 'oauth' middleware
definePageMeta({ middleware: 'oauth' });

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const code = ref(route.query.code);
const state = ref(route.query.state);

// Function to handle the redirection after token exchange
const exchangeCode = async () => {
  if (!code.value) {
    console.error("❌ No authorization code found in URL!");
    router.push('/error');
    return;
  }

  console.log("🔍 Authorization code:", code.value);
  authStore.setAuthCode(code.value);

  try {
    // Making a POST request to exchange the authorization code for an access token
    const { data, error } = await useFetch('/api/exchangecode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { code: code.value, state: state.value },
    });

    if (error.value) {
      console.error("❌ API Error:", error.value);
      throw new Error(error.value);
    }

    if (data.value?.access_token) {
      console.log("✅ Access token received:", data.value.access_token);
      authStore.setAccessToken(data.value.access_token);

      const redirectUrl = new URLSearchParams(window.location.search).get('state') || '/dashboard';
      window.location.href = redirectUrl;
    } else {
      throw new Error("No access token received");
    }
  } catch (err) {
    console.error("❌ API Fetch Error:", err);
    router.push('/error');
  }
};

onMounted(exchangeCode);
</script>