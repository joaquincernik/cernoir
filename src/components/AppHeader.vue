<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { el, visible } = useScrollReveal()
</script>

<template>
  <header
    ref="el"
    class="pt-8 pb-4 text-center will-change-transform"
    :class="visible ? 'animate-[fade-down_0.8s_var(--ease-out)_0.2s_forwards]' : 'opacity-0 -translate-y-2'"
  >
    <p class="font-serif text-xl tracking-[0.35em] uppercase text-text">
      Cern<span class="text-accent">o</span>ir
    </p>
  </header>
</template>
