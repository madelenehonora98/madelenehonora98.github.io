import { usePageStore } from '@/stores/page'
import { useRouter } from 'vue-router'

export default {
  name: 'LandingPage',
  setup() {
    const router = useRouter()
    const { updateLoading, updateLanding } = usePageStore()

    // methods
    const enterPage = () => {
      updateLoading(true)
      updateLanding(false)
      router.push('/about')
    }

    return {
      enterPage
    }
  }
}
