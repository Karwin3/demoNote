<template>
  <!-- 需求：点击页面出现x y 坐标 -->
  <div>hook函数</div>
  x:{{ x }} y:{{ y }}
  <hr />
  <div v-if="loading">loading...</div>
  <div v-else-if="errorMsg">{{ errorMsg }}</div>
  <div v-else>{{ data }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useRequest from './hooks/useRequest'
export default defineComponent({
  name: 'App',
  setup() {
    const { x, y } = useMousePosition()
    const { loading, data, errorMsg } = useRequest('./data/address.json')
    return { x, y, loading, data, errorMsg }
  }
})
</script>

<style>

</style>
