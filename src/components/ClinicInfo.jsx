import React from 'react';

const ClinicInfo = () => {
  return (
    <section id="clinic-info">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Visit the Clinic</h2>
        <p style={{ color: 'var(--primary-soft)' }}>Accessible, modern, and always open for you.</p>
      </div>

      <div className="clinic-wrapper">
        
        {/* Left: Info Card (Clean Design) */}
        <div className="clinic-card-clean">
          
          <div className="info-row">
            <div className="icon-box">📍</div>
            <div>
              <h3>Location</h3>
              <p>Shop 4, Civil Lines Main Road,<br/>Near City Gardens, Madhya Pradesh - 462001</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="info-row">
            <div className="icon-box">🕒</div>
            <div style={{ width: '100%' }}>
              <h3>OPD Hours</h3>
              <ul className="clean-time-list">
                <li>
                  <span>Mon - Sat</span>
                  <strong>10:00 AM - 2:00 PM</strong>
                </li>
                <li>
                  <span>Evening</span>
                  <strong>5:00 PM - 9:00 PM</strong>
                </li>
                <li style={{ color: '#EF4444' }}>
                  <span>Sunday</span>
                  <strong>Closed</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="action-buttons">
            <a href="tel:+919876543210" className="btn-call">
              📞 Call Reception
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-directions">
              🗺️ Open in Maps
            </a>
          </div>

        </div>

        {/* Right: Map */}
        <div className="map-frame-clean">
          <iframe 
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.257088923053!2d77.43265431535792!3d23.23372998484646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42691e32d431%3A0x62663969199be320!2sCivil%20Lines%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1679901234567!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ClinicInfo;