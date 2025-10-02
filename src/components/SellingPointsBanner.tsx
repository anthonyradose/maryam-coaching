import { Rocket, Heart, Smile, Palette, Shield, Sprout } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SellingPointsBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section ref={ref} className="py-16 px-8 sm:px-16 bg-white relative overflow-hidden">
      {/* Top blob - curves from top-right across to left */}
      <motion.div
        initial={{ x: "100%", y: "-50%", opacity: 0 }}
        animate={
          isInView
            ? { x: 0, y: 0, opacity: 1 }
            : { x: "100%", y: "-50%", opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 right-0 w-full h-50 bg-mint"
        style={{
          borderBottomLeftRadius: "100% 100%",
          borderBottomRightRadius: "0% 0%",
        }}
      />

      {/* Bottom blob - curves from bottom-left across to right */}
      <motion.div
        initial={{ x: "-100%", y: "50%", opacity: 0 }}
        animate={
          isInView
            ? { x: 0, y: 0, opacity: 1 }
            : { x: "-100%", y: "50%", opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full h-50 bg-mint"
        style={{
          borderTopRightRadius: "100% 100%",
          borderTopLeftRadius: "0% 0%",
        }}
      />

      {/* Content with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mx-auto relative z-10 max-w-5xl"
      >
        <div className="grid grid-cols-1 xl:grid-cols-[30%_70%]">
          {/* Left: Headline */}
          <div className="flex flex-col justify-center h-full xl:px-8">
  <h2 className="text-center text-3xl lg:text-4xl font-normal mb-16 tracking-wider">
  Pourquoi <span className="font-bold">choisir</span> <span className="italic">ma</span> <span className="font-bold text-pink">méthode</span> ?
</h2>
          </div>

          {/* Right: Selling Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mt-[1rem]">
            {/* Point 1 */}
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-pink"><Rocket/></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Des résultats rapides et concrets</h4>
                <p className="text-base leading-[1.7] tracking-wide">La majorité des couples observent une amélioration dès 4 à 5 séances, grâce à une approche efficace et moderne.</p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-pink"><Heart/></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Une thérapeute humaine et chaleureuse</h4>
                <p className="text-base leading-[1.7] tracking-wide">Un accompagnement professionnel et authentique par une passionnée des relations d'amour, qui sait mêler bienveillance et humour pour rendre chaque séance unique.</p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-pink"><Smile/></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Une thérapie dynamique et conviviale</h4>
                <p className="text-base leading-[1.7] tracking-wide">Une approche participative qui crée un espace de confiance, d'échange et de compréhension pour sortir de l'impasse en toute sérénité.</p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-pink"><Palette/></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Une approche sur mesure</h4>
                <p className="text-base leading-[1.7] tracking-wide">Votre couple est unique. Chaque séance s'adapte a vos besoins, votre histoire, et à votre rythme.</p>
              </div>
            </div>

            {/* Point 5 */}
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-pink"><Shield/></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Un cadre rassurant et professionnel</h4>
                <p className="text-base leading-[1.7] tracking-wide">Confidentialité, écoute bienveillante et non-jugement, enrichis par 7 années d'expérience, vous assurent un accompagnement de qualité.</p>
              </div>
            </div>

            {/* Point 6 */}
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-pink"><Sprout/></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Investir pour votre avenir commun</h4>
                <p className="text-base leading-[1.7] tracking-wide">Main dans la main, bâtissez un couple solide et posez les bases d'un amour durable.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SellingPointsBanner;