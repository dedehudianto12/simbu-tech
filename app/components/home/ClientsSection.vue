<template>
  <section
    id="clients"
    class="px-15 py-[100px] max-md:px-6 max-md:py-20 bg-white dark:bg-black"
  >
    <div class="mx-auto max-w-[1400px]">
      <!-- Header -->
      <div class="mb-16 reveal">
        <span class="section-tag">Trusted By</span>
        <h2 class="section-title">
          Our <span style="color: var(--text)">Clients</span>
        </h2>
      </div>

      <!-- Grid -->
      <div class="client-grid">
        <div
          v-for="(client, i) in clients"
          :key="client.name"
          class="client-cell reveal"
          :style="{ transitionDelay: `${i * 0.03}s` }"
        >
          <img
            :src="client.logo"
            :alt="client.name"
            class="client-logo"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const clients = [
  { name: "United Tractors", logo: "/clients-logo/united_tractors.png" },
  { name: "GYS", logo: "/clients-logo/gys.png" },
  { name: "BSI", logo: "/clients-logo/bsi.svg" },
  { name: "AEON Mall", logo: "/clients-logo/aeon_mall.png" },
  { name: "Kinden Indonesia", logo: "/clients-logo/kinden.svg" },
  { name: "Pelindo", logo: "/clients-logo/pelindo.png" },
  { name: "PT Surya Madistrindo", logo: "/clients-logo/surya_madistrindo.png" },
  { name: "Otsuka", logo: "/clients-logo/otsuka.png" },
  { name: "JICT", logo: "/clients-logo/jict.png" },
  { name: "Vopak", logo: "/clients-logo/vopak.png" },
  { name: "DJPL", logo: "/clients-logo/djpl.png" },
  {
    name: "Pelindo Multi Terminal",
    logo: "/clients-logo/pelindo_multi_terminal.png",
  },
  { name: "ENC", logo: "/clients-logo/enc.png" },
  {
    name: "Pelindo Terminal Petikemas",
    logo: "/clients-logo/pelindo_terminal_petikemas.png",
  },
  {
    name: "PMT Non-Petikemas",
    logo: "/clients-logo/pelindo_multi_terminal_non_peti_kemas.png",
  },
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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
  border: 1px solid var(--border);
  background-color: var(--border);
}

@media (max-width: 1024px) {
  .client-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.client-cell {
  aspect-ratio: 2/1;
  background-color: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.client-logo {
  max-width: 80%;
  max-height: 38px;
  width: auto;
  height: auto;
  object-fit: contain;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.client-cell:hover .client-logo {
  opacity: 1;
}
</style>
