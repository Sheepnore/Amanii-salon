import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/hairsalon_logo_horizontal_v5.png";
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="hashlinks-container">
        <HashLink smooth to="/">
          首頁
        </HashLink>
        <Link to="/appointment">預約</Link>
        <HashLink smooth to="/#location">
          地址
        </HashLink>
      </div>
    </div>
  );
}

export default Navbar;
