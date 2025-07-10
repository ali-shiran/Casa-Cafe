const setVhVariable = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
}

setVhVariable();

window.addEventListener('resize', setVhVariable);

const tempButtons = document.querySelectorAll(".temp-btn");
const exploreBtn = document.getElementById("exploreBtn");
const body = document.body;

let selectedType = null;

tempButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedType = button.dataset.type;

    tempButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    exploreBtn.disabled = false;
    exploreBtn.classList.add("enabled");
    exploreBtn.setAttribute("aria-disabled", "false");

    body.classList.remove("hot-theme", "iced-theme");

    if (selectedType === "hot") {
      body.classList.add("hot-theme");
    } else if (selectedType === "iced") {
      body.classList.add("iced-theme");
    } else {
      body.classList.add("default-theme");
    }

    exploreBtn.onclick = () => {
      window.location.href = `${selectedType}-recipes.html`;
    };
  });
});

const menuOpen = document.querySelector(".menu-open");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuOpen?.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.add("show");
});

closeMenu?.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mobileMenu.classList.remove("show");
  }
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});

document.addEventListener("click", (e) => {
  if (
    mobileMenu &&
    menuOpen &&
    mobileMenu.classList.contains("show") &&
    !mobileMenu.contains(e.target) &&
    !menuOpen.contains(e.target)
  ) {
    mobileMenu.classList.remove("show");
  }
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});
