"use strict";

(() => {
  const fixedBody = document.querySelector("body");
  const humMenu = document.getElementById("menu");
  const toggleMenu = document.querySelector(".toggle-menu");
  const toggleNav = document.querySelector(".humberger_list-item");

  console.log(humMenu);

  humMenu.addEventListener("click", () => {
    humMenu.classList.toggle("active");
    toggleMenu.classList.toggle("toggle-active");
    fixedBody.classList.toggle("active");
  });

  toggleNav.addEventListener("click", () => {
    toggleNav.classList.toggle("is-show");
  });

  // マウスホバーの挙動
  const humHover = document.querySelector(".hover");

  humHover.addEventListener("mouseover", () => {
    document.querySelector(".humberger_item").classList.add("open");
  });

  humHover.addEventListener("mouseout", () => {
    document.querySelector(".humberger_item").classList.remove("open");
  });
})();
