<template>
  <footer class="border-t border-gray-200 dark:border-border px-15 py-15 max-md:px-6 max-md:py-10 bg-white dark:bg-black">
    <div
      class="mx-auto flex max-w-[1400px] items-center justify-between max-md:flex-col max-md:gap-6 max-md:text-center"
    >
      <span
        class="font-body text-[12px] tracking-[0.05em]"
        style="color: var(--muted)"
      >
        © 2026 PT SIMBU TEKNOLOGI INDONESIA
      </span>
      <div
        class="flex items-center gap-4 max-md:flex-wrap max-md:justify-center text-[12px]"
      >
        <a href="mailto:sales@simbu.co.id" class="footer-link"
          >sales@simbu.co.id</a
        >
        <span class="text-[#333]">/</span>
        <a href="tel:+62818838183" class="footer-link">+62 818838183</a>
        <span class="text-[#333]">/</span>
        <a href="/#services" class="footer-link">Services</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer-link {
  font-family: var(--font-body);
  color: var(--muted);
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--text);
}
</style>
