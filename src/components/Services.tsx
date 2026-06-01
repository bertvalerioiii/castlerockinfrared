import { useState, ComponentType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, Settings, CloudRain, ShieldCheck, Orbit, 
  Sun, Cpu, Flame, FileText, Building, 
  ArrowUpRight, Scale, CheckCircle2, X 
} from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

const iconMap: { [key: string]: ComponentType<{ className?: string; size?: number }> } = {
  Zap,
  Settings,
  CloudRain,
  ShieldCheck,
  Orbit,
  Sun,
  Cpu,
  Flame,
  FileText,
  Building
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-[#0d0d0d] border-b border-white/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-orange-500 block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tighter text-white mb-4 leading-none">
              Thermal Imaging Services
            </h2>
            <p className="text-neutral-400 font-sans font-light">
              We provide precise thermal imaging across a wide spectrum of electrical, mechanical, and structural assets to assure compliance, safety, and continuity.
              Click any service below to view in-depth compliance guidelines.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Zap;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                whileHover={{ y: -4, borderColor: "rgba(249, 115, 22, 0.45)" }}
                className="bg-[#121212]/80 p-6 rounded-lg border border-white/5 flex flex-col justify-between transition-all duration-300 cursor-pointer group hover:bg-[#16161a] relative overflow-hidden"
                onClick={() => setSelectedService(service)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Visual grid light effect on hover */}
                <div className="absolute inset-0 bg-radial from-orange-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Icon wrapper */}
                  <div className="p-3 bg-[#171717] rounded-lg inline-flex mb-5 text-orange-500 border border-white/5 group-hover:border-orange-500/30 group-hover:bg-orange-950/20 transition-all duration-300">
                    <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="text-[17px] font-sans font-bold text-white tracking-tight mb-2 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-sans leading-relaxed line-clamp-3 mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-neutral-500 group-hover:text-orange-500 transition-colors pt-2 mt-auto border-t border-white/5">
                  <span>View Breakdown</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Technical Breakdown Dialog Drawer */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />
            
            <motion.div
              id="service-modal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-[#0d0d0d] max-w-lg w-full rounded-lg border border-white/10 shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
              
              <button
                id="close-service-modal"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-neutral-450 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 bg-orange-950/30 rounded-lg text-orange-500 border border-orange-900/30">
                  {(() => {
                    const IconComponent = iconMap[selectedService.icon] || Zap;
                    return <IconComponent size={24} />;
                  })()}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-medium text-orange-500 tracking-wider uppercase block">
                    SERVICE STANDARD DOCUMENT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-sans font-black text-white tracking-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-5 text-neutral-300 font-sans text-sm leading-relaxed mb-6">
                <p>{selectedService.longDesc}</p>
                
                {selectedService.complianceLink && (
                  <div className="bg-[#151515]/90 border border-white/5 rounded p-4 flex items-start gap-3">
                    <Scale size={18} className="text-orange-500 shrink-0 mt-0.5" />
                    <div className="font-mono text-xs text-neutral-400">
                      <span className="text-orange-500 font-semibold uppercase block mb-1">Compliance Standard Alignment</span>
                      This survey process maps 100% to directives mapped in <strong className="text-white">{selectedService.complianceLink}</strong>, guaranteeing actionable inspection audits for risk assessors.
                    </div>
                  </div>
                )}

                <div className="border-t border-white/5 pt-4 flex flex-col gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-550">Inspection Guidelines:</span>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-neutral-440">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-orange-500" /> Dynamic Load Testing
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-orange-500" /> Radiometric Recording
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-orange-500" /> Calibrated Temperature Scale
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-orange-500" /> Certified Level III Review
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/5 font-mono">
                <button
                  id="modal-close-btn"
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white rounded text-xs tracking-wider cursor-pointer"
                >
                  Close Document
                </button>
                <a
                  href="#contact"
                  id="modal-request-btn"
                  onClick={() => {
                    setSelectedService(null);
                    // Standard routing
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-sm text-xs tracking-wider uppercase transition-all cursor-pointer"
                >
                  Request Fast Scan
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
