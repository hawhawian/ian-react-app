import React, { useState } from "react";

// Board 元件
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  function renderSquare(i) {
    return (
      <button
        style={{
          width: '60px',
          height: '60px',
          margin: '5px',
          fontSize: '24px',
          fontWeight: 'bold',
          cursor: 'pointer',
          border: '2px solid black',
          borderRadius: '4px',
          backgroundColor: '#f0f0f0',
        }}
        onClick={() => handleClick(i)}
      >
        {squares[i]}
      </button>
    );
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "勝利者: " + winner;
  } else if (squares.every(Boolean)) {
    status = "平手";
  } else {
    status = "下一步: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>{status}</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

// 勝負判斷
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}

function MyTicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => setCurrentMove(nextMove);

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "回到第 " + move + " 步";
    } else {
      description = "遊戲開始";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game" style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <h4>遊戲歷程</h4>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default MyTicTacToe;
