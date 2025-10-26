import { ref, onMounted } from "vue"
import { usePageStore } from "@/stores/page"

export default {
  name: "Sidebar",
  setup() {
    const isExpanded = ref(true)
    const { updateLoading } = usePageStore()

    const toggleSidebar = () => {
      isExpanded.value = !isExpanded.value
    }

    onMounted(() => {
      updateLoading(false)
    })

    return {
      isExpanded,
      toggleSidebar,
    }
  },
}
