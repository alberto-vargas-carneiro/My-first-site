/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const main = document.getElementById("main");
const body = document.getElementById("body");
const navList = document.getElementById("nav-list");

/*===== SHOW MENU =====*/
/* Validate if constant exists */
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
  main.classList.add("blur");
});

/*===== HIDE MENU =====*/
/* Validate if constant exists */
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
  main.classList.remove("blur");
});

navList.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
  main.classList.remove("blur");
});

if (navClose) {
  main.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    main.classList.remove("blur");
  });
}

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById("header");
  const butt = document.getElementById("close");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
  if (scrollY >= 50) {
    butt.style.transition = "border-bottom-right-radius 1s";
    butt.style.borderBottomRightRadius = "10px";
  } else {
    butt.style.borderBottomRightRadius = 0;
  }
}
window.addEventListener("scroll", scrollHeader);

/*==================== Carousel ====================*/

const carouselImages = document.querySelector(".carousel-images");
const btProx = document.querySelector(".prox");
const btAnt = document.querySelector(".ant");

let imageIndex = 0;
let parar;

function carousel() {
  parar = setInterval(() => {
    imageIndex++;
    if (imageIndex > carouselImages.children.length - 1) {
      imageIndex = 0;
    }
    carouselImages.style.transform = `translateX(-${imageIndex * 100}%)`;
  }, 3000);
}

function nextImage() {
  imageIndex++;
  if (imageIndex > carouselImages.children.length - 1) {
    imageIndex = 0;
  }
  carouselImages.style.transform = `translateX(-${imageIndex * 100}%)`;
}

function previousImage() {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = carouselImages.children.length - 1;
  }
  carouselImages.style.transform = `translateX(-${imageIndex * 100}%)`;
}

// carousel()
function pararSlide() {
  clearInterval(parar);
}

btProx.addEventListener("mouseover", pararSlide);
// btProx.addEventListener('mouseout', carousel)
btAnt.addEventListener("mouseover", pararSlide);
// btAnt.addEventListener('mouseout', carousel)
btProx.addEventListener("click", nextImage);
btAnt.addEventListener("click", previousImage);

/*==================== DARK LIGHT THEME ====================*/
const lightThemeButton = document.getElementById("theme-button2");
const darkThemeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const svgWhite = document.getElementsByClassName("svg-white");
const a = Array.from(svgWhite);

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
}

// Activate / deactivate the theme manually with the button
darkThemeButton.addEventListener("click", () => {
  document.body.classList.add(darkTheme);
  // We save the theme that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  a.forEach((element) => {
    element.style.fill = "white";
  });
});

lightThemeButton.addEventListener("click", () => {
  document.body.classList.remove(darkTheme);
  // We save the theme that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  a.forEach((element) => {
    element.style.fill = "black";
  });
});

if (document.body.classList.contains(darkTheme)) {
    a.forEach((element) => {
        element.style.fill = "white";
      })
}