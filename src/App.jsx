import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function App() {
  // manage the infomration for the different button clicks here
  const [gameTurns, setGameTurns] = useState([]);
  // this player with the symbol X is the active player initially
  const [activePlayer, setActivePlayer] = useState("X");

  //function activatged whenever we want to switch turns
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currPlayer = "O";
      }

      const updatedTurns = [
        { sqaure: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        PLAYERS
        {/* ol because the order matters */}
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
