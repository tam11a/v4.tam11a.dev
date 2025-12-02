const init = () => {
  const percentageElement = document.getElementById("scroll-indicator");

  // Ensure the element exists before trying to use it
  if (!percentageElement) return;

  // Helper to compute combined progress from vertical and horizontal scrolling
  function computeProgress() {
    // Total vertical scrollable length
    const vertMax = document.documentElement.scrollHeight - window.innerHeight;
    // Total horizontal scrollable length
    const horizMax = document.documentElement.scrollWidth - window.innerWidth;

    const vertProgress = vertMax > 0 ? window.scrollY / vertMax : 0;
    const horizProgress = horizMax > 0 ? window.scrollX / horizMax : 0;

    // Choose the larger of the two progress values so horizontal scrolling
    // advances the indicator when vertical is unchanged (and vice-versa).
    return Math.max(vertProgress, horizProgress);
  }

  function updateIndicator() {
    if (!percentageElement) return;
    const progress = computeProgress(); // 0..1
    // Maintain the original visual direction: 100 -> 0 as user scrolls
    const percentage = 100 - progress * 100;
    percentageElement.setAttribute(
      "stroke-dashoffset",
      `${percentage.toFixed(0)}`
    );
  }

  // Update on scroll and resize so horizontal/vertical changes are captured
  window.addEventListener("scroll", updateIndicator, { passive: true });
  window.addEventListener("resize", updateIndicator);

  // Also trigger an initial update
  updateIndicator();
};

document.addEventListener("DOMContentLoaded", init);
