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
  width: 6px;
  height: 6px;
  background: #ffffff;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  will-change: transform;
}

.cursor-ring {
  width: 24px;
  height: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  will-change: transform;
  transition:
    border-color 0.2s ease,
    opacity 0.2s ease,
    transform 0.2s ease;
  opacity: 0.6;
}

.cursor-ring.hovering {
  border-color: rgba(255, 255, 255, 0.6);
  opacity: 0.9;
}
</style>
