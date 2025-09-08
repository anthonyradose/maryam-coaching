// The How to Fix section
const HowToFixSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The How to Fix
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Chaque couple traverse des défis, mais avec les bonnes méthodes et un accompagnement professionnel, 
            il est possible de retrouver l'harmonie et de construire une relation plus forte que jamais.
          </p>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Évaluation
              </h3>
              <p className="text-gray-600">
                Comprendre vos défis spécifiques et identifier les points d'amélioration
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Plan d'action
              </h3>
              <p className="text-gray-600">
                Développer des stratégies personnalisées adaptées à votre situation
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Transformation
              </h3>
              <p className="text-gray-600">
                Mettre en pratique et voir votre relation s'épanouir durablement
              </p>
            </div>
          </div>

          {/* Additional Text */}
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>La solution existe.</strong> Avec une approche structurée et bienveillante, 
              nous travaillons ensemble pour vous donner les outils nécessaires à une relation épanouie. 
              Chaque séance vous rapproche de la complicité que vous désirez retrouver.
            </p>
          </div>

          {/* CTA Button - Same as Hero */}
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Démarrez maintenant !
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToFixSection;
