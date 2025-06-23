"use client";
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        {isOpen ? (
          <ChevronUpIcon className="h-6 w-6 text-white" />
        ) : (
          <ChevronDownIcon className="h-6 w-6 text-white" />
        )}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-300 pr-6" id={`faq-answer-${question.replace(/\s/g, '-')}`}> 
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;