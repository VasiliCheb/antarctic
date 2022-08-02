const body = document.querySelector('.page__body');
const logoHeader = body.querySelector('.logo-header__img');
const navMain = body.querySelector('.nav-menu');
const navToggle = navMain.querySelector('.nav-menu__toggle');
const navLinkList = navMain.querySelectorAll('.nav-menu__link');

  const closeAddNavMain = () => {
    navMain.classList.add('nav-menu--closed');
  };

  const openAddNavMain = () => {
    navMain.classList.add('nav-menu--opened');
  };

  const removeOpenNavMain = () => {
    navMain.classList.remove('nav-menu--opened');
  }

  const removeScrollBody = () => {
  body.classList.remove('page__body--noscroll');
  };

  const removeOpenLogo = () => {
  logoHeader.classList.remove('logo-header__img--opened');
  }

  logoHeader.classList.remove('logo-header__img--nojs');

  navMain.classList.remove('nav-menu--nojs');
  closeAddNavMain();


  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('nav-menu--closed')) {
      body.classList.add('page__body--noscroll');
      logoHeader.classList.add('logo-header__img--opened');

      navMain.classList.remove('nav-menu--closed');
      openAddNavMain();
    } else {
      removeScrollBody();
      removeOpenLogo();

      closeAddNavMain();
      removeOpenNavMain();
    }
  });

  navLinkList.forEach(item => {
    item.addEventListener('click', (evt) => {
      removeOpenNavMain();
      closeAddNavMain();

      removeScrollBody();
      removeOpenLogo();
    });
  });
