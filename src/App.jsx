import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Existing Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ServiceDetail from './components/ServiceDetail';

// NEW COMPONENTS
import ClinicInfo from './components/ClinicInfo';
import Gallery from './components/Gallery';
import HealthTips from './components/HealthTips';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <ClinicInfo />  {/* Added Clinic Info (Map/Timings) */}
              <Gallery />     {/* Added Gallery */}
              <HealthTips />  {/* Added Health Tips */}
              <Testimonials />
              <Contact />
            </>
          } />

          <Route path="/service/:id" element={
            <>
              <ServiceDetail />
              <Contact /> 
            </>
          } />
        </Routes>
        
        {/* Floating Button stays on all pages */}
        <FloatingWhatsApp />

        <footer>
          <p>&copy; 2026 Dr. Mridul Rakhecha. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;