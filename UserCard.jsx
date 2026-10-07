import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>#{user.id} - {user.name}</h3>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
      <p><strong>City:</strong> {user.address?.city}</p>
    </div>
  );
};

export default UserCard;
