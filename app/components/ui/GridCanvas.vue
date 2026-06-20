<template>
  <canvas
    ref="canvasRef"
    class="fixed top-0 left-0 w-screen h-screen z-0 opacity-40 pointer-events-none"
  ></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const canvasRef = ref<HTMLCanvasElement | null>(null);
let resizeHandler: (() => void) | null = null;

function draw() {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.scale(dpr, dpr);

  const w = window.innerWidth;
  const h = window.innerHeight;
  const step = 60;

  // Draw grid lines
  ctx.strokeStyle = "rgba(138, 155, 174, 0.06)";
  ctx.lineWidth = 0.5;

  for (let x = 0; x <= w; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }

  for (let y = 0; y <= h; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Draw dots at intersections (top 600px only)
  ctx.fillStyle = "rgba(138, 155, 174, 0.12)";
  const maxDotY = Math.min(600, h);
  for (let x = 0; x <= w; x += step) {
    for (let y = 0; y <= maxDotY; y += step) {
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

onMounted(() => {
  draw();
  resizeHandler = () => draw();
  window.addEventListener("resize", resizeHandler);
});

onUnmounted(() => {
  if (resizeHandler) {
    window.removeEventListener("resize", resizeHandler);
  }
});
</script>
