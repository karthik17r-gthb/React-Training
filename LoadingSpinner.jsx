import React from 'react';

function LoadingSpinner({ message = "Fetching user records..." }) {
  return (
    <div style={{ textAlign: 'center', padding: '40px', fontSize: '1.2rem' }}>
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
}

export default LoadingSpinner;
