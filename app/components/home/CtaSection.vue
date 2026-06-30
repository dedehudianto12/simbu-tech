<template>
  <section
    class="section-padding relative flex items-center justify-center overflow-hidden dark:border-border text-center bg-white dark:bg-black"
  >
    <div class="cta-glow"></div>
    <div class="relative z-2 flex flex-col items-center gap-6 reveal">
      <span class="section-tag">Get Started</span>
      <h2 class="cta-title">
        Ready to Upgrade Your<br />
        <span style="color: var(--text)">IT Infrastructure?</span>
      </h2>
      <p class="max-w-[420px] text-[15px]" style="color: var(--muted)">
        Let's talk about how Simbu can accelerate your business.
      </p>
      <a
        href="https://wa.link/480xy0"
        target="_blank"
        rel="noopener"
        class="cta-button"
      >
        Contact Us on WhatsApp
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
    </div>
  </section>
</template>

<style scoped>
.cta-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.03),
    transparent 70%
  );
  pointer-events: none;
}

.cta-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.cta-button {
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

.cta-button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .cta-glow {
    width: 300px;
    height: 300px;
  }
}
</style>
