import React from 'react';
import { Sparkles, Home, ChevronRight, Phone, Calendar, ArrowRight, Heart, Award, Truck } from 'lucide-react';
import { ServicesSection } from '../components/ServicesSection';
import { PageId } from '../components/Navbar';

interface TailoredServicesPageProps {
  onNavigate: (page: PageId, anchor?: string) => void;
  onSelectService: (serviceTitle: string) => void;
}

export const TailoredServicesPage: React.FC<TailoredServicesPageProps> = ({ 
  onNavigate,
  onSelectService 
}) => {
  return (
    <div className="min-h-screen bg-[#faf9f5]">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#01115b] via-[#01115b] to-[#000a2e] text-white pt-12 pb-16 border-b border-[#c8a45d]/30 relative overflow-hidden">
        {/* Ambient subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c8a45d]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6 flex-wrap">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#c8a45d] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <span className="text-[#c8a45d] font-medium">Services</span>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <span className="text-white font-semibold">Tailored Floral Services Across West London</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-gradient-to-r from-[#c8a45d] to-[#e4cc92] rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#01115b]" />
              <span>West London Botanical Artistry</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              Tailored Floral Services Across <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#dfc282]">West London</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              From monumental matrimonial ceremonies to intimate farewell tributes — each commission is uniquely conceptualized, sourced fresh at dawn, and meticulously installed across Chiswick, Ealing, Hammersmith, and Shepherds Bush.
            </p>

            {/* Quick service highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2.5 text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#c8a45d]">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Bespoke Design</div>
                  <div className="text-slate-400">Tailored to your exact vision</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#c8a45d]">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Delivery Van</div>
                  <div className="text-slate-400">Bespoke Flower Delivery van</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#c8a45d]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Chiswick Studio</div>
                  <div className="text-slate-400">Est. 2014 Grove Park Studios</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main 4 Imaged Boxes Section */}
      <ServicesSection onSelectService={onSelectService} />

      {/* Cross-Link Action Banner */}
      <section className="py-16 bg-[#000a2e] text-white border-t border-[#c8a45d]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-gradient-to-r from-[#01115b] to-[#00174d] rounded-3xl p-8 sm:p-12 border border-[#c8a45d]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c8a45d]">
                <Sparkles className="w-3.5 h-3.5" />
                Personalised Stem Customizer
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Would You Like to Calculate an Instant Estimate?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-light">
                Use our interactive floral customizer to select your occasion, stem palettes, and delivery preferences, or contact our Chiswick workshop directly.
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
