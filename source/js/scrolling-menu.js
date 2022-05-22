let nav = document.querySelector('.main-nav');
let pageAbout = document.querySelector('.page-about');
let sticky = pageAbout.offsetTop;
let burgerButton = document.querySelector('.burger-button');
let mainNavList = document.querySelector('.main-nav__list');
let ourLogo = document.querySelector('.main-header__logo');


window.onscroll = function () {
  if (window.pageYOffset > sticky) {
    nav.classList.add('main-nav--sticky');
    nav.classList.add('main-nav--scrolled');
    mainNavList.classList.add('main-nav__list--active');
    burgerButton.classList.add('burger-button--scrolled');
    mainNav.classList.add('main-nav--active');
    if (ourLogo.classList.contains('main-header__logo--active')) {
      ourLogo.classList.add('main-header__logo--active-scrolled');
    }
  } else if (window.pageYOffset < sticky) {
    ourLogo.classList.remove('main-header__logo--active-scrolled');
    nav.classList.remove('main-nav--sticky');
    nav.classList.remove('main-nav--scrolled');
    mainNavList.classList.remove('main-nav__list--active');
    burgerButton.classList.remove('burger-button--scrolled');
    mainNav.classList.remove('main-nav--active');
  }
};

// window.onscroll = function () {
//   if (window.pageYOffset > sticky) {
//     nav.classList.add('main-nav--sticky');
//     nav.classList.add('main-nav--scrolled');
//     mainNavList.classList.add('main-nav__list--active');
//   } else if (window.pageYOffset > 0) {
//     if (ourLogo.classList.contains('main-header__logo--active')) {
//       ourLogo.classList.add('main-header__logo--active-scrolled');
//     }
//     burgerButton.classList.add('burger-button--scrolled');
//     mainNav.classList.add('main-nav--active');
//   } else if (window.pageYOffset === 0) {
//     ourLogo.classList.remove('main-header__logo--active-scrolled');
//     nav.classList.remove('main-nav--sticky');
//     nav.classList.remove('main-nav--scrolled');
//     mainNavList.classList.remove('main-nav__list--active');
//     burgerButton.classList.remove('burger-button--scrolled');
//     mainNav.classList.remove('main-nav--active');
//   }
// };
