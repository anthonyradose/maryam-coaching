const GoogleReviews = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Statistics Banner */}
        <div className="text-center mb-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-600">Couples accompagnés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">95%</div>
              <div className="text-gray-600">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">4.9/5</div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">5+</div>
              <div className="text-gray-600">Années d'expérience</div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Google Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="ml-2 text-sm text-gray-500">Google</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Maryam nous a aidé à retrouver la complicité que nous avions perdue. 
              Ses conseils pratiques et son approche bienveillante ont transformé notre relation."
            </p>
            <div className="text-sm font-semibold text-gray-900">
              - Sophie & Marc
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="ml-2 text-sm text-gray-500">Google</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Un accompagnement professionnel et humain. Nous avons appris à mieux communiquer 
              et notre relation n'a jamais été aussi forte."
            </p>
            <div className="text-sm font-semibold text-gray-900">
              - Julie & Thomas
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="ml-2 text-sm text-gray-500">Google</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Grâce à Maryam, nous avons pu surmonter nos difficultés et construire 
              une relation basée sur la confiance et le respect mutuel."
            </p>
            <div className="text-sm font-semibold text-gray-900">
              - Amélie & David
            </div>
          </div>

          {/* Review 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="ml-2 text-sm text-gray-500">Google</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Des séances qui ont changé notre vie. L'approche de Maryam est à la fois 
              professionnelle et chaleureuse. Je recommande vivement !"
            </p>
            <div className="text-sm font-semibold text-gray-900">
              - Caroline & Pierre
            </div>
          </div>

          {/* Review 5 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="ml-2 text-sm text-gray-500">Google</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Nous étions au bord de la rupture. Aujourd'hui, nous sommes plus unis que jamais. 
              Merci Maryam pour votre aide précieuse."
            </p>
            <div className="text-sm font-semibold text-gray-900">
              - Emma & Julien
            </div>
          </div>

          {/* Review 6 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="ml-2 text-sm text-gray-500">Google</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Un coaching de couple exceptionnel. Maryam nous a donné les clés pour 
              une communication saine et une intimité retrouvée."
            </p>
            <div className="text-sm font-semibold text-gray-900">
              - Léa & Antoine
            </div>
          </div>
        </div>

        {/* Google Business Link */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Voir tous les avis sur Google
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;