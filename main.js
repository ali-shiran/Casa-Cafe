// Handle temperature selection and enable Explore button
const tempButtons = document.querySelectorAll(".temp-btn");
const exploreBtn = document.getElementById("exploreBtn");
const body = document.body; // Get the body element

let selectedType = null;

tempButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedType = button.dataset.type;

    // Remove active class from all buttons
    tempButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");

    // Enable Explore button
    exploreBtn.disabled = false;
    exploreBtn.classList.add("enabled");
    exploreBtn.setAttribute("aria-disabled", "false");

    // Remove existing theme classes from body
    body.classList.remove("hot-theme", "iced-theme");

    // Add the selected theme class to body
    if (selectedType === "hot") {
      body.classList.add("hot-theme");
    } else if (selectedType === "iced") {
      body.classList.add("iced-theme");
    } else {
      body.classList.add("default-theme"); // Fallback to default if no type or an unexpected type
    }

    exploreBtn.onclick = () => {
      window.location.href = `${selectedType}-recipes.html`;
    };
  });
});

// Hamburger menu logic
const menuOpen = document.querySelector(".menu-open");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

// Open menu
menuOpen?.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.add("show");
});

// Close with X
closeMenu?.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});

// Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mobileMenu.classList.remove("show");
  }
});

// Close when clicking any menu link
mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});

// Close if clicking outside the menu
document.addEventListener("click", (e) => {
  // Check if mobileMenu and menuOpen exist before accessing their properties
  if (
    mobileMenu && menuOpen &&
    mobileMenu.classList.contains("show") &&
    !mobileMenu.contains(e.target) &&
    !menuOpen.contains(e.target)
  ) {
    mobileMenu.classList.remove("show");
  }
});

// Loader hide after page load
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // fade-out delay
  }
});