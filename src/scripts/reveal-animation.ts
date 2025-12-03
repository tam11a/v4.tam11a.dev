import { gsap, SplitText } from "@/configs/gsap.config";

const initRevealAnimation = () => {
  const revealElements = document.querySelectorAll(".reveal-text");

  revealElements.forEach((element) => {
    // Ensure parent is visible before animating
    gsap.set(element, { visibility: "visible" });
    const split = new SplitText(element, {
      type: "words",
      mask: "words",
    });
    gsap.from(split.words, {
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      y: "100%",
      opacity: 0,
      rotation: 3,
      duration: 0.8,
      stagger: 0.02,
      ease: "power3.out",
    });
  });

  const revealPopElements = document.querySelectorAll(".reveal-pop");

  revealPopElements.forEach((element) => {
    // Ensure parent is visible before animating
    gsap.set(element, { visibility: "visible" });
    gsap.fromTo(
      element,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  const arrowElements = document.querySelectorAll(".reveal-arrow");
  arrowElements.forEach((el) => {
    // Ensure parent is visible before animating
    gsap.set(el, { visibility: "visible" });
    gsap.fromTo(
      el,
      { x: -20, y: 20, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};

document.addEventListener("DOMContentLoaded", initRevealAnimation);
