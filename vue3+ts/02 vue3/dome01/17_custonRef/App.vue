<template>
  <div>
    <input type="text" v-model="m1">
    <p>{{ m1 }}</p>
  </div>
</template>
<!-- customRef -->
<script lang="ts" setup>
import { ref, customRef } from "vue"
function useDebouncedRef<T>(val: T, delay = 200) {
  let timeout: number
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return val
      },
      set(newValue: T) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          val = newValue
          trigger()
        }, delay);
      }
    }
  })
}

// let m1 = ref(1)
let m1 = useDebouncedRef(1, 2000)
</script>

<style lang="less" scoped>

</style>