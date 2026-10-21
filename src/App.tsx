/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutAndVan } from './components/AboutAndVan';
import { DeliveryChecker } from './components/DeliveryChecker';
import { Footer } from './components/Footer';
import { ClientLogonModal } from './components/ClientLogonModal';
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
      if (hash.includes('tailored-services') || hash.includes('services')) {
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
        // Handle home anchor jumps (e.g. #about, #delivery)
        const match = hash.match(/^#\/?([a-z0-9_-]+)/);
        if (match && !['services', 'tailored-services', 'seasonal-blooms', 'connect-studio', 'design-vision'].includes(match[1])) {
          setTimeout(() => {
            const el = document.getElementById(match[1]);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, anchor?: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      if (anchor) {
        window.location.hash = `#${anchor}`;
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.hash = `#/services/${page}`;
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

      {/* Navigation with Services menu heading and 4 subpages */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenLogon={() => setIsLogonOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Hero with Authentic Logo Banner & Royal Navy Backdrop */}
            <Hero 
              onOpenConsultation={() => handleNavigate('connect-studio')}
              onExploreServices={() => handleNavigate('tailored-services')}
              onOpenLogon={() => setIsLogonOpen(true)}
            />

            {/* 'A True Chiswick Original, Crafted with Heart & Stem' */}
            <AboutAndVan 
              onOpenConsultation={() => handleNavigate('connect-studio')}
              onOpenDesignVision={() => handleNavigate('design-vision')}
            />

            {/* Interactive UK Postcode Delivery Checker (West London W4, W5, W6, W12) */}
            <DeliveryChecker />
          </>
        )}

        {currentPage === 'tailored-services' && (
          <TailoredServicesPage 
            onNavigate={handleNavigate}
            onSelectService={handleSelectDesign}
          />
        )}

        {currentPage === 'design-vision' && (
          <DesignVisionPage 
            initialDesign={selectedDesign}
            onNavigate={handleNavigate}
            onSubmitInquiry={handleSubmitInquiry}
          />
        )}

        {currentPage === 'seasonal-blooms' && (
          <SeasonalBloomsPage 
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'connect-studio' && (
          <ConnectStudioPage 
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Luxury Footer with Heritage, Copyright & Navigation */}
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
