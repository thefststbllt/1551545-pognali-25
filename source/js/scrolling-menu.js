let nav = document.querySelector('.main-nav');
let pageAbout = document.querySelector('.page-about');
let sticky = pageAbout.offsetTop;
let burgerButton = document.querySelector('.burger-button');
let mainNavList = document.querySelector('.main-nav__list');


window.onscroll = function () {
  checkDistanceToTop ();
  headerColorChanger ();
};

function checkDistanceToTop() {
  if (window.pageYOffset > sticky) {
    nav.classList.add('main-nav--sticky');
    nav.classList.add('main-nav--scrolled');
    mainNavList.classList.add('main-nav__list--active');
  } else {
    nav.classList.remove('main-nav--sticky');
    nav.classList.remove('main-nav--scrolled');
    mainNavList.classList.remove('main-nav__list--active');
  }
}

function headerColorChanger() {
  if (window.pageYOffset > 0) {
    burgerButton.classList.add('burger-button--scrolled');
    mainNav.classList.add('main-nav--active');
  } else {
    burgerButton.classList.remove('burger-button--scrolled');
    mainNav.classList.remove('main-nav--active');
  }
}


