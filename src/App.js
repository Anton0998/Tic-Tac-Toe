import "./App.css";
import PlayerInput from "./PlayerInput";
import { useState, useEffect } from "react";

let initialFields = ["", "", "", "", "", "", "", "", ""];

const winningScenarios = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


function App() {
  const [fields, setFields] = useState(initialFields);
  const [turn, setTurn] = useState("X");
  const [isRunning, setIsRunning] = useState(false);
  const [playerOne, setPlayerOne] = useState('')
  const [playerTwo, setPlayerTwo] = useState('')
  const [playerOneWins, setPlayerOneWins] = useState(0)
  const [playerTwoWins, setPlayerTwoWins] = useState(0)
  const [drawAmount, setDrawAmount] = useState(0)
  
  const handlePlayerSave = (playerOne, playerTwo) => {
    setPlayerOne(playerOne)
    setPlayerTwo(playerTwo)
    setIsRunning(true)
  }

  const handleNewGame = () => {
    setIsRunning(true);
    setFields(initialFields);
    setTurn("X");
  };

  const handleFieldClick = (index) => {
    if (!isRunning) return;

    setFields((prev) => {
      const updatedFields = [...prev];
      if (updatedFields[index] !== "") return prev;
      updatedFields[index] = turn;
      setTurn(turn === "X" ? "O" : "X");
      return updatedFields;
    });
  };

  useEffect(() => {
    if (!isRunning) return;

    for (let scenario of winningScenarios) {
      const [a, b, c] = scenario;
      if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
        setIsRunning(false);

        let isWinner = (fields[a] === 'X' ? `${playerOne}` : `${playerTwo}`)

        if (isWinner === playerOne) {
          setPlayerOneWins((prev) => prev + 1);
        } else if (isWinner === playerTwo) {
          setPlayerTwoWins((prev) => prev + 1);
        }

        setTimeout(() => {
          alert(`'${isWinner}' has won!`);
          handleNewGame()
        }, 100);

        return;
      }
    }

    // Draw logic
    if (fields.every((field) => field !== "")) {
      setDrawAmount(prev => prev + 1)
      setTimeout(() => {
        alert("It is a draw!");
        setIsRunning(false);
      });
    }
  }, [fields, isRunning]);

  return (
    <div className="bg-slate-100 h-screen">
      <PlayerInput handlePlayerSave={handlePlayerSave} />

      <div className="max-w-screen-sm mx-auto flex flex-col py-6 gap-4 ">
        <h1 className="text-center text-4xl font-bold pb-6">Tic Tac Toe</h1>
        <div className="flex justify-between items-center px-24">

          <p className="px-8 py-2 rounded"
          style={{background: turn === 'X' 
            ? 'rgb(219 234 254)' 
            : ''}}>
              {`${playerOne}: ${playerOneWins}`}
            </p>
          
          <button
            className="px-6 py-2 w-fit font-bold bg-blue-800 hover:outline outline-2 outline-blue-400 transition-all text-white self-center rounded"
            onClick={handleNewGame}
          >
            {isRunning ? 'Reset' : 'NewGame'}
          </button>
          
          <p className="px-8 py-2 rounded" 
          style={{background: turn === 'O' 
            ? 'rgb(220 252 231)'
            : '' 
          }}

          > {`${playerTwo}: ${playerTwoWins}`} </p>

        </div>

        <ul className="shrink my-auto grid grid-rows-3 grid-cols-3 gap-2 px-24">
          {fields.map((field, index) => (
            <li
              className="flex justify-center items-center aspect-square bg-white cursor-pointer rounded border transition-all hover:outline outline-blue-600 text-6xl "
              onClick={() => handleFieldClick(index)}
              key={index}
              style={{
                background:
                  field === "O"
                    ? "rgb(220 252 231)"
                    : field === "X"
                    ? "rgb(219 234 254)"
                    : "",
              }}
            >
              {field}
            </li>
          ))}
        </ul>

        <p
          className="self-center font-bold text-lg text-black/60"
          style={{ visibility: isRunning ? "visible" : "hidden" }}
        >
          {turn === 'X' ? `${playerOne}'s turn` : `${playerTwo}'turn`}
        </p>
      </div>
    </div>
  );
}

export default App;
