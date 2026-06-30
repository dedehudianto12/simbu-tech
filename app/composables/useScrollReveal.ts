import { onMounted, onUnmounted, type Ref } from "vue";

export function useScrollReveal(root?: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    const container = root?.value ?? document;
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    container.querySelectorAll(".reveal").forEach((el) => {
      observer!.observe(el);
    });
  });

  onUnmounted(() => {
    observer?.disconnect();
  });
}
