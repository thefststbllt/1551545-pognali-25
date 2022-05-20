let innerNav = document.querySelector('.main-nav');
let burgerButton = document.querySelector('.burger-button');
let mainNavList = document.querySelector('.main-nav__list');
let ourLogo = document.querySelector('.main-header__logo');

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    innerNav.classList.add('main-nav--sticky');
    innerNav.classList.add('main-nav--scrolled');
    mainNavList.classList.add('main-nav__list--active');
    if (ourLogo.classList.contains('main-header__logo--active')) {
      ourLogo.classList.add('main-header__logo--active-scrolled');
    }
    burgerButton.classList.add('burger-button--scrolled');
    innerNav.classList.add('main-nav--active');
  } else if (window.pageYOffset === 0) {
    ourLogo.classList.remove('main-header__logo--active-scrolled');
    innerNav.classList.remove('main-nav--sticky');
    innerNav.classList.remove('main-nav--scrolled');
    mainNavList.classList.remove('main-nav__list--active');
    burgerButton.classList.remove('burger-button--scrolled');
    innerNav.classList.remove('main-nav--active');
  }
};
