import clasess from "./FadingText.module.css";

let rightValue = 20;
let ascending = true;
const offset = 15;
const timing = Math.random() * 320 + 50;

const text = [
  "lorem ipsum",
  "delete",
  "control",
  "shift",
  "caps lock",
  "backspace",
  "enter",
  "tab",
  "alt",
  "QWERTY",
  "&",
  "!",
  "!",
  "#",
  "#",
  "ABC",
];

function generateRightValue() {
  const step = Math.random() * 10 + 15;
  ascending ? (rightValue += step) : (rightValue -= step);

  if (Math.random() > 0.58) {
    ascending = !ascending;
  }
  if (rightValue > 95) {
    console.log("rightValue > 95");
    ascending = false;
    rightValue = 85;
  }
  if (rightValue < 5) {
    ascending = true;
    rightValue = 5;
  }
  console.log(rightValue + "" + ascending);
  return rightValue;
}

export function generateFadingText() {
  setInterval(() => {
    const div = document.createElement("div");
    div.className = `${clasess.fadingText}`;
    const textIndex = Math.floor(Math.random() * text.length);
    div.textContent = text[textIndex];

    const rightValue =
      generateRightValue() + Math.floor(Math.random() * offset);
    let fontSize;
    if (text[textIndex].length <= 3) {
      fontSize = Math.floor(Math.random() * 10 + 25);
    } else {
      fontSize = Math.floor(Math.random() * 8 + 15);
    }
    div.style.right = `${rightValue}%`;
    div.style.fontSize = `${fontSize}px`;
    div.style.rotate = `${Math.random() * 5 - 2}deg`;

    document.body.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 2300);
  }, timing);
}
