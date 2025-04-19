"use client";
import React from "react";
import Navbar from "@Compoenets/Navbar";
import Footer from "@Compoenets/Footer";
import Logo from "@assets/Logo.webp";
import Image from "next/image";
import "@Styles/GeneratorPage.scss";
import "@Styles/UniversalStyle.scss";
import { FaArrowRight } from "react-icons/fa6";
import Generator from "./Components/Generator";

export default function page() {
  const handleScroll = () => {
    const generator = document.querySelector(".generator-container");
    generator?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
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
                    <br />
                    Strong Password?
                  </span>
                </h1>
                <div>
                  <button
                    className="pass-generator-hero-get-started"
                    onClick={handleScroll}
                  >
                    Generate
                    <FaArrowRight size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Generator />
        </div>
      </div>
      <Footer />
    </>
  );
}
