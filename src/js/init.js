const animationTextList = ["Archiving", "Tagging", "Trading"];

$(document).ready(function () {
  typing($(".text-animation h2"), animationTextList, 300);
});

// 가이드 섹션 가로 스크롤 초기화
// guideInit();

// jquery smooth scroll
$("html").easeScroll();

// swiper

var swiperTop = new Swiper(".swiper-top", {
  direction: "vertical",
  // slidesperView: "auto",
  mousewheel: true,
  speed: 500,
  effect: "coverflow",
  // on: {
  //   reachBeginning: function () {
  //     guideSwiperReach = BEGIN;
  //     guideSwiper.mousewheel.disable();
  //   },
  //   reachEnd: function () {
  //     guideSwiperReach = END;
  //     guideSwiper.mousewheel.disable();
  //   },
  // },
});

var swiperMiddle = new Swiper(".swiper-middle", {
  direction: "horizontal",
  slidesperView: "auto",
  mousewheel: true,
  // on: {
  //   reachBeginning: function () {
  //     guideSwiperReach = BEGIN;
  //     guideSwiper.mousewheel.disable();
  //   },
  //   reachEnd: function () {
  //     guideSwiperReach = END;
  //     guideSwiper.mousewheel.disable();
  //   },
  // },
});

var swiperBottom = new Swiper(".swiper-bottom", {
  direction: "vertical",
  slidesperView: "auto",
  mousewheel: true,
  // on: {
  //   reachBeginning: function () {
  //     guideSwiperReach = BEGIN;
  //     guideSwiper.mousewheel.disable();
  //   },
  //   reachEnd: function () {
  //     guideSwiperReach = END;
  //     guideSwiper.mousewheel.disable();
  //   },
  // },
});
