"use strict";
const inputField = document.querySelectorAll(".input-field");
const inputEL = document.querySelectorAll(".input-el");
const btn = document.querySelector(".btn");

const redColor = "hsl(0, 100%, 74%)";
btn.addEventListener("click", function (e) {
  inputEL.forEach((el, i) => {
    if (i === 2 || !el.value.includes("@")) {
      el.removeAttribute("placeholder");
      el.style.color = redColor;
      el.style.borderColor = redColor;
      el.nextElementSibling.classList.remove("hide");
      el.nextElementSibling.nextElementSibling.classList.remove("hide");
    }
    if (el.value === "") {
      el.removeAttribute("placeholder");
      el.style.color = redColor;
      el.style.borderColor = redColor;
      el.nextElementSibling.classList.remove("hide");
      el.nextElementSibling.nextElementSibling.classList.remove("hide");
    }
  });
});
