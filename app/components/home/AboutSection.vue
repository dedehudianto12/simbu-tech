<template>
  <section
    id="about"
    class="section-padding dark:border-border bg-white dark:bg-black"
  >
    <div
      class="mx-auto grid max-w-[1400px] grid-cols-2 items-center gap-[100px] max-lg:grid-cols-1 max-lg:gap-15"
    >
      <!-- Left: Animated Squares -->
      <div class="about-visual reveal">
        <div class="square square-1"></div>
        <div class="square square-2"></div>
        <div class="square square-3"></div>
        <div class="square-core">
          <span class="square-core-text">ST</span>
        </div>
      </div>

      <!-- Right: Content -->
      <div class="flex flex-col gap-8">
        <div class="reveal">
          <span class="section-tag">Who We Are</span>
          <h2 class="section-title">
            Technical Excellence,<br />
            <span style="color: var(--text)">Personal Touch.</span>
          </h2>
        </div>

        <p
          class="max-w-[520px] text-[15px] leading-[1.7] text-muted reveal"
          style="transition-delay: 0.05s"
        >
          PT Simbu Teknologi Indonesia was founded in 2023 with a clear mission:
          to deliver enterprise-grade IT solutions with a personal, consultative
          approach. Based in Jakarta, we serve clients across industries — from
          port operators and manufacturing to retail and logistics.
        </p>

        <div class="mt-2 grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div class="highlight reveal" style="transition-delay: 0.1s">
            <span
              class="font-body text-sm font-semibold"
              style="color: var(--text)"
              >Founded 2023</span
            >
            <span class="text-xs text-muted">Jakarta, Indonesia</span>
          </div>
          <div class="highlight reveal" style="transition-delay: 0.15s">
            <span
              class="font-body text-sm font-semibold"
              style="color: var(--text)"
              >System Integrator</span
            >
            <span class="text-xs text-muted">End-to-end IT solutions</span>
          </div>
          <div class="highlight reveal" style="transition-delay: 0.2s">
            <span
              class="font-body text-sm font-semibold"
              style="color: var(--text)"
              >Certified Team</span
            >
            <span class="text-xs text-muted">Up-to-date skills & certs</span>
          </div>
          <div class="highlight reveal" style="transition-delay: 0.25s">
            <span
              class="font-body text-sm font-semibold"
              style="color: var(--text)"
              >24/7 Support</span
            >
            <span class="text-xs text-muted">Always-on IT services</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Visual — Concentric Squares */
.about-visual {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 440px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .about-visual {
    max-width: 320px;
  }

  .square-1 {
    width: 280px !important;
    height: 280px !important;
  }
  .square-2 {
    width: 180px !important;
    height: 180px !important;
  }
  .square-3 {
    width: 100px !important;
    height: 100px !important;
  }
}

.square {
  position: absolute;
  border: 1px solid var(--border);
  border-radius: 12px;
}

.square-1 {
  width: 360px;
  height: 360px;
  animation: squareRotate1 50s linear infinite;
}

.square-2 {
  width: 240px;
  height: 240px;
  animation: squareRotate2 40s linear infinite reverse;
}

.square-3 {
  width: 140px;
  height: 140px;
  animation: squareRotate1 30s linear infinite;
}

@keyframes squareRotate1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes squareRotate2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.square-core {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.square-core-text {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
}

/* Section tag & title */
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

/* Highlights */
.highlight {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.highlight:hover {
  border-color: var(--border-red);
  background-color: var(--bg2);
}
</style>
