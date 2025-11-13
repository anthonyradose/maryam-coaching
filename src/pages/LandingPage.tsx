import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import SellingPointsSection from "../components/SellingPointsSection";
import WhySection from "../components/WhySection";
import HowToFixSection from "../components/HowToFixSection";
import GoogleReviews from "../components/GoogleReviews";
import AboutMe from "../components/AboutMe";
import FAQSection from "../components/FAQSection";
import { StickyBookingButton } from "../components/StickyBookingButton";
import Footer from "../components/Footer";
import type { CampaignConfig } from "../config/campaigns";

interface LandingPageProps {
  config: CampaignConfig;
}
// Main landing page layout
const LandingPage = ({ config }: LandingPageProps) => {
  return (
    <div>
      <NavBar />
      <HeroSection {...config.hero} />
      <WhySection {...config.why} />
      <HowToFixSection {...config.howToFix} />
      <SellingPointsSection />
      <GoogleReviews />
      <AboutMe />
      <FAQSection />
      <StickyBookingButton />
      <Footer />
    </div>
  );
};

export default LandingPage;
