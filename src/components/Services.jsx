import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../servicesData'; // Import centralized data

const Services = () => {
  return (
    <section id="services">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Medical Services</h2>
        <p>Comprehensive care tailored to your needs.</p>
      </div>

      <div className="services-grid">
        {services.map((item) => (
          <div key={item.id} className="card-hover">
            <span className="service-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p style={{ marginBottom: '1.5rem' }}>{item.short}</p>
            
            {/* The "Know More" Link */}
            <Link to={`/service/${item.id}`} className="read-more-link">
              Know More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;