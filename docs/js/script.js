const nav = document.querySelector('nav');
const burgerWrapper = document.querySelector('.burger-block');
const burger = document.querySelector('.burger');
//VARIABLES ^^^

function clickBurger() {
  var state = burger.classList.value === 'burger burger-active';

  if (state) {
    nav.classList.remove('nav-active');
    burger.classList.remove('burger-active');
  }
  else {
    nav.classList.add('nav-active');
    burger.classList.add('burger-active');
  }
}

let lastScroll = Math.round(window.scrollY);
const hideNav = throttle(() => {
  var scroll = Math.round(window.scrollY);
  var active = burger.classList.value == "burger burger-active";
  if (scroll > lastScroll && active) {
    burger.classList.remove('burger-active');
    nav.classList.remove('nav-active');
  }
})
//BURGER FUNCTIONS ^^^

window.addEventListener('load', () => {
  burgerWrapper.addEventListener('click', clickBurger);
});
window.addEventListener('scroll', hideNav);
