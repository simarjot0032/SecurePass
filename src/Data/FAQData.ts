interface FAQ {
  id: number;
  question: string;
  answer: string;
}
const FAQData: FAQ[] = [
  {
    id: 1,
    question: "What is Secure Pass?",
    answer:
      "Secure Pass is a password management app that allows you to securely store, organize, and retrieve your passwords. It uses advanced encryption techniques to keep your data safe and accessible only to you.",
  },
  {
    id: 2,
    question: "How does Secure Pass ensure my data is secure?",
    answer:
      "We use best encryption to store your passwords, a standard trusted by governments and organizations worldwide. ",
  },
  {
    id: 3,
    question: "Can I access my passwords on multiple devices?",
    answer:
      "Yes, Secure Pass is designed to work seamlessly across all your devices. Your data is synchronized securely, allowing you to access your passwords wherever you need them.",
  },
  {
    id: 4,
    question: "Can Secure Pass autofill my passwords on websites and apps?",
    answer:
      "Currently, Secure Pass does not support autofill directly within apps or browsers. However, you can easily copy passwords from Secure Pass to use where needed. Autofill functionality may be introduced in future updates.",
  },
  {
    id: 5,
    question: " What types of data can I store in Secure Pass?",
    answer:
      "In addition to passwords, Secure Pass allows you to store other sensitive information like credit card details, notes, and security questions. All data is encrypted to ensure privacy.",
  },
];
export default FAQData;
