import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HomeSection from "./sections/HomeSection";
import ServicesSection from "./sections/ServicesSection";
import OurWorkSection from "./sections/OurWorkSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";

import backgroundImage from "/background.jpg";

const tabsOrder = ["Home", "Services", "Our Work", "About", "Contact"];

// 👉 Naya URL Format Logic
const formatPath = (tab) => {
  if (tab === "Home") return "/"; // Home ke aage kuch nahi dikhega
  return `/${tab.toLowerCase().replace(' ', '-')}`; // Space ko dash me badlega (e.g., /our-work)
};

const getInitialTab = () => {
  const path = window.location.pathname;
  if (path === "/") return "Home";
  
  const formattedPath = path.replace('/', '').replace('-', ' ').toLowerCase();
  const match = tabsOrder.find(tab => tab.toLowerCase() === formattedPath);
  return match || "Home";
};

export default function App() {
  const [activeTab, setActiveTab] = useState(getInitialTab);
  const isScrolling = useRef(false);

  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  // 👉 Naya URL Sync Logic (Bina # ke)
  useEffect(() => {
    const expectedPath = formatPath(activeTab);
    const currentPath = window.location.pathname;
    
    if (currentPath !== expectedPath) {
      window.history.pushState(null, "", expectedPath);
    }
  }, [activeTab]);

  useEffect(() => {
    const handlePopState = () => {
      setActiveTab(getInitialTab());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const changeTab = useCallback((deltaY, target) => {
    if (isScrolling.current) return;

    const scrollContainer = target.closest(".allow-scroll");

    if (scrollContainer) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const atTop = scrollTop <= 0;
      const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;

      if (deltaY > 0 && !atBottom) return;
      if (deltaY < 0 && !atTop) return;
    }

    const currentIndex = tabsOrder.indexOf(activeTab);
    const threshold = 40; 

    if (Math.abs(deltaY) < threshold) return;

    let nextTab = activeTab;

    if (deltaY > 0 && currentIndex < tabsOrder.length - 1) {
      nextTab = tabsOrder[currentIndex + 1];
    } else if (deltaY < 0 && currentIndex > 0) {
      nextTab = tabsOrder[currentIndex - 1];
    }

    if (nextTab !== activeTab) {
      setActiveTab(nextTab);
      isScrolling.current = true;
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  }, [activeTab]);

  const handleWheel = useCallback((e) => {
    changeTab(e.deltaY, e.target);
  }, [changeTab]);

  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.targetTouches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    touchEndY.current = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY.current; 
    changeTab(deltaY, e.target);
  }, [changeTab]);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd]);

  return (
    <div 
      className="relative h-[100dvh] w-full bg-[#0A192F] text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#0A192F]/85 to-[#0A192F]/95 z-0"></div>

      <div 
        onClick={() => setActiveTab("Home")}
        className="fixed top-8 left-6 md:left-10 z-[110] flex flex-col items-center gap-1 group cursor-pointer"
      >
        <img
          src="/logo.png"
          alt="Sadev Group Logo"
          className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/70">
          Sadev Group
        </span>
        <div className="w-8 h-[3px] bg-[#F2A900] rounded-full mt-1 group-hover:w-full transition-all duration-500"></div>
      </div>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100vh" }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 h-full w-full"
        >
          {activeTab === "Home" && (
            <div className="h-full w-full overflow-y-auto allow-scroll pt-28 md:pt-5">
              <HomeSection setActiveTab={setActiveTab} />
            </div>
          )}

          {activeTab === "Services" && (
            <div className="h-full w-full overflow-y-auto allow-scroll pt-28 md:pt-32">
              <ServicesSection setActiveTab={setActiveTab} />
            </div>
          )}

          {activeTab === "Our Work" && (
            <div className="h-full w-full overflow-y-auto allow-scroll pt-28 md:pt-32">
              <OurWorkSection />
            </div>
          )}

          {activeTab === "About" && (
            <div className="h-full w-full overflow-y-auto allow-scroll pt-28 md:pt-32">
              <AboutSection />
            </div>
          )}

          {activeTab === "Contact" && (
            <div className="h-full w-full overflow-y-auto allow-scroll pt-28 md:pt-32">
              <ContactSection setActiveTab={setActiveTab} />
              <Footer />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
