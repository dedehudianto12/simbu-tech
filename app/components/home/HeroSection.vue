<template>
  <section
    class="mx-auto max-w-[1400px] hero relative flex min-h-screen items-center pt-[72px] max-md:flex-col max-md:justify-center max-md:px-6"
  >
    <!-- Scanline overlay -->
    <div class="hero-scanlines"></div>

    <!-- Decorative SVG -->
    <svg
      class="hero-svg"
      width="700"
      height="700"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Outer dashed ring — steel -->
      <circle
        cx="250"
        cy="250"
        r="240"
        stroke="#8A9BAE"
        stroke-width="1"
        stroke-dasharray="4 8"
        opacity="0.5"
      />
      <!-- Mid dashed ring — steel -->
      <circle
        cx="250"
        cy="250"
        r="180"
        stroke="#8A9BAE"
        stroke-width="0.8"
        stroke-dasharray="2 12"
        opacity="0.4"
      />
      <!-- Inner solid ring — red -->
      <circle
        cx="250"
        cy="250"
        r="120"
        stroke="#E31E24"
        stroke-width="1.5"
        opacity="0.7"
      />
      <!-- Core ring — red with fill -->
      <circle
        cx="250"
        cy="250"
        r="60"
        stroke="#E31E24"
        stroke-width="2"
        fill="rgba(227,30,36,0.08)"
        opacity="0.8"
      />
      <!-- Hexagon polygon — steel -->
      <polygon
        points="250,10 490,140 490,360 250,490 10,360 10,140"
        stroke="#8A9BAE"
        stroke-width="1"
        fill="none"
        stroke-dasharray="6 10"
        opacity="0.5"
      />
      <!-- Vertex dots — red -->
      <circle cx="250" cy="10" r="5" fill="#E31E24" opacity="0.9" />
      <circle cx="490" cy="140" r="4" fill="#8A9BAE" opacity="0.7" />
      <circle cx="490" cy="360" r="4" fill="#8A9BAE" opacity="0.7" />
      <circle cx="250" cy="490" r="5" fill="#E31E24" opacity="0.9" />
      <circle cx="10" cy="360" r="4" fill="#8A9BAE" opacity="0.7" />
      <circle cx="10" cy="140" r="4" fill="#8A9BAE" opacity="0.7" />
      <!-- Cross lines -->
      <line
        x1="250"
        y1="10"
        x2="250"
        y2="490"
        stroke="#E31E24"
        stroke-width="0.5"
        opacity="0.4"
      />
      <line
        x1="10"
        y1="250"
        x2="490"
        y2="250"
        stroke="#8A9BAE"
        stroke-width="0.5"
        opacity="0.3"
      />
    </svg>

    <div class="hero-content relative z-2 max-w-[720px]">
      <!-- Tag -->
      <div class="mb-8 flex items-center gap-3">
        <span class="block h-px w-10 bg-red opacity-60"></span>
        <span
          class="font-display text-[11px] uppercase tracking-[0.2em] text-red"
          >Jakarta-based IT Solutions</span
        >
        <span class="hero-tag-dot"></span>
      </div>

      <!-- Headline -->
      <h1 class="hero-headline">
        <span class="text-text">WE DELIVER</span>
        <span class="hero-line-outline">BUSINESS</span>
        <span class="hero-line-red">VALUE.</span>
      </h1>

      <!-- Description -->
      <p class="mb-10 max-w-[520px] text-[15px] leading-[1.7] text-muted">
        End-to-end IT solutions for enterprise — from infrastructure and
        cybersecurity to custom software development.
      </p>

      <!-- CTAs -->
      <div class="flex items-center gap-4 max-md:flex-col max-md:items-start">
        <a href="/#services" class="hero-btn-primary"
          >Explore Services
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a
          href="https://drive.google.com/file/d/1Pu5JPHNetO5B14c6C0Kixc9ObgusUZgv/view"
          target="_blank"
          rel="noopener"
          class="hero-btn-secondary"
        >
          ↓ Company Profile
        </a>
      </div>
    </div>

    <!-- Stats -->
    <div class="hero-stats">
      <div class="flex flex-col items-end max-lg:items-start">
        <span class="hero-stat-num">12+</span>
        <span class="hero-stat-label">Enterprise Clients</span>
      </div>
      <div class="flex flex-col items-end max-lg:items-start">
        <span class="hero-stat-num">4</span>
        <span class="hero-stat-label">Core Services</span>
      </div>
      <div class="flex flex-col items-end max-lg:items-start">
        <span class="hero-stat-num">24/7</span>
        <span class="hero-stat-label">IT Support</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Scanlines */
.hero-scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(0, 0, 0, 0.01) 3px,
    rgba(0, 0, 0, 0.01) 4px
  );
  pointer-events: none;
  z-index: 1;
}

/* Decorative SVG */
.hero-svg {
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  width: 700px;
  height: 700px;
  opacity: 0.7;
  animation: heroRotate 40s linear infinite;
  pointer-events: none;
}

@keyframes heroRotate {
  from {
    transform: translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}

/* Content fade-up */
.hero-content {
  animation: fadeUp 1s ease forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Tag dot */
.hero-tag-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--red);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(227, 30, 36, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(227, 30, 36, 0);
  }
}

/* Headline */
.hero-headline {
  display: flex;
  flex-direction: column;
  font-family: var(--font-display);
  font-size: clamp(52px, 7vw, 96px);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 28px;
}

.hero-line-outline {
  color: transparent;
  -webkit-text-stroke: 1px var(--steel);
  opacity: 0.4;
}

.hero-line-red {
  color: var(--red);
  text-shadow: 0 0 40px rgba(227, 30, 36, 0.5);
}

/* Primary CTA */
.hero-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 36px;
  background: var(--red);
  color: #fff;
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.3s;
  clip-path: polygon(
    0 0,
    calc(100% - 12px) 0,
    100% 12px,
    100% 100%,
    12px 100%,
    0 calc(100% - 12px)
  );
}

.hero-btn-primary:hover {
  box-shadow: 0 0 40px rgba(227, 30, 36, 0.45);
  transform: translateY(-2px);
}

/* Secondary CTA */
.hero-btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.05em;
  transition: color 0.3s;
  border-bottom: 1px solid transparent;
}

.hero-btn-secondary:hover {
  color: var(--silver);
  border-bottom-color: var(--steel);
}

/* Stats */
.hero-stats {
  position: absolute;
  right: 60px;
  bottom: 60px;
  display: flex;
  gap: 48px;
  z-index: 2;
}

.hero-stat-num {
  font-family: var(--font-display);
  font-size: 42px;
  font-weight: 700;
  color: var(--red);
  text-shadow: 10px 10px 40px rgba(227, 30, 36, 0.5);
  line-height: 1;
}

.hero-stat-label {
  font-family: var(--font-display);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
  margin-top: 6px;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-svg {
    width: 500px;
    height: 500px;
    right: -100px;
  }

  .hero-stats {
    position: relative;
    right: auto;
    bottom: auto;
    margin-top: 60px;
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  .hero-svg {
    width: 400px;
    height: 400px;
    right: -150px;
    opacity: 0.08;
  }

  .hero-headline {
    font-size: clamp(36px, 10vw, 52px);
  }

  .hero-stats {
    gap: 32px;
    flex-wrap: wrap;
  }

  .hero-stat-num {
    font-size: 28px;
  }
}
</style>
