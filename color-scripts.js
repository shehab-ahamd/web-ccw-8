const colorButton = document.querySelector(".colorButton");
const background = document.querySelector("body");

const colors = ["green", "#000080", "red", "yellow"];

function changeColor() {
  let randomColor = Math.floor(Math.random() * colors.length);
  background.style.backgroundColor = colors[randomColor];
}
