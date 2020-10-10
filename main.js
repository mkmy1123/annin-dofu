const openModalTriggers = document.querySelectorAll(".show-popup")
const closeModalTriggers = document.querySelectorAll(".close")

openModalTriggers.forEach((trigger, i) => {
  trigger.addEventListener("click", () => {
    const popups = document.querySelectorAll(".popup")
    popups[i].classList.toggle('is-show')
  })
})

closeModalTriggers.forEach(trigger => {
  trigger.addEventListener("click", e => {
    const targetPopUp = e.target.closest(".popup")
    targetPopUp.classList.toggle('is-show')
  })
})

$(function () {
  $('#responsive__hm-icon').on('click', function () {
    $('.responsive__menu-trigger').toggleClass('active');
    $('.responsive__nav').toggleClass('open');
    $('.responsive__nav__menu').toggleClass('open');
    $('.responsive__overlay').toggleClass('open');
  });
});

$(function () {
  $('#responsive__nav li a').on('click', function () {
    $('.responsive__menu-trigger').toggleClass('active');
    $('.responsive__nav').toggleClass('open');
    $('.responsive__nav__menu').toggleClass('open');
    $('.responsive__overlay').toggleClass('open');
  });
});
