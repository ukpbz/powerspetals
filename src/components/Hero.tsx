import React from 'react';
import { Sparkles, Calendar, ArrowRight, Phone, Award, Truck } from 'lucide-react';
import { ORIGINAL_ASSETS, BUSINESS_INFO } from '../data/floralData';

interface HeroProps {
  onOpenConsultation: () => void;
  onExplorePortfolio: () => void;
  onOpenLogon: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExplorePortfolio, onOpenLogon }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#01125a] via-[#011566] to-[#000d3d] text-white pt-10 pb-20 lg:pt-14 lg:pb-28">
      {/* Subtle floral background glow & ambient pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#c8a45d_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Decorative ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c8a45d]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2d6a4f]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* The Authentic Hand-Crafted Logo Banner (Unframed) */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <div className="max-w-4xl w-full mx-auto px-2">
            <img 
              src={ORIGINAL_ASSETS.logoBanner} 
              alt="Power's Petals - Floral Designs Original Banner" 
              className="w-full h-auto max-h-52 sm:max-h-72 object-contain mx-auto"
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-[#c8a45d] font-semibold">
            <span className="w-8 h-[1px] bg-[#c8a45d]/40" />
            <span>West London</span>
            <span className="w-8 h-[1px] bg-[#c8a45d]/40" />
          </div>
        </div>

        {/* Hero Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
            Bespoke Floral Artistry for <span className="italic font-normal text-[#dfc282]">Life’s Defining Moments</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Handcrafted luxury bridal floristry, solemn and heartfelt sympathy tributes, and immersive venue styling. Delivered across West London in our signature custom Piaggio mobile flower van.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#01125a] bg-gradient-to-r from-[#c8a45d] to-[#e4cc92] hover:from-[#dfbf79] hover:to-[#f0dcab] rounded-lg shadow-xl shadow-amber-950/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Bespoke Consultation</span>
            </button>

            <button
              onClick={onExplorePortfolio}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg backdrop-blur-sm transition-all cursor-pointer"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4 text-[#c8a45d]" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-[#c8a45d] hover:text-white border border-[#c8a45d]/30 hover:border-[#c8a45d] rounded-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>{BUSINESS_INFO.phonePrimary}</span>
            </a>
          </div>

          {/* Key Trust Highlights & Client Portal Quick Link */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="font-serif text-2xl font-bold text-[#c8a45d]">Est. 2014</div>
              <div className="text-xs text-slate-300 mt-0.5">Over a Decade of Artistry</div>
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="font-serif text-2xl font-bold text-[#c8a45d]">100% Bespoke</div>
              <div className="text-xs text-slate-300 mt-0.5">Custom Seasonal Stems</div>
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="font-serif text-2xl font-bold text-[#c8a45d]">Piaggio Van</div>
              <div className="text-xs text-slate-300 mt-0.5">Iconic Mobile Delivery Van</div>
            </div>

            <div 
              onClick={onOpenLogon}
              className="p-3 rounded-lg bg-gradient-to-br from-[#c8a45d]/20 to-transparent border border-[#c8a45d]/40 backdrop-blur-sm cursor-pointer hover:border-[#c8a45d] transition-all group"
            >
              <div className="flex items-center justify-center gap-1.5 font-serif text-lg font-bold text-[#e4cc92] group-hover:text-white">
                <Sparkles className="w-4 h-4 text-[#c8a45d]" />
                Client Portal
              </div>
              <div className="text-xs text-slate-300 mt-0.5">Log In & Track Booking &rarr;</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
