import { Dao, type RSVP, type FamilyResponse } from "./Dao";
import { Router } from "./router";
import { initializeFaqs } from "./faqs";
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
  const statusEl = document.getElementById(
    "rsvp-status"
  ) as HTMLParagraphElement | null;
  const submitBtn = document.getElementById(
    "rsvp-submit"
  ) as HTMLButtonElement | null;
  const familySelector = document.getElementById(
    "family-selector"
  ) as HTMLSelectElement | null;
  const peopleContainer = document.getElementById(
    "people-forms-container"
  ) as HTMLDivElement | null;
  const letterImage = document.querySelector(
    ".section-img-wrapper.letter"
  ) as HTMLElement | null;
  const selectorStage = document.getElementById(
    "rsvp-selector-stage"
  ) as HTMLElement | null;
  const familyStage = document.getElementById(
    "rsvp-family-stage"
  ) as HTMLElement | null;
  const noteEl = document.querySelector(
    ".rsvp-note"
  ) as HTMLParagraphElement | null;
  const costEl = document.getElementById("rsvp-cost") as HTMLParagraphElement | null;
  const costDisplay = document.getElementById("rsvp-cost-display") as HTMLDivElement | null;

  if (
    !form ||
    !familySelector ||
    !peopleContainer ||
    !selectorStage ||
    !familyStage ||
    !noteEl
  )
    return;

  const setStatus = (msg: string, ok = false) => {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.classList.remove("ok", "err");
    statusEl.classList.add(ok ? "ok" : "err");
  };

  const setNote = (msg: string, isError = false, autoHide = false) => {
    if (!noteEl) return;

    noteEl.textContent = msg;
    noteEl.classList.remove("error", "auto-hide");

    if (isError) {
      noteEl.classList.add("error");
    } else if (autoHide && msg) {
      // Force reflow to restart animation
      void noteEl.offsetWidth;
      noteEl.classList.add("auto-hide");
    }
  };

  // Cost calculation
  const MEAL_COSTS: Record<string, number> = {
    "friday-dinner": 0, // complimentary
    "saturday-breakfast": 50,
    "saturday-lunch": 50,
    "saturday-dinner": 0, // complimentary
    "sunday-breakfast": 0, // complimentary
    "sunday-lunch": 50,
  };
  const LODGE_NIGHT_COST = 100;

  const calculateTotalCost = (): number => {
    let total = 0;
    const peopleCount = currentFamilyData?.people.length || 0;

    for (let idx = 0; idx < peopleCount; idx++) {
      // Count lodge nights
      const lodgeInputs = form.querySelectorAll(
        `input[name="person-${idx}-lodge"]:checked`
      ) as NodeListOf<HTMLInputElement>;
      total += lodgeInputs.length * LODGE_NIGHT_COST;

      // Count meals
      const mealInputs = form.querySelectorAll(
        `input[name="person-${idx}-meal"]:checked`
      ) as NodeListOf<HTMLInputElement>;
      mealInputs.forEach((input) => {
        total += MEAL_COSTS[input.value] || 0;
      });
    }

    return total;
  };

  const updateCostDisplay = () => {
    if (!costEl) return;
    const total = calculateTotalCost();
    costEl.textContent = `Total: $${total}`;
  };

  // Load and populate family dropdown from Firebase
  (async () => {
    try {
      const families = await dao.getAllFamilies();
      families.forEach((family) => {
        const option = document.createElement("option");
        option.value = family.key;
        option.textContent = family.name;
        familySelector.appendChild(option);
      });
    } catch (err) {
      console.error("Failed to load families:", err);
      setStatus("Failed to load families", false);
    }
  })();

  // Store current family data for submission
  let currentFamilyData: FamilyResponse | null = null;

  // Handle family selection
  familySelector.addEventListener("change", async () => {
    const familyKey = familySelector.value;

    if (!familyKey) {
      // Stage 1: Selector stage
      form.classList.remove("expanded");
      familyStage.classList.add("hidden");
      if (letterImage) letterImage.style.display = "flex";
      peopleContainer.innerHTML = "";
      currentFamilyData = null;
      if (costDisplay) costDisplay.classList.add("hidden");
      if (costEl) costEl.textContent = "Total: $0";
      return;
    }

    // Stage 2: Family stage (selector remains visible)
    form.classList.add("expanded");
    familyStage.classList.remove("hidden");
    if (letterImage) letterImage.style.display = "none";
    if (costDisplay) costDisplay.classList.remove("hidden");

    // Load family data from Firebase
    const familyData = await dao.getFamilyResponse(familyKey);

    if (!familyData || !familyData.people || familyData.people.length === 0) {
      setNote("No data found for this family", true);
      currentFamilyData = null;
      return;
    }

    // Store for submission
    currentFamilyData = familyData;

    // Clear any previous error messages
    setNote("");

    // Render person forms
    renderPeopleForms(familyData.people);

    // Update cost display after rendering
    updateCostDisplay();
  });

  function renderPeopleForms(people: RSVP[]) {
    if (!peopleContainer) return;
    peopleContainer.innerHTML = "";

    people.forEach((person, idx) => {
      const personDiv = document.createElement("div");
      personDiv.className = "person-form";
      personDiv.innerHTML = `
        <div class="person-header-section">
          <h3 class="person-name">${person.firstName} ${person.lastName}</h3>
          <div class="coming-selector">
            <label for="person-${idx}-attendance">Attending?</label>
            <select name="person-${idx}-attendance" id="person-${idx}-attendance">
              <option value="no" ${!person.coming ? "selected" : ""}>Not coming</option>
              <option value="yes" ${person.coming ? "selected" : ""}>Coming</option>
            </select>
          </div>
        </div>

        <div class="person-details">
          <div class="contact-info-section">
            <label>Email <span class="optional"></span></label>
            <input type="email" name="person-${idx}-email" value="${person.email}" />

            <label>Phone <span class="optional"></span></label>
            <input type="tel" name="person-${idx}-phone" value="${person.phone}" />
          </div>

          <div class="rainbow-lodge-section">
            <label class="section-label">Staying at Rainbow Lodge?</label>
            <div class="rainbow-lodge-nights">
              <label class="night-checkbox">
                <input type="checkbox" name="person-${idx}-lodge" value="friday" ${person.rainbowLodgeNights?.includes("friday") ? "checked" : ""} />
                Friday night
              </label>
              <label class="night-checkbox">
                <input type="checkbox" name="person-${idx}-lodge" value="saturday" ${person.rainbowLodgeNights?.includes("saturday") ? "checked" : ""} />
                Saturday night
              </label>
            </div>
          </div>

          <div class="meals-section">
            <label class="section-label">Joining us for meals?</label>
            <div class="meals-list">
              <label class="meal-checkbox">
                <input type="checkbox" name="person-${idx}-meal" value="friday-dinner" ${person.meals?.includes("friday-dinner") ? "checked" : ""} />
                <span>Friday rehearsal dinner <span class="complimentary">(complimentary)</span></span>
              </label>
              <label class="meal-checkbox">
                <input type="checkbox" name="person-${idx}-meal" value="saturday-breakfast" ${person.meals?.includes("saturday-breakfast") ? "checked" : ""} />
                Saturday breakfast
              </label>
              <label class="meal-checkbox">
                <input type="checkbox" name="person-${idx}-meal" value="saturday-lunch" ${person.meals?.includes("saturday-lunch") ? "checked" : ""} />
                Saturday lunch
              </label>
              <label class="meal-checkbox">
                <input type="checkbox" name="person-${idx}-meal" value="saturday-dinner" checked disabled />
                <span>Saturday wedding dinner <span class="complimentary">(complimentary)</span></span>
              </label>
              <label class="meal-checkbox">
                <input type="checkbox" name="person-${idx}-meal" value="sunday-breakfast" ${person.meals?.includes("sunday-breakfast") ? "checked" : ""} />
                <span>Sunday breakfast <span class="complimentary">(complimentary)</span></span>
              </label>
              <label class="meal-checkbox">
                <input type="checkbox" name="person-${idx}-meal" value="sunday-lunch" ${person.meals?.includes("sunday-lunch") ? "checked" : ""} />
                Sunday lunch
              </label>
            </div>
          </div>

          <label class="dietary-toggle-label">
          Dietary Restrictions?
          <input type="checkbox" class="dietary-toggle" data-person-idx="${idx}" ${person.dietaryRestrictions && person.dietaryRestrictions.length > 0 ? "checked" : ""} />

          </label>

          <div class="dietary-options ${person.dietaryRestrictions && person.dietaryRestrictions.length > 0 ? "" : "hidden"}" id="dietary-${idx}">
            <label class="dietary-checkbox">
              <input type="checkbox" name="person-${idx}-dietary" value="vegetarian" ${person.dietaryRestrictions?.includes("vegetarian") ? "checked" : ""} />
              Vegetarian
            </label>
            <label class="dietary-checkbox">
              <input type="checkbox" name="person-${idx}-dietary" value="vegan" ${person.dietaryRestrictions?.includes("vegan") ? "checked" : ""} />
              Vegan
            </label>
            <label class="dietary-checkbox">
              <input type="checkbox" name="person-${idx}-dietary" value="pescatarian" ${person.dietaryRestrictions?.includes("pescatarian") ? "checked" : ""} />
              Pescatarian
            </label>
            <label class="dietary-checkbox">
              <input type="checkbox" name="person-${idx}-dietary" value="dairy-free" ${person.dietaryRestrictions?.includes("dairy-free") ? "checked" : ""} />
              Dairy-free
            </label>
            <label class="dietary-checkbox">
              <input type="checkbox" name="person-${idx}-dietary" value="nut-free" ${person.dietaryRestrictions?.includes("nut-free") ? "checked" : ""} />
              Nut-free
            </label>
            <label class="dietary-checkbox">
              <input type="checkbox" name="person-${idx}-dietary" value="egg-free" ${person.dietaryRestrictions?.includes("egg-free") ? "checked" : ""} />
              Egg-free
            </label>
            <label class="dietary-checkbox">
              <input type="checkbox" name="person-${idx}-dietary" value="gluten-free" ${person.dietaryRestrictions?.includes("gluten-free") ? "checked" : ""} />
              Gluten-free
            </label>
            <label class="dietary-checkbox">
              <input type="checkbox" name="person-${idx}-dietary" value="other" ${person.dietaryRestrictions?.includes("other") ? "checked" : ""} />
              Other
            </label>
            <div class="dietary-notes ${person.dietaryRestrictions?.includes("other") ? "" : "hidden"}" id="dietary-notes-${idx}">
              <label>Please specify:</label>
              <textarea name="person-${idx}-dietary-notes" rows="2" placeholder="Other dietary restrictions...">${person.dietaryNotes || ""}</textarea>
            </div>
          </div>
        </div>
      `;

      // Add event listener for attendance dropdown
      const attendanceSelect = personDiv.querySelector(
        `#person-${idx}-attendance`
      ) as HTMLSelectElement;
      const details = personDiv.querySelector(".person-details") as HTMLElement;

      const updateDetailsVisibility = () => {
        const isComing = attendanceSelect.value === "yes";
        if (isComing) {
          details.classList.remove("hidden");
        } else {
          details.classList.add("hidden");
        }
      };

      attendanceSelect?.addEventListener("change", updateDetailsVisibility);

      // Set initial state
      updateDetailsVisibility();

      // Add event listener for dietary restrictions toggle
      const dietaryToggle = personDiv.querySelector(
        ".dietary-toggle"
      ) as HTMLInputElement;
      const dietaryOptions = personDiv.querySelector(
        `#dietary-${idx}`
      ) as HTMLElement;

      dietaryToggle?.addEventListener("change", () => {
        if (dietaryToggle.checked) {
          dietaryOptions?.classList.remove("hidden");
        } else {
          dietaryOptions?.classList.add("hidden");
          // Clear all dietary restriction checkboxes
          const dietaryCheckboxes = dietaryOptions?.querySelectorAll(
            `input[name="person-${idx}-dietary"]`
          ) as NodeListOf<HTMLInputElement>;
          dietaryCheckboxes?.forEach((checkbox) => {
            checkbox.checked = false;
          });
          // Clear dietary notes textarea
          const dietaryNotesTextarea = dietaryOptions?.querySelector(
            `textarea[name="person-${idx}-dietary-notes"]`
          ) as HTMLTextAreaElement;
          if (dietaryNotesTextarea) {
            dietaryNotesTextarea.value = "";
          }
          // Hide the notes field
          const dietaryNotesDiv = personDiv.querySelector(
            `#dietary-notes-${idx}`
          ) as HTMLElement;
          dietaryNotesDiv?.classList.add("hidden");
        }
      });

      // Add event listener for "other" checkbox to show/hide notes field
      const otherCheckbox = personDiv.querySelector(
        `input[value="other"]`
      ) as HTMLInputElement;
      const dietaryNotesDiv = personDiv.querySelector(
        `#dietary-notes-${idx}`
      ) as HTMLElement;

      otherCheckbox?.addEventListener("change", () => {
        if (otherCheckbox.checked) {
          dietaryNotesDiv?.classList.remove("hidden");
        } else {
          dietaryNotesDiv?.classList.add("hidden");
        }
      });

      // Add event listeners to lodge and meal checkboxes to update cost
      const lodgeCheckboxes = personDiv.querySelectorAll(
        `input[name="person-${idx}-lodge"]`
      ) as NodeListOf<HTMLInputElement>;
      lodgeCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", updateCostDisplay);
      });

      const mealCheckboxes = personDiv.querySelectorAll(
        `input[name="person-${idx}-meal"]`
      ) as NodeListOf<HTMLInputElement>;
      mealCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", updateCostDisplay);
      });

      peopleContainer.appendChild(personDiv);
    });
  }

  // Handle form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!submitBtn) return;
    submitBtn.disabled = true;

    try {
      const familyKey = familySelector.value;
      if (!currentFamilyData) {
        throw new Error("No family data loaded");
      }

      const fd = new FormData(form);
      const people: RSVP[] = [];

      // Collect data for each person
      for (let idx = 0; idx < currentFamilyData.people.length; idx++) {
        const attendanceValue = String(
          fd.get(`person-${idx}-attendance`) ?? "no"
        );
        const coming = attendanceValue === "yes";

        // Names come from current family data
        const firstName = currentFamilyData.people[idx].firstName;
        const lastName = currentFamilyData.people[idx].lastName;

        // Only collect other data if coming
        const email = coming
          ? String(fd.get(`person-${idx}-email`) ?? "").trim()
          : currentFamilyData.people[idx].email;
        const phone = coming
          ? String(fd.get(`person-${idx}-phone`) ?? "").trim()
          : currentFamilyData.people[idx].phone;

        // Collect Rainbow Lodge nights if coming
        const rainbowLodgeNights: string[] = [];
        if (coming) {
          const lodgeInputs = form.querySelectorAll(
            `input[name="person-${idx}-lodge"]:checked`
          ) as NodeListOf<HTMLInputElement>;
          lodgeInputs.forEach((input) => {
            rainbowLodgeNights.push(input.value);
          });
        }

        // Collect meals if coming
        const meals: string[] = [];
        if (coming) {
          // Always include Saturday/main dinner (it's checked and disabled)
          meals.push("saturday-dinner");

          // Collect other checked meals
          const mealInputs = form.querySelectorAll(
            `input[name="person-${idx}-meal"]:checked:not([disabled])`
          ) as NodeListOf<HTMLInputElement>;
          mealInputs.forEach((input) => {
            meals.push(input.value);
          });
        }

        // Collect dietary restrictions if coming
        const dietaryRestrictions: string[] = [];
        if (coming) {
          const dietaryInputs = form.querySelectorAll(
            `input[name="person-${idx}-dietary"]:checked`
          ) as NodeListOf<HTMLInputElement>;
          dietaryInputs.forEach((input) => {
            dietaryRestrictions.push(input.value);
          });
        }
        const dietaryNotes =
          coming && dietaryRestrictions.includes("other")
            ? String(fd.get(`person-${idx}-dietary-notes`) ?? "").trim()
            : "";

        // Overnight is true if they selected any lodge nights
        const overnight = rainbowLodgeNights.length > 0;

        // Build person object, only including optional fields if they have values
        const person: RSVP = {
          firstName,
          lastName,
          email,
          phone,
          coming,
          overnight,
        };

        if (rainbowLodgeNights.length > 0) {
          person.rainbowLodgeNights = rainbowLodgeNights;
        }
        if (meals.length > 0) {
          person.meals = meals;
        }
        if (dietaryRestrictions.length > 0) {
          person.dietaryRestrictions = dietaryRestrictions;
        }
        if (dietaryNotes) {
          person.dietaryNotes = dietaryNotes;
        }

        people.push(person);
      }

      // Validate: if anyone is coming, at least one coming person must have email and phone
      const comingPeople = people.filter((p) => p.coming);
      if (comingPeople.length > 0) {
        const hasContact = comingPeople.some((p) => p.email && p.phone);
        if (!hasContact) {
          setNote("At least one person needs to provide email and phone", true);
          return;
        }
      }

      const familyResponse: FamilyResponse = {
        familyKey,
        familyName: currentFamilyData.familyName,
        people,
      };

      await dao.saveFamilyResponse(familyResponse);

      const anyoneComing = people.some((p) => p.coming);
      setNote(
        anyoneComing ? "🎉 See you there!" : "Response recorded",
        false,
        true
      );

      // Keep the form populated (don't reset)
    } catch (err) {
      console.error(err);
      setNote("Oops—couldn't save your RSVP. Try again?", true);
    } finally {
      submitBtn.disabled = false;
    }
  });
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
        document.querySelector(".menu-bar")?.getBoundingClientRect().height ||
        0;
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
    ((t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

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
  const prevButton = document.getElementById(
    "prev-tab"
  ) as HTMLButtonElement | null;
  const nextButton = document.getElementById(
    "next-tab"
  ) as HTMLButtonElement | null;

  if (tabButtons.length === 0 || tabPanels.length === 0) return;

  const tabs = Array.from(tabButtons);
  const tabIds = tabs
    .map((btn) => btn.getAttribute("data-tab"))
    .filter(Boolean) as string[];

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
    const scheduleSection = document.getElementById(
      "schedule"
    ) as HTMLDivElement | null;
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
