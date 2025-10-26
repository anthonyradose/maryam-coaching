import { Mail, Bus, Train, Phone, Instagram, Youtube } from "lucide-react";
import TiktokIcon from "../assets/tik-tok.svg";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="mx-auto px-8 sm:px-12 md:px-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Logo & Description */}
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

          <div className="text-sm leading-relaxed text-center">
            <h3 className="font-semibold mb-4 text-base">Contact</h3>

            <div className="inline-grid grid-cols-[auto_auto] gap-x-3 gap-y-3 items-center text-gray-400">
              <Phone
                className="w-5 h-5 text-pink justify-self-end"
                aria-hidden="true"
              />
              <a
                href="tel:+33636115957"
                className="hover:text-pink transition-colors"
              >
                06 36 11 59 57
              </a>

              <Mail
                className="w-5 h-5 text-pink justify-self-end"
                aria-hidden="true"
              />
              <a
                href="contact@maryamcoaching.com"
                className="hover:text-pink transition-colors"
              >
                contact@maryamcoaching.com
              </a>
            </div>
          </div>

          {/* Address & CTA */}
          <div className="text-center md:text-left mb-10">
            <address className="text-sm leading-relaxed not-italic mb-10">
              <h3 className="font-semibold mb-3 text-base">
                Coordonnées du cabinet
              </h3>
              <p className="mb-3 text-gray-400">
                02 Rue du Maréchal de Lattre de Tassigny
                <br />
                78000 Versailles
              </p>
              <div className="inline-grid grid-cols-[auto_auto] gap-x-3 gap-y-3 items-center text-gray-400">
                <div>
                  <Bus
                    className="w-5 h-5 text-pink flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>Arrêt de Bus :</span>
                  <span>De Bange</span>
                </div>
                <div>
                  <Train
                    className="w-5 h-5 text-pink flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>Train :</span>
                  <span>Versailles Rive Droite</span>
                </div>
              </div>
            </address>

            <a
              href="#"
              className="inline-block bg-pink text-white text-center px-4 py-2 rounded-full font-bold border-2 border-white hover:bg-white hover:border-pink hover:text-dark transition-colors"
              aria-label="Prendre rendez-vous avec Maryam Caillon"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>

        <div className="text-sm leading-relaxed text-center md:text-left mb-10">
          <h3 className="font-semibold mb-3 text-base">Réseaux sociaux</h3>
          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-pink hover:bg-white hover:text-dark transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-pink hover:bg-white hover:text-dark transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-pink hover:bg-white  transition-colors group"
              aria-label="YouTube"
            >
              <img
                src={TiktokIcon}
                alt=""
                className="w-5 h-5 group-hover:brightness-0"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <p className="text-gray-400">
              © 2025 Maryam Coaching. Tous droits réservés.
            </p>
            <nav aria-label="Liens légaux">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-pink transition-colors"
                  >
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-pink transition-colors"
                  >
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
