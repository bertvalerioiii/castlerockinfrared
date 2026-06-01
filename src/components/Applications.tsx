import { useState, ComponentType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building, ShieldCheck, Factory, Heart, Hotel, Database, Warehouse, Sun, Flame, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { APPLICATIONS } from '../data';

const breakerThermal = "/src/assets/images/breaker_thermal_1780119147762.png";
const solarThermal = "/src/assets/images/drone_solar_thermal_1780119168843.png";

// Icons lookup for industries
const iconMap: { [key: string]: ComponentType<{ className?: string; size?: number }> } = {
  "commercial-buildings": Building,
  "industrial-plants": Factory,
  "hospitals": Heart,
  "hotels-resorts": Hotel,
  "data-centers": Database,
  "warehouses": Warehouse,
  "solar-installations": Sun,
  "roof-systems": Building,
  "electrical-distribution": Flame,
  "insurance-compliance": ShieldCheck
};

export default function Applications() {
  const [activeTab, setActiveTab] = useState(APPLICATIONS[0].id);
  const activeApp = APPLICATIONS.find(app => app.id === activeTab) || APPLICATIONS[0];

  // Map industry to specific thermograms when we want to display comparison
  const getThermalAsset = (id: string) => {
    if (id === "solar-installations") return solarThermal;
    return breakerThermal; // Fallback for electrical panel
  };

  const IconComponent = iconMap[activeApp.id] || Building;

  return (
    <section id="applications" className="py-24 bg-[#0d0d0d] border-b border-white/5 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background design accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-orange-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-14 max-w-2xl text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-orange-500 block mb-2">
            Industries Served
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tighter text-white mb-4 leading-none animate-fade-in">
            Critical Applications
          </h2>
          <p className="text-neutral-400 font-sans font-light text-base leading-relaxed">
            Castle Rock Infrared services critical high-value facilities. Explore the customized workflows, compliance needs, and diagnostic benchmarks we bring to each industry vertical.
          </p>
        </div>

        {/* Outer Split Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Application List/Tabs (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar border-r border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 px-3 mb-2 block">
              Facility Class List
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {APPLICATIONS.map((app) => {
                const TabIcon = iconMap[app.id] || Building;
                return (
                  <button
                    key={app.id}
                    id={`app-tab-${app.id}`}
                    onClick={() => setActiveTab(app.id)}
                    className={`flex items-center gap-3 py-3 px-4 rounded transition-all cursor-pointer ${
                      activeTab === app.id
                        ? 'bg-[#151515] border border-orange-500/30 text-white shadow-md'
                        : 'bg-black/30 border border-white/5 text-neutral-400 hover:text-white hover:bg-neutral-900/30'
                    }`}
                  >
                    <div className={`p-1.5 rounded ${activeTab === app.id ? 'text-orange-500 bg-orange-950/20' : 'text-neutral-500'}`}>
                      <TabIcon size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-sans font-bold leading-tight">{app.name}</span>
                      <span className="text-[9px] font-mono uppercase tracking-wide text-neutral-500 mt-1">{app.industryType}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Immersive Showcase Panel (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeApp.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-[#111] border border-white/5 rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl animate-fade-in"
              >
                {/* Visual / Thermogram Split Side (Col span 5 on MD) */}
                <div id="visual-showcase" className="md:col-span-5 relative min-h-[250px] md:min-h-full bg-neutral-950 flex flex-col justify-end group overflow-hidden border-r border-white/5">
                  
                  {/* Photo Overlay Switcher - Simulated interactive comparisons */}
                  <div className="absolute inset-0 select-none">
                    {/* Visual Photo */}
                    <img
                      src={activeApp.imageUrl}
                      alt={`${activeApp.name} visible light view`}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.7] group-hover:opacity-0 transition-opacity duration-1000"
                    />
                    
                    {/* Thermal Thermogram Photo */}
                    <img
                      src={getThermalAsset(activeApp.id)}
                      alt={`${activeApp.name} thermal diagnostics`}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000 saturate-[1.1] brightness-[0.85]"
                    />
                  </div>

                  {/* Gradient bottom bar for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-1" />

                  {/* Info HUD */}
                  <div className="relative p-5 z-2 font-mono text-[9px]">
                    <div className="flex items-center justify-between text-neutral-400 mb-1">
                      <span className="flex items-center gap-1 text-neutral-350">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        LIVE DIAGNOSTIC MODE
                      </span>
                      <span className="text-neutral-500 font-mono">100% PASS</span>
                    </div>
                    <div className="text-[9px] text-orange-500 font-bold block bg-black/70 backdrop-blur-sm px-2.5 py-1.5 rounded border border-white/5 lowercase font-mono">
                      [Hover image to trigger infrared spectral scan]
                    </div>
                  </div>
                </div>

                {/* Content Side (Col span 7 on MD) */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Breadcrumb classification */}
                    <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-orange-500 uppercase block mb-1">
                      Target Sector Scope — {activeApp.industryType}
                    </span>
                    
                    <h3 className="text-xl sm:text-2xl font-sans font-black text-white tracking-tight mb-4 flex items-center gap-2">
                      <IconComponent size={22} className="text-orange-500" />
                      {activeApp.name}
                    </h3>

                    <p className="text-neutral-300 font-sans font-light text-sm leading-relaxed mb-6">
                      {activeApp.description}
                    </p>

                    <div className="bg-black/40 p-4 rounded border border-white/5 mb-6">
                      <span className="text-[10px] font-mono text-neutral-400 block mb-3 uppercase tracking-wider">
                        Primary Inspections Benefits Include:
                      </span>
                      <div className="space-y-2.5">
                        {activeApp.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                            <CheckCircle2 size={14} className="text-orange-500 shrink-0 mt-0.5" />
                            <span className="font-sans font-light">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Footer inside panel */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between font-mono">
                    <div className="flex items-center gap-1.5 text-neutral-500 text-[10px]">
                      <Sparkles size={11} className="text-orange-500" />
                      NFPA 70B Calibrated
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-orange-500 transition-all uppercase"
                    >
                      Configure Scope
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
