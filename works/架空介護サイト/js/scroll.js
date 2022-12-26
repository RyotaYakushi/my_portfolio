"use strict";

// スクロールで表示;
(() => {
  const topBtn = document.querySelector(".scroll-btn");
  const footer = document.querySelector(".footer");
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    if (scrollY >= 300) {
      //classにactive付与
      topBtn.classList.add("active");
    } else {
      //classからactive削除
      topBtn.classList.remove("active");
    }
    //ドキュメントの高さ
    const scrollHeight = document.body.clientHeight;
    //スクロール位置
    const scrollPosition = window.pageYOffset;
    //windowの高さ
    const windowHeignt = window.innerHeight;
    //footer取得
    const footer = document.querySelector("footer");
    //footerの高さ
    const footerHeight = footer.offsetHeight;
    console.log(footerHeight);
    if (scrollHeight - scrollPosition - windowHeignt <= footerHeight) {
      topBtn.classList.add("stop");
    } else {
      topBtn.classList.remove("stop");
    }
  },1500);
})();
