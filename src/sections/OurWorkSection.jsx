import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, TrendingUp, Star, BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
  exit: { opacity: 0 }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function PortfolioSection() {

  const projects = [
    {
      id: 1,
      title: 'Construction Management Dashboard',
      cat: 'Digital',
      location: 'Hyderabad,India',
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
      className="w-full flex flex-col items-center pt-5 pb-20 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          <span className="text-white/70 font-bold tracking-[0.3em] uppercase text-[10px]">Our Impact</span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-white text-center"
        >
          Global{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Work
          </span>
        </motion.h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
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
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0f0f1c] hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-75 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

                  {/* Year — top left */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-bold px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/60 border border-white/10">
                      {p.year}
                    </span>
                  </div>

                  {/* Impact badge — top right on hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-400 -translate-y-1 group-hover:translate-y-0">
                    <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-purple-600/80 backdrop-blur-md border border-purple-400/30">
                      <TrendingUp size={10} className="text-purple-200" />
                      <p className="text-[9px] font-bold text-white">{p.impact}</p>
                    </div>
                  </div>
                </div>

                {/* ✅ Card Body — fades out on hover */}
                <div className="flex flex-col gap-2.5 p-5 flex-1 transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {p.cat}
                    </span>
                    <span className="text-[10px] text-white/25">{p.reviews.length} reviews</span>
                  </div>

                  <h3 className="text-[15px] font-bold text-white leading-snug mt-0.5">{p.title}</h3>

                  <div className="flex items-center gap-1.5 text-white/40 text-[11px]">
                    <MapPin size={11} />
                    {p.location}
                  </div>

                  <div className="border-t border-white/[0.06] mt-1" />

                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={11}
                        className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/15 fill-white/15'}
                      />
                    ))}
                    <span className="text-[10px] text-white/30 ml-1.5">Client Review</span>
                  </div>
                </div>

                {/* ✅ Hover Review Overlay — slides up on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-[#070712] via-[#07071295] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${p.id}-${activeIdx}-text`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="text-[11px] text-white/75 italic leading-relaxed mb-4 line-clamp-3"
                    >
                      "{review.text}"
                    </motion.p>
                  </AnimatePresence>

                  <div className="flex items-center justify-between">

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${p.id}-${activeIdx}-info`}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 6 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center gap-2.5"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/50 to-purple-600/50 border border-white/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-[9px] font-black text-white">{review.avatar}</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1">
                            <span className="text-[11px] font-bold text-white leading-none">{review.name}</span>
                            {review.verified && (
                              <BadgeCheck size={11} className="text-blue-400 flex-shrink-0" />
                            )}
                          </div>
                          <span className="text-[9px] text-white/40 mt-0.5">{review.role}</span>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Dots + Arrows */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {p.reviews.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveReviews(prev =>
                              prev.map((v, idx) => idx === cardIdx ? i : v)
                            )}
                            className={`rounded-full transition-all duration-300 ${
                              i === activeIdx
                                ? 'w-3 h-1.5 bg-pink-500'
                                : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex gap-0.5">
                        <button
                          onClick={() => goReview(cardIdx, -1)}
                          className="w-6 h-6 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all"
                        >
                          <ChevronLeft size={11} className="text-white/60" />
                        </button>
                        <button
                          onClick={() => goReview(cardIdx, 1)}
                          className="w-6 h-6 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all"
                        >
                          <ChevronRight size={11} className="text-white/60" />
                        </button>
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