<template>
  <div ref="pageRef">
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
import { ref } from "vue";
import { useScrollReveal } from "~/composables/useScrollReveal";

const pageRef = ref<HTMLElement | null>(null);
useScrollReveal(pageRef);
</script>
