import components from '@/data/components'
import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { usePageStore } from '@/stores/page'
import { storeToRefs } from 'pinia'

export default {
  components: {
    Sidebar: defineAsyncComponent(components.Sidebar),
    Loader: defineAsyncComponent(components.Loader),
    LandingPage: defineAsyncComponent(components.LandingPage)
  },
  setup() {
    const router = useRouter()
    const pageStore = usePageStore()
    const { isLoading, isLanding } = storeToRefs(usePageStore())
    const { updateLoading, updateLanding } = pageStore

    // methods
    const enterPage = () => {
      updateLoading(true)
      updateLanding(false)
    }

    router.beforeEach(() => {
      updateLoading(true)
    })

    router.afterEach(() => {
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
