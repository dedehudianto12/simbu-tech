<template>
  <section
    id="services"
    class="services section-padding bg-white dark:bg-black"
  >
    <div class="mx-auto max-w-[1400px]">
      <!-- Header -->
      <div class="services-header reveal">
        <div>
          <span class="section-tag">What We Do</span>
          <h2 class="section-title">
            Our
            <span class="font-extrabold" style="color: var(--text)"
              >Services</span
            >
          </h2>
        </div>
        <p
          class="max-w-[400px] text-right text-sm leading-relaxed text-muted max-md:text-left"
        >
          Comprehensive IT solutions designed for enterprise-grade reliability,
          security, and scalability.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="service-card reveal"
          :style="{ transitionDelay: `${index * 0.05}s` }"
        >
          <div class="flex justify-between items-start">
            <div class="service-icon-box">
              <span class="text-xl">{{ service.icon }}</span>
            </div>
            <span
              class="font-body text-[12px] tracking-[0.05em] text-muted opacity-60"
              >{{ String(index + 1).padStart(2, "0") }} /
              {{ String(services.length).padStart(2, "0") }}</span
            >
          </div>
          <h3
            class="font-body text-lg font-bold mt-4"
            style="color: var(--text)"
          >
            {{ service.title }}
          </h3>
          <p class="text-sm leading-relaxed mb-6" style="color: var(--muted)">
            {{ service.desc }}
          </p>
          <div class="service-arrow">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: "🖧",
    title: "IT Infrastructure & Communication",
    desc: "Design, deploy, and maintain robust network and communication systems for enterprise operations.",
  },
  {
    icon: "🛡",
    title: "Cybersecurity",
    desc: "Protect your digital assets with comprehensive security assessments, monitoring, and incident response.",
  },
  {
    icon: "📡",
    title: "Area Infrastructure",
    desc: "End-to-end infrastructure solutions for industrial areas, ports, and commercial facilities.",
  },
  {
    icon: "⌨",
    title: "Software Development",
    desc: "Custom software solutions tailored to your business processes — from web apps to enterprise systems.",
  },
];
</script>

<style scoped>
/* Header */
.services-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 48px;
  gap: 40px;
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

/* Card */
.service-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--border);
  padding: 32px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease,
    opacity 0.8s ease;
}

.service-card:hover {
  border-color: var(--border-red);
  background-color: var(--bg2);
}

.service-icon-box {
  width: 44px;
  height: 44px;
  background: var(--steel-dim);
  border: 1px solid var(--border);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-arrow {
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 28px;
  height: 28px;
  border: 1px solid var(--border);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  transition:
    transform 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.service-card:hover .service-arrow {
  transform: translate(2px, -2px);
  color: var(--text);
  border-color: var(--border-red);
}

/* Responsive */
@media (max-width: 768px) {
  .services-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
