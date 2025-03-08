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
    body: { code: code.value, state: state.value }
  }).then((response) => {
    console.log("API Response:", response.data);
    if (response.data.accessToken) {
      localStorage.setItem('access_token', response.data.accessToken);
      router.push('/dashboard');
    } else {
      console.error("API did not return access token:", response.data);
      router.push('/error');
    }
  }).catch((error) => {
    console.error("Error during token exchange:", error);
    router.push('/error');
  });
}
</script>
