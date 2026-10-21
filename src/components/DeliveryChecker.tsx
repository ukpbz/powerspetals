import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Clock, Truck, XCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/floralData';

interface AreaInfo {
  code: string;
  name: string;
  landmarks: string[];
  sameDay: boolean;
  leadTime: string;
}

const EXCLUSIVE_AREAS: AreaInfo[] = [
  {
    code: 'W4',
    name: 'Chiswick & Grove Park',
    landmarks: ['Chiswick High Road', 'Grove Park Studios', 'Bedford Park', 'Gunnersbury', 'Strand-on-the-Green'],
    sameDay: true,
    leadTime: 'Same-day delivery (order by 11am) or scheduled event drop'
  },
  {
    code: 'W5',
    name: 'Ealing & Ealing Common',
    landmarks: ['Ealing Broadway', 'South Ealing', 'Ealing Common', 'Pitshanger', 'Hanger Hill'],
    sameDay: true,
    leadTime: 'Daily priority florist runs & wedding setups'
  },
  {
    code: 'W6',
    name: 'Hammersmith & Ravenscourt',
    landmarks: ['Hammersmith Bridge', 'Ravenscourt Park', 'Stamford Brook', 'King Street', 'Brook Green'],
    sameDay: true,
    leadTime: 'Direct corridor delivery via Bespoke Flower Delivery van'
  },
  {
    code: 'W12',
    name: 'Shepherds Bush & White City',
    landmarks: ['Shepherds Bush Green', 'White City', 'Wormholt Park', 'Uxbridge Road', 'BBC Media Village'],
    sameDay: true,
    leadTime: 'Scheduled afternoon florist delivery'
  }
];

export const DeliveryChecker: React.FC = () => {
  const [postcode, setPostcode] = useState('');
  const [result, setResult] = useState<{ found: boolean; area?: AreaInfo; entered: string; note: string } | null>(null);

  const checkPostcode = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = postcode.toUpperCase().trim().replace(/\s+/g, ' ');
    if (!clean) return;

    // Check first part of postcode (e.g. "W4", "W5", "W6", "W12")
    const parts = clean.split(' ');
    const district = parts[0];

    // Regex check to accurately catch W4, W5, W6, W12 with or without space (e.g. W4 3HR or W43HR)
    let matchedArea: AreaInfo | undefined;

    if (/^W4(\s*\d[A-Z]{2})?$/.test(clean) || district === 'W4') {
      matchedArea = EXCLUSIVE_AREAS.find(a => a.code === 'W4');
    } else if (/^W5(\s*\d[A-Z]{2})?$/.test(clean) || district === 'W5') {
      matchedArea = EXCLUSIVE_AREAS.find(a => a.code === 'W5');
    } else if (/^W6(\s*\d[A-Z]{2})?$/.test(clean) || district === 'W6') {
      matchedArea = EXCLUSIVE_AREAS.find(a => a.code === 'W6');
    } else if (/^W12(\s*\d[A-Z]{2})?$/.test(clean) || district === 'W12') {
      matchedArea = EXCLUSIVE_AREAS.find(a => a.code === 'W12');
    }

    if (matchedArea) {
      setResult({
        found: true,
        area: matchedArea,
        entered: clean,
        note: `Direct delivery confirmed! Hand-delivered from our Grove Park Studios in Chiswick via our signature Bespoke Flower Delivery van.`
      });
    } else {
      setResult({
        found: false,
        entered: clean,
        note: `We exclusively deliver to W4, W5, W6, and W12 postcodes. For large wedding venue commissions or funeral tributes outside this dedicated zone, please call our Chiswick studio directly on 0845 5080607.`
      });
    }
  };

  return (
    <section id="delivery" className="py-20 bg-[#faf9f5] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-[#c8a45d]/15 rounded-full mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#c8a45d]" />
            Exclusive Delivery Zones
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#01115b]">
            Dedicated Postcode Coverage: <br />
            <span className="italic font-normal text-[#9b7b32]">W4 · W5 · W6 · W12</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            To guarantee absolute freshness and pristine presentation, our signature hand deliveries and Bespoke Flower Delivery van are exclusively dedicated to West London postcodes W4, W5, W6, and W12.
          </p>
        </div>

        {/* Postcode Search Box */}
        <div className="max-w-xl mx-auto mb-14">
          <form onSubmit={checkPostcode} className="p-2 rounded-2xl bg-white border border-[#c8a45d]/40 shadow-lg flex items-center gap-2">
            <div className="pl-3 text-slate-400">
              <MapPin className="w-5 h-5 text-[#c8a45d]" />
            </div>
            <input
              type="text"
              placeholder="Enter postcode (W4, W5, W6 or W12)..."
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="flex-1 px-2 py-3 text-sm focus:outline-none text-slate-800 uppercase font-medium placeholder:normal-case placeholder:font-normal"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#01115b] hover:bg-[#000d3d] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Check Postcode</span>
            </button>
          </form>

          {/* Result Card */}
          {result && (
            <div className={`mt-5 p-5 rounded-xl border shadow-sm animate-in fade-in ${
              result.found 
                ? 'bg-white border-[#2d6a4f]/40' 
                : 'bg-amber-50/80 border-amber-300'
            }`}>
              <div className="flex items-start gap-3">
                {result.found ? (
                  <CheckCircle2 className="w-6 h-6 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                )}

                <div className="space-y-1">
                  <div className="text-sm font-bold text-[#01115b]">
                    {result.found 
                      ? `We Deliver to ${result.entered} — ${result.area?.name} (${result.area?.code})`
                      : `${result.entered} is Outside Our Standard Delivery Zone`
                    }
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {result.note}
                  </p>

                  {result.found && result.area && (
                    <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1 text-[#2d6a4f] font-semibold">
                        <Truck className="w-3.5 h-3.5" />
                        Bespoke Flower Delivery van Available
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#c8a45d]" />
                        {result.area.leadTime}
                      </span>
                    </div>
                  )}

                  {!result.found && (
                    <div className="pt-2">
                      <a
                        href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#01115b] hover:text-[#c8a45d]"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#c8a45d]" />
                        <span>Enquire for Venue Exception: {BUSINESS_INFO.phonePrimary}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 4 Dedicated Postcode Cards (W4, W5, W6, W12) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXCLUSIVE_AREAS.map((area) => (
            <div
              key={area.code}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#c8a45d]/60 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-3xl font-extrabold text-[#01115b]">
                    {area.code}
                  </span>
                  <span className="text-[10px] font-bold uppercase bg-[#2d6a4f]/10 text-[#2d6a4f] px-2 py-0.5 rounded">
                    Hand-Delivered
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#01115b]">
                  {area.name}
                </h3>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Key Areas:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {area.landmarks.map((l, i) => (
                      <span key={i} className="text-[11px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-[#c8a45d] flex-shrink-0" />
                <span className="text-[11px] leading-tight">{area.leadTime}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
