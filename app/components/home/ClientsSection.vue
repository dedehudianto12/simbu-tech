<template>
  <section
    id="clients"
    class="border-t border-border px-15 py-[100px] max-md:px-6 max-md:py-20 bg-black"
  >
    <div class="mx-auto max-w-[1400px]">
      <!-- Header -->
      <div class="mb-16 reveal">
        <span class="section-tag">Trusted By</span>
        <h2 class="section-title">Our <span class="text-white">Clients</span></h2>
      </div>

      <!-- Grid -->
      <div
        class="grid grid-cols-6 gap-0 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 client-grid"
      >
        <div
          v-for="(client, i) in clients"
          :key="client"
          class="client-cell reveal"
          :style="{ transitionDelay: `${i * 0.03}s` }"
        >
          {{ client }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const clients = [
  "AEON Mall",
  "Kinden Indonesia",
  "Pelindo",
  "PT Surya Madistrindo",
  "Otsuka",
  "JICT",
  "Vopak",
  "DJPL",
  "Pelindo Multi Terminal",
  "ENC",
  "Pelindo Terminal Petikemas",
  "PMT Non-Petikemas",
];
</script>

<style scoped>
.section-tag {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 12px;
  display: block;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 42px);
  font-weight: 700;
  color: var(--text);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.client-grid {
  border-top: 1px solid var(--border);
  border-left: 1px solid var(--border);
}

.client-cell {
  aspect-ratio: 2/1;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 16px;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.client-cell:hover {
  background-color: rgba(255, 255, 255, 0.02);
  color: var(--text);
}
</style>
