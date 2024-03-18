import clasess from "./FadingText.module.css";
import texts from "./texts.js";

const textCreationTime = 320;
const textRemoverTime = 2300;

export function generateFadingText() {
  return setInterval(() => {
    const div = document.createElement("div");

    div.className = `${clasess.fadingText}`;
    div.textContent = pickRandomText();
    div.style.right = `${generateRightValue()}%`;
    div.style.fontSize = `${generateFontSize(div.textContent.length)}px`;
    div.style.rotate = `${generateRotationValue()} deg`;

    document.body.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, textRemoverTime);
  }, textCreationTime);
}

const pickRandomText = () => {
  return texts[Math.floor(Math.random() * texts.length)];
};

const generateFontSize = (textLength) => {
  if (textLength <= 3) {
    return Math.floor(Math.random() * 10 + 25);
  }
  return Math.floor(Math.random() * 8 + 15);
};

const generateRotationValue = (min = -16, max = 16) => {
  return Math.random() * (max - min) + min;
};

let rightOffset = 20;
let goingLeft = true;

function generateRightValue() {
  const step = Math.random() * 10 + 15;
  goingLeft ? (rightOffset += step) : (rightOffset -= step);

  randomizeDirection();
  checkRightValue();

  console.log(rightOffset + " " + goingLeft);
  return rightOffset;
}

const checkRightValue = () => {
  if (rightOffset > 95) {
    goingLeft = false;
    rightOffset = 95;
  }
  if (rightOffset < 5) {
    goingLeft = true;
    rightOffset = 5;
  }
};

const randomizeDirection = (chanceToRandomize = 0.62) => {
  if (Math.random() > chanceToRandomize) {
    goingLeft = !goingLeft;
  }
};
