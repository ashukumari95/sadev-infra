import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -15 }
};

export default function ContactSection({ setActiveTab }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full pt-10 pb-10 px-6 md:px-10 max-w-7xl mx-auto z-10"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full mb-20">
        
        {/* Contact Form Container - Flat Corporate Design */}
        <div className="flex-1 bg-[#0A192F]/60 border border-white/10 p-8 md:p-12 rounded-xl shadow-xl relative overflow-hidden">
          
          <h2 className="text-3xl font-bold mb-8 text-white tracking-wide">
            Get in <span className="text-[#F2A900]">Touch</span>
          </h2>
          
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#F2A900]/10 flex items-center justify-center mb-6 border border-[#F2A900]/30">
                <CheckCircle2 className="w-8 h-8 text-[#F2A900]" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
              <p className="text-white/60 font-medium">Thank you for reaching out. Our engineering team will get back to you shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-[#F2A900] font-bold hover:text-[#E59400] text-sm uppercase tracking-widest transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">Full Name</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-md px-5 py-3.5 text-white focus:outline-none focus:border-[#F2A900]/50 focus:ring-1 focus:ring-[#F2A900]/20 transition-colors font-medium" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">Work Email</label>
                  <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-md px-5 py-3.5 text-white focus:outline-none focus:border-[#F2A900]/50 focus:ring-1 focus:ring-[#F2A900]/20 transition-colors font-medium" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">Project Requirements</label>
                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-md px-5 py-3.5 text-white focus:outline-none focus:border-[#F2A900]/50 focus:ring-1 focus:ring-[#F2A900]/20 transition-colors resize-none font-medium" placeholder="Tell us about your infrastructure needs..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 rounded-md bg-[#F2A900] hover:bg-[#E59400] text-[#0A192F] font-bold tracking-widest uppercase text-xs transition-colors flex items-center justify-center gap-3">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Direct Contact Cards - Elegant Edges */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-[#0A192F]/40 border border-white/10 p-8 md:p-10 rounded-xl flex-1 shadow-xl relative overflow-hidden group">
            <h3 className="text-xl font-bold mb-10 text-white tracking-wide">Direct Channels</h3>
            <div className="space-y-10">
              {/* WhatsApp Block */}
              <a href="https://wa.me/918955957893" target="_blank" rel="noreferrer" className="flex items-center gap-6 group/item">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-[#22c55e]/20 transition-colors border border-white/5 group-hover/item:border-[#22c55e]/50">
                  <MessageCircle className="w-5 h-5 text-white group-hover/item:text-[#22c55e] transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] mb-1">WhatsApp Business</p>
                  <p className="text-lg font-bold text-white group-hover/item:text-[#22c55e] transition-colors">+91 89559 57893</p>
                </div>
              </a>
              {/* Email Block */}
              <a href="mailto:cdsinfrat@gmail.com" className="flex items-center gap-6 group/item">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-[#F2A900]/20 transition-colors border border-white/5 group-hover/item:border-[#F2A900]/50">
                  <Mail className="w-5 h-5 text-white group-hover/item:text-[#F2A900] transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] mb-1">Email Inquiry</p>
                  <p className="text-lg font-bold text-white group-hover/item:text-[#F2A900] transition-colors">sadevinfra@gmail.com</p>
                </div>
              </a>
              {/* Location Block */}
              <div className="flex items-center gap-6 group/item cursor-default">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover/item:bg-white/10 transition-colors">
                  <MapPin className="w-5 h-5 text-white group-hover/item:text-white/80 transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] mb-1">Corporate Office</p>
                  <p className="text-lg font-bold text-white tracking-wide">HITEC City, Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Map Tile - Flat Corners */}
          <div className="h-56 rounded-xl overflow-hidden border border-white/10 relative group shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
              alt="Hyderabad Map View" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 grayscale hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="px-6 py-3 bg-[#0A192F]/90 backdrop-blur-sm border border-[#F2A900]/50 rounded-md text-[10px] text-[#F2A900] font-bold uppercase tracking-[0.2em] hover:bg-[#F2A900] hover:text-[#0A192F] transition-colors flex items-center gap-3">
                Launch Maps <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
