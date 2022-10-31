$(".section-lang").click(function (event) {
  $(".section-lang-menu").toggleClass("animation-lang-menu-show");
});

// const menu = ["#home", "#download", "#guide", "#service", "#blog"];
// let prevMenuIdx = 0;

$(".header .section-menu a").click(function (event, idx) {
  event.preventDefault();

  let x = $(this).attr("href");

  // let timeOffset = 0;

  // for (let i = 0; i < menu.length; i++) {
  //   const mn = menu[i];
  //   if (mn == x) {
  //     let offsetDiff = Math.abs(prevMenuIdx - i); // 이전 메뉴와 선택한 메뉴 사이 인덱스 차이
  //     timeOffset = 1000 * offsetDiff;

  //     console.log("offsetDiff ", offsetDiff);
  //     console.log("timeOffset ", timeOffset);
  //     prevMenuIdx = i;
  //     break;
  //   }
  // }

  $("html, body")
    .stop()
    .animate({ scrollTop: $(x).offset().top }, 200);

  if (x == "#guide") {
    setTimeout(function () {
      $("#guide.sticky")
        .stop()
        .animate({ scrollLeft: 0 }, 2000, "easeInOutExpo");
    }, 500);
  }
});
