import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import logo from "../../assets/salon-logo-v6-removebg.png";
import { useAuth } from "../Auth/UserDataContext";
import { auth } from "../../config/firebase";
import SignoutModal from "./SignoutModal";

function Navbar() {
  const { userData } = useAuth();
  console.log(`user data: ${userData}`);

  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="hashlinks-container">
        <Link to="/appointment" className="appointmentBtn">
          預約
        </Link>
        {!userData && (
          <Link to="/login" className="link">
            會員登入
          </Link>
        )}
        <Link to="/memberDashboard" className="link">
          預約查詢
        </Link>
        {userData && (
          <SignoutModal
            onClick={() => {
              auth.signOut().then(() => {
                console.log("user signout");
              });
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
