import React, { useState } from 'react';

const SlidingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle the menu open/close state
  };

  return (
    <div className='Hamburger-icon-col '>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}> &#9776; {/* Hamburger symbol */}
      </div>

      {/* Slider Menu */}
      <div className={`sliderMenu ${isOpen ? 'open' : ''}`}>
        <ul className="menuList">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default SlidingMenu;
