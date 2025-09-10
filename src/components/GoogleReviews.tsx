const GoogleReviews = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Statistics Banner */}
        <div className="text-center mb-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">[Number]</div>
              <div className="text-gray-600">Couples accompagnés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">[%]</div>
              <div className="text-gray-600">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">[Rating]</div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">[Years]</div>
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
              "[Customer review testimonial about their experience with couple coaching]"
            </p>
            <div className="text-sm font-semibold text-gray-900">
              - [Customer Names]
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
              "[Customer review testimonial about their experience with couple coaching]"
            </p>
            <div className="text-sm font-semibold text-gray-900">
              - [Customer Names]
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
              "[Customer review testimonial about their experience with couple coaching]"
            </p>
            <div className="text-sm font-semibold text-gray-900">
              - [Customer Names]
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
              "[Customer review testimonial about their experience with couple coaching]"
            </p>
            <div className="text-sm font-semibold text-gray-900">
              - [Customer Names]
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
              "[Customer review testimonial about their experience with couple coaching]"
            </p>
            <div className="text-sm font-semibold text-gray-900">
              - [Customer Names]
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
              "[Customer review testimonial about their experience with couple coaching]"
            </p>
            <div className="text-sm font-semibold text-gray-900">
              - [Customer Names]
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