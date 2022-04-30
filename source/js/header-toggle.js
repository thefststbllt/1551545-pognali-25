let mainNav = document.querySelector('.main-nav');
let mainToggle = document.querySelector('.main-nav__toggle');
let navList = document.querySelector('.main-nav__list');
let loginButton = document.querySelector('.main-nav__login')
let navContacts = document.querySelector('.main-nav__contacts');
let navSocials = document.querySelector('.main-nav__socials');
let mobileLogo = document.getElementById('logo-mobile');
let tabletLogo = document.getElementById('logo-tablet');
let mobileLogoDark = document.getElementById('logo-mobile2');
let tabletLogoDark = document.getElementById('logo-tablet2');

mainNav.classList.remove('main-nav--nojs');
mobileLogoDark.classList.add('visually-hidden');

mainToggle.addEventListener('click', function () {
  navList.classList.toggle('js-closed');
  if (loginButton.classList.contains('js-closed--button')) {
    loginButton.classList.remove('js-closed--button');
  } else {
    loginButton.classList.add('js-closed--button');
  }
  loginButton.classList.toggle('main-nav__login--active');
  mainToggle.classList.toggle('main-nav__toggle--active');
  navContacts.classList.toggle('js-closed');
  navSocials.classList.toggle('js-closed');
  mainNav.classList.toggle('main-nav--active');
})
