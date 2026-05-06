import React from 'react';
import { motion } from 'framer-motion';
import { FileCode2, Palette, Box, Database, Server, Component, Zap, Flame } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FileCode2 size={32} className="text-orange-500" /> },
    { name: 'CSS', icon: <Palette size={32} className="text-blue-500" /> },
    { name: 'React', icon: <Component size={32} className="text-cyan-400" /> },
    { name: 'Framer Motion', icon: <Zap size={32} className="text-purple-500" /> },
    { name: 'Node.js', icon: <Box size={32} className="text-green-500" /> },
    { name: 'Express.js', icon: <Server size={32} className="text-gray-300" /> },
    { name: 'MongoDB', icon: <Database size={32} className="text-green-600" /> },
    { name: 'Firebase', icon: <Flame size={32} className="text-yellow-500" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
        <p className="text-gray-400">My technical toolkit</p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="glass-panel p-8 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform duration-300 cursor-default group"
          >
            <div className="group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <span className="font-medium text-gray-200">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
