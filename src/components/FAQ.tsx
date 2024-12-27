import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Apa itu layanan kami?",
    answer:
      "Kami menyediakan solusi inovatif untuk membantu bisnis Anda berkembang.",
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Anda dapat mendaftar melalui formulir pendaftaran di situs web kami.",
  },
  {
    question: "Apakah ada biaya bulanan?",
    answer:
      "Kami menawarkan berbagai paket dengan biaya bulanan yang bervariasi.",
  },
  {
    question: "Bagaimana cara menghubungi tim dukungan?",
    answer:
      "Anda dapat menghubungi tim dukungan melalui email atau formulir kontak di situs kami.",
  },
  {
    question: "Apakah ada jaminan uang kembali?",
    answer:
      "Ya, kami menawarkan jaminan uang kembali dalam 30 hari jika Anda tidak puas.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span className="font-semibold text-gray-800">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
