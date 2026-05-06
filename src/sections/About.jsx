import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import aboutAbstract from '../assets/about_abstract.png';

const About = () => {
  const ImageCard = (
    <div className="aspect-square rounded-3xl glass-panel bg-gradient-to-tr from-gray-900 to-gray-800 flex items-center justify-center p-5 lg:p-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-24 lg:w-40 h-24 lg:h-40 bg-purple-500/20 rounded-full blur-[30px] lg:blur-[40px]" />
      <div className="absolute -bottom-10 -left-10 w-24 lg:w-40 h-24 lg:h-40 bg-green-500/20 rounded-full blur-[30px] lg:blur-[40px]" />
      
      <img 
        src={aboutAbstract} 
        alt="Abstract 3D Shape" 
        className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_10px_rgba(74,222,128,0.15)] lg:drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]"
      />
    </div>
  );

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
      {/* Left side text */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col text-center lg:text-left w-full"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 lg:mb-8">About Me</h2>
        
        {/* MOBILE ONLY IMAGE */}
        <div className="lg:hidden w-[82%] max-w-[280px] mx-auto mb-6">
          {ImageCard}
        </div>

        <div className="space-y-4 text-gray-400 text-base md:text-lg">
          <p>
            I am a B.Tech student with a strong passion for web development and software engineering. I enjoy building dynamic, full-stack applications that solve real-world problems.
          </p>
          <p>
            Currently, I'm deep into learning Data Structures and Algorithms in Java, while concurrently honing my skills as a Full Stack Developer.
          </p>
          <p className="text-gray-300 border-l-2 border-green-500 pl-4 mt-5 mb-5 lg:my-6 text-left inline-block">
            I am open to collaboration and building impactful projects. Let's create something amazing together.
          </p>
        </div>

        <div className="pt-1 lg:pt-4 flex justify-center lg:justify-start">
          <Button variant="glass" className="w-full sm:w-auto">Hire Me</Button>
        </div>
      </motion.div>

      {/* Right side illustration (DESKTOP ONLY) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:block flex-1 w-full max-w-md mx-auto"
      >
        {ImageCard}
      </motion.div>
    </section>
  );
};

export default About;
