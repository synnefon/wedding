import { Router } from "./router";
import "./style.css";

const routes: Record<string, string> = {
  "/": "/index.html",
  "/404": "/pages/404.html",
  // fun facts
  // schedule
  // gifts
  // the plan (accomodations, ceremony, dinner, etc.)
  // What to Wear
  // rsvp
};

window.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  const router = new Router({
    onRoute: async (path) => {
      if (routes[path]) {
        const res = await fetch(routes[path]);
        app.innerHTML = await res.text();
        // Re-initialize scroll highlighting after content loads
        initializeScrollHighlighting();
      } else {
        router.navigate("404");
      }
    },
  });

  router.start();

  app.addEventListener("click", (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>("#what-the-heck");
    if (!el) return;
    e.preventDefault();
    e.stopPropagation();
    router.navigate("/home");
  });

  // Initialize scroll highlighting
  initializeScrollHighlighting();
});

function initializeScrollHighlighting() {
  const sections = document.querySelectorAll(".section");
  const menuItems = document.querySelectorAll(".menu-bar-item");

  if (sections.length === 0 || menuItems.length === 0) return;

  function updateActiveMenuItem() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    let activeSectionIndex = -1;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;

      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        activeSectionIndex = index;
      }
    });

    // Update menu items
    menuItems.forEach((item, index) => {
      if (index === activeSectionIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // Add click event listeners to menu items
  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = item.getAttribute("data-section");
      if (sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          // Account for fixed menu bar height
          const menuBarHeight =
            document.querySelector(".menu-bar")?.getBoundingClientRect()
              .height || 0;
          const targetPosition = targetSection.offsetTop - menuBarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Initial check
  updateActiveMenuItem();

  // Add scroll event listener
  window.addEventListener("scroll", updateActiveMenuItem);
}
