"use client";
import "../../Styles/Home.scss";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import FeatureCard from "../Components/FeatureCard";
import FeatureCardData from "../../Data/FeatureCard";
import Navbar from "../Components/Navbar";

export default function HomePage() {
  const [text, setText] = useState<String>("Secure  ");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText === "Secure  " ? "Passwords" : "Secure  "
      );
    }, 2390);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="parent-container">
        <div className="content-container">
          <div className="home-main-container">
            <div className="home-hero-section">
              <img
                src="/assets/logo.png"
                alt="App Logo"
                className="hero-section-logo"
              />
              <div className="hero-section-heading-container">
                <h2 className="hero-section-heading-tagline">
                  Start Securing Your Digital Life Today!
                </h2>
                <h2 className="hero-section-heading">
                  # <span style={{ width: "5px" }}> </span>
                  <span className="typing">{text}</span>
                  <span className="blinker">|</span>
                </h2>
                <div className="hero-section-btn-container">
                  <button className="get-started-btn">
                    Get Started!
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
            <div className="home-content-container">
              <div className="company-name">Secure Pass Features ! !</div>
              <div className="features-container">
                {FeatureCardData.map((cardData) => {
                  return (
                    <FeatureCard
                      cardHeading={cardData.heading}
                      cardContent={cardData.content}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
