/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OriginalShowcase } from './components/OriginalShowcase';
import { ServicesSection } from './components/ServicesSection';
import { BespokeEstimator } from './components/BespokeEstimator';
import { PortfolioGallery } from './components/PortfolioGallery';
import { AboutAndVan } from './components/AboutAndVan';
import { DeliveryChecker } from './components/DeliveryChecker';
import { SeasonalCalendar } from './components/SeasonalCalendar';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ClientLogonModal } from './components/ClientLogonModal';

export default function App() {
  const [isLogonOpen, setIsLogonOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<string>('');
  const [inquiryNotification, setInquiryNotification] = useState<string | null>(null);

  const handleOpenConsultation = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePortfolio = () => {
    const portfolioElem = document.getElementById('portfolio');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDesign = (designTitle: string) => {
    setSelectedDesign(designTitle);
    const estimatorElem = document.getElementById('estimator');
    if (estimatorElem) {
      estimatorElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitInquiry = (details: any) => {
    setInquiryNotification(`Inquiry created for ${details.occasion}. Our florists will reach out to ${details.email || details.name}!`);
    setTimeout(() => {
      setInquiryNotification(null);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1b2330] flex flex-col font-sans selection:bg-[#c8a45d]/20 selection:text-[#01125a]">
      {/* Top Notification Toast */}
      {inquiryNotification && (
        <div className="fixed top-20 right-4 z-50 bg-[#01125a] text-white px-5 py-3 rounded-xl border border-[#c8a45d] shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="text-[#c8a45d] text-lg">🌸</span>
          <span className="text-xs font-medium">{inquiryNotification}</span>
          <button 
            onClick={() => setInquiryNotification(null)}
            className="text-slate-400 hover:text-white text-xs ml-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* Navigation */}
      <Navbar 
        onOpenLogon={() => setIsLogonOpen(true)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero with Authentic Logo Banner & Royal Navy Backdrop */}
        <Hero 
          onOpenConsultation={handleOpenConsultation}
          onExplorePortfolio={handleExplorePortfolio}
          onOpenLogon={() => setIsLogonOpen(true)}
        />

        {/* Authentic Original Archive Showcase: Original Powers Petals Designs */}
        <OriginalShowcase 
          onSelectDesign={handleSelectDesign}
        />

        {/* Bespoke Floristry Services (Weddings, Funerals, Events, Piaggio Van) */}
        <ServicesSection 
          onSelectService={(service) => handleSelectDesign(service)}
        />

        {/* Interactive Bespoke Floral Customizer & Price Estimator */}
        <BespokeEstimator 
          initialDesign={selectedDesign}
          onSubmitInquiry={handleSubmitInquiry}
        />

        {/* Curated Portfolio Gallery with Category Tabs & Zoom Lightbox */}
        <PortfolioGallery 
          onSelectDesign={handleSelectDesign}
        />

        {/* The Story & The Iconic Piaggio 3-Wheeler Van */}
        <AboutAndVan 
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Interactive UK Postcode Delivery Checker (West London W4, W5, W6, W12) */}
        <DeliveryChecker />

        {/* Seasonal Bloom Calendar & Florist Conditioning Secrets */}
        <SeasonalCalendar />

        {/* Studio Contact & Direct Consultation Form */}
        <ContactSection />
      </main>

      {/* Luxury Footer with Heritage & Copyright */}
      <Footer 
        onOpenLogon={() => setIsLogonOpen(true)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Client & Event Logon Portal Modal */}
      <ClientLogonModal 
        isOpen={isLogonOpen}
        onClose={() => setIsLogonOpen(false)}
      />
    </div>
  );
}
