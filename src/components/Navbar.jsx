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
          Home
        </HashLink>
        <Link to="/appointment">Appointment</Link>
        <HashLink smooth to="/#location">
          Location
        </HashLink>
      </div>
    </div>
  );
}

export default Navbar;
