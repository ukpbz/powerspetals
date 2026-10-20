import React from 'react';
import { MessageSquare, Phone, Mail, MapPin, Clock, Home, ChevronRight, Sparkles, Truck, CheckCircle2 } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { BUSINESS_INFO } from '../data/floralData';

interface ConnectStudioPageProps {
  onNavigate: (page: 'home' | 'design-vision' | 'seasonal-blooms' | 'connect-studio', anchor?: string) => void;
}

export const ConnectStudioPage: React.FC<ConnectStudioPageProps> = ({ onNavigate }) => {
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
            <span className="text-white font-semibold">Connect With Our Floristry Studio</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-gradient-to-r from-[#c8a45d] to-[#e4cc92] rounded-full mb-4">
              <MessageSquare className="w-3.5 h-3.5 text-[#01115b]" />
              <span>Chiswick Floristry Workshop</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              Connect With Our <span className="italic font-normal text-[#dfc282]">Floristry Studio</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              We welcome private bridal consultations, solemn and heartfelt sympathy commissions, corporate tablescapes, and Piaggio mobile flower van event reservations. Reach Helen and our artisanal florists directly.
            </p>

            {/* Quick contact direct access pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2.5 text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#c8a45d]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Direct Line</div>
                  <a href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`} className="text-[#c8a45d] hover:underline">
                    {BUSINESS_INFO.phonePrimary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#c8a45d]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Grove Park Studios</div>
                  <div className="text-slate-400">Chiswick, London W4 3HR</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#c8a45d]">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Priority Dispatch</div>
                  <div className="text-slate-400">West London W4, W5, W6, W12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Studio Inquiries & Contact Block */}
      <ContactSection />

      {/* Cross-Link Action Banner */}
      <section className="py-16 bg-[#000a2e] text-white border-t border-[#c8a45d]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-gradient-to-r from-[#01115b] to-[#00174d] rounded-3xl p-8 sm:p-12 border border-[#c8a45d]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c8a45d]">
                <Sparkles className="w-3.5 h-3.5" />
                Instant Customizer & Estimator
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Would You Like an Estimate Before Contacting?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-light">
                Our bespoke customizer lets you choose your floral elements, calculate pricing, and attach your specifications straight to your studio consultation request.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={() => onNavigate('design-vision')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-gradient-to-r from-[#c8a45d] to-[#e4cc92] hover:from-[#dfbf79] hover:to-[#f0dcab] rounded-xl shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Design Your Floral Vision</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
