import { useState } from "react";

// Navigation bar component
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-pink z-50">
        <div className="flex justify-between items-center ml-4 px-8 py-4">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#accueil"
                className="text-2xl font-bold text-white hover:text-gray-light transition-colors"
              >
                Maryam Coaching
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#accueil"
                className="text-white hover:text-gray-light font-normal transition-colors duration-300"
              >
                Accueil
              </a>
              <a
                href="#qui-suis-je"
                className="text-white hover:text-gray-light font-normal transition-colors duration-300"
              >
                Qui suis-je ?
              </a>

              {/* Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-gray-light font-normal transition-colors duration-300 flex items-center">
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
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a
                    href="#therapie-couple"
                    className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    Thérapie de couple
                  </a>
                  <a
                    href="#sexotherapie"
                    className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    Sexothérapie
                  </a>
                </div>
              </div>

              <a
                href="#blog"
                className="text-white hover:text-gray-light font-normal transition-colors duration-300"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-white hover:text-gray-light font-normal transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#rdv" className=" text-white px-6 py-3 font-semibold ">
              Prendre RDV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1 p-2 rounded hover:bg-gray-100 transition-colors"
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
        </div>
        {/* Values Banner */}
        <div className="bg-pink-light border-b border-gray-200 py-3">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex justify-center items-center flex-wrap gap-4">
              <span className="text-white text-sm font-medium px-3 py-1">
                [Value 1]
              </span>
              <span className="text-gray-400 font-bold">•</span>
              <span className="text-white text-sm font-medium px-3 py-1">
                [Value 2]
              </span>
              <span className="text-gray-400 font-bold">•</span>
              <span className="text-white text-sm font-medium px-3 py-1">
                [Value 3]
              </span>
              <span className="text-gray-400 font-bold">•</span>
              <span className="text-white text-sm font-medium px-3 py-1">
                [Value 4]
              </span>
              <span className="text-gray-400 font-bold">•</span>
              <span className="text-white text-sm font-medium px-3 py-1">
                [Value 5]
              </span>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-8 py-4 space-y-4">
            <a
              href="#accueil"
              className="block py-3 text-gray-700 hover:text-red-500 font-medium border-b border-gray-100 transition-colors"
            >
              Accueil
            </a>
            <a
              href="#qui-suis-je"
              className="block py-3 text-gray-700 hover:text-red-500 font-medium border-b border-gray-100 transition-colors"
            >
              Qui suis-je ?
            </a>

            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-gray-800 font-semibold mb-2 pb-2 border-b border-gray-200">
                Les suivis proposés
              </div>
              <a
                href="#therapie-couple"
                className="block py-2 pl-4 text-white hover:text-gray-light transition-colors"
              >
                → Thérapie de couple
              </a>
              <a
                href="#sexotherapie"
                className="block py-2 pl-4 text-white hover:text-gray-light transition-colors"
              >
                → Sexothérapie
              </a>
            </div>

            <a
              href="#blog"
              className="block py-3 text-gray-700 hover:text-red-500 font-medium border-b border-gray-100 transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="block py-3 text-gray-700 hover:text-red-500 font-medium border-b border-gray-100 transition-colors"
            >
              Contact
            </a>
            <a
              href="#rdv"
              className=" w-full text-white py-4 font-semibold mt-4  transition-colors text-center"
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
