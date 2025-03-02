"use client";
import "@Styles/Generator.scss";
import { notFound } from "next/navigation";
import { useState } from "react";
interface passwordGenerator {
  length: number;
}
interface passphraseGenerator {
  length: number;
}
export default function Generator() {
  const [passwordType, setPasswordType] = useState<string>("Password");
  const [passwordData, setPasswordData] = useState<passwordGenerator>();
  const [phasphraseData, setPasphraseData] = useState<passphraseGenerator>();
  const handleTabChange = (tabName: string) => {
    setPasswordType(tabName);
  };
  return (
    <>
      <div className="generator-container">
        <div className="generator-content-container">
          <div className="generator-header">
            <h2 className="generator-heading">
              Generator Free & Strong Passwords
            </h2>
            <p className="generator-tagline">
              Need a strong password? Try out SecurePassMan Free & Strong
              Password Generator
            </p>
            <div className="generator-tabs-container">
              <div
                className="generator-tab-container"
                onClick={() => handleTabChange("Password")}
              >
                <h2
                  className={`generator-tab-heading ${
                    passwordType === "Password" ? "active" : null
                  }`}
                >
                  Password Generator
                </h2>
              </div>
              <div
                className="generator-tab-container"
                onClick={() => handleTabChange("Passphrase")}
              >
                <h2
                  className={`generator-tab-heading ${
                    passwordType === "Passphrase" ? "active" : null
                  }`}
                >
                  Passphrase Generator
                </h2>
              </div>
            </div>
          </div>

          {passwordType === "Password" ? (
            <div className="password-generator">
              <div className="generator-content">
                <div className="generator-user-choices-container">
                  <div className="generator-password-options">
                    <div className="generator-password-types-container">
                      <h2 className="generator-password-heading">Type</h2>
                      Your Password is : {""}
                    </div>
                    <div className="generator-password-additional-container">
                      <h2 className="generator-password-heading">
                        Additional Options
                      </h2>
                    </div>
                  </div>
                  <div className="generator-limit-container">
                    <h2 className="generator-password-heading">
                      Password Length
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ) : passwordType === "Passphrase" ? (
            <></>
          ) : (
            notFound()
          )}
        </div>
      </div>
    </>
  );
}
