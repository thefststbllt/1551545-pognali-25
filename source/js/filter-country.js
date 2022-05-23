let filterContainer = document.querySelector('.filter-alphabet');
let countryToggle = document.querySelector('.filter-alphabet__toggle');
let titleToggle = document.querySelector('.filter-alphabet__title');
let filterContent = document.querySelector('.filter__inner-wrapper');
let continentList = document.querySelector('.filter__continent-list');
let closeButton = document.querySelector('.button--alphabet');

filterContainer.classList.add('filter-alphabet--js-on');
filterContent.classList.add('js-closed--filter');
continentList.classList.add('js-closed--continent');
closeButton.classList.add('js-closed--filter');
countryToggle.classList.add('filter-alphabet__toggle--closed');


countryToggle.addEventListener('click', function () {
  filterContent.classList.toggle('js-closed--filter');
  continentList.classList.toggle('js-closed--continent');
  closeButton.classList.toggle('js-closed--filter');
  countryToggle.classList.toggle('filter-alphabet__toggle--closed');
})

titleToggle.addEventListener('click', function () {
  filterContent.classList.toggle('js-closed--filter');
  continentList.classList.toggle('js-closed--continent');
  closeButton.classList.toggle('js-closed--filter');
  countryToggle.classList.toggle('filter-alphabet__toggle--closed');
})

closeButton.addEventListener('click', function () {
  filterContent.classList.add('js-closed--filter');
  continentList.classList.add('js-closed--continent');
  closeButton.classList.add('js-closed--filter');
  countryToggle.classList.toggle('filter-alphabet__toggle--closed');
})
