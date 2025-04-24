import React from 'react';
import './Sidebar.css';
import { FiHome, FiBell, FiHeart, FiMessageCircle, FiCreditCard, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  
    const handleLogout = async () => {
        await auth.signOut();
        navigate('/login');
    };

  return (
    <div className="sidebar">
      
      <div>
        <div>
      <nav className="menu">
        <ul>
          <li className="active"><FiHome /> Home</li>
          <li><FiBell /> Notifications</li>
          <li><FiHeart /> Shop</li>
          <li><FiMessageCircle /> Conversation</li>
          <li><FiCreditCard /> Wallet</li>
          <li><FiUser /> Subscription</li>
          <li><FiUser /> My Profile</li>
          <li><FiSettings /> Settings</li>
        </ul>
      </nav>
      </div>
      <div className="bottom">
        <div className="logout" onClick={handleLogout}><FiLogOut /> Log out</div>
      </div>
      </div>
      <div className="footer-meta">
          <span>2022©logo-name </span>
          <span> Developed by Ivan Infotech</span>
        </div>
    </div>
  );
};

export default Sidebar;
