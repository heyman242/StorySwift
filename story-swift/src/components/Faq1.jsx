import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    id: 1,
    question: " What services do you offer?",
    answer:
      "We offer a wide range of digital marketing services including SEO, PPC, social media marketing, content creation, and web design.",
  },
  {
    id: 2,
    question: " How long does it take to see results?",
    answer:
      "Results can vary depending on the service and your specific goals. Generally, you can start seeing initial results within 3-6 months, with more significant improvements over time.",
  },
  {
    id: 3,
    question: " Do you offer customized packages?",
    answer:
      "Yes, we offer customized packages tailored to your specific needs and budget. We'll work with you to create a strategy that aligns with your business goals.",
  },
  {
    id: 4,
    question: " How do you measure the success of your campaigns?",
    answer:
      "We use various analytics tools to track key performance indicators (KPIs) such as website traffic, conversion rates, engagement metrics, and ROI. We provide regular reports to keep you informed of your campaign's progress.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current;
      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border border-white rounded-lg bg-gray-800 mb-4 overflow-hidden">
      <button
        className="flex justify-between items-center w-full text-left p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <span
          className={`text-white text-2xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height }}
      >
        <div ref={contentRef} className="px-4 pb-4 text-gray-300">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Faq1 = () => {
  return (
    <div className="bg-[#090517] py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-semibold text-white text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq1;
