<template>
  <section
    id="process"
    class="section-padding dark:border-border bg-white dark:bg-black"
  >
    <div class="mx-auto max-w-[1400px]">
      <!-- Header -->
      <div class="mb-20 reveal">
        <span class="section-tag">How We Work</span>
        <h2 class="section-title">
          From Consultation to
          <span style="color: var(--text)">Continuous Support</span>
        </h2>
        <p
          class="mt-4 max-w-[520px] text-[15px] leading-[1.7]"
          style="color: var(--muted)"
        >
          A straightforward, four-step engagement designed for enterprise teams
          who need clarity, not surprises.
        </p>
      </div>

      <!-- Horizontal Timeline -->
      <ol class="timeline">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="timeline-step reveal"
          :style="{ transitionDelay: `${index * 0.08}s` }"
        >
          <div class="timeline-marker">
            <span class="timeline-number">{{ index + 1 }}</span>
          </div>
          <div class="timeline-connector" v-if="index < steps.length - 1"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">{{ step.title }}</h3>
            <p class="timeline-desc">{{ step.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: "Consultation",
    description:
      "We start by understanding your business goals, current infrastructure, and the challenges you\u2019re trying to solve.",
  },
  {
    title: "Assessment & Planning",
    description:
      "Our team audits your existing systems and designs a solution tailored to your scale, budget, and risk profile.",
  },
  {
    title: "Implementation",
    description:
      "Certified engineers deploy the solution with minimal disruption to your day-to-day operations.",
  },
  {
    title: "Support & Maintenance",
    description:
      "Once live, we provide ongoing monitoring and 24/7 support to keep your systems secure and running smoothly.",
  },
];
</script>

<style scoped>
/* --- Horizontal Timeline --- */
.timeline {
  display: flex;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}

.timeline-step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
}

.timeline-marker {
  position: relative;
  z-index: 2;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.timeline-number {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
}

.timeline-connector {
  position: absolute;
  top: 28px;
  left: calc(50% + 28px);
  right: calc(-50% + 28px);
  height: 1px;
  background: var(--border);
  z-index: 1;
}

.timeline-content {
  padding: 0 12px;
}

.timeline-title {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.timeline-desc {
  font-family: var(--font-body);
  font-size: 13px;
  line-height: 1.6;
  color: var(--muted);
  max-width: 260px;
  margin: 0 auto;
}

/* Responsive — stack vertically */
@media (max-width: 1024px) {
  .timeline {
    flex-direction: column;
    padding-left: 28px;
  }

  .timeline-step {
    flex-direction: row;
    text-align: left;
    gap: 20px;
    padding-bottom: 40px;
    align-items: flex-start;
  }

  .timeline-step:last-child {
    padding-bottom: 0;
  }

  .timeline-marker {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    margin-bottom: 0;
    margin-top: 0;
  }

  .timeline-connector {
    top: 44px;
    left: 22px;
    right: auto;
    bottom: 0;
    width: 1px;
    height: auto;
  }

  .timeline-step:last-child .timeline-connector {
    display: none;
  }

  .timeline-content {
    padding: 0;
    flex: 1;
  }

  .timeline-desc {
    max-width: none;
    margin: 0;
  }
}
</style>
