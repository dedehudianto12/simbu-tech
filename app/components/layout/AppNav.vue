<template>
  <nav
    class="fixed top-0 left-0 right-0 h-[72px] z-100 border-b border-border bg-black/70 backdrop-blur-[12px]"
  >
    <div
      class="mx-auto flex h-full max-w-[1400px] items-center justify-between px-15 max-md:px-6"
    >
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2">
        <svg class="w-5 h-5 text-white" viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,15 90,85 10,85" />
        </svg>
        <span class="font-display text-sm font-bold tracking-[0.2em] text-white">
          SIMBU<span class="text-muted font-normal">TECH</span>
        </span>
      </a>

      <!-- Center Links -->
      <div class="flex gap-8 max-md:hidden">
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
        Contact Us
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
        class="nav-cta text-center"
        @click="mobileOpen = false"
        >Contact Us</a
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const mobileOpen = ref(false);
</script>

<style scoped>
/* Nav link */
.nav-link {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--muted);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--text);
}

/* CTA */
.nav-cta {
  font-family: var(--font-body);
  font-size: 13px;
  color: #000000;
  background: #ffffff;
  padding: 8px 18px;
  border-radius: 6px;
  font-weight: 500;
  transition: background 0.2s ease, opacity 0.2s ease;
}

.nav-cta:hover {
  background: rgba(255, 255, 255, 0.9);
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
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.nav-mobile.open {
  display: flex;
}
</style>
