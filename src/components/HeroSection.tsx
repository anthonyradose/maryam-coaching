import { Mail, Sofa } from "lucide-react";

// Hero section: Main title, subtitle, CTA, sale line, buttons, photo
const HeroSection = () => {
  return (
    <section className="lg:h-[calc(100vh-7rem)] overflow-hidden">
      <div className="grid lg:grid-cols-2 items-stretch h-full">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center items-start px-4 sm:px-8 md:px-12  py-8 sm:py-12 lg:py-0 h-full ml-4">
          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-7xl font-light text-pink leading-tight mb-6 lg:text-left max-w-2xl lg:max-w-xl">
            Ravivez la flamme et la passion dans votre couple
          </h1>
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-4  lg:text-left max-w-xl font-light">
            Redécouvrez le plaisir d’être ensemble, cœur à cœur, corps à corps
            avec Maryam Caillon - Sexologue et thérapeute de couple à Versailles
            et en ligne
          </p>
          {/* Main CTA Button */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-normal text-pink leading-tight mb-6 text-center lg:text-left">
            Démarrez maintenant !
          </h2>
          {/* Booking Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
            {/* In-Office Booking Button */}
            <button className="text-base sm:text-lg md:text-xl inline-flex flex-row items-center justify-center bg-white border-3 border-pink hover:bg-pink-light transition-colors duration-200 w-48 lg:w-50 p-2  gap-x-2">
              <div className="w-8 h-8 bg-pink rounded-full flex items-center justify-center shrink-0">
                <Sofa className="text-white text-lg lg:text-2xl" />
              </div>
              <div className="flex flex-col text-left">
                <div className="font-normal text-gray-700 text-xs sm:text-sm md:text-base leading-tight tracking-[0.1rem]">
                  Book Now
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-700 leading-tight font-light">
                  prendre RDV en cabinet
                </div>
              </div>
            </button>
            {/* Online Booking Button */}
            <button className="text-base sm:text-lg md:text-xl inline-flex flex-row items-center justify-center bg-white border-3 border-pink hover:bg-pink-light transition-colors duration-200 w-48 lg:w-50 p-2  gap-x-2">
              <div className="w-8 h-8 bg-pink rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-white text-lg lg:text-2xl" />
              </div>
              <div className="flex flex-col text-left">
                <div className="font-normal text-gray-700 text-xs sm:text-sm md:text-base leading-tight tracking-[0.1rem]">
                  Book Now
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-700 leading-tight font-light">
                  prendre RDV en ligne
                </div>
              </div>
            </button>
          </div>
        </div>
        {/* Right Column - Photo */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <div className="relative img-div h-full ">
            <img
              className="w-full h-full object-cover "
              src="../../public/images/DSC02294.JPG"
              alt="Maryam Caillon portrait"
            />
                     <svg
              className="absolute lg:hidden top-spacing-neg-7 left-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 900"
              preserveAspectRatio="none"
            >
              <use xlinkHref="../../public/images/wave-haikei-sm.svg" />
            </svg>
            <svg
              className="absolute hidden lg:block top-0 left-0 w-full h-full pointer-events-none"
              viewBox="0 0 900 600"
              preserveAspectRatio="none"
            >
              <use xlinkHref="../../public/images/wave-haikei (1).svg" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
