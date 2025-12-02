// Preloader element reference
let preloader: HTMLElement | null;

// Get the preloader element
const getPreloader = () => {
  preloader = document.getElementById("preloader");
};

// Function to hide the preloader
const hide = () => {
  if (preloader) {
    preloader.classList.add("hidden");
  }
};

// Function to show the preloader
const show = () => {
  if (preloader) {
    preloader.classList.remove("hidden");
  }
};

const togglePreloader = async () => {
  if (sessionStorage.getItem("preloaderShown")) {
    hide();
    return;
  }
  console.log("Loading assets...");
  show();
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading time
  } catch (error) {
    console.error("Failed to load assets or animate:", error);
  } finally {
    sessionStorage.setItem("preloaderShown", "true");
  }
};

const initPreloader = () => {
  getPreloader();
  togglePreloader();
};

// Listen for Astro's lifecycle events.
document.addEventListener("astro:page-load", () => {
  initPreloader();
});

// document.addEventListener("astro:before-swap", () => {
//   handlePageEvent("before-swap", cleanup);
// });

// Clear the preload flag before page unload to ensure the loader appears on refresh.
window.addEventListener("beforeunload", () => {
  sessionStorage.removeItem("preloadComplete");
});
