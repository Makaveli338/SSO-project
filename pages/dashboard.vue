<template>
  <Header :isLoggedIn="true" />

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

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8 w-full container mx-auto">
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
import Header from "~/components/header.vue";

import DetailsCard from "~/components/DetailsCard.vue";
</script>
