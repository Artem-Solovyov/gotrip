// Carousel

const owl = $(".owl-carousel");
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 15,
  startPosition: 1,
  responsive: {
    480: {
      margin: 15,
    },
    1000: {
      margin: 20,
    },
    1200: {
      margin: 30,
    },
  },
});
$(".slider__button--prev").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});
$(".slider__button--next").click(function () {
  owl.trigger("next.owl.carousel");
});

// Menu-icon
const navBtn = document.querySelector(".nav__togle");
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".nav");

navBtn.onclick = function () {
  menuIcon.classList.toggle("menu-icon-active");
  menu.classList.toggle("nav--mobile");
  document.body.classList.toggle("no-scrolle");
};
