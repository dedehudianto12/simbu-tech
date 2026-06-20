<template>
  <div>
    <HomeHeroSection />
    <HomeMarqueeSection />
    <HomeServicesSection />
    <HomeClientsSection />
    <HomeAboutSection />
    <HomeCtaSection />
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal()
</script>
