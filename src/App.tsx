/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Applications from './components/Applications';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Unified scroll monitor to highlight the correct nav link dynamically
  useEffect(() => {
    const sections = ['hero', 'services', 'applications', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // Offset for sticky headers
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
    } else if (el) {
      // Offset calculated to dock perfectly below navbar
      const yOffset = -70; 
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#0d0d0d] text-white font-sans selection:bg-orange-500 selection:text-white antialiased overflow-x-hidden">
      
      {/* Sticky Top Navbar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content">
        
        {/* Full-width Hero Banner section */}
        <Hero onCtaClick={handleNavigate} />

        {/* Dynamic Grid layout with icon cards for our 10 Services */}
        <Services />

        {/* Dedicated industries-served Applications slide section */}
        <Applications />

        {/* Core details, overview and Compliance Standards list */}
        <About />

        {/* Interactive request inspection planner with pricing estimator */}
        <Contact />

      </main>

      {/* Solid dark Footer segment */}
      <Footer onNavigate={handleNavigate} />
      
    </div>
  );
}
