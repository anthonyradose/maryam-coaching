import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:h-[calc(100vh-7rem)] overflow-hidden" id= "hero-section">
      <div className="grid lg:grid-cols-2 items-stretch h-full">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 py-8 sm:py-12 lg:py-0 h-full ml-4">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-normal text-pink leading-tight mb-6 lg:text-left max-w-2xl lg:max-w-xl tracking-wider">
            Ravivez la flamme dans votre couple
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 lg:text-left max-w-xl font-light">
            Retrouvez complicité, intimité et confiance dès vos premières
            séances, avec <span className="font-medium text-pink">Maryam Caillon</span> –
            Sexologue et thérapeute de couple.
          </p>

          {/* CTA Button */}
          <button className="bg-pink text-white px-4 py-2 rounded-4xl font-bold text-base md:text-lg hover:bg-pink/90 transition-colors duration-200">
            Prendre rendez-vous
          </button>
        </div>

        {/* Right Column - Photo - slides in from right */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-full flex items-center justify-center overflow-hidden"
        >
          <div className="relative img-div h-full">
            <img
              className="w-full h-full object-cover"
              src="/images/DSC02294.JPG"
              alt="Maryam Caillon portrait"
            />
            <svg
              className="absolute lg:hidden top-spacing-neg-7 left-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 900"
              preserveAspectRatio="none"
            >
              <use xlinkHref="/images/wave-haikei-sm.svg" />
            </svg>
            <svg
              className="absolute hidden lg:block top-0 left-spacing-neg-27 lg:left-spacing-neg-18 bp1440:left-spacing-neg-17 w-full h-full pointer-events-none"
              viewBox="0 0 900 600"
              preserveAspectRatio="none"
            >
              <use xlinkHref="/images/wave-haikei (1).svg" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
