import { useState } from "react";
import BuyTemplateBtn from "./BuyTemplateBtn";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

function Navbar() {

  const [expandNavbar, setNavbar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <div className="navbar-container">
      <div id="navbar">
        <div id="navbar-logo">
          <img
            src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png"
            alt="Logo"
          />
          <RxHamburgerMenu onClick={(e) => { setNavbar(true); }} style={{ display: expandNavbar ? "none" : "block" }} className="hamburger" />
          <RxCross2 onClick={(e) => { setNavbar(false); }} style={{ display: expandNavbar ? "block" : "none" }} className="cross" />
        </div>
        <div id="navbar-rhs" style={{ height: expandNavbar && windowWidth <= 810 ? "91vh" : "0px" }}>
          <div id="options" className={!expandNavbar ? "hidden" : ""}>
            <ul className="option-list">
              <a href="#features"><li>Features</li></a>
              <div className="dot"></div>
              <a href="#faq"><li>FAQ</li></a>
              <div className="dot"></div>
              <a href="#pricing"><li>Pricing</li></a>
              <div className="dot"></div>
              <a href="#testimonials"><li>Testimonials</li></a>
            </ul>
          </div>
          <BuyTemplateBtn
            classes={!expandNavbar ? "hidden" : ""}
            hover={expandNavbar ? "get-started-hover" : null}
            text="Buy Template"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
