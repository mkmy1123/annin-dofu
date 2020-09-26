// function popupModalOne() {
//   var popup = document.getElementById('js-popup-1');
//   if (!popup) return;

//   var blackBg = document.getElementById('js-black-bg-1');
//   var closeBtn = document.getElementById('js-close-btn-1');
//   var showBtn = document.getElementById('js-show-popup-1');

//   closePopUp(blackBg);
//   closePopUp(closeBtn);
//   closePopUp(showBtn);
//   function closePopUp(elem) {
//     if (!elem) return;
//     elem.addEventListener('click', function () {
//       popup.classList.toggle('is-show');
//     });
//   }
// }

// function popupModalTwo() {
//   var popup = document.getElementById('js-popup-2');
//   if (!popup) return;

//   var blackBg = document.getElementById('js-black-bg-2');
//   var closeBtn = document.getElementById('js-close-btn-2');
//   var showBtn = document.getElementById('js-show-popup-2');

//   closePopUp(blackBg);
//   closePopUp(closeBtn);
//   closePopUp(showBtn);
//   function closePopUp(elem) {
//     if (!elem) return;
//     elem.addEventListener('click', function () {
//       popup.classList.toggle('is-show');
//     });
//   }
// }

// popupModalOne();
// popupModalTwo();

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
