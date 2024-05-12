import { onMounted, onUnmounted, ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

export function useWindowResize() {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  const handleResize = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return { width, height }
}

export const useAppSize = () => {
  const { width, height } = useWindowResize()

  return {
    isMobile: width.value < 768,
    width,
    height
  }
}
