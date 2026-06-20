<template>
  <section
    class="border-t border-b border-border overflow-hidden py-4 bg-[rgba(227,30,36,0.03)]"
  >
    <div class="marquee-track">
      <div class="flex shrink-0 items-center">
        <span v-for="(item, i) in items" :key="'a-' + i" class="marquee-item">
          <span class="text-[6px] text-red opacity-50">◆</span>
          {{ item }}
        </span>
      </div>
      <div class="flex shrink-0 items-center" aria-hidden="true">
        <span v-for="(item, i) in items" :key="'b-' + i" class="marquee-item">
          <span class="text-[6px] text-red opacity-50">◆</span>
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
  animation: marqueeScroll 20s linear infinite;
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
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  white-space: nowrap;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 24px;
}
</style>
