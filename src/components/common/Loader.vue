<template>
  <div v-if="loading" class="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
    <div class="flex flex-col items-center gap-4">
      <div class="relative w-16 h-16">
        <div class="absolute inset-0 border-4 border-sky-200 rounded-full"></div>
        <div class="absolute inset-0 border-4 border-sky-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <p class="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>

