import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="about-grid">
        {/* Left: Professional Image */}
        <img 
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" 
          alt="Dr. Rakhecha Consulting" 
          className="about-img"
        />

        {/* Right: Concise Bio */}
        <div className="about-content">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            More Than Just a Prescription.
          </h2>
          <p style={{ color: '#64748B', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Dr. Rakhecha believes in treating the person, not just the disease. 
            With over 15 years of clinical experience, he combines advanced medical 
            protocols with a supportive, patient-first environment.
          </p>

          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Our Standards of Care:</h3>
          <ul className="feature-list">
            <li>Evidence-Based Medicine</li>
            <li>Digital Health Records</li>
            <li>Minimal Waiting Time</li>
            <li>24/7 Emergency Support</li>
            <li>Pediatric Friendly</li>
            <li>In-House Diagnostics</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;