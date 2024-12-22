import Navbar from "./Navbar";
import CallToActionBtn from "./CallToActionBtn";
import "../styles/Introduction.css";
import introimg from "../assets/introimg.png";

function Introduction() {
  return (
    <div className="introduction" id="introduction">
      <Navbar />
      <div className="intro-container">
        <div className="text-container">
          <h1 className="heading">
            We help you achieve a better version of yourself
          </h1>
          <div className="subheadings">
            <p className="subheading-one">為什麼阿曼玉沙龍?</p>
            <p className="subheading-two">
              因為我們是全台灣最好的沙龍。我們專門幫助人們變得更加自信，展現他們與生俱來的美麗。
            </p>
          </div>
          <CallToActionBtn></CallToActionBtn>
        </div>
        <div className="img">
          <img src={introimg} />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
