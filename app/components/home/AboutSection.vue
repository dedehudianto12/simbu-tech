<template>
  <section id="about" class="section-padding border-t border-border">
    <div
      class="mx-auto grid max-w-[1400px] grid-cols-2 items-center gap-[100px] max-lg:grid-cols-1 max-lg:gap-15"
    >
      <!-- Left: Animated Rings -->
      <div class="about-visual reveal">
        <div class="ring ring-1">
          <span class="ring-dot"></span>
        </div>
        <div class="ring ring-2">
          <span class="ring-dot"></span>
        </div>
        <div class="ring ring-3">
          <span class="ring-dot"></span>
        </div>
        <div class="ring-core">
          <span class="ring-core-text">ST</span>
        </div>
      </div>

      <!-- Right: Content -->
      <div class="flex flex-col gap-8">
        <div class="reveal">
          <span class="section-tag">Who We Are</span>
          <h2 class="section-title">
            Technical Excellence,<br />
            <span class="text-red">Personal Touch.</span>
          </h2>
        </div>

        <p
          class="max-w-[520px] text-[15px] leading-[1.7] text-muted reveal"
          style="transition-delay: 0.1s"
        >
          PT Simbu Teknologi Indonesia was founded in 2023 with a clear mission:
          to deliver enterprise-grade IT solutions with a personal, consultative
          approach. Based in Jakarta, we serve clients across industries — from
          port operators and manufacturing to retail and logistics.
        </p>

        <div class="mt-2 grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <div class="highlight reveal" style="transition-delay: 0.15s">
            <span class="font-display text-sm font-semibold text-text"
              >Founded 2023</span
            >
            <span class="text-xs text-muted">Jakarta, Indonesia</span>
          </div>
          <div class="highlight reveal" style="transition-delay: 0.2s">
            <span class="font-display text-sm font-semibold text-text"
              >System Integrator</span
            >
            <span class="text-xs text-muted">End-to-end IT solutions</span>
          </div>
          <div class="highlight reveal" style="transition-delay: 0.25s">
            <span class="font-display text-sm font-semibold text-text"
              >Certified Team</span
            >
            <span class="text-xs text-muted">Up-to-date skills & certs</span>
          </div>
          <div class="highlight reveal" style="transition-delay: 0.3s">
            <span class="font-display text-sm font-semibold text-text"
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
/* Visual — Rings */
.about-visual {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .about-visual {
    max-width: 350px;
  }

  .ring-1 {
    width: 300px;
    height: 300px;
  }
  .ring-2 {
    width: 210px;
    height: 210px;
  }
  .ring-3 {
    width: 120px;
    height: 120px;
  }
}

.ring {
  position: absolute;
  border-radius: 50%;
}

.ring-1 {
  width: 400px;
  height: 400px;
  border: 1px solid rgba(227, 30, 36, 0.15);
  animation: ringRotate1 30s linear infinite;
}

.ring-2 {
  width: 280px;
  height: 280px;
  border: 1px solid rgba(227, 30, 36, 0.3);
  animation: ringRotate2 20s linear infinite reverse;
}

.ring-3 {
  width: 160px;
  height: 160px;
  border: 1px solid rgba(227, 30, 36, 0.6);
  box-shadow:
    0 0 20px rgba(227, 30, 36, 0.1),
    inset 0 0 20px rgba(227, 30, 36, 0.05);
  animation: ringRotate3 10s linear infinite;
}

@keyframes ringRotate1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes ringRotate2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes ringRotate3 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.ring-dot {
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 0 12px var(--red-glow);
}

.ring-core {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid rgba(227, 30, 36, 0.5);
  background: radial-gradient(
    circle,
    rgba(227, 30, 36, 0.3),
    rgba(227, 30, 36, 0.08) 50%,
    transparent 70%
  );
  box-shadow: 0 0 30px rgba(227, 30, 36, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.ring-core-text {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  color: var(--red);
  text-shadow: 0 0 20px rgba(227, 30, 36, 0.5);
}

/* Section tag & title */
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
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
}

/* Highlights */
.highlight {
  border-left: 2px solid var(--red);
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
