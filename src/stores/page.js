import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePageStore = defineStore('page', () => {
  //state
  const isLoading = ref(false)
  const isLanding = ref(true)

  // setter
  const updateLoading = value => {
    isLoading.value = value
  }

  const updateLanding = value => {
    isLanding.value = value
  }

  return {
    isLoading,
    isLanding,
    updateLoading,
    updateLanding
  }
})
