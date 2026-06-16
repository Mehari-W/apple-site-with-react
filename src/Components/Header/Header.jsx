import React from "react";
import icon from '../../assets/images/icons/logo-sm.png'
import search from '../../assets/images/icons/search-icon-sm.png'
import cart from '../../assets/images/icons/cart-sm.png'

const Header = () => {
  return (
    <> 
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-dark">
            {/* Updated data attributes to data-bs for modern Bootstrap functionality */}
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#appleNavbar"
              aria-controls="appleNavbar"
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              {/* Swapped "☰" for the standard Bootstrap icon that animates clean and natively */}
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <a className="navbar-brand mx-auto" href="#">
              <img src={icon} alt="Apple Logo" />
            </a>

            {/* Added matching ID here to link up perfectly with the toggle button */}
            <div className="navbar-collapse collapse" id="appleNavbar">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#iphone">iPhone</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#ipad">iPad</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#watch">Watch</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#tv">TV</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#music">Music</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#support">Support</a></li>
                {/* Added descriptive alt tags for image assets */}
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/search/"><img src={search} alt="Search" /></a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/cart/"><img src={cart} alt="Cart" /></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;