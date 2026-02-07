const trigger = document.querySelector(".nav-trigger");
const mega = document.querySelector(".mega-wrapper");
const overlay = document.querySelector(".page-overlay");
const navbar = document.querySelector(".navbar");
const logo = document.getElementById("navLogo");
const arrows = document.querySelectorAll(".nav-arrow");

function activateNavbar() {
  mega.classList.add("active");
  overlay.classList.add("active");
  navbar.classList.add("active");

  logo.src = logo.dataset.active;
  arrows.forEach((a) => (a.src = a.dataset.active));
}

function deactivateNavbar() {
  mega.classList.remove("active");
  overlay.classList.remove("active");
  navbar.classList.remove("active");

  logo.src = logo.dataset.default;
  arrows.forEach((a) => (a.src = a.dataset.default));
}

trigger.addEventListener("mouseenter", activateNavbar);
mega.addEventListener("mouseenter", activateNavbar);

trigger.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!mega.matches(":hover")) deactivateNavbar();
  }, 100);
});

mega.addEventListener("mouseleave", deactivateNavbar);

overlay.addEventListener("click", deactivateNavbar);
