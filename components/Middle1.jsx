import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is Awaaz Uthao?",
      answer:
        "Awaaz Uthao is a revolutionary platform that empowers individuals and businesses with cutting-edge solutions for...",
    },
    {
      question: "How do I get started?",
      answer:
        "To get started with Awaaz Uthao, simply sign up on our website and follow the easy onboarding process...",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className='max-w-3xl mx-auto my-8 p-16'>
      <h1 className='text-4xl font-bold mb-8'>Frequently Asked Questions</h1>

      <ul className='space-y-4'>
        {faqData.map((item, index) => (
          <li key={index} className='border-b pb-4'>
            <button
              className='flex items-center justify-between w-full focus:outline-none'
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <span className='font-poppins text-lg'>{item.question}</span>
              <span
                className={`transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                } transition-transform`}
              >
                &#x2B;
              </span>
            </button>
            {activeIndex === index && (
              <p className='mt-2 text-gray-600'>{item.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
