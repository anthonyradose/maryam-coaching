const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="mx-auto px-8 sm:px-12 md:px-16 max-w-7xl">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Logo & Title */}
          <div className="text-center md:text-left">
            <img
              src="/src/assets/temp-logo.svg"
              alt="Maryam Coaching Logo"
              className="h-12 w-auto mx-auto md:mx-0 mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Maryam Caillon</h3>
            <p className="text-sm text-gray-400">
              Sexologue & Thérapeute de couple
            </p>
          </div>

          {/* Column 2 - Contact Info */}
          <div className="text-sm leading-relaxed text-center md:text-left">
            <h4 className="font-semibold mb-3 text-base">Coordonnées</h4>
            <p className="mb-3">
              02 Rue du Maréchal de Lattre de Tassigny
              <br />
              78000 Versailles
            </p>
            <p className="mb-3 text-gray-400">
              <span className="font-medium text-white">Bus :</span> De Bange
              <br />
              <span className="font-medium text-white">Train :</span> Versailles
              Rive Droite
            </p>
            <p>
              <a
                href="tel:0636115957"
                className="hover:text-pink transition-colors font-medium"
              >
                06 36 11 59 57
              </a>
            </p>
          </div>

          {/* Column 3 - CTA */}
          <div className="flex flex-row md:flex-col justify-center">
            <a
              href="#"
              className="inline-block bg-pink text-white text-center p-4 rounded-4xl font-bold hover:bg-pink/90 transition-colors max-w-3xs"
            >
              Prendre rendez-vous en visio
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <div className="text-gray-400">
              © 2025 Maryam Coaching. Tous droits réservés.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-pink transition-colors"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink transition-colors"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
