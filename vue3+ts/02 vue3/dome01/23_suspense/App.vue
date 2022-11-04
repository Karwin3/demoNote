<template>
  <div>
    <Suspense>
      <template v-slot:default>
        <AsyncAddress />
      </template>
      <template v-slot:fallback>
        <h1>LOADING...</h1>
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import AsyncAddress from './components/AsyncAddress.vue'

</script>
<style scoped>

</style>