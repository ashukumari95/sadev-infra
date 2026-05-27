import { motion } from 'framer-motion';
import { Globe, Award, Zap, ShieldCheck, Star, Quote, CheckCircle } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -15 }
};

// Updated with Sadev Standard values
const values = [
  { title: 'Architectural Precision', desc: 'Adhering to international engineering, structural safety, and execution protocols with zero margin for error.', icon: Globe },
  { title: 'Validated Frameworks', desc: 'An ISO 9001:2015 and certified digital solutions provider delivering predictable engineering outcomes.', icon: Award },
  { title: 'Accelerated Timelines', desc: 'Utilizing proprietary pre-construction automation frameworks that compress asset lead times by up to 40%.', icon: Zap },
  { title: 'Structural Security', desc: 'Implementing military-grade encryption to protect multi-million dollar blueprints, asset lifecycles, and sensitive project telemetry.', icon: ShieldCheck },
];

const testimonials = [
  { name: 'Rajesh Khanna', role: 'CEO, BuildCorp India', text: 'Sadev Group transformed our site monitoring. We saw a 25% increase in operational efficiency within just 3 months.', stars: 5 },
  { name: 'Sarah Miller', role: 'Director, UrbanTech UK', text: 'The engineering depth and physical-to-digital integration provided by Sadev is world-class. Their technical support is unmatched.', stars: 5 },
];

export default function AboutSection() {
  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full flex flex-col items-center pt-10 pb-20 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center mb-32">
        <div className="order-2 lg:order-1">
          {/* Flat Corporate Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-[#F2A900]/10 border border-[#F2A900]/30 mb-6">
            <CheckCircle className="w-3.5 h-3.5 text-[#F2A900]" aria-hidden="true" />
            <span className="text-[#F2A900] font-semibold tracking-[0.2em] uppercase text-[10px]">Our Legacy</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight text-white tracking-wide">
            Engineering the <br />
            <span className="text-[#F2A900]">
              Next Urban Frontier
            </span>
          </h2>
          
          <p className="text-lg text-white/80 leading-relaxed mb-10 font-medium max-w-xl">
            Sadev Group was founded with a singular vision: to bridge the deep gap between heavy physical construction and high-velocity digital innovation. Today, we are a leading force in infrastructure. We don't just build structural frameworks; we design the intelligent data ecosystems—from advanced BIM layers to real-time IoT networks—that power the world's most ambitious architectural marvels.
          </p>
          
          <div className="flex flex-wrap gap-4 md:gap-6">
            <div className="flex-1 min-w-[140px] p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#F2A900]/50 transition-colors group">
              <p className="text-4xl font-bold text-white mb-2 group-hover:text-[#F2A900] transition-colors">15+</p>
              <p className="text-[10px] text-white/60 uppercase tracking-[0.15em] font-bold">Global Awards for Engineering Innovation</p>
            </div>
            <div className="flex-1 min-w-[140px] p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#F2A900]/50 transition-colors group">
              <p className="text-4xl font-bold text-white mb-2 group-hover:text-[#F2A900] transition-colors">500+</p>
              <p className="text-[10px] text-white/60 uppercase tracking-[0.15em] font-bold">Heavy Infrastructure Projects Delivered</p>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          {/* Image Container - Removed blur blobs, made edges professional (rounded-xl) */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 group">
            <img 
              src="./about.png" 
              alt="A team of structural engineers discussing blueprints on a modern construction site" 
              className="w-full h-full object-cover grayscale-[0.4] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="w-full mb-24 relative">
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-wide uppercase">
            The <span className="text-[#F2A900]">Sadev Standard</span>
          </h3>
          <p className="text-white/50 text-xs font-semibold tracking-[0.3em] uppercase">Built on precision & innovation</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {values.map((v) => (
            <div key={v.title} className="p-8 xl:p-10 rounded-xl bg-[#0A192F]/60 border border-white/10 hover:border-[#F2A900]/40 transition-colors group relative overflow-hidden">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#F2A900]/10 transition-colors">
                <v.icon className="w-6 h-6 text-[#F2A900]" aria-hidden="true" />
              </div>
              <h4 className="text-lg font-bold mb-3 text-white tracking-wide">{v.title}</h4>
              <p className="text-sm text-white/70 leading-relaxed font-medium">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Value Proposition / Closing Section */}
      <div className="w-full max-w-4xl mx-auto text-center px-8 py-16 mb-24 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#F2A900]/50 to-transparent"></div>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-wide">
          Redefining <span className="text-[#F2A900]">Asset Efficiency</span>
        </h3>
        <p className="text-lg text-white/80 leading-relaxed font-medium max-w-3xl mx-auto">
          When premier construction enterprises and global developers partner with Sadev Group, they aren't just hiring a vendor. They are integrating an engineering force that historically boosts site operational efficiency by 25% within the first quarter of deployment. We ensure your project is built to last, on budget, and fully intelligent.
        </p>
      </div>

      {/* Testimonials */}
      <div className="w-full mb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="p-10 xl:p-12 rounded-xl bg-[#0A192F]/40 border border-white/10 relative group hover:border-white/30 transition-colors">
              <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5 group-hover:text-[#F2A900]/10 transition-colors" aria-hidden="true" />
              
              <div className="flex gap-1 mb-8">
                {[...Array(t.stars)].map((_, starIdx) => (
                  <Star key={`${t.name}-star-${starIdx}`} className="w-4 h-4 text-[#F2A900] fill-[#F2A900]" aria-hidden="true" />
                ))}
              </div>
              
              <p className="text-lg text-white/80 italic mb-10 leading-relaxed font-medium">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                <div className="w-12 h-12 rounded-lg bg-[#F2A900] flex items-center justify-center font-bold text-[#0A192F] text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-lg tracking-wide">{t.name}</p>
                  <p className="text-[10px] text-[#F2A900] font-semibold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
