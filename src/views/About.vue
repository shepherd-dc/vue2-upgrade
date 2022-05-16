<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ count }}</div>
    <button @click="add">加1</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    const count = computed(() => store.state.count)

    function add () {
      // 调用mutations中的add方法
      store.commit('add')
    }

    return {
      count,
      add
    }
  }
}
</script>
