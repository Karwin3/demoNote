<template>
  <div>
    <p :style="{ color }">GrandSon</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject } from "vue"

const color: string | undefined = inject('color')

</script>

<style lang="less" scoped>

</style>