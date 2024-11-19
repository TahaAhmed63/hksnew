import React, { useState } from 'react'; 
import MenuLogo from "../../../assets/homepage-images/header-logo.png"; 
import Link from 'next/link'; 
import Image from 'next/image'; 
import { X } from 'lucide-react';  // Import the X icon from lucide-react

const SlidingMenu = () => {   
  const [isOpen, setIsOpen] = useState(false);  

  const toggleMenu = () => {     
    setIsOpen(!isOpen);  // Toggle the menu open/close state   
  };  

  const closeMenu = () => {   
    setIsOpen(false);  // Close the menu by setting isOpen to false   
  };

  return (     
    <div className='Hamburger-icon-col '>       
      {/* Hamburger Icon */}       
      <div className="hamburger" onClick={toggleMenu}> &#9776; {/* Hamburger symbol */}       
      </div>        

      {/* Slider Menu */}       
      <div className={`sliderMenu ${isOpen ? 'open' : ''} py-4` }>       
        <Link href="/" rel="home" >           
          <Image src={MenuLogo} alt="header-logo-img" />           
        </Link>         
        
        {/* Close Button (X) */}        
        <div className="close-icon" onClick={closeMenu}>   
          <X />   
        </div>
        
        <ul className="menuList">                 
          <li>Home</li>           
          <li>About Us</li>           
          <li>Products</li>           
          <li>Gallery</li>     
          <li>Ambassadors</li> 
          <li>Contact Us</li>     
        </ul>       
      </div>     
    </div>   
  ); 
};  

export default SlidingMenu;
