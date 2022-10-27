const animationTextList = ["Archiving", "Tagging", "Trading"];

var PREV_WINDOW_Y;

$(document).ready(function () {
  // $("#smooth-wrapper").smoothWheel();
  typing($(".text-animation h2"), animationTextList, 300);
});

$(window).scroll(function () {
  guideScroll($("#guide"));
});
