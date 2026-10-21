import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, User, Menu, X, Sparkles, MapPin, ChevronDown, Calendar, MessageSquare, ArrowRight, Layers, Calculator } from 'lucide-react';
import { BUSINESS_INFO, ORIGINAL_ASSETS } from '../data/floralData';

export type PageId = 'home' | 'tailored-services' | 'design-vision' | 'seasonal-blooms' | 'connect-studio';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenLogon: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage,
  onNavigate,
  onOpenLogon
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServicesActive = currentPage === 'tailored-services' || currentPage === 'design-vision' || currentPage === 'seasonal-blooms' || currentPage === 'connect-studio';

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
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
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
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
          <button 
            onClick={() => onNavigate('home', 'about')} 
            className="hover:text-[#c8a45d] transition-colors py-1 cursor-pointer"
          >
            Chiswick Original
          </button>

          {/* Services Dropdown Menu Heading */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <button 
              onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
              className={`flex items-center gap-1.5 py-2 font-medium transition-colors cursor-pointer ${
                isServicesActive ? 'text-[#c8a45d]' : 'text-slate-200 hover:text-[#c8a45d]'
              }`}
              aria-haspopup="true"
              aria-expanded={servicesMenuOpen}
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesMenuOpen ? 'rotate-180 text-[#c8a45d]' : 'text-slate-400'}`} />
            </button>

            {/* Dropdown Menu Overlay */}
            {servicesMenuOpen && (
              <div className="absolute top-full left-0 w-92 bg-[#000a2e]/98 backdrop-blur-xl border border-[#c8a45d]/40 rounded-2xl shadow-2xl py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-[#c8a45d] border-b border-white/10 mb-1 flex items-center justify-between">
                  <span>Services & Studio Pages</span>
                  <span className="text-slate-400 font-normal">Chiswick W4</span>
                </div>

                {/* 1. Tailored Floral Services Across West London */}
                <button
                  onClick={() => {
                    setServicesMenuOpen(false);
                    onNavigate('tailored-services');
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-start gap-3 group cursor-pointer ${
                    currentPage === 'tailored-services' ? 'bg-white/10 border-l-2 border-[#c8a45d]' : ''
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#c8a45d]/20 text-[#c8a45d] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#c8a45d] transition-colors flex items-center gap-1.5">
                      <span>Tailored Floral Services Across West London</span>
                    </div>
                    <div className="text-xs text-slate-300 font-light mt-0.5">
                      Weddings, Sympathy, Dining & Delivery Van (4 Core Offerings)
                    </div>
                  </div>
                </button>

                {/* 2. Design Your Floral Vision */}
                <button
                  onClick={() => {
                    setServicesMenuOpen(false);
                    onNavigate('design-vision');
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-start gap-3 group cursor-pointer ${
                    currentPage === 'design-vision' ? 'bg-white/10 border-l-2 border-[#c8a45d]' : ''
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#c8a45d]/20 text-[#c8a45d] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#c8a45d] transition-colors flex items-center gap-1.5">
                      <span>Design Your Floral Vision</span>
                      <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-[#c8a45d] text-[#01115b] rounded">Customizer</span>
                    </div>
                    <div className="text-xs text-slate-300 font-light mt-0.5">
                      Interactive arrangement customizer & live stem estimator
                    </div>
                  </div>
                </button>

                {/* 3. Seasonal Blooms & Florist Conditioning */}
                <button
                  onClick={() => {
                    setServicesMenuOpen(false);
                    onNavigate('seasonal-blooms');
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-start gap-3 group cursor-pointer ${
                    currentPage === 'seasonal-blooms' ? 'bg-white/10 border-l-2 border-[#c8a45d]' : ''
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#c8a45d]/20 text-[#c8a45d] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#c8a45d] transition-colors">
                      Seasonal Blooms & Florist Conditioning
                    </div>
                    <div className="text-xs text-slate-300 font-light mt-0.5">
                      English & European bloom calendar & florist care secrets
                    </div>
                  </div>
                </button>

                {/* 4. Connect With Our Floristry Studio */}
                <button
                  onClick={() => {
                    setServicesMenuOpen(false);
                    onNavigate('connect-studio');
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-start gap-3 group cursor-pointer ${
                    currentPage === 'connect-studio' ? 'bg-white/10 border-l-2 border-[#c8a45d]' : ''
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#c8a45d]/20 text-[#c8a45d] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#c8a45d] transition-colors">
                      Connect With Our Floristry Studio
                    </div>
                    <div className="text-xs text-slate-300 font-light mt-0.5">
                      Direct telephone lines, consultations & Grove Park workshop
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>

          <button 
            onClick={() => onNavigate('home', 'delivery')} 
            className="hover:text-[#c8a45d] transition-colors py-1 cursor-pointer"
          >
            Delivery Areas
          </button>
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

          {/* Book Consultation CTA -> routes to Connect Studio */}
          <button
            onClick={() => onNavigate('connect-studio')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-gradient-to-r from-[#c8a45d] to-[#e4cc92] hover:from-[#dfbf79] hover:to-[#f0dcab] rounded shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Book Consultation</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded focus:outline-none cursor-pointer"
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
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('home', 'about');
              }}
              className="text-left text-slate-200 hover:text-[#c8a45d] py-1 border-b border-slate-800 cursor-pointer"
            >
              Chiswick Original & Story
            </button>

            {/* Mobile Services Accordion */}
            <div className="border-b border-slate-800 py-1">
              <button
                onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                className="w-full flex items-center justify-between text-slate-200 hover:text-[#c8a45d] py-1 font-semibold cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <span className={isServicesActive ? 'text-[#c8a45d]' : ''}>Services</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#c8a45d]/20 text-[#c8a45d] px-2 py-0.5 rounded">
                    4 Pages
                  </span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesExpanded ? 'rotate-180 text-[#c8a45d]' : 'text-slate-400'}`} />
              </button>

              {mobileServicesExpanded && (
                <div className="pl-2 pt-2 pb-1 space-y-2 bg-white/5 rounded-xl my-2 border border-white/10">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate('tailored-services');
                    }}
                    className={`w-full text-left py-2 px-3 text-sm font-medium rounded-lg flex items-center gap-2.5 cursor-pointer ${
                      currentPage === 'tailored-services' ? 'bg-[#c8a45d]/20 text-[#c8a45d]' : 'text-slate-200 hover:text-[#c8a45d]'
                    }`}
                  >
                    <Layers className="w-4 h-4 text-[#c8a45d]" />
                    <span>Tailored Floral Services Across West London</span>
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate('design-vision');
                    }}
                    className={`w-full text-left py-2 px-3 text-sm font-medium rounded-lg flex items-center gap-2.5 cursor-pointer ${
                      currentPage === 'design-vision' ? 'bg-[#c8a45d]/20 text-[#c8a45d]' : 'text-[#e8c682] hover:text-white'
                    }`}
                  >
                    <Calculator className="w-4 h-4 text-[#c8a45d]" />
                    <span>Design Your Floral Vision</span>
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate('seasonal-blooms');
                    }}
                    className={`w-full text-left py-2 px-3 text-sm font-medium rounded-lg flex items-center gap-2.5 cursor-pointer ${
                      currentPage === 'seasonal-blooms' ? 'bg-[#c8a45d]/20 text-[#c8a45d]' : 'text-slate-200 hover:text-[#c8a45d]'
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-[#c8a45d]" />
                    <span>Seasonal Blooms & Florist Conditioning</span>
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate('connect-studio');
                    }}
                    className={`w-full text-left py-2 px-3 text-sm font-medium rounded-lg flex items-center gap-2.5 cursor-pointer ${
                      currentPage === 'connect-studio' ? 'bg-[#c8a45d]/20 text-[#c8a45d]' : 'text-slate-200 hover:text-[#c8a45d]'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 text-[#c8a45d]" />
                    <span>Connect With Our Floristry Studio</span>
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('home', 'delivery');
              }}
              className="text-left text-slate-200 hover:text-[#c8a45d] py-1 border-b border-slate-800 cursor-pointer"
            >
              Delivery Coverage (W4, W5, W6, W12)
            </button>

            {/* Mobile CTAs */}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('connect-studio');
                }}
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-gradient-to-r from-[#c8a45d] to-[#e4cc92] rounded-lg text-center shadow-md cursor-pointer"
              >
                Book Studio Consultation
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogon();
                }}
                className="w-full py-2.5 px-4 text-xs font-medium text-slate-300 border border-slate-700 rounded-lg text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <User className="w-4 h-4 text-[#c8a45d]" />
                <span>Client & Event Logon</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
