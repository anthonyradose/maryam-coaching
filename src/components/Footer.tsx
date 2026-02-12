import { Mail, Bus, Train, Phone, Instagram, Youtube } from "lucide-react";
import TiktokIcon from "../assets/tik-tok.svg";
import type { CampaignConfig } from "../config/campaigns";

const Footer = ({ bookingLink }: Pick<CampaignConfig, "bookingLink">) => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="mx-auto px-8 sm:px-12 md:px-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <img
              src="/images/temp-logo.svg"
              alt="Maryam Coaching Logo"
              className="h-12 w-auto mx-auto md:mx-0 mb-4"
              loading="lazy"
            />
            <h2 className="text-lg lg:text-xl font-semibold mb-2">
              Maryam Caillon
            </h2>
            <p className="text-sm text-gray-400">
              Sexologue & Thérapeute de couple
            </p>
          </div>

          <div className="text-sm leading-relaxed text-center md:text-start">
            <h3 className="font-semibold mb-4 text-base lg:text-lg">Contact</h3>

            <div className="inline-grid grid-cols-[auto_auto] gap-x-3 gap-y-3 items-center text-gray-400">
              <Phone
                className="w-5 h-5 text-pink justify-self-end"
                aria-hidden="true"
              />
              <a
                href="tel:+33636115957"
                className="hover:text-pink transition-colors mr-8 md:text-start md:mr-0"
              >
                06 36 11 59 57
              </a>

              <Mail
                className="w-5 h-5 text-pink justify-self-end"
                aria-hidden="true"
              />
              <a
                href="mailto:contact@maryamcoaching.com"
                className="hover:text-pink transition-colors md:text-xs lg:text-base"
              >
                contact@maryamcoaching.com
              </a>
            </div>
          </div>

          {/* Address & CTA */}
          <div className="text-center md:text-left">
            <address className="text-sm leading-relaxed not-italic">
              <h3 className="font-semibold mb-3 text-base lg:text-lg">
                Coordonnées du cabinet
              </h3>
              <p className="mb-3 text-gray-400">
                02 Rue du Maréchal de Lattre de Tassigny
                <br />
                78000 Versailles
              </p>
              <div className="inline-grid grid-cols-[auto_auto] gap-x-3 gap-y-3 items-center text-gray-400">
                <Bus
                  className="w-5 h-5 text-pink flex-shrink-0 mr-2 md:mr-0"
                  aria-hidden="true"
                />
                <span className="mr-10 md:mr-0">Arrêt de Bus : De Bange</span>

                <Train
                  className="w-5 h-5 text-pink flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="mr-4 md:mr-0">
                  Train : Versailles Rive Droite
                </span>
              </div>
            </address>
          </div>
          <div className="text-sm leading-relaxed text-center md:text-left">
            <h3 className="font-semibold mb-3 text-base lg:text-lg">
              Réseaux sociaux
            </h3>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/maryam_accompagnante"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-pink hover:bg-white hover:text-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@maryam_accompagnante"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-pink hover:bg-white hover:text-dark transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@maryam_accompagnante"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-pink hover:bg-white  transition-colors group"
                aria-label="TikTok"
              >
                <img
                  src={TiktokIcon}
                  alt=""
                  className="w-5 h-5 group-hover:brightness-0"
                />
              </a>
            </div>
          </div>
          <div className="text-center md:col-start-3 md:text-start">
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink text-white text-center px-4 py-2 md:px-3 rounded-full font-bold border-2 border-white hover:bg-white hover:border-pink hover:text-dark transition-colors"
              id="footer-booking-btn"
              aria-label="Prendre rendez-vous avec Maryam Caillon"
            >
              Prendre rendez-vous
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
                    href="https://maryamcoaching.com/mentions-legales/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink transition-colors"
                  >
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a
                    href="https://maryamcoaching.com/politique-de-confidentialite/"
                    target="_blank"
                    rel="noopener noreferrer"
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
