import React from 'react';
import { Home, ChevronRight, MapPin, Truck, Clock, ShieldCheck, Phone, Sparkles } from 'lucide-react';
import { DeliveryChecker } from '../components/DeliveryChecker';
import { PageId } from '../components/Navbar';
import { BUSINESS_INFO } from '../data/floralData';

interface DeliveryAreasPageProps {
  onNavigate: (page: PageId, anchor?: string) => void;
}

export const DeliveryAreasPage: React.FC<DeliveryAreasPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#faf9f5]">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#01115b] via-[#01115b] to-[#000a2e] text-white pt-12 pb-16 border-b border-[#c8a45d]/30 relative overflow-hidden">
        {/* Ambient subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c8a45d]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-300 mb-6 flex-wrap">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#c8a45d] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <span className="text-white font-semibold">Delivery Areas</span>
          </nav>

          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-gradient-to-r from-[#c8a45d] to-[#e4cc92] rounded-full mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#01115b]" />
              <span>West London Hand-Delivered Freshness</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              Dedicated Postcode Coverage: <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#dfc282]">W4 · W5 · W6 · W12</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              To guarantee that every petal arrives in absolute prime condition, our florist dispatches and Bespoke Flower Delivery van operate exclusively across West London postcodes W4, W5, W6, and W12.
            </p>

            {/* Quick delivery highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10 text-xs w-full text-left">
              <div className="flex items-center gap-2.5 text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#c8a45d] flex-shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Delivery Van</div>
                  <div className="text-slate-400">Bespoke Flower Delivery van</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#c8a45d] flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Same-Day W4</div>
                  <div className="text-slate-400">Order by 11am for Chiswick</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#c8a45d] flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">White-Glove Care</div>
                  <div className="text-slate-400">Hand-presented in water vessels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section: Dedicated Postcode Coverage (DeliveryChecker) */}
      <DeliveryChecker />

      {/* Cross-Link Action Banner */}
      <section className="py-16 bg-[#000a2e] text-white border-t border-[#c8a45d]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-gradient-to-r from-[#01115b] to-[#00174d] rounded-3xl p-8 sm:p-12 border border-[#c8a45d]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c8a45d]">
                <Sparkles className="w-3.5 h-3.5" />
                Ready to Order or Inquire?
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Design Your Arrangement or Connect With Our Studio
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-light">
                Use our interactive customizer for instant estimates including van dispatch, or speak with Helen and our Chiswick team directly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('design-vision')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-gradient-to-r from-[#c8a45d] to-[#e4cc92] hover:from-[#dfbf79] hover:to-[#f0dcab] rounded-xl shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Design Your Floral Vision</span>
              </button>

              <button
                onClick={() => onNavigate('connect-studio')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#c8a45d]" />
                <span>Connect With Studio</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
