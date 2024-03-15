import GetStarted from "./GetStarted";
import Tab from "./Tab";
import WatchDemoBtn from "./WatchDemoBtn";

function Section1(props) {
  return (
    <div className={props.alignCenter} style={{marginTop: props.marginTop}}>
      <div className="setWidth" style={{width: props.width}}>
        <div
          style={{ height: props.height, alignItems: props.align}}
          id="section1"
        >
          <Tab icon={props.icon} text={props.tabText} />
          <h3
            style={{
              fontSize: Number(props.textSize),
              textAlign: props.align,
              color: props.fontColor,
            }}
          >
            {props.text} <span>{props.highlight}</span> {props.text2}
          </h3>
          <p style={{ textAlign: props.align , width: props.paraWidth}}>{props.subtext}</p>
          <div className="two-btns">
            <GetStarted display={props.display} />
            <WatchDemoBtn display={props.display} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
