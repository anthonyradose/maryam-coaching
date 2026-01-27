import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StarIcon from "../assets/star.svg";
import type { CampaignConfig } from "../config/campaigns";

const benefits = [
  "Identifier et comprendre les sources de vos conflits",
  "Exprimer vos attentes et vos émotions en toute sécurité",
  "Vous sentir compris(e) et écouté(e)",
  "Communiquer sans reproches, avec bienveillance",
  "Retrouver intimité et complicité",
  "Construire un couple solide et durable dans la tendresse et l'amour.",
];

const HowToFixSection = ({
  title,
  description,
}: CampaignConfig["howToFix"]) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="py-16 px-8 sm:px-16 bg-white relative overflow-hidden"
    >
      {/* Top blob - curves from top-LEFT across to right (mirrored) */}
      <motion.div
        initial={{ x: "-100%", y: "-50%", opacity: 0 }}
        animate={
          isInView
            ? { x: 0, y: 0, opacity: 1 }
            : { x: "-100%", y: "-50%", opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 left-0 w-full h-50 bg-light-blue"
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
        className="absolute bottom-0 right-0 w-full h-50 bg-light-blue"
        style={{
          borderTopLeftRadius: "100% 100%",
          borderTopRightRadius: "0% 0%",
        }}
      />

      {/* Main content: title, benefits list, and closing paragraph with staggered fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mx-auto relative z-10 max-w-5xl"
      >
        <h2 className="text-center text-3xl md:text-4xl font-normal mb-16 tracking-wider">
          {title}
        </h2>
        <ul className="mb-16 space-y-6 list-none pl-0 tracking-wide text-base md:text-lg">
          {benefits.map((benefit) => (
            <li key={benefit} className="leading-[1.7] flex items-start gap-3">
              <img
                src={StarIcon}
                alt=""
                role="presentation"
                className="w-5 h-5 flex-shrink-0 mt-[0.3rem] mr-2"
              />
              {benefit}
            </li>
          ))}
        </ul>
        <p className=" leading-[1.8] tracking-wide text-base md:text-lg">
          {description}
        </p>
      </motion.div>
    </section>
  );
};

export default HowToFixSection;
