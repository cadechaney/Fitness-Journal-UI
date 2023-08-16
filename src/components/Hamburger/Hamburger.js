import React, { useState } from 'react';
import './Hamburger.css';
import { NavLink } from 'react-router-dom';
import Hamburger from '../../assets/hamburger-icon-512x365-t1in8msh.png'

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <img src={Hamburger} alt='hamburger'></img>
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