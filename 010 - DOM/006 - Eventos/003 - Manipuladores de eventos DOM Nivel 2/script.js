"use strict";

const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  body.style.background = "red";
})

btn.addEventListener("mouseover", () => {
  body.style.background = "#FFF";
})