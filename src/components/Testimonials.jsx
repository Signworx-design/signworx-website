import { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section section-testimonials">
      <div className="container section-head">
        <span className="section-label">TESTIMONIALS</span>
        <h2>Trusted by industry leaders</h2>
      </div>

      <div className="container">
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="quote-mark">"</div>
              <p>{testimonial.quote}</p>
              <span className="client-name">- {testimonial.author}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
