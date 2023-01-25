"use strict";


(() => {
  // ボトムナビのボタンを取得
  const navBtn = document.querySelector(".category");
  // ボトムナビメニューの取得
  const navShow = document.querySelector(".responsive_nav");
  // ボトムナビのリストを取得
  const navLists = document.querySelectorAll(".responsive_nav_list ");
  // トップボタン取得
  const topBtn = document.querySelector(".top");

 // クリックでis-show付け外し
  navBtn.addEventListener("click", () => {
    console.log(navBtn);
    navShow.classList.toggle("is-show");
  });
// navlist取得
  navLists.forEach((navList) => {
    console.log(navList);
     // クリックでis-show削除
    navList.addEventListener("click", () => {
      console.log(navList);
      navShow.classList.remove("is-show");
    });
    // クリックでis-show削除
    topBtn.addEventListener("click",()=>{
        navShow.classList.remove("is-show");
    })
  });
})();
