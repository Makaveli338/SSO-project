<template>
  <!-- Hero section -->

  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <div>

    <Header :isLoggedIn="true " />

    <div class="container mx-auto py-8 flex flex-col items-center text-center">
      <p class="font-semibold text-6xl">Welcome to pike store</p>
      <p class="mt-2 text-[18px]">
        Your one-stop shop for everything chic, comfortable, affordable and
        fashionable
      </p>
      <button class="btn-primary">
        Browse Products
      </button>
    </div>

    <div class="mx-6">
      <div
        class="bg-[#DFE6F3] rounded-[12px] py-44 px-20 bg-right bg-cover md:bg-contain bg-no-repeat container mx-auto md:bg-[url('/camper.png')]"
      >
        <div class="   relative z-[10]">
          <div class="flex flex-col gap-2">
            <p
              class="font-bold text-[#0047BA] uppercase text-xl leading-[24.2px]"
            >
              Sonic Backpacks
            </p>
            <p class="font-bold text-5xl mt-3">HAPPY CAMPER</p>
            <p class="text-lg mt-3">
              Comfort inside a fun-sized backpack, suitable for road trips <br />
              and camp outings
            </p>
  
            <div class="">
              <button class="btn-primary">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div
      class="rounded-[12px] h-[585px] w-[90%] mx-auto bg-[#DFE6F3] mb-14 mt-14 flex relative"
    >
      <div class="content-end ml-16 absolute">
        <p class="font-bold text-[#0047BA] mt-44 text-2xl">Sonic Backpacks</p>
        <p class="font-bold text-5xl mt-3">HAPPY CAMPER</p>
        <p class="text-lg mt-3">
          Comfort inside a fun-sized backpack, suitable for road trips <br />
          and camp outings
        </p>
        <button class="btn-primary">
          Shop now
        </button>
      </div>

      <img class="right-0 absolute" src="public/unsplash.svg" />
    </div> -->
  </div>
</template>

<script setup>
import Header from '~/components/header.vue';
</script>

<style scoped>
.custom-overlay {
  position: relative;
}

.custom-overlay::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}
</style>
