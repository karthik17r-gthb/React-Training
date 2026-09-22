import React from 'react';
import UserCard from './usercard'; 

const App = () => {
  const users = [
    {
      id: 1,
      name: "Karthik R",
      city: "Bangalore",
      age: 28,
      email: "abd@example.com",
      phone: "+91 1234567890"
    },
    {
      id: 2,
      name: "Priya",
      city: "chennai",
      age: 24,
      email: "priya.sharma@abc.com",
      phone: "+91 1234567890"
    },
    {
      id: 3,
      name: "Kiran",
      city: "Tirupathi",
      age: 31,
      email: "rohan@abc.com",
      phone: "+91 76543 21098"
    },
    {
      id: 4,
      name: "Ananya",
      city: "Chennai",
      age: 27,
      email: "ananya@123.com",
      phone: "+91 65432 10987"
    },
    {
      id: 5,
      name: "Rekha",
      city: "kerala",
      age: 29,
      email: "Rekha@abc.com",
      phone: "+91 54321 09876"
    }
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>User Profiles</h1>
        <p style={styles.subtitle}>Parent-to-Child data passing using React Props</p>
      </header>
      
      <main style={styles.cardContainer}>
        {users.map((currentUser) => (
          <UserCard 
            key={currentUser.id} 
            user={currentUser} 
            
          />
        ))}
      </main>
    </div>
  );
};

// Global layouts and page styles
const styles = {
  container: {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    backgroundColor: '#ac8c7d',
    minHeight: '100vh',
    padding: '40px 20px',
    margin: 0,
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    color:'dark black',
    textDecoration: 'underline',
    fontSize: '2.5rem',
    margin: '0 0 8px 0',
  },
  subtitle: {
    color: 'dark black',
    fontSize: '1.1rem',
    margin: 0,
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
};

export default App;
