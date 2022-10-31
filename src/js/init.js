const animationTextList = ["Archiving", "Tagging", "Trading"];

$(document).ready(function () {
  typing($(".text-animation h2"), animationTextList, 300);
});

$("html").easeScroll();

// AOS.init();
$(window).scroll(function () {
  if ($("#bottom-banner img").is(":offscreen")) {
    $("#bottom-banner img").removeClass("zoom");
  } else {
    $("#bottom-banner img").addClass("zoom");
  }
});
