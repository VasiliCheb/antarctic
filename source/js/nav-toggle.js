const navMain = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-menu__toggle");

  navMain.classList.remove("nav-menu--nojs");
  navMain.classList.add("nav-menu--closed");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("nav-menu--closed")) {
      navMain.classList.remove("nav-menu--closed");
      navMain.classList.add("nav-menu--opened");
    } else {
      navMain.classList.add("nav-menu--closed");
      navMain.classList.remove("nav-menu--opened");
    }
  });
