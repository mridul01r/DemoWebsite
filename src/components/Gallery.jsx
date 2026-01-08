import React from 'react';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80", // Waiting Area
    "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=600&q=80", // Consultation Room
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80", // Lab
    "https://images.unsplash.com/photo-1516549655169-df83a0929519?auto=format&fit=crop&w=600&q=80"  // Equipment
  ];

  return (
    <section id="gallery" style={{ background: '#F8FAFC' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Clinic Gallery</h2>
        <p>A look inside our modern, hygienic facility.</p>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Clinic View ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;