<template>
  <footer class="border-t border-border px-15 py-15 max-md:px-6 max-md:py-10">
    <div
      class="mx-auto flex max-w-[1400px] items-center justify-between max-md:flex-col max-md:gap-6 max-md:text-center"
    >
      <span
        class="font-display text-[11px] uppercase tracking-[0.12em] text-muted"
      >
        © 2025 PT SIMBU TEKNOLOGI INDONESIA
      </span>
      <div
        class="flex items-center gap-4 max-md:flex-wrap max-md:justify-center"
      >
        <a href="mailto:sales@simbu.co.id" class="footer-link"
          >sales@simbu.co.id</a
        >
        <span class="text-[6px] text-red/30">◆</span>
        <a href="tel:+62818838183" class="footer-link">+62 818838183</a>
        <span class="text-[6px] text-red/30">◆</span>
        <a href="/#services" class="footer-link">Services</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--muted);
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--red);
}
</style>
