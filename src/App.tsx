import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PricingSection } from './components/PricingSection';
import { SpeedCalculator } from './components/SpeedCalculator';
import { CoverageChecker } from './components/CoverageChecker';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { PaymentModal } from './components/PaymentModal';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>();

  const handleOpenModal = (packageName?: string) => {
    setSelectedPackage(packageName);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="app-root">
      {/* Navigation Header */}
      <Header onOpenModal={handleOpenModal} />

      <main>
        {/* Hero Section */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Features Section */}
        <Features />

        {/* Pricing Section (Zama Fast vs Zama Reguler) */}
        <PricingSection onOpenModal={handleOpenModal} />

        {/* Speed Calculator Section */}
        <SpeedCalculator onOpenModal={handleOpenModal} />

        {/* Coverage Area Checker */}
        <CoverageChecker onOpenModal={handleOpenModal} />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* WhatsApp Quick Floating Action */}
      <WhatsAppFloat />

      {/* Duitku Payment Modal Dialog */}
      <PaymentModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        selectedPackageName={selectedPackage}
      />
    </div>
  );
}

export default App;
