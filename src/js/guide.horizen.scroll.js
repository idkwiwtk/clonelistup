var PREV_WINDOW_Y = $(window).scrollTop();

const UP = "up";
const DOWN = "down";

function guideScroll(event, el, step) {
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

  console.log("Window y", windowY);

  PREV_WINDOW_Y = windowY;

  if (elOffTop >= windowY && elX != 0 && mode == UP) {
    $(window).scrollTop(elOffTop);
    $(el).scrollLeft(elX - step);
  } else if (elOffTop <= windowY) {
    if (elX >= elContentWidth) {
      $(el).scrollLeft(elContentWidth);
    } else {
      $(window).scrollTop(elOffTop);
      $(el).scrollLeft(elX + step);
    }
  }
}
