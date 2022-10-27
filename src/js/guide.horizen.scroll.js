function guideScroll(el) {
  let windowY = $(window).scrollTop();
  let windowX = $(window).scrollLeft();
  let elOffTop = $(el).offset().top;
  let elX = $(el).scrollLeft();
  console.log("windwoY", windowY);
  console.log("elX", elX);

  if (elOffTop <= windowY) {
    $(window).scrollTop(elOffTop);
    $(el).scrollLeft(elX + 5);
  }

  if (elOffTop <= windowY && elX > 0) {
    $(window).scrollTop(elOffTop);
    $(el).scrollLeft(elX - 5);
  }
}
