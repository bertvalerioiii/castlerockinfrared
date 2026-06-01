import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, ClipboardCheck, Sparkles, Send, Printer, RefreshCw, FileCheck2, AlertCircle } from 'lucide-react';
import { CONTACT_INFO, SAMPLE_PROPOSAL_RESPONSES } from '../data';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    itemsToScan: 15,
    message: '',
    industry: 'commercial-buildings'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedProposal, setSubmittedProposal] = useState<any | null>(null);
  const [formError, setFormError] = useState<string>('');

  // Derive dynamic estimations based on item count
  const getDynamicEstimate = (count: number) => {
    let tier = 0;
    if (count > 80) tier = 2;
    else if (count > 25) tier = 1;

    const data = SAMPLE_PROPOSAL_RESPONSES[tier];
    
    // Scale hours more linearly with items
    const scaledHours = Math.max(data.estimatedHours, Math.round(count * 0.15 + 2));
    
    // Custom estimate label
    let costLabel = data.baseEstimate;
    if (tier === 0) {
      costLabel = `$${Math.max(1200, count * 60)} - $${Math.max(1800, count * 90)}`;
    } else if (tier === 1) {
      costLabel = `$${count * 55} - $${count * 80}`;
    }

    return {
      complianceLevel: data.complianceLevel,
      baseEstimate: costLabel,
      estimatedHours: scaledHours,
      breakdown: data.itemsBreakdown
    };
  };

  const dynamicEst = getDynamicEstimate(formData.itemsToScan);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormError('');
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'itemsToScan' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setFormError("Please complete all required fields (Name, Email, Phone).");
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    // Simulate standard fast asynchronous email api server lag
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedProposal({
        id: `CRI-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        user: { ...formData },
        estimate: { ...dynamicEst }
      });
    }, 1200);
  };

  const handleReset = () => {
    setSubmittedProposal(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      propertyAddress: '',
      itemsToScan: 15,
      message: '',
      industry: 'commercial-buildings'
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d0d] border-b border-white/5 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-14 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-orange-500 block mb-2">
            Procurement & Dispatch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tighter text-white mb-4 leading-none">
            Request an Inspection
          </h2>
          <p className="text-neutral-400 font-sans font-light">
            Need a certified NFPA 70B compliance survey? Complete our dynamic planner below to receive an instant engineering scope estimate and draft a formalized proposal draft.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
            {/* Left Column: Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6 animate-fade-in">
            
            {/* Direct Contact Reference Card */}
            <div className="bg-[#121212]/90 border border-white/5 rounded-lg p-6 flex flex-col gap-5">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                Direct Inquiries Desk
              </span>

              <div className="space-y-4 font-sans text-sm">
                <div className="flex items-center gap-3.5 text-neutral-300">
                  <div className="p-2.5 bg-[#171717] border border-white/5 rounded text-orange-500">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 font-mono">DIRECT PHONES</span>
                    {CONTACT_INFO.phones.map((phone, i) => (
                      <a 
                        key={phone} 
                        href={`tel:${phone}`} 
                        className="hover:text-orange-500 transition-colors font-bold font-mono"
                      >
                        {phone}{i === CONTACT_INFO.phones.length - 1 ? " (Toll Free)" : ""}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-neutral-300">
                  <div className="p-2.5 bg-[#171717] border border-white/5 rounded text-orange-500">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 font-mono">EMAIL DISPATCH</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-orange-500 transition-colors font-bold">{CONTACT_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-neutral-300">
                  <div className="p-2.5 bg-[#171717] border border-white/5 rounded text-orange-500">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 font-mono">CORPORATE BASE</span>
                    <span className="text-xs font-light text-neutral-400">{CONTACT_INFO.office}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Submission Form OR Live Proposed Summary (7 cols) */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/5 rounded-lg p-6 sm:p-8 shadow-2xl relative min-h-[500px]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
            
            <AnimatePresence mode="wait">
              {!submittedProposal ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="fullName" className="text-xs font-mono uppercase text-neutral-400">
                        Full Name <span className="text-orange-500 font-bold">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="bg-[#0e0e0e] border border-white/5 placeholder-neutral-600 focus:border-orange-500 rounded px-3 py-2.5 text-white text-sm focus:outline-none transition-colors font-sans"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-mono uppercase text-neutral-400">
                        Email Address <span className="text-orange-500 font-bold">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-[#0e0e0e] border border-white/5 placeholder-neutral-600 focus:border-orange-500 rounded px-3 py-2.5 text-white text-sm focus:outline-none transition-colors font-sans"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-mono uppercase text-neutral-400">
                        Phone Number <span className="text-orange-500 font-bold">*</span>
                      </label>
                      <input
                        id="phone"
                        type="text"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-[#0e0e0e] border border-white/5 placeholder-neutral-600 focus:border-orange-500 rounded px-3 py-2.5 text-white text-sm focus:outline-none transition-colors font-sans"
                        placeholder="925-518-1124"
                      />
                    </div>

                    {/* Sector (Industry Class) */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="industry" className="text-xs font-mono uppercase text-neutral-400">
                        Facility Sector
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="bg-[#0e0e0e] border border-white/5 focus:border-orange-500 rounded px-3 py-2.5 text-white text-sm focus:outline-none transition-colors font-sans select-none"
                      >
                        <option value="commercial-buildings">Commercial Buildings</option>
                        <option value="industrial-plants">Industrial Plants</option>
                        <option value="hospitals">Hospitals & Healthcare</option>
                        <option value="hotels-resorts">Hotels & Resorts</option>
                        <option value="data-centers">Data Centers</option>
                        <option value="warehouses">Warehouses & Logistics</option>
                        <option value="solar-installations">Solar & Renewables</option>
                        <option value="roof-systems">Roof Membrane Investigations</option>
                        <option value="electrical-distribution">Distribution Systems</option>
                      </select>
                    </div>
                  </div>

                  {/* Property Address */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="propertyAddress" className="text-xs font-mono uppercase text-neutral-400">
                      Property Physical Address
                    </label>
                    <input
                      id="propertyAddress"
                      type="text"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleChange}
                      className="bg-[#0e0e0e] border border-white/5 placeholder-neutral-600 focus:border-orange-500 rounded px-3 py-2.5 text-white text-sm focus:outline-none transition-colors font-sans"
                      placeholder="e.g. 100 Main St, Castle Rock, CO"
                    />
                  </div>

                  {/* Range Slider: Approximate Number of Items to Scan */}
                  <div className="flex flex-col gap-1.5 bg-black/40 p-4 rounded border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="itemsToScan" className="text-xs font-mono uppercase text-orange-500 font-bold">
                        Approximate Items to Scan
                      </label>
                      <span className="font-mono text-xs text-orange-400 font-bold bg-orange-950/25 px-2.5 py-1 rounded border border-orange-900/30">
                        {formData.itemsToScan} Electrical Items
                      </span>
                    </div>
                    <input
                      id="itemsToScan"
                      type="range"
                      name="itemsToScan"
                      min="1"
                      max="300"
                      value={formData.itemsToScan}
                      onChange={handleChange}
                      className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                    <div className="flex justify-between text-[9px] text-neutral-500 font-mono">
                      <span>1 Switch / Panel</span>
                      <span>150 Medium Facility</span>
                      <span>300+ Enterprise Complex</span>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-mono uppercase text-neutral-400">
                      Additional Messages / Access Constraints
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-[#0e0e0e] border border-white/5 placeholder-neutral-600 focus:border-orange-500 rounded px-3 py-2.5 text-white text-sm focus:outline-none transition-colors font-sans"
                      placeholder="e.g. Include emergency backup generator transfer switches in audit..."
                    />
                  </div>

                  {/* In-UI Friendly Form Error Panel */}
                  {formError && (
                    <div className="bg-red-950/35 border border-red-500/25 text-red-400 p-3 rounded text-xs flex items-center gap-2 font-mono">
                      <AlertCircle size={15} />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Button Submission */}
                  <button
                    id="submit-contact"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs font-bold tracking-widest text-[#000] bg-white hover:bg-orange-500 hover:text-white transition-all duration-300 font-mono uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw size={14} className="animate-spin" />
                        COMPUTING RADIOMETRIC WORKLOAD...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Request Inspection
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Formal Proposal Document Layout */
                <motion.div
                  key="proposal-display"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-neutral-300 text-xs space-y-5"
                >
                  {/* Doc Header */}
                  <div className="border-b border-white/5 pb-4 flex justify-between items-start">
                    <div>
                      <h4 className="text-base font-extrabold text-white font-sans leading-none mb-1">CASTLE ROCK INFRARED</h4>
                      <span className="text-[10px] text-neutral-500 block">CERTIFIED ENGINEERING PROPOSAL // REVISION A</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-orange-500 font-bold block">{submittedProposal.id}</span>
                      <span className="text-[9px] text-neutral-500 block">{submittedProposal.date}</span>
                    </div>
                  </div>

                  {/* Submission success status */}
                  <div className="bg-orange-950/15 border border-orange-500/15 text-orange-400 p-3 rounded-md flex items-start gap-2.5 font-sans">
                    <FileCheck2 size={16} className="shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong>Proposal Registered:</strong> Your thermal survey parameters have been compiled. An ITC-certified Level III thermographer will call you to lock in our dispatch timetable within 2 hours.
                    </div>
                  </div>

                  {/* Client breakdown */}
                  <div className="bg-black/40 p-4 border border-white/5 rounded grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div>
                      <span className="text-[9px] text-neutral-500 block uppercase">Prepared For :</span>
                      <strong className="text-neutral-200">{submittedProposal.user.fullName}</strong>
                      <span className="block mt-0.5 text-neutral-450">{submittedProposal.user.email}</span>
                      <span className="block text-neutral-450">{submittedProposal.user.phone}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-neutral-500 block uppercase">Site Location :</span>
                      <span className="text-neutral-200 block truncate">{submittedProposal.user.propertyAddress || "TBD (No physical office provided)"}</span>
                      <span className="text-[9px] text-neutral-500 block uppercase mt-1">Sector Segment :</span>
                      <span className="text-neutral-200 block uppercase font-bold text-[10px] mt-0.5 text-orange-500">
                        {submittedProposal.user.industry.replace('-', ' ')}
                      </span>
                    </div>
                  </div>

                  {/* Core Estimate Specifics */}
                  <div className="space-y-3">
                    <h5 className="font-sans font-bold text-white border-b border-white/5 pb-1 text-xs">SCOPE & LINE ITEMS</h5>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-neutral-450">
                        <span>1. Thermal Diagnostics on Panels MCC/Boilers :</span>
                        <span className="text-white font-bold">{submittedProposal.user.itemsToScan} Units</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-neutral-450">
                        <span>2. Est. Certified Level II Field Hours :</span>
                        <span className="text-white font-bold">~ {submittedProposal.estimate.estimatedHours} Hrs</span>
                      </div>

                      <div className="flex justify-between items-center text-neutral-450">
                        <span>3. NFPA 70B & OSHA Reporting Delivery :</span>
                        <span className="text-orange-500 font-bold">INCLUDED</span>
                      </div>

                      <div className="border-t border-dotted border-white/10 pt-2 flex justify-between items-center font-bold text-sm text-white">
                        <span>PROPOSAL VALUE ESTIMATE :</span>
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-extrabold text-base">
                          {submittedProposal.estimate.baseEstimate}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Additional notes */}
                  {submittedProposal.user.message && (
                    <div className="bg-black/50 p-3 rounded text-neutral-450 text-[11px] font-sans border border-white/5">
                      <strong className="text-neutral-300 font-bold block mb-1">Access Constraints / Instructions Provided:</strong>
                      "{submittedProposal.user.message}"
                    </div>
                  )}

                  {/* Doc Footer Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-white/5 font-mono">
                    <button
                      id="print-proposal"
                      onClick={() => window.print()}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white rounded text-xs tracking-wider cursor-pointer"
                    >
                      <Printer size={13} />
                      Print Proposal Draft
                    </button>
                    <button
                      id="reset-form"
                      onClick={handleReset}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#171717] hover:bg-[#222] text-orange-500 text-xs tracking-wider uppercase rounded cursor-pointer border border-white/5"
                    >
                      <RefreshCw size={13} />
                      Edit Parameters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
