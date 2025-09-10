// Footer component with useful information
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-400">Maryam Coaching</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              [Description of practice and mission - brief overview of couple coaching services]
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                📧
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                📱
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                🌐
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <div className="space-y-2">
              <a href="#accueil" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                Accueil
              </a>
              <a href="#qui-suis-je" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                Qui suis-je?
              </a>
              <a href="#services" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                Services
              </a>
              <a href="#temoignages" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                Témoignages
              </a>
              <a href="#faq" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                FAQ
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                [Service 1]
              </a>
              <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                [Service 2]
              </a>
              <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                [Service 3]
              </a>
              <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors text-sm">
                [Service 4]
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-red-400">📍</span>
                <div className="text-gray-300">
                  <div>[Address Line 1]</div>
                  <div>[Address Line 2]</div>
                  <div>[City, Postal Code]</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-red-400">📞</span>
                <a href="tel:[phone]" className="text-gray-300 hover:text-red-400 transition-colors">
                  [Phone Number]
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-red-400">✉️</span>
                <a href="mailto:[email]" className="text-gray-300 hover:text-red-400 transition-colors">
                  [Email Address]
                </a>
              </div>
              
              <div className="mt-4">
                <h5 className="font-semibold mb-2">Horaires</h5>
                <div className="text-gray-300 space-y-1">
                  <div>[Opening Hours]</div>
                  <div>[Days of Operation]</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 Maryam Coaching. Tous droits réservés.
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;