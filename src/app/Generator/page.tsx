import React from "react";
import Navbar from "@Compoenets/Navbar";
import Footer from "@Compoenets/Footer";
import Logo from "@assets/Logo.webp";
import Image from "next/image";
import "@Styles/Generator.scss";
import "@Styles/UniversalStyle.scss";
import { FaArrowRight } from "react-icons/fa6";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="parent-container">
        <div className="content-container">
          <div className="pass-generator">
            <div className="pass-generator-hero-section">
              <Image
                src={Logo}
                alt={"Logo"}
                className="pass-generator-hero-logo"
              />
              <div className="pass-generator-hero-heading-container">
                <h1 className="pass-generator-hero-heading">
                  What to Generate a{" "}
                  <span className="pass-generator-focus-text">
                    {" "}
                    Strong Password?
                  </span>
                </h1>
                <div>
                  <button className="pass-generator-hero-get-started">
                    Get Started
                    <FaArrowRight size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
