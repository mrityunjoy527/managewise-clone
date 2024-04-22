import { FaPlayCircle } from "react-icons/fa";
import { useState } from "react";

function WatchDemoBtn(props) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <div style={{ display: props.display }} className={`${windowWidth <= 809 ? "responsive-btn" : ""} watch-demo-btn`} >
      <div className="btn-with-icon">
        <input style={{ textAlign: "center" }} type="button" value="Watch Demo" />
        <FaPlayCircle style={{fontSize: "30px"}} id="play-icon"/>
      </div>
    </div>
  );
}

export default WatchDemoBtn;
