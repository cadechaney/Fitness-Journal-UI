import React, { useState } from 'react';
import './Hamburger.css';
import { NavLink } from 'react-router-dom';

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {menuOpen && (
        <div className="dropdown-content">
          <NavLink className='drop-down-option' to='/past/workouts'>
            <p>View All Past Workouts</p>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;