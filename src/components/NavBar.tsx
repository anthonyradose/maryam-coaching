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
      <div className="bg-pink-light marquee-wrapper">
        <div className="marquee py-3 ">
          {Array(8)
            .fill([
              "authenticité",
              "respect",
              "partage",
              "complicite",
              "bienveillance",
            ])
            .flat()
            .map((value, idx) => (
              <span
                key={value + idx}
                className=" text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light px-3 "
              >
                {value}
              </span>
            ))}
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 left-0 right-0 bg-pink z-50">
        <div className="flex flex-row-reverse lg:flex-row justify-between items-center ml-4 px-4 py-4">
          <div className="flex items-center space-x-4 lg:ml-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#accueil"
                className="mr-[2rem"
              >
                <img
                  src="/src/assets/temp-logo.svg"
                  alt="Maryam Coaching Logo"
                  className="h-10 w-auto max-h-12 object-contain drop-shadow-sm"
                />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
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
            <a
              href="#rdv"
              className=" rounded-4xl bg-white text-dark px-4 py-2 font-normal tracking-[0.2rem] border-2 border-transparent hover:border-white hover:bg-pink hover:text-white transition-colors"
            >
              Prendre RDV
            </a>
          </div>

          {/* Mobile Menu Open Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden flex flex-col gap-1 py-2 rounded hover:bg-gray-100 transition-colors sm:ml-4 md:ml-8"
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
        {isMenuOpen && (
          <div className="fixed inset-0 z-51 bg-black opacity-50 backdrop-blur-sm lg:hidden "></div>
        )}
        {/* Mobile Menu */}
        <div
          className={` fixed flex flex-col items-start justify-start top-0 left-0 w-full sm:w-auto h-full z-55 lg:hidden bg-pink-light overflow-hidden shadow-lg transition-all duration-200  px-8 py-4 space-y-8  ${
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
          <div className="flex flex-col w-full space-y-8 mobile-menu-links">
            <a
              href="#accueil"
              className="block py-2 text-dark w-full transition-colors tracking-[0.2rem]"
            >
              Accueil
            </a>
            <a
              href="#qui-suis-je"
              className="block py-2 text-dark w-full  transition-colors tracking-[0.2rem]"
            >
              Qui suis-je ?
            </a>

            {/* Dropdown */}
            <div className="group w-full   py-2 mobile-menu-dropdown">
              <button className="text-dark transition-colors duration-300  justify-between flex items-center tracking-[0.2rem]">
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
                  className="block px-4 py-3 text-dark transition-colors tracking-[0.2rem]"
                >
                  Thérapie de couple
                </a>
                <a
                  href="#sexotherapie"
                  className="block px-4 py-3 text-dark  transition-colors tracking-[0.2rem]"
                >
                  Sexothérapie
                </a>
              </div>
            </div>

            <a
              href="#blog"
              className="block py-2 text-dark w-full   transition-colors tracking-[0.2rem] "
            >
              Blog
            </a>
            <a
              href="#contact"
              className="block py-2 text-dark w-full  transition-colors tracking-[0.2rem]"
            >
              Contact
            </a>
          </div>
          <div className="w-full text-center cta-div mt-8">
            <a
              href="#rdv"
              className=" w-auto  font-medium   transition-colors text-center tracking-[0.2rem] bg-white p-4 rounded-4xl "
            >
              Prendre RDV
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
