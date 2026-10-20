import React, { useState } from 'react';
import { Sparkles, Calendar, Droplets, Sun, Scissors } from 'lucide-react';
import { SEASONAL_BLOOMS } from '../data/floralData';

export const SeasonalCalendar: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState<number>(0);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-[#c8a45d]/15 rounded-full mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#c8a45d]" />
            British & European Bloom Calendar
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#01115b]">
            Seasonal Blooms & <span className="italic font-normal text-[#9b7b32]">Florist Conditioning</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We follow the natural rhythm of English flower growers and sustainable Dutch auctions. Discover what is in prime bloom for your date.
          </p>
        </div>

        {/* Season Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-xl border border-slate-200">
            {SEASONAL_BLOOMS.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedSeason(index)}
                className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedSeason === index
                    ? 'bg-[#01115b] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#01115b]'
                }`}
              >
                {item.season}
              </button>
            ))}
          </div>
        </div>

        {/* Active Season Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#faf9f5] to-white p-6 sm:p-10 rounded-2xl border border-[#c8a45d]/30 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#c8a45d]">
                Calendar Window
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#01115b] mt-1">
                {SEASONAL_BLOOMS[selectedSeason].month}
              </h3>
            </div>
            <div className="text-xs font-medium text-slate-500 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              🌿 Sourced Fresh at Dawn Daily
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#01115b] mb-3">
                Key Highlight Blooms in Peak Condition:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SEASONAL_BLOOMS[selectedSeason].highlightBlooms.map((bloom, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-2.5">
                    <span className="text-base">🌸</span>
                    <span className="text-xs font-semibold text-slate-800">{bloom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Care Tip */}
            <div className="p-4 rounded-xl bg-[#01115b]/5 border border-[#01115b]/15 flex items-start gap-3">
              <Droplets className="w-5 h-5 text-[#01115b] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs uppercase tracking-wider font-bold text-[#01115b] block mb-0.5">
                  Power's Petals Florist Conditioning Secret:
                </strong>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {SEASONAL_BLOOMS[selectedSeason].floristTip}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
