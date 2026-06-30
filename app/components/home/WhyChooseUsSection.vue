<template>
  <section
    id="why-choose-us"
    class="section-padding bg-white dark:bg-black"
  >
    <div class="mx-auto max-w-[1400px]">
      <!-- Eyebrow + Heading -->
      <span class="section-tag reveal" style="transition-delay: 0s">Why Simbu</span>
      <h2 class="section-title reveal" style="transition-delay: 0.05s">Why Enterprises Choose Simbu</h2>
      <p class="section-desc reveal" style="transition-delay: 0.1s">
        We don't just deploy infrastructure — we build long-term technology partnerships.
      </p>

      <div class="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 mt-12">
        <article
          v-for="(item, index) in reasons"
          :key="item.title"
          class="card reveal"
          :style="{ transitionDelay: `${0.15 + index * 0.08}s` }"
        >
          <div class="flex justify-between items-center mb-6">
            <span class="icon-box" aria-hidden="true">
              <svg
                v-if="item.icon === 'check'"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <svg
                v-else-if="item.icon === 'clock'"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <svg
                v-else-if="item.icon === 'gear'"
                class="icon-gear"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <svg
                v-else
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </span>
            <span class="index">{{ index + 1 }} / {{ reasons.length }}</span
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
    icon: "check",
    title: "Certified & Experienced Team",
    description:
      "Our engineers hold up-to-date industry certifications and have hands-on experience securing enterprise-grade infrastructure.",
  },
  {
    icon: "clock",
    title: "24/7 Support & Rapid Response",
    description:
      "Critical issues don't wait for business hours. Our support team is available around the clock, with a target response time of under 2 hours.",
  },
  {
    icon: "gear",
    title: "End-to-End Solutions",
    description:
      "From assessment and design to implementation and ongoing maintenance — one partner handles your entire IT lifecycle.",
  },
  {
    icon: "chart",
    title: "Proven Track Record",
    description:
      "Trusted by 12+ enterprise clients across ports, logistics, manufacturing, and retail — including several of Indonesia's largest operators.",
  },
];
</script>

<style scoped>
.section-desc {
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--muted);
  max-width: 480px;
  margin-top: 16px;
  line-height: 1.6;
}

/* Scroll-entrance override — cards enter from a shorter distance */
.card.reveal {
  transform: translateY(24px);
  transition:
    opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease;
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
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
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
  color: var(--text);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.card:hover .icon-box {
  background: var(--red-dim);
  border-color: var(--border-red);
  transform: scale(1.08);
}

/* Gear icon rotation on card hover */
.icon-gear {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.card:hover .icon-gear {
  transform: rotate(45deg);
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

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .card,
  .card.reveal {
    transition: none !important;
    transform: none !important;
  }

  .card:hover {
    transform: none !important;
    box-shadow: none !important;
  }

  .icon-box {
    transition: none !important;
  }

  .card:hover .icon-box {
    transform: none !important;
  }

  .icon-gear {
    transition: none !important;
  }

  .card:hover .icon-gear {
    transform: none !important;
  }
}
</style>
