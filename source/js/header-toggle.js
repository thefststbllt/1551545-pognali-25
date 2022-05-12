let mainNav = document.querySelector('.main-nav');
let mainToggle = document.querySelector('.main-nav__toggle');
let navList = document.querySelector('.main-nav__list');
let loginButton = document.querySelector('.main-nav__login');
let navContacts = document.querySelector('.main-nav__contacts');
let navSocials = document.querySelector('.main-nav__socials');
let mainLogo = document.querySelector('.main-header__logo');


mainNav.classList.remove('main-nav--nojs');
navList.classList.add('js-closed');
mainToggle.classList.remove('js-closed--filter');
navContacts.classList.add('js-closed');
navSocials.classList.add('js-closed');
navSocials.classList.add('js-closed--socials');
loginButton.classList.add('js-closed--button');
mainLogo.classList.add('main-header__logo--active');


mainToggle.addEventListener('click', function () {
  navList.classList.toggle('js-closed');
  mainLogo.classList.toggle('main-header__logo--active');
  if (loginButton.classList.contains('js-closed--button')) {
    loginButton.classList.remove('js-closed--button');
  } else {
    loginButton.classList.add('js-closed--button');
  }
  loginButton.classList.toggle('main-nav__login--active');
  mainToggle.classList.toggle('main-nav__toggle--active');
  navContacts.classList.toggle('js-closed');
  navSocials.classList.toggle('js-closed');
  navSocials.classList.toggle('js-closed--socials');
  mainNav.classList.toggle('main-nav--active');
})

