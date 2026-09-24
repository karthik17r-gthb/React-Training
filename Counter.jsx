import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  const styles = {
    counterTitle: {
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'var(--text-muted)',
      marginBottom: '0.5rem'
    },
    countDisplay: {
      fontSize: '4rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      color: 'var(--text-main)'
    },
    btnGroup: {
      display: 'flex',
      gap: '0.75rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    btnInc: { backgroundColor: '#10b981', color: '#ffffff' },
    btnDec: { backgroundColor: '#ef4444', color: '#ffffff' },
    btnReset: { backgroundColor: 'transparent', color: 'var(--text-muted)', border: '1px solid var(--border)' }
  };

  return (
    <div className="card">
      <h2 style={styles.counterTitle}>Current Count</h2>
      <div style={styles.countDisplay}>{count}</div>
      
      <div style={styles.btnGroup}>
        <button style={styles.btnDec} onClick={decrement}>− Decrement</button>
        <button style={styles.btnReset} onClick={reset}>Reset</button>
        <button style={styles.btnInc} onClick={increment}>+ Increment</button>
      </div>
    </div>
  );
}
