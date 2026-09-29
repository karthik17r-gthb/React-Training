import React from 'react';
import { useCounter } from './CounterContext';

// Main Display Component
export default function Counter() {
  const { state } = useCounter();

  return (
    <div className="counter-card">
      <div className="context-badge"> State Shared via Context</div>
      <h1 className="counter-display">{state.count}</h1>
      <CounterControls />
    </div>
  );
}

function CounterControls() {
  const { dispatch, ACTIONS } = useCounter();

  return (
    <div className="button-group">
      <button 
        className="btn btn-decrement"
        onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
      >
        − Decrement
      </button>
      
      <button 
        className="btn btn-reset"
        onClick={() => dispatch({ type: ACTIONS.RESET })}
      >
        Reset
      </button>

      <button 
        className="btn btn-increment"
        onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
      >
        + Increment
      </button>
    </div>
  );
}
