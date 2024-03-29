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
const DropdownMenu = document.getElementById("dropdown-menu");
let open = false;

document.body.addEventListener("click", (e) => {
  if (!DropdownButton.contains(e.target)) {
    DropdownMenu.classList.add("opacity-0");
    open = false;
  }
});

DropdownButton.addEventListener("click", () => {
  open = !open;
  if (open) {
    DropdownMenu.classList.remove("opacity-0");
  } else {
    DropdownMenu.classList.add("opacity-0");
  }
});

const DropdownMediaQuery = () => {
  if (window.matchMedia("(min-width: 863px)").matches) {
    DropdownMenu.classList.add("opacity-0");
    open = false;
  }
};

window.addEventListener("resize", DropdownMediaQuery);

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