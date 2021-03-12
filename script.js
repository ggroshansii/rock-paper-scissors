let playerScore = 0;
            let computerScore = 0;
            let roundCounter = 0;
            let computerSelection;
            let rock = document.querySelector("#rockImg");
            rock.addEventListener("click", function () {
              playRound("rock", (computerSelection = computerPlay()));
            });
            let paper = document.querySelector("#paperImg");
            paper.addEventListener("click", function () {
              playRound("paper", (computerSelection = computerPlay()));
            });
            let scissors = document.querySelector("#scissorsImg");
            scissors.addEventListener("click", function () {
              playRound("scissors", (computerSelection = computerPlay()));
            });

            function computerPlay() {
              let computerMove;
              let randomNum = Math.floor(Math.random() * 8);
              if (randomNum <= 2) {
                computerMove = "rock";
              } else if (randomNum > 2 && randomNum <= 5) {
                computerMove = "paper";
              } else if (randomNum > 5) {
                computerMove = "scissors";
              }
              return computerMove;
            }

            function playRound(playerSelection, computerSelection) {
              if (playerScore < 5 && computerScore < 5) {

              /*  let imageZone = document.querySelector("#computerChoiceDisplay"); */
                let computerChoice = document.querySelector("#computerChoice");
                computerChoice.textContent = `${computerSelection.toUpperCase()}`;
                if (computerSelection == "rock"){
                    let image = document.createElement("img");
                    image.src = "images/rock.png";
                    computerChoice.appendChild(image);
                } else if (computerSelection == "paper") {
                    let image = document.createElement("img");
                    image.src = "images/paper.png";
                    computerChoice.appendChild(image);
                } else if (computerSelection == "scissors"){
                    let image = document.createElement("img");
                    image.src = "images/scissors.png";
                    computerChoice.appendChild(image);
                }
  

                if (playerSelection == "rock" && computerSelection == "rock") {
                  console.log("Round is a TIE");
                  let roundResult = document.querySelector("#roundResult");
                  roundResult.textContent = "This round is a TIE";
                } else if (
                  playerSelection == "rock" &&
                  computerSelection == "paper"
                ) {
                  computerScore += 1;
                  console.log("You lost this round");
                  let updateScore = document.querySelector("#scoreboard");
                  updateScore.textContent = `${playerScore} - ${computerScore}`;
                  let roundResult = document.querySelector("#roundResult");
                  roundResult.textContent = "You lost this round";
                } else if (
                  playerSelection == "rock" &&
                  computerSelection == "scissors"
                ) {
                  playerScore += 1;
                  console.log("You won this round");
                  let updateScore = document.querySelector("#scoreboard");
                  updateScore.textContent = `${playerScore} - ${computerScore}`;
                  let roundResult = document.querySelector("#roundResult");
                  roundResult.textContent = "You won this round";
                } else if (
                  playerSelection == "paper" &&
                  computerSelection == "rock"
                ) {
                  playerScore += 1;
                  console.log("You won this round");
                  let updateScore = document.querySelector("#scoreboard");
                  updateScore.textContent = `${playerScore} - ${computerScore}`;
                  let roundResult = document.querySelector("#roundResult");
                  roundResult.textContent = "You won this round";
                } else if (
                  playerSelection == "paper" &&
                  computerSelection == "paper"
                ) {
                  console.log("Tie");
                  let roundResult = document.querySelector("#roundResult");
                  roundResult.textContent = "This round is a TIE";
                } else if (
                  playerSelection == "paper" &&
                  computerSelection == "scissors"
                ) {
                  computerScore += 1;
                  console.log("You lost this round");
                  let updateScore = document.querySelector("#scoreboard");
                  updateScore.textContent = `${playerScore} - ${computerScore}`;
                  let roundResult = document.querySelector("#roundResult");
                  roundResult.textContent = "You lost this round";

                } else if (
                  playerSelection == "scissors" &&
                  computerSelection == "rock"
                ) {
                  computerScore += 1;
                  console.log("You lost this round");
                  let updateScore = document.querySelector("#scoreboard");
                  updateScore.textContent = `${playerScore} - ${computerScore}`;
                  let roundResult = document.querySelector("#roundResult");
                  roundResult.textContent = "You lost this round";
                } else if (
                  playerSelection == "scissors" &&
                  computerSelection == "paper"
                ) {
                  playerScore += 1;
                  console.log("You won this round");
                  let updateScore = document.querySelector("#scoreboard");
                  updateScore.textContent = `${playerScore} - ${computerScore}`;
                  let roundResult = document.querySelector("#roundResult");
                  roundResult.textContent = "You won this round";
                } else if (
                  playerSelection == "scissors" &&
                  computerSelection == "scissors"
                ) {
                  console.log("Tie");
                  let roundResult = document.querySelector("#roundResult");
                  roundResult.textContent = "This round is a TIE";
                }
              } else {
                let hideComputerChoice = document.querySelector("#computerChoiceDisplay");
                hideComputerChoice.style.display = "none";
                let hideRoundResult = document.querySelector("#roundResult");
                hideRoundResult.style.display = "none";
                let gameOver = document.querySelector("#gameOver");
                gameOver.textContent = "GAME OVER";
                let outcome = document.querySelector("#outcome");
                if (computerScore > playerScore) {
                outcome.textContent =  
                `The computer has won, your score is: ${playerScore} and the computer's score: ${computerScore}`
                } else if (playerScore > computerScore){
                  outcome.textContent =  
                `You have won, your score is: ${playerScore} and the computer's score: ${computerScore}`
              }
            }
          }

          let resetButton = document.querySelector("#btn-reset");
          resetButton.addEventListener("click", function(){
            location.reload(true);
          });