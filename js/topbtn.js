// スクロールで表示;
(() => {
  const topBtn = document.querySelector(".top-btn");
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    if (scrollY >= 600) {
      //classにactive付与
      topBtn.classList.add("active");
    } else {
      //classからactive削除
      topBtn.classList.remove("active");
    }
  });
})();
