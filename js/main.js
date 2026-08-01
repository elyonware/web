/* Elyonware — vanilla JS only: mobile nav, scroll header state,
   reveal-on-scroll, active nav link, and demo form handling. */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- header scroll state ---- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- mobile nav toggle ---- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector("#mobileMenu");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = toggle.classList.toggle("is-open");
      links.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        toggle.classList.remove("is-open");
        links.classList.remove("is-open");
        document.body.style.overflow = "";
      })
    );
  }

  /* ---- mark active nav link ---- */
  const current = document.body.dataset.page;
  if (current) {
    document.querySelectorAll(".nav-links a[data-page], .mobile-menu a[data-page]").forEach((a) => {
      if (a.dataset.page === current) a.classList.add("active");
    });
  }

  /* ---- reveal on scroll (with a hard fallback so content never
     stays hidden if the observer misbehaves or never fires) ---- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  const revealAll = () => revealEls.forEach((el) => el.classList.add("is-visible"));

  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
    window.setTimeout(() => {
      io.disconnect();
      revealAll();
    }, 2000);
  } else {
    revealAll();
  }

  /* ---- contact / demo forms: front-end only success state ---- */
  document.querySelectorAll("form[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fields = form.querySelector(".form-fields");
      const success = form.querySelector(".form-success");
      if (fields) fields.classList.add("is-hidden");
      if (success) success.classList.add("is-visible");
    });
  });

  document.querySelectorAll("[data-form-reset]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const form = btn.closest("form");
      if (!form) return;
      form.reset();
      form.querySelector(".form-fields")?.classList.remove("is-hidden");
      form.querySelector(".form-success")?.classList.remove("is-visible");
    });
  });

  /* ---- tabs ---- */
  document.querySelectorAll("[data-tabs]").forEach((group) => {
    const btns = group.querySelectorAll(".tab-btn");
    const panels = group.querySelectorAll(".tab-panel");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.tab;
        btns.forEach((b) => b.classList.toggle("is-active", b === btn));
        panels.forEach((p) => p.classList.toggle("is-active", p.dataset.tabPanel === target));
      });
    });
  });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".accordion-item").forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");
    trigger?.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      item.parentElement?.querySelectorAll(".accordion-item").forEach((i) => i.classList.remove("is-open"));
      if (!isOpen) item.classList.add("is-open");
    });
  });

  /* ---- footer year ---- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
});
