<template>
  <div>{{ user.name }}</div>
  <div>{{ user.happiness }}</div>
  <button @click="update">update</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const obj = {
      name: 'jk',
      happiness: {
        name: ['play']
      }
    }
    const user = reactive(obj)
    function update() {
      user.name = 'jk1'
    }
    return { user, update }
  }
})
</script>
