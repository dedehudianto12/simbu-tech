<template>
  <section id="why-choose-us" class="why-choose-us">
    <div class="mx-auto max-w-[1400px]">
      <!-- Eyebrow + Heading -->
      <span class="section-tag">Why Simbu</span>
      <h2 class="section-title">Why Enterprises Choose Simbu</h2>
      <p class="section-desc">
        We don't just deploy infrastructure — we build long-term technology partnerships.
      </p>

      <div class="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 mt-12">
        <article
          v-for="(item, index) in reasons"
          :key="item.title"
          class="card"
        >
          <div class="flex justify-between items-center mb-6">
            <span class="icon-box" aria-hidden="true">{{ item.icon }}</span>
            <span class="index"
              >{{ String(index + 1).padStart(2, "0") }} /
              {{ String(reasons.length).padStart(2, "0") }}</span
            >
          </div>
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-desc">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Reasons data
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
      "Critical issues don't wait for business hours. Our support team is available around the clock, with a target response time of under 2 hours.",
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
      "Trusted by 12+ enterprise clients across ports, logistics, manufacturing, and retail — including several of Indonesia's largest operators.",
  },
];
</script>

<style scoped>
.why-choose-us {
  padding: 100px 60px;
  background: var(--bg);
}

@media (max-width: 768px) {
  .why-choose-us {
    padding: 80px 24px;
  }
}

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

.section-desc {
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--muted);
  max-width: 480px;
  margin-top: 16px;
  line-height: 1.6;
}

.card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.card:hover {
  border-color: var(--border-red);
  background-color: var(--bg2);
}

.index {
  font-family: var(--font-body);
  font-size: 12px;
  color: var(--muted);
  opacity: 0.6;
}

.icon-box {
  width: 36px;
  height: 36px;
  background: var(--steel-dim);
  border: 1px solid var(--border);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--text);
}

.card-title {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text);
}

.card-desc {
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
}
</style>
