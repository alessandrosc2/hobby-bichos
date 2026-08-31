import { useEffect } from "react";

/**
 * Reveals elements marked with `data-reveal` (single block) or
 * `data-reveal-group` (children stagger in) when they scroll into view.
 *
 * Content stays fully visible without JS: the hiding styles only apply once
 * this hook adds the `reveal-ready` class to <html> on the client.
 */
export function useScrollReveal() {
  useEffect(() => {
    const doc = document.documentElement;
    doc.classList.add("reveal-ready");

    const targets = Array.from(
      doc.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-group]"),
    );
    if (targets.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
