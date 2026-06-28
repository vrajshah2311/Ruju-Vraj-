import { useEffect, useRef } from "react";

/**
 * Adds the `is-in` class to the element (and any descendants with the
 * `reveal` class) when it scrolls into view. Returns a ref to attach.
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.classList.contains("reveal")
      ? [root]
      : Array.from(root.querySelectorAll(".reveal"));

    if (!("IntersectionObserver" in window) || targets.length === 0) {
      targets.forEach((t) => t.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((t, i) => {
      t.style.transitionDelay = `${Math.min(i * 80, 320)}ms`;
      io.observe(t);
    });

    return () => io.disconnect();
  }, []);

  return ref;
}
