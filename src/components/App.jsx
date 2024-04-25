import BreakLine from "./BreakLine";
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
import Card4 from "./Card4";
import customers from "../customers";
import Section3 from "./Section3";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Section4 from "./Section4";
import Logos from "./Logos";


function App() {

  function showFAQ(q, idx) {
    const { question, ans } = q;
    return <FAQTab idx={idx} question={question} ans={ans} />;
  }

  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const myRef1 = useRef();
  const myRef2 = useRef();
  const [onScreen1, setOnScreen1] = useState(false);
  const [onScreen2, setOnScreen2] = useState(false);

  useEffect(() => {

    // const options = {
    //   root: myRef1.current,
    //   threshold: 1.0,
    // };

    const observer1 = new IntersectionObserver(entries => {
      const entry = entries[0];
      console.log(entry);
      setOnScreen1(entry.isIntersecting);
    });
    observer1.observe(myRef1.current);

    const observer2 = new IntersectionObserver(entries => {
      const entry = entries[0];
      setOnScreen2(entry.isIntersecting);
    });
    observer2.observe(myRef2.current);

  }, []);


  function logoTabLeft(logo, idx) {
    return <LogoTab onScreen={onScreen2} logo={logo} idx={idx} num="0" />;
  }

  function logoTabRight(logo, idx) {
    return <LogoTab onScreen={onScreen2} logo={logo} idx={idx} num="1" />;
  }


  return (
    <div>
      <Navbar />
      <BreakLine backgroundColor="rgb(230, 230, 230)" />
      <div className="marginTop"></div>
      <div className="alignCenter simple-padding">
        <div className="setWidth">
          <Section1
            titleText="section1-title"
            paraText="section1-para"
            alignCenter="alignCenter"
            text="Empower your business with"
            textAnimation="slideUpAnimation"
            highlight="Strategic"
            text2="insights"
            subtext="Powerful management platform designed to streamline your business
            operations, boost productivity, and drive success"
            subtextAnimation="slideUpAnimation"
            tabText="WELCOME TO MANAGE WISE!"
            icon="👋"
            paraWidth="36em"
            tabAnimation="slideUpAnimation"
            buttonAnimation="slideUpButtonAnimation"
          />
          <div className="alignCenter" style={{ width: "100%" }}>
            <div ref={myRef1} style={{ marginTop: "23px" }}>
              <Section2
                image="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048"
                class="hero-photo"
                onScreen={onScreen1}
                animation="drop"
                borderRadius="3.4%"
                divHeight="fit-content"
                boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 75px -40px"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="features" className="alignCenter simple-padding">
        <div className=" setWidth">
          <Section1
            titleText="section1-title2"
            paraText="section1-para2"
            marginTop="140px"
            alignCenter="alignCenter"
            btn1="none"
            btn2="none"
            textAnimation="slideUpButtonAnimation"
            text="Discover our product's"
            highlight="Capabilities"
            subtext="Don't settle for mediocrity - embrace the future of management with Manage Wise."
            tabText="PREMIER FEATURES"
            icon="🔥"
          />
          <Section3 />
        </div>
      </div>
      <div style={{ marginBottom: "-16px" }} className="set-bg alignCenter simple-padding">
        <div className="set-bg setWidth">
          <div className="set-bg marginTop">
            <Section1
              titleText="section1-title2"
              paraText="section1-para2"
              alignCenter="alignCenter"
              fontColor="white"
              align="start"
              btn1="none"
              btn2="none"
              textAnimation="slideUpAnimation"
              text="Explore an array of features that elevate your "
              highlight="Productivity"
              text2="to new heights"
              subtext="Discover the tools that will revolutionize the way you manage and optimize your operations"
              tabText="AND MORE..."
              icon="🤩"
              paraWidth="26em"
            />
            <div className="display-row">
              <Card3
                animation="slideUp1"
                bell={<BsFillPhoneFill className="purple-bg" />}
                title="Cross-Platform Compatibility"
                para="Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."
              />
              <Card3
                animation="slideUp2"
                bell={<HiBell className="purple-bg" />}
                title="Stay Informed with Essential Notifications"
                para="Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."
              />
              <Card3
                animation="slideUp3"
                bell={<HiFire className="purple-bg" />}
                title="Secure Data Encryption at all times"
                para="Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
              />
            </div>
          </div>
        </div>
        <div className="logos-with-section1 marginTop">
          {width > 1399 && <div ref={myRef2} className="">{leftLogos.map(logoTabLeft)}</div>}
          <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }} className="">
            {width <= 1399 && <Logos />}
            <Section1
              titleText="section1-title2"
              paraText="section1-para2"
              fontColor="white"
              alignCenter="alignCenter"
              btn1="none"
              btn2="none"
              text="Enable"
              textAnimation="slideUpAnimation"
              highlight="integration"
              text2="with other popular tools and platforms"
              subtext="Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms."
              tabText="INTEGRATIONS"
              icon="🛠"
              marginTop="4em"
            />
            <Section4 />
          </div>
          {width > 1399 && <div ref={myRef2} className="">{rightLogos.map(logoTabRight)}</div>}
        </div>
      </div>
      <BreakLine backgroundColor="black" />
      <div className="alignCenter simple-padding">
        <div id="faq" className=" faq-section marginTop">
          <div className="faq-display-row marginTop">
            <Section1
              class="faq-section1"
              titleText="section1-title2"
              paraText="section1-para2"
              fontColor="black"
              align={width < 809 ? "center" : "start"}
              divWidth="360px"
              btn1="none"
              btn2="none"
              textAnimation="slideUpAnimation"
              text="Need"
              highlight="Answers?"
              subtext="Check out our most commonly asked questions below to find the information you need."
              tabText="FAQ"
              icon="🙋‍♀️"
            />
            <div className="faq-section-ques">{faqs.map(showFAQ)}</div>
          </div>
        </div>
      </div>
      <div id="pricing" className="alignCenter simple-padding">
        <div className=" faq-section marginTop">
          <Section1
            titleText="section1-title2"
            paraText="section1-para2"
            fontColor="black"
            align="center"
            width="100%"
            textAnimation="slideUpAnimation"
            btn1="none"
            btn2="none"
            text="Select your ideal"
            text2="plan"
            highlight="Pricing"
            subtext="At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs."
            tabText="PRICING"
            icon="💲"
            paraWidth={width > 1399 ? "40%" : "70%"}
          />
          <div className="display-row setWidth">
            {pricing.map((e, idx) => (
              <PricingTab
                idx={idx}
                animation={`slideUp${idx + 1}`}
                text={e.quality}
                price={e.price}
                benefits={e.benefits}
              />
            ))}
          </div>
        </div>
      </div>
      <div id="testimonials" className="alignCenter simple-padding">
        <div className=" faq-section marginTop">
          <Section1
            titleText="section1-title2"
            paraText="section1-para2"
            align="start"
            btn1="none"
            btn2="none"
            text="Hear from our"
            highlight="Satisfied"
            text2="clients"
            textAnimation="slideUpAnimation"
            subtext="Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses."
            tabText="TESTIMONIALS"
            icon="🧡"
            paraWidth="28em"
          />
        </div>
      </div>
      <div style={{ overflow: "hidden" }} className="alignCenter simple-padding">
        <div style={{ width: "1400px" }} className=" customer-section">
          <div style={{ overflow: "hidden" }}>
            <img className="customers-blur" src="https://framerusercontent.com/images/584hzJDnWCS5SFABKjaCzgDspY.png" alt="" />
            <div className="marginTop customers customer-outer">
              {customers.map((cus, id) => <Card4 id={id} customer={cus} />)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "-460px" }} className="alignCenter simple-padding">
        <div style={{ overflow: "hidden" }} className="setWidth">
          <div className="faces-tab-design drop">
            <div className="faces-tab">
              <Section1
                class="faq-section1"
                titleText="section1-title2"
                paraText="section1-para2"
                fontColor="black"
                align={width < 1399 ? "center" : "start"}
                btn2="none"
                divWidth={width > 1399 ? "50%" : "80%"}
                btnText="Try out now"
                text="Unleash your "
                highlight="Potential"
                textAnimation="slideUpAnimation"
                text2="with us"
                subtext="Join our community of ambitious individuals and organizations eager to make a difference."
                tabText="DON'T MISS OUT"
                icon="👋"
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
      </div>
      <div style={{ marginTop: "9em" }} className="alignCenter simple-padding">
        <div className="setWidth">
          <div style={{ marginBottom: "7em" }} className="setWidth footer-logo-sec">
            <img className="footer-logo" src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" alt="" />
            <ul className="options">
              <a href="#features"><li>Features</li></a>
              <a href="#faq"><li>FAQ</li></a>
              <a href="#pricing"><li>Pricing</li></a>
              <a href="#testimonials"><li>Testimonials</li></a>
            </ul>
          </div>
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
