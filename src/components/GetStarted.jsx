import { FaArrowAltCircleRight } from "react-icons/fa";

function GetStarted(props) {
  return (
    <div style={{ display: props.display,}} id="get-started-btn">
      <input id="input" type="button" value={props.btnText === undefined? "Get Started": props.btnText} />
      <FaArrowAltCircleRight id="left-arrow" />
    </div>
  );
}

export default GetStarted;
