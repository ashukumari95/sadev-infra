import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, TrendingUp, Users, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
// 👇 1. Helmet Import kiya for SEO
import { Helmet } from 'react-helmet-async';
import backgroundImage from '/background.jpg';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } },
  exit: { opacity: 0 }
};

const itemVariants = {
  initial: { opacity: 0, y: 15 }, 
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function HomeSection({ setActiveTab }) {
  const [showVideo, setShowVideo] = useState(false);

  const handleWhatsApp = () => {
    const phoneNumber = "918955957893";
    const message = encodeURIComponent("Hello Sadev Group, I would like to inquire about your heavy infrastructure solutions.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const metrics = [
    { value: '50+', label: 'Projects Delivered', icon: Globe },
    { value: '100+', label: 'Clients Served', icon: Users },
    { value: '1M+', label: 'Man Hours Safe', icon: TrendingUp },
    { value: '25+', label: 'Cities Covered', icon: MapPin },
  ];

  return (
    <motion.div 
      variants={pageVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit" 
      className="relative flex-1 flex flex-col items-center w-full min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* 👇 2. Helmet Meta Tags Add kiye */}
      <Helmet>
        <title>Sadev Group | Premier Heavy Infrastructure & EPC Contractors</title>
        <meta name="description" content="Sadev Group delivers world-class heavy infrastructure, BIM engineering, and smart construction solutions in Hyderabad, India. Bridging physical engineering with digital innovation." />
        <meta name="keywords" content="EPC contractors, heavy infrastructure, BIM integration, construction company Hyderabad, smart city development" />
      </Helmet>

      {/* Refined Overlay: Subtle gradient for depth without 3D effect, allows background to peek through gently */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#0A192F]/85 to-[#0A192F]/95 z-0"></div>

      {/* Main Content Container */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center w-full max-w-5xl px-6 z-10 -mt-12">
        
        {/* Title Section - Softened the boldness */}
        <motion.div variants={itemVariants} className="space-y-4">
            {/* 👇 3. Updated Main Text to be a proper H1 and H2 structure for Google */}
            <h1 className="text-4xl md:text-[56px] text-white leading-tight mb-8 tracking-wide font-bold">
                <span className="opacity-75 font-medium block text-lg md:text-xl tracking-[0.15em] uppercase mb-3">
                    Top EPC Contractors & Developers
                </span>
                <span>
                    HEAVY INFRASTRUCTURE <span className="text-[#F2A900]">SOLUTIONS</span>
                </span>
            </h1>
            <h2 className="sr-only">BIM Engineering, Smart City Development, and EPC Contracting in Hyderabad</h2>
        </motion.div>
        
        {/* Call to Action Buttons - Elegant & Clean */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 items-center">
          <button 
            onClick={() => setActiveTab('Services')}
            className="px-8 py-3.5 rounded-md bg-[#F2A900] hover:bg-[#E59400] text-[#0A192F] font-semibold text-sm tracking-wider uppercase transition-colors shadow-lg"
          >
            Explore Our Solutions
          </button>
          
          <button 
            onClick={() => setShowVideo(true)}
            className="px-8 py-3.5 rounded-md border border-white/30 hover:border-white/60 bg-white/5 backdrop-blur-sm text-white font-medium text-sm tracking-wider uppercase flex items-center gap-3 transition-colors"
          >
            <Play className="w-4 h-4 text-[#F2A900]" />
            Watch Overview
          </button>
        </motion.div>

        {/* Industry Trust Section */}
        <motion.div variants={itemVariants} className="mt-24 w-full">
          <p className="text-white/50 text-xs uppercase tracking-[0.3em] font-medium mb-8">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {['BuildCorp', 'Skyline', 'UrbanTech', 'TerraForm', 'Apex'].map((brand) => (
              <div key={brand} className="flex items-center gap-2 cursor-default">
                <ShieldCheck className="w-5 h-5 text-white/40" />
                <span className="text-lg font-semibold tracking-wide text-white/80">{brand}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sidebar Metrics - Soft Glass Look (Not bulky) */}
      <div className="hidden xl:block absolute right-10 top-1/2 -translate-y-1/2 z-20">
        <div className="bg-[#0A192F]/60 backdrop-blur-md rounded-2xl py-10 px-8 flex flex-col gap-10 border border-white/10 shadow-xl">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center cursor-default">
              <metric.icon className="w-6 h-6 text-[#F2A900] mb-3 opacity-90" />
              <span className="text-2xl font-bold text-white leading-none mb-2">{metric.value}</span>
              <span className="text-[10px] text-white/60 font-medium tracking-widest text-center uppercase">
                {metric.label.split(' ').join('\n')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Floating Component - Softened */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={handleWhatsApp}
          className="flex items-center gap-4 bg-[#0A192F]/90 backdrop-blur-sm border border-white/10 text-white pl-3 pr-6 py-2.5 rounded-full hover:bg-[#112240] transition-colors shadow-xl"
        >
          <div className="w-10 h-10 bg-[#22c55e] rounded-full flex items-center justify-center">
            <FaWhatsapp className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[10px] text-white/60 uppercase tracking-wider leading-none mb-1">Have a project?</span>
            <span className="text-xs uppercase tracking-wider font-bold text-[#F2A900]">Let's Talk</span>
          </div>
        </button>
      </div>

      {/* Simple Video Modal */}
      <AnimatePresence>
        {showVideo && (
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] bg-[#0A192F]/95 backdrop-blur-sm flex items-center justify-center p-6"
            >
                <button onClick={() => setShowVideo(false)} className="absolute top-10 right-10 text-white/50 hover:text-[#F2A900] transition-colors">
                    <X className="w-10 h-10" />
                </button>
               <div className="w-full max-w-4xl aspect-video bg-black rounded-xl border border-white/10 flex items-center justify-center overflow-hidden relative shadow-2xl">
                  <video 
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      playsInline
                  >
                      <source src="./video.mp4" type="video/mp4" />
                      <p className="text-white">Your browser does not support the video tag.</p>
                  </video>
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
