import React, { useState } from 'react';
import MenuLogo from "../../../assets/homepage-images/header-logo.png";
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react'; // Close icon

const SlidingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <div className="hamburger-container">
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger symbol */}
      </div>

      {/* Sliding Menu */}
      <div className={`sliderMenu ${isOpen ? 'open' : ''}`}>
        {/* Logo */}
        <div className="menu-header">
          <Link href="/" rel="home">
            <Image src={MenuLogo} alt="header-logo-img" width={150} height={50} />
          </Link>
          {/* Close Button */}
          <div className="close-icon" onClick={closeMenu}>
            <X size={24} />
          </div>
        </div>

        {/* Menu Links */}
        <ul className="menuList">
          <li onClick={closeMenu}>
            <Link href="/" rel="home">Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/aboutus" rel="aboutus">About Us</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/shop" rel="shop">Products</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/gallery" rel="gallery">Gallery</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/ambassadors" rel="ambassadors">Ambassadors</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/contactus" rel="contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SlidingMenu;
