<template>
  <div>

  </div>
</template>
<!-- 响应式数据的判断 -->
<!-- 
  isRef: 检查一个值是否为一个 ref 对象
  isReactive: 检查一个对象是否是由 reactive 创建的响应式代理
  isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
  isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理 
 -->
<script lang="ts" setup>
import { ref, isRef, isReactive, reactive, readonly, isReadonly, isProxy } from "vue"
console.log(isRef(ref({})));
console.log(isReactive(reactive({})));
console.log(isReadonly(readonly({})));
console.log(isProxy(reactive({})));
console.log(isProxy(readonly({})));


</script>
<style lang="less" scoped>

</style>