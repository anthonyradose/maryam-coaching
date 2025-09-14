import { Mail, Sofa } from 'lucide-react';

// Hero section: Main title, subtitle, CTA, sale line, buttons, photo
const HeroSection = () => {
  return (
    <section className="lg:mt-28 lg:h-[calc(100vh-7rem)]">
   <div className="grid lg:grid-cols-2 items-stretch h-full ">

        {/* Left Column - Content */}
        <div className="flex flex-col justify-evenly px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 lg:py-20">
          {/* Main Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-pink leading-tight my-6 mx-3">
            Ravivez la flamme et la passion dans votre couple
            {/* <span className="text-pink"> [with emphasis]</span> */}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed my-2 mx-3">

            Redécouvrez le plaisir d’être ensemble, cœur à cœur, corps à corps
            avec Maryam Caillon - Sexologue et thérapeute de couple à Versailles
            et en ligne
          </p>

          {/* Main CTA Button */}
       <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-pink leading-tight my-4 mx-3">

            Démarrez maintenant !
          </h2>

          {/* Booking Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch space-y">
              {/* In-Office Booking Button */}
              <button className="text-base sm:text-lg md:text-xl inline-flex flex-row items-center justify-center bg-pink hover:bg-pink-light  transition-colors duration-200 w-48 p-2 sm:p-3 md:p-4 gap-x-2 mx-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
             
                     <Sofa className="text-white text-sm sm:text-base md:text-lg" />
                </div>
                <div className="flex flex-col text-left">
                  <div className="font-semibold text-white text-xs sm:text-sm md:text-base leading-tight">Book Now</div>
                  <div className="text-xs sm:text-sm md:text-base text-white leading-tight">
                    prendre rdv en cabinet
                  </div>
                </div>
              </button>

              {/* Online Booking Button */}
              <button className="text-base sm:text-lg md:text-xl inline-flex flex-row items-center justify-center bg-pink hover:bg-pink-light  transition-colors duration-200 w-48 p-2 sm:p-3 md:p-4 gap-x-2 mx-3">
                <div className="w-8 h-8 bg-pink rounded-full flex items-center justify-center shrink-0">
         
                      <Mail className="text-white text-sm sm:text-base md:text-lg" />
                </div>
                <div className="flex flex-col text-left">
                  <div className="font-semibold text-white text-xs sm:text-sm md:text-base leading-tight">Book Now</div>
                  <div className="text-xs sm:text-sm md:text-base text-white leading-tight">
                    prendre RDV en ligne
                  </div>
                </div>
              </button>
            </div>
        </div>
        {/* Right Column - Photo */}
        <div className="relative">
          <div className="w-28 h-14 bg-white absolute top-0 left-0 z-20 rounded-br-2xl | lg:hidden | dark:bg-grayDark-600">


<svg className="w-10 h-10 text-white fill-current absolute bottom-px -left-px z-30 transform translate-y-full dark:text-grayDark-600" viewBox="0 0 100 100"><path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z" /></svg>
<svg className="w-10 h-10 text-white fill-current absolute -top-px right-px z-30 transform translate-x-full dark:text-grayDark-600" viewBox="0 0 100 100"><path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z" /></svg>



</div>
          <img
            className="w-full h-full object-cover"
            src="../../public/images/DSC02294.JPG"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

