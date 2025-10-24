import { Bus, Train, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="mx-auto px-8 sm:px-12 md:px-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div className="text-center md:text-left">
            <img
              src="/src/assets/temp-logo.svg"
              alt="Maryam Coaching Logo"
              className="h-12 w-auto mx-auto md:mx-0 mb-4"
              loading="lazy"
            />
            <h2 className="text-lg font-semibold mb-2">Maryam Caillon</h2>
            <p className="text-sm text-gray-400">
              Sexologue & Thérapeute de couple
            </p>
          </div>

          <address className="text-sm leading-relaxed text-center md:text-left not-italic">
            <h3 className="font-semibold mb-3 text-base">Coordonnées du cabinet</h3>
            <p className="mb-3">
              02 Rue du Maréchal de Lattre de Tassigny
              <br />
              78000 Versailles
            </p>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Bus className="w-4 h-4 text-pink flex-shrink-0" aria-hidden="true" />
                <span>
                  <span className="font-medium text-white">Arrêt de Bus :</span> De Bange
                </span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Train className="w-4 h-4 text-pink flex-shrink-0" aria-hidden="true" />
                <span>
                  <span className="font-medium text-white">Train :</span> Versailles Rive Droite
                </span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4 text-pink flex-shrink-0" aria-hidden="true" />
                <span>
                  <span className="font-medium text-white">Tel :</span>{" "}
                  <a href="tel:+33636115957" className="hover:text-pink transition-colors" aria-label="Appeler le 06 36 11 59 57">
                    06 36 11 59 57
                  </a>
                </span>
              </p>
            </div>
          </address>

          <div className="flex flex-row md:flex-col justify-center">
            <a href="#" className="inline-block bg-pink text-white text-center px-6 py-4 rounded-4xl font-bold hover:bg-pink/90 transition-colors max-w-xs" aria-label="Prendre rendez-vous avec Maryam Caillon">
              Prendre rendez-vous
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <p className="text-gray-400">
              © 2025 Maryam Coaching. Tous droits réservés.
            </p>
            <nav aria-label="Liens légaux">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink transition-colors">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink transition-colors">
                    Politique de confidentialité
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;