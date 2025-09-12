// Hero section: Main title, subtitle, CTA, sale line, buttons, photo
const HeroSection = () => {
  return (
    <section>
      {/* Hero content */}

      {/* Main Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Main Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                [Main title about couple coaching]
                <span className="text-red-500"> [with emphasis]</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-600 leading-relaxed">
                [Subtitle describing the service and benefits of couple coaching - approximately 2-3 lines of text]
              </p>

              {/* Sale Line */}

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">

                <p className="text-red-700 font-semibold text-lg">

              [Sale line text]

                </p>

              </div>
              {/* Main CTA Button */}
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Démarrez maintenant !
              </button>

              {/* Booking Buttons */}
              <div className="space-y-4">
                <p className="text-gray-700 font-medium text-lg">[Text introducing booking options]</p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* In-Office Booking Button */}
                  <button className="flex items-center justify-center space-x-3 bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-lg p-4 transition-colors duration-200 flex-1">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🛋️</span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-blue-700">Book Now</div>
                      <div className="text-sm text-blue-600">prendre rdv en cabinet</div>
                    </div>
                  </button>

                  {/* Online Booking Button */}
                  <button className="flex items-center justify-center space-x-3 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-lg p-4 transition-colors duration-200 flex-1">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📧</span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-green-700">Book Now</div>
                      <div className="text-sm text-green-600">prendre RDV en ligne</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Placeholder for Photo */}
                <div className="w-80 h-96 bg-gray-200 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">👩‍⚕️</div>
                    <p className="text-lg font-medium">[Maryam's Photo]</p>
                    <p className="text-sm">[Professional portrait]</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;