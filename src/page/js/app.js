import components from '@/data/components'
import { computed, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePageStore } from '@/stores/page'
import { storeToRefs } from 'pinia'

export default {
  components: {
    Sidebar: defineAsyncComponent(components.Sidebar),
    Loader: defineAsyncComponent(components.Loader),
    LandingPage: defineAsyncComponent(components.LandingPage)
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const pageStore = usePageStore()
    const { isLoading } = storeToRefs(usePageStore())
    const { updateLoading } = pageStore

    // methods

   router.beforeEach((to) => {
      if (to.meta?.isLanding) {
        return
      }
      updateLoading(true)
    })

    router.afterEach((to) => {
      setTimeout(() => {
        updateLoading(false)
      }, 150)
    })


    return {
      route,
      isLoading
    }
  }
}
