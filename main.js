const points = document.querySelector(".score");
const time = document.querySelector(".time-counter-placeholder");
const divs = [...document.getElementsByClassName("div")];

let score = 0;
let timeCounter = 5;
time.innerText = timeCounter;
points.innerText = score;

function startGame() {
  setAll = setInterval(startingGame, 1000);
  colorRandomDiv = setInterval(coloringDiv, 2000);
  document.querySelector(".start").disabled = true;
}
function addPoints() {
  score += 20;
  points.innerText = score;
}
function rejectPoints() {
  score -= 10;
  points.innerText = score;
}

const element = divs.forEach((div) => {
  if (div.className !== "immortal") {
    div.addEventListener("click", rejectPoints);
  }
});

function coloringDiv() {
  const randomDiv = divs[Math.floor(divs.length * Math.random())];
  randomDiv.style.backgroundColor = "darkgreen";
  randomDiv.style.border = "1px solid green";
  randomDiv.style.cursor = "pointer";
  randomDiv.classList.add("immortal");
  randomDiv.addEventListener("click", addPoints);

  function removeClass() {
    randomDiv.style.backgroundColor = "";
    randomDiv.style.border = "";
    randomDiv.style.cursor = "default";
    randomDiv.removeEventListener("click", addPoints);
  }
  setTimeout(removeClass, 2000);
}

function startingGame() {
  timeCounter = timeCounter - 1;
  time.innerText = timeCounter;
  if (timeCounter === 0) {
    endGame();
  }
}
function endGame() {
  alert(`Time out! Your score is: ${score}`);
  timeCounter = 60;
  score = 0;
  time.innerText = timeCounter;
  points.innerText = score;
  clearInterval(setAll);
  clearInterval(colorRandomDiv);
  document.querySelector(".start").disabled = false;
}

points.style.color = "darkgreen";
time.style.color = "darkgreen";
