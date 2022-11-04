<template>
  <div>
    {{ m1 }} <br />
    {{ m2 }} <br />
    {{ state }} <br />
    <hr>
    <button @click="toRawFun">toRaw</button>
    <button @click="markRawFun">markRaw</button>
  </div>
</template>

<!-- toRaw 与 markRaw -->
<script lang="ts" setup>
import { ref, toRaw, reactive, markRaw } from "vue"
let m1 = reactive({
  name: 'jk1',
  hobby: {
    name: 'none1'
  }
})
const m2 = ref({
  name: 'jk2',
  hobby: {
    name: 'none2'
  }
})

function toRawFun() {
  const m3 = toRaw(m1)
  const m4 = toRaw(m2.value)
  m3.name += 'name'
  m4.name += 'name'
  console.log(m1)
  console.log(m2)
}

let obj = { name: 'jk3', age: 18 }
// 不能追踪，监听，作为响应式的数据
obj = markRaw(obj)
let state = reactive(obj)

function markRawFun() {
  state.name = 'zs'
}
</script>

<style lang="less" scoped>

</style>