import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      {/* Honour the visitor's reduced-motion preference for every framer-motion animation */}
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only z-[70] bg-charcoal px-5 py-3 text-sm text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main" className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </Router>
  );
}

export default App;
