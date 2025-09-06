import { useState } from 'react';

// Navigation bar component
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b border-gray-200">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-8 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#accueil" className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">
              Maryam Coaching
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-600 hover:text-red-500 font-medium transition-colors duration-300">
              Accueil
            </a>
            <a href="#qui-suis-je" className="text-gray-600 hover:text-red-500 font-medium transition-colors duration-300">
              Qui suis-je ?
            </a>
            
            {/* Dropdown */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-red-500 font-medium transition-colors duration-300 flex items-center">
                Les suivis proposés
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="#therapie-couple" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                  Thérapie de couple
                </a>
                <a href="#sexotherapie" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                  Sexothérapie
                </a>
              </div>
            </div>

            <a href="#blog" className="text-gray-600 hover:text-red-500 font-medium transition-colors duration-300">
              Blog
            </a>
            <a href="#contact" className="text-gray-600 hover:text-red-500 font-medium transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#rdv" className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-red-600 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
              Prendre RDV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1 p-2 rounded hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-8 py-4 space-y-4">
            <a href="#accueil" className="block py-3 text-gray-700 hover:text-red-500 font-medium border-b border-gray-100 transition-colors">
              Accueil
            </a>
            <a href="#qui-suis-je" className="block py-3 text-gray-700 hover:text-red-500 font-medium border-b border-gray-100 transition-colors">
              Qui suis-je ?
            </a>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-gray-800 font-semibold mb-2 pb-2 border-b border-gray-200">
                Les suivis proposés
              </div>
              <a href="#therapie-couple" className="block py-2 pl-4 text-gray-600 hover:text-red-500 transition-colors">
                → Thérapie de couple
              </a>
              <a href="#sexotherapie" className="block py-2 pl-4 text-gray-600 hover:text-red-500 transition-colors">
                → Sexothérapie
              </a>
            </div>
            
            <a href="#blog" className="block py-3 text-gray-700 hover:text-red-500 font-medium border-b border-gray-100 transition-colors">
              Blog
            </a>
            <a href="#contact" className="block py-3 text-gray-700 hover:text-red-500 font-medium border-b border-gray-100 transition-colors">
              Contact
            </a>
            <a href="#rdv" className="block w-full bg-red-500 text-white py-4 rounded-lg font-semibold mt-4 hover:bg-red-600 transition-colors text-center">
              Prendre RDV
            </a>
          </div>
        </div>
      </nav>

      {/* Values Banner */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 mt-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-center items-center flex-wrap gap-4">
            <span className="text-red-500 text-sm font-medium px-3 py-1 bg-red-50 rounded-full border border-red-200">
              Authenticité
            </span>
            <span className="text-gray-400 font-bold">•</span>
            <span className="text-red-500 text-sm font-medium px-3 py-1 bg-red-50 rounded-full border border-red-200">
              Respect
            </span>
            <span className="text-gray-400 font-bold">•</span>
            <span className="text-red-500 text-sm font-medium px-3 py-1 bg-red-50 rounded-full border border-red-200">
              Partage
            </span>
            <span className="text-gray-400 font-bold">•</span>
            <span className="text-red-500 text-sm font-medium px-3 py-1 bg-red-50 rounded-full border border-red-200">
              Complicité
            </span>
            <span className="text-gray-400 font-bold">•</span>
            <span className="text-red-500 text-sm font-medium px-3 py-1 bg-red-50 rounded-full border border-red-200">
              Bienveillance
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
