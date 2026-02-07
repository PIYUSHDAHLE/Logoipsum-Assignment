const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
openMenu.onclick = () => {
  mobileMenu.classList.add("active");
};
closeMenu.onclick = () => {
  mobileMenu.classList.remove("active");
};
document.querySelectorAll(".mobile-trigger").forEach((trigger) => {
  trigger.onclick = () => {
    const parent = trigger.parentElement;
    const arrow = trigger.querySelector(".mobile-arrow");
    document.querySelectorAll(".mobile-dropdown").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("active");
        const otherArrow = item.querySelector(".mobile-arrow");
        if (otherArrow) {
          otherArrow.src = otherArrow.dataset.down;
        }
      }
    });
    parent.classList.toggle("active");
    if (parent.classList.contains("active")) {
      arrow.src = arrow.dataset.up;   
    } else {
      arrow.src = arrow.dataset.down; 
    }
  };
});
document
  .querySelectorAll(".mobile-submenu li, .mobile-item")
  .forEach((item) => {
    item.onclick = () => {
      mobileMenu.classList.remove("active");
    };
  });
