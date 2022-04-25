let businessButton = document.querySelector('.profile-addition__business-button');
let businessSection = document.querySelector('.profile-addition__business');
let innerButton = document.querySelector('.profile-addition__button');

businessSection.classList.add('js-closed--filter');

businessButton.addEventListener('click', function () {
  businessSection.classList.toggle('js-closed--filter');
})

innerButton.addEventListener('click', function () {
  if (businessSection.classList.contains('js-closed--filter')) {
    businessSection.classList.remove('js-closed--filter');
  } else {
    businessSection.classList.add('js-closed--filter');
  }
})
