const agesBox = document.getElementById("ages");
function addAge() {
  const age = prompt("Enter traveller age:");
  if (!age) return;
  const div = document.createElement("div");
  div.className = "age-item";
  div.textContent = age;
  agesBox.appendChild(div);
}
function switchTab(btn) {
  document
    .querySelectorAll(".tabs button")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}
const destinations = [
  { label: "Popular Destinations", type: "heading" },
  { label: "Austria", type: "option" },
  { label: "Bali (Indonesia)", type: "option" },
  { label: "Canada", type: "option" },
  { label: "New Zealand", type: "option" },
  { label: "USA (United States)", type: "option" },
  { label: "United Kingdom", type: "option" },
  { type: "divider" },
  { label: "World Wide", type: "option" },
  { label: "All of Europe", type: "option" },
  { label: "All of Asia", type: "option" },
  { label: "Australia", type: "option" },
  { label: "Belgium", type: "option" },
  { label: "Brazil", type: "option" },
  { label: "China", type: "option" },
  { label: "Denmark", type: "option" },
  { label: "France", type: "option" },
  { label: "Germany", type: "option" },
  { label: "Greece", type: "option" },
  { label: "India", type: "option" },
  { label: "Italy", type: "option" },
  { label: "Japan", type: "option" },
  { label: "Malaysia", type: "option" },
  { label: "Maldives", type: "option" },
  { label: "Mexico", type: "option" },
  { label: "Netherlands", type: "option" },
  { label: "Norway", type: "option" },
  { label: "Portugal", type: "option" },
  { label: "Singapore", type: "option" },
  { label: "South Africa", type: "option" },
  { label: "Spain", type: "option" },
  { label: "Sri Lanka", type: "option" },
  { label: "Sweden", type: "option" },
  { label: "Switzerland", type: "option" },
  { label: "Thailand", type: "option" },
  { label: "Turkey", type: "option" },
  { label: "UAE", type: "option" },
  { label: "Vietnam", type: "option" },
];
const search = document.getElementById("search");
const dropdown = document.getElementById("dropdown");
const chips = document.getElementById("chips");
const arrow = document.getElementById("arrow");
let selected = [];
let options = [];
let activeIndex = -1;
function renderDropdown(filter = "") {
  dropdown.innerHTML = "";
  options = [];
  activeIndex = -1;
  const filtered = destinations.filter((item) => {
    if (item.type !== "option") return true;
    return (
      item.label.toLowerCase().includes(filter.toLowerCase()) &&
      !selected.includes(item.label)
    );
  });
  if (!filtered.some((i) => i.type === "option")) {
    dropdown.innerHTML = `<div class="empty">Destination not found</div>`;
    return;
  }
  filtered.forEach((item) => {
    if (item.type === "heading") {
      const h = document.createElement("div");
      h.className = "group-title";
      h.textContent = item.label;
      dropdown.appendChild(h);
    } else if (item.type === "divider") {
      const d = document.createElement("div");
      d.className = "divider";
      dropdown.appendChild(d);
    } else {
      const o = document.createElement("div");
      o.className = "option";
      o.textContent = item.label;

      o.addEventListener("click", (e) => {
        e.stopPropagation();
        selectItem(item.label);
      });
      dropdown.appendChild(o);
      options.push(o);
    }
  });
}
function selectItem(value) {
  if (selected.includes(value)) return;
  selected.push(value);
  const chip = document.createElement("div");
  chip.className = "chip";
  chip.innerHTML = `${value} <span>×</span>`;
  chip.querySelector("span").onclick = () => {
    selected = selected.filter((v) => v !== value);
    chip.remove();
    renderDropdown(search.value);
  };
  chips.appendChild(chip);
  search.value = "";
  closeDropdown();
}
function openDropdown() {
  dropdown.classList.add("active");
  arrow.classList.add("rotate");
  renderDropdown(search.value);
}
function closeDropdown() {
  dropdown.classList.remove("active");
  arrow.classList.remove("rotate");
}
search.addEventListener("focus", openDropdown);
search.addEventListener("input", openDropdown);
search.addEventListener("keydown", (e) => {
  if (!options.length) return;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    activeIndex = (activeIndex + 1) % options.length;
    highlight();
  }
  if (e.key === "ArrowUp") {
    e.preventDefault();
    activeIndex = (activeIndex - 1 + options.length) % options.length;
    highlight();
  }
  if (e.key === "Enter" && options[activeIndex]) {
    e.preventDefault();
    selectItem(options[activeIndex].textContent);
  }
  if (e.key === "Escape") closeDropdown();
});
function highlight() {
  options.forEach((o) => o.classList.remove("active"));
  if (options[activeIndex]) {
    options[activeIndex].classList.add("active");
    options[activeIndex].scrollIntoView({ block: "nearest" });
  }
}
dropdown.addEventListener("click", (e) => e.stopPropagation());
document.addEventListener("click", (e) => {
  if (!e.target.closest(".input-wrap")) closeDropdown();
});
