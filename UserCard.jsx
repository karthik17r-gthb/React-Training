import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p><strong>Username:</strong> @{user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>City:</strong> {user.address.city}</p>
      <Link to={`/users/${user.id}`} className="btn-view">
        View Profile Details
      </Link>
    </div>
  );
}

export default UserCard;
