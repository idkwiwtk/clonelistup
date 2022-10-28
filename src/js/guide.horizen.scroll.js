var PREV_WINDOW_Y = $(window).scrollTop();

const BEGIN = "begin";
const END = "end";

var scrollBlock = false;
var guideSwiperReach = BEGIN;

const UP = "up";
const DOWN = "down";
const SCROLL_STEP = 20;

/**
 * 가이드 섹션 슬라이드 객체 선언
 */
var guideSwiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesperView: "auto",
  mousewheel: true,
  on: {
    reachBeginning: function () {
      guideSwiperReach = BEGIN;
      guideSwiper.mousewheel.disable();
    },
    reachEnd: function () {
      guideSwiperReach = END;
      guideSwiper.mousewheel.disable();
    },
  },
});

function guideScroll(el) {
  let windowY = $(window).scrollTop();
  let elOffTop = $(el).offset().top;
  let elContentWidth = $(el).outerWidth();
  let elX = $(el).scrollLeft();
  let mode;

  // scroll down
  if (windowY >= PREV_WINDOW_Y) {
    mode = DOWN;
  } else {
    // scroll up
    mode = UP;
  }

  PREV_WINDOW_Y = windowY;

  if (elOffTop <= windowY) {
    setGlobalScroll(true);
    $(window).scrollTop(elOffTop);
  }

  // if (elOffTop >= windowY && elX != 0 && mode == UP) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   $(window).scrollTop(elOffTop);
  //   $(el).scrollLeft(elX - step);
  // } else if (elOffTop <= windowY) {
  //   if (elX >= elContentWidth) {
  //     $(el).scrollLeft(elContentWidth);
  //   } else {
  //     $(window).scrollTop(elOffTop);
  //     $(el).scrollLeft(elX + step);
  //   }
  // }
}

/**
 *
 * @param {global scroll control} block
 */
function setGlobalScroll(block) {
  scrollBlock = block;
}

function startGuideScrollEvent() {
  $(window).scroll(function (e) {
    guideScroll("#guide");
  });
}

function startGuideWheelEvent(el, nextEl) {
  document.addEventListener(
    "wheel",
    function (e) {
      let windowY = $(window).scrollTop();
      let elOffTop = $(el).offset().top;
      let nextElOffTop = $(nextEl).offset().top;

      if (e.deltaY < 0) {
        // scroll up
        console.log("scroll up");

        if (elOffTop > windowY) {
          setGlobalScroll(true);
          $(window).scrollTop(elOffTop);
        }
      } else {
        // scroll down
        console.log("scroll down");

        // 가이드 섹션 영역
        if (
          elOffTop < windowY &&
          guideSwiperReach != END &&
          nextElOffTop > windowY
        ) {
          console.log();
          setGlobalScroll(true);
          $(window).scrollTop(elOffTop);
        } else {
          setGlobalScroll(false);
          guideSwiper.mousewheel.enable();
        }
      }
      if (scrollBlock) {
        e.preventDefault();
        e.stopPropagation();
      } else {
      }
    },
    { passive: false }
  );
}

function startGuideSwiper() {}

function guideInit() {
  // startGuideScrollEvent();
  startGuideWheelEvent("#guide", "#service");
  startGuideSwiper();
}
