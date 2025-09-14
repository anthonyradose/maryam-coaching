import { useState, useEffect } from "react";

// Navigation bar component
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Values Banner */}
      <div className="bg-pink-light  py-3">
        <div className="flex justify-center items-center ">
          <span className="text-white text-xs sm:text-sm md:text-base font-normal  bp375:px-1 bp425:px-2 sm:px-3 py-1">
            authenticité
          </span>
          <span className="text-white font-thin">|</span>
          <span className="text-white text-xs sm:text-sm md:text-base font-normal  bp375:px-1 bp425:px-2 sm:px-3 py-1">
            respect
          </span>
          <span className="text-white font-thin">|</span>
          <span className="text-white text-xs sm:text-sm md:text-base font-normal bp375:px-1 bp425:px-2 sm:px-3  py-1">
            partage
          </span>
          <span className="text-white font-thin">|</span>
          <span className="text-white text-xs sm:text-sm md:text-base font-normal  bp375:px-1 bp425:px-2 sm:px-3 py-1">
            complicite
          </span>
          <span className="text-white font-thin">|</span>
          <span className="text-white text-xs sm:text-sm md:text-base font-normal bp375:px-1 bp425:px-2 sm:px-3  py-1">
            bienveillance
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 left-0 right-0 bg-pink z-50">
        <div className="flex flex-row-reverse lg:flex-row justify-between items-center ml-4 px-4 py-4">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#accueil"
                className="text-2xl font-bold text-white hover:text-gray-light transition-colors"
              >
                MC
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#accueil"
                className="text-white hover:text-gray-light font-light transition-colors duration-300"
              >
                Accueil
              </a>
              <a
                href="#qui-suis-je"
                className="text-white  font-light transition-colors duration-300"
              >
                Qui suis-je ?
              </a>

              {/* Dropdown */}
              <div className="relative group">
                <button className="text-white font-light transition-colors duration-300 flex items-center">
                  Les suivis proposés
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white   rounded-none border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a
                    href="#therapie-couple"
                    className="block px-4 py-3 text-gray-700  transition-colors"
                  >
                    Thérapie de couple
                  </a>
                  <a
                    href="#sexotherapie"
                    className="block px-4 py-3 text-gray-700  transition-colors"
                  >
                    Sexothérapie
                  </a>
                </div>
              </div>

              <a
                href="#blog"
                className="text-white hover:text-gray-light font-light transition-colors duration-300"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-white hover:text-gray-light font-light transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="#rdv" className=" text-white px-6 py-3 font-normal ">
              Prendre RDV
            </a>
          </div>

          {/* Mobile Menu Open Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden flex flex-col gap-1 py-2 rounded hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300`} />
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 `}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 `}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={` fixed flex flex-col items-start justify-start top-0 left-0 w-full h-full z-55 lg:hidden bg-gray-light overflow-hidden shadow-lg transition-all duration-200  px-8 py-4 space-y-8  ${
            isMenuOpen
              ? "   translate-x-0 opacity-100 duration-300"
              : " -translate-x-full opacity-0 duration-300"
          }`}
        >
          {/* Mobile Menu Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden flex flex-col gap-1 py-2 rounded hover:bg-gray-100 transition-colors mt-12"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
          <div className="flex flex-col w-full space-y-8 mt-8">
          <a
            href="#accueil"
            className="block py-2 text-gray-700 w-full font-sm transition-colors tracking-[0.2rem]"
          >
            Accueil
          </a>
          <a
            href="#qui-suis-je"
            className="block py-2 text-gray-700 w-full font-sm  transition-colors tracking-[0.2rem]"
          >
            Qui suis-je ?
          </a>

          {/* Dropdown */}
          <div className="group w-full font-sm  py-2">
            <button className="text-black font-light transition-colors duration-300 w-full justify-between flex items-center tracking-[0.2rem]">
              Les suivis proposés
              <svg
                className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className=" w-full hidden group-hover:block bg-pink-light    transition-all duration-300">
              <a
                href="#therapie-couple"
                className="block px-4 py-3 text-gray-700  transition-colors tracking-[0.2rem]"
              >
                Thérapie de couple
              </a>
              <a
                href="#sexotherapie"
                className="block px-4 py-3 text-gray-700  transition-colors tracking-[0.2rem]"
              >
                Sexothérapie
              </a>
            </div>
          </div>

          <a
            href="#blog"
            className="block py-2 text-gray-700 w-full  font-sm  transition-colors tracking-[0.2rem] "
          >
            Blog
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-700 w-full  font-sm transition-colors tracking-[0.2rem]"
          >
            Contact
          </a>
</div>
          <a
            href="#rdv"
            className=" w-full text-gray-700  font-medium   transition-colors text-center tracking-[0.2rem]"
          >
            Prendre RDV
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
