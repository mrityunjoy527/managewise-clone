import Tab from "./Tab";
import BuyTemplateBtn from "./BuyTemplateBtn";

function PricingTab(props) {
  const index = props.idx;

  return (
    <div
      key={index}
      className={`all-pricing ${props.animation}`}
      style={{
        backgroundColor: index === 1 ? "rgb(28, 28, 28)" : "null",
        borderTop: index === 1 ? "20px solid rgb(28, 28, 28)" : "null",
      }}
    >
      <div className="rent-price">
        <Tab color="rgb(254, 129, 98)" text={props.text}></Tab>
        <div className="per-month-price">
          <h1 style={{ color: index === 1 ? "rgb(255, 255, 255)" : "null" }}>
            {props.price}
          </h1>
          <p style={{ color: index === 1 ? "rgb(255, 255, 255)" : "null" }}>
            /month
          </p>
        </div>
        <div className="benefits">
          {props.benefits.map((e) => (
            <div className="price-benefits">
              <img src="../../svgs/check.svg" alt="" />
              <p
                style={{
                  fontWeight: "bold",
                  color: "rgb(142, 142, 142)",
                }}
              >
                {e}
              </p>
            </div>
          ))}
        </div>
      </div>
      <BuyTemplateBtn
        hover={index === 1 ? "get-started-hover" : null}
        color={index === 1 ? "rgb(130, 71, 255)" : null}
        marginLeft="0px"
        border={index === 1? "none": null}
        text="Get Started"
        textColor={index === 1? "white": "black"}
      />
    </div>
  );
}

export default PricingTab;
