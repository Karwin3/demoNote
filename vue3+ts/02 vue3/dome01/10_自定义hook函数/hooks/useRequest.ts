import { ref } from 'vue'
import axios from 'axios'
// 发送ajax请求
export default function (url: string) {
  // 加载状态
  const loading = ref(true)
  // 返回的数据
  const data = ref(null)
  // 错误的信息
  const errorMsg = ref('')

  axios
    .get(url)
    .then((res) => {
      loading.value = false
      data.value = res.data
    })
    .catch((error) => {
      loading.value = false
      errorMsg.value = error.message || 'error'
    })
  return {
    loading,
    data,
    errorMsg
  }
}
