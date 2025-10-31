import { useRouter } from 'vue-router'

export default {
  name: 'LandingPage',
  setup() {
    const router = useRouter()

    // methods
    const enterPage = () => {
      router.push('/about')
    }

    return {
      enterPage
    }
  }
}
