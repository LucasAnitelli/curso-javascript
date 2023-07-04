"use strict";

const container = document.querySelector(".container");


const newP = document.createElement("p");
newP.innerText = "Ola Lucas";
container.before("<p>Ola Lucas</>")
container.after(newP)