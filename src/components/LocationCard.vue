<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { el, visible } = useScrollReveal()
</script>

<template>
  <section
    ref="el"
    class="px-5 py-6 pb-12 will-change-transform"
    :class="visible ? 'animate-[fade-up_1s_var(--ease-out)_1s_forwards]' : 'opacity-0 translate-y-6'"
  >
    <div class="bg-surface border border-border rounded-[16px] px-6 py-7 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-transform duration-[0.4s] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5">
      <div class="w-10 h-10 rounded-full bg-accent-dim flex items-center justify-center mx-auto mb-4">
        <svg class="w-[18px] h-[18px] text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      </div>
      <p class="text-[10px] font-medium tracking-[0.3em] uppercase text-muted mb-2">
        Encuéntranos en
      </p>
      <h3 class="font-serif text-xl font-normal text-text mb-1">
        Scent Bar Buenos Aires
      </h3>
      <p class="text-[13px] text-muted font-light tracking-wide">
        Armenia 1740, Palermo<br/>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-accent font-normal no-underline transition-opacity duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:opacity-70"
        >Ver en el mapa</a>
      </p>
    </div>
  </section>
</template>
