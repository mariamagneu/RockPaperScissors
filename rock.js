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
        winEndGame();
    });

 scissorsBtn.addEventListener("click", function() {
        getUserChoice = "scissors";
        playGame();
        winEndGame();

    });

    paperBtn.addEventListener("click", function() {
        getUserChoice = "paper";
        playGame();
        winEndGame();

    });

    function playGame() {
        function getComputerChoice() {
            randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        }
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return "It's a tie. Nobody wins"; 
            } else if (winningCombos[playerSelection] === computerSelection) {
                return "You won!!!";
            } else {
                return "You lost! :(";
            }
        }

        let playerSelection = getUserChoice;
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);

        cptrSelection.textContent = "Computer chose: " + computerSelection;
        usrSelection.textContent = "You chose: " + playerSelection;

        rpsRoundResult.textContent = roundResult ;


        if (roundResult === "You won!!!") {
            userWins++;
        } else if (roundResult === "You lost! :(") {
            computerWins++;
        }
        function winEndGame () {
        if (userWins === 5) {
            return "You Won the Game! Congratulations";
        } else if (computerWins === 5) {
            return "The Computer wo the Game. But try again";
        } else {
            return "";
        }
        }
        usrWins.textContent ="User Wins: " + userWins;
        cptrWins.textContent = "Computer Wins: " + computerWins;
        rpsGameResult.textContent = winEndGame();

    }
    
});