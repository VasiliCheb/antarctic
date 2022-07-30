const body = document.querySelector(".page__body");
const logoHeader = body.querySelector(".logo-header__img");
const navMain = body.querySelector(".nav-menu");
const navToggle = navMain.querySelector(".nav-menu__toggle");

  navMain.classList.remove("nav-menu--nojs");
  logoHeader.classList.remove("logo-header__img--nojs");
  navMain.classList.add("nav-menu--closed");


  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("nav-menu--closed")) {
      body.classList.add("page__body--noscroll");
      navMain.classList.remove("nav-menu--closed");
      navMain.classList.add("nav-menu--opened");
      logoHeader.classList.add("logo-header__img--opened");
    } else {
      body.classList.remove("page__body--noscroll");
      navMain.classList.add("nav-menu--closed");
      navMain.classList.remove("nav-menu--opened");
      logoHeader.classList.remove("logo-header__img--opened");
    }
  });
