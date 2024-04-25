import GetStarted from "./GetStarted";
import Tab from "./Tab";
import WatchDemoBtn from "./WatchDemoBtn";

function Section1(props) {
  return (
    <div id={props.id} className={` ${props.alignCenter} section1-outer ${props.class}`} style={{ marginTop: props.marginTop, maxWidth: props.divWidth}}>
      <div className="" style={{ maxWidth: props.width }}>
        <div
          style={{ height: props.height, alignItems: props.align }}
          id="section1">
          <Tab animation={props.tabAnimation} icon={props.icon} text={props.tabText} />
          <h3
            className={`${props.titleText} ${props.textAnimation}`}
            style={{
              textAlign: props.align,
              color: props.fontColor,
            }}
          >
            {props.text} <span>{props.highlight}</span> {props.text2}
          </h3>
          <p className={`${props.paraText} ${props.subtextAnimation}`} style={{ textAlign: props.align, maxWidth: props.paraWidth }}>{props.subtext}</p>
          <div className={`two-btns ${props.buttonAnimation}`} style={{ justifyContent: props.align}}>
            <GetStarted btnText={props.btnText} display={props.btn1} />
            <WatchDemoBtn display={props.btn2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
