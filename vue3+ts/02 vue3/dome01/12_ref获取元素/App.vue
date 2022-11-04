<template>
  <div>
    <input type="text" ref="inputRef">
  </div>
</template>

<script lang="ts" setup>
// 1. 页面加载完成后，文本框自动获取焦点
import { ref, onMounted } from "vue"
const inputRef = ref<HTMLElement | null>(null)
onMounted(() => {
  inputRef.value && inputRef.value.focus()
})
</script>

<style lang="less" scoped>

</style>