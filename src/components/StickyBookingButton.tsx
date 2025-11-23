import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { CampaignConfig } from "../config/campaigns";

export const StickyBookingButton = ({ bookingLink }: Pick<CampaignConfig, 'bookingLink'>) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const footerButtonRef = useRef<HTMLElement | null>(null);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    heroRef.current = document.querySelector("#hero-section");
    footerButtonRef.current = document.querySelector("#footer-booking-btn");
  }, []);

  const isHeroInView = useInView(heroRef, {
    amount: 0.1,
    initial: true,
  });
  const isFooterButtonInView = useInView(footerButtonRef, {
    amount: 0.5,
  });

  const shouldShowButton = !isHeroInView && !isFooterButtonInView;

  return (
    <motion.a
      href={bookingLink}
      target="_blank"
      initial={{ y: 100 }}
      animate={shouldShowButton ? { y: 0 } : { y: 100 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { type: "spring", bounce: 0.25, duration: 0.6 }
      }
      whileTap={{ scale: 0.97 }}
      className="
        fixed inset-x-0 bottom-0 z-50 py-5 md:hidden
        bg-pink text-white text-center font-bold
      "
      style={{
        pointerEvents: shouldShowButton ? "auto" : "none",
        borderTopLeftRadius: "50% 100%",
        borderTopRightRadius: "50% 100%",
      }}
      aria-label="Prendre rendez-vous"
    >
      Prendre RDV
    </motion.a>
  );
};
