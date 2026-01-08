import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      {/* LEFT: Concise Content */}
      <div className="hero-content">
        <div style={{ 
          display: 'inline-block', 
          background: '#EFF6FF', 
          color: '#1E40AF', 
          fontSize: '0.8rem', 
          fontWeight: '600', 
          padding: '4px 12px', 
          borderRadius: '50px',
          marginBottom: '1rem'
        }}>
          New Patients Welcome
        </div>

        <h1>
          Modern Medicine. <br />
          Old-Fashioned Care.
        </h1>
        
        <p>
          Dr. Rakhecha provides comprehensive care with a focus on prevention.
          No over-prescription, just evidence-based treatments for your family.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {/* Main CTA */}
          <a href="#contact" className="btn btn-primary">
            Book Appointment
          </a>
          
          {/* Secondary Link */}
          <a href="#services" style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: '500' }}>
            View Treatments &darr;
          </a>
        </div>
        
        {/* Trust Signals */}
        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2rem', borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem' }}>
          <div>
            <strong style={{ display: 'block', fontSize: '1.2rem', color: '#0B2545' }}>15+</strong>
            <span style={{ fontSize: '0.8rem', color: '#64748B' }}>Years Exp.</span>
          </div>
          <div>
            <strong style={{ display: 'block', fontSize: '1.2rem', color: '#0B2545' }}>4.9</strong>
            <span style={{ fontSize: '0.8rem', color: '#64748B' }}>Patient Rating</span>
          </div>
        </div>
      </div>

      {/* RIGHT: Image Container with Overlay Badge */}
      <div className="hero-image-container">
        <img 
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Dr Rakhecha Portrait" 
          className="hero-img"
        />
        
        {/* Compact Floating Card - FORCED INSIDE VIA CSS */}
        <div className="stat-card">
          <div style={{ 
            background: '#0D9488', // Solid Teal Circle
            width: '32px', 
            height: '32px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'white',
            fontSize: '0.9rem'
          }}>
            ✔
          </div>
          <div>
            <strong style={{ display: 'block', fontSize: '0.85rem', color: '#0F172A' }}>Verified Doctor</strong>
            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>IMA Registered</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;