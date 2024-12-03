import React, { useState } from "react";

const App: React.FC = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");
  const [round, setRound] = useState(1);

  const computerPlay = (): string => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  };

  const playRound = (playerSelection: string, computerSelection: string) => {
    if (playerSelection === computerSelection) {
      setResult("It's a tie!");
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      setPlayerScore(playerScore + 1);
      setResult(`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
      setComputerScore(computerScore + 1);
      setResult(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
  };

  const handleClick = (playerSelection: string) => {
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    setRound(prevRound => prevRound + 1);

    if (round === 10) {
      alert("Round 10 is complete! Restarting game.");
      setPlayerScore(0);
      setComputerScore(0);
      setRound(1);
      setResult("");
    }
  };

  return (
    <div className=" container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl text-center sm:text-3xl font-bold mb-4">Rock Paper Scissors Game </h1>
      <p className="m-4 text-center font-semibold">Choose your moove: Round: {round} </p>
      <div className="flex gap-2 justify-center sm:gap-4">
        <button
          id="rock"
          className="text-3xl mx-2 my-0 cursor-pointer transition-all duration-300 ease-in-out p-2 sm:p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => handleClick("rock")}
        >
          &#x1F44A;
        </button>
        <button
          id="paper"
          className="text-3xl mx-2 my-0 cursor-pointer transition-all duration-300 ease-in-out p-2 sm:p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
          onClick={() => handleClick("paper")}
        >
          &#x1F590;
        </button>
        <button
          id="scissors"
          className="text-3xl mx-2 my-0 cursor-pointer transition-all duration-300 ease-in-out p-2 sm:p-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
          onClick={() => handleClick("scissors")}
        >
          &#x270C;
        </button>
      </div>
      <div className="mt-6 flex justify-start sm:justify-center flex-col items-center text-base sm:text-xl font-semibold">
        <p>Result: {result}</p>
        <p>Your Score: <span className="text-green-500">{playerScore}</span></p>
        <p>Computer Score: <span className="text-red-500">{computerScore}</span></p>
      </div>
    </div>
  );
};

export default App;
