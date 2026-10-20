import React, { useState } from 'react';
import { Phone, Mail, User, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO, ORIGINAL_ASSETS } from '../data/floralData';

interface NavbarProps {
  onOpenLogon: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLogon, onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#01115b]/95 backdrop-blur-md border-b border-[#c8a45d]/20 text-white shadow-lg transition-all duration-300">
      {/* Top utility ribbon */}
      <div className="bg-[#000a2e] border-b border-[#c8a45d]/10 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-slate-300">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-[#c8a45d] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#c8a45d]" />
              West London · Chiswick
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">Bespoke Floral Design for Weddings, Sympathy & Events</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 text-[#c8a45d] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Tel: {BUSINESS_INFO.phonePrimary}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <a 
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hidden sm:flex items-center gap-1 hover:text-[#c8a45d] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-12 w-auto flex items-center justify-center">
            <img 
              src={ORIGINAL_ASSETS.logoBanner} 
              alt="Power's Petals Logo" 
              className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-wider text-white group-hover:text-[#c8a45d] transition-colors">
              Power's Petals
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#c8a45d] -mt-1 font-medium">
              Floral Designs · Est. 2014
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
          <a href="#heritage" className="hover:text-[#c8a45d] transition-colors py-1">
            Original Heritage
          </a>
          <a href="#services" className="hover:text-[#c8a45d] transition-colors py-1">
            Bespoke Services
          </a>
          <a href="#portfolio" className="hover:text-[#c8a45d] transition-colors py-1">
            Portfolio
          </a>
          <a href="#piaggio-van" className="hover:text-[#c8a45d] transition-colors py-1 flex items-center gap-1">
            <span>Our Piaggio Van</span>
          </a>
          <a href="#estimator" className="hover:text-[#c8a45d] transition-colors py-1 flex items-center gap-1 text-[#e8c682]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Floral Estimator</span>
          </a>
          <a href="#delivery" className="hover:text-[#c8a45d] transition-colors py-1">
            Delivery Areas
          </a>
          <a href="#contact" className="hover:text-[#c8a45d] transition-colors py-1">
            Contact
          </a>
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-3">
          {/* Client Logon button */}
          <button
            onClick={onOpenLogon}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#c8a45d] border border-[#c8a45d]/40 rounded hover:bg-[#c8a45d]/10 hover:border-[#c8a45d] transition-all cursor-pointer shadow-sm"
            title="Access Client & Wedding Portal"
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Client</span> Logon
          </button>

          {/* Book Consultation CTA */}
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-gradient-to-r from-[#c8a45d] to-[#e4cc92] hover:from-[#dfbf79] hover:to-[#f0dcab] rounded shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Book Consultation</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000a2e] border-b border-[#c8a45d]/30 px-6 py-5 space-y-4 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-base">
            <a 
              href="#heritage" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#c8a45d] py-1 border-b border-slate-800"
            >
              Original Heritage
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#c8a45d] py-1 border-b border-slate-800"
            >
              Bespoke Services (Weddings & Funerals)
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#c8a45d] py-1 border-b border-slate-800"
            >
              Floral Portfolio Gallery
            </a>
            <a 
              href="#piaggio-van" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#c8a45d] py-1 border-b border-slate-800"
            >
              Our Iconic Piaggio Van
            </a>
            <a 
              href="#estimator" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#c8a45d] hover:text-white py-1 border-b border-slate-800 flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Floral Price & Stem Estimator</span>
            </a>
            <a 
              href="#delivery" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#c8a45d] py-1 border-b border-slate-800"
            >
              Delivery Coverage (W4, W5, W6, W12)
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#c8a45d] py-1"
            >
              Studio Contact & Enquiries
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-[#01115b] bg-gradient-to-r from-[#c8a45d] to-[#e4cc92] rounded shadow"
            >
              Book Bespoke Consultation
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogon();
              }}
              className="w-full py-2.5 text-center text-sm font-medium text-[#c8a45d] border border-[#c8a45d]/40 rounded hover:bg-[#c8a45d]/10"
            >
              Client & Event Logon
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
