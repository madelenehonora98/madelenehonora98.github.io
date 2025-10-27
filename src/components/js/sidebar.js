import { ref, onMounted, watch } from "vue"
import { useRouter } from "vue-router"
import { usePageStore } from "@/stores/page"

export default {
  name: "Sidebar",
  setup() {
    const isExpanded = ref(false)
    const { updateLoading } = usePageStore()
    const router = useRouter()

    const toggleSidebar = () => {
      isExpanded.value = !isExpanded.value
    }

    const isMobile = () => {
      return window.innerWidth < 768
    }

    const collapseOnMobile = () => {
      if (isMobile()) {
        isExpanded.value = false
      }
    }

    onMounted(() => {
      updateLoading(false)
    })

    watch(() => router.currentRoute.value.path, () => {
      collapseOnMobile()
    })

    return {
      isExpanded,
      toggleSidebar,
    }
  },
}
