import { Routes, Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">Wox</div>
      <div className="hashlinks-container">
        <HashLink smooth to="/">
          Home
        </HashLink>
        <HashLink smooth to="/#Services">
          Services
        </HashLink>
        <HashLink smooth to="/#Appointment">
          Appointment
        </HashLink>
        <HashLink smooth to="/#Contact">
          Contact
        </HashLink>
      </div>
    </div>
  );
}

export default Navbar;
