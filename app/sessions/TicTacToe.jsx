import React, { useEffect, useState } from "react";

const rowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)", // Creates a grid with 3 equal columns
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "black",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

function Square({ currentPlayer, handleClick, index, xMoves, oMoves }) {
  return (
    <div
      onClick={() => handleClick(index)}
      className="square"
      style={squareStyle}
    >
      {xMoves.includes(index) ? "X" : oMoves.includes(index) ? "O" : ""}
    </div>
  );
}

function Board() {
  const array = Array(9)
    .fill()
    .map((_, i) => i);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [xMoves, setXMoves] = useState([]);
  const [oMoves, setOMoves] = useState([]);
  const [winner, setWinner] = useState("");

  const handleClick = (index) => {
    setWinner('')
    if (!xMoves.includes(index) && !oMoves.includes(index)) {
      if (currentPlayer === "X") {
        setXMoves((prev) => [...prev, index]);
      } else {
        setOMoves((prev) => [...prev, index]);
      }

      
      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));

    }
  };

  const winnerIndexes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleReset=()=>{
    setCurrentPlayer("X");
    setXMoves([]);
    setOMoves([]);
    return;
  }

  const winnerFunction = () => {
    for (let i = 0; i < winnerIndexes.length; i++) {
      const [a, b, c] = winnerIndexes[i];   
      
      if (xMoves.includes(a) && xMoves.includes(b) && xMoves.includes(c)) {        
        setWinner("X");
        handleReset()
      }


      if (oMoves.includes(a) && oMoves.includes(b) && oMoves.includes(c)) {
        setWinner("O");
        handleReset()
      }
    }

    if (xMoves.length + oMoves.length === 9) {
      setWinner("It's a tie");
      handleReset()
    }
  };


  useEffect(()=>{
   if(xMoves.length>=3 || oMoves.length>=3){
    winnerFunction();
   }
  },[xMoves,oMoves])
  

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{currentPlayer}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winner}</span>
      </div>
      <button onClick={handleReset} style={buttonStyle}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          {array.map((value, index) => {
            return (
              <Square
                key={index}
                index={index}
                currentPlayer={currentPlayer}
                handleClick={handleClick}
                xMoves={xMoves}
                oMoves={oMoves}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default Game;
