<template>
  <div>{{ count }}</div>
  <button @click="updateCount">+</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    // 变量
    // ref 响应式数据 一般用来定义一个基本类型的响应式数据
    let count = ref(0)
    function updateCount() {
      count.value++
    }
    return {
      count,
      updateCount
    }
  }
})
</script>
