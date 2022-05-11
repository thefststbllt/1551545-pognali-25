let hobbyButton = document.querySelector('.filter-companion__button--hobby');
let hobbyPreferences = document.querySelector('.filter-preferences--hobby');
let musicButton = document.querySelector('.filter-companion__button--music');
let musicPreferences = document.querySelector('.filter-preferences--music');
let foodButton = document.querySelector('.filter-companion__button--food');
let foodPreferences = document.querySelector('.filter-preferences--food');
let transportButton = document.querySelector('.filter-companion__button--transport');
let transportPreferences = document.querySelector('.transport-list');
let levelButton = document.querySelector('.filter-companion__button--level');
let levelPreferences = document.querySelector('.filter-companion__range-wrapper');

hobbyPreferences.classList.add('js-closed--filter-companion');
hobbyButton.classList.add('filter-companion__button--rotated');
foodPreferences.classList.add('js-closed--filter-companion');
foodButton.classList.add('filter-companion__button--rotated');

hobbyButton.addEventListener('click',function () {
  hobbyPreferences.classList.toggle('js-closed--filter-companion');
  hobbyButton.classList.toggle('filter-companion__button--rotated');
})

musicButton.addEventListener('click', function(){
  musicPreferences.classList.toggle('js-closed--filter-companion');
  musicButton.classList.toggle('filter-companion__button--rotated');
})

foodButton.addEventListener('click', function() {
  foodPreferences.classList.toggle('js-closed--filter-companion');
  foodButton.classList.toggle('filter-companion__button--rotated');
})

transportButton.addEventListener('click', function(){
  transportPreferences.classList.toggle('js-closed--filter-companion');
  transportButton.classList.toggle('filter-companion__button--rotated');
})

levelButton.addEventListener('click', function (){
  levelPreferences.classList.toggle('js-closed--filter-companion');
  levelButton.classList.toggle('filter-companion__button--rotated');
})
