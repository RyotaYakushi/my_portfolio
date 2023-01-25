"use strict";

const options = {
  mediaQuery: "min", 
  fixedWidth: "16em",
  gap: 16,
  type: "loop",
  arrows: false,
  drag: "free", 
  flickPower: 100,
  pagination: false,

  autoScroll: {
    speed: 0.5, 
    pauseOnHover: false,
    pauseOnFocus: true,
  },
  breakpoints: {
    1025: {
      gap: 24,
      fixedWidth: "16em",
    },
  },
};

const splide = new Splide(".splide", options);

splide.mount(window.splide.Extensions);
