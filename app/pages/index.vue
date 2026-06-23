<template>
  <div>
    <HomeHeroSection />
    <HomeMarqueeSection />
    <HomeServicesSection />
    <HomeWhyChooseUsSection />
    <HomeClientsSection />
    <HomeAboutSection />
    <HomeCtaSection />
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from "~/composables/useScrollReveal";

useScrollReveal();
</script>
