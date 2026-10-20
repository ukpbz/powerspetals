import React from 'react';
import { Phone, Mail, MapPin, Heart, ArrowUp, User, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, ORIGINAL_ASSETS } from '../data/floralData';

interface FooterProps {
  onOpenLogon: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLogon, onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#01115b] to-[#000a2e] text-white border-t border-[#c8a45d]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Logo & Callout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="flex items-center">
              <img
                src={ORIGINAL_ASSETS.logoBanner}
                alt="Power's Petals Floral Designs Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold tracking-wide text-white">
                Power's Petals Floral Design
              </h3>
              <p className="text-xs text-[#c8a45d] tracking-widest uppercase font-medium mt-0.5">
                West London · Est. 2014
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenLogon}
              className="px-4 py-2 text-xs font-semibold text-[#c8a45d] border border-[#c8a45d]/40 rounded-lg hover:bg-[#c8a45d]/10 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <User className="w-3.5 h-3.5" />
              <span>Client & Event Logon</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#01115b] bg-gradient-to-r from-[#c8a45d] to-[#e4cc92] rounded-lg shadow hover:opacity-95 transition-opacity cursor-pointer"
            >
              Book Consultation
            </button>
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs text-slate-300">
          
          {/* Col 1: Bespoke Services */}
          <div>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4 text-[#e4cc92]">
              Floral Services
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-[#c8a45d] transition-colors">Luxury Weddings & Bridal</a></li>
              <li><a href="#services" className="hover:text-[#c8a45d] transition-colors">Dignified Sympathy & Memorials</a></li>
              <li><a href="#services" className="hover:text-[#c8a45d] transition-colors">Gala & Private Dining Tablescapes</a></li>
              <li><a href="#piaggio-van" className="hover:text-[#c8a45d] transition-colors">The Piaggio Mobile Flower Van</a></li>
              <li><a href="#estimator" className="hover:text-[#c8a45d] transition-colors">Interactive Floral Estimator</a></li>
            </ul>
          </div>

          {/* Col 2: Regional Delivery */}
          <div>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4 text-[#e4cc92]">
              Delivery Corridors
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#delivery" className="hover:text-[#c8a45d] transition-colors">Chiswick W4 & Grove Park</a></li>
              <li><a href="#delivery" className="hover:text-[#c8a45d] transition-colors">Ealing & Ealing Common (W5)</a></li>
              <li><a href="#delivery" className="hover:text-[#c8a45d] transition-colors">Hammersmith & Ravenscourt (W6)</a></li>
              <li><a href="#delivery" className="hover:text-[#c8a45d] transition-colors">Shepherds Bush & White City (W12)</a></li>
              <li><a href="#delivery" className="hover:text-[#c8a45d] transition-colors">Postcode Coverage Checker</a></li>
            </ul>
          </div>

          {/* Col 3: Studio & Heritage */}
          <div>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4 text-[#e4cc92]">
              Studio & Heritage
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#heritage" className="hover:text-[#c8a45d] transition-colors">Original powerspetals.co.uk Works</a></li>
              <li><a href="#heritage" className="hover:text-[#c8a45d] transition-colors">Signature Celebration Ribbon Bouquets</a></li>
              <li><a href="#piaggio-van" className="hover:text-[#c8a45d] transition-colors">Our Piaggio 50 History</a></li>
              <li><a href="#contact" className="hover:text-[#c8a45d] transition-colors">Grove Park Studios Chiswick</a></li>
              <li><button onClick={onOpenLogon} className="hover:text-[#c8a45d] transition-colors text-left">Track Active Booking Portal</button></li>
            </ul>
          </div>

          {/* Col 4: Direct Contacts */}
          <div>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4 text-[#e4cc92]">
              Direct Inquiries
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c8a45d]" />
                <a href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`} className="font-bold text-white hover:text-[#c8a45d]">
                  {BUSINESS_INFO.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c8a45d]" />
                <span className="text-slate-300">{BUSINESS_INFO.phoneSecondary}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c8a45d]" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-300 hover:text-[#c8a45d]">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#c8a45d] flex-shrink-0 mt-0.5" />
                <span>Grove Park Studios, 188 Sutton Court Rd, Chiswick, London W4 3HR</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Copyright Power's Petals Floral Design 2014–2026. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Bespoke Floral Design · West London</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
