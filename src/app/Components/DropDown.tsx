import Link from "next/link";
import React from "react";
import "@Styles/Navbar.scss";

export const DropDown = () => {
  return (
    <>
      <div className="dropdown-container">
        <Link className="navbar-link " href={"/Vault"}>
          Password Manager
        </Link>
        <Link className="navbar-link" href={"/Generator"}>
          Password Generator
        </Link>
        <Link className="navbar-link" href={"/Checker"}>
          Password Strength Checker
        </Link>
      </div>
    </>
  );
};
