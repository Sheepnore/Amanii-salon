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
            <p className="subheading-one">Why AppointmentSys?</p>
            <p className="subheading-two">
              Because we're the best of the best. We specialize in helping
              people become more confident by bringing out their innate beauty.
            </p>
          </div>
          <CallToActionBtn></CallToActionBtn>
        </div>
        <div className="img">
          <img src={introimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
