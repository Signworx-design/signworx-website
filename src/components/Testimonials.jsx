import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Client Notes</span>
          <h2>TRUSTED FOR SIGNAGE THAT HAS TO LOOK RIGHT</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card reveal" key={testimonial.company}>
              <p>"{testimonial.quote}"</p>
              <strong>{testimonial.company}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
