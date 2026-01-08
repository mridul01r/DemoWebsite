import React from 'react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919876543210?text=Hello%20Dr.%20Rakhecha%2C%20I%20want%20to%20book%20an%20appointment." 
      target="_blank" 
      rel="noreferrer"
      className="whatsapp-float"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="Chat on WhatsApp" 
        style={{ width: '35px', height: '35px' }}
      />
      <span className="whatsapp-text">Chat with us</span>
    </a>
  );
};

export default FloatingWhatsApp;