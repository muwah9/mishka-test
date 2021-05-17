const mainNavigation = document.querySelector('.main-navigation');
const navigationToggle = document.querySelector('.main-navigation__toggle');
const OpenModal = document.querySelectorAll('.catalog-card__price-link, .button--video, .button--product');
const Modal = document.querySelector('.modal');
const ModalForm = document.querySelector('.form');
const Form = document.querySelector('.form__radio');

OpenModal.forEach((item) => {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    Modal.classList.add('modal-open');
  });
});

mainNavigation.classList.remove('main-navigation--no-js');

navigationToggle.addEventListener('click', function () {
  if (mainNavigation.classList.contains('main-navigation--closed')) {
    mainNavigation.classList.remove('main-navigation--closed');
    mainNavigation.classList.add('main-navigation--open');
  } else {
    mainNavigation.classList.add('main-navigation--closed');
    mainNavigation.classList.remove('main-navigation--open');
  };
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (Modal.classList.contains('modal-open')) {
      evt.preventDefault();
      Modal.classList.remove('modal-open');
    };
  };
});
