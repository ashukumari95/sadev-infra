import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, TrendingUp, Star, BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react';
// 👇 1. Helmet Import kiya for SEO
import { Helmet } from 'react-helmet-async';

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
  exit: { opacity: 0 }
};

const itemVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
};

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: 'Construction Management Dashboard',
      cat: 'Digital',
      location: 'Hyderabad, India',
      impact: '40% Faster Project Tracking',
      img: './image1.png',
      reviews: [
        { text: 'Earlier it took hours to track project progress. After this dashboard, everything is visible in real-time. Highly recommend!', name: 'Rajesh Sharma', role: 'Project Director', avatar: 'RS', rating: 5, verified: true },
        { text: 'Data from all 5 of our sites is now visible in one place. Team productivity has doubled since we started using it.', name: 'Kiran Desai', role: 'Operations Head', avatar: 'KD', rating: 5, verified: true },
        { text: 'Daily reports are now sent to clients automatically. Manual reporting has completely stopped.', name: 'Mohit Verma', role: 'Site Engineer', avatar: 'MV', rating: 4, verified: false },
      ]
    },
    {
      id: 2,
      title: 'Labour Tracking System',
      cat: 'Digital',
      location: 'Jaipur, India',
      impact: '100% Attendance Accuracy',
      img: './image3.png',
      reviews: [
        { text: 'Attendance for 200+ workers is now done in one click. No confusion, no errors whatsoever.', name: 'Arvind Meena', role: 'Site Supervisor', avatar: 'AM', rating: 5, verified: true },
        { text: 'Overtime and absent records are now calculated automatically. Salary disputes have completely stopped.', name: 'Sunita Rao', role: 'HR Manager', avatar: 'SR', rating: 5, verified: true },
      ]
    },
    {
      id: 3,
      title: 'Site Monitoring Solution',
      cat: 'Infrastructure',
      location: 'Delhi, India',
      impact: 'Real-time Site Visibility',
      img: './image4.png',
      reviews: [
        { text: 'We have three separate sites in Delhi. Now everything is monitored from one place. Field team stress has reduced a lot.', name: 'Sunil Kapoor', role: 'Operations Head', avatar: 'SK', rating: 5, verified: true },
        { text: 'Real-time safety alerts are received instantly. Accidents have reduced by 60% in the last 6 months.', name: 'Pooja Nair', role: 'Safety Officer', avatar: 'PN', rating: 5, verified: true },
        { text: 'Our client can also directly view the dashboard now. Trust level has increased significantly.', name: 'Tarun Shah', role: 'Project Manager', avatar: 'TS', rating: 4, verified: false },
      ]
    },
    {
      id: 4,
      title: 'Billing & BOQ System',
      cat: 'Digital',
      location: 'Remote',
      impact: 'Accurate Cost Tracking',
      img: './image5.png',
      reviews: [
        { text: 'Earlier there were too many billing errors causing client disputes. Now everything is transparent and accurate.', name: 'Priya Verma', role: 'Finance Manager', avatar: 'PV', rating: 4, verified: true },
        { text: 'BOQ vs actual cost comparison now takes just minutes. Budget overruns are visible well in advance.', name: 'Ankit Jain', role: 'Cost Estimator', avatar: 'AJ', rating: 5, verified: true },
      ]
    },
    {
      id: 5,
      title: 'Material Management Tool',
      cat: 'Infrastructure',
      location: 'Mumbai, India',
      impact: 'Reduced Material Loss',
      img: './image6.png',
      reviews: [
        { text: 'Both theft and material wastage are now under control. We saw 15% cost savings in the very first month.', name: 'Deepak Patil', role: 'Procurement Manager', avatar: 'DP', rating: 5, verified: true },
        { text: 'Stock alerts come automatically now. We never run short of materials on site anymore.', name: 'Renu Shah', role: 'Store Incharge', avatar: 'RS', rating: 5, verified: true },
        { text: 'Vendor payments and material receipts are tracked in one place. Extremely convenient system.', name: 'Vikram Bose', role: 'Project Head', avatar: 'VB', rating: 4, verified: false },
      ]
    },
    {
      id: 6,
      title: 'Smart Highway Monitoring',
      cat: 'Infrastructure',
      location: 'Bengaluru, India',
      impact: 'AI Safety Tracking',
      img: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80',
      reviews: [
        { text: 'Safety is the biggest challenge on highway projects. Real-time alerts have significantly reduced accident rates.', name: 'Harish Nair', role: 'Safety Officer', avatar: 'HN', rating: 5, verified: true },
        { text: 'AI-based anomaly detection has made our inspection team 3x faster. Outstanding technology.', name: 'Meera Pillai', role: 'QA Engineer', avatar: 'MP', rating: 5, verified: true },
      ]
    },
  ];

  const [activeReviews, setActiveReviews] = useState(projects.map(() => 0));
  const [hoveredCard, setHoveredCard] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (hoveredCard === null) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setActiveReviews(prev =>
        prev.map((idx, i) =>
          i === hoveredCard ? (idx + 1) % projects[i].reviews.length : idx
        )
      );
    }, 2500);
    return () => clearInterval(intervalRef.current);
  }, [hoveredCard]);

  const goReview = (cardIdx, direction) => {
    setActiveReviews(prev =>
      prev.map((idx, i) => {
        if (i !== cardIdx) return idx;
        const total = projects[i].reviews.length;
        return (idx + direction + total) % total;
      })
    );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full flex flex-col items-center pt-10 pb-20 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* 👇 2. SEO Meta Tags Add kiye */}
      <Helmet>
        <title>Our Projects & Case Studies | Sadev Group</title>
        <meta name="description" content="Explore Sadev Group's global portfolio of heavy infrastructure projects, BIM implementations, and EPC contracting case studies." />
        <meta name="keywords" content="infrastructure projects, EPC case studies, Sadev Group portfolio, construction management examples, smart highway monitoring" />
      </Helmet>

      {/* Header */}
      <div className="text-center mb-16">
        {/* Flat Corporate Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-[#F2A900]/10 border border-[#F2A900]/30 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-[#F2A900]" />
          <span className="text-[#F2A900] font-semibold tracking-[0.2em] uppercase text-[10px]">Our Impact</span>
        </motion.div>

        {/* 👇 3. Updated H1 for SEO with Gold Accent */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4 tracking-wide text-white text-center"
        >
          Global{' '}
          <span className="text-[#F2A900]">
            Work
          </span>
        </motion.h1>
        
        {/* Hidden H2 for extra SEO juice */}
        <h2 className="sr-only">Sadev Group EPC and Digital Infrastructure Project Portfolio</h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        <AnimatePresence mode="popLayout">
          {projects.map((p, cardIdx) => {
            const activeIdx = activeReviews[cardIdx];
            const review = p.reviews[activeIdx];

            return (
              <motion.div
                key={p.id}
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
                layout
                onMouseEnter={() => setHoveredCard(cardIdx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative flex flex-col rounded-xl overflow-hidden border border-white/10 bg-[#0A192F]/60 hover:border-[#F2A900]/40 transition-colors cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden border-b border-white/5">
                  {/* 👇 4. Dynamic SEO Alt Text */}
                  <img
                    src={p.img}
                    alt={`Sadev Group Project: ${p.title} deployed in ${p.location}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/60 to-transparent" />

                  {/* Impact badge — top right on hover (Gold Theme) */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#F2A900] shadow-lg">
                      <TrendingUp size={12} className="text-[#0A192F]" />
                      <p className="text-[10px] font-bold text-[#0A192F] uppercase tracking-wider">{p.impact}</p>
                    </div>
                  </div>
                </div>

                {/* ✅ Card Body — fades out on hover */}
                <div className="flex flex-col gap-3 p-6 flex-1 transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-[#F2A900]/10 text-[#F2A900] border border-[#F2A900]/20">
                      {p.cat}
                    </span>
                    <span className="text-[10px] font-medium text-white/40">{p.reviews.length} reviews</span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug mt-1 tracking-wide">{p.title}</h3>

                  <div className="flex items-center gap-2 text-white/50 text-xs font-medium">
                    <MapPin size={12} className="text-[#F2A900]" />
                    {p.location}
                  </div>

                  <div className="border-t border-white/10 mt-2" />

                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < review.rating ? 'text-[#F2A900] fill-[#F2A900]' : 'text-white/10 fill-white/10'}
                      />
                    ))}
                    <span className="text-[10px] font-medium text-white/40 ml-2">Client Review</span>
                  </div>
                </div>

                {/* ✅ Hover Review Overlay — Solid Navy Gradient */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/95 to-[#0A192F]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none group-hover:pointer-events-auto">

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${p.id}-${activeIdx}-text`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs text-white/80 italic leading-relaxed mb-6 font-medium line-clamp-4"
                    >
                      "{review.text}"
                    </motion.p>
                  </AnimatePresence>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4">

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${p.id}-${activeIdx}-info`}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 6 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#F2A900] flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-[#0A192F]">{review.avatar}</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-white tracking-wide">{review.name}</span>
                            {review.verified && (
                              <BadgeCheck size={14} className="text-[#F2A900] flex-shrink-0" />
                            )}
                          </div>
                          <span className="text-[10px] font-medium text-[#F2A900] mt-0.5 uppercase tracking-widest">{review.role}</span>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Dots + Arrows (Gold Theme) */}
                    <div className="flex flex-col items-end gap-3">
                      <div className="flex gap-1">
                        <button
                          onClick={() => goReview(cardIdx, -1)}
                          className="w-7 h-7 rounded-md bg-white/5 hover:bg-[#F2A900]/20 border border-white/10 hover:border-[#F2A900]/50 flex items-center justify-center transition-colors"
                        >
                          <ChevronLeft size={14} className="text-white/60 hover:text-[#F2A900]" />
                        </button>
                        <button
                          onClick={() => goReview(cardIdx, 1)}
                          className="w-7 h-7 rounded-md bg-white/5 hover:bg-[#F2A900]/20 border border-white/10 hover:border-[#F2A900]/50 flex items-center justify-center transition-colors"
                        >
                          <ChevronRight size={14} className="text-white/60 hover:text-[#F2A900]" />
                        </button>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {p.reviews.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveReviews(prev =>
                              prev.map((v, idx) => idx === cardIdx ? i : v)
                            )}
                            className={`rounded-sm transition-all duration-300 ${
                              i === activeIdx
                                ? 'w-4 h-1.5 bg-[#F2A900]'
                                : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
