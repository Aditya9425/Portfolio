import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import Button from '../components/Button';
import { a } from 'framer-motion/client';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-gray-400" size={24} />,
      title: "Email",
      details: "adityabathla9@gmail.com",
      href: "mailto:adityabathla9@gmail.com"
    },
    {
      icon: <Phone className="text-gray-400" size={24} />,
      title: "Call me",
      details: "+91 9636788945",
      href: "tel:+919636788945"
    },
    {
      icon: <MapPin className="text-gray-400" size={24} />,
      title: "My location",
      details: "Vadodara, Gujarat, India"
    }
  ];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all fields.');
      setStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    if (formData.message.trim().length < 10) {
      setErrorMessage('Message must be at least 10 characters long.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // User will replace this with their actual deployed Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxOPr3rgB7Xz9InK9DC0F90uQ07PPZVGmeNGt__snOt5ezu3P71JUjbo5sdMSRjQUMSZw/exec';

      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.result === 'success') {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-green-500/10 blur-[150px] -z-10 rounded-full" />

      {/* Background Big Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full overflow-hidden flex justify-center -z-20 opacity-5 select-none pointer-events-none">
        <h1 className="text-[6rem] sm:text-[8rem] md:text-[15rem] font-bold">CONTACT</h1>
      </div>

      <div className="flex items-center gap-2 mb-8 md:mb-12 w-max glass-panel px-4 py-2 rounded-full mx-auto md:mx-0">
        <Mail size={16} className="text-gray-400" />
        <span className="text-sm text-gray-300">Contact</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 md:gap-8 text-center md:text-left"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Get in touch</h2>
            <p className="text-gray-400 max-w-md">
              Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and ideas.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {contactInfo.map((info, index) => {
              const CardContent = (
                <>
                  <div className="flex items-center gap-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{info.title}</h4>
                      <p className="text-gray-400 text-sm">{info.details}</p>
                    </div>
                  </div>
                  {info.href && (
                    <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/20 transition-colors">
                      <ArrowUpRight size={18} className="text-gray-400 group-hover:text-white" />
                    </div>
                  )}
                </>
              );

              return info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  key={index}
                  className="glass-panel p-4 sm:p-6 flex items-center justify-between group hover:bg-white/10 transition-colors cursor-pointer rounded-2xl border border-white/5"
                >
                  {CardContent}
                </a>
              ) : (
                <div
                  key={index}
                  className="glass-panel p-4 sm:p-6 flex items-center justify-between rounded-2xl border border-white/5"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-3xl flex flex-col gap-6 h-full border border-white/10 bg-white/[0.03] relative overflow-hidden">

            {/* Success Overlay */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-3xl border border-green-500/30"
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  className="bg-green-500/20 text-green-400 p-4 rounded-full mb-4"
                >
                  <CheckCircle2 size={48} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">I'll get back to you soon.</p>
              </motion.div>
            )}

            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'loading'}
                placeholder="Name"
                className="glass-input w-full bg-white/5 border-white/10 focus:border-green-400/50 focus:bg-white/10 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 transition-all outline-none disabled:opacity-50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'loading'}
                placeholder="Email"
                className="glass-input w-full bg-white/5 border-white/10 focus:border-green-400/50 focus:bg-white/10 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 transition-all outline-none disabled:opacity-50"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                placeholder="Message"
                rows="6"
                className="glass-input w-full h-full resize-none bg-white/5 border-white/10 focus:border-green-400/50 focus:bg-white/10 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 transition-all outline-none disabled:opacity-50"
              ></textarea>
            </div>

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-xl border border-red-400/20"
              >
                <XCircle size={18} />
                <span className="text-sm">{errorMessage}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 sm:py-4 mt-2 rounded-2xl bg-white text-black hover:bg-gray-200 font-semibold transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
