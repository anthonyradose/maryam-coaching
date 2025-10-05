import { useState, useRef } from 'react';
import { motion, useInView } from "framer-motion";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Quel est le tarif ?",
      answer: "130€ / heure, en couple."
    },
    {
      question: "Combien de temps dure une séance ?",
      answer: "60 minutes."
    },
    {
      question: "Les consultations en ligne sont-elles efficaces ?",
      answer: "Oui, elles offrent la même efficacité et davantage de flexibilité."
    },
    {
      question: "Les consultations sont-elles confidentielles ?",
      answer: "Absolument, la confidentialité est au cœur de mon approche."
    },
    {
      question: "Comment préparer la première séance ?",
      answer: "Réfléchissez à vos difficultés, besoins et objectifs afin de maximiser le temps ensemble."
    },
    {
      question: "Que puis-je attendre de la première séance ?",
      answer: "Un moment d'échange pour comprendre votre situation, vos attentes et déterminer ensemble les meilleurs axes de travail."
    },
    {
      question: "Comment savoir si nous avons besoin d'une thérapie de couple ?",
      answer: "Si vous n'arrivez plus à communiquer ou que la complicité disparaît, la thérapie est la bonne solution."
    }
  ];

  return (
    <section ref={ref} className="py-16 px-8 sm:px-16 bg-white relative overflow-hidden">
      {/* Top blob - curves from top-LEFT across to right (mirrored) */}
      <motion.div
        initial={{ x: "-100%", y: "-50%", opacity: 0 }}
        animate={
          isInView
            ? { x: 0, y: 0, opacity: 1 }
            : { x: "-100%", y: "-50%", opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 left-0 w-full h-50 bg-gray-light"
        style={{
          borderBottomRightRadius: "100% 100%",
          borderBottomLeftRadius: "0% 0%",
        }}
      />

      {/* Bottom blob - curves from bottom-RIGHT across to left (mirrored) */}
      <motion.div
        initial={{ x: "100%", y: "50%", opacity: 0 }}
        animate={
          isInView
            ? { x: 0, y: 0, opacity: 1 }
            : { x: "100%", y: "50%", opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        className="absolute bottom-0 right-0 w-full h-50 bg-gray-light"
        style={{
          borderTopLeftRadius: "100% 100%",
          borderTopRightRadius: "0% 0%",
        }}
      />

      {/* Content with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mx-auto relative z-10 max-w-5xl"
      >
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-12 tracking-wider">
            <span className="italic">Questions</span> <span className="font-bold text-pink">fréquentes</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left p-6"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold pr-4 tracking-wide">
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
                  <p className="text-base leading-[1.7] tracking-wide">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;