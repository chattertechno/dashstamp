// COMPONENTS ===============================
import {
  FAQsSection,
  FeaturesSection,
  HeroSection,
  PartnersSection,
  SecureSection,
  TestimonialsSection,
  VideoSection,
  WhyDashStampSection,
} from "./components";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

// =========================================
// HOME PAGE TEMPLATE ======================
// =========================================
export default function Home() {
  // RETURN =================================
  return (
    <main className="">
      <main className="app-container">
        <Header />
      </main>
      <HeroSection />
      <div className="app-container">
        <PartnersSection />
        <VideoSection />
        <FeaturesSection />
      </div>
      <div className="bg-[#D6D26B] py-16 md:py-28">
        <WhyDashStampSection />
        <SecureSection />
      </div>
      <TestimonialsSection />
      <FAQsSection />
      <Footer />
    </main>
  );
}
