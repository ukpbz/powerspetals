import React, { useState } from 'react';
import { 
  X, User, Lock, Sparkles, CheckCircle2, Truck, Calendar, 
  FileText, Phone, ArrowRight, ShieldCheck, Settings, Plus, 
  Edit3, Trash2, Check, RefreshCw 
} from 'lucide-react';
import { DEMO_CLIENT_ORDERS, BUSINESS_INFO, ORIGINAL_ASSETS } from '../data/floralData';
import { ClientOrder } from '../types';

interface ClientLogonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientLogonModal: React.FC<ClientLogonModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'client' | 'admin'>('client');
  const [activeTab, setActiveTab] = useState<'logon' | 'portal' | 'admin_dashboard'>('logon');
  
  // Login input states
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  // Data states
  const [allOrders, setAllOrders] = useState<ClientOrder[]>(DEMO_CLIENT_ORDERS);
  const [currentOrder, setCurrentOrder] = useState<ClientOrder | null>(null);
  const [amendmentText, setAmendmentText] = useState('');
  const [amendmentSent, setAmendmentSent] = useState(false);

  // New order form in Admin mode
  const [showAddOrder, setShowAddOrder] = useState(false);
  const [newOrder, setNewOrder] = useState({
    clientName: '',
    eventType: 'Wedding' as const,
    date: '',
    venueOrAddress: '',
    palette: 'English Romantic Garden & Sage',
    keyFlowers: 'Garden Roses, White Hydrangeas, Sweet Peas, Eucalyptus',
    notes: 'Bespoke delivery via Piaggio Van.',
    totalEstimate: '£1,500.00',
    assignedVehicle: 'Piaggio Van (Floral Van #1)',
    leadFlorist: 'Helen Power'
  });

  if (!isOpen) return null;

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const cleanUser = identifier.trim().toLowerCase();
    const cleanPass = password.trim();

    // Check Admin Login credentials:
    // Username: admin@powerspetals.com or admin
    // Password: powers2014 or admin123
    if (
      (cleanUser === 'admin' || cleanUser === 'admin@powerspetals.com') && 
      (cleanPass === 'powers2014' || cleanPass === 'admin123' || cleanPass === 'admin' || cleanPass === '')
    ) {
      setActiveTab('admin_dashboard');
      return;
    }

    // Check Client booking match
    const match = allOrders.find(
      o => o.bookingId.toLowerCase() === cleanUser ||
           o.clientName.toLowerCase().includes(cleanUser)
    );

    if (match) {
      setCurrentOrder(match);
      setActiveTab('portal');
    } else if (cleanUser) {
      // Create ad-hoc client view
      const customDemo: ClientOrder = {
        bookingId: identifier.toUpperCase() || 'PP-CLIENT-2026',
        clientName: identifier || 'Valued Floral Client',
        eventType: 'Wedding',
        date: '24 July 2026',
        venueOrAddress: 'Chiswick Memorial & Gardens, London W4',
        status: 'Stems Sourced',
        palette: 'English Romantic Garden & Sage Foliage',
        keyFlowers: ['Garden Roses', 'White Sweet Peas', 'Eucalyptus', 'Hydrangeas'],
        notes: 'Handcrafted seasonal selection conditioned in Chiswick studio. Deliver via Piaggio Van.',
        assignedVehicle: 'Piaggio Van (Floral Van #1)',
        leadFlorist: 'Helen Power',
        totalEstimate: '£1,250.00'
      };
      setCurrentOrder(customDemo);
      setActiveTab('portal');
    } else {
      setErrorMsg('Please enter a Booking Reference, Client Name, or Admin username.');
    }
  };

  const handleFillAdminCredentials = () => {
    setMode('admin');
    setIdentifier('admin@powerspetals.com');
    setPassword('powers2014');
    setErrorMsg('');
  };

  const loadDemoOrder = (order: ClientOrder) => {
    setCurrentOrder(order);
    setActiveTab('portal');
  };

  const updateOrderStatus = (bookingId: string, newStatus: ClientOrder['status']) => {
    setAllOrders(prev => prev.map(o => o.bookingId === bookingId ? { ...o, status: newStatus } : o));
    if (currentOrder && currentOrder.bookingId === bookingId) {
      setCurrentOrder({ ...currentOrder, status: newStatus });
    }
  };

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `PP-${newOrder.eventType.substring(0, 3).toUpperCase()}-2026-${Math.floor(100 + Math.random() * 900)}`;
    const created: ClientOrder = {
      bookingId: id,
      clientName: newOrder.clientName,
      eventType: newOrder.eventType,
      date: newOrder.date || 'TBD 2026',
      venueOrAddress: newOrder.venueOrAddress,
      status: 'Design Confirmed',
      palette: newOrder.palette,
      keyFlowers: newOrder.keyFlowers.split(',').map(s => s.trim()),
      notes: newOrder.notes,
      assignedVehicle: newOrder.assignedVehicle,
      leadFlorist: newOrder.leadFlorist,
      totalEstimate: newOrder.totalEstimate
    };
    setAllOrders([created, ...allOrders]);
    setShowAddOrder(false);
    setNewOrder({
      clientName: '',
      eventType: 'Wedding',
      date: '',
      venueOrAddress: '',
      palette: 'English Romantic Garden & Sage',
      keyFlowers: 'Garden Roses, White Hydrangeas, Sweet Peas, Eucalyptus',
      notes: 'Bespoke delivery via Piaggio Van.',
      totalEstimate: '£1,500.00',
      assignedVehicle: 'Piaggio Van (Floral Van #1)',
      leadFlorist: 'Helen Power'
    });
  };

  const handleAmendmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amendmentText.trim()) return;
    setAmendmentSent(true);
    setTimeout(() => {
      setAmendmentText('');
    }, 2000);
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#000d3d]/85 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`w-full bg-white rounded-2xl shadow-2xl border border-[#c8a45d]/40 overflow-hidden relative animate-in zoom-in-95 duration-200 flex flex-col transition-all ${
          activeTab === 'admin_dashboard' ? 'max-w-4xl max-h-[92vh]' : 'max-w-2xl max-h-[90vh]'
        }`}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#01125a] px-6 py-4 text-white flex items-center justify-between border-b border-[#c8a45d]/20 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 border border-[#c8a45d]/40 flex items-center justify-center text-[#c8a45d]">
              {activeTab === 'admin_dashboard' ? <Settings className="w-5 h-5 text-[#c8a45d]" /> : <Lock className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <span>
                  {activeTab === 'admin_dashboard' ? "Power's Petals Studio Admin Portal" : "Power's Petals Client Portal"}
                </span>
                <span className="text-[10px] font-sans font-normal uppercase tracking-widest bg-[#c8a45d]/20 text-[#c8a45d] px-2 py-0.5 rounded">
                  {activeTab === 'admin_dashboard' ? "Studio Manager" : "Secure Access"}
                </span>
              </h3>
              <p className="text-xs text-slate-300">
                {activeTab === 'admin_dashboard' 
                  ? "Manage floral production schedules, dispatch the Piaggio van & monitor bookings"
                  : "Track bespoke floral arrangements, stem recipes & delivery schedules"
                }
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body with Scroll */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          
          {/* TAB 1: LOGIN FORM */}
          {activeTab === 'logon' && (
            <div className="space-y-6">
              
              {/* Login Mode Toggle Tabs (Client vs Florist Studio Admin) */}
              <div className="flex items-center justify-center">
                <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('client');
                      setIdentifier('');
                      setPassword('');
                      setErrorMsg('');
                    }}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                      mode === 'client' 
                        ? 'bg-[#01125a] text-white shadow-sm' 
                        : 'text-slate-600 hover:text-[#01125a]'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Client & Bride Login</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleFillAdminCredentials}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                      mode === 'admin' 
                        ? 'bg-[#c8a45d] text-[#01125a] shadow-sm font-bold' 
                        : 'text-slate-600 hover:text-[#01125a]'
                    }`}
                  >
                    <Settings className="w-3.5 h-3.5" />
                    <span>Florist Studio Admin</span>
                  </button>
                </div>
              </div>

              {/* Login Header */}
              <div className="text-center max-w-md mx-auto">
                <h4 className="font-serif text-2xl font-semibold text-[#01125a]">
                  {mode === 'admin' ? "Florist Studio Management Login" : "Log In to Your Floral Account"}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {mode === 'admin'
                    ? "Full studio access to manage bookings, status updates, and vehicle dispatches."
                    : "Enter your Booking ID (e.g. PP-WED-2026-884) or registered email address."
                  }
                </p>
              </div>

              {/* Credential Helper Box for quick testing */}
              <div className="max-w-md mx-auto p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-[#01125a] flex items-center justify-between">
                  <span>🔑 Studio Admin Credentials:</span>
                  <button
                    type="button"
                    onClick={handleFillAdminCredentials}
                    className="text-[11px] text-[#c8a45d] hover:underline font-bold uppercase cursor-pointer"
                  >
                    Click to Auto-Fill
                  </button>
                </div>
                <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-600 font-mono">
                  <span>Username: <strong>admin@powerspetals.com</strong> (or <strong>admin</strong>)</span>
                  <span>Passcode: <strong>powers2014</strong></span>
                </div>
              </div>

              {/* Main Login Form */}
              <form onSubmit={handleLogin} className="space-y-4 max-w-md mx-auto">
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-50 text-red-600 text-xs border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    {mode === 'admin' ? "Studio Admin Username / Email" : "Booking Reference or Client Name"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={mode === 'admin' ? "admin@powerspetals.com" : "e.g. PP-WED-2026-884 or Charlotte Vane"}
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#01125a] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Passcode {mode === 'admin' && "(powers2014)"}
                  </label>
                  <input
                    type="password"
                    placeholder={mode === 'admin' ? "powers2014" : "Enter venue postcode or passcode"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#01125a] focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    mode === 'admin'
                      ? 'bg-gradient-to-r from-[#c8a45d] to-[#e4cc92] text-[#01125a] hover:opacity-95'
                      : 'bg-[#01125a] text-white hover:bg-[#000d3d]'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{mode === 'admin' ? "Log In as Studio Admin" : "Access Floral Project"}</span>
                </button>
              </form>

              {/* Quick Demo Accounts Helper for Clients */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center mb-3">
                  Or Test with a Live Sample Client Profile:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {allOrders.map(demo => (
                    <button
                      key={demo.bookingId}
                      type="button"
                      onClick={() => loadDemoOrder(demo)}
                      className="p-3 text-left rounded-xl border border-slate-200 hover:border-[#c8a45d] bg-slate-50 hover:bg-[#c8a45d]/5 transition-all cursor-pointer group"
                    >
                      <div className="text-[10px] font-bold uppercase text-[#c8a45d]">
                        {demo.eventType}
                      </div>
                      <div className="text-xs font-bold text-[#01125a] truncate group-hover:text-[#9b7b32]">
                        {demo.clientName}
                      </div>
                      <div className="text-[10px] text-slate-500 truncate mt-0.5">
                        {demo.bookingId}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: CLIENT PORTAL VIEW */}
          {activeTab === 'portal' && currentOrder && (
            <div className="space-y-6">
              
              {/* Order Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#c8a45d] uppercase tracking-wider">
                    <span>{currentOrder.bookingId}</span>
                    <span>·</span>
                    <span className="text-[#01125a] font-bold">{currentOrder.eventType}</span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#01125a] mt-0.5">
                    {currentOrder.clientName}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                    <Calendar className="w-3.5 h-3.5 text-[#01125a]" />
                    <span>Event Date: <strong>{currentOrder.date}</strong></span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2d6a4f]/15 text-[#2d6a4f] border border-[#2d6a4f]/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {currentOrder.status}
                  </span>
                  <div className="text-xs text-slate-500 mt-1.5">
                    Total: <strong className="text-slate-800">{currentOrder.totalEstimate}</strong>
                  </div>
                </div>
              </div>

              {/* Progress Milestones */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Live Floral Production Progress:
                </div>
                <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
                  {[
                    { label: 'Consultation', done: true },
                    { label: 'Stems Sourced', done: currentOrder.status !== 'Design Confirmed' },
                    { label: 'Studio Production', done: currentOrder.status === 'In Studio Production' || currentOrder.status === 'Out for Delivery (Piaggio Van)' || currentOrder.status === 'Delivered' },
                    { label: 'Van Dispatch', done: currentOrder.status === 'Out for Delivery (Piaggio Van)' || currentOrder.status === 'Delivered' },
                  ].map((step, idx) => (
                    <div 
                      key={idx} 
                      className={`p-2 rounded-lg border flex flex-col items-center gap-1 ${
                        step.done 
                          ? 'bg-[#01125a] text-white border-[#01125a]' 
                          : 'bg-slate-100 text-slate-400 border-slate-200'
                      }`}
                    >
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] bg-white/20 font-bold">
                        {idx + 1}
                      </span>
                      <span className="font-medium text-[10px] leading-tight">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#01125a] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#c8a45d]" />
                    Floral Recipe & Palette
                  </div>
                  <div className="text-xs text-slate-600">
                    <strong>Theme:</strong> {currentOrder.palette}
                  </div>
                  <div className="text-xs text-slate-600">
                    <strong>Stems:</strong>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {currentOrder.keyFlowers.map((flower, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                          {flower}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#01125a] flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#c8a45d]" />
                    Delivery Logistics
                  </div>
                  <div className="text-xs text-slate-600">
                    <strong>Venue / Delivery Address:</strong> {currentOrder.venueOrAddress}
                  </div>
                  <div className="text-xs text-slate-600">
                    <strong>Assigned Vehicle:</strong> {currentOrder.assignedVehicle}
                  </div>
                  <div className="text-xs text-slate-600">
                    <strong>Lead Florist:</strong> {currentOrder.leadFlorist}
                  </div>
                </div>
              </div>

              {/* Florist Production Notes */}
              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-slate-700">
                <strong className="text-amber-900 block mb-0.5">Florist Production Notes:</strong>
                {currentOrder.notes}
              </div>

              {/* Request Amendment to Florist */}
              <div className="pt-2 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Send Note or Request Stem Adjustment to {currentOrder.leadFlorist}:
                </div>
                {amendmentSent ? (
                  <div className="p-3 rounded-lg bg-[#2d6a4f]/15 border border-[#2d6a4f] text-xs text-[#2d6a4f] font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Your note has been submitted to the studio. We will confirm shortly.</span>
                  </div>
                ) : (
                  <form onSubmit={handleAmendmentSubmit} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. Add 2 additional groom buttonholes, change ribbon to cream..."
                      value={amendmentText}
                      onChange={(e) => setAmendmentText(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#01125a]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#01125a] text-white text-xs font-semibold rounded-lg hover:bg-[#000d3d] cursor-pointer"
                    >
                      Send Note
                    </button>
                  </form>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('logon')}
                  className="text-slate-500 hover:text-[#01125a] underline"
                >
                  &larr; Switch Account / Log Out
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-[#01125a] font-semibold hover:text-[#c8a45d]"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Studio: {BUSINESS_INFO.phonePrimary}</span>
                  </a>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: FLORIST STUDIO ADMIN DASHBOARD */}
          {activeTab === 'admin_dashboard' && (
            <div className="space-y-6">
              
              {/* Admin Overview Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Studio Management Console
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#01125a] mt-0.5">
                    Chiswick Studio & Piaggio Dispatch Control
                  </h4>
                  <p className="text-xs text-slate-500">
                    Logged in as <strong>Helen Power (Founder & Lead Florist)</strong> · Grove Park Studios
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowAddOrder(!showAddOrder)}
                    className="px-3.5 py-2 bg-[#01125a] text-white text-xs font-semibold rounded-lg hover:bg-[#000d3d] flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Plus className="w-4 h-4 text-[#c8a45d]" />
                    <span>{showAddOrder ? "Close Form" : "New Booking"}</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('logon')}
                    className="px-3 py-2 bg-white text-slate-600 text-xs font-semibold rounded-lg border border-slate-200 hover:bg-slate-100 cursor-pointer"
                  >
                    Log Out
                  </button>
                </div>
              </div>

              {/* Add New Order Modal Drawer */}
              {showAddOrder && (
                <form onSubmit={handleCreateOrder} className="p-5 rounded-xl bg-white border border-[#c8a45d]/40 shadow-md space-y-4 animate-in fade-in">
                  <div className="font-serif text-lg font-bold text-[#01125a] border-b border-slate-100 pb-2">
                    Create New Client Floral Booking
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Client Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor & George"
                        value={newOrder.clientName}
                        onChange={(e) => setNewOrder({ ...newOrder, clientName: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Occasion</label>
                      <select
                        value={newOrder.eventType}
                        onChange={(e) => setNewOrder({ ...newOrder, eventType: e.target.value as any })}
                        className="w-full px-3 py-2 border rounded-lg text-xs bg-white"
                      >
                        <option value="Wedding">Wedding</option>
                        <option value="Sympathy Tribute">Sympathy Tribute</option>
                        <option value="Private Event">Private Event</option>
                        <option value="Bouquet Delivery">Bouquet Delivery</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Date</label>
                      <input
                        type="date"
                        value={newOrder.date}
                        onChange={(e) => setNewOrder({ ...newOrder, date: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Venue / Address</label>
                      <input
                        type="text"
                        placeholder="e.g. Syon Park Conservatory, Brentford"
                        value={newOrder.venueOrAddress}
                        onChange={(e) => setNewOrder({ ...newOrder, venueOrAddress: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Total Fee</label>
                      <input
                        type="text"
                        placeholder="e.g. £1,800.00"
                        value={newOrder.totalEstimate}
                        onChange={(e) => setNewOrder({ ...newOrder, totalEstimate: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg text-xs"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddOrder(false)}
                      className="px-3 py-2 text-xs text-slate-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#01125a] text-white text-xs font-bold uppercase rounded-lg hover:bg-[#000d3d]"
                    >
                      Save Booking
                    </button>
                  </div>
                </form>
              )}

              {/* Orders Table */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Active Client Bookings ({allOrders.length})
                  </h5>
                  <span className="text-[11px] text-slate-400">
                    Click status to update in real-time
                  </span>
                </div>

                <div className="space-y-3">
                  {allOrders.map((order) => (
                    <div 
                      key={order.bookingId}
                      className="p-4 rounded-xl border border-slate-200 hover:border-[#c8a45d]/60 bg-white shadow-2xs space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono font-bold text-[#01125a] bg-slate-100 px-2 py-0.5 rounded">
                              {order.bookingId}
                            </span>
                            <span className="text-xs font-semibold text-[#c8a45d] uppercase tracking-wider">
                              {order.eventType}
                            </span>
                            <span className="text-slate-400">·</span>
                            <span className="text-xs text-slate-500">{order.date}</span>
                          </div>
                          <h6 className="font-serif text-lg font-bold text-[#01125a] mt-0.5">
                            {order.clientName}
                          </h6>
                          <div className="text-xs text-slate-500">
                            {order.venueOrAddress}
                          </div>
                        </div>

                        {/* Interactive Status Selector */}
                        <div className="flex items-center gap-2">
                          <label className="text-[11px] text-slate-400">Status:</label>
                          <select
                            value={order.status}
                            onChange={(e) => updateOrderStatus(order.bookingId, e.target.value as any)}
                            className="text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#01125a]"
                          >
                            <option value="Design Confirmed">Design Confirmed</option>
                            <option value="Stems Sourced">Stems Sourced</option>
                            <option value="In Studio Production">In Studio Production</option>
                            <option value="Out for Delivery (Piaggio Van)">Out for Delivery (Piaggio Van)</option>
                            <option value="Delivered">Delivered</option>
                          </select>
                        </div>
                      </div>

                      {/* Stems and Vehicle info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Stems:</span>
                          <span className="text-slate-500">{order.keyFlowers.join(', ')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-500 flex items-center gap-1">
                            <Truck className="w-3.5 h-3.5 text-[#c8a45d]" />
                            {order.assignedVehicle}
                          </span>
                          <strong className="text-slate-800">{order.totalEstimate}</strong>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

              </div>

              {/* Dawn Market Procurement List */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="text-xs font-bold uppercase tracking-wider text-[#01125a] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#c8a45d]" />
                    New Covent Garden Market Morning Procurement
                  </h6>
                  <span className="text-[10px] text-slate-500">Updated today 05:30 AM</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <div className="text-[10px] text-slate-400">Roses (Patience & Avalanche)</div>
                    <div className="font-bold text-[#01125a]">120 Stems (In Studio)</div>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <div className="text-[10px] text-slate-400">Gerberas (Ruby & Buttery)</div>
                    <div className="font-bold text-[#01125a]">80 Stems (Conditioned)</div>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <div className="text-[10px] text-slate-400">Sweet Peas & Hydrangeas</div>
                    <div className="font-bold text-[#01125a]">65 Stems (Hydrating)</div>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <div className="text-[10px] text-slate-400">Silver Dollar Eucalyptus</div>
                    <div className="font-bold text-[#01125a]">15 Bunches (Cut & Ready)</div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Note */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-center text-[11px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2d6a4f]" />
            <span>Power's Petals Secure Studio & Client Portal</span>
          </div>

          <div>
            {activeTab !== 'logon' && (
              <button
                onClick={() => setActiveTab('logon')}
                className="text-[#01125a] hover:underline font-semibold"
              >
                Switch Account / Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
