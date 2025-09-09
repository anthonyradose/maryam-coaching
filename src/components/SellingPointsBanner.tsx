// Selling points banner with CTA
const SellingPointsBanner = () => {
  return (
    <section className="bg-red-500 py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Selling Point 1 */}
          <div className="text-center text-white">
            <div className="text-4xl mb-3">💕</div>
            <h3 className="font-bold text-lg mb-2">Approche Personnalisée</h3>
            <p className="text-red-100 text-sm">
              Chaque couple est unique, nos méthodes s'adaptent à vos besoins spécifiques
            </p>
          </div>

          {/* Selling Point 2 */}
          <div className="text-center text-white">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-lg mb-2">Résultats Prouvés</h3>
            <p className="text-red-100 text-sm">
              95% de nos clients constatent une amélioration durable de leur relation
            </p>
          </div>

          {/* Selling Point 3 */}
          <div className="text-center text-white">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-bold text-lg mb-2">Confidentialité Totale</h3>
            <p className="text-red-100 text-sm">
              Un espace sécurisé et bienveillant pour vous exprimer librement
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-bold text-red-500 text-lg mb-3">
                Prêt à transformer votre relation ?
              </h3>
              <a 
                href="#contact" 
                className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-sm"
              >
                Consultation Gratuite
              </a>
              <p className="text-gray-600 text-xs mt-2">
                Premier entretien offert
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellingPointsBanner;