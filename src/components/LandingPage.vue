<template>
  <div class="text-center justify-center items-center w-100 min-h-screen flex flex-col">
    <div class="text-center mb-8">
      <span class=" text-2xl text-sky-800">Hi! My name is</span>
      <h1 class="text-4xl font-extrabold text-sky-600 mb-6 tracking-wide">
        Madelene Honora
      </h1>
      <button class="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition-colors" @click="$emit('enterPage')">Get to know me</button>
    </div>
  </div>
</template>