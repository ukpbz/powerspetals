import React, { useState, useMemo } from 'react';
import { Sparkles, Calculator, Check, ArrowRight, Phone, Send, Info, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/floralData';

interface BespokeEstimatorProps {
  initialDesign?: string;
  onSubmitInquiry: (details: any) => void;
}

export const BespokeEstimator: React.FC<BespokeEstimatorProps> = ({ initialDesign, onSubmitInquiry }) => {
  const [occasion, setOccasion] = useState<'wedding' | 'sympathy' | 'event' | 'bouquet'>('wedding');
  const [palette, setPalette] = useState<string>('english-garden');
  const [selectedItems, setSelectedItems] = useState<string[]>(['bridal-bouquet', 'table-runners']);
  const [region, setRegion] = useState<string>('west-london');
  const [apeVanRequested, setApeVanRequested] = useState<boolean>(true);
  
  // Contact form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState(initialDesign ? `Inquiring about ${initialDesign}` : '');
  const [submitted, setSubmitted] = useState(false);

  // Available items per occasion
  const itemOptions: Record<string, { id: string; label: string; basePrice: number; description: string }[]> = {
    wedding: [
      { id: 'bridal-bouquet', label: 'Bespoke Bridal Bouquet', basePrice: 150, description: 'Hand-tied with authentic silk trailing ribbons' },
      { id: 'bridesmaids', label: 'Bridesmaids Bouquets (x3)', basePrice: 195, description: 'Complementary bouquets for bridal party' },
      { id: 'buttonholes', label: 'Boutonnières / Buttonholes (x6)', basePrice: 72, description: 'Pocket flower accents with magnet/pin' },
      { id: 'arch', label: 'Ceremony Floral Arch / Meadow Installation', basePrice: 750, description: 'Full romantic ceremony backdrop' },
      { id: 'table-runners', label: 'Banquet Table Floral Runners (x5)', basePrice: 450, description: 'Lush greenery and seasonal bloom runners' },
      { id: 'pedestals', label: 'Grand Statement Urns / Pedestals (Pair)', basePrice: 380, description: 'Church or reception entrance arrangements' },
    ],
    sympathy: [
      { id: 'casket-spray', label: '5ft Double-Ended Casket Spray', basePrice: 220, description: 'Full casket floral blanket tailored to preferred colors' },
      { id: 'wreath-ring', label: 'Classic Memorial Wreath Ring', basePrice: 110, description: 'Circular tribute symbolizing eternal love' },
      { id: 'named-letters', label: 'Custom Floral Named Letters (e.g. MUM/DAD)', basePrice: 150, description: 'Base-flowered letter tribute on standing easel' },
      { id: 'cushion-pillow', label: 'Velvet Floral Cushion / Pillow Tribute', basePrice: 125, description: 'Soft textural remembrance floral arrangement' },
      { id: 'posies', label: 'Church/Chapel Altar Posies (x2)', basePrice: 90, description: 'Scented seasonal arrangements for the service' },
    ],
    event: [
      { id: 'entrance-urn', label: 'Grand Foyer Statement Urn', basePrice: 240, description: 'Impressive entrance design for arriving guests' },
      { id: 'centerpieces', label: 'Dining Centerpiece Compotes (x8)', basePrice: 560, description: 'Elevated or low-profile dining tablescapes' },
      { id: 'bar-installation', label: 'Cocktail Bar & Welcome Board Meadow', basePrice: 280, description: 'Scented arrangements for reception spaces' },
      { id: 'stage-backdrop', label: 'Stage / Photo-Wall Floral Feature', basePrice: 650, description: 'High-impact branded or organic floral wall' },
    ],
    bouquet: [
      { id: 'signature-bouquet', label: 'Power\'s Petals Signature Hand-Tied', basePrice: 75, description: 'Wrapped in our signature ribbon with water bubble' },
      { id: 'luxury-deluxe', label: 'Grand Deluxe Presentation Box', basePrice: 120, description: 'Abundant British & imported premium stems' },
      { id: 'glass-vase', label: 'Artisan Ceramic / Glass Vase Included', basePrice: 35, description: 'Ready-to-display vessel conditioned by florist' },
      { id: 'subscription', label: 'Bi-Weekly Seasonal Subscription (Month)', basePrice: 140, description: 'Fresh seasonal stems delivered bi-weekly' },
    ],
  };

  const currentItems = itemOptions[occasion] || itemOptions.wedding;

  const toggleItem = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  // Calculate pricing
  const calculation = useMemo(() => {
    let subtotal = 0;
    selectedItems.forEach(itemId => {
      const found = currentItems.find(i => i.id === itemId);
      if (found) subtotal += found.basePrice;
    });

    if (subtotal === 0) subtotal = 120;

    // Piaggio van delivery addition
    const deliveryFee = apeVanRequested ? 35 : 15;
    const minEstimate = Math.round(subtotal * 0.9 + deliveryFee);
    const maxEstimate = Math.round(subtotal * 1.25 + deliveryFee);
    const estimatedStems = Math.round(subtotal * 0.35 + 20);

    return { minEstimate, maxEstimate, estimatedStems, deliveryFee };
  }, [selectedItems, currentItems, apeVanRequested]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmitInquiry({
      occasion,
      palette,
      selectedItems,
      region,
      apeVanRequested,
      name,
      email,
      phone,
      eventDate,
      notes,
      calculation,
    });
  };

  return (
    <section id="estimator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#01125a] bg-[#c8a45d]/15 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#c8a45d]" />
            Bespoke Customizer & Instant Estimator
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#01125a]">
            Design Your <span className="italic font-normal text-[#9b7b32]">Floral Vision</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Tailor your occasion, floral color palette, and arrangement elements. Get a transparent real-time estimate and book a direct design consultation with our Chiswick studio.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Occasion */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                1. Select Occasion
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'wedding', label: 'Wedding & Bridal', icon: '💍' },
                  { id: 'sympathy', label: 'Sympathy & Funeral', icon: '🕊️' },
                  { id: 'event', label: 'Event & Dining', icon: '🥂' },
                  { id: 'bouquet', label: 'Bespoke Bouquet', icon: '🌸' },
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setOccasion(opt.id as any);
                      // set default selection for that category
                      if (opt.id === 'wedding') setSelectedItems(['bridal-bouquet', 'table-runners']);
                      if (opt.id === 'sympathy') setSelectedItems(['casket-spray']);
                      if (opt.id === 'event') setSelectedItems(['centerpieces', 'entrance-urn']);
                      if (opt.id === 'bouquet') setSelectedItems(['signature-bouquet']);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      occasion === opt.id
                        ? 'border-[#01125a] bg-[#01125a] text-white shadow-md'
                        : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xl mb-1">{opt.icon}</span>
                    <span className="text-xs font-semibold leading-tight">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Aesthetic Color Palette */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                2. Select Aesthetic Palette
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'english-garden', name: 'English Garden', desc: 'Blush, ivory, garden roses & eucalyptus', dots: ['#fce7f3', '#fef3c7', '#dcfce7'] },
                  { id: 'white-greens', name: 'Pure White & Greens', desc: 'Avalanche roses, lilies & Italian foliage', dots: ['#ffffff', '#f1f5f9', '#bbf7d0'] },
                  { id: 'original-vibrant', name: 'Original Power\'s Petals', desc: 'Ruby gerberas, yellow lilies & blue ribbon', dots: ['#dc2626', '#facc15', '#60a5fa'] },
                  { id: 'autumn-amber', name: 'Autumnal Amber & Berry', desc: 'Copper dahlias, burgundy & hypericum', dots: ['#7c2d12', '#b45309', '#fde047'] },
                  { id: 'soft-lemon-cream', name: 'Lemon & Cream (Sympathy)', desc: 'Soft pastel gerberas & cream roses', dots: ['#fef08a', '#fef9c3', '#cbd5e1'] },
                  { id: 'bespoke-custom', name: 'Bespoke Palette', desc: 'Custom tailored to your fabric or venue swatches', dots: ['#e2e8f0', '#cbd5e1', '#94a3b8'] },
                ].map(p => (
                  <div
                    key={p.id}
                    onClick={() => setPalette(p.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      palette === p.id 
                        ? 'border-[#c8a45d] bg-[#c8a45d]/10 ring-1 ring-[#c8a45d]' 
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-[#01125a]">{p.name}</span>
                      <div className="flex items-center gap-1">
                        {p.dots.map((c, i) => (
                          <span key={i} className="w-2.5 h-2.5 rounded-full border border-slate-300" style={{ backgroundColor: c }} />
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Elements & Arrangements */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  3. Arrangement Elements (Select All Desired)
                </label>
                <span className="text-xs text-slate-400">
                  {selectedItems.length} selected
                </span>
              </div>

              <div className="space-y-2">
                {currentItems.map(item => {
                  const isChecked = selectedItems.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between gap-4 cursor-pointer transition-all ${
                        isChecked
                          ? 'border-[#01125a] bg-[#01125a]/5 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-[#01125a] border-[#01125a] text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#01125a]">{item.label}</div>
                          <div className="text-[11px] text-slate-500">{item.description}</div>
                        </div>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <span className="text-xs font-serif font-bold text-slate-800">
                          +£{item.basePrice}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Delivery Location & Piaggio Van Option */}
            <div className="pt-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                4. Delivery Location & Signature Vehicle
              </label>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                {[
                  { id: 'w4-chiswick', label: 'W4 Chiswick', desc: 'Grove Park & Bedford Park' },
                  { id: 'w5-ealing', label: 'W5 Ealing', desc: 'Ealing Common & Broadway' },
                  { id: 'w6-hammersmith', label: 'W6 Hammersmith', desc: 'Ravenscourt & Stamford Brook' },
                  { id: 'w12-shepherds-bush', label: 'W12 Shepherds Bush', desc: 'White City & Wormholt' },
                ].map(r => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRegion(r.id)}
                    className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                      region === r.id
                        ? 'border-[#01125a] bg-[#01125a] text-white shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold">{r.label}</div>
                    <div className={`text-[10px] ${region === r.id ? 'text-slate-200' : 'text-slate-500'}`}>{r.desc}</div>
                  </button>
                ))}
              </div>

              {/* Piaggio Van Option Toggle */}
              <div 
                onClick={() => setApeVanRequested(!apeVanRequested)}
                className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  apeVanRequested ? 'border-[#c8a45d] bg-[#c8a45d]/10' : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#01125a] text-white flex items-center justify-center font-serif text-sm">
                    🛺
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#01125a]">
                      Dispatch in our Signature Piaggio Van (+£35)
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Iconic mobile florist vehicle delivery with hand-presentation & photo opportunity
                    </div>
                  </div>
                </div>

                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  apeVanRequested ? 'bg-[#01125a] border-[#01125a] text-white' : 'border-slate-300'
                }`}>
                  {apeVanRequested && <Check className="w-3 h-3" />}
                </div>
              </div>
            </div>

          </div>

          {/* Real-time Summary Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl bg-gradient-to-br from-[#01125a] via-[#011566] to-[#000d3d] text-white p-6 sm:p-8 shadow-2xl border border-[#c8a45d]/30">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#c8a45d]">
                    Live Estimate Breakdown
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-white capitalize">
                    {occasion} Floral Suite
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-slate-300 block">Estimated Range</span>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#e4cc92]">
                    £{calculation.minEstimate} – £{calculation.maxEstimate}
                  </div>
                </div>
              </div>

              {/* Estimate Details */}
              <div className="space-y-3 text-xs text-slate-300 mb-6">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Occasion:</span>
                  <span className="font-medium text-white capitalize">{occasion}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Color Theme:</span>
                  <span className="font-medium text-white capitalize">{palette.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Selected Elements:</span>
                  <span className="font-medium text-white">{selectedItems.length} items</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Estimated Fresh Stems:</span>
                  <span className="font-medium text-[#c8a45d]">~{calculation.estimatedStems} Grade-A Stems</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Delivery Method:</span>
                  <span className="font-medium text-white">
                    {apeVanRequested ? 'Signature Piaggio Van' : 'Standard Delivery'}
                  </span>
                </div>
              </div>

              {/* Quick Inquiry Form */}
              {submitted ? (
                <div className="bg-[#2d6a4f]/30 border border-[#2d6a4f] rounded-xl p-5 text-center space-y-2 animate-in fade-in">
                  <div className="w-10 h-10 rounded-full bg-[#2d6a4f] text-white flex items-center justify-center mx-auto mb-2">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs text-slate-200">
                    Thank you, {name || 'valued client'}. Helen & the florists at Power's Petals will review your stem requirements and reach out within 2 hours.
                  </p>
                  <div className="pt-2 text-[11px] text-[#c8a45d]">
                    Urgent event? Call our studio directly on <strong>0845 5080607</strong>.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="text-xs font-semibold text-[#c8a45d] uppercase tracking-wider">
                    Book Studio Review of this Estimate:
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#c8a45d]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#c8a45d]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#c8a45d]"
                    />
                  </div>

                  <div>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-xs focus:outline-none focus:border-[#c8a45d]"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      placeholder="Specific flower requests or venue notes..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#c8a45d] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider text-[#01125a] bg-gradient-to-r from-[#c8a45d] to-[#e4cc92] hover:from-[#dfbf79] hover:to-[#f0dcab] rounded-lg shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit for Complimentary Floral Proposal</span>
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>No obligation · 24hr response</span>
                    <a href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`} className="text-[#c8a45d] hover:underline">
                      Call {BUSINESS_INFO.phonePrimary}
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
