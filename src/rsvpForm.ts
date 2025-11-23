import { Dao, type FamilyResponse, type RSVP } from "./Dao";

export function initializeRsvpForm(dao: Dao) {
  const form = document.getElementById("rsvp-form") as HTMLFormElement | null;
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
  const costEl = document.getElementById(
    "rsvp-cost"
  ) as HTMLParagraphElement | null;
  const errorModal = document.getElementById(
    "error-modal"
  ) as HTMLDivElement | null;
  const errorMessage = document.getElementById(
    "error-message"
  ) as HTMLParagraphElement | null;
  const closeErrorBtn = document.getElementById(
    "close-error-modal"
  ) as HTMLButtonElement | null;
  const confirmModal = document.getElementById(
    "confirm-modal"
  ) as HTMLDivElement | null;
  const confirmCancelBtn = document.getElementById(
    "confirm-cancel"
  ) as HTMLButtonElement | null;
  const confirmDeleteBtn = document.getElementById(
    "confirm-delete"
  ) as HTMLButtonElement | null;
  const previewModal = document.getElementById(
    "preview-modal"
  ) as HTMLDivElement | null;
  const previewContent = document.getElementById(
    "preview-content"
  ) as HTMLDivElement | null;
  const previewCancelBtn = document.getElementById(
    "preview-cancel"
  ) as HTMLButtonElement | null;
  const previewConfirmBtn = document.getElementById(
    "preview-confirm"
  ) as HTMLButtonElement | null;
  const successOverlay = document.getElementById(
    "success-overlay"
  ) as HTMLDivElement | null;

  if (
    !form ||
    !peopleContainer ||
    !addPersonBtn ||
    !noteEl ||
    !errorModal ||
    !errorMessage ||
    !closeErrorBtn ||
    !confirmModal ||
    !confirmCancelBtn ||
    !confirmDeleteBtn ||
    !previewModal ||
    !previewContent ||
    !previewCancelBtn ||
    !previewConfirmBtn ||
    !successOverlay
  )
    return;

  let personCount = 0;

  const showErrorModal = (message: string) => {
    errorMessage.textContent = message;
    errorModal.classList.remove("hidden");
  };

  const hideErrorModal = () => {
    errorModal.classList.add("hidden");
  };

  const showSuccessOverlay = () => {
    successOverlay.classList.remove("hidden");
  };

  const hideSuccessOverlay = () => {
    successOverlay.classList.add("hidden");
  };

  const showConfirmModal = () => {
    confirmModal.classList.remove("hidden");
  };

  const hideConfirmModal = () => {
    confirmModal.classList.add("hidden");
  };

  const showPreviewModal = () => {
    previewModal.classList.remove("hidden");
  };

  const hidePreviewModal = () => {
    previewModal.classList.add("hidden");
  };

  // Close error modal on button click
  closeErrorBtn.addEventListener("click", hideErrorModal);

  // Close error modal on backdrop click
  errorModal.addEventListener("click", (e) => {
    if (e.target === errorModal) {
      hideErrorModal();
    }
  });

  // Close confirmation modal on cancel button
  confirmCancelBtn.addEventListener("click", hideConfirmModal);

  // Close confirmation modal on backdrop click
  confirmModal.addEventListener("click", (e) => {
    if (e.target === confirmModal) {
      hideConfirmModal();
    }
  });

  // Close preview modal on cancel button
  previewCancelBtn.addEventListener("click", hidePreviewModal);

  // Close preview modal on backdrop click
  previewModal.addEventListener("click", (e) => {
    if (e.target === previewModal) {
      hidePreviewModal();
    }
  });

  // Close any modal on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!errorModal.classList.contains("hidden")) {
        hideErrorModal();
      } else if (!confirmModal.classList.contains("hidden")) {
        hideConfirmModal();
      } else if (!previewModal.classList.contains("hidden")) {
        hidePreviewModal();
      }
    }
  });

  // Cost calculation
  const MEAL_COSTS: Record<string, number> = {
    "friday-dinner": 0, // complimentary
    "saturday-breakfast": 17,
    "saturday-lunch": 17,
    "saturday-dinner": 0, // complimentary
    "sunday-brunch": 0, // complimentary
  };
  const LODGE_NIGHT_COST = 110;

  const calculateTotalCost = (): number => {
    let total = 0;

    for (let idx = 0; idx < personCount; idx++) {
      const personForm = document.querySelector(
        `[data-person-idx="${idx}"]`
      ) as HTMLElement;
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

  const personFormHasData = (personDiv: HTMLElement): boolean => {
    // Check text inputs
    const textInputs = personDiv.querySelectorAll(
      'input[type="text"], input[type="email"], input[type="tel"]'
    ) as NodeListOf<HTMLInputElement>;
    for (const input of textInputs) {
      if (input.value.trim()) return true;
    }

    // Check checkboxes (excluding the disabled saturday-dinner)
    const checkboxes = personDiv.querySelectorAll(
      'input[type="checkbox"]:not([disabled])'
    ) as NodeListOf<HTMLInputElement>;
    for (const checkbox of checkboxes) {
      if (checkbox.checked) return true;
    }

    // Check textarea
    const textarea = personDiv.querySelector("textarea") as HTMLTextAreaElement;
    if (textarea?.value.trim()) return true;

    return false;
  };

  const updateDeleteButtonStates = () => {
    const personForms = peopleContainer.querySelectorAll(".person-form");
    const isOnlyOnePerson = personForms.length === 1;

    personForms.forEach((form) => {
      const removeBtn = form.querySelector(
        ".remove-person-btn"
      ) as HTMLButtonElement;
      if (!removeBtn) return;

      const hasData = personFormHasData(form as HTMLElement);
      const shouldDisable = isOnlyOnePerson && !hasData;

      if (shouldDisable) {
        removeBtn.disabled = true;
        removeBtn.classList.add("disabled");
      } else {
        removeBtn.disabled = false;
        removeBtn.classList.remove("disabled");
      }
    });
  };

  /**
 * Auto-links a parent checkbox (like “Friday lodge”) to one or more dependent checkboxes
 * so that:
 * - When parent turns ON → all dependents auto-turn ON (unless already checked)
 * - When parent turns OFF → only dependents that were auto-checked turn OFF
 * - Manual toggles override auto-check behavior
 */
  function linkAutoChecks(
    parent: HTMLInputElement | null,
    dependents: HTMLInputElement[],
    updateCost: () => void
  ) {
    if (!parent || dependents.length === 0) return;

    // Track which dependents were auto-checked
    const autoState = new WeakMap<HTMLInputElement, boolean>();

    parent.addEventListener("change", () => {
      if (parent.checked) {
        let changed = false;

        for (const dep of dependents) {
          if (!dep.checked) {
            dep.checked = true;
            autoState.set(dep, true);
            changed = true;
          }
        }

        if (changed) updateCost();
      } else {
        // Parent turned OFF → uncheck only those auto-checked
        let changed = false;

        for (const dep of dependents) {
          if (autoState.get(dep)) {
            dep.checked = false;
            autoState.set(dep, false);
            changed = true;
          }
        }

        if (changed) updateCost();
      }
    });

    // Manual toggles override auto behavior
    for (const dep of dependents) {
      dep.addEventListener("change", () => {
        autoState.set(dep, false);
        updateCost();
      });
    }

    // Initialization: if parent already checked, auto-check dependents
    if (parent.checked) {
      let changed = false;

      for (const dep of dependents) {
        if (!dep.checked) {
          dep.checked = true;
          autoState.set(dep, true);
          changed = true;
        }
      }

      if (changed) updateCost();
    }
  }


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
            <input type="text" name="person-${idx}-firstName" value="${person?.firstName || ""
      }" required />
          </div>
          <div class="name-input-group">
            <label>Last Name <span class="required">*</span></label>
            <input type="text" name="person-${idx}-lastName" value="${person?.lastName || ""
      }" required />
          </div>
        </div>
        <button type="button" class="remove-person-btn" data-remove-idx="${idx}">
          <img src="/images/trash.svg" alt="Remove" class="trash-icon" />
        </button>
      </div>

      <div class="person-details">
        <div class="contact-info-section">
          <label>Email <span class="optional"></span></label>
          <input type="email" name="person-${idx}-email" value="${person?.email || ""
      }" />
          <label>Phone <span class="optional"></span></label>
          <input type="tel" name="person-${idx}-phone" value="${person?.phone || ""
      }" />
        </div>

        <div class="rainbow-lodge-section">
          <label class="section-label">Staying at Rainbow Lodge?</label>
          <div class="rainbow-lodge-nights">
            <label class="night-checkbox">
              <input type="checkbox" name="person-${idx}-lodge" value="friday" ${person?.rainbowLodgeNights?.includes("friday") ? "checked" : ""
      } />
              Friday night
            </label>
            <label class="night-checkbox">
              <input type="checkbox" name="person-${idx}-lodge" value="saturday" ${person?.rainbowLodgeNights?.includes("saturday") ? "checked" : ""
      } />
              Saturday night
            </label>
          </div>
        </div>

        <div class="meals-section">
          <label class="section-label">Joining us for meals?</label>
          <div class="meals-list">
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${idx}-meal" value="friday-dinner" ${person?.meals?.includes("friday-dinner") ? "checked" : ""
      } />
              <span>Friday rehearsal dinner <span class="complimentary">(complimentary)</span></span>
            </label>
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${idx}-meal" value="saturday-breakfast" ${person?.meals?.includes("saturday-breakfast") ? "checked" : ""
      } />
              Saturday breakfast
            </label>
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${idx}-meal" value="saturday-lunch" ${person?.meals?.includes("saturday-lunch") ? "checked" : ""
      } />
              Saturday lunch
            </label>
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${idx}-meal" value="saturday-dinner" checked disabled />
              <span>Saturday wedding dinner <span class="complimentary">(complimentary)</span></span>
            </label>
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${idx}-meal" value="sunday-brunch" ${person?.meals?.includes("sunday-brunch") || person?.meals?.includes("sunday-breakfast") || person?.meals?.includes("sunday-lunch") ? "checked" : ""
      } />
              <span>Sunday brunch <span class="complimentary">(complimentary)</span></span>
            </label>
          </div>
        </div>

        <label class="dietary-toggle-label">
          Dietary Restrictions?
          <input type="checkbox" class="dietary-toggle" data-dietary-idx="${idx}" ${person?.dietaryRestrictions && person.dietaryRestrictions.length > 0
        ? "checked"
        : ""
      } />
        </label>

        <div class="dietary-options ${person?.dietaryRestrictions && person.dietaryRestrictions.length > 0
        ? ""
        : "hidden"
      }" id="dietary-${idx}">
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="vegetarian" ${person?.dietaryRestrictions?.includes("vegetarian") ? "checked" : ""
      } />
            Vegetarian
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="vegan" ${person?.dietaryRestrictions?.includes("vegan") ? "checked" : ""
      } />
            Vegan
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="pescatarian" ${person?.dietaryRestrictions?.includes("pescatarian") ? "checked" : ""
      } />
            Pescatarian
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="dairy-free" ${person?.dietaryRestrictions?.includes("dairy-free") ? "checked" : ""
      } />
            Dairy-free
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="nut-free" ${person?.dietaryRestrictions?.includes("nut-free") ? "checked" : ""
      } />
            Nut-free
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="egg-free" ${person?.dietaryRestrictions?.includes("egg-free") ? "checked" : ""
      } />
            Egg-free
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="gluten-free" ${person?.dietaryRestrictions?.includes("gluten-free") ? "checked" : ""
      } />
            Gluten-free
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${idx}-dietary" value="other" ${person?.dietaryRestrictions?.includes("other") ? "checked" : ""
      } />
            Other
          </label>
          <div class="dietary-notes ${person?.dietaryRestrictions?.includes("other") ? "" : "hidden"
      }" id="dietary-notes-${idx}">
            <label>Please specify:</label>
            <textarea name="person-${idx}-dietary-notes" rows="2" placeholder="Other dietary restrictions..." ${person?.dietaryRestrictions?.includes("other") ? "required" : ""
      }>${person?.dietaryNotes || ""
      }</textarea>
          </div>
        </div>

        <div class="notes-section">
          <label>Additional Notes</label>
          <textarea name="person-${idx}-notes" rows="3" placeholder="Anything else we should know...">${person?.notes || ""
      }</textarea>
        </div>
      </div>
    `;

    // Add event listener for remove button
    const removeBtn = personDiv.querySelector(
      ".remove-person-btn"
    ) as HTMLButtonElement;
    removeBtn?.addEventListener("click", () => {
      const hasData = personFormHasData(personDiv);

      const executeRemoval = () => {
        const personForms = peopleContainer.querySelectorAll(".person-form");
        const isLastPerson = personForms.length === 1;

        personDiv.remove();
        updateCostDisplay();

        // If we just deleted the last person, add a new blank one
        if (isLastPerson) {
          addPersonForm();
        } else {
          // Update delete button states after removal
          updateDeleteButtonStates();
        }
      };

      if (hasData) {
        // Show confirmation modal
        showConfirmModal();

        // Set up one-time confirmation handler
        const handleConfirm = () => {
          hideConfirmModal();
          executeRemoval();
          confirmDeleteBtn.removeEventListener("click", handleConfirm);
        };

        confirmDeleteBtn.addEventListener("click", handleConfirm);
      } else {
        // No data, remove immediately
        executeRemoval();
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
      const dietaryNotesTextarea = dietaryNotesDiv?.querySelector("textarea");
      if (otherCheckbox.checked) {
        dietaryNotesDiv?.classList.remove("hidden");
        if (dietaryNotesTextarea) {
          dietaryNotesTextarea.required = true;
        }
      } else {
        dietaryNotesDiv?.classList.add("hidden");
        if (dietaryNotesTextarea) {
          dietaryNotesTextarea.required = false;
        }
      }
    });

    // Add event listeners to lodge and meal checkboxes to update cost
    const lodgeCheckboxes = personDiv.querySelectorAll(
      `input[name="person-${idx}-lodge"]`
    ) as NodeListOf<HTMLInputElement>;
    lodgeCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", updateCostDisplay);
    });


    // Friday lodge → Friday dinner
    linkAutoChecks(
      personDiv.querySelector(
        `input[name="person-${idx}-lodge"][value="friday"]`
      ) as HTMLInputElement,
      [
        personDiv.querySelector(
          `input[name="person-${idx}-meal"][value="friday-dinner"]`
        ) as HTMLInputElement,
      ],
      updateCostDisplay
    );

    // Friday lodge → Saturday breakfast + lunch
    linkAutoChecks(
      personDiv.querySelector(
        `input[name="person-${idx}-lodge"][value="saturday"]`
      ) as HTMLInputElement,
      [
        personDiv.querySelector(
          `input[name="person-${idx}-meal"][value="saturday-breakfast"]`
        ) as HTMLInputElement,
        personDiv.querySelector(
          `input[name="person-${idx}-meal"][value="saturday-lunch"]`
        ) as HTMLInputElement,
      ],
      updateCostDisplay
    );

    const mealCheckboxes = personDiv.querySelectorAll(
      `input[name="person-${idx}-meal"]`
    ) as NodeListOf<HTMLInputElement>;
    mealCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", updateCostDisplay);
    });

    // Add event listeners to all inputs to update delete button state
    const allInputs = personDiv.querySelectorAll(
      'input[type="text"], input[type="email"], input[type="tel"], input[type="checkbox"], textarea'
    ) as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
    allInputs.forEach((input) => {
      input.addEventListener("input", updateDeleteButtonStates);
      input.addEventListener("change", updateDeleteButtonStates);
    });

    peopleContainer.appendChild(personDiv);
    updateCostDisplay();
    updateDeleteButtonStates();
  };

  const resetForm = () => {
    // Clear all person forms
    peopleContainer.innerHTML = "";
    personCount = 0;
    // Add one blank person form
    addPersonForm();
    // Reset cost
    updateCostDisplay();
  };

  // Add person button handler
  addPersonBtn.addEventListener("click", () => {
    addPersonForm();
    // Note: updateDeleteButtonStates() is already called at the end of addPersonForm()
  });

  // Start with one empty person form
  addPersonForm();

  // Function to collect form data
  const collectFormData = (): RSVP[] => {
    const fd = new FormData(form);
    const people: RSVP[] = [];
    const personForms = peopleContainer.querySelectorAll(".person-form");

    // Collect data for each person
    personForms.forEach((personForm) => {
      const personIdx = personForm.getAttribute("data-person-idx");
      if (!personIdx) return;

      const firstName = String(
        fd.get(`person-${personIdx}-firstName`) ?? ""
      ).trim();
      const lastName = String(
        fd.get(`person-${personIdx}-lastName`) ?? ""
      ).trim();
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

      const notes = String(fd.get(`person-${personIdx}-notes`) ?? "").trim();

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
      if (notes) {
        person.notes = notes;
      }

      people.push(person);
    });

    return people;
  };

  // Function to generate preview HTML
  const generatePreviewHTML = (people: RSVP[]): string => {
    const mealLabels: Record<string, string> = {
      "friday-dinner": "Friday rehearsal dinner",
      "saturday-breakfast": "Saturday breakfast",
      "saturday-lunch": "Saturday lunch",
      "saturday-dinner": "Saturday wedding dinner",
      "sunday-brunch": "Sunday brunch",
    };

    const dietaryLabels: Record<string, string> = {
      vegetarian: "Vegetarian",
      vegan: "Vegan",
      pescatarian: "Pescatarian",
      "dairy-free": "Dairy-free",
      "nut-free": "Nut-free",
      "egg-free": "Egg-free",
      "gluten-free": "Gluten-free",
      other: "Other",
    };

    let html = "";

    people.forEach((person) => {
      html += `<div class="preview-person">`;
      html += `<h3>${person.firstName} ${person.lastName}</h3>`;

      if (person.email) {
        html += `<p><strong>Email:</strong> ${person.email}</p>`;
      }
      if (person.phone) {
        html += `<p><strong>Phone:</strong> ${person.phone}</p>`;
      }

      if (person.rainbowLodgeNights && person.rainbowLodgeNights.length > 0) {
        const nights = person.rainbowLodgeNights
          .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
          .join(", ");
        html += `<p><strong>Staying at Rainbow Lodge:</strong> ${nights}</p>`;
      } else {
        html += `<p><strong>Staying at Rainbow Lodge:</strong> N/A</p>`;
      }

      // Check if meals contains more than just the default saturday-dinner
      const nonDefaultMeals =
        person.meals?.filter((m) => m !== "saturday-dinner") || [];
      if (
        person.meals &&
        person.meals.length > 0 &&
        nonDefaultMeals.length > 0
      ) {
        // Sort meals in the same order as the UI
        const mealOrder = [
          "friday-dinner",
          "saturday-breakfast",
          "saturday-lunch",
          "saturday-dinner",
          "sunday-brunch",
        ];
        const sortedMeals = person.meals.sort((a, b) => {
          return mealOrder.indexOf(a) - mealOrder.indexOf(b);
        });

        html += `<p><strong>Meals:</strong></p><ul style="margin: 0.25rem 0 0 1.5rem;">`;
        sortedMeals.forEach((meal) => {
          html += `<li>${mealLabels[meal] || meal}</li>`;
        });
        html += `</ul>`;
      } else {
        html += `<p><strong>Meals:</strong> Saturday wedding dinner only</p>`;
      }

      if (person.dietaryRestrictions && person.dietaryRestrictions.length > 0) {
        html += `<p><strong>Dietary Restrictions:</strong></p><ul style="margin: 0.25rem 0 0 1.5rem;">`;
        person.dietaryRestrictions.forEach((restriction) => {
          // Skip "other" - we'll show the notes text instead
          if (restriction !== "other") {
            html += `<li>${dietaryLabels[restriction] || restriction}</li>`;
          }
        });
        if (person.dietaryNotes) {
          html += `<li>${person.dietaryNotes}</li>`;
        }
        html += `</ul>`;
      } else {
        html += `<p><strong>Dietary Restrictions:</strong> N/A</p>`;
      }

      if (person.notes) {
        html += `<p><strong>Notes:</strong> ${person.notes}</p>`;
      }

      html += `</div>`;
    });

    const total = calculateTotalCost();
    html += `<div class="preview-total">Total Cost: $${total}</div>`;

    return html;
  };

  // Handle form submission - show preview
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!submitBtn) return;

    try {
      const people = collectFormData();

      // Validate: at least one person must have email and phone
      const hasContact = people.some((p) => p.email && p.phone);
      if (!hasContact) {
        showErrorModal("At least one person needs to provide email and phone");
        return;
      }

      // Generate and show preview
      const previewHTML = generatePreviewHTML(people);
      previewContent.innerHTML = previewHTML;
      showPreviewModal();
    } catch (err) {
      console.error(err);
      showErrorModal("Oops—couldn't process your response. Please try again.");
    }
  });

  // Handle preview confirmation - actual submission
  previewConfirmBtn.addEventListener("click", async () => {
    if (!submitBtn) return;
    submitBtn.disabled = true;
    previewConfirmBtn.disabled = true;

    try {
      const people = collectFormData();

      // Generate a unique family key and name
      const timestamp = Date.now();
      const firstLastName =
        people[0]?.lastName?.toLowerCase().replace(/\s+/g, "_") || "guest";
      const familyKey = `${firstLastName}_${timestamp}`;
      const familyName = people
        .map((p) => `${p.firstName} ${p.lastName}`)
        .join(", ");

      const familyResponse: FamilyResponse = {
        familyKey,
        familyName,
        people,
      };

      await dao.saveFamilyResponse(familyResponse);

      // Hide preview modal
      hidePreviewModal();

      // Show success overlay
      showSuccessOverlay();

      // After 3 seconds, hide overlay and reset form
      setTimeout(() => {
        hideSuccessOverlay();
        resetForm();
        submitBtn.disabled = false;
        previewConfirmBtn.disabled = false;
      }, 3000);
    } catch (err) {
      console.error(err);
      hidePreviewModal();
      showErrorModal("Oops—couldn't save your response. Please try again.");
      submitBtn.disabled = false;
      previewConfirmBtn.disabled = false;
    }
  });
}
