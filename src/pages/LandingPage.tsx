import React, { Suspense } from "react";
import NavBar from "../components/NavBar";
import { StickyBookingButton } from "../components/StickyBookingButton";
import HeroSection from "../components/HeroSection";
const WhySection = React.lazy(() => import("../components/WhySection"));
const HowToFixSection = React.lazy(
  () => import("../components/HowToFixSection"),
);
const SellingPointsSection = React.lazy(
  () => import("../components/SellingPointsSection"),
);
const GoogleReviews = React.lazy(() => import("../components/GoogleReviews"));
const AboutMe = React.lazy(() => import("../components/AboutMe"));
const FAQSection = React.lazy(() => import("../components/FAQSection"));
const Footer = React.lazy(() => import("../components/Footer"));

import type { CampaignConfig } from "../config/campaigns";

interface LandingPageProps {
  config: CampaignConfig;
}
// Main landing page layout
const LandingPage = ({ config }: LandingPageProps) => {
  return (
    <>
      <header>
        <NavBar bookingLink={config.bookingLink} />
      </header>
      <main>
        <HeroSection {...config.hero} bookingLink={config.bookingLink} />
        <Suspense fallback={null}>
          <WhySection {...config.why} />
        </Suspense>
        <Suspense fallback={null}>
          <HowToFixSection {...config.howToFix} />
        </Suspense>
        <Suspense fallback={null}>
          <SellingPointsSection />
        </Suspense>
        <Suspense fallback={null}>
          <GoogleReviews />
        </Suspense>
        <Suspense fallback={null}>
          <AboutMe />
        </Suspense>
        <Suspense fallback={null}>
          <FAQSection />
        </Suspense>
        <StickyBookingButton bookingLink={config.bookingLink} />
      </main>
      <Suspense fallback={null}>
        <Footer bookingLink={config.bookingLink} />
      </Suspense>
    </>
  );
};

export default LandingPage;
