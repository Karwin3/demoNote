<template>
  <div>App</div>
  <div>{{ msg }}</div>
  <button @click="msg += '==='">update</button>
  <br />
  <Child :msg="msg" msg2="msg2" @test="test" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Child from './components/Child.vue'

export default defineComponent({
  name: 'App',
  components: {
    Child
  },
  setup() {
    const msg = ref('hello')
    function update() {
      msg.value = 'jk'
    }
    function test(txt: string) {
      msg.value = msg.value += txt
    }
    return { msg, update, test }
  }
})
</script>

<style></style>
