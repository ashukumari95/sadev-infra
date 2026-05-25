import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, TrendingUp, Zap, MessageCircle, MapPin, ArrowRight, CheckCircle2, Factory, HardHat, Building2, Users, ArrowUpRight } from 'lucide-react';

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function ServicesSection({ setActiveTab }) {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (selectedService) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedService]);

  const services = [
    {
      title: 'Project Management System',
      desc: 'Real-time tracking, task management, and progress monitoring from a single dashboard.',
      icon: Building2,
      impact: '100% Project Visibility',
      details: ['Real-time project tracking', 'Task & milestone management', 'Multi-site control panel', 'Deadline & progress monitoring', 'Centralized dashboard'],
      color: 'from-orange-500 to-yellow-500',
      accent: 'orange',
      image: './image2.png',
    },
    {
      title: 'Labour & Employee Tracking',
      desc: 'Track attendance, manage workforce, and monitor productivity across all sites.',
      icon: Users,
      impact: 'Efficient Workforce',
      details: ['Daily attendance tracking', 'Labour productivity reports', 'Role-based access system', 'Employee performance tracking', 'Payroll support system'],
      color: 'from-blue-500 to-indigo-500',
      accent: 'blue',
      image: './image3.png',
    },
    {
      title: 'Site Monitoring System',
      desc: 'Monitor construction sites in real-time using smart tracking and reporting tools.',
      icon: HardHat,
      impact: 'Real-time Monitoring',
      details: ['Live site updates', 'Daily progress reports', 'Issue tracking system', 'Remote site monitoring', 'Supervisor dashboard'],
      color: 'from-green-500 to-emerald-500',
      accent: 'green',
      image: './image4.png',
    },
    {
      title: 'Billing & BOQ Management',
      desc: 'Handle project budgets, billing, and BOQ with accurate tracking and reports.',
      icon: TrendingUp,
      impact: 'Cost Control',
      details: ['BOQ management', 'Invoice generation', 'Budget tracking', 'Expense reports', 'Financial insights'],
      color: 'from-purple-500 to-pink-500',
      accent: 'purple',
      image: './image5.png',
    },
    {
      title: 'Material Management',
      desc: 'Track materials, inventory, and usage across all sites to reduce waste and cost.',
      icon: Factory,
      impact: 'Zero Material Loss',
      details: ['Inventory tracking', 'Material usage reports', 'Stock alerts', 'Vendor management', 'Procurement tracking'],
      color: 'from-red-500 to-orange-500',
      accent: 'red',
      image: './image6.png',
    },
    {
      title: 'Analytics & Reports',
      desc: 'Powerful insights with dashboards, reports, and performance analytics.',
      icon: Code,
      impact: 'Smart Decisions',
      details: ['Real-time dashboards', 'Performance analytics', 'Custom reports', 'Data visualization', 'Decision support system'],
      color: 'from-cyan-500 to-blue-500',
      accent: 'cyan',
      image: './image7.png',
    },
  ];

  return (
    <motion.div className="w-full max-w-7xl mx-auto px-4 md:px-6 pb-20">
      <AnimatePresence mode="wait">

        {/* ── Services List ── */}
        {!selectedService ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-5">
                <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-white/60 font-bold tracking-[0.3em] uppercase text-[10px]">What We Build</span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Services</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
                End-to-end digital solutions built specifically for the construction industry.
              </motion.p>
            </div>

            {/* Cards Grid — clean uniform size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  onClick={() => setSelectedService(s)}
                  className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0f0f1c] hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1c] via-[#0f0f1c]/20 to-transparent" />

                    {/* Impact pill */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                      <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gradient-to-r ${s.color} bg-opacity-80 backdrop-blur-md`}>
                        <TrendingUp size={9} className="text-white" />
                        <span className="text-[9px] font-bold text-white">{s.impact}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col gap-3 p-5 flex-1">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <s.icon size={16} className="text-white" />
                      </div>
                      <h3 className="text-[14px] font-bold text-white leading-snug">{s.title}</h3>
                    </div>

                    {/* Desc */}
                    <p className="text-[11px] text-white/45 leading-relaxed line-clamp-2">{s.desc}</p>

                    <div className="border-t border-white/[0.06] mt-auto pt-3 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {s.details.slice(0, 2).map((d, idx) => (
                          <span key={idx} className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/[0.06]">
                            {d}
                          </span>
                        ))}
                      </div>
                      <div className="w-7 h-7 rounded-xl bg-white/5 group-hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all flex-shrink-0 ml-2">
                        <ArrowUpRight size={12} className="text-white/50 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        ) : (

          /* ── Service Detail ── */
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
          >
            {/* Back button */}
            <button
              onClick={() => setSelectedService(null)}
              className="flex items-center gap-2 mb-6 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all text-xs font-bold tracking-widest uppercase"
            >
              <ArrowRight size={12} className="rotate-180" />
              Back to Services
            </button>

            <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0f0f1c]">

              {/* Hero image */}
              <div className="relative h-52 md:h-72 overflow-hidden">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1c] via-[#0f0f1c]/30 to-transparent" />

                {/* Title overlay */}
                <div className="absolute bottom-6 left-6 md:left-8 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center shadow-xl`}>
                    <selectedService.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 mb-1">{selectedService.impact}</p>
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{selectedService.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left — desc + features */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  <p className="text-white/60 text-sm leading-relaxed">{selectedService.desc}</p>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-4">What's Included</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedService.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * idx }}
                          className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.06] transition-all group"
                        >
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${selectedService.color} flex items-center justify-center flex-shrink-0 opacity-80 group-hover:opacity-100`}>
                            <CheckCircle2 size={12} className="text-white" />
                          </div>
                          <span className="text-white/60 group-hover:text-white/90 transition-colors text-xs font-medium">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right — CTA */}
                <div className="flex flex-col gap-3">
                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-2">Ready to start?</p>
                      <h4 className="text-lg font-black text-white leading-snug">Let's build something great together</h4>
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed">Our specialists are ready to architect your next phase of growth.</p>

                    <button
                      onClick={() => setActiveTab('Contact')}
                      className={`w-full py-3.5 rounded-xl bg-gradient-to-r ${selectedService.color} text-white font-black tracking-[0.15em] uppercase text-[10px] hover:-translate-y-0.5 hover:shadow-lg transition-all`}
                    >
                      Request Consultation
                    </button>

                    <button
                      onClick={() => setActiveTab('Our Work')}
                      className="w-full py-3.5 rounded-xl border border-white/10 text-white/60 font-bold tracking-[0.15em] uppercase text-[10px] hover:bg-white/5 hover:text-white/80 transition-all"
                    >
                      View Case Studies
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}