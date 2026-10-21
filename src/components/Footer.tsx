import React from 'react';
import { Phone, Mail, MapPin, Heart, ArrowUp, User, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, ORIGINAL_ASSETS } from '../data/floralData';

interface FooterProps {
  onOpenLogon: () => void;
  onNavigate: (page: 'home' | 'tailored-services' | 'design-vision' | 'seasonal-blooms' | 'connect-studio', anchor?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenLogon, 
  onNavigate
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#01115b] to-[#000a2e] text-white border-t border-[#c8a45d]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Logo & Callout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center cursor-pointer focus:outline-none"
            >
              <img
                src={ORIGINAL_ASSETS.logoBanner}
                alt="Power's Petals Floral Designs Logo"
                className="h-16 w-auto object-contain hover:scale-105 transition-transform"
              />
            </button>
            <div>
              <h3 className="font-serif text-2xl font-bold tracking-wide text-white">
                Power's Petals
              </h3>
              <p className="text-xs text-[#c8a45d] uppercase tracking-widest font-medium">
                West London Botanical Artistry · Chiswick W4
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('connect-studio')}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-[#c8a45d] hover:bg-[#dfc282] rounded-lg transition-colors cursor-pointer"
            >
              Connect With Studio
            </button>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs text-slate-300">
          
          {/* Col 1: Bespoke Services */}
          <div>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4 text-[#e4cc92]">
              Services & Studio
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  onClick={() => onNavigate('tailored-services' as any)} 
                  className="hover:text-[#c8a45d] transition-colors text-left cursor-pointer font-semibold text-[#e4cc92]"
                >
                  Tailored Floral Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('design-vision')} 
                  className="hover:text-[#c8a45d] transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#c8a45d]" />
                  <span>Design Your Floral Vision</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('seasonal-blooms')} 
                  className="hover:text-[#c8a45d] transition-colors text-left cursor-pointer"
                >
                  Seasonal Blooms & Conditioning
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('connect-studio')} 
                  className="hover:text-[#c8a45d] transition-colors text-left cursor-pointer"
                >
                  Connect With Our Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Regional Delivery */}
          <div>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4 text-[#e4cc92]">
              Delivery Corridors
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onNavigate('home', 'delivery')} className="hover:text-[#c8a45d] transition-colors text-left cursor-pointer">
                  Chiswick W4 & Grove Park
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'delivery')} className="hover:text-[#c8a45d] transition-colors text-left cursor-pointer">
                  Ealing & Ealing Common (W5)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'delivery')} className="hover:text-[#c8a45d] transition-colors text-left cursor-pointer">
                  Hammersmith & Ravenscourt (W6)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'delivery')} className="hover:text-[#c8a45d] transition-colors text-left cursor-pointer">
                  Shepherds Bush & White City (W12)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'delivery')} className="hover:text-[#c8a45d] transition-colors text-left cursor-pointer">
                  Postcode Coverage Checker
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Studio & Heritage */}
          <div>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4 text-[#e4cc92]">
              Studio & Heritage
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onNavigate('home', 'about')} className="hover:text-[#c8a45d] transition-colors text-left cursor-pointer">
                  A True Chiswick Original Story
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'about')} className="hover:text-[#c8a45d] transition-colors text-left cursor-pointer">
                  The Bespoke Flower Delivery Van
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('connect-studio')} className="hover:text-[#c8a45d] transition-colors text-left cursor-pointer">
                  Grove Park Studios Chiswick
                </button>
              </li>
              <li>
                <button onClick={onOpenLogon} className="hover:text-[#c8a45d] transition-colors text-left cursor-pointer">
                  Track Active Booking Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contacts */}
          <div>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4 text-[#e4cc92]">
              Direct Contacts
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c8a45d]" />
                <a href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`} className="font-bold text-white hover:text-[#c8a45d]">
                  {BUSINESS_INFO.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-300">Landline: {BUSINESS_INFO.phoneSecondary}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c8a45d]" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-300 hover:text-white">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c8a45d] mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 leading-tight">
                  {BUSINESS_INFO.studioAddress}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Power's Petals. All rights reserved. Handcrafted in Chiswick, West London.</p>
          <div className="flex items-center gap-6">
            <span>Specialist Wedding & Funeral Floristry</span>
            <span>·</span>
            <span>Bespoke Flower Delivery Van Hire</span>
            <span>·</span>
            <span className="text-[#c8a45d]">British Sustainable Blooms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
