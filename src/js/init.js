const animationTextList = ["Archiving", "Tagging", "Trading"];

const SCROLL_STEP = 7;

$(document).ready(function () {
  // $("#smooth-wrapper").smoothWheel();
  typing($(".text-animation h2"), animationTextList, 300);
});

let chk = true;
$(window).scroll(function (e) {
  if (chk) {
    console.log(e.target.wheelDelta);
    chk = false;
    setTimeout(function () {
      chk = true;
    }, 1);
    guideScroll(e, $("#guide"), SCROLL_STEP);
  }
});
