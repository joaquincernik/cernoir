<script setup>
import { ref, computed } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import PerfumeCard from './components/PerfumeCard.vue'
import LocationCard from './components/LocationCard.vue'
import AppFooter from './components/AppFooter.vue'
import { perfumes } from './data/perfumes.js'

const marcas = [...new Set(perfumes.map(p => p.marca))]
const selectedBrand = ref('todas')

const perfumesFiltrados = computed(() =>
  selectedBrand.value === 'todas'
    ? perfumes
    : perfumes.filter(p => p.marca === selectedBrand.value)
)
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
        <div class="flex gap-2 overflow-x-auto px-5 py-4 scrollbar-none">
          <button
            v-for="marca in ['todas', ...marcas]"
            :key="marca"
            @click="selectedBrand = marca"
            class="flex-shrink-0 text-[10px] font-semibold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full border transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer"
            :class="selectedBrand === marca ? 'text-accent border-accent/50 bg-accent-dim' : 'text-muted border-transparent hover:text-accent/70'"
          >{{ marca === 'todas' ? 'Todas' : marca }}</button>
        </div>
        <div class="mx-5 mb-2 py-3 px-4 rounded-full border border-amber-400/20 bg-amber-400/5 text-center">
          <p class="text-[10px] font-medium tracking-[0.15em] uppercase text-amber-400/90">
            Llevando 5 decants obtené un 5% de descuento
          </p>
        </div>
        <PerfumeCard
          v-for="p in perfumesFiltrados"
          :key="p.id + p.nombre"
          :perfume="p"
        />
        <LocationCard />
      </main>
      <AppFooter />
    </div>
  </div>
</template>
