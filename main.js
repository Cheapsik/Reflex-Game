const points = document.querySelector(".score");
const time = document.querySelector(".time-counter-placeholder");

const divs = [...document.getElementsByClassName("div")];

let timeCounter = 0;

function startGame(){
    setAll = setInterval(startingGame, 5000);
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
    
    // for(let i = 0; i>10 i++){
    //     timeCounter += timeCounter;
    // }
}

