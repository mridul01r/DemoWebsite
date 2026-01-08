import React from 'react';
// 1. Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// 2. Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const reviews = [
    { name: "Suresh Raina", text: "Dr. Rakhecha is incredibly patient. He explained my diagnosis clearly and didn't rush the appointment.", rating: "★★★★★" },
    { name: "Anjali Mehta", text: "Best clinic in the city. The staff is polite, and the vibe is very positive. Highly recommended for diabetes care.", rating: "★★★★★" },
    { name: "Rahul Verma", text: "I visited for my father's heart checkup. Very professional and detailed approach. We felt very safe.", rating: "★★★★★" },
    { name: "Priya Sharma", text: "The online booking via WhatsApp was so easy. No waiting in long lines. Modern and efficient.", rating: "★★★★★" },
    { name: "Vikram Singh", text: "Finally found a doctor who listens. Dr. Rakhecha helped me reverse my fatty liver with just diet changes.", rating: "★★★★★" }
  ];

  return (
    <section id="testimonials" style={{ background: '#F8FAFC' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Patient Stories</h2>
        <p>Read what our community says about their experience.</p>
      </div>

      {/* 3. The Slider Component */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1} // Default: Show 1 card
        loop={true}       // Infinite Loop
        autoplay={{
          delay: 3500,    // Move every 3.5 seconds
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }} // Little dots at bottom
        breakpoints={{
          768: { slidesPerView: 2 }, // Tablets: Show 2 cards
          1024: { slidesPerView: 3 }, // Desktop: Show 3 cards
        }}
        style={{ paddingBottom: '3rem' }} // Space for dots
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card" style={{ height: '100%' }}>
              <div className="stars">{review.rating}</div>
              <p className="review-text">"{review.text}"</p>
              <h4 className="review-author">— {review.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;