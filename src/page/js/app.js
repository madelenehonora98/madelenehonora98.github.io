import { defineAsyncComponent } from 'vue'
import components from '@/data/components'

export default {
  components: {
    Sidebar: defineAsyncComponent(components.Sidebar),
    About: defineAsyncComponent(components.About),
    Home: defineAsyncComponent(components.Home)
  }
}
