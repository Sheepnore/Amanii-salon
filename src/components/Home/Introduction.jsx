import CallToActionBtn from "../CallToActionBtn";
import "../../styles/Introduction.css";
import introimg from "../../assets/salon-cropped.jpeg";

function Introduction() {
  return (
    <div className="introduction" id="introduction">
      <div className="intro-container">
        <div className="text-container">
          <div className="backgroundColor-layer">
            <h1 className="heading">アマンイ 阿曼玉沙龍</h1>
            <div className="subheadings">
              <p className="subheading-two">
                在台灣直營的日式沙龍，秉持日本職人精神，十年來以為數千位客人提供專業的髮型設計。
              </p>
            </div>
            <CallToActionBtn></CallToActionBtn>
          </div>
        </div>
        <div className="img">
          <img src={introimg} width={1000} height={500} />
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
