<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { el, visible } = useScrollReveal()
</script>

<template>
  <section
    ref="el"
    class="pt-12 pb-8 text-center px-5 will-change-transform"
    :class="visible ? 'animate-[fade-up_1s_var(--ease-out)_0.4s_forwards]' : 'opacity-0 translate-y-5'"
  >
    <span class="inline-block text-[10px] font-medium tracking-[0.3em] uppercase text-accent border border-accent-dim rounded-full px-4 py-1.5 mb-5">
      Decants
    </span>
    <h1 class="font-serif text-[36px] sm:text-[42px] font-normal leading-[1.15] tracking-tight text-text mb-3">
      El oscuro<br/>encanto de lo <i class="italic text-accent">eterno</i>
    </h1>
    <p class="text-[13px] text-muted font-light max-w-[280px] mx-auto tracking-wide">
      Una fragancia que captura la esencia de la noche en cada gota.
    </p>
  </section>
</template>
