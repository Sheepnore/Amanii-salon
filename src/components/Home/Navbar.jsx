import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import logo from "../../assets/salon-logo-v6-removebg.png";
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="hashlinks-container">
        <Link to="/appointment" className="appointmentBtn">
          預約
        </Link>
        <Link to="/login" className="link">
          會員登入
        </Link>
        <HashLink smooth to="/#location" className="link">
          地址
        </HashLink>
      </div>
    </div>
  );
}

export default Navbar;
