<template>
  <section
    class="section-padding relative flex items-center justify-center overflow-hidden border-t border-border text-center"
  >
    <div class="cta-glow"></div>
    <div class="relative z-2 flex flex-col items-center gap-6 reveal">
      <span class="section-tag">Get Started</span>
      <h2 class="cta-title">
        Ready to Upgrade Your<br />
        <span class="text-red">IT Infrastructure?</span>
      </h2>
      <p class="max-w-[420px] text-[15px] text-muted">
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
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(227, 30, 36, 0.06), transparent 70%);
  pointer-events: none;
}

.section-tag {
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--red);
  opacity: 0.6;
}

.cta-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
}

.cta-button {
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

.cta-button:hover {
  box-shadow: 0 0 40px rgba(227, 30, 36, 0.45);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .cta-glow {
    width: 300px;
    height: 300px;
  }
}
</style>
