import React from 'react';
import useFetchData from '../hooks/useFetchData';
import UserCard from './UserCard';

const UserList = () => {
  const { data: users, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return <div className="status-message loading">⏳ Loading user data, please wait...</div>;
  }

  if (error) {
    return <div className="status-message error">❌ Error: {error}</div>;
  }

  return (
    <div className="user-list-container">
      <h2>User Directory</h2>
      <div className="user-grid">
        {users && users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
