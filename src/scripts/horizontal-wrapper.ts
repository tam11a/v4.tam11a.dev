import { gsap } from "@/configs/gsap.config";

const init = () => {
  // Horizontal Scroll Animations
  const horizontalWrappers =
    document.getElementsByClassName("horizontal-wrapper");

  Array.from(horizontalWrappers).forEach((horizontalWrapper) => {
    const sections = gsap.utils.toArray(`#${horizontalWrapper.id}>section`);

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalWrapper as HTMLElement,
        start: "top top",
        end: () => `+=${(horizontalWrapper as HTMLElement).offsetWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
  });
};

document.addEventListener("DOMContentLoaded", init);
