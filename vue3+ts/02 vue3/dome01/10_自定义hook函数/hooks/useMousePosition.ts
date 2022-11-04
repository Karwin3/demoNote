import { ref, onMounted, onUnmounted } from 'vue'

export default function () {
  const x = ref<number>()
  const y = ref<number>()

  onMounted(() => {
    window.addEventListener('click', clickHandler)
  })

  onUnmounted(() => {
    window.removeEventListener('click', clickHandler)
  })

  function clickHandler(e: MouseEvent) {
    x.value = e.pageX
    y.value = e.pageY
  }

  return { x, y }
}
