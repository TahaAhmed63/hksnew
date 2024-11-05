import React, { useEffect, useState } from "react";
import Logo from "../../assets/homepage-images/header-logo.png";
import Link from "next/link";
import Image from "next/image";
import menuItems from "../../Components/Header/Menu/menuItems";
import Menu from "./Menu/Menu";
import { FaBasketShopping } from "react-icons/fa6";

const Header = () => {
  const [sticky, setSticky] = useState(false);
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
  return (
    <header className={`site-header ${sticky ? "darkHeader max-limit" : ""}`}>
      <div className="mainmenu">
        <div className="container">
          <div className="site-branding">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-6 p-0">
                <div className="logo">
                  <Link href="/" rel="home">
                    <Image src={Logo} alt="header-logo-img" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-8 col-md-6 col-6 m-auto p-0">
                <Menu items={menuItems} />
              </div>

              <div className="col-lg-1 m-auto">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
