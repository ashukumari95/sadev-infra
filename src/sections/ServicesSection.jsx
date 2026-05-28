import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, TrendingUp, Zap, MessageCircle, MapPin, ArrowRight, CheckCircle2, Factory, HardHat, Building2, Users, ArrowUpRight } from 'lucide-react';
// 👇 1. SEO ke liye Helmet import kiya
import { Helmet } from 'react-helmet-async';

const itemVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function ServicesSection({ setActiveTab }) {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (selectedService) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedService]);

  // Removed rainbow colors, unified under Sadev Premium Theme
  const services = [
    {
      title: 'Project Management System',
      desc: 'Real-time tracking, task management, and progress monitoring from a single dashboard.',
      icon: Building2,
      impact: '100% Project Visibility',
      details: ['Real-time project tracking', 'Task & milestone management', 'Multi-site control panel', 'Deadline & progress monitoring', 'Centralized dashboard'],
      image: './image2.png',
    },
    {
      title: 'Labour & Employee Tracking',
      desc: 'Track attendance, manage workforce, and monitor productivity across all sites.',
      icon: Users,
      impact: 'Efficient Workforce',
      details: ['Daily attendance tracking', 'Labour productivity reports', 'Role-based access system', 'Employee performance tracking', 'Payroll support system'],
      image: './image3.png',
    },
    {
      title: 'Site Monitoring System',
      desc: 'Monitor construction sites in real-time using smart tracking and reporting tools.',
      icon: HardHat,
      impact: 'Real-time Monitoring',
      details: ['Live site updates', 'Daily progress reports', 'Issue tracking system', 'Remote site monitoring', 'Supervisor dashboard'],
      image: './image4.png',
    },
    {
      title: 'Billing & BOQ Management',
      desc: 'Handle project budgets, billing, and BOQ with accurate tracking and reports.',
      icon: TrendingUp,
      impact: 'Cost Control',
      details: ['BOQ management', 'Invoice generation', 'Budget tracking', 'Expense reports', 'Financial insights'],
      image: './image5.png',
    },
    {
      title: 'Material Management',
      desc: 'Track materials, inventory, and usage across all sites to reduce waste and cost.',
      icon: Factory,
      impact: 'Zero Material Loss',
      details: ['Inventory tracking', 'Material usage reports', 'Stock alerts', 'Vendor management', 'Procurement tracking'],
      image: './image6.png',
    },
    {
      title: 'Analytics & Reports',
      desc: 'Powerful insights with dashboards, reports, and performance analytics.',
      icon: Code,
      impact: 'Smart Decisions',
      details: ['Real-time dashboards', 'Performance analytics', 'Custom reports', 'Data visualization', 'Decision support system'],
      image: './image7.png',
    },
  ];

  return (
    <motion.div className="w-full max-w-7xl mx-auto px-4 md:px-6 pb-20">
      {/* 👇 2. Helmet Meta Tags Add kiye */}
      <Helmet>
        <title>Construction & EPC Services | Sadev Group</title>
        <meta name="description" content="Explore Sadev Group's specialized infrastructure services including BIM management, real-time site monitoring, BOQ management, and smart labor tracking in India." />
        <meta name="keywords" content="EPC services, construction project management, BIM engineering, BOQ management, site monitoring, Sadev Group" />
      </Helmet>

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
              {/* Flat Corporate Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-[#F2A900]/10 border border-[#F2A900]/30 mb-5">
                <div className="w-2 h-2 rounded-full bg-[#F2A900]" />
                <span className="text-[#F2A900] font-semibold tracking-[0.2em] uppercase text-[10px]">What We Build</span>
              </motion.div>
              
              {/* 👇 3. Updated H1 and H2 for SEO */}
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-wide text-white mb-4">
                Our <span className="text-[#F2A900]">Services</span>
              </motion.h1>
              <h2 className="sr-only">Comprehensive EPC, BIM, and Construction Management Services</h2>
              
              <motion.p variants={itemVariants} className="text-white/60 max-w-xl mx-auto text-sm font-medium leading-relaxed">
                End-to-end digital and physical engineering solutions built specifically for heavy infrastructure.
              </motion.p>
            </div>

            {/* Cards Grid — Elegant Corporate Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  onClick={() => setSelectedService(s)}
                  className="group relative flex flex-col rounded-xl overflow-hidden border border-white/10 bg-[#0A192F]/60 hover:border-[#F2A900]/40 transition-colors cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden border-b border-white/5">
                    {/* 👇 4. Optimized Image Alt Text */}
                    <img
                      src={s.image}
                      alt={`Sadev Group ${s.title} - Heavy Infrastructure Solutions`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/20 to-transparent" />

                    {/* Impact pill - Solid Gold */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#F2A900] shadow-lg">
                        <TrendingUp size={12} className="text-[#0A192F]" />
                        <span className="text-[10px] font-bold text-[#0A192F] uppercase tracking-wider">{s.impact}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col gap-4 p-6 flex-1">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#F2A900]/10 border border-[#F2A900]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F2A900]/20 transition-colors">
                        <s.icon size={18} className="text-[#F2A900]" />
                      </div>
                      <h3 className="text-base font-bold text-white leading-snug tracking-wide">{s.title}</h3>
                    </div>

                    {/* Desc */}
                    <p className="text-sm text-white/60 font-medium leading-relaxed line-clamp-2">{s.desc}</p>

                    <div className="border-t border-white/10 mt-auto pt-4 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {s.details.slice(0, 2).map((d, idx) => (
                          <span key={idx} className="text-[10px] font-semibold px-2.5 py-1 rounded-sm bg-white/5 text-white/50 border border-white/10">
                            {d}
                          </span>
                        ))}
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#F2A900] border border-white/10 group-hover:border-[#F2A900] flex items-center justify-center transition-colors flex-shrink-0 ml-2">
                        <ArrowUpRight size={14} className="text-white/50 group-hover:text-[#0A192F] transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        ) : (

          /* ── Service Detail View ── */
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
          >
            {/* Back button */}
            <button
              onClick={() => setSelectedService(null)}
              className="flex items-center gap-2 mb-8 px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white/60 hover:text-[#F2A900] hover:border-[#F2A900]/50 transition-colors text-xs font-bold tracking-widest uppercase"
            >
              <ArrowRight size={14} className="rotate-180" />
              Back to Services
            </button>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0A192F]/60">

              {/* Hero image */}
              <div className="relative h-64 md:h-80 overflow-hidden border-b border-white/10">
                <motion.img
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src={selectedService.image}
                  alt={`Detailed view of ${selectedService.title} by Sadev Group`}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />

                {/* Title overlay */}
                <div className="absolute bottom-8 left-8 md:left-10 flex items-center gap-5">
                  <div className="w-14 h-14 rounded-lg bg-[#F2A900] flex items-center justify-center shadow-lg">
                    <selectedService.icon size={26} className="text-[#0A192F]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F2A900] mb-1.5">{selectedService.impact}</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-wide">{selectedService.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Left — desc + features */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                  <p className="text-white/80 text-base font-medium leading-relaxed">{selectedService.desc}</p>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">What's Included</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedService.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * idx }}
                          className="flex items-center gap-4 p-4 rounded-md bg-white/5 border border-white/10 hover:border-[#F2A900]/30 transition-colors"
                        >
                          <div className="w-6 h-6 rounded-full bg-[#F2A900]/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 size={14} className="text-[#F2A900]" />
                          </div>
                          <span className="text-white/80 text-sm font-medium">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right — CTA */}
                <div className="flex flex-col gap-4">
                  <div className="p-8 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Ready to start?</p>
                      <h4 className="text-xl font-bold text-white leading-snug">Let's build something great together</h4>
                    </div>
                    <p className="text-sm font-medium text-white/60 leading-relaxed">Our specialists are ready to architect your next phase of infrastructure growth.</p>

                    <button
                      onClick={() => setActiveTab('Contact')}
                      className="w-full py-4 rounded-md bg-[#F2A900] hover:bg-[#E59400] text-[#0A192F] font-bold tracking-[0.1em] uppercase text-xs transition-colors"
                    >
                      Request Consultation
                    </button>

                    <button
                      onClick={() => setActiveTab('Our Work')}
                      className="w-full py-4 rounded-md border border-white/20 text-white font-bold tracking-[0.1em] uppercase text-xs hover:bg-white/10 transition-colors"
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
