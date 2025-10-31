import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePageStore = defineStore('page', () => {
  //state
  const isLoading = ref(false)

  // setter
  const updateLoading = value => {
    isLoading.value = value
  }

  return {
    isLoading,
    updateLoading
  }
})
