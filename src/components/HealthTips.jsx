import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const HealthTips = () => {
  const tips = [
    { title: "Hydration", text: "Drink at least 3L of water daily to maintain kidney health and energy levels." },
    { title: "Heart Care", text: "30 mins of brisk walking daily reduces heart attack risk by over 20%." },
    { title: "Diabetes", text: "Avoid processed sugar after 7 PM to help stabilize overnight insulin levels." },
    { title: "Sleep", text: "7-8 hours of sleep is crucial for immunity. Try to sleep by 11 PM." },
    { title: "Eye Strain", text: "Follow the 20-20-20 rule: Every 20 mins, look at something 20 feet away for 20 secs." }
  ];

  return (
    <section id="tips">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Daily Health Tips</h2>
        <p>Simple changes for a healthier life.</p>
      </div>
      
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: '3rem' }}
      >
        {tips.map((tip, index) => (
          <SwiperSlide key={index}>
            <div className="tip-card" style={{ height: '200px' }}> {/* Fixed height for alignment */}
              <h4>💡 {tip.title}</h4>
              <p style={{ fontSize: '0.95rem', color: '#475569' }}>{tip.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HealthTips;