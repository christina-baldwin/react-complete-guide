const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare }) {
  /*
  // switch this data to be in the App in the gameTurns state to avoid intersecting states
  // state to manage and update the game board
  const [gameBoard, setGameBoard] = useState(initalGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // this gives a brand new array with brand new nested arrays and updates the board in an immutable way
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }*/
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelectSquare}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
