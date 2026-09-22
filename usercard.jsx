import React from 'react';

// Child Component that receives 'user' data via props
const UserCard = ({ user }) => {
  const { name, city, age, email, phone } = user;

  return (
    <div style={styles.title}>
    <div style={styles.card}>
      <h3 style={styles.name}>{name}</h3>
      <div style={styles.divider}></div>
      <p style={styles.detail}><strong> City:</strong> {city}</p>
      <p style={styles.detail}><strong> Age:</strong> {age} years</p>
      <p style={styles.detail}><strong> Email:</strong> {email}</p>
      <p style={styles.detail}><strong> Phone:</strong> {phone}</p>
    </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#3194c2',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    padding: '24px',
    margin: '16px',
    width: '280px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    border: '1px solid black',
  },
  name: {
    margin: '0 0 12px 0',
    color: 'dark black',
    fontSize: '1.4rem',
    fontWeight: '600',
  },
  divider: {
    height: '2px',
    backgroundColor: '#3498db',
    width: '40px',
    marginBottom: '16px',
    borderRadius: '2px',
  },
  detail: {
    margin: '6px 0',
    color: 'black',
    fontSize: '0.95rem',
    lineHeight: '1.4',
  },
  title: {
   color: 'black',

  }
};

export default UserCard;
