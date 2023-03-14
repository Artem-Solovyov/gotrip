var owl = $(".owl-carousel");
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 30,
  startPosition: 1,
});
$(".slider__button--prev").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});
$(".slider__button--next").click(function () {
  owl.trigger("next.owl.carousel");
});
