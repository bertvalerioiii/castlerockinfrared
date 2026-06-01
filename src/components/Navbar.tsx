import { useState, useEffect } from 'react';
import { Menu, X, Shield, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO } from '../data';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Services', id: 'services' },
    { label: 'Applications', id: 'applications' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Top Banner with phone info */}
      <div className="bg-[#050505] text-neutral-400 text-xs py-2 px-4 border-b border-white/5 hidden md:block select-none font-mono">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse inline-block" />
              NFPA 70B Compliance Standard Active
            </span>
            <span className="text-neutral-900">|</span>
            <span>Nationwide Thermography Services</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${CONTACT_INFO.phones[0]}`} className="hover:text-orange-500 transition-colors flex items-center gap-1">
              <Phone size={12} className="text-orange-500" />
              {CONTACT_INFO.phones[0]}
            </a>
            <span className="text-neutral-900">|</span>
            <a href={`tel:${CONTACT_INFO.phones[1]}`} className="hover:text-orange-500 transition-colors flex items-center gap-1">
              <Phone size={12} className="text-orange-500" />
              {CONTACT_INFO.phones[1]} (Toll Free)
            </a>
            <span className="text-neutral-900">|</span>
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-orange-500 transition-colors flex items-center gap-1">
              <Mail size={12} className="text-orange-500" />
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </div>

      <header
        id="navbar"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 border-b border-white/5 backdrop-blur-md py-3 shadow-lg'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div 
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => handleLinkClick('hero')}
            >
              <div id="logo-icon" className="relative flex items-center justify-center w-9 h-9 rounded bg-[#121212] border border-white/10 transition-colors group-hover:border-orange-500/50 overflow-hidden">
                <div className="absolute inset-0 bg-radial from-orange-950/40 via-transparent to-transparent" />
                <Shield size={18} className="text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -bottom-1 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600 opacity-80" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-[35px] tracking-tighter text-white leading-none">
                  CASTLE ROCK
                </span>
                <span className="font-mono text-[20px] uppercase tracking-[0.25em] text-orange-500 font-extrabold leading-none mt-1">
                  INFRARED
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-[20px]">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-[18px] uppercase tracking-[0.18em] font-extrabold transition-colors relative py-1 lg:py-2 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-orange-500'
                      : 'text-neutral-400 hover:text-orange-550 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>



            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-neutral-400 hover:text-white transition-colors p-1"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#0d0d0d] border-b border-white/5 px-4 pt-2 pb-6 absolute top-full left-0 w-full overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col gap-3 py-3">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => handleLinkClick(item.id)}
                    className={`text-left py-3 px-4 rounded-md font-bold text-base uppercase tracking-wider transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? 'bg-neutral-900 text-orange-500 border-l-4 border-orange-500'
                        : 'text-neutral-200 hover:bg-neutral-900/40 hover:text-orange-500'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3">
                  <div className="text-neutral-500 font-mono text-[10px] px-3">
                    COMPLIANCE ASSISTANT
                  </div>
                  <div className="px-3 flex flex-col gap-1 text-xs text-neutral-400 font-mono">
                    {CONTACT_INFO.phones.map((phone, idx) => (
                      <p key={phone}>PH {idx + 1}: {phone}{idx === CONTACT_INFO.phones.length - 1 ? " (Toll Free)" : ""}</p>
                    ))}
                    <p className="text-orange-500">{CONTACT_INFO.email}</p>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
