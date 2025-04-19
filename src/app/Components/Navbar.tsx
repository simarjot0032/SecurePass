"use client";
import Link from "next/link";
import "@Styles/Navbar.scss";
import { CiUnlock } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "@assets/Logo.webp";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { DropDown } from "./DropDown";

export default function Navbar() {
  const [shadow, setShadow] = useState<string | null>();
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [productsDropOpen, setProductsDropOpen] = useState<boolean>(false);
  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset > 75
        ? setShadow("shadow-transparent")
        : setShadow(" ");
    };
  }, []);
  const handleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  const handleDropDown = () => {
    setProductsDropOpen(!productsDropOpen);
  };

  return (
    <>
      <div className={`navbar-container  ${shadow}`}>
        <Link href={"/"} className="navbar-logo-link">
          <div className="navbar-left-container">
            <Image src={Logo} alt="site-icon" className="navbar-logo" />
            <h1 className="navbar-name">SecurePassMan</h1>
            <h1 className="navbar-name spm">SPM</h1>
          </div>
        </Link>
        <div className="navbar-right-container">
          <RxHamburgerMenu
            className="navbar-menu-button"
            onClick={handleMobileMenu}
          />

          <div
            className={
              isMobileOpen ? "navbar-mobile-container" : "navbar-mobile-close"
            }
          >
            <div className="navbar-mobile-header-container">
              <Image src={Logo} alt="logo" className="navbar-logo" />
              <h1 className="navbar-name">SecurePassMan</h1>
              <h1 className="navbar-name spm">SPM</h1>
              <MdOutlineKeyboardBackspace
                onClick={handleMobileMenu}
                className="navbar-menu-button navbar-menu-close-button"
              />
            </div>
            <div className="navbar-mobile-link-container">
              <Link
                href="/"
                className="navbar-link navbar-mobile-link"
                onClick={handleMobileMenu}
              >
                Home
              </Link>
              <div className="navbar-dropdown-container">
                <div className="navbar-dropdown-container-header">
                  <span
                    className="navbar-link navbar-mobile-dropdown-link"
                    onClick={handleDropDown}
                  >
                    Products
                  </span>
                  {productsDropOpen ? (
                    <FaAngleUp
                      className="navbar-dropdown-icon"
                      onClick={handleDropDown}
                    />
                  ) : (
                    <FaAngleDown
                      className="navbar-dropdown-icon"
                      onClick={handleDropDown}
                    />
                  )}
                </div>
                {productsDropOpen ? <DropDown /> : undefined}
              </div>
              <Link
                href={"/"}
                className="navbar-link navbar-mobile-link"
                onClick={handleMobileMenu}
              >
                Help Center
              </Link>
              <Link
                href="/"
                className="navbar-link navbar-mobile-link"
                onClick={handleMobileMenu}
              >
                Login
              </Link>
              <Link
                href="/"
                className="navbar-link navbar-mobile-link"
                onClick={handleMobileMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="navbar-screen-container">
            <Link href="/" className="navbar-link">
              Home
            </Link>
            <div
              className="navbar-dropdown-container"
              onMouseLeave={handleDropDown}
            >
              <div className="navbar-dropdown-container-header">
                <span
                  className="navbar-dropdown-link"
                  onMouseEnter={handleDropDown}
                >
                  Products
                </span>
                {productsDropOpen ? (
                  <FaAngleUp
                    className="navbar-dropdown-icon"
                    onClick={handleDropDown}
                  />
                ) : (
                  <FaAngleDown
                    className="navbar-dropdown-icon"
                    onClick={handleDropDown}
                  />
                )}
              </div>
              {productsDropOpen ? <DropDown /> : null}
            </div>
            <Link href={"/"} className="navbar-link">
              Help Center
            </Link>

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
      </div>
    </>
  );
}
