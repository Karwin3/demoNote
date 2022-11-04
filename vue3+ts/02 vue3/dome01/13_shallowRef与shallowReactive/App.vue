<template>
  <div>
    <p>ref</p>
    {{ m1 }} <br />
    <p>shallowRef</p>
    {{ m2 }} <br />
    <p>reactive</p>
    {{ m3 }} <br />
    <p>shallowReactive</p>
    {{ m4 }} <br />
    <hr>
    <button @click="test">test</button>
  </div>
</template>

<!-- shallowRef 和 shallowReactive -->
<script lang="ts" setup>
import { reactive, ref, shallowRef, shallowReactive } from "vue"
const m1 = ref({
  name: 'jk1',
  hobby: {
    name: 'none1'
  }
})
const m2 = shallowRef({
  name: 'jk2',
  hobby: {
    name: 'none2'
  }
})
const m3 = reactive({
  name: 'jk3',
  hobby: {
    name: 'none3'
  }
})
const m4 = shallowReactive({
  name: 'jk4',
  hobby: {
    name: 'none4'
  }
})
function test() {
  // m1.value.name += "name"
  // m1.value.hobby.name += "hobby"

  // m2.value.name += "name"
  // m2.value.hobby.name += "hobby"

  // m3.name += "name"
  // m3.hobby.name += "hobby"
  
  // m4.name += "name"
  m4.hobby.name += "hobby"
}
</script>

<style lang="less" scoped>

</style>