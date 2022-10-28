const animationTextList = ["Archiving", "Tagging", "Trading"];

$(document).ready(function () {
  typing($(".text-animation h2"), animationTextList, 300);
});

$("html").easeScroll();
