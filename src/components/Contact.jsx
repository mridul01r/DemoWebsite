import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ paddingBottom: '6rem' }}>
      <div className="contact-modern-wrapper">
        
        {/* Decorative Background Element */}
        <div className="contact-bg-pattern"></div>

        <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 2 }}>
          <h2>Request an Appointment</h2>
          <p style={{ color: 'var(--primary-soft)' }}>
            Fill out the form below and our staff will confirm your slot via WhatsApp.
          </p>
        </div>

        <div className="contact-form-card">
          <form>
            <div className="form-grid-2">
              <div className="input-group">
                <label>Patient Name</label>
                <input type="text" placeholder="Ex: Rahul Sharma" className="modern-input" />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" className="modern-input" />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="input-group">
                <label>Preferred Date</label>
                <input type="date" className="modern-input" />
              </div>
              <div className="input-group">
                <label>Time Slot</label>
                <select className="modern-input">
                  <option>Morning (10-2)</option>
                  <option>Evening (5-9)</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Reason for Visit</label>
              <textarea rows="3" placeholder="Briefly describe symptoms (e.g. Fever, Checkup)" className="modern-input"></textarea>
            </div>

            <button type="button" className="btn btn-primary btn-block">
              Confirm Appointment Request
            </button>
            
            <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: '1rem', opacity: 0.7 }}>
              * We respect your privacy. Your details are safe with us.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;