import React from 'react';
import './Topbar.css';
import { FiFilter, FiSearch} from 'react-icons/fi'; 

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo">LOGO</div>
      <div className="search-bar-wrapper" >
        <FiSearch size={16} className="search-icon"/>
      <input 
        type="text"
        className="search-input"
        placeholder="Search here..."
      />
      <button className="filter-btn">
        <FiFilter size={18} />
        Filters
      </button>
      </div>
      <button className="seller-btn">Become a Seller</button>
    </div>
  );
};

export default Topbar;
