<template>
  <div>
    <p>{{ color }}</p>
    <button @click="color = 'red'">red</button>
    <button @click="color = 'yellow'">yellow</button>
    <button @click="color = 'green'">green</button>
    <hr>
    <Child />
  </div>
</template>
<!-- provide inject -->
<script lang="ts" setup>
import { ref, provide } from "vue"
import Child from "./components/Child.vue";

const color = ref('red')

provide('color', color)
</script>

<style lang="less" scoped>

</style>