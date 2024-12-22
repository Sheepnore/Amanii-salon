import "../styles/Footer.css";
import insta_svg from "../assets/instagram-color.svg";
import facebook_svg from "../assets/facebook-color.svg";
function Footer() {
  return (
    <div className="Footer footer-container" id="footer">
      <div className="mainInfo-container">
        <div>
          <h3>聯絡負責人 吉田直樹</h3>
          <p>電話: +8860000000000</p>
          <p>信箱: a0981114049@gmail.com</p>
        </div>
        <div>
          <h3>社群媒體</h3>
          <a href="https://www.instagram.com/a0981114049/">
            <img src={insta_svg} alt="" />
          </a>
          <a href="https://www.facebook.com/fashion.salon.design">
            <img src={facebook_svg} alt="" />
          </a>
        </div>
      </div>

      <div className="copyright-container">
        <div>Copyright © 阿曼玉沙龍 All Right Reserved</div>
        <div>回到頂端</div>
      </div>
    </div>
  );
}
export default Footer;
