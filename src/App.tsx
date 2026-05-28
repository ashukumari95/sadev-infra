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

export default function App() {
  const getInitialTab = () => {
    const hash = decodeURIComponent(window.location.hash.replace('#', ''));
    return tabsOrder.includes(hash) ? hash : "Home";
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);
  const isScrolling = useRef(false);

  // 👉 Mobile Swipe Variables
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  // URL Hash Sync for Browser Back Button
  useEffect(() => {
    const currentHash = decodeURIComponent(window.location.hash.replace('#', ''));
    if (currentHash !== activeTab) {
      window.history.pushState(null, "", `#${activeTab}`);
    }
  }, [activeTab]);

  useEffect(() => {
    const handlePopState = () => {
      const hash = decodeURIComponent(window.location.hash.replace('#', ''));
      if (tabsOrder.includes(hash)) {
        setActiveTab(hash);
      } else if (!hash) {
        setActiveTab("Home");
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // 👉 Common Tab Change Logic
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

  // Desktop Mouse Wheel Handler
  const handleWheel = useCallback((e) => {
    changeTab(e.deltaY, e.target);
  }, [changeTab]);

  // 👉 Mobile Touch Start Handler
  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.targetTouches[0].clientY;
  }, []);

  // 👉 Mobile Touch End Handler
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
      // Sadev Navy Blue Background applied here
      className="relative h-[100dvh] w-full bg-[#0A192F] text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Sadev Theme Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#0A192F]/85 to-[#0A192F]/95 z-0"></div>

      {/* 🔴 YAHAN THI PINK LINE - FIXED TO SADEV GOLD 🔴 */}
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
        {/* Ye wali line pink/purple thi, isko pure Solid Gold kar diya gaya hai */}
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
