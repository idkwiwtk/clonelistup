$.expr.filters.offscreen = function (el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.x + rect.width < 0 ||
    rect.y + rect.height < 0 ||
    rect.x > window.innerWidth ||
    rect.y > window.innerHeight
  );
};
