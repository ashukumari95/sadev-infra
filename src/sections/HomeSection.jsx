import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, TrendingUp, Users, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import backgroundImage from '/background.jpg';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } },
  exit: { opacity: 0 }
};

const itemVariants = {
  initial: { opacity: 0, y: 10 }, // Reduced the jump distance
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function HomeSection({ setActiveTab }) {
  const [showVideo, setShowVideo] = useState(false);

  const handleWhatsApp = () => {
    const phoneNumber = "918955957893";
    const message = encodeURIComponent("Hello Sadev Group, I would like to inquire about your infrastructure solutions.");
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
      {/* Solid Dark Overlay for clean readability */}
      <div className="absolute inset-0 bg-[#0A192F]/85 z-0"></div>

      {/* Main Content Container */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center w-full max-w-5xl px-6 z-10 -mt-12">
        
        {/* Title Section */}
        <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-[64px] text-white leading-[1.05] mb-10 tracking-tight font-black">
                <span className="opacity-80 font-medium block text-xl md:text-2xl tracking-[0.2em] uppercase mb-4">
                    Building Solid Foundations for
                </span>
                <span>
                    INFRASTRUCTURE <span className="text-[#F2A900]">SUCCESS</span>
                </span>
            </h1>
        </motion.div>
        
        {/* Call to Action Buttons - FLAT DESIGN */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center">
          <button 
            onClick={() => setActiveTab('Services')}
            className="px-10 py-4 rounded-sm bg-[#F2A900] hover:bg-[#D99700] text-[#0A192F] font-bold text-sm tracking-widest uppercase transition-colors"
          >
            Explore Our Solutions
          </button>
          
          <button 
            onClick={() => setShowVideo(true)}
            className="px-10 py-4 rounded-sm border border-white/30 bg-transparent text-white font-bold text-sm tracking-widest uppercase flex items-center gap-3 hover:bg-white/10 transition-colors"
          >
            <Play className="w-4 h-4 text-[#F2A900]" />
            Watch Overview
          </button>
        </motion.div>

        {/* Industry Trust Section */}
        <motion.div variants={itemVariants} className="mt-28 w-full">
          <p className="text-white/50 text-xs uppercase tracking-[0.4em] font-medium mb-10">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {['BuildCorp', 'Skyline', 'UrbanTech', 'TerraForm', 'Apex'].map((brand) => (
              <div key={brand} className="flex items-center gap-2 cursor-default">
                <ShieldCheck className="w-5 h-5 text-white/50" />
                <span className="text-xl font-bold tracking-tight text-white/80">{brand}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sidebar Metrics - Clean Flat Boxes */}
      <div className="hidden xl:block absolute right-10 top-1/2 -translate-y-1/2 z-20">
        <div className="bg-[#0A192F]/90 rounded-none py-10 px-8 flex flex-col gap-12 border-l-2 border-[#F2A900]">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center cursor-default">
              <metric.icon className="w-6 h-6 text-[#F2A900] mb-3" />
              <span className="text-2xl font-bold text-white leading-none mb-2">{metric.value}</span>
              <span className="text-[10px] text-white/50 font-medium tracking-widest text-center uppercase">
                {metric.label.split(' ').join('\n')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Floating Component - Flat Minimal */}
      <div className="fixed bottom-10 right-10 z-50">
        <button 
          onClick={handleWhatsApp}
          className="flex items-center gap-4 bg-[#0A192F] border border-white/20 text-white pl-4 pr-6 py-3 rounded-sm hover:bg-[#112240] transition-colors"
        >
          <FaWhatsapp className="w-6 h-6 text-[#22c55e]" />
          <div className="flex flex-col items-start">
            <span className="text-[10px] text-white/50 uppercase tracking-widest leading-none mb-1">Have a project?</span>
            <span className="text-xs uppercase tracking-widest font-bold text-[#F2A900]">Let's Talk</span>
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
                className="fixed inset-0 z-[200] bg-[#0A192F]/95 flex items-center justify-center p-6"
            >
                <button onClick={() => setShowVideo(false)} className="absolute top-10 right-10 text-white/50 hover:text-[#F2A900] transition-colors">
                    <X className="w-10 h-10" />
                </button>
               <div className="w-full max-w-4xl aspect-video bg-black rounded-sm border border-white/10 flex items-center justify-center overflow-hidden relative">
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
