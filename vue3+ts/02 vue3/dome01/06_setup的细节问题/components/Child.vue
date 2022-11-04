<template>
  <div>child</div>
  <div>{{ msg }}</div>
  <button @click="testEmit">test分发事件</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Child',
  props: ['msg'],
  setup(props, context) {
    console.log(props)
    console.log(context.attrs)
    function testEmit() {
      context.emit('test', 'jk')
    }
    return { testEmit }
  }
})
</script>

<style></style>
