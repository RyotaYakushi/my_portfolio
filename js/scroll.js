//  スクロール表示
(() => {
  const bottomBtn = document.querySelector("");
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    if (scrollY >= 70) {
      //classにactive付与
      .classList.add("active");
    } else {
      //classからactive削除
      .classList.remove("active");
    }
  });
})();
