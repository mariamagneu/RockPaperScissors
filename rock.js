document.addEventListener("DOMContentLoaded", function() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex;
    const winningCombos = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper',
    };
    let userWins = 0;
    let computerWins = 0;

    const rpsOutput = document.createElement("div");
    document.body.appendChild(rpsOutput);

    let cptrSelection = document.createElement("p");
    rpsOutput.appendChild(cptrSelection);

    let usrSelection = document.createElement("p");
    rpsOutput.appendChild(usrSelection);

    let rpsRoundResult = document.createElement("p");
    rpsOutput.appendChild(rpsRoundResult);

    let rpsGameResult = document.createElement("p");
    rpsOutput.appendChild(cptrSelection);

    let usrWins = document.createElement ("p");
    rpsOutput.appendChild(usrWins);

    let cptrWins = document.createElement ("p");
    rpsOutput.appendChild(cptrWins);

    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    document.body.appendChild(rockBtn);

    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";
    document.body.appendChild(scissorsBtn);

    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    document.body.appendChild(paperBtn);

    let getUserChoice = "";

    rockBtn.addEventListener("click", function() {
        getUserChoice = "rock";
        playGame();
    });

 scissorsBtn.addEventListener("click", function() {
        getUserChoice = "scissors";
        playGame();
    });

    paperBtn.addEventListener("click", function() {
        getUserChoice = "paper";
        playGame();
    });

    function playGame() {
        function getComputerChoice() {
            randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        }
        function playRound(playerSelection, computerSelection) {
            if (usrWins === 5) {
                rpsGameResult.textContent = "You Won! Congratulations"
                return rpsGameResult
            } else if (cptrWins === 5) {
                rpsGameResult.textContent = "The Computer won. But try again"
            } else if (playerSelection === computerSelection) {
                rpsGameResult.textContent = "It's a tie. Nobody wins"; 
            } else if (winningCombos[playerSelection] === computerSelection) {
                return "You won!!!";
            } else {
                return "You lost! :(";
            }
        }

        let playerSelection = getUserChoice;
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        cptrSelection.textContent = "Computer chose: " + computerSelection;
        usrSelection.textContent = "You chose: " + playerSelection;
        rpsRoundResult.textContent = result ;
        if (result === "You won!!!") {
            userWins++;
        } else if (result === "You lost! :(") {
            computerWins++;
        }

        if (userWins === computerWins) {
            rpsGameResult = "It's a tie.";
        } else if (userWins > computerWins) {
            rpsGameResult = "YOU MADE IT! YOU WON THE WHOLE GAME";
        } else {
        }

        usrWins.textContent ="User Wins: " + userWins;
        cptrWins.textContent = "Computer Wins: " + computerWins;
    }


});