import { Target, ClipboardList, Shield, Landmark, CheckSquare } from 'lucide-react';
import { ABOUT_TEXTS } from '../data';

const breakerThermal = "/src/assets/images/breaker_thermal_1780119147762.png";

export default function About() {
  const complianceIcons = [
    { label: "NFPA 70B Compliance", detail: "Standard for Electrical Equipment Maintenance", icon: ClipboardList },
    { label: "OSHA Compliance Inspections", detail: "General Site Safety and Hazard Abatement", icon: Shield },
    { label: "Insurance Documentation", detail: "Risk reduction audits to lower property premiums", icon: Landmark },
    { label: "Predictive Maintenance Programs", detail: "Pre-planned periodic thermography cycles", icon: CheckSquare }
  ];

  return (
    <section id="about" className="py-24 bg-[#0d0d0d] border-b border-white/5 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-orange-500/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mission & About Copy (7 cols) */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-orange-500 block mb-2">
              Corporate Overview
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tighter text-white mb-6 leading-none">
              Thermal Diagnostics <br className="hidden sm:block" />
              Built on Field Experience
            </h2>
            
            <p className="text-neutral-200 font-sans text-base leading-relaxed mb-6 font-semibold">
              {ABOUT_TEXTS.companyOverview}
            </p>

            <div className="flex items-start gap-4 mb-8 bg-black/40 border border-white/5 p-5">
              <div className="p-3 bg-orange-950/20 text-orange-500 border border-orange-900/30 rounded shrink-0">
                <Target size={22} />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-neutral-500 block mb-1">Our Mission Scope</span>
                <p className="text-neutral-300 font-sans font-light text-sm leading-relaxed">
                  {ABOUT_TEXTS.mission}
                </p>
              </div>
            </div>

            <p className="text-neutral-400 font-sans font-light text-sm leading-relaxed mb-6">
              With advanced, high-resolution calibrated thermal scanners and years of physical facility experience, Castle Rock delivers legal compliant reporting structures. We provide thorough analyses required to secure insurability ratings, prevent industrial outages, and defend personnel safety.
            </p>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-orange-500/10 border border-orange-500/25 text-orange-500 text-xs font-mono uppercase tracking-wider font-semibold">
              {ABOUT_TEXTS.nationwide}
            </span>
          </div>

          {/* Right Column: Interactive Compliance Frameworks Visual Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Visual Image representing the physical field inspection (Breaker) */}
            <div className="relative rounded-lg overflow-hidden border border-white/5 shadow-2xl h-52 group">
              <img
                src={breakerThermal}
                alt="Breaker hot spot inspection"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-0 transition-all duration-750"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 font-mono text-[9px] text-neutral-400 bg-neutral-950/80 px-2 py-1 rounded border border-white/5">
                SCAN_REF_MCC_04B // PEAK CH: +234.6°F
              </div>
            </div>

            {/* Compliance Matrix Card */}
            <div className="bg-[#121212] border border-white/5 rounded-lg p-6 shadow-xl">
              <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest block mb-4">
                Structured Reporting Standards
              </span>

              <div className="space-y-4">
                {complianceIcons.map((item, idx) => {
                  const CompIcon = item.icon;
                  return (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="p-1.5 bg-[#171717] rounded text-orange-500 border border-white/5 shrink-0 mt-0.5">
                        <CompIcon size={14} />
                      </div>
                      <div>
                        <h4 className="text-white text-xs font-semibold font-sans">{item.label}</h4>
                        <p className="text-[10px] text-neutral-400 font-mono mt-0.5">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
