import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/floralData';
import { PortfolioItem } from '../types';
import { Eye, MapPin, Tag, Sparkles, ArrowRight, X } from 'lucide-react';

interface PortfolioGalleryProps {
  onSelectDesign: (designTitle: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onSelectDesign }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Arrangements' },
    { id: 'bouquets', label: 'Signature Bouquets' },
    { id: 'weddings', label: 'Weddings & Bridal' },
    { id: 'sympathy', label: 'Sympathy & Memorial' },
    { id: 'events', label: 'Events & Dining' },
    { id: 'heritage', label: 'Our Piaggio Van & Heritage' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(i => i.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-[#fcfbf9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#01125a] bg-[#c8a45d]/15 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c8a45d]" />
              Artisan Portfolio
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#01125a]">
              A Curated Gallery of <span className="italic font-normal text-[#9b7b32]">Botanical Creations</span>
            </h2>
            <p className="mt-2 text-slate-600 text-sm max-w-xl">
              From our Chiswick workbenches to venues throughout West London. Each design is hand-crafted with seasonal British and imported blooms.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  activeCategory === c.id
                    ? 'bg-[#01125a] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#01125a] hover:bg-white/60'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#c8a45d]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Box */}
                <div 
                  onClick={() => setActiveModalItem(item)}
                  className="relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.badge && (
                      <span className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded shadow-sm ${
                        item.isOriginalAsset
                          ? 'bg-[#01125a] text-[#c8a45d]'
                          : 'bg-white/95 text-[#01125a]'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Hover overlay button */}
                  <div className="absolute inset-0 bg-[#01125a]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white text-[#01125a] text-xs font-semibold rounded-lg shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-[#c8a45d]" />
                      View Details & Recipe
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <Tag className="w-3.5 h-3.5 text-[#c8a45d]" />
                    <span>{item.categoryLabel}</span>
                    {item.location && (
                      <>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#01125a] leading-snug group-hover:text-[#9b7b32] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Stems */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1">
                      {item.blooms.slice(0, 3).map((bloom, idx) => (
                        <span key={idx} className="text-[11px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                          {bloom}
                        </span>
                      ))}
                      {item.blooms.length > 3 && (
                        <span className="text-[11px] text-[#c8a45d] px-1 py-0.5">
                          +{item.blooms.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action footer */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onSelectDesign(item.title)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#01125a] bg-slate-50 hover:bg-[#c8a45d]/20 border border-slate-200 hover:border-[#c8a45d]/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Inquire for Similar Design</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c8a45d]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Item Detail Lightbox Modal */}
      {activeModalItem && (
        <div 
          onClick={() => setActiveModalItem(null)}
          className="fixed inset-0 z-50 bg-[#01125a]/90 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full max-h-[90vh] bg-white rounded-2xl overflow-y-auto shadow-2xl border border-[#c8a45d]/40 relative flex flex-col"
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#01125a] text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#c8a45d] uppercase tracking-wider">
                <span>{activeModalItem.categoryLabel}</span>
                <span>·</span>
                <span>{activeModalItem.occasion}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#01125a]">
                {activeModalItem.title}
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed">
                {activeModalItem.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-[#01125a] mb-2">
                  Featured Botanical Stems & Foliage:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModalItem.blooms.map((bloom, i) => (
                    <span key={i} className="text-xs bg-white text-slate-700 px-3 py-1 rounded-md border border-slate-200 shadow-2xs">
                      🌸 {bloom}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span>Standard Handcrafted Delivery: </span>
                  <strong className="text-[#01125a]">West London (W4, W5, W6, W12)</strong>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const title = activeModalItem.title;
                      setActiveModalItem(null);
                      onSelectDesign(title);
                    }}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#01125a] hover:bg-[#000d3d] rounded-lg shadow transition-colors cursor-pointer"
                  >
                    Customize This Arrangement
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
