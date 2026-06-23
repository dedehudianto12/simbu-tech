<template>
  <section id="why-choose-us" class="why-choose-us">
    <div class="mx-auto max-w-[1400px]">
      <!-- Eyebrow + Heading, konsisten dengan pola "What We Do" / "Trusted By" di section lain -->
      <p class="eyebrow">Why Simbu</p>
      <h2 class="heading">Why Enterprises Choose Simbu</h2>
      <p class="subheading">
        We don't just deploy infrastructure — we build long-term technology
        partnerships.
      </p>

      <div class="grid">
        <article
          v-for="(item, index) in reasons"
          :key="item.title"
          class="card"
        >
          <span class="index"
            >{{ String(index + 1).padStart(2, "0") }} /
            {{ String(reasons.length).padStart(2, "0") }}</span
          >
          <span class="icon" aria-hidden="true">{{ item.icon }}</span>
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-desc">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// TODO: ganti angka/klaim di bawah ini dengan data aktual Simbu sebelum publish.
// - response time SLA (sekarang placeholder "<2 hours")
// - jumlah project/klien (sekarang reuse "12+" dari stats bar Hero)
const reasons = [
  {
    icon: "✓",
    title: "Certified & Experienced Team",
    description:
      "Our engineers hold up-to-date industry certifications and have hands-on experience securing enterprise-grade infrastructure.",
  },
  {
    icon: "⏱",
    title: "24/7 Support & Rapid Response",
    description:
      "Critical issues don\u2019t wait for business hours. Our support team is available around the clock, with a target response time of under 2 hours.",
  },
  {
    icon: "⚙",
    title: "End-to-End Solutions",
    description:
      "From assessment and design to implementation and ongoing maintenance — one partner handles your entire IT lifecycle.",
  },
  {
    icon: "▲",
    title: "Proven Track Record",
    description:
      "Trusted by 12+ enterprise clients across ports, logistics, manufacturing, and retail — including several of Indonesia\u2019s largest operators.",
  },
];
</script>

<style scoped>
/* Token warna & font di bawah ini PLACEHOLDER — sesuaikan dengan variabel/Tailwind config
   yang sudah dipakai di website kamu (warna utama, font Hero, dll) supaya konsisten. */
.why-choose-us {
  padding: 6rem 1.5rem;
}

.container {
  max-width: 72rem;
  margin: 0 auto;
}

.eyebrow {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent, #2563eb);
  margin-bottom: 0.75rem;
}

.heading {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 0.75rem;
  color: var(--text-primary, #0f172a);
}

.subheading {
  font-size: 1.05rem;
  color: var(--text-secondary, #475569);
  max-width: 40rem;
  margin-bottom: 3rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.card {
  border: 1px solid var(--border, #e2e8f0);
  border-radius: 0.5rem;
  padding: 1.75rem 1.5rem;
  background: var(--bg-card, #ffffff);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px -8px rgba(15, 23, 42, 0.12);
}

.index {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--text-tertiary, #94a3b8);
  margin-bottom: 1rem;
}

.icon {
  display: block;
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary, #0f172a);
}

.card-desc {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-secondary, #475569);
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}
</style>
