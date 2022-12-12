"use strict";

(() => {
  const toggleBtn = document.getElementById("menu");
  const spNav = document.querySelector(".sp_nav");
  const spNavItem = document.querySelectorAll(".sp_nav-item");

  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    spNav.classList.toggle("active");
  });
  spNavItem.forEach(function (target) {
    target.addEventListener("click", () => {
      spNav.classList.remove("active");
      toggleBtn.classList.toggle("active");
    });
  });
})();
