import { useState } from 'react';

function Square({ value, onSquareClick }) {
  const squareStyle = {
    width: '60px',
    height: '60px',
    margin: '5px',
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: '2px solid black',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0',
  };

  return (
    <button style={squareStyle} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function MyTicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = i;
    setSquares(nextSquares);
  }

  const boardRowStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const boardWrapperStyle = {
    border: '4px solid #444',
    padding: '20px',
    display: 'inline-block',
    backgroundColor: '#fff',
    borderRadius: '8px',
  };

  return (
    <div style={boardWrapperStyle}>
      <div style={boardRowStyle}>
        <Square value={squares[0] ?? 0} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1] ?? 1} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2] ?? 2} onSquareClick={() => handleClick(2)} />
      </div>
      <div style={boardRowStyle}>
        <Square value={squares[3] ?? 3} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4] ?? 4} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5] ?? 5} onSquareClick={() => handleClick(5)} />
      </div>
      <div style={boardRowStyle}>
        <Square value={squares[6] ?? 6} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7] ?? 7} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8] ?? 8} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
