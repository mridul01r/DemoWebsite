import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to handle navigation
  const handleNav = (id) => {
    setIsOpen(false); // Close mobile menu
    
    if (location.pathname !== '/') {
      // If we are NOT on Home, go to Home first
      navigate('/');
      // Wait a tiny bit for page to load, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If we are ALREADY on Home, just scroll
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleNav('root')} style={{ cursor: 'pointer' }}>
          Dr. Rakhecha
        </div>
        
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {/* Note: We use buttons/spans instead of <a> to control logic */}
          <span onClick={() => handleNav('root')} className="nav-item">Home</span>
          <span onClick={() => handleNav('about')} className="nav-item">About</span>
          <span onClick={() => handleNav('services')} className="nav-item">Treatments</span>
          <span onClick={() => handleNav('clinic-info')} className="nav-item">Clinic Info</span>
          
          <button 
            className="btn btn-primary" 
            onClick={() => handleNav('contact')}
            style={{ marginLeft: '1rem' }}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;