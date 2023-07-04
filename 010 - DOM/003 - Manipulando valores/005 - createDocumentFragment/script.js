"use strict";

const ul = document.querySelector('ul');
const fragment = document.createDocumentFragment();

const lanches = ["Lanche1", "Lanche2", "Lanche3", "Lanche4"];

lanches.forEach((element) => {
  const li = document.createElement('li');
  li.textContent = element;
  fragment.append(li)
})

console.log(fragment);
ul.append(fragment)