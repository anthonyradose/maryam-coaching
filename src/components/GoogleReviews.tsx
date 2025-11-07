import { useRef, useEffect, useState } from "react";
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

interface Review {
  id: number;
  name: string;
  date: string;
  text: string;
  image: string;
  rating: number;
}

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
  const [dynamicReviews, setDynamicReviews] = useState<Review[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const reviews: Review[] = [
    {
      id: 0,
      name: "[Customer Names]",
      date: "",
      text: "[Customer review testimonial about their experience with couple coaching]",
      image: "",
      rating: 5,
    },
    {
      id: 1,
      name: "[Customer Names]",
      date: "",
      text: "[Customer review testimonial about their experience with couple coaching]",
      image: "",
      rating: 5,
    },
    {
      id: 2,
      name: "[Customer Names]",
      date: "",
      text: "[Customer review testimonial about their experience with couple coaching]",
      image: "",
      rating: 5,
    },
    {
      id: 3,
      name: "[Customer Names]",
      date: "",
      text: "[Customer review testimonial about their experience with couple coaching]",
      image: "",
      rating: 5,
    },
    {
      id: 4,
      name: "[Customer Names]",
      date: "",
      text: "[Customer review testimonial about their experience with couple coaching]",
      image: "",
      rating: 5,
    },
    {
      id: 5,
      name: "[Customer Names]",
      date: "",
      text: "[Customer review testimonial about their experience with couple coaching]",
      image: "",
      rating: 5,
    },
  ];

  useEffect(() => {
    fetch("https://maryamcoaching.com/wp-json/mc/v1/google-reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data.html) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data.html, "text/html");
          const reviewElements = doc.querySelectorAll(".ti-review-item");

          const parsed = Array.from(reviewElements).map((el, idx) => {
            const nameEl = el.querySelector(".ti-name");
            const dateEl = el.querySelector(".ti-date");
            const textEl = el.querySelector(".ti-review-content");
            const imgEl = el.querySelector(".ti-profile-img img");
            const ratingEl = el.querySelector(".ti-rating");

            return {
              id: idx,
              name: nameEl?.textContent?.trim() || "Anonymous",
              date: dateEl?.textContent?.trim() || "",
              text: textEl?.textContent?.trim() || "",
              image: imgEl?.getAttribute("src") || "",
              rating: ratingEl
                ? parseInt(ratingEl.getAttribute("data-rating") || "5", 10)
                : 5,
            };
          });

          setDynamicReviews(parsed);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch reviews:", err);
      });
  }, []);

  const reviewsToDisplay = dynamicReviews.length > 0 ? dynamicReviews : reviews;

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
            slidesPerView="auto"
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
                centeredSlides: false,
              },
            }}
            className="pb-12 rounded-4xl"
          >
            {reviewsToDisplay.map((review, index) => (
              <SwiperSlide key={index} className="">
                <div className="bg-white p-6 rounded-xl shadow-[2px_3px_3px_theme(colors.gray.300)] border border-gray-300 h-[300px] flex flex-col">
                  {/* Profile Header */}
                  <div className="flex items-center gap-3 mb-3">
                    {review.image ? (
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-pink flex items-center justify-center text-white font-semibold">
                        {review.name.charAt(0)}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="font-semibold text-xs">{review.name}</div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                    <img
                      src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
                      alt="Google"
                      className="h-8 w-8"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex text-yellow-400 text-sm mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4"
                        fill={i < review.rating ? "currentColor" : "none"}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Review text with scroll */}
                  <p className="text-sm leading-relaxed italic overflow-y-auto flex-1 text-gray-700">
                    {review.text}
                  </p>
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
