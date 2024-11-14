import React, { useEffect, useState } from "react";
import Logo from "../../assets/homepage-images/header-logo.png";
import Link from "next/link";
import Image from "next/image";
import menuItems from "../../Components/Header/Menu/menuItems";
import Menu from "./Menu/Menu";
import { FaBasketShopping, FaBars } from "react-icons/fa6"; // Import FaBars for the hamburger icon
import SlidingMenu from "./Menu/SlidingMenu";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control the menu toggle

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState); // Toggle menu visibility
  };

  return (
    <header className={`site-header ${sticky ? "darkHeader max-limit" : ""}`}>
      <div className="mainmenu">
        <div className="container">
          <div className="site-branding">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-6 p-0">
                <div className="logo">
                  <Link href="/" rel="home">
                    <Image src={Logo} alt="header-logo-img" />
                  </Link>
                </div>
              </div>

              {/* For large screens, the menu is always visible */}
              <div className="col-lg-8  col-6 m-auto p-0 d-none d-lg-block">
                <Menu items={menuItems} />
              </div>

              {/* For small screens, display the toggle button */}
              <div className="col-lg-1 col-7 mt-auto mb-auto p-0 d-lg-none">
                {/* <button onClick={toggleMenu} className="menu-toggle-btn">
                  <FaBars />
                </button> */}
                <SlidingMenu/>
              </div>

              <div className="col-md-1  mt-auto mb-auto p-0">
                <div className="cart-container">
                  <button
                    onClick={() => openNav()}
                    className="bucket-icon openbtn"
                  >
                    <FaBasketShopping />
                    <span id="mcart-stotal">0</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* For small screens, show the menu when toggled */}
          {menuOpen && (
            <div className="mobile-menu">
              <Menu items={menuItems} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
