const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

// OPEN MOBILE MENU
openMenu.onclick = () => {
  mobileMenu.classList.add("active");
};

// CLOSE MOBILE MENU
closeMenu.onclick = () => {
  mobileMenu.classList.remove("active");
};

// DROPDOWN TOGGLE WITH ARROW IMAGE SWAP
document.querySelectorAll(".mobile-trigger").forEach((trigger) => {
  trigger.onclick = () => {
    const parent = trigger.parentElement;
    const arrow = trigger.querySelector(".mobile-arrow");

    // OPTIONAL: close other dropdowns
    document.querySelectorAll(".mobile-dropdown").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("active");
        const otherArrow = item.querySelector(".mobile-arrow");
        if (otherArrow) {
          otherArrow.src = otherArrow.dataset.down;
        }
      }
    });

    // TOGGLE CURRENT
    parent.classList.toggle("active");

    if (parent.classList.contains("active")) {
      arrow.src = arrow.dataset.up;     // RED UP ARROW
    } else {
      arrow.src = arrow.dataset.down;   // BLACK DOWN ARROW
    }
  };
});

// CLOSE MENU WHEN CLICKING ANY ITEM
document
  .querySelectorAll(".mobile-submenu li, .mobile-item")
  .forEach((item) => {
    item.onclick = () => {
      mobileMenu.classList.remove("active");
    };
  });
