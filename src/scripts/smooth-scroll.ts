import { ScrollSmoother } from "@/configs/gsap.config";

const init = () => {
  // creates the scrollSmoother
  ScrollSmoother.create({
    content: "#smooth-scroll-content",
    smooth: 1.5, // Smoothness duration (seconds)
    smoothTouch: 0.1, // Slight smoothing on touch devices
    effects: true,
    normalizeScroll: true,
    autoResize: true,
    ease: "power1.out",
  });
};

document.addEventListener("DOMContentLoaded", init);
