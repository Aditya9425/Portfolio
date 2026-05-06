import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current = activeSection;
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            current = section.id;
          }
        }
      });

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, links]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-6xl z-50 flex items-center justify-between px-4 py-3 md:px-6 md:py-4 glass-panel rounded-full"
    >
      <div 
        className="text-lg md:text-xl font-bold tracking-tight cursor-pointer whitespace-nowrap mr-4" 
        onClick={() => scrollToSection('home')}
      >
        Aditya Bathla
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`text-sm font-medium transition-colors hover:text-green-400 ${
              activeSection === link.id ? 'text-green-400' : 'text-gray-300'
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>
      
      {/* Mobile view could have a simplified menu or scroll horizontal, for now we just keep the desktop visible or use a small row */}
      <div className="md:hidden flex items-center gap-3 overflow-x-auto no-scrollbar pr-2">
         {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`text-xs font-medium transition-colors hover:text-green-400 whitespace-nowrap ${
              activeSection === link.id ? 'text-green-400' : 'text-gray-300'
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
