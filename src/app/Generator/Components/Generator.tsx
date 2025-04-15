"use client";
import "@Styles/Generator.scss";
import { notFound } from "next/navigation";
import { useState } from "react";

interface passwordGenerator {
  length: number;
  isCapital: boolean;
  isLower: boolean;
  isNumber: boolean;
  isSpecial: boolean;
}
interface passphraseGenerator {
  isCapital: boolean;
  isNumber: boolean;
  wordSeprator: string;
}

export default function Generator() {
  const [passwordType, setPasswordType] = useState<string>("Password");
  const [passwordData, setPasswordData] = useState<passwordGenerator>({
    length: 8,
    isCapital: true,
    isLower: true,
    isNumber: true,
    isSpecial: false,
  });
  const [pasphraseData, setPasphraseData] = useState<passphraseGenerator>({
    isCapital: true,
    isNumber: false,
    wordSeprator: "-",
  });
  const handleTabChange = (tabName: string) => {
    setPasswordType(tabName);
  };
  console.log(passwordData, pasphraseData, setPasphraseData, setPasswordData);
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
                      <div className="generator-password-type">
                        Your Password is {"  "}{" "}
                        {/*Due to extra space required */}
                        <span className="generator-password-type-special">
                          {"Strong"}
                        </span>
                      </div>
                    </div>
                    <div className="generator-password-additional-container">
                      <h2 className="generator-password-heading">
                        Additional Options
                      </h2>
                      <form action="" className="addtional-options-form">
                        <div className="input-container">
                          <input
                            type="checkbox"
                            name="additional-form"
                            id="additional-options-input"
                          />
                          <label
                            htmlFor="additional-options-input"
                            className="label"
                          >
                            A-Z {"Captial Letters"}
                          </label>
                        </div>
                      </form>
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
