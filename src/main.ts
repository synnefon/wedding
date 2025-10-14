import { Dao, type RSVP } from "./Dao";
import { Router } from "./router";
import "./style.css";

const routes: Record<string, string> = {
  "/": "/index.html",
  "/404": "/pages/404.html",
  "/rsvp": "/pages/rsvp.html",
};

const fetchElement = <T extends HTMLElement>(id: string): T | null => {
  const elem = document.getElementById(id) as T | null;
  return elem;
};

const dao = new Dao();

/** Wire up the RSVP form if it exists on the page */
function initializeRsvpForm() {
  const form = document.getElementById("rsvp-form") as HTMLFormElement | null;
  const statusEl = document.getElementById("rsvp-status") as HTMLParagraphElement | null;
  const submitBtn = form?.querySelector('button[type="submit"]') as HTMLButtonElement | null;
  const comingEl = form?.querySelector<HTMLInputElement>('input[name="coming"]');
  const overnightEl = form?.querySelector<HTMLInputElement>('#overnight');
  const overnightLabel = form?.querySelector<HTMLElement>('.overnight-label');

  const toggleOvernight = (show: boolean) => {
    overnightEl?.classList.toggle("invisible", !show);
    overnightLabel?.classList.toggle("invisible", !show);
    if (!show && overnightEl) overnightEl.checked = false;
  };

  toggleOvernight(!!comingEl?.checked);
  comingEl?.addEventListener("change", () => toggleOvernight(!!comingEl.checked));

  if (!form) return; // Not on a page/section with the form—nothing to do.

  const setStatus = (msg: string, ok = false) => {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.classList.remove("ok", "err");
    statusEl.classList.add(ok ? "ok" : "err");
  };

  // Ensure we don't stack multiple listeners if this is re-run after router swaps
  form.addEventListener(
    "submit",
    async (e) => {
      e.preventDefault();

      if (!submitBtn) return;
      submitBtn.disabled = true;

      try {
        const fd = new FormData(form);
        const firstName = String(fd.get("first-name") ?? "").trim();
        const lastName = String(fd.get("last-name") ?? "").trim();
        const comment = String(fd.get("comment") ?? "").trim();
        const comingBx = fetchElement<HTMLInputElement>("coming");
        const overnightBx = fetchElement<HTMLInputElement>("overnight");

        const coming = comingBx?.checked ?? false;
        const overnight = overnightBx?.checked ?? false;

        const rsvp: RSVP = { firstName, lastName, comment, coming, overnight };

        await dao.addRsvp(rsvp);
        if (rsvp.coming) {
          setStatus("🎉 See you there!", true);
        } else {
          setStatus("Response recorded", true);
        }
        form.reset();
        toggleOvernight(false);
      } catch (err) {
        console.error(err);
        setStatus("Oops—couldn’t save your RSVP. Try again?", false);
      } finally {
        submitBtn.disabled = false;
      }
    },
    { once: true } // prevent duplicate handlers on re-init
  );
}

window.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  let rsvpButton = fetchElement<HTMLButtonElement>("rsvp-btn");

  const router = new Router({
    onRoute: async (path) => {
      if (routes[path]) {
        const res = await fetch(routes[path]);
        app.innerHTML = await res.text();

        // Re-initialize behaviors after content loads
        initializeScrollHighlighting();
        // Wire up RSVP form if the current content includes it
        initializeRsvpForm();

        if (path === "/") {
          rsvpButton = fetchElement<HTMLButtonElement>("rsvp-btn");
          rsvpButton?.addEventListener("click", (e) => {
            e.preventDefault();
            router.navigate("rsvp");
          });
        }
      } else {
        router.navigate("404");
      }
    },
  });

  router.start();

  // Initial page already has content; wire everything up
  initializeScrollHighlighting();
  initializeRsvpForm();
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
      if (!sectionId) return;
      const targetSection = document.getElementById(sectionId);
      if (!targetSection) return;

      // Account for fixed menu bar height
      const menuBarHeight =
        document.querySelector(".menu-bar")?.getBoundingClientRect().height || 0;
      const targetPosition = targetSection.offsetTop - menuBarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });

  // Initial check
  updateActiveMenuItem();

  // Add scroll event listener
  window.addEventListener("scroll", updateActiveMenuItem);
}

