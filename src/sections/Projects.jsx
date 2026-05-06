import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Button from '../components/Button';
import streakImage from '../assets/streak_maintainer.png';
import tastewiseImage from '../assets/tastewise.png';

const Projects = () => {
  const projects = [
    {
      title: 'Streak Maintainer',
      description: 'A comprehensive habit tracking application that helps users build consistency through daily streaks and analytics.',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      imageUrl: streakImage,
      image: 'bg-gradient-to-br from-green-600/40 to-blue-600/40',
      liveLink: 'https://daily-streak-maintener.vercel.app/auth', // Replace with your actual live link
      githubLink: '#' // Replace with your actual GitHub link
    },
    {
      title: 'Tastewise',
      description: 'A complete restaurant web platform with online ordering, menu management, and a dedicated admin dashboard.',
      tags: ['React', 'Supabase', 'Tailwind CSS', 'Vite'],
      imageUrl: tastewiseImage,
      image: 'bg-gradient-to-br from-purple-600/40 to-pink-600/40',
      liveLink: '#', // Replace with your actual live link
      githubLink: '#' // Replace with your actual GitHub link
    }
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400">Some of my recent work</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`glass-panel overflow-hidden group flex flex-col ${index === 2 ? 'md:col-span-2 md:w-1/2 md:justify-self-center' : ''}`}
          >
            {/* Project Image */}
            <div className={`h-48 w-full ${project.image} overflow-hidden border-b border-white/10`}>
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-white/50 font-medium tracking-widest uppercase text-sm">Project Preview</span>
                </div>
              )}
            </div>

            <div className="p-8 flex-1 flex flex-col relative bg-white/5 backdrop-blur-sm z-10">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="gradient" className="w-full py-2 text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </Button>
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="glass" className="w-full py-2 text-sm">
                    <FaGithub size={16} /> GitHub
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
