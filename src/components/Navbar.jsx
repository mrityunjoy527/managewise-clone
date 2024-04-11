import BuyTemplateBtn from "./BuyTemplateBtn";

function Navbar() {
  return (
    <div>
      <div id="navbar">
        <div id="navbar-logo">
          <img
            src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
            alt="Logo"
          />
        </div>
        <div id="navbar-rhs">
          <div id="options">
            <ul>
              <a href="#features"><li>Features</li></a>
              <div className="dot"></div>
              <a href="#faq"><li>FAQ</li></a>
              <div className="dot"></div>
              <a href="#pricing"><li>Pricing</li></a>
              <div className="dot"></div>
              <a href="#testimonials"><li>Testimonials</li></a>
            </ul>
          </div>
          <BuyTemplateBtn text="Buy Template"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
