import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://typicode.com{id}`)
      .then((res) => {
        // Handle invalid IDs gracefully (e.g. /users/99)
        if (!res.ok) {
          throw new Error('User Profile Not Found');
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]); // Refetches if URL parameter changes dynamically

  if (loading) return <LoadingSpinner message="Loading user details..." />;

  if (error) {
    return (
      <div className="error-view">
        <h2>⚠️ {error}</h2>
        <p>The profile parameter ID configuration does not exist in our systems.</p>
        <Link to="/users" className="btn-back">⬅️ Back to Users Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="details-container">
      <Link to="/users" className="btn-back">⬅️ Back to Dashboard</Link>
      
      {user && (
        <div className="profile-card">
          <div className="profile-header">
            <h2>{user.name}</h2>
            <p className="username">@{user.username}</p>
          </div>
          
          <div className="profile-body">
            <div className="info-row"><strong>User ID:</strong> <span>{user.id}</span></div>
            <div className="info-row"><strong>Email Account:</strong> <span>{user.email}</span></div>
            <div className="info-row"><strong>Phone Contact:</strong> <span>{user.phone}</span></div>
            <div className="info-row"><strong>Website Domain:</strong> <span><a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></span></div>
            <div className="info-row"><strong>City Location:</strong> <span>{user.address?.city}</span></div>
            <div className="info-row"><strong>Street Address:</strong> <span>{user.address?.street}, {user.address?.suite}</span></div>
            <div className="info-row"><strong>Company:</strong> <span>{user.company?.name}</span></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
