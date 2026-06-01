import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../data';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black text-neutral-400 border-t border-white/10 font-sans text-xs select-none">
      
      {/* Upper Grid section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand Column (Col span 4) */}
        <div className="md:col-span-4 space-y-4">
          <div 
            className="flex items-center gap-2 cursor-pointer inline-flex"
            onClick={() => onNavigate('hero')}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded bg-[#121212] border border-white/5">
              <Shield size={16} className="text-orange-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-tight text-white leading-tight">
                CASTLE ROCK
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-orange-500 font-semibold">
                INFRARED
              </span>
            </div>
          </div>
          <p className="text-neutral-500 leading-relaxed text-xs max-w-sm font-sans">
            Professional thermographic inspections and electrical testing compliance mapping adhering meticulously to standard NFPA 70B and OSHA regulatory guidelines.
          </p>
          <div className="flex gap-4 pt-1 text-[10px] text-neutral-600 font-mono">
            <span>ITC LEVEL III CERTIFIED</span>
            <span>•</span>
            <span>NATIONWIDE SERVICE</span>
          </div>
        </div>

        {/* Services column (Col span 4) */}
        <div className="md:col-span-4 space-y-3.5 text-left">
          <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider">
            Thermographic Solutions
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-500 text-xs text-left font-sans">
            {SERVICES.slice(0, 6).map((srv) => (
              <li key={srv.id}>
                <a
                  href="#services"
                  onClick={() => onNavigate('services')}
                  className="hover:text-orange-500 transition-colors"
                >
                  {srv.title.replace(' Inspections', '').replace(' Investigations', '').replace(' Thermal Analysis', '')}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column (Col span 4) */}
        <div className="md:col-span-4 space-y-3.5 text-left">
          <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider">
            Corporate Offices
          </h4>
          <div className="space-y-2 text-neutral-500 leading-relaxed text-xs font-sans">
            <div className="flex items-start gap-2">
              <MapPin size={12} className="text-neutral-600 shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.office}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={12} className="text-neutral-600 shrink-0" />
              <div className="flex flex-col font-mono font-semibold">
                {CONTACT_INFO.phones.map((phone, i) => (
                  <span key={phone}>{phone}{i === CONTACT_INFO.phones.length - 1 ? " (Toll Free)" : ""}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={12} className="text-neutral-600 shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-orange-500 transition-colors font-mono font-semibold">
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Lower Copyright section */}
      <div className="bg-[#050505] text-neutral-600 py-6 border-t border-white/5 font-mono text-[10px]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© 2026 Castle Rock Infrared. All Rights Reserved.</p>
          <div className="flex gap-4 items-center">
            <span className="text-[10px] text-neutral-400 font-bold tracking-tighter italic">NATIONWIDE COVERAGE</span>
            <span className="text-neutral-700">|</span>
            <span className="text-neutral-500 font-mono font-semibold">{CONTACT_INFO.email}</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
