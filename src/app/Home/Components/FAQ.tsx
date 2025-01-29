"use client";
import { useState } from "react";
import "@Styles/FAQ.scss";
import { FaPlus } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
interface Props {
  question: string;
  answer: string;
  index: number;
  questionState: any;
  setQuestionState: any;
}
function FAQ({
  question,
  answer,
  index,
  questionState,
  setQuestionState,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (index: number) => {
    setQuestionState(index);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="faq-questions-container">
        <div
          className="faq-question-container"
          onClick={() => {
            handleClick(index);
          }}
        >
          <p className="faq-question">{question}</p>
          <div className="faq-icon-container">
            {!isOpen ? (
              <FaPlus className="faq-icon faq-plus-icon" />
            ) : (
              <HiXMark className="faq-icon" />
            )}
          </div>
        </div>
        {index === questionState && isOpen ? (
          <p className="faq-answer">{answer}</p>
        ) : undefined}
      </div>
    </>
  );
}

export default FAQ;
