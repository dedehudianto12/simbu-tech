<template>
  <section
    id="clients"
    class="border-t border-border px-15 py-[100px] max-md:px-6 max-md:py-20"
  >
    <div class="mx-auto max-w-[1400px]">
      <!-- Header -->
      <div class="mb-16 reveal">
        <span class="section-tag">Trusted By</span>
        <h2 class="section-title">Our <span class="text-red">Clients</span></h2>
      </div>

      <!-- Grid -->
      <div
        class="grid grid-cols-6 gap-0.5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2"
      >
        <div
          v-for="(client, i) in clients"
          :key="client"
          class="client-cell reveal"
          :style="{ transitionDelay: `${i * 0.05}s` }"
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
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--red);
  opacity: 0.6;
  margin-bottom: 12px;
  display: block;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  color: var(--text);
  line-height: 1.1;
}

.client-cell {
  aspect-ratio: 2/1;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 12px;
  transition:
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}

.client-cell:hover {
  background: rgba(227, 30, 36, 0.04);
  color: var(--text);
  border-color: rgba(227, 30, 36, 0.2);
}
</style>
