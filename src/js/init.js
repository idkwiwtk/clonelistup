const animationTextList = ["Archiving", "Tagging", "Trading"];

$(document).ready(function () {
  typing($(".text-animation h2"), animationTextList, 300);
});

// 가이드 섹션 가로 스크롤 초기화
guideInit();

// jquery smooth scroll
$("html").easeScroll();
