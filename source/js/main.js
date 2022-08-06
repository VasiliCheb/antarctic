const body = document.querySelector('.page__body');
const headerMenu = body.querySelector('.page-header__menu');
const logoLink = headerMenu.querySelector('.page-header__logo-link');
const navToggle = headerMenu.querySelector('.page-header__menu-toggle');
const navLinkList = headerMenu.querySelectorAll('.page-header__menu-list a');

headerMenu.classList.remove('page-header__menu--nojs');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    body.classList.toggle('page__body--noscroll');
    headerMenu.classList.toggle('page-header__menu--opened');
  });

  navLinkList.forEach(item => {
    item.addEventListener('click', (evt) => {
      if (headerMenu.classList.contains('page-header__menu--opened')) {
        body.classList.remove('page__body--noscroll');
        headerMenu.classList.remove('page-header__menu--opened');
      }
    });
  });
}


  /*const closeAddNavMain = () => {
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
  });*/
