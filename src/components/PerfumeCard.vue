<script setup>
import { ref, computed } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const props = defineProps({
  perfume: {
    type: Object,
    default: () => ({
      marca: 'Afnan',
      nombre: '9PM Night Out',
      concentracion: 'Extrait de parfum',
      descripcion: 'Ideal para la noche',
      precioPerfume: 95000,
      mlPerfume: 50,
      precioDecant: 12000,
      mlDecant: 5,
      estacion: 'invierno',
      caracteristica: 'dulce',
      imagen: '',
    }),
  },
})

const { el, visible } = useScrollReveal()

const seasonLabel = { invierno: 'Invierno', verano: 'Verano' }
const seasonPath = {
  invierno: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z M12 3v18 M3 12h18',
  verano: 'M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z',
}[props.perfume.estacion] || ''

const tienePerfume = props.perfume.precioPerfume != null
const tieneDecant = props.perfume.precioDecant != null

const seleccion = ref(tieneDecant ? 'decant' : 'perfume')

const precioActual = computed(() =>
  seleccion.value === 'perfume' ? props.perfume.precioPerfume : props.perfume.precioDecant
)
const mlActual = computed(() =>
  seleccion.value === 'perfume' ? props.perfume.mlPerfume : props.perfume.mlDecant
)

const formatoPrecio = (n) => '$' + n.toLocaleString('es-AR')
</script>

<template>
  <section ref="el" class="px-5 py-6 will-change-transform"
    :class="visible ? 'animate-[fade-up_1s_var(--ease-out)_0.7s_forwards]' : 'opacity-0 translate-y-6'">
    <div
      class="relative bg-surface border border-border rounded-[16px] px-6 py-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-transform duration-[0.4s] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5">

      <div class="absolute top-3 left-3 flex gap-1">
        <button v-if="tienePerfume" @click="seleccion = 'perfume'"
          class="text-[9px] font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full border transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer"
          :class="seleccion === 'perfume' ? 'text-accent border-accent-dim bg-accent-dim' : 'text-muted border-transparent hover:text-accent/70'">
          Perfume
        </button>
        <button v-if="tieneDecant" @click="seleccion = 'decant'"
          class="text-[9px] font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full border transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer"
          :class="seleccion === 'decant' ? 'text-amber-400 border-amber-400/30 bg-amber-400/10' : 'text-muted border-transparent hover:text-amber-400/70'">
          Decant
        </button>
      </div>
      <div v-if="perfume.mujer === 1"
        class="absolute top-3 right-3 text-[9px] font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-pink-400/30 bg-pink-400/10 text-pink-400">
        Mujer
      </div>

      <div class="w-full max-w-[220px] mx-auto mb-5 mt-5 rounded-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
        <img :src="perfume.imagen" :alt="perfume.nombre" class="w-full h-auto block rounded-[8px]" loading="lazy" />
      </div>

      <p class="text-[10px] font-medium tracking-[0.25em] uppercase text-accent mb-1">
        {{ perfume.marca }}
      </p>

      <h2 class="font-serif text-[22px] font-normal tracking-wider text-text mb-1">
        {{ perfume.nombre }}
      </h2>

      <p class="text-[10px] font-medium tracking-[0.2em] uppercase text-muted mb-1">
        {{ perfume.concentracion }}
      </p>

      <p class="text-[12px] text-muted font-light italic leading-relaxed mb-3 max-w-[240px] mx-auto">
        {{ perfume.descripcion }}
      </p>

      <div class="flex items-center justify-center gap-3 mb-4">
        <span class="flex items-center gap-1.5 text-[10px] font-medium tracking-[0.15em] uppercase text-muted">
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" :d="seasonPath" />
          </svg>
          {{ seasonLabel[perfume.estacion] }}
        </span>
        <span class="w-px h-3 bg-border"></span>
        <span class="text-[10px] font-medium tracking-[0.15em] uppercase text-muted">
          {{ perfume.caracteristica }}
        </span>
      </div>

      <div class="w-8 h-px bg-accent/50 mx-auto mb-4"></div>

      <p class="font-serif text-[28px] font-normal tracking-wide transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
        :class="seleccion === 'perfume' ? 'text-accent' : 'text-amber-400'">
        {{ formatoPrecio(precioActual) }}
        <small class="block font-sans text-xs font-light text-muted mt-1 tracking-wider">{{ mlActual }} ml</small>
      </p>
    </div>
  </section>
</template>
