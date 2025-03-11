<template>
    <div class="text-center p-10">
      <h1 class="text-4xl text-red-500">Authentication Failed</h1>
      <p class="text-lg">There was an error during authentication. Please try again.</p>
      <button @click="$router.push('/home')" class="mt-4 bg-blue-500 text-white p-2 rounded">Go Home</button>
    </div>
  </template>