import { useState } from 'react';

// FAQ section with common questions
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Comment se déroule une séance de coaching de couple ?",
      answer: "[Answer explaining how a couple coaching session works and what to expect]"
    },
    {
      question: "Combien de séances sont généralement nécessaires ?",
      answer: "[Answer about typical number of sessions needed for results]"
    },
    {
      question: "Que faire si mon/ma partenaire refuse de participer ?",
      answer: "[Answer about handling reluctant partners and individual sessions]"
    },
    {
      question: "Vos séances sont-elles confidentielles ?",
      answer: "[Answer about confidentiality and privacy policies]"
    },
    {
      question: "Proposez-vous des consultations en ligne ?",
      answer: "[Answer about online consultation availability and process]"
    },
    {
      question: "Quel est le tarif d'une séance ?",
      answer: "[Answer about pricing structure and payment options]"
    },
    {
      question: "Comment prendre rendez-vous ?",
      answer: "[Answer about booking process and contact methods]"
    },
    {
      question: "Dans quels cas le coaching de couple est-il recommandé ?",
      answer: "[Answer about situations where couple coaching is beneficial]"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className=" mx-auto px-8 sm:px-12 md:px-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <div className="w-24 h-1 bg-pink mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6">
            [Subtitle explaining this FAQ section helps answer common questions]
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left p-6 "
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-pink transform transition-transform duration-200 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
         
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            [Text asking if they need more help or have other questions]
          </p>
          <a
            href="#contact"
            className="inline-block bg-pink text-white border-3 border-white hover:bg-white hover:text-dark hover:border-3 hover:border-pink font-bold py-3 px-8 rounded-[2rem] transition-colors duration-200"
          >
            [Contact CTA button text]
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;