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
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            [Small text introducing the process - explanation of how the coaching works]
          </p>

          {/* 3-Step Process */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">[Step 1 Title]</h3>
              <p className="text-gray-600">
                [Description of first step in the process]
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">[Step 2 Title]</h3>
              <p className="text-gray-600">
                [Description of second step in the process]
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">[Step 3 Title]</h3>
              <p className="text-gray-600">
                [Description of third step in the process]
              </p>
            </div>
          </div>

          {/* Additional motivational text */}
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              [Motivational text about the solution and working together - builds confidence]
            </p>
          </div>

          {/* CTA Button */}
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg">
            Démarrez maintenant!
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToFixSection;