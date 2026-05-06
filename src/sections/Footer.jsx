import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-6 mt-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Aditya Bathla
        </div>

        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Aditya Bathla. All rights reserved.
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/Aditya9425" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-green-400 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/adityabathla945/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-green-400 transition-colors">
            <FaLinkedin size={20} />
          </a>
          {/* <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-green-400 transition-colors">
            <FaTwitter size={20} />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
