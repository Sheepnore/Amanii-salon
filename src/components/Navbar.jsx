import { HashLink } from "react-router-hash-link";
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
          Home
        </HashLink>
        <HashLink smooth to="/#appointment">
          Appointment
        </HashLink>
        <HashLink smooth to="/#contact">
          Contact
        </HashLink>
      </div>
    </div>
  );
}

export default Navbar;
