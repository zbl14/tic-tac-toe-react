import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div>
    <div className="board-row">
      {[0, 1, 2].map((i) => (
        <Square key={i} value={squares[i]} onClick={() => onClick(i)} />
      ))}
    </div>
    <div className="board-row">
      {[3, 4, 5].map((i) => (
        <Square key={i} value={squares[i]} onClick={() => onClick(i)} />
      ))}
    </div>
    <div className="board-row">
      {[6, 7, 8].map((i) => (
        <Square key={i} value={squares[i]} onClick={() => onClick(i)} />
      ))}
    </div>
  </div>
);

export default Board;
