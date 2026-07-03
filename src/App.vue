<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import PerfumeCard from './components/PerfumeCard.vue'
import LocationCard from './components/LocationCard.vue'
import AppFooter from './components/AppFooter.vue'
import { perfumes } from './data/perfumes.js'
</script>

<template>
  <div class="relative min-h-dvh overflow-x-hidden bg-bg text-text font-sans font-light leading-relaxed antialiased">
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-[30%] -right-[20%] w-[70vmin] h-[70vmin] rounded-full bg-gradient-to-br from-accent/5 to-transparent animate-[ambient-drift_25s_ease-in-out_infinite_alternate] will-change-transform"></div>
      <div class="absolute -bottom-[20%] -left-[15%] w-[60vmin] h-[60vmin] rounded-full bg-gradient-to-tr from-amber-700/3 to-transparent animate-[ambient-drift_30s_ease-in-out_infinite_alternate-reverse] will-change-transform"></div>
    </div>

    <div class="relative z-1 max-w-[480px] sm:max-w-[520px] mx-auto">
      <AppHeader />
      <main>
        <PerfumeCard
          v-for="p in perfumes"
          :key="p.id"
          :perfume="p"
        />
        <LocationCard />
      </main>
      <AppFooter />
    </div>
  </div>
</template>
