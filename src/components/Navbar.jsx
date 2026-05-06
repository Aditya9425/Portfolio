import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 flex items-center justify-between px-6 py-4 glass-panel rounded-full"
    >
      <div className="text-xl font-bold tracking-tight">Aditya Bathla</div>
      <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:scale-105 transition-transform">
        <span>Menu</span>
        <Menu size={16} />
      </button>
    </motion.nav>
  );
};

export default Navbar;
