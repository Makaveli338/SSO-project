<template>
  <div>
    <p class="p-8 text-[#0047BA] text-6xl">Redirecting...</p>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useFetch } from '#app';


const router = useRouter();
const route = useRoute();
const code = route.query.code;
const state = route.query.state;

if (code) {
  useFetch('/api/exchangecode', {
    params: { code, state }
  }).then((response) => {
    const { accessToken } = response.data;
    localStorage.setItem('access_token', accessToken);
    router.push('/dashboard');
  }).catch((error) => {
    console.error('Error during token exchange:', error);
    router.push('/error');
  });
} else {
  console.error('No authorization code found');
  router.push('/error');
}



</script>