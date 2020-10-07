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
  $(".btn-gnavi").on("click", function () {
    // ハンバーガーメニューの位置を設定
    var rightVal = 0;
    if ($(this).hasClass("open")) {
      // 位置を移動させメニューを開いた状態にする
      rightVal = -300;
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $(this).removeClass("open");
    } else {
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $(this).addClass("open");
    }

    $("#global-navi").stop().animate({
      right: rightVal
    }, 200);
  });
});
