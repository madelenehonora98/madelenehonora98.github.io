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
    const { isLoading, isLanding } = storeToRefs(usePageStore())
    const { updateLoading, updateLanding } = pageStore

    // computed
    const onLandingPage = computed(() => route.path === '/')

    // methods
    const enterPage = () => {
      updateLoading(true)
      updateLanding(false)
    }

    router.beforeEach(() => {
      if (onLandingPage.value) {
        return
      }
      updateLoading(true)
    })

    router.afterEach(() => {
      if (onLandingPage.value) {
        return
      }

      setTimeout(() => {
        updateLoading(false)
      }, 300)
    })

    return {
      isLoading, 
      isLanding,
      enterPage
    }
  }
}
