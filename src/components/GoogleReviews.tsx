import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const GoogleReviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 px-8 sm:px-16 bg-white relative overflow-hidden">
      {/* Top blob - curves from top-LEFT across to right (mirrored) */}
      <motion.div
        initial={{ x: "-100%", y: "-50%", opacity: 0 }}
        animate={
          isInView
            ? { x: 0, y: 0, opacity: 1 }
            : { x: "-100%", y: "-50%", opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 left-0 w-full h-50 bg-pink-light"
        style={{
          borderBottomRightRadius: "100% 100%",
          borderBottomLeftRadius: "0% 0%",
        }}
      />

      {/* Bottom blob - curves from bottom-RIGHT across to left (mirrored) */}
      <motion.div
        initial={{ x: "100%", y: "50%", opacity: 0 }}
        animate={
          isInView
            ? { x: 0, y: 0, opacity: 1 }
            : { x: "100%", y: "50%", opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        className="absolute bottom-0 right-0 w-full h-50 bg-pink-light"
        style={{
          borderTopLeftRadius: "100% 100%",
          borderTopRightRadius: "0% 0%",
        }}
      />

      {/* Content with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mx-auto relative z-10 max-w-5xl"
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-normal tracking-wider">
            Ce que <span className="italic">disent</span> <span className="font-bold text-pink">mes patients</span>
          </h2>
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
            <p className="text-base leading-[1.7] tracking-wide mb-4 italic">
              "[Customer review testimonial about their experience with couple coaching]"
            </p>
            <div className="text-sm font-semibold">
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
            <p className="text-base leading-[1.7] tracking-wide mb-4 italic">
              "[Customer review testimonial about their experience with couple coaching]"
            </p>
            <div className="text-sm font-semibold">
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
            <p className="text-base leading-[1.7] tracking-wide mb-4 italic">
              "[Customer review testimonial about their experience with couple coaching]"
            </p>
            <div className="text-sm font-semibold">
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
            <p className="text-base leading-[1.7] tracking-wide mb-4 italic">
              "[Customer review testimonial about their experience with couple coaching]"
            </p>
            <div className="text-sm font-semibold">
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
            <p className="text-base leading-[1.7] tracking-wide mb-4 italic">
              "[Customer review testimonial about their experience with couple coaching]"
            </p>
            <div className="text-sm font-semibold">
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
            <p className="text-base leading-[1.7] tracking-wide mb-4 italic">
              "[Customer review testimonial about their experience with couple coaching]"
            </p>
            <div className="text-sm font-semibold">
              - [Customer Names]
            </div>
          </div>
        </div>

        {/* Google Business Link */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-pink hover:text-pink/80 font-semibold text-base tracking-wide"
          >
            Voir tous les avis sur Google
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default GoogleReviews;