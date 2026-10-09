import React from 'react';
import { useSelector } from 'react-redux';

const ComponentB = () => {
  const profileData = useSelector((state) => state.user.profileData);

  return (
    <div className="card display-container">
      <h2>📋 Stored Global State</h2>
      {profileData ? (
        <div className="data-card">
          <div className="data-item"><strong>Name:</strong> {profileData.name}</div>
          <div className="data-item"><strong>Email:</strong> {profileData.email}</div>
          <div className="data-item"><strong>Phone:</strong> {profileData.phone}</div>
          <div className="data-item"><strong>City:</strong> {profileData.city}</div>
          <div className="data-item"><span className="badge">{profileData.role}</span></div>
        </div>
      ) : (
        <div className="fallback-text">
          No data submitted yet. Fill out the form in Component A to update global state.
        </div>
      )}
    </div>
  );
};

export default ComponentB;
