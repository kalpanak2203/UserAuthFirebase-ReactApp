import React from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <div className="container">
      <h2>Welcome, {auth.currentUser?.email}</h2>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default Dashboard;
