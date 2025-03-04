<template>
    <div
      :class="[bgColor, 'rounded-3xl shadow-md p-6 flex flex-col h-full justify-between']"
    >
      <!-- Text Content -->
      <div>
        <h2 class="text-lg font-bold">{{ heading }}</h2>
        <p class="text-gray-600">{{ price }}</p>
        <p class="text-blue-600 font-semibold cursor-pointer hover:underline">
          ADD TO CART
        </p>
      </div>
  
      <!-- Image Container (Ensures Consistency) -->
      <div class="flex-grow flex items-end">
        <img :src="img" alt="Backpack" class="w-full object-cover rounded-b-3xl">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      img: { type: String, required: true },
      bgColor: { type: String, default: "bg-gray-100" },
      heading: { type: String, required: true },
      price: { type: String, required: true },
    },
  };
  </script>
  
  