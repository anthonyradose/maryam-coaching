// Selling points banner with CTA
const SellingPointsBanner = () => {
  return (
    <section className="bg-red-500 py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Selling Point 1 */}
          <div className="text-center text-white">
            <div className="text-4xl mb-3">💕</div>
            <h3 className="font-bold text-lg mb-2">[Selling Point 1]</h3>
            <p className="text-red-100 text-sm">
              [Description of first selling point benefit]
            </p>
          </div>

          {/* Selling Point 2 */}
          <div className="text-center text-white">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-lg mb-2">[Selling Point 2]</h3>
            <p className="text-red-100 text-sm">
              [Description of second selling point benefit]
            </p>
          </div>

          {/* Selling Point 3 */}
          <div className="text-center text-white">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-bold text-lg mb-2">[Selling Point 3]</h3>
            <p className="text-red-100 text-sm">
              [Description of third selling point benefit]
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-bold text-red-500 text-lg mb-3">
                [CTA Question/Statement]
              </h3>
              <a 
                href="#contact" 
                className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-sm"
              >
                [CTA Button Text]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellingPointsBanner;