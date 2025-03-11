<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useFetch } from '#app';
import { ref } from 'vue';

const router = useRouter();
const route = useRoute();
const code = ref(route.query.code);
const state = ref(route.query.state);

if (!code.value) {
  console.error("No authorization code found in URL!");
  router.push('/error');
} else {
  console.log("Authorization code:", code.value);

  useFetch('/api/exchangecode', {
  method: 'POST',
  body: { code, state }
}).then((response) => {
  console.log("Raw API Response:", response); // Check what you actually receive

  if (response.data && response.data.accessToken) {
    console.log("✅ Access token received:", response.data.accessToken);
    localStorage.setItem('access_token', response.data.accessToken);
    router.push('/dashboard');
  } else {
    console.error(" API did not return access token. Full response:", response.data);
    router.push('/error');
  }
}).catch((error) => {
  console.error("API Fetch Error:", error);
  router.push('/error');
});
}
</script>

<template>
  <div>
    <h1>Redirecting...</h1>
  </div>
</template>