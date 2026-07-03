import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  const el = ref(null)
  const visible = ref(false)

  let observer = null

  onMounted(() => {
    if (!el.value) return
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { el, visible }
}
