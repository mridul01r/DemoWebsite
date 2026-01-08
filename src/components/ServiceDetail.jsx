import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../servicesData';

const ServiceDetail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const service = services.find(s => s.id === id); // Find the matching data

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) return <div style={{ padding: '5rem', textAlign: 'center' }}>Service not found</div>;

  return (
    <div className="service-detail-page">
      <div className="detail-header">
        <span style={{ fontSize: '4rem', display: 'block' }}>{service.icon}</span>
        <h1>{service.title}</h1>
      </div>

      <div className="detail-content">
        <h2>Overview</h2>
        <p>{service.long}</p>
        
        <div style={{ marginTop: '2rem', padding: '2rem', background: '#F0FDFA', borderRadius: '12px', border: '1px solid #CCFBF1' }}>
          <h3>Need this treatment?</h3>
          <p>Book a consultation today to discuss your specific needs.</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <a href="#contact" className="btn btn-primary">Book Appointment</a>
            <Link to="/" className="btn btn-outline">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;