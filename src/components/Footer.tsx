// Footer component with useful information
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className=" mx-auto px-8 sm:px-12 md:px-16">
        <div className="space-y-6">
            <img
                  src="/src/assets/temp-logo.svg"
                  alt="Maryam Coaching Logo"
                  className="h-10 w-auto max-h-12 object-contain drop-shadow-sm"
                />
          <div className="text-white text-sm leading-relaxed">
            <div className="mb-6">
              <span className="font-semibold">Adresse du cabinet :</span><br />
              02 Rue du Maréchal de Lattre de Tassigny<br />
              78000 Versailles
            </div>
            <div className="mb-6">
              <span className="font-semibold">Arrêt de bus :</span> “De Bange”<br />
              <span className="font-semibold">Arrêt de train :</span> Gare de Versailles Rive droite
            </div>
            <div className="mb-6">
              <span className="font-semibold">Téléphone :</span> <a href="tel:0636115957" className="hover:text-pink-light transition-colors">06 36 11 59 57</a>
            </div>
          </div>
        </div>





        {/* Bottom Section */}
        <div className="border-t border-gray-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Maryam Coaching. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
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