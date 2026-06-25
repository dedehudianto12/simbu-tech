<template>
  <div>
    <HomeHeroSection />
    <HomeMarqueeSection />
    <HomeServicesSection />
    <HomeWhyChooseUsSection />
    <HomeClientsSection />
    <HomeProcessSection />
    <HomeAboutSection />
    <HomeCtaSection />
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from "~/composables/useScrollReveal";

useScrollReveal();
</script>
