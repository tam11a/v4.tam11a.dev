import { ScrollTrigger, gsap, ScrollSmoother } from "@/configs/gsap.config";

const init = () => {
  // Wait for ScrollSmoother to be ready
  const smoother = ScrollSmoother.get();

  if (!smoother) {
    console.warn("ScrollSmoother is not initialized yet.");
    return;
  }

  // Create matchMedia to only pin on desktop (md breakpoint)
  const mm = gsap.matchMedia();

  document.querySelectorAll(".section-with-sticky-title").forEach((section) => {
    const title = section.querySelector<HTMLElement>(".section-title");
    if (!title) return;

    console.log("Setting up sticky title for section:", section, title);

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top+=32",
        end: "bottom end+=150",
        pin: title,
        pinSpacing: false,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      });
    });
  });

  // Refresh ScrollTrigger after setup
  ScrollTrigger.refresh();
};

// Wait for both DOM and ScrollSmoother
window.addEventListener("load", () => {
  setTimeout(init, 100);
});
