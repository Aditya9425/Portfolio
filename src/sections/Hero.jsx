import React from 'react';
import { motion } from 'framer-motion';
import heroAvatar from '../assets/hero_avatar.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-green-500/20 rounded-full blur-[120px] -z-10" />

      {/* SOCIAL vertical text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 text-sm tracking-widest text-gray-500 rotate-180" style={{ writingMode: 'vertical-rl' }}>
        <span>SOCIAL</span>
        <div className="w-[1px] h-24 bg-gray-500/50"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">Hey 👋, I'm a</span>
            <span className="text-xl font-medium text-gray-300">Full Stack Developer</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text pb-2">
            ADITYA<br />BATHLA
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-md">
            Turning ideas into scalable web products. I build fast, scalable, and user-friendly web applications.
          </p>

          {/* Bottom left info (small) */}
          <div className="mt-16 text-xs text-gray-500 space-y-1">
            <a href="mailto:adityabathla9@gmail.com">[adityabathla9@gmail.com]</a>
            <p>Vadodara, Gujarat, India</p>
          </div>
        </motion.div>

        {/* Right Side: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-[450px] glass-panel p-3 rounded-[2.5rem]"
          >
            <img
              src={heroAvatar}
              alt="Aditya Bathla"
              className="w-full h-auto object-contain rounded-[2rem] shadow-2xl"
            />
          </motion.div>

          {/* Avatar glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-500/10 rounded-full blur-[80px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
