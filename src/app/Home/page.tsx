"use client";
import "@Styles/Home.scss";
import Logo from "@assets/Logo.webp";

import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsDatabaseLock } from "react-icons/bs";

import FeatureCard from "./Components/FeatureCard";
import FeatureCardData from "@Data/FeatureCard";
import "@Styles/UniversalStyle.scss";
import FAQ from "./Components/FAQ";
import FAQData from "@/Data/FAQData";
import Footer from "@Compoenets/Footer";
import Navbar from "@Compoenets/Navbar";
import Product from "./Components/Product";
import { ProductsArray } from "@/Data/Products";

export default function HomePage() {
  const [questionIndex, setQuestionIndex] = useState<Number>(-1);

  return (
    <>
      <Navbar />
      <div className="parent-container">
        <div className="content-container">
          <div className="home-main-container">
            <div className="home-hero-section">
              <img
                src={Logo.src}
                alt="App-Logo"
                className="hero-section-logo"
              />
              <div className="hero-section-heading-container">
                <h2 className="hero-section-heading-tagline">
                  Start Securing Your Digital Life Today!
                </h2>
                <h2 className="hero-section-heading">
                  <span className="typing">Secure Password Manager</span>
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
              <div className="products-container">
                <h1 className="products-heading">Our Products</h1>
                <div className="products-content-container">
                  {ProductsArray.map((ProductData) => {
                    return (
                      <Product
                        ProductImage={ProductData.productIcon}
                        productHeading={ProductData.productName}
                        productDescription={ProductData.productDescription}
                        productLink={ProductData.productLink}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="features-tagline">Everything You Need</div>
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
      <Footer />
    </>
  );
}
