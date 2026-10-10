import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Collections from '../pages/Collections';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

// Scroll to top on route change, or to the matching section when the URL has a #hash
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      {/* Gentle fade on every page change */}
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </>
  );
}
