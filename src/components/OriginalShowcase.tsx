import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { ORIGINAL_ASSETS } from '../data/floralData';

interface OriginalShowcaseProps {
  onSelectDesign?: (designName: string) => void;
}

export const OriginalShowcase: React.FC<OriginalShowcaseProps> = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="heritage" className="py-20 bg-[#faf9f5] border-b border-[#01115b]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-[#c8a45d]/15 border border-[#c8a45d]/30 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a45d]" />
            Authentic Studio Archives
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#01115b]">
            The Original Heritage of <span className="italic font-normal text-[#9b7b32]">Power's Petals</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From the Stock Market to the Flower Market. Powers Petals was a life long dream of the founder Helen whose career in the London Stock Market spanned 20 years before re-training at the prestigious Judith Blacklock Flower School in Knightsbridge, London. From our founding studio in Grove Park, Chiswick to bespoke commissions across all of West London, our distinctive signature ribbon, mobile Piaggio van, and tailored tributes define our brand.
          </p>
        </div>

        {/* The 3 Photos (Clean, Uncaptioned) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* 1. Signature Bouquet */}
          <div 
            onClick={() => setSelectedImage(ORIGINAL_ASSETS.bouquet)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 bg-white cursor-pointer transition-all duration-300"
          >
            <img 
              src={ORIGINAL_ASSETS.bouquet} 
              alt="Power's Petals Signature Bouquet"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-[#01115b] opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-lg">
                <Eye className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* 2. Piaggio Van */}
          <div 
            onClick={() => setSelectedImage(ORIGINAL_ASSETS.piaggioTruck)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 bg-white cursor-pointer transition-all duration-300"
          >
            <img 
              src={ORIGINAL_ASSETS.piaggioTruck} 
              alt="Power's Petals Piaggio Van"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-[#01115b] opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-lg">
                <Eye className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* 3. Sympathy Spray */}
          <div 
            onClick={() => setSelectedImage(ORIGINAL_ASSETS.sympathySpray)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 bg-white cursor-pointer transition-all duration-300"
          >
            <img 
              src={ORIGINAL_ASSETS.sympathySpray} 
              alt="Power's Petals Casket Spray"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-[#01115b] opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-lg">
                <Eye className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-[#01115b]/90 backdrop-blur-md p-4 flex items-center justify-center animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl border border-[#c8a45d]/40 relative"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-[#01115b] text-white p-2 rounded-full hover:bg-black transition-colors z-10"
              aria-label="Close Preview"
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Power's Petals Archive Full Preview" 
              className="w-full max-h-[80vh] object-contain bg-slate-900"
            />
            <div className="p-4 bg-white flex items-center justify-between">
              <span className="text-sm font-serif font-bold text-[#01115b]">
                Power's Petals Official Archive Image
              </span>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-xs font-semibold text-[#01115b] underline hover:text-[#c8a45d]"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
