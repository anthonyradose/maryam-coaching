import { motion } from "framer-motion";
import type { CampaignConfig } from "../config/campaigns";

const HeroSection = ({ title, subtitle, ctaSubtitle,bookingLink }: CampaignConfig['hero'] & Pick<CampaignConfig, 'bookingLink'>) => {
  return (
    <section className="lg:h-[calc(100vh-7rem)] overflow-hidden" id= "hero-section">
      <div className="grid lg:grid-cols-2 items-stretch h-full">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 py-8 sm:py-12 lg:py-0 h-full ml-4">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-normal text-pink leading-tight mb-6 lg:text-left max-w-2xl lg:max-w-xl tracking-wider">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 lg:text-left max-w-xl font-light">
            {subtitle}
          </p>

          {/* CTA Subtitle */}
          {ctaSubtitle && (
            <p className="text-sm md:text-base text-gray-700 mb-4 font-medium lg:text-left max-w-xl">
              {ctaSubtitle}
            </p>
          )}

          {/* CTA Button */}
          <a className="bg-pink text-white px-4 py-2 rounded-4xl font-bold text-base md:text-lg hover:bg-pink/90 transition-colors duration-200" href={bookingLink} target="_blank">
            Prendre rendez-vous
          </a>
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
              src="/images/maryam-caillon-hero-1024.webp"
              alt="Maryam Caillon portrait"
                srcSet="
    /images/maryam-caillon-hero-300.webp 300w,
    /images/maryam-caillon-hero-640.webp 640w,
    /images/maryam-caillon-hero-768.webp 768w,
    /images/maryam-caillon-hero-1024.webp 1024w,
    /images/maryam-caillon-hero-1280.webp 1280w,
    /images/maryam-caillon-hero-1536.webp 1536w,
    /images/maryam-caillon-hero-1920.webp 1920w
  "
sizes="(min-width: 1024px) 50vw, 100vw"
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
