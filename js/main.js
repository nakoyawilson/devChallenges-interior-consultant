const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const mobileNavigation = document.querySelector("#mobile-navigation");

menuButton.addEventListener("click", () => {
  mobileNavigation.classList.add("open");
});

closeButton.addEventListener("click", () => {
  mobileNavigation.classList.remove("open");
});
