import { useEffect } from "react";

export const useScrollReveal = (options?: IntersectionObserverInit) => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]")).filter(
      (el) => !el.dataset.animateBound,
    );

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target as Element);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 0px 0px",
        ...options,
      },
    );

    elements.forEach((element) => {
      element.dataset.animateBound = "true";
      element.classList.add("reveal-element");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [options]);
};

export default useScrollReveal;
