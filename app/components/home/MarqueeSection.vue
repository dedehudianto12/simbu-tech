<template>
  <section
    class="border-t border-b border-gray-200 dark:border-border overflow-hidden py-4 bg-white dark:bg-black"
  >
    <div class="marquee-track">
      <div class="flex shrink-0 items-center">
        <span v-for="(item, i) in items" :key="'a-' + i" class="marquee-item">
          <span class="text-[10px] opacity-40" style="color: var(--muted)">•</span>
          {{ item }}
        </span>
      </div>
      <div class="flex shrink-0 items-center" aria-hidden="true">
        <span v-for="(item, i) in items" :key="'b-' + i" class="marquee-item">
          <span class="text-[10px] opacity-40" style="color: var(--muted)">•</span>
          {{ item }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  "IT Infrastructure",
  "Cybersecurity",
  "Area Infrastructure",
  "Software Development",
  "System Integration",
  "IoT Implementation",
  "Network Solutions",
];
</script>

<style scoped>
.marquee-track {
  display: flex;
  width: max-content;
  animation: marqueeScroll 30s linear infinite;
}

@keyframes marqueeScroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.marquee-item {
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
  white-space: nowrap;
  padding: 0 32px;
  display: flex;
  align-items: center;
  gap: 32px;
}
</style>
