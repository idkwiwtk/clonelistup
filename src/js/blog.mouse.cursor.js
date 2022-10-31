$(".section-blog .blog-posts").mousemove(function (event) {
  $(".section-blog .blog-drag-cursor").css({
    top: event.pageY - $(event.currentTarget).offset().top,
    left: event.pageX - $(event.currentTarget).offset().left,
    // top: $(event.currentTarget).offset().top,
    // left: $(event.currentTarget).offset().left,
    // top: event.pageY,
    // left: event.pageX,
  });
});
