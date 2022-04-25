let toggleDropdown = document.querySelector('.step__dropdown-button');
let selectToggle = document.querySelector('.step__select-button');
let contentDropdown = document.querySelector('.step__select-dropdown');

toggleDropdown.addEventListener('click', function () {
  contentDropdown.classList.toggle('js-closed--filter');
})

selectToggle.addEventListener('click', function () {
  contentDropdown.classList.toggle('js-closed--filter');
})
