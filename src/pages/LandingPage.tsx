import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import Banner from '../components/Banner';
import SellingPointsBanner from '../components/SellingPointsBanner';
import WhySection from '../components/WhySection';
import HowToFixSection from '../components/HowToFixSection';
import GoogleReviews from '../components/GoogleReviews';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

// Main landing page layout
const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Banner />
      <SellingPointsBanner />
      <WhySection />
      <HowToFixSection />
      <GoogleReviews />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
