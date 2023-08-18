import React, { useState } from 'react';
import './Hamburger.css';
import { NavLink } from 'react-router-dom';
import Hamburger from '../../assets/hamburger-icon-512x365-t1in8msh.png'
import settingsIcon from '../../assets/126472.png'

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
          <NavLink className='drop-down-option' to='/settings'>
            <img className='settings-image' src={settingsIcon} alt='settings-icon'></img>
          </NavLink>
          <NavLink className='drop-down-option' to='/'>
            <p>Log Out</p>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;