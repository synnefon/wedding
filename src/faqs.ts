// src/faqs.ts
import { Dao, type FAQ, type FAQReply } from "./Dao";

// Remember OPEN state per FAQ across re-renders: true=open, false=closed.
const openAnswers = new Map<string, boolean>();

export function initializeFaqs(dao: Dao) {
    const askForm = document.getElementById("faq-form") as HTMLFormElement | null;
    const statusEl = document.getElementById("faq-status") as HTMLParagraphElement | null;
    const listEl = document.getElementById("faq-list") as HTMLDivElement | null;

    if (!listEl) return;

    // Handle scroll passthrough when at top boundary
    const faqScrollEl = document.querySelector(".faq-scroll") as HTMLDivElement | null;
    if (faqScrollEl) {
        faqScrollEl.addEventListener("wheel", (e) => {
            const atTop = faqScrollEl.scrollTop === 0;
            const scrollingUp = e.deltaY < 0;

            // Only allow passthrough to page when at top AND scrolling up
            if (atTop && scrollingUp) {
                return; // Let it bubble to page
            }

            // Otherwise, keep scroll contained to FAQ
            e.stopPropagation();
        }, { passive: true });
    }

    const setStatus = (msg: string, ok = false) => {
        if (!statusEl) return;
        statusEl.textContent = msg;
        statusEl.classList.remove("ok", "err");
        statusEl.classList.add(ok ? "ok" : "err");
    };

    const render = (items: Array<{ id: string; data: FAQ }>) => {
        listEl.innerHTML = "";
        items.reverse();
        for (const { id, data } of items) {
            const card = document.createElement("div");
            card.className = "faq-card";

            const meta = (data.author ?? "").toString().trim() || "ANONYMOUS";
            const answers: FAQReply[] = Array.isArray(data.answers) ? data.answers : [];
            const count = answers.length;

            // Default only if we haven't seen this id; otherwise respect remembered state.
            const defaultOpen = count <= 3;
            const isOpen = openAnswers.has(id) ? !!openAnswers.get(id) : defaultOpen;

            card.innerHTML = `
        <div class="faq-head">
          <div class="faq-meta"><strong>${escapeHtml(meta)}</strong></div>
        </div>

        <div class="faq-q">${escapeHtml(data.question)}</div>

        ${count
                    ? `
              <div class="faq-answers ${isOpen ? "" : "collapsed"}">
                <button type="button" class="answers-header" aria-expanded="${isOpen}">
                  <span class="caret${isOpen ? " open" : ""}" aria-hidden="true"></span>
                  <span class="answers-title">Replies (${count})</span>
                </button>
                <div class="answers-body">
                  ${answers
                        .map(
                            (a) => `
                      <div class="faq-a">
                        <div class="faq-a-head"><strong>${escapeHtml(a.author || "HOST")}</strong></div>
                        <div class="faq-a-body">${escapeHtml(a.text)}</div>
                      </div>
                    `
                        )
                        .join("")}
                </div>
              </div>
            `
                    : ``
                }

        <div class="faq-reply-inline">
          <button type="button" class="reply-toggle" aria-label="Reply to question">+ Reply</button>
          <form class="faq-reply-form hidden" data-faq-id="${id}">
            <input class="faq-reply-author" type="text" name="author" placeholder="Name" required />
            <input class="faq-reply-text" type="text" name="text" placeholder="Reply…" required />
            <div class="reply-actions">
              <button class="reply-submit" type="submit">Post</button>
              <button class="reply-cancel" type="button" aria-label="Cancel reply" title="Cancel">×</button>
            </div>
          </form>
        </div>
      `;

            // Replies toggle (caret)
            const answersBox = card.querySelector<HTMLDivElement>(".faq-answers");
            const headerBtn = card.querySelector<HTMLButtonElement>(".answers-header");
            const caretEl = card.querySelector<HTMLSpanElement>(".caret");

            if (answersBox && headerBtn && caretEl) {
                headerBtn.addEventListener("click", () => {
                    const nowCollapsed = answersBox.classList.toggle("collapsed");
                    const nowOpen = !nowCollapsed;
                    openAnswers.set(id, nowOpen); // remember explicit choice
                    headerBtn.setAttribute("aria-expanded", String(nowOpen));
                    caretEl.classList.toggle("open", nowOpen);
                });
            }

            // Inline reply controls
            const toggleBtn = card.querySelector<HTMLButtonElement>(".reply-toggle")!;
            const replyForm = card.querySelector<HTMLFormElement>(".faq-reply-form")!;
            const submitBtn = replyForm.querySelector<HTMLButtonElement>(".reply-submit")!;
            const cancelBtn = replyForm.querySelector<HTMLButtonElement>(".reply-cancel")!;
            const authorInput = replyForm.querySelector<HTMLInputElement>(".faq-reply-author")!;
            const textInput = replyForm.querySelector<HTMLInputElement>(".faq-reply-text")!;

            const openReply = () => {
                replyForm.classList.remove("hidden");
                toggleBtn.style.display = "none";
                authorInput.focus();

                const escHandler = (e: KeyboardEvent) => {
                    if (e.key === "Escape") {
                        e.stopPropagation();
                        closeReply(false); // keep whatever they typed
                    }
                };
                replyForm.addEventListener("keydown", escHandler);
                (replyForm as any)._escHandler = escHandler;
            };

            const closeReply = (clear: boolean) => {
                const h = (replyForm as any)._escHandler as ((e: KeyboardEvent) => void) | undefined;
                if (h) replyForm.removeEventListener("keydown", h);
                if (clear) replyForm.reset();
                replyForm.classList.add("hidden");
                toggleBtn.style.display = "";
                toggleBtn.focus();
            };

            toggleBtn.addEventListener("click", openReply);
            cancelBtn.addEventListener("click", () => closeReply(true));

            replyForm.addEventListener("submit", async (e) => {
                e.preventDefault();
                submitBtn.disabled = true;
                try {
                    const author = authorInput.value.trim();
                    const text = textInput.value.trim();
                    if (!author || !text) return;

                    // Optimistically force thread open and remember it
                    if (answersBox) {
                        answersBox.classList.remove("collapsed");
                        headerBtn?.setAttribute("aria-expanded", "true");
                        caretEl?.classList.add("open");
                    }
                    openAnswers.set(id, true);

                    await dao.addFaqAnswer(id, { author, text });

                    closeReply(true); // clear + close after success
                } catch (err) {
                    console.error(err);
                } finally {
                    submitBtn.disabled = false;
                }
            });

            listEl.appendChild(card);
        }
    };

    // Live list
    const unsubFaqs = dao.onFaqs(render);

    // Ask a new question (right column sticky form)
    if (askForm) {
        let submitting = false;
        askForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (submitting) return;
            submitting = true;

            try {
                const fd = new FormData(askForm);
                const author = String(fd.get("author") || "").trim();
                const question = String(fd.get("question") || "").trim();

                const last = Number(sessionStorage.getItem("faq:lastPostTs") || "0");
                const now = Date.now();
                if (now - last < 5_000) {
                    setStatus("You're too fast—give it a sec 🐸", false);
                    return;
                }
                if (!question) {
                    setStatus("Ask a real question first :)", false);
                    return;
                }

                await handleAddFaq(dao, author, question);
                sessionStorage.setItem("faq:lastPostTs", String(now));
                askForm.reset();
                setStatus("Posted!", true);
            } catch (err) {
                console.error(err);
                setStatus("Couldn't post—try again?", false);
            } finally {
                submitting = false;
            }
        });
    }

    // cleanup
    window.addEventListener("beforeunload", () => unsubFaqs(), { once: true });
}

async function handleAddFaq(dao: Dao, author: string, question: string) {
    await dao.addFaq({ author, question, answers: [] });
}

// tiny HTML escaper
function escapeHtml(s: string) {
    return s.replace(/[&<>"']/g, (ch) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as any)[ch]
    );
}
