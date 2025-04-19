"use client";
import React from "react";
import "@Styles/Footer.scss";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div
        className="parent-container footer-p"
        style={{
          borderTop: "1px solid white",
          background: "#1f2021",
        }}
      >
        <div className="content-container">
          <div className="footer-container">
            <div className="footer-category">
              <p className="footer-category-heading">Navigation</p>
              <ul className="footer-unorderd-lists">
                <li className="footer-list-link-items">
                  <Link href={"/"} className="footer-links">
                    Home
                  </Link>
                </li>

                <li className="footer-list-link-items">
                  <Link href={"/"} className="footer-links">
                    Login
                  </Link>
                </li>
                <li className="footer-list-link-items">
                  <Link href={"/"} className="footer-links">
                    Get started
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-category">
              <p className="footer-category-heading">Tools</p>
              <ul className="footer-unorderd-lists">
                <li className="footer-list-link-items">
                  <Link href={"/Vault"} className="footer-links">
                    Password-Manager
                  </Link>
                </li>
                <li className="footer-list-link-items">
                  <Link href={"/Generator"} className="footer-links">
                    Password-Generator
                  </Link>
                </li>
                <li className="footer-list-link-items">
                  <Link href={"/Checker"} className="footer-links">
                    Password-Strength-Checker
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-category">
              <p className="footer-category-heading">Contact</p>
              <ul className="footer-unorderd-lists">
                <li className="footer-list-link-items">
                  <Link href={"/"} className="footer-links">
                    Help
                  </Link>
                </li>
                <li className="footer-list-link-items">
                  <Link href={"/"} className="footer-links">
                    Mail Us
                  </Link>
                </li>
                <li className="footer-list-link-items">
                  <Link href={"/"} className="footer-links">
                    Report issue
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-copy-container">
            Simarjot Singh &copy; 2024 - Present. All Rigths Reserved
          </div>
        </div>
      </div>
    </>
  );
}
