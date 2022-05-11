let mainNav = document.querySelector('.main-nav');
let mainToggle = document.querySelector('.main-nav__toggle');
let navList = document.querySelector('.main-nav__list');
let loginButton = document.querySelector('.main-nav__login')
let navContacts = document.querySelector('.main-nav__contacts');
let navSocials = document.querySelector('.main-nav__socials');
let mobileLogoDark = document.getElementById('logo-mobile2');

mainNav.classList.remove('main-nav--nojs');

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



const logoImage = document.querySelector('.main-header__logo picture').children;

console.log(logoImage);


// for (let i = 0; i < logoImage.length; i++) {
//   if (i.id.contains('logo-mobile2')) {
//
//   }
// }
