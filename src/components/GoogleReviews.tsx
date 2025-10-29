import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const yearsOfExperience = new Date().getFullYear() - 2018;

const AnimatedCounter = ({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, target]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const GoogleReviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const reviews = [
    {
      text: "[Customer review testimonial about their experience with couple coaching]",
      author: "[Customer Names]",
    },
    {
      text: "[Customer review testimonial about their experience with couple coaching]",
      author: "[Customer Names]",
    },
    {
      text: "[Customer review testimonial about their experience with couple coaching]",
      author: "[Customer Names]",
    },
    {
      text: "[Customer review testimonial about their experience with couple coaching]",
      author: "[Customer Names]",
    },
    {
      text: "[Customer review testimonial about their experience with couple coaching]",
      author: "[Customer Names]",
    },
    {
      text: "[Customer review testimonial about their experience with couple coaching]",
      author: "[Customer Names]",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 px-8 sm:px-16 bg-white relative overflow-hidden"
    >
      {/* Top blob */}
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

      {/* Bottom blob */}
      <motion.div
        initial={{ x: "100%", y: "50%", opacity: 0 }}
        animate={
          isInView
            ? { x: 0, y: 0, opacity: 1 }
            : { x: "100%", y: "50%", opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        className="absolute bottom-0 right-0 w-full h-50  bg-pink-light"
        style={{
          borderTopLeftRadius: "100% 100%",
          borderTopRightRadius: "0% 0%",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mx-auto relative z-10 max-w-5xl"
      >
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal tracking-wider mb-16">
            Ce que <span className="italic">disent</span>{" "}
            <span className="font-bold text-pink">mes patients</span>
          </h2>
        </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-pink mb-2">
      <AnimatedCounter target={4500} />
    </div>
    <div className="text-sm md:text-base tracking-wide">Sourires</div>
  </div>

  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-pink mb-2">
      <AnimatedCounter target={96} suffix="%" />
    </div>
    <div className="text-sm md:text-base tracking-wide">
      De cœurs généreux satisfaits
    </div>
  </div>

  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-pink mb-2">
      <AnimatedCounter target={yearsOfExperience} />
    </div>
    <div className="text-sm md:text-base tracking-wide">
      Années de voyage avec vous
    </div>
  </div>

  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-pink mb-2">
      <AnimatedCounter target={100} suffix="%" />
    </div>
    <div className="text-sm md:text-base tracking-wide">
      De bonheurs partagés
    </div>
  </div>
</div>

        {/* Swiper Carousel */}
        <div className="relative px-0 sm:px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView='auto'
            centeredSlides={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: {
                     centeredSlides: false
              }
            }}
            className="pb-12 rounded-4xl"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="">
                <div className="bg-white p-6  rounded-xl  shadow-[2px_3px_3px_theme(colors.gray.300)] border border-gray-300">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 text-xl">
                      ⭐⭐⭐⭐⭐
                    </div>
                    <span className="ml-2 text-sm text-gray-500">Google</span>
                  </div>
                  <p className="text-base leading-[1.7] tracking-wide mb-4 italic">
                    {review.text}
                  </p>
                  <div className="text-sm font-semibold">- {review.author}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - hidden on mobile */}
          <button className="swiper-button-prev-custom hidden sm:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-pink rounded-full items-center justify-center shadow-lg hover:bg-pink/80 transition-colors">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="swiper-button-next-custom hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-pink rounded-full items-center justify-center shadow-lg hover:bg-pink/80 transition-colors">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Google Business Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-pink hover:text-pink/80 font-semibold text-base tracking-wide"
          >
            Voir tous les avis sur Google
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default GoogleReviews;

