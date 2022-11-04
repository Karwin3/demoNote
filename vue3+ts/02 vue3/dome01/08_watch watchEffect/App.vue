<template>
  <div>
    <div>ref和reactive的细节问题</div>
    姓氏：
    <input type="text" v-model="user.firstName" />
    名字：
    <input type="text" v-model="user.lastName" />
    <br />
    姓名：
    <input type="text" v-model="fullName" />
    姓名1：
    <input type="text" v-model="fullName1" />
    姓名2：
    <input type="text" v-model="fullName2" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  watch,
  ref,
  watchEffect
} from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const user = reactive({
      firstName: 'j',
      lastName: 'k'
    })
    // computed 只执行get
    const fullName = computed(() => {
      return user.firstName + '-' + user.lastName
    })
    // computed 执行get和set
    const fullName1 = computed({
      get(): string {
        return user.firstName + '-' + user.lastName
      },
      set(value: string) {
        const names = value.split('-')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })
    // watch
    const fullName2 = ref('')
    // watch(
    //   user,
    //   () => {
    //     fullName2.value = user.firstName + '-' + user.lastName
    //   },
    //   {
    //     immediate: true, // 是否初始化立即执行一次, 默认是false
    //     deep: true // 是否是深度监视, 默认是false
    //   }
    // )

    // watch 监听非响应式数据 ()=>user.firstName
    watch(
      [() => user.firstName, () => user.lastName],
      (newValue, oldValue) => {
        console.log(newValue)
        console.log(oldValue)
        fullName2.value = user.firstName + '-' + user.lastName
      },
      {
        immediate: true, // 是否初始化立即执行一次, 默认是false
        deep: true // 是否是深度监视, 默认是false
      }
    )

    //watchEffect 监视回调中使用的数据 默认执行一次
    // watchEffect(() => {
    //   fullName2.value = user.firstName + '-' + user.lastName
    // })
    // watchEffect(() => {
    //   const names = fullName2.value.split('-')
    //   user.firstName = names[0]
    //   user.lastName = names[1]
    // })

    return { user, fullName, fullName1, fullName2 }
  }
})
</script>

<style></style>
