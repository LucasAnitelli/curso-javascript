"use strict";

const container = document.querySelector('.container');

container.append("<p>Ola Lucas</>")

const newDiv = document.createElement('div');
newDiv.innerText = "Ola Lucas";
container.appendChild(newDiv)