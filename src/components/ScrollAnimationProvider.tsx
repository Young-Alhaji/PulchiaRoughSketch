"use client";

import { useEffect } from "react";

export default function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;

          // Add different animation classes based on data attributes
          if (element.dataset.scrollAnimation) {
            element.classList.add(element.dataset.scrollAnimation);
          }

          // Add staggered animations for children
          if (element.dataset.staggerChildren) {
            const children = element.querySelectorAll("[data-stagger-item]");
            children.forEach((child, index) => {
              const htmlChild = child as HTMLElement;
              setTimeout(() => {
                htmlChild.classList.add("animate-scroll-fade-in-up");
              }, index * 150);
            });
          }

          // Add floating animation for cards
          if (element.dataset.floatingCard) {
            element.classList.add("animate-scroll-float-in");
            setTimeout(() => {
              element.classList.add("animate-floating-continuous");
            }, 800);
          }

          // Add scale animation for rate cards
          if (element.dataset.scaleCard) {
            setTimeout(() => {
              element.classList.add("animate-scroll-scale-in");
            }, parseInt(element.dataset.delay || "0"));
          }
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animations
    const scrollElements = document.querySelectorAll(
      "[data-scroll-animation], [data-stagger-children], [data-floating-card], [data-scale-card]"
    );
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return <>{children}</>;
}
