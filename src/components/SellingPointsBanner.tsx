
const SellingPointsBanner = () => {
  return (
    <section className="w-full bg-pink-200 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[30%_70%] gap-12 items-stretch">
        {/* Left: Headline and CTA */}
        <div className="flex flex-col justify-center h-full">
          <span className="text-white text-xl font-normal mb-2 opacity-80">Bénéfices</span>
          <h2 className="text-white text-3xl font-bold mb-4 leading-tight">
            Pourquoi choisir une thérapie de couple avec Maryam ?
          </h2>
          <a
            href="#contact"
            className="inline-block mt-2 px-6 py-3 border-2 border-white text-white text-base font-semibold rounded-[2rem] hover:bg-white hover:text-pink-400 transition-colors duration-200 w-[250px]"
          >
            Prendre rendez-vous →
          </a>
        </div>
        {/* Right: Selling Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {/* Point 1 */}
          <div className="flex items-start space-x-4">
            <div className="text-3xl">�</div>
            <div>
              <h4 className="font-bold text-lg text-white mb-1">1. Des résultats rapides et concrets</h4>
              <p className="text-white/80 text-base">La majorité des couples observent une amélioration dès 4 à 5 séances, grâce à une approche efficace et moderne.</p>
            </div>
          </div>
          {/* Point 2 */}
          <div className="flex items-start space-x-4">
            <div className="text-3xl">🤝</div>
            <div>
              <h4 className="font-bold text-lg text-white mb-1">2. Une thérapeute humaine et chaleureuse</h4>
              <p className="text-white/80 text-base">Un accompagnement professionnel et authentique par une passionnée des relations d’amour, qui sait mêler bienveillance et humour pour rendre chaque séance unique.</p>
            </div>
          </div>
          {/* Point 3 */}
          <div className="flex items-start space-x-4">
            <div className="text-3xl">✅</div>
            <div>
              <h4 className="font-bold text-lg text-white mb-1">3. Une thérapie dynamique et conviviale</h4>
              <p className="text-white/80 text-base">Une approche participative qui crée un espace de confiance, d’échange et de compréhension pour sortir de l’impasse en toute sérénité.</p>
            </div>
          </div>
          {/* Point 4 */}
          <div className="flex items-start space-x-4">
            <div className="text-3xl">🎯</div>
            <div>
              <h4 className="font-bold text-lg text-white mb-1">4. Une approche sur mesure</h4>
              <p className="text-white/80 text-base">Votre couple est unique. Chaque séance s’adapte a vos besoins,  votre histoire, et à votre rythme.</p>
            </div>
          </div>
          {/* Point 5 */}
          <div className="flex items-start space-x-4">
            <div className="text-3xl">�️</div>
            <div>
              <h4 className="font-bold text-lg text-white mb-1">5. Un cadre rassurant et professionnel</h4>
              <p className="text-white/80 text-base">Confidentialité, écoute bienveillante et non-jugement, enrichis par 7 années d’expérience, vous assurent un accompagnement de qualité.</p>
            </div>
          </div>
          {/* Point 6 */}
          <div className="flex items-start space-x-4">
            <div className="text-3xl">�</div>
            <div>
              <h4 className="font-bold text-lg text-white mb-1">6. Investir pour votre avenir commun</h4>
              <p className="text-white/80 text-base">Main dans la main, bâtissez un couple solide et posez les bases d’un amour durable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellingPointsBanner;