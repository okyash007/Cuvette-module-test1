const body = document.querySelector(".body");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const buttons = [rock, paper, scissors];
const resultArea = document.querySelector("#result_area div");
const playerElement = document.getElementById("player");
const computerElement = document.getElementById("computer");
const rulesBTN = document.querySelector("#rulesBtn");
const rulesBtnDiv = document.getElementById("rulesBtnDiv");
const rulesTextDiv = document.getElementById("rulesTextDiv");
let playerCount = localStorage.getItem("playerCount") || 0;
let computerCount = localStorage.getItem("computerCount") || 0;

playerElement.innerHTML = playerCount;
computerElement.innerHTML = computerCount;

rock.id = "rock";
paper.id = "paper";
scissors.id = "scissors";

console.log(buttons);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "TIE";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "YOU WIN";
  } else {
    return "YOU LOSE";
  }
}

function computerPlay() {
  const choices = [rock, paper, scissors];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let computer = computerPlay();

const tryAgainButton = document.createElement("button");
tryAgainButton.innerText = "PLAY AGAIN";
tryAgainButton.classList.add("try-again");
tryAgainButton.addEventListener("click", () => {
  window.location.reload();
});

const textAgainstPC = document.createElement("p");
textAgainstPC.innerHTML = "AGAINST PC";

const result = document.createElement("p");

// const rulesTest = document.createElement()

const resultArea_div = document.createElement("div");
resultArea_div.classList.add("resultArea-div");
resultArea_div.appendChild(result);
resultArea_div.appendChild(textAgainstPC);
resultArea_div.appendChild(tryAgainButton);

const rules = [
  "Rock beats scissors, scissors beat paper, and paper beats rock.",
  "Agree ahead of time whether you'll count off “rock, paper, scissors, shoot” or just “rock, paper, scissors.”",
  "Use rock, paper, scissors to settle minor decisions or simply play to pass the time",
  "If both players lay down the same hand, each player lays down another hand",
];

const ul = document.createElement("ul");

const ulHeading = document.createElement("h1");
ulHeading.innerHTML = "Game Rules";
ul.appendChild(ulHeading);

for (let i = 0; i < rules.length; i++) {
  const li = document.createElement("li");
  li.textContent = rules[i];
  ul.appendChild(li);
}

const ulClose = document.createElement("button");
ulClose.innerHTML = "X";
ulClose.addEventListener("click", function () {
  rulesTextDiv.innerHTML = "";
});

rulesBTN.addEventListener("click", function () {
  rulesTextDiv.appendChild(ulClose);
  rulesTextDiv.appendChild(ul);
});

const winnerDiv = document.createElement("div");
winnerDiv.classList.add("winnerDiv");
const loserDiv = document.createElement("div");
loserDiv.classList.add("loserDiv");

const nextBTN = document.createElement("button");
nextBTN.classList.add("btn");
nextBTN.innerHTML = "NEXT";

const nextDIV = document.createElement("div");
nextDIV.classList.add('nextDIV')
const nextIMG = document.createElement("div");
nextIMG.classList.add('nextIMG')
const stars = document.createElement("img");
stars.classList.add('stars')
stars.src = "./Group 5.svg";

const trophy = document.createElement("img")
trophy.classList.add("trophy")
trophy.src = "./Vector.svg"

nextIMG.appendChild(stars);
nextIMG.appendChild(trophy)
const tryAgainButtonCopy = tryAgainButton.cloneNode(true);
tryAgainButtonCopy.addEventListener("click", () => {
  window.location.reload(tryAgainButtonCopy);
});

const hurry = document.createElement('h1')
hurry.classList.add('hurry')
hurry.innerHTML = "HURRY!!"

const youWonText = document.createElement('h1')
youWonText.classList.add('youWonText')
youWonText.innerHTML = "YOU WON THE GAME"

nextDIV.appendChild(nextIMG);
nextDIV.appendChild(hurry)
nextDIV.appendChild(youWonText)
nextDIV.appendChild(tryAgainButtonCopy);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let resultText = playRound(buttons[i].id, computer.id);
    result.innerHTML = resultText;
    console.log(buttons[i]);
    console.log(computer);
    if (resultText === "YOU WIN") {
      rulesBtnDiv.appendChild(nextBTN);
      winnerDiv.classList.add("wins");
      playerCount++;
      localStorage.setItem("playerCount", playerCount);
      playerElement.innerHTML = localStorage.getItem("playerCount");
    }
    if (resultText === "YOU LOSE") {
      loserDiv.classList.add("wins");
      computerCount++;
      localStorage.setItem("computerCount", computerCount);
      computerElement.innerHTML = localStorage.getItem("computerCount");
    }

    resultArea.innerHTML = "";
    loserDiv.appendChild(computer.cloneNode(true));
    winnerDiv.appendChild(buttons[i].cloneNode(true));
    resultArea.appendChild(winnerDiv);
    resultArea.appendChild(resultArea_div);
    resultArea.appendChild(loserDiv);
  });
}

nextBTN.addEventListener("click", function () {
  body.innerHTML = " ";
  body.appendChild(nextDIV);
  nextBTN.remove(rulesBtnDiv);
  console.log(body);
});

console.log(localStorage);
