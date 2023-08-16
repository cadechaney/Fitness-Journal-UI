import React, { useState } from 'react';
import './Hamburger.css'; // You can define your own styles

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
          <p>There</p>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;