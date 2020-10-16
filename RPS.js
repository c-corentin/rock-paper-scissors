
function game() {
  let wins = 0;
  let loses = 0;

  while (wins < 3 && loses < 3) {
    let playerChoice = window.prompt("Choose Rock, Paper or Scissors");
    let playerChoiceLowerCase = playerChoice.toLowerCase().trim();
    console.log("playerChoice: " + playerChoiceLowerCase);

    function computerChoiceRand(computerPlay) {
      computerPlay = ["rock", "paper", "scissors"];
      return computerPlay[Math.floor(Math.random() * computerPlay.length)];
    }

    let computerChoice = computerChoiceRand();
    console.log("computerChoice: " + computerChoice);

    alert(playRound(playerChoiceLowerCase, computerChoice));

    function playRound(playerSelection, computerSelection) {
      function win(playerSelection, computerSelection) {
        wins++;
        return `Player: ${playerSelection} \nComputer: ${computerSelection} \nYou win: ${playerSelection} beats ${computerSelection}!`;
      }
      function lost(playerSelection, computerSelection) {
        loses++;
        return `Player: ${playerSelection} \nComputer: ${computerSelection} \nYou lost: ${computerSelection} beats ${playerSelection}!`;
      }
      function draw(playerSelection) {
        return `Player: ${playerSelection} \nComputer: ${computerSelection} \nIt's a draw: you both chose ${playerSelection}!`;
      }

      if (playerSelection == "rock" && computerSelection == "paper") {
        return lost(playerSelection, computerSelection);
      } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return win(playerSelection, computerSelection);
      } else if (playerSelection == "rock" && computerSelection == "rock") {
        return draw(playerSelection);
      } else if (
        playerSelection == "paper" &&
        computerSelection == "scissors"
      ) {
        return lost(playerSelection, computerSelection);
      } else if (playerSelection == "paper" && computerSelection == "rock") {
        return win(playerSelection, computerSelection);
      } else if (playerSelection == "paper" && computerSelection == "paper") {
        return draw(playerSelection);
      } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return lost(playerSelection, computerSelection);
      } else if (
        playerSelection == "scissors" &&
        computerSelection == "paper"
      ) {
        return win(playerSelection, computerSelection);
      } else if (
        playerSelection == "scissors" &&
        computerSelection == "scissors"
      ) {
        return draw(playerSelection);
      } else {
        return "Error: you must choose Rock, Paper or Scissors";
      }
    }
  }
  if (wins === 3) {
    alert(`You are the winner with ${wins} wins to ${loses} for the computer`)
  } else {
    alert(`Computer is the winner with ${loses} wins to ${wins} for you`)
  }
}
