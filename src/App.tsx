/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { ClientLogonModal } from './components/ClientLogonModal';
import { ChiswickOriginalPage } from './pages/ChiswickOriginalPage';
import { DeliveryAreasPage } from './pages/DeliveryAreasPage';
import { TailoredServicesPage } from './pages/TailoredServicesPage';
import { SeasonalBloomsPage } from './pages/SeasonalBloomsPage';
import { ConnectStudioPage } from './pages/ConnectStudioPage';
import { DesignVisionPage } from './pages/DesignVisionPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isLogonOpen, setIsLogonOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<string>('');
  const [inquiryNotification, setInquiryNotification] = useState<string | null>(null);

  // Synchronize routing with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('chiswick-original') || hash.includes('about')) {
        setCurrentPage('chiswick-original');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('delivery-areas') || hash.includes('delivery')) {
        setCurrentPage('delivery-areas');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('tailored-services') || hash.includes('services')) {
        setCurrentPage('tailored-services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('seasonal-blooms') || hash.includes('seasonal')) {
        setCurrentPage('seasonal-blooms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('connect-studio') || hash.includes('contact')) {
        setCurrentPage('connect-studio');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('design-vision') || hash.includes('estimator')) {
        setCurrentPage('design-vision');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, anchor?: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = `#/${page}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectDesign = (designTitle: string) => {
    setSelectedDesign(designTitle);
    handleNavigate('design-vision');
  };

  const handleSubmitInquiry = (details: any) => {
    setInquiryNotification(`Inquiry created for ${details.occasion}. Our Chiswick florists will reach out to ${details.email || details.name || 'you'}!`);
    setTimeout(() => {
      setInquiryNotification(null);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1b2330] flex flex-col font-sans selection:bg-[#c8a45d]/20 selection:text-[#01115b]">
      {/* Top Notification Toast */}
      {inquiryNotification && (
        <div className="fixed top-24 right-4 z-50 bg-[#01115b] text-white px-5 py-3 rounded-xl border border-[#c8a45d] shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="text-[#c8a45d] text-lg">🌸</span>
          <span className="text-xs font-medium">{inquiryNotification}</span>
          <button 
            onClick={() => setInquiryNotification(null)}
            className="text-slate-400 hover:text-white text-xs ml-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenLogon={() => setIsLogonOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Hero 
            onOpenConsultation={() => handleNavigate('connect-studio')}
            onExploreServices={() => handleNavigate('tailored-services')}
            onOpenLogon={() => setIsLogonOpen(true)}
          />
        )}

        {/* Dedicated Page: 'A True Chiswick Original, Crafted with Heart & Stem' */}
        {currentPage === 'chiswick-original' && (
          <ChiswickOriginalPage 
            onNavigate={handleNavigate}
          />
        )}

        {/* Dedicated Page: 'Dedicated Postcode Coverage' */}
        {currentPage === 'delivery-areas' && (
          <DeliveryAreasPage 
            onNavigate={handleNavigate}
          />
        )}

        {/* Dedicated Page: 'Tailored Floral Services Across West London' */}
        {currentPage === 'tailored-services' && (
          <TailoredServicesPage 
            onNavigate={handleNavigate}
            onSelectService={handleSelectDesign}
          />
        )}

        {/* Dedicated Page: 'Design Your Floral Vision' */}
        {currentPage === 'design-vision' && (
          <DesignVisionPage 
            initialDesign={selectedDesign}
            onNavigate={handleNavigate}
            onSubmitInquiry={handleSubmitInquiry}
          />
        )}

        {/* Dedicated Page: 'Seasonal Blooms & Florist Conditioning' */}
        {currentPage === 'seasonal-blooms' && (
          <SeasonalBloomsPage 
            onNavigate={handleNavigate}
          />
        )}

        {/* Dedicated Page: 'Connect With Our Floristry Studio' */}
        {currentPage === 'connect-studio' && (
          <ConnectStudioPage 
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Luxury Footer with Heritage, Copyright & Universal Navigation (Exact same across all pages) */}
      <Footer 
        onOpenLogon={() => setIsLogonOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Client & Event Logon Portal Modal */}
      <ClientLogonModal 
        isOpen={isLogonOpen}
        onClose={() => setIsLogonOpen(false)}
      />
    </div>
  );
}
