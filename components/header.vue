<template>
    <div class="">
    <div
      class="bg-black text-white flex font-normal text-xs py-4 px-6 gap-2 justify-center"
    >
      <div class="container mx-auto flex items-center justify-center">
        <p>20% SITEWIDE PROMO</p>
        <svg
          class="my-auto"
          width="23"
          height="2"
          viewBox="0 0 23 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="23" y2="1" stroke="white" />
        </svg>
        <p>PROMO CODE VALUE45</p>
        <svg
          class="my-auto"
          width="23"
          height="2"
          viewBox="0 0 23 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="23" y2="1" stroke="white" />
        </svg>
        <p>20% SITEWIDE PROMO</p>
        <svg
          class="my-auto"
          width="23"
          height="2"
          viewBox="0 0 23 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="23" y2="1" stroke="white" />
        </svg>
        <p>PROMO CODE VALUE45</p>
        <svg
          class="my-auto"
          width="23"
          height="2"
          viewBox="0 0 23 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="23" y2="1" stroke="white" />
        </svg>
        <p>20% SITEWIDE PROMO</p>
        <svg
          class="my-auto"
          width="23"
          height="2"
          viewBox="0 0 23 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="23" y2="1" stroke="white" />
        </svg>
        <p>PROMO CODE VALUE45</p>
        <svg
          class="my-auto"
          width="23"
          height="2"
          viewBox="0 0 23 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="23" y2="1" stroke="white" />
        </svg>
        <p>20% SITEWIDE PROMO</p>
        <svg
          class="my-auto"
          width="23"
          height="2"
          viewBox="0 0 23 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="23" y2="1" stroke="white" />
        </svg>
        <p>PROMO CODE VAL</p>
      </div>
    </div>

    <div class="container mx-auto py-4 px-6 flex items-center">
      <div class="">
        <img src="public/value8 group.svg" />
      </div>
      
      <div class="mx-auto gap-6 flex">
        <a href="#" class="link active">Discover</a>
        <a href="#" class="link">About</a>
        <a href="#" class="link">Contact us</a>
        <a href="#" class="link">Browse</a>
      </div>
      
      <button 
        v-if="!isLoggedIn"
        class="btn-secondary"
      >
      <NuxtLink href="https://test.sso.pesaflow.com/en/oauth/authorize?response_type=code&client_id=24f2b7cfa592cf8248345a9766493c7e&redirect_uri=http://localhost:3000/auth/redirect&state=dashboard" external>
          Log in
        </NuxtLink>
      </button>

      
      </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoggedIn = ref(false);

onMounted(() => {
  isLoggedIn.value = !!localStorage.getItem('access_token');
});
</script>