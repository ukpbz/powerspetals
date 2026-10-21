import React from 'react';
import { Truck, Award, HeartHandshake, Leaf, Phone } from 'lucide-react';
import { ORIGINAL_ASSETS, BUSINESS_INFO } from '../data/floralData';

interface AboutAndVanProps {
  onOpenConsultation: () => void;
  onOpenDesignVision?: () => void;
}

export const AboutAndVan: React.FC<AboutAndVanProps> = ({ onOpenConsultation, onOpenDesignVision }) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200 overflow-hidden relative">
      <div id="piaggio-van" className="absolute -top-24" />
      <div id="heritage" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image & Van Presentation (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#01115b]/20 shadow-2xl bg-[#01115b] group">
              <img
                src={ORIGINAL_ASSETS.piaggioTruck}
                alt="Power's Petals Iconic Bespoke Flower Delivery Van in Chiswick"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[#01115b] text-[#c8a45d] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded shadow">
                Chiswick W4 Station & Studio
              </div>
              <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-[#01115b]/90 backdrop-blur-sm border border-[#c8a45d]/30 text-white text-xs">
                <div className="font-serif font-bold text-sm text-[#e4cc92]">The Bespoke Flower Delivery Van</div>
                <div className="text-slate-300 text-[11px] mt-0.5">
                  Hand-painted turquoise watering can emblem & climate-regulated floral bed
                </div>
              </div>
            </div>

            {/* Decorative background accent badge */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 p-4 rounded-2xl bg-[#faf9f5] border border-[#c8a45d]/40 shadow-xl max-w-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-[#01115b] text-white flex items-center justify-center font-bold font-serif text-lg">
                  10+
                </div>
                <div>
                  <div className="text-xs font-bold text-[#01115b]">Years Delivering Joy</div>
                  <div className="text-[11px] text-slate-500">Across West London</div>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Philosophy Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-[#c8a45d]/15 rounded-full">
              <Truck className="w-3.5 h-3.5 text-[#c8a45d]" />
              Our Iconic Bespoke Flower Delivery Van & Studio Story
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#01115b] leading-tight">
              A True Chiswick Original, <br />
              <span className="italic font-normal text-[#9b7b32]">Crafted with Heart & Stem</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              <strong>From the Stock Market to the Flower Market.</strong> Powers Petals was the life-long dream of founder Helen, whose career in the London Stock Market spanned 20 years before re-training at the prestigious <em>Judith Blacklock Flower School</em> in Knightsbridge, London. In 2014, she established our studio at Grove Park Studios, Sutton Court Road in Chiswick.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our signature midnight blue <strong>Bespoke Flower Delivery van</strong> quickly became a cherished local landmark. Originally spotted bringing vibrant blooms to Chiswick Station, it now hand-delivers bespoke floral commissions across all of West London, bringing bridal arrangements in pristine condition, creating unforgettable event photo moments, and honoring heartfelt farewell tributes with utmost reverence.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <Leaf className="w-5 h-5 text-[#2d6a4f] mb-1.5" />
                <h4 className="text-xs font-bold text-[#01115b]">Sustainable Floristry</h4>
                <p className="text-[11px] text-slate-600 mt-0.5">Oasis foam-free techniques & biodegradable wraps.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <Award className="w-5 h-5 text-[#c8a45d] mb-1.5" />
                <h4 className="text-xs font-bold text-[#01115b]">Dawn Market Picks</h4>
                <p className="text-[11px] text-slate-600 mt-0.5">Hand-selected at New Covent Garden Market daily.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <HeartHandshake className="w-5 h-5 text-[#9b7b32] mb-1.5" />
                <h4 className="text-xs font-bold text-[#01115b]">Personal Liaison</h4>
                <p className="text-[11px] text-slate-600 mt-0.5">Direct line to lead florist on every booking.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#01115b] hover:bg-[#000a2e] rounded-lg shadow-md transition-all cursor-pointer"
              >
                Book Studio Walkthrough
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="px-5 py-3 text-xs font-semibold text-[#01115b] border border-[#01115b]/30 hover:border-[#01115b] rounded-lg transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#c8a45d]" />
                <span>Call {BUSINESS_INFO.phonePrimary}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
