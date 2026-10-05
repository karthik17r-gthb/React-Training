import React from 'react';
import Square from './Square';

function Board({ squares, onPlay }) {
  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 100px)',
        gridTemplateRows: 'repeat(3, 100px)',
        gap: '5px',
        margin: '20px 0'
      }}
    >
      {squares.map((square, index) => (
        <Square 
          key={index} 
          value={square}       
          onSquareClick={() => onPlay(index)} 
        />
      ))}
    </div>
  );
}

export default Board;
