const options = {
  cover: true,
  heightRatio: 0.5,
  perMove: 1,
  arrows: true,
  drag: "free",
  gap: 16,
  fixedWidth: "20rem",
  height: "200px",
  updateOnMove: true,
  padding: "5rem", //左右のスライドを5rem分表示させる
  type: "loop", //スライドをループさせる
  focus: "center", //アクティブなスライドを中央に表示する
  mediaQuery: "max",
  breakpoints: {
    autoScroll: {
      speed: 0.2,
      pauseOnHover: false,
      pauseOnFocus: true,
    },
    1025: {
      fixedWidth: "25rem",
      gap: 24,
      arrows: false,
    },
    640: {
      fixedWidth: "20rem",
      arrows: false,
    },
  },
};

const splide = new Splide(".splide", options);
splide.mount(window.splide.Extensions);
