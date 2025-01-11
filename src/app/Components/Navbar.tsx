import "../../Styles/Navbar.scss";
import logo from "../assets/logo.png";
import { CiUnlock } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-left-container">
          <img src="/assets/logo.png" alt="" className="navbar-logo" />
          <h1 className="navbar-name">SecurePass</h1>
        </div>
        <div className="navbar-right-container">
          <div className="navbar-get-started-container">
            <span className="navbar-get-started-heading">Get Started</span>
            <FaArrowRight size={28} className="navbar-get-started-btn" />
          </div>
          <div className="navbar-login-container">
            <span className="navbar-login-heading">Login</span>
            <CiUnlock size={28} className="navbar-login-btn" />
          </div>
        </div>
      </div>
    </>
  );
}
