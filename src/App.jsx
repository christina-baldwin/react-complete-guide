/* NOTES
State Management: The gameTurns state tracks the history of moves. The activePlayer is derived from this state to determine which player is currently active.
Event Handling: handleSelectSquare updates the state when a square is selected.
Rendering: The Player and GameBoard components receive props based on the current game state to render the game UI and handle user interactions.
*/

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
// helper constant where we hardcode all possible winning combinations: see js file
import { WINNING_COMBINATIONS } from "./components/winning-combinations";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// create a helper function outside the component function for the derived function
// deriving the symbol of the active player from game turns
function deriveActivePlayer(gameTurns) {
  let currPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currPlayer = "O";
  }

  return currPlayer;
}

function deriveGameBoard(gameTurns) {
  // need to transfor the turns into an array of arrys
  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    // perform object destructuring from the objects in handleSelectSquare in App.jsx
    // pull square and player out of the turn
    const { square, player } = turn;
    // square has 2 properties row and col that also need to be pulled out of the object
    const { row, col } = square;

    // update gameBoard row and column with the player symbol
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  // deriving if someone has won or noy based on the game turns
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    // constants for all the squares that make up the winning combination
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  // manage the infomration for the different button clicks here
  const [gameTurns, setGameTurns] = useState([]);
  // this player with the symbol X is the active player initially
  // dont need this state because we can already get this information from the above state
  // const [activePlayer, setActivePlayer] = useState("X");
  // const [hasWinner, setHasWinner] = useState(false);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  //function activatged whenever we want to switch turns
  function handleSelectSquare(rowIndex, colIndex) {
    // can derive the below instead as the state is not needed
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        PLAYERS
        {/* {ol because the order matters} */}
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRematch={handleRematch} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
