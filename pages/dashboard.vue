<template>
  <Header />
  <div class=" flex gap-4">
        <button> 
            <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.135986" width="56" height="56" rx="28" fill="#0047BA"/>
<path d="M33.5639 32.1553L37.4186 36.0091L36.1451 37.2826L32.2913 33.4279C30.8574 34.5774 29.0738 35.2026 27.236 35.2C22.7648 35.2 19.136 31.5712 19.136 27.1C19.136 22.6288 22.7648 19 27.236 19C31.7072 19 35.336 22.6288 35.336 27.1C35.3386 28.9378 34.7134 30.7214 33.5639 32.1553ZM31.7585 31.4875C32.9007 30.3129 33.5386 28.7384 33.536 27.1C33.536 23.6188 30.7163 20.8 27.236 20.8C23.7548 20.8 20.936 23.6188 20.936 27.1C20.936 30.5803 23.7548 33.4 27.236 33.4C28.8744 33.4026 30.4489 32.7647 31.6235 31.6225L31.7585 31.4875Z" fill="white"/>
</svg>
        </button>
        <button>
            <svg width="57" height="58" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.135986" width="56.864" height="57.2" rx="28.432" fill="#0047BA"/>
<path d="M18.536 32.8V18.4H16.136V16H19.736C20.0542 16 20.3595 16.1264 20.5845 16.3515C20.8096 16.5765 20.936 16.8817 20.936 17.2V31.6H35.8616L38.2616 22H23.336V19.6H39.8C39.9824 19.6 40.1624 19.6416 40.3263 19.7216C40.4902 19.8016 40.6338 19.9179 40.746 20.0617C40.8582 20.2055 40.9362 20.373 40.9739 20.5515C41.0117 20.7299 41.0083 20.9147 40.964 21.0916L37.964 33.0916C37.899 33.3511 37.7491 33.5814 37.5382 33.746C37.3273 33.9106 37.0675 34 36.8 34H19.736C19.4177 34 19.1125 33.8736 18.8875 33.6485C18.6624 33.4235 18.536 33.1183 18.536 32.8ZM20.936 41.2C20.2995 41.2 19.689 40.9471 19.2389 40.4971C18.7888 40.047 18.536 39.4365 18.536 38.8C18.536 38.1635 18.7888 37.553 19.2389 37.1029C19.689 36.6529 20.2995 36.4 20.936 36.4C21.5725 36.4 22.183 36.6529 22.633 37.1029C23.0831 37.553 23.336 38.1635 23.336 38.8C23.336 39.4365 23.0831 40.047 22.633 40.4971C22.183 40.9471 21.5725 41.2 20.936 41.2ZM35.336 41.2C34.6995 41.2 34.089 40.9471 33.6389 40.4971C33.1888 40.047 32.936 39.4365 32.936 38.8C32.936 38.1635 33.1888 37.553 33.6389 37.1029C34.089 36.6529 34.6995 36.4 35.336 36.4C35.9725 36.4 36.583 36.6529 37.033 37.1029C37.4831 37.553 37.736 38.1635 37.736 38.8C37.736 39.4365 37.4831 40.047 37.033 40.4971C36.583 40.9471 35.9725 41.2 35.336 41.2Z" fill="white"/>
</svg>

            </button>

          <button
              class="btn-secondary" @click="logout"
          >
              Log out
          </button>
          </div>
  <div class="px-6">
    <div
      class="rounded-[12px] py-8 px-20 bg-cover bg-no-repeat container mx-auto bg-[url('/welcome.png')]"
    >
      <div>
        <p class="font-semibold text-white text-3xl leading-[24.2px]">
          Welcome back, John Doe
        </p>
        <p class="font-light text-white text-xl py-2">
          Shop from our massive catalogue of backpacks for various seasons and
          moods
        </p>
        <div class="">
          <button class="btn-primary">Browse products</button>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8 px-6 w-full container mx-auto">
    <DetailsCard
      img="/bag1.png"
      bgColor="bg-gradient-to-r from-gray-200 to-gray-100"
      heading="CARGO BACKPACKS"
      price="KES 4,000"
    />
    <DetailsCard
      img="/bag2.png"
      bgColor="bg-gradient-to-r from-orange-100 to-gray-100"
      heading="SQUARE BACKPACKS"
      price="KES 8,000"
    />
    <DetailsCard
      img="/bag3.png"
      bgColor="bg-gradient-to-r from-gray-100 to-blue-100"
      heading="CASUAL BACKPACKS"
      price="KES 3,500"
    />
  </div>
</template>

<script setup>
import Header from '~/components/header.vue';
import DetailsCard from "~/components/DetailsCard.vue";
import { useFetch } from '#app';
const logout = () => {
  localStorage.removeItem('access_token');
  window.location.href = '/';
};

{
  if (accessToken) {
    useFetch('/api/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).then((response) => {
      console.log('User info:', response.data);
    }).catch((error) => {
      console.error('Error fetching user info:', error);
    });
  } else {
    console.error('No access token found');
  }
};
</script>
