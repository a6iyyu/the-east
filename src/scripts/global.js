// Scroll Indicator
const ScrollIndicator = document.getElementById("scroll-indicator");

const UpdateScrollPercentage = () => {
  const ScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const Percentage = (window.scrollY / ScrollHeight) * 100;
  ScrollIndicator.style.width = `${Percentage}%`;
};

window.addEventListener("scroll", UpdateScrollPercentage);

// Scroll To Top
const ScrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 25 * 16) {
    ScrollToTopButton.classList.remove("invisible", "opacity-0");
  } else {
    ScrollToTopButton.classList.add("invisible", "opacity-0");
  }
});

ScrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dropdown
const DropdownButton = document.getElementById("dropdown-button");
let open = false;

function toggleNavDropdown(){
  open = !open;
  if (open) {
    DropdownMenu.classList.remove("d-none");
  } else {
    DropdownMenu.classList.add("d-none");
  }
};

// On scroll navbar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 70) {
    header.classList.add("navTransparent");
  } else {
    header.classList.remove("navTransparent");
  }
});

// Karosel 1
document.addEventListener("DOMContentLoaded", () => {
  new Splide(".splide__1", {
    autoplay: true,
    drag: "free",
    perPage: 1,
    snap: true,
    type: "loop",
  }).mount();
});