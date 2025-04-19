"use client";
import "@Styles/Home.scss";
import Logo from "@assets/Logo.webp";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "@Styles/UniversalStyle.scss";
import Footer from "@Compoenets/Footer";
import Navbar from "@Compoenets/Navbar";
import { FAQData, ProductsArray, FeatureCardData } from "@/Data";
import Image from "next/image";
import { FeatureCard, FAQ, Product } from "../Components";

export default function HomePage() {
  const [questionIndex, setQuestionIndex] = useState<number>(-1);
  const handleScroll = () => {
    const generator = document.querySelector(".home-content-container");
    generator?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <Navbar />
      <div className="parent-container">
        <div className="content-container">
          <div className="home-main-container">
            <div className="home-hero-section">
              <Image
                src={Logo.src}
                alt="App-Logo"
                objectFit="cover"
                width={1000}
                height="1000"
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
                  <button className="get-started-btn" onClick={handleScroll}>
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
                  {ProductsArray.map((ProductData, index) => {
                    return (
                      <Product
                        key={index}
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
