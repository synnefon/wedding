import { Dao, type RSVP } from "./Dao";
import { Router } from "./router";
import { initializeFaqs } from "./faqs"; // 👈 new
import "./style.css";

const routes: Record<string, string> = {
  "/404": "/pages/404.html",
};

const fetchElement = <T extends HTMLElement>(id: string): T | null =>
  document.getElementById(id) as T | null;

const dao = new Dao();

const initializeMainPageBehavior = () => {
  initializeScrollHighlighting();
  initializeScheduleTabs();
  initializeRsvpForm();
  initializeFaqs(dao); // 👈 pass dao in
};

window.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  const router = new Router({
    onRoute: async (path: string) => {
      if (path === "/" || path === "") {
        initializeMainPageBehavior();
        return;
      } else if (routes[path]) {
        const res = await fetch(routes[path]);
        app.innerHTML = await res.text();
        initializeMainPageBehavior();
      } else {
        router.navigate("404");
      }
    },
  });

  router.start();
});

/** RSVP */
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

  if (!form) return;

  const setStatus = (msg: string, ok = false) => {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.classList.remove("ok", "err");
    statusEl.classList.add(ok ? "ok" : "err");
  };

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
        setStatus(rsvp.coming ? "🎉 See you there!" : "Response recorded", true);
        form.reset();
        toggleOvernight(false);
      } catch (err) {
        console.error(err);
        setStatus("Oops—couldn't save your RSVP. Try again?", false);
      } finally {
        submitBtn.disabled = false;
      }
    },
    { once: true }
  );
}

/** Menu scroll highlight + smooth scroll */
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

    menuItems.forEach((item, index) => {
      if (index === activeSectionIndex) item.classList.add("active");
      else item.classList.remove("active");
    });
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = item.getAttribute("data-section");
      if (!sectionId) return;
      const targetSection = document.getElementById(sectionId);
      if (!targetSection) return;

      const menuBarHeight =
        document.querySelector(".menu-bar")?.getBoundingClientRect().height || 0;
      const targetPosition = targetSection.offsetTop - menuBarHeight;
      smoothScrollToY(targetPosition);
    });
  });

  updateActiveMenuItem();
  window.addEventListener("scroll", updateActiveMenuItem);
}

// Smooth scroll helper
function smoothScrollToY(
  targetY: number,
  opts: {
    baseDuration?: number; // ms per 1000px
    minDuration?: number;
    maxDuration?: number;
    easing?: (t: number) => number;
  } = {}
) {
  const startY = window.scrollY;
  const distance = Math.abs(targetY - startY);

  const baseDuration = opts.baseDuration ?? 700;
  const minDuration = opts.minDuration ?? 300;
  const maxDuration = opts.maxDuration ?? 1400;

  const duration = Math.min(
    maxDuration,
    Math.max(minDuration, (distance / 1000) * baseDuration)
  );

  const easing =
    opts.easing ??
    ((t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2));

  const prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    window.scrollTo(0, targetY);
    return;
  }

  const start = performance.now();
  const delta = targetY - startY;
  let canceled = false;

  const cancel = () => {
    canceled = true;
    cleanup();
  };
  const cleanup = () => {
    window.removeEventListener("wheel", cancel, { passive: true } as any);
    window.removeEventListener("touchstart", cancel, { passive: true } as any);
    window.removeEventListener("keydown", cancel);
  };

  window.addEventListener("wheel", cancel, { passive: true } as any);
  window.addEventListener("touchstart", cancel, { passive: true } as any);
  window.addEventListener("keydown", cancel);

  function tick(now: number) {
    if (canceled) return;
    const t = Math.min(1, (now - start) / duration);
    const y = startY + delta * easing(t);
    window.scrollTo(0, y);
    if (t < 1) requestAnimationFrame(tick);
    else cleanup();
  }

  requestAnimationFrame(tick);
}

/** Schedule tabs */
function initializeScheduleTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanels = document.querySelectorAll(".tab-panel");
  const prevButton = document.getElementById("prev-tab") as HTMLButtonElement | null;
  const nextButton = document.getElementById("next-tab") as HTMLButtonElement | null;

  if (tabButtons.length === 0 || tabPanels.length === 0) return;

  const tabs = Array.from(tabButtons);
  const tabIds = tabs.map(btn => btn.getAttribute("data-tab")).filter(Boolean) as string[];

  function switchToTab(targetTab: string) {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanels.forEach((panel) => panel.classList.remove("active"));

    const targetButton = document.querySelector(`[data-tab="${targetTab}"]`);
    const targetPanel = document.getElementById(targetTab);

    targetButton?.classList.add("active");
    targetPanel?.classList.add("active");
    updateArrowStates(targetTab);
  }

  function updateArrowStates(currentTab: string) {
    const currentIndex = tabIds.indexOf(currentTab);
    if (prevButton) prevButton.disabled = currentIndex === 0;
    if (nextButton) nextButton.disabled = currentIndex === tabIds.length - 1;
  }

  function getCurrentActiveTab(): string | null {
    const activeButton = document.querySelector(".tab-button.active");
    return activeButton?.getAttribute("data-tab") || null;
  }

  function navigateToPrevious() {
    const currentTab = getCurrentActiveTab();
    if (!currentTab) return;
    const currentIndex = tabIds.indexOf(currentTab);
    if (currentIndex > 0) switchToTab(tabIds[currentIndex - 1]);
  }

  function navigateToNext() {
    const currentTab = getCurrentActiveTab();
    if (!currentTab) return;
    const currentIndex = tabIds.indexOf(currentTab);
    if (currentIndex < tabIds.length - 1) switchToTab(tabIds[currentIndex + 1]);
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const targetTab = button.getAttribute("data-tab");
      if (!targetTab) return;
      switchToTab(targetTab);
    });
  });

  if (prevButton) {
    prevButton.addEventListener("click", (e) => {
      e.preventDefault();
      navigateToPrevious();
    });
  }
  if (nextButton) {
    nextButton.addEventListener("click", (e) => {
      e.preventDefault();
      navigateToNext();
    });
  }

  function handleKeyDown(e: KeyboardEvent) {
    const scheduleSection = document.getElementById("schedule") as HTMLDivElement | null;
    if (!scheduleSection) return;
    const rect = scheduleSection.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return;

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      navigateToPrevious();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      navigateToNext();
    }
  }

  document.addEventListener("keydown", handleKeyDown);

  const currentTab = getCurrentActiveTab();
  if (currentTab) updateArrowStates(currentTab);
}
