const logoHeader = document.querySelector(".logo-header__img");
const navMain = document.querySelector(".nav-menu");
const navToggle = navMain.querySelector(".nav-menu__toggle");

  navMain.classList.remove("nav-menu--nojs");
  logoHeader.classList.remove("logo-header__img--nojs");
  navMain.classList.add("nav-menu--closed");


  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("nav-menu--closed")) {
      navMain.classList.remove("nav-menu--closed");
      navMain.classList.add("nav-menu--opened");
      logoHeader.classList.add("logo-header__img--opened");
    } else {
      navMain.classList.add("nav-menu--closed");
      navMain.classList.remove("nav-menu--opened");
      logoHeader.classList.remove("logo-header__img--opened");
    }
  });
