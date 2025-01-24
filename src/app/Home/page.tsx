"use client";
import "../../Styles/Home.scss";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import FeatureCard from "./FeatureCard";
import FeatureCardData from "../../Data/FeatureCard";
import Navbar from "../Components/Navbar";
import FAQ from "./FAQ";
import FAQData from "@/Data/FAQData";
export default function HomePage() {
  const [text, setText] = useState<string | null>(null);
  const [questionIndex, setQuestionIndex] = useState<any>(-1);
  useEffect(() => {
    setText("Secure  ");
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
                {FeatureCardData.map((cardData, index) => {
                  return (
                    <FeatureCard
                      key={index}
                      cardHeading={cardData.heading}
                      cardContent={cardData.content}
                    />
                  );
                })}
              </div>
              <div className="faq-parent-container">
                <h2 className="faq-heading">Frequently Asked Questions</h2>
                {FAQData.map((question, index) => {
                  return (
                    <FAQ
                      key={index}
                      question={question.question}
                      answer={question.answer}
                      questionState={questionIndex}
                      index={index}
                      setQuestionState={setQuestionIndex}
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
