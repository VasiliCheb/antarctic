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
