import React, { useState, useEffect, useRef } from 'react';
import { motion, animate } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const mobileNavRef = useRef(null);

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  // ScrollSpy effect
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

  // Mobile horizontal scroll effect using Framer Motion for cross-browser smoothness
  useEffect(() => {
    if (mobileNavRef.current) {
      const activeElement = document.getElementById(`mobile-nav-${activeSection}`);
      if (activeElement) {
        const container = mobileNavRef.current;
        
        // Calculate dimensions to center the element
        const elementRect = activeElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        // Determine the target scroll position
        const targetScrollLeft = container.scrollLeft + (elementRect.left - containerRect.left) - (containerRect.width / 2) + (elementRect.width / 2);

        // Animate the scroll position using Framer Motion's spring
        animate(container.scrollLeft, targetScrollLeft, {
          type: "spring",
          stiffness: 200,
          damping: 25,
          onUpdate: (latest) => {
            if (mobileNavRef.current) {
              mobileNavRef.current.scrollLeft = latest;
            }
          }
        });
      }
    }
  }, [activeSection]);

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
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-6xl z-50 flex items-center justify-between px-3 py-2 md:px-6 md:py-4 glass-panel rounded-full"
    >
      <div 
        className="text-lg md:text-xl font-bold tracking-tight cursor-pointer whitespace-nowrap mr-4" 
        onClick={() => scrollToSection('home')}
      >
        Aditya Bathla
      </div>
      
      <div className="hidden md:flex items-center gap-2">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
              activeSection === link.id ? 'text-black' : 'text-gray-300 hover:text-white'
            }`}
          >
            {activeSection === link.id && (
              <motion.div
                layoutId="activeDesktopTab"
                className="absolute inset-0 bg-green-400 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </button>
        ))}
      </div>
      
      {/* Mobile view horizontal scrolling container */}
      <div 
        ref={mobileNavRef}
        className="md:hidden flex items-center gap-2 overflow-x-auto no-scrollbar pr-4"
      >
         {links.map((link) => (
          <button
            key={link.id}
            id={`mobile-nav-${link.id}`}
            onClick={() => scrollToSection(link.id)}
            className={`relative text-xs font-medium transition-colors whitespace-nowrap px-3 py-1.5 rounded-full ${
              activeSection === link.id ? 'text-black' : 'text-gray-300 hover:text-white'
            }`}
          >
            {activeSection === link.id && (
              <motion.div
                layoutId="activeMobileTab"
                className="absolute inset-0 bg-green-400 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
