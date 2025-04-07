import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'How do I post a job?',
      answer: 'To post a job, sign in to your employer account and click on the "Post a Job" button. Fill in the job details and submit the form.',
    },
    {
      question: 'What is the job posting fee?',
      answer: 'Job posting fees vary based on your subscription plan. Check our pricing page for detailed information.',
    },
    {
      question: 'How long will my job posting be visible?',
      answer: 'Job postings remain visible for 30-90 days depending on your subscription plan.',
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <button className="flex justify-between items-center w-full text-left">
                <span className="text-lg font-semibold">{faq.question}</span>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </button>
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 