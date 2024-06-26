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

DropdownMenu.addEventListener("click", (e) => {
  if (e.target.id === "beranda-button") {
    BerandaSection.scrollIntoView({
      behavior: "smooth",
    });
  }
  if (e.target.id === "perjuangan-button") {
    PerjuanganSection.scrollIntoView({
      behavior: "smooth",
    });
  }
  if (e.target.id === "pahlawan-button") {
    PahlawanSection.scrollIntoView({
      behavior: "smooth",
    });
  }
  if (e.target.id === "saat-ini-button") {
    SaatIniSection.scrollIntoView({
      behavior: "smooth",
    });
  }
});

document.body.addEventListener("click", (e) => {
  if (!DropdownButton.contains(e.target)) {
    DropdownMenu.classList.add("d-none");
    open = false;
  } else if (!open) {
    open = true;
    DropdownMenu.classList.remove("d-none");
  }
});

DropdownButton.addEventListener("click", () => {
  open = !open;
  if (open) {
    DropdownMenu.classList.remove("d-none");
  } else {
    DropdownMenu.classList.add("d-none");
  }
});

const DropdownMediaQuery = () => {
  if (window.matchMedia("(min-width: 863px)").matches) {
    DropdownMenu.classList.add("d-none");
    open = false;
  }
};

window.addEventListener("resize", DropdownMediaQuery);

// On scroll Navbar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    header.classList.add("header-transparent");
  } else {
    header.classList.remove("header-transparent");
  }
});

// Scroll Into View
let clickToView = (section) => {
  section.scrollIntoView({
    behavior: "smooth",
  })
}

const BerandaButton = document.getElementById("beranda-button");
const BerandaSection = document.getElementById("beranda-section");

BerandaButton.addEventListener("click", () => {
  clickToView(BerandaSection);
})

const PerjuanganButton = document.getElementById("perjuangan-button");
const PerjuanganSection = document.getElementById("perjuangan-section");

PerjuanganButton.addEventListener("click", () => {
  clickToView(PerjuanganSection);
})

const PahlawanButton = document.getElementById("pahlawan-button");
const PahlawanSection = document.getElementById("pahlawan-section");

PahlawanButton.addEventListener("click", () => {
  clickToView(PahlawanSection);
})

const SaatIniButton = document.getElementById("saat-ini-button");
const SaatIniSection = document.getElementById("saat-ini-section");

SaatIniButton.addEventListener("click", () => {
  clickToView(SaatIniSection);
})

// Karosel 1
document.addEventListener("DOMContentLoaded", () => {
  new Splide(".splide__1", {
    autoplay: true,
    drag: "free",
    perPage: 2,
    snap: true,
    type: "loop",
  }).mount();
});