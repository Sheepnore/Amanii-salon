import "../styles/Footer.css";
import logo from "../assets/hairsalon_logo_horizontal_v5.png";
function Footer() {
  return (
    <div className="Footer footer-container" id="footer">
      <div className="main-links-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="links-container">
          <h1>阿曼玉沙龍</h1>
          <div className="links">
            <div>About Us</div>
            <div>Social</div>
          </div>
        </div>
      </div>

      <div className="copyright-container">
        <div>Copyright © 阿曼玉沙龍</div>
        <div>Terms of Serivce</div>
        <div>Back To Top</div>
      </div>
    </div>
  );
}
export default Footer;
