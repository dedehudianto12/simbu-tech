<template>
  <div class="reveal" :style="{ transitionDelay: delay }">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  delay?: string
}>()
</script>
