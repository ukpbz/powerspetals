import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/floralData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Wedding Consultation',
    eventDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#01115b] bg-[#c8a45d]/15 rounded-full mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#c8a45d]" />
            Studio Inquiries & Consultations
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#01115b]">
            Connect With Our <span className="italic font-normal text-[#9b7b32]">Floristry Studio</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Whether planning a wedding celebration, commissioning a memorial spray, or booking our iconic Piaggio mobile flower truck.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#c8a45d]/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#01115b]/10 text-[#01115b] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#c8a45d]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Telephone Lines</h4>
                  <div className="mt-1 space-y-1">
                    <a href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`} className="block font-serif text-xl font-bold text-[#01115b] hover:text-[#9b7b32] transition-colors">
                      {BUSINESS_INFO.phonePrimary}
                    </a>
                    <a href={`tel:${BUSINESS_INFO.phoneSecondary.replace(/\s+/g, '')}`} className="block text-sm font-medium text-slate-600 hover:text-[#01115b]">
                      Studio Landline: {BUSINESS_INFO.phoneSecondary}
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Direct line for urgent sympathy or same-day Chiswick orders.
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#c8a45d]/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#01115b]/10 text-[#01115b] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#c8a45d]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Electronic Mail</h4>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="mt-1 block font-serif text-lg font-bold text-[#01115b] hover:text-[#9b7b32] transition-colors">
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Send mood boards, Pinterest links, or venue floorplans directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Studio Address */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#c8a45d]/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#01115b]/10 text-[#01115b] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#c8a45d]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Chiswick Studio</h4>
                  <p className="mt-1 text-sm font-medium text-slate-800 leading-snug">
                    {BUSINESS_INFO.studioAddress}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                    <Clock className="w-3.5 h-3.5 text-[#c8a45d]" />
                    <span>{BUSINESS_INFO.hours}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-[#2d6a4f]/15 text-[#2d6a4f] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#01115b]">
                  Thank You for Reaching Out
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  We have received your enquiry for <strong>{formData.name}</strong>. Helen & the Power's Petals team will review your requirements and respond within 24 hours (or sooner for imminent funerals/events).
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-semibold text-[#01115b] underline hover:text-[#9b7b32] cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <h3 className="font-serif text-xl font-bold text-[#01115b]">
                    Send a Message or Booking Request
                  </h3>
                  <p className="text-xs text-slate-500">
                    Complimentary initial phone or studio consultation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lady Sarah Montgomery"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#01115b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07700 900123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#01115b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#01115b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Occasion / Service Required
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#01115b] bg-white"
                    >
                      <option>Wedding & Bridal Floristry</option>
                      <option>Sympathy & Funeral Tribute</option>
                      <option>Private Event / Gala Tablescapes</option>
                      <option>Piaggio Flower Truck Hire</option>
                      <option>Luxury Hand-Tied Presentation Bouquet</option>
                      <option>Weekly Business / Corporate Flowers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Event or Delivery Date (If Known)
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#01115b]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Message, Favorite Blooms, or Venue Location
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your envisioned colors, preferred blooms, venue, or budget considerations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#01115b] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#01115b] hover:bg-[#000a2e] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#c8a45d]" />
                  <span>Send Consultation Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
