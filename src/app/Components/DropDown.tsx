import Link from "next/link";
import React from "react";
import "@Styles/Navbar.scss";
export default function DropDown() {
  return (
    <>
      <div className="dropdown-container">
        <Link className="navbar-link" href={"/"}>
          Password Manager
        </Link>
        <Link className="navbar-link" href={"/"}>
          Password Generator
        </Link>
        <Link className="navbar-link" href={"/"}>
          Password Strength Checker
        </Link>
      </div>
    </>
  );
}
