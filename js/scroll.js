//  スクロール表示
(() => {
  const fixed = document.querySelector(".header-top");
  const show = document.querySelector(".logo_white");
  const hidden = document.querySelector(".logo");
  const navColor = document.querySelectorAll(".nav-item > a");

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    if (scrollY >= 500) {
      //classにactive付与
      fixed.classList.add("is-active");
    } else {
      //classからactive削除
      fixed.classList.remove("is-active");
    }
    if (scrollY >= 500) {
      //classにshow.hidde付与
      show.classList.add("is-show");
      hidden.classList.add("is-hidden");
    } else {
      //classからshow.hidden削除
      show.classList.remove("is-show");
      hidden.classList.remove("is-hidden");
    }
    if (scrollY >= 600) {
      navColor.forEach((element) => {
        element.classList.add("is-color");
      });
    } else {
      navColor.forEach((element) => {
        element.classList.remove("is-color");
      });
    }
  });
})();
