import { motion } from 'motion/react';
import { HERO_CONTENT, CONTACT_INFO } from '../data';
import heroBg from '../assets/images/hero_thermal_bg_1780119124846.png';
import breakerThermal from '../assets/images/breaker_thermal_1780119147762.png';

interface HeroProps {
  onCtaClick: (targetId: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center bg-[#0d0d0d] overflow-hidden py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 select-none"
    >
      {/* Thermal Gradient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-orange-600 blur-[130px]" />
        <div className="absolute bottom-[-5%] left-[10%] w-[400px] h-[400px] rounded-full bg-red-800 blur-[110px]" />
      </div>

      {/* Background Image with Thermal Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={heroBg}
          alt="Thermal inspection scan background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter saturate-[1.2] brightness-50"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
      </div>

      {/* Grid Scanlines Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none z-1" />

      <div className="relative max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text details */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[1px] w-12 bg-orange-500" />
            <span className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase font-mono">
              Industry Certified Leaders
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black leading-[1.0] tracking-tighter text-white mb-6"
          >
            Infrared Inspections For<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 animate-pulse">
              Safer, Smarter Facilities
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg max-w-lg leading-relaxed mb-10 font-sans"
          >
            {HERO_CONTENT.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button
              id="hero-primary-cta"
              onClick={() => onCtaClick('contact')}
              className="px-8 py-4 bg-orange-600 text-white font-bold uppercase text-xs tracking-widest hover:bg-orange-500 transition-colors cursor-pointer"
            >
              Contact Us Today
            </button>
            
            <div className="flex flex-col justify-center border-l border-white/10 pl-6">
              <span className="text-xs text-neutral-500 uppercase tracking-widest font-mono">Emergency Support &amp; Direct</span>
              <span className="text-base sm:text-lg font-mono font-bold text-white tracking-tight flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-1 select-all">
                <a href={`tel:${CONTACT_INFO.phones[1]}`} className="hover:text-orange-500 transition-colors">{CONTACT_INFO.phones[1]}</a>
                <span className="hidden sm:inline text-neutral-600">|</span>
                <a href={`tel:${CONTACT_INFO.phones[0]}`} className="hover:text-orange-500 transition-colors">{CONTACT_INFO.phones[0]}</a>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Clean, Polished Thermal Diagnostic Card */}
        <div className="lg:col-span-5 relative flex items-center justify-center p-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] border border-white/5 rounded-lg relative overflow-hidden bg-black shadow-2xl group cursor-pointer"
          >
            {/* Visual View (Visible light) */}
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              alt="Normal electrical equipment inspection view"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.7] group-hover:opacity-0 transition-opacity duration-700"
            />

            {/* Thermal Anomaly Diagnostics Overlay */}
            <img
              src={breakerThermal}
              alt="Thermal diagnostic hotspot view"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 saturate-[1.2] brightness-90"
            />

            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

            {/* Corner Indicators */}
            <div className="absolute top-4 left-4 font-mono text-[9px] text-neutral-400 bg-black/75 px-2.5 py-1.5 rounded border border-white/5 backdrop-blur-sm">
              <span className="text-orange-500 font-bold block mb-0.5">TARGET REF: SYS_B_04</span>
              <span>100% BALANCED</span>
            </div>

            <div className="absolute top-4 right-4 font-mono text-[9px] text-neutral-400 bg-black/75 px-2.5 py-1.5 rounded border border-white/5 backdrop-blur-sm">
              <span>9-14 µm INFRARED</span>
            </div>

            {/* Bottom tooltip */}
            <div className="absolute bottom-4 left-4 right-4 text-center font-mono text-[10px] text-orange-500 bg-black/80 py-2 rounded border border-white/5 backdrop-blur-sm group-hover:text-red-500 transition-colors uppercase font-bold">
              [Hover / Touch photo to trigger thermal scan]
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
