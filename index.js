const buttons = document.querySelectorAll("button");
const resultArea = document.querySelector("#result_area");
const playetElement = document.getElementById('player')
const computerElement = document.getElementById('computer')
let playerCount = localStorage.getItem('playerCount') || 0;
let computerCount = localStorage.getItem('computerCount') || 0;

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
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let computer = computerPlay();

const button = document.createElement("button");
button.innerText = "try again";
button.addEventListener("click", () => {
  window.location.reload();
});

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let result = playRound(buttons[i].innerHTML, computer);
    resultArea.innerHTML = result;
    if(result === "You win!" ){
      playerCount++
      localStorage.setItem('playerCount', playerCount);
      playetElement.innerHTML = localStorage.getItem('playerCount')
    }
    else if(result === "You lose!") {
      computerCount++
      localStorage.setItem('computerCount', computerCount);
      computerElement.innerHTML = localStorage.getItem('computerCount')
    }
    resultArea.appendChild(button);
  });
}

playetElement.innerHTML = localStorage.getItem('playerCount')
computerElement.innerHTML = localStorage.getItem('computerCount')

console.log(localStorage)