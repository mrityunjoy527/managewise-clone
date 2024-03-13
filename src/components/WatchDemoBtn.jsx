import { FaPlayCircle } from "react-icons/fa";

function WatchDemoBtn(props) {
  return (
    <div style={{display:props.display}} className="watch-demo-btn" >
      <input type="button" value="Watch Demo" />
      <FaPlayCircle/>
    </div>
  );
}

export default WatchDemoBtn;
