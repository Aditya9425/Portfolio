import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-white text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
    glass: "glass-panel hover:bg-white/10 hover:border-white/20",
    gradient: "bg-gradient-to-r from-green-400 to-emerald-600 text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
