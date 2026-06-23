<template>
  <section
    class="mx-auto max-w-[1400px] hero relative flex min-h-screen items-center overflow-hidden pt-[72px] px-15 max-md:flex-col max-md:justify-center max-md:px-6"
  >
    <!-- Background Radial Glow -->
    <div class="hero-glow"></div>

    <div class="hero-content relative z-2 max-w-[720px]">
      <!-- Tag -->
      <div class="mb-6 flex items-center gap-3">
        <span class="block h-px w-8 bg-white opacity-40"></span>
        <span
          class="font-body text-[11px] uppercase tracking-[0.2em] text-muted"
          >Jakarta-based IT Solutions</span
        >
      </div>

      <!-- Headline -->
      <h1 class="hero-headline">
        <span class="text-white">WE DELIVER</span>
        <span class="hero-gradient-text">BUSINESS VALUE.</span>
      </h1>

      <!-- Description -->
      <p class="mb-10 max-w-[520px] text-[15px] leading-[1.7] text-muted">
        End-to-end IT solutions for enterprise — from infrastructure and
        cybersecurity to custom software development.
      </p>

      <!-- CTAs -->
      <div class="flex items-center gap-4 max-md:flex-col max-md:items-start">
        <a href="/#services" class="hero-btn-primary">Explore Services </a>
        <a
          href="https://drive.google.com/file/d/1Pu5JPHNetO5B14c6C0Kixc9ObgusUZgv/view"
          target="_blank"
          rel="noopener"
          class="hero-btn-secondary"
        >
          Company Profile
        </a>
      </div>
    </div>

    <!-- Stats -->
    <div class="hero-stats">
      <div class="flex flex-col items-end max-lg:items-start stat-item">
        <span class="hero-stat-num">12+</span>
        <span class="hero-stat-label">Enterprise Clients</span>
      </div>
      <div class="flex flex-col items-end max-lg:items-start stat-item">
        <span class="hero-stat-num">4</span>
        <span class="hero-stat-label">Core Services</span>
      </div>
      <div class="flex flex-col items-end max-lg:items-start stat-item">
        <span class="hero-stat-num">24/7</span>
        <span class="hero-stat-label">IT Support</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-color: #000000;
}

/* Background Radial Glow */
.hero-glow {
  position: absolute;
  right: -5%;
  top: 15%;
  width: 700px;
  height: 700px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.05),
    transparent 70%
  );
  filter: blur(80px);
  pointer-events: none;
  z-index: 1;
}

/* Content fade-up */
.hero-content {
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  z-index: 2;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Headline */
.hero-headline {
  display: flex;
  flex-direction: column;
  font-family: var(--font-display);
  font-size: clamp(48px, 7vw, 92px);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 24px;
  letter-spacing: -0.03em;
}

.hero-gradient-text {
  background: linear-gradient(180deg, #ffffff 30%, #888888 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Primary CTA */
.hero-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: #ffffff;
  color: #000000;
  text-decoration: none;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 14px;
  border-radius: 6px;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.hero-btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary CTA */
.hero-btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  text-decoration: none;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 14px;
  border-radius: 6px;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.hero-btn-secondary:hover {
  border-color: var(--text);
  background-color: rgba(255, 255, 255, 0.05);
  transform: translateY(-1px);
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

.stat-item {
  border-left: 1px solid var(--border);
  padding-left: 20px;
}

.hero-stat-num {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
}

.hero-stat-label {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--muted);
  margin-top: 6px;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-glow {
    width: 450px;
    height: 450px;
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
  .hero-glow {
    opacity: 0.15;
    right: -10%;
  }

  .hero-headline {
    font-size: clamp(36px, 10vw, 52px);
  }

  .hero-stats {
    gap: 24px;
    flex-wrap: wrap;
  }

  .hero-stat-num {
    font-size: 28px;
  }
}
</style>
