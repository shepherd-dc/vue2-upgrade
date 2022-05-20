<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <div>{{ count }}</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    const store = useStore()
    const count = computed(() => store.state.count)
    return {
      count
    }
  }
}
</script>
