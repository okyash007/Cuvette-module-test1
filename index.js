const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const buttons = [rock , paper , scissors]
const resultArea = document.querySelector("#result_area div");
const playerElement = document.getElementById('player')
const computerElement = document.getElementById('computer')
const rulesBTN = document.querySelector('#rulesBtn')
const rulesBtnDiv = document.getElementById('rulesBtnDiv')
let playerCount = localStorage.getItem('playerCount') || 0;
let computerCount = localStorage.getItem('computerCount') || 0;

playerElement.innerHTML = playerCount
computerElement.innerHTML = computerCount

rock.id = "rock"
paper.id = "paper"
scissors.id = "scissors"

console.log(buttons)

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
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
tryAgainButton.classList.add("try-again")
tryAgainButton.addEventListener("click", () => {
  window.location.reload();
});

const textAgainstPC = document.createElement("p")
textAgainstPC.innerHTML = "AGAINST PC"

const result = document.createElement("p")

// const rulesTest = document.createElement()

const resultArea_div = document.createElement("div")
resultArea_div.classList.add("resultArea-div")
resultArea_div.appendChild(result)
resultArea_div.appendChild(textAgainstPC)
resultArea_div.appendChild(tryAgainButton)


rulesBTN.addEventListener('click', function (){

} )

const winnerDiv = document.createElement("div")
winnerDiv.classList.add("winnerDiv")
const loserDiv = document.createElement("div")
loserDiv.classList.add("loserDiv")
const nextBTN = document.createElement("button")
nextBTN.classList.add("btn")
nextBTN.innerHTML = "NEXT"



for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let resultText = playRound(buttons[i].id, computer.id);
    result.innerHTML = resultText;
    console.log(buttons[i])
    console.log(computer)
    if(resultText === "You win!" ){
      rulesBtnDiv.appendChild(nextBTN)
      winnerDiv.classList.add("wins")
      playerCount++
      localStorage.setItem('playerCount', playerCount);
      playerElement.innerHTML = localStorage.getItem('playerCount')
    }
    if(resultText === "You lose!") {
      loserDiv.classList.add("wins")
      computerCount++
      localStorage.setItem('computerCount', computerCount);
      computerElement.innerHTML = localStorage.getItem('computerCount')
    }
    
    resultArea.innerHTML = ""
    loserDiv.appendChild(computer)
    winnerDiv.appendChild(buttons[i].cloneNode(true))
    resultArea.appendChild(winnerDiv)
    resultArea.appendChild(resultArea_div)
    resultArea.appendChild(loserDiv)

  });
}

console.log(localStorage)