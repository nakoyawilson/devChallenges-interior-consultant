const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const mobileNavigation = document.querySelector("#mobile-navigation");

menuButton.addEventListener("click", () => {
  console.log("clicked");
  mobileNavigation.classList.add("open");
});

closeButton.addEventListener("click", () => {
  mobileNavigation.classList.remove("open");
});
