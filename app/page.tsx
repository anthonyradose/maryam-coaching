import Header from './components/Header'
import HeroSection from './components/HeroSection'
import WhySection from './components/WhySection'
import HowToFixSection from './components/HowToFixSection'
import ReviewsSection from './components/ReviewsSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhySection />
      <HowToFixSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
