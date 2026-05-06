import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-gray-400" size={24} />,
      title: "Email",
      details: "adityabatla9@gmail.com",
    },
    {
      icon: <Phone className="text-gray-400" size={24} />,
      title: "Call me",
      details: "+91 9636788945",
    },
    {
      icon: <MapPin className="text-gray-400" size={24} />,
      title: "My location",
      details: "Vadodara, Gujarat, India",
    }
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-green-500/10 blur-[150px] -z-10 rounded-full" />

      {/* Background Big Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full overflow-hidden flex justify-center -z-20 opacity-5 select-none pointer-events-none">
        <h1 className="text-[15rem] font-bold">CONTACT</h1>
      </div>

      <div className="flex items-center gap-2 mb-12 w-max glass-panel px-4 py-2 rounded-full mx-auto md:mx-0">
        <Mail size={16} className="text-gray-400" />
        <span className="text-sm text-gray-300">Contact</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in touch</h2>
            <p className="text-gray-400 max-w-md">
              Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and ideas.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-panel p-6 flex items-center justify-between group hover:bg-white/10 transition-colors cursor-pointer rounded-2xl border border-white/5">
                <div className="flex items-center gap-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{info.title}</h4>
                    <p className="text-gray-400 text-sm">{info.details}</p>
                  </div>
                </div>
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight size={18} className="text-gray-400 group-hover:text-white" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className="glass-panel p-8 rounded-3xl flex flex-col gap-6 h-full border border-white/10 bg-white/[0.03]">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Name"
                className="glass-input w-full bg-white/5 border-white/10 rounded-2xl px-5 py-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                className="glass-input w-full bg-white/5 border-white/10 rounded-2xl px-5 py-4"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <textarea
                placeholder="Message"
                rows="6"
                className="glass-input w-full h-full resize-none bg-white/5 border-white/10 rounded-2xl px-5 py-4"
              ></textarea>
            </div>
            <Button className="w-full py-4 mt-2 rounded-2xl bg-white text-black hover:bg-gray-200">
              Submit
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
