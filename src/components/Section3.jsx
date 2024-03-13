import Card1 from "./Card1";
import Card2 from "./Card2";

function Section3() {
  return (
    <div id="section3">
      <div id="section3-outer">
        <div id="product-capacity">
          <div className="section3">
            <div className="section3-icon">⭐️</div>
            <h3>
              Boost productivity and streamline workflow with us. Enjoy our
              intuitive interface and robust features.
            </h3>
          </div>
          <Card1
            image="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png"
            title="Smart Task Management"
            subtitle="Say goodbye to chaos with our smart task management system"
          />
        </div>
      </div>
      <div className="three-cards">
        <Card2
          image="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png"
          title="Flexible Scheduling"
          subtitle="Stay productive with our flexible scheduling system"
        />
        <Card2
          image="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png"
          title="Easy Communication"
          subtitle="Collaborate seamlessly with your team in real-time"
        />
        <Card2
          image="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png"
          title="Analytics"
          subtitle="Gain valuable insights with our advanced analytics feature"
        />
      </div>
    </div>
  );
}

export default Section3;
