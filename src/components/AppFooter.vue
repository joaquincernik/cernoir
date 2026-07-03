<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { el, visible } = useScrollReveal()
</script>

<template>
  <footer
    ref="el"
    class="pt-8 pb-10 text-center border-t border-border mx-5 will-change-transform"
    :class="visible ? 'animate-[fade-up_0.8s_var(--ease-out)_1.3s_forwards]' : 'opacity-0'"
  >
    <p class="text-[11px] text-muted tracking-wider">
      &copy; 2026 Cernoir &mdash; Hecho con dedicaci&oacute;n artesanal
    </p>
  </footer>
</template>
