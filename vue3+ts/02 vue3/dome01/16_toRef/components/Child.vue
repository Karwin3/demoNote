<template>
  <div>
    Child
    <p>age: {{ props.age }}</p>
    <p>length: {{ length }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, toRef, computed } from "vue"
// name: 'Child'
function getLength(age: Ref) {
  return computed(() => {
    return age.value.toString().length
  })
}
const props = defineProps({
  age: {
    type: Number,
    required: true
  }
})
const length = getLength(toRef(props, 'age'))

</script>

<style lang="less" scoped>

</style>