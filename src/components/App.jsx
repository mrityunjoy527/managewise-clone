import BreakLine from "./BreakLine";
import Card1 from "./Section3";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Card3 from "./Card3";
import { HiBell } from "react-icons/hi";
import { BsFillPhoneFill } from "react-icons/bs";
import { HiFire } from "react-icons/hi";

function App() {
  return (
    <div>
      <Navbar />
      <BreakLine />
      <Section1
        text="Empower your business with"
        highlight="Strategic"
        text2="insights"
        subtext="Powerful management platform designed to streamline your business
        operations, boost productivity, and drive success"
        tabText="WELCOME TO MANAGE WISE!"
        icon="👋"
      />
      <Section2 />
      <Section1
        height="300px"
        display="none"
        textSize="50"
        text="Discover our product's"
        highlight="Capabilities"
        subtext="Don't settle for mediocrity - embrace the future of management with Manage Wise."
        tabText="PREMIER FEATURES"
        icon="🔥"
      />
      <Card1 />
      <div className="set-bg">
        <Section1
          fontColor="white"
          align="start"
          height="300px"
          display="none"
          textSize="50"
          text="Explore an array of features that elevate your "
          highlight="Productivity"
          text2="to new heights"
          subtext="Discover the tools that will revolutionize the way you manage and optimize your operations"
          tabText="AND MORE..."
          icon="🤩"
        />
      </div>
      <div className="set-bg alignCenter">
        <div className="display-row setWidth">
          <Card3
            bell={<BsFillPhoneFill className="purple-bg" />}
            title="Cross-Platform Compatibility"
            para="Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."
          />
          <Card3
            bell={<HiBell className="purple-bg" />}
            title="Stay Informed with Essential Notifications"
            para="Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."
          />
          <Card3
            bell={<HiFire className="purple-bg" />}
            title="Secure Data Encryption at all times"
            para="Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
