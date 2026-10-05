import React from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button 
      className="square" 
      onClick={onSquareClick}
      style={{
        width: '100px',
        height: '100px',
        fontSize: '2.5rem', 
        fontWeight: 'bold',
        color: '#333',       
        backgroundColor: '#fff',
        border: '2px solid #333',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {value}  
    </button>
  );
}

export default Square;
