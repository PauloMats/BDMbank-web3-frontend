"use client";
import React from 'react';
import FAQItem from './FaqItem';
import faqData from './FaqData'; 
import { FAQItemData } from './typo'; 

const FAQ: React.FC = () => {
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-3x2 w-full bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
        <h2 className="text-3x1 font-bold text-white mb-6 text-center">Perguntas e respostas - POS</h2>
        <div>
          {faqData.map((item: FAQItemData) => ( 
            <FAQItem key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;