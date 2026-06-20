<template>
  <section id="services" class="services section-padding">
    <div class="mx-auto max-w-[1400px]">
      <!-- Header -->
      <div class="services-header reveal">
        <div>
          <span class="section-tag">What We Do</span>
          <h2 class="section-title">
            Our <span class="text-red">Services</span>
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
      <div class="grid grid-cols-2 gap-0.5 max-md:grid-cols-1">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="service-card reveal"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <div class="service-card-highlight"></div>
          <span
            class="font-display text-[11px] tracking-[0.1em] text-red opacity-60"
            >{{ String(index + 1).padStart(2, "0") }} /
            {{ String(services.length).padStart(2, "0") }}</span
          >
          <div class="service-icon-hex">
            <span class="text-xl">{{ service.icon }}</span>
          </div>
          <h3 class="font-display text-xl font-bold text-text">
            {{ service.title }}
          </h3>
          <p class="flex-1 text-sm leading-relaxed text-muted">
            {{ service.desc }}
          </p>
          <div class="service-arrow">→</div>
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
  margin-bottom: 64px;
  gap: 40px;
}

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

/* Card */
.service-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--border);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  transition:
    background 0.4s ease,
    opacity 0.8s ease,
    transform 0.8s ease;
}

.service-card:hover {
  background: rgba(227, 30, 36, 0.04);
}

/* Top highlight sweep */
.service-card-highlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--red), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.service-card:hover .service-card-highlight {
  transform: translateX(100%);
}

.service-icon-hex {
  width: 52px;
  height: 52px;
  background: rgba(227, 30, 36, 0.05);
  border: 1px solid var(--border);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-arrow {
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: var(--muted);
  transition:
    transform 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}

.service-card:hover .service-arrow {
  transform: rotate(45deg);
  color: var(--red);
  border-color: rgba(227, 30, 36, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .services-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
