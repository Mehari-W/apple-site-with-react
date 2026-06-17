import React, { useState } from "react";
import icon from "../../assets/images/icons/logo-sm.png";
import search from "../../assets/images/icons/search-icon-sm.png";
import cart from "../../assets/images/icons/cart-sm.png";

const Header = () => {
  // የሜኑውን ክፍት/ዝግ መሆን የሚቆጣጠር State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ሜኑውን Toggle የሚያደርግ ፊንክሽን
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-dark">
            
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu} // የ onClick ኢቨንት ተጨምሯል
              aria-controls="appleNavbar"
              aria-expanded={isMenuOpen} // Stateን መሰረት ያደረገ
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <a className="navbar-brand mx-auto" href="#">
              <img src={icon} alt="Apple Logo" />
            </a>

            {/* isMenuOpen 'true' ሲሆን 'show' የሚለውን ክላስ ይጨምራል */}
            <div 
              className={`navbar-collapse collapse ${isMenuOpen ? "show" : ""}`} 
              id="appleNavbar"
            >
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#mac/">
                    Mac
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#iphone">
                    iPhone
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#ipad">
                    iPad
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#watch">
                    Watch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#tv">
                    TV
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#music">
                    Music
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#support">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#search/">
                    <img src={search} alt="Search" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#cart/">
                    <img src={cart} alt="Cart" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
