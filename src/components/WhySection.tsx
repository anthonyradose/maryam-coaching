// Why section: The Why's + connection to practice
const WhySection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className=" mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The Why's
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Three main benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Benefit 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
            <div className="text-5xl mb-6">💕</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">[Benefit 1 Title]</h3>
            <p className="text-gray-600 leading-relaxed">
              [Description of first benefit - why couples need this service, emotional connection focus]
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
            <div className="text-5xl mb-6">🗣️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">[Benefit 2 Title]</h3>
            <p className="text-gray-600 leading-relaxed">
              [Description of second benefit - communication improvement focus]
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
            <div className="text-5xl mb-6">🌱</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">[Benefit 3 Title]</h3>
            <p className="text-gray-600 leading-relaxed">
              [Description of third benefit - relationship building focus]
            </p>
          </div>
        </div>

        {/* Connection to Practice */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              [Section about connecting to Maryam's practice]
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              [Description of Maryam's approach and qualifications - 2-3 sentences about her practice and methodology]
            </p>
          </div>

          {/* Credentials/Features */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl text-red-500">📚</span>
              </div>
              <h4 className="font-semibold text-gray-900">[Credential/Feature 1]</h4>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl text-red-500">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900">[Credential/Feature 2]</h4>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl text-red-500">✨</span>
              </div>
              <h4 className="font-semibold text-gray-900">[Credential/Feature 3]</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;