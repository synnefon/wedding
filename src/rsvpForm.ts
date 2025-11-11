import { Dao, type RSVP, type FamilyResponse } from "./Dao";

export function initializeRsvpForm(dao: Dao) {
  const form = document.getElementById("rsvp-form") as HTMLFormElement | null;
  const statusEl = document.getElementById(
    "rsvp-status"
  ) as HTMLParagraphElement | null;
  const submitBtn = document.getElementById(
    "rsvp-submit"
  ) as HTMLButtonElement | null;
  const addPersonBtn = document.getElementById(
    "add-person-btn"
  ) as HTMLButtonElement | null;
  const peopleContainer = document.getElementById(
    "people-forms-container"
  ) as HTMLDivElement | null;
  const noteEl = document.querySelector(
    ".rsvp-note"
  ) as HTMLParagraphElement | null;
  const costEl = document.getElementById("rsvp-cost") as HTMLParagraphElement | null;
  const costDisplay = document.getElementById("rsvp-cost-display") as HTMLDivElement | null;

  if (!form || !peopleContainer || !addPersonBtn || !noteEl) return;

  let personCount = 0;

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

    for (let idx = 0; idx < personCount; idx++) {
      const personForm = document.querySelector(`[data-person-idx="${idx}"]`) as HTMLElement;
      if (!personForm) continue;

      // Count lodge nights
      const lodgeInputs = personForm.querySelectorAll(
        `input[name="person-${idx}-lodge"]:checked`
      ) as NodeListOf<HTMLInputElement>;
      total += lodgeInputs.length * LODGE_NIGHT_COST;

      // Count meals
      const mealInputs = personForm.querySelectorAll(
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

  const addPersonForm = (person?: RSVP) => {
    const idx = personCount++;
    const personDiv = document.createElement("div");
    personDiv.className = "person-form";
    personDiv.setAttribute("data-person-idx", String(idx));
    personDiv.innerHTML = `
      <div class="person-header-section">
        <div class="person-name-inputs">
          <div class="name-input-group">
            <label>First Name <span class="required">*</span></label>
            <input type="text" name="person-${idx}-firstName" value="${person?.firstName || ""}" required />
          </div>
          <div class="name-input-group">
            <label>Last Name <span class="required">*</span></label>
            <input type="text" name="person-${idx}-lastName" value="${person?.lastName || ""}" required />
          </div>
        </div>
        <button type="button" class="remove-person-btn" data-remove-idx="${idx}">🗑️</button>
      </div>

      <div class="person-details">
        <div class="contact-info-section">
          <label>Email <span class="optional"></span></label>
          <input type="email" name="person-${idx}-email" value="${person?.email || ""}" />

          <label>Phone <span class="optional"></span></label>
          <input type="tel" name="person-${idx}-phone" value="${person?.phone || ""}" />
        </div>

        <div class="rainbow-lodge-section">
          <label class="section-label">Staying at Rainbow Lodge?</label>
          <div class="rainbow-lodge-nights">
            <label class="night-checkbox">
              <input type="checkbox" name="person-${idx}-lodge" value="friday" ${person?.rainbowLodgeNights?.includes("friday") ? "checked" : ""} />
              Friday night
            </label>
            <label class="night-checkbox">
              <input type="checkbox" name="person-${idx}-lodge" value="saturday" ${person?.rainbowLodgeNights?.includes("saturday") ? "checked" : ""} />
              Saturday night
            </label>
          </div>
        </div>

        <div class="meals-section">
          <label class="section-label">Joining us for meals?</label>
          <div class="meals-list">
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${idx}-meal" value="friday-dinner" ${person?.meals?.includes("friday-dinner") ? "checked" : ""} />
              <span>Friday rehearsal dinner <span class="complimentary">(complimentary)</span></span>
            </label>
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${idx}-meal" value="saturday-breakfast" ${person?.meals?.includes("saturday-breakfast") ? "checked" : ""} />
              Saturday breakfast
            </label>
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${idx}-meal" value="saturday-lunch" ${person?.meals?.includes("saturday-lunch") ? "checked" : ""} />
              Saturday lunch
            </label>
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${idx}-meal" value="saturday-dinner" checked disabled />
              <span>Saturday wedding dinner <span class="complimentary">(complimentary)</span></span>
            </label>
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${idx}-meal" value="sunday-breakfast" ${person?.meals?.includes("sunday-breakfast") ? "checked" : ""} />
              <span>Sunday breakfast <span class="complimentary">(complimentary)</span></span>
            </label>
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${idx}-meal" value="sunday-lunch" ${person?.meals?.includes("sunday-lunch") ? "checked" : ""} />
              Sunday lunch
            </label>
          </div>
        </div>

        <label class="dietary-toggle-label">
          Dietary Restrictions?
          <input type="checkbox" class="dietary-toggle" data-dietary-idx="${idx}" ${person?.dietaryRestrictions && person.dietaryRestrictions.length > 0 ? "checked" : ""} />
        </label>

        <div class="dietary-options ${person?.dietaryRestrictions && person.dietaryRestrictions.length > 0 ? "" : "hidden"}" id="dietary-${idx}">
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="vegetarian" ${person?.dietaryRestrictions?.includes("vegetarian") ? "checked" : ""} />
            Vegetarian
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="vegan" ${person?.dietaryRestrictions?.includes("vegan") ? "checked" : ""} />
            Vegan
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="pescatarian" ${person?.dietaryRestrictions?.includes("pescatarian") ? "checked" : ""} />
            Pescatarian
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="dairy-free" ${person?.dietaryRestrictions?.includes("dairy-free") ? "checked" : ""} />
            Dairy-free
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="nut-free" ${person?.dietaryRestrictions?.includes("nut-free") ? "checked" : ""} />
            Nut-free
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="egg-free" ${person?.dietaryRestrictions?.includes("egg-free") ? "checked" : ""} />
            Egg-free
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="gluten-free" ${person?.dietaryRestrictions?.includes("gluten-free") ? "checked" : ""} />
            Gluten-free
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="other" ${person?.dietaryRestrictions?.includes("other") ? "checked" : ""} />
            Other
          </label>
          <div class="dietary-notes ${person?.dietaryRestrictions?.includes("other") ? "" : "hidden"}" id="dietary-notes-${idx}">
            <label>Please specify:</label>
            <textarea name="person-${idx}-dietary-notes" rows="2" placeholder="Other dietary restrictions...">${person?.dietaryNotes || ""}</textarea>
          </div>
        </div>
      </div>
    `;

    // Add event listener for remove button
    const removeBtn = personDiv.querySelector(".remove-person-btn") as HTMLButtonElement;
    removeBtn?.addEventListener("click", () => {
      const personForms = peopleContainer.querySelectorAll(".person-form");
      const isLastPerson = personForms.length === 1;

      personDiv.remove();
      updateCostDisplay();

      // If we just deleted the last person, add a new blank one
      if (isLastPerson) {
        addPersonForm();
      }
    });

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
    updateCostDisplay();
  };

  // Add person button handler
  addPersonBtn.addEventListener("click", () => {
    addPersonForm();
  });

  // Start with one empty person form
  addPersonForm();

  // Handle form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!submitBtn) return;
    submitBtn.disabled = true;

    try {
      const fd = new FormData(form);
      const people: RSVP[] = [];

      const personForms = peopleContainer.querySelectorAll(".person-form");

      // Collect data for each person
      personForms.forEach((personForm, idx) => {
        const personIdx = personForm.getAttribute("data-person-idx");
        if (!personIdx) return;

        const firstName = String(fd.get(`person-${personIdx}-firstName`) ?? "").trim();
        const lastName = String(fd.get(`person-${personIdx}-lastName`) ?? "").trim();
        const email = String(fd.get(`person-${personIdx}-email`) ?? "").trim();
        const phone = String(fd.get(`person-${personIdx}-phone`) ?? "").trim();

        // Collect Rainbow Lodge nights
        const rainbowLodgeNights: string[] = [];
        const lodgeInputs = personForm.querySelectorAll(
          `input[name="person-${personIdx}-lodge"]:checked`
        ) as NodeListOf<HTMLInputElement>;
        lodgeInputs.forEach((input) => {
          rainbowLodgeNights.push(input.value);
        });

        // Collect meals
        const meals: string[] = [];
        // Always include Saturday/main dinner (it's checked and disabled)
        meals.push("saturday-dinner");

        // Collect other checked meals
        const mealInputs = personForm.querySelectorAll(
          `input[name="person-${personIdx}-meal"]:checked:not([disabled])`
        ) as NodeListOf<HTMLInputElement>;
        mealInputs.forEach((input) => {
          meals.push(input.value);
        });

        // Collect dietary restrictions
        const dietaryRestrictions: string[] = [];
        const dietaryInputs = personForm.querySelectorAll(
          `input[name="person-${personIdx}-dietary"]:checked`
        ) as NodeListOf<HTMLInputElement>;
        dietaryInputs.forEach((input) => {
          dietaryRestrictions.push(input.value);
        });

        const dietaryNotes = dietaryRestrictions.includes("other")
          ? String(fd.get(`person-${personIdx}-dietary-notes`) ?? "").trim()
          : "";

        // Overnight is true if they selected any lodge nights
        const overnight = rainbowLodgeNights.length > 0;

        // Build person object, only including optional fields if they have values
        const person: RSVP = {
          firstName,
          lastName,
          email,
          phone,
          coming: true,
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
      });

      // Validate: at least one person must have email and phone
      const hasContact = people.some((p) => p.email && p.phone);
      if (!hasContact) {
        setNote("At least one person needs to provide email and phone", true);
        submitBtn.disabled = false;
        return;
      }

      // Generate a unique family key and name
      const timestamp = Date.now();
      const firstLastName = people[0]?.lastName?.toLowerCase().replace(/\s+/g, "_") || "guest";
      const familyKey = `${firstLastName}_${timestamp}`;
      const familyName = people.map(p => `${p.firstName} ${p.lastName}`).join(", ");

      const familyResponse: FamilyResponse = {
        familyKey,
        familyName,
        people,
      };

      await dao.saveFamilyResponse(familyResponse);

      setNote("🎉 See you there!", false, true);

      // Keep the form populated (don't reset)
    } catch (err) {
      console.error(err);
      setNote("Oops—couldn't save your RSVP. Try again?", true);
    } finally {
      submitBtn.disabled = false;
    }
  });
}
