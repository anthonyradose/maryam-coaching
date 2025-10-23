import { Star, Heart, Smile, Palette, Shield, Sprout } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type SellingPoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const yearsOfExperience = new Date().getFullYear() - 2017;

const sellingPoints = [
  {
    icon: Star,
    title: "Des résultats rapides et concrets",
    description:
      "La majorité des couples observent une amélioration dès 4 à 5 séances, grâce à une approche efficace et moderne.",
  },
  {
    icon: Heart,
    title: "Une thérapeute humaine et chaleureuse",
    description:
      "Un accompagnement professionnel et authentique par une passionnée des relations d'amour, qui sait mêler bienveillance et humour pour rendre chaque séance unique.",
  },
  {
    icon: Smile,
    title: "Une thérapie dynamique et conviviale",
    description:
      "Une approche participative qui crée un espace de confiance, d'échange et de compréhension pour sortir de l'impasse en toute sérénité.",
  },
  {
    icon: Palette,
    title: "Une approche sur mesure",
    description:
      "Votre couple est unique. Chaque séance s'adapte a vos besoins, votre histoire, et à votre rythme.",
  },
  {
    icon: Shield,
    title: "Un cadre rassurant et professionnel",
    description: `Confidentialité, écoute bienveillante et non-jugement, enrichis par ${yearsOfExperience} années d'expérience, vous assurent un accompagnement de qualité.`,
  },
  {
    icon: Sprout,
    title: "Investir pour votre avenir commun",
    description:
      "Main dans la main, bâtissez un couple solide et posez les bases d'un amour durable.",
  },
] satisfies SellingPoint[];

const SellingPointsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="py-16 px-8 sm:px-16 bg-white relative overflow-hidden"
    >
      {/* Top blob */}
      <motion.div
        initial={{ x: "100%", y: "-50%", opacity: 0 }}
        animate={
          isInView
            ? { x: 0, y: 0, opacity: 1 }
            : { x: "100%", y: "-50%", opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 right-0 w-full h-50 bg-mint rounded-bl-[100%]"
      />

      {/* Bottom blob */}
      <motion.div
        initial={{ x: "-100%", y: "50%", opacity: 0 }}
        animate={
          isInView
            ? { x: 0, y: 0, opacity: 1 }
            : { x: "-100%", y: "50%", opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full h-50 bg-mint rounded-tr-[100%]"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mx-auto relative z-10 max-w-6xl"
      >
        <div className="grid grid-cols-1 xl:grid-cols-[30%_70%]">
          {/* Left: Headline */}
          <div className="flex flex-col justify-center h-full xl:pr-16 bp1440:pr-36">
            <h2 className="text-center text-3xl md:text-4xl font-normal mb-16 tracking-wider">
              Pourquoi <span className="font-bold">choisir</span>{" "}
              <span className="italic">ma</span>{" "}
              <span className="font-bold text-pink">méthode</span> ?
            </h2>
          </div>

          {/* Right: Selling Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mt-4">
            {sellingPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <article key={index} className="flex items-start space-x-4">
                  <div className="text-3xl text-pink" aria-hidden="true">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{point.title}</h3>
                    <p className="text-base leading-[1.7] tracking-wide">
                      {point.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SellingPointsSection;
