<template>
  <nav
    class="fixed top-0 left-0 right-0 h-[72px] z-100 border-b border-border bg-[rgba(8,10,12,0.8)] backdrop-blur-[20px]"
  >
    <div
      class="mx-auto flex h-full max-w-[1400px] items-center justify-between max-md:px-6"
    >
      <!-- Logo -->
      <a href="/" class="flex items-center gap-3">
        <div class="flex w-7 flex-col gap-[3px]">
          <span class="block h-[3px] w-full rounded-[1px] bg-steel"></span>
          <span
            class="block h-[3px] w-3/4 rounded-[1px] bg-steel opacity-60"
          ></span>
          <span
            class="stripe-3 block h-[3px] w-1/2 rounded-[1px] bg-red"
          ></span>
        </div>
        <span class="font-display text-lg font-bold tracking-[0.15em]">
          <span class="text-red">SIMBU</span
          ><span class="text-steel font-normal">TECH</span>
        </span>
      </a>

      <!-- Center Links -->
      <div class="flex gap-10 max-md:hidden">
        <a href="/#services" class="nav-link">Services</a>
        <a href="/#clients" class="nav-link">Clients</a>
        <a href="/#about" class="nav-link">About</a>
      </div>

      <!-- CTA -->
      <a
        href="https://wa.link/480xy0"
        target="_blank"
        rel="noopener"
        class="nav-cta max-md:hidden"
      >
        Contact Us →
      </a>

      <!-- Mobile Toggle -->
      <button
        class="nav-mobile-toggle hidden max-md:flex"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <span :class="{ open: mobileOpen }"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="nav-mobile" :class="{ open: mobileOpen }">
      <a href="/#services" class="nav-link" @click="mobileOpen = false"
        >Services</a
      >
      <a href="/#clients" class="nav-link" @click="mobileOpen = false"
        >Clients</a
      >
      <a href="/#about" class="nav-link" @click="mobileOpen = false">About</a>
      <a
        href="https://wa.link/480xy0"
        target="_blank"
        rel="noopener"
        class="nav-cta"
        @click="mobileOpen = false"
        >Contact Us →</a
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const mobileOpen = ref(false);
</script>

<style scoped>
/* Stripe glow */
.stripe-3 {
  box-shadow: 0 2px 12px rgba(227, 30, 36, 0.5);
}

/* Nav link */
.nav-link {
  font-family: var(--font-display);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--red);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--red);
}

.nav-link:hover::after {
  width: 100%;
}

/* CTA */
.nav-cta {
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--red);
  padding: 10px 24px;
  border: 1px solid var(--red);
  clip-path: polygon(
    0 0,
    calc(100% - 12px) 0,
    100% 12px,
    100% 100%,
    12px 100%,
    0 calc(100% - 12px)
  );
  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.nav-cta:hover {
  background: var(--red);
  color: var(--bg);
}

/* Mobile Toggle */
.nav-mobile-toggle {
  width: 32px;
  height: 32px;
  position: relative;
  align-items: center;
  justify-content: center;
}

.nav-mobile-toggle span {
  display: block;
  width: 20px;
  height: 1px;
  background: var(--text);
  position: relative;
  transition: background 0.2s ease;
}

.nav-mobile-toggle span::before,
.nav-mobile-toggle span::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 1px;
  background: var(--text);
  transition: transform 0.3s ease;
}

.nav-mobile-toggle span::before {
  top: -6px;
}

.nav-mobile-toggle span::after {
  top: 6px;
}

.nav-mobile-toggle span.open {
  background: transparent;
}

.nav-mobile-toggle span.open::before {
  top: 0;
  transform: rotate(45deg);
}

.nav-mobile-toggle span.open::after {
  top: 0;
  transform: rotate(-45deg);
}

/* Mobile Menu */
.nav-mobile {
  display: none;
  flex-direction: column;
  gap: 24px;
  padding: 32px 60px;
  background: rgba(8, 10, 12, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.nav-mobile.open {
  display: flex;
}
</style>
