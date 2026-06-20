import { ref, onMounted, onUnmounted } from "vue";

export function useCursor() {
  const cursorX = ref(0);
  const cursorY = ref(0);
  const ringX = ref(0);
  const ringY = ref(0);
  const isHovering = ref(false);

  let animationId: number | null = null;

  function onMouseMove(e: MouseEvent) {
    cursorX.value = e.clientX;
    cursorY.value = e.clientY;
  }

  function onMouseOver(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (
      target.closest("a") ||
      target.closest("button") ||
      target.closest("[data-hover]")
    ) {
      isHovering.value = true;
    }
  }

  function onMouseOut(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (
      target.closest("a") ||
      target.closest("button") ||
      target.closest("[data-hover]")
    ) {
      isHovering.value = false;
    }
  }

  function animate() {
    const lerp = 0.12;
    ringX.value += (cursorX.value - ringX.value) * lerp;
    ringY.value += (cursorY.value - ringY.value) * lerp;
    animationId = requestAnimationFrame(animate);
  }

  onMounted(() => {
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    animate();
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseover", onMouseOver);
    document.removeEventListener("mouseout", onMouseOut);
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
    }
  });

  return { cursorX, cursorY, ringX, ringY, isHovering };
}
