import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { useState } from "react";

function FAQTab(props) {
  const [expanded, setExpand] = useState(false);


  return (
    <div onClick={() => setExpand((prev) => !prev)} key={props.idx} className="faq slideUpButtonAnimation">
      <div className="faq-head">
        <h3 style={{ color: expanded ? "rgb(130, 71, 255)" : "black",}}>
          {props.question}
        </h3>
        {expanded ? (
          <RxCross2 className="faq-icon" />
        ) : (
          <GoPlus className="faq-icon" />
        )}
      </div>
      {expanded && <p>{props.ans}</p>}
    </div>
  );
}

export default FAQTab;
