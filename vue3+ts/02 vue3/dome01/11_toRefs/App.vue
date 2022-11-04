<template>
  <div>
    name: {{ name }}
  </div>
  <div>
    age: {{ age }}
  </div>
  <hr>
  <div>
    name2: {{ name2 }}
  </div>
  <div>
    age2: {{ age2 }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
function useFeature() {
  const stu2 = reactive({
    name2: 'jk2',
    age2: 12
  })
  return {
    ...toRefs(stu2)
  }
}
export default defineComponent({
  name: 'App',
  setup() {
    const stu = reactive({
      name: 'jk',
      age: 1
    })
    const stu1 = toRefs(stu)
    // 定时器
    setInterval(() => {
      // stu.name += "==="
      stu1.name.value += "==="
      console.log("===");
    }, 1000)
    const {name2, age2} = useFeature()
    return {
      // ...stu // 不是响应式数据 {name: 'jk',age: 1}
      ...stu1,
      name2,
      age2
    }
  },
})
</script>

<style>

</style>