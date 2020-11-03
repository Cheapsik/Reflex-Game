const points = document.querySelector(".score");
const time = document.querySelector(".time-counter-placeholder");

const divs = [...document.getElementsByClassName("div")];


let timeCounter = 60;
time.innerText = timeCounter;

function startGame(){
    setAll = setInterval(startingGame, 1000);
    colorRandomDiv = setInterval(coloringDiv, 2000);
}
function coloringDiv(){
    const randomDiv = divs[Math.floor(divs.length * Math.random())];
        randomDiv.style.backgroundColor = "teal";
        function removeClass(){
            randomDiv.style.backgroundColor = "";
        }
        setTimeout(removeClass, 2000)
}

function startingGame() {
         timeCounter = timeCounter -1;
         time.innerText = timeCounter;
         if(timeCounter === 0){
                 timeCounter = 60;
                 clearInterval(setAll);
                 clearInterval(colorRandomDiv);
                 alert("Time out!");
         }
}

