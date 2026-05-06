import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import aboutAbstract from '../assets/about_abstract.png';

const About = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      {/* Left side text */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
        
        <div className="space-y-4 text-gray-400 text-lg">
          <p>
            I am a B.Tech student with a strong passion for web development and software engineering. I enjoy building dynamic, full-stack applications that solve real-world problems.
          </p>
          <p>
            Currently, I'm deep into learning Data Structures and Algorithms in Java, while concurrently honing my skills as a Full Stack Developer.
          </p>
          <p className="text-gray-300 border-l-2 border-green-500 pl-4 my-6">
            I am open to collaboration and building impactful projects. Let's create something amazing together.
          </p>
        </div>

        <div className="pt-4">
          <Button variant="glass">Hire Me</Button>
        </div>
      </motion.div>

      {/* Right side illustration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 w-full max-w-md"
      >
        <div className="aspect-square rounded-3xl glass-panel bg-gradient-to-tr from-gray-900 to-gray-800 flex items-center justify-center p-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[40px]" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-500/20 rounded-full blur-[40px]" />
          
          <img 
            src={aboutAbstract} 
            alt="Abstract 3D Shape" 
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
