import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StarIcon from "../assets/star.svg";

const WhySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-16 px-8 sm:px-16 bg-white relative overflow-hidden "
    >
      {/* Top blob - curves from top-right across to left */}
      <motion.div
        initial={{ x: "100%", y: "-50%", opacity: 0 }}
        animate={
          isInView
            ? { x: 0, y: 0, opacity: 1 }
            : { x: "100%", y: "-50%", opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 right-0 w-full h-50  bg-gray-light"
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
        className="absolute bottom-0 left-0 w-full h-50 bg-gray-light"
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
        <h2 className="text-center text-3xl lg:text-4xl font-normal mb-16 tracking-wider">
          Je<span className="italic"> veux</span>
          <span className="font-bold"> retrouver</span>
          <span className="italic"> notre</span>
          <span className="font-bold text-pink"> complicité</span> !
        </h2>

        <p className="my-8 leading-[1.8] tracking-wide text-base lg:text-lg">
          La flamme de la passion semble avoir laissé place à{" "}
          <span className="font-bold">la routine</span>. Les moments d'intimité
          sont devenus{" "}
          <span className="italic text-pink">rares ou insatisfaisants</span>.
          Parler de ce que vous aimez ou désirez est devenu
          <span className="font-bold"> mission impossible</span>.
        </p>
        <ul className="mt-12 mb-8 space-y-8 list-none pl-0 tracking-wide text-base lg:text-lg">
          <li className="leading-[1.7] ">
            <img
              src={StarIcon}
              alt=""
              className="w-5 h-5 flex-shrink-0 mr-2 inline"
            />
            <span className="font-bold">Vous savez que vous vous aimez</span>,
            mais la distance s’est installée. La peur de perdre ce que vous avez
            construit est bien réelle.
          </li>
          <li className="leading-[1.7] ">
            <img
              src={StarIcon}
              alt=""
              className="w-5 h-5 flex-shrink-0 mr-2 inline"
            />
            <span className="font-bold">Vous n’êtes pas seul.e</span>. Comme de
            nombreux couples avant vous, vous pouvez rallumer la passion et
            recréer la complicité.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default WhySection;
