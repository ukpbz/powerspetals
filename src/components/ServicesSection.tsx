import React from 'react';
import { SERVICES } from '../data/floralData';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-[#faf9f5] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-[#c8a45d]/15 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a45d]" />
            Bespoke Floristry Offerings
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#01115b]">
            Tailored Floral Services Across <br />
            <span className="italic font-normal text-[#9b7b32]">West London</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From monumental matrimonial ceremonies to intimate farewell tributes — each commission is uniquely conceptualized, sourced fresh at dawn, and meticulously installed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#c8a45d]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#01115b] text-[#c8a45d] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded shadow">
                    {service.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-[#01115b] text-xs font-bold px-3 py-1 rounded shadow">
                    Starting from {service.startingPrice}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="font-serif text-2xl font-bold text-[#01115b] group-hover:text-[#9b7b32] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs text-[#c8a45d] font-semibold tracking-wider uppercase mt-1">
                    {service.subtitle}
                  </div>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-[#01115b]/10 text-[#01115b] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-[#01115b] bg-slate-50 hover:bg-[#01115b] hover:text-white border border-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>Book Consultation for {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c8a45d] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
