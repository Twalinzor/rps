function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}.`);
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      console.log(
        `You win this round! ${humanChoice} beats ${computerChoice}.`
      );
    } else {
      computerScore++;
      console.log(
        `You lose this round! ${computerChoice} beats ${humanChoice}.`
      );
    }
  }
  function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) return "rock";
    if (randomNumber < 0.66) return "paper";
    return "scissors";
  }

  function getHumanChoice() {
    let input = prompt(
      "Enter your choice: rock, paper, or scissors"
    ).toLowerCase();
    if (input === "rock" || input === "paper" || input === "scissors") {
      return input;
    } else {
      console.log("Invalid choice! Defaulting to rock.");
      return "rock";
    }
  }

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(
      `Scores after round ${round} - Human: ${humanScore}, Computer: ${computerScore}`
    );
  }

  console.log("Final Scores:");
  console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
  } else if (humanScore < computerScore) {
    console.log("Game over! The computer wins this time.");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();
