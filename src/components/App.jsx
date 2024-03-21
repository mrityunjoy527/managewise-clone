import BreakLine from "./BreakLine";
import Card1 from "./Section3";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Card3 from "./Card3";
import { HiBell } from "react-icons/hi";
import { BsFillPhoneFill } from "react-icons/bs";
import { HiFire } from "react-icons/hi";
import { leftLogos, rightLogos, faqs } from "../logos";
import LogoTab from "./LogoTab";
import FAQTab from "./FAQTab";
import PricingTab from "./PricingTab";
import pricing from "../pricing";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function App() {
  function logoTabLeft(logo, idx) {
    return <LogoTab logo={logo} idx={idx} num="0" />;
  }

  function logoTabRight(logo, idx) {
    return <LogoTab logo={logo} idx={idx} num="1" />;
  }

  function showFAQ(q, idx) {
    const { question, ans } = q;
    return <FAQTab idx={idx} question={question} ans={ans} />;
  }

  return (
    <div>
      <Navbar />
      <BreakLine backgroundColor="rgb(230, 230, 230)" />
      <Section1
        alignCenter="alignCenter"
        text="Empower your business with"
        highlight="Strategic"
        text2="insights"
        subtext="Powerful management platform designed to streamline your business
        operations, boost productivity, and drive success"
        tabText="WELCOME TO MANAGE WISE!"
        icon="👋"
        textSize="70"
      />
      <Section2
        image="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048"
        width="1200px"
      />
      <Section1
        alignCenter="alignCenter"
        height="300px"
        btn1="none"
        btn2="none"
        textSize="50"
        text="Discover our product's"
        highlight="Capabilities"
        subtext="Don't settle for mediocrity - embrace the future of management with Manage Wise."
        tabText="PREMIER FEATURES"
        icon="🔥"
        paraWidth="50%"
      />
      <Card1 />
      <div className="set-bg">
        <Section1
          alignCenter="alignCenter"
          fontColor="white"
          align="start"
          height="300px"
          btn1="none"
          btn2="none"
          textSize="50"
          text="Explore an array of features that elevate your "
          highlight="Productivity"
          text2="to new heights"
          subtext="Discover the tools that will revolutionize the way you manage and optimize your operations"
          tabText="AND MORE..."
          icon="🤩"
          paraWidth="45%"
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
        <div className="display-row2">
          <div className="marginTop">{leftLogos.map(logoTabLeft)}</div>
          <div>
            <Section1
              fontColor="white"
              align="center"
              alignCenter="alignCenter"
              width="70%"
              height="400px"
              btn1="none"
              btn2="none"
              textSize="50"
              text="Enable"
              highlight="integration"
              text2="with other popular tools and platforms"
              subtext="Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms."
              tabText="INTEGRATIONS"
              icon="🛠"
              paraWidth="75%"
              marginTop="10rem"
            />
            <Section2
              width="70%"
              radius="0px"
              marginBottom="-15px"
              image="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png"
            />
          </div>
          <div className="marginTop">{rightLogos.map(logoTabRight)}</div>
        </div>
      </div>
      <BreakLine backgroundColor="black" />
      <div className="alignCenter marginTop">
        <div className="setWidth">
          <div className="faq-display-row">
            <Section1
              fontColor="black"
              align="start"
              width="100%"
              height="300px"
              btn1="none"
              btn2="none"
              textSize="50"
              text="Need"
              highlight="Answers?"
              subtext="Check out our most commonly asked questions below to find the information you need."
              tabText="FAQ"
              icon="🙋‍♀️"
              paraWidth="75%"
              divWidth="30%"
            />
            <div>{faqs.map(showFAQ)}</div>
          </div>
        </div>
      </div>
      <div className="alignCenter marginTop">
        <div className="setWidth">
          <Section1
            fontColor="black"
            align="center"
            width="100%"
            height="300px"
            btn1="none"
            btn2="none"
            textSize="50"
            text="Select your ideal"
            text2="plan"
            highlight="Pricing"
            subtext="At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs."
            tabText="PRICING"
            icon="💲"
            paraWidth="40%"
          />
          <div className="display-row">
            {pricing.map((e, idx) => (
              <PricingTab
                idx={idx}
                text={e.quality}
                price={e.price}
                benefits={e.benefits}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="alignCenter marginTop">
        <div className="setWidth">
          <Section1
            align="start"
            btn1="none"
            btn2="none"
            textSize="50"
            height="200px"
            text="Hear from our"
            highlight="Satisfied"
            text2="clients"
            subtext="Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses."
            tabText="TESTIMONIALS"
            icon="🧡"
            paraWidth="60%"
            divWidth="100%"
          />
        </div>
      </div>
      <div className="alignCenter marginTop">
        <div className="setWidth alignCenter faces-tab-design">
          <div className="faces-tab">
            <Section1
              align="start"
              btn2="none"
              textSize="50"
              height="370px"
              width="76%"
              btnText="Try out now"
              text="Unleash your "
              highlight="Potential"
              text2="with us"
              subtext="Join our community of ambitious individuals and organizations eager to make a difference."
              tabText="DON'T MISS OUT"
              icon="👋"
              paraWidth="100%"
              divWidth="100%"
            />
            <div className="happy-faces">
              <div className="happy">
                <h2>200+</h2>
                <h2>Happy users</h2>
              </div>
              <img className="blur" src="https://framerusercontent.com/images/584hzJDnWCS5SFABKjaCzgDspY.png" alt="" />
              <img className="faces" src="https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="alignCenter marginTop">
        <div className="setWidth footer-logo-sec">
          <img className="footer-logo" src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" alt="" />
          <ul className="options">
            <li>Features</li>
            <li>FAQ</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>
      </div>
      <div className="alignCenter marginTop">
        <div className="setWidth">
          <BreakLine backgroundColor="rgb(230, 230, 230)" />
          <footer>
            <p>&copy; 2024 ManageWise, Inc.</p>
            <div>
              <BiLogoInstagramAlt className="footer-social" />
              <FaSquareXTwitter className="footer-social" />
              <FaLinkedinIn className="footer-social" />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
