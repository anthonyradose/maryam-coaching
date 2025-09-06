// The Why's section
const WhySection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The Why's
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Why 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-red-500 text-xl">💕</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Redécouvrir l'intimité
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Retrouvez la complicité et la connexion émotionnelle qui ont peut-être été perdues avec le temps.
            </p>
          </div>

          {/* Why 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-500 text-xl">🗣️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Améliorer la communication
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Apprenez à vous écouter vraiment et à exprimer vos besoins sans jugement ni conflit.
            </p>
          </div>

          {/* Why 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-green-500 text-xl">🌱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Construire ensemble
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Développez des outils concrets pour créer la relation épanouissante que vous méritez.
            </p>
          </div>
        </div>

        {/* Connection to Maryam */}
        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Pourquoi choisir Maryam ?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Avec plus de 10 ans d'expérience en thérapie de couple, Maryam combine une approche scientifique 
              et une écoute bienveillante. Elle vous accompagne dans un espace sécurisé pour transformer 
              les défis en opportunités de croissance.
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Certifiée en thérapie de couple
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Approche personnalisée
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Résultats prouvés
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
