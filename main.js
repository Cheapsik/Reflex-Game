const points = document.querySelector(".score");
const time = document.querySelector(".time-counter-placeholder");
const divs = [...document.getElementsByClassName("div")];
const start = document.querySelector(".start");
let gameInProgress = false;
let score = 0;
let timeCounter = 5;
time.innerText = timeCounter;
points.innerText = score;


function startGame() {
  setAll = setInterval(startingGame, 1000);
  colorRandomDiv = setInterval(coloringDiv, 1000);
  document.querySelector(".start").disabled = true;

  const element = divs.forEach((div) => {
    if (div.className !== "immortal") {
      div.addEventListener("click", () => {
       if(gameInProgress) {
         rejectPoints();
       }
      });
    }
  });
  
}
function addPoints() {
  score += 20;
  points.innerText = score;
}
function rejectPoints() {
  score -= 10;
  points.innerText = score;
}


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
  setTimeout(removeClass, 500);
}

function startingGame() {
  timeCounter = timeCounter - 1;
  time.innerText = timeCounter;
  gameInProgress = true;
  if (timeCounter === 0) {
    endGame();
  }
}
function endGame() {
  alert(`Time out! Your score is: ${score}`);
  timeCounter = 5;
  score = 0;
  time.innerText = timeCounter;
  points.innerText = score;
  clearInterval(setAll);
  clearInterval(colorRandomDiv);
  start.disabled = false;
  gameInProgress = false;
}

points.style.color = "darkgreen";
time.style.color = "darkgreen";
