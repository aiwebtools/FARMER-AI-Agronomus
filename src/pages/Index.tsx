
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import DisclaimerSection from '../components/DisclaimerSection';
import Footer from '../components/Footer';
import DisclaimerPopup from '../components/DisclaimerPopup';

const Index = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Check if the user has already agreed to the disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    if (!hasAgreed) {
      setShowDisclaimer(true);
    }
  }, []);
  
  const handleDisclaimerAccept = () => {
    // Save to localStorage that the user has agreed
    localStorage.setItem('disclaimerAgreed', 'true');
    setShowDisclaimer(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-glow-conic opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-glow-conic opacity-5 blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <TestimonialsSection />
          <FAQSection />
          <DisclaimerSection />
        </main>
        <Footer />
      </div>
      
      {/* Disclaimer Popup */}
      {showDisclaimer && <DisclaimerPopup onAccept={handleDisclaimerAccept} />}
    </div>
  );
};

export default Index;
