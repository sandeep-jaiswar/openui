import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md">
      <button
        onClick={toggleAccordion}
        className="flex items-center justify-between px-4 py-2 bg-blue-500 text-white"
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <svg
          className={`w-4 h-4 transition-transform transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 py-2">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
