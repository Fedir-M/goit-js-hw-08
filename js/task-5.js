const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

const changeColor = () => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;

}

btn.addEventListener("click", changeColor);



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}