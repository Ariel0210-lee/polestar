$(function () {
  // nav
  $(".ghost_btn").click(function () {
    $(".m-navi").fadeIn().css("display", "flex");
    $(".ghost_btn").hide();
    $(".close_btn").show();
  });

  $(".close_btn").click(function () {
    $(".m-navi").fadeOut();
    $(".ghost_btn").show().css("display", "flex");
    $(".close_btn").hide();
  });
});

// swiper.js
// sec05
let swiperFade = new Swiper(".sec05_slides", {
  slidesPerView: 1,
  paginationHide: true,
  effect: "fade",
  crossFade: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  loop: true,
});

// sec06
let swiper = new Swiper(".sec06_slides-rtl", {
  slidesPerView: 4,
  spaceBetween: 30,
  paginationHide: true,
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
  },
  loop: true,
  disableOnInteraction: false,

  // responsive
  breakpoints: {
    1280: {
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 1,
    }
  }
});

let swiper02 = new Swiper(".sec06_slides", {
  slidesPerView: 4,
  spaceBetween: 30,
  paginationHide: true,
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
  },
  loop: true,
  disableOnInteraction: false,

  // responsive
  breakpoints: {
    1280: {
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 1,
      spaceBetween: 30,
    }
  }
});
