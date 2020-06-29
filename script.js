const htmlBody = document.body;
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const currentSelection = document.querySelector('.current-bg');

function setGradient() {
  htmlBody.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  currentSelection.textContent = `${htmlBody.style.background};`;
}

window.addEventListener('load', setGradient);
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
