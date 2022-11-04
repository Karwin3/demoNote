<template>
  <div>
    <p>name:{{ name }}</p>
    <p>age:{{ age }}</p>
    <hr>
    <button @click="test">test</button>
    <hr>
    <Child :age="age" />
  </div>
</template>
  
<script lang ="ts" setup>
import { ref, reactive, toRef } from "vue"
import Child from './components/Child.vue'

let m1 = reactive({
  name: 'jk1',
  age: 9
})

const name = toRef(m1, 'name')
const age = ref(m1.age)

function test() {
  // name.value += "="
  // m1.name += "="
  age.value += 1
  // m1.age += 1
}
</script>

<style lang="less" scoped>

</style>