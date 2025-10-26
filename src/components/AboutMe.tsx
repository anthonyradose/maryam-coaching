import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Diploma from "../assets/diploma.svg";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="py-16 px-8 sm:px-16 bg-white relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Top decorative blob */}
      <motion.div
        initial={{ x: "100%", y: "-50%", opacity: 0 }}
        animate={
          isInView
            ? { x: 0, y: 0, opacity: 1 }
            : { x: "100%", y: "-50%", opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 right-0 w-full h-50 bg-mint pointer-events-none"
        style={{
          borderBottomLeftRadius: "100% 100%",
          borderBottomRightRadius: "0% 0%",
        }}
        aria-hidden="true"
      />

      {/* Bottom decorative blob */}
      <motion.div
        initial={{ x: "-100%", y: "50%", opacity: 0 }}
        animate={
          isInView
            ? { x: 0, y: 0, opacity: 1 }
            : { x: "-100%", y: "50%", opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full h-50 bg-mint pointer-events-none"
        style={{
          borderTopRightRadius: "100% 100%",
          borderTopLeftRadius: "0% 0%",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mx-auto relative z-10 max-w-5xl"
      >
        <h2
          id="about-heading"
          className="text-center text-3xl md:text-4xl font-normal mb-16 tracking-wider"
        >
          <span className="italic">À propos</span>{" "}
          <span className="font-bold text-pink">de moi</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image */}
          <img
            src="/public/images/about-me.JPG"
            alt="Maryam Caillon, sexologue et thérapeute de couple"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover flex-shrink-0 shadow-lg mb-8 md:mb-0"
            loading="lazy"
          />

          {/* Bio content */}
          <div>
            <p className="mb-8 leading-[1.8] tracking-wide text-base md:text-lg">
              Je suis <span className="font-bold">Maryam Caillon</span>,
              sexologue et thérapeute de couple.{" "}
              <span className="italic text-pink">
                Passionnée par les relations humaines
              </span>
              , j'accompagne les couples à surmonter leurs blocages affectifs,
              sexuels et émotionnels.
            </p>

            <p className="mb-8 leading-[1.8] tracking-wide text-base md:text-lg">
              Je mets au cœur de mes séances{" "}
              <span className="font-bold">l'écoute, la bienveillance</span> et
              l'envie de vous aider à bâtir un couple plus fort.
            </p>

            {/* Certification badge */}
            <div className="flex items-center gap-3 mt-6 p-4 ">
              <img
                src={Diploma}
                alt=""
                role="presentation"
                className="w-8 h-8 flex-shrink-0"
              />
              <p className="text-sm md:text-base font-medium text-gray-700">
                Praticienne & Maître praticienne en sexothérapie – École
                Psynapse
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
