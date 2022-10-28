const animationTextList = ["Archiving", "Tagging", "Trading"];

$(document).ready(function () {
  // typing($(".text-animation h2"), animationTextList, 300);
});

// swiper
var swiperTop = new Swiper(".swiper-top", {
  direction: "vertical",
  mousewheel: true,
  on: {
    slideChangeTransitionEnd: function () {
      if (swiperTop.isBeginning) {
        console.log("reachBeginning: top");
        setTimeout(function () {
          swiperTop.mousewheel.enable();
          swiperMiddle.mousewheel.disable();
          swiperBottom.mousewheel.disable();
        }, 100);
      } else if (swiperTop.isEnd) {
        console.log("reachEnd: top");
        setTimeout(function () {
          swiperTop.mousewheel.disable();
          // swiperTop.mousewheel.enable();
          swiperMiddle.mousewheel.enable();
          swiperBottom.mousewheel.disable();
        }, 100);
      }
    },
    // reachBeginning: function () {
    //   console.log("reachBeginning: top");
    //   setTimeout(function () {
    //     swiperTop.mousewheel.enable();
    //     swiperMiddle.mousewheel.disable();
    //     swiperBottom.mousewheel.disable();
    //   }, 1000);
    // },
    // reachEnd: function () {
    //   console.log("reachEnd: top");
    //   setTimeout(function () {
    //     swiperTop.mousewheel.disable();
    //     swiperMiddle.mousewheel.enable();
    //     swiperBottom.mousewheel.disable();
    //   }, 1000);
    // },
  },
});

var swiperMiddle = new Swiper(".swiper-middle", {
  direction: "horizontal",
  mousewheel: true,
  on: {
    slideChange: function () {
      console.log("change");
    },
    slideChangeTransitionEnd: function () {
      if (swiperMiddle.isBeginning) {
        console.log("reachBeginning: Middle");
        setTimeout(function () {
          swiperTop.mousewheel.enable();
          swiperMiddle.mousewheel.disable();
          // swiperMiddle.mousewheel.enable();
          swiperBottom.mousewheel.disable();
        }, 100);
      } else if (swiperMiddle.isEnd) {
        console.log("reachEnd: Middle");
        setTimeout(function () {
          swiperTop.mousewheel.disable();
          swiperMiddle.mousewheel.disable();
          // swiperMiddle.mousewheel.enable();
          swiperBottom.mousewheel.enable();
        }, 100);
      }
    },
    // reachBeginning: function () {
    //   console.log("reachBeginning: Middle");
    //   setTimeout(function () {
    //     swiperTop.mousewheel.enable();
    //     swiperMiddle.mousewheel.disable();
    //     swiperBottom.mousewheel.disable();
    //   }, 1000);
    // },
    // reachEnd: function () {
    //   console.log("reachEnd: Middle");
    //   setTimeout(function () {
    //     swiperTop.mousewheel.disable();
    //     swiperMiddle.mousewheel.disable();
    //     swiperBottom.mousewheel.enable();
    //   }, 1000);
    // },
  },
});

var swiperBottom = new Swiper(".swiper-bottom", {
  direction: "vertical",
  mousewheel: true,
  on: {
    slideChangeTransitionEnd: function () {
      if (swiperBottom.isBeginning) {
        console.log("reachBeginning: Bottom");
        setTimeout(function () {
          swiperTop.mousewheel.disable();
          swiperMiddle.mousewheel.enable();
          swiperBottom.mousewheel.disable();
          // swiperBottom.mousewheel.enable();
        }, 100);
      } else if (swiperBottom.isEnd) {
        console.log("reachEnd: Bottom");
        setTimeout(function () {
          swiperTop.mousewheel.disable();
          swiperMiddle.mousewheel.disable();
          // swiperMiddle.mousewheel.enable();
          swiperBottom.mousewheel.enable();
        }, 100);
      }
    },
    // reachBeginning: function () {
    //   console.log("reachBeginning: Bottom");
    //   setTimeout(function () {
    //     swiperTop.mousewheel.disable();
    //     swiperMiddle.mousewheel.enable();
    //     swiperBottom.mousewheel.disable();
    //   }, 1000);
    // },
    // reachEnd: function () {
    //   console.log("reachEnd: Bottom");
    //   setTimeout(function () {
    //     swiperTop.mousewheel.disable();
    //     swiperMiddle.mousewheel.disable();
    //     swiperBottom.mousewheel.enable();
    //   }, 1000);
    // },
  },
});
