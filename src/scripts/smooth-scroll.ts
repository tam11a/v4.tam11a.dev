import { ScrollSmoother } from "@/configs/gsap.config";

const init = () => {
  // creates the scrollSmoother
  ScrollSmoother.create({
    content: "#smooth-scroll-content",
    smooth: 1.5,
    effects: true,
    normalizeScroll: true,
    smoothTouch: true,
    autoResize: true,
    ease: "power1.out",
    ignoreMobileResize: true,
  });
};

document.addEventListener("DOMContentLoaded", init);
