<template>
  <div class="pointer-events-none fixed top-0 left-0 z-[10000]">
    <div
      class="cursor-dot"
      :style="{ transform: `translate(${cursorX - 5}px, ${cursorY - 5}px)` }"
    ></div>
    <div
      class="cursor-ring"
      :class="{ hovering: isHovering }"
      :style="{
        transform: `translate(${ringX - 18}px, ${ringY - 18}px) scale(${isHovering ? 1.5 : 1})`,
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useCursor } from "~/composables/useCursor";

const { cursorX, cursorY, ringX, ringY, isHovering } = useCursor();
</script>

<style scoped>
.cursor-dot {
  width: 10px;
  height: 10px;
  background: var(--red);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  will-change: transform;
  box-shadow:
    0 0 12px var(--red-glow),
    0 0 24px var(--red-dim);
}

.cursor-ring {
  width: 36px;
  height: 36px;
  border: 1px solid var(--red);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  will-change: transform;
  transition:
    border-color 0.2s ease,
    opacity 0.2s ease;
  opacity: 0.5;
}

.cursor-ring.hovering {
  border-color: rgba(227, 30, 36, 0.5);
  opacity: 0.8;
}
</style>
