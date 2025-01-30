"use client";
import Link from "next/link";
import "../../Styles/Navbar.scss";
import { CiUnlock } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
  const [shadow, setShadow] = useState<string | null>();
  window.onscroll = () => {
    window.pageYOffset > 75 ? setShadow("shadow-transparent") : setShadow(" ");
  };

  return (
    <>
      <div className={`navbar-container  ${shadow}`}>
        <Link href={"/"} className="navbar-link">
          <div className="navbar-left-container">
            <img src="/assets/logo.png" alt="" className="navbar-logo" />
            <h1 className="navbar-name">SecurePassMan</h1>
            <h1 className="navbar-name spm">SPM</h1>
          </div>
        </Link>
        <div className="navbar-right-container">
          <button className="navbar-get-started-container">
            <span className="navbar-get-started-heading">Get Started</span>
            <FaArrowRight size={25} className="navbar-get-started-btn" />
          </button>
          <button className="navbar-login-container">
            <span className="navbar-login-heading">Login</span>
            <CiUnlock size={25} className="navbar-login-btn" />
          </button>
        </div>
      </div>
    </>
  );
}
