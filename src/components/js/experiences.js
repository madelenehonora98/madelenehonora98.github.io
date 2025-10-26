import { ref } from 'vue'

export default {
  name: 'Experiences',
  setup() {
    const expandedExp = ref({
      blibli: false,
      geekseat: false
    })

    // methods
    const expandSection = section => {
      expandedExp.value[section] = !expandedExp.value[section]
    }

    return {
      expandedExp,
      expandSection
    }
  }
}
