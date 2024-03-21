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
              <li>Features</li>
              <div className="dot"></div>
              <li>FAQ</li>
              <div className="dot"></div>
              <li>Pricing</li>
              <div className="dot"></div>
              <li>Testimonials</li>
            </ul>
          </div>
          <BuyTemplateBtn text="Buy Template"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
