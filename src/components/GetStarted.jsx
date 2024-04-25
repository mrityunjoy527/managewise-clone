import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";

function GetStarted(props) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHovered, setHover] = useState(false);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <div onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className={windowWidth <= 809 ? "responsive-btn" : ""} style={{ display: props.display }} id="get-started-btn">
      <div className="btn-with-icon">
        <input style={{ marginLeft: isHovered ? "0px" : "10px" }} id="input" type="button" value={props.btnText === undefined ? "Get Started" : props.btnText} />
        <FaArrowAltCircleRight id="left-arrow" style={{ visibility: isHovered ? "visible" : "hidden" }} />
      </div>
    </div>
  );
}

export default GetStarted;