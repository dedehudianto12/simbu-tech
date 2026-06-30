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
          <picture>
            <source
              v-if="client.webp"
              :srcset="client.webp"
              type="image/webp"
            />
            <img
              :src="client.logo"
              :alt="client.name"
              class="client-logo"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const clients = [
  { name: "United Tractors", logo: "/clients-logo/united_tractors.png", webp: "/clients-logo/united_tractors.webp" },
  { name: "GYS", logo: "/clients-logo/gys.png", webp: "/clients-logo/gys.webp" },
  { name: "BSI", logo: "/clients-logo/bsi.svg" },
  { name: "AEON Mall", logo: "/clients-logo/aeon_mall.png", webp: "/clients-logo/aeon_mall.webp" },
  { name: "Kinden Indonesia", logo: "/clients-logo/kinden.svg" },
  { name: "Pelindo", logo: "/clients-logo/pelindo.png", webp: "/clients-logo/pelindo.webp" },
  { name: "PT Surya Madistrindo", logo: "/clients-logo/surya_madistrindo.png", webp: "/clients-logo/surya_madistrindo.webp" },
  { name: "Otsuka", logo: "/clients-logo/otsuka.png", webp: "/clients-logo/otsuka.webp" },
  { name: "JICT", logo: "/clients-logo/jict.png", webp: "/clients-logo/jict.webp" },
  { name: "Vopak", logo: "/clients-logo/vopak.png", webp: "/clients-logo/vopak.webp" },
  { name: "DJPL", logo: "/clients-logo/djpl.png", webp: "/clients-logo/djpl.webp" },
  { name: "Pelindo Multi Terminal", logo: "/clients-logo/pelindo_multi_terminal.png", webp: "/clients-logo/pelindo_multi_terminal.webp" },
  { name: "ENC", logo: "/clients-logo/enc.png", webp: "/clients-logo/enc.webp" },
  { name: "Pelindo Terminal Petikemas", logo: "/clients-logo/pelindo_terminal_petikemas.png", webp: "/clients-logo/pelindo_terminal_petikemas.webp" },
  { name: "PMT Non-Petikemas", logo: "/clients-logo/pelindo_multi_terminal_non_peti_kemas.png", webp: "/clients-logo/pelindo_multi_terminal_non_peti_kemas.webp" },
];
</script>

<style scoped>
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

@media (max-width: 768px) {
  .client-grid {
    grid-template-columns: repeat(2, 1fr);
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
