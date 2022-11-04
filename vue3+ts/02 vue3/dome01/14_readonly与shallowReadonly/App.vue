<template>
  <div>
    <p>readonly</p>
    {{ m1 }} <br />
    <p>shallowRef</p>
    {{ m2 }} <br />
    <hr>
    <button @click="test">test</button>
  </div>
</template>

<!-- readonly shallowReadonly -->
<script lang="ts" setup>
import { ref, readonly, shallowReadonly, reactive } from "vue"
const m1 = readonly(ref({
  name: 'jk1',
  hobby: {
    name: 'none1'
  }
}))
const m2 = shallowReadonly(reactive({
  name: 'jk2',
  hobby: {
    name: 'none2'
  }
}))
function test(){
  // m1.name += "name"
  // m2.name += "name"
   m2.hobby.name += "name"
}
</script>

<style lang="less" scoped>

</style>
